import axios from "axios"

export const getCurrentUsertActivate = () => {
    return axios.get("http://localhost:8000/user/me")
}