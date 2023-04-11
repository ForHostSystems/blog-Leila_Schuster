import React from "react";

import { CustomSpace } from "@/components/CustomSpace";
import { PreviewPDF } from "@/components/PreviewPDF";
import { mockedTrics } from "@/mocks/mockedTricks";
import { Box, Center, Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";

export const TricksContent = () => {
  return (
    <>
      {mockedTrics.map((value, index) => (
        <Flex key={index} direction="column" align="center" w="100%" mt={52} _first={{ mt: 0 }}>
          <Flex justify="space-between" bg="whte" gap={5}>
            <Img
              src={value.imagem1_url}
              alt="capa de uma revista com a Leila Schuster"
              w={{ lg: "450px", xl: "600px" }}
              order={index % 2 == 0 ? 0 : 1}
            />

            <Flex align="start">
              <Img
                src={value.imagem2_url}
                alt="capa de uma revista com a Leila Schuster"
                w={{ lg: "150px", xl: "250px" }}
                h="auto"
                order={index % 2 == 0 ? 0 : 1}
              />
              <VStack gap={4}>
                <Center flexDirection="column" w={{ lg: "360px", xl: "530px" }} py={2} bg="gray-m">
                  <Box>
                    <Heading color="white" fontSize={{ lg: "2.5rem", xl: "3.8rem" }}>
                      {value.title}
                    </Heading>
                    <Text color="white" fontSize={{ lg: "1.5rem", xl: "2.4rem" }} fontWeight={400}>
                      {value.revue}
                    </Text>
                  </Box>
                </Center>
                <Text
                  maxW={{ lg: "280px", xl: "410px" }}
                  fontSize={{ lg: "1.1rem", xl: "1.5rem" }}
                  alignSelf={index % 2 == 0 ? "end" : "start"}
                  textAlign={index % 2 == 0 ? "left" : "right"}
                  lineHeight="1.4rem">
                  {value.description}
                </Text>
              </VStack>
            </Flex>
          </Flex>

          <PreviewPDF w="80%" overflow="auto" maxH="630px" mt={40} file={value.arquivo_url} pages={1} />

          <Flex align="center" gap={20} mt={20}>
            <Text fontSize={{ lg: "1.7rem", xl: "2rem" }}>{value.edition}</Text>
            <CustomSpace px={7}>
              <Img src={value.revue_imagem_url} alt="logo revista regional (Regional)" w={{ lg: "250px", xl: "280px" }} />
            </CustomSpace>
          </Flex>
        </Flex>
      ))}
    </>
  );
};
