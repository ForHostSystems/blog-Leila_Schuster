import React from "react";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";
import { TfiFacebook } from "react-icons/tfi";

import { Box, Center, Circle, Heading, HStack, SimpleGrid, Text, Flex, Divider } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Center
      w={{ sm: "98.7vw", xl: "calc(100vw - 20px)" }}
      as="footer"
      flexDirection="column"
      bg="black"
      pos="absolute"
      left={0}
      py="4rem">
      <Flex align="center" justify="center" gap={{ lg: 16, xl: 24 }}>
        <Flex direction="column" align="center" minH="412px">
          <Heading as="h1" fontSize="2.2rem" fontWeight={300} letterSpacing={5} color="white">
            ACOMPANHE
          </Heading>

          <SimpleGrid columns={3} spacing={4} mt={12}>
            <Box w="150px" h="150px" bg="white" />
            <Box w="150px" h="150px" bg="white" />
            <Box w="150px" h="150px" bg="white" />
            <Box w="150px" h="150px" bg="white" />
            <Box w="150px" h="150px" bg="white" />
            <Box w="150px" h="150px" bg="white" />
          </SimpleGrid>
        </Flex>

        <Divider w="1px" h="30rem" bg="gray-m" orientation="vertical" />

        <Flex direction="column" align="center" justify="space-between" minH="412px">
          <Heading as="h2" fontSize="2.2rem" fontWeight={300} letterSpacing={2} color="white">
            ENTRE EM CONTATO
          </Heading>

          <Flex direction="column" align="center">
            <Text fontSize="1.8rem" fontWeight={300} color="white">
              E-mail
            </Text>
            <Text fontSize="1.6rem" fontWeight={300} color="white">
              contato@leilaschuster.com.br
            </Text>
            <Text fontSize="1.6rem" fontWeight={300} color="white">
              leila@leilaschuster.com.br
            </Text>
            <Text fontSize="1.8rem" fontWeight={300} letterSpacing={3} color="white" mt={4}>
              Assessoria
            </Text>
            <Text fontSize="1.8rem" fontWeight={300} color="white" letterSpacing={1}>
              9 9999-9999
            </Text>

            <HStack gap={2} mt={10}>
              <Circle
                as="a"
                href="https://www.instagram.com/leilaschuster/"
                target="_blank"
                borderRadius="full"
                bg="white"
                size="35px"
                cursor="pointer">
                <SlSocialInstagram color="black" size="22px" />
              </Circle>
              <Circle
                as="a"
                href="https://www.facebook.com/leila.schuster"
                target="_blank"
                borderRadius="full"
                bg="white"
                size="35px"
                cursor="pointer">
                <TfiFacebook color="black" size="22px" />
              </Circle>
              <Circle
                as="a"
                href="https://www.youtube.com/LeilaSchuster"
                target="_blank"
                borderRadius="full"
                bg="white"
                size="35px"
                cursor="pointer">
                <AiFillYoutube color="black" size="22px" />
              </Circle>
              <Circle
                as="a"
                href="https://twitter.com/LeilaSchusterG"
                target="_blank"
                borderRadius="full"
                bg="white"
                size="35px"
                cursor="pointer">
                <AiOutlineTwitter color="black" size="22px" />
              </Circle>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};
