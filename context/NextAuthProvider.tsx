'use client'
import { SessionProvider } from "next-auth/react"
import { AxiosInterceptors } from "@/interceptors/axios.interceptor"

interface Props {
    children: React.ReactNode
}

export default function NextAuthProvider({children}: Props) {
  AxiosInterceptors()
  return <SessionProvider>
    {children}
  </SessionProvider>
}
