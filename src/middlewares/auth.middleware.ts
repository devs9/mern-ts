import jwt from "jsonwebtoken"
import {NextFunction, Response} from "express"

import {UserModel} from "../models"
import AppError from "../app/appError"
import {DataStoredInToken, RequestWithUser} from "../interfaces/auth.interface"

export default async function authMiddleware(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  const cookies = req.cookies

  if (cookies && cookies.Authorization) {
    const secret = process.env.JWT_SECRET

    try {
      const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken
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
