import React from "react";

import { useAuth } from "@/context/auth";
import { useTimeline } from "@/context/timeline";
import { Button, Heading, useDisclosure, VStack } from "@chakra-ui/react";

import { TimelineModal } from "../Modals/TimelineModal";
import { TimelineCarrossel } from "../TimelineCarrossel";

export const TimeLine = () => {
  const { authenticated } = useAuth();
  const { newMoments } = useTimeline();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack as="section" id="time-line" w="100%" mt={28}>
      <Heading mb={10} fontSize="3.3rem">
        momentos marcantes
      </Heading>
      {authenticated && (
        <Button colorScheme="blackAlpha" onClick={onOpen}>
          Adicionar momento
        </Button>
      )}
      <TimelineCarrossel slides={newMoments} />

      <TimelineModal isOpen={isOpen} onClose={onClose} />
    </VStack>
  );
};
