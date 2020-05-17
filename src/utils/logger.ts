import {createLogger, transports, format, addColors} from 'winston'

/**
 * Logger options
 */
const {Console, File} = transports
const {combine, colorize, simple, timestamp, prettyPrint} = format

/**
 * Create file & console logger
 */
const fileInit = new File({level: 'error', filename: 'logs/debug.log'})
const consoleInit = new Console({level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'})

/**
 * Set formats options
 */
addColors({
  error: 'bold red',
  warn: 'bold yellow',
  info: 'bold magenta',
  debug: 'bold green'
})

/**
 * App Logger
 */
const logger = createLogger({
  transports: [fileInit, consoleInit],
  format: combine(colorize(), prettyPrint(), simple(), timestamp())
})

if (process.env.NODE_ENV !== 'production') {
  logger.info('🚀 LOGGER STARTING 🚀')
}

export default logger
