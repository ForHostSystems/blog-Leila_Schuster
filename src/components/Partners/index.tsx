import React from "react";

import { HStack, Img } from "@chakra-ui/react";

import { mockedPartners } from "../../mocks/mockedPartners";
import { Title } from "../Title";

export const Partners = () => {
  return (
    <>
      <Title dashWidth="48px" as="h1" fontSize="6rem" fontWeight={900} color="black" ml="4px">
        Parceiros
      </Title>

      <HStack
        w={{ lg: "calc(100% - (2.5rem + 40px))", xl: "calc(100% - (4rem + 40px))" }}
        justify="space-between"
        mt={36}
        ml={{ lg: 10, xl: 16 }}>
        {mockedPartners.map((value, index) => (
          <HStack w={{ lg: "200px", xl: "250px" }} key={index}>
            <Img w="100%" src={value} filter="grayscale(100%)" />
          </HStack>
        ))}
      </HStack>
    </>
  );
};
