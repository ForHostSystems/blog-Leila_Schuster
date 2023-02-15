import React, { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

import { useAuth } from "@/context/auth";
import { Button, Flex, Heading, HStack, Text, TextProps } from "@chakra-ui/react";

import { TextareaAutoResize } from "../TextareaAutoResize";

interface EditableTextProps extends TextProps {
  element: "Heading" | "Text";
  handleChange: (description: string) => void;
  textValue: string;
  isCancel?: boolean;
}

export const EditableText = ({ element, handleChange, textValue, isCancel = false, ...props }: EditableTextProps) => {
  const { authenticated } = useAuth();
  const [description, setDescription] = useState<string>(textValue);
  const [isSaved, setIsSaved] = useState(false);

  const renderElement = {
    Heading: <Heading {...props}>{textValue}</Heading>,
    Text: <Text {...props}>{textValue}</Text>,
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const onSaveDescription = () => {
    setIsSaved(true);
    handleChange(description);
    setTimeout(() => setIsSaved(false), 1000);
  };

  const resetValue = () => {
    setDescription(textValue);
    handleChange(textValue);
  };

  useEffect(() => {
    if (isCancel) {
      setDescription(textValue);
    }
  }, [isCancel, textValue]);

  return (
    <>
      {authenticated ? (
        <Flex direction="column" w="100%">
          <TextareaAutoResize
            border={`${!isSaved ? "1px" : "2px"} ${!isSaved ? "dashed" : "solid"} ${!isSaved ? "#777" : "green"} !important`}
            onChange={onChangeDescription}
            value={description}
          />
          <HStack alignSelf="end">
            <Button onClick={resetValue}>
              <RiCloseLine color="#f00" size="1rem" />
            </Button>
            <Button onClick={onSaveDescription}>
              <AiOutlineCheck color="#0f0" size="1rem" />
            </Button>
          </HStack>
        </Flex>
      ) : (
        renderElement[element]
      )}
    </>
  );
};
