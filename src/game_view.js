const Map = require('./map');

class GameView {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.map = new Map(canvas);
    this.player = this.map.player;
  }
}

module.exports = GameView;