import path from "path"

/** ----- Build Path ----- **/
export const buildPath = path.join(__dirname, "../../client")
export const htmlPath = path.join(buildPath, "index.html")

/** ----- ENV Path ----- **/
const envPath = path.join(__dirname, "../../env")

export const envDev = path.join(envPath, "/.env.dev")
export const envDefault = path.join(envPath, "/.env")
export const envProd = path.join(envPath, "/.env.prod")
