# Last the Night
A browser based game that integrates an object-oriented Javascript game structure with the fast rendering of HTML5 canvas to create an engaging and haunting experience for players. 

Play here

![gameplay screenshot]

## Gameplay
You find yourself waking in a dark, mysterious place with only a flashlight to find your way. As you try to navigate and escape darkness, eerie shadows haunt your footsteps. 

Can you last the night?

## Implementation

### Basic Rendering
A `GameView` class renders the game, using a `requestAnimationFrame` loop. 

```js
// game_view.js

if (this.playerEscaped()) {
  if (this.level <= 5) {
    this.passCallback();
  } else {
    this.winningCallback();
  }
} else if (this.playerKilled()){
  this.losingCallback();
} else {
  requestAnimationFrame(this.animate.bind(this));
}
```

The `GameView` then delegates rendering of the game's objects to the `Game` class, which keeps track of all the objects on the map. The `Game` further delegates rendering of individual objects to the objects themselves, each of which have their own `#draw` function.

```js
// game.js

allObjects() {
  return [].concat(this.walls, this.light, this.ghosts, this.player);
}

draw(ctx) {
  this.allObjects().forEach(object => {
    object.draw(ctx);
  });
}
```

The game canvas sizes itself dynamically based on `window.innerWidth` and `window.innerHeight`. Therefore, I needed to design and position the map's walls for each level to ensure they displayed at scale. I accomplished this using *scalar* values rather than absolute values.

```js
// map.js

LEVELS : {
    1: {
      walls: [
      [0, 0, 0.01, 1],
      [0, 0.35, 0.2, 0.4],
      [0.2, 0.15, 0.25, 0.4],
      [0.2, 0.15, 0.75, 0.2],
      [0.4, 0.45, 0.45, 0.6],
      [0, 0.6, 0.6, 0.65],
      [0.7, 0.2, 0.75, 1],
      [0.5, 0.65, 0.55, 1]
      ],
      playerStart: {x: .05, y: .50},
    },
    2: {
```

### The Flashlight
Players navigate the game using a flashlight, which reveals a small area of the overall map. Everything outside the the flashlight's area, including enemies, is hidden to the player. 

In order for the main game mechanic to be used for both navigation and enemy activation, I approached this challenge in the following ways when developing the game's `Light` class: 

- While player movement is controlled using WASD keys, the flashlight direction is controlled using the mouse. This required additional event listeners to locate the cursor on the window and for the `Light` object to be updated as the cursor changed position.

```js
// game_view.js 

setMousePosition(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let mouseX = event.clientX - rect.left; 
  let mouseY = event.clientY - rect.top;

  this.light.update(mouseX, mouseY);
}

// light.js

update(mouseX, mouseY) {
  this.cursPos.x = mouseX;
  this.cursPos.y = mouseY;
}
```
- The flashlight needed to be bound to and rotate around the player. Monitoring and updating the player position, as well as the positions of the light triangle's other two corners, meant I needed to capture three coordinates of a constatly moving triangle in real-time. I could easily maintain the player's position, and was able to accomplish capturing the coordinates of the other corners using geometry and trigonometry. By calculating the slope and length of the line between the cursor and player coordinates, it's recipricol line, and the midpoint of the side opposite the player, I could find the corner coordinates.  

```js
findCursorSlope() {
  return ((this.cursPos.y - this.player.pos.y) / (this.cursPos.x - this.player.pos.x));
}

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

    // Return top of tri
    return t;
  } else {
    ...
  }
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
    
    // horizontal slope  
    if (p.x == q.x)  
    { 
      b.x = (q.x - (l / 2.0)); 
      b.y = q.y; 
    }  
    // vertical slope  
    else if (p.y == q.y) 
    { 
      b.y = (q.y - (l / 2.0)); 
      b.x = q.x; 
    }  
    else 
    { 
      // calculate slope of the side (reciprecol of cursor slope)
      let m = (p.x - q.x) / (q.y - p.y); 

      // calculate displacements along axes  
      let dx = ((l / Math.sqrt(1 + (m * m))) * 0.5); 
      let dy = m * dx; 

      b.x = q.x - dx; 
      b.y = q.y - dy; 
    }

    return b;
  }      
```

- Once I was able to accurately capture the coordinates of all corners of the light, I could use them to determine whether an enemy had entered the light area and thus was to be activated. I did this by writing and algorithm to calculate the area made from each interior triangle created by the enemy's position within the light and compared their sum to the area of the light. If the enemy was revealed (found within the light), they would be activated.

```js
// light.js

revealed(x, y) {    
  // Grab coordinates of triangle corners
  let x1 = Math.abs(this.player.pos.x);
let y1 = Math.abs(this.player.pos.y);

  let x2 = Math.abs(this.findCorner1().x);
  let y2 = Math.abs(this.findCorner1().y);

  let x3 = Math.abs(this.findCorner2().x);
  let y3 = Math.abs(this.findCorner2().y);

  // Calculate total area of outer triangle
  let A = this.area(x1, y1, x2, y2, x3, y3); 
   
  // Calculate areas of interior triangles
  let A1 = this.area(x, y, x2, y2, x3, y3); 
  let A2 = this.area(x1, y1, x, y, x3, y3); 
  let A3 = this.area(x1, y1, x2, y2, x, y); 
  
  let sumAreas = A1 + A2 + A3;
  
  // Check if sum of A1, A2 and A3 is same as A, allowing for small variance
  return (((A - 1) <= sumAreas) && (sumAreas <= (A + 1))); 
}

// game.js

revealGhost(){
  const light = this.light;
  return this.ghosts.some( ghost => {
    if (light.revealed(ghost.pos.x, ghost.pos.y)) {
      setTimeout(() => ghost.activate(), 1000);
    }
  })
}
```

### Movement
Once an enemy was activated, they moved relative to the player's location, computed as a normalized unit vector. 

```js
// util.js

// Normalize the length of the vector to 1, maintaining direction.
normalize(vec) {
  const norm = Util.magnitude(vec);
  return Util.scale(vec, 1 / norm);
},
// Find distance between two points.
magnitude(vec) {
  return Math.sqrt(
    Math.pow(vec[0], 2) + Math.pow(vec[1], 2)
  );
},

// ghost.js

direction() {
  const vector = [
    this.game.player.pos.x - this.pos.x,
    this.game.player.pos.y - this.pos.y,
  ]
  const unitVector = Util.normalize(vector);
  return new Coord(unitVector[0], unitVector[1]);
}
```

## Future Improvements

### Additonal flashlight gameplay 
Currently, the player's flashlight is just a navigation tool that awakens enemies. In further iterations of the game, I'd like to explore using the flashlight as a weapon, to either slow or breakdown enemies. In addition to damage capabilities, perhaps a depeleting battery via a progress bar would add more urgency and tension to the experience. 

### Smarter enemy AI
Currently, enemies will follow the players along vectors. If they collide with a wall, they follow an onbstructed axis until they can return to the vector course. 

```js
// ghost.js

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
```

Eventually, rather than moving directly into walls when the better path is around, I'd like to explore more of maze solving algorithm (e.g. BF tree traversal).