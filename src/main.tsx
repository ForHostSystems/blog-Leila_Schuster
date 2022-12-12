import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";

import { ChakraProvider } from "@chakra-ui/react";

import Router from "./router";
import { queryClient } from "./services/queryClient";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
