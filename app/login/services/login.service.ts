import axios from "axios"

export interface Credentials {
    username: string
    password: string
}

export const accessTokenLogin = (credentials: Credentials) => {
    return axios.post("http://localhost:8000/token", credentials, {
        headers: {
            "Accept": 'application/json',
            "Content-Type": "application/x-www-form-urlencoded" 
        }
    })
}