import { RequestHandler } from "express";
import { tryCatchWrapper } from "../tryCatchWrapper";
import { IRegisterBody } from "../../middlewares/users/validateRegister";
import { userService } from "../../services/user";
import { createAccessToken } from "../../utilities/tokens/accessToken";
import { createRefreshToken } from "../../utilities/tokens/refreshToken";
import { signAccessTokenCookie } from "../../utilities/cookies/signAccessToken";
import { signRefreshTokenCookie } from "../../utilities/cookies/signRefreshToken";

const controller: RequestHandler<{}, {}, IRegisterBody> = async (req, res, next) => {
    const { address, email, name, password } = req.body;

    const existingEmail = await userService.getUserByEmail(email);

    if (existingEmail !== null) return res.status(400).json({ message: "email already exists" })

    const user = await userService.createUser({ address, email, name, password, role: "customer" })

    const accessToken = await createAccessToken({ email });
    const refreshToken = await createRefreshToken({ email });

    signAccessTokenCookie(res, accessToken);
    signRefreshTokenCookie(res, refreshToken);

    return res.status(201).json({ message: "success" })
}



export const registerCustomer = tryCatchWrapper(controller);