module.exports = {
  LEVELS : {
    1: {
      walls: [
        [0, 0, 0.01, 1],
        [0, 0.35, 0.2, 0.4],
        [0.2, 0.15, 0.25, 0.4],
        [0.2, 0.15, 0.75, 0.2],
        [0, 0.6, 0.6, 0.65],
        [0.7, 0.2, 0.75, 1],
        [0.5, 0.65, 0.55, 1]
      ],
      playerStart: {x: .05, y: .50},
      ghosts: [
        { x: .40, y: .25, active: false },
        { x: .60, y: .67, active: false }
      ],
    }
  }
} 
  
window.wallColor = { color: "#000" };