import mongoose from "mongoose"
import request from "supertest"

import App from "../app"
import AuthRoute from "../routes/auth.route"
import {UserSignUpDto} from "../validations"

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500))
})

describe("Testing AuthController", () => {
  describe("POST /sign_up", () => {
    it("response should have the Create userData", () => {
      const userData: UserSignUpDto = {
        email: "s2232a5w232131@mail.ru",
        password: "11111",
        name: "devs9"
      }

      const authRoute = new AuthRoute()

      authRoute.authController.authService.users.findOne = jest
        .fn()
        .mockReturnValue(Promise.resolve(undefined))

      authRoute.authController.authService.users.create = jest
        .fn()
        .mockReturnValue({_id: 0, ...userData})
      ;(mongoose as any).connect = jest.fn()
      const app = new App([authRoute])

      return request(app.getServer()).post(`${authRoute.path}/sign_up`).send(userData)
    })
  })
})

