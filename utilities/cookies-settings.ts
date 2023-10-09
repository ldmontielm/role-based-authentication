'use server'

import { cookies } from 'next/headers'

export async function setCookie(data: string){
    cookies().set("refresh_token", data, {
        expires: 30,
        secure: !(process.env.NODE_ENV === "development"),
        httpOnly: true
    })
}