import React from "react";

import { BlogContent } from "@/components/Blog/BlogContent";
import { Pagination } from "@/components/Pagination";
import { SeeMore } from "@/components/SeeMore";
import { Title } from "@/components/Title";
import { mockedBlogContent } from "@/mocks/mockedBlogContent";
import { Divider, Box } from "@chakra-ui/react";

export const Blogs = () => {
  return (
    <>
      <Title dashWidth="3rem" dashHeigth="7px" as="h1" fontSize="5rem" fontWeight={900} ml="0.25rem">
        Blog
      </Title>

      {mockedBlogContent.map(
        (value, index) =>
          index <= 1 && (
            <Box key={index} w="100%">
              <BlogContent content={value} isFirst={index == 0} />
            </Box>
          ),
      )}
      <Pagination />
      <Divider w="100%" h="0.063rem" bg="black" mt={4} />
      <SeeMore data={mockedBlogContent} />
    </>
  );
};
