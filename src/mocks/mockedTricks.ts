import dicas_img2 from "../assets/DicasLS-img2.png";
import dicas_img3 from "../assets/DicasLS-img3.png";
import dicas_img4 from "../assets/DicasLS-img4.png";
import logoGoWhere from "../assets/logo_revistar_gowhere.png";
import logoRegional from "../assets/logotipo_revista_regional.png";
import pdf from "../assets/Manual_de_Marca_Leila_Schuster.pdf";

export const mockedTricsPreview = [
  {
    id: "1",
    title: "Lifestyle",
    revue: "Revista Regional",
    edition: "Edição n° xxx - 00/00",
    imagem_url: logoRegional,
    arquivo_url: pdf,
    video_url: null,
    video_description: "",
  },
  {
    id: "2",
    title: "Go Lifestyle",
    revue: "Revista Go Where",
    edition: "Edição n° xxx - 00/00",
    imagem_url: logoGoWhere,
    arquivo_url: pdf,
    video_url: null,
    video_description: "",
  },
];

export const mockedTrics = [
  {
    cover: dicas_img2,
    photo: dicas_img3,
    title: "Lifestyle",
    subtitle: "Revista Regional",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non turpis lacinia, dapibus ex at, maximus metus. Sed pharetra efficitur luctus. Fusce convallis, lectus eget lobortis condimentum, orci risus tincidunt metus, vel cursus augue tellus eu neque. Quisque tincidunt risus sed.",
    edition: "Edição n° xxxx - 00/00",
    logo: logoRegional,
    pdf,
  },
  {
    cover: dicas_img2,
    photo: dicas_img4,
    title: "Go Lifestyle",
    subtitle: "Revista Go Where",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non turpis lacinia, dapibus ex at, maximus metus. Sed pharetra efficitur luctus. Fusce convallis, lectus eget lobortis condimentum, orci risus tincidunt metus, vel cursus augue tellus eu neque. Quisque tincidunt risus sed.",
    edition: "Edição n° xxxx - 00/00",
    logo: logoGoWhere,
    pdf,
  },
];
