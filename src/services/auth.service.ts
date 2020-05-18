import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import {UserModel} from "../models"
import AppError from "../app/appError"
import {isEmptyObject} from "../utils"
import {CreateUserDto} from "../validations/dtos/users.dto"
import {DataStoredInToken, TokenData} from "../interfaces/auth.interface"
import {IUser} from "../interfaces"

class AuthService {
  public users = UserModel

  public async sign_up(userData: CreateUserDto): Promise<IUser> {
    if (isEmptyObject(userData)) throw new AppError(400, "You're not userData")
    const {email, login} = userData

    const findUser: IUser = await this.users.findOne({email})
    if (findUser) throw new AppError(409, `You're email ${email} already exists`)

    const findLogin: IUser = await this.users.findOne({login})
    if (findLogin) throw new AppError(409, `You're login ${login} already exists`)

    const hashedPassword = await bcrypt.hash(userData.password, 10)

    return await this.users.create({
      ...userData,
      password: hashedPassword
    })
  }

  public async login(userData: CreateUserDto): Promise<{cookie: string; findUser: IUser}> {
    if (isEmptyObject(userData)) throw new AppError(400, "You're not userData")

    const findUser: IUser = await this.users.findOne({email: userData.email})
    if (!findUser) throw new AppError(409, `You're email ${userData.email} not found`)

    const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password)
    if (!isPasswordMatching) throw new AppError(409, "You're password not matching")

    const tokenData = this.createToken(findUser)
    const cookie = this.createCookie(tokenData)

    return {cookie, findUser}
  }

  public async logout(userData: IUser): Promise<IUser> {
    if (isEmptyObject(userData)) throw new AppError(400, "You're not userData")

    const findUser: IUser = await this.users.findOne({password: userData.password})
    if (!findUser) throw new AppError(409, "You're not user")

    return findUser
  }

  public createToken(user: IUser): TokenData {
    const dataStoredInToken: DataStoredInToken = {_id: user._id}
    const secret: string = process.env.JWT_SECRET
    const expiresIn: number = 60 * 60

    return {expiresIn, token: jwt.sign(dataStoredInToken, secret, {expiresIn})}
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`
  }
}

export default AuthService
