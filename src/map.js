const Player = require('./player');

class Map {
  constructor(canvas){
    window.player = this.player = new Player(
      this.level.playerStart.x * canvas.width,
      this.level.playerStart.y * canvas.height,
      this
    );
  }
}


module.exports = Map;