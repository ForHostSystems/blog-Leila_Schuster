import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { Flex, Heading, Img, VStack, Text, Box } from "@chakra-ui/react";

import logoLS from "../../assets/logo-LS.png";
import { mockedTrics } from "../../mocks/mockedTricks";
import { Title } from "../Title";

import "./styles.css";

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Tricks = () => {
  return (
    <VStack as="section" align="start" mt={28} w="100%">
      <Flex mb={20}>
        <Title dashWidth="48px" as="h1" fontSize="6rem" fontWeight={900} ml="4px">
          Dicas
        </Title>
        <Img src={logoLS} alt="Logo Leila Schuster (LS)" w="250px" ml={-10} />
      </Flex>
      {mockedTrics.map((value, index) => (
        <Flex w="100%" align="center" key={index} _last={{ mt: 56 }}>
          <VStack gap={20} w="42%" order={index}>
            <Flex direction="column" align="center">
              <Heading color="black" fontSize="5rem">
                {value.title}
              </Heading>
              <Text fontSize="2.7rem">{value.revue}</Text>
              <Text fontSize="2rem" mt={3}>
                {value.edition}
              </Text>
            </Flex>

            <Box px={7} pos="relative">
              <Box
                as="span"
                w="40px"
                h="2px"
                bg="blackAlpha.500"
                pos="absolute"
                left={0}
                top={0}
                _before={{ content: '""', pos: "absolute", left: 0, top: 0, w: "2px", h: "40px", bg: "blackAlpha.500" }}
              />
              <Box
                as="span"
                w="40px"
                h="2px"
                bg="blackAlpha.500"
                pos="absolute"
                right={0}
                bottom={0}
                _before={{ content: '""', pos: "absolute", right: 0, bottom: 0, w: "2px", h: "40px", bg: "blackAlpha.500" }}
              />
              <Img src={value.logo} alt="logo revista regional (Regional)" w="280px" />
            </Box>
          </VStack>

          <Flex
            w="58%"
            justify={index === 0 ? "end" : "start"}
            overflow="auto"
            maxH="580px"
            css={{
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#cfcfcf",
                borderRadius: "24px",
              },
            }}>
            <Document file={value.revuePreview} options={{ workerSrc: "pdf.worker.js" }}>
              {Array.from(new Array(2), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </Flex>
        </Flex>
      ))}
    </VStack>
  );
};
