const Coord = require('./coord');

class Light {
  constructor(player) {
    this.player = player;
    this.cursPos = new Coord(player.pos.x, player.pos.y);
    this.a = 300;
    this.b = this.a / 2;
    this.c = Math.sqrt((this.a * this.a) + (this.b * this.b));
    // semiperimeter
    // this.s = (this.a + this.b + this.c) / 2;
    // Heron's formula
    // this.area = Math.sqrt(this.s * ((this.s - this.a) * (this.s - this.b) * (this.s - this.c)));
  }
  
  update(mouseX, mouseY) {
    this.cursPos.x = mouseX;
    this.cursPos.y = mouseY;
  }

  findCursorSlope() {
    return ((this.cursPos.y - this.player.pos.y) / (this.cursPos.x - this.player.pos.x));
  }

  // findReciprocalSlope() {
  //   let cursorSlope = this.findCursorSlope();
  //   return (1 / cursorSlope);
  // }

  getAngleDeg() {
    let angleRad = Math.atan(this.findCursorSlope());
    let angleDeg = angleRad * 180 / Math.PI;
    return(angleDeg);
  }

  // Find the point on a line of slope M at distance L, rotating around Player
  findTriTop() {
    // length of tri from player to cursor
    let l = this.a;

    let pX = this.player.pos.x;
    let pY = this.player.pos.y;

    let t = new Coord(0, 0);
    let m = this.findCursorSlope();
    
    if (pX <= this.cursPos.x) {
      // Slope is 0
      if (m == 0)
      {
        t.x = pX + l;
        t.y = pY;
      }
      // If slope is infinte
      else if (!isFinite(m))
      {
        t.x = pX;
        t.y = pY + l;
      } 
      else 
      {
        let dx = (l / Math.sqrt(1 + (m * m)));
        let dy = m * dx;
        t.x = pX + dx;
        t.y = pY + dy;
      }
      // else if (m > 0 )

      // Return top of tri
      return t;
    }
    else {
      // Slope is 0
      if (m == 0)
      {
        t.x = pX + l;
        t.y = pY;
      }
      // If slope is infinte
      else if (!isFinite(m))
      {
        t.x = pX;
        t.y = pY + l;
      } 
      else 
      {
        let dx = (l / Math.sqrt(1 + (m * m)));
        let dy = m * dx;
        t.x = pX - dx;
        t.y = pY - dy;
      }
      // else if (m > 0 )

      // Return top of tri
      return t;
    }
  }

  // Find the corners of tri given player, top, and reciprical angle 
  findCorner1() {
    // length of top of tri
    let l = this.a;

    // grab top of tri coord
    let q = this.findTriTop();

    // grab player and cursor x and y coords
    let p = this.player.pos

    // initiate corner points
    let c = new Coord(0, 0)
    
    // horizontal rectangle  
    if (p.x == q.x)  
    { 
            c.x = (q.x + (l / 2.0)); 
            c.y = q.y; 
    }  
    // vertical rectangle  
    else if (p.y == q.y) 
    { 
            c.y = (q.y + (l / 2.0)); 
            c.x = q.x; 
    }  
    // slanted rectangle  
    else 
    { 
      // calculate slope of the side  
      let m = (p.x - q.x) / (q.y - p.y); 
      // let m = this.findReciprocalSlope();

      // calculate displacements along axes  
      let dx = ((l / Math.sqrt(1 + (m * m))) * 0.5); 
      let dy = m * dx; 

            c.x = q.x + dx; 
            c.y = q.y + dy; 
    }

    return c;
  }

  findCorner2() {
    // length of top of tri
    let l = this.a;

    // grab top of tri coord
    let q = this.findTriTop();

    // grab player and cursor x and y coords
    let p = this.player.pos

    // initiate corner points
    let b = new Coord(0, 0);
    
    // horizontal rectangle  
    if (p.x == q.x)  
    { 
            b.x = (q.x - (l / 2.0)); 
            b.y = q.y; 
    }  
    // vertical rectangle  
    else if (p.y == q.y) 
    { 
            b.y = (q.y - (l / 2.0)); 
            b.x = q.x; 
    }  
    // slanted rectangle  
    else 
    { 
      // calculate slope of the side  
      let m = (p.x - q.x) / (q.y - p.y); 
      // let m = this.findReciprocalSlope();

      // calculate displacements along axes  
      let dx = ((l / Math.sqrt(1 + (m * m))) * 0.5); 
      let dy = m * dx; 

            b.x = q.x - dx; 
            b.y = q.y - dy; 
    }

    return b;
  }

  area(x1,  y1,  x2,  y2, x3,  y3) { 
    return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0); 
  } 

  revealed(x, y) {    
    let x1 = Math.abs(this.player.pos.x);
    let y1 = Math.abs(this.player.pos.y);

    let x2 = Math.abs(this.findCorner1().x);
    let y2 = Math.abs(this.findCorner1().y);

    let x3 = Math.abs(this.findCorner2().x);
    let y3 = Math.abs(this.findCorner2().y);

    /* Calculate area of triangle ABC */
    let A = this.area(x1, y1, x2, y2, x3, y3); 
    
    /* Calculate area of triangle PBC */  
    let A1 = this.area(x, y, x2, y2, x3, y3); 
    
    /* Calculate area of triangle PAC */  
    let A2 = this.area(x1, y1, x, y, x3, y3); 
    
    /* Calculate area of triangle PAB */   
    let A3 = this.area(x1, y1, x2, y2, x, y); 
    debugger
    
    let sumAreas = A1 + A2 + A3;
    
    /* Check if sum of A1, A2 and A3 is same as A */
    return (((A - 1) <= sumAreas) && (sumAreas <= (A + 1))); 
  }
  
  draw(ctx){
    let x_midpoint = this.player.pos.x;
    let y_midpoint = this.player.pos.y;

    let diffX = this.cursPos.x - x_midpoint; 
    let diffY = this.cursPos.y - y_midpoint;
    
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
    // let gradient = ctx.createLinearGradient(300,0, 500,0);
    // gradient.addColorStop(0, "rgb(225,255,230, 0.7)");
    // gradient.addColorStop(0, "white");
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
    ctx.moveTo(this.cursPos.x, this.cursPos.y);
    ctx.lineTo(x_midpoint, y_midpoint);

    ctx.lineWidth = 2;
    ctx.setLineDash([2, 5]);
    ctx.strokeStyle = "#315659";
    ctx.stroke();
  }
}

module.exports = Light;