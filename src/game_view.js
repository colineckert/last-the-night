const Game = require('./game');
// const { Howl, Howler } = require("howler");

class GameView {
  constructor(canvas, level, passCallback, winningCallback, losingCallback) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.game = new Game(canvas, level);
    this.level = level;
    this.player = this.game.player;
    this.light = this.game.light;
    this.passCallback = passCallback;
    this.winningCallback = winningCallback;
    this.losingCallback = losingCallback;
    // this.updateBattery();
  };

  // updateBattery() {
  //   let battery = document.getElementById('battery');
  //   setInterval(() => {
  //     battery.value -= 50;
  //   }, 1000);

  //   if (battery.value === 0) this.light.toggleLight();
  // }

  // control bindings
  bindControlHandlers() {
    window.addEventListener("keydown", (e) => {
      GameView.KEYS[e.key] = true;
    });

    window.addEventListener("keyup", (e) => {
      GameView.KEYS[e.key] = false;
    });
      
    window.addEventListener("mousemove",(e) => { 
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
    document.getElementById('piano-music').play();

    this.dirKeys();
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.game.step();
    this.game.draw(this.ctx);
    
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
  }
};

GameView.KEYS = {};

module.exports = GameView;