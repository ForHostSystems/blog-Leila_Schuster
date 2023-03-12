import { useState } from "react";
import { useMutation } from "react-query";

import { PartnersDTO, PartnersOutput } from "@/mocks/mockedPartners";
import { updatePartners } from "@/services/Home/partners";
import { useToast } from "@chakra-ui/react";

export const usePartners = (partners: PartnersOutput[]) => {
  const toast = useToast();

  const { mutate: update, isLoading: isLoadingUpdate } = useMutation<PartnersDTO[], Error, PartnersDTO>(updatePartners, {
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

  const [newPartners, setNewPartners] = useState<PartnersDTO[]>(partners as PartnersDTO[]);

  const handleChangeImage = (image: File, imageKey: string, position: number | null) => {
    if (position != null) {
      newPartners[position][imageKey] = image;
      setNewPartners([...newPartners]);
    } else {
      const id = Math.random() * 10;
      setNewPartners([...newPartners, { id, imagem_url: image }]);
    }
  };

  const sendData = (position?: number) => {
    if (position != undefined) {
      update(newPartners[position]);
    }
  };

  return { newPartners, handleChangeImage, sendData, isLoading: isLoadingUpdate };
};
