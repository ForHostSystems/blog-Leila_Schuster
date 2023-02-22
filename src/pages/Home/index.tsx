import React from "react";

import { BlogPreview } from "@/components/Blog/BlogPreview";
import { CustomCaroussel } from "@/components/CustomCaroussel";
import { Partners } from "@/components/Partners";
import { PresentationSetion } from "@/components/PresentationSetion";
import { TricksPreview } from "@/components/Tricks/TricksPreview";
import { useHomeContent } from "@/hooks/useHomeContent";
import { mockedHomeContent } from "@/mocks/mockedHomeContent";
import { mockedSlides } from "@/mocks/mockedSlides";
import { Box, Center, Heading, Spinner, VStack } from "@chakra-ui/react";

export function Home() {
  const { presententionSetionContent, isLoading } = useHomeContent();

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  return (
    <>
      <PresentationSetion presententionSetionContent={presententionSetionContent?.about ?? mockedHomeContent.about} />
      <VStack as="section" id="time-line" w="100%" mt={28}>
        <Heading mb={10} fontSize="3.3rem">
          momentos marcantes
        </Heading>
        <CustomCaroussel slides={mockedSlides} />
      </VStack>
      <TricksPreview />
      <BlogPreview />
      <Box my={52} w="100%">
        <Partners />
      </Box>
    </>
  );
}
