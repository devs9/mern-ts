import {NextFunction, Request, Response} from 'express'

export interface IControllers<T = Request> {
  (req: T, res: Response, next: NextFunction): Promise<void>
}
