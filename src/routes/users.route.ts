import {Router} from "express"

import {UsersController} from "../controllers"
import {IRoutes} from "@TS/Routes"

export default class UsersRoute implements IRoutes {
  public path = "/api/users"
  public router = Router()
  public usersController = new UsersController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUsers)

    this.router.get(`${this.path}/:id`, this.usersController.getUserById)

    this.router.post(
      `${this.path}`,
      // validationMiddleware(CreateUserDto),
      this.usersController.createUser
    )

    this.router.put(
      `${this.path}/:id`,
      // validationMiddleware(CreateUserDto, true),
      this.usersController.updateUser
    )

    this.router.delete(`${this.path}/:id`, this.usersController.deleteUser)
  }
}
