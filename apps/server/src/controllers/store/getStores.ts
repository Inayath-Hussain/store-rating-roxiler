import { RequestHandler } from "express";
import { tryCatchWrapper } from "../tryCatchWrapper";
import { storeService } from "../../services/store";

const controller: RequestHandler = async (req, res, next) => {
    const data = await storeService.getStoresAndOverallRating();

    return res.status(200).json(data);
}



export const getStores = tryCatchWrapper(controller);