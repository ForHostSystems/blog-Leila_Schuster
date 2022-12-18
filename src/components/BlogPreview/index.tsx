import React from "react";

import { Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";

import { mockedBlogs } from "../../mocks/mockedBlogs";
import { CustomButton } from "../CustomButton";
import { Title } from "../Title";

export const BlogPreview = () => {
  return (
    <Flex as="section" direction="column" align="start" mt={28} w="100%">
      <Heading as="h1" fontSize="6rem" fontWeight={900} color="black" mb={20}>
        Blog
      </Heading>
      {mockedBlogs.map((value, index) => (
        <Flex w="100%" align="center" gap={32} key={index} mt="12rem" _first={{ mt: 0 }}>
          <Img src={value.image} w="50%" order={index % 2 == 0 ? 0 : 1} />

          <VStack w="50%" justify="center" align="start" textAlign="left">
            <Title dashWidth="40px" dashMb="12px" fontSize="3.5rem" fontWeight={500} mb={14}>
              {value.title}
            </Title>
            <Heading as="h3" color="black" fontSize="2.8rem" fontWeight={900} mb="10px !important">
              {value.subTitle}
            </Heading>
            <Text fontSize="2rem" lineHeight="2.3rem">
              {value.description}
            </Text>

            <CustomButton>LEIA AQUI</CustomButton>
          </VStack>
        </Flex>
      ))}
    </Flex>
  );
};
