const Coord = require('./coord');

class Player {
  constructor(startX, startY, game){
    this.pos = new Coord(startX, startY);
    this.game = game;
  }

  draw(ctx){
    ctx.fillStyle = "#fff";
    // ctx.beginPath();
    // ctx.arc(this.pos.x, this.pos.y, 5, 0, 2 * Math.PI);
    // ctx.fill();
    ctx.fillRect(this.pos.x, this.pos.y, 7, 7);
  }

  move(dir) {
    const newX = this.pos.x + (Player.MOVES[dir][0] * Player.SPEED);
    const newY = this.pos.y + (Player.MOVES[dir][1] * Player.SPEED);
    const newCoord = new Coord(newX, newY);

    const exploreCoordTopLeft = new Coord(newX - 3, newY - 3);
    const exploreCoordBottomLeft = new Coord(newX - 3, newY + 3);
    const exploreCoordTopRight = new Coord(newX + 3, newY - 3);
    const exploreCoordBottomRight = new Coord(newX + 3, newY + 3);

    if (
      this.game.collidingWithWall(exploreCoordTopLeft) ||
      this.game.collidingWithWall(exploreCoordBottomLeft) ||
      this.game.collidingWithWall(exploreCoordTopRight) ||
      this.game.collidingWithWall(exploreCoordBottomRight)
    ) { return; }

    this.pos = newCoord;
  }
};

const sqrt2d2 = Math.SQRT2/2;

Player.SPEED = 1.5;
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