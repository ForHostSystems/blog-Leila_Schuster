import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import { Textarea, TextareaProps } from "@chakra-ui/react";

export const TextareaAutoResize = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return (
    <Textarea
      colorScheme="blackAlpha"
      overflow="hidden"
      minH="unset"
      w="100%"
      resize="none"
      ref={ref}
      minRows={1}
      as={TextareaAutosize}
      {...props}
    />
  );
});

TextareaAutoResize.displayName = "TextareaAutoResize";
