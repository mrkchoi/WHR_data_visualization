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

/***/ "./src/chart.js":
/*!**********************!*\
  !*** ./src/chart.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Chart =
/*#__PURE__*/
function () {
  function Chart(selector, options) {
    _classCallCheck(this, Chart);

    this.setChart(selector, options);
    this.setLabels();
  }

  _createClass(Chart, [{
    key: "setChart",
    value: function setChart(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        topOffset: 0,
        leftOffset: 0
      };
      var svg = d3.select(selector).attr("height", _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] + _constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] * 2).attr("width", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] + _constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] * 2);
      this.chart = svg.append("g").attr("transform", "translate(".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] + options.leftOffset, ", ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] / 2 + options.topOffset, ")"));
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.data = data;
    }
  }, {
    key: "redraw",
    value: function redraw(selector) {
      var width = window.innerWidth;
      console.log("new width: ".concat(width));
      var height = window.innerHeight;
      console.log("new height: ".concat(height));
      d3.select(selector).attr('width', width + _constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] * 2).attr('height', height + _constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] * 2);
    }
  }, {
    key: "xAxis",
    value: function xAxis() {
      var ticks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var tickFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      this.xScale = d3.scaleLinear().range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]]).domain([0, 1]);
      var xAxisCall = d3.axisBottom(this.xScale).ticks(ticks).tickFormat(d3.format(".0%"));
      this.chart.append("g").attr("transform", "translate(0, ".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"], ")")).call(xAxisCall);
    }
  }, {
    key: "yAxis",
    value: function yAxis(domain, yScale) {
      var ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      var tickFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      if (yScale === "scaleBand") {
        this.yScale = d3[yScale]().domain(domain).range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]]).padding(0.8);
      } else {
        this.yScale = d3[yScale]().domain(domain).range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]]);
      }

      this.chart.append("g").call(d3.axisLeft(this.yScale).ticks(ticks).tickFormat(tickFormat()));
    }
  }, {
    key: "setLabels",
    value: function setLabels() {
      // Labels
      var xLabel = this.chart.append("g").append("text").attr("y", _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] + 50).attr("x", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2).attr("font-size", "20px").attr("text-anchor", "middle").text("GDP Per Capita ($)");
      var yLabel = this.chart.append("g").append("text").attr("transform", "rotate(-90)").attr("y", -65).attr("x", -300).attr("font-size", "20px").attr("text-anchor", "middle").text("Happiness Index (%)");
    }
  }]);

  return Chart;
}();

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: ANIMATION_DURATION, ANIMATION_DELAY, ANIMATION_EASING, WIDTH, HEIGHT, MARGINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DURATION", function() { return ANIMATION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DELAY", function() { return ANIMATION_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_EASING", function() { return ANIMATION_EASING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDTH", function() { return WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARGINS", function() { return MARGINS; });
var ANIMATION_DURATION = 1000;
var ANIMATION_DELAY = 0;
var ANIMATION_EASING = d3.easePoly; // export const ANIMATION_EASING = d3.easeElastic;

var WIDTH = 1000;
var HEIGHT = 600;
var MARGINS = 100;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _world_graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world_graph */ "./src/world_graph.js");

var worldGraph;
document.addEventListener("DOMContentLoaded", function () {
  worldGraph = new _world_graph__WEBPACK_IMPORTED_MODULE_0__["default"]("svg.graph");
  var btnGroup = document.querySelector(".btn-group");
  btnGroup.addEventListener("mousedown", function (e) {
    e.preventDefault();
    var currentBtn = e.target;
    var currentBtnClass = currentBtn.classList[0].split("-")[1]; // console.log(currentBtnClass);

    if (currentBtnClass !== 'group') {
      worldGraph.updateData(currentBtnClass);
    }
  });
});

window.onresize = function () {
  worldGraph.redraw("svg.graph"); // console.log('resized!');
};

/***/ }),

/***/ "./src/world_graph.js":
/*!****************************!*\
  !*** ./src/world_graph.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart */ "./src/chart.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var WorldGraph =
