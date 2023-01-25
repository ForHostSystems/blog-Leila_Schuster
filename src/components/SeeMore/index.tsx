import React from "react";

import { MockedBlogContentProps } from "@/mocks/mockedBlogContent";
import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";

import { Title } from "../Title";

interface SeeMoreProps {
  data: MockedBlogContentProps[];
}

export const SeeMore = ({ data }: SeeMoreProps) => {
  return (
    <Box w="100%" m="30px 0 60px 0">
      <Flex justify="center" w="100%">
        <Title dashWidth="" dashHeigth="" as="h1" fontSize="2rem" fontWeight={900} m="20px 0">
          Veja mais:
        </Title>
      </Flex>
      <Flex justify="center" gap="40px">
        {data.map(
          (item, cont) =>
            cont >= 3 && (
              <>
                <Box key={cont} w="300px">
                  <Img src={item.images[0].image} alt="" w="100%" h="350px" />
                  <Link href="#" textDecoration="none !important">
                    <Text w="90%" mt={4} fontSize="1rem" lineHeight="1.25rem" fontWeight={900} textTransform="uppercase">
                      {item.title}
                    </Text>
                  </Link>
                </Box>
              </>
            ),
        )}
      </Flex>
    </Box>
  );
};
