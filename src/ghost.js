const Coord = require('./coord');
const Util = require('./util');

class Ghost{
  constructor(startX, startY, game, active) {
    this.pos = new Coord(startX, startY);
    this.game = game;
    // if (active) { this.activate(); }
  }

  draw(ctx){
    ctx.fillStyle = '#000';
    ctx.fillRect(this.pos.x, this.pos.y, 15, 15);
  }

  activate() {
    this.active = true;
  }

  direction() {
    const vector = [
      this.game.player.pos.x - this.pos.x,
      this.game.player.pos.y - this.pos.y,
    ]
    const unitVector = Util.normalize(vector);
    return new Coord(unitVector[0], unitVector[1]);
  }

  move(){
    if (this.active) {
      const dir = this.direction();
      const newX = this.pos.x + (dir.x * Ghost.SPEED)
      const newY = this.pos.y + (dir.y * Ghost.SPEED)
      let newCoord = new Coord(newX, newY);

      if (this.game.collidingWithWall(newCoord)) {
        newCoord = new Coord(
          this.pos.x + (dir.x * Ghost.SPEED),
          this.pos.y
        )
        if (this.game.collidingWithWall(newCoord)){
          newCoord = new Coord(
            this.pos.x,
            this.pos.y + (dir.y * Ghost.SPEED)
          )
        } if (this.game.collidingWithWall(newCoord)) {
          return;
        }
      }

      this.pos = newCoord;
    }
  }

}

Ghost.SPEED = 1;

module.exports = Ghost;
