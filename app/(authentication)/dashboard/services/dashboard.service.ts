import axios from "axios"

export const getCurrentUsertActivate = (url: string) => {
    return axios.get(url)
}