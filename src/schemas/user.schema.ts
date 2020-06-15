import * as Joi from "@hapi/joi"

export default class UserSchema {
  public sign_in = Joi.object({
    password: Joi.string().required(),
    login: Joi.string().min(4).max(44).required()
  })

  public sign_up = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    login: Joi.string().min(4).max(44),
    lastName: Joi.string().alphanum().min(2).max(22),
    name: Joi.string().alphanum().min(2).max(22).required(),
    repeatPassword: Joi.any().equal(Joi.ref("password")).required()
  })
}
