import logoGoWhere from "../assets/logo_revistar_gowhere.png";
import logoRegional from "../assets/logotipo_revista_regional.png";

export const mockedPartners = [
  {
    id: 1,
    imagem_url: logoRegional,
  },
  {
    id: 2,
    imagem_url: logoGoWhere,
  },
];

export interface PartnersDTO {
  id: number;
  imagem_url: string | File;
  [key: string]: number | string | File;
}

export interface PartnersOutput {
  id: number;
  imagem_url: string;
}
