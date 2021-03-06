const GameView = require('./game_view');

// Initialize canvas and display splash
document.addEventListener("DOMContentLoaded", () => {
  console.log("Try to Last the Night");
  document.addEventListener("keydown", launch);

  const canvas = document.getElementById('canvas');
  const body = document.getElementsByTagName('body')[0];
  
  canvas.width = body.offsetWidth;
  canvas.height = window.innerHeight - 160;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
});

let level = 1;

function win() {
  const winSplash = document.getElementById('win-splash');
  // const victoryLine = document.getElementById('level-victory');
  // victoryLine.innerHTML = `YOU HAVE BEATEN LEVEL ${level}`;
  winSplash.style.visibility = "visible";
  level = 1;
  setTimeout( () => {
    document.addEventListener("keydown", launch)
  }, 2000);
}

function lose() {
  const loseSplash = document.getElementById('lose-splash');
  loseSplash.style.visibility = "visible";
  setTimeout( () => {
    document.addEventListener("keydown", launch)
  }, 2000);
}

function launch() {
  const splashes = document.querySelectorAll('.splash');
  for (let splash of splashes) {
    splash.style.visibility = "hidden";
  }
  window.GameView = new GameView(canvas, level, win, lose);
  window.GameView.start();
  document.removeEventListener("keydown", launch);
} 