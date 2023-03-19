import { ContactDTO, ISocialLinks } from "@/mocks/mockedFooterContent";
import { api } from "@/services/api";

const updateContact = async (contact: ContactDTO): Promise<ContactDTO> => {
  const { data } = await api.put("/contact/1", { ...contact, home_id: 1 });

  return data;
};

const updateSocialLink = async (socialLink: ISocialLinks): Promise<ISocialLinks> => {
  const { id, type, link } = socialLink;
  const body = {
    home_id: 1,
    type,
    link,
    description: "",
  };

  const { data } = await api.put(`/social-link/${id}`, body);

  return data;
};

export { updateContact, updateSocialLink };
