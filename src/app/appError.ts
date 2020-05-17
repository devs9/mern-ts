export default class AppError extends Error {
  public message: string
  public statusCode: number

  constructor(statusCode: number, message: string) {
    super()
    this.message = message
    this.statusCode = statusCode
  }
}
