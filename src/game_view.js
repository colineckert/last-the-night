const Game = require('./game');

class GameView {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.game = new Game(canvas);
    this.player = this.game.player;
  };

  start() {
    // this.whatKey();
    // this.ctx.fillStyle = "#ccc";
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // this.map.step();
    this.game.draw(this.ctx);
    
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