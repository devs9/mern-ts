import winston from "winston"

/**
 * Logger Options
 */
const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === "production" ? "error" : "debug"
    }),
    new winston.transports.File({
      level: "debug",
      filename: "logs/debug.log"
    })
  ]
}

/**
 * App Logger
 */
const logger = winston.createLogger(options)

if (process.env.NODE_ENV !== "production") {
  logger.info("🚀 INFO LOGGER STARTS 🚀")
}

export default logger
