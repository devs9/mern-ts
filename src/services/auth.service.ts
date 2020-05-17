import bcrypt from 'bcrypt'
import {isEmpty} from 'lodash'
import jwt from 'jsonwebtoken'

import {user_dto} from '../dto'
import {AppError} from '../app'
import {UserModel} from '../models'
import {IUser, IUserService, IAuthDTO, tokenDataT, dataIDT} from '../interfaces'

export default class AuthService {
  public users = UserModel

  public async sign_in(data: IAuthDTO['sign_in']): Promise<IUserService> {
    if (isEmpty(data)) throw new AppError(400, "You're not userData")

    const findLogin: IUser = await this.users.findOne({login: data.login})
    if (!findLogin) throw new AppError(409, `You're login ${data.login} not found`)

    const findEmail: IUser = await this.users.findOne({email: data.login})
    const findUser = findLogin || findEmail
    if (!findUser) throw new AppError(409, `You're email ${data.login} not found`)

    const isPasswordMatching: boolean = await bcrypt.compare(data.password, findUser.password)
    if (!isPasswordMatching) throw new AppError(409, "You're password not matching")

    const user = user_dto(findUser)
    const token = this.createToken(findUser).token

    return {user, token}
  }

  public async sign_up(data: Omit<IAuthDTO['sign_up'], 'profile'>): Promise<IUserService> {
    if (isEmpty(data)) throw new AppError(400, "You're not userData")

    const findUser: IUser = await this.users.findOne({email: data.email})
    if (findUser) throw new AppError(409, `You're email ${data.email} already exists`)

    const findLogin: IUser = await this.users.findOne({login: data.login})
    if (findLogin) throw new AppError(409, `You're login ${data.login} already exists`)

    const newUser = await this.users.create(data)
    const token = this.createToken(newUser).token
    const user = user_dto(newUser)

    return {user, token}
  }

  public async google(data: IAuthDTO['google']): Promise<IUserService> {
    if (isEmpty(data)) throw new AppError(400, "You're not userData")

    const {email, fullName, image, googleId} = data
    const findEmail: IUser = await this.users.findOne({email})

    if (findEmail) {
      const user = user_dto(findEmail)
      const {token} = this.createToken(findEmail)

      if (findEmail.profile?.image) {
        return {user, token}
      } else {
        const updateUser = await this.users.findByIdAndUpdate(findEmail._id, {
          profile: {...findEmail.profile, image},
          new: true
        })
        const user = user_dto(updateUser)

        return {user, token}
      }
    } else {
      const password = await bcrypt.hash(googleId, 10)
      const newUser = await this.users.create({
        email,
        password,
        login: email,
        profile: {image, fullName}
      })
      const {token} = this.createToken(newUser)
      const user = user_dto(newUser)

      return {user, token}
    }
  }

  public async logout(data: IUser): Promise<IUserService['user']> {
    if (isEmpty(data)) throw new AppError(400, "You're not userData")

    const findUser: IUser = await this.users.findOne({password: data.password})
    if (!findUser) throw new AppError(409, "You're not user")

    return user_dto(findUser)
  }

  /**
   * Helper service methods
   */
  public createToken(user: IUser): tokenDataT {
    const dataStoredInToken: dataIDT = {_id: user._id}
    const secret: string = process.env.JWT_SECRET
    const expiresIn: number = 60 * 60

    return {expiresIn, token: jwt.sign(dataStoredInToken, secret, {expiresIn})}
  }
}
