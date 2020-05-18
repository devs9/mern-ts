import App from "./app"
import * as Routes from "./routes"

const server = new App([new Routes.auth(), new Routes.user()])

server.reactApp()
server.listen()
