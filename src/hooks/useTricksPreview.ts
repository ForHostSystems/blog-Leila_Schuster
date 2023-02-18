import { useState } from "react";

import { TricksPreviewDTO, TricksPreviewOutput } from "@/mocks/mockedTricks";
import { useToast } from "@chakra-ui/react";

export const useTricksPreview = (tricksPreviewContent: TricksPreviewOutput) => {
  const toast = useToast();
  const [newTricksPreview, setNewTricksPreview] = useState<TricksPreviewDTO[]>(tricksPreviewContent);

  const handleChangeTitle = (text: string, position: number | null, field: string) => {
    if (position != null) {
      newTricksPreview[position].title = text;
      setNewTricksPreview([...newTricksPreview]);
    }
  };

  const handleChangeRevue = (text: string, position: number | null) => {
    if (position != null) {
      newTricksPreview[position].revue = text;
      setNewTricksPreview([...newTricksPreview]);
    }
  };

  const handleChangeEdition = (text: string, position: number | null) => {
    if (position != null) {
      newTricksPreview[position].edition = text;
      setNewTricksPreview([...newTricksPreview]);
    }
  };

  const sendData = () => {
    console.log(newTricksPreview);
  };

  return { handleChangeTitle, handleChangeRevue, handleChangeEdition, sendData };
};
