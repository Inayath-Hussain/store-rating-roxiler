import { Router } from "express";
import { validateLogin } from "../middlewares/users/validateLogin";
import { loginController } from "../controllers/users/login";
import { validateRegisterBody } from "../middlewares/users/validateRegister";
import { registerCustomer } from "../controllers/users/registerCustomer";
import { registerStoreOwner } from "../controllers/users/registerStoreOwner";

const router = Router();


router.post("/login", validateLogin, loginController);
router.post("/register/customer", validateRegisterBody, registerCustomer);
router.post("/register/store-owner", validateRegisterBody, registerStoreOwner);



export { router as userRotuer };