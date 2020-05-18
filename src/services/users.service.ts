import bcrypt from "bcrypt"

import {UserModel} from "../models"
import AppError from "../app/appError"
import {isEmptyObject} from "../utils"
import {CreateUserDto} from "../validations/dtos/users.dto"
import {IUser} from "../interfaces"

class UserService {
  public users = UserModel

  public async findAllUser(): Promise<IUser[]> {
    const users: IUser[] = await this.users.find()
    return users
  }

  public async findUserById(userId: string): Promise<IUser> {
    const findUser: IUser = await this.users.findById(userId)
    if (!findUser) throw new AppError(409, "You're not user")

    return findUser
  }

  public async createUser(userData: CreateUserDto): Promise<IUser> {
    if (isEmptyObject(userData)) throw new AppError(400, "You're not userData")

    const findUser: IUser = await this.users.findOne({email: userData.email})
    if (findUser) throw new AppError(409, `You're email ${userData.email} already exists`)

    const hashedPassword = await bcrypt.hash(userData.password, 10)
    const createUserData: IUser = await this.users.create({...userData, password: hashedPassword})
    return createUserData
  }

  public async updateUser(userId: string, userData: IUser): Promise<IUser> {
    if (isEmptyObject(userData)) throw new AppError(400, "You're not userData")

    const hashedPassword = await bcrypt.hash(userData.password, 10)
    const updateUserById: IUser = await this.users.findByIdAndUpdate(userId, {
      ...userData,
      password: hashedPassword
    })
    if (!updateUserById) throw new AppError(409, "You're not user")

    return updateUserById
  }

  public async deleteUserData(userId: string): Promise<IUser> {
    const deleteUserById: IUser = await this.users.findByIdAndDelete(userId)
    if (!deleteUserById) throw new AppError(409, "You're not user")

    return deleteUserById
  }
}

export default UserService
