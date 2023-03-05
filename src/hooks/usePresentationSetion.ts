/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { useState } from "react";
import { useMutation } from "react-query";

import { PresentationSetionDTO, PresentationSetionOutput } from "@/mocks/mockedPresentationSetion";
import {
  PresentationSetionDescriptionOutput,
  PresentationSetionImagesDTO,
  PresentationSetionImagesOutput,
  updatePresentationSetionDescription,
  updatePresentationSetionImages,
} from "@/services/Home/presentationSetion";
import { useToast } from "@chakra-ui/react";

export const usePresentationSetion = (presententionSetionContent: PresentationSetionOutput) => {
  const toast = useToast();

  const { mutate: sendDescription, isLoading: isLoadingDescription } = useMutation<
    PresentationSetionDescriptionOutput,
    Error,
    string
  >(updatePresentationSetionDescription, {
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Suas alterações foram salvas",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: "OPS!",
        description: "Algo deu errado, por favor tente novamente mais tarde!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const { mutate: sendImages, isLoading: isLoadingImages } = useMutation<
    PresentationSetionImagesOutput,
    Error,
    PresentationSetionImagesDTO
  >(updatePresentationSetionImages, {
    onSuccess: () => {
      sendDescription(newPresentation.description);
    },
    onError: () => {
      toast({
        title: "OPS!",
        description: "Algo deu errado, por favor tente novamente mais tarde!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const [newPresentation, setNewPresentation] = useState<PresentationSetionDTO>({} as PresentationSetionDTO);
  const [isCancel, setIsCancel] = useState(false);

  const handleChangeImage = (image: File, imageKey: string) => {
    setNewPresentation({ ...newPresentation, [imageKey]: image });
  };

  const handleChangeDescription = (description: string) => {
    setNewPresentation({ ...newPresentation, description });
  };

  const resetValues = () => {
    setIsCancel(true);
    setNewPresentation(presententionSetionContent);
    sendData(true);
    setTimeout(() => setIsCancel(false), 500);
  };

  const updatePresentationSetion = () => {
    const images: PresentationSetionImagesDTO = {
      imagem1_url: newPresentation.imagem1_url,
      imagem2_url: newPresentation.imagem2_url,
      imagem3_url: newPresentation.imagem3_url,
    };

    sendImages(images);
  };

  const sendData = (ignore = false) => {
    if (newPresentation == presententionSetionContent && !ignore) {
      toast({
        title: "OPS!",
        description: "Não existe alteração à ser salva",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      updatePresentationSetion();
    }
  };

  return {
    handleChangeImage,
    handleChangeDescription,
    resetValues,
    sendData,
    isCancel,
    isLoading: isLoadingImages || isLoadingDescription,
  };
};
