import {IErrorMiddleware} from '../interfaces'

const appError: IErrorMiddleware = async (err, req, res, next) => {
  const {statusCode, message} = err

  res.status(statusCode || 500).json({
    status: 'error',
    message
  })

  next()
}

export default appError
