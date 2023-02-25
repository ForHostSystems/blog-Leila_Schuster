import { mockedPresentationSetion } from "@/mocks/mockedPresentationSetion";
import { mockedTricsPreview } from "@/mocks/mockedTricks";

export const mockedHomeContent = {
  about: mockedPresentationSetion,
  tricks: mockedTricsPreview,
};

export type MockHome = typeof mockedHomeContent;
