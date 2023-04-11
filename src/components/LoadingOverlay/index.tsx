import React from "react";

import { Box, Spinner } from "@chakra-ui/react";

export const LoadingOverlay = () => {
  return (
    <Box pos="fixed" left={0} top={0} w="100vw" h="100vh" background="#333" opacity={0.3} overflow="hidden" zIndex={10}>
      <Spinner pos="absolute" left="50%" top="50%" transform="translate(-50%, -50%)" color="white" size="xl" thickness="4px" />
    </Box>
  );
};
