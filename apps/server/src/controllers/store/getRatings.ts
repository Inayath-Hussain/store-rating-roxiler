import { RequestHandler } from "express";
import { tryCatchWrapper } from "../tryCatchWrapper";
import { storeService } from "../../services/store";

const controller: RequestHandler<{ storeId: string }> = async (req, res, next) => {

    const storeId = Number(req.params.storeId);

    if (isNaN(storeId)) return res.status(400).json({ message: "storeId should be numeric" });

    const data = await storeService.getStoreRatings(storeId);

    if (data === null) return res.status(400).json({ message: "store doesnot exist" });

    return res.status(200).json(data);
}



export const getStoreRatings = tryCatchWrapper(controller);