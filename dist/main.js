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

      ////////////////////////
      // tooltip
      ////////////////////////
      var tooltip = d3.select("body").append("div").style("visibility", "hidden").attr("class", "tooltip").style("background-color", "black").style("border-radius", "5px").style("padding", "10px").style("color", "white").style("z-index", "999999999").style("position", "absolute").style("display", "block");

      var showTooltip = function showTooltip(d) {
        tooltip.transition().duration(200);
        tooltip.style("visibility", "visible").html("\n  <strong>Country:</strong> ".concat(d.country, " (").concat(d.continent, ")<br/>\n  <strong>Happiness Ranking:</strong> ").concat(d.ranking, "\n")).style("top", d3.event.clientY - 100 + "px").style("left", d3.event.clientX - 160 + "px"); // .style("top", d3.mouse(d3.event.target)[1] + 80 + "px")
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
      }; ////////////////////////
      // chart rendering
      ////////////////////////


      this.chart.selectAll("circle").data(Object.values(this.data)).enter().append("circle").attr("class", function (d) {
        return "country ".concat(d["class"], " continent-").concat(d.continent.split(' ').join('-'), " country-bubble");
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
        console.log(continentName);

        _this2.chart.selectAll("circle:not(.continent-".concat(continentName.split(' ').join('-'), ")")).attr("opacity", "0.1"); // let matchedCountries = document.querySelectorAll(`circle:not(.continent-${continentName})`);
        // matchedCountries.forEach(country => {
        //   debugger
        //   // country.style("transform", "scale(1.1)");
        //   console.log(country);
        // })

      };

      var continentFocusOff = function continentFocusOff(continentName) {
        _this2.chart.selectAll("circle:not(.continent-".concat(continentName.split(' ').join('-'), ")")).attr("opacity", "0.7");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkX2dyYXBoLmpzIl0sIm5hbWVzIjpbIkNoYXJ0Iiwic2VsZWN0b3IiLCJvcHRpb25zIiwic2V0Q2hhcnQiLCJzZXRMYWJlbHMiLCJ0b3BPZmZzZXQiLCJsZWZ0T2Zmc2V0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwiSEVJR0hUIiwiTUFSR0lOUyIsIldJRFRIIiwiY2hhcnQiLCJhcHBlbmQiLCJkYXRhIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidGlja3MiLCJ0aWNrRm9ybWF0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsImRvbWFpbiIsInhBeGlzQ2FsbCIsImF4aXNCb3R0b20iLCJmb3JtYXQiLCJjYWxsIiwieVNjYWxlIiwicGFkZGluZyIsImF4aXNMZWZ0IiwieExhYmVsIiwidGV4dCIsInlMYWJlbCIsIlBMQU5PIiwiUExBTk9fQ0lUWSIsIlBMQU5PX0NMQVNTIiwiUExBTk9fQ09MT1IiLCJJUlZJTkUiLCJJUlZJTkVfQ0lUWSIsIklSVklORV9DTEFTUyIsIklSVklORV9DT0xPUiIsIk1BRElTT04iLCJNQURJU09OX0NJVFkiLCJNQURJU09OX0NMQVNTIiwiTUFESVNPTl9DT0xPUiIsIkZSRU1PTlQiLCJGUkVNT05UX0NJVFkiLCJGUkVNT05UX0NMQVNTIiwiRlJFTU9OVF9DT0xPUiIsIkhVTlRJTkdUT05fQkVBQ0giLCJIVU5USU5HVE9OX0JFQUNIX0NJVFkiLCJIVU5USU5HVE9OX0JFQUNIX0NMQVNTIiwiSFVOVElOR1RPTl9CRUFDSF9DT0xPUiIsIkZBUkdPIiwiRkFSR09fQ0lUWSIsIkZBUkdPX0NMQVNTIiwiRkFSR09fQ09MT1IiLCJHUkFORF9QUkFJUklFIiwiR1JBTkRfUFJBSVJJRV9DSVRZIiwiR1JBTkRfUFJBSVJJRV9DTEFTUyIsIkdSQU5EX1BSQUlSSUVfQ09MT1IiLCJTQU5fSk9TRSIsIlNBTl9KT1NFX0NJVFkiLCJTQU5fSk9TRV9DTEFTUyIsIlNBTl9KT1NFX0NPTE9SIiwiU0NPVFRTREFMRSIsIlNDT1RUU0RBTEVfQ0lUWSIsIlNDT1RUU0RBTEVfQ0xBU1MiLCJTQ09UVFNEQUxFX0NPTE9SIiwiU0FOX0ZSQU5DSVNDTyIsIlNBTl9GUkFOQ0lTQ09fQ0lUWSIsIlNBTl9GUkFOQ0lTQ09fQ0xBU1MiLCJTQU5fRlJBTkNJU0NPX0NPTE9SIiwiQklTTUFSQ0siLCJCSVNNQVJDS19DSVRZIiwiQklTTUFSQ0tfQ0xBU1MiLCJCSVNNQVJDS19DT0xPUiIsIk9WRVJMQU5EX1BBUksiLCJPVkVSTEFORF9QQVJLX0NJVFkiLCJPVkVSTEFORF9QQVJLX0NMQVNTIiwiT1ZFUkxBTkRfUEFSS19DT0xPUiIsIlNBTlRBX1JPU0EiLCJTQU5UQV9ST1NBX0NJVFkiLCJTQU5UQV9ST1NBX0NMQVNTIiwiU0FOVEFfUk9TQV9DT0xPUiIsIkFVU1RJTiIsIkFVU1RJTl9DSVRZIiwiQVVTVElOX0NMQVNTIiwiQVVTVElOX0NPTE9SIiwiU0lPVVhfRkFMTFMiLCJTSU9VWF9GQUxMU19DSVRZIiwiU0lPVVhfRkFMTFNfQ0xBU1MiLCJTSU9VWF9GQUxMU19DT0xPUiIsIlBFQVJMX0NJVFkiLCJQRUFSTF9DSVRZX0NJVFkiLCJQRUFSTF9DSVRZX0NMQVNTIiwiUEVBUkxfQ0lUWV9DT0xPUiIsIkdMRU5EQUxFIiwiR0xFTkRBTEVfQ0lUWSIsIkdMRU5EQUxFX0NMQVNTIiwiR0xFTkRBTEVfQ09MT1IiLCJTQU5fRElFR08iLCJTQU5fRElFR09fQ0lUWSIsIlNBTl9ESUVHT19DTEFTUyIsIlNBTl9ESUVHT19DT0xPUiIsIlNUX1BBVUwiLCJTVF9QQVVMX0NJVFkiLCJTVF9QQVVMX0NMQVNTIiwiU1RfUEFVTF9DT0xPUiIsIkNIQVJMRVNUT04iLCJDSEFSTEVTVE9OX0NJVFkiLCJDSEFSTEVTVE9OX0NMQVNTIiwiQ0hBUkxFU1RPTl9DT0xPUiIsIkdJTEJFUlQiLCJHSUxCRVJUX0NJVFkiLCJHSUxCRVJUX0NMQVNTIiwiR0lMQkVSVF9DT0xPUiIsIkFOQUhFSU0iLCJBTkFIRUlNX0NJVFkiLCJBTkFIRUlNX0NMQVNTIiwiQU5BSEVJTV9DT0xPUiIsIlJBTEVJR0giLCJSQUxFSUdIX0NJVFkiLCJSQUxFSUdIX0NMQVNTIiwiUkFMRUlHSF9DT0xPUiIsIkNBUEVfQ09SQUwiLCJDQVBFX0NPUkFMX0NJVFkiLCJDQVBFX0NPUkFMX0NMQVNTIiwiQ0FQRV9DT1JBTF9DT0xPUiIsIkNFREFSX1JBUElEUyIsIkNFREFSX1JBUElEU19DSVRZIiwiQ0VEQVJfUkFQSURTX0NMQVNTIiwiQ0VEQVJfUkFQSURTX0NPTE9SIiwiQ0lUSUVTIiwiY2l0eSIsImNvbnN0YW50IiwiY29sb3IiLCJlbW90aW9uYWxXZWxsYmVpbmciLCJpbmNvbWVFbXBsb3ltZW50IiwiY29tbXVuaXR5RW52aXJvbm1lbnQiLCJwb3NpdGlvbiIsIngiLCJ5IiwiaGFwcGluZXNzU2NvcmUiLCJyYW5raW5nIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwiQU5JTUFUSU9OX0RFTEFZIiwiQU5JTUFUSU9OX0VBU0lORyIsImVhc2VQb2x5IiwiRmlsdGVyIiwiZmlsdGVyRGF0YSIsInRvb2x0aXAiLCJzdHlsZSIsInNlbGVjdEFsbCIsIm9uIiwiZCIsImkiLCJjbGFzc05hbWUiLCJzcGxpdCIsImpvaW4iLCJhbGxPdGhlckNpdHlEYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsImh0bWwiLCJtYWluSGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImFsbENpdHlEYXRhIiwicmVtb3ZlIiwid29ybGRHcmFwaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJXb3JsZEdyYXBoIiwib25yZXNpemUiLCJyZWRyYXciLCJ4QXhpcyIsInlBeGlzIiwiZ2V0RGF0YSIsInRoYXQiLCJqc29uIiwidGhlbiIsInNldERhdGEiLCJjaXJjbGVzIiwic2hvd1Rvb2x0aXAiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb3VudHJ5IiwiY29udGluZW50IiwiZXZlbnQiLCJjbGllbnRZIiwiY2xpZW50WCIsIm1vdmVUb29sdGlwIiwiaGlkZVRvb2x0aXAiLCJPYmplY3QiLCJ2YWx1ZXMiLCJlbnRlciIsImdyYXBoR2RwIiwiZGVsYXkiLCJlYXNlIiwicG9wdWxhdGlvbiIsImdyYXBoUmFua2luZyIsImNvbnRpbmVudHMiLCJBRlJJQ0EiLCJBU0lBIiwiTk9SVEhfQU1FUklDQSIsIlNPVVRIX0FNRVJJQ0EiLCJFVVJPUEUiLCJjb250aW5lbnRGb2N1c09uIiwiY29udGluZW50TmFtZSIsImNvbnRpbmVudEZvY3VzT2ZmIiwibGVnZW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0Qs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QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0VBL1F1Qi9KLDhDOztBQWtSVnFMLHlFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtcbiAgSEVJR0hULFxuICBNQVJHSU5TLFxuICBXSURUSCxcbiAgQU5JTUFUSU9OX0RVUkFUSU9OLFxuICBBTklNQVRJT05fREVMQVksXG4gIEFOSU1BVElPTl9FQVNJTkdcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldENoYXJ0KHNlbGVjdG9yLCBvcHRpb25zKTtcbiAgICAvLyB0aGlzLmdldERhdGEoKTtcbiAgICB0aGlzLnNldExhYmVscygpO1xuICB9XG5cbiAgc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMgPSB7IHRvcE9mZnNldDogMCwgbGVmdE9mZnNldDogMCB9KSB7XG4gICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgIC5zZWxlY3Qoc2VsZWN0b3IpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBIRUlHSFQgKyBNQVJHSU5TICogMilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggKyBNQVJHSU5TICogMik7XG4gICAgdGhpcy5jaGFydCA9IHN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFxuICAgICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgICBgdHJhbnNsYXRlKCR7TUFSR0lOUyArIG9wdGlvbnMubGVmdE9mZnNldH0sICR7TUFSR0lOUyAvIDIgK1xuICAgICAgICAgIG9wdGlvbnMudG9wT2Zmc2V0fSlgXG4gICAgICApO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIHJlZHJhdyhzZWxlY3Rvcikge1xuICAgIC8vIGxldCBncmFwaERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdmcuZ3JhcGhcIik7XG4gICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc29sZS5sb2coYG5ldyB3aWR0aDogJHt3aWR0aH1gKVxuICAgIGxldCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc29sZS5sb2coYG5ldyBoZWlnaHQ6ICR7aGVpZ2h0fWApXG4gICAgZDMuc2VsZWN0KHNlbGVjdG9yKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggKyBNQVJHSU5TICogMilcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBNQVJHSU5TICogMik7XG4gIH1cblxuICB4QXhpcyh0aWNrcyA9IDIwLCB0aWNrRm9ybWF0ID0gKCkgPT4ge30pIHtcbiAgICB0aGlzLnhTY2FsZSA9IGQzXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCBXSURUSF0pXG4gICAgICAuZG9tYWluKFswLCAxXSk7XG4gICAgbGV0IHhBeGlzQ2FsbCA9IGQzXG4gICAgICAuYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSlcbiAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgIC50aWNrRm9ybWF0KGQzLmZvcm1hdChcIi4wJVwiKSk7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtIRUlHSFR9KWApXG4gICAgICAuY2FsbCh4QXhpc0NhbGwpO1xuICB9XG5cbiAgeUF4aXMoZG9tYWluLCB5U2NhbGUsIHRpY2tzID0gNSwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgaWYgKHlTY2FsZSA9PT0gXCJzY2FsZUJhbmRcIikge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgSEVJR0hUXSlcbiAgICAgICAgLnBhZGRpbmcoMC44KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgSEVJR0hUXSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydC5hcHBlbmQoXCJnXCIpLmNhbGwoXG4gICAgICBkM1xuICAgICAgICAuYXhpc0xlZnQodGhpcy55U2NhbGUpXG4gICAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgICAgLnRpY2tGb3JtYXQodGlja0Zvcm1hdCgpKVxuICAgICk7XG4gIH1cblxuICBzZXRMYWJlbHMoKSB7XG4gICAgLy8gTGFiZWxzXG4gICAgdmFyIHhMYWJlbCA9IHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIEhFSUdIVCArIDUwKVxuICAgICAgLmF0dHIoXCJ4XCIsIFdJRFRIIC8gMilcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjBweFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJHRFAgUGVyIENhcGl0YSAoJClcIik7XG4gICAgdmFyIHlMYWJlbCA9IHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIC02NSlcbiAgICAgIC5hdHRyKFwieFwiLCAtMzAwKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMHB4XCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkhhcHBpbmVzcyBJbmRleCAoJSlcIik7XG4gIH1cblxuICAvLyBncmlkTGluZXMoc2NhbGUsIHBvc2l0aW9uLCB0aWNrcyA9IDUpIHtcbiAgLy8gICB0aGlzLmNoYXJ0XG4gIC8vICAgICAuYXBwZW5kKFwiZ1wiKVxuICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImdyaWRcIilcbiAgLy8gICAgIC5jYWxsKGQzW3Bvc2l0aW9uXSkoKVxuICAvLyAgICAgLnNjYWxlKHNjYWxlKVxuICAvLyAgICAgLnRpY2tTaXplKFdJRFRILCAwLCAwKVxuICAvLyAgICAgLnRpY2tGb3JtYXQoXCJcIilcbiAgLy8gICAgIC50aWNrcyh0aWNrcyk7XG4gIC8vIH1cblxuICAvLyByZWN0YW5nbGVMYWJlbHModGV4dCkge1xuICAvLyAgIHRoaXMuY2hhcnRcbiAgLy8gICAgIC5zZWxlY3RBbGwoKVxuICAvLyAgICAgLmRhdGEodGhpcy5zb3J0ZWREYXRhKVxuICAvLyAgICAgLmVudGVyKClcbiAgLy8gICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gIC8vICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGNpdHkgJHtkLmNsYXNzfSBiYXItbGFiZWwgY2l0eS1kYXRhLXRvZ2dsZWApXG4gIC8vICAgICAuYXR0cihcInhcIiwgNSlcbiAgLy8gICAgIC5hdHRyKFwieVwiLCBkID0+IHRoaXMueVNjYWxlKGQuY2l0eSkgLSAyKVxuICAvLyAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiNmZmZcIilcbiAgLy8gICAgIC50ZXh0KChkLCBpKSA9PiB7XG4gIC8vICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAvLyAgICAgICAgIHJldHVybiBkW3RleHRdO1xuICAvLyAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgIHJldHVybiB0ZXh0LmNhbGwoZCwgaSk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pXG4gIC8vICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAvLyB9XG5cbiAgLy8gbGFiZWxUb3AodGV4dCkge1xuICAvLyAgIHRoaXMuY2hhcnRcbiAgLy8gICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwibGFiZWwtdGV4dFwiKVxuICAvLyAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAvLyAgICAgLmF0dHIoXCJ4XCIsIFdJRFRIIC8gMilcbiAgLy8gICAgIC5hdHRyKFwieVwiLCAtMjApXG4gIC8vICAgICAudGV4dCh0ZXh0KTtcbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiIsImV4cG9ydCBjb25zdCBQTEFOTyA9IFwiUExBTk9cIjtcbmNvbnN0IFBMQU5PX0NJVFkgPSBcIlBsYW5vXCI7XG5jb25zdCBQTEFOT19DTEFTUyA9IFwiY2l0eS1QbGFub1wiO1xuY29uc3QgUExBTk9fQ09MT1IgPSBcIiM1MWVhZWFcIjtcblxuZXhwb3J0IGNvbnN0IElSVklORSA9IFwiSVJWSU5FXCI7XG5jb25zdCBJUlZJTkVfQ0lUWSA9IFwiSVJWSU5FXCI7XG5jb25zdCBJUlZJTkVfQ0xBU1MgPSBcImNpdHktSXJ2aW5lXCI7XG5jb25zdCBJUlZJTkVfQ09MT1IgPSBcIiNmZjlkNzZcIjtcblxuZXhwb3J0IGNvbnN0IE1BRElTT04gPSBcIk1BRElTT05cIjtcbmNvbnN0IE1BRElTT05fQ0lUWSA9IFwiTUFESVNPTlwiO1xuY29uc3QgTUFESVNPTl9DTEFTUyA9IFwiY2l0eS1NYWRpc29uXCI7XG5jb25zdCBNQURJU09OX0NPTE9SID0gXCIjZmIzNTY5XCI7XG5cbmV4cG9ydCBjb25zdCBGUkVNT05UID0gXCJGUkVNT05UXCI7XG5jb25zdCBGUkVNT05UX0NJVFkgPSBcIkZSRU1PTlRcIjtcbmNvbnN0IEZSRU1PTlRfQ0xBU1MgPSBcImNpdHktRnJlbW9udFwiO1xuY29uc3QgRlJFTU9OVF9DT0xPUiA9IFwiI2ZhODZiZVwiO1xuXG5leHBvcnQgY29uc3QgSFVOVElOR1RPTl9CRUFDSCA9IFwiSFVOVElOR1RPTl9CRUFDSFwiO1xuY29uc3QgSFVOVElOR1RPTl9CRUFDSF9DSVRZID0gXCJIVU5USU5HVE9OX0JFQUNIXCI7XG5jb25zdCBIVU5USU5HVE9OX0JFQUNIX0NMQVNTID0gXCJjaXR5LUh1bnRpbmd0b24tQmVhY2hcIjtcbmNvbnN0IEhVTlRJTkdUT05fQkVBQ0hfQ09MT1IgPSBcIiNhMjc1ZTNcIjtcblxuZXhwb3J0IGNvbnN0IEZBUkdPID0gXCJGQVJHT1wiO1xuY29uc3QgRkFSR09fQ0lUWSA9IFwiRkFSR09cIjtcbmNvbnN0IEZBUkdPX0NMQVNTID0gXCJjaXR5LUZhcmdvXCI7XG5jb25zdCBGQVJHT19DT0xPUiA9IFwiI2ZmMWY1YVwiO1xuXG5leHBvcnQgY29uc3QgR1JBTkRfUFJBSVJJRSA9IFwiR1JBTkRfUFJBSVJJRVwiO1xuY29uc3QgR1JBTkRfUFJBSVJJRV9DSVRZID0gXCJHUkFORF9QUkFJUklFXCI7XG5jb25zdCBHUkFORF9QUkFJUklFX0NMQVNTID0gXCJjaXR5LUdyYW5kLVByYWlyaWVcIjtcbmNvbnN0IEdSQU5EX1BSQUlSSUVfQ09MT1IgPSBcIiM2OTAwZmZcIjtcblxuZXhwb3J0IGNvbnN0IFNBTl9KT1NFID0gXCJTQU5fSk9TRVwiO1xuY29uc3QgU0FOX0pPU0VfQ0lUWSA9IFwiU0FOX0pPU0VcIjtcbmNvbnN0IFNBTl9KT1NFX0NMQVNTID0gXCJjaXR5LVNhbi1Kb3NlXCI7XG5jb25zdCBTQU5fSk9TRV9DT0xPUiA9IFwiI2ZmZDcwMFwiO1xuXG5leHBvcnQgY29uc3QgU0NPVFRTREFMRSA9IFwiU0NPVFRTREFMRVwiO1xuY29uc3QgU0NPVFRTREFMRV9DSVRZID0gXCJTQ09UVFNEQUxFXCI7XG5jb25zdCBTQ09UVFNEQUxFX0NMQVNTID0gXCJjaXR5LVNjb3R0c2RhbGVcIjtcbmNvbnN0IFNDT1RUU0RBTEVfQ09MT1IgPSBcIiNmZjYxMzhcIjtcblxuZXhwb3J0IGNvbnN0IFNBTl9GUkFOQ0lTQ08gPSBcIlNBTl9GUkFOQ0lTQ09cIjtcbmNvbnN0IFNBTl9GUkFOQ0lTQ09fQ0lUWSA9IFwiU0FOX0ZSQU5DSVNDT1wiO1xuY29uc3QgU0FOX0ZSQU5DSVNDT19DTEFTUyA9IFwiY2l0eS1TYW4tRnJhbmNpc2NvXCI7XG5jb25zdCBTQU5fRlJBTkNJU0NPX0NPTE9SID0gXCIjMzAzNDgxXCI7XG5cbmV4cG9ydCBjb25zdCBCSVNNQVJDSyA9IFwiQklTTUFSQ0tcIjtcbmNvbnN0IEJJU01BUkNLX0NJVFkgPSBcIkJJU01BUkNLXCI7XG5jb25zdCBCSVNNQVJDS19DTEFTUyA9IFwiY2l0eS1CaXNtYXJja1wiO1xuY29uc3QgQklTTUFSQ0tfQ09MT1IgPSBcIiM3Y2JkMWVcIjtcblxuZXhwb3J0IGNvbnN0IE9WRVJMQU5EX1BBUksgPSBcIk9WRVJMQU5EX1BBUktcIjtcbmNvbnN0IE9WRVJMQU5EX1BBUktfQ0lUWSA9IFwiT1ZFUkxBTkRfUEFSS1wiO1xuY29uc3QgT1ZFUkxBTkRfUEFSS19DTEFTUyA9IFwiY2l0eS1PdmVybGFuZC1QYXJrXCI7XG5jb25zdCBPVkVSTEFORF9QQVJLX0NPTE9SID0gXCIjMDA5Mzc4XCI7XG5cbmV4cG9ydCBjb25zdCBTQU5UQV9ST1NBID0gXCJTQU5UQV9ST1NBXCI7XG5jb25zdCBTQU5UQV9ST1NBX0NJVFkgPSBcIlNBTlRBX1JPU0FcIjtcbmNvbnN0IFNBTlRBX1JPU0FfQ0xBU1MgPSBcImNpdHktU2FudGEtUm9zYVwiO1xuY29uc3QgU0FOVEFfUk9TQV9DT0xPUiA9IFwiI2Y2MGM4NlwiO1xuXG5leHBvcnQgY29uc3QgQVVTVElOID0gXCJBVVNUSU5cIjtcbmNvbnN0IEFVU1RJTl9DSVRZID0gXCJBVVNUSU5cIjtcbmNvbnN0IEFVU1RJTl9DTEFTUyA9IFwiY2l0eS1BdXN0aW5cIjtcbmNvbnN0IEFVU1RJTl9DT0xPUiA9IFwiI2Y5ZDAwZlwiO1xuXG5leHBvcnQgY29uc3QgU0lPVVhfRkFMTFMgPSBcIlNJT1VYX0ZBTExTXCI7XG5jb25zdCBTSU9VWF9GQUxMU19DSVRZID0gXCJTSU9VWF9GQUxMU1wiO1xuY29uc3QgU0lPVVhfRkFMTFNfQ0xBU1MgPSBcImNpdHktU2lvdXgtRmFsbHNcIjtcbmNvbnN0IFNJT1VYX0ZBTExTX0NPTE9SID0gXCIjMzAzODQxXCI7XG5cbmV4cG9ydCBjb25zdCBQRUFSTF9DSVRZID0gXCJQRUFSTF9DSVRZXCI7XG5jb25zdCBQRUFSTF9DSVRZX0NJVFkgPSBcIlBFQVJMX0NJVFlcIjtcbmNvbnN0IFBFQVJMX0NJVFlfQ0xBU1MgPSBcImNpdHktUGVhcmwtQ2l0eVwiO1xuY29uc3QgUEVBUkxfQ0lUWV9DT0xPUiA9IFwiIzk2Y2QzOVwiO1xuXG5leHBvcnQgY29uc3QgR0xFTkRBTEUgPSBcIkdMRU5EQUxFXCI7XG5jb25zdCBHTEVOREFMRV9DSVRZID0gXCJHTEVOREFMRVwiO1xuY29uc3QgR0xFTkRBTEVfQ0xBU1MgPSBcImNpdHktR2xlbmRhbGVcIjtcbmNvbnN0IEdMRU5EQUxFX0NPTE9SID0gXCIjMmZjNWNjXCI7XG5cbmV4cG9ydCBjb25zdCBTQU5fRElFR08gPSBcIlNBTl9ESUVHT1wiO1xuY29uc3QgU0FOX0RJRUdPX0NJVFkgPSBcIlNBTl9ESUVHT1wiO1xuY29uc3QgU0FOX0RJRUdPX0NMQVNTID0gXCJjaXR5LVNhbi1EaWVnb1wiO1xuY29uc3QgU0FOX0RJRUdPX0NPTE9SID0gXCIjZmY1YjQ0XCI7XG5cbmV4cG9ydCBjb25zdCBTVF9QQVVMID0gXCJTVF9QQVVMXCI7XG5jb25zdCBTVF9QQVVMX0NJVFkgPSBcIlNUX1BBVUxcIjtcbmNvbnN0IFNUX1BBVUxfQ0xBU1MgPSBcImNpdHktU3QtUGF1bFwiO1xuY29uc3QgU1RfUEFVTF9DT0xPUiA9IFwiI2JmNjhmNlwiO1xuXG5leHBvcnQgY29uc3QgQ0hBUkxFU1RPTiA9IFwiQ0hBUkxFU1RPTlwiO1xuY29uc3QgQ0hBUkxFU1RPTl9DSVRZID0gXCJDSEFSTEVTVE9OXCI7XG5jb25zdCBDSEFSTEVTVE9OX0NMQVNTID0gXCJjaXR5LUNoYXJsZXN0b25cIjtcbmNvbnN0IENIQVJMRVNUT05fQ09MT1IgPSBcIiNmOTI3MjdcIjtcblxuZXhwb3J0IGNvbnN0IEdJTEJFUlQgPSBcIkdJTEJFUlRcIjtcbmNvbnN0IEdJTEJFUlRfQ0lUWSA9IFwiR0lMQkVSVFwiO1xuY29uc3QgR0lMQkVSVF9DTEFTUyA9IFwiY2l0eS1HaWxiZXJ0XCI7XG5jb25zdCBHSUxCRVJUX0NPTE9SID0gXCIjZmYwNTkyXCI7XG5cbmV4cG9ydCBjb25zdCBBTkFIRUlNID0gXCJBTkFIRUlNXCI7XG5jb25zdCBBTkFIRUlNX0NJVFkgPSBcIkFOQUhFSU1cIjtcbmNvbnN0IEFOQUhFSU1fQ0xBU1MgPSBcImNpdHktQW5haGVpbVwiO1xuY29uc3QgQU5BSEVJTV9DT0xPUiA9IFwiI2E1OGJmZlwiO1xuXG5leHBvcnQgY29uc3QgUkFMRUlHSCA9IFwiUkFMRUlHSFwiO1xuY29uc3QgUkFMRUlHSF9DSVRZID0gXCJSQUxFSUdIXCI7XG5jb25zdCBSQUxFSUdIX0NMQVNTID0gXCJjaXR5LVJhbGVpZ2hcIjtcbmNvbnN0IFJBTEVJR0hfQ09MT1IgPSBcIiMwMDkzNzhcIjtcblxuZXhwb3J0IGNvbnN0IENBUEVfQ09SQUwgPSBcIkNBUEVfQ09SQUxcIjtcbmNvbnN0IENBUEVfQ09SQUxfQ0lUWSA9IFwiQ0FQRV9DT1JBTFwiO1xuY29uc3QgQ0FQRV9DT1JBTF9DTEFTUyA9IFwiY2l0eS1DYXBlLUNvcmFsXCI7XG5jb25zdCBDQVBFX0NPUkFMX0NPTE9SID0gXCIjZmMzNDVjXCI7XG5cbmV4cG9ydCBjb25zdCBDRURBUl9SQVBJRFMgPSBcIkNFREFSX1JBUElEU1wiO1xuY29uc3QgQ0VEQVJfUkFQSURTX0NJVFkgPSBcIkNFREFSX1JBUElEU1wiO1xuY29uc3QgQ0VEQVJfUkFQSURTX0NMQVNTID0gXCJjaXR5LUNlZGFyLVJhcGlkc1wiO1xuY29uc3QgQ0VEQVJfUkFQSURTX0NPTE9SID0gXCIjM2Q2Y2I5XCI7XG5cbmV4cG9ydCBjb25zdCBDSVRJRVMgPSB7XG4gIFBMQU5POiB7XG4gICAgY2l0eTogXCJQbGFub1wiLFxuICAgIGNvbnN0YW50OiBQTEFOTyxcbiAgICBjbGFzczogUExBTk9fQ0xBU1MsXG4gICAgY29sb3I6IFBMQU5PX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA0LFxuICAgIHBvc2l0aW9uOiB7IHg6IDUyNiwgeTogMzkwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDcyLjMsXG4gICAgcmFua2luZzogMVxuICB9LFxuICBJUlZJTkU6IHtcbiAgICBjaXR5OiBcIklydmluZVwiLFxuICAgIGNvbnN0YW50OiBJUlZJTkUsXG4gICAgY2xhc3M6IElSVklORV9DTEFTUyxcbiAgICBjb2xvcjogSVJWSU5FX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogOCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA2LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAzLFxuICAgIHBvc2l0aW9uOiB7IHg6IDE4MCwgeTogMzAwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDcxLjg2LFxuICAgIHJhbmtpbmc6IDJcbiAgfSxcbiAgTUFESVNPTjoge1xuICAgIGNpdHk6IFwiTWFkaXNvblwiLFxuICAgIGNvbnN0YW50OiBNQURJU09OLFxuICAgIGNsYXNzOiBNQURJU09OX0NMQVNTLFxuICAgIGNvbG9yOiBNQURJU09OX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA4LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA0LFxuICAgIHBvc2l0aW9uOiB7IHg6IDY0MCwgeTogMTYwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDcxLjgxLFxuICAgIHJhbmtpbmc6IDNcbiAgfSxcbiAgRlJFTU9OVDoge1xuICAgIGNpdHk6IFwiRnJlbW9udFwiLFxuICAgIGNvbnN0YW50OiBGUkVNT05ULFxuICAgIGNsYXNzOiBGUkVNT05UX0NMQVNTLFxuICAgIGNvbG9yOiBGUkVNT05UX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyMCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMSxcbiAgICBwb3NpdGlvbjogeyB4OiAxNTEsIHk6IDIyNSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA3MS4xNyxcbiAgICByYW5raW5nOiA0XG4gIH0sXG4gIEhVTlRJTkdUT05fQkVBQ0g6IHtcbiAgICBjaXR5OiBcIkh1bnRpbmd0b24gQmVhY2hcIixcbiAgICBjb25zdGFudDogSFVOVElOR1RPTl9CRUFDSCxcbiAgICBjbGFzczogSFVOVElOR1RPTl9CRUFDSF9DTEFTUyxcbiAgICBjb2xvcjogSFVOVElOR1RPTl9CRUFDSF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDMsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjUsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDE1LFxuICAgIHBvc2l0aW9uOiB7IHg6IDE1OSwgeTogMjkwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY5Ljc0LFxuICAgIHJhbmtpbmc6IDVcbiAgfSxcbiAgRkFSR086IHtcbiAgICBjaXR5OiBcIkZhcmdvXCIsXG4gICAgY29uc3RhbnQ6IEZBUkdPLFxuICAgIGNsYXNzOiBGQVJHT19DTEFTUyxcbiAgICBjb2xvcjogRkFSR09fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA5LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDExLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxMyxcbiAgICBwb3NpdGlvbjogeyB4OiA0OTgsIHk6IDk0IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY5LjU3LFxuICAgIHJhbmtpbmc6IDZcbiAgfSxcbiAgR1JBTkRfUFJBSVJJRToge1xuICAgIGNpdHk6IFwiR3JhbmQgUHJhaXJpZVwiLFxuICAgIGNvbnN0YW50OiBHUkFORF9QUkFJUklFLFxuICAgIGNsYXNzOiBHUkFORF9QUkFJUklFX0NMQVNTLFxuICAgIGNvbG9yOiBHUkFORF9QUkFJUklFX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTEsXG4gICAgaW5jb21lRW1wbG95bWVudDogMTksXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDMsXG4gICAgcG9zaXRpb246IHsgeDogNTI1LCB5OiA0MTAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjkuMyxcbiAgICByYW5raW5nOiA3XG4gIH0sXG4gIFNBTl9KT1NFOiB7XG4gICAgY2l0eTogXCJTYW4gSm9zZVwiLFxuICAgIGNvbnN0YW50OiBTQU5fSk9TRSxcbiAgICBjbGFzczogU0FOX0pPU0VfQ0xBU1MsXG4gICAgY29sb3I6IFNBTl9KT1NFX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAxMCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMjQsXG4gICAgcG9zaXRpb246IHsgeDogMTQwLCB5OiAyNDAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjguOSxcbiAgICByYW5raW5nOiA4XG4gIH0sXG4gIFNDT1RUU0RBTEU6IHtcbiAgICBjaXR5OiBcIlNjb3R0c2RhbGVcIixcbiAgICBjb25zdGFudDogU0NPVFRTREFMRSxcbiAgICBjbGFzczogU0NPVFRTREFMRV9DTEFTUyxcbiAgICBjb2xvcjogU0NPVFRTREFMRV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDI1LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDcsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDEsXG4gICAgcG9zaXRpb246IHsgeDogMjcwLCB5OiAzNDEgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjguMjQsXG4gICAgcmFua2luZzogOVxuICB9LFxuICBTQU5fRlJBTkNJU0NPOiB7XG4gICAgY2l0eTogXCJTYW4gRnJhbmNpc2NvXCIsXG4gICAgY29uc3RhbnQ6IFNBTl9GUkFOQ0lTQ08sXG4gICAgY2xhc3M6IFNBTl9GUkFOQ0lTQ09fQ0xBU1MsXG4gICAgY29sb3I6IFNBTl9GUkFOQ0lTQ09fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDEsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDY5LFxuICAgIHBvc2l0aW9uOiB7IHg6IDEzNiwgeTogMjEyIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY3LjUzLFxuICAgIHJhbmtpbmc6IDEwXG4gIH0sXG4gIEJJU01BUkNLOiB7XG4gICAgY2l0eTogXCJCaXNtYXJja1wiLFxuICAgIGNvbnN0YW50OiBCSVNNQVJDSyxcbiAgICBjbGFzczogQklTTUFSQ0tfQ0xBU1MsXG4gICAgY29sb3I6IEJJU01BUkNLX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTQsXG4gICAgaW5jb21lRW1wbG95bWVudDogMixcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMjUsXG4gICAgcG9zaXRpb246IHsgeDogNDc4LCB5OiAxMDYgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuMzgsXG4gICAgcmFua2luZzogMTFcbiAgfSxcbiAgT1ZFUkxBTkRfUEFSSzoge1xuICAgIGNpdHk6IFwiT3ZlcmxhbmQgUGFya1wiLFxuICAgIGNvbnN0YW50OiBPVkVSTEFORF9QQVJLLFxuICAgIGNsYXNzOiBPVkVSTEFORF9QQVJLX0NMQVNTLFxuICAgIGNvbG9yOiBPVkVSTEFORF9QQVJLX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTIsXG4gICAgaW5jb21lRW1wbG95bWVudDogMzEsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDE0LFxuICAgIHBvc2l0aW9uOiB7IHg6IDU3MCwgeTogMjc4IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY3LjM3LFxuICAgIHJhbmtpbmc6IDEyXG4gIH0sXG4gIFNBTlRBX1JPU0E6IHtcbiAgICBjaXR5OiBcIlNhbnRhIFJvc2FcIixcbiAgICBjb25zdGFudDogU0FOVEFfUk9TQSxcbiAgICBjbGFzczogU0FOVEFfUk9TQV9DTEFTUyxcbiAgICBjb2xvcjogU0FOVEFfUk9TQV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEzLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDI5LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA1LFxuICAgIHBvc2l0aW9uOiB7IHg6IDEzMiwgeTogMTk2IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY3LjE4LFxuICAgIHJhbmtpbmc6IDEzXG4gIH0sXG4gIEFVU1RJTjoge1xuICAgIGNpdHk6IFwiQXVzdGluXCIsXG4gICAgY29uc3RhbnQ6IEFVU1RJTixcbiAgICBjbGFzczogQVVTVElOX0NMQVNTLFxuICAgIGNvbG9yOiBBVVNUSU5fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA4LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDQsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQ0LFxuICAgIHBvc2l0aW9uOiB7IHg6IDQ5NywgeTogNDMwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY3LjE2LFxuICAgIHJhbmtpbmc6IDE0XG4gIH0sXG4gIFNJT1VYX0ZBTExTOiB7XG4gICAgY2l0eTogXCJTaW91eCBGYWxsc1wiLFxuICAgIGNvbnN0YW50OiBTSU9VWF9GQUxMUyxcbiAgICBjbGFzczogU0lPVVhfRkFMTFNfQ0xBU1MsXG4gICAgY29sb3I6IFNJT1VYX0ZBTExTX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzNyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNTIsXG4gICAgcG9zaXRpb246IHsgeDogNTAwLCB5OiAxNjggfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjYuOTcsXG4gICAgcmFua2luZzogMTVcbiAgfSxcbiAgUEVBUkxfQ0lUWToge1xuICAgIGNpdHk6IFwiUGVhcmwgQ2l0eVwiLFxuICAgIGNvbnN0YW50OiBQRUFSTF9DSVRZLFxuICAgIGNsYXNzOiBQRUFSTF9DSVRZX0NMQVNTLFxuICAgIGNvbG9yOiBQRUFSTF9DSVRZX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA4MSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogOCxcbiAgICBwb3NpdGlvbjogeyB4OiAzNTAsIHk6IDQ5MSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ni43NyxcbiAgICByYW5raW5nOiAxNlxuICB9LFxuICBHTEVOREFMRToge1xuICAgIGNpdHk6IFwiR2xlbmRhbGVcIixcbiAgICBjb25zdGFudDogR0xFTkRBTEUsXG4gICAgY2xhc3M6IEdMRU5EQUxFX0NMQVNTLFxuICAgIGNvbG9yOiBHTEVOREFMRV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDE1LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDU2LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA3LFxuICAgIHBvc2l0aW9uOiB7IHg6IDE2NywgeTogMjcyIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY2LjI1LFxuICAgIHJhbmtpbmc6IDE3XG4gIH0sXG4gIFNBTl9ESUVHTzoge1xuICAgIGNpdHk6IFwiU2FuIERpZWdvXCIsXG4gICAgY29uc3RhbnQ6IFNBTl9ESUVHTyxcbiAgICBjbGFzczogU0FOX0RJRUdPX0NMQVNTLFxuICAgIGNvbG9yOiBTQU5fRElFR09fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA0LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDIwLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyNSxcbiAgICBwb3NpdGlvbjogeyB4OiAxODcsIHk6IDMyMSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ni4wMSxcbiAgICByYW5raW5nOiAxOFxuICB9LFxuICBTVF9QQVVMOiB7XG4gICAgY2l0eTogXCJTdC4gUGF1bFwiLFxuICAgIGNvbnN0YW50OiBTVF9QQVVMLFxuICAgIGNsYXNzOiBTVF9QQVVMX0NMQVNTLFxuICAgIGNvbG9yOiBTVF9QQVVMX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTAsXG4gICAgaW5jb21lRW1wbG95bWVudDogMzgsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDM2LFxuICAgIHBvc2l0aW9uOiB7IHg6IDU5MCwgeTogMTMzIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY1Ljc5LFxuICAgIHJhbmtpbmc6IDE5XG4gIH0sXG4gIENIQVJMRVNUT046IHtcbiAgICBjaXR5OiBcIkNoYXJsZXN0b25cIixcbiAgICBjb25zdGFudDogQ0hBUkxFU1RPTixcbiAgICBjbGFzczogQ0hBUkxFU1RPTl9DTEFTUyxcbiAgICBjb2xvcjogQ0hBUkxFU1RPTl9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDQxLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDMsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDIsXG4gICAgcG9zaXRpb246IHsgeDogODA1LCB5OiA0MDAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjUuNDgsXG4gICAgcmFua2luZzogMjBcbiAgfSxcbiAgR0lMQkVSVDoge1xuICAgIGNpdHk6IFwiR2lsYmVydFwiLFxuICAgIGNvbnN0YW50OiBHSUxCRVJULFxuICAgIGNsYXNzOiBHSUxCRVJUX0NMQVNTLFxuICAgIGNvbG9yOiBHSUxCRVJUX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMzAsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjYsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUsXG4gICAgcG9zaXRpb246IHsgeDogMjc3LCB5OiAzNjMgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjUuMDcsXG4gICAgcmFua2luZzogMjFcbiAgfSxcbiAgQU5BSEVJTToge1xuICAgIGNpdHk6IFwiQW5haGVpbVwiLFxuICAgIGNvbnN0YW50OiBBTkFIRUlNLFxuICAgIGNsYXNzOiBBTkFIRUlNX0NMQVNTLFxuICAgIGNvbG9yOiBBTkFIRUlNX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTYsXG4gICAgaW5jb21lRW1wbG95bWVudDogNDMsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDE5LFxuICAgIHBvc2l0aW9uOiB7IHg6IDE5NiwgeTogMjgyIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY1LjAyLFxuICAgIHJhbmtpbmc6IDIyXG4gIH0sXG4gIFJBTEVJR0g6IHtcbiAgICBjaXR5OiBcIlJhbGVpZ2hcIixcbiAgICBjb25zdGFudDogUkFMRUlHSCxcbiAgICBjbGFzczogUkFMRUlHSF9DTEFTUyxcbiAgICBjb2xvcjogUkFMRUlHSF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDcsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjMsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQ4LFxuICAgIHBvc2l0aW9uOiB7IHg6IDgzMCwgeTogMzEzIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY0Ljk5LFxuICAgIHJhbmtpbmc6IDIzXG4gIH0sXG4gIENBUEVfQ09SQUw6IHtcbiAgICBjaXR5OiBcIkNhcGUgQ29yYWxcIixcbiAgICBjb25zdGFudDogQ0FQRV9DT1JBTCxcbiAgICBjbGFzczogQ0FQRV9DT1JBTF9DTEFTUyxcbiAgICBjb2xvcjogQ0FQRV9DT1JBTF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDI4LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDQ4LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyLFxuICAgIHBvc2l0aW9uOiB7IHg6IDgwMCwgeTogNDgwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY0Ljk2LFxuICAgIHJhbmtpbmc6IDI0XG4gIH0sXG4gIENFREFSX1JBUElEUzoge1xuICAgIGNpdHk6IFwiQ2VkYXIgUmFwaWRzXCIsXG4gICAgY29uc3RhbnQ6IENFREFSX1JBUElEUyxcbiAgICBjbGFzczogQ0VEQVJfUkFQSURTX0NMQVNTLFxuICAgIGNvbG9yOiBDRURBUl9SQVBJRFNfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyMyxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzMixcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTEsXG4gICAgcG9zaXRpb246IHsgeDogNjAwLCB5OiAyMDUgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjQuOSxcbiAgICByYW5raW5nOiAyNVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMTAwMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fREVMQVkgPSAwO1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9FQVNJTkcgPSBkMy5lYXNlUG9seTtcblxuZXhwb3J0IGNvbnN0IFdJRFRIID0gMTAwMDtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSA2MDA7XG5leHBvcnQgY29uc3QgTUFSR0lOUyA9IDEwMDtcbiIsImNsYXNzIEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVyRGF0YSgpO1xuICB9XG5cbiAgZmlsdGVyRGF0YSgpIHtcbiAgICBjb25zdCB0b29sdGlwID0gZDNcbiAgICAgIC5zZWxlY3QoYC5oZWFkZXJfX3Rvb2x0aXBgKVxuICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRvb2x0aXBcIilcbiAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwic29saWRcIilcbiAgICAgIC5zdHlsZShcImJvcmRlci13aWR0aFwiLCBcIjJweFwiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjVweFwiKVxuICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBcIjFyZW1cIik7XG5cbiAgICBkMy5zZWxlY3RBbGwoJy5jaXR5JylcbiAgICAgIC5vbignbW91c2VvdmVyJywgKGQsIGkpID0+IHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHR5cGVvZiBkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IGBjaXR5LSR7ZC5zcGxpdCgnICcpLmpvaW4oJy0nKX1gO1xuICAgICAgICB9IGVsc2UgaWYgKGQuZGF0YSkge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IGQuZGF0YS5jbGFzcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBkLmNsYXNzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbE90aGVyQ2l0eURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuY2l0eTpub3QoLiR7Y2xhc3NOYW1lfSlgKTtcbiAgICAgICAgYWxsT3RoZXJDaXR5RGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICAgIGRhdGEuY2xhc3NMaXN0LmFkZCgnZmlsdGVyJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gdG9vbHRpcCAgXG4gICAgICAgIHRvb2x0aXBcbiAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAgICAgICAuaHRtbChcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXBfX2lubmVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19jaXR5XCI+PHN0cm9uZz5DaXR5OiA8L3N0cm9uZz48c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5jaXR5XG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPk92ZXJhbGwgUmFuazo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQucmFua2luZ1xuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5Ub3RhbCBIYXBwaW5lc3MgU2NvcmU6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmhhcHBpbmVzc1Njb3JlXG4gICAgICAgICAgICAgICAgfS8xMDA8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5FbW90aW9uYWwgJiBQaHlzaWNhbCBXZWxsLUJlaW5nOjwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5lbW90aW9uYWxXZWxsYmVpbmdcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+SW5jb21lICYgRW1wbG95bWVudDo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuaW5jb21lRW1wbG95bWVudFxuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5Db21tdW5pdHkgJiBFbnZpcm9ubWVudDo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuY29tbXVuaXR5RW52aXJvbm1lbnRcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19oZWFkZXInKTtcbiAgICAgICAgbWFpbkhlYWRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGNvbG9yOiAke2QuY29sb3J9YCApO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsQ2l0eURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2l0eScpO1xuICAgICAgICBhbGxDaXR5RGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICAgIGRhdGEuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faGVhZGVyXCIpO1xuICAgICAgICBtYWluSGVhZGVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBjb2xvcjogaW5pdGlhbGApO1xuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IEZpbHRlciBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgV29ybGRHcmFwaCBmcm9tIFwiLi93b3JsZF9ncmFwaFwiO1xuXG5cbmxldCB3b3JsZEdyYXBoO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgd29ybGRHcmFwaCA9IG5ldyBXb3JsZEdyYXBoKFwic3ZnLmdyYXBoXCIpO1xuICAvLyBuZXcgRmlsdGVyO1xufSk7XG5cbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgd29ybGRHcmFwaC5yZWRyYXcoXCJzdmcuZ3JhcGhcIik7XG4gIGNvbnNvbGUubG9nKCdyZXNpemVkIScpO1xufTsiLCJpbXBvcnQge1xuICBXSURUSCxcbiAgSEVJR0hULFxuICBBTklNQVRJT05fREVMQVksXG4gIEFOSU1BVElPTl9FQVNJTkcsXG4gIEFOSU1BVElPTl9EVVJBVElPTlxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IENoYXJ0IGZyb20gXCIuL2NoYXJ0XCI7XG5cbmNsYXNzIFdvcmxkR3JhcGggZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHNlbGVjdG9yKTtcbiAgICB0aGlzLnhBeGlzKCk7XG4gICAgdGhpcy55QXhpcyhbMSwgMF0sIFwic2NhbGVMaW5lYXJcIiwgMjAsICgpID0+IGQzLmZvcm1hdChcIi4wJVwiKSk7XG4gICAgdGhpcy5nZXREYXRhKCk7XG4gICAgLy8gdGhpcy5saW5lcygpO1xuICAgIC8vIHRoaXMuY2lyY2xlcygpO1xuICAgIC8vIHRoaXMucGVyY2VudGFnZUxhYmVscygpO1xuICAgIC8vIHRoaXMubGFiZWxUb3AoXCJIYXBwaW5lc3MgUmFua2luZ1wiKTtcbiAgICAvLyB0aGlzLmdyaWRMaW5lcyh0aGlzLnhTY2FsZSwgXCJheGlzQm90dG9tXCIpO1xuICAgIC8vIHRoaXMuZ3JpZExpbmVzKHRoaXMueVNjYWxlLCBcImF4aXNSaWdodFwiKTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGQzLmpzb24oXCIvZGlzdC9kYXRhL2NvdW50cmllcy5qc29uXCIpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGF0LnNldERhdGEoZGF0YSk7XG4gICAgICAvLyB0aGF0LnNldFJhZGl1cygpO1xuICAgICAgLy8gdGhhdC5saW5lcygpO1xuICAgICAgdGhhdC5jaXJjbGVzKCk7XG4gICAgICAvLyB0aGF0LnRvb2x0aXBzKCk7XG4gICAgICAvLyB0aGF0LnBlcmNlbnRhZ2VMYWJlbHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNpcmNsZXMoKSB7XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyB0b29sdGlwXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBsZXQgdG9vbHRpcCA9IGQzXG4gICAgLnNlbGVjdChcImJvZHlcIilcbiAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0b29sdGlwXCIpXG4gICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpXG4gICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjVweFwiKVxuICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxMHB4XCIpXG4gICAgLnN0eWxlKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgIC5zdHlsZShcInotaW5kZXhcIiwgXCI5OTk5OTk5OTlcIilcbiAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG4gIGxldCBzaG93VG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICB0b29sdGlwLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyMDApO1xuICAgIHRvb2x0aXBcbiAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgICAuaHRtbChcbiAgICAgICAgYFxuICA8c3Ryb25nPkNvdW50cnk6PC9zdHJvbmc+ICR7ZC5jb3VudHJ5fSAoJHtcbiAgICAgICAgICBkLmNvbnRpbmVudFxuICAgICAgICB9KTxici8+XG4gIDxzdHJvbmc+SGFwcGluZXNzIFJhbmtpbmc6PC9zdHJvbmc+ICR7ZC5yYW5raW5nfVxuYFxuICAgICAgKVxuICAgICAgLnN0eWxlKFwidG9wXCIsIGQzLmV2ZW50LmNsaWVudFkgLSAxMDAgKyBcInB4XCIpXG4gICAgICAuc3R5bGUoXCJsZWZ0XCIsIGQzLmV2ZW50LmNsaWVudFggLSAxNjAgKyBcInB4XCIpO1xuICAgIC8vIC5zdHlsZShcInRvcFwiLCBkMy5tb3VzZShkMy5ldmVudC50YXJnZXQpWzFdICsgODAgKyBcInB4XCIpXG4gICAgLy8gLnN0eWxlKFwibGVmdFwiLCBkMy5tb3VzZShkMy5ldmVudC50YXJnZXQpWzBdIC0gNDAgKyBcInB4XCIpO1xuICB9O1xuXG4gIGxldCBtb3ZlVG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICBzaG93VG9vbHRpcChkKTtcbiAgICBjb25zb2xlLmxvZyhcIm1vdmUgdG9vbHRpcFwiKTtcbiAgICB0b29sdGlwXG4gICAgICAvLyAuc3R5bGUoXCJ0b3BcIiwgZDMubW91c2UoZDMuZXZlbnQudGFyZ2V0KVsxXSArIDgwICsgXCJweFwiKVxuICAgICAgLy8gLnN0eWxlKFwibGVmdFwiLCBkMy5tb3VzZShkMy5ldmVudC50YXJnZXQpWzBdIC0gNDAgKyBcInB4XCIpXG4gICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbiAgICAgIC5zdHlsZShcImxlZnRcIiwgZDMuZXZlbnQuY2xpZW50WCAtIDE2MCArIFwicHhcIik7XG4gIH07XG5cbiAgbGV0IGhpZGVUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGlkZSB0b29sdGlwXCIpO1xuICAgIHRvb2x0aXBcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpO1xuICB9O1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gY2hhcnQgcmVuZGVyaW5nXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICB0aGlzLmNoYXJ0XG4gICAgLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuICAgIC5kYXRhKE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGNvdW50cnkgJHtkLmNsYXNzfSBjb250aW5lbnQtJHtkLmNvbnRpbmVudC5zcGxpdCgnICcpLmpvaW4oJy0nKX0gY291bnRyeS1idWJibGVgKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBZnJpY2FcIikge1xuICAgICAgICByZXR1cm4gXCIjN2NiZDFlXCI7XG4gICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkFzaWFcIikge1xuICAgICAgICByZXR1cm4gXCIjZmYxZjVhXCI7XG4gICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIk5vcnRoIEFtZXJpY2FcIikge1xuICAgICAgICByZXR1cm4gXCIjMzAzNDgxXCI7XG4gICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIlNvdXRoIEFtZXJpY2FcIikge1xuICAgICAgICByZXR1cm4gXCIjZmY1YjQ0XCI7XG4gICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkV1cm9wZVwiKSB7XG4gICAgICAgIHJldHVybiBcIiMyZmM1Y2NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiLjdcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNDRENEQ0RcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjJweFwiKVxuICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy54U2NhbGUoZC5ncmFwaEdkcCAvIDE1NikgKyAyNTtcbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3ZlclwiLCBzaG93VG9vbHRpcClcbiAgICAub24oXCJtb3VzZW1vdmVcIiwgbW92ZVRvb2x0aXApXG4gICAgLm9uKFwibW91c2VsZWF2ZVwiLCBoaWRlVG9vbHRpcClcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmRlbGF5KChkLCBpKSA9PiBpICogQU5JTUFUSU9OX0RFTEFZKVxuICAgIC5kdXJhdGlvbihBTklNQVRJT05fRFVSQVRJT04pXG4gICAgLmVhc2UoQU5JTUFUSU9OX0VBU0lORylcbiAgICAuYXR0cihcInJcIiwgZCA9PiB7XG4gICAgICBpZiAoZC5wb3B1bGF0aW9uID4gODAwMDAwMDAwKSB7XG4gICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAyNTAwMDAwMDtcbiAgICAgIH0gZWxzZSBpZiAoZC5wb3B1bGF0aW9uID4gNTAwMDAwMDApIHtcbiAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDAwO1xuICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiAxMDAwMDAwKSB7XG4gICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAxNTAwMDAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy55U2NhbGUoZC5ncmFwaFJhbmtpbmcgLyAxNTYpO1xuICAgIH0pO1xuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBsZWdlbmRcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIGxldCBjb250aW5lbnRzID0ge1xuICAgIEFGUklDQTogeyBjb250aW5lbnQ6IFwiQWZyaWNhXCIgfSxcbiAgICBBU0lBOiB7IGNvbnRpbmVudDogXCJBc2lhXCIgfSxcbiAgICBOT1JUSF9BTUVSSUNBOiB7IGNvbnRpbmVudDogXCJOb3J0aCBBbWVyaWNhXCIgfSxcbiAgICBTT1VUSF9BTUVSSUNBOiB7IGNvbnRpbmVudDogXCJTb3V0aCBBbWVyaWNhXCIgfSxcbiAgICBFVVJPUEU6IHsgY29udGluZW50OiBcIkV1cm9wZVwiIH1cbiAgfTtcblxuICBsZXQgY29udGluZW50Rm9jdXNPbiA9IChjb250aW5lbnROYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2coY29udGluZW50TmFtZSk7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdEFsbChgY2lyY2xlOm5vdCguY29udGluZW50LSR7Y29udGluZW50TmFtZS5zcGxpdCgnICcpLmpvaW4oJy0nKX0pYClcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBcIjAuMVwiKTtcbiAgICAvLyBsZXQgbWF0Y2hlZENvdW50cmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGNpcmNsZTpub3QoLmNvbnRpbmVudC0ke2NvbnRpbmVudE5hbWV9KWApO1xuICAgIC8vIG1hdGNoZWRDb3VudHJpZXMuZm9yRWFjaChjb3VudHJ5ID0+IHtcbiAgICAvLyAgIGRlYnVnZ2VyXG4gICAgLy8gICAvLyBjb3VudHJ5LnN0eWxlKFwidHJhbnNmb3JtXCIsIFwic2NhbGUoMS4xKVwiKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGNvdW50cnkpO1xuXG4gICAgLy8gfSlcbiAgfTtcblxuICBsZXQgY29udGluZW50Rm9jdXNPZmYgPSAoY29udGluZW50TmFtZSkgPT4ge1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoYGNpcmNsZTpub3QoLmNvbnRpbmVudC0ke2NvbnRpbmVudE5hbWUuc3BsaXQoJyAnKS5qb2luKCctJyl9KWApXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjdcIik7XG4gIH07XG5cbiAgbGV0IGxlZ2VuZCA9IHRoaXMuY2hhcnRcbiAgICAuc2VsZWN0QWxsKFwiLmxlZ2VuZFwiKVxuICAgIC5kYXRhKE9iamVjdC52YWx1ZXMoY29udGluZW50cykpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsZWdlbmRcIilcbiAgICAuYXR0cihcbiAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZShcIiArIDg3MCArIFwiLFwiICsgNDgwICsgXCIpXCJcbiAgICApO1xuXG4gIGxlZ2VuZFxuICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgIHJldHVybiAyMCAqIGk7XG4gICAgfSlcbiAgICAuYXR0cihcIndpZHRoXCIsIDE1KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDE1KVxuICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgaWYgKGQuY29udGluZW50ID09PSBcIkFmcmljYVwiKSB7XG4gICAgICAgIHJldHVybiBcIiM3Y2JkMWVcIjtcbiAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiQXNpYVwiKSB7XG4gICAgICAgIHJldHVybiBcIiNmZjFmNWFcIjtcbiAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiTm9ydGggQW1lcmljYVwiKSB7XG4gICAgICAgIHJldHVybiBcIiMzMDM0ODFcIjtcbiAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiU291dGggQW1lcmljYVwiKSB7XG4gICAgICAgIHJldHVybiBcIiNmZjViNDRcIjtcbiAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiRXVyb3BlXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiIzJmYzVjY1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwicmVkXCI7XG4gICAgICB9XG4gICAgfSlcbiAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiBjb250aW5lbnRGb2N1c09uKGQuY29udGluZW50KSlcbiAgICAub24oXCJtb3VzZWxlYXZlXCIsIGQgPT4gY29udGluZW50Rm9jdXNPZmYoZC5jb250aW5lbnQpKTtcblxuICBsZWdlbmRcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwieFwiLCAyNSlcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIilcbiAgICAuYXR0cihcImR5XCIsIFwiMWVtXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBsZWdlbmQtJHtkLmNvbnRpbmVudC5zcGxpdChcIiBcIikuam9pbihcIi1cIil9YClcbiAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgcmV0dXJuIDIwICogaTtcbiAgICB9KVxuICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiBkLmNvbnRpbmVudDtcbiAgICB9KVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMTJweFwiKVxuICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IGNvbnRpbmVudEZvY3VzT24oZC5jb250aW5lbnQpKVxuICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZCA9PiBjb250aW5lbnRGb2N1c09mZihkLmNvbnRpbmVudCkpO1xuICAgIFxuXG4gIGxlZ2VuZFxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJ4XCIsIDMxKVxuICAgIC5hdHRyKFwiZHlcIiwgXCItLjJlbVwiKVxuICAgIC5hdHRyKFwieVwiLCAtMTApXG4gICAgLnRleHQoXCJDb250aW5lbnRcIilcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE3cHhcIilcbiAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwibGVmdFwiKTtcbiAgfVxuXG4gIC8vIHRvb2x0aXBzKCkge1xuICAvLyAgIGxldCB0b29sdGlwID0gdGhpcy5jaGFydFxuICAvLyAgICAgLmFwcGVuZChcImRpdlwiKVxuICAvLyAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRvb2x0aXBcIilcbiAgLy8gICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKVxuICAvLyAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjVweFwiKVxuICAvLyAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBcIjEwcHhcIilcbiAgLy8gICAgIC5zdHlsZShcImNvbG9yXCIsIFwid2hpdGVcIik7XG5cbiAgLy8gICAgIGxldCBzaG93VG9vbHRpcCA9IGQgPT4ge1xuICAvLyAgICAgICB0b29sdGlwXG4gIC8vICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAvLyAgICAgICAgIC5kdXJhdGlvbigyMDApO1xuICAvLyAgICAgICB0b29sdGlwXG4gIC8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAvLyAgICAgICAgIC5odG1sKFxuICAvLyAgICAgICAgICAgYFxuICAvLyAgICAgICAgICAgICBDb3VudHJ5OiAke2QuY291bnRyeX08YnIvPlxuICAvLyAgICAgICAgICAgICBDb250aW5lbnQ6ICR7ZC5jb250aW5lbnR9PGJyLz5cbiAgLy8gICAgICAgICAgICAgSGFwcGluZXNzIFJhbmtpbmc6ICR7ZC5yYW5raW5nfTxici8+XG4gIC8vICAgICAgICAgICAgIFNvY2lhbCBTdXBwb3J0OiAke2Quc29jaWFsU3VwcG9ydH08YnIvPlxuICAvLyAgICAgICAgICAgICBGcmVlZG9tOiAke2QuZnJlZWRvbX08YnIvPlxuICAvLyAgICAgICAgICAgICBHZW5lcm9zaXR5OiAke2QuZ2VuZXJvc2l0eX08YnIvPlxuICAvLyAgICAgICAgICAgICBHRFAgUGVyIENhcGl0YTogJHtkLmdkcH08YnIvPlxuICAvLyAgICAgICAgICAgICBMaWZlIEV4cGVjdGFuY3k6ICR7ZC5saWZlRXhwZWN0YW5jeX08YnIvPlxuICAvLyAgICAgICAgICAgYFxuICAvLyAgICAgICAgIClcbiAgLy8gICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIGQzLm1vdXNlKHRoaXMpWzBdICsgMzAgKyBcInB4XCIpXG4gIC8vICAgICAgICAgLnN0eWxlKFwidG9wXCIsIGQzLm1vdXNlKHRoaXMpWzFdICsgMzAgKyBcInB4XCIpO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICBsZXQgbW92ZVRvb2x0aXAgPSBkID0+IHtcbiAgLy8gICAgICAgdG9vbHRpcFxuICAvLyAgICAgICAgIC5zdHlsZShcImxlZnRcIiwgKGQzLm1vdXNlKHRoaXMpWzBdICsgMzApICsgXCJweFwiKVxuICAvLyAgICAgICAgIC5zdHlsZShcInRvcFwiLCAoZDMubW91c2UodGhpcylbMV0gKyAzMCkgKyBcInB4XCIpXG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGxldCBoaWRlVG9vbHRpcCA9IGQgPT4ge1xuICAvLyAgICAgICB0b29sdGlwXG4gIC8vICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAvLyAgICAgICAgIC5kdXJhdGlvbigyMDApXG4gIC8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuICAvLyAgICAgfVxuXG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ybGRHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=