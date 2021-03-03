const Game = require('./game');

class GameView {
  constructor(canvas, level) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.game = new Game(canvas, level);
    this.player = this.game.player;
    this.level = level;
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

    if (GameView.KEYS['w'] && GameView.KEYS['a']) {
      player.move("UL");
    } else if (GameView.KEYS['w'] && GameView.KEYS['d']){
      player.move("UR")
    } else if (GameView.KEYS['s'] && GameView.KEYS['a']){
      player.move("DL");
    } else if (GameView.KEYS['s'] && GameView.KEYS['d']){
      player.move("DR");
    } else if (GameView.KEYS['a']) {
      player.move("L");
    } else if (GameView.KEYS['d']) {
      player.move("R");
    } else if (GameView.KEYS['w']) {
      player.move("U");
    } else if (GameView.KEYS['s']) {
      player.move("D");
    } // else if --> space bar --> toggle light
  }

  // // mouse
  //   var vectorX = camera.offsetX + context.canvas.width / 2 - mouse.x;
  //   var vectorY = camera.offsetY + context.canvas.height / 2 - mouse.y;

  //   var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

  //   if (length > 0) {
  //     vectorX /= length;
  //     vectorY /= length;

  //     this.angle = Math.atan2(vectorY, vectorX) + 90 * Math.PI / 180;
  //   }

  start(){
    // bind key and mouse handlers
    this.bindKeyHandlers();
    this.dirKeys();
    // this.lastTime = 0;

    //start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.dirKeys();
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // const timeDelta = time - this.lastTime;

    // this.lastTime = time;
    // this.game.step(timeDelta);
    this.game.draw(this.ctx);

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
};

GameView.KEYS = {};

module.exports = GameView;