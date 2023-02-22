import { MockHome } from "@/mocks/mockedHomeContent";

import { api } from "../api";

export interface HomeDTO extends MockHome {
  sliders: [];
  socialLinks: [];
}

const getHomeContent = async (): Promise<HomeDTO> => {
  const { data } = await api.get("/home/user/1");

  return data;
};

export { getHomeContent };
