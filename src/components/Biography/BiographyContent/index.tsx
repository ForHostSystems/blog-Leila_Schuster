import React from "react";

import { EditableText } from "@/components/EditableText";
import { LabelForFile } from "@/components/LabelForFile";
import { useAuth } from "@/context/auth";
import { useBiography } from "@/context/biografia";
import { convertToUrl } from "@/utils/convertToUrl";
import { Box, Button, Divider, Flex, Heading, SimpleGrid, Skeleton, VStack } from "@chakra-ui/react";

export const BiographyContent = () => {
  const { authenticated } = useAuth();
  const { data, handleChange, handleChangeImage, isLoading, isLoadingUpdate, sendData } = useBiography();

  return (
    <SimpleGrid w="100%" columns={2} spacing={14} mt={14} mb={52}>
      <VStack gap={{ lg: 10, xl: 20 }}>
        <Skeleton isLoaded={!isLoading}>
          <LabelForFile
            file={convertToUrl(data.imagem1_url)}
            imageKey="imagem1_url"
            labelRef="imagem1_url"
            onSaveImage={handleChangeImage}
            w="100%"
          />
        </Skeleton>
        <Box>
          <Skeleton isLoaded={!isLoading} mb={8}>
            <Heading as="h3" fontSize="1.7rem" fontWeight={400}>
              HISTÓRIA
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <EditableText
              element="Text"
              handleChange={handleChange}
              field="description1"
              textValue={data.description1}
              fontSize={{ lg: "1rem", xl: "1.4rem" }}
              lineHeight={{ lg: "1rem", xl: "1.4rem" }}
              minW={authenticated ? "23.125rem" : "unset"}
            />
          </Skeleton>
        </Box>
        <Skeleton isLoaded={!isLoading}>
          <LabelForFile
            file={convertToUrl(data.imagem2_url)}
            imageKey="imagem2_url"
            labelRef="imagem2_url"
            onSaveImage={handleChangeImage}
            w="100%"
          />
        </Skeleton>
      </VStack>
      <Flex direction="column" align="start">
        <Skeleton isLoaded={!isLoading} mt={6}>
          <EditableText
            element="Text"
            handleChange={handleChange}
            field="description2"
            textValue={data.description2}
            fontSize={{ lg: "1rem", xl: "1.4rem" }}
            lineHeight={{ lg: "1rem", xl: "1.4rem" }}
            minW={authenticated ? "23.125rem" : "unset"}
            maxW={{ lg: "80%", xl: "75%" }}
          />
        </Skeleton>
        <Skeleton isLoaded={!isLoading} mt={{ lg: "6rem", xl: "9rem" }}>
          <LabelForFile
            file={convertToUrl(data.imagem3_url)}
            imageKey="imagem3_url"
            labelRef="imagem3_url"
            onSaveImage={handleChangeImage}
            w="100%"
          />
        </Skeleton>
        <Box mt="8rem">
          <Divider h="3px" bg="black" />
          <Skeleton isLoaded={!isLoading} mt={10}>
            <EditableText
              element="Text"
              handleChange={handleChange}
              field="description3"
              textValue={data.description3}
              fontSize={{ lg: "1rem", xl: "1.4rem" }}
              lineHeight={{ lg: "1rem", xl: "1.4rem" }}
              minW={authenticated ? "23.125rem" : "unset"}
            />
          </Skeleton>
        </Box>
      </Flex>
      {authenticated && (
        <Button colorScheme="green" onClick={sendData} isLoading={isLoadingUpdate}>
          Salvar
        </Button>
      )}
    </SimpleGrid>
  );
};
