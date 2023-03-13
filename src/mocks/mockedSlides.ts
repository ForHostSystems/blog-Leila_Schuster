import slide1 from "../assets/1993-Miss_BR.png";
import slide2 from "../assets/1994-Modelo.jpeg";
import slide3 from "../assets/1996-nascimento_filho.jpg";
import slide4 from "../assets/2000-jornalismo.png";
import slide5 from "../assets/2001-Beleza_de_mulher.png";
import slide6 from "../assets/2005-workshop.jpeg";
import slide7 from "../assets/2006-grife_Miss_Schuster.png";
import slide8 from "../assets/2007-Marangoni_Curso.jpeg";
import slide9 from "../assets/2008-comentarista.jpg";
import slide10 from "../assets/2009-casamento.png";
import slide11 from "../assets/2011-Inauguração_Atelie.jpg";
import slide12 from "../assets/2013-Amaury_Jr.jpg";
import slide13 from "../assets/2018-gastronomia.jpg";
import slide14 from "../assets/2022-logos-revistas.png";

export const mockedSlides = [
  {
    id: 1,
    year: "1993",
    imagem_url: slide1,
    description: "Miss Brasil e classificação no Miss Universo",
  },
  {
    id: 2,
    year: "1994",
    imagem_url: slide2,
    description: "Trabalhos como modelo Europa e EUA",
  },
  {
    id: 3,
    year: "1996",
    imagem_url: slide3,
    description: "Nascimento de meu filho Klaus",
  },
  {
    id: 4,
    year: "2000",
    imagem_url: slide4,
    description: "Graduação em Jornalismo",
  },
  {
    id: 5,
    year: "2001",
    imagem_url: slide5,
    description: "Apresentação Programa Beleza de Mulher - Band RJ",
  },
  {
    id: 6,
    year: "2005",
    imagem_url: slide6,
    description: "Workshops de Beleza e Comportamento",
  },
  {
    id: 7,
    year: "2006",
    imagem_url: slide7,
    description: "Lançamento grife Miss Schuster",
  },
  {
    id: 8,
    year: "2007",
    imagem_url: slide8,
    description: "Curso de Fashion Design em Milão, Instituto Marangoni",
  },
  {
    id: 9,
    year: "2008",
    imagem_url: slide9,
    description: "Comentarista Miss Universo",
  },
  {
    id: 10,
    year: "2009",
    imagem_url: slide10,
    description: "Casamento",
  },
  {
    id: 11,
    year: "2011",
    imagem_url: slide11,
    description: "Inauguração do atelier Miss Schuster em Itu",
  },
  {
    id: 12,
    year: "2013",
    imagem_url: slide12,
    description: "Quadro Lifestyle Programa Amaury Jr",
  },
  {
    id: 13,
    year: "2018",
    imagem_url: slide13,
    description: "Graduação Gastronomia",
  },
  {
    id: 14,
    year: "2022",
    imagem_url: slide14,
    description: "Colunista revistas Go Where e Regional",
  },
];

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
