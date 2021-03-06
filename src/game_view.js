const Game = require('./game');

class GameView {
  constructor(canvas, level, winningCallback, losingCallback) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.game = new Game(canvas, level);
    this.level = level;
    this.player = this.game.player;
    this.light = this.game.light;
    this.winningCallback = winningCallback;
    this.losingCallback = losingCallback;
  };

  // key bindings
  bindControlHandlers() {
    window.addEventListener("keydown", (e) => {
      GameView.KEYS[e.key] = true;
    });

    window.addEventListener("keyup", (e) => {
      GameView.KEYS[e.key] = false;
    });

    // window.addEventListener("click", (e) => {
    //   this.player.lightPulse(); 
    // });
      
    this.canvas.addEventListener("mousemove",(e) => { 
      this.setMousePosition(this.canvas, e); 
    }); 
  } 

  dirKeys() {
    const player = this.player;

    if (GameView.KEYS['w'] && GameView.KEYS['a']) {
      player.move("UL");
    } else if (GameView.KEYS['w'] && GameView.KEYS['d']){
      player.move("UR")
    } else if (GameView.KEYS['s'] && GameView.KEYS['a']){
      player.move("DL");
    } else if (GameView.KEYS['s'] && GameView.KEYS['d']){
      player.move("DR");
    } else if (GameView.KEYS['a']) {
      player.move("L");
    } else if (GameView.KEYS['d']) {
      player.move("R");
    } else if (GameView.KEYS['w']) {
      player.move("U");
    } else if (GameView.KEYS['s']) {
      player.move("D");
    } // else if --> space bar --> toggle light
  }

  // mouse bindings
  setMousePosition(canvas, event) { 
    let rect = canvas.getBoundingClientRect(); 
    let mouseX = event.clientX - rect.left; 
    let mouseY = event.clientY - rect.top;

    // requestAnimationFrame(this.light.update(mouseX, mouseY));
    this.light.update(mouseX, mouseY);
  }

  start(){
    // bind key and mouse handlers
    this.bindControlHandlers();
    this.dirKeys();

    // start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  playerEscaped(){
    return this.player.escaped();
  }

  playerKilled(){
    //ask game if player collided with ghost
    return this.game.playerKilled();
  }

  animate() {
    this.dirKeys();
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.game.step();
    this.game.draw(this.ctx);

    this.playerEscaped();
    this.playerKilled();
    
    if (this.playerEscaped()) {
      // if (this.level <= 5) {
      //   this.passCallback();
      // } else {
        this.winningCallback();
      // }
    } else if (this.playerKilled()){
      this.losingCallback();
    } else {
      // every call to animate requests causes another call to animate
      requestAnimationFrame(this.animate.bind(this));
    }
    // requestAnimationFrame(this.animate.bind(this));
  }
};

GameView.KEYS = {};

module.exports = GameView;