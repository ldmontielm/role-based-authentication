import { TypeWithKey } from "@/models"
export const getValidationErrors = (errorCode: any) => {
    const codeMatcher:TypeWithKey<string> = {
        CREDENCIALES_INVALIDAS: "Correo o/y contraseña incorrectos",
        INACTIVATE: "cREDENCIALÑELCKNSDKC SDJCNSNDC JSDC ",
        INACTIVATE_USER: "No hay credenciales para mostrar"
    }
    
    return codeMatcher[errorCode]
}