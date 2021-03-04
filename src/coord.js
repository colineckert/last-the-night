class Coord {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  equals(otherCoord){
    return (Math.abs(Math.floor(this.x) - Math.floor(otherCoord.x)) < 7)
      && (Math.abs(Math.floor(this.y) - Math.floor(otherCoord.y)) < 7)
  }
}

module.exports = Coord;