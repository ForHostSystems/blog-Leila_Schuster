import React from "react";

import { useTimeline } from "@/context/TimelineProvider";
import { Heading, VStack } from "@chakra-ui/react";

import { TimelineCarrossel } from "../TimelineCarrossel";

export const TimeLine = () => {
  const { newMoments } = useTimeline();

  return (
    <VStack as="section" id="time-line" w="100%" mt={28}>
      <Heading mb={10} fontSize="3.3rem">
        momentos marcantes
      </Heading>
      <TimelineCarrossel slides={newMoments} />
    </VStack>
  );
};
