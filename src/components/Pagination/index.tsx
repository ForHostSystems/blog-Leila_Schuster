import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Flex, Text } from "@chakra-ui/react";

export const Pagination = () => {
  return (
    <Flex w="100%" justify="space-between">
      <Flex as="a" href="#" align="center" ml="0.313rem">
        <FiChevronLeft size="1rem" />
        <Text fontSize="1rem" lineHeight="1rem" fontWeight={900} textDecoration="none !important">
          Página anterior
        </Text>
      </Flex>
      <Flex as="a" href="#" align="center" mr="0.313rem">
        <Text fontSize="1rem" lineHeight="1rem" fontWeight={900} textDecoration="none !important">
          Próxima página
        </Text>
        <FiChevronRight size="1rem" />
      </Flex>
    </Flex>
  );
};
