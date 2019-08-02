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
    var currentBtnClass = currentBtn.classList[0].split("-")[1];
    console.log(currentBtnClass);
    worldGraph.updateData(currentBtnClass);
  });
});

window.onresize = function () {
  worldGraph.redraw("svg.graph");
  console.log('resized!');
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
      d3.json("/dist/data/countries.json").then(function (data) {
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

      d3.json("/dist/data/countries.json").then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93b3JsZF9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDaGFydCIsInNlbGVjdG9yIiwib3B0aW9ucyIsInNldENoYXJ0Iiwic2V0TGFiZWxzIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIkhFSUdIVCIsIk1BUkdJTlMiLCJXSURUSCIsImNoYXJ0IiwiYXBwZW5kIiwiZGF0YSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInRpY2tzIiwidGlja0Zvcm1hdCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4QXhpc0NhbGwiLCJheGlzQm90dG9tIiwiZm9ybWF0IiwiY2FsbCIsInlTY2FsZSIsInBhZGRpbmciLCJheGlzTGVmdCIsInhMYWJlbCIsInRleHQiLCJ5TGFiZWwiLCJBTklNQVRJT05fRFVSQVRJT04iLCJBTklNQVRJT05fREVMQVkiLCJBTklNQVRJT05fRUFTSU5HIiwiZWFzZVBvbHkiLCJ3b3JsZEdyYXBoIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiV29ybGRHcmFwaCIsImJ0bkdyb3VwIiwicXVlcnlTZWxlY3RvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdG4iLCJ0YXJnZXQiLCJjdXJyZW50QnRuQ2xhc3MiLCJjbGFzc0xpc3QiLCJzcGxpdCIsInVwZGF0ZURhdGEiLCJvbnJlc2l6ZSIsInJlZHJhdyIsInhBeGlzIiwieUF4aXMiLCJnZXREYXRhIiwibWV0cmljIiwidGhhdCIsImpzb24iLCJ0aGVuIiwic2V0RGF0YSIsImNpcmNsZXMiLCJ0b29sdGlwIiwic3R5bGUiLCJzaG93VG9vbHRpcCIsImQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJodG1sIiwiY291bnRyeSIsImNvbnRpbmVudCIsInJhbmtpbmciLCJldmVudCIsImNsaWVudFkiLCJjbGllbnRYIiwibW92ZVRvb2x0aXAiLCJoaWRlVG9vbHRpcCIsInNlbGVjdEFsbCIsIk9iamVjdCIsInZhbHVlcyIsImVudGVyIiwiam9pbiIsIm9uIiwiZGVsYXkiLCJpIiwiZWFzZSIsInBvcHVsYXRpb24iLCJncmFwaFJhbmtpbmciLCJjb250aW5lbnRzIiwiQUZSSUNBIiwiQVNJQSIsIk5PUlRIX0FNRVJJQ0EiLCJTT1VUSF9BTUVSSUNBIiwiRVVST1BFIiwiY29udGluZW50Rm9jdXNPbiIsImNvbnRpbmVudE5hbWUiLCJjb250aW5lbnRGb2N1c09mZiIsImxlZ2VuZCIsImRhdGFUeXBlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7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SSxDQUFDOUMsTUFBTCxDQUFZOEMsQ0FBQyxDQUFDaUMsUUFBRCxDQUFELEdBQWMsR0FBMUIsSUFBaUMsRUFBeEM7QUFDRCxTQVBILEVBRGdELENBUzlDOztBQUNILE9BVkQ7QUFXRDs7OztFQTVOc0J6Ryw4Qzs7QUErTlYrQyx5RUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7XG4gIEhFSUdIVCxcbiAgTUFSR0lOUyxcbiAgV0lEVEgsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbiAgQU5JTUFUSU9OX0RFTEFZLFxuICBBTklNQVRJT05fRUFTSU5HXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXRMYWJlbHMoKTtcbiAgfVxuXG4gIHNldENoYXJ0KHNlbGVjdG9yLCBvcHRpb25zID0geyB0b3BPZmZzZXQ6IDAsIGxlZnRPZmZzZXQ6IDAgfSkge1xuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KHNlbGVjdG9yKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOUyAqIDIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOUyAqIDIpO1xuICAgIHRoaXMuY2hhcnQgPSBzdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgYHRyYW5zbGF0ZSgke01BUkdJTlMgKyBvcHRpb25zLmxlZnRPZmZzZXR9LCAke01BUkdJTlMgLyAyICtcbiAgICAgICAgICBvcHRpb25zLnRvcE9mZnNldH0pYFxuICAgICAgKTtcbiAgfVxuXG4gIHNldERhdGEoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICByZWRyYXcoc2VsZWN0b3IpIHtcbiAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zb2xlLmxvZyhgbmV3IHdpZHRoOiAke3dpZHRofWApXG4gICAgbGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zb2xlLmxvZyhgbmV3IGhlaWdodDogJHtoZWlnaHR9YClcbiAgICBkMy5zZWxlY3Qoc2VsZWN0b3IpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aCArIE1BUkdJTlMgKiAyKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCArIE1BUkdJTlMgKiAyKTtcbiAgfVxuXG4gIHhBeGlzKHRpY2tzID0gMjAsIHRpY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIHRoaXMueFNjYWxlID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAsIFdJRFRIXSlcbiAgICAgIC5kb21haW4oWzAsIDFdKTtcbiAgICBsZXQgeEF4aXNDYWxsID0gZDNcbiAgICAgIC5heGlzQm90dG9tKHRoaXMueFNjYWxlKVxuICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgLnRpY2tGb3JtYXQoZDMuZm9ybWF0KFwiLjAlXCIpKTtcbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke0hFSUdIVH0pYClcbiAgICAgIC5jYWxsKHhBeGlzQ2FsbCk7XG4gIH1cblxuICB5QXhpcyhkb21haW4sIHlTY2FsZSwgdGlja3MgPSA1LCB0aWNrRm9ybWF0ID0gKCkgPT4ge30pIHtcbiAgICBpZiAoeVNjYWxlID09PSBcInNjYWxlQmFuZFwiKSB7XG4gICAgICB0aGlzLnlTY2FsZSA9IGQzW3lTY2FsZV0oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKFswLCBIRUlHSFRdKVxuICAgICAgICAucGFkZGluZygwLjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnlTY2FsZSA9IGQzW3lTY2FsZV0oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKFswLCBIRUlHSFRdKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0LmFwcGVuZChcImdcIikuY2FsbChcbiAgICAgIGQzXG4gICAgICAgIC5heGlzTGVmdCh0aGlzLnlTY2FsZSlcbiAgICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgICAudGlja0Zvcm1hdCh0aWNrRm9ybWF0KCkpXG4gICAgKTtcbiAgfVxuXG4gIHNldExhYmVscygpIHtcbiAgICAvLyBMYWJlbHNcbiAgICB2YXIgeExhYmVsID0gdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInlcIiwgSEVJR0hUICsgNTApXG4gICAgICAuYXR0cihcInhcIiwgV0lEVEggLyAyKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMHB4XCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkdEUCBQZXIgQ2FwaXRhICgkKVwiKTtcbiAgICB2YXIgeUxhYmVsID0gdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAuYXR0cihcInlcIiwgLTY1KVxuICAgICAgLmF0dHIoXCJ4XCIsIC0zMDApXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIwcHhcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC50ZXh0KFwiSGFwcGluZXNzIEluZGV4ICglKVwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiIsImV4cG9ydCBjb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9ERUxBWSA9IDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0VBU0lORyA9IGQzLmVhc2VQb2x5O1xuLy8gZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9FQVNJTkcgPSBkMy5lYXNlRWxhc3RpYztcblxuZXhwb3J0IGNvbnN0IFdJRFRIID0gMTAwMDtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSA2MDA7XG5leHBvcnQgY29uc3QgTUFSR0lOUyA9IDEwMDtcbiIsImltcG9ydCBXb3JsZEdyYXBoIGZyb20gXCIuL3dvcmxkX2dyYXBoXCI7XG5cblxubGV0IHdvcmxkR3JhcGg7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHdvcmxkR3JhcGggPSBuZXcgV29ybGRHcmFwaChcInN2Zy5ncmFwaFwiKTtcblxuICBsZXQgYnRuR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1ncm91cFwiKTtcbiAgYnRuR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGN1cnJlbnRCdG4gPSBlLnRhcmdldDtcbiAgICBsZXQgY3VycmVudEJ0bkNsYXNzID0gY3VycmVudEJ0bi5jbGFzc0xpc3RbMF0uc3BsaXQoXCItXCIpWzFdO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRCdG5DbGFzcyk7XG4gICAgd29ybGRHcmFwaC51cGRhdGVEYXRhKGN1cnJlbnRCdG5DbGFzcyk7XG4gIH0pO1xufSk7XG5cbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgd29ybGRHcmFwaC5yZWRyYXcoXCJzdmcuZ3JhcGhcIik7XG4gIGNvbnNvbGUubG9nKCdyZXNpemVkIScpO1xufTsiLCJpbXBvcnQge1xuICBXSURUSCxcbiAgSEVJR0hULFxuICBBTklNQVRJT05fREVMQVksXG4gIEFOSU1BVElPTl9FQVNJTkcsXG4gIEFOSU1BVElPTl9EVVJBVElPTlxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IENoYXJ0IGZyb20gXCIuL2NoYXJ0XCI7XG5cbmNsYXNzIFdvcmxkR3JhcGggZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHNlbGVjdG9yKTtcbiAgICB0aGlzLnhBeGlzKCk7XG4gICAgdGhpcy55QXhpcyhbMSwgMF0sIFwic2NhbGVMaW5lYXJcIiwgMjAsICgpID0+IGQzLmZvcm1hdChcIi4wJVwiKSk7XG4gICAgdGhpcy5nZXREYXRhKFwiZ3JhcGhHZHBcIik7XG4gIH1cblxuICBnZXREYXRhKG1ldHJpYykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBkMy5qc29uKFwiL2Rpc3QvZGF0YS9jb3VudHJpZXMuanNvblwiKS50aGVuKGRhdGEgPT4ge1xuICAgICAgdGhhdC5zZXREYXRhKGRhdGEpO1xuICAgICAgdGhhdC5jaXJjbGVzKG1ldHJpYyk7XG4gICAgfSk7XG4gIH1cblxuICBjaXJjbGVzKG1ldHJpYykge1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIHRvb2x0aXBcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBsZXQgdG9vbHRpcCA9IGQzXG4gICAgICAuc2VsZWN0KFwiYm9keVwiKVxuICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRvb2x0aXBcIilcbiAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjVweFwiKVxuICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBcIjEwcHhcIilcbiAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgIC5zdHlsZShcInotaW5kZXhcIiwgXCI5OTk5OTk5OTlcIilcbiAgICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblxuICAgIGxldCBzaG93VG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDIwMCk7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgICAgIC5odG1sKFxuICAgICAgICAgIGBcbiAgPHN0cm9uZz5Db3VudHJ5Ojwvc3Ryb25nPiAke2QuY291bnRyeX0gKCR7ZC5jb250aW5lbnR9KTxici8+XG4gIDxzdHJvbmc+SGFwcGluZXNzIFJhbmtpbmc6PC9zdHJvbmc+ICR7ZC5yYW5raW5nfVxuYFxuICAgICAgICApXG4gICAgICAgIC5zdHlsZShcInRvcFwiLCBkMy5ldmVudC5jbGllbnRZIC0gMTAwICsgXCJweFwiKVxuICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIGQzLmV2ZW50LmNsaWVudFggLSAxNjAgKyBcInB4XCIpO1xuICAgIH07XG5cbiAgICBsZXQgbW92ZVRvb2x0aXAgPSBmdW5jdGlvbihkKSB7XG4gICAgICBzaG93VG9vbHRpcChkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibW92ZSB0b29sdGlwXCIpO1xuICAgICAgdG9vbHRpcFxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5jbGllbnRYIC0gMTYwICsgXCJweFwiKTtcbiAgICB9O1xuXG4gICAgbGV0IGhpZGVUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgICAgY29uc29sZS5sb2coXCJoaWRlIHRvb2x0aXBcIik7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKTtcbiAgICB9O1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGNoYXJ0IHJlbmRlcmluZ1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoXCJjaXJjbGVcIilcbiAgICAgIC5kYXRhKE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJjbGFzc1wiLFxuICAgICAgICBkID0+XG4gICAgICAgICAgYGNvdW50cnkgJHtkLmNsYXNzfSBjb250aW5lbnQtJHtkLmNvbnRpbmVudFxuICAgICAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgLmpvaW4oXCItXCIpfSBjb3VudHJ5LWJ1YmJsZWBcbiAgICAgIClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQuY29udGluZW50ID09PSBcIkFmcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzdjYmQxZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkFzaWFcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjFmNWFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJOb3J0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMzAzNDgxXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiU291dGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmNWI0NFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkV1cm9wZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzJmYzVjY1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiLjdcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI0NEQ0RDRFwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkW21ldHJpY10gLyAxNTYpICsgMjU7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIHNob3dUb29sdGlwKVxuICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIG1vdmVUb29sdGlwKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBoaWRlVG9vbHRpcClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kZWxheSgoZCwgaSkgPT4gaSAqIEFOSU1BVElPTl9ERUxBWSlcbiAgICAgIC5kdXJhdGlvbihBTklNQVRJT05fRFVSQVRJT04pXG4gICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgLmF0dHIoXCJyXCIsIGQgPT4ge1xuICAgICAgICBpZiAoZC5wb3B1bGF0aW9uID4gODAwMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDI1MDAwMDAwO1xuICAgICAgICB9IGVsc2UgaWYgKGQucG9wdWxhdGlvbiA+IDUwMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDAwO1xuICAgICAgICB9IGVsc2UgaWYgKGQucG9wdWxhdGlvbiA+IDEwMDAwMDApIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTUwMDAwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTAwMDAwO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMueVNjYWxlKGQuZ3JhcGhSYW5raW5nIC8gMTU2KTtcbiAgICAgIH0pO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gbGVnZW5kXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IGNvbnRpbmVudHMgPSB7XG4gICAgICBBRlJJQ0E6IHsgY29udGluZW50OiBcIkFmcmljYVwiIH0sXG4gICAgICBBU0lBOiB7IGNvbnRpbmVudDogXCJBc2lhXCIgfSxcbiAgICAgIE5PUlRIX0FNRVJJQ0E6IHsgY29udGluZW50OiBcIk5vcnRoIEFtZXJpY2FcIiB9LFxuICAgICAgU09VVEhfQU1FUklDQTogeyBjb250aW5lbnQ6IFwiU291dGggQW1lcmljYVwiIH0sXG4gICAgICBFVVJPUEU6IHsgY29udGluZW50OiBcIkV1cm9wZVwiIH1cbiAgICB9O1xuXG4gICAgbGV0IGNvbnRpbmVudEZvY3VzT24gPSBjb250aW5lbnROYW1lID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcbiAgICAgICAgICBgY2lyY2xlOm5vdCguY29udGluZW50LSR7Y29udGluZW50TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9KWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjA1XCIpO1xuICAgIH07XG5cbiAgICBsZXQgY29udGluZW50Rm9jdXNPZmYgPSBjb250aW5lbnROYW1lID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcbiAgICAgICAgICBgY2lyY2xlOm5vdCguY29udGluZW50LSR7Y29udGluZW50TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9KWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjdcIik7XG4gICAgfTtcblxuICAgIGxldCBsZWdlbmQgPSB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLmxlZ2VuZFwiKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyhjb250aW5lbnRzKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxlZ2VuZFwiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyA4NzAgKyBcIixcIiArIDQ4MCArIFwiKVwiKTtcblxuICAgIGxlZ2VuZFxuICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIDIwICogaTtcbiAgICAgIH0pXG4gICAgICAuYXR0cihcIndpZHRoXCIsIDE1KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMTUpXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgaWYgKGQuY29udGluZW50ID09PSBcIkFmcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzdjYmQxZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkFzaWFcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjFmNWFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJOb3J0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMzAzNDgxXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiU291dGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmNWI0NFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkV1cm9wZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzJmYzVjY1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4gY29udGluZW50Rm9jdXNPbihkLmNvbnRpbmVudCkpXG4gICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGQgPT4gY29udGluZW50Rm9jdXNPZmYoZC5jb250aW5lbnQpKTtcblxuICAgIGxlZ2VuZFxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieFwiLCAyNSlcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKVxuICAgICAgLmF0dHIoXCJkeVwiLCBcIjFlbVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBsZWdlbmQtJHtkLmNvbnRpbmVudC5zcGxpdChcIiBcIikuam9pbihcIi1cIil9YClcbiAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIHJldHVybiAyMCAqIGk7XG4gICAgICB9KVxuICAgICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5jb250aW5lbnQ7XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxMnB4XCIpXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiBjb250aW5lbnRGb2N1c09uKGQuY29udGluZW50KSlcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZCA9PiBjb250aW5lbnRGb2N1c09mZihkLmNvbnRpbmVudCkpO1xuXG4gICAgbGVnZW5kXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIDMxKVxuICAgICAgLmF0dHIoXCJkeVwiLCBcIi0uMmVtXCIpXG4gICAgICAuYXR0cihcInlcIiwgLTEwKVxuICAgICAgLnRleHQoXCJDb250aW5lbnRcIilcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMTdweFwiKVxuICAgICAgLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImxlZnRcIik7XG4gIH1cblxuICB1cGRhdGVEYXRhKGRhdGFUeXBlKSB7XG4gICAgZDMuanNvbihcIi9kaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcIi5jb3VudHJ5LWJ1YmJsZVwiKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgIC5lYXNlKEFOSU1BVElPTl9FQVNJTkcpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMueFNjYWxlKGRbZGF0YVR5cGVdIC8gMTU2KSArIDI1O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gLmRlbGF5KChkLCBpKSA9PiBpICogQU5JTUFUSU9OX0RFTEFZKVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmxkR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9