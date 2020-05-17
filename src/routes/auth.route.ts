import {Router} from "express"
import {signIn, signUp} from "../schemas"
import {AuthController} from "../controllers"

import {validate, authMiddleware} from "../middlewares"
import {IRoutes} from "@TS/Routes"

export default class AuthRoute implements IRoutes {
  public path = "/api/auth"
  public router = Router()
  public authController = new AuthController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    /** GET **/
    this.router.get(`${this.path}/login`, authMiddleware, this.authController.login)
    this.router.get(`${this.path}/google`, this.authController.google)

    /** POST **/
    this.router.post(`${this.path}/logout`, authMiddleware, this.authController.logout)
    this.router.post(`${this.path}/sign_in`, validate(signIn), this.authController.sign_in)
    this.router.post(`${this.path}/sign_up`, validate(signUp), this.authController.sign_up)
  }
}
