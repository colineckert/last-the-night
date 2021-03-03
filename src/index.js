const GameView = require('./game_view');

// Initialize canvas and display splash
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Last the Night");
  document.addEventListener("keydown", launch);

  const canvas = document.getElementById('canvas');
  const body = document.getElementsByTagName('body')[0];
  canvas.width = body.offsetWidth;
  canvas.height = window.innerHeight - 100;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
});

function launch(){
  window.GameView = new GameView(canvas);
  window.GameView.start();
} 