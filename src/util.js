const Util = {
  inherits(Child, Parent) {
    function Surrogate (){};
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
  },

  // Normalize the length of the vector to 1, maintaining direction.
  normalize(vec) {
    const norm = Util.magnitude(vec);
    return Util.scale(vec, 1 / norm);
  },
  // Find distance between two points.
  magnitude(vec) {
    return Math.sqrt(
      Math.pow(vec[0], 2) + Math.pow(vec[1], 2)
    );
  },
  // Return a randomly oriented vector with the given length.
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;