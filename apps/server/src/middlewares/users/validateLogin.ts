import { RequestHandler } from "express";

import { sanitizeAll } from "../sanitizeBase";
import { BodyError, containsErrors } from "../error";
import { validateEmail, validatePassword } from "./validate";


export interface ILoginBody {
    email: string
    password: string
}


export const validateLogin: RequestHandler<{}, {}, ILoginBody> = (req, res, next) => {

    sanitizeAll(req.body);

    const { email, password } = req.body;

    const errorObj = new BodyError<ILoginBody>("Invalid Body");


    const emailValidationResult = validateEmail(email);
    if (emailValidationResult.valid === false) errorObj.addFieldError("email", emailValidationResult.errorMessage)

    const passowrdValidationResult = validatePassword(password);
    if (passowrdValidationResult.valid === false) errorObj.addFieldError("password", passowrdValidationResult.errorMessage);


    if (containsErrors(errorObj) === true) return res.status(422).json(errorObj);

    return next();
}