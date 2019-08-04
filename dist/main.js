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

      this.chart = svg.append("g").attr("position", 'relative').attr("transform", "translate(".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] + options.leftOffset, ", ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] / 2 + options.topOffset, ")"));
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.data = data;
    } // redraw(selector) {
    //   let parentDiv = document.querySelector('.graph__container');
    //   let width = parentDiv.clientWidth;
    //   console.log(`new width: ${width}`)
    //   let height = parentDiv.clientHeight;
    //   console.log(`new height: ${height}`)
    //   d3.select(selector)
    //     .attr('width', width + MARGINS * 2)
    //     .attr('height', height + MARGINS * 2);
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
      .attr("x", -(_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] / 2)).attr("y", -50).attr("font-size", "18px").attr('font-weight', "600").attr("text-anchor", "middle").text("Happiness Index (%)");
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

var WIDTH = window.innerWidth - 200;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93b3JsZF9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDaGFydCIsInNlbGVjdG9yIiwib3B0aW9ucyIsInNldENoYXJ0Iiwic2V0TGFiZWxzIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIkhFSUdIVCIsIk1BUkdJTlMiLCJXSURUSCIsImNoYXJ0IiwiYXBwZW5kIiwiZGF0YSIsInRpY2tzIiwidGlja0Zvcm1hdCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4QXhpc0NhbGwiLCJheGlzQm90dG9tIiwiZm9ybWF0IiwiY2FsbCIsInlTY2FsZSIsInBhZGRpbmciLCJheGlzTGVmdCIsInhMYWJlbCIsInRleHQiLCJjb25zb2xlIiwibG9nIiwieUxhYmVsIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwiQU5JTUFUSU9OX0RFTEFZIiwiQU5JTUFUSU9OX0VBU0lORyIsImVhc2VQb2x5Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid29ybGRHcmFwaCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIldvcmxkR3JhcGgiLCJidG5Hcm91cCIsInF1ZXJ5U2VsZWN0b3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50QnRuIiwidGFyZ2V0IiwiY3VycmVudEJ0bkNsYXNzIiwiY2xhc3NMaXN0Iiwic3BsaXQiLCJ1cGRhdGVEYXRhIiwieEF4aXMiLCJ5QXhpcyIsImdldERhdGEiLCJtZXRyaWMiLCJ0aGF0IiwianNvbiIsInRoZW4iLCJzZXREYXRhIiwiY2lyY2xlcyIsInRvb2x0aXAiLCJzdHlsZSIsInNob3dUb29sdGlwIiwiZCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImh0bWwiLCJjb3VudHJ5IiwiY29udGluZW50IiwicmFua2luZyIsImV2ZW50IiwiY2xpZW50WSIsImNsaWVudFgiLCJtb3ZlVG9vbHRpcCIsImhpZGVUb29sdGlwIiwic2VsZWN0QWxsIiwiT2JqZWN0IiwidmFsdWVzIiwiZW50ZXIiLCJqb2luIiwib24iLCJkZWxheSIsImkiLCJlYXNlIiwicG9wdWxhdGlvbiIsImdyYXBoUmFua2luZyIsImNvbnRpbmVudHMiLCJBRlJJQ0EiLCJBU0lBIiwiTk9SVEhfQU1FUklDQSIsIlNPVVRIX0FNRVJJQ0EiLCJFVVJPUEUiLCJjb250aW5lbnRGb2N1c09uIiwiY29udGluZW50TmFtZSIsImNvbnRpbmVudEZvY3VzT2ZmIiwibGVnZW5kIiwiZGF0YVR5cGUiLCJ1cGRhdGVBeGlzTGFiZWwiLCJ0eXBlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7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Q0FBQyxFQUFJO0FBQ2YsaUJBQU8sTUFBSSxDQUFDakQsTUFBTCxDQUFZaUQsQ0FBQyxDQUFDaUMsUUFBRCxDQUFELEdBQWMsR0FBMUIsSUFBaUMsRUFBeEM7QUFDRCxTQVBIOztBQVNFLGNBQUksQ0FBQ0MsZUFBTCxDQUFxQkQsUUFBckI7QUFDSCxPQVhEO0FBWUQ7OztvQ0FFZUUsSSxFQUFNO0FBQ3BCO0FBQ0F2RSxhQUFPLENBQUNDLEdBQVIsQ0FBWXNFLElBQVo7QUFDQSxVQUFJQyxLQUFKOztBQUNBLFVBQUlELElBQUksS0FBSyxvQkFBYixFQUFtQztBQUNqQ0MsYUFBSyxHQUFHLGdCQUFSO0FBQ0QsT0FGRCxNQUVPLElBQUlELElBQUksS0FBSyxjQUFiLEVBQTZCO0FBQ2xDQyxhQUFLLEdBQUcsU0FBUjtBQUNELE9BRk0sTUFFQSxJQUFJRCxJQUFJLEtBQUssaUJBQWIsRUFBZ0M7QUFDckNDLGFBQUssR0FBRyxZQUFSO0FBQ0QsT0FGTSxNQUVBLElBQUlELElBQUksS0FBSyxxQkFBYixFQUFvQztBQUN6Q0MsYUFBSyxHQUFHLGlCQUFSO0FBQ0QsT0FGTSxNQUVBLElBQUlELElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQzlCQyxhQUFLLEdBQUcsb0JBQVI7QUFDRDs7QUFDRCxXQUFLMUYsS0FBTCxDQUFXTCxNQUFYLENBQWtCLGVBQWxCLEVBQW1Dc0IsSUFBbkMsV0FBMkN5RSxLQUEzQztBQUNEOzs7O0VBblBzQnhHLDhDOztBQXNQVjZDLHlFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtcbiAgSEVJR0hULFxuICBNQVJHSU5TLFxuICBXSURUSCxcbiAgQU5JTUFUSU9OX0RVUkFUSU9OLFxuICBBTklNQVRJT05fREVMQVksXG4gIEFOSU1BVElPTl9FQVNJTkdcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldENoYXJ0KHNlbGVjdG9yLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldExhYmVscygpO1xuICB9XG5cbiAgc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMgPSB7IHRvcE9mZnNldDogMCwgbGVmdE9mZnNldDogMCB9KSB7XG4gICAgLy8gbGV0IEhFSUdIVCA9IHdpbmRvdy5jbGllbnRIZWlnaHQ7XG4gICAgLy8gbGV0IFdJRFRIID0gd2luZG93LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KHNlbGVjdG9yKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOUyAqIDIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOUyAqIDIpO1xuICAgICAgLy8gLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOUyAqIDIpXG4gICAgICAvLyAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOUyAqIDIpO1xuICAgICAgLy8gLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgLy8gLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDk2MCA1MDBcIik7XG4gICAgdGhpcy5jaGFydCA9IHN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwicG9zaXRpb25cIiwgJ3JlbGF0aXZlJylcbiAgICAgIC5hdHRyKFxuICAgICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgICBgdHJhbnNsYXRlKCR7TUFSR0lOUyArIG9wdGlvbnMubGVmdE9mZnNldH0sICR7TUFSR0lOUyAvIDIgK1xuICAgICAgICAgIG9wdGlvbnMudG9wT2Zmc2V0fSlgXG4gICAgICApO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIC8vIHJlZHJhdyhzZWxlY3Rvcikge1xuICAvLyAgIGxldCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JhcGhfX2NvbnRhaW5lcicpO1xuXG4gIC8vICAgbGV0IHdpZHRoID0gcGFyZW50RGl2LmNsaWVudFdpZHRoO1xuICAvLyAgIGNvbnNvbGUubG9nKGBuZXcgd2lkdGg6ICR7d2lkdGh9YClcbiAgLy8gICBsZXQgaGVpZ2h0ID0gcGFyZW50RGl2LmNsaWVudEhlaWdodDtcbiAgLy8gICBjb25zb2xlLmxvZyhgbmV3IGhlaWdodDogJHtoZWlnaHR9YClcbiAgLy8gICBkMy5zZWxlY3Qoc2VsZWN0b3IpXG4gIC8vICAgICAuYXR0cignd2lkdGgnLCB3aWR0aCArIE1BUkdJTlMgKiAyKVxuICAvLyAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCArIE1BUkdJTlMgKiAyKTtcbiAgLy8gfVxuXG4gIHhBeGlzKHRpY2tzID0gMjAsIHRpY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIHRoaXMueFNjYWxlID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAsIFdJRFRIXSlcbiAgICAgIC5kb21haW4oWzAsIDFdKTtcbiAgICBsZXQgeEF4aXNDYWxsID0gZDNcbiAgICAgIC5heGlzQm90dG9tKHRoaXMueFNjYWxlKVxuICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgLnRpY2tGb3JtYXQoZDMuZm9ybWF0KFwiLjAlXCIpKTtcbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke0hFSUdIVH0pYClcbiAgICAgIC5jYWxsKHhBeGlzQ2FsbCk7XG4gIH1cblxuICB5QXhpcyhkb21haW4sIHlTY2FsZSwgdGlja3MgPSA1LCB0aWNrRm9ybWF0ID0gKCkgPT4ge30pIHtcbiAgICBpZiAoeVNjYWxlID09PSBcInNjYWxlQmFuZFwiKSB7XG4gICAgICB0aGlzLnlTY2FsZSA9IGQzW3lTY2FsZV0oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKFswLCBIRUlHSFRdKVxuICAgICAgICAucGFkZGluZygwLjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnlTY2FsZSA9IGQzW3lTY2FsZV0oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKFswLCBIRUlHSFRdKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0LmFwcGVuZChcImdcIikuY2FsbChcbiAgICAgIGQzXG4gICAgICAgIC5heGlzTGVmdCh0aGlzLnlTY2FsZSlcbiAgICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgICAudGlja0Zvcm1hdCh0aWNrRm9ybWF0KCkpXG4gICAgKTtcbiAgfVxuXG4gIHNldExhYmVscygpIHtcbiAgICAvLyBMYWJlbHNcbiAgICB2YXIgeExhYmVsID0gdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieC1heGlzLWxhYmVsXCIpXG4gICAgICAuYXR0cihcInlcIiwgSEVJR0hUICsgNTApXG4gICAgICAuYXR0cihcInhcIiwgV0lEVEggLyAyKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxOHB4XCIpXG4gICAgICAuYXR0cihcImZvbnQtd2VpZ2h0XCIsIFwiNjAwXCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkdEUCBQZXIgQ2FwaXRhICgkKVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGBoZWlnaHQ6ICR7SEVJR0hUfWApO1xuICAgIHZhciB5TGFiZWwgPSB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzR3JvdXBcIilcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAvLyAuYXR0cihcInBvc2l0aW9uXCIsICdyZWxhdGl2ZScpXG4gICAgICAuYXR0cihcInhcIiwgLShIRUlHSFQgLyAyKSlcbiAgICAgIC5hdHRyKFwieVwiLCAtNTApXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE4cHhcIilcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsIFwiNjAwXCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkhhcHBpbmVzcyBJbmRleCAoJSlcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iLCJleHBvcnQgY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMTAwMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fREVMQVkgPSAwO1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9FQVNJTkcgPSBkMy5lYXNlUG9seTtcbi8vIGV4cG9ydCBjb25zdCBBTklNQVRJT05fRUFTSU5HID0gZDMuZWFzZUVsYXN0aWM7XG5cbmV4cG9ydCBjb25zdCBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMjAwO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMDtcbi8vIGV4cG9ydCBjb25zdCBXSURUSCA9IDExMDA7XG4vLyBleHBvcnQgY29uc3QgSEVJR0hUID0gNjAwO1xuZXhwb3J0IGNvbnN0IE1BUkdJTlMgPSAxMDA7XG4iLCJpbXBvcnQgV29ybGRHcmFwaCBmcm9tIFwiLi93b3JsZF9ncmFwaFwiO1xuXG5cbmxldCB3b3JsZEdyYXBoO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICB3b3JsZEdyYXBoID0gbmV3IFdvcmxkR3JhcGgoXCJzdmcuZ3JhcGhcIik7XG4gIC8vIHdvcmxkR3JhcGgucmVkcmF3KFwic3ZnLmdyYXBoXCIpO1xuXG4gIGxldCBidG5Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWdyb3VwXCIpO1xuICBidG5Hcm91cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY3VycmVudEJ0biA9IGUudGFyZ2V0O1xuICAgIGxldCBjdXJyZW50QnRuQ2xhc3MgPSBjdXJyZW50QnRuLmNsYXNzTGlzdFswXS5zcGxpdChcIi1cIilbMV07XG4gICAgaWYgKGN1cnJlbnRCdG5DbGFzcyAhPT0gJ2dyb3VwJykge1xuICAgICAgd29ybGRHcmFwaC51cGRhdGVEYXRhKGN1cnJlbnRCdG5DbGFzcyk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vLyB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4vLyAgIHdvcmxkR3JhcGgucmVkcmF3KFwic3ZnLmdyYXBoXCIpO1xuLy8gfTtcbiIsImltcG9ydCB7XG4gIFdJRFRILFxuICBIRUlHSFQsXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lORyxcbiAgQU5JTUFUSU9OX0RVUkFUSU9OXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vY2hhcnRcIjtcblxuY2xhc3MgV29ybGRHcmFwaCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3Qoc2VsZWN0b3IpO1xuICAgIHRoaXMueEF4aXMoKTtcbiAgICB0aGlzLnlBeGlzKFsxLCAwXSwgXCJzY2FsZUxpbmVhclwiLCAyMCwgKCkgPT4gZDMuZm9ybWF0KFwiLjAlXCIpKTtcbiAgICB0aGlzLmdldERhdGEoXCJncmFwaEdkcFwiKTtcbiAgfVxuXG4gIGdldERhdGEobWV0cmljKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGQzLmpzb24oXCJkaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIHRoYXQuc2V0RGF0YShkYXRhKTtcbiAgICAgIHRoYXQuY2lyY2xlcyhtZXRyaWMpO1xuICAgIH0pO1xuICB9XG5cbiAgY2lyY2xlcyhtZXRyaWMpIHtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyB0b29sdGlwXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IHRvb2x0aXAgPSBkM1xuICAgICAgLnNlbGVjdChcImJvZHlcIilcbiAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0b29sdGlwXCIpXG4gICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmxhY2tcIilcbiAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCI1cHhcIilcbiAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxMHB4XCIpXG4gICAgICAuc3R5bGUoXCJjb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAuc3R5bGUoXCJ6LWluZGV4XCIsIFwiOTk5OTk5OTk5XCIpXG4gICAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAuc3R5bGUoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cbiAgICBsZXQgc2hvd1Rvb2x0aXAgPSBmdW5jdGlvbihkKSB7XG4gICAgICB0b29sdGlwLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyMDApO1xuICAgICAgdG9vbHRpcFxuICAgICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKVxuICAgICAgICAuaHRtbChcbiAgICAgICAgICBgXG4gIDxzdHJvbmc+Q291bnRyeTo8L3N0cm9uZz4gJHtkLmNvdW50cnl9ICgke2QuY29udGluZW50fSk8YnIvPlxuICA8c3Ryb25nPkhhcHBpbmVzcyBSYW5raW5nOjwvc3Ryb25nPiAke2QucmFua2luZ31cbmBcbiAgICAgICAgKVxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5jbGllbnRYIC0gMTYwICsgXCJweFwiKTtcbiAgICB9O1xuXG4gICAgbGV0IG1vdmVUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgICAgc2hvd1Rvb2x0aXAoZCk7XG4gICAgICBjb25zb2xlLmxvZyhcIm1vdmUgdG9vbHRpcFwiKTtcbiAgICAgIHRvb2x0aXBcbiAgICAgICAgLnN0eWxlKFwidG9wXCIsIGQzLmV2ZW50LmNsaWVudFkgLSAxMDAgKyBcInB4XCIpXG4gICAgICAgIC5zdHlsZShcImxlZnRcIiwgZDMuZXZlbnQuY2xpZW50WCAtIDE2MCArIFwicHhcIik7XG4gICAgfTtcblxuICAgIGxldCBoaWRlVG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGlkZSB0b29sdGlwXCIpO1xuICAgICAgdG9vbHRpcFxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIik7XG4gICAgfTtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBjaGFydCByZW5kZXJpbmdcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXG4gICAgICAgIFwiY2xhc3NcIixcbiAgICAgICAgZCA9PlxuICAgICAgICAgIGBjb3VudHJ5ICR7ZC5jbGFzc30gY29udGluZW50LSR7ZC5jb250aW5lbnRcbiAgICAgICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgICAgIC5qb2luKFwiLVwiKX0gY291bnRyeS1idWJibGVgXG4gICAgICApXG4gICAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBZnJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiM3Y2JkMWVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBc2lhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmYxZjVhXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiTm9ydGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzMwMzQ4MVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIlNvdXRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjViNDRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJFdXJvcGVcIikge1xuICAgICAgICAgIHJldHVybiBcIiMyZmM1Y2NcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBcIi43XCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNDRENEQ0RcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMnB4XCIpXG4gICAgICAuYXR0cihcImN4XCIsIGQgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy54U2NhbGUoZFttZXRyaWNdIC8gMTU2KSArIDI1O1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBzaG93VG9vbHRpcClcbiAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBtb3ZlVG9vbHRpcClcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgaGlkZVRvb2x0aXApXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZGVsYXkoKGQsIGkpID0+IGkgKiBBTklNQVRJT05fREVMQVkpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgLmVhc2UoQU5JTUFUSU9OX0VBU0lORylcbiAgICAgIC5hdHRyKFwiclwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQucG9wdWxhdGlvbiA+IDgwMDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAyNTAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiA1MDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAxMDAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiAxMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDE1MDAwMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnlTY2FsZShkLmdyYXBoUmFua2luZyAvIDE1Nik7XG4gICAgICB9KTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGxlZ2VuZFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGxldCBjb250aW5lbnRzID0ge1xuICAgICAgQUZSSUNBOiB7IGNvbnRpbmVudDogXCJBZnJpY2FcIiB9LFxuICAgICAgQVNJQTogeyBjb250aW5lbnQ6IFwiQXNpYVwiIH0sXG4gICAgICBOT1JUSF9BTUVSSUNBOiB7IGNvbnRpbmVudDogXCJOb3J0aCBBbWVyaWNhXCIgfSxcbiAgICAgIFNPVVRIX0FNRVJJQ0E6IHsgY29udGluZW50OiBcIlNvdXRoIEFtZXJpY2FcIiB9LFxuICAgICAgRVVST1BFOiB7IGNvbnRpbmVudDogXCJFdXJvcGVcIiB9XG4gICAgfTtcblxuICAgIGxldCBjb250aW5lbnRGb2N1c09uID0gY29udGluZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5zZWxlY3RBbGwoXG4gICAgICAgICAgYGNpcmNsZTpub3QoLmNvbnRpbmVudC0ke2NvbnRpbmVudE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfSlgXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiMC4wNVwiKTtcbiAgICB9O1xuXG4gICAgbGV0IGNvbnRpbmVudEZvY3VzT2ZmID0gY29udGluZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5zZWxlY3RBbGwoXG4gICAgICAgICAgYGNpcmNsZTpub3QoLmNvbnRpbmVudC0ke2NvbnRpbmVudE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfSlgXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiMC43XCIpO1xuICAgIH07XG5cbiAgICBsZXQgbGVnZW5kID0gdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdEFsbChcIi5sZWdlbmRcIilcbiAgICAgIC5kYXRhKE9iamVjdC52YWx1ZXMoY29udGluZW50cykpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsZWdlbmRcIilcbiAgICAgIC5hdHRyKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgLy8gLmF0dHIoXCJib3R0b21cIiwgMClcbiAgICAgIC8vIC5hdHRyKFwicmlnaHRcIiwgMCk7XG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7V0lEVEggLSAxMzB9LCAke0hFSUdIVCAtIDEyMH0pYCk7XG4gICAgICAvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDk3MCwgNDgwKWApO1xuXG4gICAgbGVnZW5kXG4gICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICByZXR1cm4gMjAgKiBpO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgMTUpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAxNSlcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICBpZiAoZC5jb250aW5lbnQgPT09IFwiQWZyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjN2NiZDFlXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiQXNpYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmMWY1YVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIk5vcnRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiMzMDM0ODFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJTb3V0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmY1YjQ0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiRXVyb3BlXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMmZjNWNjXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiBjb250aW5lbnRGb2N1c09uKGQuY29udGluZW50KSlcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZCA9PiBjb250aW5lbnRGb2N1c09mZihkLmNvbnRpbmVudCkpO1xuXG4gICAgbGVnZW5kXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIDI1KVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpXG4gICAgICAuYXR0cihcImR5XCIsIFwiMWVtXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGxlZ2VuZC0ke2QuY29udGluZW50LnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX1gKVxuICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIDIwICogaTtcbiAgICAgIH0pXG4gICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLmNvbnRpbmVudDtcbiAgICAgIH0pXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjEycHhcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IGNvbnRpbmVudEZvY3VzT24oZC5jb250aW5lbnQpKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBkID0+IGNvbnRpbmVudEZvY3VzT2ZmKGQuY29udGluZW50KSk7XG5cbiAgICBsZWdlbmRcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInhcIiwgMzEpXG4gICAgICAuYXR0cihcImR5XCIsIFwiLS4yZW1cIilcbiAgICAgIC5hdHRyKFwieVwiLCAtMTApXG4gICAgICAudGV4dChcIkNvbnRpbmVudFwiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxN3B4XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwibGVmdFwiKTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YVR5cGUpIHtcbiAgICBkMy5qc29uKFwiZGlzdC9kYXRhL2NvdW50cmllcy5qc29uXCIpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5zZWxlY3RBbGwoXCIuY291bnRyeS1idWJibGVcIilcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkW2RhdGFUeXBlXSAvIDE1NikgKyAyNTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVBeGlzTGFiZWwoZGF0YVR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQXhpc0xhYmVsKHR5cGUpIHtcbiAgICAvLyB4TGFiZWxcbiAgICBjb25zb2xlLmxvZyh0eXBlKTtcbiAgICBsZXQgbGFiZWw7XG4gICAgaWYgKHR5cGUgPT09ICdncmFwaFNvY2lhbFN1cHBvcnQnKSB7XG4gICAgICBsYWJlbCA9ICdTb2NpYWwgU3VwcG9ydCc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImdyYXBoRnJlZWRvbVwiKSB7XG4gICAgICBsYWJlbCA9ICdGcmVlZG9tJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZ3JhcGhHZW5lcm9zaXR5XCIpIHtcbiAgICAgIGxhYmVsID0gJ0dlbmVyb3NpdHknO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJncmFwaExpZmVFeHBlY3RhbmN5XCIpIHtcbiAgICAgIGxhYmVsID0gJ0xpZmUgRXhwZWN0YW5jeSc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZ3JhcGhHZHAnKSB7XG4gICAgICBsYWJlbCA9ICdHRFAgUGVyIENhcGl0YSAoJCknO1xuICAgIH1cbiAgICB0aGlzLmNoYXJ0LnNlbGVjdChcIi54LWF4aXMtbGFiZWxcIikudGV4dChgJHtsYWJlbH1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JsZEdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==