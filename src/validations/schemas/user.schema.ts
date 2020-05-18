import * as Joi from "@hapi/joi"

/**
 * User Schema Sign Up
 */
export const signUpSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  login: Joi.string().min(4).max(44),
  lastName: Joi.string().alphanum().min(2).max(22),
  name: Joi.string().alphanum().min(2).max(22).required(),
  repeatPassword: Joi.any().equal(Joi.ref("password")).required()
})

/**
 * User Schema Sign In
 */
export const signInSchema = Joi.object({
  password: Joi.string().required(),
  login: Joi.string().min(4).max(44).required()
})
