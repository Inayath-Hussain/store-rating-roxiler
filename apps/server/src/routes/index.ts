import { Router } from "express";
import { userRotuer } from "./user";

const router = Router();


router.use("/user", userRotuer);


export { router as mainRouter }