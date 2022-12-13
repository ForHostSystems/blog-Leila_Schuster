import React from "react";

import { Box, Flex, Heading, HStack, Img, Stack, Text, VStack } from "@chakra-ui/react";

import bannerHome from "../../assets/banner-home.png";
import imageBioBottom from "../../assets/image-bio-bottom.png";
import imageBioTop from "../../assets/image-bio-top.png";
import logoHome from "../../assets/logo-home.png";
import { Caroussel } from "../../components/Caroussel";
import { Layout } from "../../components/Layout";
import { Navegation } from "../../components/Navegation";

export function Home() {
  return (
    <Layout>
      <HStack id="home" w="100%" h="calc(100vh - 20px)">
        <Img src={bannerHome} h="100%" />
        <Stack w="100%" h="100%" direction="column" justify="space-between" alignItems="center">
          <Navegation />
          <Img src={logoHome} />
          <Box visibility="hidden" />
        </Stack>
      </HStack>
      <HStack id="biografia" justify="space-between" align="start" w="100%" mt={10}>
        <Stack gap="15px">
          <Img src={imageBioTop} maxW="712.55px" />
          <Img src={imageBioBottom} maxW="712.55px" />
        </Stack>
        <Stack w="34%" gap={10} mt={20}>
          <VStack align="start">
            <Box w="40px" h="6px" bg="black" ml="2px" />
            <Heading as="h1" fontSize="4.5rem" lineHeight="4rem" fontWeight={900}>
              Sobre
              <br />
              mim
            </Heading>
          </VStack>
          <Flex maxW="280px" w="100%" justify="end" alignSelf="end">
            <Text w="100%">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in.
            </Text>
          </Flex>
        </Stack>
      </HStack>
      <HStack id="time-line" w="calc(100% - 20px)" m="0">
        <Caroussel />
      </HStack>
    </Layout>
  );
}
