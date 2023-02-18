import React from "react";

import { CustomSpace } from "@/components/CustomSpace";
import { EditableText } from "@/components/EditableText";
import { PreviewPDF } from "@/components/PreviewPDF";
import { useAuth } from "@/context/auth";
import { TricksPreviewOutput } from "@/mocks/mockedTricks";
import { Flex, Heading, VStack, Text, Img, Box, Button } from "@chakra-ui/react";

interface TricksPreviewContentProps {
  content: TricksPreviewOutput[0];
  order: number;
  handleChangeTitle?: (text: string, position: number | null) => void;
  sendData?: () => void;
}

export const TricksPreviewContent = ({ content, order, handleChangeTitle, sendData }: TricksPreviewContentProps) => {
  const { authenticated } = useAuth();

  const editing = authenticated && handleChangeTitle != null;

  return (
    <Box
      w="100%"
      _last={{ mt: 56 }}
      border={authenticated ? "1px dashed #ccc" : "none"}
      textAlign={order == 0 ? "left" : "right"}>
      <Flex w="100%" align="center" justify="space-between">
        <VStack gap={20} w="42%" order={order}>
          <Flex direction="column" align="center">
            {editing ? (
              <EditableText
                p={0}
                textAlign="center"
                fontWeight={800}
                fontSize={{ lg: "4.5rem", xl: "5rem" }}
                textValue={content.title}
                handleChange={handleChangeTitle}
                element="Heading"
                positionValue={order}
              />
            ) : (
              <Heading color="black" fontSize={{ lg: "4.5rem", xl: "5rem" }}>
                {content.title}
              </Heading>
            )}
            <Text fontSize={{ lg: "2.4rem", xl: "2.7rem" }}>{content.revue}</Text>
            <Text fontSize={{ lg: "1.7rem", xl: "2rem" }} mt={3}>
              {content.edition}
            </Text>
          </Flex>

          <CustomSpace px={7}>
            <Img src={content.logo} alt="logo revista regional (Regional)" w={{ lg: "250px", xl: "280px" }} />
          </CustomSpace>
        </VStack>

        <PreviewPDF w="58%" overflow="auto" maxH="580px" file={content.revuePreview} pages={2} />
      </Flex>

      <Button onClick={sendData}>Salvar</Button>
    </Box>
  );
};
