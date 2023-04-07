export interface PartnersDTO {
  id: number;
  imagem_url: string | File;
  [key: string]: number | string | File;
}

export interface PartnersOutput {
  id: number;
  imagem_url: string;
}
