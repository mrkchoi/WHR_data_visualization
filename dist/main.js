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
      this.chart = svg.append("g").attr("position", "relative").attr("class", "main__svg").attr("transform", "translate(".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] + options.leftOffset, ", ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] / 2 + options.topOffset, ")"));
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
      // cursor position lines
      ////////////////////////
      // var vertical = d3.select('.graph')
      //   .append("line")
      //   .attr("class", "vertical")
      //   .style("stroke", "black")
      //   .style("position", "relative")
      //   .style("z-index", "-10");
      // var horizontal = d3.select('.graph')
      //   .append("line")
      //   .attr("class", "horizontal")
      //   .style("stroke", "black")
      //   .style("position", "relative")
      //   .style("z-index", "-10");
      // this.chart
      //   // .selectAll("circle")
      //   .on("mousemove", function() {
      //     let mouse = d3.mouse(this);
      //     let mouseX = mouse[0];
      //     let mouseY = mouse[1];
      //     vertical
      //       .attr("x1", `${mouseX + MARGINS - 5}px`)
      //       .attr("x2", `${mouseX + MARGINS - 5}px`)
      //       .attr("y1", `${HEIGHT + (MARGINS / 2) + 2}px`)
      //       .attr("y2", `${mouseY + (MARGINS / 2) + 2}px`);
      //     horizontal
      //       .attr("y1", `${mouseY + (MARGINS / 2) + 2}px`)
      //       .attr("y2", `${mouseY + (MARGINS / 2) + 2}px`)
      //       .attr("x1", `${0 + MARGINS - 5}px`)
      //       .attr("x2", `${mouseX + MARGINS - 5}px`);
      //   })
      //   .on("mouseover", function() {
      //     let mouse = d3.mouse(this);
      //     let mouseX = mouse[0];
      //     let mouseY = mouse[1];
      //     vertical
      //       .attr("x1", `${mouseX + MARGINS - 5}px`)
      //       .attr("x2", `${mouseX + MARGINS - 5}px`)
      //       .attr("y1", `${HEIGHT + MARGINS / 2 + 2}px`)
      //       .attr("y2", `${mouseY + MARGINS / 2 + 2}px`);
      //     horizontal
      //       .attr("y1", `${mouseY + MARGINS / 2 + 2}px`)
      //       .attr("y2", `${mouseY + MARGINS / 2 + 2}px`)
      //       .attr("x1", `${0 + MARGINS - 5}px`)
      //       .attr("x2", `${mouseX + MARGINS - 5}px`);
      //   });
      ////////////////////////
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93b3JsZF9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDaGFydCIsInNlbGVjdG9yIiwib3B0aW9ucyIsInNldENoYXJ0Iiwic2V0TGFiZWxzIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIkhFSUdIVCIsIk1BUkdJTlMiLCJXSURUSCIsImNoYXJ0IiwiYXBwZW5kIiwiZGF0YSIsInRpY2tzIiwidGlja0Zvcm1hdCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4QXhpc0NhbGwiLCJheGlzQm90dG9tIiwiZm9ybWF0IiwiY2FsbCIsInlTY2FsZSIsInBhZGRpbmciLCJheGlzTGVmdCIsInhMYWJlbCIsInRleHQiLCJ5TGFiZWwiLCJBTklNQVRJT05fRFVSQVRJT04iLCJBTklNQVRJT05fREVMQVkiLCJBTklNQVRJT05fRUFTSU5HIiwiZWFzZVBvbHkiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3b3JsZEdyYXBoIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiV29ybGRHcmFwaCIsImJ0bkdyb3VwIiwicXVlcnlTZWxlY3RvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdG4iLCJ0YXJnZXQiLCJjdXJyZW50QnRuVHlwZSIsImNsYXNzTGlzdCIsImN1cnJlbnRCdG5DbGFzcyIsInNwbGl0IiwidXBkYXRlRGF0YSIsImFsbEJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsInJlbW92ZSIsImFkZCIsIm1vZGFsQmciLCJoYW5kbGVNb2RhbEJnQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJtb2RhbCIsInNldEF0dHJpYnV0ZSIsInhBeGlzIiwieUF4aXMiLCJnZXREYXRhIiwibWV0cmljIiwidGhhdCIsImpzb24iLCJ0aGVuIiwic2V0RGF0YSIsImNpcmNsZXMiLCJudW0iLCJpbnQiLCJwYXJzZUludCIsImRpZ2l0cyIsIm9yZGluYWxzIiwib1BhdHRlcm4iLCJ0UGF0dGVybiIsImluY2x1ZGVzIiwidG9vbHRpcCIsInN0eWxlIiwic2hvd1Rvb2x0aXAiLCJkIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaHRtbCIsImNvdW50cnkiLCJjb250aW5lbnQiLCJmb3JtYXRPcmRpbmFsIiwicmFua2luZyIsImV2ZW50IiwiY2xpZW50WSIsImNsaWVudFgiLCJtb3ZlVG9vbHRpcCIsImhpZGVUb29sdGlwIiwic2VsZWN0QWxsIiwiT2JqZWN0IiwidmFsdWVzIiwiZW50ZXIiLCJqb2luIiwib24iLCJkZWxheSIsImkiLCJlYXNlIiwicG9wdWxhdGlvbiIsImdyYXBoUmFua2luZyIsImNvbnRpbmVudHMiLCJBRlJJQ0EiLCJBU0lBIiwiTk9SVEhfQU1FUklDQSIsIlNPVVRIX0FNRVJJQ0EiLCJFVVJPUEUiLCJjb250aW5lbnRGb2N1c09uIiwiY29udGluZW50TmFtZSIsImNvbnRpbmVudEZvY3VzT2ZmIiwibGVnZW5kIiwiZGF0YVR5cGUiLCJ1cGRhdGVBeGlzTGFiZWwiLCJ0eXBlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNB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LEdBR0dDLFFBSEgsQ0FHWSxHQUhaLEVBSUdtQixJQUpILENBSVF4RSwyREFKUixFQUtHekIsSUFMSCxDQUtRLElBTFIsRUFLYyxVQUFBNEUsQ0FBQyxFQUFJO0FBQ2YsaUJBQU8sTUFBSSxDQUFDbkUsTUFBTCxDQUFZbUUsQ0FBQyxDQUFDa0MsUUFBRCxDQUFELEdBQWMsR0FBMUIsSUFBaUMsRUFBeEM7QUFDRCxTQVBIOztBQVNFLGNBQUksQ0FBQ0MsZUFBTCxDQUFxQkQsUUFBckI7QUFDSCxPQVhEO0FBWUQ7OztvQ0FFZUUsSSxFQUFNO0FBQ3BCO0FBQ0EsVUFBSUMsS0FBSjs7QUFDQSxVQUFJRCxJQUFJLEtBQUssb0JBQWIsRUFBbUM7QUFDakNDLGFBQUssR0FBRyxnQkFBUjtBQUNELE9BRkQsTUFFTyxJQUFJRCxJQUFJLEtBQUssY0FBYixFQUE2QjtBQUNsQ0MsYUFBSyxHQUFHLFNBQVI7QUFDRCxPQUZNLE1BRUEsSUFBSUQsSUFBSSxLQUFLLGlCQUFiLEVBQWdDO0FBQ3JDQyxhQUFLLEdBQUcsWUFBUjtBQUNELE9BRk0sTUFFQSxJQUFJRCxJQUFJLEtBQUsscUJBQWIsRUFBb0M7QUFDekNDLGFBQUssR0FBRyxpQkFBUjtBQUNELE9BRk0sTUFFQSxJQUFJRCxJQUFJLEtBQUssVUFBYixFQUF5QjtBQUM5QkMsYUFBSyxHQUFHLG9CQUFSO0FBQ0Q7O0FBQ0QsV0FBSzdHLEtBQUwsQ0FBV0wsTUFBWCxDQUFrQixlQUFsQixFQUFtQ3NCLElBQW5DLFdBQTJDNEYsS0FBM0M7QUFDRDs7OztFQWhUc0IzSCw4Qzs7QUFtVFYyQyx5RUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7XG4gIEhFSUdIVCxcbiAgTUFSR0lOUyxcbiAgV0lEVEgsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbiAgQU5JTUFUSU9OX0RFTEFZLFxuICBBTklNQVRJT05fRUFTSU5HXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXRMYWJlbHMoKTtcbiAgfVxuXG4gIHNldENoYXJ0KHNlbGVjdG9yLCBvcHRpb25zID0geyB0b3BPZmZzZXQ6IDAsIGxlZnRPZmZzZXQ6IDAgfSkge1xuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KHNlbGVjdG9yKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOUyAqIDIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOUyAqIDIpO1xuICAgIHRoaXMuY2hhcnQgPSBzdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtYWluX19zdmdcIilcbiAgICAgIC5hdHRyKFxuICAgICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgICBgdHJhbnNsYXRlKCR7TUFSR0lOUyArIG9wdGlvbnMubGVmdE9mZnNldH0sICR7TUFSR0lOUyAvIDIgK1xuICAgICAgICAgIG9wdGlvbnMudG9wT2Zmc2V0fSlgXG4gICAgICApO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIC8vIHJlZHJhdyhzZWxlY3Rvciwgb3B0aW9ucyA9IHsgdG9wT2Zmc2V0OiAwLCBsZWZ0T2Zmc2V0OiAwIH0pIHtcbiAgLy8gICBjb25zdCBzdmcgPSBkM1xuICAvLyAgICAgLnNlbGVjdChzZWxlY3RvcilcbiAgLy8gICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCArIE1BUkdJTlMgKiAyKVxuICAvLyAgICAgLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTlMgKiAyKTtcbiAgLy8gICB0aGlzLmNoYXJ0ID0gc3ZnXG4gIC8vICAgICAuYXBwZW5kKFwiZ1wiKVxuICAvLyAgICAgLmF0dHIoXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlXCIpXG4gIC8vICAgICAuYXR0cihcbiAgLy8gICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgLy8gICAgICAgYHRyYW5zbGF0ZSgke01BUkdJTlMgKyBvcHRpb25zLmxlZnRPZmZzZXR9LCAke01BUkdJTlMgLyAyICtcbiAgLy8gICAgICAgICBvcHRpb25zLnRvcE9mZnNldH0pYFxuICAvLyAgICAgKTtcbiAgLy8gfVxuXG4gIHhBeGlzKHRpY2tzID0gMjAsIHRpY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIHRoaXMueFNjYWxlID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAsIFdJRFRIXSlcbiAgICAgIC5kb21haW4oWzAsIDFdKTtcbiAgICBsZXQgeEF4aXNDYWxsID0gZDNcbiAgICAgIC5heGlzQm90dG9tKHRoaXMueFNjYWxlKVxuICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgLnRpY2tGb3JtYXQoZDMuZm9ybWF0KFwiLjAlXCIpKTtcbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke0hFSUdIVH0pYClcbiAgICAgIC5jYWxsKHhBeGlzQ2FsbCk7XG4gIH1cblxuICB5QXhpcyhkb21haW4sIHlTY2FsZSwgdGlja3MgPSA1LCB0aWNrRm9ybWF0ID0gKCkgPT4ge30pIHtcbiAgICBpZiAoeVNjYWxlID09PSBcInNjYWxlQmFuZFwiKSB7XG4gICAgICB0aGlzLnlTY2FsZSA9IGQzW3lTY2FsZV0oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKFswLCBIRUlHSFRdKVxuICAgICAgICAucGFkZGluZygwLjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnlTY2FsZSA9IGQzW3lTY2FsZV0oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKFswLCBIRUlHSFRdKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0LmFwcGVuZChcImdcIikuY2FsbChcbiAgICAgIGQzXG4gICAgICAgIC5heGlzTGVmdCh0aGlzLnlTY2FsZSlcbiAgICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgICAudGlja0Zvcm1hdCh0aWNrRm9ybWF0KCkpXG4gICAgKTtcbiAgfVxuXG4gIHNldExhYmVscygpIHtcbiAgICAvLyBMYWJlbHNcbiAgICB2YXIgeExhYmVsID0gdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieC1heGlzLWxhYmVsXCIpXG4gICAgICAuYXR0cihcInlcIiwgSEVJR0hUICsgNTApXG4gICAgICAuYXR0cihcInhcIiwgV0lEVEggLyAyKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxOHB4XCIpXG4gICAgICAuYXR0cihcImZvbnQtd2VpZ2h0XCIsIFwiNjAwXCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkdEUCBQZXIgQ2FwaXRhICgkKVwiKTtcbiAgICB2YXIgeUxhYmVsID0gdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc0dyb3VwXCIpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgLy8gLmF0dHIoXCJwb3NpdGlvblwiLCAncmVsYXRpdmUnKVxuICAgICAgLmF0dHIoXCJ4XCIsIC0oSEVJR0hUIC8gMikpXG4gICAgICAuYXR0cihcInlcIiwgLTUwKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxOHB4XCIpXG4gICAgICAuYXR0cihcImZvbnQtd2VpZ2h0XCIsIFwiNjAwXCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkhhcHBpbmVzcyBJbmRleCAoJSlcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iLCJleHBvcnQgY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMTAwMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fREVMQVkgPSAwO1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9FQVNJTkcgPSBkMy5lYXNlUG9seTtcbi8vIGV4cG9ydCBjb25zdCBBTklNQVRJT05fRUFTSU5HID0gZDMuZWFzZUVsYXN0aWM7XG5cbmV4cG9ydCBjb25zdCBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMjUwO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMDtcbi8vIGV4cG9ydCBjb25zdCBXSURUSCA9IDExMDA7XG4vLyBleHBvcnQgY29uc3QgSEVJR0hUID0gNjAwO1xuZXhwb3J0IGNvbnN0IE1BUkdJTlMgPSAxMDA7XG4iLCJpbXBvcnQgV29ybGRHcmFwaCBmcm9tIFwiLi93b3JsZF9ncmFwaFwiO1xuXG5sZXQgd29ybGRHcmFwaDtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy8gaW5pdGlhbGl6ZSBkYXRhIHZpc3VhbHphdGlvblxuICB3b3JsZEdyYXBoID0gbmV3IFdvcmxkR3JhcGgoXCJzdmcuZ3JhcGhcIik7XG5cbiAgLy8gYnV0dG9uIGdyb3VwIGV2ZW50IGxpc3RlbmVyXG4gIGxldCBidG5Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWdyb3VwXCIpO1xuICBidG5Hcm91cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY3VycmVudEJ0biA9IGUudGFyZ2V0O1xuICAgIGxldCBjdXJyZW50QnRuVHlwZSA9IGN1cnJlbnRCdG4uY2xhc3NMaXN0WzFdO1xuICAgIGxldCBjdXJyZW50QnRuQ2xhc3M7XG4gICAgaWYgKGN1cnJlbnRCdG5UeXBlID09PSBcImhlYWRlci1ncmFwaF9fYnRuXCIpIHtcbiAgICAgIGN1cnJlbnRCdG5DbGFzcyA9IGN1cnJlbnRCdG4uY2xhc3NMaXN0WzBdLnNwbGl0KFwiLVwiKVsxXTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEJ0blR5cGUgPT09IFwiaGVhZGVyLWdyYXBoX19idG5cIikge1xuICAgICAgd29ybGRHcmFwaC51cGRhdGVEYXRhKGN1cnJlbnRCdG5DbGFzcyk7XG4gICAgICBsZXQgYWxsQnRucyA9IGJ0bkdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuICAgICAgYWxsQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgICBjdXJyZW50QnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICAvLyBtb2RhbCBhY3Rpb25zXG4gIGNvbnN0IG1vZGFsQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYmcnKTtcbiAgbW9kYWxCZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1vZGFsQmdDbGljayk7XG59KTtcblxuLy8gbW9kYWwgY2xvc2UgXG5mdW5jdGlvbiBoYW5kbGVNb2RhbEJnQ2xpY2soZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBsZXQgbW9kYWxCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG4gIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gIGlmIChcbiAgICBlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwibW9kYWwtYmdcIiB8fFxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJtb2RhbC1jbG9zZV9fYnRuLXNpbmdsZVwiICkge1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3BhY2l0eTogMDsgdmlzaWJpbGl0eTogaGlkZGVuXCIpO1xuICAgIG1vZGFsQmcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvcGFjaXR5OiAwOyB2aXNpYmlsaXR5OiBoaWRkZW5cIik7XG4gIH0gIFxufVxuIiwiaW1wb3J0IHtcbiAgV0lEVEgsXG4gIEhFSUdIVCxcbiAgTUFSR0lOUyxcbiAgQU5JTUFUSU9OX0RFTEFZLFxuICBBTklNQVRJT05fRUFTSU5HLFxuICBBTklNQVRJT05fRFVSQVRJT05cbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmltcG9ydCBDaGFydCBmcm9tIFwiLi9jaGFydFwiO1xuXG5jbGFzcyBXb3JsZEdyYXBoIGV4dGVuZHMgQ2hhcnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdChzZWxlY3Rvcik7XG4gICAgdGhpcy54QXhpcygpO1xuICAgIHRoaXMueUF4aXMoWzEsIDBdLCBcInNjYWxlTGluZWFyXCIsIDIwLCAoKSA9PiBkMy5mb3JtYXQoXCIuMCVcIikpO1xuICAgIHRoaXMuZ2V0RGF0YShcImdyYXBoR2RwXCIpO1xuICB9XG5cbiAgZ2V0RGF0YShtZXRyaWMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgZDMuanNvbihcImRpc3QvZGF0YS9jb3VudHJpZXMuanNvblwiKS50aGVuKGRhdGEgPT4ge1xuICAgICAgdGhhdC5zZXREYXRhKGRhdGEpO1xuICAgICAgdGhhdC5jaXJjbGVzKG1ldHJpYyk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JtYXRPcmRpbmFsKG51bSkge1xuICAgIGNvbnN0IGludCA9IHBhcnNlSW50KG51bSksXG4gICAgICBkaWdpdHMgPSBbaW50ICUgMTAsIGludCAlIDEwMF0sXG4gICAgICBvcmRpbmFscyA9IFsnc3QnLCAnbmQnLCAncmQnLCAndGgnXSxcbiAgICAgIG9QYXR0ZXJuID0gWzEsIDIsIDMsIDRdLFxuICAgICAgdFBhdHRlcm4gPSBbMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOV07XG4gICAgcmV0dXJuIG9QYXR0ZXJuLmluY2x1ZGVzKGRpZ2l0c1swXSkgJiYgIXRQYXR0ZXJuLmluY2x1ZGVzKGRpZ2l0c1sxXSlcbiAgICAgID8gaW50ICsgb3JkaW5hbHNbZGlnaXRzWzBdIC0gMV1cbiAgICAgIDogaW50ICsgb3JkaW5hbHNbM107XG4gIH07XG5cbiAgY2lyY2xlcyhtZXRyaWMpIHtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyB0b29sdGlwXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IHRvb2x0aXAgPSBkM1xuICAgICAgLnNlbGVjdChcImJvZHlcIilcbiAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0b29sdGlwXCIpXG4gICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmxhY2tcIilcbiAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCI1cHhcIilcbiAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxMHB4XCIpXG4gICAgICAuc3R5bGUoXCJjb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAuc3R5bGUoXCJ6LWluZGV4XCIsIFwiOTk5OTk5OTk5XCIpXG4gICAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAuc3R5bGUoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHNob3dUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKCkuZHVyYXRpb24oMjAwKTtcbiAgICAgIHRvb2x0aXBcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIilcbiAgICAgICAgLmh0bWwoXG4gICAgICAgICAgYFxuICA8c3Ryb25nPkNvdW50cnk6PC9zdHJvbmc+ICR7ZC5jb3VudHJ5fSAoJHtkLmNvbnRpbmVudH0pPGJyLz5cbiAgPHN0cm9uZz5IYXBwaW5lc3MgUmFua2luZzo8L3N0cm9uZz4gJHt0aGF0LmZvcm1hdE9yZGluYWwoZC5yYW5raW5nKX1cbmBcbiAgICAgICAgKVxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5jbGllbnRYIC0gMTYwICsgXCJweFwiKTtcbiAgICB9O1xuXG4gICAgbGV0IG1vdmVUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgICAgc2hvd1Rvb2x0aXAoZCk7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC5zdHlsZShcInRvcFwiLCBkMy5ldmVudC5jbGllbnRZIC0gMTAwICsgXCJweFwiKVxuICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIGQzLmV2ZW50LmNsaWVudFggLSAxNjAgKyBcInB4XCIpO1xuICAgIH07XG5cbiAgICBsZXQgaGlkZVRvb2x0aXAgPSBmdW5jdGlvbihkKSB7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKTtcbiAgICB9O1xuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBjdXJzb3IgcG9zaXRpb24gbGluZXNcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyB2YXIgdmVydGljYWwgPSBkMy5zZWxlY3QoJy5ncmFwaCcpXG4gICAgLy8gICAuYXBwZW5kKFwibGluZVwiKVxuICAgIC8vICAgLmF0dHIoXCJjbGFzc1wiLCBcInZlcnRpY2FsXCIpXG4gICAgLy8gICAuc3R5bGUoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgIC8vICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiKVxuICAgIC8vICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIi0xMFwiKTtcblxuICAgIC8vIHZhciBob3Jpem9udGFsID0gZDMuc2VsZWN0KCcuZ3JhcGgnKVxuICAgIC8vICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJob3Jpem9udGFsXCIpXG4gICAgLy8gICAuc3R5bGUoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgIC8vICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiKVxuICAgIC8vICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIi0xMFwiKTtcblxuICAgIC8vIHRoaXMuY2hhcnRcbiAgICAvLyAgIC8vIC5zZWxlY3RBbGwoXCJjaXJjbGVcIilcbiAgICAvLyAgIC5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgbGV0IG1vdXNlID0gZDMubW91c2UodGhpcyk7XG4gICAgLy8gICAgIGxldCBtb3VzZVggPSBtb3VzZVswXTtcbiAgICAvLyAgICAgbGV0IG1vdXNlWSA9IG1vdXNlWzFdO1xuICAgIC8vICAgICB2ZXJ0aWNhbFxuICAgIC8vICAgICAgIC5hdHRyKFwieDFcIiwgYCR7bW91c2VYICsgTUFSR0lOUyAtIDV9cHhgKVxuICAgIC8vICAgICAgIC5hdHRyKFwieDJcIiwgYCR7bW91c2VYICsgTUFSR0lOUyAtIDV9cHhgKVxuICAgIC8vICAgICAgIC5hdHRyKFwieTFcIiwgYCR7SEVJR0hUICsgKE1BUkdJTlMgLyAyKSArIDJ9cHhgKVxuICAgIC8vICAgICAgIC5hdHRyKFwieTJcIiwgYCR7bW91c2VZICsgKE1BUkdJTlMgLyAyKSArIDJ9cHhgKTtcbiAgICAvLyAgICAgaG9yaXpvbnRhbFxuICAgIC8vICAgICAgIC5hdHRyKFwieTFcIiwgYCR7bW91c2VZICsgKE1BUkdJTlMgLyAyKSArIDJ9cHhgKVxuICAgIC8vICAgICAgIC5hdHRyKFwieTJcIiwgYCR7bW91c2VZICsgKE1BUkdJTlMgLyAyKSArIDJ9cHhgKVxuICAgIC8vICAgICAgIC5hdHRyKFwieDFcIiwgYCR7MCArIE1BUkdJTlMgLSA1fXB4YClcbiAgICAvLyAgICAgICAuYXR0cihcIngyXCIsIGAke21vdXNlWCArIE1BUkdJTlMgLSA1fXB4YCk7XG4gICAgLy8gICB9KVxuICAgIC8vICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICBsZXQgbW91c2UgPSBkMy5tb3VzZSh0aGlzKTtcbiAgICAvLyAgICAgbGV0IG1vdXNlWCA9IG1vdXNlWzBdO1xuICAgIC8vICAgICBsZXQgbW91c2VZID0gbW91c2VbMV07XG4gICAgLy8gICAgIHZlcnRpY2FsXG4gICAgLy8gICAgICAgLmF0dHIoXCJ4MVwiLCBgJHttb3VzZVggKyBNQVJHSU5TIC0gNX1weGApXG4gICAgLy8gICAgICAgLmF0dHIoXCJ4MlwiLCBgJHttb3VzZVggKyBNQVJHSU5TIC0gNX1weGApXG4gICAgLy8gICAgICAgLmF0dHIoXCJ5MVwiLCBgJHtIRUlHSFQgKyBNQVJHSU5TIC8gMiArIDJ9cHhgKVxuICAgIC8vICAgICAgIC5hdHRyKFwieTJcIiwgYCR7bW91c2VZICsgTUFSR0lOUyAvIDIgKyAyfXB4YCk7XG4gICAgLy8gICAgIGhvcml6b250YWxcbiAgICAvLyAgICAgICAuYXR0cihcInkxXCIsIGAke21vdXNlWSArIE1BUkdJTlMgLyAyICsgMn1weGApXG4gICAgLy8gICAgICAgLmF0dHIoXCJ5MlwiLCBgJHttb3VzZVkgKyBNQVJHSU5TIC8gMiArIDJ9cHhgKVxuICAgIC8vICAgICAgIC5hdHRyKFwieDFcIiwgYCR7MCArIE1BUkdJTlMgLSA1fXB4YClcbiAgICAvLyAgICAgICAuYXR0cihcIngyXCIsIGAke21vdXNlWCArIE1BUkdJTlMgLSA1fXB4YCk7XG4gICAgLy8gICB9KTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGNoYXJ0IHJlbmRlcmluZ1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoXCJjaXJjbGVcIilcbiAgICAgIC5kYXRhKE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJjbGFzc1wiLFxuICAgICAgICBkID0+XG4gICAgICAgICAgYGNvdW50cnkgJHtkLmNsYXNzfSBjb250aW5lbnQtJHtkLmNvbnRpbmVudFxuICAgICAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgLmpvaW4oXCItXCIpfSBjb3VudHJ5LWJ1YmJsZWBcbiAgICAgIClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQuY29udGluZW50ID09PSBcIkFmcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzdjYmQxZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkFzaWFcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjFmNWFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJOb3J0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMzAzNDgxXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiU291dGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmNWI0NFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkV1cm9wZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzJmYzVjY1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiLjdcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI0NEQ0RDRFwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkW21ldHJpY10gLyAxNTYpICsgMjU7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIHNob3dUb29sdGlwKVxuICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIG1vdmVUb29sdGlwKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBoaWRlVG9vbHRpcClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kZWxheSgoZCwgaSkgPT4gaSAqIEFOSU1BVElPTl9ERUxBWSlcbiAgICAgIC5kdXJhdGlvbihBTklNQVRJT05fRFVSQVRJT04pXG4gICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgLmF0dHIoXCJyXCIsIGQgPT4ge1xuICAgICAgICBpZiAoZC5wb3B1bGF0aW9uID4gODAwMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDI1MDAwMDAwO1xuICAgICAgICB9IGVsc2UgaWYgKGQucG9wdWxhdGlvbiA+IDUwMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDAwO1xuICAgICAgICB9IGVsc2UgaWYgKGQucG9wdWxhdGlvbiA+IDEwMDAwMDApIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTUwMDAwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTAwMDAwO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMueVNjYWxlKGQuZ3JhcGhSYW5raW5nIC8gMTU2KTtcbiAgICAgIH0pO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gbGVnZW5kXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IGNvbnRpbmVudHMgPSB7XG4gICAgICBBRlJJQ0E6IHsgY29udGluZW50OiBcIkFmcmljYVwiIH0sXG4gICAgICBBU0lBOiB7IGNvbnRpbmVudDogXCJBc2lhXCIgfSxcbiAgICAgIE5PUlRIX0FNRVJJQ0E6IHsgY29udGluZW50OiBcIk5vcnRoIEFtZXJpY2FcIiB9LFxuICAgICAgU09VVEhfQU1FUklDQTogeyBjb250aW5lbnQ6IFwiU291dGggQW1lcmljYVwiIH0sXG4gICAgICBFVVJPUEU6IHsgY29udGluZW50OiBcIkV1cm9wZVwiIH1cbiAgICB9O1xuXG4gICAgbGV0IGNvbnRpbmVudEZvY3VzT24gPSBjb250aW5lbnROYW1lID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcbiAgICAgICAgICBgY2lyY2xlOm5vdCguY29udGluZW50LSR7Y29udGluZW50TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9KWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjA1XCIpO1xuICAgIH07XG5cbiAgICBsZXQgY29udGluZW50Rm9jdXNPZmYgPSBjb250aW5lbnROYW1lID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcbiAgICAgICAgICBgY2lyY2xlOm5vdCguY29udGluZW50LSR7Y29udGluZW50TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9KWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjdcIik7XG4gICAgfTtcblxuICAgIGxldCBsZWdlbmQgPSB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLmxlZ2VuZFwiKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyhjb250aW5lbnRzKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxlZ2VuZFwiKVxuICAgICAgLmF0dHIoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAvLyAuYXR0cihcImJvdHRvbVwiLCAwKVxuICAgICAgLy8gLmF0dHIoXCJyaWdodFwiLCAwKTtcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtXSURUSCAtIDEzMH0sICR7SEVJR0hUIC0gMTIwfSlgKTtcbiAgICAgIC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoOTcwLCA0ODApYCk7XG5cbiAgICBsZWdlbmRcbiAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIHJldHVybiAyMCAqIGk7XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAyMClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDIwKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBZnJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiM3Y2JkMWVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBc2lhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmYxZjVhXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiTm9ydGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzMwMzQ4MVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIlNvdXRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjViNDRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJFdXJvcGVcIikge1xuICAgICAgICAgIHJldHVybiBcIiMyZmM1Y2NcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IGNvbnRpbmVudEZvY3VzT24oZC5jb250aW5lbnQpKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBkID0+IGNvbnRpbmVudEZvY3VzT2ZmKGQuY29udGluZW50KSk7XG5cbiAgICBsZWdlbmRcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInhcIiwgMjUpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIilcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBgbGVnZW5kLSR7ZC5jb250aW5lbnQuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfWApXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICByZXR1cm4gMjAgKiBpO1xuICAgICAgfSlcbiAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuY29udGluZW50O1xuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMTJweFwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4gY29udGluZW50Rm9jdXNPbihkLmNvbnRpbmVudCkpXG4gICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGQgPT4gY29udGluZW50Rm9jdXNPZmYoZC5jb250aW5lbnQpKTtcblxuICAgIGxlZ2VuZFxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieFwiLCAzMSlcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCItLjJlbVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIC0xMClcbiAgICAgIC50ZXh0KFwiQ29udGluZW50XCIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE3cHhcIilcbiAgICAgIC5zdHlsZShcInRleHQtYWxpZ25cIiwgXCJsZWZ0XCIpO1xuICB9XG5cbiAgdXBkYXRlRGF0YShkYXRhVHlwZSkge1xuICAgIGQzLmpzb24oXCJkaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcIi5jb3VudHJ5LWJ1YmJsZVwiKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgIC5lYXNlKEFOSU1BVElPTl9FQVNJTkcpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMueFNjYWxlKGRbZGF0YVR5cGVdIC8gMTU2KSArIDI1O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUF4aXNMYWJlbChkYXRhVHlwZSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVBeGlzTGFiZWwodHlwZSkge1xuICAgIC8vIHhMYWJlbFxuICAgIGxldCBsYWJlbDtcbiAgICBpZiAodHlwZSA9PT0gJ2dyYXBoU29jaWFsU3VwcG9ydCcpIHtcbiAgICAgIGxhYmVsID0gJ1NvY2lhbCBTdXBwb3J0JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZ3JhcGhGcmVlZG9tXCIpIHtcbiAgICAgIGxhYmVsID0gJ0ZyZWVkb20nO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJncmFwaEdlbmVyb3NpdHlcIikge1xuICAgICAgbGFiZWwgPSAnR2VuZXJvc2l0eSc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImdyYXBoTGlmZUV4cGVjdGFuY3lcIikge1xuICAgICAgbGFiZWwgPSAnTGlmZSBFeHBlY3RhbmN5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdncmFwaEdkcCcpIHtcbiAgICAgIGxhYmVsID0gJ0dEUCBQZXIgQ2FwaXRhICgkKSc7XG4gICAgfVxuICAgIHRoaXMuY2hhcnQuc2VsZWN0KFwiLngtYXhpcy1sYWJlbFwiKS50ZXh0KGAke2xhYmVsfWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmxkR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9