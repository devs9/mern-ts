import App from "./app"
import UsersRoute from "./routes/users.route"
import AuthRoute from "./routes/auth.route"

const server = new App([new AuthRoute(), new UsersRoute()])

server.reactApp()
server.listen()
