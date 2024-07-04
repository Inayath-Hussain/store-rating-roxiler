import type { store } from "@prisma/client";
import { prismaClient } from "../config/db";

class StoreService {
    async createStore(data: Pick<store, "address" | "ownerId" | "name">) {
        return await prismaClient.store.create({
            data
        })
    }
}


export const storeService = new StoreService();