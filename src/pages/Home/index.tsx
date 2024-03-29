import React from "react";
import { Helmet } from "react-helmet-async";

import { BlogPreview } from "@/components/Blog/BlogPreview";
import { Partners } from "@/components/Partners";
import { PresentationSetion } from "@/components/PresentationSetion";
import { TimeLine } from "@/components/TimeLine";
import { TricksPreview } from "@/components/Tricks/TricksPreview";
import { useHomeContent } from "@/context/home";
import { TimelineProvider } from "@/context/timeline";
import { mockedHomeContent } from "@/mocks/mockedHomeContent";
import { Box, Center, Spinner } from "@chakra-ui/react";

export function Home() {
  const { data, isLoading } = useHomeContent();

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  return (
    <>
      <Helmet>
        <title>Leila Schuster</title>
      </Helmet>
      <PresentationSetion presententionSetionContent={data?.about ?? mockedHomeContent.about} />
      <TimelineProvider moments={data?.sliders ?? mockedHomeContent.sliders}>
        <TimeLine />
      </TimelineProvider>
      <TricksPreview tricksContent={data?.tricks ?? mockedHomeContent.tricks} />
      <BlogPreview />
      <Box my={52} w="100%">
        <Partners partners={data?.partners ?? mockedHomeContent.partners} />
      </Box>
    </>
  );
}
