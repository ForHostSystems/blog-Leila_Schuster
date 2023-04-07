import { mockedSlides } from "@/mocks/mockedSlides";

export interface ITimeLine {
  id: number;
  year: string;
  imagem_url: File | string;
  description: string;
  [key: string]: File | string | number;
}

export interface TimeLineOutput {
  year: string;
  imagem_url: string;
  description: string;
}

export type TimeLineDTO = typeof mockedSlides;
