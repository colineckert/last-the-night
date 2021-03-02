class GameView {
  constructor(canvas, passCallback, losingCallback, winningCallback, level) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    // this.map = new Map(canvas, level);
    this.player = this.map.player;
    this.passCallback = passCallback;
    this.winningCallback = winningCallback;
    this.losingCallback = losingCallback;
    this.level = level;
  }
}