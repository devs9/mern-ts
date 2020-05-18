import App from "./app"
import * as Routes from "./routes"

const server = new App([new Routes.AuthRoute(), new Routes.UsersRoute()])

server.reactApp()
server.listen()
