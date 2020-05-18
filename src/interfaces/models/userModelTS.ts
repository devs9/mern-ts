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
