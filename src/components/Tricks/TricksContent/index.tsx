import React from "react";

import { CustomSpace } from "@/components/CustomSpace";
import { PreviewPDF } from "@/components/PreviewPDF";
import { mockedTrics } from "@/mocks/mockedTricks";
import { Box, Center, Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";

export const TricksContent = () => {
  return (
    <Center flexDirection="column" w="100%" mt={10} mb={52}>
      {mockedTrics.map((value, index) => (
        <>
          <Flex justify="space-between" bg="whte" gap={5} mt={60} _first={{ mt: 0 }}>
            <Img src={value.cover} alt="capa de uma revista com a Leila Schuster" w="600px" order={index % 2 == 0 ? 0 : 1} />

            <Flex align="start">
              <Img src={value.photo} alt="capa de uma revista com a Leila Schuster" w="250px" h="auto" />
              <VStack gap={4}>
                <Box px="7rem" py={2} bg="gray-m">
                  <Heading color="white" fontSize="4.7rem">
                    {value.title}
                  </Heading>
                  <Text color="white" fontSize="2.67rem" fontWeight={400}>
                    {value.subtitle}
                  </Text>
                </Box>
                <Text maxW="410px" fontSize="1.5rem" alignSelf="end" lineHeight="1.4rem">
                  {value.description}
                </Text>
              </VStack>
            </Flex>
          </Flex>

          <PreviewPDF w="80%" overflow="auto" maxH="630px" mt={40} file={value.pdf} pages={1} />

          <Flex align="center" gap={20} mt={20}>
            <Text fontSize={{ lg: "1.7rem", xl: "2rem" }}>{value.edition}</Text>
            <CustomSpace px={7}>
              <Img src={value.logo} alt="logo revista regional (Regional)" w={{ lg: "250px", xl: "280px" }} />
            </CustomSpace>
          </Flex>
        </>
      ))}
    </Center>
  );
};
