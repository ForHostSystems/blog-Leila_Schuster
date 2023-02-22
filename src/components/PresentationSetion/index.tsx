import React from "react";

import logoHome from "@/assets/logo-home.png";
import { useAuth } from "@/context/auth";
import { usePresentationSetion } from "@/hooks/usePresentationSetion";
import { PresentationSetionOutput } from "@/mocks/mockedPresentationSetion";
import { Box, Button, Flex, Img, SimpleGrid, Stack, useDisclosure } from "@chakra-ui/react";

import { BiographyPreview } from "../Biography/BiographyPreview";
import { LabelForImage } from "../LabelForImage";
import { PresentationSetionModal } from "../Modals/PresentationSetionModal";
import { Navigation } from "../Navigation";

interface PresentationSetionProps {
  presententionSetionContent: PresentationSetionOutput;
}

export const PresentationSetion = ({ presententionSetionContent }: PresentationSetionProps) => {
  const { authenticated } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { sendData, resetValues, handleChangeImage, handleChangeDescription, isCancel, isLoading } =
    usePresentationSetion(presententionSetionContent);
  const { description, imagem1_url, imagem2_url, imagem3_url } = presententionSetionContent;

  const handleConfirmModal = () => {
    resetValues();
    onClose();
  };

  return (
    <Flex direction="column" border={authenticated ? "1px dashed #ccc" : ""} borderRadius={4}>
      <SimpleGrid id="home" columns={2} spacing={5} w="100%">
        <LabelForImage
          labelRef="bannerHome"
          labelWidth="100%"
          image={imagem1_url}
          onSaveImage={handleChangeImage}
          imageKey="imagem1_url"
          isCancel={isCancel}
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
        isCancel={isCancel}
      />

      {authenticated && (
        <Flex alignSelf={{ sm: "center", lg: "start" }} gap={5}>
          <Button size={{ md: "md", xl: "lg" }} colorScheme="gray" disabled={isLoading} onClick={onOpen}>
            Cancelar
          </Button>
          <Button size={{ md: "md", xl: "lg" }} colorScheme="green" isLoading={isLoading} onClick={() => sendData()}>
            Salvar
          </Button>
        </Flex>
      )}

      <PresentationSetionModal isOpen={isOpen} onClose={onClose} onConfirm={handleConfirmModal} />
    </Flex>
  );
};
