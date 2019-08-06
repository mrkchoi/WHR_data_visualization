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
      this.xScale = d3.scaleLinear().range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]]); // .domain([0, 1]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93b3JsZF9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDaGFydCIsInNlbGVjdG9yIiwib3B0aW9ucyIsInNldENoYXJ0Iiwic2V0TGFiZWxzIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIkhFSUdIVCIsIk1BUkdJTlMiLCJXSURUSCIsImNoYXJ0IiwiYXBwZW5kIiwiZGF0YSIsInRpY2tzIiwidGlja0Zvcm1hdCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJ4QXhpc0NhbGwiLCJheGlzQm90dG9tIiwiZm9ybWF0IiwiY2FsbCIsImRvbWFpbiIsInlTY2FsZSIsInBhZGRpbmciLCJheGlzTGVmdCIsInhMYWJlbCIsInRleHQiLCJ5TGFiZWwiLCJBTklNQVRJT05fRFVSQVRJT04iLCJBTklNQVRJT05fREVMQVkiLCJBTklNQVRJT05fRUFTSU5HIiwiZWFzZVBvbHkiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3b3JsZEdyYXBoIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiV29ybGRHcmFwaCIsImJ0bkdyb3VwIiwicXVlcnlTZWxlY3RvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdG4iLCJ0YXJnZXQiLCJjdXJyZW50QnRuVHlwZSIsImNsYXNzTGlzdCIsImN1cnJlbnRCdG5DbGFzcyIsInNwbGl0IiwidXBkYXRlRGF0YSIsImFsbEJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsInJlbW92ZSIsImFkZCIsIm1vZGFsQmciLCJoYW5kbGVNb2RhbEJnQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJtb2RhbCIsInNldEF0dHJpYnV0ZSIsInhBeGlzIiwieUF4aXMiLCJnZXREYXRhIiwibWV0cmljIiwidGhhdCIsImpzb24iLCJ0aGVuIiwic2V0RGF0YSIsImNpcmNsZXMiLCJudW0iLCJpbnQiLCJwYXJzZUludCIsImRpZ2l0cyIsIm9yZGluYWxzIiwib1BhdHRlcm4iLCJ0UGF0dGVybiIsImluY2x1ZGVzIiwidG9vbHRpcCIsInN0eWxlIiwic2hvd1Rvb2x0aXAiLCJkIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaHRtbCIsImNvdW50cnkiLCJjb250aW5lbnQiLCJmb3JtYXRPcmRpbmFsIiwicmFua2luZyIsImV2ZW50IiwiY2xpZW50WSIsImNsaWVudFgiLCJtb3ZlVG9vbHRpcCIsImhpZGVUb29sdGlwIiwic2VsZWN0QWxsIiwiT2JqZWN0IiwidmFsdWVzIiwiZW50ZXIiLCJqb2luIiwib24iLCJkZWxheSIsImkiLCJlYXNlIiwicG9wdWxhdGlvbiIsImdyYXBoUmFua2luZyIsImNvbnRpbmVudHMiLCJBRlJJQ0EiLCJBU0lBIiwiTk9SVEhfQU1FUklDQSIsIlNPVVRIX0FNRVJJQ0EiLCJFVVJPUEUiLCJjb250aW5lbnRGb2N1c09uIiwiY29udGluZW50TmFtZSIsImNvbnRpbmVudEZvY3VzT2ZmIiwibGVnZW5kIiwiZGF0YVR5cGUiLCJ1cGRhdGVBeGlzTGFiZWwiLCJ0eXBlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNB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SUFKSCxDQUlReEUsMkRBSlIsRUFLR3pCLElBTEgsQ0FLUSxJQUxSLEVBS2MsVUFBQTRFLENBQUMsRUFBSTtBQUNmLGlCQUFPLE1BQUksQ0FBQ25FLE1BQUwsQ0FBWW1FLENBQUMsQ0FBQ2tDLFFBQUQsQ0FBRCxHQUFjLEdBQTFCLElBQWlDLEVBQXhDO0FBQ0QsU0FQSDs7QUFTRSxjQUFJLENBQUNDLGVBQUwsQ0FBcUJELFFBQXJCO0FBQ0gsT0FYRDtBQVlEOzs7b0NBRWVFLEksRUFBTTtBQUNwQjtBQUNBLFVBQUlDLEtBQUo7O0FBQ0EsVUFBSUQsSUFBSSxLQUFLLG9CQUFiLEVBQW1DO0FBQ2pDQyxhQUFLLEdBQUcsZ0JBQVI7QUFDRCxPQUZELE1BRU8sSUFBSUQsSUFBSSxLQUFLLGNBQWIsRUFBNkI7QUFDbENDLGFBQUssR0FBRyxTQUFSO0FBQ0QsT0FGTSxNQUVBLElBQUlELElBQUksS0FBSyxpQkFBYixFQUFnQztBQUNyQ0MsYUFBSyxHQUFHLFlBQVI7QUFDRCxPQUZNLE1BRUEsSUFBSUQsSUFBSSxLQUFLLHFCQUFiLEVBQW9DO0FBQ3pDQyxhQUFLLEdBQUcsaUJBQVI7QUFDRCxPQUZNLE1BRUEsSUFBSUQsSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDOUJDLGFBQUssR0FBRyxvQkFBUjtBQUNEOztBQUNELFdBQUs3RyxLQUFMLENBQVdMLE1BQVgsQ0FBa0IsZUFBbEIsRUFBbUNzQixJQUFuQyxXQUEyQzRGLEtBQTNDO0FBQ0Q7Ozs7RUFoVHNCM0gsOEM7O0FBbVRWMkMseUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1xuICBIRUlHSFQsXG4gIE1BUkdJTlMsXG4gIFdJRFRILFxuICBBTklNQVRJT05fRFVSQVRJT04sXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lOR1xufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHRoaXMuc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0TGFiZWxzKCk7XG4gIH1cblxuICBzZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyA9IHsgdG9wT2Zmc2V0OiAwLCBsZWZ0T2Zmc2V0OiAwIH0pIHtcbiAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgLnNlbGVjdChzZWxlY3RvcilcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCArIE1BUkdJTlMgKiAyKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTlMgKiAyKTtcbiAgICB0aGlzLmNoYXJ0ID0gc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibWFpbl9fc3ZnXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgYHRyYW5zbGF0ZSgke01BUkdJTlMgKyBvcHRpb25zLmxlZnRPZmZzZXR9LCAke01BUkdJTlMgLyAyICtcbiAgICAgICAgICBvcHRpb25zLnRvcE9mZnNldH0pYFxuICAgICAgKTtcbiAgfVxuXG4gIHNldERhdGEoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICAvLyByZWRyYXcoc2VsZWN0b3IsIG9wdGlvbnMgPSB7IHRvcE9mZnNldDogMCwgbGVmdE9mZnNldDogMCB9KSB7XG4gIC8vICAgY29uc3Qgc3ZnID0gZDNcbiAgLy8gICAgIC5zZWxlY3Qoc2VsZWN0b3IpXG4gIC8vICAgICAuYXR0cihcImhlaWdodFwiLCBIRUlHSFQgKyBNQVJHSU5TICogMilcbiAgLy8gICAgIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggKyBNQVJHSU5TICogMik7XG4gIC8vICAgdGhpcy5jaGFydCA9IHN2Z1xuICAvLyAgICAgLmFwcGVuZChcImdcIilcbiAgLy8gICAgIC5hdHRyKFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiKVxuICAvLyAgICAgLmF0dHIoXG4gIC8vICAgICAgIFwidHJhbnNmb3JtXCIsXG4gIC8vICAgICAgIGB0cmFuc2xhdGUoJHtNQVJHSU5TICsgb3B0aW9ucy5sZWZ0T2Zmc2V0fSwgJHtNQVJHSU5TIC8gMiArXG4gIC8vICAgICAgICAgb3B0aW9ucy50b3BPZmZzZXR9KWBcbiAgLy8gICAgICk7XG4gIC8vIH1cblxuICB4QXhpcyh0aWNrcyA9IDIwLCB0aWNrRm9ybWF0ID0gKCkgPT4ge30pIHtcbiAgICB0aGlzLnhTY2FsZSA9IGQzXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCBXSURUSF0pXG4gICAgICAvLyAuZG9tYWluKFswLCAxXSk7XG4gICAgbGV0IHhBeGlzQ2FsbCA9IGQzXG4gICAgICAuYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSlcbiAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgIC50aWNrRm9ybWF0KGQzLmZvcm1hdChcIi4wJVwiKSk7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtIRUlHSFR9KWApXG4gICAgICAuY2FsbCh4QXhpc0NhbGwpO1xuICB9XG5cbiAgeUF4aXMoZG9tYWluLCB5U2NhbGUsIHRpY2tzID0gNSwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgaWYgKHlTY2FsZSA9PT0gXCJzY2FsZUJhbmRcIikge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgSEVJR0hUXSlcbiAgICAgICAgLnBhZGRpbmcoMC44KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgSEVJR0hUXSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydC5hcHBlbmQoXCJnXCIpLmNhbGwoXG4gICAgICBkM1xuICAgICAgICAuYXhpc0xlZnQodGhpcy55U2NhbGUpXG4gICAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgICAgLnRpY2tGb3JtYXQodGlja0Zvcm1hdCgpKVxuICAgICk7XG4gIH1cblxuICBzZXRMYWJlbHMoKSB7XG4gICAgLy8gTGFiZWxzXG4gICAgdmFyIHhMYWJlbCA9IHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpcy1sYWJlbFwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIEhFSUdIVCArIDUwKVxuICAgICAgLmF0dHIoXCJ4XCIsIFdJRFRIIC8gMilcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMThweFwiKVxuICAgICAgLmF0dHIoXCJmb250LXdlaWdodFwiLCBcIjYwMFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJHRFAgUGVyIENhcGl0YSAoJClcIik7XG4gICAgdmFyIHlMYWJlbCA9IHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieUF4aXNHcm91cFwiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgIC8vIC5hdHRyKFwicG9zaXRpb25cIiwgJ3JlbGF0aXZlJylcbiAgICAgIC5hdHRyKFwieFwiLCAtKEhFSUdIVCAvIDIpKVxuICAgICAgLmF0dHIoXCJ5XCIsIC01MClcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMThweFwiKVxuICAgICAgLmF0dHIoXCJmb250LXdlaWdodFwiLCBcIjYwMFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJIYXBwaW5lc3MgSW5kZXggKCUpXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIiwiZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDEwMDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0RFTEFZID0gMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fRUFTSU5HID0gZDMuZWFzZVBvbHk7XG4vLyBleHBvcnQgY29uc3QgQU5JTUFUSU9OX0VBU0lORyA9IGQzLmVhc2VFbGFzdGljO1xuXG5leHBvcnQgY29uc3QgV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDI1MDtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDA7XG4vLyBleHBvcnQgY29uc3QgV0lEVEggPSAxMTAwO1xuLy8gZXhwb3J0IGNvbnN0IEhFSUdIVCA9IDYwMDtcbmV4cG9ydCBjb25zdCBNQVJHSU5TID0gMTAwO1xuIiwiaW1wb3J0IFdvcmxkR3JhcGggZnJvbSBcIi4vd29ybGRfZ3JhcGhcIjtcblxubGV0IHdvcmxkR3JhcGg7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIGluaXRpYWxpemUgZGF0YSB2aXN1YWx6YXRpb25cbiAgd29ybGRHcmFwaCA9IG5ldyBXb3JsZEdyYXBoKFwic3ZnLmdyYXBoXCIpO1xuXG4gIC8vIGJ1dHRvbiBncm91cCBldmVudCBsaXN0ZW5lclxuICBsZXQgYnRuR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1ncm91cFwiKTtcbiAgYnRuR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGN1cnJlbnRCdG4gPSBlLnRhcmdldDtcbiAgICBsZXQgY3VycmVudEJ0blR5cGUgPSBjdXJyZW50QnRuLmNsYXNzTGlzdFsxXTtcbiAgICBsZXQgY3VycmVudEJ0bkNsYXNzO1xuICAgIGlmIChjdXJyZW50QnRuVHlwZSA9PT0gXCJoZWFkZXItZ3JhcGhfX2J0blwiKSB7XG4gICAgICBjdXJyZW50QnRuQ2xhc3MgPSBjdXJyZW50QnRuLmNsYXNzTGlzdFswXS5zcGxpdChcIi1cIilbMV07XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRCdG5UeXBlID09PSBcImhlYWRlci1ncmFwaF9fYnRuXCIpIHtcbiAgICAgIHdvcmxkR3JhcGgudXBkYXRlRGF0YShjdXJyZW50QnRuQ2xhc3MpO1xuICAgICAgbGV0IGFsbEJ0bnMgPSBidG5Hcm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcbiAgICAgIGFsbEJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgICAgY3VycmVudEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gbW9kYWwgYWN0aW9uc1xuICBjb25zdCBtb2RhbEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJnJyk7XG4gIG1vZGFsQmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNb2RhbEJnQ2xpY2spO1xufSk7XG5cbi8vIG1vZGFsIGNsb3NlIFxuZnVuY3Rpb24gaGFuZGxlTW9kYWxCZ0NsaWNrKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgbGV0IG1vZGFsQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICBpZiAoXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcIm1vZGFsLWJnXCIgfHxcbiAgICBlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwibW9kYWwtY2xvc2VfX2J0bi1zaW5nbGVcIiApIHtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm9wYWNpdHk6IDA7IHZpc2liaWxpdHk6IGhpZGRlblwiKTtcbiAgICBtb2RhbEJnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3BhY2l0eTogMDsgdmlzaWJpbGl0eTogaGlkZGVuXCIpO1xuICB9ICBcbn1cbiIsImltcG9ydCB7XG4gIFdJRFRILFxuICBIRUlHSFQsXG4gIE1BUkdJTlMsXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lORyxcbiAgQU5JTUFUSU9OX0RVUkFUSU9OXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vY2hhcnRcIjtcblxuY2xhc3MgV29ybGRHcmFwaCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3Qoc2VsZWN0b3IpO1xuICAgIHRoaXMueEF4aXMoKTtcbiAgICB0aGlzLnlBeGlzKFsxLCAwXSwgXCJzY2FsZUxpbmVhclwiLCAyMCwgKCkgPT4gZDMuZm9ybWF0KFwiLjAlXCIpKTtcbiAgICB0aGlzLmdldERhdGEoXCJncmFwaEdkcFwiKTtcbiAgfVxuXG4gIGdldERhdGEobWV0cmljKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGQzLmpzb24oXCJkaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIHRoYXQuc2V0RGF0YShkYXRhKTtcbiAgICAgIHRoYXQuY2lyY2xlcyhtZXRyaWMpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9ybWF0T3JkaW5hbChudW0pIHtcbiAgICBjb25zdCBpbnQgPSBwYXJzZUludChudW0pLFxuICAgICAgZGlnaXRzID0gW2ludCAlIDEwLCBpbnQgJSAxMDBdLFxuICAgICAgb3JkaW5hbHMgPSBbJ3N0JywgJ25kJywgJ3JkJywgJ3RoJ10sXG4gICAgICBvUGF0dGVybiA9IFsxLCAyLCAzLCA0XSxcbiAgICAgIHRQYXR0ZXJuID0gWzExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTldO1xuICAgIHJldHVybiBvUGF0dGVybi5pbmNsdWRlcyhkaWdpdHNbMF0pICYmICF0UGF0dGVybi5pbmNsdWRlcyhkaWdpdHNbMV0pXG4gICAgICA/IGludCArIG9yZGluYWxzW2RpZ2l0c1swXSAtIDFdXG4gICAgICA6IGludCArIG9yZGluYWxzWzNdO1xuICB9O1xuXG4gIGNpcmNsZXMobWV0cmljKSB7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gdG9vbHRpcFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGxldCB0b29sdGlwID0gZDNcbiAgICAgIC5zZWxlY3QoXCJib2R5XCIpXG4gICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4gICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjk5OTk5OTk5OVwiKVxuICAgICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBzaG93VG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDIwMCk7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgICAgIC5odG1sKFxuICAgICAgICAgIGBcbiAgPHN0cm9uZz5Db3VudHJ5Ojwvc3Ryb25nPiAke2QuY291bnRyeX0gKCR7ZC5jb250aW5lbnR9KTxici8+XG4gIDxzdHJvbmc+SGFwcGluZXNzIFJhbmtpbmc6PC9zdHJvbmc+ICR7dGhhdC5mb3JtYXRPcmRpbmFsKGQucmFua2luZyl9XG5gXG4gICAgICAgIClcbiAgICAgICAgLnN0eWxlKFwidG9wXCIsIGQzLmV2ZW50LmNsaWVudFkgLSAxMDAgKyBcInB4XCIpXG4gICAgICAgIC5zdHlsZShcImxlZnRcIiwgZDMuZXZlbnQuY2xpZW50WCAtIDE2MCArIFwicHhcIik7XG4gICAgfTtcblxuICAgIGxldCBtb3ZlVG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHNob3dUb29sdGlwKGQpO1xuICAgICAgdG9vbHRpcFxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5jbGllbnRYIC0gMTYwICsgXCJweFwiKTtcbiAgICB9O1xuXG4gICAgbGV0IGhpZGVUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgICAgdG9vbHRpcFxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIik7XG4gICAgfTtcblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gY3Vyc29yIHBvc2l0aW9uIGxpbmVzXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gdmFyIHZlcnRpY2FsID0gZDMuc2VsZWN0KCcuZ3JhcGgnKVxuICAgIC8vICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ2ZXJ0aWNhbFwiKVxuICAgIC8vICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAvLyAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIilcbiAgICAvLyAgIC5zdHlsZShcInotaW5kZXhcIiwgXCItMTBcIik7XG5cbiAgICAvLyB2YXIgaG9yaXpvbnRhbCA9IGQzLnNlbGVjdCgnLmdyYXBoJylcbiAgICAvLyAgIC5hcHBlbmQoXCJsaW5lXCIpXG4gICAgLy8gICAuYXR0cihcImNsYXNzXCIsIFwiaG9yaXpvbnRhbFwiKVxuICAgIC8vICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAvLyAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIilcbiAgICAvLyAgIC5zdHlsZShcInotaW5kZXhcIiwgXCItMTBcIik7XG5cbiAgICAvLyB0aGlzLmNoYXJ0XG4gICAgLy8gICAvLyAuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG4gICAgLy8gICAub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGxldCBtb3VzZSA9IGQzLm1vdXNlKHRoaXMpO1xuICAgIC8vICAgICBsZXQgbW91c2VYID0gbW91c2VbMF07XG4gICAgLy8gICAgIGxldCBtb3VzZVkgPSBtb3VzZVsxXTtcbiAgICAvLyAgICAgdmVydGljYWxcbiAgICAvLyAgICAgICAuYXR0cihcIngxXCIsIGAke21vdXNlWCArIE1BUkdJTlMgLSA1fXB4YClcbiAgICAvLyAgICAgICAuYXR0cihcIngyXCIsIGAke21vdXNlWCArIE1BUkdJTlMgLSA1fXB4YClcbiAgICAvLyAgICAgICAuYXR0cihcInkxXCIsIGAke0hFSUdIVCArIChNQVJHSU5TIC8gMikgKyAyfXB4YClcbiAgICAvLyAgICAgICAuYXR0cihcInkyXCIsIGAke21vdXNlWSArIChNQVJHSU5TIC8gMikgKyAyfXB4YCk7XG4gICAgLy8gICAgIGhvcml6b250YWxcbiAgICAvLyAgICAgICAuYXR0cihcInkxXCIsIGAke21vdXNlWSArIChNQVJHSU5TIC8gMikgKyAyfXB4YClcbiAgICAvLyAgICAgICAuYXR0cihcInkyXCIsIGAke21vdXNlWSArIChNQVJHSU5TIC8gMikgKyAyfXB4YClcbiAgICAvLyAgICAgICAuYXR0cihcIngxXCIsIGAkezAgKyBNQVJHSU5TIC0gNX1weGApXG4gICAgLy8gICAgICAgLmF0dHIoXCJ4MlwiLCBgJHttb3VzZVggKyBNQVJHSU5TIC0gNX1weGApO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgbGV0IG1vdXNlID0gZDMubW91c2UodGhpcyk7XG4gICAgLy8gICAgIGxldCBtb3VzZVggPSBtb3VzZVswXTtcbiAgICAvLyAgICAgbGV0IG1vdXNlWSA9IG1vdXNlWzFdO1xuICAgIC8vICAgICB2ZXJ0aWNhbFxuICAgIC8vICAgICAgIC5hdHRyKFwieDFcIiwgYCR7bW91c2VYICsgTUFSR0lOUyAtIDV9cHhgKVxuICAgIC8vICAgICAgIC5hdHRyKFwieDJcIiwgYCR7bW91c2VYICsgTUFSR0lOUyAtIDV9cHhgKVxuICAgIC8vICAgICAgIC5hdHRyKFwieTFcIiwgYCR7SEVJR0hUICsgTUFSR0lOUyAvIDIgKyAyfXB4YClcbiAgICAvLyAgICAgICAuYXR0cihcInkyXCIsIGAke21vdXNlWSArIE1BUkdJTlMgLyAyICsgMn1weGApO1xuICAgIC8vICAgICBob3Jpem9udGFsXG4gICAgLy8gICAgICAgLmF0dHIoXCJ5MVwiLCBgJHttb3VzZVkgKyBNQVJHSU5TIC8gMiArIDJ9cHhgKVxuICAgIC8vICAgICAgIC5hdHRyKFwieTJcIiwgYCR7bW91c2VZICsgTUFSR0lOUyAvIDIgKyAyfXB4YClcbiAgICAvLyAgICAgICAuYXR0cihcIngxXCIsIGAkezAgKyBNQVJHSU5TIC0gNX1weGApXG4gICAgLy8gICAgICAgLmF0dHIoXCJ4MlwiLCBgJHttb3VzZVggKyBNQVJHSU5TIC0gNX1weGApO1xuICAgIC8vICAgfSk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBjaGFydCByZW5kZXJpbmdcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXG4gICAgICAgIFwiY2xhc3NcIixcbiAgICAgICAgZCA9PlxuICAgICAgICAgIGBjb3VudHJ5ICR7ZC5jbGFzc30gY29udGluZW50LSR7ZC5jb250aW5lbnRcbiAgICAgICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgICAgIC5qb2luKFwiLVwiKX0gY291bnRyeS1idWJibGVgXG4gICAgICApXG4gICAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBZnJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiM3Y2JkMWVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBc2lhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmYxZjVhXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiTm9ydGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzMwMzQ4MVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIlNvdXRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjViNDRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJFdXJvcGVcIikge1xuICAgICAgICAgIHJldHVybiBcIiMyZmM1Y2NcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBcIi43XCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNDRENEQ0RcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMnB4XCIpXG4gICAgICAuYXR0cihcImN4XCIsIGQgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy54U2NhbGUoZFttZXRyaWNdIC8gMTU2KSArIDI1O1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBzaG93VG9vbHRpcClcbiAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBtb3ZlVG9vbHRpcClcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgaGlkZVRvb2x0aXApXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZGVsYXkoKGQsIGkpID0+IGkgKiBBTklNQVRJT05fREVMQVkpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgLmVhc2UoQU5JTUFUSU9OX0VBU0lORylcbiAgICAgIC5hdHRyKFwiclwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQucG9wdWxhdGlvbiA+IDgwMDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAyNTAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiA1MDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAxMDAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiAxMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDE1MDAwMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnlTY2FsZShkLmdyYXBoUmFua2luZyAvIDE1Nik7XG4gICAgICB9KTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGxlZ2VuZFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGxldCBjb250aW5lbnRzID0ge1xuICAgICAgQUZSSUNBOiB7IGNvbnRpbmVudDogXCJBZnJpY2FcIiB9LFxuICAgICAgQVNJQTogeyBjb250aW5lbnQ6IFwiQXNpYVwiIH0sXG4gICAgICBOT1JUSF9BTUVSSUNBOiB7IGNvbnRpbmVudDogXCJOb3J0aCBBbWVyaWNhXCIgfSxcbiAgICAgIFNPVVRIX0FNRVJJQ0E6IHsgY29udGluZW50OiBcIlNvdXRoIEFtZXJpY2FcIiB9LFxuICAgICAgRVVST1BFOiB7IGNvbnRpbmVudDogXCJFdXJvcGVcIiB9XG4gICAgfTtcblxuICAgIGxldCBjb250aW5lbnRGb2N1c09uID0gY29udGluZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5zZWxlY3RBbGwoXG4gICAgICAgICAgYGNpcmNsZTpub3QoLmNvbnRpbmVudC0ke2NvbnRpbmVudE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfSlgXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiMC4wNVwiKTtcbiAgICB9O1xuXG4gICAgbGV0IGNvbnRpbmVudEZvY3VzT2ZmID0gY29udGluZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5zZWxlY3RBbGwoXG4gICAgICAgICAgYGNpcmNsZTpub3QoLmNvbnRpbmVudC0ke2NvbnRpbmVudE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfSlgXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiMC43XCIpO1xuICAgIH07XG5cbiAgICBsZXQgbGVnZW5kID0gdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdEFsbChcIi5sZWdlbmRcIilcbiAgICAgIC5kYXRhKE9iamVjdC52YWx1ZXMoY29udGluZW50cykpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsZWdlbmRcIilcbiAgICAgIC5hdHRyKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgLy8gLmF0dHIoXCJib3R0b21cIiwgMClcbiAgICAgIC8vIC5hdHRyKFwicmlnaHRcIiwgMCk7XG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7V0lEVEggLSAxMzB9LCAke0hFSUdIVCAtIDEyMH0pYCk7XG4gICAgICAvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDk3MCwgNDgwKWApO1xuXG4gICAgbGVnZW5kXG4gICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICByZXR1cm4gMjAgKiBpO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgMjApXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAyMClcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICBpZiAoZC5jb250aW5lbnQgPT09IFwiQWZyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjN2NiZDFlXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiQXNpYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmMWY1YVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIk5vcnRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiMzMDM0ODFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJTb3V0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmY1YjQ0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiRXVyb3BlXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMmZjNWNjXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiBjb250aW5lbnRGb2N1c09uKGQuY29udGluZW50KSlcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZCA9PiBjb250aW5lbnRGb2N1c09mZihkLmNvbnRpbmVudCkpO1xuXG4gICAgbGVnZW5kXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIDI1KVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpXG4gICAgICAuYXR0cihcImR5XCIsIFwiMWVtXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGxlZ2VuZC0ke2QuY29udGluZW50LnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX1gKVxuICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIDIwICogaTtcbiAgICAgIH0pXG4gICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLmNvbnRpbmVudDtcbiAgICAgIH0pXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjEycHhcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IGNvbnRpbmVudEZvY3VzT24oZC5jb250aW5lbnQpKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBkID0+IGNvbnRpbmVudEZvY3VzT2ZmKGQuY29udGluZW50KSk7XG5cbiAgICBsZWdlbmRcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInhcIiwgMzEpXG4gICAgICAuYXR0cihcImR5XCIsIFwiLS4yZW1cIilcbiAgICAgIC5hdHRyKFwieVwiLCAtMTApXG4gICAgICAudGV4dChcIkNvbnRpbmVudFwiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxN3B4XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwibGVmdFwiKTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YVR5cGUpIHtcbiAgICBkMy5qc29uKFwiZGlzdC9kYXRhL2NvdW50cmllcy5qc29uXCIpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5zZWxlY3RBbGwoXCIuY291bnRyeS1idWJibGVcIilcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkW2RhdGFUeXBlXSAvIDE1NikgKyAyNTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVBeGlzTGFiZWwoZGF0YVR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQXhpc0xhYmVsKHR5cGUpIHtcbiAgICAvLyB4TGFiZWxcbiAgICBsZXQgbGFiZWw7XG4gICAgaWYgKHR5cGUgPT09ICdncmFwaFNvY2lhbFN1cHBvcnQnKSB7XG4gICAgICBsYWJlbCA9ICdTb2NpYWwgU3VwcG9ydCc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImdyYXBoRnJlZWRvbVwiKSB7XG4gICAgICBsYWJlbCA9ICdGcmVlZG9tJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZ3JhcGhHZW5lcm9zaXR5XCIpIHtcbiAgICAgIGxhYmVsID0gJ0dlbmVyb3NpdHknO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJncmFwaExpZmVFeHBlY3RhbmN5XCIpIHtcbiAgICAgIGxhYmVsID0gJ0xpZmUgRXhwZWN0YW5jeSc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZ3JhcGhHZHAnKSB7XG4gICAgICBsYWJlbCA9ICdHRFAgUGVyIENhcGl0YSAoJCknO1xuICAgIH1cbiAgICB0aGlzLmNoYXJ0LnNlbGVjdChcIi54LWF4aXMtbGFiZWxcIikudGV4dChgJHtsYWJlbH1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JsZEdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==