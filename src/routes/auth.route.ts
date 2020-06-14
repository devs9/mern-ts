import {Router} from "express"
import {UserSchema} from "../schemas"
import {AuthController} from "../controllers"

import {Validate, authMiddleware} from "../middlewares"
import {IRoutes} from "@TS/Routes"

export default class AuthRoute implements IRoutes {
  public path = "/api/auth"
  public router = Router()
  public userValid = new UserSchema()
  public authController = new AuthController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    /** GET **/
    this.router.get(`${this.path}/login`, authMiddleware, this.authController.login)

    /** POST **/
    this.router.post(
      `${this.path}/sign_in`,
      Validate(this.userValid.sign_in),
      this.authController.sign_in
    )

    this.router.post(
      `${this.path}/sign_up`,
      Validate(this.userValid.sign_up),
      this.authController.sign_up
    )

    this.router.post(`${this.path}/logout`, authMiddleware, this.authController.logout)
  }
}
