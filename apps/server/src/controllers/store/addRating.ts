import { RequestHandler } from "express";
import { IAddRatingBody } from "../../middlewares/store/validateAddRating";

import { storeService } from "../../services/store";
import { ratingService } from "../../services/rating";
import { tryCatchWrapper } from "../tryCatchWrapper";

const controller: RequestHandler<{ storeId: number }, {}, IAddRatingBody> = async (req, res, next) => {

    const storeId = Number(req.params.storeId);

    if (isNaN(storeId)) return res.status(400).json({ message: "storeId should be numeric" });

    const { rating } = req.body;

    const userId = req.user_id as number;

    const store = await storeService.getStoreById(storeId);

    if (store === null) return res.status(400).json({ message: "store doesnot exist" })

    await ratingService.addRating({ rating, storeId, userId });

    return res.status(201).json({ message: "success" })
}



export const addRating = tryCatchWrapper(controller);