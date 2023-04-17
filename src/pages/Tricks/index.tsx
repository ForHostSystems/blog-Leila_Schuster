import React from "react";
import { Helmet } from "react-helmet-async";

import { TricksModal } from "@/components/Modals/TricksModal";
import { TricksContent } from "@/components/Tricks/TricksContent";
import { TricksCover } from "@/components/Tricks/TricksCover";
import { useAuth } from "@/context/auth";
import { useTricks } from "@/context/tricks";
import { Button, Center, Heading, Spinner, useDisclosure } from "@chakra-ui/react";

export function Tricks() {
  const { authenticated } = useAuth();
  const { data, isLoading } = useTricks();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Helmet>
        <title>Dicas | Leila Schuster</title>
      </Helmet>
      <TricksCover />
      {authenticated && (
        <Button onClick={onOpen} colorScheme="blackAlpha">
          Adicionar nova Dica
        </Button>
      )}
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : data.length == 0 ? (
        <Heading as="h3" fontSize="1.5rem" my={10} color="gray-m">
          Não existem por enquanto...
        </Heading>
      ) : (
        <Center flexDirection="column" w="100%" mt={10} mb={52}>
          <TricksContent />
        </Center>
      )}
      <TricksModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
