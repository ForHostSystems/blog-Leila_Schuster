import slide1 from "../assets/1993-Miss_BR.jpg";
import slide2 from "../assets/1994-Modelo.jpeg";
import slide5 from "../assets/2001-Beleza_de_mulher.png";
import slide6 from "../assets/2005-workshop.jpeg";
import slide7 from "../assets/2006-grife_Miss_Schuster.png";
import slide8 from "../assets/2007-Marangoni_Curso.jpeg";

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
    image: null,
    description: "Nascimento de meu filho Klaus",
  },
  {
    year: "2000",
    image: null,
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
    image: null,
    description: "Comentarista Miss Universo",
  },
  {
    year: "2009",
    image: null,
    description: "Casamento",
  },
  {
    year: "2011",
    image: null,
    description: "Inauguração do atelier Miss Schuster em Itu",
  },
  {
    year: "2013",
    image: null,
    description: "Quadro Lifestyle Programa Amaury Jr",
  },
  {
    year: "2018",
    image: null,
    description: "Graduação Gastronomia",
  },
  {
    year: "2022",
    image: null,
    description: "Colunista revistas Go Where e Regional",
  },
];

export type TimeLine = typeof mockedSlides;
