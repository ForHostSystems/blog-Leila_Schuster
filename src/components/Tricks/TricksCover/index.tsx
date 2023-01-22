import React from "react";

import dicas_img1 from "@/assets/DicasLS-img1.png";
import logoLS from "@/assets/logo-LS.png";
import { CustomSpace } from "@/components/CustomSpace";
import { Center, Flex, HStack, Img, Text } from "@chakra-ui/react";

export const TricksCover = () => {
  return (
    <Center h="calc(100vh - 5rem)">
      <HStack gap={{ lg: 10, xl: 20 }}>
        <Img src={dicas_img1} alt="Foto de Leila Schuster" maxW={{ lg: "600px", xl: "750px" }} />
        <CustomSpace px={{ lg: 10, xl: 12 }} arrowSize="50px">
          <Flex>
            <Text as="h1" fontSize={{ lg: "4rem", xl: "6rem" }} fontWeight={900} ml="4px">
              Dicas
            </Text>
            <Img src={logoLS} alt="Logo Leila Schuster (LS)" w={{ lg: "70px", xl: "130px" }} ml={6} />
          </Flex>
        </CustomSpace>
      </HStack>
    </Center>
  );
};
