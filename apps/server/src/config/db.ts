import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
    log: ["query"]
});



export const connectToDb = () =>
    new Promise((resolve) => {
        prismaClient.$connect()
            .then(() => {
                console.log("connected to db");
                resolve(true)
            })
            .catch(err => {
                console.log(err);
                process.exit(1);
            })
    })