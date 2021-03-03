const Coord = require('./coord');

class Player {
  constructor(startX, startY, map){
    this.pos = new Coord(startX, startY);
    this.map = map;
  }

  draw(ctx){
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.pos.x, this.pos.y, 10, 10);
  }
};

const rt2oTwo = Math.sqrt(2)/2;

Player.SPEED = 1.5;
Player.MOVES = {
  "U": [0, -1],
  "D": [0, 1],
  "UL": [-rt2oTwo, -rt2oTwo],
  "DL": [-rt2oTwo, rt2oTwo],
  "L": [-1, 0],
  "R": [1, 0],
  "UR": [rt2oTwo, -rt2oTwo],
  "DR": [rt2oTwo, rt2oTwo]
}


module.exports = Player;