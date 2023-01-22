import React from "react";

import logo_type2 from "@/assets/logo_type2.png";
import { Title } from "@/components/Title";
import { HStack, Img, Text, VStack } from "@chakra-ui/react";

export const BiographyHeader = () => {
  return (
    <HStack justify="space-between">
      <VStack align="start" gap={4}>
        <Title dashWidth="48px" as="h1" fontSize="5rem" fontWeight={900} ml="4px">
          Biografia
        </Title>
        <Text
          maxW={{ lg: "500px", xl: "700px" }}
          fontSize={{ lg: "1rem", xl: "1.1rem" }}
          lineHeight={{ lg: "1rem", xl: "1.1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam sit amet libero tempor gravida efficitur vel
          nibh. Donec quam quam, aliquam in bibendum in, placerat eget lacus. Aliquam congue felis pellentesque ex dictum, id
          dapibus dui vehicula. Mauris pharetra sem et dolor varius, vel euismod magna auctor. In dignissim nisl sed enim
          elementum, id ornare libero consectetur.
        </Text>
      </VStack>

      <Img src={logo_type2} w={{ lg: "350px", xl: "450px" }} />
    </HStack>
  );
};
