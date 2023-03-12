import { mockedPartners } from "@/mocks/mockedPartners";
import { mockedPresentationSetion } from "@/mocks/mockedPresentationSetion";
import { mockedSlides } from "@/mocks/mockedSlides";
import { mockedTricsPreview } from "@/mocks/mockedTricks";

export const mockedHomeContent = {
  about: mockedPresentationSetion,
  tricks: mockedTricsPreview,
  sliders: mockedSlides,
  partners: mockedPartners,
  socialLinks: [],
};

export type MockHome = typeof mockedHomeContent;
