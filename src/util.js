const Util = {
  inherits(Child, Parent) {
    function Surrogate (){};
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
  }
};

module.exports = Util;