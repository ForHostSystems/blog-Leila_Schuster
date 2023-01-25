import React from "react";

import { BiographyContent } from "@/components/Biography/BiographyContent";
import { BiographyHeader } from "@/components/Biography/BiographyHeader";
import { Divider } from "@chakra-ui/react";

export function Biography() {
  return (
    <>
      <BiographyHeader />
      <Divider w="83%" h="3px" bg="black" mt={10} />
      <BiographyContent />
    </>
  );
}
