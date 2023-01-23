import React, { useEffect } from "react";

import { mockedBlogContent } from "@/mocks/mockedBlogContent";
import { Box, Img, Text, Flex, Link } from "@chakra-ui/react";

import { Title } from "../Title";

export const MostRead = () => {
  return (
    <Box p="25px 0 0 0" mt="64px">
      <Title dashWidth="18px" dashHeigth="3px" as="h1" fontSize="1.5rem" fontWeight={900} ml="4px" dashMb="5px">
        Mais Lidas
      </Title>

      {mockedBlogContent.map(
        (item, index) =>
          index < mockedBlogContent.length - 3 && (
            <Flex key={index} mt="30px" gap={2.5}>
              <Box w="115px" h="115px">
                <Img src={item.images[0].image} alt="" w="100%" h="100%" objectFit="cover" />
              </Box>
              <Box w="50%">
                <Text fontSize="0.75rem" lineHeight="1rem" fontWeight={700} textTransform="uppercase">
                  {item.title}
                </Text>
                <Link href="#" fontSize="0.75rem" lineHeight="1rem" fontWeight={900} mt="10px" textDecoration="underline black">
                  Leia Mais
                </Link>
              </Box>
            </Flex>
          ),
      )}
    </Box>
  );
};
