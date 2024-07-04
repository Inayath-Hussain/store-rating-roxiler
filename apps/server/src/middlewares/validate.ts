import { isEmail, isStrongPassword } from "validator"

interface Valid {
    valid: true
}

interface InValid {
    valid: false
    errorMessage: string
}

export const validateEmail = (value: any): Valid | InValid => {
    switch (true) {
        case (typeof value !== "string"):
            return { valid: false, errorMessage: "email should be of type string" }

        case (isEmail(value) === false):
            return { valid: false, errorMessage: "Invalid email" }

        default:
            return { valid: true }
    }
}




export const validatePassword = (value: any): Valid | InValid => {
    switch (true) {
        case (typeof value !== "string"):
            return { valid: false, errorMessage: "password should be of type string" }

        default:
            return { valid: true }
    }
}



export const validateName = (value: any): Valid | InValid => {
    switch (true) {
        case (typeof value !== "string"):
            return { valid: false, errorMessage: "name should be of type string" }

        case (value.length > 60):
            return { valid: false, errorMessage: "name should be less than 60 letters" }


        case (value.length < 20):
            return { valid: false, errorMessage: "name should be atleast 20 letters" }

        default:
            return { valid: true }
    }
}




export const validateAddress = (value: any): Valid | InValid => {
    switch (true) {
        case (typeof value !== "string"):
            return { valid: false, errorMessage: "address should be of type string" }

        case (value.length > 400):
            return { valid: false, errorMessage: "address should be less than 60 letters" }

        default:
            return { valid: true }
    }
}



export const validateNewPassword = (value: any): Valid | InValid => {
    switch (true) {
        case (typeof value !== "string"):
            return { valid: false, errorMessage: "password should be of type string" }

        case (value.length < 8):
            return { valid: false, errorMessage: "password should have atleast 8 letters" }

        case (value.length < 16):
            return { valid: false, errorMessage: "password can have maximum of 16 letters" }

        case (isStrongPassword(value, { minUppercase: 1, minSymbols: 1 })):
            return { valid: false, errorMessage: "password should have atleast 1 Uppercase, and 1 special symbol" }

        default:
            return { valid: true }
    }
}