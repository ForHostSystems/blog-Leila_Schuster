import React from "react";

import { mockedPartners } from "@/mocks/mockedPartners";
import { Flex, HStack, Img, keyframes, VStack } from "@chakra-ui/react";

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 2));
  }
`;

export const ScrollingAnimation = () => {
  return (
    <VStack w="90%" justify="center" align="center" m="auto" pos="relative" overflow="hidden">
      <Flex w="calc(250px * 8)" animation={`${slideAnimation} 5s linear infinite`}>
        {mockedPartners.map((value, index) => (
          <HStack w="250px" p="10px" key={index}>
            <Img w="100%" src={value.imagem_url} />
          </HStack>
        ))}
      </Flex>
    </VStack>
  );
};
