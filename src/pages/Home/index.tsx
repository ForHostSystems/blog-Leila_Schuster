import React from "react";

import { BlogPreview } from "@/components/Blog/BlogPreview";
import { CustomCaroussel } from "@/components/CustomCaroussel";
import { Partners } from "@/components/Partners";
import { PresentationSetion } from "@/components/PresentationSetion";
import { TricksPreview } from "@/components/Tricks/TricksPreview";
import { mockedHomeContent } from "@/mocks/mockedHomeContent";
import { mockedSlides } from "@/mocks/mockedSlides";
import { Box, Heading, VStack } from "@chakra-ui/react";

export function Home() {
  return (
    <>
      <PresentationSetion presententionSetionContent={mockedHomeContent.about} />
      <VStack as="section" id="time-line" w="100%" mt={28}>
        <Heading mb={10} fontSize="3.3rem">
          momentos marcantes
        </Heading>
        <CustomCaroussel slides={mockedSlides} />
      </VStack>
      <TricksPreview tricksContent={mockedHomeContent.tricks} />
      <BlogPreview />
      <Box my={52} w="100%">
        <Partners />
      </Box>
    </>
  );
}
