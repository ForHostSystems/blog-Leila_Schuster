import { TricksPreviewDTO } from "@/mocks/mockedTricks";
import { api } from "@/services/api";

export interface TricksPreviewFilesDTO {
  arquivo_url: string | File;
  imagem_url: string | File;
  id: string;
}

export interface TricksPreviewTextsDTO {
  body: [
    string,
    {
      title: string;
      revue: string;
      edition: string;
    },
  ];
}

const updateTricksPreviewFiles = async (props: TricksPreviewFilesDTO): Promise<TricksPreviewDTO[0]> => {
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
  const { data } = await api.put(`/trick/${body[0]}`, { ...body[1], revue_preview: "" });

  return data;
};

export { updateTricksPreviewFiles, updateTrickPreview };
