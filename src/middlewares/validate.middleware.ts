import {AppError} from '../app'
import {IValidateMiddleware} from '../interfaces'

export const validate: IValidateMiddleware = (schema) => (req, res, next) => {
  {
    const isValid = schema.validate(req.body, {abortEarly: false})

    if (isValid.error) {
      const message = isValid.error.details.map((err) => err.message).join('. ')

      throw new AppError(400, message)
    }

    next()
  }
}
