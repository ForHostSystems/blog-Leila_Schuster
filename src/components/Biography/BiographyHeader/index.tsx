import React from "react";

import logo_type2 from "@/assets/logo_type2.png";
import { EditableText } from "@/components/EditableText";
import { Title } from "@/components/Title";
import { useAuth } from "@/context/auth";
import { useBiography } from "@/context/biografia";
import { HStack, Img, Skeleton, VStack } from "@chakra-ui/react";

export const BiographyHeader = () => {
  const { authenticated } = useAuth();
  const { data, handleChange, isLoading } = useBiography();

  return (
    <HStack justify="space-between">
      <VStack align="start" gap={4}>
        <Title dashWidth="48px" dashHeigth="7px" as="h1" fontSize="5rem" fontWeight={900} ml="4px">
          Biografia
        </Title>
        <Skeleton isLoaded={!isLoading}>
          <EditableText
            element="Text"
            textValue={data.description}
            field="description"
            handleChange={handleChange}
            maxW={{ lg: "31.25rem", xl: "43.75rem" }}
            minW={authenticated ? "31.25rem" : "unset"}
            fontSize={{ lg: "1rem", xl: "1.1rem" }}
            lineHeight={{ lg: "1rem", xl: "1.1rem" }}
          />
        </Skeleton>
      </VStack>

      <Img src={logo_type2} w={{ lg: "350px", xl: "450px" }} />
    </HStack>
  );
};
