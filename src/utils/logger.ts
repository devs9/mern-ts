import {createLogger, transports} from "winston"

/**
 * App Logger
 */
const logger = createLogger({
  transports: [
    new transports.Console({
      level: process.env.NODE_ENV === "production" ? "error" : "debug"
    }),
    new transports.File({
      level: "error",
      filename: "logs/debug.log"
    })
  ]
})

if (process.env.NODE_ENV !== "production") {
  logger.info("🚀 LOGGER STARTS DEBUG! 🚀")
}

export default logger
