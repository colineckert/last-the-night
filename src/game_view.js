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
    //bind key handlers
    this.bindKeyHandlers();
    this.dirKeys();
    this.lastTime = 0;

    //start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    // this.dirKeys();
    // this.ctx.fillStyle = "#222";
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const timeDelta = time - this.lastTime;

    // this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
};

GameView.KEYS = {};

module.exports = GameView;