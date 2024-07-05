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
        case (!value):
            return { valid: false, errorMessage: "email is required" }

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
        case (!value):
            return { valid: false, errorMessage: "password is required" }

        case (typeof value !== "string"):
            return { valid: false, errorMessage: "password should be of type string" }

        default:
            return { valid: true }
    }
}



export const validateName = (value: any): Valid | InValid => {
    switch (true) {
        case (!value):
            return { valid: false, errorMessage: "name is required" }

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
        case (!value):
            return { valid: false, errorMessage: "address is required" }

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
        case (!value):
            return { valid: false, errorMessage: "password is required" }

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




export const validateRating = (value: any): Valid | InValid => {
    switch (true) {
        case (!value):
            return { valid: false, errorMessage: "rating is required" }

        case (typeof value !== "number"):
            return { valid: false, errorMessage: "rating is required" }

        case (value < 1 || value > 5):
            return { valid: false, errorMessage: "rating should be between 1 to 5" }

        default:
            return { valid: true }
    }
}