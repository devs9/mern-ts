import {Router} from "express"
import {pick} from "lodash"
import {UserSchema} from "../schemas"
import {AuthController} from "../controllers"
import {Validate, authMiddleware} from "../middlewares"
import {IRoutes} from "@TS/Routes"
import {IReqWithUser} from "@TS/Models"

export default class AuthRoute implements IRoutes {
  public path = "/api/auth"
  public router = Router()
  public userValid = new UserSchema()
  public authController = new AuthController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}/sign_in`,
      [Validate(this.userValid.sign_in())],
      this.authController.sign_in
    )

    this.router.post(
      `${this.path}/sign_up`,
      [Validate(this.userValid.sign_up())],
      this.authController.signUp
    )

    this.router.post(`${this.path}/logout`, authMiddleware, this.authController.logOut)

    this.router.post(`${this.path}/login`, authMiddleware, (req: IReqWithUser, res, next) => {
      const data = pick(req.user, ["email", "login", "profile"])

      res.status(200).json({data, status: "uytr"})
    })
  }
}
