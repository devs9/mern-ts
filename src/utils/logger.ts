import {createLogger, transports, format, addColors} from "winston"

const {combine, colorize, simple, timestamp, prettyPrint} = format
const {Console, File} = transports

const fileInit = new File({level: "error", filename: "logs/debug.log"})
const consoleInit = new Console({level: process.env.NODE_ENV === "production" ? "error" : "debug"})

/**
 * App Logger
 */
const logger = createLogger({
  transports: [fileInit, consoleInit],
  format: combine(colorize(), prettyPrint(), simple(), timestamp())
})

addColors({
  error: "bold red",
  warn: "bold yellow",
  info: "bold cyan",
  debug: "bold green"
})

if (process.env.NODE_ENV !== "production") {
  logger.info("🚀 LOGGER STARTING 🚀")
}

export default logger
