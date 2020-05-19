import {promisify} from "util"
import {connect, ConnectionOptions} from "mongoose"
import logger from "../utils/logger"

const connectPromisify = promisify<string, ConnectionOptions>(connect)
export default async function dbConfig() {
  try {
    const {MONGO_URI} = process.env
    const options = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }

    await connectPromisify(`${MONGO_URI}`, options)
    logger.info("✅  Success connect to DB ✅ ")
  } catch (error) {
    logger.error(`🔥 Error connect to DB 🟥 ${error} 🟥`)
  }
}
