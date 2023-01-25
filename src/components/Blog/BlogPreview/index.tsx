import React from "react";
import { useNavigate } from "react-router-dom";

import { CustomButton } from "@/components/CustomButton";
import { Title } from "@/components/Title";
import { mockedBlogContent } from "@/mocks/mockedBlogContent";
import { mockedBlogs } from "@/mocks/mockedBlogs";
import { Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";

export const BlogPreview = () => {
  const navigate = useNavigate();
  return (
    <Flex as="section" direction="column" align="start" mt={52} w="100%">
      <Heading as="h1" fontSize="6rem" fontWeight={900} color="black" mb={20}>
        Blog
      </Heading>
      {mockedBlogs.map((value, index) => (
        <Flex w="100%" align="center" gap={{ lg: 14, xl: 20 }} key={index} mt="12rem" _first={{ mt: 0 }}>
          <Img src={value.image} w="50%" order={index % 2 == 0 ? 0 : 1} />

          <VStack w="50%" justify="center" align="start" textAlign="left">
            <Title
              dashWidth="40px"
              dashHeigth="7px"
              dashMb="12px"
              fontSize={{ lg: "3rem", xl: "3.5rem" }}
              fontWeight={500}
              mb={14}>
              {value.title}
            </Title>
            <Heading as="h3" color="black" fontSize={{ lg: "2.3rem", xl: "2.8rem" }} fontWeight={900} mb="10px !important">
              {value.subTitle}
            </Heading>
            <Text fontSize={{ lg: "1.5rem", xl: "2rem" }} lineHeight={{ lg: "1.8rem", xl: "2.3rem" }}>
              {value.description}
            </Text>

            <CustomButton
              onClick={() =>
                navigate(`/blog/${index + 1}`, { state: { blogContent: mockedBlogContent[index != 2 ? index : 0] } })
              }>
              LEIA AQUI
            </CustomButton>
          </VStack>
        </Flex>
      ))}
    </Flex>
  );
};