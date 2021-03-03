const Coord = require('./coord');
const Player = require('./player');
const Map = require('./map')

class Game {
  constructor(canvas, level) {
    this.canvas = canvas;
    this.level = Map.LEVELS[level];
    window.player = this.player = new Player(
      (this.level.playerStart.x * canvas.width),
      (this.level.playerStart.y * canvas.height),
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
Game.DIM_X = 1300;
Game.DIM_Y = 800;
Game.FPS = 32;

module.exports = Game;