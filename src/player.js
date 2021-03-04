const Coord = require('./coord');

class Player {
  constructor(startX, startY, game){
    this.pos = new Coord(startX, startY);
    this.game = game;
  }

  draw(ctx){
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.pos.x, this.pos.y, 7, 7);
  }

  move(dir) {
    const newX = this.pos.x + (Player.MOVES[dir][0] * Player.SPEED);
    const newY = this.pos.y + (Player.MOVES[dir][1] * Player.SPEED);
    const newCoord = new Coord(newX, newY);

    const tryCoordTopLeft = new Coord(newX - 3, newY - 3);
    const tryCoordBottomLeft = new Coord(newX - 3, newY + 3);
    const tryCoordTopRight = new Coord(newX + 3, newY - 3);
    const tryCoordBottomRight = new Coord(newX + 3, newY + 3);

    if (
      this.game.collidingWithWall(tryCoordTopLeft) ||
      this.game.collidingWithWall(tryCoordBottomLeft) ||
      this.game.collidingWithWall(tryCoordTopRight) ||
      this.game.collidingWithWall(tryCoordBottomRight)
    ) { return; }

    this.pos = newCoord;
  }
};

const sqrt2d2 = Math.SQRT2/2;

Player.SPEED = 5.5;
Player.MOVES = {
  "U": [0, -1],
  "D": [0, 1],
  "UL": [-sqrt2d2, -sqrt2d2],
  "DL": [-sqrt2d2, sqrt2d2],
  "L": [-1, 0],
  "R": [1, 0],
  "UR": [sqrt2d2, -sqrt2d2],
  "DR": [sqrt2d2, sqrt2d2]
}

module.exports = Player;