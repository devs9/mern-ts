import {cleanEnv, port, str} from "envalid"

export default function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),

    MONGO_URI: str(),
    MONGO_USER: str(),
    MONGO_PASSWORD: str(),

    FACEBOOK_ID: str(),
    FACEBOOK_SECRET: str(),

    JWT_SECRET: str(),
    SESSION_SECRET: str()
  })
}
