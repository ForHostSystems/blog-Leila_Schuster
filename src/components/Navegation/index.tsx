import React from "react";
import { useLocation } from "react-router-dom";

import { useAuth } from "@/context/auth";
import { Button, Flex, HStack, Link } from "@chakra-ui/react";

export const Navegation = () => {
  const { pathname } = useLocation();
  const { authenticated, signOut } = useAuth();
  return (
    <Flex as="header" w="100%" justify={pathname == "/" ? "center" : "end"} align="center">
      <HStack as="nav" gap={{ lg: 10, xl: 20 }}>
        <Link href="/" textDecoration="none !important" fontWeight="700">
          HOME
        </Link>
        <Link href="/biografia" textDecoration="none !important" fontWeight="700">
          BIOGRAFIA
        </Link>
        <Link href="/dicas" textDecoration="none !important" fontWeight="700">
          DICAS LS
        </Link>
        <Link href="/blog" textDecoration="none !important" fontWeight="700">
          BLOG
        </Link>
      </HStack>
      {authenticated && (
        <Button colorScheme="blackAlpha" onClick={signOut} ml={{ lg: 5, xl: 10 }}>
          Sair
        </Button>
      )}
    </Flex>
  );
};
