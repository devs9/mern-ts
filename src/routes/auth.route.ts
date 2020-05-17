import {Router} from "express"
import {signUp} from "../validations/schemas/user.schema"
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
    this.router.post(`${this.path}/sign-up`, validate(signUp), this.authController.signUp)

    this.router.post(
      `${this.path}/login`,
      // validationMiddleware(CreateUserDto),
      this.authController.logIn
    )
    this.router.post(`${this.path}/logout`, authMiddleware, this.authController.logOut)
  }
}

export default AuthRoute
