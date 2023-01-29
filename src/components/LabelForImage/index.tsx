import React, { ChangeEvent, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

import { useAuth } from "@/context/auth";
import { Button, Flex, FormLabel, HStack, Img, ImgProps } from "@chakra-ui/react";

interface LabelForImageProps extends ImgProps {
  image: string;
  labelRef: string;
  labelWidth?: string;
}

export const LabelForImage = ({ image, labelWidth, labelRef, ...props }: LabelForImageProps) => {
  const { authenticated } = useAuth();
  const [showImage, setShowImage] = useState(image);
  const [previewImage, setPreviewImage] = useState<File | null>(null);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files != null) {
      setPreviewImage(e.target.files[0]);
      e.target.value = "";
    }
  };

  const onSave = () => {
    if (previewImage != null) {
      setShowImage(URL.createObjectURL(previewImage));
      setPreviewImage(null);
    }
  };

  return (
    <Flex direction="column">
      <FormLabel w={labelWidth} as="label" htmlFor={labelRef} cursor="pointer">
        <Img src={previewImage != null ? URL.createObjectURL(previewImage) : showImage} {...props} />
        <input id={labelRef} type="file" hidden disabled={!authenticated} onChange={onChangeImage} />
      </FormLabel>
      {authenticated && previewImage != null && (
        <HStack alignSelf="end">
          <Button onClick={() => setPreviewImage(null)}>
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
