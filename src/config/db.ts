import {connect} from "mongoose"
import logger from "../utils/logger"

export default async function dbConfig() {
  try {
    await connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    logger.info("✅  Success connect to DB ✅ ")
  } catch (error) {
    logger.error(`🔥 Error connect to DB 🟥 ${error} 🟥`)
  }
}
