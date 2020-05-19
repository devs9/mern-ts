import App from "./app"
import * as Routes from "./routes"

const Server = new App([new Routes.AuthRoute()])

Server.reactApp()
Server.listen()
