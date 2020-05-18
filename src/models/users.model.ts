import {Schema, Document, model} from "mongoose"
import {IUser} from "../interfaces"

const userSchema = new Schema(
  {
    token: String,

    google: String,
    twitter: String,
    facebook: String,

    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,

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

const userModel = model<IUser & Document>("User", userSchema)

export default userModel
