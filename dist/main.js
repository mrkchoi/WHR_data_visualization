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

    this.setChart(selector, options); // this.getData();

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
      // let graphDiv = document.querySelector("svg.graph");
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
        this.yScale = d3[yScale]().domain(domain).range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] - 50]).padding(0.8);
      } else {
        this.yScale = d3[yScale]().domain(domain).range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] - 50]);
      }

      this.chart.append("g").call(d3.axisLeft(this.yScale).ticks(ticks).tickFormat(tickFormat()));
    }
  }, {
    key: "setLabels",
    value: function setLabels() {
      // Labels
      var xLabel = this.chart.append("g").append("text").attr("y", _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] + 50).attr("x", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2).attr("font-size", "20px").attr("text-anchor", "middle").text("GDP Per Capita ($)");
      var yLabel = this.chart.append("g").append("text").attr("transform", "rotate(-90)").attr("y", -65).attr("x", -300).attr("font-size", "20px").attr("text-anchor", "middle").text("Happiness Index (%)");
    } // gridLines(scale, position, ticks = 5) {
    //   this.chart
    //     .append("g")
    //     .attr("class", "grid")
    //     .call(d3[position])()
    //     .scale(scale)
    //     .tickSize(WIDTH, 0, 0)
    //     .tickFormat("")
    //     .ticks(ticks);
    // }
    // rectangleLabels(text) {
    //   this.chart
    //     .selectAll()
    //     .data(this.sortedData)
    //     .enter()
    //     .append("text")
    //     .attr("class", d => `city ${d.class} bar-label city-data-toggle`)
    //     .attr("x", 5)
    //     .attr("y", d => this.yScale(d.city) - 2)
    //     .style("fill", "#fff")
    //     .text((d, i) => {
    //       if (typeof text === "string") {
    //         return d[text];
    //       } else {
    //         return text.call(d, i);
    //       }
    //     })
    //     .style("opacity", 0);
    // }
    // labelTop(text) {
    //   this.chart
    //     .append("text")
    //     .attr("class", "label-text")
    //     .attr("text-anchor", "middle")
    //     .attr("x", WIDTH / 2)
    //     .attr("y", -20)
    //     .text(text);
    // }

  }]);

  return Chart;
}();

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: PLANO, IRVINE, MADISON, FREMONT, HUNTINGTON_BEACH, FARGO, GRAND_PRAIRIE, SAN_JOSE, SCOTTSDALE, SAN_FRANCISCO, BISMARCK, OVERLAND_PARK, SANTA_ROSA, AUSTIN, SIOUX_FALLS, PEARL_CITY, GLENDALE, SAN_DIEGO, ST_PAUL, CHARLESTON, GILBERT, ANAHEIM, RALEIGH, CAPE_CORAL, CEDAR_RAPIDS, CITIES, ANIMATION_DURATION, ANIMATION_DELAY, ANIMATION_EASING, WIDTH, HEIGHT, MARGINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLANO", function() { return PLANO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRVINE", function() { return IRVINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MADISON", function() { return MADISON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FREMONT", function() { return FREMONT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUNTINGTON_BEACH", function() { return HUNTINGTON_BEACH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FARGO", function() { return FARGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAND_PRAIRIE", function() { return GRAND_PRAIRIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAN_JOSE", function() { return SAN_JOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCOTTSDALE", function() { return SCOTTSDALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAN_FRANCISCO", function() { return SAN_FRANCISCO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BISMARCK", function() { return BISMARCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAND_PARK", function() { return OVERLAND_PARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANTA_ROSA", function() { return SANTA_ROSA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUSTIN", function() { return AUSTIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIOUX_FALLS", function() { return SIOUX_FALLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PEARL_CITY", function() { return PEARL_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLENDALE", function() { return GLENDALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAN_DIEGO", function() { return SAN_DIEGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ST_PAUL", function() { return ST_PAUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARLESTON", function() { return CHARLESTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GILBERT", function() { return GILBERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANAHEIM", function() { return ANAHEIM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RALEIGH", function() { return RALEIGH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPE_CORAL", function() { return CAPE_CORAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CEDAR_RAPIDS", function() { return CEDAR_RAPIDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITIES", function() { return CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DURATION", function() { return ANIMATION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DELAY", function() { return ANIMATION_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_EASING", function() { return ANIMATION_EASING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDTH", function() { return WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARGINS", function() { return MARGINS; });
var PLANO = "PLANO";
var PLANO_CITY = "Plano";
var PLANO_CLASS = "city-Plano";
var PLANO_COLOR = "#51eaea";
var IRVINE = "IRVINE";
var IRVINE_CITY = "IRVINE";
var IRVINE_CLASS = "city-Irvine";
var IRVINE_COLOR = "#ff9d76";
var MADISON = "MADISON";
var MADISON_CITY = "MADISON";
var MADISON_CLASS = "city-Madison";
var MADISON_COLOR = "#fb3569";
var FREMONT = "FREMONT";
var FREMONT_CITY = "FREMONT";
var FREMONT_CLASS = "city-Fremont";
var FREMONT_COLOR = "#fa86be";
var HUNTINGTON_BEACH = "HUNTINGTON_BEACH";
var HUNTINGTON_BEACH_CITY = "HUNTINGTON_BEACH";
var HUNTINGTON_BEACH_CLASS = "city-Huntington-Beach";
var HUNTINGTON_BEACH_COLOR = "#a275e3";
var FARGO = "FARGO";
var FARGO_CITY = "FARGO";
var FARGO_CLASS = "city-Fargo";
var FARGO_COLOR = "#ff1f5a";
var GRAND_PRAIRIE = "GRAND_PRAIRIE";
var GRAND_PRAIRIE_CITY = "GRAND_PRAIRIE";
var GRAND_PRAIRIE_CLASS = "city-Grand-Prairie";
var GRAND_PRAIRIE_COLOR = "#6900ff";
var SAN_JOSE = "SAN_JOSE";
var SAN_JOSE_CITY = "SAN_JOSE";
var SAN_JOSE_CLASS = "city-San-Jose";
var SAN_JOSE_COLOR = "#ffd700";
var SCOTTSDALE = "SCOTTSDALE";
var SCOTTSDALE_CITY = "SCOTTSDALE";
var SCOTTSDALE_CLASS = "city-Scottsdale";
var SCOTTSDALE_COLOR = "#ff6138";
var SAN_FRANCISCO = "SAN_FRANCISCO";
var SAN_FRANCISCO_CITY = "SAN_FRANCISCO";
var SAN_FRANCISCO_CLASS = "city-San-Francisco";
var SAN_FRANCISCO_COLOR = "#303481";
var BISMARCK = "BISMARCK";
var BISMARCK_CITY = "BISMARCK";
var BISMARCK_CLASS = "city-Bismarck";
var BISMARCK_COLOR = "#7cbd1e";
var OVERLAND_PARK = "OVERLAND_PARK";
var OVERLAND_PARK_CITY = "OVERLAND_PARK";
var OVERLAND_PARK_CLASS = "city-Overland-Park";
var OVERLAND_PARK_COLOR = "#009378";
var SANTA_ROSA = "SANTA_ROSA";
var SANTA_ROSA_CITY = "SANTA_ROSA";
var SANTA_ROSA_CLASS = "city-Santa-Rosa";
var SANTA_ROSA_COLOR = "#f60c86";
var AUSTIN = "AUSTIN";
var AUSTIN_CITY = "AUSTIN";
var AUSTIN_CLASS = "city-Austin";
var AUSTIN_COLOR = "#f9d00f";
var SIOUX_FALLS = "SIOUX_FALLS";
var SIOUX_FALLS_CITY = "SIOUX_FALLS";
var SIOUX_FALLS_CLASS = "city-Sioux-Falls";
var SIOUX_FALLS_COLOR = "#303841";
var PEARL_CITY = "PEARL_CITY";
var PEARL_CITY_CITY = "PEARL_CITY";
var PEARL_CITY_CLASS = "city-Pearl-City";
var PEARL_CITY_COLOR = "#96cd39";
var GLENDALE = "GLENDALE";
var GLENDALE_CITY = "GLENDALE";
var GLENDALE_CLASS = "city-Glendale";
var GLENDALE_COLOR = "#2fc5cc";
var SAN_DIEGO = "SAN_DIEGO";
var SAN_DIEGO_CITY = "SAN_DIEGO";
var SAN_DIEGO_CLASS = "city-San-Diego";
var SAN_DIEGO_COLOR = "#ff5b44";
var ST_PAUL = "ST_PAUL";
var ST_PAUL_CITY = "ST_PAUL";
var ST_PAUL_CLASS = "city-St-Paul";
var ST_PAUL_COLOR = "#bf68f6";
var CHARLESTON = "CHARLESTON";
var CHARLESTON_CITY = "CHARLESTON";
var CHARLESTON_CLASS = "city-Charleston";
var CHARLESTON_COLOR = "#f92727";
var GILBERT = "GILBERT";
var GILBERT_CITY = "GILBERT";
var GILBERT_CLASS = "city-Gilbert";
var GILBERT_COLOR = "#ff0592";
var ANAHEIM = "ANAHEIM";
var ANAHEIM_CITY = "ANAHEIM";
var ANAHEIM_CLASS = "city-Anaheim";
var ANAHEIM_COLOR = "#a58bff";
var RALEIGH = "RALEIGH";
var RALEIGH_CITY = "RALEIGH";
var RALEIGH_CLASS = "city-Raleigh";
var RALEIGH_COLOR = "#009378";
var CAPE_CORAL = "CAPE_CORAL";
var CAPE_CORAL_CITY = "CAPE_CORAL";
var CAPE_CORAL_CLASS = "city-Cape-Coral";
var CAPE_CORAL_COLOR = "#fc345c";
var CEDAR_RAPIDS = "CEDAR_RAPIDS";
var CEDAR_RAPIDS_CITY = "CEDAR_RAPIDS";
var CEDAR_RAPIDS_CLASS = "city-Cedar-Rapids";
var CEDAR_RAPIDS_COLOR = "#3d6cb9";
var CITIES = {
  PLANO: {
    city: "Plano",
    constant: PLANO,
    "class": PLANO_CLASS,
    color: PLANO_COLOR,
    emotionalWellbeing: 4,
    incomeEmployment: 3,
    communityEnvironment: 4,
    position: {
      x: 526,
      y: 390
    },
    happinessScore: 72.3,
    ranking: 1
  },
  IRVINE: {
    city: "Irvine",
    constant: IRVINE,
    "class": IRVINE_CLASS,
    color: IRVINE_COLOR,
    emotionalWellbeing: 8,
    incomeEmployment: 6,
    communityEnvironment: 3,
    position: {
      x: 180,
      y: 300
    },
    happinessScore: 71.86,
    ranking: 2
  },
  MADISON: {
    city: "Madison",
    constant: MADISON,
    "class": MADISON_CLASS,
    color: MADISON_COLOR,
    emotionalWellbeing: 2,
    incomeEmployment: 8,
    communityEnvironment: 4,
    position: {
      x: 640,
      y: 160
    },
    happinessScore: 71.81,
    ranking: 3
  },
  FREMONT: {
    city: "Fremont",
    constant: FREMONT,
    "class": FREMONT_CLASS,
    color: FREMONT_COLOR,
    emotionalWellbeing: 5,
    incomeEmployment: 20,
    communityEnvironment: 1,
    position: {
      x: 151,
      y: 225
    },
    happinessScore: 71.17,
    ranking: 4
  },
  HUNTINGTON_BEACH: {
    city: "Huntington Beach",
    constant: HUNTINGTON_BEACH,
    "class": HUNTINGTON_BEACH_CLASS,
    color: HUNTINGTON_BEACH_COLOR,
    emotionalWellbeing: 3,
    incomeEmployment: 25,
    communityEnvironment: 15,
    position: {
      x: 159,
      y: 290
    },
    happinessScore: 69.74,
    ranking: 5
  },
  FARGO: {
    city: "Fargo",
    constant: FARGO,
    "class": FARGO_CLASS,
    color: FARGO_COLOR,
    emotionalWellbeing: 9,
    incomeEmployment: 11,
    communityEnvironment: 13,
    position: {
      x: 498,
      y: 94
    },
    happinessScore: 69.57,
    ranking: 6
  },
  GRAND_PRAIRIE: {
    city: "Grand Prairie",
    constant: GRAND_PRAIRIE,
    "class": GRAND_PRAIRIE_CLASS,
    color: GRAND_PRAIRIE_COLOR,
    emotionalWellbeing: 11,
    incomeEmployment: 19,
    communityEnvironment: 3,
    position: {
      x: 525,
      y: 410
    },
    happinessScore: 69.3,
    ranking: 7
  },
  SAN_JOSE: {
    city: "San Jose",
    constant: SAN_JOSE,
    "class": SAN_JOSE_CLASS,
    color: SAN_JOSE_COLOR,
    emotionalWellbeing: 1,
    incomeEmployment: 10,
    communityEnvironment: 24,
    position: {
      x: 140,
      y: 240
    },
    happinessScore: 68.9,
    ranking: 8
  },
  SCOTTSDALE: {
    city: "Scottsdale",
    constant: SCOTTSDALE,
    "class": SCOTTSDALE_CLASS,
    color: SCOTTSDALE_COLOR,
    emotionalWellbeing: 25,
    incomeEmployment: 7,
    communityEnvironment: 1,
    position: {
      x: 270,
      y: 341
    },
    happinessScore: 68.24,
    ranking: 9
  },
  SAN_FRANCISCO: {
    city: "San Francisco",
    constant: SAN_FRANCISCO,
    "class": SAN_FRANCISCO_CLASS,
    color: SAN_FRANCISCO_COLOR,
    emotionalWellbeing: 2,
    incomeEmployment: 1,
    communityEnvironment: 69,
    position: {
      x: 136,
      y: 212
    },
    happinessScore: 67.53,
    ranking: 10
  },
  BISMARCK: {
    city: "Bismarck",
    constant: BISMARCK,
    "class": BISMARCK_CLASS,
    color: BISMARCK_COLOR,
    emotionalWellbeing: 14,
    incomeEmployment: 2,
    communityEnvironment: 25,
    position: {
      x: 478,
      y: 106
    },
    happinessScore: 67.38,
    ranking: 11
  },
  OVERLAND_PARK: {
    city: "Overland Park",
    constant: OVERLAND_PARK,
    "class": OVERLAND_PARK_CLASS,
    color: OVERLAND_PARK_COLOR,
    emotionalWellbeing: 12,
    incomeEmployment: 31,
    communityEnvironment: 14,
    position: {
      x: 570,
      y: 278
    },
    happinessScore: 67.37,
    ranking: 12
  },
  SANTA_ROSA: {
    city: "Santa Rosa",
    constant: SANTA_ROSA,
    "class": SANTA_ROSA_CLASS,
    color: SANTA_ROSA_COLOR,
    emotionalWellbeing: 13,
    incomeEmployment: 29,
    communityEnvironment: 5,
    position: {
      x: 132,
      y: 196
    },
    happinessScore: 67.18,
    ranking: 13
  },
  AUSTIN: {
    city: "Austin",
    constant: AUSTIN,
    "class": AUSTIN_CLASS,
    color: AUSTIN_COLOR,
    emotionalWellbeing: 8,
    incomeEmployment: 4,
    communityEnvironment: 44,
    position: {
      x: 497,
      y: 430
    },
    happinessScore: 67.16,
    ranking: 14
  },
  SIOUX_FALLS: {
    city: "Sioux Falls",
    constant: SIOUX_FALLS,
    "class": SIOUX_FALLS_CLASS,
    color: SIOUX_FALLS_COLOR,
    emotionalWellbeing: 6,
    incomeEmployment: 37,
    communityEnvironment: 52,
    position: {
      x: 500,
      y: 168
    },
    happinessScore: 66.97,
    ranking: 15
  },
  PEARL_CITY: {
    city: "Pearl City",
    constant: PEARL_CITY,
    "class": PEARL_CITY_CLASS,
    color: PEARL_CITY_COLOR,
    emotionalWellbeing: 1,
    incomeEmployment: 81,
    communityEnvironment: 8,
    position: {
      x: 350,
      y: 491
    },
    happinessScore: 66.77,
    ranking: 16
  },
  GLENDALE: {
    city: "Glendale",
    constant: GLENDALE,
    "class": GLENDALE_CLASS,
    color: GLENDALE_COLOR,
    emotionalWellbeing: 15,
    incomeEmployment: 56,
    communityEnvironment: 7,
    position: {
      x: 167,
      y: 272
    },
    happinessScore: 66.25,
    ranking: 17
  },
  SAN_DIEGO: {
    city: "San Diego",
    constant: SAN_DIEGO,
    "class": SAN_DIEGO_CLASS,
    color: SAN_DIEGO_COLOR,
    emotionalWellbeing: 4,
    incomeEmployment: 20,
    communityEnvironment: 25,
    position: {
      x: 187,
      y: 321
    },
    happinessScore: 66.01,
    ranking: 18
  },
  ST_PAUL: {
    city: "St. Paul",
    constant: ST_PAUL,
    "class": ST_PAUL_CLASS,
    color: ST_PAUL_COLOR,
    emotionalWellbeing: 10,
    incomeEmployment: 38,
    communityEnvironment: 36,
    position: {
      x: 590,
      y: 133
    },
    happinessScore: 65.79,
    ranking: 19
  },
  CHARLESTON: {
    city: "Charleston",
    constant: CHARLESTON,
    "class": CHARLESTON_CLASS,
    color: CHARLESTON_COLOR,
    emotionalWellbeing: 41,
    incomeEmployment: 3,
    communityEnvironment: 2,
    position: {
      x: 805,
      y: 400
    },
    happinessScore: 65.48,
    ranking: 20
  },
  GILBERT: {
    city: "Gilbert",
    constant: GILBERT,
    "class": GILBERT_CLASS,
    color: GILBERT_COLOR,
    emotionalWellbeing: 30,
    incomeEmployment: 26,
    communityEnvironment: 5,
    position: {
      x: 277,
      y: 363
    },
    happinessScore: 65.07,
    ranking: 21
  },
  ANAHEIM: {
    city: "Anaheim",
    constant: ANAHEIM,
    "class": ANAHEIM_CLASS,
    color: ANAHEIM_COLOR,
    emotionalWellbeing: 16,
    incomeEmployment: 43,
    communityEnvironment: 19,
    position: {
      x: 196,
      y: 282
    },
    happinessScore: 65.02,
    ranking: 22
  },
  RALEIGH: {
    city: "Raleigh",
    constant: RALEIGH,
    "class": RALEIGH_CLASS,
    color: RALEIGH_COLOR,
    emotionalWellbeing: 7,
    incomeEmployment: 23,
    communityEnvironment: 48,
    position: {
      x: 830,
      y: 313
    },
    happinessScore: 64.99,
    ranking: 23
  },
  CAPE_CORAL: {
    city: "Cape Coral",
    constant: CAPE_CORAL,
    "class": CAPE_CORAL_CLASS,
    color: CAPE_CORAL_COLOR,
    emotionalWellbeing: 28,
    incomeEmployment: 48,
    communityEnvironment: 2,
    position: {
      x: 800,
      y: 480
    },
    happinessScore: 64.96,
    ranking: 24
  },
  CEDAR_RAPIDS: {
    city: "Cedar Rapids",
    constant: CEDAR_RAPIDS,
    "class": CEDAR_RAPIDS_CLASS,
    color: CEDAR_RAPIDS_COLOR,
    emotionalWellbeing: 23,
    incomeEmployment: 32,
    communityEnvironment: 11,
    position: {
      x: 600,
      y: 205
    },
    happinessScore: 64.9,
    ranking: 25
  }
};
var ANIMATION_DURATION = 1000;
var ANIMATION_DELAY = 0;
var ANIMATION_EASING = d3.easePoly;
var WIDTH = 1000;
var HEIGHT = 600;
var MARGINS = 100;

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Filter =
/*#__PURE__*/
function () {
  function Filter() {
    _classCallCheck(this, Filter);

    this.filterData();
  }

  _createClass(Filter, [{
    key: "filterData",
    value: function filterData() {
      var tooltip = d3.select(".header__tooltip").append("div").style("opacity", 0).attr("class", "tooltip").style("background-color", "white").style("border", "solid").style("border-width", "2px").style("border-radius", "5px").style("padding", "1rem");
      d3.selectAll('.city').on('mouseover', function (d, i) {
        var className;

        if (typeof d === 'string') {
          className = "city-".concat(d.split(' ').join('-'));
        } else if (d.data) {
          className = d.data["class"];
        } else {
          className = d["class"];
        }

        var allOtherCityData = document.querySelectorAll(".city:not(.".concat(className, ")"));
        allOtherCityData.forEach(function (data) {
          data.classList.add('filter');
        }); // tooltip  

        tooltip.style("opacity", 1).style("stroke", "black").html("\n              <div class=\"tooltip__inner\">\n                <p class=\"tooltip__city\"><strong>City: </strong><span>".concat(d.city, "</span></p>\n                <p class=\"tooltip__detail\"><strong>Overall Rank:</strong> <span>").concat(d.ranking, "</span></p>\n                <p class=\"tooltip__detail\"><strong>Total Happiness Score:</strong> <span>").concat(d.happinessScore, "/100</span></p>\n                <p class=\"tooltip__detail\"><strong>Emotional & Physical Well-Being:</strong> <span>").concat(d.emotionalWellbeing, "</span></p>\n                <p class=\"tooltip__detail\"><strong>Income & Employment:</strong> <span>").concat(d.incomeEmployment, "</span></p>\n                <p class=\"tooltip__detail\"><strong>Community & Environment:</strong> <span>").concat(d.communityEnvironment, "</span></p>\n              </div>\n            "));
        var mainHeader = document.querySelector('.main__header');
        mainHeader.setAttribute('style', "color: ".concat(d.color));
      }).on('mouseleave', function () {
        var allCityData = document.querySelectorAll('.city');
        allCityData.forEach(function (data) {
          data.classList.remove('filter');
        });
        var mainHeader = document.querySelector(".main__header");
        mainHeader.setAttribute("style", "color: initial");
      });
    }
  }]);

  return Filter;
}();

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./src/filter.js");
/* harmony import */ var _world_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world_graph */ "./src/world_graph.js");
// import _ from 'lodash';


var worldGraph;
document.addEventListener("DOMContentLoaded", function () {
  worldGraph = new _world_graph__WEBPACK_IMPORTED_MODULE_1__["default"]("svg.graph"); // new Filter;
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

    _this.getData(); // this.lines();
    // this.circles();
    // this.percentageLabels();
    // this.labelTop("Happiness Ranking");
    // this.gridLines(this.xScale, "axisBottom");
    // this.gridLines(this.yScale, "axisRight");


    return _this;
  }

  _createClass(WorldGraph, [{
    key: "getData",
    value: function getData() {
      var that = this;
      d3.json("/dist/data/countries.json").then(function (data) {
        that.setData(data); // that.setRadius();
        // that.lines();

        that.circles(); // that.tooltips();
        // that.percentageLabels();
      });
    }
  }, {
    key: "circles",
    value: function circles() {
      var _this2 = this;

      // tooltip
      var tooltip = d3.select("body").append("div").style("visibility", "hidden").attr("class", "tooltip").style("background-color", "black").style("border-radius", "5px").style("padding", "10px").style("color", "white").style("z-index", "999999999").style("position", "absolute").style("display", "block");

      var showTooltip = function showTooltip(d) {
        tooltip.transition().duration(200);
        tooltip.style("visibility", "visible").html("\n              <strong>Country:</strong> ".concat(d.country, " (").concat(d.continent, ")<br/>\n              <strong>Happiness Ranking:</strong> ").concat(d.ranking, "\n            ")).style("top", d3.event.clientY - 100 + "px").style("left", d3.event.clientX - 160 + "px"); // .style("top", d3.mouse(d3.event.target)[1] + 80 + "px")
        // .style("left", d3.mouse(d3.event.target)[0] - 40 + "px");
      };

      var moveTooltip = function moveTooltip(d) {
        showTooltip(d);
        console.log("move tooltip");
        tooltip // .style("top", d3.mouse(d3.event.target)[1] + 80 + "px")
        // .style("left", d3.mouse(d3.event.target)[0] - 40 + "px")
        .style("top", d3.event.clientY - 100 + "px").style("left", d3.event.clientX - 160 + "px");
      };

      var hideTooltip = function hideTooltip(d) {
        console.log("hide tooltip");
        tooltip.transition().duration(200).style("visibility", "hidden");
      }; // chart rendering


      this.chart.selectAll("circle").data(Object.values(this.data)).enter().append("circle").attr("class", function (d) {
        return "country ".concat(d["class"], " country-bubble");
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
        return _this2.xScale(d.graphGdp / 156) + 25;
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
      }); // legend

      var continents = {
        AFRICA: {
          continent: 'Africa'
        },
        ASIA: {
          continent: 'Asia'
        },
        NORTH_AMERICA: {
          continent: 'North America'
        },
        SOUTH_AMERICA: {
          continent: 'South America'
        },
        EUROPE: {
          continent: 'Europe'
        }
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
      });
      legend.append("text").attr("x", 25).attr("text-anchor", "start").attr("dy", "1em").attr("y", function (d, i) {
        return 20 * i;
      }).text(function (d) {
        return d.continent;
      }).attr("font-size", "12px");
      legend.append("text").attr("x", 31).attr("dy", "-.2em").attr("y", -10).text("Continent").attr("font-size", "17px").style("text-align", "left");
    } // tooltips() {
    //   let tooltip = this.chart
    //     .append("div")
    //     .style("visibility", "hidden")
    //     .attr("class", "tooltip")
    //     .style("background-color", "black")
    //     .style("border-radius", "5px")
    //     .style("padding", "10px")
    //     .style("color", "white");
    //     let showTooltip = d => {
    //       tooltip
    //         .transition()
    //         .duration(200);
    //       tooltip
    //         .style("opacity", 1)
    //         .html(
    //           `
    //             Country: ${d.country}<br/>
    //             Continent: ${d.continent}<br/>
    //             Happiness Ranking: ${d.ranking}<br/>
    //             Social Support: ${d.socialSupport}<br/>
    //             Freedom: ${d.freedom}<br/>
    //             Generosity: ${d.generosity}<br/>
    //             GDP Per Capita: ${d.gdp}<br/>
    //             Life Expectancy: ${d.lifeExpectancy}<br/>
    //           `
    //         )
    //         .style("left", d3.mouse(this)[0] + 30 + "px")
    //         .style("top", d3.mouse(this)[1] + 30 + "px");
    //     }
    //     let moveTooltip = d => {
    //       tooltip
    //         .style("left", (d3.mouse(this)[0] + 30) + "px")
    //         .style("top", (d3.mouse(this)[1] + 30) + "px")
    //     }
    //     let hideTooltip = d => {
    //       tooltip
    //         .transition()
    //         .duration(200)
    //         .style("opacity", 0)
    //     }
    // }

  }]);

  return WorldGraph;
}(_chart__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (WorldGraph);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkX2dyYXBoLmpzIl0sIm5hbWVzIjpbIkNoYXJ0Iiwic2VsZWN0b3IiLCJvcHRpb25zIiwic2V0Q2hhcnQiLCJzZXRMYWJlbHMiLCJ0b3BPZmZzZXQiLCJsZWZ0T2Zmc2V0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwiSEVJR0hUIiwiTUFSR0lOUyIsIldJRFRIIiwiY2hhcnQiLCJhcHBlbmQiLCJkYXRhIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidGlja3MiLCJ0aWNrRm9ybWF0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsImRvbWFpbiIsInhBeGlzQ2FsbCIsImF4aXNCb3R0b20iLCJmb3JtYXQiLCJjYWxsIiwieVNjYWxlIiwicGFkZGluZyIsImF4aXNMZWZ0IiwieExhYmVsIiwidGV4dCIsInlMYWJlbCIsIlBMQU5PIiwiUExBTk9fQ0lUWSIsIlBMQU5PX0NMQVNTIiwiUExBTk9fQ09MT1IiLCJJUlZJTkUiLCJJUlZJTkVfQ0lUWSIsIklSVklORV9DTEFTUyIsIklSVklORV9DT0xPUiIsIk1BRElTT04iLCJNQURJU09OX0NJVFkiLCJNQURJU09OX0NMQVNTIiwiTUFESVNPTl9DT0xPUiIsIkZSRU1PTlQiLCJGUkVNT05UX0NJVFkiLCJGUkVNT05UX0NMQVNTIiwiRlJFTU9OVF9DT0xPUiIsIkhVTlRJTkdUT05fQkVBQ0giLCJIVU5USU5HVE9OX0JFQUNIX0NJVFkiLCJIVU5USU5HVE9OX0JFQUNIX0NMQVNTIiwiSFVOVElOR1RPTl9CRUFDSF9DT0xPUiIsIkZBUkdPIiwiRkFSR09fQ0lUWSIsIkZBUkdPX0NMQVNTIiwiRkFSR09fQ09MT1IiLCJHUkFORF9QUkFJUklFIiwiR1JBTkRfUFJBSVJJRV9DSVRZIiwiR1JBTkRfUFJBSVJJRV9DTEFTUyIsIkdSQU5EX1BSQUlSSUVfQ09MT1IiLCJTQU5fSk9TRSIsIlNBTl9KT1NFX0NJVFkiLCJTQU5fSk9TRV9DTEFTUyIsIlNBTl9KT1NFX0NPTE9SIiwiU0NPVFRTREFMRSIsIlNDT1RUU0RBTEVfQ0lUWSIsIlNDT1RUU0RBTEVfQ0xBU1MiLCJTQ09UVFNEQUxFX0NPTE9SIiwiU0FOX0ZSQU5DSVNDTyIsIlNBTl9GUkFOQ0lTQ09fQ0lUWSIsIlNBTl9GUkFOQ0lTQ09fQ0xBU1MiLCJTQU5fRlJBTkNJU0NPX0NPTE9SIiwiQklTTUFSQ0siLCJCSVNNQVJDS19DSVRZIiwiQklTTUFSQ0tfQ0xBU1MiLCJCSVNNQVJDS19DT0xPUiIsIk9WRVJMQU5EX1BBUksiLCJPVkVSTEFORF9QQVJLX0NJVFkiLCJPVkVSTEFORF9QQVJLX0NMQVNTIiwiT1ZFUkxBTkRfUEFSS19DT0xPUiIsIlNBTlRBX1JPU0EiLCJTQU5UQV9ST1NBX0NJVFkiLCJTQU5UQV9ST1NBX0NMQVNTIiwiU0FOVEFfUk9TQV9DT0xPUiIsIkFVU1RJTiIsIkFVU1RJTl9DSVRZIiwiQVVTVElOX0NMQVNTIiwiQVVTVElOX0NPTE9SIiwiU0lPVVhfRkFMTFMiLCJTSU9VWF9GQUxMU19DSVRZIiwiU0lPVVhfRkFMTFNfQ0xBU1MiLCJTSU9VWF9GQUxMU19DT0xPUiIsIlBFQVJMX0NJVFkiLCJQRUFSTF9DSVRZX0NJVFkiLCJQRUFSTF9DSVRZX0NMQVNTIiwiUEVBUkxfQ0lUWV9DT0xPUiIsIkdMRU5EQUxFIiwiR0xFTkRBTEVfQ0lUWSIsIkdMRU5EQUxFX0NMQVNTIiwiR0xFTkRBTEVfQ09MT1IiLCJTQU5fRElFR08iLCJTQU5fRElFR09fQ0lUWSIsIlNBTl9ESUVHT19DTEFTUyIsIlNBTl9ESUVHT19DT0xPUiIsIlNUX1BBVUwiLCJTVF9QQVVMX0NJVFkiLCJTVF9QQVVMX0NMQVNTIiwiU1RfUEFVTF9DT0xPUiIsIkNIQVJMRVNUT04iLCJDSEFSTEVTVE9OX0NJVFkiLCJDSEFSTEVTVE9OX0NMQVNTIiwiQ0hBUkxFU1RPTl9DT0xPUiIsIkdJTEJFUlQiLCJHSUxCRVJUX0NJVFkiLCJHSUxCRVJUX0NMQVNTIiwiR0lMQkVSVF9DT0xPUiIsIkFOQUhFSU0iLCJBTkFIRUlNX0NJVFkiLCJBTkFIRUlNX0NMQVNTIiwiQU5BSEVJTV9DT0xPUiIsIlJBTEVJR0giLCJSQUxFSUdIX0NJVFkiLCJSQUxFSUdIX0NMQVNTIiwiUkFMRUlHSF9DT0xPUiIsIkNBUEVfQ09SQUwiLCJDQVBFX0NPUkFMX0NJVFkiLCJDQVBFX0NPUkFMX0NMQVNTIiwiQ0FQRV9DT1JBTF9DT0xPUiIsIkNFREFSX1JBUElEUyIsIkNFREFSX1JBUElEU19DSVRZIiwiQ0VEQVJfUkFQSURTX0NMQVNTIiwiQ0VEQVJfUkFQSURTX0NPTE9SIiwiQ0lUSUVTIiwiY2l0eSIsImNvbnN0YW50IiwiY29sb3IiLCJlbW90aW9uYWxXZWxsYmVpbmciLCJpbmNvbWVFbXBsb3ltZW50IiwiY29tbXVuaXR5RW52aXJvbm1lbnQiLCJwb3NpdGlvbiIsIngiLCJ5IiwiaGFwcGluZXNzU2NvcmUiLCJyYW5raW5nIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwiQU5JTUFUSU9OX0RFTEFZIiwiQU5JTUFUSU9OX0VBU0lORyIsImVhc2VQb2x5IiwiRmlsdGVyIiwiZmlsdGVyRGF0YSIsInRvb2x0aXAiLCJzdHlsZSIsInNlbGVjdEFsbCIsIm9uIiwiZCIsImkiLCJjbGFzc05hbWUiLCJzcGxpdCIsImpvaW4iLCJhbGxPdGhlckNpdHlEYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsImh0bWwiLCJtYWluSGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImFsbENpdHlEYXRhIiwicmVtb3ZlIiwid29ybGRHcmFwaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJXb3JsZEdyYXBoIiwib25yZXNpemUiLCJyZWRyYXciLCJ4QXhpcyIsInlBeGlzIiwiZ2V0RGF0YSIsInRoYXQiLCJqc29uIiwidGhlbiIsInNldERhdGEiLCJjaXJjbGVzIiwic2hvd1Rvb2x0aXAiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb3VudHJ5IiwiY29udGluZW50IiwiZXZlbnQiLCJjbGllbnRZIiwiY2xpZW50WCIsIm1vdmVUb29sdGlwIiwiaGlkZVRvb2x0aXAiLCJPYmplY3QiLCJ2YWx1ZXMiLCJlbnRlciIsImdyYXBoR2RwIiwiZGVsYXkiLCJlYXNlIiwicG9wdWxhdGlvbiIsImdyYXBoUmFua2luZyIsImNvbnRpbmVudHMiLCJBRlJJQ0EiLCJBU0lBIiwiTk9SVEhfQU1FUklDQSIsIlNPVVRIX0FNRVJJQ0EiLCJFVVJPUEUiLCJsZWdlbmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xG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LE9BSHZCLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWMsS0FKZCxFQUtHQSxJQUxILENBS1EsR0FMUixFQUthLFVBQVN3SixDQUFULEVBQVlDLENBQVosRUFBZTtBQUN4QixlQUFPLEtBQUtBLENBQVo7QUFDRCxPQVBILEVBUUc3SCxJQVJILENBUVEsVUFBUzRILENBQVQsRUFBWTtBQUNoQixlQUFPQSxDQUFDLENBQUNrQyxTQUFUO0FBQ0QsT0FWSCxFQVdHMUwsSUFYSCxDQVdRLFdBWFIsRUFXcUIsTUFYckI7QUFhQThNLFlBQU0sQ0FDSHpNLE1BREgsQ0FDVSxNQURWLEVBRUdMLElBRkgsQ0FFUSxHQUZSLEVBRWEsRUFGYixFQUdHQSxJQUhILENBR1EsSUFIUixFQUdjLE9BSGQsRUFJR0EsSUFKSCxDQUlRLEdBSlIsRUFJYSxDQUFDLEVBSmQsRUFLRzRCLElBTEgsQ0FLUSxXQUxSLEVBTUc1QixJQU5ILENBTVEsV0FOUixFQU1xQixNQU5yQixFQU9HcUosS0FQSCxDQU9TLFlBUFQsRUFPdUIsTUFQdkI7QUFRSCxLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztFQTlPdUIvSiw4Qzs7QUFpUFZxTCx5RUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7XG4gIEhFSUdIVCxcbiAgTUFSR0lOUyxcbiAgV0lEVEgsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbiAgQU5JTUFUSU9OX0RFTEFZLFxuICBBTklNQVRJT05fRUFTSU5HXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyk7XG4gICAgLy8gdGhpcy5nZXREYXRhKCk7XG4gICAgdGhpcy5zZXRMYWJlbHMoKTtcbiAgfVxuXG4gIHNldENoYXJ0KHNlbGVjdG9yLCBvcHRpb25zID0geyB0b3BPZmZzZXQ6IDAsIGxlZnRPZmZzZXQ6IDAgfSkge1xuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KHNlbGVjdG9yKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOUyAqIDIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOUyAqIDIpO1xuICAgIHRoaXMuY2hhcnQgPSBzdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgYHRyYW5zbGF0ZSgke01BUkdJTlMgKyBvcHRpb25zLmxlZnRPZmZzZXR9LCAke01BUkdJTlMgLyAyICtcbiAgICAgICAgICBvcHRpb25zLnRvcE9mZnNldH0pYFxuICAgICAgKTtcbiAgfVxuXG4gIHNldERhdGEoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICByZWRyYXcoc2VsZWN0b3IpIHtcbiAgICAvLyBsZXQgZ3JhcGhEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3ZnLmdyYXBoXCIpO1xuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnNvbGUubG9nKGBuZXcgd2lkdGg6ICR7d2lkdGh9YClcbiAgICBsZXQgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnNvbGUubG9nKGBuZXcgaGVpZ2h0OiAke2hlaWdodH1gKVxuICAgIGQzLnNlbGVjdChzZWxlY3RvcilcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgTUFSR0lOUyAqIDIpXG4gICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0ICsgTUFSR0lOUyAqIDIpO1xuICB9XG5cbiAgeEF4aXModGlja3MgPSAyMCwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgdGhpcy54U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgLmRvbWFpbihbMCwgMV0pO1xuICAgIGxldCB4QXhpc0NhbGwgPSBkM1xuICAgICAgLmF4aXNCb3R0b20odGhpcy54U2NhbGUpXG4gICAgICAudGlja3ModGlja3MpXG4gICAgICAudGlja0Zvcm1hdChkMy5mb3JtYXQoXCIuMCVcIikpO1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7SEVJR0hUfSlgKVxuICAgICAgLmNhbGwoeEF4aXNDYWxsKTtcbiAgfVxuXG4gIHlBeGlzKGRvbWFpbiwgeVNjYWxlLCB0aWNrcyA9IDUsIHRpY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIGlmICh5U2NhbGUgPT09IFwic2NhbGVCYW5kXCIpIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIEhFSUdIVCAtIDUwXSlcbiAgICAgICAgLnBhZGRpbmcoMC44KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgSEVJR0hUIC0gNTBdKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0LmFwcGVuZChcImdcIikuY2FsbChcbiAgICAgIGQzXG4gICAgICAgIC5heGlzTGVmdCh0aGlzLnlTY2FsZSlcbiAgICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgICAudGlja0Zvcm1hdCh0aWNrRm9ybWF0KCkpXG4gICAgKTtcbiAgfVxuXG4gIHNldExhYmVscygpIHtcbiAgICAvLyBMYWJlbHNcbiAgICB2YXIgeExhYmVsID0gdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInlcIiwgSEVJR0hUICsgNTApXG4gICAgICAuYXR0cihcInhcIiwgV0lEVEggLyAyKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMHB4XCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkdEUCBQZXIgQ2FwaXRhICgkKVwiKTtcbiAgICB2YXIgeUxhYmVsID0gdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAuYXR0cihcInlcIiwgLTY1KVxuICAgICAgLmF0dHIoXCJ4XCIsIC0zMDApXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIwcHhcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC50ZXh0KFwiSGFwcGluZXNzIEluZGV4ICglKVwiKTtcbiAgfVxuXG4gIC8vIGdyaWRMaW5lcyhzY2FsZSwgcG9zaXRpb24sIHRpY2tzID0gNSkge1xuICAvLyAgIHRoaXMuY2hhcnRcbiAgLy8gICAgIC5hcHBlbmQoXCJnXCIpXG4gIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JpZFwiKVxuICAvLyAgICAgLmNhbGwoZDNbcG9zaXRpb25dKSgpXG4gIC8vICAgICAuc2NhbGUoc2NhbGUpXG4gIC8vICAgICAudGlja1NpemUoV0lEVEgsIDAsIDApXG4gIC8vICAgICAudGlja0Zvcm1hdChcIlwiKVxuICAvLyAgICAgLnRpY2tzKHRpY2tzKTtcbiAgLy8gfVxuXG4gIC8vIHJlY3RhbmdsZUxhYmVscyh0ZXh0KSB7XG4gIC8vICAgdGhpcy5jaGFydFxuICAvLyAgICAgLnNlbGVjdEFsbCgpXG4gIC8vICAgICAuZGF0YSh0aGlzLnNvcnRlZERhdGEpXG4gIC8vICAgICAuZW50ZXIoKVxuICAvLyAgICAgLmFwcGVuZChcInRleHRcIilcbiAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBgY2l0eSAke2QuY2xhc3N9IGJhci1sYWJlbCBjaXR5LWRhdGEtdG9nZ2xlYClcbiAgLy8gICAgIC5hdHRyKFwieFwiLCA1KVxuICAvLyAgICAgLmF0dHIoXCJ5XCIsIGQgPT4gdGhpcy55U2NhbGUoZC5jaXR5KSAtIDIpXG4gIC8vICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiI2ZmZlwiKVxuICAvLyAgICAgLnRleHQoKGQsIGkpID0+IHtcbiAgLy8gICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gIC8vICAgICAgICAgcmV0dXJuIGRbdGV4dF07XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgcmV0dXJuIHRleHQuY2FsbChkLCBpKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSlcbiAgLy8gICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gIC8vIH1cblxuICAvLyBsYWJlbFRvcCh0ZXh0KSB7XG4gIC8vICAgdGhpcy5jaGFydFxuICAvLyAgICAgLmFwcGVuZChcInRleHRcIilcbiAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbC10ZXh0XCIpXG4gIC8vICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gIC8vICAgICAuYXR0cihcInhcIiwgV0lEVEggLyAyKVxuICAvLyAgICAgLmF0dHIoXCJ5XCIsIC0yMClcbiAgLy8gICAgIC50ZXh0KHRleHQpO1xuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIiwiZXhwb3J0IGNvbnN0IFBMQU5PID0gXCJQTEFOT1wiO1xuY29uc3QgUExBTk9fQ0lUWSA9IFwiUGxhbm9cIjtcbmNvbnN0IFBMQU5PX0NMQVNTID0gXCJjaXR5LVBsYW5vXCI7XG5jb25zdCBQTEFOT19DT0xPUiA9IFwiIzUxZWFlYVwiO1xuXG5leHBvcnQgY29uc3QgSVJWSU5FID0gXCJJUlZJTkVcIjtcbmNvbnN0IElSVklORV9DSVRZID0gXCJJUlZJTkVcIjtcbmNvbnN0IElSVklORV9DTEFTUyA9IFwiY2l0eS1JcnZpbmVcIjtcbmNvbnN0IElSVklORV9DT0xPUiA9IFwiI2ZmOWQ3NlwiO1xuXG5leHBvcnQgY29uc3QgTUFESVNPTiA9IFwiTUFESVNPTlwiO1xuY29uc3QgTUFESVNPTl9DSVRZID0gXCJNQURJU09OXCI7XG5jb25zdCBNQURJU09OX0NMQVNTID0gXCJjaXR5LU1hZGlzb25cIjtcbmNvbnN0IE1BRElTT05fQ09MT1IgPSBcIiNmYjM1NjlcIjtcblxuZXhwb3J0IGNvbnN0IEZSRU1PTlQgPSBcIkZSRU1PTlRcIjtcbmNvbnN0IEZSRU1PTlRfQ0lUWSA9IFwiRlJFTU9OVFwiO1xuY29uc3QgRlJFTU9OVF9DTEFTUyA9IFwiY2l0eS1GcmVtb250XCI7XG5jb25zdCBGUkVNT05UX0NPTE9SID0gXCIjZmE4NmJlXCI7XG5cbmV4cG9ydCBjb25zdCBIVU5USU5HVE9OX0JFQUNIID0gXCJIVU5USU5HVE9OX0JFQUNIXCI7XG5jb25zdCBIVU5USU5HVE9OX0JFQUNIX0NJVFkgPSBcIkhVTlRJTkdUT05fQkVBQ0hcIjtcbmNvbnN0IEhVTlRJTkdUT05fQkVBQ0hfQ0xBU1MgPSBcImNpdHktSHVudGluZ3Rvbi1CZWFjaFwiO1xuY29uc3QgSFVOVElOR1RPTl9CRUFDSF9DT0xPUiA9IFwiI2EyNzVlM1wiO1xuXG5leHBvcnQgY29uc3QgRkFSR08gPSBcIkZBUkdPXCI7XG5jb25zdCBGQVJHT19DSVRZID0gXCJGQVJHT1wiO1xuY29uc3QgRkFSR09fQ0xBU1MgPSBcImNpdHktRmFyZ29cIjtcbmNvbnN0IEZBUkdPX0NPTE9SID0gXCIjZmYxZjVhXCI7XG5cbmV4cG9ydCBjb25zdCBHUkFORF9QUkFJUklFID0gXCJHUkFORF9QUkFJUklFXCI7XG5jb25zdCBHUkFORF9QUkFJUklFX0NJVFkgPSBcIkdSQU5EX1BSQUlSSUVcIjtcbmNvbnN0IEdSQU5EX1BSQUlSSUVfQ0xBU1MgPSBcImNpdHktR3JhbmQtUHJhaXJpZVwiO1xuY29uc3QgR1JBTkRfUFJBSVJJRV9DT0xPUiA9IFwiIzY5MDBmZlwiO1xuXG5leHBvcnQgY29uc3QgU0FOX0pPU0UgPSBcIlNBTl9KT1NFXCI7XG5jb25zdCBTQU5fSk9TRV9DSVRZID0gXCJTQU5fSk9TRVwiO1xuY29uc3QgU0FOX0pPU0VfQ0xBU1MgPSBcImNpdHktU2FuLUpvc2VcIjtcbmNvbnN0IFNBTl9KT1NFX0NPTE9SID0gXCIjZmZkNzAwXCI7XG5cbmV4cG9ydCBjb25zdCBTQ09UVFNEQUxFID0gXCJTQ09UVFNEQUxFXCI7XG5jb25zdCBTQ09UVFNEQUxFX0NJVFkgPSBcIlNDT1RUU0RBTEVcIjtcbmNvbnN0IFNDT1RUU0RBTEVfQ0xBU1MgPSBcImNpdHktU2NvdHRzZGFsZVwiO1xuY29uc3QgU0NPVFRTREFMRV9DT0xPUiA9IFwiI2ZmNjEzOFwiO1xuXG5leHBvcnQgY29uc3QgU0FOX0ZSQU5DSVNDTyA9IFwiU0FOX0ZSQU5DSVNDT1wiO1xuY29uc3QgU0FOX0ZSQU5DSVNDT19DSVRZID0gXCJTQU5fRlJBTkNJU0NPXCI7XG5jb25zdCBTQU5fRlJBTkNJU0NPX0NMQVNTID0gXCJjaXR5LVNhbi1GcmFuY2lzY29cIjtcbmNvbnN0IFNBTl9GUkFOQ0lTQ09fQ09MT1IgPSBcIiMzMDM0ODFcIjtcblxuZXhwb3J0IGNvbnN0IEJJU01BUkNLID0gXCJCSVNNQVJDS1wiO1xuY29uc3QgQklTTUFSQ0tfQ0lUWSA9IFwiQklTTUFSQ0tcIjtcbmNvbnN0IEJJU01BUkNLX0NMQVNTID0gXCJjaXR5LUJpc21hcmNrXCI7XG5jb25zdCBCSVNNQVJDS19DT0xPUiA9IFwiIzdjYmQxZVwiO1xuXG5leHBvcnQgY29uc3QgT1ZFUkxBTkRfUEFSSyA9IFwiT1ZFUkxBTkRfUEFSS1wiO1xuY29uc3QgT1ZFUkxBTkRfUEFSS19DSVRZID0gXCJPVkVSTEFORF9QQVJLXCI7XG5jb25zdCBPVkVSTEFORF9QQVJLX0NMQVNTID0gXCJjaXR5LU92ZXJsYW5kLVBhcmtcIjtcbmNvbnN0IE9WRVJMQU5EX1BBUktfQ09MT1IgPSBcIiMwMDkzNzhcIjtcblxuZXhwb3J0IGNvbnN0IFNBTlRBX1JPU0EgPSBcIlNBTlRBX1JPU0FcIjtcbmNvbnN0IFNBTlRBX1JPU0FfQ0lUWSA9IFwiU0FOVEFfUk9TQVwiO1xuY29uc3QgU0FOVEFfUk9TQV9DTEFTUyA9IFwiY2l0eS1TYW50YS1Sb3NhXCI7XG5jb25zdCBTQU5UQV9ST1NBX0NPTE9SID0gXCIjZjYwYzg2XCI7XG5cbmV4cG9ydCBjb25zdCBBVVNUSU4gPSBcIkFVU1RJTlwiO1xuY29uc3QgQVVTVElOX0NJVFkgPSBcIkFVU1RJTlwiO1xuY29uc3QgQVVTVElOX0NMQVNTID0gXCJjaXR5LUF1c3RpblwiO1xuY29uc3QgQVVTVElOX0NPTE9SID0gXCIjZjlkMDBmXCI7XG5cbmV4cG9ydCBjb25zdCBTSU9VWF9GQUxMUyA9IFwiU0lPVVhfRkFMTFNcIjtcbmNvbnN0IFNJT1VYX0ZBTExTX0NJVFkgPSBcIlNJT1VYX0ZBTExTXCI7XG5jb25zdCBTSU9VWF9GQUxMU19DTEFTUyA9IFwiY2l0eS1TaW91eC1GYWxsc1wiO1xuY29uc3QgU0lPVVhfRkFMTFNfQ09MT1IgPSBcIiMzMDM4NDFcIjtcblxuZXhwb3J0IGNvbnN0IFBFQVJMX0NJVFkgPSBcIlBFQVJMX0NJVFlcIjtcbmNvbnN0IFBFQVJMX0NJVFlfQ0lUWSA9IFwiUEVBUkxfQ0lUWVwiO1xuY29uc3QgUEVBUkxfQ0lUWV9DTEFTUyA9IFwiY2l0eS1QZWFybC1DaXR5XCI7XG5jb25zdCBQRUFSTF9DSVRZX0NPTE9SID0gXCIjOTZjZDM5XCI7XG5cbmV4cG9ydCBjb25zdCBHTEVOREFMRSA9IFwiR0xFTkRBTEVcIjtcbmNvbnN0IEdMRU5EQUxFX0NJVFkgPSBcIkdMRU5EQUxFXCI7XG5jb25zdCBHTEVOREFMRV9DTEFTUyA9IFwiY2l0eS1HbGVuZGFsZVwiO1xuY29uc3QgR0xFTkRBTEVfQ09MT1IgPSBcIiMyZmM1Y2NcIjtcblxuZXhwb3J0IGNvbnN0IFNBTl9ESUVHTyA9IFwiU0FOX0RJRUdPXCI7XG5jb25zdCBTQU5fRElFR09fQ0lUWSA9IFwiU0FOX0RJRUdPXCI7XG5jb25zdCBTQU5fRElFR09fQ0xBU1MgPSBcImNpdHktU2FuLURpZWdvXCI7XG5jb25zdCBTQU5fRElFR09fQ09MT1IgPSBcIiNmZjViNDRcIjtcblxuZXhwb3J0IGNvbnN0IFNUX1BBVUwgPSBcIlNUX1BBVUxcIjtcbmNvbnN0IFNUX1BBVUxfQ0lUWSA9IFwiU1RfUEFVTFwiO1xuY29uc3QgU1RfUEFVTF9DTEFTUyA9IFwiY2l0eS1TdC1QYXVsXCI7XG5jb25zdCBTVF9QQVVMX0NPTE9SID0gXCIjYmY2OGY2XCI7XG5cbmV4cG9ydCBjb25zdCBDSEFSTEVTVE9OID0gXCJDSEFSTEVTVE9OXCI7XG5jb25zdCBDSEFSTEVTVE9OX0NJVFkgPSBcIkNIQVJMRVNUT05cIjtcbmNvbnN0IENIQVJMRVNUT05fQ0xBU1MgPSBcImNpdHktQ2hhcmxlc3RvblwiO1xuY29uc3QgQ0hBUkxFU1RPTl9DT0xPUiA9IFwiI2Y5MjcyN1wiO1xuXG5leHBvcnQgY29uc3QgR0lMQkVSVCA9IFwiR0lMQkVSVFwiO1xuY29uc3QgR0lMQkVSVF9DSVRZID0gXCJHSUxCRVJUXCI7XG5jb25zdCBHSUxCRVJUX0NMQVNTID0gXCJjaXR5LUdpbGJlcnRcIjtcbmNvbnN0IEdJTEJFUlRfQ09MT1IgPSBcIiNmZjA1OTJcIjtcblxuZXhwb3J0IGNvbnN0IEFOQUhFSU0gPSBcIkFOQUhFSU1cIjtcbmNvbnN0IEFOQUhFSU1fQ0lUWSA9IFwiQU5BSEVJTVwiO1xuY29uc3QgQU5BSEVJTV9DTEFTUyA9IFwiY2l0eS1BbmFoZWltXCI7XG5jb25zdCBBTkFIRUlNX0NPTE9SID0gXCIjYTU4YmZmXCI7XG5cbmV4cG9ydCBjb25zdCBSQUxFSUdIID0gXCJSQUxFSUdIXCI7XG5jb25zdCBSQUxFSUdIX0NJVFkgPSBcIlJBTEVJR0hcIjtcbmNvbnN0IFJBTEVJR0hfQ0xBU1MgPSBcImNpdHktUmFsZWlnaFwiO1xuY29uc3QgUkFMRUlHSF9DT0xPUiA9IFwiIzAwOTM3OFwiO1xuXG5leHBvcnQgY29uc3QgQ0FQRV9DT1JBTCA9IFwiQ0FQRV9DT1JBTFwiO1xuY29uc3QgQ0FQRV9DT1JBTF9DSVRZID0gXCJDQVBFX0NPUkFMXCI7XG5jb25zdCBDQVBFX0NPUkFMX0NMQVNTID0gXCJjaXR5LUNhcGUtQ29yYWxcIjtcbmNvbnN0IENBUEVfQ09SQUxfQ09MT1IgPSBcIiNmYzM0NWNcIjtcblxuZXhwb3J0IGNvbnN0IENFREFSX1JBUElEUyA9IFwiQ0VEQVJfUkFQSURTXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ0lUWSA9IFwiQ0VEQVJfUkFQSURTXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ0xBU1MgPSBcImNpdHktQ2VkYXItUmFwaWRzXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ09MT1IgPSBcIiMzZDZjYjlcIjtcblxuZXhwb3J0IGNvbnN0IENJVElFUyA9IHtcbiAgUExBTk86IHtcbiAgICBjaXR5OiBcIlBsYW5vXCIsXG4gICAgY29uc3RhbnQ6IFBMQU5PLFxuICAgIGNsYXNzOiBQTEFOT19DTEFTUyxcbiAgICBjb2xvcjogUExBTk9fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA0LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDMsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQsXG4gICAgcG9zaXRpb246IHsgeDogNTI2LCB5OiAzOTAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNzIuMyxcbiAgICByYW5raW5nOiAxXG4gIH0sXG4gIElSVklORToge1xuICAgIGNpdHk6IFwiSXJ2aW5lXCIsXG4gICAgY29uc3RhbnQ6IElSVklORSxcbiAgICBjbGFzczogSVJWSU5FX0NMQVNTLFxuICAgIGNvbG9yOiBJUlZJTkVfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA4LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDYsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDMsXG4gICAgcG9zaXRpb246IHsgeDogMTgwLCB5OiAzMDAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNzEuODYsXG4gICAgcmFua2luZzogMlxuICB9LFxuICBNQURJU09OOiB7XG4gICAgY2l0eTogXCJNYWRpc29uXCIsXG4gICAgY29uc3RhbnQ6IE1BRElTT04sXG4gICAgY2xhc3M6IE1BRElTT05fQ0xBU1MsXG4gICAgY29sb3I6IE1BRElTT05fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDgsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQsXG4gICAgcG9zaXRpb246IHsgeDogNjQwLCB5OiAxNjAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNzEuODEsXG4gICAgcmFua2luZzogM1xuICB9LFxuICBGUkVNT05UOiB7XG4gICAgY2l0eTogXCJGcmVtb250XCIsXG4gICAgY29uc3RhbnQ6IEZSRU1PTlQsXG4gICAgY2xhc3M6IEZSRU1PTlRfQ0xBU1MsXG4gICAgY29sb3I6IEZSRU1PTlRfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA1LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDIwLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxLFxuICAgIHBvc2l0aW9uOiB7IHg6IDE1MSwgeTogMjI1IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDcxLjE3LFxuICAgIHJhbmtpbmc6IDRcbiAgfSxcbiAgSFVOVElOR1RPTl9CRUFDSDoge1xuICAgIGNpdHk6IFwiSHVudGluZ3RvbiBCZWFjaFwiLFxuICAgIGNvbnN0YW50OiBIVU5USU5HVE9OX0JFQUNILFxuICAgIGNsYXNzOiBIVU5USU5HVE9OX0JFQUNIX0NMQVNTLFxuICAgIGNvbG9yOiBIVU5USU5HVE9OX0JFQUNIX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMyxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyNSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTUsXG4gICAgcG9zaXRpb246IHsgeDogMTU5LCB5OiAyOTAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjkuNzQsXG4gICAgcmFua2luZzogNVxuICB9LFxuICBGQVJHTzoge1xuICAgIGNpdHk6IFwiRmFyZ29cIixcbiAgICBjb25zdGFudDogRkFSR08sXG4gICAgY2xhc3M6IEZBUkdPX0NMQVNTLFxuICAgIGNvbG9yOiBGQVJHT19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDksXG4gICAgaW5jb21lRW1wbG95bWVudDogMTEsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDEzLFxuICAgIHBvc2l0aW9uOiB7IHg6IDQ5OCwgeTogOTQgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjkuNTcsXG4gICAgcmFua2luZzogNlxuICB9LFxuICBHUkFORF9QUkFJUklFOiB7XG4gICAgY2l0eTogXCJHcmFuZCBQcmFpcmllXCIsXG4gICAgY29uc3RhbnQ6IEdSQU5EX1BSQUlSSUUsXG4gICAgY2xhc3M6IEdSQU5EX1BSQUlSSUVfQ0xBU1MsXG4gICAgY29sb3I6IEdSQU5EX1BSQUlSSUVfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAxOSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMyxcbiAgICBwb3NpdGlvbjogeyB4OiA1MjUsIHk6IDQxMCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OS4zLFxuICAgIHJhbmtpbmc6IDdcbiAgfSxcbiAgU0FOX0pPU0U6IHtcbiAgICBjaXR5OiBcIlNhbiBKb3NlXCIsXG4gICAgY29uc3RhbnQ6IFNBTl9KT1NFLFxuICAgIGNsYXNzOiBTQU5fSk9TRV9DTEFTUyxcbiAgICBjb2xvcjogU0FOX0pPU0VfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDEwLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyNCxcbiAgICBwb3NpdGlvbjogeyB4OiAxNDAsIHk6IDI0MCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OC45LFxuICAgIHJhbmtpbmc6IDhcbiAgfSxcbiAgU0NPVFRTREFMRToge1xuICAgIGNpdHk6IFwiU2NvdHRzZGFsZVwiLFxuICAgIGNvbnN0YW50OiBTQ09UVFNEQUxFLFxuICAgIGNsYXNzOiBTQ09UVFNEQUxFX0NMQVNTLFxuICAgIGNvbG9yOiBTQ09UVFNEQUxFX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMjUsXG4gICAgaW5jb21lRW1wbG95bWVudDogNyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMSxcbiAgICBwb3NpdGlvbjogeyB4OiAyNzAsIHk6IDM0MSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OC4yNCxcbiAgICByYW5raW5nOiA5XG4gIH0sXG4gIFNBTl9GUkFOQ0lTQ086IHtcbiAgICBjaXR5OiBcIlNhbiBGcmFuY2lzY29cIixcbiAgICBjb25zdGFudDogU0FOX0ZSQU5DSVNDTyxcbiAgICBjbGFzczogU0FOX0ZSQU5DSVNDT19DTEFTUyxcbiAgICBjb2xvcjogU0FOX0ZSQU5DSVNDT19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDIsXG4gICAgaW5jb21lRW1wbG95bWVudDogMSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNjksXG4gICAgcG9zaXRpb246IHsgeDogMTM2LCB5OiAyMTIgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuNTMsXG4gICAgcmFua2luZzogMTBcbiAgfSxcbiAgQklTTUFSQ0s6IHtcbiAgICBjaXR5OiBcIkJpc21hcmNrXCIsXG4gICAgY29uc3RhbnQ6IEJJU01BUkNLLFxuICAgIGNsYXNzOiBCSVNNQVJDS19DTEFTUyxcbiAgICBjb2xvcjogQklTTUFSQ0tfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxNCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyNSxcbiAgICBwb3NpdGlvbjogeyB4OiA0NzgsIHk6IDEwNiB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4zOCxcbiAgICByYW5raW5nOiAxMVxuICB9LFxuICBPVkVSTEFORF9QQVJLOiB7XG4gICAgY2l0eTogXCJPdmVybGFuZCBQYXJrXCIsXG4gICAgY29uc3RhbnQ6IE9WRVJMQU5EX1BBUkssXG4gICAgY2xhc3M6IE9WRVJMQU5EX1BBUktfQ0xBU1MsXG4gICAgY29sb3I6IE9WRVJMQU5EX1BBUktfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzMSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTQsXG4gICAgcG9zaXRpb246IHsgeDogNTcwLCB5OiAyNzggfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuMzcsXG4gICAgcmFua2luZzogMTJcbiAgfSxcbiAgU0FOVEFfUk9TQToge1xuICAgIGNpdHk6IFwiU2FudGEgUm9zYVwiLFxuICAgIGNvbnN0YW50OiBTQU5UQV9ST1NBLFxuICAgIGNsYXNzOiBTQU5UQV9ST1NBX0NMQVNTLFxuICAgIGNvbG9yOiBTQU5UQV9ST1NBX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTMsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjksXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUsXG4gICAgcG9zaXRpb246IHsgeDogMTMyLCB5OiAxOTYgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuMTgsXG4gICAgcmFua2luZzogMTNcbiAgfSxcbiAgQVVTVElOOiB7XG4gICAgY2l0eTogXCJBdXN0aW5cIixcbiAgICBjb25zdGFudDogQVVTVElOLFxuICAgIGNsYXNzOiBBVVNUSU5fQ0xBU1MsXG4gICAgY29sb3I6IEFVU1RJTl9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDgsXG4gICAgaW5jb21lRW1wbG95bWVudDogNCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNDQsXG4gICAgcG9zaXRpb246IHsgeDogNDk3LCB5OiA0MzAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuMTYsXG4gICAgcmFua2luZzogMTRcbiAgfSxcbiAgU0lPVVhfRkFMTFM6IHtcbiAgICBjaXR5OiBcIlNpb3V4IEZhbGxzXCIsXG4gICAgY29uc3RhbnQ6IFNJT1VYX0ZBTExTLFxuICAgIGNsYXNzOiBTSU9VWF9GQUxMU19DTEFTUyxcbiAgICBjb2xvcjogU0lPVVhfRkFMTFNfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA2LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDM3LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA1MixcbiAgICBwb3NpdGlvbjogeyB4OiA1MDAsIHk6IDE2OCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ni45NyxcbiAgICByYW5raW5nOiAxNVxuICB9LFxuICBQRUFSTF9DSVRZOiB7XG4gICAgY2l0eTogXCJQZWFybCBDaXR5XCIsXG4gICAgY29uc3RhbnQ6IFBFQVJMX0NJVFksXG4gICAgY2xhc3M6IFBFQVJMX0NJVFlfQ0xBU1MsXG4gICAgY29sb3I6IFBFQVJMX0NJVFlfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDgxLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA4LFxuICAgIHBvc2l0aW9uOiB7IHg6IDM1MCwgeTogNDkxIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY2Ljc3LFxuICAgIHJhbmtpbmc6IDE2XG4gIH0sXG4gIEdMRU5EQUxFOiB7XG4gICAgY2l0eTogXCJHbGVuZGFsZVwiLFxuICAgIGNvbnN0YW50OiBHTEVOREFMRSxcbiAgICBjbGFzczogR0xFTkRBTEVfQ0xBU1MsXG4gICAgY29sb3I6IEdMRU5EQUxFX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTUsXG4gICAgaW5jb21lRW1wbG95bWVudDogNTYsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDcsXG4gICAgcG9zaXRpb246IHsgeDogMTY3LCB5OiAyNzIgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjYuMjUsXG4gICAgcmFua2luZzogMTdcbiAgfSxcbiAgU0FOX0RJRUdPOiB7XG4gICAgY2l0eTogXCJTYW4gRGllZ29cIixcbiAgICBjb25zdGFudDogU0FOX0RJRUdPLFxuICAgIGNsYXNzOiBTQU5fRElFR09fQ0xBU1MsXG4gICAgY29sb3I6IFNBTl9ESUVHT19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDQsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjAsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDI1LFxuICAgIHBvc2l0aW9uOiB7IHg6IDE4NywgeTogMzIxIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY2LjAxLFxuICAgIHJhbmtpbmc6IDE4XG4gIH0sXG4gIFNUX1BBVUw6IHtcbiAgICBjaXR5OiBcIlN0LiBQYXVsXCIsXG4gICAgY29uc3RhbnQ6IFNUX1BBVUwsXG4gICAgY2xhc3M6IFNUX1BBVUxfQ0xBU1MsXG4gICAgY29sb3I6IFNUX1BBVUxfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzOCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMzYsXG4gICAgcG9zaXRpb246IHsgeDogNTkwLCB5OiAxMzMgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjUuNzksXG4gICAgcmFua2luZzogMTlcbiAgfSxcbiAgQ0hBUkxFU1RPTjoge1xuICAgIGNpdHk6IFwiQ2hhcmxlc3RvblwiLFxuICAgIGNvbnN0YW50OiBDSEFSTEVTVE9OLFxuICAgIGNsYXNzOiBDSEFSTEVTVE9OX0NMQVNTLFxuICAgIGNvbG9yOiBDSEFSTEVTVE9OX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNDEsXG4gICAgaW5jb21lRW1wbG95bWVudDogMyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMixcbiAgICBwb3NpdGlvbjogeyB4OiA4MDUsIHk6IDQwMCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NS40OCxcbiAgICByYW5raW5nOiAyMFxuICB9LFxuICBHSUxCRVJUOiB7XG4gICAgY2l0eTogXCJHaWxiZXJ0XCIsXG4gICAgY29uc3RhbnQ6IEdJTEJFUlQsXG4gICAgY2xhc3M6IEdJTEJFUlRfQ0xBU1MsXG4gICAgY29sb3I6IEdJTEJFUlRfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAzMCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyNixcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNSxcbiAgICBwb3NpdGlvbjogeyB4OiAyNzcsIHk6IDM2MyB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NS4wNyxcbiAgICByYW5raW5nOiAyMVxuICB9LFxuICBBTkFIRUlNOiB7XG4gICAgY2l0eTogXCJBbmFoZWltXCIsXG4gICAgY29uc3RhbnQ6IEFOQUhFSU0sXG4gICAgY2xhc3M6IEFOQUhFSU1fQ0xBU1MsXG4gICAgY29sb3I6IEFOQUhFSU1fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxNixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA0MyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTksXG4gICAgcG9zaXRpb246IHsgeDogMTk2LCB5OiAyODIgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjUuMDIsXG4gICAgcmFua2luZzogMjJcbiAgfSxcbiAgUkFMRUlHSDoge1xuICAgIGNpdHk6IFwiUmFsZWlnaFwiLFxuICAgIGNvbnN0YW50OiBSQUxFSUdILFxuICAgIGNsYXNzOiBSQUxFSUdIX0NMQVNTLFxuICAgIGNvbG9yOiBSQUxFSUdIX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNyxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyMyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNDgsXG4gICAgcG9zaXRpb246IHsgeDogODMwLCB5OiAzMTMgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjQuOTksXG4gICAgcmFua2luZzogMjNcbiAgfSxcbiAgQ0FQRV9DT1JBTDoge1xuICAgIGNpdHk6IFwiQ2FwZSBDb3JhbFwiLFxuICAgIGNvbnN0YW50OiBDQVBFX0NPUkFMLFxuICAgIGNsYXNzOiBDQVBFX0NPUkFMX0NMQVNTLFxuICAgIGNvbG9yOiBDQVBFX0NPUkFMX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMjgsXG4gICAgaW5jb21lRW1wbG95bWVudDogNDgsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDIsXG4gICAgcG9zaXRpb246IHsgeDogODAwLCB5OiA0ODAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjQuOTYsXG4gICAgcmFua2luZzogMjRcbiAgfSxcbiAgQ0VEQVJfUkFQSURTOiB7XG4gICAgY2l0eTogXCJDZWRhciBSYXBpZHNcIixcbiAgICBjb25zdGFudDogQ0VEQVJfUkFQSURTLFxuICAgIGNsYXNzOiBDRURBUl9SQVBJRFNfQ0xBU1MsXG4gICAgY29sb3I6IENFREFSX1JBUElEU19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDIzLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDMyLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxMSxcbiAgICBwb3NpdGlvbjogeyB4OiA2MDAsIHk6IDIwNSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NC45LFxuICAgIHJhbmtpbmc6IDI1XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9ERUxBWSA9IDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0VBU0lORyA9IGQzLmVhc2VQb2x5O1xuXG5leHBvcnQgY29uc3QgV0lEVEggPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IDYwMDtcbmV4cG9ydCBjb25zdCBNQVJHSU5TID0gMTAwO1xuIiwiY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJEYXRhKCk7XG4gIH1cblxuICBmaWx0ZXJEYXRhKCkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBkM1xuICAgICAgLnNlbGVjdChgLmhlYWRlcl9fdG9vbHRpcGApXG4gICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCJzb2xpZFwiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyLXdpZHRoXCIsIFwiMnB4XCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4gICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMXJlbVwiKTtcblxuICAgIGQzLnNlbGVjdEFsbCgnLmNpdHknKVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCAoZCwgaSkgPT4ge1xuICAgICAgICBsZXQgY2xhc3NOYW1lO1xuICAgICAgICBpZiAodHlwZW9mIGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gYGNpdHktJHtkLnNwbGl0KCcgJykuam9pbignLScpfWA7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5kYXRhKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gZC5kYXRhLmNsYXNzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IGQuY2xhc3M7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsT3RoZXJDaXR5RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jaXR5Om5vdCguJHtjbGFzc05hbWV9KWApO1xuICAgICAgICBhbGxPdGhlckNpdHlEYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgZGF0YS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXInKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyB0b29sdGlwICBcbiAgICAgICAgdG9vbHRpcFxuICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgICAgICAgIC5odG1sKFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2NpdHlcIj48c3Ryb25nPkNpdHk6IDwvc3Ryb25nPjxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmNpdHlcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+T3ZlcmFsbCBSYW5rOjwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5yYW5raW5nXG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPlRvdGFsIEhhcHBpbmVzcyBTY29yZTo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuaGFwcGluZXNzU2NvcmVcbiAgICAgICAgICAgICAgICB9LzEwMDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPkVtb3Rpb25hbCAmIFBoeXNpY2FsIFdlbGwtQmVpbmc6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmVtb3Rpb25hbFdlbGxiZWluZ1xuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5JbmNvbWUgJiBFbXBsb3ltZW50Ojwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5pbmNvbWVFbXBsb3ltZW50XG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPkNvbW11bml0eSAmIEVudmlyb25tZW50Ojwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5jb21tdW5pdHlFbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApO1xuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX2hlYWRlcicpO1xuICAgICAgICBtYWluSGVhZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgY29sb3I6ICR7ZC5jb2xvcn1gICk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxDaXR5RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXR5Jyk7XG4gICAgICAgIGFsbENpdHlEYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgZGF0YS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXInKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19oZWFkZXJcIik7XG4gICAgICAgIG1haW5IZWFkZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGNvbG9yOiBpbml0aWFsYCk7XG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCBXb3JsZEdyYXBoIGZyb20gXCIuL3dvcmxkX2dyYXBoXCI7XG5cblxubGV0IHdvcmxkR3JhcGg7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICB3b3JsZEdyYXBoID0gbmV3IFdvcmxkR3JhcGgoXCJzdmcuZ3JhcGhcIik7XG4gIC8vIG5ldyBGaWx0ZXI7XG59KTtcblxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICB3b3JsZEdyYXBoLnJlZHJhdyhcInN2Zy5ncmFwaFwiKTtcbiAgY29uc29sZS5sb2coJ3Jlc2l6ZWQhJyk7XG59OyIsImltcG9ydCB7XG4gIFdJRFRILFxuICBIRUlHSFQsXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lORyxcbiAgQU5JTUFUSU9OX0RVUkFUSU9OXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vY2hhcnRcIjtcblxuY2xhc3MgV29ybGRHcmFwaCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3Qoc2VsZWN0b3IpO1xuICAgIHRoaXMueEF4aXMoKTtcbiAgICB0aGlzLnlBeGlzKFsxLCAwXSwgXCJzY2FsZUxpbmVhclwiLCAyMCwgKCkgPT4gZDMuZm9ybWF0KFwiLjAlXCIpKTtcbiAgICB0aGlzLmdldERhdGEoKTtcbiAgICAvLyB0aGlzLmxpbmVzKCk7XG4gICAgLy8gdGhpcy5jaXJjbGVzKCk7XG4gICAgLy8gdGhpcy5wZXJjZW50YWdlTGFiZWxzKCk7XG4gICAgLy8gdGhpcy5sYWJlbFRvcChcIkhhcHBpbmVzcyBSYW5raW5nXCIpO1xuICAgIC8vIHRoaXMuZ3JpZExpbmVzKHRoaXMueFNjYWxlLCBcImF4aXNCb3R0b21cIik7XG4gICAgLy8gdGhpcy5ncmlkTGluZXModGhpcy55U2NhbGUsIFwiYXhpc1JpZ2h0XCIpO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgZDMuanNvbihcIi9kaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIHRoYXQuc2V0RGF0YShkYXRhKTtcbiAgICAgIC8vIHRoYXQuc2V0UmFkaXVzKCk7XG4gICAgICAvLyB0aGF0LmxpbmVzKCk7XG4gICAgICB0aGF0LmNpcmNsZXMoKTtcbiAgICAgIC8vIHRoYXQudG9vbHRpcHMoKTtcbiAgICAgIC8vIHRoYXQucGVyY2VudGFnZUxhYmVscygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2lyY2xlcygpIHtcbiAgICAvLyB0b29sdGlwXG4gICAgbGV0IHRvb2x0aXAgPSBkM1xuICAgICAgLnNlbGVjdChcImJvZHlcIilcbiAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0b29sdGlwXCIpXG4gICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmxhY2tcIilcbiAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCI1cHhcIilcbiAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxMHB4XCIpXG4gICAgICAuc3R5bGUoXCJjb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAuc3R5bGUoXCJ6LWluZGV4XCIsIFwiOTk5OTk5OTk5XCIpXG4gICAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAuc3R5bGUoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cbiAgICBsZXQgc2hvd1Rvb2x0aXAgPSBmdW5jdGlvbihkKSB7XG4gICAgICB0b29sdGlwLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyMDApO1xuICAgICAgdG9vbHRpcFxuICAgICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKVxuICAgICAgICAuaHRtbChcbiAgICAgICAgICBgXG4gICAgICAgICAgICAgIDxzdHJvbmc+Q291bnRyeTo8L3N0cm9uZz4gJHtkLmNvdW50cnl9ICgke2QuY29udGluZW50fSk8YnIvPlxuICAgICAgICAgICAgICA8c3Ryb25nPkhhcHBpbmVzcyBSYW5raW5nOjwvc3Ryb25nPiAke2QucmFua2luZ31cbiAgICAgICAgICAgIGBcbiAgICAgICAgKVxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5jbGllbnRYIC0gMTYwICsgXCJweFwiKTtcbiAgICAgIC8vIC5zdHlsZShcInRvcFwiLCBkMy5tb3VzZShkMy5ldmVudC50YXJnZXQpWzFdICsgODAgKyBcInB4XCIpXG4gICAgICAvLyAuc3R5bGUoXCJsZWZ0XCIsIGQzLm1vdXNlKGQzLmV2ZW50LnRhcmdldClbMF0gLSA0MCArIFwicHhcIik7XG4gICAgfTtcblxuICAgIGxldCBtb3ZlVG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHNob3dUb29sdGlwKGQpO1xuICAgICAgY29uc29sZS5sb2coXCJtb3ZlIHRvb2x0aXBcIik7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC8vIC5zdHlsZShcInRvcFwiLCBkMy5tb3VzZShkMy5ldmVudC50YXJnZXQpWzFdICsgODAgKyBcInB4XCIpXG4gICAgICAgIC8vIC5zdHlsZShcImxlZnRcIiwgZDMubW91c2UoZDMuZXZlbnQudGFyZ2V0KVswXSAtIDQwICsgXCJweFwiKVxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5jbGllbnRYIC0gMTYwICsgXCJweFwiKTtcbiAgICB9O1xuXG4gICAgbGV0IGhpZGVUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgICAgY29uc29sZS5sb2coXCJoaWRlIHRvb2x0aXBcIik7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKTtcbiAgICB9O1xuXG4gICAgLy8gY2hhcnQgcmVuZGVyaW5nXG4gICAgdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBgY291bnRyeSAke2QuY2xhc3N9IGNvdW50cnktYnViYmxlYClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQuY29udGluZW50ID09PSBcIkFmcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzdjYmQxZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkFzaWFcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjFmNWFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJOb3J0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMzAzNDgxXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiU291dGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmNWI0NFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkV1cm9wZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzJmYzVjY1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiLjdcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI0NEQ0RDRFwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkLmdyYXBoR2RwIC8gMTU2KSArIDI1O1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBzaG93VG9vbHRpcClcbiAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBtb3ZlVG9vbHRpcClcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgaGlkZVRvb2x0aXApXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZGVsYXkoKGQsIGkpID0+IGkgKiBBTklNQVRJT05fREVMQVkpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgLmVhc2UoQU5JTUFUSU9OX0VBU0lORylcbiAgICAgIC5hdHRyKFwiclwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQucG9wdWxhdGlvbiA+IDgwMDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAyNTAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiA1MDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAxMDAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiAxMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDE1MDAwMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnlTY2FsZShkLmdyYXBoUmFua2luZyAvIDE1Nik7XG4gICAgICB9KTtcblxuICAgIC8vIGxlZ2VuZFxuICAgIGxldCBjb250aW5lbnRzID0ge1xuICAgICAgQUZSSUNBOiB7Y29udGluZW50OiAnQWZyaWNhJ30sXG4gICAgICBBU0lBOiB7Y29udGluZW50OiAnQXNpYSd9LFxuICAgICAgTk9SVEhfQU1FUklDQToge2NvbnRpbmVudDogJ05vcnRoIEFtZXJpY2EnfSxcbiAgICAgIFNPVVRIX0FNRVJJQ0E6IHtjb250aW5lbnQ6ICdTb3V0aCBBbWVyaWNhJ30sXG4gICAgICBFVVJPUEU6IHtjb250aW5lbnQ6ICdFdXJvcGUnfSxcbiAgICB9XG4gICAgICBsZXQgbGVnZW5kID0gdGhpcy5jaGFydFxuICAgICAgICAuc2VsZWN0QWxsKFwiLmxlZ2VuZFwiKVxuICAgICAgICAuZGF0YShPYmplY3QudmFsdWVzKGNvbnRpbmVudHMpKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGVnZW5kXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgODcwICsgXCIsXCIgKyA0ODAgKyBcIilcIik7XG5cbiAgICAgIGxlZ2VuZFxuICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gMjAgKiBpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIDE1KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCAxNSlcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgaWYgKGQuY29udGluZW50ID09PSBcIkFmcmljYVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIjN2NiZDFlXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBc2lhXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIiNmZjFmNWFcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgZC5jb250aW5lbnQgPT09IFwiTm9ydGggQW1lcmljYVwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIjMzAzNDgxXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGQuY29udGluZW50ID09PSBcIlNvdXRoIEFtZXJpY2FcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIFwiI2ZmNWI0NFwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiRXVyb3BlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIiMyZmM1Y2NcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwicmVkXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgbGVnZW5kXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwieFwiLCAyNSlcbiAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gMjAgKiBpO1xuICAgICAgICB9KVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuY29udGluZW50O1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjEycHhcIik7XG5cbiAgICAgIGxlZ2VuZFxuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInhcIiwgMzEpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCItLjJlbVwiKVxuICAgICAgICAuYXR0cihcInlcIiwgLTEwKVxuICAgICAgICAudGV4dChcIkNvbnRpbmVudFwiKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE3cHhcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImxlZnRcIik7IFxuICB9XG5cbiAgLy8gdG9vbHRpcHMoKSB7XG4gIC8vICAgbGV0IHRvb2x0aXAgPSB0aGlzLmNoYXJ0XG4gIC8vICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gIC8vICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAvLyAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpXG4gIC8vICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4gIC8vICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAvLyAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcblxuICAvLyAgICAgbGV0IHNob3dUb29sdGlwID0gZCA9PiB7XG4gIC8vICAgICAgIHRvb2x0aXBcbiAgLy8gICAgICAgICAudHJhbnNpdGlvbigpXG4gIC8vICAgICAgICAgLmR1cmF0aW9uKDIwMCk7XG4gIC8vICAgICAgIHRvb2x0aXBcbiAgLy8gICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gIC8vICAgICAgICAgLmh0bWwoXG4gIC8vICAgICAgICAgICBgXG4gIC8vICAgICAgICAgICAgIENvdW50cnk6ICR7ZC5jb3VudHJ5fTxici8+XG4gIC8vICAgICAgICAgICAgIENvbnRpbmVudDogJHtkLmNvbnRpbmVudH08YnIvPlxuICAvLyAgICAgICAgICAgICBIYXBwaW5lc3MgUmFua2luZzogJHtkLnJhbmtpbmd9PGJyLz5cbiAgLy8gICAgICAgICAgICAgU29jaWFsIFN1cHBvcnQ6ICR7ZC5zb2NpYWxTdXBwb3J0fTxici8+XG4gIC8vICAgICAgICAgICAgIEZyZWVkb206ICR7ZC5mcmVlZG9tfTxici8+XG4gIC8vICAgICAgICAgICAgIEdlbmVyb3NpdHk6ICR7ZC5nZW5lcm9zaXR5fTxici8+XG4gIC8vICAgICAgICAgICAgIEdEUCBQZXIgQ2FwaXRhOiAke2QuZ2RwfTxici8+XG4gIC8vICAgICAgICAgICAgIExpZmUgRXhwZWN0YW5jeTogJHtkLmxpZmVFeHBlY3RhbmN5fTxici8+XG4gIC8vICAgICAgICAgICBgXG4gIC8vICAgICAgICAgKVxuICAvLyAgICAgICAgIC5zdHlsZShcImxlZnRcIiwgZDMubW91c2UodGhpcylbMF0gKyAzMCArIFwicHhcIilcbiAgLy8gICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMubW91c2UodGhpcylbMV0gKyAzMCArIFwicHhcIik7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGxldCBtb3ZlVG9vbHRpcCA9IGQgPT4ge1xuICAvLyAgICAgICB0b29sdGlwXG4gIC8vICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMubW91c2UodGhpcylbMF0gKyAzMCkgKyBcInB4XCIpXG4gIC8vICAgICAgICAgLnN0eWxlKFwidG9wXCIsIChkMy5tb3VzZSh0aGlzKVsxXSArIDMwKSArIFwicHhcIilcbiAgLy8gICAgIH1cblxuICAvLyAgICAgbGV0IGhpZGVUb29sdGlwID0gZCA9PiB7XG4gIC8vICAgICAgIHRvb2x0aXBcbiAgLy8gICAgICAgICAudHJhbnNpdGlvbigpXG4gIC8vICAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgLy8gICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG4gIC8vICAgICB9XG5cbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JsZEdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==