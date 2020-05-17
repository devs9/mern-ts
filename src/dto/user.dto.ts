import {pick} from 'lodash'
import {IUser} from '@ts/Models'

export const user_dto = (user: IUser) => pick(user, ['email', 'login', 'profile'])
