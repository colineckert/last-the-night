const Util = require('./util');
const Coord = require('./coord');

class Light {
  constructor(player) {
    this.player = player;
    this.pos = new Coord(player.pos.x, player.pos.y);
  }
  
  update(mouseX, mouseY) {
    this.pos.x = mouseX;
    this.pos.y = mouseY;
  }
  
  drawLight(context){

    let x_midpoint = this.player.pos.x;
    let y_midpoint = this.player.pos.y;

    let diffX = this.pos.x - x_midpoint; 
    let diffY = this.pos.y - y_midpoint;

    // shift starting point to middle of canvas
    context.setTransform(1, 0, 0, 1, x_midpoint, y_midpoint);

    // rotate based on the mouse position
    context.rotate(Math.atan2(diffY, diffX));

    // the triangle
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(200, 100);
    context.lineTo(200, -100);
    context.closePath();

    // the fill color
    context.fillStyle = "rgb(255,255,224, 0.3)";
    // context.fillStyle = "gradient";
    context.fill();

    // reset transform
    context.setTransform(1, 0, 0, 1, 0, 0);

    // the line
    context.beginPath();
    context.moveTo(this.pos.x, this.pos.y);
    context.lineTo(x_midpoint, y_midpoint);

    context.lineWidth = 2;
    context.setLineDash([2, 5]);
    context.strokeStyle = "#315659";
    context.stroke();
  }
}

module.exports = Light;