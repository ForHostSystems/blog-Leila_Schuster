import React from "react";
import { AiFillTag } from "react-icons/ai";

import { MostRead } from "@/components/MostRead";
import { MockedBlogContentProps } from "@/mocks/mockedBlogContent";
import { getFormatedDate } from "@/utils/getFormatedDate";
import { Box, Divider, Flex, Img, Text } from "@chakra-ui/react";

interface BlogContentProps {
  content: MockedBlogContentProps;
  isFirst?: boolean;
  blogOnly?: boolean;
}
export const BlogContent = ({ content, isFirst = false, blogOnly = false }: BlogContentProps) => {
  const { date, title, description, images, tags } = content;

  const Presentation = () => (
    <>
      <Text fontSize="1rem" lineHeight="1.5rem" fontWeight={700} mt={!blogOnly ? "2.5rem" : 0} textTransform="uppercase">
        {getFormatedDate(date)}
      </Text>
      <Text fontSize="2.5rem" lineHeight="3rem" mt="15px" fontWeight={400} textTransform="uppercase">
        {title}
      </Text>
    </>
  );

  return (
    <>
      {!blogOnly && <Divider w="100%" h="0.063rem" bg="black" mt={12} />}

      <Box w="100%" mt="2.5rem" mb={blogOnly ? "3rem" : 0} _last={{ mb: "3rem" }}>
        {blogOnly && <Presentation />}
        <Flex justify="space-between" gap="2.5rem" mt={blogOnly ? "2.5rem" : 0}>
          {images.map((item, index) => index <= 1 && <Img key={index} src={item.image} w="48%" />)}
        </Flex>
        <Flex gap={10} w="100%">
          <Box w="70%">
            <Box w="100%" borderRight={isFirst ? "1px solid #1a1a1a" : ""}>
              {!blogOnly && <Presentation />}
              <Text
                fontSize="1.25rem"
                lineHeight="1.75rem"
                fontWeight={400}
                mt={!blogOnly ? "1.25rem" : "3rem"}
                pr={isFirst ? "2.5rem" : 0}>
                {description.split("[]")[0]}
              </Text>
              <Box pr={isFirst ? "2.5rem" : 0}>
                <Img src={images[2].image} w={images[2].retrate ? "100%" : "48%"} mt="2.5rem" />
                <Text fontSize="1rem" lineHeight="1.5rem" fontWeight={700} mt="15px">
                  {images[2].legend}
                </Text>
              </Box>
            </Box>
            <Text fontSize="1.25rem" lineHeight="1.75rem" fontWeight={400} mt="1.25rem">
              {description.split("[]")[1]}
            </Text>
            <Box>
              <Img src={images[3].image} w={images[3].retrate ? "100%" : "48%"} mt="2.5rem" />
              <Text fontSize="1rem" lineHeight="1.5rem" fontWeight={700} mt="15px">
                {images[3].legend}
              </Text>
            </Box>
            <Flex align="end" gap="5px">
              <Box mr="5px">
                <AiFillTag />
              </Box>
              {tags.map((item, index) => (
                <Text key={index} fontSize="1rem" lineHeight="1.5rem" fontWeight={700} mt="20px">
                  {item}
                </Text>
              ))}
            </Flex>
          </Box>
          <Box visibility={isFirst ? "visible" : "hidden"} w="30%">
            <MostRead />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
