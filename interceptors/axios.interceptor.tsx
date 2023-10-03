'use client'

import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { getValidationErrors } from "@/utilities";
import { useToast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { AuthTokens } from "@/context/AuthContext";


export const AxiosInterceptors = () => {

    const {toast} = useToast()

    const updateHeader = (request: InternalAxiosRequestConfig<any>) => {
        const authToken = Cookies.get("authTokens")
        const token:AuthTokens = JSON.parse(authToken !== undefined ? authToken : "{access_token: '', token_type:''}")

        request.headers['Authorization'] = `${token.token_type} ${token.access_token}`
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
            return response
        },
        (error) => {
            toast({variant: "destructive", title: error.response.data.detail, description: getValidationErrors(error.response.data.detail)})
            return Promise.reject(error)
        }
    )
}