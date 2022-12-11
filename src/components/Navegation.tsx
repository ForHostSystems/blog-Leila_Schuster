import React from "react";

import { Box, HStack, Link } from "@chakra-ui/react";

export const Navegation = () => {
  return (
    <Box w="100%" display="flex" justifyContent="center">
      <HStack maxW="600px" w="100%" justifyContent="space-between">
        <Link href="#home" textDecoration="none !important" fontWeight="700">
          HOME
        </Link>
        <Link href="#biografia" textDecoration="none !important" fontWeight="700">
          BIOGRAFIA
        </Link>
        <Link href="#dicas" textDecoration="none !important" fontWeight="700">
          DICAS LS
        </Link>
        <Link href="#blog" textDecoration="none !important" fontWeight="700">
          BLOG
        </Link>
      </HStack>
    </Box>
  );
};
