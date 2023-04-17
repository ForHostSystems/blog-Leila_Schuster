import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { BlogContent } from "@/components/Blog/BlogContent";
import { SeeMore } from "@/components/SeeMore";
import { useBlogView } from "@/hooks/useBlogView";
import { mockedBlogContent } from "@/mocks/mockedBlogContent";
import { Center, Divider, Spinner } from "@chakra-ui/react";

export const Blog = () => {
  const { slug } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data, isLoading } = useBlogView(slug!);

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  if (!data) {
    return <span>erro</span>;
  }

  return (
    <>
      <BlogContent blog={data} blogOnly />
      <Divider w="100%" h="0.063rem" bg="black" mt={2.5} />
      <SeeMore data={mockedBlogContent} />
    </>
  );
};
