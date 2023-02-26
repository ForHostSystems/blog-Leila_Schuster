import React, { useState } from "react";

import { CustomSpace } from "@/components/CustomSpace";
import { EditableText } from "@/components/EditableText";
import { LabelForFile } from "@/components/LabelForFile";
import { useAuth } from "@/context/auth";
import { TricksPreviewOutput } from "@/mocks/mockedTricks";
import { Flex, VStack, Box, Button, HStack } from "@chakra-ui/react";

interface TricksPreviewContentProps {
  content: TricksPreviewOutput[0];
  order: number;
  handleChangeText: (text: string, position: number | null, field: string) => void;
  handleChangeImage: (image: File, imageKey: string, position: number | null) => void;
  sendData: (position: number) => void;
  isLoading: boolean;
}

export const TricksPreviewContent = ({
  content,
  order,
  handleChangeText,
  handleChangeImage,
  sendData,
  isLoading,
}: TricksPreviewContentProps) => {
  const { authenticated } = useAuth();
  const [selectedOption, setSelectedOption] = useState<"pdf" | "video">("pdf");

  return (
    <Box w="100%" _last={{ mt: 56 }} border={authenticated ? "1px dashed #777" : ""}>
      {authenticated && (
        <HStack mb={5}>
          <Button onClick={() => setSelectedOption("pdf")} colorScheme={selectedOption == "pdf" ? "blackAlpha" : "gray"}>
            PDF
          </Button>
          <Button onClick={() => setSelectedOption("video")} colorScheme={selectedOption == "video" ? "blackAlpha" : "gray"}>
            Video
          </Button>
        </HStack>
      )}
      <Flex w="100%" align="center" justify="space-between">
        <VStack gap={20} w="42%" order={order}>
          <Flex direction="column" align="center">
            <EditableText
              p={0}
              textAlign="center"
              fontWeight={800}
              fontSize={{ lg: "4.5rem", xl: "5rem" }}
              textValue={content.title}
              handleChange={handleChangeText}
              element="Heading"
              positionValue={order}
              field="title"
            />
            <EditableText
              element="Text"
              fontSize={{ lg: "2.4rem", xl: "2.7rem" }}
              textAlign="center"
              textValue={content.revue}
              handleChange={handleChangeText}
              positionValue={order}
              field="revue"
            />
            <EditableText
              element="Text"
              fontSize={{ lg: "1.7rem", xl: "2rem" }}
              mt={3}
              textAlign="center"
              textValue={content.edition}
              handleChange={handleChangeText}
              positionValue={order}
              field="edition"
            />
          </Flex>

          <CustomSpace px={7}>
            <LabelForFile
              file={content.imagem_url}
              labelRef={`logo-revista-${order}`}
              alt="logo revista"
              w={{ lg: "250px", xl: "280px" }}
              imageKey="imagem_url"
              positionValue={order}
              onSaveImage={handleChangeImage}
            />
          </CustomSpace>
        </VStack>

        <LabelForFile
          file={content.arquivo_url}
          pages={2}
          labelRef={`pdf-${order}`}
          accept="application/pdf"
          positionValue={order}
          imageKey="arquivo_url"
          onSaveImage={handleChangeImage}
          w="100%"
          mainWidth="58%"
          labelWidth="100%"
          overflow="auto"
          maxH="580px"
        />
      </Flex>
      {authenticated && (
        <Button onClick={() => sendData(order)} colorScheme="green" mt={5} isLoading={isLoading}>
          Salvar
        </Button>
      )}
    </Box>
  );
};
