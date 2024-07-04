import { Router } from "express";
import { userRotuer } from "./user";
import { storeRouter } from "./store";

const router = Router();


router.use("/user", userRotuer);
router.use("/store", storeRouter);


export { router as mainRouter }