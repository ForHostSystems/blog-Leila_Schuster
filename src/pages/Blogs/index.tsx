import React from "react";

import { BlogContent } from "@/components/Blog/BlogContent";
import { BlogModal } from "@/components/Modals/BlogModal";
import { Pagination } from "@/components/Pagination";
import { SeeMore } from "@/components/SeeMore";
import { Title } from "@/components/Title";
import { useAuth } from "@/context/auth";
import { useBlog } from "@/context/blog";
import { mockedBlogContent } from "@/mocks/mockedBlogContent";
import { Divider, Box, Button, useDisclosure } from "@chakra-ui/react";

export const Blogs = () => {
  const { authenticated } = useAuth();
  const { data } = useBlog();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Title dashWidth="3rem" dashHeigth="7px" as="h1" fontSize="5rem" fontWeight={900} ml="0.25rem">
        Blog
      </Title>

      {authenticated && (
        <Button colorScheme="blackAlpha" mt={10} onClick={onOpen}>
          Novo POST
        </Button>
      )}

      {data.map((value, index) => (
        <Box key={index} w="100%">
          <BlogContent blog={value} isFirst={index == 0} position={index} />
        </Box>
      ))}
      <Pagination />
      <Divider w="100%" h="0.063rem" bg="black" mt={4} />
      <SeeMore data={mockedBlogContent} />
      <BlogModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
