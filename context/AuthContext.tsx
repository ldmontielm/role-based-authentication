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

export type Permissions = {
  permissions: Array<Permission>
}

export const AuthContext = createContext({
  login: (authTokens: AuthTokens) => {},
  logout: () => {},
  setPermission: (permissions: Array<string>) => {},
  removePermissions: () => {}
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

  const setPermission = useCallback(function (permissions: Array<string>){
    Cookies.set("permissions_current", JSON.stringify(permissions))
  }, [])

  const removePermissions = useCallback(function () { 
    Cookies.remove("permissions_current")
  }, [])



  AxiosInterceptors()

  const value = useMemo(
    () => ({
      login,
      logout,
      setPermission,
      removePermissions
    }),
    [login, logout, setPermission, removePermissions]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}