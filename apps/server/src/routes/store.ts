import { Router } from "express";
import { validateAddStore } from "../middlewares/store/validateAddStore";
import { addStore } from "../controllers/store/addStore";
import { authMiddleware } from "../middlewares/auth/authMiddleware";

const router = Router();


router.post("/", authMiddleware, validateAddStore, addStore);


export { router as storeRouter }