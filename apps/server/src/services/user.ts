import type { user } from "@prisma/client";

import { prismaClient } from "../config/db";
import { genSalt, hash } from "bcrypt";


class UserService {
    async getUserByEmail(email: string) {
        return await prismaClient.user.findFirst({
            where: { email }
        });
    }


    async createUser(data: Pick<user, "address" | "email" | "name" | "password" | "role">) {
        const salt = await genSalt(10);
        const hashedPassword = await hash(data.password, salt);

        return await prismaClient.user.create({
            data: { ...data, password: hashedPassword }
        })
    }


    async getUserById(id: number) {
        return await prismaClient.user.findUnique({
            where: { id }
        })
    }
}


export const userService = new UserService();