import {Schema, Document, model} from "mongoose"
import {IUser} from "@TS/Models"

const userSchema = new Schema(
  {
    token: String,
    password: String,

    google: String,
    twitter: String,
    facebook: String,

    profile: {
      image: String,
      gender: String,
      website: String,
      location: String,
      fullName: {type: String, trim: true}
    },

    email: {type: String, unique: true, index: true, required: true},
    login: {type: String, minlength: 4, maxlength: 44, unique: true, index: true}
  },
  {timestamps: true}
)

export const UserModel = model<IUser & Document>("User", userSchema)
