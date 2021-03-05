const Coord = require('./coord');

class Light {
  constructor(player) {
    this.player = player;
    this.pos = new Coord(player.pos.x, player.pos.y);
    this.a = 600;
    this.b = this.a / 2;
    this.c = 670.82;
    // semiperimeter
    this.s = (this.a + this.b + this.c) / 2;
    // Heron's formula
    this.area = Math.sqrt(this.s * ((this.s - this.a) * (this.s - this.b) * (this.s - this.c)));
  }
  
  update(mouseX, mouseY) {
    this.pos.x = mouseX;
    this.pos.y = mouseY;
  }

  findCursorSlope() {
    // debugger
    return ((this.pos.y - this.player.pos.y) / (this.pos.x - this.player.pos.x));
  }

  findReciprocalSlope() {
    let cursorSlope = this.findCursorSlope();
    return (1 / cursorSlope);
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
    ctx.lineTo(this.a, this.b);
    ctx.lineTo(this.a, -this.b);
    ctx.closePath();

    // Add gradient and color stops
    // let gradient = ctx.createLinearGradient(20,0, 240,0);
    // gradient.addColorStop(0, "rgb(225,255,230, 0.7)");
    // gradient.addColorStop(1, 'transparent');

    // Set the fill style and draw a rectangle
    ctx.globalAlpha = 0.7;
    // ctx.fillStyle = gradient;
    ctx.fillStyle = "white";
    ctx.fill();
    
    // reset transform
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // the line
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(x_midpoint, y_midpoint);

    ctx.lineWidth = 2;
    ctx.setLineDash([2, 5]);
    ctx.strokeStyle = "#315659";
    ctx.stroke();
  }
}

module.exports = Light;