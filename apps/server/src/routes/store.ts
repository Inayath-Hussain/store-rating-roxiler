import { Router } from "express";
import { validateAddStore } from "../middlewares/store/validateAddStore";
import { addStore } from "../controllers/store/addStore";
import { authMiddleware } from "../middlewares/auth/authMiddleware";
import { getStoreRatings } from "../controllers/store/getRatings";
import { validateAddRating } from "../middlewares/store/validateAddRating";
import { addRating } from "../controllers/store/addRating";

const router = Router();


router.post("/", authMiddleware, validateAddStore, addStore);
router.get("/:storeId/ratings", authMiddleware, getStoreRatings);
router.post("/:storeId/ratings", authMiddleware, validateAddRating, addRating);

export { router as storeRouter }