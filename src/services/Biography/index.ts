import { BiographyDTO } from "@/interfaces/biography";

import { api } from "../api";

const getBiography = async (): Promise<BiographyDTO> => {
  const { data } = await api.get("/biografia/home/1");

  return data;
};

const updateBiography = async (biography: BiographyDTO): Promise<BiographyDTO> => {
  const { id, description, description1, description2, description3, imagem1_url, imagem2_url, imagem3_url, title } = biography;
  const body = {
    description,
    description1,
    description2,
    description3,
    imagem1: imagem1_url,
    imagem2: imagem2_url,
    imagem3: imagem3_url,
    title,
  };

  const formData = new FormData();
  formData.append("home_id", "1");
  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const { data } = await api.put(`/biografia/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export { getBiography, updateBiography };
