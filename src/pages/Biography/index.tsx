import React from "react";
import { Helmet } from "react-helmet-async";

import { BiographyContent } from "@/components/Biography/BiographyContent";
import { BiographyHeader } from "@/components/Biography/BiographyHeader";
import { Divider } from "@chakra-ui/react";

export function Biography() {
  return (
    <>
      <Helmet>
        <title>Biografia | Leila Schuster</title>
      </Helmet>
      <BiographyHeader />
      <Divider w="83%" h="3px" bg="black" mt={10} />
      <BiographyContent />
    </>
  );
}
