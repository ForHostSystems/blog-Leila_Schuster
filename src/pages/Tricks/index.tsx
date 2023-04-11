import React from "react";
import { Helmet } from "react-helmet-async";

import { TricksContent } from "@/components/Tricks/TricksContent";
import { TricksCover } from "@/components/Tricks/TricksCover";
import { Center } from "@chakra-ui/react";

export function Tricks() {
  return (
    <>
      <Helmet>
        <title>Dicas | Leila Schuster</title>
      </Helmet>
      <TricksCover />
      <Center flexDirection="column" w="100%" mt={10} mb={52}>
        <TricksContent />
      </Center>
    </>
  );
}
