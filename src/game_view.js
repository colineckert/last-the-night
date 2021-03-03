const Map = require('./map');

class GameView {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.map = new Map(canvas);
    this.player = this.map.player;
    debugger
  };

  start() {
    // this.whatKey();
    // this.ctx.fillStyle = "#ccc";
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // this.map.step();
    this.map.draw(this.ctx);
    
    //request another animation or break if player won / lost
    // if (this.playerEscaped()){
    //   if (this.level <= 5) {
    //     this.passCallback();
    //   } else {
    //     this.winningCallback();
    //   }
    // } else if (this.playerKilled()){
    //   this.losingCallback();
    // } else {
    //   requestAnimationFrame(this.step.bind(this));
    // }
  }


}

GameView.KEYS = {};

module.exports = GameView;