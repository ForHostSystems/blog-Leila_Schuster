import { MockHome } from "@/mocks/mockedHomeContent";

import { api } from "../api";

const getHomeContent = async (): Promise<MockHome> => {
  const { data } = await api.get("/home/user/1");

  return data;
};

export { getHomeContent };
