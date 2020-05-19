import {promisify} from "util"
import {connect, ConnectionOptions} from "mongoose"
import logger from "../utils/logger"

const connectPromisify = promisify<string, ConnectionOptions>(connect)
export default async function dbConfig() {
  try {
    await connectPromisify(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    logger.info("✅  Success connect to DB ✅ ")
  } catch (error) {
    logger.error(`🔥 Error connect to DB 🟥 ${error} 🟥`)
  }
}
