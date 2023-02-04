import React, { ChangeEvent } from "react";

import { useAuth } from "@/context/auth";
import { Heading, Text, TextProps } from "@chakra-ui/react";

import { TextareaAutoResize } from "../TextareaAutoResize";

interface EditableTextProps extends TextProps {
  element: "Heading" | "Text";
  handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  textValue?: string;
}

export const EditableText = ({ element, handleChange, textValue, ...props }: EditableTextProps) => {
  const { authenticated } = useAuth();

  const renderElement = {
    Heading: <Heading {...props}>{textValue}</Heading>,
    Text: <Text {...props}>{textValue}</Text>,
  };

  return <>{authenticated ? <TextareaAutoResize onChange={handleChange} value={textValue} /> : renderElement[element]}</>;
};
