import { RequestHandler } from "express";
import { sanitizeAll } from "../sanitizeBase";
import { BodyError, containsErrors } from "../error";
import { validateAddress, validateEmail, validateName, validateNewPassword } from "./validate";

export interface IRegisterBody {
    name: string
    email: string
    password: string
    address: string
}

export const validateRegisterBody: RequestHandler<{}, {}, IRegisterBody> = (req, res, next) => {
    sanitizeAll(req.body);

    const { address, email, name, password } = req.body;

    const errorObj = new BodyError<IRegisterBody>("Invalid body");


    const nameValidationResult = validateName(name);
    if (nameValidationResult.valid === false) errorObj.addFieldError("name", nameValidationResult.errorMessage);

    const emailValidationResult = validateEmail(email);
    if (emailValidationResult.valid === false) errorObj.addFieldError("email", emailValidationResult.errorMessage)

    const passowrdValidationResult = validateNewPassword(password);
    if (passowrdValidationResult.valid === false) errorObj.addFieldError("password", passowrdValidationResult.errorMessage);


    const addressValidationResult = validateAddress(address);
    if (addressValidationResult.valid === false) errorObj.addFieldError("address", addressValidationResult.errorMessage);


    if (containsErrors(errorObj) === false) return res.status(422).json(errorObj);

    return next();
}