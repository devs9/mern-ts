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
  password: string

  google: string
  twitter: string
  facebook: string

  profile: {
    image: string
    gender: string
    website: string
    location: string
  }
}

export interface IReqWithUser extends Request {
  user: IUser
}
