import { useState } from "react";
import { useMutation } from "react-query";

import { useHomeContent } from "@/context/home";
import { ContactDTO, ISocialLinks } from "@/interfaces/footer";
import { updateContact, updateSocialLink } from "@/services/Footer";
import { useToast } from "@chakra-ui/react";

export const useFooter = () => {
  const toast = useToast();
  const { data, updateFooterContact, updateFooterSocialLinks } = useHomeContent();
  const [newContact, setNewContact] = useState<ContactDTO>(data.contact);
  const [newSocialLinks, setNewSocialLinks] = useState<ISocialLinks[]>(data.socialLinks as ISocialLinks[]);

  const { mutate: updateNewContact, isLoading: isLoadingContact } = useMutation<ContactDTO, Error, ContactDTO>(updateContact, {
    onSuccess: (data: ContactDTO) => {
      updateFooterContact(data);
      toast({
        title: "Sucesso!",
        description: "Suas alterações foram salvas",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: "OPS!",
        description: "Algo deu errado, por favor tente novamente mais tarde!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const { mutate: updateNewSocialLink, isLoading: isLoadingSocialLink } = useMutation<ISocialLinks, Error, ISocialLinks>(
    updateSocialLink,
    {
      onSuccess: () => {
        updateFooterSocialLinks(newSocialLinks);
        toast({
          title: "Sucesso!",
          description: "Suas alterações foram salvas",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      },
      onError: () => {
        toast({
          title: "OPS!",
          description: "Algo deu errado, por favor tente novamente mais tarde!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    },
  );

  const handleChangeText = (text: string, field: string) => {
    setNewContact({ ...newContact, [field]: text });
  };

  const handleChangeSocialLink = (position: number, link: string) => {
    newSocialLinks[position].link = link;
    setNewSocialLinks([...newSocialLinks]);
  };

  const sendDataContact = () => {
    updateNewContact(newContact);
  };

  const sendDataSocialLinks = (position: number) => {
    updateNewSocialLink(newSocialLinks[position]);
  };

  const onCancelContact = () => {
    setNewContact(data.contact);
  };

  const onCancelSocialLinks = () => {
    setNewSocialLinks(data.socialLinks);
  };

  return {
    handleChangeText,
    handleChangeSocialLink,
    sendDataContact,
    sendDataSocialLinks,
    onCancelContact,
    onCancelSocialLinks,
    isLoading: isLoadingContact || isLoadingSocialLink,
  };
};
