import capaBeleza from "../assets/capa_blog_beleza.png";
import capaGastronomia from "../assets/capa_blog_gastronomia.png";
import capaViagem from "../assets/capa_blog_viagens.png";

export const mockedBlogs = [
  {
    title: "VIAGENS",
    subTitle: "Lorem ipsun",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit sem in tellus vestibulum scelerisque. Donec elementum metus erat, ut porta turpis euismod sed.",
    image: capaViagem,
  },
  {
    title: "GASTRONOMIA",
    subTitle: "Lorem ipsun",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit sem in tellus vestibulum scelerisque. Donec elementum metus erat, ut porta turpis euismod sed.",
    image: capaGastronomia,
  },
  {
    title: "BELEZA",
    subTitle: "Lorem ipsun",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit sem in tellus vestibulum scelerisque. Donec elementum metus erat, ut porta turpis euismod sed.",
    image: capaBeleza,
  },
];

export type BlogsDTO = typeof mockedBlogs;
