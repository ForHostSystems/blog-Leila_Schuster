import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { UseMutateFunction, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { useToast } from "@chakra-ui/react";

import { api } from "../services/api";
import { login, LoginInputDTO, LoginOutputDTO } from "../services/auth";

interface AuthContextProps {
  user: string | null;
  authenticated: boolean;
  isLoading: boolean;
  signIn: UseMutateFunction<LoginOutputDTO, Error, LoginInputDTO, unknown>;
  signOut: () => void;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [user, setUser] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState(false);

  const {
    mutate: signIn,
    isLoading,
    isError,
  } = useMutation<LoginOutputDTO, Error, LoginInputDTO>(login, {
    onSuccess: ({ email, accessToken, refreshToken }) => {
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", email);
      setUser(user);
      setAuthenticated(true);
      navigate("/");
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userStorage = localStorage.getItem("user");

    if (token != null && userStorage != null) {
      setAuthenticated(true);
      setUser(userStorage);
      api.interceptors.request.use(async (req) => {
        if (req.headers != null) {
          req.headers.Authorization = `Bearer ${token}`;
        }
        return req;
      });
    }
  }, []);

  useEffect(() => {
    if (isError) {
      toast({
        title: "OPS!",
        description: "Ocorreu um erro inesperado, tente novamente mais tarde.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isError, toast]);

  const signOut = () => {
    localStorage.clear();
    setAuthenticated(false);
    setUser(null);

    api.interceptors.request.use(async (req) => {
      if (req.headers != null) {
        req.headers.Authorization = false;
      }
      return req;
    });

    navigate("/login");
  };

  return <AuthContext.Provider value={{ authenticated, user, isLoading, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
