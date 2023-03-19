import { mockedContact, mockedSocialLinks } from "./mockedFooterContent";
import { mockedPartners } from "./mockedPartners";
import { mockedPresentationSetion } from "./mockedPresentationSetion";
import { mockedSlides } from "./mockedSlides";
import { mockedTricsPreview } from "./mockedTricks";

export const mockedHomeContent = {
  about: mockedPresentationSetion,
  tricks: mockedTricsPreview,
  sliders: mockedSlides,
  partners: mockedPartners,
  contact: mockedContact,
  socialLinks: mockedSocialLinks,
};

export type MockHome = typeof mockedHomeContent;
