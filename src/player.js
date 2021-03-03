const Coord = require('./coord');

class Player {
  constructor(startX, startY, game){
    this.pos = new Coord(startX, startY);
    this.game = game;
  }

  draw(ctx){
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 4, 0, 2 * Math.PI);
    ctx.fill();
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