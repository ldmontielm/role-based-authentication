import { TypeWithKey } from "@/models"
export const getValidationErrors = (errorCode: any) => {
    const codeMatcher:TypeWithKey<string> = {
        INVALID_CREDENTIALS: "Credenciales incorrectas"
    }
    
    return codeMatcher[errorCode]
}