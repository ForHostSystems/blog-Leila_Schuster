import React from "react";

import { Flex, HStack, Link } from "@chakra-ui/react";

export const Navegation = () => {
  return (
    <Flex as="header" w="100%" justify="center" align="center">
      <HStack as="nav" gap={{ lg: 10, xl: 20 }}>
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
    </Flex>
  );
};
