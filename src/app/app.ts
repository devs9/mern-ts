import hpp from "hpp"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import morgan from "morgan"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import express, {Application} from "express"

import logger from "../utils"
import {Path} from "../constants"
import {appError} from "../middlewares"
import {validateEnv} from "../validations"
import {IRoutes} from "../interfaces"

export default class App {
  public app: Application
  public port: string | number
  public env: boolean

  constructor(routes: IRoutes[]) {
    App.processEnvConfig()
    this.app = express()
    this.port = process.env.PORT || 3000
    this.env = process.env.NODE_ENV === "production"

    this.appConfig()
    this.connectToDatabase()
    this.initMiddleware()
    this.initializeRoutes(routes)
    this.errorHandlingConfig()
  }

  private static processEnvConfig() {
    switch (process.env.NODE_ENV) {
      case "production": {
        dotenv.config({path: Path.envProd})
        validateEnv()
        break
      }

      case "development": {
        dotenv.config({path: Path.envTest})
        validateEnv()
        break
      }

      default: {
        dotenv.config({path: Path.envDev})
        validateEnv()
        break
      }
    }
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
      res.sendFile(Path.htmlPath)
    })
  }

  public getServer() {
    return this.app
  }

  private appConfig() {
    this.app.use(cookieParser())
    this.app.use(express.json())
    this.app.use(express.static(Path.buildPath))
    this.app.use(express.urlencoded({extended: true}))
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

  private initializeRoutes(routes: IRoutes[]) {
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

    mongoose.connect(`${MONGO_URI}`, options)
    mongoose.connection.on("error", () => {
      logger.error("🔥 Error connect to DB 🟥")
      process.exit(1)
    })
    mongoose.connection.once("open", () => logger.info("✅  Success connect to DB ✅ "))
  }
}
