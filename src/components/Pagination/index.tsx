import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useBlog } from "@/context/blog";
import { Button, Flex, Text } from "@chakra-ui/react";

export const Pagination = () => {
  const { page, onChangePage } = useBlog();

  const handleChangePage = (action: "next" | "prev") => {
    if (action == "prev") {
      onChangePage(page - 1);
    } else {
      onChangePage(page + 1);
    }

    window.scrollTo(0, 0);
  };

  return (
    <Flex w="100%" justify="space-between">
      <Flex as={Button} align="center" ml="0.313rem" variant="unstyled" onClick={() => handleChangePage("prev")}>
        <FiChevronLeft size="1rem" />
        <Text fontSize="1rem" lineHeight="1rem" fontWeight={900} textDecoration="none !important">
          Página anterior
        </Text>
      </Flex>
      <Flex as={Button} align="center" mr="0.313rem" variant="unstyled" onClick={() => handleChangePage("next")}>
        <Text fontSize="1rem" lineHeight="1rem" fontWeight={900} textDecoration="none !important">
          Próxima página
        </Text>
        <FiChevronRight size="1rem" />
      </Flex>
    </Flex>
  );
};
