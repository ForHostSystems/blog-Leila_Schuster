import React from "react";

import { CustomSpace } from "@/components/CustomSpace";
import { EditableText } from "@/components/EditableText";
import { LabelForFile } from "@/components/LabelForFile";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import { useAuth } from "@/context/auth";
import { useTricks } from "@/context/tricks";
import { convertToUrl } from "@/utils/convertToUrl";
import { Box, Button, Center, Flex, VStack } from "@chakra-ui/react";

export const TricksContent = () => {
  const { authenticated } = useAuth();
  const { data, handleChangeImage, handleChangeText, sendData, isLoadingUpdate, isLoadingAdd } = useTricks();

  return (
    <>
      {isLoadingAdd && <LoadingOverlay />}
      {data.map((value, index) => (
        <Flex key={value.id} direction="column" align="center" w="100%" mt={52} _first={{ mt: 0 }}>
          <Flex justify="space-between" bg="whte" gap={5}>
            <LabelForFile
              file={convertToUrl(value.imagem1_url)}
              alt="capa de uma revista com a Leila Schuster"
              w={{ lg: "450px", xl: "600px" }}
              order={index % 2 == 0 ? 0 : 1}
              imageKey="imagem1_url"
              labelRef={`imagem1_url-${index}`}
              onSaveImage={handleChangeImage}
              positionValue={index}
            />

            <Flex align="start">
              <LabelForFile
                file={convertToUrl(value.imagem2_url)}
                alt="capa de uma revista com a Leila Schuster"
                w={{ lg: "150px", xl: "250px" }}
                h="auto"
                order={index % 2 == 0 ? 0 : 1}
                imageKey="imagem2_url"
                labelRef={`imagem2_url-${index}`}
                onSaveImage={handleChangeImage}
                positionValue={index}
              />

              <VStack gap={4}>
                <Center flexDirection="column" w={{ lg: "360px", xl: "530px" }} py={2} bg="gray-m">
                  <Box>
                    <EditableText
                      element="Heading"
                      color="white"
                      fontSize={{ lg: "2.5rem", xl: "3.8rem" }}
                      textAlign="center"
                      field="title"
                      textValue={value.title}
                      positionValue={index}
                      handleChange={handleChangeText}
                    />
                    <EditableText
                      element="Text"
                      color="white"
                      fontSize={{ lg: "1.5rem", xl: "2.4rem" }}
                      fontWeight={400}
                      textAlign="center"
                      field="revue"
                      textValue={value.revue}
                      positionValue={index}
                      handleChange={handleChangeText}
                    />
                  </Box>
                </Center>
                <EditableText
                  element="Text"
                  maxW={{ lg: "280px", xl: "410px" }}
                  fontSize={{ lg: "1.1rem", xl: "1.5rem" }}
                  alignSelf={index % 2 == 0 ? "end" : "start"}
                  textAlign={index % 2 == 0 ? "left" : "right"}
                  lineHeight="1.4rem"
                  field="description"
                  textValue={value.description}
                  positionValue={index}
                  handleChange={handleChangeText}
                />
              </VStack>
            </Flex>
          </Flex>

          <LabelForFile
            mainWidth="80%"
            w="100%"
            overflow="auto"
            maxH="630px"
            mt={40}
            border={authenticated ? "1px dashed #777" : ""}
            file={convertToUrl(value.arquivo_url)}
            pages={1}
            accept="application/pdf"
            imageKey="arquivo_url"
            labelRef={`arquivo_url-${index}`}
            onSaveImage={handleChangeImage}
            positionValue={index}
          />

          <Flex align="center" gap={20} mt={20}>
            <EditableText
              element="Text"
              fontSize={{ lg: "1.7rem", xl: "2rem" }}
              field="edition"
              textValue={value.edition}
              positionValue={index}
              handleChange={handleChangeText}
            />
            <CustomSpace px={7}>
              <LabelForFile
                file={convertToUrl(value.revue_imagem_url)}
                alt="logo revista regional (Regional)"
                w={{ lg: "250px", xl: "280px" }}
                imageKey="revue_imagem_url"
                labelRef={`revue_imagem_url-${index}`}
                onSaveImage={handleChangeImage}
                positionValue={index}
              />
            </CustomSpace>
          </Flex>

          {authenticated && (
            <Button colorScheme="green" mt={20} w="30%" isLoading={isLoadingUpdate} onClick={() => sendData(index)}>
              Salvar
            </Button>
          )}
        </Flex>
      ))}
    </>
  );
};
