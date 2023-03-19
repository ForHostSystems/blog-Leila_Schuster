import React from "react";

import logoHome from "@/assets/logo-home.png";
import { useAuth } from "@/context/auth";
import { usePresentationSetion } from "@/hooks/usePresentationSetion";
import { PresentationSetionOutput } from "@/mocks/mockedPresentationSetion";
import { Box, Button, Flex, Img, SimpleGrid, Stack } from "@chakra-ui/react";

import { BiographyPreview } from "../Biography/BiographyPreview";
import { LabelForFile } from "../LabelForFile";
import { Navigation } from "../Navigation";

interface PresentationSetionProps {
  presententionSetionContent: PresentationSetionOutput;
}

export const PresentationSetion = ({ presententionSetionContent }: PresentationSetionProps) => {
  const { authenticated } = useAuth();
  const { sendData, handleChangeImage, handleChangeDescription, isLoading } = usePresentationSetion(presententionSetionContent);
  const { description, imagem1_url, imagem2_url, imagem3_url } = presententionSetionContent;

  return (
    <Flex direction="column" border={authenticated ? "1px dashed #ccc" : ""} borderRadius={4}>
      <SimpleGrid id="home" columns={2} spacing={5} w="100%">
        <LabelForFile
          labelRef="bannerHome"
          labelWidth="100%"
          file={imagem1_url}
          onSaveImage={handleChangeImage}
          imageKey="imagem1_url"
        />
        <Stack h="100%" direction="column" justify="space-between" alignItems="center" pos="relative">
          <Navigation />
          <Img src={logoHome} />
          <Box visibility="hidden" />
        </Stack>
      </SimpleGrid>
      <BiographyPreview
        imageTop={imagem2_url}
        imageBottom={imagem3_url}
        descriptionValue={description}
        onChangeDescription={handleChangeDescription}
        onSaveImage={handleChangeImage}
      />

      {authenticated && (
        <Box>
          <Button size={{ md: "md", xl: "lg" }} colorScheme="green" isLoading={isLoading} onClick={() => sendData()}>
            Salvar
          </Button>
        </Box>
      )}
    </Flex>
  );
};
