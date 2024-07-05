import type { store } from "@prisma/client";
import { prismaClient } from "../config/db";


interface IStore {
    name: string
    address: string
    rating: number
}

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
        return await prismaClient.store.findUnique({
            where: { id: storeId },
            select: {
                ownerId: false,
                name: true,
                address: true,
                rating: {
                    select: { rating: true, storeId: false, userId: false, user: { select: { name: true } } }
                }
            }
        })
    }



    async getStoresAndOverallRating() {
        const data = await prismaClient.store.findMany({
            where: {},
            select: { ownerId: false, address: true, name: true, rating: { select: { rating: true } } },

        })

        const stores: IStore[] = [];

        data.forEach(store => {
            const rating = store.rating.reduce((accu, current) => {
                return accu + current.rating
            }, 0) / store.rating.length || 1;

            stores.push({ ...store, rating })
        })

        return stores;
    }
}


export const storeService = new StoreService();