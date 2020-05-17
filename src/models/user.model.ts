import {Schema, Document, model} from 'mongoose'
import {IUser} from '@ts/Models'

const userSchema = new Schema(
  {
    token: String,
    google: String,
    password: String,

    email: {type: String, unique: true, index: true, required: true},
    login: {type: String, minlength: 4, maxlength: 44, unique: true, index: true},

    profile: {
      image: String,
      gender: String,
      fullName: {type: String, trim: true}
    }
  },
  {timestamps: true}
)

export const UserModel = model<IUser & Document>('User', userSchema)
