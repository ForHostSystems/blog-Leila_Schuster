import React from "react";

import { Box, BoxProps } from "@chakra-ui/react";

interface CustomSpaceProps extends BoxProps {
  arrowSize?: string | number;
}

export const CustomSpace = ({ arrowSize = "40px", ...props }: CustomSpaceProps) => {
  return (
    <Box pos="relative" {...props}>
      <Box
        as="span"
        w={arrowSize}
        h="2px"
        bg="blackAlpha.500"
        pos="absolute"
        left={0}
        top={0}
        _before={{ content: '""', pos: "absolute", left: 0, top: 0, w: "2px", h: arrowSize, bg: "blackAlpha.500" }}
      />
      <Box
        as="span"
        w={arrowSize}
        h="2px"
        bg="blackAlpha.500"
        pos="absolute"
        right={0}
        bottom={0}
        _before={{ content: '""', pos: "absolute", right: 0, bottom: 0, w: "2px", h: arrowSize, bg: "blackAlpha.500" }}
      />
      {props.children}
    </Box>
  );
};
