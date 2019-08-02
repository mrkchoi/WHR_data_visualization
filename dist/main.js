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

  loadChartListener(worldGraph);
});

function loadChartListener() {
  var btnGroup = document.querySelector(".btn-group");
  btnGroup.addEventListener("click", function (e) {
    e.preventDefault();
    var currentBtn = e.target;
    var currentBtnClass = currentBtn.classList[0].split('-')[1];
    console.log(currentBtnClass);
    worldGraph.updateData(currentBtnClass);
  });
}

;

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

      // console.log('clicke')
      // let that = this;
      d3.json("/dist/data/countries.json").then(function (data) {
        //     ////////////////////////
        //     // tooltip
        //     ////////////////////////
        //     let tooltip = d3
        //       .select("body")
        //       .append("div")
        //       .style("visibility", "hidden")
        //       .attr("class", "tooltip")
        //       .style("background-color", "black")
        //       .style("border-radius", "5px")
        //       .style("padding", "10px")
        //       .style("color", "white")
        //       .style("z-index", "999999999")
        //       .style("position", "absolute")
        //       .style("display", "block");
        //     let showTooltip = function(d) {
        //       tooltip.transition().duration(200);
        //       tooltip
        //         .style("visibility", "visible")
        //         .html(
        //           `
        // <strong>Country:</strong> ${d.country} (${d.continent})<br/>
        // <strong>Happiness Ranking:</strong> ${d.ranking}
        // `
        //         )
        //         .style("top", d3.event.clientY - 100 + "px")
        //         .style("left", d3.event.clientX - 160 + "px");
        //     };
        //     let moveTooltip = function(d) {
        //       showTooltip(d);
        //       console.log("move tooltip");
        //       tooltip
        //         .style("top", d3.event.clientY - 100 + "px")
        //         .style("left", d3.event.clientX - 160 + "px");
        //     };
        //     let hideTooltip = function(d) {
        //       console.log("hide tooltip");
        //       tooltip
        //         .transition()
        //         .duration(200)
        //         .style("visibility", "hidden");
        //     };
        ////////////////////////
        // chart rendering
        ////////////////////////
        var svg = _this3.chart.selectAll(".country-bubble").transition().delay(function (d, i) {
          return i * _constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DELAY"];
        }).duration(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DURATION"]).ease(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_EASING"]).attr("cx", function (d) {
          return _this3.xScale(d[dataType] / 156) + 25;
        }); // .on("mouseover", showTooltip)
        // .on("mousemove", moveTooltip)
        // .on("mouseleave", hideTooltip)
        // .attr("r", d => {
        //   if (d.population > 800000000) {
        //     return d.population / 25000000;
        //   } else if (d.population > 50000000) {
        //     return d.population / 10000000;
        //   } else if (d.population > 1000000) {
        //     return d.population / 1500000;
        //   } else {
        //     return d.population / 100000;
        //   }
        // })
        // .attr("cy", d => {
        //   return this.yScale(d.graphRanking / 156);
        // });
        // ////////////////////////
        // // legend
        // ////////////////////////
        // let continents = {
        //   AFRICA: {
        //     continent: "Africa"
        //   },
        //   ASIA: { continent: "Asia" },
        //   NORTH_AMERICA: {
        //     continent: "North America"
        //   },
        //   SOUTH_AMERICA: {
        //     continent: "South America"
        //   },
        //   EUROPE: {
        //     continent: "Europe"
        //   }
        // };
        // let continentFocusOn = continentName => {
        //   this.chart
        //     .selectAll(
        //       `circle:not(.continent-${continentName.split(" ").join("-")})`
        //     )
        //     .attr("opacity", "0.05");
        // };
        // let continentFocusOff = continentName => {
        //   this.chart
        //     .selectAll(
        //       `circle:not(.continent-${continentName.split(" ").join("-")})`
        //     )
        //     .attr("opacity", "0.7");
        // };
        // let legend = this.chart
        //   .selectAll(".legend")
        //   .data(Object.values(continents))
        //   .enter()
        //   .append("g")
        //   .attr("class", "legend")
        //   .attr("transform", "translate(" + 870 + "," + 480 + ")");
        // legend
        //   .append("rect")
        //   .attr("x", 0)
        //   .attr("y", function(d, i) {
        //     return 20 * i;
        //   })
        //   .attr("width", 15)
        //   .attr("height", 15)
        //   .style("fill", function(d) {
        //     if (d.continent === "Africa") {
        //       return "#7cbd1e";
        //     } else if (d.continent === "Asia") {
        //       return "#ff1f5a";
        //     } else if (d.continent === "North America") {
        //       return "#303481";
        //     } else if (d.continent === "South America") {
        //       return "#ff5b44";
        //     } else if (d.continent === "Europe") {
        //       return "#2fc5cc";
        //     } else {
        //       return "red";
        //     }
        //   })
        //   .on("mouseover", d => continentFocusOn(d.continent))
        //   .on("mouseleave", d => continentFocusOff(d.continent));
        // legend
        //   .append("text")
        //   .attr("x", 25)
        //   .attr("text-anchor", "start")
        //   .attr("dy", "1em")
        //   .attr("class", d => `legend-${d.continent.split(" ").join("-")}`)
        //   .attr("y", function(d, i) {
        //     return 20 * i;
        //   })
        //   .text(function(d) {
        //     return d.continent;
        //   })
        //   .attr("font-size", "12px")
        //   .on("mouseover", d => continentFocusOn(d.continent))
        //   .on("mouseleave", d => continentFocusOff(d.continent));
        // legend
        //   .append("text")
        //   .attr("x", 31)
        //   .attr("dy", "-.2em")
        //   .attr("y", -10)
        //   .text("Continent")
        //   .attr("font-size", "17px")
        //   .style("text-align", "left");

      });
    }
  }]);

  return WorldGraph;
}(_chart__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (WorldGraph);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkX2dyYXBoLmpzIl0sIm5hbWVzIjpbIkNoYXJ0Iiwic2VsZWN0b3IiLCJvcHRpb25zIiwic2V0Q2hhcnQiLCJzZXRMYWJlbHMiLCJ0b3BPZmZzZXQiLCJsZWZ0T2Zmc2V0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwiSEVJR0hUIiwiTUFSR0lOUyIsIldJRFRIIiwiY2hhcnQiLCJhcHBlbmQiLCJkYXRhIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidGlja3MiLCJ0aWNrRm9ybWF0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsImRvbWFpbiIsInhBeGlzQ2FsbCIsImF4aXNCb3R0b20iLCJmb3JtYXQiLCJjYWxsIiwieVNjYWxlIiwicGFkZGluZyIsImF4aXNMZWZ0IiwieExhYmVsIiwidGV4dCIsInlMYWJlbCIsIlBMQU5PIiwiUExBTk9fQ0lUWSIsIlBMQU5PX0NMQVNTIiwiUExBTk9fQ09MT1IiLCJJUlZJTkUiLCJJUlZJTkVfQ0lUWSIsIklSVklORV9DTEFTUyIsIklSVklORV9DT0xPUiIsIk1BRElTT04iLCJNQURJU09OX0NJVFkiLCJNQURJU09OX0NMQVNTIiwiTUFESVNPTl9DT0xPUiIsIkZSRU1PTlQiLCJGUkVNT05UX0NJVFkiLCJGUkVNT05UX0NMQVNTIiwiRlJFTU9OVF9DT0xPUiIsIkhVTlRJTkdUT05fQkVBQ0giLCJIVU5USU5HVE9OX0JFQUNIX0NJVFkiLCJIVU5USU5HVE9OX0JFQUNIX0NMQVNTIiwiSFVOVElOR1RPTl9CRUFDSF9DT0xPUiIsIkZBUkdPIiwiRkFSR09fQ0lUWSIsIkZBUkdPX0NMQVNTIiwiRkFSR09fQ09MT1IiLCJHUkFORF9QUkFJUklFIiwiR1JBTkRfUFJBSVJJRV9DSVRZIiwiR1JBTkRfUFJBSVJJRV9DTEFTUyIsIkdSQU5EX1BSQUlSSUVfQ09MT1IiLCJTQU5fSk9TRSIsIlNBTl9KT1NFX0NJVFkiLCJTQU5fSk9TRV9DTEFTUyIsIlNBTl9KT1NFX0NPTE9SIiwiU0NPVFRTREFMRSIsIlNDT1RUU0RBTEVfQ0lUWSIsIlNDT1RUU0RBTEVfQ0xBU1MiLCJTQ09UVFNEQUxFX0NPTE9SIiwiU0FOX0ZSQU5DSVNDTyIsIlNBTl9GUkFOQ0lTQ09fQ0lUWSIsIlNBTl9GUkFOQ0lTQ09fQ0xBU1MiLCJTQU5fRlJBTkNJU0NPX0NPTE9SIiwiQklTTUFSQ0siLCJCSVNNQVJDS19DSVRZIiwiQklTTUFSQ0tfQ0xBU1MiLCJCSVNNQVJDS19DT0xPUiIsIk9WRVJMQU5EX1BBUksiLCJPVkVSTEFORF9QQVJLX0NJVFkiLCJPVkVSTEFORF9QQVJLX0NMQVNTIiwiT1ZFUkxBTkRfUEFSS19DT0xPUiIsIlNBTlRBX1JPU0EiLCJTQU5UQV9ST1NBX0NJVFkiLCJTQU5UQV9ST1NBX0NMQVNTIiwiU0FOVEFfUk9TQV9DT0xPUiIsIkFVU1RJTiIsIkFVU1RJTl9DSVRZIiwiQVVTVElOX0NMQVNTIiwiQVVTVElOX0NPTE9SIiwiU0lPVVhfRkFMTFMiLCJTSU9VWF9GQUxMU19DSVRZIiwiU0lPVVhfRkFMTFNfQ0xBU1MiLCJTSU9VWF9GQUxMU19DT0xPUiIsIlBFQVJMX0NJVFkiLCJQRUFSTF9DSVRZX0NJVFkiLCJQRUFSTF9DSVRZX0NMQVNTIiwiUEVBUkxfQ0lUWV9DT0xPUiIsIkdMRU5EQUxFIiwiR0xFTkRBTEVfQ0lUWSIsIkdMRU5EQUxFX0NMQVNTIiwiR0xFTkRBTEVfQ09MT1IiLCJTQU5fRElFR08iLCJTQU5fRElFR09fQ0lUWSIsIlNBTl9ESUVHT19DTEFTUyIsIlNBTl9ESUVHT19DT0xPUiIsIlNUX1BBVUwiLCJTVF9QQVVMX0NJVFkiLCJTVF9QQVVMX0NMQVNTIiwiU1RfUEFVTF9DT0xPUiIsIkNIQVJMRVNUT04iLCJDSEFSTEVTVE9OX0NJVFkiLCJDSEFSTEVTVE9OX0NMQVNTIiwiQ0hBUkxFU1RPTl9DT0xPUiIsIkdJTEJFUlQiLCJHSUxCRVJUX0NJVFkiLCJHSUxCRVJUX0NMQVNTIiwiR0lMQkVSVF9DT0xPUiIsIkFOQUhFSU0iLCJBTkFIRUlNX0NJVFkiLCJBTkFIRUlNX0NMQVNTIiwiQU5BSEVJTV9DT0xPUiIsIlJBTEVJR0giLCJSQUxFSUdIX0NJVFkiLCJSQUxFSUdIX0NMQVNTIiwiUkFMRUlHSF9DT0xPUiIsIkNBUEVfQ09SQUwiLCJDQVBFX0NPUkFMX0NJVFkiLCJDQVBFX0NPUkFMX0NMQVNTIiwiQ0FQRV9DT1JBTF9DT0xPUiIsIkNFREFSX1JBUElEUyIsIkNFREFSX1JBUElEU19DSVRZIiwiQ0VEQVJfUkFQSURTX0NMQVNTIiwiQ0VEQVJfUkFQSURTX0NPTE9SIiwiQ0lUSUVTIiwiY2l0eSIsImNvbnN0YW50IiwiY29sb3IiLCJlbW90aW9uYWxXZWxsYmVpbmciLCJpbmNvbWVFbXBsb3ltZW50IiwiY29tbXVuaXR5RW52aXJvbm1lbnQiLCJwb3NpdGlvbiIsIngiLCJ5IiwiaGFwcGluZXNzU2NvcmUiLCJyYW5raW5nIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwiQU5JTUFUSU9OX0RFTEFZIiwiQU5JTUFUSU9OX0VBU0lORyIsImVhc2VQb2x5IiwiRmlsdGVyIiwiZmlsdGVyRGF0YSIsInRvb2x0aXAiLCJzdHlsZSIsInNlbGVjdEFsbCIsIm9uIiwiZCIsImkiLCJjbGFzc05hbWUiLCJzcGxpdCIsImpvaW4iLCJhbGxPdGhlckNpdHlEYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsImh0bWwiLCJtYWluSGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImFsbENpdHlEYXRhIiwicmVtb3ZlIiwid29ybGRHcmFwaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJXb3JsZEdyYXBoIiwibG9hZENoYXJ0TGlzdGVuZXIiLCJidG5Hcm91cCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdG4iLCJ0YXJnZXQiLCJjdXJyZW50QnRuQ2xhc3MiLCJ1cGRhdGVEYXRhIiwib25yZXNpemUiLCJyZWRyYXciLCJ4QXhpcyIsInlBeGlzIiwiZ2V0RGF0YSIsIm1ldHJpYyIsInRoYXQiLCJqc29uIiwidGhlbiIsInNldERhdGEiLCJjaXJjbGVzIiwic2hvd1Rvb2x0aXAiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb3VudHJ5IiwiY29udGluZW50IiwiZXZlbnQiLCJjbGllbnRZIiwiY2xpZW50WCIsIm1vdmVUb29sdGlwIiwiaGlkZVRvb2x0aXAiLCJPYmplY3QiLCJ2YWx1ZXMiLCJlbnRlciIsImRlbGF5IiwiZWFzZSIsInBvcHVsYXRpb24iLCJncmFwaFJhbmtpbmciLCJjb250aW5lbnRzIiwiQUZSSUNBIiwiQVNJQSIsIk5PUlRIX0FNRVJJQ0EiLCJTT1VUSF9BTUVSSUNBIiwiRVVST1BFIiwiY29udGluZW50Rm9jdXNPbiIsImNvbnRpbmVudE5hbWUiLCJjb250aW5lbnRGb2N1c09mZiIsImxlZ2VuZCIsImRhdGFUeXBlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxt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RTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0MsT0EvS0Q7QUFnTEQ7Ozs7RUFwWXNCcE8sOEM7O0FBdVlWcUwseUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1xuICBIRUlHSFQsXG4gIE1BUkdJTlMsXG4gIFdJRFRILFxuICBBTklNQVRJT05fRFVSQVRJT04sXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lOR1xufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHRoaXMuc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMpO1xuICAgIC8vIHRoaXMuZ2V0RGF0YSgpO1xuICAgIHRoaXMuc2V0TGFiZWxzKCk7XG4gIH1cblxuICBzZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyA9IHsgdG9wT2Zmc2V0OiAwLCBsZWZ0T2Zmc2V0OiAwIH0pIHtcbiAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgLnNlbGVjdChzZWxlY3RvcilcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCArIE1BUkdJTlMgKiAyKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTlMgKiAyKTtcbiAgICB0aGlzLmNoYXJ0ID0gc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXG4gICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgIGB0cmFuc2xhdGUoJHtNQVJHSU5TICsgb3B0aW9ucy5sZWZ0T2Zmc2V0fSwgJHtNQVJHSU5TIC8gMiArXG4gICAgICAgICAgb3B0aW9ucy50b3BPZmZzZXR9KWBcbiAgICAgICk7XG4gIH1cblxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgcmVkcmF3KHNlbGVjdG9yKSB7XG4gICAgLy8gbGV0IGdyYXBoRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Zy5ncmFwaFwiKTtcbiAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zb2xlLmxvZyhgbmV3IHdpZHRoOiAke3dpZHRofWApXG4gICAgbGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zb2xlLmxvZyhgbmV3IGhlaWdodDogJHtoZWlnaHR9YClcbiAgICBkMy5zZWxlY3Qoc2VsZWN0b3IpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aCArIE1BUkdJTlMgKiAyKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCArIE1BUkdJTlMgKiAyKTtcbiAgfVxuXG4gIHhBeGlzKHRpY2tzID0gMjAsIHRpY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIHRoaXMueFNjYWxlID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAsIFdJRFRIXSlcbiAgICAgIC5kb21haW4oWzAsIDFdKTtcbiAgICBsZXQgeEF4aXNDYWxsID0gZDNcbiAgICAgIC5heGlzQm90dG9tKHRoaXMueFNjYWxlKVxuICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgLnRpY2tGb3JtYXQoZDMuZm9ybWF0KFwiLjAlXCIpKTtcbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke0hFSUdIVH0pYClcbiAgICAgIC5jYWxsKHhBeGlzQ2FsbCk7XG4gIH1cblxuICB5QXhpcyhkb21haW4sIHlTY2FsZSwgdGlja3MgPSA1LCB0aWNrRm9ybWF0ID0gKCkgPT4ge30pIHtcbiAgICBpZiAoeVNjYWxlID09PSBcInNjYWxlQmFuZFwiKSB7XG4gICAgICB0aGlzLnlTY2FsZSA9IGQzW3lTY2FsZV0oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKFswLCBIRUlHSFRdKVxuICAgICAgICAucGFkZGluZygwLjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnlTY2FsZSA9IGQzW3lTY2FsZV0oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKFswLCBIRUlHSFRdKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0LmFwcGVuZChcImdcIikuY2FsbChcbiAgICAgIGQzXG4gICAgICAgIC5heGlzTGVmdCh0aGlzLnlTY2FsZSlcbiAgICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgICAudGlja0Zvcm1hdCh0aWNrRm9ybWF0KCkpXG4gICAgKTtcbiAgfVxuXG4gIHNldExhYmVscygpIHtcbiAgICAvLyBMYWJlbHNcbiAgICB2YXIgeExhYmVsID0gdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInlcIiwgSEVJR0hUICsgNTApXG4gICAgICAuYXR0cihcInhcIiwgV0lEVEggLyAyKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMHB4XCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkdEUCBQZXIgQ2FwaXRhICgkKVwiKTtcbiAgICB2YXIgeUxhYmVsID0gdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAuYXR0cihcInlcIiwgLTY1KVxuICAgICAgLmF0dHIoXCJ4XCIsIC0zMDApXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIwcHhcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC50ZXh0KFwiSGFwcGluZXNzIEluZGV4ICglKVwiKTtcbiAgfVxuXG4gIC8vIGdyaWRMaW5lcyhzY2FsZSwgcG9zaXRpb24sIHRpY2tzID0gNSkge1xuICAvLyAgIHRoaXMuY2hhcnRcbiAgLy8gICAgIC5hcHBlbmQoXCJnXCIpXG4gIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JpZFwiKVxuICAvLyAgICAgLmNhbGwoZDNbcG9zaXRpb25dKSgpXG4gIC8vICAgICAuc2NhbGUoc2NhbGUpXG4gIC8vICAgICAudGlja1NpemUoV0lEVEgsIDAsIDApXG4gIC8vICAgICAudGlja0Zvcm1hdChcIlwiKVxuICAvLyAgICAgLnRpY2tzKHRpY2tzKTtcbiAgLy8gfVxuXG4gIC8vIHJlY3RhbmdsZUxhYmVscyh0ZXh0KSB7XG4gIC8vICAgdGhpcy5jaGFydFxuICAvLyAgICAgLnNlbGVjdEFsbCgpXG4gIC8vICAgICAuZGF0YSh0aGlzLnNvcnRlZERhdGEpXG4gIC8vICAgICAuZW50ZXIoKVxuICAvLyAgICAgLmFwcGVuZChcInRleHRcIilcbiAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBgY2l0eSAke2QuY2xhc3N9IGJhci1sYWJlbCBjaXR5LWRhdGEtdG9nZ2xlYClcbiAgLy8gICAgIC5hdHRyKFwieFwiLCA1KVxuICAvLyAgICAgLmF0dHIoXCJ5XCIsIGQgPT4gdGhpcy55U2NhbGUoZC5jaXR5KSAtIDIpXG4gIC8vICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiI2ZmZlwiKVxuICAvLyAgICAgLnRleHQoKGQsIGkpID0+IHtcbiAgLy8gICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gIC8vICAgICAgICAgcmV0dXJuIGRbdGV4dF07XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgcmV0dXJuIHRleHQuY2FsbChkLCBpKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSlcbiAgLy8gICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gIC8vIH1cblxuICAvLyBsYWJlbFRvcCh0ZXh0KSB7XG4gIC8vICAgdGhpcy5jaGFydFxuICAvLyAgICAgLmFwcGVuZChcInRleHRcIilcbiAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbC10ZXh0XCIpXG4gIC8vICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gIC8vICAgICAuYXR0cihcInhcIiwgV0lEVEggLyAyKVxuICAvLyAgICAgLmF0dHIoXCJ5XCIsIC0yMClcbiAgLy8gICAgIC50ZXh0KHRleHQpO1xuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIiwiZXhwb3J0IGNvbnN0IFBMQU5PID0gXCJQTEFOT1wiO1xuY29uc3QgUExBTk9fQ0lUWSA9IFwiUGxhbm9cIjtcbmNvbnN0IFBMQU5PX0NMQVNTID0gXCJjaXR5LVBsYW5vXCI7XG5jb25zdCBQTEFOT19DT0xPUiA9IFwiIzUxZWFlYVwiO1xuXG5leHBvcnQgY29uc3QgSVJWSU5FID0gXCJJUlZJTkVcIjtcbmNvbnN0IElSVklORV9DSVRZID0gXCJJUlZJTkVcIjtcbmNvbnN0IElSVklORV9DTEFTUyA9IFwiY2l0eS1JcnZpbmVcIjtcbmNvbnN0IElSVklORV9DT0xPUiA9IFwiI2ZmOWQ3NlwiO1xuXG5leHBvcnQgY29uc3QgTUFESVNPTiA9IFwiTUFESVNPTlwiO1xuY29uc3QgTUFESVNPTl9DSVRZID0gXCJNQURJU09OXCI7XG5jb25zdCBNQURJU09OX0NMQVNTID0gXCJjaXR5LU1hZGlzb25cIjtcbmNvbnN0IE1BRElTT05fQ09MT1IgPSBcIiNmYjM1NjlcIjtcblxuZXhwb3J0IGNvbnN0IEZSRU1PTlQgPSBcIkZSRU1PTlRcIjtcbmNvbnN0IEZSRU1PTlRfQ0lUWSA9IFwiRlJFTU9OVFwiO1xuY29uc3QgRlJFTU9OVF9DTEFTUyA9IFwiY2l0eS1GcmVtb250XCI7XG5jb25zdCBGUkVNT05UX0NPTE9SID0gXCIjZmE4NmJlXCI7XG5cbmV4cG9ydCBjb25zdCBIVU5USU5HVE9OX0JFQUNIID0gXCJIVU5USU5HVE9OX0JFQUNIXCI7XG5jb25zdCBIVU5USU5HVE9OX0JFQUNIX0NJVFkgPSBcIkhVTlRJTkdUT05fQkVBQ0hcIjtcbmNvbnN0IEhVTlRJTkdUT05fQkVBQ0hfQ0xBU1MgPSBcImNpdHktSHVudGluZ3Rvbi1CZWFjaFwiO1xuY29uc3QgSFVOVElOR1RPTl9CRUFDSF9DT0xPUiA9IFwiI2EyNzVlM1wiO1xuXG5leHBvcnQgY29uc3QgRkFSR08gPSBcIkZBUkdPXCI7XG5jb25zdCBGQVJHT19DSVRZID0gXCJGQVJHT1wiO1xuY29uc3QgRkFSR09fQ0xBU1MgPSBcImNpdHktRmFyZ29cIjtcbmNvbnN0IEZBUkdPX0NPTE9SID0gXCIjZmYxZjVhXCI7XG5cbmV4cG9ydCBjb25zdCBHUkFORF9QUkFJUklFID0gXCJHUkFORF9QUkFJUklFXCI7XG5jb25zdCBHUkFORF9QUkFJUklFX0NJVFkgPSBcIkdSQU5EX1BSQUlSSUVcIjtcbmNvbnN0IEdSQU5EX1BSQUlSSUVfQ0xBU1MgPSBcImNpdHktR3JhbmQtUHJhaXJpZVwiO1xuY29uc3QgR1JBTkRfUFJBSVJJRV9DT0xPUiA9IFwiIzY5MDBmZlwiO1xuXG5leHBvcnQgY29uc3QgU0FOX0pPU0UgPSBcIlNBTl9KT1NFXCI7XG5jb25zdCBTQU5fSk9TRV9DSVRZID0gXCJTQU5fSk9TRVwiO1xuY29uc3QgU0FOX0pPU0VfQ0xBU1MgPSBcImNpdHktU2FuLUpvc2VcIjtcbmNvbnN0IFNBTl9KT1NFX0NPTE9SID0gXCIjZmZkNzAwXCI7XG5cbmV4cG9ydCBjb25zdCBTQ09UVFNEQUxFID0gXCJTQ09UVFNEQUxFXCI7XG5jb25zdCBTQ09UVFNEQUxFX0NJVFkgPSBcIlNDT1RUU0RBTEVcIjtcbmNvbnN0IFNDT1RUU0RBTEVfQ0xBU1MgPSBcImNpdHktU2NvdHRzZGFsZVwiO1xuY29uc3QgU0NPVFRTREFMRV9DT0xPUiA9IFwiI2ZmNjEzOFwiO1xuXG5leHBvcnQgY29uc3QgU0FOX0ZSQU5DSVNDTyA9IFwiU0FOX0ZSQU5DSVNDT1wiO1xuY29uc3QgU0FOX0ZSQU5DSVNDT19DSVRZID0gXCJTQU5fRlJBTkNJU0NPXCI7XG5jb25zdCBTQU5fRlJBTkNJU0NPX0NMQVNTID0gXCJjaXR5LVNhbi1GcmFuY2lzY29cIjtcbmNvbnN0IFNBTl9GUkFOQ0lTQ09fQ09MT1IgPSBcIiMzMDM0ODFcIjtcblxuZXhwb3J0IGNvbnN0IEJJU01BUkNLID0gXCJCSVNNQVJDS1wiO1xuY29uc3QgQklTTUFSQ0tfQ0lUWSA9IFwiQklTTUFSQ0tcIjtcbmNvbnN0IEJJU01BUkNLX0NMQVNTID0gXCJjaXR5LUJpc21hcmNrXCI7XG5jb25zdCBCSVNNQVJDS19DT0xPUiA9IFwiIzdjYmQxZVwiO1xuXG5leHBvcnQgY29uc3QgT1ZFUkxBTkRfUEFSSyA9IFwiT1ZFUkxBTkRfUEFSS1wiO1xuY29uc3QgT1ZFUkxBTkRfUEFSS19DSVRZID0gXCJPVkVSTEFORF9QQVJLXCI7XG5jb25zdCBPVkVSTEFORF9QQVJLX0NMQVNTID0gXCJjaXR5LU92ZXJsYW5kLVBhcmtcIjtcbmNvbnN0IE9WRVJMQU5EX1BBUktfQ09MT1IgPSBcIiMwMDkzNzhcIjtcblxuZXhwb3J0IGNvbnN0IFNBTlRBX1JPU0EgPSBcIlNBTlRBX1JPU0FcIjtcbmNvbnN0IFNBTlRBX1JPU0FfQ0lUWSA9IFwiU0FOVEFfUk9TQVwiO1xuY29uc3QgU0FOVEFfUk9TQV9DTEFTUyA9IFwiY2l0eS1TYW50YS1Sb3NhXCI7XG5jb25zdCBTQU5UQV9ST1NBX0NPTE9SID0gXCIjZjYwYzg2XCI7XG5cbmV4cG9ydCBjb25zdCBBVVNUSU4gPSBcIkFVU1RJTlwiO1xuY29uc3QgQVVTVElOX0NJVFkgPSBcIkFVU1RJTlwiO1xuY29uc3QgQVVTVElOX0NMQVNTID0gXCJjaXR5LUF1c3RpblwiO1xuY29uc3QgQVVTVElOX0NPTE9SID0gXCIjZjlkMDBmXCI7XG5cbmV4cG9ydCBjb25zdCBTSU9VWF9GQUxMUyA9IFwiU0lPVVhfRkFMTFNcIjtcbmNvbnN0IFNJT1VYX0ZBTExTX0NJVFkgPSBcIlNJT1VYX0ZBTExTXCI7XG5jb25zdCBTSU9VWF9GQUxMU19DTEFTUyA9IFwiY2l0eS1TaW91eC1GYWxsc1wiO1xuY29uc3QgU0lPVVhfRkFMTFNfQ09MT1IgPSBcIiMzMDM4NDFcIjtcblxuZXhwb3J0IGNvbnN0IFBFQVJMX0NJVFkgPSBcIlBFQVJMX0NJVFlcIjtcbmNvbnN0IFBFQVJMX0NJVFlfQ0lUWSA9IFwiUEVBUkxfQ0lUWVwiO1xuY29uc3QgUEVBUkxfQ0lUWV9DTEFTUyA9IFwiY2l0eS1QZWFybC1DaXR5XCI7XG5jb25zdCBQRUFSTF9DSVRZX0NPTE9SID0gXCIjOTZjZDM5XCI7XG5cbmV4cG9ydCBjb25zdCBHTEVOREFMRSA9IFwiR0xFTkRBTEVcIjtcbmNvbnN0IEdMRU5EQUxFX0NJVFkgPSBcIkdMRU5EQUxFXCI7XG5jb25zdCBHTEVOREFMRV9DTEFTUyA9IFwiY2l0eS1HbGVuZGFsZVwiO1xuY29uc3QgR0xFTkRBTEVfQ09MT1IgPSBcIiMyZmM1Y2NcIjtcblxuZXhwb3J0IGNvbnN0IFNBTl9ESUVHTyA9IFwiU0FOX0RJRUdPXCI7XG5jb25zdCBTQU5fRElFR09fQ0lUWSA9IFwiU0FOX0RJRUdPXCI7XG5jb25zdCBTQU5fRElFR09fQ0xBU1MgPSBcImNpdHktU2FuLURpZWdvXCI7XG5jb25zdCBTQU5fRElFR09fQ09MT1IgPSBcIiNmZjViNDRcIjtcblxuZXhwb3J0IGNvbnN0IFNUX1BBVUwgPSBcIlNUX1BBVUxcIjtcbmNvbnN0IFNUX1BBVUxfQ0lUWSA9IFwiU1RfUEFVTFwiO1xuY29uc3QgU1RfUEFVTF9DTEFTUyA9IFwiY2l0eS1TdC1QYXVsXCI7XG5jb25zdCBTVF9QQVVMX0NPTE9SID0gXCIjYmY2OGY2XCI7XG5cbmV4cG9ydCBjb25zdCBDSEFSTEVTVE9OID0gXCJDSEFSTEVTVE9OXCI7XG5jb25zdCBDSEFSTEVTVE9OX0NJVFkgPSBcIkNIQVJMRVNUT05cIjtcbmNvbnN0IENIQVJMRVNUT05fQ0xBU1MgPSBcImNpdHktQ2hhcmxlc3RvblwiO1xuY29uc3QgQ0hBUkxFU1RPTl9DT0xPUiA9IFwiI2Y5MjcyN1wiO1xuXG5leHBvcnQgY29uc3QgR0lMQkVSVCA9IFwiR0lMQkVSVFwiO1xuY29uc3QgR0lMQkVSVF9DSVRZID0gXCJHSUxCRVJUXCI7XG5jb25zdCBHSUxCRVJUX0NMQVNTID0gXCJjaXR5LUdpbGJlcnRcIjtcbmNvbnN0IEdJTEJFUlRfQ09MT1IgPSBcIiNmZjA1OTJcIjtcblxuZXhwb3J0IGNvbnN0IEFOQUhFSU0gPSBcIkFOQUhFSU1cIjtcbmNvbnN0IEFOQUhFSU1fQ0lUWSA9IFwiQU5BSEVJTVwiO1xuY29uc3QgQU5BSEVJTV9DTEFTUyA9IFwiY2l0eS1BbmFoZWltXCI7XG5jb25zdCBBTkFIRUlNX0NPTE9SID0gXCIjYTU4YmZmXCI7XG5cbmV4cG9ydCBjb25zdCBSQUxFSUdIID0gXCJSQUxFSUdIXCI7XG5jb25zdCBSQUxFSUdIX0NJVFkgPSBcIlJBTEVJR0hcIjtcbmNvbnN0IFJBTEVJR0hfQ0xBU1MgPSBcImNpdHktUmFsZWlnaFwiO1xuY29uc3QgUkFMRUlHSF9DT0xPUiA9IFwiIzAwOTM3OFwiO1xuXG5leHBvcnQgY29uc3QgQ0FQRV9DT1JBTCA9IFwiQ0FQRV9DT1JBTFwiO1xuY29uc3QgQ0FQRV9DT1JBTF9DSVRZID0gXCJDQVBFX0NPUkFMXCI7XG5jb25zdCBDQVBFX0NPUkFMX0NMQVNTID0gXCJjaXR5LUNhcGUtQ29yYWxcIjtcbmNvbnN0IENBUEVfQ09SQUxfQ09MT1IgPSBcIiNmYzM0NWNcIjtcblxuZXhwb3J0IGNvbnN0IENFREFSX1JBUElEUyA9IFwiQ0VEQVJfUkFQSURTXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ0lUWSA9IFwiQ0VEQVJfUkFQSURTXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ0xBU1MgPSBcImNpdHktQ2VkYXItUmFwaWRzXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ09MT1IgPSBcIiMzZDZjYjlcIjtcblxuZXhwb3J0IGNvbnN0IENJVElFUyA9IHtcbiAgUExBTk86IHtcbiAgICBjaXR5OiBcIlBsYW5vXCIsXG4gICAgY29uc3RhbnQ6IFBMQU5PLFxuICAgIGNsYXNzOiBQTEFOT19DTEFTUyxcbiAgICBjb2xvcjogUExBTk9fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA0LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDMsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQsXG4gICAgcG9zaXRpb246IHsgeDogNTI2LCB5OiAzOTAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNzIuMyxcbiAgICByYW5raW5nOiAxXG4gIH0sXG4gIElSVklORToge1xuICAgIGNpdHk6IFwiSXJ2aW5lXCIsXG4gICAgY29uc3RhbnQ6IElSVklORSxcbiAgICBjbGFzczogSVJWSU5FX0NMQVNTLFxuICAgIGNvbG9yOiBJUlZJTkVfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA4LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDYsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDMsXG4gICAgcG9zaXRpb246IHsgeDogMTgwLCB5OiAzMDAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNzEuODYsXG4gICAgcmFua2luZzogMlxuICB9LFxuICBNQURJU09OOiB7XG4gICAgY2l0eTogXCJNYWRpc29uXCIsXG4gICAgY29uc3RhbnQ6IE1BRElTT04sXG4gICAgY2xhc3M6IE1BRElTT05fQ0xBU1MsXG4gICAgY29sb3I6IE1BRElTT05fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDgsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQsXG4gICAgcG9zaXRpb246IHsgeDogNjQwLCB5OiAxNjAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNzEuODEsXG4gICAgcmFua2luZzogM1xuICB9LFxuICBGUkVNT05UOiB7XG4gICAgY2l0eTogXCJGcmVtb250XCIsXG4gICAgY29uc3RhbnQ6IEZSRU1PTlQsXG4gICAgY2xhc3M6IEZSRU1PTlRfQ0xBU1MsXG4gICAgY29sb3I6IEZSRU1PTlRfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA1LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDIwLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxLFxuICAgIHBvc2l0aW9uOiB7IHg6IDE1MSwgeTogMjI1IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDcxLjE3LFxuICAgIHJhbmtpbmc6IDRcbiAgfSxcbiAgSFVOVElOR1RPTl9CRUFDSDoge1xuICAgIGNpdHk6IFwiSHVudGluZ3RvbiBCZWFjaFwiLFxuICAgIGNvbnN0YW50OiBIVU5USU5HVE9OX0JFQUNILFxuICAgIGNsYXNzOiBIVU5USU5HVE9OX0JFQUNIX0NMQVNTLFxuICAgIGNvbG9yOiBIVU5USU5HVE9OX0JFQUNIX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMyxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyNSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTUsXG4gICAgcG9zaXRpb246IHsgeDogMTU5LCB5OiAyOTAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjkuNzQsXG4gICAgcmFua2luZzogNVxuICB9LFxuICBGQVJHTzoge1xuICAgIGNpdHk6IFwiRmFyZ29cIixcbiAgICBjb25zdGFudDogRkFSR08sXG4gICAgY2xhc3M6IEZBUkdPX0NMQVNTLFxuICAgIGNvbG9yOiBGQVJHT19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDksXG4gICAgaW5jb21lRW1wbG95bWVudDogMTEsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDEzLFxuICAgIHBvc2l0aW9uOiB7IHg6IDQ5OCwgeTogOTQgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjkuNTcsXG4gICAgcmFua2luZzogNlxuICB9LFxuICBHUkFORF9QUkFJUklFOiB7XG4gICAgY2l0eTogXCJHcmFuZCBQcmFpcmllXCIsXG4gICAgY29uc3RhbnQ6IEdSQU5EX1BSQUlSSUUsXG4gICAgY2xhc3M6IEdSQU5EX1BSQUlSSUVfQ0xBU1MsXG4gICAgY29sb3I6IEdSQU5EX1BSQUlSSUVfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAxOSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMyxcbiAgICBwb3NpdGlvbjogeyB4OiA1MjUsIHk6IDQxMCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OS4zLFxuICAgIHJhbmtpbmc6IDdcbiAgfSxcbiAgU0FOX0pPU0U6IHtcbiAgICBjaXR5OiBcIlNhbiBKb3NlXCIsXG4gICAgY29uc3RhbnQ6IFNBTl9KT1NFLFxuICAgIGNsYXNzOiBTQU5fSk9TRV9DTEFTUyxcbiAgICBjb2xvcjogU0FOX0pPU0VfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDEwLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyNCxcbiAgICBwb3NpdGlvbjogeyB4OiAxNDAsIHk6IDI0MCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OC45LFxuICAgIHJhbmtpbmc6IDhcbiAgfSxcbiAgU0NPVFRTREFMRToge1xuICAgIGNpdHk6IFwiU2NvdHRzZGFsZVwiLFxuICAgIGNvbnN0YW50OiBTQ09UVFNEQUxFLFxuICAgIGNsYXNzOiBTQ09UVFNEQUxFX0NMQVNTLFxuICAgIGNvbG9yOiBTQ09UVFNEQUxFX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMjUsXG4gICAgaW5jb21lRW1wbG95bWVudDogNyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMSxcbiAgICBwb3NpdGlvbjogeyB4OiAyNzAsIHk6IDM0MSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OC4yNCxcbiAgICByYW5raW5nOiA5XG4gIH0sXG4gIFNBTl9GUkFOQ0lTQ086IHtcbiAgICBjaXR5OiBcIlNhbiBGcmFuY2lzY29cIixcbiAgICBjb25zdGFudDogU0FOX0ZSQU5DSVNDTyxcbiAgICBjbGFzczogU0FOX0ZSQU5DSVNDT19DTEFTUyxcbiAgICBjb2xvcjogU0FOX0ZSQU5DSVNDT19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDIsXG4gICAgaW5jb21lRW1wbG95bWVudDogMSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNjksXG4gICAgcG9zaXRpb246IHsgeDogMTM2LCB5OiAyMTIgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuNTMsXG4gICAgcmFua2luZzogMTBcbiAgfSxcbiAgQklTTUFSQ0s6IHtcbiAgICBjaXR5OiBcIkJpc21hcmNrXCIsXG4gICAgY29uc3RhbnQ6IEJJU01BUkNLLFxuICAgIGNsYXNzOiBCSVNNQVJDS19DTEFTUyxcbiAgICBjb2xvcjogQklTTUFSQ0tfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxNCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyNSxcbiAgICBwb3NpdGlvbjogeyB4OiA0NzgsIHk6IDEwNiB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4zOCxcbiAgICByYW5raW5nOiAxMVxuICB9LFxuICBPVkVSTEFORF9QQVJLOiB7XG4gICAgY2l0eTogXCJPdmVybGFuZCBQYXJrXCIsXG4gICAgY29uc3RhbnQ6IE9WRVJMQU5EX1BBUkssXG4gICAgY2xhc3M6IE9WRVJMQU5EX1BBUktfQ0xBU1MsXG4gICAgY29sb3I6IE9WRVJMQU5EX1BBUktfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzMSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTQsXG4gICAgcG9zaXRpb246IHsgeDogNTcwLCB5OiAyNzggfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuMzcsXG4gICAgcmFua2luZzogMTJcbiAgfSxcbiAgU0FOVEFfUk9TQToge1xuICAgIGNpdHk6IFwiU2FudGEgUm9zYVwiLFxuICAgIGNvbnN0YW50OiBTQU5UQV9ST1NBLFxuICAgIGNsYXNzOiBTQU5UQV9ST1NBX0NMQVNTLFxuICAgIGNvbG9yOiBTQU5UQV9ST1NBX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTMsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjksXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUsXG4gICAgcG9zaXRpb246IHsgeDogMTMyLCB5OiAxOTYgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuMTgsXG4gICAgcmFua2luZzogMTNcbiAgfSxcbiAgQVVTVElOOiB7XG4gICAgY2l0eTogXCJBdXN0aW5cIixcbiAgICBjb25zdGFudDogQVVTVElOLFxuICAgIGNsYXNzOiBBVVNUSU5fQ0xBU1MsXG4gICAgY29sb3I6IEFVU1RJTl9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDgsXG4gICAgaW5jb21lRW1wbG95bWVudDogNCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNDQsXG4gICAgcG9zaXRpb246IHsgeDogNDk3LCB5OiA0MzAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuMTYsXG4gICAgcmFua2luZzogMTRcbiAgfSxcbiAgU0lPVVhfRkFMTFM6IHtcbiAgICBjaXR5OiBcIlNpb3V4IEZhbGxzXCIsXG4gICAgY29uc3RhbnQ6IFNJT1VYX0ZBTExTLFxuICAgIGNsYXNzOiBTSU9VWF9GQUxMU19DTEFTUyxcbiAgICBjb2xvcjogU0lPVVhfRkFMTFNfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA2LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDM3LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA1MixcbiAgICBwb3NpdGlvbjogeyB4OiA1MDAsIHk6IDE2OCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ni45NyxcbiAgICByYW5raW5nOiAxNVxuICB9LFxuICBQRUFSTF9DSVRZOiB7XG4gICAgY2l0eTogXCJQZWFybCBDaXR5XCIsXG4gICAgY29uc3RhbnQ6IFBFQVJMX0NJVFksXG4gICAgY2xhc3M6IFBFQVJMX0NJVFlfQ0xBU1MsXG4gICAgY29sb3I6IFBFQVJMX0NJVFlfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDgxLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA4LFxuICAgIHBvc2l0aW9uOiB7IHg6IDM1MCwgeTogNDkxIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY2Ljc3LFxuICAgIHJhbmtpbmc6IDE2XG4gIH0sXG4gIEdMRU5EQUxFOiB7XG4gICAgY2l0eTogXCJHbGVuZGFsZVwiLFxuICAgIGNvbnN0YW50OiBHTEVOREFMRSxcbiAgICBjbGFzczogR0xFTkRBTEVfQ0xBU1MsXG4gICAgY29sb3I6IEdMRU5EQUxFX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTUsXG4gICAgaW5jb21lRW1wbG95bWVudDogNTYsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDcsXG4gICAgcG9zaXRpb246IHsgeDogMTY3LCB5OiAyNzIgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjYuMjUsXG4gICAgcmFua2luZzogMTdcbiAgfSxcbiAgU0FOX0RJRUdPOiB7XG4gICAgY2l0eTogXCJTYW4gRGllZ29cIixcbiAgICBjb25zdGFudDogU0FOX0RJRUdPLFxuICAgIGNsYXNzOiBTQU5fRElFR09fQ0xBU1MsXG4gICAgY29sb3I6IFNBTl9ESUVHT19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDQsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjAsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDI1LFxuICAgIHBvc2l0aW9uOiB7IHg6IDE4NywgeTogMzIxIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY2LjAxLFxuICAgIHJhbmtpbmc6IDE4XG4gIH0sXG4gIFNUX1BBVUw6IHtcbiAgICBjaXR5OiBcIlN0LiBQYXVsXCIsXG4gICAgY29uc3RhbnQ6IFNUX1BBVUwsXG4gICAgY2xhc3M6IFNUX1BBVUxfQ0xBU1MsXG4gICAgY29sb3I6IFNUX1BBVUxfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzOCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMzYsXG4gICAgcG9zaXRpb246IHsgeDogNTkwLCB5OiAxMzMgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjUuNzksXG4gICAgcmFua2luZzogMTlcbiAgfSxcbiAgQ0hBUkxFU1RPTjoge1xuICAgIGNpdHk6IFwiQ2hhcmxlc3RvblwiLFxuICAgIGNvbnN0YW50OiBDSEFSTEVTVE9OLFxuICAgIGNsYXNzOiBDSEFSTEVTVE9OX0NMQVNTLFxuICAgIGNvbG9yOiBDSEFSTEVTVE9OX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNDEsXG4gICAgaW5jb21lRW1wbG95bWVudDogMyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMixcbiAgICBwb3NpdGlvbjogeyB4OiA4MDUsIHk6IDQwMCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NS40OCxcbiAgICByYW5raW5nOiAyMFxuICB9LFxuICBHSUxCRVJUOiB7XG4gICAgY2l0eTogXCJHaWxiZXJ0XCIsXG4gICAgY29uc3RhbnQ6IEdJTEJFUlQsXG4gICAgY2xhc3M6IEdJTEJFUlRfQ0xBU1MsXG4gICAgY29sb3I6IEdJTEJFUlRfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAzMCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyNixcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNSxcbiAgICBwb3NpdGlvbjogeyB4OiAyNzcsIHk6IDM2MyB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NS4wNyxcbiAgICByYW5raW5nOiAyMVxuICB9LFxuICBBTkFIRUlNOiB7XG4gICAgY2l0eTogXCJBbmFoZWltXCIsXG4gICAgY29uc3RhbnQ6IEFOQUhFSU0sXG4gICAgY2xhc3M6IEFOQUhFSU1fQ0xBU1MsXG4gICAgY29sb3I6IEFOQUhFSU1fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxNixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA0MyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTksXG4gICAgcG9zaXRpb246IHsgeDogMTk2LCB5OiAyODIgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjUuMDIsXG4gICAgcmFua2luZzogMjJcbiAgfSxcbiAgUkFMRUlHSDoge1xuICAgIGNpdHk6IFwiUmFsZWlnaFwiLFxuICAgIGNvbnN0YW50OiBSQUxFSUdILFxuICAgIGNsYXNzOiBSQUxFSUdIX0NMQVNTLFxuICAgIGNvbG9yOiBSQUxFSUdIX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNyxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyMyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNDgsXG4gICAgcG9zaXRpb246IHsgeDogODMwLCB5OiAzMTMgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjQuOTksXG4gICAgcmFua2luZzogMjNcbiAgfSxcbiAgQ0FQRV9DT1JBTDoge1xuICAgIGNpdHk6IFwiQ2FwZSBDb3JhbFwiLFxuICAgIGNvbnN0YW50OiBDQVBFX0NPUkFMLFxuICAgIGNsYXNzOiBDQVBFX0NPUkFMX0NMQVNTLFxuICAgIGNvbG9yOiBDQVBFX0NPUkFMX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMjgsXG4gICAgaW5jb21lRW1wbG95bWVudDogNDgsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDIsXG4gICAgcG9zaXRpb246IHsgeDogODAwLCB5OiA0ODAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjQuOTYsXG4gICAgcmFua2luZzogMjRcbiAgfSxcbiAgQ0VEQVJfUkFQSURTOiB7XG4gICAgY2l0eTogXCJDZWRhciBSYXBpZHNcIixcbiAgICBjb25zdGFudDogQ0VEQVJfUkFQSURTLFxuICAgIGNsYXNzOiBDRURBUl9SQVBJRFNfQ0xBU1MsXG4gICAgY29sb3I6IENFREFSX1JBUElEU19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDIzLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDMyLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxMSxcbiAgICBwb3NpdGlvbjogeyB4OiA2MDAsIHk6IDIwNSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NC45LFxuICAgIHJhbmtpbmc6IDI1XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9ERUxBWSA9IDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0VBU0lORyA9IGQzLmVhc2VQb2x5O1xuXG5leHBvcnQgY29uc3QgV0lEVEggPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IDYwMDtcbmV4cG9ydCBjb25zdCBNQVJHSU5TID0gMTAwO1xuIiwiY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJEYXRhKCk7XG4gIH1cblxuICBmaWx0ZXJEYXRhKCkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBkM1xuICAgICAgLnNlbGVjdChgLmhlYWRlcl9fdG9vbHRpcGApXG4gICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCJzb2xpZFwiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyLXdpZHRoXCIsIFwiMnB4XCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4gICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMXJlbVwiKTtcblxuICAgIGQzLnNlbGVjdEFsbCgnLmNpdHknKVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCAoZCwgaSkgPT4ge1xuICAgICAgICBsZXQgY2xhc3NOYW1lO1xuICAgICAgICBpZiAodHlwZW9mIGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gYGNpdHktJHtkLnNwbGl0KCcgJykuam9pbignLScpfWA7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5kYXRhKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gZC5kYXRhLmNsYXNzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IGQuY2xhc3M7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsT3RoZXJDaXR5RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jaXR5Om5vdCguJHtjbGFzc05hbWV9KWApO1xuICAgICAgICBhbGxPdGhlckNpdHlEYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgZGF0YS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXInKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyB0b29sdGlwICBcbiAgICAgICAgdG9vbHRpcFxuICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgICAgICAgIC5odG1sKFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2NpdHlcIj48c3Ryb25nPkNpdHk6IDwvc3Ryb25nPjxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmNpdHlcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+T3ZlcmFsbCBSYW5rOjwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5yYW5raW5nXG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPlRvdGFsIEhhcHBpbmVzcyBTY29yZTo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuaGFwcGluZXNzU2NvcmVcbiAgICAgICAgICAgICAgICB9LzEwMDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPkVtb3Rpb25hbCAmIFBoeXNpY2FsIFdlbGwtQmVpbmc6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmVtb3Rpb25hbFdlbGxiZWluZ1xuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5JbmNvbWUgJiBFbXBsb3ltZW50Ojwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5pbmNvbWVFbXBsb3ltZW50XG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPkNvbW11bml0eSAmIEVudmlyb25tZW50Ojwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5jb21tdW5pdHlFbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApO1xuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX2hlYWRlcicpO1xuICAgICAgICBtYWluSGVhZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgY29sb3I6ICR7ZC5jb2xvcn1gICk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxDaXR5RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXR5Jyk7XG4gICAgICAgIGFsbENpdHlEYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgZGF0YS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXInKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19oZWFkZXJcIik7XG4gICAgICAgIG1haW5IZWFkZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGNvbG9yOiBpbml0aWFsYCk7XG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCBXb3JsZEdyYXBoIGZyb20gXCIuL3dvcmxkX2dyYXBoXCI7XG5cblxubGV0IHdvcmxkR3JhcGg7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICB3b3JsZEdyYXBoID0gbmV3IFdvcmxkR3JhcGgoXCJzdmcuZ3JhcGhcIik7XG4gIC8vIG5ldyBGaWx0ZXI7XG4gIGxvYWRDaGFydExpc3RlbmVyKHdvcmxkR3JhcGgpO1xufSk7XG5cbmZ1bmN0aW9uIGxvYWRDaGFydExpc3RlbmVyKCkge1xuICBsZXQgYnRuR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1ncm91cFwiKTtcbiAgYnRuR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBjdXJyZW50QnRuID0gZS50YXJnZXQ7XG4gICAgbGV0IGN1cnJlbnRCdG5DbGFzcyA9IGN1cnJlbnRCdG4uY2xhc3NMaXN0WzBdLnNwbGl0KCctJylbMV07XG4gICAgY29uc29sZS5sb2coY3VycmVudEJ0bkNsYXNzKTtcbiAgICB3b3JsZEdyYXBoLnVwZGF0ZURhdGEoY3VycmVudEJ0bkNsYXNzKTtcblxuICB9KTtcbn07XG5cbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgd29ybGRHcmFwaC5yZWRyYXcoXCJzdmcuZ3JhcGhcIik7XG4gIGNvbnNvbGUubG9nKCdyZXNpemVkIScpO1xufTsiLCJpbXBvcnQge1xuICBXSURUSCxcbiAgSEVJR0hULFxuICBBTklNQVRJT05fREVMQVksXG4gIEFOSU1BVElPTl9FQVNJTkcsXG4gIEFOSU1BVElPTl9EVVJBVElPTlxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IENoYXJ0IGZyb20gXCIuL2NoYXJ0XCI7XG5cbmNsYXNzIFdvcmxkR3JhcGggZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHNlbGVjdG9yKTtcbiAgICB0aGlzLnhBeGlzKCk7XG4gICAgdGhpcy55QXhpcyhbMSwgMF0sIFwic2NhbGVMaW5lYXJcIiwgMjAsICgpID0+IGQzLmZvcm1hdChcIi4wJVwiKSk7XG4gICAgdGhpcy5nZXREYXRhKFwiZ3JhcGhHZHBcIik7XG4gIH1cblxuICBnZXREYXRhKG1ldHJpYykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBkMy5qc29uKFwiL2Rpc3QvZGF0YS9jb3VudHJpZXMuanNvblwiKS50aGVuKGRhdGEgPT4ge1xuICAgICAgdGhhdC5zZXREYXRhKGRhdGEpO1xuICAgICAgdGhhdC5jaXJjbGVzKG1ldHJpYyk7XG4gICAgfSk7XG4gIH1cblxuICBjaXJjbGVzKG1ldHJpYykge1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIHRvb2x0aXBcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBsZXQgdG9vbHRpcCA9IGQzXG4gICAgICAuc2VsZWN0KFwiYm9keVwiKVxuICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRvb2x0aXBcIilcbiAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjVweFwiKVxuICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBcIjEwcHhcIilcbiAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgIC5zdHlsZShcInotaW5kZXhcIiwgXCI5OTk5OTk5OTlcIilcbiAgICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblxuICAgIGxldCBzaG93VG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDIwMCk7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgICAgIC5odG1sKFxuICAgICAgICAgIGBcbiAgPHN0cm9uZz5Db3VudHJ5Ojwvc3Ryb25nPiAke2QuY291bnRyeX0gKCR7ZC5jb250aW5lbnR9KTxici8+XG4gIDxzdHJvbmc+SGFwcGluZXNzIFJhbmtpbmc6PC9zdHJvbmc+ICR7ZC5yYW5raW5nfVxuYFxuICAgICAgICApXG4gICAgICAgIC5zdHlsZShcInRvcFwiLCBkMy5ldmVudC5jbGllbnRZIC0gMTAwICsgXCJweFwiKVxuICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIGQzLmV2ZW50LmNsaWVudFggLSAxNjAgKyBcInB4XCIpO1xuICAgIH07XG5cbiAgICBsZXQgbW92ZVRvb2x0aXAgPSBmdW5jdGlvbihkKSB7XG4gICAgICBzaG93VG9vbHRpcChkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibW92ZSB0b29sdGlwXCIpO1xuICAgICAgdG9vbHRpcFxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5jbGllbnRYIC0gMTYwICsgXCJweFwiKTtcbiAgICB9O1xuXG4gICAgbGV0IGhpZGVUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuICAgICAgY29uc29sZS5sb2coXCJoaWRlIHRvb2x0aXBcIik7XG4gICAgICB0b29sdGlwXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKTtcbiAgICB9O1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGNoYXJ0IHJlbmRlcmluZ1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoXCJjaXJjbGVcIilcbiAgICAgIC5kYXRhKE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJjbGFzc1wiLFxuICAgICAgICBkID0+XG4gICAgICAgICAgYGNvdW50cnkgJHtkLmNsYXNzfSBjb250aW5lbnQtJHtkLmNvbnRpbmVudFxuICAgICAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgLmpvaW4oXCItXCIpfSBjb3VudHJ5LWJ1YmJsZWBcbiAgICAgIClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQuY29udGluZW50ID09PSBcIkFmcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzdjYmQxZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkFzaWFcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjFmNWFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJOb3J0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMzAzNDgxXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiU291dGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmNWI0NFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkV1cm9wZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzJmYzVjY1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiLjdcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI0NEQ0RDRFwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkW21ldHJpY10gLyAxNTYpICsgMjU7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIHNob3dUb29sdGlwKVxuICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIG1vdmVUb29sdGlwKVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBoaWRlVG9vbHRpcClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kZWxheSgoZCwgaSkgPT4gaSAqIEFOSU1BVElPTl9ERUxBWSlcbiAgICAgIC5kdXJhdGlvbihBTklNQVRJT05fRFVSQVRJT04pXG4gICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgLmF0dHIoXCJyXCIsIGQgPT4ge1xuICAgICAgICBpZiAoZC5wb3B1bGF0aW9uID4gODAwMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDI1MDAwMDAwO1xuICAgICAgICB9IGVsc2UgaWYgKGQucG9wdWxhdGlvbiA+IDUwMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDAwO1xuICAgICAgICB9IGVsc2UgaWYgKGQucG9wdWxhdGlvbiA+IDEwMDAwMDApIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTUwMDAwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTAwMDAwO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMueVNjYWxlKGQuZ3JhcGhSYW5raW5nIC8gMTU2KTtcbiAgICAgIH0pO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gbGVnZW5kXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IGNvbnRpbmVudHMgPSB7XG4gICAgICBBRlJJQ0E6IHsgY29udGluZW50OiBcIkFmcmljYVwiIH0sXG4gICAgICBBU0lBOiB7IGNvbnRpbmVudDogXCJBc2lhXCIgfSxcbiAgICAgIE5PUlRIX0FNRVJJQ0E6IHsgY29udGluZW50OiBcIk5vcnRoIEFtZXJpY2FcIiB9LFxuICAgICAgU09VVEhfQU1FUklDQTogeyBjb250aW5lbnQ6IFwiU291dGggQW1lcmljYVwiIH0sXG4gICAgICBFVVJPUEU6IHsgY29udGluZW50OiBcIkV1cm9wZVwiIH1cbiAgICB9O1xuXG4gICAgbGV0IGNvbnRpbmVudEZvY3VzT24gPSBjb250aW5lbnROYW1lID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcbiAgICAgICAgICBgY2lyY2xlOm5vdCguY29udGluZW50LSR7Y29udGluZW50TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9KWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjA1XCIpO1xuICAgIH07XG5cbiAgICBsZXQgY29udGluZW50Rm9jdXNPZmYgPSBjb250aW5lbnROYW1lID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbChcbiAgICAgICAgICBgY2lyY2xlOm5vdCguY29udGluZW50LSR7Y29udGluZW50TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9KWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjdcIik7XG4gICAgfTtcblxuICAgIGxldCBsZWdlbmQgPSB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLmxlZ2VuZFwiKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyhjb250aW5lbnRzKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxlZ2VuZFwiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyA4NzAgKyBcIixcIiArIDQ4MCArIFwiKVwiKTtcblxuICAgIGxlZ2VuZFxuICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIDIwICogaTtcbiAgICAgIH0pXG4gICAgICAuYXR0cihcIndpZHRoXCIsIDE1KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMTUpXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgaWYgKGQuY29udGluZW50ID09PSBcIkFmcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzdjYmQxZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkFzaWFcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjFmNWFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJOb3J0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMzAzNDgxXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiU291dGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmNWI0NFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkV1cm9wZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzJmYzVjY1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4gY29udGluZW50Rm9jdXNPbihkLmNvbnRpbmVudCkpXG4gICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGQgPT4gY29udGluZW50Rm9jdXNPZmYoZC5jb250aW5lbnQpKTtcblxuICAgIGxlZ2VuZFxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieFwiLCAyNSlcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKVxuICAgICAgLmF0dHIoXCJkeVwiLCBcIjFlbVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBsZWdlbmQtJHtkLmNvbnRpbmVudC5zcGxpdChcIiBcIikuam9pbihcIi1cIil9YClcbiAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIHJldHVybiAyMCAqIGk7XG4gICAgICB9KVxuICAgICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5jb250aW5lbnQ7XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxMnB4XCIpXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiBjb250aW5lbnRGb2N1c09uKGQuY29udGluZW50KSlcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZCA9PiBjb250aW5lbnRGb2N1c09mZihkLmNvbnRpbmVudCkpO1xuXG4gICAgbGVnZW5kXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIDMxKVxuICAgICAgLmF0dHIoXCJkeVwiLCBcIi0uMmVtXCIpXG4gICAgICAuYXR0cihcInlcIiwgLTEwKVxuICAgICAgLnRleHQoXCJDb250aW5lbnRcIilcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMTdweFwiKVxuICAgICAgLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImxlZnRcIik7XG4gIH1cblxuICB1cGRhdGVEYXRhKGRhdGFUeXBlKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NsaWNrZScpXG5cbiAgICAvLyBsZXQgdGhhdCA9IHRoaXM7XG4gICAgZDMuanNvbihcIi9kaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIFxuXG5cblxuXG4gICAgXG4vLyAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgLy8gdG9vbHRpcFxuLy8gICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgIGxldCB0b29sdGlwID0gZDNcbi8vICAgICAgIC5zZWxlY3QoXCJib2R5XCIpXG4vLyAgICAgICAuYXBwZW5kKFwiZGl2XCIpXG4vLyAgICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4vLyAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuLy8gICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpXG4vLyAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4vLyAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuLy8gICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKVxuLy8gICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjk5OTk5OTk5OVwiKVxuLy8gICAgICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuLy8gICAgICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG4vLyAgICAgbGV0IHNob3dUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuLy8gICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKCkuZHVyYXRpb24oMjAwKTtcbi8vICAgICAgIHRvb2x0aXBcbi8vICAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIilcbi8vICAgICAgICAgLmh0bWwoXG4vLyAgICAgICAgICAgYFxuLy8gPHN0cm9uZz5Db3VudHJ5Ojwvc3Ryb25nPiAke2QuY291bnRyeX0gKCR7ZC5jb250aW5lbnR9KTxici8+XG4vLyA8c3Ryb25nPkhhcHBpbmVzcyBSYW5raW5nOjwvc3Ryb25nPiAke2QucmFua2luZ31cbi8vIGBcbi8vICAgICAgICAgKVxuLy8gICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMuZXZlbnQuY2xpZW50WSAtIDEwMCArIFwicHhcIilcbi8vICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5jbGllbnRYIC0gMTYwICsgXCJweFwiKTtcbi8vICAgICB9O1xuXG4vLyAgICAgbGV0IG1vdmVUb29sdGlwID0gZnVuY3Rpb24oZCkge1xuLy8gICAgICAgc2hvd1Rvb2x0aXAoZCk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcIm1vdmUgdG9vbHRpcFwiKTtcbi8vICAgICAgIHRvb2x0aXBcbi8vICAgICAgICAgLnN0eWxlKFwidG9wXCIsIGQzLmV2ZW50LmNsaWVudFkgLSAxMDAgKyBcInB4XCIpXG4vLyAgICAgICAgIC5zdHlsZShcImxlZnRcIiwgZDMuZXZlbnQuY2xpZW50WCAtIDE2MCArIFwicHhcIik7XG4vLyAgICAgfTtcblxuLy8gICAgIGxldCBoaWRlVG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiaGlkZSB0b29sdGlwXCIpO1xuLy8gICAgICAgdG9vbHRpcFxuLy8gICAgICAgICAudHJhbnNpdGlvbigpXG4vLyAgICAgICAgIC5kdXJhdGlvbigyMDApXG4vLyAgICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIik7XG4vLyAgICAgfTtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBjaGFydCByZW5kZXJpbmdcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBsZXQgc3ZnID0gdGhpcy5jaGFydFxuICAgICAgICAuc2VsZWN0QWxsKFwiLmNvdW50cnktYnViYmxlXCIpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmRlbGF5KChkLCBpKSA9PiBpICogQU5JTUFUSU9OX0RFTEFZKVxuICAgICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkW2RhdGFUeXBlXSAvIDE1NikgKyAyNTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIC5vbihcIm1vdXNlb3ZlclwiLCBzaG93VG9vbHRpcClcbiAgICAgICAgLy8gLm9uKFwibW91c2Vtb3ZlXCIsIG1vdmVUb29sdGlwKVxuICAgICAgICAvLyAub24oXCJtb3VzZWxlYXZlXCIsIGhpZGVUb29sdGlwKVxuICAgICAgICAvLyAuYXR0cihcInJcIiwgZCA9PiB7XG4gICAgICAgIC8vICAgaWYgKGQucG9wdWxhdGlvbiA+IDgwMDAwMDAwMCkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDI1MDAwMDAwO1xuICAgICAgICAvLyAgIH0gZWxzZSBpZiAoZC5wb3B1bGF0aW9uID4gNTAwMDAwMDApIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAxMDAwMDAwMDtcbiAgICAgICAgLy8gICB9IGVsc2UgaWYgKGQucG9wdWxhdGlvbiA+IDEwMDAwMDApIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAxNTAwMDAwO1xuICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gZC5wb3B1bGF0aW9uIC8gMTAwMDAwO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gLmF0dHIoXCJjeVwiLCBkID0+IHtcbiAgICAgICAgLy8gICByZXR1cm4gdGhpcy55U2NhbGUoZC5ncmFwaFJhbmtpbmcgLyAxNTYpO1xuICAgICAgICAvLyB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIC8vIGxlZ2VuZFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGxldCBjb250aW5lbnRzID0ge1xuICAgIC8vICAgQUZSSUNBOiB7XG4gICAgLy8gICAgIGNvbnRpbmVudDogXCJBZnJpY2FcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgIEFTSUE6IHsgY29udGluZW50OiBcIkFzaWFcIiB9LFxuICAgIC8vICAgTk9SVEhfQU1FUklDQToge1xuICAgIC8vICAgICBjb250aW5lbnQ6IFwiTm9ydGggQW1lcmljYVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgU09VVEhfQU1FUklDQToge1xuICAgIC8vICAgICBjb250aW5lbnQ6IFwiU291dGggQW1lcmljYVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgRVVST1BFOiB7XG4gICAgLy8gICAgIGNvbnRpbmVudDogXCJFdXJvcGVcIlxuICAgIC8vICAgfVxuICAgIC8vIH07XG5cbiAgICAvLyBsZXQgY29udGluZW50Rm9jdXNPbiA9IGNvbnRpbmVudE5hbWUgPT4ge1xuICAgIC8vICAgdGhpcy5jaGFydFxuICAgIC8vICAgICAuc2VsZWN0QWxsKFxuICAgIC8vICAgICAgIGBjaXJjbGU6bm90KC5jb250aW5lbnQtJHtjb250aW5lbnROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX0pYFxuICAgIC8vICAgICApXG4gICAgLy8gICAgIC5hdHRyKFwib3BhY2l0eVwiLCBcIjAuMDVcIik7XG4gICAgLy8gfTtcblxuICAgIC8vIGxldCBjb250aW5lbnRGb2N1c09mZiA9IGNvbnRpbmVudE5hbWUgPT4ge1xuICAgIC8vICAgdGhpcy5jaGFydFxuICAgIC8vICAgICAuc2VsZWN0QWxsKFxuICAgIC8vICAgICAgIGBjaXJjbGU6bm90KC5jb250aW5lbnQtJHtjb250aW5lbnROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX0pYFxuICAgIC8vICAgICApXG4gICAgLy8gICAgIC5hdHRyKFwib3BhY2l0eVwiLCBcIjAuN1wiKTtcbiAgICAvLyB9O1xuXG4gICAgLy8gbGV0IGxlZ2VuZCA9IHRoaXMuY2hhcnRcbiAgICAvLyAgIC5zZWxlY3RBbGwoXCIubGVnZW5kXCIpXG4gICAgLy8gICAuZGF0YShPYmplY3QudmFsdWVzKGNvbnRpbmVudHMpKVxuICAgIC8vICAgLmVudGVyKClcbiAgICAvLyAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLy8gICAuYXR0cihcImNsYXNzXCIsIFwibGVnZW5kXCIpXG4gICAgLy8gICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIDg3MCArIFwiLFwiICsgNDgwICsgXCIpXCIpO1xuXG4gICAgLy8gbGVnZW5kXG4gICAgLy8gICAuYXBwZW5kKFwicmVjdFwiKVxuICAgIC8vICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgLy8gICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkge1xuICAgIC8vICAgICByZXR1cm4gMjAgKiBpO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC5hdHRyKFwid2lkdGhcIiwgMTUpXG4gICAgLy8gICAuYXR0cihcImhlaWdodFwiLCAxNSlcbiAgICAvLyAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuICAgIC8vICAgICBpZiAoZC5jb250aW5lbnQgPT09IFwiQWZyaWNhXCIpIHtcbiAgICAvLyAgICAgICByZXR1cm4gXCIjN2NiZDFlXCI7XG4gICAgLy8gICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiQXNpYVwiKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIFwiI2ZmMWY1YVwiO1xuICAgIC8vICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIk5vcnRoIEFtZXJpY2FcIikge1xuICAgIC8vICAgICAgIHJldHVybiBcIiMzMDM0ODFcIjtcbiAgICAvLyAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJTb3V0aCBBbWVyaWNhXCIpIHtcbiAgICAvLyAgICAgICByZXR1cm4gXCIjZmY1YjQ0XCI7XG4gICAgLy8gICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiRXVyb3BlXCIpIHtcbiAgICAvLyAgICAgICByZXR1cm4gXCIjMmZjNWNjXCI7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgcmV0dXJuIFwicmVkXCI7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG4gICAgLy8gICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiBjb250aW5lbnRGb2N1c09uKGQuY29udGluZW50KSlcbiAgICAvLyAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZCA9PiBjb250aW5lbnRGb2N1c09mZihkLmNvbnRpbmVudCkpO1xuXG4gICAgLy8gbGVnZW5kXG4gICAgLy8gICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC8vICAgLmF0dHIoXCJ4XCIsIDI1KVxuICAgIC8vICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpXG4gICAgLy8gICAuYXR0cihcImR5XCIsIFwiMWVtXCIpXG4gICAgLy8gICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGxlZ2VuZC0ke2QuY29udGluZW50LnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX1gKVxuICAgIC8vICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAvLyAgICAgcmV0dXJuIDIwICogaTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgLy8gICAgIHJldHVybiBkLmNvbnRpbmVudDtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjEycHhcIilcbiAgICAvLyAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IGNvbnRpbmVudEZvY3VzT24oZC5jb250aW5lbnQpKVxuICAgIC8vICAgLm9uKFwibW91c2VsZWF2ZVwiLCBkID0+IGNvbnRpbmVudEZvY3VzT2ZmKGQuY29udGluZW50KSk7XG5cbiAgICAvLyBsZWdlbmRcbiAgICAvLyAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLy8gICAuYXR0cihcInhcIiwgMzEpXG4gICAgLy8gICAuYXR0cihcImR5XCIsIFwiLS4yZW1cIilcbiAgICAvLyAgIC5hdHRyKFwieVwiLCAtMTApXG4gICAgLy8gICAudGV4dChcIkNvbnRpbmVudFwiKVxuICAgIC8vICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxN3B4XCIpXG4gICAgLy8gICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwibGVmdFwiKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JsZEdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==