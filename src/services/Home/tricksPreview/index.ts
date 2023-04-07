import { TricksPreviewDTO } from "@/interfaces/tricks";
import { api } from "@/services/api";

export interface TricksPreviewFilesDTO {
  arquivo_url: string | File | null;
  imagem_url: string | File | null;
  id: string;
}

export interface TricksPreviewTextsDTO {
  body: [
    string,
    {
      title: string;
      revue: string;
      edition: string;
      video_description: string;
      video_url: string | null;
    },
  ];
}

const updateTricksPreviewFiles = async (props: TricksPreviewFilesDTO): Promise<TricksPreviewDTO> => {
  const formData = new FormData();
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value != "string" && key != "id") {
      formData.append(key.split("_")[0], value);
    }
  });

  const { data } = await api.put(`/trick/imagem/${props.id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const updateTrickPreview = async ({ body }: TricksPreviewTextsDTO) => {
  const { data } = await api.put(`/trick/${body[0]}`, body[1]);

  return data;
};

export { updateTricksPreviewFiles, updateTrickPreview };
