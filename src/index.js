const Game = require("./game");
const GameView = require('./game_view');

// Initialize canvas and display splash
document.addEventListener("DOMContentLoaded", () => {
  console.log("Try to Last the Night");
  document.addEventListener("keydown", launch);

  const canvas = document.getElementById('canvas');
  const body = document.getElementsByTagName('body')[0];
  // canvas.width = Game.DIM_X;
  // canvas.height = Game.DIM_Y;
  
  canvas.width = body.offsetWidth;
  canvas.height = window.innerHeight - 100;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
});

let level = 1;

function launch() {
  window.GameView = new GameView(canvas, level);
  window.GameView.start();
  document.removeEventListener("keydown", launch);
} 