import bannerHome from "@/assets/banner-home.png";
import imageBioBottom from "@/assets/image-bio-bottom.png";
import imageBioTop from "@/assets/image-bio-top.png";

export const mockedPresentationSetion = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.",
  imagem1_url: bannerHome,
  imagem2_url: imageBioTop,
  imagem3_url: imageBioBottom,
};

export interface PresentationSetionDTO {
  description: string;
  imagem1_url: string | File;
  imagem2_url: string | File;
  imagem3_url: string | File;
}

export type PresentationSetionOutput = typeof mockedPresentationSetion;
