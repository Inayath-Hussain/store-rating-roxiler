import { RequestHandler } from "express";

import { BodyError, containsErrors } from "../error";
import { sanitizeAll } from "../sanitizeBase";
import { validateRating } from "../validate";

export interface IAddRatingBody {
    rating: number
}

export const validateAddRating: RequestHandler<{}, {}, IAddRatingBody> = (req, res, next) => {
    sanitizeAll(req.body);

    let { rating } = req.body;

    const errorObj = new BodyError<IAddRatingBody>("Invalid body");

    if (typeof rating === "string") {
        rating = Number(rating);
        req.body.rating = rating;
        if (isNaN(rating)) {
            errorObj.addFieldError("rating", "rating is invalid number");
            return res.status(422).json(errorObj);
        }
    }


    const ratingValidation = validateRating(rating);
    if (ratingValidation.valid === false) errorObj.addFieldError("rating", ratingValidation.errorMessage);


    if (containsErrors(errorObj)) return res.status(422).json(errorObj);
    return next();
}