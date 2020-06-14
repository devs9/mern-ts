import {Request} from "express"

/**
 * User base types for database and services
 */
export type dataIDT = {_id: string}
export type tokenDataT = {
  token: string
  expiresIn: number
}

/**
 * Interfaces User
 */
export interface IUser {
  _id: string
  login: string
  email: string
  password: string

  google: string
  twitter: string
  facebook: string

  profile: {
    image?: string
    gender?: string
    fullName: string
  }
}

export interface IUserService {
  user: IUser
  token: string
}

export interface IReqWithUser extends Request {
  user: IUser
}

/**
 * DTO Interfaces for auth data
 */
type signInDTO = {
  login: string
  password: string
}
type signUpDTO = {
  name: string
  email: string
  password: string
  repeatPassword: string

  login?: string
  lastName?: string
}

export interface IAuthDTO {
  sign_in: signInDTO
  sign_up: signUpDTO
}
