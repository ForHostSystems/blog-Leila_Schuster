import { mockedPartners } from "@/mocks/mockedPartners";
import { mockedPresentationSetion } from "@/mocks/mockedPresentationSetion";
import { mockedTricsPreview } from "@/mocks/mockedTricks";

export const mockedHomeContent = {
  about: mockedPresentationSetion,
  tricks: mockedTricsPreview,
  sliders: [],
  partners: mockedPartners,
  socialLinks: [],
};

export type MockHome = typeof mockedHomeContent;
