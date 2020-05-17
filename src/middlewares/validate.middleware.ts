import {Request, Response, NextFunction} from "express"
import {ObjectSchema} from "hapi__joi"
import AppError from "../app/appError"

export default function validate(schema: ObjectSchema) {
  return function (req: Request, res: Response, next: NextFunction) {
    const isValid = schema.validate(req.body, {abortEarly: false})

    if (isValid.error) {
      const message = isValid.error.details.map((err) => err.message).join(". \n")

      throw new AppError(400, message)
    }

    next()
  }
}
