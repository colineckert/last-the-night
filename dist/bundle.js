/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/coord.js":
/*!**********************!*\
  !*** ./src/coord.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coord = /*#__PURE__*/function () {
  function Coord(x, y) {
    _classCallCheck(this, Coord);

    this.x = x;
    this.y = y;
  }

  _createClass(Coord, [{
    key: "equals",
    value: function equals(otherCoord) {
      return Math.abs(Math.floor(this.x) - Math.floor(otherCoord.x)) < 7 && Math.abs(Math.floor(this.y) - Math.floor(otherCoord.y)) < 7;
    }
  }]);

  return Coord;
}();

module.exports = Coord;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = __webpack_require__(/*! ./player */ "./src/player.js");

var Map = __webpack_require__(/*! ./map */ "./src/map.js");

var Wall = __webpack_require__(/*! ./wall */ "./src/wall.js");

var Light = __webpack_require__(/*! ./light */ "./src/light.js");

var Ghost = __webpack_require__(/*! ./ghost */ "./src/ghost.js");

var Game = /*#__PURE__*/function () {
  function Game(canvas, level) {
    var _this = this;

    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.level = Map.LEVELS[level];
    this.walls = this.level["walls"].map(function (row) {
      return row.map(function (scalar, index) {
        if (index % 2 === 0) {
          return scalar * canvas.width;
        } else {
          return scalar * canvas.height;
        }
      });
    }).map(function (info) {
      return _construct(Wall, _toConsumableArray(info));
    });
    window.player = this.player = new Player(this.level.playerStart.x * canvas.width, this.level.playerStart.y * canvas.height, this);
    window.light = this.light = new Light(this.player);
    this.ghosts = [];

    if (this.level.ghosts) {
      this.ghosts = this.level.ghosts.map(function (ghost) {
        return new Ghost(ghost.x * canvas.width, ghost.y * canvas.height, _this, ghost.active);
      });
    }
  }

  _createClass(Game, [{
    key: "allObjects",
    value: function allObjects() {
      return [].concat(this.walls, this.light, this.ghosts, this.player);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.allObjects().forEach(function (object) {
        object.draw(ctx);
      });
    }
  }, {
    key: "collidingWithWall",
    value: function collidingWithWall(coord) {
      return this.walls.some(function (wall) {
        return !(coord.x < wall.topLeft.x || coord.x > wall.bottomRight.x || coord.y < wall.topLeft.y || coord.y > wall.bottomRight.y);
      });
    }
  }, {
    key: "escapedMap",
    value: function escapedMap(coord) {
      return coord.x < 0 || coord.y < 0 || coord.x > canvas.width || coord.y > canvas.height;
    }
  }, {
    key: "revealGhost",
    value: function revealGhost() {
      var light = this.light;
      return this.ghosts.some(function (ghost) {
        if (light.revealed(ghost.pos.x, ghost.pos.y)) {
          setTimeout(function () {
            return ghost.activate();
          }, 1000);
        }
      });
    }
  }, {
    key: "moveGhosts",
    value: function moveGhosts() {
      var _iterator = _createForOfIteratorHelper(this.ghosts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ghost = _step.value;
          ghost.move();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "playerKilled",
    value: function playerKilled() {
      var _this2 = this;

      return this.ghosts.some(function (ghost) {
        if (!ghost.active) {
          return;
        }

        return ghost.pos.equals(_this2.player.pos);
      });
    }
  }, {
    key: "step",
    value: function step() {
      this.revealGhost();
      this.moveGhosts();
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game = __webpack_require__(/*! ./game */ "./src/game.js"); // const { Howl, Howler } = require("howler");


var GameView = /*#__PURE__*/function () {
  function GameView(canvas, level, passCallback, winningCallback, losingCallback) {
    _classCallCheck(this, GameView);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.game = new Game(canvas, level);
    this.level = level;
    this.player = this.game.player;
    this.light = this.game.light;
    this.passCallback = passCallback;
    this.winningCallback = winningCallback;
    this.losingCallback = losingCallback; // this.updateBattery();
  }

  _createClass(GameView, [{
    key: "bindControlHandlers",
    value: // updateBattery() {
    //   let battery = document.getElementById('battery');
    //   setInterval(() => {
    //     battery.value -= 50;
    //   }, 1000);
    //   if (battery.value === 0) this.light.toggleLight();
    // }
    // control bindings
    function bindControlHandlers() {
      var _this = this;

      window.addEventListener("keydown", function (e) {
        GameView.KEYS[e.key] = true;
      });
      window.addEventListener("keyup", function (e) {
        GameView.KEYS[e.key] = false;
      });
      window.addEventListener("mousemove", function (e) {
        _this.setMousePosition(_this.canvas, e);
      });
    }
  }, {
    key: "dirKeys",
    value: function dirKeys() {
      var player = this.player;

      if (GameView.KEYS['w'] && GameView.KEYS['a']) {
        player.move("UL");
      } else if (GameView.KEYS['w'] && GameView.KEYS['d']) {
        player.move("UR");
      } else if (GameView.KEYS['s'] && GameView.KEYS['a']) {
        player.move("DL");
      } else if (GameView.KEYS['s'] && GameView.KEYS['d']) {
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

    } // mouse bindings

  }, {
    key: "setMousePosition",
    value: function setMousePosition(canvas, event) {
      var rect = canvas.getBoundingClientRect();
      var mouseX = event.clientX - rect.left;
      var mouseY = event.clientY - rect.top;
      this.light.update(mouseX, mouseY);
    }
  }, {
    key: "start",
    value: function start() {
      // bind key and mouse handlers
      this.bindControlHandlers();
      this.dirKeys(); // start the animation

      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: "playerEscaped",
    value: function playerEscaped() {
      return this.player.escaped();
    }
  }, {
    key: "playerKilled",
    value: function playerKilled() {
      //ask game if player collided with ghost
      return this.game.playerKilled();
    }
  }, {
    key: "animate",
    value: function animate() {
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
      } else if (this.playerKilled()) {
        this.losingCallback();
      } else {
        requestAnimationFrame(this.animate.bind(this));
      }
    }
  }]);

  return GameView;
}();

;
GameView.KEYS = {};
module.exports = GameView;

/***/ }),

/***/ "./src/ghost.js":
/*!**********************!*\
  !*** ./src/ghost.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coord = __webpack_require__(/*! ./coord */ "./src/coord.js");

var Util = __webpack_require__(/*! ./util */ "./src/util.js");

var Ghost = /*#__PURE__*/function () {
  function Ghost(startX, startY, game, active) {
    _classCallCheck(this, Ghost);

    this.pos = new Coord(startX, startY);
    this.game = game; // if (active) { this.activate(); }
  }

  _createClass(Ghost, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = '#000';
      ctx.fillRect(this.pos.x, this.pos.y, 15, 15);
    }
  }, {
    key: "activate",
    value: function activate() {
      this.active = true;
    }
  }, {
    key: "direction",
    value: function direction() {
      var vector = [this.game.player.pos.x - this.pos.x, this.game.player.pos.y - this.pos.y];
      var unitVector = Util.normalize(vector);
      return new Coord(unitVector[0], unitVector[1]);
    }
  }, {
    key: "move",
    value: function move() {
      if (this.active) {
        var dir = this.direction();
        var newX = this.pos.x + dir.x * Ghost.SPEED;
        var newY = this.pos.y + dir.y * Ghost.SPEED;
        var newCoord = new Coord(newX, newY);

        if (this.game.collidingWithWall(newCoord)) {
          newCoord = new Coord(this.pos.x + dir.x * Ghost.SPEED, this.pos.y);

          if (this.game.collidingWithWall(newCoord)) {
            newCoord = new Coord(this.pos.x, this.pos.y + dir.y * Ghost.SPEED);
          }

          if (this.game.collidingWithWall(newCoord)) {
            return;
          }
        }

        this.pos = newCoord;
      }
    }
  }]);

  return Ghost;
}();

Ghost.SPEED = 1;
module.exports = Ghost;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var GameView = __webpack_require__(/*! ./game_view */ "./src/game_view.js");

var Map = __webpack_require__(/*! ./map */ "./src/map.js"); // Initialize canvas and display splash


document.addEventListener("DOMContentLoaded", function () {
  console.log("Try to Last the Night");
  document.addEventListener("keydown", launch);
  var canvas = document.getElementById('canvas');
  var body = document.getElementsByTagName('body')[0];
  canvas.width = body.offsetWidth;
  canvas.height = window.innerHeight - 160;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
var level = 1;

var launch = function launch() {
  var splashes = document.querySelectorAll('.splash');

  var _iterator = _createForOfIteratorHelper(splashes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var splash = _step.value;
      splash.style.visibility = "hidden";
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  window.GameView = new GameView(canvas, level, pass, win, lose);
  window.GameView.start();
  document.removeEventListener("keydown", launch);
};

var pass = function pass() {
  var levelSplash = document.getElementById('level-splash');
  levelSplash.style.visibility = "visible";
  var victoryLine = document.getElementById('level-victory');
  victoryLine.innerHTML = "LEVEL ".concat(level, " SURVIVED");
  ['level_header', 'level_header_2'].forEach(function (id) {
    var el = document.getElementById(id);
    el.innerHTML = Map.LEVELS[level][id];
  });
  level += 1; // battery.value = 1000;

  setTimeout(function () {
    document.addEventListener("keydown", launch);
  }, 2000);
};

var win = function win() {
  var winSplash = document.getElementById('win-splash');
  winSplash.style.visibility = "visible";
  level = 1; // battery.value = 1000;

  setTimeout(function () {
    document.addEventListener("keydown", launch);
  }, 2000);
};

var lose = function lose() {
  var loseSplash = document.getElementById('lose-splash');
  loseSplash.style.visibility = "visible";
  setTimeout(function () {
    document.addEventListener("keydown", launch);
  }, 2000);
};

/***/ }),

/***/ "./src/light.js":
/*!**********************!*\
  !*** ./src/light.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coord = __webpack_require__(/*! ./coord */ "./src/coord.js");

var Light = /*#__PURE__*/function () {
  function Light(player) {
    _classCallCheck(this, Light);

    this.player = player;
    this.cursPos = new Coord(player.pos.x, player.pos.y);
    this.a = 300;
    this.b = this.a / 2;
    this.c = Math.sqrt(this.a * this.a + this.b * this.b); // this.active = true;
  } // toggleLight() {
  //   this.active ? this.active = false : this.active = true;
  // }


  _createClass(Light, [{
    key: "update",
    value: function update(mouseX, mouseY) {
      this.cursPos.x = mouseX;
      this.cursPos.y = mouseY;
    }
  }, {
    key: "findCursorSlope",
    value: function findCursorSlope() {
      return (this.cursPos.y - this.player.pos.y) / (this.cursPos.x - this.player.pos.x);
    }
  }, {
    key: "getAngleDeg",
    value: function getAngleDeg() {
      var angleRad = Math.atan(this.findCursorSlope());
      var angleDeg = angleRad * 180 / Math.PI;
      return angleDeg;
    } // Find the point on a line of slope M at distance L, rotating around Player pos

  }, {
    key: "findTriTop",
    value: function findTriTop() {
      // length of tri from player to cursor
      var l = this.a;
      var pX = this.player.pos.x;
      var pY = this.player.pos.y;
      var t = new Coord(0, 0);
      var m = this.findCursorSlope();

      if (pX <= this.cursPos.x) {
        // Slope is 0
        if (m == 0) {
          t.x = pX + l;
          t.y = pY;
        } // If slope is infinte
        else if (!isFinite(m)) {
            t.x = pX;
            t.y = pY + l;
          } else {
            var dx = l / Math.sqrt(1 + m * m);
            var dy = m * dx;
            t.x = pX + dx;
            t.y = pY + dy;
          } // Return top of tri


        return t;
      } else {
        // Slope is 0
        if (m == 0) {
          t.x = pX + l;
          t.y = pY;
        } // If slope is infinte
        else if (!isFinite(m)) {
            t.x = pX;
            t.y = pY + l;
          } else {
            var _dx = l / Math.sqrt(1 + m * m);

            var _dy = m * _dx;

            t.x = pX - _dx;
            t.y = pY - _dy;
          } // Return top of tri


        return t;
      }
    } // Find the corners of tri given player, tri top, and reciprical angle
    // Use 

  }, {
    key: "findCorner1",
    value: function findCorner1() {
      // length of top of tri
      var l = this.a; // grab top of tri coord

      var q = this.findTriTop(); // grab player and cursor x and y coords

      var p = this.player.pos; // initiate corner points

      var c = new Coord(0, 0); // horizontal rectangle  

      if (p.x == q.x) {
        c.x = q.x + l / 2.0;
        c.y = q.y;
      } // vertical rectangle  
      else if (p.y == q.y) {
          c.y = q.y + l / 2.0;
          c.x = q.x;
        } // slanted rectangle  
        else {
            // calculate slope of the side  
            var m = (p.x - q.x) / (q.y - p.y); // calculate displacements along axes  

            var dx = l / Math.sqrt(1 + m * m) * 0.5;
            var dy = m * dx;
            c.x = q.x + dx;
            c.y = q.y + dy;
          }

      return c;
    }
  }, {
    key: "findCorner2",
    value: function findCorner2() {
      // length of top of tri
      var l = this.a; // grab top of tri coord

      var q = this.findTriTop(); // grab player and cursor x and y coords

      var p = this.player.pos; // initiate corner points

      var b = new Coord(0, 0); // horizontal rectangle  

      if (p.x == q.x) {
        b.x = q.x - l / 2.0;
        b.y = q.y;
      } // vertical rectangle  
      else if (p.y == q.y) {
          b.y = q.y - l / 2.0;
          b.x = q.x;
        } // slanted rectangle  
        else {
            // calculate slope of the side (reciprecol of cursor slope)
            var m = (p.x - q.x) / (q.y - p.y); // calculate displacements along axes  

            var dx = l / Math.sqrt(1 + m * m) * 0.5;
            var dy = m * dx;
            b.x = q.x - dx;
            b.y = q.y - dy;
          }

      return b;
    }
  }, {
    key: "area",
    value: function area(x1, y1, x2, y2, x3, y3) {
      return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
    }
  }, {
    key: "revealed",
    value: function revealed(x, y) {
      var x1 = Math.abs(this.player.pos.x);
      var y1 = Math.abs(this.player.pos.y);
      var x2 = Math.abs(this.findCorner1().x);
      var y2 = Math.abs(this.findCorner1().y);
      var x3 = Math.abs(this.findCorner2().x);
      var y3 = Math.abs(this.findCorner2().y);
      /* Calculate area of triangle ABC */

      var A = this.area(x1, y1, x2, y2, x3, y3);
      /* Calculate area of triangle PBC */

      var A1 = this.area(x, y, x2, y2, x3, y3);
      /* Calculate area of triangle PAC */

      var A2 = this.area(x1, y1, x, y, x3, y3);
      /* Calculate area of triangle PAB */

      var A3 = this.area(x1, y1, x2, y2, x, y);
      var sumAreas = A1 + A2 + A3;
      /* Check if sum of A1, A2 and A3 is same as A */

      return A - 1 <= sumAreas && sumAreas <= A + 1;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var x_midpoint = this.player.pos.x;
      var y_midpoint = this.player.pos.y;
      var diffX = this.cursPos.x - x_midpoint;
      var diffY = this.cursPos.y - y_midpoint; // shift starting point to middle of canvas

      ctx.setTransform(1, 0, 0, 1, x_midpoint, y_midpoint); // rotate based on the mouse position

      ctx.rotate(Math.atan2(diffY, diffX)); // the triangle

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(this.a, this.b);
      ctx.lineTo(this.a, -this.b);
      ctx.closePath(); // Add gradient and color stops

      var gradient = ctx.createLinearGradient(100, 0, 370, 0);
      gradient.addColorStop(0, "white");
      gradient.addColorStop(1, 'transparent');
      ctx.globalAlpha = 0.7; // if (!this.active) {
      //   ctx.fillStyle = "black"
      // } else {

      ctx.fillStyle = gradient; // }

      ctx.fill(); // reset transform

      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
  }]);

  return Light;
}();

module.exports = Light;

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  LEVELS: {
    1: {
      walls: [[0, 0, 0.01, 1], [0, 0.35, 0.2, 0.4], [0.2, 0.15, 0.25, 0.4], [0.2, 0.15, 0.75, 0.2], [0.4, 0.45, 0.45, 0.6], [0, 0.6, 0.6, 0.65], [0.7, 0.2, 0.75, 1], [0.5, 0.65, 0.55, 1]],
      playerStart: {
        x: .05,
        y: .50
      },
      level_header: "But wait... I'm still trapped!",
      level_header_2: "I need to keep searching for a way out of this darkness."
    },
    2: {
      walls: [[0.35, 0, 0.5, 0.05], [0.35, 0, 0.4, 0.3], [0.5, 0, 0.55, 0.3], [0, .25, .35, .3], [.25, .3, .3, .35], [.02, .3, .05, .95], [.05, .9, .6, .95], [.15, .4, .2, .75], [.2, .5, .3, .55], [.25, .55, .3, .6], [.35, .65, .4, .7], [.35, .4, .5, .5], [.4, .67, .6, .7], [.55, .25, .6, .3], [.6, .15, .8, .2], [.6, .2, .65, .4], [.5, .4, .65, .45], [.8, .15, .85, .4], [.7, .4, 1, .45], [.78, .45, .8, .5], [.63, .55, .95, .57], [.99, .45, 1, .5], [.6, .8, .61, 1], [.78, .65, .82, .9], [.61, .99, 1, 1], [.9, .57, .91, 1], [.91, .65, 1, .73]],
      playerStart: {
        x: .45,
        y: .07
      },
      level_header: "OK, I think I know how to find my way now...",
      level_header_2: "Wait, what was that over there? Did that shadow move...?"
    },
    3: {
      walls: [[0, 0, 0.01, 1], [0, .85, .8, .9], [0, 0.6, 0.6, 0.65], [.8, 0.33, .85, .9], [.6, .2, .63, .65], [.6, .2, 1, .23], [.73, .3, .75, .85], [.75, .3, 1, .33]],
      playerStart: {
        x: .03,
        y: .75
      },
      ghosts: [{
        x: .53,
        y: .57,
        active: true
      }, {
        x: .06,
        y: .97,
        active: true
      }, {
        x: .76,
        y: .8,
        active: true
      }, {
        x: .7,
        y: .15,
        active: true
      }],
      level_header: "Whew, glad they couldn't reach me. Maybe I'm getting close to escaping.",
      level_header_2: "I just hope there's no more of those shadows..."
    },
    4: {
      walls: [[0, .3, 0.75, .35], [0, 0.6, 0.6, 0.65], [0.55, .6, 0.6, 1], [0.7, .35, 0.75, 1]],
      playerStart: {
        x: .05,
        y: .49
      },
      ghosts: [{
        x: .35,
        y: .55
      }, {
        x: .67,
        y: .38
      }],
      level_header: "That was close! I need to be more careful.",
      level_header_2: "Argh! It just got really cold in here..."
    },
    5: {
      walls: [[0, 0, .18, 0.1], [.25, 0, 1, 0.1], [.1, .18, .14, .22], [.2, .18, .45, .22], [.1, 0, .14, .4], [.2, .22, .24, .4], [.41, .22, .45, .4], [.55, .18, .9, .22], [.55, .22, .59, .4], [.86, .22, .9, .4], [.1, .78, .45, .82], [.1, .6, .14, .8], [.41, .6, .45, .8], [.55, .78, .9, .82], [.55, .6, .59, .8], [.86, .6, .9, .8], [0, 0, 0.04, 1], [0, .96, 1, 1], [.96, 0, 1, 1], [.96, .55, 1, 1]],
      playerStart: {
        x: .05,
        y: .5
      },
      ghosts: [{
        x: .05,
        y: .25
      }, {
        x: .85,
        y: .15
      }, {
        x: .15,
        y: .22
      }, {
        x: .2,
        y: .04
      }, {
        x: .5,
        y: .9
      }, {
        x: .9,
        y: .9
      }],
      level_header: "Will I ever escape this darkness?!",
      level_header_2: "But what's this... A small ray of light..? Could it be the end...?"
    },
    6: {
      walls: [[0.35, 0, 0.4, 0.3], [0.5, 0, 0.55, 0.3], [0, .25, .35, .3], [.25, .3, .3, .35], [.02, .3, .05, 1], [.15, .4, .2, .55], [.2, .5, .3, .55], [.25, .55, .3, .6], [.25, .6, .4, .65], [.35, .65, .4, .7], [.35, .4, .5, .5], [.5, .68, .63, .7], [.55, .25, .6, .3], [.6, .15, .8, .2], [.6, .2, .65, .4], [.5, .4, .65, .45], [.8, .15, .85, .4], [.7, .4, 1, .45], [.78, .45, .8, .5], [.63, .55, .95, .57], [.7, .72, .74, .74], [.99, .45, 1, 1], [.6, .7, .61, 1], [.8, .65, .81, .9], [0, .99, 1, 1], [.9, .65, .91, 1], [.15, .65, .16, .85]],
      playerStart: {
        x: .45,
        y: .95
      },
      ghosts: [{
        x: .21,
        y: .45
      }, {
        x: .18,
        y: .72
      }, {
        x: .17,
        y: .75
      }, {
        x: .16,
        y: .73
      }, {
        x: .17,
        y: .74
      }, {
        x: .18,
        y: .75
      }, {
        x: .94,
        y: .93
      }, {
        x: .96,
        y: .94
      }, {
        x: .75,
        y: .24
      }, {
        x: .75,
        y: .26
      }, {
        x: .76,
        y: .25
      }, {
        x: .72,
        y: .75
      }]
    }
  }
};
window.wallColor = {
  color: "#000"
};

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coord = __webpack_require__(/*! ./coord */ "./src/coord.js");

var Player = /*#__PURE__*/function () {
  function Player(startX, startY, game) {
    _classCallCheck(this, Player);

    this.pos = new Coord(startX, startY);
    this.game = game;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, 5, 0, 2 * Math.PI);
      ctx.fill(); // ctx.fillRect(this.pos.x, this.pos.y, 7, 7);
    }
  }, {
    key: "move",
    value: function move(dir) {
      var newX = this.pos.x + Player.MOVES[dir][0] * Player.SPEED;
      var newY = this.pos.y + Player.MOVES[dir][1] * Player.SPEED;
      var newCoord = new Coord(newX, newY);
      var tryCoordTopLeft = new Coord(newX - 3, newY - 3);
      var tryCoordBottomLeft = new Coord(newX - 3, newY + 3);
      var tryCoordTopRight = new Coord(newX + 3, newY - 3);
      var tryCoordBottomRight = new Coord(newX + 3, newY + 3);

      if (this.game.collidingWithWall(tryCoordTopLeft) || this.game.collidingWithWall(tryCoordBottomLeft) || this.game.collidingWithWall(tryCoordTopRight) || this.game.collidingWithWall(tryCoordBottomRight)) {
        return;
      }

      this.pos = newCoord;
    }
  }, {
    key: "escaped",
    value: function escaped() {
      return this.game.escapedMap(this.pos);
    }
  }]);

  return Player;
}();

