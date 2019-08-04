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
  // initialize data visualzation
  worldGraph = new _world_graph__WEBPACK_IMPORTED_MODULE_0__["default"]("svg.graph"); // button group event listener

  var btnGroup = document.querySelector(".btn-group");
  btnGroup.addEventListener("mousedown", function (e) {
    e.preventDefault();
    var currentBtn = e.target;
    var currentBtnType = currentBtn.classList[1];
    var currentBtnClass;

    if (currentBtnType === "header-graph__btn") {
      currentBtnClass = currentBtn.classList[0].split("-")[1];
    }

    if (currentBtnType === "header-graph__btn") {
      worldGraph.updateData(currentBtnClass);
      var allBtns = btnGroup.querySelectorAll("a");
      allBtns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      currentBtn.classList.add("active");
    }
  }); // modal actions

  var modalBg = document.querySelector('.modal-bg');
  modalBg.addEventListener('click', handleModalBgClick);
}); // modal close 

function handleModalBgClick(e) {
  e.stopPropagation();
  var modalBg = document.querySelector(".modal-bg");
  var modal = document.querySelector('.modal');

  if (e.target.classList[0] === "modal-bg" || e.target.classList[0] === "modal-close__btn-single") {
    modal.setAttribute("style", "opacity: 0; visibility: hidden");
    modalBg.setAttribute("style", "opacity: 0; visibility: hidden");
  }
}

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
    key: "formatOrdinal",
    value: function formatOrdinal(num) {
      var _int = parseInt(num),
          digits = [_int % 10, _int % 100],
          ordinals = ['st', 'nd', 'rd', 'th'],
          oPattern = [1, 2, 3, 4],
          tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];

      return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ? _int + ordinals[digits[0] - 1] : _int + ordinals[3];
    }
  }, {
    key: "circles",
    value: function circles(metric) {
      var _this2 = this;

      ////////////////////////
      // tooltip
      ////////////////////////
      var tooltip = d3.select("body").append("div").style("visibility", "hidden").attr("class", "tooltip").style("background-color", "black").style("border-radius", "5px").style("padding", "10px").style("color", "white").style("z-index", "999999999").style("position", "absolute").style("display", "block");
      var that = this;

      var showTooltip = function showTooltip(d) {
        tooltip.transition().duration(200);
        tooltip.style("visibility", "visible").html("\n  <strong>Country:</strong> ".concat(d.country, " (").concat(d.continent, ")<br/>\n  <strong>Happiness Ranking:</strong> ").concat(that.formatOrdinal(d.ranking), "\n")).style("top", d3.event.clientY - 100 + "px").style("left", d3.event.clientX - 160 + "px");
      };

      var moveTooltip = function moveTooltip(d) {
        showTooltip(d);
        tooltip.style("top", d3.event.clientY - 100 + "px").style("left", d3.event.clientX - 160 + "px");
      };

      var hideTooltip = function hideTooltip(d) {
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
      }).attr("width", 20).attr("height", 20).style("fill", function (d) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93b3JsZF9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDaGFydCIsInNlbGVjdG9yIiwib3B0aW9ucyIsInNldENoYXJ0Iiwic2V0TGFiZWxzIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIkhFSUdIVCIsIk1BUkdJTlMiLCJXSURUSCIsImNoYXJ0IiwiYXBwZW5kIiwiZGF0YSIsInRpY2tzIiwidGlja0Zvcm1hdCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4QXhpc0NhbGwiLCJheGlzQm90dG9tIiwiZm9ybWF0IiwiY2FsbCIsInlTY2FsZSIsInBhZGRpbmciLCJheGlzTGVmdCIsInhMYWJlbCIsInRleHQiLCJ5TGFiZWwiLCJBTklNQVRJT05fRFVSQVRJT04iLCJBTklNQVRJT05fREVMQVkiLCJBTklNQVRJT05fRUFTSU5HIiwiZWFzZVBvbHkiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3b3JsZEdyYXBoIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiV29ybGRHcmFwaCIsImJ0bkdyb3VwIiwicXVlcnlTZWxlY3RvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdG4iLCJ0YXJnZXQiLCJjdXJyZW50QnRuVHlwZSIsImNsYXNzTGlzdCIsImN1cnJlbnRCdG5DbGFzcyIsInNwbGl0IiwidXBkYXRlRGF0YSIsImFsbEJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsInJlbW92ZSIsImFkZCIsIm1vZGFsQmciLCJoYW5kbGVNb2RhbEJnQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJtb2RhbCIsInNldEF0dHJpYnV0ZSIsInhBeGlzIiwieUF4aXMiLCJnZXREYXRhIiwibWV0cmljIiwidGhhdCIsImpzb24iLCJ0aGVuIiwic2V0RGF0YSIsImNpcmNsZXMiLCJudW0iLCJpbnQiLCJwYXJzZUludCIsImRpZ2l0cyIsIm9yZGluYWxzIiwib1BhdHRlcm4iLCJ0UGF0dGVybiIsImluY2x1ZGVzIiwidG9vbHRpcCIsInN0eWxlIiwic2hvd1Rvb2x0aXAiLCJkIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaHRtbCIsImNvdW50cnkiLCJjb250aW5lbnQiLCJmb3JtYXRPcmRpbmFsIiwicmFua2luZyIsImV2ZW50IiwiY2xpZW50WSIsImNsaWVudFgiLCJtb3ZlVG9vbHRpcCIsImhpZGVUb29sdGlwIiwic2VsZWN0QWxsIiwiT2JqZWN0IiwidmFsdWVzIiwiZW50ZXIiLCJqb2luIiwib24iLCJkZWxheSIsImkiLCJlYXNlIiwicG9wdWxhdGlvbiIsImdyYXBoUmFua2luZyIsImNvbnRpbmVudHMiLCJBRlJJQ0EiLCJBU0lBIiwiTk9SVEhfQU1FUklDQSIsIlNPVVRIX0FNRVJJQ0EiLCJFVVJPUEUiLCJjb250aW5lbnRGb2N1c09uIiwiY29udGluZW50TmFtZSIsImNvbnRpbmVudEZvY3VzT2ZmIiwibGVnZW5kIiwiZGF0YVR5cGUiLCJ1cGRhdGVBeGlzTGFiZWwiLCJ0eXBlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNB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WUQ7OztvQ0FFZUUsSSxFQUFNO0FBQ3BCO0FBQ0EsVUFBSUMsS0FBSjs7QUFDQSxVQUFJRCxJQUFJLEtBQUssb0JBQWIsRUFBbUM7QUFDakNDLGFBQUssR0FBRyxnQkFBUjtBQUNELE9BRkQsTUFFTyxJQUFJRCxJQUFJLEtBQUssY0FBYixFQUE2QjtBQUNsQ0MsYUFBSyxHQUFHLFNBQVI7QUFDRCxPQUZNLE1BRUEsSUFBSUQsSUFBSSxLQUFLLGlCQUFiLEVBQWdDO0FBQ3JDQyxhQUFLLEdBQUcsWUFBUjtBQUNELE9BRk0sTUFFQSxJQUFJRCxJQUFJLEtBQUsscUJBQWIsRUFBb0M7QUFDekNDLGFBQUssR0FBRyxpQkFBUjtBQUNELE9BRk0sTUFFQSxJQUFJRCxJQUFJLEtBQUssVUFBYixFQUF5QjtBQUM5QkMsYUFBSyxHQUFHLG9CQUFSO0FBQ0Q7O0FBQ0QsV0FBSzdHLEtBQUwsQ0FBV0wsTUFBWCxDQUFrQixlQUFsQixFQUFtQ3NCLElBQW5DLFdBQTJDNEYsS0FBM0M7QUFDRDs7OztFQTVQc0IzSCw4Qzs7QUErUFYyQyx5RUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7XG4gIEhFSUdIVCxcbiAgTUFSR0lOUyxcbiAgV0lEVEgsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbiAgQU5JTUFUSU9OX0RFTEFZLFxuICBBTklNQVRJT05fRUFTSU5HXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXRMYWJlbHMoKTtcbiAgfVxuXG4gIHNldENoYXJ0KHNlbGVjdG9yLCBvcHRpb25zID0geyB0b3BPZmZzZXQ6IDAsIGxlZnRPZmZzZXQ6IDAgfSkge1xuICAgIC8vIGxldCBIRUlHSFQgPSB3aW5kb3cuY2xpZW50SGVpZ2h0O1xuICAgIC8vIGxldCBXSURUSCA9IHdpbmRvdy5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgLnNlbGVjdChzZWxlY3RvcilcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCArIE1BUkdJTlMgKiAyKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTlMgKiAyKTtcbiAgICAvLyAuYXR0cihcImhlaWdodFwiLCBIRUlHSFQgKyBNQVJHSU5TICogMilcbiAgICAvLyAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOUyAqIDIpO1xuICAgIC8vIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAvLyAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgOTYwIDUwMFwiKTtcbiAgICB0aGlzLmNoYXJ0ID0gc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgYHRyYW5zbGF0ZSgke01BUkdJTlMgKyBvcHRpb25zLmxlZnRPZmZzZXR9LCAke01BUkdJTlMgLyAyICtcbiAgICAgICAgICBvcHRpb25zLnRvcE9mZnNldH0pYFxuICAgICAgKTtcbiAgfVxuXG4gIHNldERhdGEoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICAvLyByZWRyYXcoc2VsZWN0b3IsIG9wdGlvbnMgPSB7IHRvcE9mZnNldDogMCwgbGVmdE9mZnNldDogMCB9KSB7XG4gIC8vICAgY29uc3Qgc3ZnID0gZDNcbiAgLy8gICAgIC5zZWxlY3Qoc2VsZWN0b3IpXG4gIC8vICAgICAuYXR0cihcImhlaWdodFwiLCBIRUlHSFQgKyBNQVJHSU5TICogMilcbiAgLy8gICAgIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggKyBNQVJHSU5TICogMik7XG4gIC8vICAgdGhpcy5jaGFydCA9IHN2Z1xuICAvLyAgICAgLmFwcGVuZChcImdcIilcbiAgLy8gICAgIC5hdHRyKFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiKVxuICAvLyAgICAgLmF0dHIoXG4gIC8vICAgICAgIFwidHJhbnNmb3JtXCIsXG4gIC8vICAgICAgIGB0cmFuc2xhdGUoJHtNQVJHSU5TICsgb3B0aW9ucy5sZWZ0T2Zmc2V0fSwgJHtNQVJHSU5TIC8gMiArXG4gIC8vICAgICAgICAgb3B0aW9ucy50b3BPZmZzZXR9KWBcbiAgLy8gICAgICk7XG4gIC8vIH1cblxuICB4QXhpcyh0aWNrcyA9IDIwLCB0aWNrRm9ybWF0ID0gKCkgPT4ge30pIHtcbiAgICB0aGlzLnhTY2FsZSA9IGQzXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCBXSURUSF0pXG4gICAgICAuZG9tYWluKFswLCAxXSk7XG4gICAgbGV0IHhBeGlzQ2FsbCA9IGQzXG4gICAgICAuYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSlcbiAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgIC50aWNrRm9ybWF0KGQzLmZvcm1hdChcIi4wJVwiKSk7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtIRUlHSFR9KWApXG4gICAgICAuY2FsbCh4QXhpc0NhbGwpO1xuICB9XG5cbiAgeUF4aXMoZG9tYWluLCB5U2NhbGUsIHRpY2tzID0gNSwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgaWYgKHlTY2FsZSA9PT0gXCJzY2FsZUJhbmRcIikge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgSEVJR0hUXSlcbiAgICAgICAgLnBhZGRpbmcoMC44KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgSEVJR0hUXSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydC5hcHBlbmQoXCJnXCIpLmNhbGwoXG4gICAgICBkM1xuICAgICAgICAuYXhpc0xlZnQodGhpcy55U2NhbGUpXG4gICAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgICAgLnRpY2tGb3JtYXQodGlja0Zvcm1hdCgpKVxuICAgICk7XG4gIH1cblxuICBzZXRMYWJlbHMoKSB7XG4gICAgLy8gTGFiZWxzXG4gICAgdmFyIHhMYWJlbCA9IHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpcy1sYWJlbFwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIEhFSUdIVCArIDUwKVxuICAgICAgLmF0dHIoXCJ4XCIsIFdJRFRIIC8gMilcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMThweFwiKVxuICAgICAgLmF0dHIoXCJmb250LXdlaWdodFwiLCBcIjYwMFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJHRFAgUGVyIENhcGl0YSAoJClcIik7XG4gICAgdmFyIHlMYWJlbCA9IHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieUF4aXNHcm91cFwiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgIC8vIC5hdHRyKFwicG9zaXRpb25cIiwgJ3JlbGF0aXZlJylcbiAgICAgIC5hdHRyKFwieFwiLCAtKEhFSUdIVCAvIDIpKVxuICAgICAgLmF0dHIoXCJ5XCIsIC01MClcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMThweFwiKVxuICAgICAgLmF0dHIoXCJmb250LXdlaWdodFwiLCBcIjYwMFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJIYXBwaW5lc3MgSW5kZXggKCUpXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIiwiZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDEwMDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0RFTEFZID0gMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fRUFTSU5HID0gZDMuZWFzZVBvbHk7XG4vLyBleHBvcnQgY29uc3QgQU5JTUFUSU9OX0VBU0lORyA9IGQzLmVhc2VFbGFzdGljO1xuXG5leHBvcnQgY29uc3QgV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDI1MDtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDA7XG4vLyBleHBvcnQgY29uc3QgV0lEVEggPSAxMTAwO1xuLy8gZXhwb3J0IGNvbnN0IEhFSUdIVCA9IDYwMDtcbmV4cG9ydCBjb25zdCBNQVJHSU5TID0gMTAwO1xuIiwiaW1wb3J0IFdvcmxkR3JhcGggZnJvbSBcIi4vd29ybGRfZ3JhcGhcIjtcblxubGV0IHdvcmxkR3JhcGg7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIGluaXRpYWxpemUgZGF0YSB2aXN1YWx6YXRpb25cbiAgd29ybGRHcmFwaCA9IG5ldyBXb3JsZEdyYXBoKFwic3ZnLmdyYXBoXCIpO1xuXG4gIC8vIGJ1dHRvbiBncm91cCBldmVudCBsaXN0ZW5lclxuICBsZXQgYnRuR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1ncm91cFwiKTtcbiAgYnRuR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGN1cnJlbnRCdG4gPSBlLnRhcmdldDtcbiAgICBsZXQgY3VycmVudEJ0blR5cGUgPSBjdXJyZW50QnRuLmNsYXNzTGlzdFsxXTtcbiAgICBsZXQgY3VycmVudEJ0bkNsYXNzO1xuICAgIGlmIChjdXJyZW50QnRuVHlwZSA9PT0gXCJoZWFkZXItZ3JhcGhfX2J0blwiKSB7XG4gICAgICBjdXJyZW50QnRuQ2xhc3MgPSBjdXJyZW50QnRuLmNsYXNzTGlzdFswXS5zcGxpdChcIi1cIilbMV07XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRCdG5UeXBlID09PSBcImhlYWRlci1ncmFwaF9fYnRuXCIpIHtcbiAgICAgIHdvcmxkR3JhcGgudXBkYXRlRGF0YShjdXJyZW50QnRuQ2xhc3MpO1xuICAgICAgbGV0IGFsbEJ0bnMgPSBidG5Hcm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcbiAgICAgIGFsbEJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgICAgY3VycmVudEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gbW9kYWwgYWN0aW9uc1xuICBjb25zdCBtb2RhbEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJnJyk7XG4gIG1vZGFsQmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNb2RhbEJnQ2xpY2spO1xufSk7XG5cbi8vIG1vZGFsIGNsb3NlIFxuZnVuY3Rpb24gaGFuZGxlTW9kYWxCZ0NsaWNrKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgbGV0IG1vZGFsQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICBpZiAoXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcIm1vZGFsLWJnXCIgfHxcbiAgICBlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwibW9kYWwtY2xvc2VfX2J0bi1zaW5nbGVcIiApIHtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm9wYWNpdHk6IDA7IHZpc2liaWxpdHk6IGhpZGRlblwiKTtcbiAgICBtb2RhbEJnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3BhY2l0eTogMDsgdmlzaWJpbGl0eTogaGlkZGVuXCIpO1xuICB9ICBcbn1cbiIsImltcG9ydCB7XG4gIFdJRFRILFxuICBIRUlHSFQsXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lORyxcbiAgQU5JTUFUSU9OX0RVUkFUSU9OXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vY2hhcnRcIjtcblxuY2xhc3MgV29ybGRHcmFwaCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3Qoc2VsZWN0b3IpO1xuICAgIHRoaXMueEF4aXMoKTtcbiAgICB0aGlzLnlBeGlzKFsxLCAwXSwgXCJzY2FsZUxpbmVhclwiLCAyMCwgKCkgPT4gZDMuZm9ybWF0KFwiLjAlXCIpKTtcbiAgICB0aGlzLmdldERhdGEoXCJncmFwaEdkcFwiKTtcbiAgfVxuXG4gIGdldERhdGEobWV0cmljKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGQzLmpzb24oXCJkaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIHRoYXQuc2V0RGF0YShkYXRhKTtcbiAgICAgIHRoYXQuY2lyY2xlcyhtZXRyaWMpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9ybWF0T3JkaW5hbChudW0pIHtcbiAgICBjb25zdCBpbnQgPSBwYXJzZUludChudW0pLFxuICAgICAgZGlnaXRzID0gW2ludCAlIDEwLCBpbnQgJSAxMDBdLFxuICAgICAgb3JkaW5hbHMgPSBbJ3N0JywgJ25kJywgJ3JkJywgJ3RoJ10sXG4gICAgICBvUGF0dGVybiA9IFsxLCAyLCAzLCA0XSxcbiAgICAgIHRQYXR0ZXJuID0gWzExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTldO1xuICAgIHJldHVybiBvUGF0dGVybi5pbmNsdWRlcyhkaWdpdHNbMF0pICYmICF0UGF0dGVybi5pbmNsdWRlcyhkaWdpdHNbMV0pXG4gICAgICA/IGludCArIG9yZGluYWxzW2RpZ2l0c1swXSAtIDFdXG4gICAgICA6IGludCArIG9yZGluYWxzWzNdO1xuICB9O1xuXG4gIGNpcmNsZXMobWV0cmljKSB7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gdG9vbHRpcFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGxldCB0b29sdGlwID0gZDNcbiAgICAgIC5zZWxlY3QoXCJib2R5XCIpXG4gICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4gICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjk5OTk5OTk5OVwiKVxuICAgICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBzaG93VG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDIwMCk7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgICAgIC5odG1sKFxuICAgICAgICAgIGBcbiAgPHN0cm9uZz5Db3VudHJ5Ojwvc3Ryb25nPiAke2QuY291bnRyeX0gKCR7ZC5jb250aW5lbnR9KTxici8+XG4gIDxzdHJvbmc+SGFwcGluZXNzIFJhbmtpbmc6PC9zdHJvbmc+ICR7dGhhdC5mb3JtYXRPcmRpbmFsKGQucmFua2luZyl9XG5gXG4gICAgICAgIClcbiAgICAgICAgLnN0eWxlKFwidG9wXCIsIGQzLmV2ZW50LmNsaWVudFkgLSAxMDAgKyBcInB4XCIpXG4gICAgICAgIC5zdHlsZShcImxlZnRcIiwgZDMuZXZlbnQuY2xpZW50WCAtIDE2MCArIFwicHhcIik7XG4gICAgfTtcblxuICAgIGxldCBtb3ZlVG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHNob3dUb29sdGlwKGQpO1xuICAgICAgdG9vbHRpcFxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5jbGllbnRYIC0gMTYwICsgXCJweFwiKTtcbiAgICB9O1xuXG4gICAgbGV0IGhpZGVUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgICAgdG9vbHRpcFxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIik7XG4gICAgfTtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBjaGFydCByZW5kZXJpbmdcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXG4gICAgICAgIFwiY2xhc3NcIixcbiAgICAgICAgZCA9PlxuICAgICAgICAgIGBjb3VudHJ5ICR7ZC5jbGFzc30gY29udGluZW50LSR7ZC5jb250aW5lbnRcbiAgICAgICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgICAgIC5qb2luKFwiLVwiKX0gY291bnRyeS1idWJibGVgXG4gICAgICApXG4gICAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBZnJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiM3Y2JkMWVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBc2lhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmYxZjVhXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiTm9ydGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzMwMzQ4MVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIlNvdXRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjViNDRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJFdXJvcGVcIikge1xuICAgICAgICAgIHJldHVybiBcIiMyZmM1Y2NcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBcIi43XCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNDRENEQ0RcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMnB4XCIpXG4gICAgICAuYXR0cihcImN4XCIsIGQgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy54U2NhbGUoZFttZXRyaWNdIC8gMTU2KSArIDI1O1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBzaG93VG9vbHRpcClcbiAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBtb3ZlVG9vbHRpcClcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgaGlkZVRvb2x0aXApXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZGVsYXkoKGQsIGkpID0+IGkgKiBBTklNQVRJT05fREVMQVkpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgLmVhc2UoQU5JTUFUSU9OX0VBU0lORylcbiAgICAgIC5hdHRyKFwiclwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQucG9wdWxhdGlvbiA+IDgwMDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAyNTAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiA1MDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAxMDAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiAxMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDE1MDAwMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnlTY2FsZShkLmdyYXBoUmFua2luZyAvIDE1Nik7XG4gICAgICB9KTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGxlZ2VuZFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGxldCBjb250aW5lbnRzID0ge1xuICAgICAgQUZSSUNBOiB7IGNvbnRpbmVudDogXCJBZnJpY2FcIiB9LFxuICAgICAgQVNJQTogeyBjb250aW5lbnQ6IFwiQXNpYVwiIH0sXG4gICAgICBOT1JUSF9BTUVSSUNBOiB7IGNvbnRpbmVudDogXCJOb3J0aCBBbWVyaWNhXCIgfSxcbiAgICAgIFNPVVRIX0FNRVJJQ0E6IHsgY29udGluZW50OiBcIlNvdXRoIEFtZXJpY2FcIiB9LFxuICAgICAgRVVST1BFOiB7IGNvbnRpbmVudDogXCJFdXJvcGVcIiB9XG4gICAgfTtcblxuICAgIGxldCBjb250aW5lbnRGb2N1c09uID0gY29udGluZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5zZWxlY3RBbGwoXG4gICAgICAgICAgYGNpcmNsZTpub3QoLmNvbnRpbmVudC0ke2NvbnRpbmVudE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfSlgXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiMC4wNVwiKTtcbiAgICB9O1xuXG4gICAgbGV0IGNvbnRpbmVudEZvY3VzT2ZmID0gY29udGluZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5zZWxlY3RBbGwoXG4gICAgICAgICAgYGNpcmNsZTpub3QoLmNvbnRpbmVudC0ke2NvbnRpbmVudE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfSlgXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiMC43XCIpO1xuICAgIH07XG5cbiAgICBsZXQgbGVnZW5kID0gdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdEFsbChcIi5sZWdlbmRcIilcbiAgICAgIC5kYXRhKE9iamVjdC52YWx1ZXMoY29udGluZW50cykpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsZWdlbmRcIilcbiAgICAgIC5hdHRyKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgLy8gLmF0dHIoXCJib3R0b21cIiwgMClcbiAgICAgIC8vIC5hdHRyKFwicmlnaHRcIiwgMCk7XG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7V0lEVEggLSAxMzB9LCAke0hFSUdIVCAtIDEyMH0pYCk7XG4gICAgICAvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDk3MCwgNDgwKWApO1xuXG4gICAgbGVnZW5kXG4gICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICByZXR1cm4gMjAgKiBpO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgMjApXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAyMClcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICBpZiAoZC5jb250aW5lbnQgPT09IFwiQWZyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjN2NiZDFlXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiQXNpYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmMWY1YVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIk5vcnRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiMzMDM0ODFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJTb3V0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmY1YjQ0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiRXVyb3BlXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMmZjNWNjXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiBjb250aW5lbnRGb2N1c09uKGQuY29udGluZW50KSlcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZCA9PiBjb250aW5lbnRGb2N1c09mZihkLmNvbnRpbmVudCkpO1xuXG4gICAgbGVnZW5kXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIDI1KVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpXG4gICAgICAuYXR0cihcImR5XCIsIFwiMWVtXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGxlZ2VuZC0ke2QuY29udGluZW50LnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX1gKVxuICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIDIwICogaTtcbiAgICAgIH0pXG4gICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLmNvbnRpbmVudDtcbiAgICAgIH0pXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjEycHhcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IGNvbnRpbmVudEZvY3VzT24oZC5jb250aW5lbnQpKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBkID0+IGNvbnRpbmVudEZvY3VzT2ZmKGQuY29udGluZW50KSk7XG5cbiAgICBsZWdlbmRcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInhcIiwgMzEpXG4gICAgICAuYXR0cihcImR5XCIsIFwiLS4yZW1cIilcbiAgICAgIC5hdHRyKFwieVwiLCAtMTApXG4gICAgICAudGV4dChcIkNvbnRpbmVudFwiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxN3B4XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwibGVmdFwiKTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YVR5cGUpIHtcbiAgICBkMy5qc29uKFwiZGlzdC9kYXRhL2NvdW50cmllcy5qc29uXCIpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5zZWxlY3RBbGwoXCIuY291bnRyeS1idWJibGVcIilcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkW2RhdGFUeXBlXSAvIDE1NikgKyAyNTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVBeGlzTGFiZWwoZGF0YVR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQXhpc0xhYmVsKHR5cGUpIHtcbiAgICAvLyB4TGFiZWxcbiAgICBsZXQgbGFiZWw7XG4gICAgaWYgKHR5cGUgPT09ICdncmFwaFNvY2lhbFN1cHBvcnQnKSB7XG4gICAgICBsYWJlbCA9ICdTb2NpYWwgU3VwcG9ydCc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImdyYXBoRnJlZWRvbVwiKSB7XG4gICAgICBsYWJlbCA9ICdGcmVlZG9tJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZ3JhcGhHZW5lcm9zaXR5XCIpIHtcbiAgICAgIGxhYmVsID0gJ0dlbmVyb3NpdHknO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJncmFwaExpZmVFeHBlY3RhbmN5XCIpIHtcbiAgICAgIGxhYmVsID0gJ0xpZmUgRXhwZWN0YW5jeSc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZ3JhcGhHZHAnKSB7XG4gICAgICBsYWJlbCA9ICdHRFAgUGVyIENhcGl0YSAoJCknO1xuICAgIH1cbiAgICB0aGlzLmNoYXJ0LnNlbGVjdChcIi54LWF4aXMtbGFiZWxcIikudGV4dChgJHtsYWJlbH1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JsZEdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==