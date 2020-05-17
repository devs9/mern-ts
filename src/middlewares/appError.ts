import {NextFunction, Request, Response} from "express"
import AppError from "../app/appError"

export const appError = async (err: AppError, req: Request, res: Response, next: NextFunction) => {
  const {statusCode, message} = err

  res.status(statusCode).json({
    status: "error",
    message
  })
  next()
}
