import hpp from 'hpp'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import sslRedirect from 'heroku-ssl-redirect'
import express, {Application} from 'express'

import logger from '../utils'
import {Path} from '../constants'
import {appError} from '../middlewares'
import {dbConnect, envConfig, sessionConfig} from '../config'
import {IRoutes} from '@ts/Routes'

export default class App {
  public app: Application
  public port: string | number

  constructor(routes: IRoutes[]) {
    envConfig()
    dbConnect()

    this.app = express()
    this.port = process.env.PORT

    this.appConfig()
    this.initMiddleware()
    this.initializeRoutes(routes)
    this.errorHandlingConfig()
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(
        `🚀 App Mode ${this.app.get('env')} is running at http://localhost:${this.port} 🚀`
      )
    })
  }

  public reactApp() {
    this.app.get('*', (req, res) => {
      res.sendFile(Path.htmlPath)
    })
  }

  public getServer() {
    return this.app
  }

  private appConfig() {
    this.app.use(sslRedirect())
    this.app.use(cookieParser())
    this.app.use(express.json())
    this.app.use(express.static(Path.buildPath))
    this.app.use(express.urlencoded({extended: true}))
    this.app.use(compression({level: 6}))
    this.app.use(sessionConfig())
  }

  private initMiddleware() {
    if (process.env.NODE_ENV === 'production') {
      this.app.use(morgan('combined'))
      this.app.use(hpp())
      this.app.use(cors())
      this.app.use(helmet())
    } else {
      this.app.use(morgan('dev'))
      this.app.use(cors({origin: true, credentials: true}))
    }
  }

  private initializeRoutes(routes: IRoutes[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router)
    })
  }

  private errorHandlingConfig() {
    this.app.use(appError)
  }
}
