import { RequestHandler } from "express";
import { sanitizeAll } from "../sanitizeBase";
import { BodyError, containsErrors } from "../error";
import { validateAddress, validateName } from "../validate";


export interface IAddStoreBody {
    name: string
    address: string
}


export const validateAddStore: RequestHandler<{}, {}, IAddStoreBody> = (req, res, next) => {
    sanitizeAll(req.body);

    const { address, name } = req.body;

    const errorObj = new BodyError<IAddStoreBody>("Invalid body");

    const nameValidationResult = validateName(name);
    if (nameValidationResult.valid === false) errorObj.addFieldError("name", nameValidationResult.errorMessage);

    const addressValidationResult = validateAddress(address);
    if (addressValidationResult.valid === false) errorObj.addFieldError("address", addressValidationResult.errorMessage);


    if (containsErrors(errorObj) === false) return res.status(422).json(errorObj);

    return next();
}