import React from "react";

import { Box, HStack, Img, Stack, Text } from "@chakra-ui/react";

import bannerHome from "../../assets/banner-home.png";
import imageBioBottom from "../../assets/image-bio-bottom.png";
import imageBioTop from "../../assets/image-bio-top.png";
import logoHome from "../../assets/logo-home.png";
import { Caroussel } from "../../components/Caroussel";
import { Navegation } from "../../components/Navegation";

export function Home() {
  return (
    <Box>
      <HStack id="home" w="100%" m="0 !important" padding="20px 0 0 20px">
        <Img src={bannerHome} w="60%" h="100vh" />
        <Stack w="100%" h="100vh" m="0 !important" flexDirection="column" alignItems="center">
          <Navegation />
          <Img src={logoHome} maxW="600px" w="100%" m="20vh 0 0 0 !important" />
        </Stack>
      </HStack>
      <HStack id="biografia" w="100%" m="0 !important" padding="20px">
        <Stack w="62%" gap="15px">
          <Img src={imageBioTop} w="100%" h="45vh" />
          <Img src={imageBioBottom} w="100%" h="45vh" />
        </Stack>
        <Stack w="100%" alignItems="center">
          <Box maxW="600px" w="100%">
            <Text fontSize="4.5rem" lineHeight="4.5rem" fontWeight="900" maxW="300px" w="100%">
              Sobre mim
            </Text>
          </Box>
          <Box maxW="600px" w="100%" m="10vh 0 0 0 !important" display="flex" justifyContent="end">
            <Text maxW="300px" w="100%">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in.
            </Text>
          </Box>
        </Stack>
      </HStack>
      <HStack id="time-line" w="calc(100% - 20px)" m="0 !important" padding="20px">
        <Caroussel />
      </HStack>
    </Box>
  );
}
