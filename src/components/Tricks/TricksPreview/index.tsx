import React from "react";

import logoLS from "@/assets/logo-LS.png";
import { Title } from "@/components/Title";
import { useTricksPreview } from "@/hooks/tricks/useTricksPreview";
import { TricksPreviewOutput } from "@/mocks/mockedTricks";
import { orderById } from "@/utils/orderById";
import { Flex, Img, VStack } from "@chakra-ui/react";

import { TricksPreviewContent } from "./TricksPreviewContent";

interface TricksPreviewProps {
  tricksContent: TricksPreviewOutput;
}

export const TricksPreview = ({ tricksContent }: TricksPreviewProps) => {
  const { handleChangeText, handleChangeImage, sendData, isLoading } = useTricksPreview(tricksContent);

  return (
    <VStack as="section" align="start" mt={28} w="100%">
      <Flex mb={20}>
        <Title dashWidth="48px" dashHeigth="7px" as="h1" fontSize="6rem" fontWeight={900} ml="4px">
          Dicas
        </Title>
        <Img src={logoLS} alt="Logo Leila Schuster (LS)" w="130px" ml={6} />
      </Flex>
      {tricksContent.sort(orderById).map((value, index) => (
        <TricksPreviewContent
          key={value.id}
          content={value}
          order={index}
          handleChangeText={handleChangeText}
          handleChangeImage={handleChangeImage}
          sendData={sendData}
          isLoading={isLoading}
        />
      ))}
    </VStack>
  );
};
