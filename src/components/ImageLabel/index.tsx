import React, { ChangeEvent, memo } from "react";
import { BiImage } from "react-icons/bi";

import { convertToUrl } from "@/utils/convertToUrl";
import { FormLabel, FormLabelProps, Img } from "@chakra-ui/react";

interface ImageLabelProps extends FormLabelProps {
  previewFile: File | string | null;
  htmlFor: string;
  onChangeImage: (e: ChangeEvent<HTMLInputElement>, image: string) => void;
}

export const ImageLabel = ({ previewFile, htmlFor, onChangeImage, ...props }: ImageLabelProps) => {
  return (
    <FormLabel
      {...props}
      as="label"
      border="1px dashed #777"
      htmlFor={htmlFor}
      cursor="pointer"
      display="flex"
      justifyContent="center"
      alignItems="center">
      {previewFile != null ? (
        <Img w="100%" cursor="pointer" objectFit="cover" alt="" src={convertToUrl(previewFile)} />
      ) : (
        <BiImage size="7rem" color="gray" />
      )}
      <input id={htmlFor} type="file" accept="image/*" hidden onChange={(e) => onChangeImage(e, htmlFor)} />
    </FormLabel>
  );
};

memo(ImageLabel);
