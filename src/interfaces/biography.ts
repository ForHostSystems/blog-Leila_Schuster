export interface BiographyDTO {
  id: number;
  home_id: number;
  title: string;
  description: string;
  description1: string;
  description2: string;
  description3: string;
  imagem1_url: string | File;
  imagem2_url: string | File;
  imagem3_url: string | File;
  [key: string]: number | string | File;
}
