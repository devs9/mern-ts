import MongoStore from 'connect-mongo'
import session from 'express-session'
import {connection} from 'mongoose'

export default function sessionConfig() {
  const mongoDBStore = MongoStore(session)
  const mongoStore = new mongoDBStore({mongooseConnection: connection})

  return session({
    resave: false,
    store: mongoStore,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      path: '/',
      secure: false,
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000
    }
  })
}
