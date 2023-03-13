import { ITimeLine } from "@/mocks/mockedSlides";
import { api } from "@/services/api";

export interface CreateNewMomentProps {
  year: string;
  imagem_url: File;
  description: string;
}

const updateTimeline = async (props: ITimeLine): Promise<ITimeLine> => {
  const formData = new FormData();
  formData.append("home_id", "1");
  Object.entries(props).forEach(([value, key]) => {
    if (typeof value == "object") {
      formData.append("imagem", value);
    } else if (key != "id") {
      formData.append(key as string, value);
    }
  });

  const { data } = await api.put(`/slider/${props.id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const createNewMoment = async (props: CreateNewMomentProps): Promise<ITimeLine> => {
  const formData = new FormData();
  formData.append("home_id", "1");
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value == "object") {
      formData.append("imagem", value);
    } else {
      formData.append(key, value);
    }
  });

  const { data } = await api.post("/slider", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const deleteMoment = async (id: number) => {
  await api.delete(`/slider/${id}`);
};

export { updateTimeline, createNewMoment, deleteMoment };
