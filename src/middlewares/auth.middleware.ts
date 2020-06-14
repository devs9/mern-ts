import jwt from "jsonwebtoken"
import {NextFunction, Response} from "express"

import {AppError} from "../app"
import {UserModel} from "../models"
import {IReqWithUser, dataIDT} from "../interfaces"

export default async function authMiddleware(req: IReqWithUser, res: Response, next: NextFunction) {
  if (req.cookies["Authorization"]) {
    try {
      const secret = process.env.JWT_SECRET
      const verificationResponse = jwt.verify(req.cookies["Authorization"], secret) as dataIDT
      const userId = verificationResponse._id
      const findUser = await UserModel.findById(userId)

      if (findUser) {
        req.user = findUser
        next()
      } else {
        next(new AppError(401, "Wrong authentication token"))
      }
    } catch (error) {
      next(new AppError(401, "Wrong authentication token"))
    }
  } else {
    next(new AppError(404, "Authentication token missing"))
  }
}
