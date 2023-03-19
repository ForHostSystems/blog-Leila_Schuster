import React, { ChangeEvent, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

import { useAuth } from "@/context/auth";
import { Button, Flex, FormLabel, HStack, Img, ImgProps } from "@chakra-ui/react";

import { PreviewPDF } from "../PreviewPDF";

interface LabelForFileProps extends ImgProps {
  file: string;
  labelRef: string;
  labelWidth?: string;
  mainWidth?: string;
  imageKey: string;
  onSaveImage: (file: File, imageKey: string, position: number | null) => void;
  accept?: string;
  positionValue?: number | null;
  pages?: number;
}

export const LabelForFile = ({
  file,
  labelWidth,
  mainWidth,
  labelRef,
  imageKey,
  onSaveImage,
  accept = "image/*",
  positionValue = null,
  pages = 0,
  ...props
}: LabelForFileProps) => {
  const { authenticated } = useAuth();
  const [showFile, setShowFile] = useState(file);
  const [previewFile, setPreviewFile] = useState<File | null>(null);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files != null) {
      setPreviewFile(e.target.files[0]);
      e.target.value = "";
    }
  };

  const onSave = () => {
    if (previewFile != null) {
      setShowFile(URL.createObjectURL(previewFile));
      onSaveImage(previewFile, imageKey, positionValue);
      setPreviewFile(null);
    }
  };

  return (
    <Flex direction="column" w={mainWidth}>
      <FormLabel w={labelWidth} as="label" htmlFor={labelRef} cursor="pointer">
        {accept == "image/*" ? (
          <Img
            {...props}
            src={previewFile != null ? URL.createObjectURL(previewFile) : showFile}
            border={authenticated ? "1px dashed #777" : ""}
            p="0.125rem"
          />
        ) : accept == "application/pdf" ? (
          <PreviewPDF file={previewFile != null ? URL.createObjectURL(previewFile) : showFile} pages={pages} {...props} />
        ) : null}
        <input id={labelRef} type="file" accept={accept} hidden disabled={!authenticated} onChange={onChangeImage} />
      </FormLabel>
      {authenticated && previewFile != null && (
        <HStack alignSelf="end">
          <Button onClick={() => setPreviewFile(null)}>
            <RiCloseLine color="#f00" size="2rem" />
          </Button>
          <Button onClick={onSave}>
            <AiOutlineCheck color="#0f0" size="2rem" />
          </Button>
        </HStack>
      )}
    </Flex>
  );
};
