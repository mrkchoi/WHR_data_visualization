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
    } // setRadius() {
    // }

  }, {
    key: "circles",
    value: function circles() {
      var _this2 = this;

      var tooltip = d3.select("body").append("div").style("visibility", "hidden").attr("class", "tooltip").style("background-color", "black").style("border-radius", "5px").style("padding", "10px").style("color", "white").style("z-index", "999999999").style("position", "absolute").style("display", "block");

      var showTooltip = function showTooltip(d) {
        tooltip.transition().duration(200);
        tooltip.style("visibility", "visible").html("\n              <strong>Country:</strong> ".concat(d.country, " (").concat(d.continent, ")<br/>\n              <strong>Happiness Ranking:</strong> ").concat(d.ranking, "\n            ")).style("top", d3.mouse(d3.event.target)[1] + 80 + "px").style("left", d3.mouse(d3.event.target)[0] - 40 + "px");
      };

      var moveTooltip = function moveTooltip(d) {
        showTooltip(d);
        console.log('move tooltip');
        tooltip.style("top", d3.mouse(d3.event.target)[1] + 80 + "px").style("left", d3.mouse(d3.event.target)[0] - 40 + "px");
      };

      var hideTooltip = function hideTooltip(d) {
        console.log('hide tooltip');
        tooltip.transition().duration(200).style("visibility", "hidden");
      };

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
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkX2dyYXBoLmpzIl0sIm5hbWVzIjpbIkNoYXJ0Iiwic2VsZWN0b3IiLCJvcHRpb25zIiwic2V0Q2hhcnQiLCJzZXRMYWJlbHMiLCJ0b3BPZmZzZXQiLCJsZWZ0T2Zmc2V0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwiSEVJR0hUIiwiTUFSR0lOUyIsIldJRFRIIiwiY2hhcnQiLCJhcHBlbmQiLCJkYXRhIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidGlja3MiLCJ0aWNrRm9ybWF0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsImRvbWFpbiIsInhBeGlzQ2FsbCIsImF4aXNCb3R0b20iLCJmb3JtYXQiLCJjYWxsIiwieVNjYWxlIiwicGFkZGluZyIsImF4aXNMZWZ0IiwieExhYmVsIiwidGV4dCIsInlMYWJlbCIsIlBMQU5PIiwiUExBTk9fQ0lUWSIsIlBMQU5PX0NMQVNTIiwiUExBTk9fQ09MT1IiLCJJUlZJTkUiLCJJUlZJTkVfQ0lUWSIsIklSVklORV9DTEFTUyIsIklSVklORV9DT0xPUiIsIk1BRElTT04iLCJNQURJU09OX0NJVFkiLCJNQURJU09OX0NMQVNTIiwiTUFESVNPTl9DT0xPUiIsIkZSRU1PTlQiLCJGUkVNT05UX0NJVFkiLCJGUkVNT05UX0NMQVNTIiwiRlJFTU9OVF9DT0xPUiIsIkhVTlRJTkdUT05fQkVBQ0giLCJIVU5USU5HVE9OX0JFQUNIX0NJVFkiLCJIVU5USU5HVE9OX0JFQUNIX0NMQVNTIiwiSFVOVElOR1RPTl9CRUFDSF9DT0xPUiIsIkZBUkdPIiwiRkFSR09fQ0lUWSIsIkZBUkdPX0NMQVNTIiwiRkFSR09fQ09MT1IiLCJHUkFORF9QUkFJUklFIiwiR1JBTkRfUFJBSVJJRV9DSVRZIiwiR1JBTkRfUFJBSVJJRV9DTEFTUyIsIkdSQU5EX1BSQUlSSUVfQ09MT1IiLCJTQU5fSk9TRSIsIlNBTl9KT1NFX0NJVFkiLCJTQU5fSk9TRV9DTEFTUyIsIlNBTl9KT1NFX0NPTE9SIiwiU0NPVFRTREFMRSIsIlNDT1RUU0RBTEVfQ0lUWSIsIlNDT1RUU0RBTEVfQ0xBU1MiLCJTQ09UVFNEQUxFX0NPTE9SIiwiU0FOX0ZSQU5DSVNDTyIsIlNBTl9GUkFOQ0lTQ09fQ0lUWSIsIlNBTl9GUkFOQ0lTQ09fQ0xBU1MiLCJTQU5fRlJBTkNJU0NPX0NPTE9SIiwiQklTTUFSQ0siLCJCSVNNQVJDS19DSVRZIiwiQklTTUFSQ0tfQ0xBU1MiLCJCSVNNQVJDS19DT0xPUiIsIk9WRVJMQU5EX1BBUksiLCJPVkVSTEFORF9QQVJLX0NJVFkiLCJPVkVSTEFORF9QQVJLX0NMQVNTIiwiT1ZFUkxBTkRfUEFSS19DT0xPUiIsIlNBTlRBX1JPU0EiLCJTQU5UQV9ST1NBX0NJVFkiLCJTQU5UQV9ST1NBX0NMQVNTIiwiU0FOVEFfUk9TQV9DT0xPUiIsIkFVU1RJTiIsIkFVU1RJTl9DSVRZIiwiQVVTVElOX0NMQVNTIiwiQVVTVElOX0NPTE9SIiwiU0lPVVhfRkFMTFMiLCJTSU9VWF9GQUxMU19DSVRZIiwiU0lPVVhfRkFMTFNfQ0xBU1MiLCJTSU9VWF9GQUxMU19DT0xPUiIsIlBFQVJMX0NJVFkiLCJQRUFSTF9DSVRZX0NJVFkiLCJQRUFSTF9DSVRZX0NMQVNTIiwiUEVBUkxfQ0lUWV9DT0xPUiIsIkdMRU5EQUxFIiwiR0xFTkRBTEVfQ0lUWSIsIkdMRU5EQUxFX0NMQVNTIiwiR0xFTkRBTEVfQ09MT1IiLCJTQU5fRElFR08iLCJTQU5fRElFR09fQ0lUWSIsIlNBTl9ESUVHT19DTEFTUyIsIlNBTl9ESUVHT19DT0xPUiIsIlNUX1BBVUwiLCJTVF9QQVVMX0NJVFkiLCJTVF9QQVVMX0NMQVNTIiwiU1RfUEFVTF9DT0xPUiIsIkNIQVJMRVNUT04iLCJDSEFSTEVTVE9OX0NJVFkiLCJDSEFSTEVTVE9OX0NMQVNTIiwiQ0hBUkxFU1RPTl9DT0xPUiIsIkdJTEJFUlQiLCJHSUxCRVJUX0NJVFkiLCJHSUxCRVJUX0NMQVNTIiwiR0lMQkVSVF9DT0xPUiIsIkFOQUhFSU0iLCJBTkFIRUlNX0NJVFkiLCJBTkFIRUlNX0NMQVNTIiwiQU5BSEVJTV9DT0xPUiIsIlJBTEVJR0giLCJSQUxFSUdIX0NJVFkiLCJSQUxFSUdIX0NMQVNTIiwiUkFMRUlHSF9DT0xPUiIsIkNBUEVfQ09SQUwiLCJDQVBFX0NPUkFMX0NJVFkiLCJDQVBFX0NPUkFMX0NMQVNTIiwiQ0FQRV9DT1JBTF9DT0xPUiIsIkNFREFSX1JBUElEUyIsIkNFREFSX1JBUElEU19DSVRZIiwiQ0VEQVJfUkFQSURTX0NMQVNTIiwiQ0VEQVJfUkFQSURTX0NPTE9SIiwiQ0lUSUVTIiwiY2l0eSIsImNvbnN0YW50IiwiY29sb3IiLCJlbW90aW9uYWxXZWxsYmVpbmciLCJpbmNvbWVFbXBsb3ltZW50IiwiY29tbXVuaXR5RW52aXJvbm1lbnQiLCJwb3NpdGlvbiIsIngiLCJ5IiwiaGFwcGluZXNzU2NvcmUiLCJyYW5raW5nIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwiQU5JTUFUSU9OX0RFTEFZIiwiQU5JTUFUSU9OX0VBU0lORyIsImVhc2VQb2x5IiwiRmlsdGVyIiwiZmlsdGVyRGF0YSIsInRvb2x0aXAiLCJzdHlsZSIsInNlbGVjdEFsbCIsIm9uIiwiZCIsImkiLCJjbGFzc05hbWUiLCJzcGxpdCIsImpvaW4iLCJhbGxPdGhlckNpdHlEYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsImh0bWwiLCJtYWluSGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImFsbENpdHlEYXRhIiwicmVtb3ZlIiwid29ybGRHcmFwaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJXb3JsZEdyYXBoIiwib25yZXNpemUiLCJyZWRyYXciLCJ4QXhpcyIsInlBeGlzIiwiZ2V0RGF0YSIsInRoYXQiLCJqc29uIiwidGhlbiIsInNldERhdGEiLCJjaXJjbGVzIiwic2hvd1Rvb2x0aXAiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb3VudHJ5IiwiY29udGluZW50IiwibW91c2UiLCJldmVudCIsInRhcmdldCIsIm1vdmVUb29sdGlwIiwiaGlkZVRvb2x0aXAiLCJPYmplY3QiLCJ2YWx1ZXMiLCJlbnRlciIsImdyYXBoR2RwIiwiZGVsYXkiLCJlYXNlIiwicG9wdWxhdGlvbiIsImdyYXBoUmFua2luZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztJQVNNQSxLOzs7QUFDSixpQkFBWUMsUUFBWixFQUFzQkMsT0FBdEIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0MsUUFBTCxDQUFjRixRQUFk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akNSLEVBa0NHaEosSUFsQ0gsQ0FrQ1EsR0FsQ1IsRUFrQ2EsVUFBQXdKLENBQUMsRUFBSTtBQUNkLFlBQUlBLENBQUMsQ0FBQzhDLFVBQUYsR0FBZSxTQUFuQixFQUE4QjtBQUM1QixpQkFBTzlDLENBQUMsQ0FBQzhDLFVBQUYsR0FBZSxRQUF0QjtBQUNELFNBRkQsTUFFTyxJQUFJOUMsQ0FBQyxDQUFDOEMsVUFBRixHQUFlLFFBQW5CLEVBQTZCO0FBQ2xDLGlCQUFPOUMsQ0FBQyxDQUFDOEMsVUFBRixHQUFlLFFBQXRCO0FBQ0QsU0FGTSxNQUVBLElBQUk5QyxDQUFDLENBQUM4QyxVQUFGLEdBQWUsT0FBbkIsRUFBNEI7QUFDakMsaUJBQU85QyxDQUFDLENBQUM4QyxVQUFGLEdBQWUsT0FBdEI7QUFDRCxTQUZNLE1BRUE7QUFDTCxpQkFBTzlDLENBQUMsQ0FBQzhDLFVBQUYsR0FBZSxNQUF0QjtBQUNEO0FBQ0YsT0E1Q0gsRUE2Q0d0TSxJQTdDSCxDQTZDUSxJQTdDUixFQTZDYyxVQUFBd0osQ0FBQyxFQUFJO0FBQ2YsZUFBTyxNQUFJLENBQUNoSSxNQUFMLENBQVlnSSxDQUFDLENBQUMrQyxZQUFGLEdBQWlCLEdBQTdCLENBQVA7QUFDRCxPQS9DSDtBQWlERCxLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztFQTlLdUJqTiw4Qzs7QUFpTFZxTCx5RUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7XG4gIEhFSUdIVCxcbiAgTUFSR0lOUyxcbiAgV0lEVEgsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbiAgQU5JTUFUSU9OX0RFTEFZLFxuICBBTklNQVRJT05fRUFTSU5HXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyk7XG4gICAgLy8gdGhpcy5nZXREYXRhKCk7XG4gICAgdGhpcy5zZXRMYWJlbHMoKTtcbiAgfVxuXG4gIHNldENoYXJ0KHNlbGVjdG9yLCBvcHRpb25zID0geyB0b3BPZmZzZXQ6IDAsIGxlZnRPZmZzZXQ6IDAgfSkge1xuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KHNlbGVjdG9yKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOUyAqIDIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOUyAqIDIpO1xuICAgIHRoaXMuY2hhcnQgPSBzdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgYHRyYW5zbGF0ZSgke01BUkdJTlMgKyBvcHRpb25zLmxlZnRPZmZzZXR9LCAke01BUkdJTlMgLyAyICtcbiAgICAgICAgICBvcHRpb25zLnRvcE9mZnNldH0pYFxuICAgICAgKTtcbiAgfVxuXG4gIHNldERhdGEoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICByZWRyYXcoc2VsZWN0b3IpIHtcbiAgICAvLyBsZXQgZ3JhcGhEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3ZnLmdyYXBoXCIpO1xuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnNvbGUubG9nKGBuZXcgd2lkdGg6ICR7d2lkdGh9YClcbiAgICBsZXQgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnNvbGUubG9nKGBuZXcgaGVpZ2h0OiAke2hlaWdodH1gKVxuICAgIGQzLnNlbGVjdChzZWxlY3RvcilcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgTUFSR0lOUyAqIDIpXG4gICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0ICsgTUFSR0lOUyAqIDIpO1xuICB9XG5cbiAgeEF4aXModGlja3MgPSAyMCwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgdGhpcy54U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgLmRvbWFpbihbMCwgMV0pO1xuICAgIGxldCB4QXhpc0NhbGwgPSBkM1xuICAgICAgLmF4aXNCb3R0b20odGhpcy54U2NhbGUpXG4gICAgICAudGlja3ModGlja3MpXG4gICAgICAudGlja0Zvcm1hdChkMy5mb3JtYXQoXCIuMCVcIikpO1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7SEVJR0hUfSlgKVxuICAgICAgLmNhbGwoeEF4aXNDYWxsKTtcbiAgfVxuXG4gIHlBeGlzKGRvbWFpbiwgeVNjYWxlLCB0aWNrcyA9IDUsIHRpY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIGlmICh5U2NhbGUgPT09IFwic2NhbGVCYW5kXCIpIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIEhFSUdIVF0pXG4gICAgICAgIC5wYWRkaW5nKDAuOCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIEhFSUdIVF0pO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnQuYXBwZW5kKFwiZ1wiKS5jYWxsKFxuICAgICAgZDNcbiAgICAgICAgLmF4aXNMZWZ0KHRoaXMueVNjYWxlKVxuICAgICAgICAudGlja3ModGlja3MpXG4gICAgICAgIC50aWNrRm9ybWF0KHRpY2tGb3JtYXQoKSlcbiAgICApO1xuICB9XG5cbiAgc2V0TGFiZWxzKCkge1xuICAgIC8vIExhYmVsc1xuICAgIHZhciB4TGFiZWwgPSB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieVwiLCBIRUlHSFQgKyA1MClcbiAgICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIwcHhcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC50ZXh0KFwiR0RQIFBlciBDYXBpdGEgKCQpXCIpO1xuICAgIHZhciB5TGFiZWwgPSB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgIC5hdHRyKFwieVwiLCAtNjUpXG4gICAgICAuYXR0cihcInhcIiwgLTMwMClcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjBweFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJIYXBwaW5lc3MgSW5kZXggKCUpXCIpO1xuICB9XG5cbiAgLy8gZ3JpZExpbmVzKHNjYWxlLCBwb3NpdGlvbiwgdGlja3MgPSA1KSB7XG4gIC8vICAgdGhpcy5jaGFydFxuICAvLyAgICAgLmFwcGVuZChcImdcIilcbiAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJncmlkXCIpXG4gIC8vICAgICAuY2FsbChkM1twb3NpdGlvbl0pKClcbiAgLy8gICAgIC5zY2FsZShzY2FsZSlcbiAgLy8gICAgIC50aWNrU2l6ZShXSURUSCwgMCwgMClcbiAgLy8gICAgIC50aWNrRm9ybWF0KFwiXCIpXG4gIC8vICAgICAudGlja3ModGlja3MpO1xuICAvLyB9XG5cbiAgLy8gcmVjdGFuZ2xlTGFiZWxzKHRleHQpIHtcbiAgLy8gICB0aGlzLmNoYXJ0XG4gIC8vICAgICAuc2VsZWN0QWxsKClcbiAgLy8gICAgIC5kYXRhKHRoaXMuc29ydGVkRGF0YSlcbiAgLy8gICAgIC5lbnRlcigpXG4gIC8vICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBjaXR5ICR7ZC5jbGFzc30gYmFyLWxhYmVsIGNpdHktZGF0YS10b2dnbGVgKVxuICAvLyAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gIC8vICAgICAuYXR0cihcInlcIiwgZCA9PiB0aGlzLnlTY2FsZShkLmNpdHkpIC0gMilcbiAgLy8gICAgIC5zdHlsZShcImZpbGxcIiwgXCIjZmZmXCIpXG4gIC8vICAgICAudGV4dCgoZCwgaSkgPT4ge1xuICAvLyAgICAgICBpZiAodHlwZW9mIHRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgLy8gICAgICAgICByZXR1cm4gZFt0ZXh0XTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICByZXR1cm4gdGV4dC5jYWxsKGQsIGkpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KVxuICAvLyAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgLy8gfVxuXG4gIC8vIGxhYmVsVG9wKHRleHQpIHtcbiAgLy8gICB0aGlzLmNoYXJ0XG4gIC8vICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsLXRleHRcIilcbiAgLy8gICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgLy8gICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDIpXG4gIC8vICAgICAuYXR0cihcInlcIiwgLTIwKVxuICAvLyAgICAgLnRleHQodGV4dCk7XG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iLCJleHBvcnQgY29uc3QgUExBTk8gPSBcIlBMQU5PXCI7XG5jb25zdCBQTEFOT19DSVRZID0gXCJQbGFub1wiO1xuY29uc3QgUExBTk9fQ0xBU1MgPSBcImNpdHktUGxhbm9cIjtcbmNvbnN0IFBMQU5PX0NPTE9SID0gXCIjNTFlYWVhXCI7XG5cbmV4cG9ydCBjb25zdCBJUlZJTkUgPSBcIklSVklORVwiO1xuY29uc3QgSVJWSU5FX0NJVFkgPSBcIklSVklORVwiO1xuY29uc3QgSVJWSU5FX0NMQVNTID0gXCJjaXR5LUlydmluZVwiO1xuY29uc3QgSVJWSU5FX0NPTE9SID0gXCIjZmY5ZDc2XCI7XG5cbmV4cG9ydCBjb25zdCBNQURJU09OID0gXCJNQURJU09OXCI7XG5jb25zdCBNQURJU09OX0NJVFkgPSBcIk1BRElTT05cIjtcbmNvbnN0IE1BRElTT05fQ0xBU1MgPSBcImNpdHktTWFkaXNvblwiO1xuY29uc3QgTUFESVNPTl9DT0xPUiA9IFwiI2ZiMzU2OVwiO1xuXG5leHBvcnQgY29uc3QgRlJFTU9OVCA9IFwiRlJFTU9OVFwiO1xuY29uc3QgRlJFTU9OVF9DSVRZID0gXCJGUkVNT05UXCI7XG5jb25zdCBGUkVNT05UX0NMQVNTID0gXCJjaXR5LUZyZW1vbnRcIjtcbmNvbnN0IEZSRU1PTlRfQ09MT1IgPSBcIiNmYTg2YmVcIjtcblxuZXhwb3J0IGNvbnN0IEhVTlRJTkdUT05fQkVBQ0ggPSBcIkhVTlRJTkdUT05fQkVBQ0hcIjtcbmNvbnN0IEhVTlRJTkdUT05fQkVBQ0hfQ0lUWSA9IFwiSFVOVElOR1RPTl9CRUFDSFwiO1xuY29uc3QgSFVOVElOR1RPTl9CRUFDSF9DTEFTUyA9IFwiY2l0eS1IdW50aW5ndG9uLUJlYWNoXCI7XG5jb25zdCBIVU5USU5HVE9OX0JFQUNIX0NPTE9SID0gXCIjYTI3NWUzXCI7XG5cbmV4cG9ydCBjb25zdCBGQVJHTyA9IFwiRkFSR09cIjtcbmNvbnN0IEZBUkdPX0NJVFkgPSBcIkZBUkdPXCI7XG5jb25zdCBGQVJHT19DTEFTUyA9IFwiY2l0eS1GYXJnb1wiO1xuY29uc3QgRkFSR09fQ09MT1IgPSBcIiNmZjFmNWFcIjtcblxuZXhwb3J0IGNvbnN0IEdSQU5EX1BSQUlSSUUgPSBcIkdSQU5EX1BSQUlSSUVcIjtcbmNvbnN0IEdSQU5EX1BSQUlSSUVfQ0lUWSA9IFwiR1JBTkRfUFJBSVJJRVwiO1xuY29uc3QgR1JBTkRfUFJBSVJJRV9DTEFTUyA9IFwiY2l0eS1HcmFuZC1QcmFpcmllXCI7XG5jb25zdCBHUkFORF9QUkFJUklFX0NPTE9SID0gXCIjNjkwMGZmXCI7XG5cbmV4cG9ydCBjb25zdCBTQU5fSk9TRSA9IFwiU0FOX0pPU0VcIjtcbmNvbnN0IFNBTl9KT1NFX0NJVFkgPSBcIlNBTl9KT1NFXCI7XG5jb25zdCBTQU5fSk9TRV9DTEFTUyA9IFwiY2l0eS1TYW4tSm9zZVwiO1xuY29uc3QgU0FOX0pPU0VfQ09MT1IgPSBcIiNmZmQ3MDBcIjtcblxuZXhwb3J0IGNvbnN0IFNDT1RUU0RBTEUgPSBcIlNDT1RUU0RBTEVcIjtcbmNvbnN0IFNDT1RUU0RBTEVfQ0lUWSA9IFwiU0NPVFRTREFMRVwiO1xuY29uc3QgU0NPVFRTREFMRV9DTEFTUyA9IFwiY2l0eS1TY290dHNkYWxlXCI7XG5jb25zdCBTQ09UVFNEQUxFX0NPTE9SID0gXCIjZmY2MTM4XCI7XG5cbmV4cG9ydCBjb25zdCBTQU5fRlJBTkNJU0NPID0gXCJTQU5fRlJBTkNJU0NPXCI7XG5jb25zdCBTQU5fRlJBTkNJU0NPX0NJVFkgPSBcIlNBTl9GUkFOQ0lTQ09cIjtcbmNvbnN0IFNBTl9GUkFOQ0lTQ09fQ0xBU1MgPSBcImNpdHktU2FuLUZyYW5jaXNjb1wiO1xuY29uc3QgU0FOX0ZSQU5DSVNDT19DT0xPUiA9IFwiIzMwMzQ4MVwiO1xuXG5leHBvcnQgY29uc3QgQklTTUFSQ0sgPSBcIkJJU01BUkNLXCI7XG5jb25zdCBCSVNNQVJDS19DSVRZID0gXCJCSVNNQVJDS1wiO1xuY29uc3QgQklTTUFSQ0tfQ0xBU1MgPSBcImNpdHktQmlzbWFyY2tcIjtcbmNvbnN0IEJJU01BUkNLX0NPTE9SID0gXCIjN2NiZDFlXCI7XG5cbmV4cG9ydCBjb25zdCBPVkVSTEFORF9QQVJLID0gXCJPVkVSTEFORF9QQVJLXCI7XG5jb25zdCBPVkVSTEFORF9QQVJLX0NJVFkgPSBcIk9WRVJMQU5EX1BBUktcIjtcbmNvbnN0IE9WRVJMQU5EX1BBUktfQ0xBU1MgPSBcImNpdHktT3ZlcmxhbmQtUGFya1wiO1xuY29uc3QgT1ZFUkxBTkRfUEFSS19DT0xPUiA9IFwiIzAwOTM3OFwiO1xuXG5leHBvcnQgY29uc3QgU0FOVEFfUk9TQSA9IFwiU0FOVEFfUk9TQVwiO1xuY29uc3QgU0FOVEFfUk9TQV9DSVRZID0gXCJTQU5UQV9ST1NBXCI7XG5jb25zdCBTQU5UQV9ST1NBX0NMQVNTID0gXCJjaXR5LVNhbnRhLVJvc2FcIjtcbmNvbnN0IFNBTlRBX1JPU0FfQ09MT1IgPSBcIiNmNjBjODZcIjtcblxuZXhwb3J0IGNvbnN0IEFVU1RJTiA9IFwiQVVTVElOXCI7XG5jb25zdCBBVVNUSU5fQ0lUWSA9IFwiQVVTVElOXCI7XG5jb25zdCBBVVNUSU5fQ0xBU1MgPSBcImNpdHktQXVzdGluXCI7XG5jb25zdCBBVVNUSU5fQ09MT1IgPSBcIiNmOWQwMGZcIjtcblxuZXhwb3J0IGNvbnN0IFNJT1VYX0ZBTExTID0gXCJTSU9VWF9GQUxMU1wiO1xuY29uc3QgU0lPVVhfRkFMTFNfQ0lUWSA9IFwiU0lPVVhfRkFMTFNcIjtcbmNvbnN0IFNJT1VYX0ZBTExTX0NMQVNTID0gXCJjaXR5LVNpb3V4LUZhbGxzXCI7XG5jb25zdCBTSU9VWF9GQUxMU19DT0xPUiA9IFwiIzMwMzg0MVwiO1xuXG5leHBvcnQgY29uc3QgUEVBUkxfQ0lUWSA9IFwiUEVBUkxfQ0lUWVwiO1xuY29uc3QgUEVBUkxfQ0lUWV9DSVRZID0gXCJQRUFSTF9DSVRZXCI7XG5jb25zdCBQRUFSTF9DSVRZX0NMQVNTID0gXCJjaXR5LVBlYXJsLUNpdHlcIjtcbmNvbnN0IFBFQVJMX0NJVFlfQ09MT1IgPSBcIiM5NmNkMzlcIjtcblxuZXhwb3J0IGNvbnN0IEdMRU5EQUxFID0gXCJHTEVOREFMRVwiO1xuY29uc3QgR0xFTkRBTEVfQ0lUWSA9IFwiR0xFTkRBTEVcIjtcbmNvbnN0IEdMRU5EQUxFX0NMQVNTID0gXCJjaXR5LUdsZW5kYWxlXCI7XG5jb25zdCBHTEVOREFMRV9DT0xPUiA9IFwiIzJmYzVjY1wiO1xuXG5leHBvcnQgY29uc3QgU0FOX0RJRUdPID0gXCJTQU5fRElFR09cIjtcbmNvbnN0IFNBTl9ESUVHT19DSVRZID0gXCJTQU5fRElFR09cIjtcbmNvbnN0IFNBTl9ESUVHT19DTEFTUyA9IFwiY2l0eS1TYW4tRGllZ29cIjtcbmNvbnN0IFNBTl9ESUVHT19DT0xPUiA9IFwiI2ZmNWI0NFwiO1xuXG5leHBvcnQgY29uc3QgU1RfUEFVTCA9IFwiU1RfUEFVTFwiO1xuY29uc3QgU1RfUEFVTF9DSVRZID0gXCJTVF9QQVVMXCI7XG5jb25zdCBTVF9QQVVMX0NMQVNTID0gXCJjaXR5LVN0LVBhdWxcIjtcbmNvbnN0IFNUX1BBVUxfQ09MT1IgPSBcIiNiZjY4ZjZcIjtcblxuZXhwb3J0IGNvbnN0IENIQVJMRVNUT04gPSBcIkNIQVJMRVNUT05cIjtcbmNvbnN0IENIQVJMRVNUT05fQ0lUWSA9IFwiQ0hBUkxFU1RPTlwiO1xuY29uc3QgQ0hBUkxFU1RPTl9DTEFTUyA9IFwiY2l0eS1DaGFybGVzdG9uXCI7XG5jb25zdCBDSEFSTEVTVE9OX0NPTE9SID0gXCIjZjkyNzI3XCI7XG5cbmV4cG9ydCBjb25zdCBHSUxCRVJUID0gXCJHSUxCRVJUXCI7XG5jb25zdCBHSUxCRVJUX0NJVFkgPSBcIkdJTEJFUlRcIjtcbmNvbnN0IEdJTEJFUlRfQ0xBU1MgPSBcImNpdHktR2lsYmVydFwiO1xuY29uc3QgR0lMQkVSVF9DT0xPUiA9IFwiI2ZmMDU5MlwiO1xuXG5leHBvcnQgY29uc3QgQU5BSEVJTSA9IFwiQU5BSEVJTVwiO1xuY29uc3QgQU5BSEVJTV9DSVRZID0gXCJBTkFIRUlNXCI7XG5jb25zdCBBTkFIRUlNX0NMQVNTID0gXCJjaXR5LUFuYWhlaW1cIjtcbmNvbnN0IEFOQUhFSU1fQ09MT1IgPSBcIiNhNThiZmZcIjtcblxuZXhwb3J0IGNvbnN0IFJBTEVJR0ggPSBcIlJBTEVJR0hcIjtcbmNvbnN0IFJBTEVJR0hfQ0lUWSA9IFwiUkFMRUlHSFwiO1xuY29uc3QgUkFMRUlHSF9DTEFTUyA9IFwiY2l0eS1SYWxlaWdoXCI7XG5jb25zdCBSQUxFSUdIX0NPTE9SID0gXCIjMDA5Mzc4XCI7XG5cbmV4cG9ydCBjb25zdCBDQVBFX0NPUkFMID0gXCJDQVBFX0NPUkFMXCI7XG5jb25zdCBDQVBFX0NPUkFMX0NJVFkgPSBcIkNBUEVfQ09SQUxcIjtcbmNvbnN0IENBUEVfQ09SQUxfQ0xBU1MgPSBcImNpdHktQ2FwZS1Db3JhbFwiO1xuY29uc3QgQ0FQRV9DT1JBTF9DT0xPUiA9IFwiI2ZjMzQ1Y1wiO1xuXG5leHBvcnQgY29uc3QgQ0VEQVJfUkFQSURTID0gXCJDRURBUl9SQVBJRFNcIjtcbmNvbnN0IENFREFSX1JBUElEU19DSVRZID0gXCJDRURBUl9SQVBJRFNcIjtcbmNvbnN0IENFREFSX1JBUElEU19DTEFTUyA9IFwiY2l0eS1DZWRhci1SYXBpZHNcIjtcbmNvbnN0IENFREFSX1JBUElEU19DT0xPUiA9IFwiIzNkNmNiOVwiO1xuXG5leHBvcnQgY29uc3QgQ0lUSUVTID0ge1xuICBQTEFOTzoge1xuICAgIGNpdHk6IFwiUGxhbm9cIixcbiAgICBjb25zdGFudDogUExBTk8sXG4gICAgY2xhc3M6IFBMQU5PX0NMQVNTLFxuICAgIGNvbG9yOiBQTEFOT19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDQsXG4gICAgaW5jb21lRW1wbG95bWVudDogMyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNCxcbiAgICBwb3NpdGlvbjogeyB4OiA1MjYsIHk6IDM5MCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA3Mi4zLFxuICAgIHJhbmtpbmc6IDFcbiAgfSxcbiAgSVJWSU5FOiB7XG4gICAgY2l0eTogXCJJcnZpbmVcIixcbiAgICBjb25zdGFudDogSVJWSU5FLFxuICAgIGNsYXNzOiBJUlZJTkVfQ0xBU1MsXG4gICAgY29sb3I6IElSVklORV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDgsXG4gICAgaW5jb21lRW1wbG95bWVudDogNixcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMyxcbiAgICBwb3NpdGlvbjogeyB4OiAxODAsIHk6IDMwMCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA3MS44NixcbiAgICByYW5raW5nOiAyXG4gIH0sXG4gIE1BRElTT046IHtcbiAgICBjaXR5OiBcIk1hZGlzb25cIixcbiAgICBjb25zdGFudDogTUFESVNPTixcbiAgICBjbGFzczogTUFESVNPTl9DTEFTUyxcbiAgICBjb2xvcjogTUFESVNPTl9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDIsXG4gICAgaW5jb21lRW1wbG95bWVudDogOCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNCxcbiAgICBwb3NpdGlvbjogeyB4OiA2NDAsIHk6IDE2MCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA3MS44MSxcbiAgICByYW5raW5nOiAzXG4gIH0sXG4gIEZSRU1PTlQ6IHtcbiAgICBjaXR5OiBcIkZyZW1vbnRcIixcbiAgICBjb25zdGFudDogRlJFTU9OVCxcbiAgICBjbGFzczogRlJFTU9OVF9DTEFTUyxcbiAgICBjb2xvcjogRlJFTU9OVF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDUsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjAsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDEsXG4gICAgcG9zaXRpb246IHsgeDogMTUxLCB5OiAyMjUgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNzEuMTcsXG4gICAgcmFua2luZzogNFxuICB9LFxuICBIVU5USU5HVE9OX0JFQUNIOiB7XG4gICAgY2l0eTogXCJIdW50aW5ndG9uIEJlYWNoXCIsXG4gICAgY29uc3RhbnQ6IEhVTlRJTkdUT05fQkVBQ0gsXG4gICAgY2xhc3M6IEhVTlRJTkdUT05fQkVBQ0hfQ0xBU1MsXG4gICAgY29sb3I6IEhVTlRJTkdUT05fQkVBQ0hfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAzLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDI1LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxNSxcbiAgICBwb3NpdGlvbjogeyB4OiAxNTksIHk6IDI5MCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OS43NCxcbiAgICByYW5raW5nOiA1XG4gIH0sXG4gIEZBUkdPOiB7XG4gICAgY2l0eTogXCJGYXJnb1wiLFxuICAgIGNvbnN0YW50OiBGQVJHTyxcbiAgICBjbGFzczogRkFSR09fQ0xBU1MsXG4gICAgY29sb3I6IEZBUkdPX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogOSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAxMSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTMsXG4gICAgcG9zaXRpb246IHsgeDogNDk4LCB5OiA5NCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OS41NyxcbiAgICByYW5raW5nOiA2XG4gIH0sXG4gIEdSQU5EX1BSQUlSSUU6IHtcbiAgICBjaXR5OiBcIkdyYW5kIFByYWlyaWVcIixcbiAgICBjb25zdGFudDogR1JBTkRfUFJBSVJJRSxcbiAgICBjbGFzczogR1JBTkRfUFJBSVJJRV9DTEFTUyxcbiAgICBjb2xvcjogR1JBTkRfUFJBSVJJRV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDExLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDE5LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAzLFxuICAgIHBvc2l0aW9uOiB7IHg6IDUyNSwgeTogNDEwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY5LjMsXG4gICAgcmFua2luZzogN1xuICB9LFxuICBTQU5fSk9TRToge1xuICAgIGNpdHk6IFwiU2FuIEpvc2VcIixcbiAgICBjb25zdGFudDogU0FOX0pPU0UsXG4gICAgY2xhc3M6IFNBTl9KT1NFX0NMQVNTLFxuICAgIGNvbG9yOiBTQU5fSk9TRV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEsXG4gICAgaW5jb21lRW1wbG95bWVudDogMTAsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDI0LFxuICAgIHBvc2l0aW9uOiB7IHg6IDE0MCwgeTogMjQwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY4LjksXG4gICAgcmFua2luZzogOFxuICB9LFxuICBTQ09UVFNEQUxFOiB7XG4gICAgY2l0eTogXCJTY290dHNkYWxlXCIsXG4gICAgY29uc3RhbnQ6IFNDT1RUU0RBTEUsXG4gICAgY2xhc3M6IFNDT1RUU0RBTEVfQ0xBU1MsXG4gICAgY29sb3I6IFNDT1RUU0RBTEVfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyNSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA3LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxLFxuICAgIHBvc2l0aW9uOiB7IHg6IDI3MCwgeTogMzQxIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY4LjI0LFxuICAgIHJhbmtpbmc6IDlcbiAgfSxcbiAgU0FOX0ZSQU5DSVNDTzoge1xuICAgIGNpdHk6IFwiU2FuIEZyYW5jaXNjb1wiLFxuICAgIGNvbnN0YW50OiBTQU5fRlJBTkNJU0NPLFxuICAgIGNsYXNzOiBTQU5fRlJBTkNJU0NPX0NMQVNTLFxuICAgIGNvbG9yOiBTQU5fRlJBTkNJU0NPX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAxLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA2OSxcbiAgICBwb3NpdGlvbjogeyB4OiAxMzYsIHk6IDIxMiB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny41MyxcbiAgICByYW5raW5nOiAxMFxuICB9LFxuICBCSVNNQVJDSzoge1xuICAgIGNpdHk6IFwiQmlzbWFyY2tcIixcbiAgICBjb25zdGFudDogQklTTUFSQ0ssXG4gICAgY2xhc3M6IEJJU01BUkNLX0NMQVNTLFxuICAgIGNvbG9yOiBCSVNNQVJDS19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDE0LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDIsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDI1LFxuICAgIHBvc2l0aW9uOiB7IHg6IDQ3OCwgeTogMTA2IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY3LjM4LFxuICAgIHJhbmtpbmc6IDExXG4gIH0sXG4gIE9WRVJMQU5EX1BBUks6IHtcbiAgICBjaXR5OiBcIk92ZXJsYW5kIFBhcmtcIixcbiAgICBjb25zdGFudDogT1ZFUkxBTkRfUEFSSyxcbiAgICBjbGFzczogT1ZFUkxBTkRfUEFSS19DTEFTUyxcbiAgICBjb2xvcjogT1ZFUkxBTkRfUEFSS19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEyLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDMxLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxNCxcbiAgICBwb3NpdGlvbjogeyB4OiA1NzAsIHk6IDI3OCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4zNyxcbiAgICByYW5raW5nOiAxMlxuICB9LFxuICBTQU5UQV9ST1NBOiB7XG4gICAgY2l0eTogXCJTYW50YSBSb3NhXCIsXG4gICAgY29uc3RhbnQ6IFNBTlRBX1JPU0EsXG4gICAgY2xhc3M6IFNBTlRBX1JPU0FfQ0xBU1MsXG4gICAgY29sb3I6IFNBTlRBX1JPU0FfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMyxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyOSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNSxcbiAgICBwb3NpdGlvbjogeyB4OiAxMzIsIHk6IDE5NiB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4xOCxcbiAgICByYW5raW5nOiAxM1xuICB9LFxuICBBVVNUSU46IHtcbiAgICBjaXR5OiBcIkF1c3RpblwiLFxuICAgIGNvbnN0YW50OiBBVVNUSU4sXG4gICAgY2xhc3M6IEFVU1RJTl9DTEFTUyxcbiAgICBjb2xvcjogQVVTVElOX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogOCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA0LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA0NCxcbiAgICBwb3NpdGlvbjogeyB4OiA0OTcsIHk6IDQzMCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4xNixcbiAgICByYW5raW5nOiAxNFxuICB9LFxuICBTSU9VWF9GQUxMUzoge1xuICAgIGNpdHk6IFwiU2lvdXggRmFsbHNcIixcbiAgICBjb25zdGFudDogU0lPVVhfRkFMTFMsXG4gICAgY2xhc3M6IFNJT1VYX0ZBTExTX0NMQVNTLFxuICAgIGNvbG9yOiBTSU9VWF9GQUxMU19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDYsXG4gICAgaW5jb21lRW1wbG95bWVudDogMzcsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUyLFxuICAgIHBvc2l0aW9uOiB7IHg6IDUwMCwgeTogMTY4IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY2Ljk3LFxuICAgIHJhbmtpbmc6IDE1XG4gIH0sXG4gIFBFQVJMX0NJVFk6IHtcbiAgICBjaXR5OiBcIlBlYXJsIENpdHlcIixcbiAgICBjb25zdGFudDogUEVBUkxfQ0lUWSxcbiAgICBjbGFzczogUEVBUkxfQ0lUWV9DTEFTUyxcbiAgICBjb2xvcjogUEVBUkxfQ0lUWV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEsXG4gICAgaW5jb21lRW1wbG95bWVudDogODEsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDgsXG4gICAgcG9zaXRpb246IHsgeDogMzUwLCB5OiA0OTEgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjYuNzcsXG4gICAgcmFua2luZzogMTZcbiAgfSxcbiAgR0xFTkRBTEU6IHtcbiAgICBjaXR5OiBcIkdsZW5kYWxlXCIsXG4gICAgY29uc3RhbnQ6IEdMRU5EQUxFLFxuICAgIGNsYXNzOiBHTEVOREFMRV9DTEFTUyxcbiAgICBjb2xvcjogR0xFTkRBTEVfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxNSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA1NixcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNyxcbiAgICBwb3NpdGlvbjogeyB4OiAxNjcsIHk6IDI3MiB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ni4yNSxcbiAgICByYW5raW5nOiAxN1xuICB9LFxuICBTQU5fRElFR086IHtcbiAgICBjaXR5OiBcIlNhbiBEaWVnb1wiLFxuICAgIGNvbnN0YW50OiBTQU5fRElFR08sXG4gICAgY2xhc3M6IFNBTl9ESUVHT19DTEFTUyxcbiAgICBjb2xvcjogU0FOX0RJRUdPX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyMCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMjUsXG4gICAgcG9zaXRpb246IHsgeDogMTg3LCB5OiAzMjEgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjYuMDEsXG4gICAgcmFua2luZzogMThcbiAgfSxcbiAgU1RfUEFVTDoge1xuICAgIGNpdHk6IFwiU3QuIFBhdWxcIixcbiAgICBjb25zdGFudDogU1RfUEFVTCxcbiAgICBjbGFzczogU1RfUEFVTF9DTEFTUyxcbiAgICBjb2xvcjogU1RfUEFVTF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEwLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDM4LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAzNixcbiAgICBwb3NpdGlvbjogeyB4OiA1OTAsIHk6IDEzMyB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NS43OSxcbiAgICByYW5raW5nOiAxOVxuICB9LFxuICBDSEFSTEVTVE9OOiB7XG4gICAgY2l0eTogXCJDaGFybGVzdG9uXCIsXG4gICAgY29uc3RhbnQ6IENIQVJMRVNUT04sXG4gICAgY2xhc3M6IENIQVJMRVNUT05fQ0xBU1MsXG4gICAgY29sb3I6IENIQVJMRVNUT05fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA0MSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyLFxuICAgIHBvc2l0aW9uOiB7IHg6IDgwNSwgeTogNDAwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY1LjQ4LFxuICAgIHJhbmtpbmc6IDIwXG4gIH0sXG4gIEdJTEJFUlQ6IHtcbiAgICBjaXR5OiBcIkdpbGJlcnRcIixcbiAgICBjb25zdGFudDogR0lMQkVSVCxcbiAgICBjbGFzczogR0lMQkVSVF9DTEFTUyxcbiAgICBjb2xvcjogR0lMQkVSVF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDMwLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDI2LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA1LFxuICAgIHBvc2l0aW9uOiB7IHg6IDI3NywgeTogMzYzIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY1LjA3LFxuICAgIHJhbmtpbmc6IDIxXG4gIH0sXG4gIEFOQUhFSU06IHtcbiAgICBjaXR5OiBcIkFuYWhlaW1cIixcbiAgICBjb25zdGFudDogQU5BSEVJTSxcbiAgICBjbGFzczogQU5BSEVJTV9DTEFTUyxcbiAgICBjb2xvcjogQU5BSEVJTV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDE2LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDQzLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxOSxcbiAgICBwb3NpdGlvbjogeyB4OiAxOTYsIHk6IDI4MiB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NS4wMixcbiAgICByYW5raW5nOiAyMlxuICB9LFxuICBSQUxFSUdIOiB7XG4gICAgY2l0eTogXCJSYWxlaWdoXCIsXG4gICAgY29uc3RhbnQ6IFJBTEVJR0gsXG4gICAgY2xhc3M6IFJBTEVJR0hfQ0xBU1MsXG4gICAgY29sb3I6IFJBTEVJR0hfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA3LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDIzLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA0OCxcbiAgICBwb3NpdGlvbjogeyB4OiA4MzAsIHk6IDMxMyB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NC45OSxcbiAgICByYW5raW5nOiAyM1xuICB9LFxuICBDQVBFX0NPUkFMOiB7XG4gICAgY2l0eTogXCJDYXBlIENvcmFsXCIsXG4gICAgY29uc3RhbnQ6IENBUEVfQ09SQUwsXG4gICAgY2xhc3M6IENBUEVfQ09SQUxfQ0xBU1MsXG4gICAgY29sb3I6IENBUEVfQ09SQUxfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyOCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA0OCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMixcbiAgICBwb3NpdGlvbjogeyB4OiA4MDAsIHk6IDQ4MCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NC45NixcbiAgICByYW5raW5nOiAyNFxuICB9LFxuICBDRURBUl9SQVBJRFM6IHtcbiAgICBjaXR5OiBcIkNlZGFyIFJhcGlkc1wiLFxuICAgIGNvbnN0YW50OiBDRURBUl9SQVBJRFMsXG4gICAgY2xhc3M6IENFREFSX1JBUElEU19DTEFTUyxcbiAgICBjb2xvcjogQ0VEQVJfUkFQSURTX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMjMsXG4gICAgaW5jb21lRW1wbG95bWVudDogMzIsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDExLFxuICAgIHBvc2l0aW9uOiB7IHg6IDYwMCwgeTogMjA1IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY0LjksXG4gICAgcmFua2luZzogMjVcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDEwMDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0RFTEFZID0gMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fRUFTSU5HID0gZDMuZWFzZVBvbHk7XG5cbmV4cG9ydCBjb25zdCBXSURUSCA9IDEwMDA7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gNjAwO1xuZXhwb3J0IGNvbnN0IE1BUkdJTlMgPSAxMDA7XG4iLCJjbGFzcyBGaWx0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlckRhdGEoKTtcbiAgfVxuXG4gIGZpbHRlckRhdGEoKSB7XG4gICAgY29uc3QgdG9vbHRpcCA9IGQzXG4gICAgICAuc2VsZWN0KGAuaGVhZGVyX190b29sdGlwYClcbiAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0b29sdGlwXCIpXG4gICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcInNvbGlkXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItd2lkdGhcIiwgXCIycHhcIilcbiAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCI1cHhcIilcbiAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxcmVtXCIpO1xuXG4gICAgZDMuc2VsZWN0QWxsKCcuY2l0eScpXG4gICAgICAub24oJ21vdXNlb3ZlcicsIChkLCBpKSA9PiB7XG4gICAgICAgIGxldCBjbGFzc05hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBgY2l0eS0ke2Quc3BsaXQoJyAnKS5qb2luKCctJyl9YDtcbiAgICAgICAgfSBlbHNlIGlmIChkLmRhdGEpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBkLmRhdGEuY2xhc3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gZC5jbGFzcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxPdGhlckNpdHlEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNpdHk6bm90KC4ke2NsYXNzTmFtZX0pYCk7XG4gICAgICAgIGFsbE90aGVyQ2l0eURhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICBkYXRhLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcicpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHRvb2x0aXAgIFxuICAgICAgICB0b29sdGlwXG4gICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwX19pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fY2l0eVwiPjxzdHJvbmc+Q2l0eTogPC9zdHJvbmc+PHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuY2l0eVxuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5PdmVyYWxsIFJhbms6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLnJhbmtpbmdcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+VG90YWwgSGFwcGluZXNzIFNjb3JlOjwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5oYXBwaW5lc3NTY29yZVxuICAgICAgICAgICAgICAgIH0vMTAwPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+RW1vdGlvbmFsICYgUGh5c2ljYWwgV2VsbC1CZWluZzo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuZW1vdGlvbmFsV2VsbGJlaW5nXG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPkluY29tZSAmIEVtcGxveW1lbnQ6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmluY29tZUVtcGxveW1lbnRcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+Q29tbXVuaXR5ICYgRW52aXJvbm1lbnQ6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmNvbW11bml0eUVudmlyb25tZW50XG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9faGVhZGVyJyk7XG4gICAgICAgIG1haW5IZWFkZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBjb2xvcjogJHtkLmNvbG9yfWAgKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbENpdHlEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNpdHknKTtcbiAgICAgICAgYWxsQ2l0eURhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICBkYXRhLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcicpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2hlYWRlclwiKTtcbiAgICAgICAgbWFpbkhlYWRlci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgY29sb3I6IGluaXRpYWxgKTtcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IFdvcmxkR3JhcGggZnJvbSBcIi4vd29ybGRfZ3JhcGhcIjtcblxuXG5sZXQgd29ybGRHcmFwaDtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgIHdvcmxkR3JhcGggPSBuZXcgV29ybGRHcmFwaChcInN2Zy5ncmFwaFwiKTtcbiAgLy8gbmV3IEZpbHRlcjtcbn0pO1xuXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gIHdvcmxkR3JhcGgucmVkcmF3KFwic3ZnLmdyYXBoXCIpO1xuICBjb25zb2xlLmxvZygncmVzaXplZCEnKTtcbn07IiwiaW1wb3J0IHtcbiAgV0lEVEgsIFxuICBIRUlHSFQsXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lORyxcbiAgQU5JTUFUSU9OX0RVUkFUSU9OLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuY2xhc3MgV29ybGRHcmFwaCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3Qoc2VsZWN0b3IpO1xuICAgIHRoaXMueEF4aXMoKTtcbiAgICB0aGlzLnlBeGlzKFsxLCAwXSwgXCJzY2FsZUxpbmVhclwiLCAyMCwgKCkgPT4gZDMuZm9ybWF0KFwiLjAlXCIpKTtcbiAgICB0aGlzLmdldERhdGEoKTtcbiAgICAvLyB0aGlzLmxpbmVzKCk7XG4gICAgLy8gdGhpcy5jaXJjbGVzKCk7XG4gICAgLy8gdGhpcy5wZXJjZW50YWdlTGFiZWxzKCk7XG4gICAgLy8gdGhpcy5sYWJlbFRvcChcIkhhcHBpbmVzcyBSYW5raW5nXCIpO1xuICAgIC8vIHRoaXMuZ3JpZExpbmVzKHRoaXMueFNjYWxlLCBcImF4aXNCb3R0b21cIik7XG4gICAgLy8gdGhpcy5ncmlkTGluZXModGhpcy55U2NhbGUsIFwiYXhpc1JpZ2h0XCIpO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgZDMuanNvbihcIi9kaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIHRoYXQuc2V0RGF0YShkYXRhKTtcbiAgICAgIC8vIHRoYXQuc2V0UmFkaXVzKCk7XG4gICAgICAvLyB0aGF0LmxpbmVzKCk7XG4gICAgICB0aGF0LmNpcmNsZXMoKTtcbiAgICAgIC8vIHRoYXQudG9vbHRpcHMoKTtcbiAgICAgIC8vIHRoYXQucGVyY2VudGFnZUxhYmVscygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gc2V0UmFkaXVzKCkge1xuXG4gIC8vIH1cblxuICBjaXJjbGVzKCkge1xuICAgICAgbGV0IHRvb2x0aXAgPSBkMy5zZWxlY3QoXCJib2R5XCIpXG4gICAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmxhY2tcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjVweFwiKVxuICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAgIC5zdHlsZShcInotaW5kZXhcIiwgXCI5OTk5OTk5OTlcIilcbiAgICAgICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgICAuc3R5bGUoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cbiAgICAgIGxldCBzaG93VG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgdG9vbHRpcFxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMjAwKTtcbiAgICAgICAgdG9vbHRpcFxuICAgICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDxzdHJvbmc+Q291bnRyeTo8L3N0cm9uZz4gJHtkLmNvdW50cnl9ICgke1xuICAgICAgICAgICAgICBkLmNvbnRpbmVudFxuICAgICAgICAgICAgfSk8YnIvPlxuICAgICAgICAgICAgICA8c3Ryb25nPkhhcHBpbmVzcyBSYW5raW5nOjwvc3Ryb25nPiAke2QucmFua2luZ31cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApXG4gICAgICAgICAgLnN0eWxlKFwidG9wXCIsIGQzLm1vdXNlKGQzLmV2ZW50LnRhcmdldClbMV0gKyA4MCArIFwicHhcIilcbiAgICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIGQzLm1vdXNlKGQzLmV2ZW50LnRhcmdldClbMF0gLSA0MCArIFwicHhcIik7XG4gICAgICB9XG5cbiAgICAgIGxldCBtb3ZlVG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgc2hvd1Rvb2x0aXAoZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb3ZlIHRvb2x0aXAnKTtcbiAgICAgICAgdG9vbHRpcFxuICAgICAgICAgIC5zdHlsZShcInRvcFwiLCBkMy5tb3VzZShkMy5ldmVudC50YXJnZXQpWzFdICsgODAgKyBcInB4XCIpXG4gICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5tb3VzZShkMy5ldmVudC50YXJnZXQpWzBdIC0gNDAgKyBcInB4XCIpXG4gICAgICB9XG5cbiAgICAgIGxldCBoaWRlVG9vbHRpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgdG9vbHRpcCcpO1xuICAgICAgICB0b29sdGlwXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgfVxuXG4gICAgdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBgY291bnRyeSAke2QuY2xhc3N9IGNvdW50cnktYnViYmxlYClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQuY29udGluZW50ID09PSBcIkFmcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzdjYmQxZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkFzaWFcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjFmNWFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJOb3J0aCBBbWVyaWNhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjMzAzNDgxXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiU291dGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiI2ZmNWI0NFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIkV1cm9wZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzJmYzVjY1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIFwiLjdcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI0NEQ0RDRFwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnhTY2FsZShkLmdyYXBoR2RwIC8gMTU2KSArIDI1O1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBzaG93VG9vbHRpcClcbiAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBtb3ZlVG9vbHRpcClcbiAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgaGlkZVRvb2x0aXApXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZGVsYXkoKGQsIGkpID0+IGkgKiBBTklNQVRJT05fREVMQVkpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgLmVhc2UoQU5JTUFUSU9OX0VBU0lORylcbiAgICAgIC5hdHRyKFwiclwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQucG9wdWxhdGlvbiA+IDgwMDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAyNTAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiA1MDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAxMDAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiAxMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDE1MDAwMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnlTY2FsZShkLmdyYXBoUmFua2luZyAvIDE1Nik7XG4gICAgICB9KTtcbiAgICAgIFxuICB9XG5cbiAgLy8gdG9vbHRpcHMoKSB7XG4gIC8vICAgbGV0IHRvb2x0aXAgPSB0aGlzLmNoYXJ0XG4gIC8vICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gIC8vICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAvLyAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpXG4gIC8vICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4gIC8vICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAvLyAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJ3aGl0ZVwiKTtcblxuICAvLyAgICAgbGV0IHNob3dUb29sdGlwID0gZCA9PiB7XG4gIC8vICAgICAgIHRvb2x0aXBcbiAgLy8gICAgICAgICAudHJhbnNpdGlvbigpXG4gIC8vICAgICAgICAgLmR1cmF0aW9uKDIwMCk7XG4gIC8vICAgICAgIHRvb2x0aXBcbiAgLy8gICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gIC8vICAgICAgICAgLmh0bWwoXG4gIC8vICAgICAgICAgICBgXG4gIC8vICAgICAgICAgICAgIENvdW50cnk6ICR7ZC5jb3VudHJ5fTxici8+XG4gIC8vICAgICAgICAgICAgIENvbnRpbmVudDogJHtkLmNvbnRpbmVudH08YnIvPlxuICAvLyAgICAgICAgICAgICBIYXBwaW5lc3MgUmFua2luZzogJHtkLnJhbmtpbmd9PGJyLz5cbiAgLy8gICAgICAgICAgICAgU29jaWFsIFN1cHBvcnQ6ICR7ZC5zb2NpYWxTdXBwb3J0fTxici8+XG4gIC8vICAgICAgICAgICAgIEZyZWVkb206ICR7ZC5mcmVlZG9tfTxici8+XG4gIC8vICAgICAgICAgICAgIEdlbmVyb3NpdHk6ICR7ZC5nZW5lcm9zaXR5fTxici8+XG4gIC8vICAgICAgICAgICAgIEdEUCBQZXIgQ2FwaXRhOiAke2QuZ2RwfTxici8+XG4gIC8vICAgICAgICAgICAgIExpZmUgRXhwZWN0YW5jeTogJHtkLmxpZmVFeHBlY3RhbmN5fTxici8+XG4gIC8vICAgICAgICAgICBgXG4gIC8vICAgICAgICAgKVxuICAvLyAgICAgICAgIC5zdHlsZShcImxlZnRcIiwgZDMubW91c2UodGhpcylbMF0gKyAzMCArIFwicHhcIilcbiAgLy8gICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZDMubW91c2UodGhpcylbMV0gKyAzMCArIFwicHhcIik7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGxldCBtb3ZlVG9vbHRpcCA9IGQgPT4ge1xuICAvLyAgICAgICB0b29sdGlwXG4gIC8vICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMubW91c2UodGhpcylbMF0gKyAzMCkgKyBcInB4XCIpXG4gIC8vICAgICAgICAgLnN0eWxlKFwidG9wXCIsIChkMy5tb3VzZSh0aGlzKVsxXSArIDMwKSArIFwicHhcIilcbiAgLy8gICAgIH1cblxuICAvLyAgICAgbGV0IGhpZGVUb29sdGlwID0gZCA9PiB7XG4gIC8vICAgICAgIHRvb2x0aXBcbiAgLy8gICAgICAgICAudHJhbnNpdGlvbigpXG4gIC8vICAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgLy8gICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG4gIC8vICAgICB9XG5cbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JsZEdyYXBoOyJdLCJzb3VyY2VSb290IjoiIn0=