import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { BlogContent } from "@/components/BlogContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { MostRead } from "@/components/MostRead";
import { SeeMore } from "@/components/SeeMore";
import { Title } from "@/components/Title";
import { mockedBlogContent } from "@/mocks/mockedBlogContent";
import { Divider, Img, Box, Flex, Text, Link } from "@chakra-ui/react";

export const Blog = () => {
  return (
    <Layout>
      <Header />
      <Title dashWidth="48px" dashHeigth={"7px"} as="h1" fontSize="5rem" fontWeight={900} ml="4px">
        Blog
      </Title>
      <Divider w="100%" h="3px" bg="black" mt={12} />
      {mockedBlogContent.map(
        (value, index) =>
          index <= 1 && (
            <Box key={index} _first={{ mt: 0 }} mt="80px" w="100%">
              <Divider w="100%" h="3px" bg="black" mt={12} display={index > 0 ? "auto" : "none"} />
              <BlogContent content={value} position={index} />
            </Box>
          ),
      )}
      <Flex w="100%" mt="40px" justify="space-between">
        <Flex align="center" ml="5px">
          <FiChevronLeft height="0.5rem" />
          <Link href="#" fontSize="0.875rem" lineHeight="1rem" fontWeight={900} textDecoration="none !important">
            Página anterior
          </Link>
        </Flex>
        <Flex align="center" mr="5px">
          <Link href="#" fontSize="0.875rem" lineHeight="1rem" fontWeight={900} textDecoration="none !important">
            Próxima página
          </Link>
          <FiChevronRight height="0.5rem" />
        </Flex>
      </Flex>
      <Divider w="100%" h="1px" bg="black" mt={2.5} />
      <SeeMore data={mockedBlogContent} />
      <Footer />
    </Layout>
  );
};