;
var sqrt2d2 = Math.SQRT2 / 2;
Player.SPEED = 1.5;
Player.MOVES = {
  "U": [0, -1],
  "D": [0, 1],
  "UL": [-sqrt2d2, -sqrt2d2],
  "DL": [-sqrt2d2, sqrt2d2],
  "L": [-1, 0],
  "R": [1, 0],
  "UR": [sqrt2d2, -sqrt2d2],
  "DR": [sqrt2d2, sqrt2d2]
};
module.exports = Player;

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

var Util = {
  inherits: function inherits(Child, Parent) {
    function Surrogate() {}

    ;
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
  },
  // Normalize the length of the vector to 1, maintaining direction.
  normalize: function normalize(vec) {
    var norm = Util.magnitude(vec);
    return Util.scale(vec, 1 / norm);
  },
  // Find distance between two points.
  magnitude: function magnitude(vec) {
    return Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2));
  },
  // Return a randomly oriented vector with the given length.
  randomVec: function randomVec(length) {
    var deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale: function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};
module.exports = Util;

/***/ }),

/***/ "./src/wall.js":
/*!*********************!*\
  !*** ./src/wall.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coord = __webpack_require__(/*! ./coord */ "./src/coord.js");

var Wall = /*#__PURE__*/function () {
  function Wall(topX, topY, bottomX, bottomY) {
    _classCallCheck(this, Wall);

    this.topLeft = new Coord(topX, topY);
    this.bottomRight = new Coord(bottomX, bottomY);
    this.width = bottomX - topX;
    this.height = bottomY - topY;
  }

  _createClass(Wall, [{
    key: "draw",
    value: function draw(ctx) {
      window.fillStyle = function () {
        return window.wallColor;
      };

      ctx.fillStyle = window.fillStyle().color;
      ctx.fillRect(this.topLeft.x, this.topLeft.y, this.width, this.height);
    }
  }]);

  return Wall;
}();

module.exports = Wall;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map