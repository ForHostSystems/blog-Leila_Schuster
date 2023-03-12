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
    year: "1993",
    image: slide1,
    description: "Miss Brasil e classificação no Miss Universo",
  },
  {
    year: "1994",
    image: slide2,
    description: "Trabalhos como modelo Europa e EUA",
  },
  {
    year: "1996",
    image: slide3,
    description: "Nascimento de meu filho Klaus",
  },
  {
    year: "2000",
    image: slide4,
    description: "Graduação em Jornalismo",
  },
  {
    year: "2001",
    image: slide5,
    description: "Apresentação Programa Beleza de Mulher - Band RJ",
  },
  {
    year: "2005",
    image: slide6,
    description: "Workshops de Beleza e Comportamento",
  },
  {
    year: "2006",
    image: slide7,
    description: "Lançamento grife Miss Schuster",
  },
  {
    year: "2007",
    image: slide8,
    description: "Curso de Fashion Design em Milão, Instituto Marangoni",
  },
  {
    year: "2008",
    image: slide9,
    description: "Comentarista Miss Universo",
  },
  {
    year: "2009",
    image: slide10,
    description: "Casamento",
  },
  {
    year: "2011",
    image: slide11,
    description: "Inauguração do atelier Miss Schuster em Itu",
  },
  {
    year: "2013",
    image: slide12,
    description: "Quadro Lifestyle Programa Amaury Jr",
  },
  {
    year: "2018",
    image: slide13,
    description: "Graduação Gastronomia",
  },
  {
    year: "2022",
    image: slide14,
    description: "Colunista revistas Go Where e Regional",
  },
];

export interface ITimeLine {
  year: string;
  image: File | string;
  description: string;
  [key: string]: File | string;
}

export interface TimeLineOutput {
  year: string;
  image: string;
  description: string;
}

export type TimeLineDTO = typeof mockedSlides;
