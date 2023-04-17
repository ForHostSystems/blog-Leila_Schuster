// import { TricksDTO } from './tricks';
import { mockedTricsPreview } from "@/mocks/mockedTricks";

export interface TricksPreviewDTO {
  id: string;
  title: string;
  revue: string;
  edition: string;
  imagem_url: string | File | null;
  arquivo_url: string | File | null;
  video_url: string | null;
  video_description: string;
  [key: string]: string | File | null;
}

export interface TricksDTO {
  id: number;
  imagem1_url: string | File;
  imagem2_url: string | File;
  title: string;
  revue: string;
  description: string;
  edition: string;
  revue_imagem_url: string | File;
  arquivo_url: string | File;
  [key: string]: string | File | number;
}

export type TricksPreviewOutput = typeof mockedTricsPreview;
