import React, { createContext, ReactNode, useContext, useState } from "react";
import { useMutation } from "react-query";

import { ITimeLine, TimeLineDTO } from "@/interfaces/timeline";
import { createNewMoment, CreateNewMomentProps, deleteMoment, updateTimeline } from "@/services/Home/timeline";
import { useToast } from "@chakra-ui/react";

interface TimelineContextProps {
  newMoments: ITimeLine[];
  handleChangeText: (text: string, position: number, field: string) => void;
  handleChangeImage: (image: File, position: number | null) => void;
  onDeleteMomment: (id: number) => void;
  sendData: (position?: number, moment?: CreateNewMomentProps) => void;
  isLoading: boolean;
}

const TimelineContext = createContext({} as TimelineContextProps);

interface TimelineProviderProps {
  moments: TimeLineDTO;
  children: ReactNode;
}

export const TimelineProvider = ({ children, moments }: TimelineProviderProps) => {
  const toast = useToast();
  const [newMoments, setNewMoments] = useState<ITimeLine[]>(moments as ITimeLine[]);

  const { mutate: updateMoment, isLoading: isLoadingUpdate } = useMutation<ITimeLine, Error, ITimeLine>(updateTimeline, {
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

  const { mutate: createMoment, isLoading: isLoadingCreate } = useMutation<ITimeLine, Error, CreateNewMomentProps>(
    createNewMoment,
    {
      onSuccess: (data: ITimeLine) => {
        const { id, year, description, imagem_url } = data;
        setNewMoments([...newMoments, { id, year, description, imagem_url }]);

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

  const { mutate: onDelete, isLoading: isLoadingDelete } = useMutation(deleteMoment, {
    onSuccess: (data, id) => {
      setNewMoments(newMoments.filter((item) => item.id != id));

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

  const handleChangeText = (text: string, position: number, field: string) => {
    newMoments[position][field] = text;
    setNewMoments([...newMoments]);
  };

  const handleChangeImage = (image: File, position: number | null) => {
    if (position != null) {
      newMoments[position].imagem_url = image;
      setNewMoments([...newMoments]);
    }
  };

  const sendData = (position?: number, moment?: CreateNewMomentProps) => {
    if (position != undefined) {
      updateMoment(newMoments[position]);
    } else if (moment) {
      createMoment(moment);
    }
  };

  const onDeleteMomment = (id: number) => {
    onDelete(id);
  };

  return (
    <TimelineContext.Provider
      value={{
        newMoments,
        handleChangeText,
        handleChangeImage,
        onDeleteMomment,
        sendData,
        isLoading: isLoadingCreate || isLoadingUpdate || isLoadingDelete,
      }}>
      {children}
    </TimelineContext.Provider>
  );
};

export function useTimeline() {
  const context = useContext(TimelineContext);

  return context;
}
