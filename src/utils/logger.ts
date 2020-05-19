import {createLogger, transports, format, addColors} from "winston"

/**
 * Logger options
 * create File & Console and  formats logs
 */
const {Console, File} = transports
const {combine, colorize, simple, timestamp, prettyPrint} = format

const fileInit = new File({level: "error", filename: "logs/debug.log"})
const consoleInit = new Console({level: process.env.NODE_ENV === "production" ? "error" : "debug"})

addColors({
  error: "bold red",
  warn: "bold yellow",
  info: "bold magenta",
  debug: "bold green"
})

/**
 * App Logger
 */
const logger = createLogger({
  transports: [fileInit, consoleInit],
  format: combine(colorize(), prettyPrint(), simple(), timestamp())
})

if (process.env.NODE_ENV !== "production") {
  logger.info("🚀 LOGGER STARTING 🚀")
}

export default logger
