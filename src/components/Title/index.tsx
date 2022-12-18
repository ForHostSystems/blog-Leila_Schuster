import React from "react";

import { Box, Heading, Flex, HeadingProps } from "@chakra-ui/react";

interface TitleProps extends HeadingProps {
  dashWidth: string | number;
  dashMb?: string | number;
  dashDistance?: string | number;
  ml?: string | number;
}

export const Title = ({ dashWidth, dashMb, dashDistance, ml, ...props }: TitleProps) => {
  return (
    <Flex direction="column" align="start" gap={dashDistance}>
      <Box w={dashWidth} h="7px" bg="#000" ml={ml ?? 0} mb={dashMb} />
      <Heading {...props}>{props.children}</Heading>
    </Flex>
  );
};
