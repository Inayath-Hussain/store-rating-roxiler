import type { rating } from "@prisma/client";
import { prismaClient } from "../config/db";


class RatingService {
    async addRating(data: Pick<rating, "rating" | "storeId" | "userId">) {
        return await prismaClient.rating.create({
            data
        })
    }
}


export const ratingService = new RatingService();