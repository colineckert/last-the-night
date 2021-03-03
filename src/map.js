const Player = require('./player');

class Map {
  constructor(canvas){
    debugger
    this.canvas = canvas;
    window.player = this.player = new Player(
      // this.level.playerStart.x * canvas.width,
      // this.level.playerStart.y * canvas.height,
      (0.05 * canvas.width),
      (0.47 * canvas.height),
      this
    );
    debugger
  }

  allObjects() {
    return [].concat(this.player);
  };

  draw(ctx) {
    ctx.clearRect(0, 0, Map.DIM_X, Map.DIM_Y);
    ctx.fillStyle = Map.BG_COLOR;
    ctx.fillRect(0, 0, Map.DIM_X, Map.DIM_Y);

    this.allObjects().forEach(object => {
      object.draw(ctx);
    });
  };
}

Map.BG_COLOR = "#ccc";
Map.DIM_X = 600;
Map.DIM_Y = 600;

module.exports = Map;