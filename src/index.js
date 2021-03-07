const GameView = require('./game_view');
const Map = require('./map');
const MusicPlayer = require('./music');

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

  // Bind our player controls.
  const playBtn = document.getElementById('playBtn')
  playBtn.addEventListener('click', function() {
    MusicPlayer.play();
  });

  const pauseBtn = document.getElementById('pauseBtn')
  pauseBtn.addEventListener('click', function() {
    MusicPlayer.pause();
  });
  
});

let level = 1;

const launch = () => {
  const splashes = document.querySelectorAll('.splash');
  for (let splash of splashes) {
    splash.style.visibility = "hidden";
  }
  window.GameView = new GameView(canvas, level, pass, win, lose);
  window.GameView.start();
  document.removeEventListener("keydown", launch);
} 

const pass = () => {
  const levelSplash = document.getElementById('level-splash');
  levelSplash.style.visibility = "visible";

  const victoryLine = document.getElementById('level-victory');
  victoryLine.innerHTML = `YOU HAVE BEATEN LEVEL ${level}`;

  ['level_header', 'level_header_2'].forEach(id => {
    let el = document.getElementById(id);
    el.innerHTML = Map.LEVELS[level][id];
  });

  level += 1;
  setTimeout(() => {
    document.addEventListener("keydown", launch)
  }, 2000);
}

const win = () => {
  const winSplash = document.getElementById('win-splash');
  winSplash.style.visibility = "visible";
  
  level = 1;
  setTimeout(() => {
    document.addEventListener("keydown", launch)
  }, 2000);
}

const lose = () => {
  const loseSplash = document.getElementById('lose-splash');
  loseSplash.style.visibility = "visible";
  setTimeout(() => {
    document.addEventListener("keydown", launch)
  }, 2000);
}