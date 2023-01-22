import React from "react";

import { mockedPartners } from "@/mocks/mockedPartners";
import { HStack, Img } from "@chakra-ui/react";

import { Title } from "../Title";

export const Partners = () => {
  return (
    <>
      <Title dashWidth="48px" as="h1" fontSize="6rem" fontWeight={900} color="black" ml="4px">
        Parceiros
      </Title>

      <HStack w="100%" gap={32} justify="center" mt={20}>
        {mockedPartners.map((value, index) => (
          <HStack w={{ lg: "200px", xl: "250px" }} key={index}>
            <Img w="100%" src={value} filter="grayscale(100%)" />
          </HStack>
        ))}
      </HStack>
    </>
  );
};
