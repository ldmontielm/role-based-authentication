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
import { getCurrentUsertActivate } from "@/app/dashboard/services/dashboard.service";

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

const AUTH_TOKENS_KEY = "NEXT_JS_AUTH";

export const AuthContext = createContext({
  login: (authTokens: AuthTokens) => {},
  logout: () => {},
  loginUser: () => {},
  user: {
    username: "",
    email: "",
    full_name: "",
    status: "",
    permissions: []
  }
});

interface Props {
  children: ReactNode
}

export default function AuthContextProvider({children}:Props) {

  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    full_name: "",
    status: "",
    permissions: []
  })


  const login = useCallback(function (authTokens: AuthTokens) {
    Cookies.set("authTokens", JSON.stringify(authTokens));
  }, []);

  const logout = useCallback(function () {
    Cookies.remove("authTokens");
  }, []);

  const loginUser = useCallback(async function () {
    const data = await getCurrentUsertActivate()
    setUser(data.data)
  }, [])

  AxiosInterceptors()

  const value = useMemo(
    () => ({
      login,
      logout,
      loginUser,
      user 
    }),
    [login, logout, loginUser, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}