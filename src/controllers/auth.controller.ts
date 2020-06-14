import {trim, pick} from "lodash"
import bcrypt from "bcrypt"

import {NextFunction, Request, Response} from "express"
import AuthService from "../services/auth.service"
import {IUser, IReqWithUser} from "@TS/Models"

export default class AuthController {
  public authService = new AuthService()

  public sign_in = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {token, cookie, findUser} = await this.authService.sign_in(req.body)
      const data = pick(findUser, ["email", "login", "profile"])

      res.setHeader("Set-Cookie", [cookie])
      res.status(200).json({data, token, status: "Success! sign_in"})
    } catch (error) {
      next(error)
    }
  }

  public sign_up = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body
      const login = userData.login || userData.email
      const password = await bcrypt.hash(userData.password, 10)
      const fullName = `${trim(userData.name)} ${trim(userData.lastName || "")}`
      const newUser = {...userData, login, password, profile: {fullName}}
      const {user, token, cookie} = await this.authService.sign_up(newUser)
      const data = pick(user, ["email", "login", "profile"])

      res.setHeader("Set-Cookie", [cookie])
      res.status(201).json({data, token, status: "Success! sign_up"})
    } catch (error) {
      next(error)
    }
  }

  public login = async (req: IReqWithUser, res: Response, next: NextFunction) => {
    try {
      const data = pick(req.user, ["email", "login", "profile"])

      res.status(200).json({data, status: "Success"})
    } catch (error) {
      next(error)
    }
  }

  public logout = async (req: IReqWithUser, res: Response, next: NextFunction) => {
    try {
      const logOutUserData: IUser = await this.authService.logout(req.user)
      const data = pick(logOutUserData, ["email", "login", "profile"])

      res.setHeader("Set-Cookie", ["Authorization=; Max-age=0"])
      res.status(200).json({data, message: "logout"})
    } catch (error) {
      next(error)
    }
  }
}
