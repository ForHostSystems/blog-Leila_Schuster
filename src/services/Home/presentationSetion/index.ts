import { api } from "@/services/api";

export interface PresentationSetionImagesDTO {
  imagem1_url: string | File;
  imagem2_url: string | File;
  imagem3_url: string | File;
}

export interface PresentationSetionImagesOutput {
  imagem1_url: string;
  imagem2_url: string;
  imagem3_url: string;
}

export interface PresentationSetionDescriptionOutput {
  description: string;
}

const updatePresentationSetionImages = async (props: PresentationSetionImagesDTO): Promise<PresentationSetionImagesOutput> => {
  const formData = new FormData();
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value != "string") {
      formData.append(key.split("_")[0], value);
    }
  });
  const { data } = await api.put("/about/imagem/1", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const updatePresentationSetionDescription = async (description: string): Promise<PresentationSetionDescriptionOutput> => {
  const { data } = await api.put("/about/1", { description });

  return data;
};

export { updatePresentationSetionImages, updatePresentationSetionDescription };
