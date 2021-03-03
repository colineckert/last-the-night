const Player = require('./player');

class Game {
  constructor(canvas){
    this.canvas = canvas;
    window.player = this.player = new Player(
      // this.level.playerStart.x * canvas.width,
      // this.level.playerStart.y * canvas.height,
      (0.05 * canvas.width),
      (0.47 * canvas.height),
      this
    );
  }

  allObjects() {
    return [].concat(this.player);
  };

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(object => {
      object.draw(ctx);
    });
  };
}

Game.BG_COLOR = "#000";
Game.DIM_X = 1200;
Game.DIM_Y = 800;

module.exports = Game;