import dotenv from "dotenv"
import {Path} from "../constants"
import {validateEnv} from "../validations"

export default function envConfig() {
  switch (process.env.NODE_ENV) {
    case "production": {
      dotenv.config({path: Path.envProd})
      validateEnv()
      break
    }

    case "development": {
      dotenv.config({path: Path.envTest})
      validateEnv()
      break
    }

    default: {
      dotenv.config({path: Path.envDev})
      validateEnv()
      break
    }
  }
}
