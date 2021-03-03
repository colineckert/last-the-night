const Game = require('./game');

class GameView {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.game = new Game(canvas);
    this.player = this.game.player;
  };

  bindKeyHandlers() {
    window.addEventListener("keydown", (e) => {
      GameView.KEYS[e.key] = true;
    });

    window.addEventListener("keyup", (e) => {
      GameView.KEYS[e.key] = false;
    });

    // window.addEventListener("click", (e) => {
    //   this.player.lightPulse(); 
    // });
  }

  dirKeys() {
    const player = this.player;

    if (GameView.KEYS[87] && GameView.KEYS[65]) {
      player.move("UL");
    } else if (GameView.KEYS[87] && GameView.KEYS[68]){
      player.move("UR")
    } else if (GameView.KEYS[83] && GameView.KEYS[65]){
      player.move("DL");
    } else if (GameView.KEYS[83] && GameView.KEYS[68]){
      player.move("DR");
    } else if (GameView.KEYS[65]) {
      player.move("L");
    } else if (GameView.KEYS[68]) {
      player.move("R");
    } else if (GameView.KEYS[87]) {
      player.move("U");
    } else if (GameView.KEYS[83]) {
      player.move("D");
    }
  }

  start(){
    // bind key handlers
    this.bindKeyHandlers();
    this.dirKeys();
    
    // start animation
    requestAnimationFrame(this.step.bind(this));
  }

  step() {
    debugger
    this.dirKeys();
    this.ctx.fillStyle = "#ccc";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // this.game.step();
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

    requestAnimationFrame(this.step.bind(this));
  }


}

GameView.KEYS = {};

module.exports = GameView;