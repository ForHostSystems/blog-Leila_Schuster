import React from "react";
import { Helmet } from "react-helmet-async";

import { BlogContent } from "@/components/Blog/BlogContent";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import { BlogModal } from "@/components/Modals/BlogModal";
import { Pagination } from "@/components/Pagination";
import { SeeMore } from "@/components/SeeMore";
import { Title } from "@/components/Title";
import { useAuth } from "@/context/auth";
import { useBlog } from "@/context/blog";
import { mockedBlogContent } from "@/mocks/mockedBlogContent";
import { Divider, Box, Button, useDisclosure, Center, Spinner, Heading } from "@chakra-ui/react";

export const Blogs = () => {
  const { authenticated } = useAuth();
  const { data, isLoading } = useBlog();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Helmet>
        <title>Blog | Leila Schuster</title>
      </Helmet>
      <Title dashWidth="3rem" dashHeigth="7px" as="h1" fontSize="5rem" fontWeight={900} ml="0.25rem">
        Blog
      </Title>

      {authenticated && (
        <Button colorScheme="blackAlpha" mt={10} onClick={onOpen}>
          Novo POST
        </Button>
      )}

      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : data.length == 0 ? (
        <Heading as="h3" fontSize="1.5rem" my={10} color="gray-m">
          Não existe postagem...
        </Heading>
      ) : (
        data.map((value, index) => (
          <Box key={index} w="100%">
            <BlogContent blog={value} isFirst={index == 0} />
          </Box>
        ))
      )}
      <Pagination />
      <Divider w="100%" h="0.063rem" bg="black" mt={4} />
      <SeeMore data={mockedBlogContent} />
      <BlogModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
