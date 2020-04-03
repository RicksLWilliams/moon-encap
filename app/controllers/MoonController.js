import GameService from "../services/MoonService.js"

//NOTE private area
let _gameService = new GameService()



//NOTE take the targets cheese and display on the screen replacing the innertext of the cheese element
function _draw() {
  document.getElementById("cheese").innerText = _gameService.Cheese
}

function _drawItem(elm){
  //console.log(elm)
  if (elm.item =="<no-item>") { return}

  document.getElementById(elm.item).innerText =  elm.item + " for " + (elm.price).toString()
  document.getElementById(elm.item + "-count").innerText = (elm.quantity).toString()
  document.getElementById(elm.item + "-bonus").innerText = "(+" + (elm.bonus).toString() + ")"

}

//function _startInterval(){
//  let collectionInterval = setInterval(this.collectAutoUpgrades, 3000);
//}


//NOTE public area 
export default class GameController {
  constructor() {
    //console.log("hello from gameController")
    _draw()
    this.startInterval()
  }


  mine(){
    //console.log('mine')
    _gameService.mine()
    _draw()

  }

  collectAutoUpgrades(){
    //console.log("colect auto upgrades controller")
    _gameService.collectAutoUpgrades()
    _draw()
  }

  buy(item){
    let data = _gameService.buy(item)
    _drawItem(data)
    _draw()
  }

  startInterval(){
    let collectionInterval = setInterval(this.collectAutoUpgrades, 3000);

  }

}