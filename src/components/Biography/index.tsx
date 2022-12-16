import React from "react";

import { Box, Flex, Heading, HStack, Img, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";

import imageBioBottom from "../../assets/image-bio-bottom.png";
import imageBioTop from "../../assets/image-bio-top.png";

export const Biography = () => {
  return (
    <SimpleGrid id="biografia" columns={2} spacing={5} w="100%" mt={10}>
      <Stack gap="15px">
        <Img src={imageBioTop} maxW="712.55px" />
        <Img src={imageBioBottom} maxW="712.55px" />
      </Stack>
      <HStack w="100%" align="start" justify="end">
        <Stack w="90%" gap={10}>
          <VStack align="start" mt={10}>
            <Box w="70px" h="6px" bg="black" ml="2px" />
            <Heading as="h1" fontSize="7rem" lineHeight="6rem" fontWeight={900}>
              Sobre
              <br />
              mim
            </Heading>
          </VStack>
          <Flex maxW="320px" w="100%" justify="end" alignSelf="end">
            <Text fontSize="18px" fontWeight={500}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in.
            </Text>
          </Flex>
        </Stack>
      </HStack>
    </SimpleGrid>
  );
};
