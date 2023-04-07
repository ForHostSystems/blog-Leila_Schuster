import { mockedPresentationSetion } from "@/mocks/mockedPresentationSetion";

export interface PresentationSetionDTO {
  description: string;
  imagem1_url: string | File;
  imagem2_url: string | File;
  imagem3_url: string | File;
}

export type PresentationSetionOutput = typeof mockedPresentationSetion;
