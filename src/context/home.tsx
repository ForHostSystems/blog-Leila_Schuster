import React, { createContext, ReactNode, useContext } from "react";
import { useQuery } from "react-query";

import { ContactDTO, SocialLinksDTO } from "@/interfaces/footer";
import { mockedHomeContent, MockHome } from "@/mocks/mockedHomeContent";
import { getHomeContent } from "@/services/Home";
import { useToast } from "@chakra-ui/react";

interface HomeContextProps {
  data: MockHome;
  isLoading: boolean;
  updateFooterContact: (newContact: ContactDTO) => void;
  updateFooterSocialLinks: (newSocialLinks: SocialLinksDTO) => void;
}

const HomeContext = createContext({} as HomeContextProps);

interface HomeProviderProps {
  children: ReactNode;
}

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const toast = useToast();
  const { data, isLoading } = useQuery<MockHome>("getHomeContent", getHomeContent, {
    refetchOnWindowFocus: false,
    onError: () => {
      toast({
        title: "OPS!",
        description: "Algo deu errado, o conteúdo carregado pode estar desatualizado, tente recarregar a página!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const updateFooterContact = (newContact: ContactDTO) => {
    if (data?.contact) {
      data.contact = newContact;
    }
  };

  const updateFooterSocialLinks = (newSocialLinks: SocialLinksDTO) => {
    if (data?.socialLinks) {
      data.socialLinks = newSocialLinks;
    }
  };

  return (
    <HomeContext.Provider value={{ data: data ?? mockedHomeContent, isLoading, updateFooterContact, updateFooterSocialLinks }}>
      {children}
    </HomeContext.Provider>
  );
};

export function useHomeContent() {
  const context = useContext(HomeContext);

  return context;
}
