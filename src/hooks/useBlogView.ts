import { useQuery } from "react-query";

import { getPostBySlug } from "@/services/Blog";

export const useBlogView = (slug: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["getPostBySlug", slug],
    queryFn: async () => await getPostBySlug(slug),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
};
