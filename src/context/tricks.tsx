import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { TricksDTO } from "@/interfaces/tricks";
import { mockedTrics } from "@/mocks/mockedTricks";
import { addNewTrick, getTricks, updateTrick } from "@/services/Dicas";
import { useToast } from "@chakra-ui/react";

interface TricksContextProps {
  data: TricksDTO[] | [];
  isLoading: boolean;
  isLoadingUpdate: boolean;
  isLoadingAdd: boolean;
  handleChangeText: (text: string, field: string, position: number | null) => void;
  handleChangeImage: (image: File, imageKey: string, position: number | null) => void;
  sendData: (position: number | null, trick?: TricksDTO) => void;
}

interface TricksProviderProps {
  children: ReactNode;
}

const TricksContext = createContext({} as TricksContextProps);

export const TricksProvider = ({ children }: TricksProviderProps) => {
  const toast = useToast();
  const [newTricks, setNewTricks] = useState<TricksDTO[] | []>(mockedTrics);

  const { data, isLoading } = useQuery("getTricks", getTricks, { refetchOnWindowFocus: false });
  const { mutate: addTrick, isLoading: isLoadingAdd } = useMutation<TricksDTO, Error, TricksDTO>(addNewTrick, {
    onSuccess: (trick: TricksDTO) => {
      if (trick) data?.push(trick);
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

  const { mutate: updateThisTrick, isLoading: isLoadingUpdate } = useMutation<TricksDTO, Error, TricksDTO>(updateTrick, {
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

  const handleChangeText = (text: string, field: string, position: number | null) => {
    if (position != null) {
      newTricks[position][field] = text;
      setNewTricks([...newTricks]);
    }
  };

  const handleChangeImage = (image: File, imageKey: string, position: number | null) => {
    if (position != null) {
      newTricks[position][imageKey] = image;
      setNewTricks([...newTricks]);
    }
  };

  const sendData = (position: number | null, trick?: TricksDTO) => {
    if (!position && trick) {
      addTrick(trick);
    } else if (position != null) {
      console.log(newTricks[position]);
      updateThisTrick(newTricks[position]);
    }
  };

  useEffect(() => {
    if (data) {
      setNewTricks(data);
    }
  }, [data, isLoading]);

  return (
    <TricksContext.Provider
      value={{
        data: data ?? [],
        handleChangeText,
        handleChangeImage,
        sendData,
        isLoading,
        isLoadingUpdate,
        isLoadingAdd,
      }}>
      {children}
    </TricksContext.Provider>
  );
};

export function useTricks() {
  const context = useContext(TricksContext);

  return context;
}
