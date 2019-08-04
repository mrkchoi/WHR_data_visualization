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
      // let HEIGHT = window.clientHeight;
      // let WIDTH = window.clientWidth;
      var svg = d3.select(selector).attr("height", _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] + _constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] * 2).attr("width", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] + _constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] * 2); // .attr("height", HEIGHT + MARGINS * 2)
      // .attr("width", WIDTH + MARGINS * 2);
      // .attr("preserveAspectRatio", "xMinYMin meet")
      // .attr("viewBox", "0 0 960 500");

      this.chart = svg.append("g").attr("position", "relative").attr("transform", "translate(".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] + options.leftOffset, ", ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] / 2 + options.topOffset, ")"));
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.data = data;
    } // redraw(selector, options = { topOffset: 0, leftOffset: 0 }) {
    //   const svg = d3
    //     .select(selector)
    //     .attr("height", HEIGHT + MARGINS * 2)
    //     .attr("width", WIDTH + MARGINS * 2);
    //   this.chart = svg
    //     .append("g")
    //     .attr("position", "relative")
    //     .attr(
    //       "transform",
    //       `translate(${MARGINS + options.leftOffset}, ${MARGINS / 2 +
    //         options.topOffset})`
    //     );
    // }

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
      var xLabel = this.chart.append("g").append("text").attr("class", "x-axis-label").attr("y", _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] + 50).attr("x", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2).attr("font-size", "18px").attr("font-weight", "600").attr("text-anchor", "middle").text("GDP Per Capita ($)");
      console.log("height: ".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]));
      var yLabel = this.chart.append("g").attr("class", "yAxisGroup").append("text").attr("transform", "rotate(-90)") // .attr("position", 'relative')
      .attr("x", -(_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] / 2)).attr("y", -50).attr("font-size", "18px").attr("font-weight", "600").attr("text-anchor", "middle").text("Happiness Index (%)");
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

