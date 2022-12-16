import React from "react";

import { Box, Heading, Img, Stack, VStack, SimpleGrid } from "@chakra-ui/react";

import bannerHome from "../../assets/banner-home.png";
import logoHome from "../../assets/logo-home.png";
import { Biography } from "../../components/Biography";
import { CustomCaroussel } from "../../components/CustomCaroussel";
import { Layout } from "../../components/Layout";
import { Navegation } from "../../components/Navegation";

const mockSlides = ["#696969", "#708090", "#BEBEBE", "#6495ED", "#00FFFF", "#006400", "#7CFC00", "#FF4500"];

export function Home() {
  return (
    <Layout>
      <SimpleGrid id="home" columns={2} spacing={5} w="100%">
        <Img src={bannerHome} />
        <Stack h="100%" direction="column" justify="space-between" alignItems="center" pos="relative">
          <Navegation />
          <Img src={logoHome} />
          <Box visibility="hidden" />
        </Stack>
      </SimpleGrid>
      <Biography />
      <VStack id="time-line" w="100%" mt={20}>
        <Heading mb={10}>Momentos marcantes</Heading>
        <CustomCaroussel slides={mockSlides} />
      </VStack>
    </Layout>
  );
}
