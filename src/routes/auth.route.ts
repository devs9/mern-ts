import {Router} from "express"
import {signInSchema, signUpSchema} from "../validations/schemas/user.schema"
import AuthController from "../controllers/auth.controller"
import authMiddleware from "../middlewares/auth.middleware"
import validate from "../middlewares/validate.middleware"
import Route from "../interfaces/routes.interface"

class AuthRoute implements Route {
  public path = "/api/auth"
  public router = Router()
  public authController = new AuthController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/sign_up`, validate(signUpSchema), this.authController.signUp)

    this.router.post(
      `${this.path}/sign_in`,
      [authMiddleware, validate(signInSchema)],
      this.authController.sign_in
    )

    this.router.post(`${this.path}/logout`, authMiddleware, this.authController.logOut)
  }
}

export default AuthRoute
