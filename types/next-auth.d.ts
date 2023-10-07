import { User as DefaultUser, Session } from "next-auth"
import { JWT } from "next-auth/jwt"


interface UserToken {
  username: string,
  fullname: string,
  permissions: Array<string>,
  email: string,
  status: boolean,
}

declare module "next-auth" {
  interface User extends DefaultUser {
    // Define las propiedades de tu usuario aquí
    access_token: string,
    token_type: string,
    username: string,
    fullname: string,
    permissions: Array<string>,
    status: boolean,
    email: string,
  }
  interface Session {
    user: {
      username: string,
      fullname: string,
      permissions: Array<string>,
      email: string,
      status: boolean,
    },
    access_token: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    // Define las propiedades de tu token aquí
    user: UserToken;
    access_token: string;
  }
}