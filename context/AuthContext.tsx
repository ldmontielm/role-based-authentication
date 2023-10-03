"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import Cookies from "js-cookie";
import { AxiosInterceptors } from "@/interceptors/axios.interceptor";


export type AuthTokens = {
  access_token: string;
  token_type: string;
};

export type Permission= {
  id: string
  name: string
}

export type User = {
  username: string
  email: string
  full_name: string
  status: string
  permissions: Array<never>
}

export const AuthContext = createContext({
  login: (authTokens: AuthTokens) => {},
  logout: () => {}
});

interface Props {
  children: ReactNode
}

export default function AuthContextProvider({children}:Props) {
  const login = useCallback(function (authTokens: AuthTokens) {
    Cookies.set("authTokens", JSON.stringify(authTokens));
  }, []);

  const logout = useCallback(function () {
    Cookies.remove("authTokens");
  }, []);

  AxiosInterceptors()

  const value = useMemo(
    () => ({
      login,
      logout
    }),
    [login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}