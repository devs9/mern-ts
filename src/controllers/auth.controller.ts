import {trim} from 'lodash'
import bcrypt from 'bcrypt'

import {user_dto} from '../dto'
import {AuthService} from '../services'
import {IReqWithUser, IControllers} from '../interfaces'

export default class AuthController {
  public authService = new AuthService()

  public sign_in: IControllers = async (req, res, next) => {
    try {
      const {token, user} = await this.authService.sign_in(req.body)
      const body = {status: 'Success! sign_in', data: {user}, token}

      res.status(200).json(body)
    } catch (error) {
      next(error)
    }
  }

  public sign_up: IControllers = async (req, res, next) => {
    try {
      const {email, name, lastName} = req.body
      const fullName = `${trim(name)} ${trim(lastName || '')}`
      const login = req.body.login || email
      const profile = {fullName}

      const password = await bcrypt.hash(req.body.password, 10)
      const {token, user} = await this.authService.sign_up({...req.body, login, password, profile})
      const body = {status: 'Success! sign_up', data: {user}, token}

      res.status(201).json(body)
    } catch (error) {
      next(error)
    }
  }

  public google: IControllers = async (req, res, next) => {
    try {
      const {token, user} = await this.authService.google(req.body)
      const body = {status: 'Success! google', data: {user}, token}

      res.status(201).json(body)
    } catch (error) {
      next(error)
    }
  }

  public login: IControllers<IReqWithUser> = async (req, res, next) => {
    try {
      const user = user_dto(req.user)
      const body = {status: 'Success! login', data: user}

      res.status(200).json(body)
    } catch (error) {
      next(error)
    }
  }

  public logout: IControllers<IReqWithUser> = async (req, res, next) => {
    try {
      const user = await this.authService.logout(req.user)
      const body = {status: 'Success! logout', data: user}

      res.status(200).json(body)
    } catch (error) {
      next(error)
    }
  }
}
