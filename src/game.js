const Player = require('./player');
const Map = require('./map');
const Wall = require('./wall');
const Light = require('./light');
const Ghost = require('./ghost');

class Game {
  constructor(canvas, level) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.level = Map.LEVELS[level];
    this.walls = this.level["walls"]
                  .map(row => {
                    return row.map((scalar, index) => {
                      if (index % 2 === 0) {
                        return scalar * canvas.width;
                      } else {
                        return scalar * canvas.height;
                      }
                    })
                  })
                  .map(info => new Wall(...info));

    window.player = this.player = new Player(
      (this.level.playerStart.x * canvas.width),
      (this.level.playerStart.y * canvas.height),
      this
      )

    window.light = this.light = new Light(this.player);

    this.ghosts = [];
    if (this.level.ghosts) {
      this.ghosts = this.level.ghosts.map( ghost => {
        return new Ghost(
          ghost.x * canvas.width,
          ghost.y * canvas.height,
          this,
          ghost.active
        )
      })
    }
  }

  allObjects() {
    return [].concat( this.walls, this.light, this.ghosts, this.player);
  }

  draw(ctx) {
    this.allObjects().forEach(object => {
      object.draw(ctx);
    });
  }

  collidingWithWall(coord){
    return this.walls.some( wall => {
      return !(
        (coord.x < wall.topLeft.x)
          || (coord.x > wall.bottomRight.x)
          || (coord.y < wall.topLeft.y)
          || (coord.y > wall.bottomRight.y)
      )
    })
  }

  escapedMap(coord){
    return (
      (coord.x < 0) || 
      (coord.y < 0) || 
      (coord.x > canvas.width) || 
      (coord.y > canvas.height)
    );
  }

  revealGhost(){
    const light = this.light;
    // let revealed;
    return this.ghosts.some( ghost => {
      if (light.revealed(ghost.pos.x, ghost.pos.y)) {
        setTimeout(() => ghost.activate(), 2000);
      }
    })
  }

  moveGhosts(){
    for (let ghost of this.ghosts) {
      ghost.move();
    }
  }

  playerKilled(){
    return this.ghosts.some(ghost => {
      if (!ghost.active) { return; }
      return ghost.pos.equals(this.player.pos);
    });
  }

  step(){
    this.revealGhost();
    this.moveGhosts();
  }

}

Game.BG_COLOR = "#000";
Game.DIM_X = 1300;
Game.DIM_Y = 800;
Game.FPS = 32;

module.exports = Game;