import App from "./app"
import * as Routes from "./routes"

const server = new App([new Routes.AuthRoute()])

server.reactApp()
server.listen()
