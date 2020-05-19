import {trim} from "lodash"
import bcrypt from "bcrypt"

import {NextFunction, Request, Response} from "express"
import AuthService from "../services/auth.service"
import {IUser, IReqWithUser} from "@TS/Models"

export default class AuthController {
  public authService = new AuthService()

  public sign_in = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {cookie, findUser} = await this.authService.sign_in(req.body)

      res.setHeader("Set-Cookie", [cookie])
      res.status(200).json({data: findUser, status: "Success! sign_in"})
    } catch (error) {
      next(error)
    }
  }

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body
      const login = userData.login || userData.email
      const password = await bcrypt.hash(userData.password, 10)
      const fullName = `${trim(userData.name)} ${trim(userData.lastName || "")}`
      const signUpUserData: IUser = await this.authService.sign_up({
        ...userData,
        profile: {fullName},
        password,
        login
      })
      const tokenData = this.authService.createToken(signUpUserData)
      const cookie = this.authService.createCookie(tokenData)

      res.setHeader("Set-Cookie", [cookie])
      res.status(201).json({data: signUpUserData, status: "Success! sign_up"})
    } catch (error) {
      next(error)
    }
  }

  public logOut = async (req: IReqWithUser, res: Response, next: NextFunction) => {
    try {
      const logOutUserData: IUser = await this.authService.logout(req.user)

      res.setHeader("Set-Cookie", ["Authorization=; Max-age=0"])
      res.status(200).json({data: logOutUserData, message: "logout"})
    } catch (error) {
      next(error)
    }
  }
}
