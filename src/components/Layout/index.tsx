import React, { ReactNode } from "react";

import { Box, Flex } from "@chakra-ui/react";

import { theme } from "../../styles/theme";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { sm, md, lg, xl } = theme.breakpoints;
  return (
    <Flex w="100%" direction="column" justify="center" align="center" bg="background">
      <Box w="100%" maxW={{ sm, md, lg, xl }} p="20px">
        {children}
      </Box>
    </Flex>
  );
};
