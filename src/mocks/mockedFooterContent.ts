export const mockedContact = {
  email: "contato@leilaschuster.com.br",
  email2: "leila@leilaschuster.com.br",
  telefone: "9 9999-9999",
};

export const mockedSocialLinks = [
  {
    id: 1,
    type: "instagram",
    link: "https://www.instagram.com/leilaschuster/",
  },
  {
    id: 2,
    type: "fecebook",
    link: "https://www.facebook.com/leila.schuster",
  },
  {
    id: 3,
    type: "youtube",
    link: "https://www.youtube.com/LeilaSchuster",
  },
  {
    id: 4,
    type: "twitter",
    link: "https://twitter.com/LeilaSchusterG",
  },
];

export interface ISocialLinks {
  id: number;
  type: string;
  link: string;
  [key: string]: string | number;
}

export type ContactDTO = typeof mockedContact;
export type SocialLinksDTO = typeof mockedSocialLinks;
