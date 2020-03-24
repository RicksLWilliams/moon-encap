import Target from "../models/Target.js"
//NOTE private area


let _targetConfigObj = {
  cheese: 0,
  clickBonus: 1,
  autoBonus: 0,
  upgrades:{
    pickaxes: {cost:  20, quantity:0, clickBonus: 1, autoBonus:  0},
    megaaxes: {cost: 100, quantity:0, clickBonus: 5, autoBonus:  0},
    minors  : {cost: 150, quantity:0, clickBonus: 0, autoBonus:  4},
    rovers  : {cost: 600, quantity:0, clickBonus: 0, autoBonus: 20},
  }
}


let _target = new Target(_targetConfigObj)


//NOTE public area
export default class GameService {

  mine() {
    //console.log("service mine", _target.cheese)
    _target.cheese += _target.clickBonus
  }

  collectAutoUpgrades(){
    _target.cheese += _target.autoBonus
    //console.log("colect auto upgrades services",_target.cheese)
  }

  //NOTE buy use this for all the items
  buy(item) {

    let upgrade = _target.upgrades[item]

    if (_target.cheese < upgrade.cost ) {
      return {item: "<no-item>"}
    }
    _target.cheese -= upgrade.cost
    _target.clickBonus += upgrade.clickBonus
    _target.autoBonus  += upgrade.autoBonus
    upgrade.quantity++
    upgrade.cost *= 2

    let bonus =  upgrade.quantity * (upgrade.clickBonus != 0 ? upgrade.clickBonus : upgrade.autoBonus )

    return {
      item: item,
      price: upgrade.cost,
      quantity:upgrade.quantity,
      bonus,
    }
  }

//  startInterval(){
//    let collectionInterval = setInterval(this.collectAutoUpgrades, 3000);
//  }


  get Cheese(){
    return _target.cheese.toString()
  }


  constructor() {
    console.log("hello from gameService")
  }
}