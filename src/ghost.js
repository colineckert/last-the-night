const Coord = require('./coord');

class Ghost{
  constructor(startX, startY, game) {
    this.pos = new Coord(startX, startY);
    this.game = game;
    this.light = this.game.light;
  }

  draw(ctx){
    ctx.fillStyle = 'black';
    ctx.fillRect(this.pos.x, this.pos.y, 15, 15);
  }

  show() {
    if (this.game.revealGhost())
    console.log("in the light");
  }
}

module.exports = Ghost;