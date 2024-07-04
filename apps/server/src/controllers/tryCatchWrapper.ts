import { RequestHandler } from "express";
import { Ierror } from "./errorHandler";

export const tryCatchWrapper = (asyncRequestHandler: RequestHandler<any, any, any, any>): RequestHandler => async (req, res, next) => {
    try {
        await asyncRequestHandler(req, res, next)
    }
    catch (ex) {
        console.log(ex)
        next({ statusCode: 500, message: "Internal server error" } as Ierror)
    }
}