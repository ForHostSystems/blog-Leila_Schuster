/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, FunctionComponent, ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { BiographyProvider } from "@/context/biografia";
import { BlogProvider } from "@/context/blog";
import { HomeProvider } from "@/context/home";
import { Home } from "@/pages/Home";
import { theme } from "@/styles/theme";
import { Box, Flex } from "@chakra-ui/react";

import { Footer } from "../Footer";
import { Header } from "../Header";

interface ProviderProps {
  Component: FunctionComponent<any>;
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ Component, children }) => {
  return <Component>{children}</Component>;
};

interface ProviderRenderType {
  [key: string]: FunctionComponent<any>;
}

const providerToRender: ProviderRenderType = {
  "/biografia": BiographyProvider,
};

export const Layout = () => {
  const { pathname } = useLocation();
  const { sm, md, lg, xl } = theme.breakpoints;
  return (
    <Flex w="100%" direction="column" justify="center" align="center" bg="background">
      <HomeProvider>
        <Provider Component={pathname.includes("blog") ? BlogProvider : providerToRender[pathname] ?? Fragment}>
          <Box w="100%" minH="100vh" maxW={{ sm, md, lg, xl }} p="20px">
            {pathname != "/" && pathname != "/login" && <Header />}
            {pathname == "/" ? <Home /> : <Outlet />}
            {pathname != "/login" && <Footer />}
          </Box>
        </Provider>
      </HomeProvider>
    </Flex>
  );
};
