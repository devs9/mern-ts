import {connect, connection} from "mongoose"
import logger from "../utils"

export default function dbConfig() {
  const {MONGO_URI} = process.env
  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }

  connect(`${MONGO_URI}`, options)
  connection.on("error", () => {
    logger.error("🔥 Error connect to DB 🟥")
    process.exit(1)
  })
  connection.once("open", () => logger.info("✅  Success connect to DB ✅ "))
}
