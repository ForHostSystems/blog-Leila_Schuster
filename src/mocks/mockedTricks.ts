import logoGoWhere from "../assets/logo_revistar_gowhere.png";
import logoRegional from "../assets/logotipo_revista_regional.png";
import pdf from "../assets/Manual_de_Marca_Leila_Schuster.pdf";

export const mockedTrics = [
  {
    title: "Lifestyle",
    revue: "Revista Regional",
    edition: "Edição n° xxx - 00/00",
    logo: logoRegional,
    revuePreview: pdf,
  },
  {
    title: "Go Lifestyle",
    revue: "Revista Go Where",
    edition: "Edição n° xxx - 00/00",
    logo: logoGoWhere,
    revuePreview: pdf,
  },
];

export type TricksDTO = typeof mockedTrics;
