import {NextFunction, Request, Response} from "express"
import bcrypt from "bcrypt"
import {trim} from "lodash"

import AuthService from "../services/auth.service"
import {userDTO} from "../utils/dto"
import {IUser, IReqWithUser} from "@TS/Models"

export default class AuthController {
  public authService = new AuthService()

  public sign_in = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {token, user} = await this.authService.sign_in(req.body)

      res.status(200).json({status: "Success! sign_in", data: userDTO(user), token})
    } catch (error) {
      next(error)
    }
  }

  public sign_up = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {email, name, lastName} = req.body
      const login = req.body.login || email
      const fullName = `${trim(name)} ${trim(lastName || "")}`
      const profile = {fullName}

      const password = await bcrypt.hash(req.body.password, 10)
      const {user, token} = await this.authService.sign_up({...req.body, login, password, profile})

      res.status(201).json({status: "Success! sign_up", data: userDTO(user), token})
    } catch (error) {
      next(error)
    }
  }

  public google = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body)

      res.status(200).json({status: "Success! google", data: 1})
    } catch (error) {
      next(error)
    }
  }

  public login = (req: IReqWithUser, res: Response, next: NextFunction) => {
    try {
      const user = userDTO(req.user)

      res.status(200).json({status: "Success! login", data: user})
    } catch (error) {
      next(error)
    }
  }

  public logout = async (req: IReqWithUser, res: Response, next: NextFunction) => {
    try {
      const user: IUser = await this.authService.logout(req.user)

      res.status(200).json({status: "Success! logout", data: userDTO(user)})
    } catch (error) {
      next(error)
    }
  }
}
