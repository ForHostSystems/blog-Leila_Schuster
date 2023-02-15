import React from "react";

import logoHome from "@/assets/logo-home.png";
import { useAuth } from "@/context/auth";
import { usePresentationSetion } from "@/hooks/usePresentationSetion";
import { Box, Button, Flex, Img, SimpleGrid, Stack } from "@chakra-ui/react";

import { BiographyPreview } from "../Biography/BiographyPreview";
import { LabelForImage } from "../LabelForImage";
import { Navigation } from "../Navigation";

export const PresentationSetion = () => {
  const { authenticated } = useAuth();
  const { sendData, resetValues, mockedPresentationSetion, handleChangeImage, handleChangeDescription, isCancel } =
    usePresentationSetion();
  const { description, imagem1, imagem2, imagem3 } = mockedPresentationSetion;
  return (
    <Flex direction="column" border={authenticated ? "1px dashed #ccc" : ""} borderRadius={4}>
      <SimpleGrid id="home" columns={2} spacing={5} w="100%">
        <LabelForImage
          labelRef="bannerHome"
          labelWidth="100%"
          image={imagem1}
          onSaveImage={handleChangeImage}
          imageKey="imagem1"
          isCancel={isCancel}
        />
        <Stack h="100%" direction="column" justify="space-between" alignItems="center" pos="relative">
          <Navigation />
          <Img src={logoHome} />
          <Box visibility="hidden" />
        </Stack>
      </SimpleGrid>
      <BiographyPreview
        imageTop={imagem2}
        imageBottom={imagem3}
        descriptionValue={description}
        onChangeDescription={handleChangeDescription}
        onSaveImage={handleChangeImage}
        isCancel={isCancel}
      />

      {authenticated && (
        <Flex alignSelf={{ sm: "center", lg: "start" }} gap={5}>
          <Button size={{ md: "md", xl: "lg" }} colorScheme="gray" onClick={resetValues}>
            Cancelar
          </Button>
          <Button size={{ md: "md", xl: "lg" }} colorScheme="green" onClick={sendData}>
            Salvar
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
