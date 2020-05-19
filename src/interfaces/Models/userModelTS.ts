import {Request} from "express"

/**
 * Type Alias
 * user base types for database
 */
export type dataIDT = {_id: string}
export type tokenDataT = {
  token: string
  expiresIn: number
}

/**
 * Interfaces
 */
export interface IUser {
  _id: string
  login: string
  token: string
  email: string
  password: string

  google: string
  twitter: string
  facebook: string

  profile: {
    image: string
    gender: string
    website: string
    location: string
    fullName: string
  }
}

export interface IReqWithUser extends Request {
  user: IUser
}

export interface IAuthSignInDTO {
  login: string
  password: string
}

export interface IAuthSignUpDTO {
  name: string
  email: string
  password: string
  repeatPassword: string

  login?: string
  lastName?: string
}
