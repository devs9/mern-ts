import {NextFunction, Request, Response} from "express"

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(202).json({data: 13232})
    } catch (error) {
      next(error)
    }
  }
}

export default IndexController
