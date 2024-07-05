import type { store } from "@prisma/client";
import { prismaClient } from "../config/db";

class StoreService {
    async createStore(data: Pick<store, "address" | "ownerId" | "name">) {
        return await prismaClient.store.create({
            data
        })
    }


    async getStoreById(storeId: number) {
        return await prismaClient.store.findUnique({
            where: { id: storeId }
        })
    }


    async getStoreRatings(storeId: number) {
        // prismaClient.rating.findMany({
        //     where: {storeId},
        //     include: {}
        // })
        return await prismaClient.store.findUnique({
            where: { id: storeId },
            include: {
                rating: {
                    select: { rating: true, storeId: false, userId: false, user: { select: { name: true } } },
                    // include: { user: { select: { name: true } } }
                }
            }
        })
    }
}


export const storeService = new StoreService();