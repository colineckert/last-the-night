const Coord = require('./coord');
const Player = require('./player');
const Map = require('./map');
const Wall = require('./wall');

class Game {
  constructor(canvas, level) {
    this.canvas = canvas;
    this.level = Map.LEVELS[level];
    this.walls = this.level["walls"]
                  .map(row => {
                    return row.map((scalar, index) => {
                      if (index % 2 === 0) {
                        return scalar * canvas.width;
                      } else {
                        return scalar * canvas.height;
                      }
                    });
                  })
                  .map(info => new Wall(...info));
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
    // ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    // ctx.fillStyle = Game.BG_COLOR;
    // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(object => {
      object.draw(ctx);
    });

    this.walls.forEach(wall => wall.draw(ctx));
  };

  collidingWithWall(coord){
    return this.walls.some( wall => {
      return !(
        (coord.x < wall.topLeft.x)
          || (coord.x > wall.bottomRight.x)
          || (coord.y < wall.topLeft.y)
          || (coord.y > wall.bottomRight.y)
      );
    });
  }
}

Game.BG_COLOR = "#000";
Game.DIM_X = 1300;
Game.DIM_Y = 800;
Game.FPS = 32;

module.exports = Game;