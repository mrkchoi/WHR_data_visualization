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
    }
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
var ANIMATION_EASING = d3.easePoly;
var WIDTH = window.innerWidth - 250;
var HEIGHT = window.innerHeight - 300;
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

      var legend = this.chart.selectAll(".legend").data(Object.values(continents)).enter().append("g").attr("class", "legend").attr("position", "absolute").attr("transform", "translate(".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] - 130, ", ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] - 120, ")"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93b3JsZF9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDaGFydCIsInNlbGVjdG9yIiwib3B0aW9ucyIsInNldENoYXJ0Iiwic2V0TGFiZWxzIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIkhFSUdIVCIsIk1BUkdJTlMiLCJXSURUSCIsImNoYXJ0IiwiYXBwZW5kIiwiZGF0YSIsInRpY2tzIiwidGlja0Zvcm1hdCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJ4QXhpc0NhbGwiLCJheGlzQm90dG9tIiwiZm9ybWF0IiwiY2FsbCIsImRvbWFpbiIsInlTY2FsZSIsInBhZGRpbmciLCJheGlzTGVmdCIsInhMYWJlbCIsInRleHQiLCJ5TGFiZWwiLCJBTklNQVRJT05fRFVSQVRJT04iLCJBTklNQVRJT05fREVMQVkiLCJBTklNQVRJT05fRUFTSU5HIiwiZWFzZVBvbHkiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3b3JsZEdyYXBoIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiV29ybGRHcmFwaCIsImJ0bkdyb3VwIiwicXVlcnlTZWxlY3RvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdG4iLCJ0YXJnZXQiLCJjdXJyZW50QnRuVHlwZSIsImNsYXNzTGlzdCIsImN1cnJlbnRCdG5DbGFzcyIsInNwbGl0IiwidXBkYXRlRGF0YSIsImFsbEJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsInJlbW92ZSIsImFkZCIsIm1vZGFsQmciLCJoYW5kbGVNb2RhbEJnQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJtb2RhbCIsInNldEF0dHJpYnV0ZSIsInhBeGlzIiwieUF4aXMiLCJnZXREYXRhIiwibWV0cmljIiwidGhhdCIsImpzb24iLCJ0aGVuIiwic2V0RGF0YSIsImNpcmNsZXMiLCJudW0iLCJpbnQiLCJwYXJzZUludCIsImRpZ2l0cyIsIm9yZGluYWxzIiwib1BhdHRlcm4iLCJ0UGF0dGVybiIsImluY2x1ZGVzIiwidG9vbHRpcCIsInN0eWxlIiwic2hvd1Rvb2x0aXAiLCJkIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaHRtbCIsImNvdW50cnkiLCJjb250aW5lbnQiLCJmb3JtYXRPcmRpbmFsIiwicmFua2luZyIsImV2ZW50IiwiY2xpZW50WSIsImNsaWVudFgiLCJtb3ZlVG9vbHRpcCIsImhpZGVUb29sdGlwIiwic2VsZWN0QWxsIiwiT2JqZWN0IiwidmFsdWVzIiwiZW50ZXIiLCJqb2luIiwib24iLCJkZWxheSIsImkiLCJlYXNlIiwicG9wdWxhdGlvbiIsImdyYXBoUmFua2luZyIsImNvbnRpbmVudHMiLCJBRlJJQ0EiLCJBU0lBIiwiTk9SVEhfQU1FUklDQSIsIlNPVVRIX0FNRVJJQ0EiLCJFVVJPUEUiLCJjb250aW5lbnRGb2N1c09uIiwiY29udGluZW50TmFtZSIsImNvbnRpbmVudEZvY3VzT2ZmIiwibGVnZW5kIiwiZGF0YVR5cGUiLCJ1cGRhdGVBeGlzTGFiZWwiLCJ0eXBlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNB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QUFSO0FBQ0QsT0FGTSxNQUVBLElBQUlELElBQUksS0FBSyxpQkFBYixFQUFnQztBQUNyQ0MsYUFBSyxHQUFHLFlBQVI7QUFDRCxPQUZNLE1BRUEsSUFBSUQsSUFBSSxLQUFLLHFCQUFiLEVBQW9DO0FBQ3pDQyxhQUFLLEdBQUcsaUJBQVI7QUFDRCxPQUZNLE1BRUEsSUFBSUQsSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDOUJDLGFBQUssR0FBRyxvQkFBUjtBQUNEOztBQUNELFdBQUs3RyxLQUFMLENBQVdMLE1BQVgsQ0FBa0IsZUFBbEIsRUFBbUNzQixJQUFuQyxXQUEyQzRGLEtBQTNDO0FBQ0Q7Ozs7RUExUHNCM0gsOEM7O0FBNlBWMkMseUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1xuICBIRUlHSFQsXG4gIE1BUkdJTlMsXG4gIFdJRFRILFxuICBBTklNQVRJT05fRFVSQVRJT04sXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lOR1xufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHRoaXMuc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0TGFiZWxzKCk7XG4gIH1cblxuICBzZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyA9IHsgdG9wT2Zmc2V0OiAwLCBsZWZ0T2Zmc2V0OiAwIH0pIHtcbiAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgLnNlbGVjdChzZWxlY3RvcilcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCArIE1BUkdJTlMgKiAyKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTlMgKiAyKTtcbiAgICB0aGlzLmNoYXJ0ID0gc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibWFpbl9fc3ZnXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgYHRyYW5zbGF0ZSgke01BUkdJTlMgKyBvcHRpb25zLmxlZnRPZmZzZXR9LCAke01BUkdJTlMgLyAyICtcbiAgICAgICAgICBvcHRpb25zLnRvcE9mZnNldH0pYFxuICAgICAgKTtcbiAgfVxuXG4gIHNldERhdGEoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICB4QXhpcyh0aWNrcyA9IDIwLCB0aWNrRm9ybWF0ID0gKCkgPT4ge30pIHtcbiAgICB0aGlzLnhTY2FsZSA9IGQzXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCBXSURUSF0pXG4gICAgICAvLyAuZG9tYWluKFswLCAxXSk7XG4gICAgbGV0IHhBeGlzQ2FsbCA9IGQzXG4gICAgICAuYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSlcbiAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgIC50aWNrRm9ybWF0KGQzLmZvcm1hdChcIi4wJVwiKSk7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtIRUlHSFR9KWApXG4gICAgICAuY2FsbCh4QXhpc0NhbGwpO1xuICB9XG5cbiAgeUF4aXMoZG9tYWluLCB5U2NhbGUsIHRpY2tzID0gNSwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgaWYgKHlTY2FsZSA9PT0gXCJzY2FsZUJhbmRcIikge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgSEVJR0hUXSlcbiAgICAgICAgLnBhZGRpbmcoMC44KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgSEVJR0hUXSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydC5hcHBlbmQoXCJnXCIpLmNhbGwoXG4gICAgICBkM1xuICAgICAgICAuYXhpc0xlZnQodGhpcy55U2NhbGUpXG4gICAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgICAgLnRpY2tGb3JtYXQodGlja0Zvcm1hdCgpKVxuICAgICk7XG4gIH1cblxuICBzZXRMYWJlbHMoKSB7XG4gICAgLy8gTGFiZWxzXG4gICAgdmFyIHhMYWJlbCA9IHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpcy1sYWJlbFwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIEhFSUdIVCArIDUwKVxuICAgICAgLmF0dHIoXCJ4XCIsIFdJRFRIIC8gMilcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMThweFwiKVxuICAgICAgLmF0dHIoXCJmb250LXdlaWdodFwiLCBcIjYwMFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJHRFAgUGVyIENhcGl0YSAoJClcIik7XG4gICAgdmFyIHlMYWJlbCA9IHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieUF4aXNHcm91cFwiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgIC8vIC5hdHRyKFwicG9zaXRpb25cIiwgJ3JlbGF0aXZlJylcbiAgICAgIC5hdHRyKFwieFwiLCAtKEhFSUdIVCAvIDIpKVxuICAgICAgLmF0dHIoXCJ5XCIsIC01MClcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMThweFwiKVxuICAgICAgLmF0dHIoXCJmb250LXdlaWdodFwiLCBcIjYwMFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJIYXBwaW5lc3MgSW5kZXggKCUpXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIiwiZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDEwMDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0RFTEFZID0gMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fRUFTSU5HID0gZDMuZWFzZVBvbHk7XG5cbmV4cG9ydCBjb25zdCBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMjUwO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMDtcbmV4cG9ydCBjb25zdCBNQVJHSU5TID0gMTAwO1xuIiwiaW1wb3J0IFdvcmxkR3JhcGggZnJvbSBcIi4vd29ybGRfZ3JhcGhcIjtcblxubGV0IHdvcmxkR3JhcGg7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIGluaXRpYWxpemUgZGF0YSB2aXN1YWx6YXRpb25cbiAgd29ybGRHcmFwaCA9IG5ldyBXb3JsZEdyYXBoKFwic3ZnLmdyYXBoXCIpO1xuXG4gIC8vIGJ1dHRvbiBncm91cCBldmVudCBsaXN0ZW5lclxuICBsZXQgYnRuR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1ncm91cFwiKTtcbiAgYnRuR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGN1cnJlbnRCdG4gPSBlLnRhcmdldDtcbiAgICBsZXQgY3VycmVudEJ0blR5cGUgPSBjdXJyZW50QnRuLmNsYXNzTGlzdFsxXTtcbiAgICBsZXQgY3VycmVudEJ0bkNsYXNzO1xuICAgIGlmIChjdXJyZW50QnRuVHlwZSA9PT0gXCJoZWFkZXItZ3JhcGhfX2J0blwiKSB7XG4gICAgICBjdXJyZW50QnRuQ2xhc3MgPSBjdXJyZW50QnRuLmNsYXNzTGlzdFswXS5zcGxpdChcIi1cIilbMV07XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRCdG5UeXBlID09PSBcImhlYWRlci1ncmFwaF9fYnRuXCIpIHtcbiAgICAgIHdvcmxkR3JhcGgudXBkYXRlRGF0YShjdXJyZW50QnRuQ2xhc3MpO1xuICAgICAgbGV0IGFsbEJ0bnMgPSBidG5Hcm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcbiAgICAgIGFsbEJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgICAgY3VycmVudEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gbW9kYWwgYWN0aW9uc1xuICBjb25zdCBtb2RhbEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJnJyk7XG4gIG1vZGFsQmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNb2RhbEJnQ2xpY2spO1xufSk7XG5cbi8vIG1vZGFsIGNsb3NlIFxuZnVuY3Rpb24gaGFuZGxlTW9kYWxCZ0NsaWNrKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgbGV0IG1vZGFsQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICBpZiAoXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcIm1vZGFsLWJnXCIgfHxcbiAgICBlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwibW9kYWwtY2xvc2VfX2J0bi1zaW5nbGVcIiApIHtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm9wYWNpdHk6IDA7IHZpc2liaWxpdHk6IGhpZGRlblwiKTtcbiAgICBtb2RhbEJnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3BhY2l0eTogMDsgdmlzaWJpbGl0eTogaGlkZGVuXCIpO1xuICB9ICBcbn1cbiIsImltcG9ydCB7XG4gIFdJRFRILFxuICBIRUlHSFQsXG4gIE1BUkdJTlMsXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lORyxcbiAgQU5JTUFUSU9OX0RVUkFUSU9OXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vY2hhcnRcIjtcblxuY2xhc3MgV29ybGRHcmFwaCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3Qoc2VsZWN0b3IpO1xuICAgIHRoaXMueEF4aXMoKTtcbiAgICB0aGlzLnlBeGlzKFsxLCAwXSwgXCJzY2FsZUxpbmVhclwiLCAyMCwgKCkgPT4gZDMuZm9ybWF0KFwiLjAlXCIpKTtcbiAgICB0aGlzLmdldERhdGEoXCJncmFwaEdkcFwiKTtcbiAgfVxuXG4gIGdldERhdGEobWV0cmljKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGQzLmpzb24oXCJkaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIHRoYXQuc2V0RGF0YShkYXRhKTtcbiAgICAgIHRoYXQuY2lyY2xlcyhtZXRyaWMpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9ybWF0T3JkaW5hbChudW0pIHtcbiAgICBjb25zdCBpbnQgPSBwYXJzZUludChudW0pLFxuICAgICAgZGlnaXRzID0gW2ludCAlIDEwLCBpbnQgJSAxMDBdLFxuICAgICAgb3JkaW5hbHMgPSBbJ3N0JywgJ25kJywgJ3JkJywgJ3RoJ10sXG4gICAgICBvUGF0dGVybiA9IFsxLCAyLCAzLCA0XSxcbiAgICAgIHRQYXR0ZXJuID0gWzExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTldO1xuICAgIHJldHVybiBvUGF0dGVybi5pbmNsdWRlcyhkaWdpdHNbMF0pICYmICF0UGF0dGVybi5pbmNsdWRlcyhkaWdpdHNbMV0pXG4gICAgICA/IGludCArIG9yZGluYWxzW2RpZ2l0c1swXSAtIDFdXG4gICAgICA6IGludCArIG9yZGluYWxzWzNdO1xuICB9O1xuXG4gIGNpcmNsZXMobWV0cmljKSB7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gdG9vbHRpcFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGxldCB0b29sdGlwID0gZDNcbiAgICAgIC5zZWxlY3QoXCJib2R5XCIpXG4gICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4gICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjk5OTk5OTk5OVwiKVxuICAgICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBzaG93VG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDIwMCk7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgICAgIC5odG1sKFxuICAgICAgICAgIGBcbiAgPHN0cm9uZz5Db3VudHJ5Ojwvc3Ryb25nPiAke2QuY291bnRyeX0gKCR7ZC5jb250aW5lbnR9KTxici8+XG4gIDxzdHJvbmc+SGFwcGluZXNzIFJhbmtpbmc6PC9zdHJvbmc+ICR7dGhhdC5mb3JtYXRPcmRpbmFsKGQucmFua2luZyl9XG5gXG4gICAgICAgIClcbiAgICAgICAgLnN0eWxlKFwidG9wXCIsIGQzLmV2ZW50LmNsaWVudFkgLSAxMDAgKyBcInB4XCIpXG4gICAgICAgIC5zdHlsZShcImxlZnRcIiwgZDMuZXZlbnQuY2xpZW50WCAtIDE2MCArIFwicHhcIik7XG4gICAgfTtcblxuICAgIGxldCBtb3ZlVG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHNob3dUb29sdGlwKGQpO1xuICAgICAgdG9vbHRpcFxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5jbGllbnRYIC0gMTYwICsgXCJweFwiKTtcbiAgICB9O1xuXG4gICAgbGV0IGhpZGVUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgICAgdG9vbHRpcFxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIik7XG4gICAgfTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGNoYXJ0IHJlbmRlcmluZ1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoXCJjaXJjbGVcIilcbiAgICAgIC5kYXRhKE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJjbGFzc1wiLFxuICAgICAgICBkID0+XG4gICAgICAgICAgYGNvdW50cnkgJHtkLmNsYXNzfSBjb250aW5lbnQtJHtkLmNvbnRpbmVudFxuICAgICAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgLmpvaW4oXCItXCIpfSBjb3VudHJ5LWJ1YmJsZWBcbiAgICAgIClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQuY29udGluZW50ID09PSBcIkFmcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzdjYmQxZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkFzaWFcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjFmNWFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJOb3J0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMzAzNDgxXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiU291dGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmNWI0NFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkV1cm9wZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzJmYzVjY1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiLjdcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI0NEQ0RDRFwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkW21ldHJpY10gLyAxNTYpICsgMjU7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIHNob3dUb29sdGlwKVxuICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIG1vdmVUb29sdGlwKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBoaWRlVG9vbHRpcClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kZWxheSgoZCwgaSkgPT4gaSAqIEFOSU1BVElPTl9ERUxBWSlcbiAgICAgIC5kdXJhdGlvbihBTklNQVRJT05fRFVSQVRJT04pXG4gICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgLmF0dHIoXCJyXCIsIGQgPT4ge1xuICAgICAgICBpZiAoZC5wb3B1bGF0aW9uID4gODAwMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDI1MDAwMDAwO1xuICAgICAgICB9IGVsc2UgaWYgKGQucG9wdWxhdGlvbiA+IDUwMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDAwO1xuICAgICAgICB9IGVsc2UgaWYgKGQucG9wdWxhdGlvbiA+IDEwMDAwMDApIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTUwMDAwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTAwMDAwO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMueVNjYWxlKGQuZ3JhcGhSYW5raW5nIC8gMTU2KTtcbiAgICAgIH0pO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gbGVnZW5kXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IGNvbnRpbmVudHMgPSB7XG4gICAgICBBRlJJQ0E6IHsgY29udGluZW50OiBcIkFmcmljYVwiIH0sXG4gICAgICBBU0lBOiB7IGNvbnRpbmVudDogXCJBc2lhXCIgfSxcbiAgICAgIE5PUlRIX0FNRVJJQ0E6IHsgY29udGluZW50OiBcIk5vcnRoIEFtZXJpY2FcIiB9LFxuICAgICAgU09VVEhfQU1FUklDQTogeyBjb250aW5lbnQ6IFwiU291dGggQW1lcmljYVwiIH0sXG4gICAgICBFVVJPUEU6IHsgY29udGluZW50OiBcIkV1cm9wZVwiIH1cbiAgICB9O1xuXG4gICAgbGV0IGNvbnRpbmVudEZvY3VzT24gPSBjb250aW5lbnROYW1lID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcbiAgICAgICAgICBgY2lyY2xlOm5vdCguY29udGluZW50LSR7Y29udGluZW50TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9KWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjA1XCIpO1xuICAgIH07XG5cbiAgICBsZXQgY29udGluZW50Rm9jdXNPZmYgPSBjb250aW5lbnROYW1lID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcbiAgICAgICAgICBgY2lyY2xlOm5vdCguY29udGluZW50LSR7Y29udGluZW50TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9KWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjdcIik7XG4gICAgfTtcblxuICAgIGxldCBsZWdlbmQgPSB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLmxlZ2VuZFwiKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyhjb250aW5lbnRzKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxlZ2VuZFwiKVxuICAgICAgLmF0dHIoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7V0lEVEggLSAxMzB9LCAke0hFSUdIVCAtIDEyMH0pYCk7XG5cbiAgICBsZWdlbmRcbiAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIHJldHVybiAyMCAqIGk7XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAyMClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDIwKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBZnJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiM3Y2JkMWVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBc2lhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmYxZjVhXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiTm9ydGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzMwMzQ4MVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIlNvdXRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjViNDRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJFdXJvcGVcIikge1xuICAgICAgICAgIHJldHVybiBcIiMyZmM1Y2NcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IGNvbnRpbmVudEZvY3VzT24oZC5jb250aW5lbnQpKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBkID0+IGNvbnRpbmVudEZvY3VzT2ZmKGQuY29udGluZW50KSk7XG5cbiAgICBsZWdlbmRcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInhcIiwgMjUpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIilcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBgbGVnZW5kLSR7ZC5jb250aW5lbnQuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfWApXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICByZXR1cm4gMjAgKiBpO1xuICAgICAgfSlcbiAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuY29udGluZW50O1xuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMTJweFwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4gY29udGluZW50Rm9jdXNPbihkLmNvbnRpbmVudCkpXG4gICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGQgPT4gY29udGluZW50Rm9jdXNPZmYoZC5jb250aW5lbnQpKTtcblxuICAgIGxlZ2VuZFxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieFwiLCAzMSlcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCItLjJlbVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIC0xMClcbiAgICAgIC50ZXh0KFwiQ29udGluZW50XCIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE3cHhcIilcbiAgICAgIC5zdHlsZShcInRleHQtYWxpZ25cIiwgXCJsZWZ0XCIpO1xuICB9XG5cbiAgdXBkYXRlRGF0YShkYXRhVHlwZSkge1xuICAgIGQzLmpzb24oXCJkaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcIi5jb3VudHJ5LWJ1YmJsZVwiKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgIC5lYXNlKEFOSU1BVElPTl9FQVNJTkcpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMueFNjYWxlKGRbZGF0YVR5cGVdIC8gMTU2KSArIDI1O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUF4aXNMYWJlbChkYXRhVHlwZSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVBeGlzTGFiZWwodHlwZSkge1xuICAgIC8vIHhMYWJlbFxuICAgIGxldCBsYWJlbDtcbiAgICBpZiAodHlwZSA9PT0gJ2dyYXBoU29jaWFsU3VwcG9ydCcpIHtcbiAgICAgIGxhYmVsID0gJ1NvY2lhbCBTdXBwb3J0JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZ3JhcGhGcmVlZG9tXCIpIHtcbiAgICAgIGxhYmVsID0gJ0ZyZWVkb20nO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJncmFwaEdlbmVyb3NpdHlcIikge1xuICAgICAgbGFiZWwgPSAnR2VuZXJvc2l0eSc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImdyYXBoTGlmZUV4cGVjdGFuY3lcIikge1xuICAgICAgbGFiZWwgPSAnTGlmZSBFeHBlY3RhbmN5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdncmFwaEdkcCcpIHtcbiAgICAgIGxhYmVsID0gJ0dEUCBQZXIgQ2FwaXRhICgkKSc7XG4gICAgfVxuICAgIHRoaXMuY2hhcnQuc2VsZWN0KFwiLngtYXhpcy1sYWJlbFwiKS50ZXh0KGAke2xhYmVsfWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmxkR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9