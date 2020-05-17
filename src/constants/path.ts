import path from "path"

/** ----- Build Path ----- **/
export const buildPath = path.join(__dirname, "../../client")
export const htmlPath = path.join(buildPath, "index.html")

/** ----- ENV Path ----- **/
export const envDev = path.join(__dirname, "../../env/.env")
export const envProd = path.join(__dirname, "../../env/.env.prod")
