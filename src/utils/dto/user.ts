import {pick} from "lodash"

import {IUser} from "@TS/Models"

export const userDTO = (user: IUser) => pick(user, ["email", "login", "profile"])
