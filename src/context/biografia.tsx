import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { BiographyDTO } from "@/interfaces/biography";
import { mockedBiography } from "@/mocks/mockedBiography";
import { getBiography, updateBiography } from "@/services/Biography";
import { useToast } from "@chakra-ui/react";

interface BiographyContextProps {
  data: BiographyDTO;
  isLoading: boolean;
  isLoadingUpdate: boolean;
  handleChange: (text: string, field: string) => void;
  handleChangeImage: (file: File, field: string) => void;
  sendData: () => void;
}

const BiographyContext = createContext({} as BiographyContextProps);

interface BiographyProviderProps {
  children: ReactNode;
}

export const BiographyProvider = ({ children }: BiographyProviderProps) => {
  const toast = useToast();

  const [content, setContent] = useState({} as BiographyDTO);

  const { data, isLoading } = useQuery<BiographyDTO>("getBiography", getBiography, {
    onError: () => {
      toast({
        title: "OPS!",
        description: "Algo deu errado, o conteúdo carregado pode estar desatualizado, tente recarregar a página!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });
  const { mutate: update, isLoading: isLoadingUpdate } = useMutation<BiographyDTO, Error, BiographyDTO>(updateBiography, {
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

  const handleChange = (text: string, field: string) => {
    if (data) {
      setContent({ ...content, [field]: text });
    }
  };

  const handleChangeImage = (file: File, field: string) => {
    if (data) {
      setContent({ ...content, [field]: file });
    }
  };

  const sendData = () => {
    if (data) {
      update(content);
    }
  };

  useEffect(() => {
    if (data) {
      setContent(data);
    }
  }, [data, isLoading]);

  return (
    <BiographyContext.Provider
      value={{
        data: data ?? mockedBiography,
        isLoading,
        isLoadingUpdate,
        handleChange,
        handleChangeImage,
        sendData,
      }}>
      {children}
    </BiographyContext.Provider>
  );
};

export function useBiography() {
  const context = useContext(BiographyContext);

  return context;
}
