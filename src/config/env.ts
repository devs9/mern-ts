import dotenv from 'dotenv'
import {cleanEnv, port, str} from 'envalid'
import {Path} from '../constants'

export default function envConfig() {
  /**
   * Set env mode
   */
  switch (process.env.NODE_ENV) {
    case 'production': {
      dotenv.config({path: Path.envProd})
      break
    }
    case 'development': {
      dotenv.config({path: Path.envDev})
      break
    }
    default: {
      dotenv.config({path: Path.envDefault})
      break
    }
  }

  /**
   * Check env mode
   */
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),

    MONGO_URI: str(),

    FACEBOOK_ID: str(),
    FACEBOOK_SECRET: str(),

    JWT_SECRET: str(),
    SESSION_SECRET: str()
  })
}
