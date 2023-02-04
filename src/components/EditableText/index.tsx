import React from "react";

import { useAuth } from "@/context/auth";
import { Heading, Text, TextProps } from "@chakra-ui/react";

import { TextareaAutoResize } from "../TextareaAutoResize";

interface EditableTextProps extends TextProps {
  element: "Heading" | "Text";
}

export const EditableText = ({ element, ...props }: EditableTextProps) => {
  const { authenticated } = useAuth();

  const renderElement = {
    Heading: <Heading {...props}>{props.children}</Heading>,
    Text: <Text {...props}>{props.children}</Text>,
  };

  return <>{authenticated ? <TextareaAutoResize>{props.children}</TextareaAutoResize> : renderElement[element]}</>;
};
