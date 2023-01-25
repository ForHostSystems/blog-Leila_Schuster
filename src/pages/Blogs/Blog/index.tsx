import React from "react";
import { useLocation } from "react-router-dom";

import { BlogContent } from "@/components/Blog/BlogContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { SeeMore } from "@/components/SeeMore";
import { mockedBlogContent, MockedBlogContentProps } from "@/mocks/mockedBlogContent";
import { Divider } from "@chakra-ui/react";

export const Blog = () => {
  const { state } = useLocation();
  return (
    <Layout>
      <Header />
      <BlogContent content={state.blogContent as MockedBlogContentProps} blogOnly />
      <Divider w="100%" h="0.063rem" bg="black" mt={2.5} />
      <SeeMore data={mockedBlogContent} />
      <Footer />
    </Layout>
  );
};
