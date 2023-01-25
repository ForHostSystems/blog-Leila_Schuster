import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Home } from "@/pages/Home";
import { theme } from "@/styles/theme";
import { Box, Flex } from "@chakra-ui/react";

import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = () => {
  const { pathname } = useLocation();
  const { sm, md, lg, xl } = theme.breakpoints;
  return (
    <Flex w="100%" direction="column" justify="center" align="center" bg="background">
      <Box w="100%" minH="100vh" maxW={{ sm, md, lg, xl }} p="20px">
        {pathname != "/" && <Header />}
        {pathname == "/" ? <Home /> : <Outlet />}
        <Footer />
      </Box>
    </Flex>
  );
};
