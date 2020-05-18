// import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import request from 'supertest';
import App from '../app';
import AuthRoute from '../routes/auth.route';
import { CreateUserDto } from '../validations/dtos/users.dto';
// import AppError from '../app/appError';
// import { TokenData } from '../interfaces/auth.interface';
// import AuthService from '../services/auth.service';

afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing AuthController', () => {
  describe('POST /sign_up', () => {
    it('response should have the Create userData', () => {
      const userData: CreateUserDto = {
        email: 's2232a5w232131@mail.ru',
        password: '11111',
        name: "devs9"
      };

      const authRoute = new AuthRoute();

      authRoute.authController.authService.users.findOne = jest
        .fn()
        .mockReturnValue(Promise.resolve(undefined));

      authRoute.authController.authService.users.create = jest
        .fn()
        .mockReturnValue({ _id: 0, ...userData });

      (mongoose as any).connect = jest.fn();
      const app = new App([authRoute]);

      return request(app.getServer())
        .post(`${authRoute.path}/sign_up`)
        .send(userData);
    });
  });

  // describe('POST /login', () => {
  //   it('response should have the Set-Cookie header with the Authorization token', async () => {
  //     const userData: CreateUserDto = {
  //       email: 'lkm@gmail.com',
  //       password: 'q1w2e3r4',
  //       name: "devs9"
  //     };
  //     process.env.JWT_SECRET = 'jwt_secret';
  //
  //     const authRoute = new AuthRoute();
  //
  //     authRoute.authController.authService.users.findOne = jest
  //       .fn()
  //       .mockReturnValue(Promise.resolve({
  //         _id: 0,
  //         email: 'lim@gmail.com',
  //         password: await bcrypt.hash(userData.password, 10)
  //       }));
  //
  //     (mongoose as any).connect = jest.fn();
  //     const app = new App([authRoute]);
  //     return request(app.getServer())
  //       .post(`${authRoute.path}/login`)
  //       .send(userData)
  //       .expect('Set-Cookie', /^Authorization=.+/);
  //   });
  // });

  // describe('POST /logout', () => {
  //   it('logout Set-Cookie Authorization=; Max-age=0', () => {
  //     const authRoute = new AuthRoute();
  //
  //     const app = new App([authRoute]);
  //     return request(app.getServer())
  //       .post(`${authRoute.path}/logout`)
  //       .expect('Set-Cookie', /^Authorization=\;/);
  //   });
  // });
});

// describe('Testing AuthService', () => {
//   describe('when creating a cookie', () => {
//     it('should return a string', () => {
//       const tokenData: TokenData = {
//         token: '',
//         expiresIn: 1
//       };
//
//       const authService = new AuthService();
//
//       expect(typeof authService.createCookie(tokenData))
//         .toEqual('string',);
//     });
//   });
//
//   describe('when registering a user', () => {
//     describe('if the email is already token', () => {
//       it('should throw an error', async () => {
//         const userData: CreateUserDto = {
//           email: 'lkm@gmail.com',
//           password: 'q1w2e3r4',
//           name: "devs9"
//         };
//
//         const authService = new AuthService();
//
//         authService.users.findOne = jest
//           .fn()
//           .mockReturnValue(Promise.resolve(userData));
//
//         await expect(authService.sign_up(userData))
//           .rejects.toMatchObject(new AppError( 400, `User with email ${userData.email} already exists`));
//       });
//     });
//
//     describe('if the email is not token', () => {
//       it('should not throw an error', async () => {
//         const userData: CreateUserDto = {
//           email: 'lkm@gmail.com',
//           password: 'q1w2e3r4',
//           name: "devs9"
//         };
//         process.env.JWT_SECRET = 'jwt_secret';
//
//         const authService = new AuthService();
//
//         authService.users.findOne = jest
//           .fn()
//           .mockReturnValue(Promise.resolve(undefined));
//
//         authService.users.create = jest
//           .fn()
//           .mockReturnValue({ _id: 0, ...userData });
//
//         await expect(authService.sign_up(userData))
//           .resolves.toBeDefined();
//       });
//     });
//   });
// });
