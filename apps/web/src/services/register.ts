import { AxiosError, HttpStatusCode } from "axios"
import { axiosInstance } from "./axiosInstance"

interface IRegisterBody {
    name: string
    address: string
    email: string
    password: string
}

export const registerService = (url: string, payload: IRegisterBody) =>
    new Promise(async (resolve) => {
        try {
            const result = await axiosInstance.post(url, payload, { withCredentials: true });
            return resolve(result.data);
        }
        catch (ex) {
            if (ex instanceof AxiosError) {
                if (ex.response?.status === HttpStatusCode.UnprocessableEntity) {
                    return resolve(new BodyError(ex.response.data.message, ex.response.data.errors))
                }
            }
        }
    })



class BodyError<T extends Record<any, any>> {
    message: string;
    errors: Partial<Record<keyof T, string>>

    constructor(message: string, errors: BodyError<T>["errors"]) {
        this.message = message;
        this.errors = errors
    }


    addFieldError(key: keyof BodyError<T>["errors"], errorMessage: string) {
        this.errors[key] = errorMessage;
    }
}