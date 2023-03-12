import { PartnersDTO } from "@/mocks/mockedPartners";
import { api } from "@/services/api";

const updatePartners = async (props: PartnersDTO): Promise<PartnersDTO[]> => {
  const formData = new FormData();
  if (typeof props.imagem_url != "string") {
    formData.append("imagem", props.imagem_url);
  }

  const { data } = await api.put(`/partner/imagem/${props.id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export { updatePartners };
