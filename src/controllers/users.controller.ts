import {NextFunction, Request, Response} from "express"

import UserService from "../services/users.service"
import {IUser} from "@TS/Models"

export default class UsersController {
  public userService = new UserService()

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: IUser[] = await this.userService.findAllUser()
      res.status(200).json({data: findAllUsersData, message: "findAll"})
    } catch (error) {
      next(error)
    }
  }

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id

    try {
      const findOneUserData: IUser = await this.userService.findUserById(userId)
      res.status(200).json({data: findOneUserData, message: "findOne"})
    } catch (error) {
      next(error)
    }
  }

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createUserData: IUser = await this.userService.createUser(req.body)
      res.status(201).json({data: createUserData, message: "created"})
    } catch (error) {
      next(error)
    }
  }

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id
    const userData: IUser = req.body

    try {
      const updateUserData: IUser = await this.userService.updateUser(userId, userData)
      res.status(200).json({data: updateUserData, message: "updated"})
    } catch (error) {
      next(error)
    }
  }

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id

    try {
      const deleteUserData: IUser = await this.userService.deleteUserData(userId)
      res.status(200).json({data: deleteUserData, message: "deleted"})
    } catch (error) {
      next(error)
    }
  }
}
