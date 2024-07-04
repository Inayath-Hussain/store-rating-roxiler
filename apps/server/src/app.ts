
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { mainRouter } from "./routes";
import cookieParser from "cookie-parser";
import { env } from "./config/env";
import { errorHandler } from "./controllers/errorHandler";
import { corsOptions } from "./config/cors";



export const app = express();


app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(cookieParser(env.COOKIE_PARSER_KEY));
app.use(express.json());


app.use("/api", mainRouter);


app.use(errorHandler);