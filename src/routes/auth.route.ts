import {Router} from "express"

import {UserSchema} from "../schemas"
import {AuthController} from "../controllers"
import {Validate, authMiddleware} from "../middlewares"
import {IRoutes} from "@TS/Routes"

export default class AuthRoute implements IRoutes {
  public path = "/api/auth"
  public router = Router()
  public authController = new AuthController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}/sign_in`,
      [authMiddleware, Validate(UserSchema.signIn)],
      this.authController.sign_in
    )

    this.router.post(
      `${this.path}/sign_up`,
      Validate(UserSchema.signUp),
      this.authController.signUp
    )

    this.router.post(`${this.path}/logout`, authMiddleware, this.authController.logOut)
  }
}
