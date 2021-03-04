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
  
  draw(ctx){

    let x_midpoint = this.player.pos.x;
    let y_midpoint = this.player.pos.y;

    let diffX = this.pos.x - x_midpoint; 
    let diffY = this.pos.y - y_midpoint;

    // shift starting point to middle of canvas
    ctx.setTransform(1, 0, 0, 1, x_midpoint, y_midpoint);

    // rotate based on the mouse position
    ctx.rotate(Math.atan2(diffY, diffX));

    // the triangle
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.lineTo(200, -100);
    ctx.closePath();
    
    // // the fill color
    // ctx.fillStyle = "rgb(255,255,224, 0.3)";
    // ctx.fill();
    
    // ctx.globalCompositeOperation = 'difference';

    let gradient = ctx.createLinearGradient(20,0, 240,0);

    // Add three color stops
    gradient.addColorStop(0, "rgb(225,255,210, 0.5)");
    gradient.addColorStop(1, 'transparent');
    // gradient.addColorStop(1, 'green');

    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradient;
    // ctx.fillRect(20, 20, 160, 160);
    ctx.fill();
    
    
    // reset transform
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // // the line
    // ctx.beginPath();
    // ctx.moveTo(this.pos.x, this.pos.y);
    // ctx.lineTo(x_midpoint, y_midpoint);

    // ctx.lineWidth = 2;
    // ctx.setLineDash([2, 5]);
    // ctx.strokeStyle = "#315659";
    // ctx.stroke();
  }
}

module.exports = Light;