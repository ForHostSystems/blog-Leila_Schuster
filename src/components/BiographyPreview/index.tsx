import React from "react";

import { Flex, HStack, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import imageBioBottom from "../../assets/image-bio-bottom.png";
import imageBioTop from "../../assets/image-bio-top.png";
import { Title } from "../Title";

export const BiographyPreview = () => {
  return (
    <SimpleGrid as="section" id="biografia" columns={2} spacing={5} w="100%" mt={10}>
      <Stack gap="15px">
        <Img src={imageBioTop} maxW="712.55px" />
        <Img src={imageBioBottom} maxW="712.55px" />
      </Stack>
      <HStack w="100%" align="start" justify="end">
        <Stack w="90%" gap={10} mt={10}>
          <Title dashWidth="50px" dashDistance={3} as="h1" fontSize="7rem" lineHeight="6rem" fontWeight={900} ml="10px">
            Sobre
            <br />
            mim
          </Title>
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
