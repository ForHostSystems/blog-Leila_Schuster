import { useState } from "react";

import { mockedPresentationSetion, PresentationSetionDTO } from "@/mocks/mockedPresentationSetion";
import { useToast } from "@chakra-ui/react";

export const usePresentationSetion = () => {
  const toast = useToast();
  const [newPresentation, setNewPresentation] = useState<PresentationSetionDTO>(mockedPresentationSetion);
  const [isCancel, setIsCancel] = useState(false);

  const handleChangeImage = (image: File, imageKey: string) => {
    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);
    setNewPresentation({ ...newPresentation, [imageKey]: formData });
  };

  const handleChangeDescription = (description: string) => {
    setNewPresentation({ ...newPresentation, description });
  };

  const resetValues = () => {
    setIsCancel(true);
    setNewPresentation(mockedPresentationSetion);
    setTimeout(() => setIsCancel(false), 500);
  };

  const sendData = () => {
    if (newPresentation == mockedPresentationSetion) {
      toast({
        title: "OPS!",
        description: "Não existe alteração à ser salva",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      console.log(newPresentation);
      toast({
        title: "Sucesso!",
        description: "Suas alterações foram salvas",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return {
    mockedPresentationSetion,
    newPresentation,
    handleChangeImage,
    handleChangeDescription,
    resetValues,
    sendData,
    isCancel,
  };
};
