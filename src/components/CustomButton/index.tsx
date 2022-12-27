import React, { ReactNode, useState } from "react";

import { Box, Button } from "@chakra-ui/react";

interface CustomButtonProps {
  children: ReactNode;
}

export const CustomButton = ({ children }: CustomButtonProps) => {
  const [hover, setHover] = useState(false);
  return (
    <Button
      alignSelf="center"
      fontSize={{ lg: "2rem", xl: "2.5rem" }}
      fontWeight={300}
      bg="none"
      h={{ lg: "60px", xl: "80px" }}
      px={10}
      mt="4rem !important"
      pos="relative"
      _hover={{ bg: "none" }}
      _active={{ bg: "none" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {children}
      <Box
        as="span"
        w={hover ? "100%" : "40px"}
        h="2px"
        bg="blackAlpha.500"
        pos="absolute"
        left={0}
        top={0}
        _before={{
          content: '""',
          pos: "absolute",
          left: 0,
          top: 0,
          w: "2px",
          h: hover ? { lg: "60px", xl: "80px" } : "40px",
          bg: "blackAlpha.500",
        }}
        transition="0.3s"
      />
      <Box
        as="span"
        w={hover ? "100%" : "40px"}
        h="2px"
        bg="blackAlpha.500"
        pos="absolute"
        right={0}
        bottom={0}
        _before={{
          content: '""',
          pos: "absolute",
          right: 0,
          bottom: 0,
          w: "2px",
          h: hover ? { lg: "60px", xl: "80px" } : "40px",
          bg: "blackAlpha.500",
        }}
        transition="0.3s"
      />
    </Button>
  );
};
