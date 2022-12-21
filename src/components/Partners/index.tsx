import React from "react";

import { Box, Flex, HStack, Img, keyframes, VStack } from "@chakra-ui/react";

import { mockedPartners } from "../../mocks/mockedPartners";
import { Title } from "../Title";

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 2));
  }
`;

export const Partners = () => {
  return (
    <Box mt={52} w="100%">
      <Title dashWidth="48px" as="h1" fontSize="6rem" fontWeight={900} color="black" ml="4px">
        Parceiros
      </Title>

      <VStack w="90%" justify="center" align="center" m="auto" pos="relative" overflow="hidden">
        <Flex w="calc(250px * 8)" animation={`${slideAnimation} 5s linear infinite`}>
          {mockedPartners.map((value, index) => (
            <HStack w="250px" p="10px" key={index}>
              <Img w="100%" src={value} />
            </HStack>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};
