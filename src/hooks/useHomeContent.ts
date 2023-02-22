import { useQuery } from "react-query";

import { getHomeContent, HomeDTO } from "./../services/Home/index";

export const useHomeContent = () => {
  const { data: presententionSetionContent, isError, isLoading } = useQuery<HomeDTO>("getHomeContent", getHomeContent);

  return { presententionSetionContent, isError, isLoading };
};
