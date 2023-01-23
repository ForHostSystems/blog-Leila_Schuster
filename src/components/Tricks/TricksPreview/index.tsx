import React from "react";

import logoLS from "@/assets/logo-LS.png";
import { CustomSpace } from "@/components/CustomSpace";
import { PreviewPDF } from "@/components/PreviewPDF";
import { Title } from "@/components/Title";
import { mockedTricsPreview } from "@/mocks/mockedTricks";
import { Flex, Heading, Img, VStack, Text } from "@chakra-ui/react";

export const TricksPreview = () => {
  return (
    <VStack as="section" align="start" mt={28} w="100%">
      <Flex mb={20}>
        <Title dashWidth="48px" dashHeigth="7px" as="h1" fontSize="6rem" fontWeight={900} ml="4px">
          Dicas
        </Title>
        <Img src={logoLS} alt="Logo Leila Schuster (LS)" w="130px" ml={6} />
      </Flex>
      {mockedTricsPreview.map((value, index) => (
        <Flex w="100%" align="center" justify="space-between" key={index} _last={{ mt: 56 }}>
          <VStack gap={20} w="42%" order={index}>
            <Flex direction="column" align="center">
              <Heading color="black" fontSize={{ lg: "4.5rem", xl: "5rem" }}>
                {value.title}
              </Heading>
              <Text fontSize={{ lg: "2.4rem", xl: "2.7rem" }}>{value.revue}</Text>
              <Text fontSize={{ lg: "1.7rem", xl: "2rem" }} mt={3}>
                {value.edition}
              </Text>
            </Flex>

            <CustomSpace px={7}>
              <Img src={value.logo} alt="logo revista regional (Regional)" w={{ lg: "250px", xl: "280px" }} />
            </CustomSpace>
          </VStack>

          <PreviewPDF w="58%" overflow="auto" maxH="580px" file={value.revuePreview} pages={2} />
        </Flex>
      ))}
    </VStack>
  );
};
