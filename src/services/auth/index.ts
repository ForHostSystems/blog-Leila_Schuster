import { api } from "../api";

export interface LoginInputDTO {
  email: string;
  password: string;
}

export interface UserDTO {
  email: string;
}

export interface LoginOutputDTO {
  email: string;
  accessToken: string;
  refreshToken: string;
}

const login = async ({ email, password }: LoginInputDTO): Promise<LoginOutputDTO> => {
  const { data } = await api.post("/auth/login", {
    email,
    senha: password,
  });

  return data;
};

export { login };
