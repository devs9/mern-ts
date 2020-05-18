import {Router} from "express"

import {AuthController} from "../controllers"
import {Validate, authMiddleware} from "../middlewares"
import {signIn, signUp} from "../schemas/user.schema"
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
      [authMiddleware, Validate(signIn)],
      this.authController.sign_in
    )

    this.router.post(`${this.path}/sign_up`, Validate(signUp), this.authController.signUp)

    this.router.post(`${this.path}/logout`, authMiddleware, this.authController.logOut)
  }
}
