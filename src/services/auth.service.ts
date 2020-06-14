import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {isEmpty} from "lodash"

import {AppError} from "../app"
import {UserModel} from "../models"
import {IAuthSignInDTO, IAuthSignUpDTO, IUser, tokenDataT, dataIDT} from "@TS/Models"

export default class AuthService {
  public users = UserModel

  public async sign_in(
    userData: IAuthSignInDTO
  ): Promise<{token: string; cookie: string; findUser: IUser}> {
    if (isEmpty(userData)) throw new AppError(400, "You're not userData")

    const findLogin: IUser = await this.users.findOne({login: userData.login})
    if (!findLogin) throw new AppError(409, `You're login ${userData.login} not found`)

    const findEmail: IUser = await this.users.findOne({email: userData.login})
    const findUser = findLogin || findEmail
    if (!findUser) throw new AppError(409, `You're email ${userData.login} not found`)

    const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password)
    if (!isPasswordMatching) throw new AppError(409, "You're password not matching")

    const tokenData = this.createToken(findUser)
    const cookie = this.createCookie(tokenData)

    return {token: tokenData.token, cookie, findUser}
  }

  public async sign_up(
    userData: IAuthSignUpDTO
  ): Promise<{token: string; cookie: string; user: IUser}> {
    if (isEmpty(userData)) throw new AppError(400, "You're not userData")

    const findUser: IUser = await this.users.findOne({email: userData.email})
    if (findUser) throw new AppError(409, `You're email ${userData.email} already exists`)

    const findLogin: IUser = await this.users.findOne({login: userData.login})
    if (findLogin) throw new AppError(409, `You're login ${userData.login} already exists`)

    const newUser = await this.users.create(userData)
    const tokenData = this.createToken(newUser)
    const cookie = this.createCookie(tokenData)

    return {user: newUser, token: tokenData.token, cookie}
  }

  public async logout(userData: IUser): Promise<IUser> {
    if (isEmpty(userData)) throw new AppError(400, "You're not userData")

    const findUser: IUser = await this.users.findOne({password: userData.password})
    if (!findUser) throw new AppError(409, "You're not user")

    return findUser
  }

  public createToken(user: IUser): tokenDataT {
    const dataStoredInToken: dataIDT = {_id: user._id}
    const secret: string = process.env.JWT_SECRET
    const expiresIn: number = 60 * 60

    return {expiresIn, token: jwt.sign(dataStoredInToken, secret, {expiresIn})}
  }

  public createCookie(tokenData: tokenDataT): string {
    return `Authorization = ${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`
  }
}
