import jwt from 'jsonwebtoken'

import {AppError} from '../app'
import {UserModel} from '../models'
import {dataIDT, IAuthMiddleware} from '../interfaces'

const authMiddleware: IAuthMiddleware = async (req, res, next) => {
  if (req.cookies?.['Authorization']) {
    try {
      const secret = process.env.JWT_SECRET
      const {_id} = jwt.verify(req.cookies['Authorization'], secret) as dataIDT
      const findUser = await UserModel.findById(_id)

      if (findUser) {
        req.user = findUser
        next()
      } else {
        next(new AppError(401, 'Wrong authentication token'))
      }
    } catch (error) {
      next(new AppError(401, 'Wrong authentication token'))
    }
  } else {
    next(new AppError(404, 'Authentication token missing'))
  }
}

export default authMiddleware
