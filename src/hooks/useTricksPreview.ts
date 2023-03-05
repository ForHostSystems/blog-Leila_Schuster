import { useState } from "react";
import { useMutation } from "react-query";

import { TricksPreviewDTO, TricksPreviewOutput } from "@/mocks/mockedTricks";
import { useToast } from "@chakra-ui/react";

import {
  TricksPreviewFilesDTO,
  TricksPreviewTextsDTO,
  updateTrickPreview,
  updateTricksPreviewFiles,
} from "./../services/Home/tricksPreview/index";

export const useTricksPreview = (tricksPreviewContent: TricksPreviewOutput) => {
  const toast = useToast();

  const { mutate: sendTrickPreview, isLoading: isLoadingTrickPreview } = useMutation<
    TricksPreviewDTO[0],
    Error,
    TricksPreviewTextsDTO
  >(updateTrickPreview, {
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Suas alterações foram salvas",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const { mutate: sendFiles, isLoading: isLoadingImages } = useMutation<TricksPreviewDTO[0], Error, TricksPreviewFilesDTO>(
    updateTricksPreviewFiles,
    {
      onSuccess: (data: TricksPreviewDTO[0], { id }) => {
        let pos: number | null = null;
        newTricksPreview.filter((value, index) => {
          if (value.id == id) pos = index;
          return false;
        });

        if (pos != null) {
          const { title, edition, revue, video_description, video_url } = newTricksPreview[pos];

          sendTrickPreview({
            body: [
              id,
              {
                title,
                revue,
                edition,
                video_description,
                video_url,
              },
            ],
          });
        }
      },
    },
  );

  const [newTricksPreview, setNewTricksPreview] = useState<TricksPreviewDTO[]>(tricksPreviewContent);

  const handleChangeText = (text: string, position: number | null, field: string) => {
    if (position != null) {
      newTricksPreview[position][field] = text;
      setNewTricksPreview([...newTricksPreview]);
    }
  };

  const handleChangeImage = (image: File, imageKey: string, position: number | null) => {
    if (position != null) {
      newTricksPreview[position][imageKey] = image;
      setNewTricksPreview([...newTricksPreview]);
    }
  };

  const sendData = (position: number) => {
    const body = {
      arquivo_url: newTricksPreview[position].video_url.length > 0 ? "" : newTricksPreview[position].arquivo_url,
      imagem_url: newTricksPreview[position].imagem_url,
      id: newTricksPreview[position].id,
    };

    sendFiles(body);
  };

  return { handleChangeText, handleChangeImage, sendData, isLoading: isLoadingImages || isLoadingTrickPreview };
};
