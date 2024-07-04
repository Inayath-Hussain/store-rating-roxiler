import express from "express";
import { mainRouter } from "./routes";



export const app = express();


app.use("/api", mainRouter);