var WIDTH = window.innerWidth - 250;
var HEIGHT = window.innerHeight - 300; // export const WIDTH = 1100;
// export const HEIGHT = 600;

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
  worldGraph = new _world_graph__WEBPACK_IMPORTED_MODULE_0__["default"]("svg.graph"); // worldGraph.redraw("svg.graph");

  var btnGroup = document.querySelector(".btn-group");
  btnGroup.addEventListener("mousedown", function (e) {
    e.preventDefault();
    var currentBtn = e.target;
    var currentBtnClass = currentBtn.classList[0].split("-")[1];

    if (currentBtnClass !== 'group') {
      worldGraph.updateData(currentBtnClass);
    }
  });
}); // window.onresize = () => {
//   worldGraph.redraw("svg.graph");
// };

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

      var legend = this.chart.selectAll(".legend").data(Object.values(continents)).enter().append("g").attr("class", "legend").attr("position", "absolute") // .attr("bottom", 0)
      // .attr("right", 0);
      .attr("transform", "translate(".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] - 130, ", ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] - 120, ")")); // .attr("transform", `translate(970, 480)`);

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
        });

        _this3.updateAxisLabel(dataType);
      });
    }
  }, {
    key: "updateAxisLabel",
    value: function updateAxisLabel(type) {
      // xLabel
      console.log(type);
      var label;

      if (type === 'graphSocialSupport') {
        label = 'Social Support';
      } else if (type === "graphFreedom") {
        label = 'Freedom';
      } else if (type === "graphGenerosity") {
        label = 'Generosity';
      } else if (type === "graphLifeExpectancy") {
        label = 'Life Expectancy';
      } else if (type === 'graphGdp') {
        label = 'GDP Per Capita ($)';
      }

      this.chart.select(".x-axis-label").text("".concat(label));
    }
  }]);

  return WorldGraph;
}(_chart__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (WorldGraph);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93b3JsZF9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDaGFydCIsInNlbGVjdG9yIiwib3B0aW9ucyIsInNldENoYXJ0Iiwic2V0TGFiZWxzIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIkhFSUdIVCIsIk1BUkdJTlMiLCJXSURUSCIsImNoYXJ0IiwiYXBwZW5kIiwiZGF0YSIsInRpY2tzIiwidGlja0Zvcm1hdCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4QXhpc0NhbGwiLCJheGlzQm90dG9tIiwiZm9ybWF0IiwiY2FsbCIsInlTY2FsZSIsInBhZGRpbmciLCJheGlzTGVmdCIsInhMYWJlbCIsInRleHQiLCJjb25zb2xlIiwibG9nIiwieUxhYmVsIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwiQU5JTUFUSU9OX0RFTEFZIiwiQU5JTUFUSU9OX0VBU0lORyIsImVhc2VQb2x5Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid29ybGRHcmFwaCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIldvcmxkR3JhcGgiLCJidG5Hcm91cCIsInF1ZXJ5U2VsZWN0b3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50QnRuIiwidGFyZ2V0IiwiY3VycmVudEJ0bkNsYXNzIiwiY2xhc3NMaXN0Iiwic3BsaXQiLCJ1cGRhdGVEYXRhIiwieEF4aXMiLCJ5QXhpcyIsImdldERhdGEiLCJtZXRyaWMiLCJ0aGF0IiwianNvbiIsInRoZW4iLCJzZXREYXRhIiwiY2lyY2xlcyIsInRvb2x0aXAiLCJzdHlsZSIsInNob3dUb29sdGlwIiwiZCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImh0bWwiLCJjb3VudHJ5IiwiY29udGluZW50IiwicmFua2luZyIsImV2ZW50IiwiY2xpZW50WSIsImNsaWVudFgiLCJtb3ZlVG9vbHRpcCIsImhpZGVUb29sdGlwIiwic2VsZWN0QWxsIiwiT2JqZWN0IiwidmFsdWVzIiwiZW50ZXIiLCJqb2luIiwib24iLCJkZWxheSIsImkiLCJlYXNlIiwicG9wdWxhdGlvbiIsImdyYXBoUmFua2luZyIsImNvbnRpbmVudHMiLCJBRlJJQ0EiLCJBU0lBIiwiTk9SVEhfQU1FUklDQSIsIlNPVVRIX0FNRVJJQ0EiLCJFVVJPUEUiLCJjb250aW5lbnRGb2N1c09uIiwiY29udGluZW50TmFtZSIsImNvbnRpbmVudEZvY3VzT2ZmIiwibGVnZW5kIiwiZGF0YVR5cGUiLCJ1cGRhdGVBeGlzTGFiZWwiLCJ0eXBlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7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S1EsSUFMUixFQUtjLFVBQUEwRCxDQUFDLEVBQUk7QUFDZixpQkFBTyxNQUFJLENBQUNqRCxNQUFMLENBQVlpRCxDQUFDLENBQUNpQyxRQUFELENBQUQsR0FBYyxHQUExQixJQUFpQyxFQUF4QztBQUNELFNBUEg7O0FBU0UsY0FBSSxDQUFDQyxlQUFMLENBQXFCRCxRQUFyQjtBQUNILE9BWEQ7QUFZRDs7O29DQUVlRSxJLEVBQU07QUFDcEI7QUFDQXZFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZc0UsSUFBWjtBQUNBLFVBQUlDLEtBQUo7O0FBQ0EsVUFBSUQsSUFBSSxLQUFLLG9CQUFiLEVBQW1DO0FBQ2pDQyxhQUFLLEdBQUcsZ0JBQVI7QUFDRCxPQUZELE1BRU8sSUFBSUQsSUFBSSxLQUFLLGNBQWIsRUFBNkI7QUFDbENDLGFBQUssR0FBRyxTQUFSO0FBQ0QsT0FGTSxNQUVBLElBQUlELElBQUksS0FBSyxpQkFBYixFQUFnQztBQUNyQ0MsYUFBSyxHQUFHLFlBQVI7QUFDRCxPQUZNLE1BRUEsSUFBSUQsSUFBSSxLQUFLLHFCQUFiLEVBQW9DO0FBQ3pDQyxhQUFLLEdBQUcsaUJBQVI7QUFDRCxPQUZNLE1BRUEsSUFBSUQsSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDOUJDLGFBQUssR0FBRyxvQkFBUjtBQUNEOztBQUNELFdBQUsxRixLQUFMLENBQVdMLE1BQVgsQ0FBa0IsZUFBbEIsRUFBbUNzQixJQUFuQyxXQUEyQ3lFLEtBQTNDO0FBQ0Q7Ozs7RUFuUHNCeEcsOEM7O0FBc1BWNkMseUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1xuICBIRUlHSFQsXG4gIE1BUkdJTlMsXG4gIFdJRFRILFxuICBBTklNQVRJT05fRFVSQVRJT04sXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lOR1xufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHRoaXMuc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0TGFiZWxzKCk7XG4gIH1cblxuICBzZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyA9IHsgdG9wT2Zmc2V0OiAwLCBsZWZ0T2Zmc2V0OiAwIH0pIHtcbiAgICAvLyBsZXQgSEVJR0hUID0gd2luZG93LmNsaWVudEhlaWdodDtcbiAgICAvLyBsZXQgV0lEVEggPSB3aW5kb3cuY2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgIC5zZWxlY3Qoc2VsZWN0b3IpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBIRUlHSFQgKyBNQVJHSU5TICogMilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggKyBNQVJHSU5TICogMik7XG4gICAgLy8gLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOUyAqIDIpXG4gICAgLy8gLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTlMgKiAyKTtcbiAgICAvLyAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gICAgLy8gLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDk2MCA1MDBcIik7XG4gICAgdGhpcy5jaGFydCA9IHN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiKVxuICAgICAgLmF0dHIoXG4gICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgIGB0cmFuc2xhdGUoJHtNQVJHSU5TICsgb3B0aW9ucy5sZWZ0T2Zmc2V0fSwgJHtNQVJHSU5TIC8gMiArXG4gICAgICAgICAgb3B0aW9ucy50b3BPZmZzZXR9KWBcbiAgICAgICk7XG4gIH1cblxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgLy8gcmVkcmF3KHNlbGVjdG9yLCBvcHRpb25zID0geyB0b3BPZmZzZXQ6IDAsIGxlZnRPZmZzZXQ6IDAgfSkge1xuICAvLyAgIGNvbnN0IHN2ZyA9IGQzXG4gIC8vICAgICAuc2VsZWN0KHNlbGVjdG9yKVxuICAvLyAgICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOUyAqIDIpXG4gIC8vICAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOUyAqIDIpO1xuICAvLyAgIHRoaXMuY2hhcnQgPSBzdmdcbiAgLy8gICAgIC5hcHBlbmQoXCJnXCIpXG4gIC8vICAgICAuYXR0cihcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIilcbiAgLy8gICAgIC5hdHRyKFxuICAvLyAgICAgICBcInRyYW5zZm9ybVwiLFxuICAvLyAgICAgICBgdHJhbnNsYXRlKCR7TUFSR0lOUyArIG9wdGlvbnMubGVmdE9mZnNldH0sICR7TUFSR0lOUyAvIDIgK1xuICAvLyAgICAgICAgIG9wdGlvbnMudG9wT2Zmc2V0fSlgXG4gIC8vICAgICApO1xuICAvLyB9XG5cbiAgeEF4aXModGlja3MgPSAyMCwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgdGhpcy54U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgLmRvbWFpbihbMCwgMV0pO1xuICAgIGxldCB4QXhpc0NhbGwgPSBkM1xuICAgICAgLmF4aXNCb3R0b20odGhpcy54U2NhbGUpXG4gICAgICAudGlja3ModGlja3MpXG4gICAgICAudGlja0Zvcm1hdChkMy5mb3JtYXQoXCIuMCVcIikpO1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7SEVJR0hUfSlgKVxuICAgICAgLmNhbGwoeEF4aXNDYWxsKTtcbiAgfVxuXG4gIHlBeGlzKGRvbWFpbiwgeVNjYWxlLCB0aWNrcyA9IDUsIHRpY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIGlmICh5U2NhbGUgPT09IFwic2NhbGVCYW5kXCIpIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIEhFSUdIVF0pXG4gICAgICAgIC5wYWRkaW5nKDAuOCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIEhFSUdIVF0pO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnQuYXBwZW5kKFwiZ1wiKS5jYWxsKFxuICAgICAgZDNcbiAgICAgICAgLmF4aXNMZWZ0KHRoaXMueVNjYWxlKVxuICAgICAgICAudGlja3ModGlja3MpXG4gICAgICAgIC50aWNrRm9ybWF0KHRpY2tGb3JtYXQoKSlcbiAgICApO1xuICB9XG5cbiAgc2V0TGFiZWxzKCkge1xuICAgIC8vIExhYmVsc1xuICAgIHZhciB4TGFiZWwgPSB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4LWF4aXMtbGFiZWxcIilcbiAgICAgIC5hdHRyKFwieVwiLCBIRUlHSFQgKyA1MClcbiAgICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE4cHhcIilcbiAgICAgIC5hdHRyKFwiZm9udC13ZWlnaHRcIiwgXCI2MDBcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC50ZXh0KFwiR0RQIFBlciBDYXBpdGEgKCQpXCIpO1xuICAgIGNvbnNvbGUubG9nKGBoZWlnaHQ6ICR7SEVJR0hUfWApO1xuICAgIHZhciB5TGFiZWwgPSB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzR3JvdXBcIilcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAvLyAuYXR0cihcInBvc2l0aW9uXCIsICdyZWxhdGl2ZScpXG4gICAgICAuYXR0cihcInhcIiwgLShIRUlHSFQgLyAyKSlcbiAgICAgIC5hdHRyKFwieVwiLCAtNTApXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE4cHhcIilcbiAgICAgIC5hdHRyKFwiZm9udC13ZWlnaHRcIiwgXCI2MDBcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC50ZXh0KFwiSGFwcGluZXNzIEluZGV4ICglKVwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiIsImV4cG9ydCBjb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9ERUxBWSA9IDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0VBU0lORyA9IGQzLmVhc2VQb2x5O1xuLy8gZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9FQVNJTkcgPSBkMy5lYXNlRWxhc3RpYztcblxuZXhwb3J0IGNvbnN0IFdJRFRIID0gd2luZG93LmlubmVyV2lkdGggLSAyNTA7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0IC0gMzAwO1xuLy8gZXhwb3J0IGNvbnN0IFdJRFRIID0gMTEwMDtcbi8vIGV4cG9ydCBjb25zdCBIRUlHSFQgPSA2MDA7XG5leHBvcnQgY29uc3QgTUFSR0lOUyA9IDEwMDtcbiIsImltcG9ydCBXb3JsZEdyYXBoIGZyb20gXCIuL3dvcmxkX2dyYXBoXCI7XG5cblxubGV0IHdvcmxkR3JhcGg7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHdvcmxkR3JhcGggPSBuZXcgV29ybGRHcmFwaChcInN2Zy5ncmFwaFwiKTtcbiAgLy8gd29ybGRHcmFwaC5yZWRyYXcoXCJzdmcuZ3JhcGhcIik7XG5cbiAgbGV0IGJ0bkdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tZ3JvdXBcIik7XG4gIGJ0bkdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBjdXJyZW50QnRuID0gZS50YXJnZXQ7XG4gICAgbGV0IGN1cnJlbnRCdG5DbGFzcyA9IGN1cnJlbnRCdG4uY2xhc3NMaXN0WzBdLnNwbGl0KFwiLVwiKVsxXTtcbiAgICBpZiAoY3VycmVudEJ0bkNsYXNzICE9PSAnZ3JvdXAnKSB7XG4gICAgICB3b3JsZEdyYXBoLnVwZGF0ZURhdGEoY3VycmVudEJ0bkNsYXNzKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbi8vICAgd29ybGRHcmFwaC5yZWRyYXcoXCJzdmcuZ3JhcGhcIik7XG4vLyB9O1xuIiwiaW1wb3J0IHtcbiAgV0lEVEgsXG4gIEhFSUdIVCxcbiAgQU5JTUFUSU9OX0RFTEFZLFxuICBBTklNQVRJT05fRUFTSU5HLFxuICBBTklNQVRJT05fRFVSQVRJT05cbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmltcG9ydCBDaGFydCBmcm9tIFwiLi9jaGFydFwiO1xuXG5jbGFzcyBXb3JsZEdyYXBoIGV4dGVuZHMgQ2hhcnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdChzZWxlY3Rvcik7XG4gICAgdGhpcy54QXhpcygpO1xuICAgIHRoaXMueUF4aXMoWzEsIDBdLCBcInNjYWxlTGluZWFyXCIsIDIwLCAoKSA9PiBkMy5mb3JtYXQoXCIuMCVcIikpO1xuICAgIHRoaXMuZ2V0RGF0YShcImdyYXBoR2RwXCIpO1xuICB9XG5cbiAgZ2V0RGF0YShtZXRyaWMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgZDMuanNvbihcImRpc3QvZGF0YS9jb3VudHJpZXMuanNvblwiKS50aGVuKGRhdGEgPT4ge1xuICAgICAgdGhhdC5zZXREYXRhKGRhdGEpO1xuICAgICAgdGhhdC5jaXJjbGVzKG1ldHJpYyk7XG4gICAgfSk7XG4gIH1cblxuICBjaXJjbGVzKG1ldHJpYykge1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIHRvb2x0aXBcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBsZXQgdG9vbHRpcCA9IGQzXG4gICAgICAuc2VsZWN0KFwiYm9keVwiKVxuICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRvb2x0aXBcIilcbiAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjVweFwiKVxuICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBcIjEwcHhcIilcbiAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgIC5zdHlsZShcInotaW5kZXhcIiwgXCI5OTk5OTk5OTlcIilcbiAgICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblxuICAgIGxldCBzaG93VG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDIwMCk7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgICAgIC5odG1sKFxuICAgICAgICAgIGBcbiAgPHN0cm9uZz5Db3VudHJ5Ojwvc3Ryb25nPiAke2QuY291bnRyeX0gKCR7ZC5jb250aW5lbnR9KTxici8+XG4gIDxzdHJvbmc+SGFwcGluZXNzIFJhbmtpbmc6PC9zdHJvbmc+ICR7ZC5yYW5raW5nfVxuYFxuICAgICAgICApXG4gICAgICAgIC5zdHlsZShcInRvcFwiLCBkMy5ldmVudC5jbGllbnRZIC0gMTAwICsgXCJweFwiKVxuICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIGQzLmV2ZW50LmNsaWVudFggLSAxNjAgKyBcInB4XCIpO1xuICAgIH07XG5cbiAgICBsZXQgbW92ZVRvb2x0aXAgPSBmdW5jdGlvbihkKSB7XG4gICAgICBzaG93VG9vbHRpcChkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibW92ZSB0b29sdGlwXCIpO1xuICAgICAgdG9vbHRpcFxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5jbGllbnRYIC0gMTYwICsgXCJweFwiKTtcbiAgICB9O1xuXG4gICAgbGV0IGhpZGVUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgICAgY29uc29sZS5sb2coXCJoaWRlIHRvb2x0aXBcIik7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKTtcbiAgICB9O1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGNoYXJ0IHJlbmRlcmluZ1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoXCJjaXJjbGVcIilcbiAgICAgIC5kYXRhKE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJjbGFzc1wiLFxuICAgICAgICBkID0+XG4gICAgICAgICAgYGNvdW50cnkgJHtkLmNsYXNzfSBjb250aW5lbnQtJHtkLmNvbnRpbmVudFxuICAgICAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgLmpvaW4oXCItXCIpfSBjb3VudHJ5LWJ1YmJsZWBcbiAgICAgIClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQuY29udGluZW50ID09PSBcIkFmcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzdjYmQxZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkFzaWFcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjFmNWFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJOb3J0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMzAzNDgxXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiU291dGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmNWI0NFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkV1cm9wZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzJmYzVjY1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiLjdcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI0NEQ0RDRFwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkW21ldHJpY10gLyAxNTYpICsgMjU7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIHNob3dUb29sdGlwKVxuICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIG1vdmVUb29sdGlwKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBoaWRlVG9vbHRpcClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kZWxheSgoZCwgaSkgPT4gaSAqIEFOSU1BVElPTl9ERUxBWSlcbiAgICAgIC5kdXJhdGlvbihBTklNQVRJT05fRFVSQVRJT04pXG4gICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgLmF0dHIoXCJyXCIsIGQgPT4ge1xuICAgICAgICBpZiAoZC5wb3B1bGF0aW9uID4gODAwMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDI1MDAwMDAwO1xuICAgICAgICB9IGVsc2UgaWYgKGQucG9wdWxhdGlvbiA+IDUwMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDAwO1xuICAgICAgICB9IGVsc2UgaWYgKGQucG9wdWxhdGlvbiA+IDEwMDAwMDApIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTUwMDAwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTAwMDAwO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMueVNjYWxlKGQuZ3JhcGhSYW5raW5nIC8gMTU2KTtcbiAgICAgIH0pO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gbGVnZW5kXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IGNvbnRpbmVudHMgPSB7XG4gICAgICBBRlJJQ0E6IHsgY29udGluZW50OiBcIkFmcmljYVwiIH0sXG4gICAgICBBU0lBOiB7IGNvbnRpbmVudDogXCJBc2lhXCIgfSxcbiAgICAgIE5PUlRIX0FNRVJJQ0E6IHsgY29udGluZW50OiBcIk5vcnRoIEFtZXJpY2FcIiB9LFxuICAgICAgU09VVEhfQU1FUklDQTogeyBjb250aW5lbnQ6IFwiU291dGggQW1lcmljYVwiIH0sXG4gICAgICBFVVJPUEU6IHsgY29udGluZW50OiBcIkV1cm9wZVwiIH1cbiAgICB9O1xuXG4gICAgbGV0IGNvbnRpbmVudEZvY3VzT24gPSBjb250aW5lbnROYW1lID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcbiAgICAgICAgICBgY2lyY2xlOm5vdCguY29udGluZW50LSR7Y29udGluZW50TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9KWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjA1XCIpO1xuICAgIH07XG5cbiAgICBsZXQgY29udGluZW50Rm9jdXNPZmYgPSBjb250aW5lbnROYW1lID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcbiAgICAgICAgICBgY2lyY2xlOm5vdCguY29udGluZW50LSR7Y29udGluZW50TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9KWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjdcIik7XG4gICAgfTtcblxuICAgIGxldCBsZWdlbmQgPSB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLmxlZ2VuZFwiKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyhjb250aW5lbnRzKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxlZ2VuZFwiKVxuICAgICAgLmF0dHIoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAvLyAuYXR0cihcImJvdHRvbVwiLCAwKVxuICAgICAgLy8gLmF0dHIoXCJyaWdodFwiLCAwKTtcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtXSURUSCAtIDEzMH0sICR7SEVJR0hUIC0gMTIwfSlgKTtcbiAgICAgIC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoOTcwLCA0ODApYCk7XG5cbiAgICBsZWdlbmRcbiAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIHJldHVybiAyMCAqIGk7XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAxNSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDE1KVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBZnJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiM3Y2JkMWVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBc2lhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmYxZjVhXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiTm9ydGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzMwMzQ4MVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIlNvdXRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjViNDRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJFdXJvcGVcIikge1xuICAgICAgICAgIHJldHVybiBcIiMyZmM1Y2NcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IGNvbnRpbmVudEZvY3VzT24oZC5jb250aW5lbnQpKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBkID0+IGNvbnRpbmVudEZvY3VzT2ZmKGQuY29udGluZW50KSk7XG5cbiAgICBsZWdlbmRcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInhcIiwgMjUpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIilcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBgbGVnZW5kLSR7ZC5jb250aW5lbnQuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfWApXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICByZXR1cm4gMjAgKiBpO1xuICAgICAgfSlcbiAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuY29udGluZW50O1xuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMTJweFwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4gY29udGluZW50Rm9jdXNPbihkLmNvbnRpbmVudCkpXG4gICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGQgPT4gY29udGluZW50Rm9jdXNPZmYoZC5jb250aW5lbnQpKTtcblxuICAgIGxlZ2VuZFxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieFwiLCAzMSlcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCItLjJlbVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIC0xMClcbiAgICAgIC50ZXh0KFwiQ29udGluZW50XCIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE3cHhcIilcbiAgICAgIC5zdHlsZShcInRleHQtYWxpZ25cIiwgXCJsZWZ0XCIpO1xuICB9XG5cbiAgdXBkYXRlRGF0YShkYXRhVHlwZSkge1xuICAgIGQzLmpzb24oXCJkaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcIi5jb3VudHJ5LWJ1YmJsZVwiKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgIC5lYXNlKEFOSU1BVElPTl9FQVNJTkcpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMueFNjYWxlKGRbZGF0YVR5cGVdIC8gMTU2KSArIDI1O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUF4aXNMYWJlbChkYXRhVHlwZSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVBeGlzTGFiZWwodHlwZSkge1xuICAgIC8vIHhMYWJlbFxuICAgIGNvbnNvbGUubG9nKHR5cGUpO1xuICAgIGxldCBsYWJlbDtcbiAgICBpZiAodHlwZSA9PT0gJ2dyYXBoU29jaWFsU3VwcG9ydCcpIHtcbiAgICAgIGxhYmVsID0gJ1NvY2lhbCBTdXBwb3J0JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZ3JhcGhGcmVlZG9tXCIpIHtcbiAgICAgIGxhYmVsID0gJ0ZyZWVkb20nO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJncmFwaEdlbmVyb3NpdHlcIikge1xuICAgICAgbGFiZWwgPSAnR2VuZXJvc2l0eSc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImdyYXBoTGlmZUV4cGVjdGFuY3lcIikge1xuICAgICAgbGFiZWwgPSAnTGlmZSBFeHBlY3RhbmN5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdncmFwaEdkcCcpIHtcbiAgICAgIGxhYmVsID0gJ0dEUCBQZXIgQ2FwaXRhICgkKSc7XG4gICAgfVxuICAgIHRoaXMuY2hhcnQuc2VsZWN0KFwiLngtYXhpcy1sYWJlbFwiKS50ZXh0KGAke2xhYmVsfWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmxkR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9