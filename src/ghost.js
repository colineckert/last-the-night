const Coord = require('./coord');

class Ghost{
  constructor(startX, startY, game) {
    this.pos = new Coord(startX, startY);
    this.game = game;
    this.light = this.game.light;
  }

  draw(ctx){
    ctx.fillStyle = "#eee";
    ctx.fillRect(this.pos.x, this.pos.y, 10, 10);
    this.invertColors();
  }

  
}

module.exports = Ghost;