import { RequestHandler } from "express";
import { IAddStoreBody } from "../../middlewares/store/validateAddStore";
import { userService } from "../../services/user";
import { storeService } from "../../services/store";
import { tryCatchWrapper } from "../tryCatchWrapper";

const controller: RequestHandler<{}, {}, IAddStoreBody> = async (req, res, next) => {
    const { address, name } = req.body;
    const userId = req.user_id as number;

    const user = await userService.getUserById(userId);

    if (user === null) return res.status(400).json({ message: "user doesnot exist" })

    if (user.role !== "store_owner") return res.status(403).json({ message: "Unauthorized" });

    await storeService.createStore({ ownerId: userId, address, name });

    return res.status(201).json({ message: "success" });
}



export const addStore = tryCatchWrapper(controller);