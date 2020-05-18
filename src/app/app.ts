import hpp from "hpp"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import morgan from "morgan"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import express, {Application} from "express"

import {validateEnv, logger} from "../utils"
import {envDev, buildPath, htmlPath} from "../constants"
import appError from "../middlewares/error.middleware"
import Routes from "../interfaces/routes.interface"

export default class App {
  public app: Application
  public port: string | number
  public env: boolean

  constructor(routes: Routes[]) {
    App.setEnv()
    this.app = express()
    this.port = process.env.PORT || 3000
    this.env = process.env.NODE_ENV === "production"

    this.appConfig()
    this.connectToDatabase()
    this.initMiddleware()
    this.initializeRoutes(routes)
    this.errorHandlingConfig()
  }

  private static setEnv() {
    if (process.env.NODE_ENV === "production") {
      dotenv.config({path: envDev})
    } else {
      dotenv.config({path: envDev})
    }

    validateEnv()
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(
        `🚀 App Mode ${this.app.get("env")} is running at http://localhost:${this.port} 🚀`
      )
    })
  }

  public reactApp() {
    this.app.get("*", (req, res) => {
      res.sendFile(htmlPath)
    })
  }

  public getServer() {
    return this.app
  }

  private appConfig() {
    this.app.use(express.json())
    this.app.use(express.static(buildPath))
    this.app.use(express.urlencoded({extended: true}))
    this.app.use(cookieParser())
  }

  private initMiddleware() {
    if (this.env) {
      this.app.use(hpp())
      this.app.use(helmet())
      this.app.use(morgan("combined"))
      this.app.use(cors({origin: "your.domain.com", credentials: true}))
    } else {
      this.app.use(morgan("dev"))
      this.app.use(cors({origin: true, credentials: true}))
    }
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router)
    })
  }

  private errorHandlingConfig() {
    this.app.use(appError)
  }

  private connectToDatabase() {
    const {MONGO_URI} = process.env
    const options = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }

    mongoose.connect(`mongodb://${MONGO_URI}`, {...options})
    mongoose.connection.on("error", () => {
      console.error("🔥 Error connect to DB 🟥")
      process.exit(1)
    })
    mongoose.connection.once("open", () => console.info("✅  Success connect to DB ✅ "))
  }
}
