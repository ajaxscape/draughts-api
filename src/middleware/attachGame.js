const Game = require('draughts-engine')
let game

module.exports = (req, res, next) => {
  if (req.path.indexOf('/reset') === 0) {
    req.game = new Game()
  } else {
    req.game = game = game || new Game()
  }
  next()
}
