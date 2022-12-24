import React from "react";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";
import { TfiFacebook } from "react-icons/tfi";

import { Box, Center, Circle, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Center
      w={{ sm: "100vw", xl: "calc(100vw - 20px)" }}
      as="footer"
      flexDirection="column"
      bg="black"
      pos="absolute"
      left={0}
      py="4rem">
      <Heading as="h1" fontSize="3rem" fontWeight={300} letterSpacing={5} color="white">
        ACOMPANHE
      </Heading>

      <SimpleGrid columns={3} spacing={4} mt={20}>
        <Box w="150px" h="150px" bg="white" />
        <Box w="150px" h="150px" bg="white" />
        <Box w="150px" h="150px" bg="white" />
        <Box w="150px" h="150px" bg="white" />
        <Box w="150px" h="150px" bg="white" />
        <Box w="150px" h="150px" bg="white" />
      </SimpleGrid>

      <Heading as="h2" fontSize="2.5rem" fontWeight={300} letterSpacing={2} color="white" mt={14}>
        ENTRE EM CONTATO
      </Heading>

      <Text fontSize="1.8rem" fontWeight={300} color="white" mt={12}>
        E-mail
      </Text>
      <Text fontSize="1.8rem" fontWeight={300} color="white">
        xxxxxx@xxxxxx.com.br
      </Text>
      <Text fontSize="1.8rem" fontWeight={300} letterSpacing={3} color="white" mt={4}>
        Assessoria
      </Text>
      <Text fontSize="1.8rem" fontWeight={300} color="white" letterSpacing={1}>
        9 9999-9999
      </Text>

      <HStack gap={2} mt={6}>
        <Circle borderRadius="full" bg="white" size="35px" cursor="pointer">
          <SlSocialInstagram color="black" size="22px" />
        </Circle>
        <Circle borderRadius="full" bg="white" size="35px" cursor="pointer">
          <TfiFacebook color="black" size="22px" />
        </Circle>
        <Circle borderRadius="full" bg="white" size="35px" cursor="pointer">
          <AiFillYoutube color="black" size="22px" />
        </Circle>
        <Circle borderRadius="full" bg="white" size="35px" cursor="pointer">
          <AiOutlineTwitter color="black" size="22px" />
        </Circle>
      </HStack>
    </Center>
  );
};
