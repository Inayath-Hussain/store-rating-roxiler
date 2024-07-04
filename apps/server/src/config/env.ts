import { cleanEnv, port, str, url } from "envalid";

export const env = cleanEnv(process.env, {
    PORT: port({ default: 3000 }),
    NODE_ENV: str(),
    DATABASE_URL: url()
})