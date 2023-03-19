import React, { createContext, ReactNode, useContext } from "react";
import { useQuery } from "react-query";

import { ContactDTO, SocialLinksDTO } from "@/mocks/mockedFooterContent";
import { mockedHomeContent, MockHome } from "@/mocks/mockedHomeContent";
import { getHomeContent } from "@/services/Home";

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
  const { data, isLoading } = useQuery<MockHome>("getHomeContent", getHomeContent, {
    refetchOnWindowFocus: false,
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
