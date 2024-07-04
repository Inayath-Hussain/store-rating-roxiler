import { cleanEnv, port, str, url } from "envalid";

export const env = cleanEnv(process.env, {
    PORT: port({ default: 3000 }),
    NODE_ENV: str(),
    DATABASE_URL: url(),
    JWT_ACCESS_TOKEN_SECRET: str(),
    JWT_REFRESH_TOKEN_SECRET: str(),
    COOKIE_PARSER_KEY: str()
})