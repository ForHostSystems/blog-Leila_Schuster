import { PartnersDTO } from "@/mocks/mockedPartners";
import { api } from "@/services/api";

export interface CreateNewPartnerProps {
  imagem_url: File;
}

const updatePartners = async (props: PartnersDTO): Promise<PartnersDTO[]> => {
  const formData = new FormData();
  if (typeof props.imagem_url != "string") {
    formData.append("imagem", props.imagem_url);
  }

  const { data } = await api.put(`/partner/${props.id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const createNewPartner = async ({ imagem_url }: CreateNewPartnerProps): Promise<PartnersDTO> => {
  const formData = new FormData();
  formData.append("home_id", "1");
  if (typeof imagem_url != "string") {
    formData.append("imagem", imagem_url);
  }

  const { data } = await api.post("/partner", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const deletePartner = async (id: number) => {
  await api.delete(`/partner/${id}`);
};

export { updatePartners, createNewPartner, deletePartner };
