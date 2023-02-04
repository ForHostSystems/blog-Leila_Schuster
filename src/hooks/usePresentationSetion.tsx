import { ChangeEvent, useState } from "react";

import { mockedPresentationSetion, PresentationSetionDTO } from "@/mocks/mockedPresentationSetion";

export const usePresentationSetion = () => {
  const [newPresentation, setNewPresentation] = useState<PresentationSetionDTO>(mockedPresentationSetion);

  const handleChangeBanner = (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);
    setNewPresentation({ ...newPresentation, imagem1: formData });
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setNewPresentation({ ...newPresentation, description: e.target.value });
  };

  const sendData = () => {
    console.log(newPresentation);
  };

  return {
    mockedPresentationSetion,
    handleChangeBanner,
    handleChangeDescription,
    sendData,
  };
};
