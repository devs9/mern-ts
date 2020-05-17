import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {isEmpty} from "lodash"

import {AppError} from "../app"
import {UserModel} from "../models"
import {IUser, IUserService, IAuthDTO, tokenDataT, dataIDT} from "@TS/Models"

export default class AuthService {
  public users = UserModel

  public async sign_in(data: IAuthDTO["sign_in"]): Promise<IUserService> {
    if (isEmpty(data)) throw new AppError(400, "You're not userData")

    const findLogin: IUser = await this.users.findOne({login: data.login})
    if (!findLogin) throw new AppError(409, `You're login ${data.login} not found`)

    const findEmail: IUser = await this.users.findOne({email: data.login})
    const user = findLogin || findEmail
    if (!user) throw new AppError(409, `You're email ${data.login} not found`)

    const isPasswordMatching: boolean = await bcrypt.compare(data.password, user.password)
    if (!isPasswordMatching) throw new AppError(409, "You're password not matching")

    return {user, token: this.createToken(user).token}
  }

  public async sign_up(data: IAuthDTO["sign_up"]): Promise<IUserService> {
    if (isEmpty(data)) throw new AppError(400, "You're not userData")

    const findUser: IUser = await this.users.findOne({email: data.email})
    if (findUser) throw new AppError(409, `You're email ${data.email} already exists`)

    const findLogin: IUser = await this.users.findOne({login: data.login})
    if (findLogin) throw new AppError(409, `You're login ${data.login} already exists`)

    const user = await this.users.create(data)

    return {user, token: this.createToken(user).token}
  }

  public async logout(data: IUser): Promise<IUser> {
    if (isEmpty(data)) throw new AppError(400, "You're not userData")

    const findUser: IUser = await this.users.findOne({password: data.password})
    if (!findUser) throw new AppError(409, "You're not user")

    return findUser
  }

  public createToken(user: IUser): tokenDataT {
    const dataStoredInToken: dataIDT = {_id: user._id}
    const secret: string = process.env.JWT_SECRET
    const expiresIn: number = 60 * 60

    return {expiresIn, token: jwt.sign(dataStoredInToken, secret, {expiresIn})}
  }

  // public createCookie(tokenData: tokenDataT): string {
  //   return `Authorization = ${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`
  // }
}
