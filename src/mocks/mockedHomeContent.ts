import { mockedPresentationSetion } from "@/mocks/mockedPresentationSetion";
import { mockedTricsPreview } from "@/mocks/mockedTricks";

export const mockedHomeContent = {
  about: mockedPresentationSetion,
  tricks: mockedTricsPreview,
  sliders: [],
  socialLinks: [],
};

export type MockHome = typeof mockedHomeContent;
