'use client'

import axios, { InternalAxiosRequestConfig } from "axios"
import { getValidationErrors } from "@/utilities";
import { useToast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { AuthTokens } from "@/context/AuthContext";


export const AxiosInterceptors = () => {

    const {toast} = useToast()

    const updateHeader = (request: InternalAxiosRequestConfig<any>) => {
        const authToken = Cookies.get("authTokens")
        const token:AuthTokens = JSON.parse(authToken !== undefined ? authToken : "")

        request.headers['Authorization'] = `bearer ${token}`
        request.headers['Content-Type'] = 'application/json'
        return request
    }


    axios.interceptors.request.use((request) => { 
        if(request.url?.includes("token")){
            return request
        }
        return updateHeader(request)
    });

    
    axios.interceptors.response.use(
        (response) => {
            console.log("Holaaa")
            return response
        },
        (error) => {
            toast({variant: "destructive", title: error.response.data.detail, description: getValidationErrors(error.response.data.detail)})
            return Promise.reject(error)
        }
    )
}