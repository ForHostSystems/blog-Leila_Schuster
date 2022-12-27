import React from "react";

import { Box, Heading, Img, Stack, VStack, SimpleGrid } from "@chakra-ui/react";

import bannerHome from "../../assets/banner-home.png";
import logoHome from "../../assets/logo-home.png";
import { BiographyPreview } from "../../components/BiographyPreview";
import { BlogPreview } from "../../components/BlogPreview";
import { CustomCaroussel } from "../../components/CustomCaroussel";
import { Footer } from "../../components/Footer";
import { Layout } from "../../components/Layout";
import { Navegation } from "../../components/Navegation";
import { Partners } from "../../components/Partners";
import { Tricks } from "../../components/Tricks";
import { mockedSlides } from "../../mocks/mockedSlides";
// redeploy
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
      <BiographyPreview />
      <VStack as="section" id="time-line" w="100%" mt={28}>
        <Heading mb={10} fontSize="3.3rem">
          Momentos marcantes
        </Heading>
        <CustomCaroussel slides={mockedSlides} />
      </VStack>
      <Tricks />
      <BlogPreview />
      <Box my={52} w="100%">
        <Partners />
      </Box>
      <Footer />
    </Layout>
  );
}
