//import GameController from "./controllers/GameController.js"
import MoonController from "./controllers/MoonController.js"


class App {
  constructor() {
    this.gameController = new MoonController()
  }
}

window["app"] = new App()