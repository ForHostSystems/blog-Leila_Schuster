import { BlogListDTO } from "@/interfaces/blog";

import { api } from "../api";

export interface IBlog {
  id?: number;
  imagem1_url: File | string;
  imagem2_url: File | string;
  title: string;
  content: string;
  tags: string;
  [key: string]: File | string | number | undefined;
}

const getBlogContent = async (page: number): Promise<BlogListDTO[]> => {
  const { data } = await api.get(`/post/home/1?limit=10&page=${page}`);

  return data;
};

const addNewPost = async (post: IBlog): Promise<BlogListDTO> => {
  const formData = new FormData();
  formData.append("home_id", "1");
  Object.entries(post).forEach(([key, value]) => {
    if (key != "id" && typeof value != "undefined" && typeof value != "number") {
      if (key.includes("imagem")) {
        formData.append(key.split("_")[0], value);
      }
      formData.append(key, value);
    }
  });

  const { data } = await api.post("/post", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const updatePost = async (post: IBlog): Promise<BlogListDTO | undefined> => {
  const formData = new FormData();
  formData.append("home_id", "1");
  Object.entries(post).forEach(([key, value]) => {
    if (key != "id" && typeof value != "undefined" && typeof value != "number") {
      if (key.includes("imagem")) {
        formData.append(key.split("_")[0], value);
      }
      formData.append(key, value);
    }
  });

  if (post.id) {
    const { data } = await api.put(`/post/${post.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  }
};

const deletePost = async (id: number): Promise<BlogListDTO> => {
  const { data } = await api.delete(`/post/${id}`);

  return data;
};

export { getBlogContent, addNewPost, updatePost, deletePost };
