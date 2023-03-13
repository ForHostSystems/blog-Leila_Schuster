import { useState } from "react";
import { useMutation } from "react-query";

import { PartnersDTO, PartnersOutput } from "@/mocks/mockedPartners";
import { createNewPartner, deletePartner, updatePartners } from "@/services/Home/partners";
import { useToast } from "@chakra-ui/react";

import { CreateNewPartnerProps } from "./../services/Home/partners/index";

export const usePartners = (partners: PartnersOutput[]) => {
  const toast = useToast();
  const [newPartners, setNewPartners] = useState<PartnersDTO[]>(partners as PartnersDTO[]);

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

  const { mutate: createPartner, isLoading: isLoadingCreate } = useMutation<PartnersDTO, Error, CreateNewPartnerProps>(
    createNewPartner,
    {
      onSuccess: (data: PartnersDTO) => {
        const { id, imagem_url } = data;
        setNewPartners([...newPartners, { id, imagem_url }]);

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
    },
  );

  const { mutate: handleDeletePartner, isLoading: isLoadingDelete } = useMutation(deletePartner, {
    onSuccess: (data, id) => {
      setNewPartners(newPartners.filter((item) => item.id != id));

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

  const handleChangeImage = (image: File, imageKey: string, position: number | null) => {
    if (position != null) {
      newPartners[position][imageKey] = image;
      setNewPartners([...newPartners]);
    }
  };

  const onDeleteImage = (id: number) => {
    handleDeletePartner(id);
  };

  const sendData = (position?: number, partner?: CreateNewPartnerProps) => {
    if (position != undefined) {
      update(newPartners[position]);
    } else if (partner) {
      createPartner(partner);
    }
  };

  return {
    newPartners,
    handleChangeImage,
    sendData,
    onDeleteImage,
    isLoading: isLoadingUpdate || isLoadingCreate || isLoadingDelete,
  };
};
