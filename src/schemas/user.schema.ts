import * as Joi from '@hapi/joi'

export const signIn = Joi.object({
  password: Joi.string().required(),
  login: Joi.string().min(4).max(44).required()
})

export const signUp = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  login: Joi.string().min(4).max(44),
  lastName: Joi.string().alphanum().min(2).max(22),
  name: Joi.string().alphanum().min(2).max(22).required(),
  repeatPassword: Joi.any().equal(Joi.ref('password')).required()
})