/*#__PURE__*/
function (_Chart) {
  _inherits(WorldGraph, _Chart);

  function WorldGraph(selector) {
    var _this;

    _classCallCheck(this, WorldGraph);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WorldGraph).call(this, selector));
    _this.svg = d3.select(selector);

    _this.xAxis();

    _this.yAxis([1, 0], "scaleLinear", 20, function () {
      return d3.format(".0%");
    });

    _this.getData("graphGdp");

    return _this;
  }

  _createClass(WorldGraph, [{
    key: "getData",
    value: function getData(metric) {
      var that = this;
      d3.json("dist/data/countries.json").then(function (data) {
        that.setData(data);
        that.circles(metric);
      });
    }
  }, {
    key: "circles",
    value: function circles(metric) {
      var _this2 = this;

      ////////////////////////
      // tooltip
      ////////////////////////
      var tooltip = d3.select("body").append("div").style("visibility", "hidden").attr("class", "tooltip").style("background-color", "black").style("border-radius", "5px").style("padding", "10px").style("color", "white").style("z-index", "999999999").style("position", "absolute").style("display", "block");

      var showTooltip = function showTooltip(d) {
        tooltip.transition().duration(200);
        tooltip.style("visibility", "visible").html("\n  <strong>Country:</strong> ".concat(d.country, " (").concat(d.continent, ")<br/>\n  <strong>Happiness Ranking:</strong> ").concat(d.ranking, "\n")).style("top", d3.event.clientY - 100 + "px").style("left", d3.event.clientX - 160 + "px");
      };

      var moveTooltip = function moveTooltip(d) {
        showTooltip(d);
        console.log("move tooltip");
        tooltip.style("top", d3.event.clientY - 100 + "px").style("left", d3.event.clientX - 160 + "px");
      };

      var hideTooltip = function hideTooltip(d) {
        console.log("hide tooltip");
        tooltip.transition().duration(200).style("visibility", "hidden");
      }; ////////////////////////
      // chart rendering
      ////////////////////////


      this.chart.selectAll("circle").data(Object.values(this.data)).enter().append("circle").attr("class", function (d) {
        return "country ".concat(d["class"], " continent-").concat(d.continent.split(" ").join("-"), " country-bubble");
      }).attr("fill", function (d) {
        if (d.continent === "Africa") {
          return "#7cbd1e";
        } else if (d.continent === "Asia") {
          return "#ff1f5a";
        } else if (d.continent === "North America") {
          return "#303481";
        } else if (d.continent === "South America") {
          return "#ff5b44";
        } else if (d.continent === "Europe") {
          return "#2fc5cc";
        } else {
          return "red";
        }
      }).attr("opacity", ".7").attr("stroke", "#CDCDCD").attr("stroke-width", "2px").attr("cx", function (d) {
        return _this2.xScale(d[metric] / 156) + 25;
      }).on("mouseover", showTooltip).on("mousemove", moveTooltip).on("mouseleave", hideTooltip).transition().delay(function (d, i) {
        return i * _constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DELAY"];
      }).duration(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DURATION"]).ease(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_EASING"]).attr("r", function (d) {
        if (d.population > 800000000) {
          return d.population / 25000000;
        } else if (d.population > 50000000) {
          return d.population / 10000000;
        } else if (d.population > 1000000) {
          return d.population / 1500000;
        } else {
          return d.population / 100000;
        }
      }).attr("cy", function (d) {
        return _this2.yScale(d.graphRanking / 156);
      }); ////////////////////////
      // legend
      ////////////////////////

      var continents = {
        AFRICA: {
          continent: "Africa"
        },
        ASIA: {
          continent: "Asia"
        },
        NORTH_AMERICA: {
          continent: "North America"
        },
        SOUTH_AMERICA: {
          continent: "South America"
        },
        EUROPE: {
          continent: "Europe"
        }
      };

      var continentFocusOn = function continentFocusOn(continentName) {
        _this2.chart.selectAll("circle:not(.continent-".concat(continentName.split(" ").join("-"), ")")).attr("opacity", "0.05");
      };

      var continentFocusOff = function continentFocusOff(continentName) {
        _this2.chart.selectAll("circle:not(.continent-".concat(continentName.split(" ").join("-"), ")")).attr("opacity", "0.7");
      };

      var legend = this.chart.selectAll(".legend").data(Object.values(continents)).enter().append("g").attr("class", "legend").attr("transform", "translate(" + 870 + "," + 480 + ")");
      legend.append("rect").attr("x", 0).attr("y", function (d, i) {
        return 20 * i;
      }).attr("width", 15).attr("height", 15).style("fill", function (d) {
        if (d.continent === "Africa") {
          return "#7cbd1e";
        } else if (d.continent === "Asia") {
          return "#ff1f5a";
        } else if (d.continent === "North America") {
          return "#303481";
        } else if (d.continent === "South America") {
          return "#ff5b44";
        } else if (d.continent === "Europe") {
          return "#2fc5cc";
        } else {
          return "red";
        }
      }).on("mouseover", function (d) {
        return continentFocusOn(d.continent);
      }).on("mouseleave", function (d) {
        return continentFocusOff(d.continent);
      });
      legend.append("text").attr("x", 25).attr("text-anchor", "start").attr("dy", "1em").attr("class", function (d) {
        return "legend-".concat(d.continent.split(" ").join("-"));
      }).attr("y", function (d, i) {
        return 20 * i;
      }).text(function (d) {
        return d.continent;
      }).attr("font-size", "12px").on("mouseover", function (d) {
        return continentFocusOn(d.continent);
      }).on("mouseleave", function (d) {
        return continentFocusOff(d.continent);
      });
      legend.append("text").attr("x", 31).attr("dy", "-.2em").attr("y", -10).text("Continent").attr("font-size", "17px").style("text-align", "left");
    }
  }, {
    key: "updateData",
    value: function updateData(dataType) {
      var _this3 = this;

      d3.json("dist/data/countries.json").then(function (data) {
        _this3.chart.selectAll(".country-bubble").transition().duration(500).ease(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_EASING"]).attr("cx", function (d) {
          return _this3.xScale(d[dataType] / 156) + 25;
        }); // .delay((d, i) => i * ANIMATION_DELAY)

      });
    }
  }]);

  return WorldGraph;
}(_chart__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (WorldGraph);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93b3JsZF9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDaGFydCIsInNlbGVjdG9yIiwib3B0aW9ucyIsInNldENoYXJ0Iiwic2V0TGFiZWxzIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIkhFSUdIVCIsIk1BUkdJTlMiLCJXSURUSCIsImNoYXJ0IiwiYXBwZW5kIiwiZGF0YSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInRpY2tzIiwidGlja0Zvcm1hdCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4QXhpc0NhbGwiLCJheGlzQm90dG9tIiwiZm9ybWF0IiwiY2FsbCIsInlTY2FsZSIsInBhZGRpbmciLCJheGlzTGVmdCIsInhMYWJlbCIsInRleHQiLCJ5TGFiZWwiLCJBTklNQVRJT05fRFVSQVRJT04iLCJBTklNQVRJT05fREVMQVkiLCJBTklNQVRJT05fRUFTSU5HIiwiZWFzZVBvbHkiLCJ3b3JsZEdyYXBoIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiV29ybGRHcmFwaCIsImJ0bkdyb3VwIiwicXVlcnlTZWxlY3RvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdG4iLCJ0YXJnZXQiLCJjdXJyZW50QnRuQ2xhc3MiLCJjbGFzc0xpc3QiLCJzcGxpdCIsInVwZGF0ZURhdGEiLCJvbnJlc2l6ZSIsInJlZHJhdyIsInhBeGlzIiwieUF4aXMiLCJnZXREYXRhIiwibWV0cmljIiwidGhhdCIsImpzb24iLCJ0aGVuIiwic2V0RGF0YSIsImNpcmNsZXMiLCJ0b29sdGlwIiwic3R5bGUiLCJzaG93VG9vbHRpcCIsImQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJodG1sIiwiY291bnRyeSIsImNvbnRpbmVudCIsInJhbmtpbmciLCJldmVudCIsImNsaWVudFkiLCJjbGllbnRYIiwibW92ZVRvb2x0aXAiLCJoaWRlVG9vbHRpcCIsInNlbGVjdEFsbCIsIk9iamVjdCIsInZhbHVlcyIsImVudGVyIiwiam9pbiIsIm9uIiwiZGVsYXkiLCJpIiwiZWFzZSIsInBvcHVsYXRpb24iLCJncmFwaFJhbmtpbmciLCJjb250aW5lbnRzIiwiQUZSSUNBIiwiQVNJQSIsIk5PUlRIX0FNRVJJQ0EiLCJTT1VUSF9BTUVSSUNBIiwiRVVST1BFIiwiY29udGluZW50Rm9jdXNPbiIsImNvbnRpbmVudE5hbWUiLCJjb250aW5lbnRGb2N1c09mZiIsImxlZ2VuZCIsImRhdGFUeXBlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7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QUM5QyxNQUFMLENBQVk4QyxDQUFDLENBQUNpQyxRQUFELENBQUQsR0FBYyxHQUExQixJQUFpQyxFQUF4QztBQUNELFNBUEgsRUFEK0MsQ0FTN0M7O0FBQ0gsT0FWRDtBQVdEOzs7O0VBNU5zQnpHLDhDOztBQStOVitDLHlFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtcbiAgSEVJR0hULFxuICBNQVJHSU5TLFxuICBXSURUSCxcbiAgQU5JTUFUSU9OX0RVUkFUSU9OLFxuICBBTklNQVRJT05fREVMQVksXG4gIEFOSU1BVElPTl9FQVNJTkdcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldENoYXJ0KHNlbGVjdG9yLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldExhYmVscygpO1xuICB9XG5cbiAgc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMgPSB7IHRvcE9mZnNldDogMCwgbGVmdE9mZnNldDogMCB9KSB7XG4gICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgIC5zZWxlY3Qoc2VsZWN0b3IpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBIRUlHSFQgKyBNQVJHSU5TICogMilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggKyBNQVJHSU5TICogMik7XG4gICAgdGhpcy5jaGFydCA9IHN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFxuICAgICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgICBgdHJhbnNsYXRlKCR7TUFSR0lOUyArIG9wdGlvbnMubGVmdE9mZnNldH0sICR7TUFSR0lOUyAvIDIgK1xuICAgICAgICAgIG9wdGlvbnMudG9wT2Zmc2V0fSlgXG4gICAgICApO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIHJlZHJhdyhzZWxlY3Rvcikge1xuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnNvbGUubG9nKGBuZXcgd2lkdGg6ICR7d2lkdGh9YClcbiAgICBsZXQgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnNvbGUubG9nKGBuZXcgaGVpZ2h0OiAke2hlaWdodH1gKVxuICAgIGQzLnNlbGVjdChzZWxlY3RvcilcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgTUFSR0lOUyAqIDIpXG4gICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0ICsgTUFSR0lOUyAqIDIpO1xuICB9XG5cbiAgeEF4aXModGlja3MgPSAyMCwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgdGhpcy54U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgLmRvbWFpbihbMCwgMV0pO1xuICAgIGxldCB4QXhpc0NhbGwgPSBkM1xuICAgICAgLmF4aXNCb3R0b20odGhpcy54U2NhbGUpXG4gICAgICAudGlja3ModGlja3MpXG4gICAgICAudGlja0Zvcm1hdChkMy5mb3JtYXQoXCIuMCVcIikpO1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7SEVJR0hUfSlgKVxuICAgICAgLmNhbGwoeEF4aXNDYWxsKTtcbiAgfVxuXG4gIHlBeGlzKGRvbWFpbiwgeVNjYWxlLCB0aWNrcyA9IDUsIHRpY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIGlmICh5U2NhbGUgPT09IFwic2NhbGVCYW5kXCIpIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIEhFSUdIVF0pXG4gICAgICAgIC5wYWRkaW5nKDAuOCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIEhFSUdIVF0pO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnQuYXBwZW5kKFwiZ1wiKS5jYWxsKFxuICAgICAgZDNcbiAgICAgICAgLmF4aXNMZWZ0KHRoaXMueVNjYWxlKVxuICAgICAgICAudGlja3ModGlja3MpXG4gICAgICAgIC50aWNrRm9ybWF0KHRpY2tGb3JtYXQoKSlcbiAgICApO1xuICB9XG5cbiAgc2V0TGFiZWxzKCkge1xuICAgIC8vIExhYmVsc1xuICAgIHZhciB4TGFiZWwgPSB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieVwiLCBIRUlHSFQgKyA1MClcbiAgICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIwcHhcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC50ZXh0KFwiR0RQIFBlciBDYXBpdGEgKCQpXCIpO1xuICAgIHZhciB5TGFiZWwgPSB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgIC5hdHRyKFwieVwiLCAtNjUpXG4gICAgICAuYXR0cihcInhcIiwgLTMwMClcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjBweFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJIYXBwaW5lc3MgSW5kZXggKCUpXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIiwiZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDEwMDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0RFTEFZID0gMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fRUFTSU5HID0gZDMuZWFzZVBvbHk7XG4vLyBleHBvcnQgY29uc3QgQU5JTUFUSU9OX0VBU0lORyA9IGQzLmVhc2VFbGFzdGljO1xuXG5leHBvcnQgY29uc3QgV0lEVEggPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IDYwMDtcbmV4cG9ydCBjb25zdCBNQVJHSU5TID0gMTAwO1xuIiwiaW1wb3J0IFdvcmxkR3JhcGggZnJvbSBcIi4vd29ybGRfZ3JhcGhcIjtcblxuXG5sZXQgd29ybGRHcmFwaDtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgd29ybGRHcmFwaCA9IG5ldyBXb3JsZEdyYXBoKFwic3ZnLmdyYXBoXCIpO1xuXG4gIGxldCBidG5Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWdyb3VwXCIpO1xuICBidG5Hcm91cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY3VycmVudEJ0biA9IGUudGFyZ2V0O1xuICAgIGxldCBjdXJyZW50QnRuQ2xhc3MgPSBjdXJyZW50QnRuLmNsYXNzTGlzdFswXS5zcGxpdChcIi1cIilbMV07XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudEJ0bkNsYXNzKTtcbiAgICBpZiAoY3VycmVudEJ0bkNsYXNzICE9PSAnZ3JvdXAnKSB7XG4gICAgICB3b3JsZEdyYXBoLnVwZGF0ZURhdGEoY3VycmVudEJ0bkNsYXNzKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgd29ybGRHcmFwaC5yZWRyYXcoXCJzdmcuZ3JhcGhcIik7XG4gIC8vIGNvbnNvbGUubG9nKCdyZXNpemVkIScpO1xufTsiLCJpbXBvcnQge1xuICBXSURUSCxcbiAgSEVJR0hULFxuICBBTklNQVRJT05fREVMQVksXG4gIEFOSU1BVElPTl9FQVNJTkcsXG4gIEFOSU1BVElPTl9EVVJBVElPTlxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IENoYXJ0IGZyb20gXCIuL2NoYXJ0XCI7XG5cbmNsYXNzIFdvcmxkR3JhcGggZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHNlbGVjdG9yKTtcbiAgICB0aGlzLnhBeGlzKCk7XG4gICAgdGhpcy55QXhpcyhbMSwgMF0sIFwic2NhbGVMaW5lYXJcIiwgMjAsICgpID0+IGQzLmZvcm1hdChcIi4wJVwiKSk7XG4gICAgdGhpcy5nZXREYXRhKFwiZ3JhcGhHZHBcIik7XG4gIH1cblxuICBnZXREYXRhKG1ldHJpYykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBkMy5qc29uKFwiZGlzdC9kYXRhL2NvdW50cmllcy5qc29uXCIpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGF0LnNldERhdGEoZGF0YSk7XG4gICAgICB0aGF0LmNpcmNsZXMobWV0cmljKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNpcmNsZXMobWV0cmljKSB7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gdG9vbHRpcFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGxldCB0b29sdGlwID0gZDNcbiAgICAgIC5zZWxlY3QoXCJib2R5XCIpXG4gICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4gICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjk5OTk5OTk5OVwiKVxuICAgICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG4gICAgbGV0IHNob3dUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKCkuZHVyYXRpb24oMjAwKTtcbiAgICAgIHRvb2x0aXBcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIilcbiAgICAgICAgLmh0bWwoXG4gICAgICAgICAgYFxuICA8c3Ryb25nPkNvdW50cnk6PC9zdHJvbmc+ICR7ZC5jb3VudHJ5fSAoJHtkLmNvbnRpbmVudH0pPGJyLz5cbiAgPHN0cm9uZz5IYXBwaW5lc3MgUmFua2luZzo8L3N0cm9uZz4gJHtkLnJhbmtpbmd9XG5gXG4gICAgICAgIClcbiAgICAgICAgLnN0eWxlKFwidG9wXCIsIGQzLmV2ZW50LmNsaWVudFkgLSAxMDAgKyBcInB4XCIpXG4gICAgICAgIC5zdHlsZShcImxlZnRcIiwgZDMuZXZlbnQuY2xpZW50WCAtIDE2MCArIFwicHhcIik7XG4gICAgfTtcblxuICAgIGxldCBtb3ZlVG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHNob3dUb29sdGlwKGQpO1xuICAgICAgY29uc29sZS5sb2coXCJtb3ZlIHRvb2x0aXBcIik7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC5zdHlsZShcInRvcFwiLCBkMy5ldmVudC5jbGllbnRZIC0gMTAwICsgXCJweFwiKVxuICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIGQzLmV2ZW50LmNsaWVudFggLSAxNjAgKyBcInB4XCIpO1xuICAgIH07XG5cbiAgICBsZXQgaGlkZVRvb2x0aXAgPSBmdW5jdGlvbihkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImhpZGUgdG9vbHRpcFwiKTtcbiAgICAgIHRvb2x0aXBcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMjAwKVxuICAgICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpO1xuICAgIH07XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gY2hhcnQgcmVuZGVyaW5nXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgIC5hdHRyKFxuICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgIGQgPT5cbiAgICAgICAgICBgY291bnRyeSAke2QuY2xhc3N9IGNvbnRpbmVudC0ke2QuY29udGluZW50XG4gICAgICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgICAuam9pbihcIi1cIil9IGNvdW50cnktYnViYmxlYFxuICAgICAgKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgICBpZiAoZC5jb250aW5lbnQgPT09IFwiQWZyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjN2NiZDFlXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiQXNpYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmMWY1YVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIk5vcnRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiMzMDM0ODFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJTb3V0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmY1YjQ0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiRXVyb3BlXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMmZjNWNjXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIuN1wiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjQ0RDRENEXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjJweFwiKVxuICAgICAgLmF0dHIoXCJjeFwiLCBkID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMueFNjYWxlKGRbbWV0cmljXSAvIDE1NikgKyAyNTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgc2hvd1Rvb2x0aXApXG4gICAgICAub24oXCJtb3VzZW1vdmVcIiwgbW92ZVRvb2x0aXApXG4gICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGhpZGVUb29sdGlwKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmRlbGF5KChkLCBpKSA9PiBpICogQU5JTUFUSU9OX0RFTEFZKVxuICAgICAgLmR1cmF0aW9uKEFOSU1BVElPTl9EVVJBVElPTilcbiAgICAgIC5lYXNlKEFOSU1BVElPTl9FQVNJTkcpXG4gICAgICAuYXR0cihcInJcIiwgZCA9PiB7XG4gICAgICAgIGlmIChkLnBvcHVsYXRpb24gPiA4MDAwMDAwMDApIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMjUwMDAwMDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5wb3B1bGF0aW9uID4gNTAwMDAwMDApIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTAwMDAwMDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5wb3B1bGF0aW9uID4gMTAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAxNTAwMDAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAxMDAwMDA7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cihcImN5XCIsIGQgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy55U2NhbGUoZC5ncmFwaFJhbmtpbmcgLyAxNTYpO1xuICAgICAgfSk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBsZWdlbmRcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBsZXQgY29udGluZW50cyA9IHtcbiAgICAgIEFGUklDQTogeyBjb250aW5lbnQ6IFwiQWZyaWNhXCIgfSxcbiAgICAgIEFTSUE6IHsgY29udGluZW50OiBcIkFzaWFcIiB9LFxuICAgICAgTk9SVEhfQU1FUklDQTogeyBjb250aW5lbnQ6IFwiTm9ydGggQW1lcmljYVwiIH0sXG4gICAgICBTT1VUSF9BTUVSSUNBOiB7IGNvbnRpbmVudDogXCJTb3V0aCBBbWVyaWNhXCIgfSxcbiAgICAgIEVVUk9QRTogeyBjb250aW5lbnQ6IFwiRXVyb3BlXCIgfVxuICAgIH07XG5cbiAgICBsZXQgY29udGluZW50Rm9jdXNPbiA9IGNvbnRpbmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy5jaGFydFxuICAgICAgICAuc2VsZWN0QWxsKFxuICAgICAgICAgIGBjaXJjbGU6bm90KC5jb250aW5lbnQtJHtjb250aW5lbnROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX0pYFxuICAgICAgICApXG4gICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBcIjAuMDVcIik7XG4gICAgfTtcblxuICAgIGxldCBjb250aW5lbnRGb2N1c09mZiA9IGNvbnRpbmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy5jaGFydFxuICAgICAgICAuc2VsZWN0QWxsKFxuICAgICAgICAgIGBjaXJjbGU6bm90KC5jb250aW5lbnQtJHtjb250aW5lbnROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX0pYFxuICAgICAgICApXG4gICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBcIjAuN1wiKTtcbiAgICB9O1xuXG4gICAgbGV0IGxlZ2VuZCA9IHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoXCIubGVnZW5kXCIpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKGNvbnRpbmVudHMpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGVnZW5kXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIDg3MCArIFwiLFwiICsgNDgwICsgXCIpXCIpO1xuXG4gICAgbGVnZW5kXG4gICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICByZXR1cm4gMjAgKiBpO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgMTUpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAxNSlcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICBpZiAoZC5jb250aW5lbnQgPT09IFwiQWZyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjN2NiZDFlXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiQXNpYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmMWY1YVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIk5vcnRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiMzMDM0ODFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJTb3V0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmY1YjQ0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiRXVyb3BlXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMmZjNWNjXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiBjb250aW5lbnRGb2N1c09uKGQuY29udGluZW50KSlcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZCA9PiBjb250aW5lbnRGb2N1c09mZihkLmNvbnRpbmVudCkpO1xuXG4gICAgbGVnZW5kXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIDI1KVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpXG4gICAgICAuYXR0cihcImR5XCIsIFwiMWVtXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGxlZ2VuZC0ke2QuY29udGluZW50LnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX1gKVxuICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIDIwICogaTtcbiAgICAgIH0pXG4gICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLmNvbnRpbmVudDtcbiAgICAgIH0pXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjEycHhcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IGNvbnRpbmVudEZvY3VzT24oZC5jb250aW5lbnQpKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBkID0+IGNvbnRpbmVudEZvY3VzT2ZmKGQuY29udGluZW50KSk7XG5cbiAgICBsZWdlbmRcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInhcIiwgMzEpXG4gICAgICAuYXR0cihcImR5XCIsIFwiLS4yZW1cIilcbiAgICAgIC5hdHRyKFwieVwiLCAtMTApXG4gICAgICAudGV4dChcIkNvbnRpbmVudFwiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxN3B4XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwibGVmdFwiKTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YVR5cGUpIHtcbiAgICBkMy5qc29uKFwiZGlzdC9kYXRhL2NvdW50cmllcy5qc29uXCIpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5zZWxlY3RBbGwoXCIuY291bnRyeS1idWJibGVcIilcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkW2RhdGFUeXBlXSAvIDE1NikgKyAyNTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIC5kZWxheSgoZCwgaSkgPT4gaSAqIEFOSU1BVElPTl9ERUxBWSlcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JsZEdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==