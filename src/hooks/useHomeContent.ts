import { useQuery } from "react-query";

import { MockHome } from "@/mocks/mockedHomeContent";

import { getHomeContent } from "./../services/Home/index";

export const useHomeContent = () => {
  const {
    data: presententionSetionContent,
    isError,
    isLoading,
  } = useQuery<MockHome>("getHomeContent", getHomeContent, {
    refetchOnWindowFocus: false,
  });

  return { presententionSetionContent, isError, isLoading };
};
