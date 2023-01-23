import React from "react";
import { AiFillTag } from "react-icons/ai";

import { MockedBlogContentProps } from "@/mocks/mockedBlogContent";
import { getFormatedDate } from "@/utils/getFormatedDate";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

import { MostRead } from "../MostRead";

interface BlogContentProps {
  content: MockedBlogContentProps;
  position: number;
}
export const BlogContent = ({ content, position }: BlogContentProps) => {
  const { date, title, description, images, tags } = content;

  return (
    <Box w="100%">
      <Flex justify="space-between" gap="40px">
        {images.map((item, index) => index <= 1 && <Img key={index} src={item.image} w="48%" mt="40px" />)}
      </Flex>
      <Flex gap={10} w="100%">
        <Box w="70%">
          <Box w="100%" borderRight={position === 0 ? "1px solid #1a1a1a" : ""}>
            <Text fontSize="1rem" lineHeight="1.5rem" fontWeight={700} mt="40px" textTransform="uppercase">
              {getFormatedDate(date)}
            </Text>
            <Text fontSize="2.5rem" lineHeight="3rem" mt="15px" fontWeight={400} textTransform="uppercase">
              {title}
            </Text>
            <Text fontSize="1.25rem" lineHeight="1.75rem" fontWeight={400} mt="20px" pr={position === 0 ? "40px" : "0px"}>
              {description.split("[]")[0]}
            </Text>
            {images.map(
              (item, index) =>
                index === 2 && (
                  <Box key={index} pr={position === 0 ? "40px" : "0px"}>
                    <Img src={item.image} w={item.retrate ? "100%" : "48%"} mt="40px" />
                    <Text fontSize="1rem" lineHeight="1.5rem" fontWeight={700} mt="15px">
                      {item.legend}
                    </Text>
                  </Box>
                ),
            )}
          </Box>
          <Text fontSize="1.25rem" lineHeight="1.75rem" fontWeight={400} mt="20px">
            {description.split("[]")[1]}
          </Text>
          <Box>
            <Img src={images[3].image} w={images[3].retrate ? "100%" : "48%"} mt="40px" />
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
        <Box visibility={position === 0 ? "visible" : "hidden"} w="30%">
          <MostRead />
        </Box>
      </Flex>
    </Box>
  );
};
