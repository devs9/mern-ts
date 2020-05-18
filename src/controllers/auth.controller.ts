import {NextFunction, Request, Response} from "express"
import {CreateUserDto} from "../validations/dtos/users.dto"
import AuthService from "../services/auth.service"
import {RequestWithUser} from "../interfaces/auth.interface"
import {IUser} from "../interfaces"

class AuthController {
  public authService = new AuthService()

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    const userData: CreateUserDto = req.body

    try {
      const signUpUserData: IUser = await this.authService.sign_up({
        ...userData,
        login: userData.login || userData.email
      })
      const tokenData = this.authService.createToken(signUpUserData)
      const cookie = this.authService.createCookie(tokenData)

      res.setHeader("Set-Cookie", [cookie])
      res.status(201).json({data: signUpUserData, status: "Success! sign_up"})
    } catch (error) {
      next(error)
    }
  }

  public sign_in = async (req: Request, res: Response, next: NextFunction) => {
    const userData: CreateUserDto = req.body

    try {
      const {cookie, findUser} = await this.authService.sign_in(userData)
      res.setHeader("Set-Cookie", [cookie])
      res.status(200).json({data: findUser, status: "Success! sign_in"})
    } catch (error) {
      next(error)
    }
  }

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userData: IUser = req.user

    try {
      const logOutUserData: IUser = await this.authService.logout(userData)
      res.setHeader("Set-Cookie", ["Authorization=; Max-age=0"])
      res.status(200).json({data: logOutUserData, message: "logout"})
    } catch (error) {
      next(error)
    }
  }
}

export default AuthController
