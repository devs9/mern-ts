import {NextFunction, Request, Response} from 'express'
import {ObjectSchema} from '@hapi/joi'

import {AppError} from '../../app'
import {IReqWithUser} from '../Models'

export interface IAuthMiddleware {
  (req: IReqWithUser, res: Response, next: NextFunction): Promise<void> | void
}

export interface IErrorMiddleware {
  (err: AppError, req: Request, res: Response, next: NextFunction): Promise<void>
}

export interface IValidateMiddleware {
  (schema: ObjectSchema): IAuthMiddleware
}
