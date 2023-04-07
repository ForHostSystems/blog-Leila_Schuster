import React, { createContext, ReactNode, useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { BlogListDTO } from "@/interfaces/blog";
import { addNewPost, deletePost, getBlogContent, IBlog, updatePost } from "@/services/Blog";
import { useToast } from "@chakra-ui/react";

interface BlogContextProps {
  data: BlogListDTO[] | [];
  sendData: (post: IBlog, isUpdate?: boolean) => void;
  isLoading: boolean;
  page: number;
  onChangePage: (page: number) => void;
  onDeletePost: (id: number) => void;
}

const BlogContext = createContext({} as BlogContextProps);

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const toast = useToast();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["getBlogContent", page],
    queryFn: async () => await getBlogContent(page),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const { mutate: addPost, isLoading: isLoadingNewPost } = useMutation<BlogListDTO, Error, IBlog>(addNewPost, {
    onSuccess: (data: BlogListDTO) => {
      updateData(data, null);

      toast({
        title: "Sucesso!",
        description: "Suas alterações foram salvas",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: "OPS!",
        description: "Algo deu errado, por favor tente novamente mais tarde!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const { mutate: update, isLoading: isLoadingUpdate } = useMutation<BlogListDTO | undefined, Error, IBlog>(updatePost, {
    onSuccess: (res: BlogListDTO | undefined, { id }) => {
      if (res) {
        data?.forEach((value, index) => {
          if (value.id == id) updateData(res, index);
        });

        toast({
          title: "Sucesso!",
          description: "Suas alterações foram salvas",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    },
    onError: () => {
      toast({
        title: "OPS!",
        description: "Algo deu errado, por favor tente novamente mais tarde!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const { mutate: removePost, isLoading: isLoadingDelete } = useMutation(deletePost, {
    onSuccess: (res, id) => {
      data?.forEach((value, index) => {
        if (value.id == id) data.splice(index, 1);
      });

      toast({
        title: "Sucesso!",
        description: "Suas alterações foram salvas",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: "OPS!",
        description: "Algo deu errado, por favor tente novamente mais tarde!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const sendData = (post: IBlog, isUpdate?: boolean) => {
    if (update) {
      update(post);
    } else {
      addPost(post);
    }
  };

  const updateData = (post: BlogListDTO, position: number | null) => {
    if (data?.length) {
      if (position != null) {
        console.log("aqui");
        data[position] = post;
      } else data.push(post);
    }
  };

  const onChangePage = (page: number) => {
    setPage(page);
  };

  const onDeletePost = (id: number) => {
    if (data?.length) {
      removePost(id);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        data: data ?? [],
        sendData,
        isLoading: isLoading || isLoadingNewPost || isLoadingDelete || isLoadingUpdate,
        page,
        onChangePage,
        onDeletePost,
      }}>
      {children}
    </BlogContext.Provider>
  );
};

export function useBlog() {
  const context = useContext(BlogContext);

  return context;
}
