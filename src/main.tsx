import "@fontsource/urbanist/100.css";
import "@fontsource/urbanist/300.css";
import "@fontsource/urbanist/500.css";
import "@fontsource/urbanist/800.css";
import "@fontsource/urbanist/900.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "react-query";

import { ChakraProvider } from "@chakra-ui/react";

import Router from "./router";
import { queryClient } from "./services/queryClient";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
