import { TricksDTO } from "@/interfaces/tricks";

import { api } from "../api";

function createFormData(trick: TricksDTO) {
  const formData = new FormData();
  formData.append("home_id", "1");
  Object.entries(trick).forEach(([key, value]) => {
    if (key != "id" && !key.includes("mimetype") && typeof value != "undefined" && typeof value != "number") {
      if (key == "revue_imagem_url") {
        formData.append("imagem_revue", value);
      } else if (typeof value == "object") {
        formData.append(key.split("_")[0], value);
      } else {
        formData.append(key, value);
      }
    }
  });

  return formData;
}

const getTricks = async (): Promise<TricksDTO[]> => {
  const { data } = await api.get("/dicas/home/1");

  return data;
};

const addNewTrick = async (trick: TricksDTO): Promise<TricksDTO> => {
  const formData = createFormData(trick);
  const { data } = await api.post("/dicas", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const updateTrick = async (trick: TricksDTO): Promise<TricksDTO> => {
  const formData = createFormData(trick);
  const { data } = await api.put(`/dicas/${trick.id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const deleteTrick = async (id: number) => {
  await api.delete(`/dicas/${id}`);
};

export { getTricks, addNewTrick, updateTrick, deleteTrick };
