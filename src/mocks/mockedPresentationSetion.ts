import bannerHome from "@/assets/banner-home.png";
import imageBioBottom from "@/assets/image-bio-bottom.png";
import imageBioTop from "@/assets/image-bio-top.png";

export const mockedPresentationSetion = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.",
  imagem1: bannerHome,
  imagem2: imageBioTop,
  imagem3: imageBioBottom,
};

export interface PresentationSetionDTO {
  description: string;
  imagem1: string | FormData;
  imagem2: string | FormData;
  imagem3: string | FormData;
}

export type PresentationSetionOutput = typeof mockedPresentationSetion;
