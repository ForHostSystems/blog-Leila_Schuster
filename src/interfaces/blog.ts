import { mockedBlogContent } from "@/mocks/mockedBlogContent";
import { mockedBlogs } from "@/mocks/mockedBlogs";

export interface MockedBlogContentProps {
  id: string;
  date: string;
  title: string;
  images: TypeImageBlog[];
  description: string;
  tags: string[];
}

export interface TypeImageBlog {
  retrate: boolean;
  image: string;
  legend: string;
}

export interface BlogListDTO {
  id: number;
  imagem1_url: string;
  imagem2_url: string;
  title: string;
  content: string;
  slug: string;
  tags: string;
  [key: string]: string | number;
}

export type BlogContentDTO = typeof mockedBlogContent;
export type BlogsDTOMock = typeof mockedBlogs;
