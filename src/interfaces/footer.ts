import { mockedContact, mockedSocialLinks } from "@/mocks/mockedFooterContent";

export interface ISocialLinks {
  id: number;
  type: string;
  link: string;
  [key: string]: string | number;
}

export type ContactDTO = typeof mockedContact;
export type SocialLinksDTO = typeof mockedSocialLinks;
