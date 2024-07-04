import { compare } from "bcrypt";
import { RequestHandler } from "express";

import { tryCatchWrapper } from "../tryCatchWrapper";
import { ILoginBody } from "../../middlewares/users/validateLogin";
import { userService } from "../../services/user";
import { createAccessToken } from "../../utilities/tokens/accessToken";
import { createRefreshToken } from "../../utilities/tokens/refreshToken";
import { signAccessTokenCookie } from "../../utilities/cookies/signAccessToken";
import { signRefreshTokenCookie } from "../../utilities/cookies/signRefreshToken";

const controller: RequestHandler<{}, {}, ILoginBody> = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await userService.getUserByEmail(email);

    if (user === null) return res.status(400).json({ message: "email doesnot exist" });

    const passwordMatches = await compare(password, user.password);

    if (passwordMatches === false) return res.status(400).json({ message: "email and password donot match" });

    const accessToken = await createAccessToken({ userId: user.id });
    const refreshToken = await createRefreshToken({ userId: user.id });

    signAccessTokenCookie(res, accessToken);
    signRefreshTokenCookie(res, refreshToken);

    if (user.role === "admin") res.cookie("admin", true)
    if (user.role === "store_owner") res.cookie("store_owner", true)

    return res.status(200).json({ message: "success" });
}



export const loginController = tryCatchWrapper(controller);