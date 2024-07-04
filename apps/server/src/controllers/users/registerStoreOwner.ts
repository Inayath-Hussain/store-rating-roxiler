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

    const user = await userService.createUser({ address, email, name, password, role: "store_owner" })

    const accessToken = await createAccessToken({ userId: user.id });
    const refreshToken = await createRefreshToken({ userId: user.id });

    signAccessTokenCookie(res, accessToken);
    signRefreshTokenCookie(res, refreshToken);

    res.cookie("store_owner", true)

    return res.status(201).json({ message: "success" })
}



export const registerStoreOwner = tryCatchWrapper(controller);