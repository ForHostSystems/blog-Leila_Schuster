import { mockedTrics, mockedTricsPreview } from "@/mocks/mockedTricks";

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

export type TricksPreviewOutput = typeof mockedTricsPreview;
export type TricksDTO = typeof mockedTrics;
