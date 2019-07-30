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
    this.getData();
    this.setLabels();
    this.data = null;
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
    key: "getData",
    value: function getData() {
      // this.data = CITIES;
      var that = this;
      d3.json("/dist/data/countries.json").then(function (data) {
        that.setData(data);
      });
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
      var yLabel = this.chart.append("g").append("text").attr("transform", "rotate(-90)").attr("y", -65).attr("x", -350).attr("font-size", "20px").attr("text-anchor", "middle").text("Life Expectancy (Years)");
    }
  }, {
    key: "gridLines",
    value: function gridLines(scale, position) {
      var ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      this.chart.append("g").attr("class", "grid").call(d3[position])().scale(scale).tickSize(_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"], 0, 0).tickFormat("").ticks(ticks);
    }
  }, {
    key: "rectangleLabels",
    value: function rectangleLabels(text) {
      var _this = this;

      this.chart.selectAll().data(this.sortedData).enter().append("text").attr("class", function (d) {
        return "city ".concat(d["class"], " bar-label city-data-toggle");
      }).attr("x", 5).attr("y", function (d) {
        return _this.yScale(d.city) - 2;
      }).style("fill", "#fff").text(function (d, i) {
        if (typeof text === "string") {
          return d[text];
        } else {
          return text.call(d, i);
        }
      }).style("opacity", 0);
    }
  }, {
    key: "labelTop",
    value: function labelTop(text) {
      this.chart.append("text").attr("class", "label-text").attr("text-anchor", "middle").attr("x", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2).attr("y", -20).text(text);
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
var HEIGHT = 700;
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


document.addEventListener("DOMContentLoaded", function () {
  new _world_graph__WEBPACK_IMPORTED_MODULE_1__["default"]("svg.graph"); // new Filter;
});

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

    _this.circles();

    _this.percentageLabels();

    _this.labelTop("Happiness Ranking");

    _this.gridLines(_this.xScale, "axisBottom");

    _this.gridLines(_this.yScale, "axisRight");

    return _this;
  }

  _createClass(WorldGraph, [{
    key: "lines",
    value: function lines() {
      var _this2 = this;

      var line = d3.line().x(function (d) {
        return _this2.xScale(d.ethnicity);
      }).y(function (d) {
        return _this2.yScale(d.percentage);
      });
      this.chart.selectAll(".line").data(Object.values(this.data)).enter().append("path").attr("transform", "translate(25, 5)").attr("class", function (d) {
        return "line city ".concat(d["class"]);
      }).attr("d", function (d) {
        return line(d.diversity);
      }).style("stroke", function (d) {
        return d.color;
      }).style("stroke-width", 2).style("stroke-linecap", "round");
    }
  }, {
    key: "circles",
    value: function circles() {
      var _this3 = this;

      this.chart.selectAll().data(Object.values(this.data)).enter().append("g").attr("class", function (d) {
        return "city ".concat(d["class"]);
      }).attr("fill", function (d) {
        return d.color;
      }).selectAll().data(function (d) {
        return d.diversity;
      }).enter().append("circle").attr("cx", function (d) {
        return _this3.xScale(d.ethnicity) + 25;
      }).transition().delay(function (d, i) {
        return i * ANIMATION_DELAY;
      }).duration(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DURATION"]).ease(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_EASING"]).attr("r", 3).attr("cy", function (d) {
        return _this3.yScale(d.percentage);
      });
    }
  }, {
    key: "percentageLabels",
    value: function percentageLabels() {
      var _this4 = this;

      this.chart.selectAll().data(function () {
        return Object.values(_this4.data);
      }).enter().append("g").attr("class", function (d) {
        return "city ".concat(d["class"], " city-data-toggle");
      }).selectAll(".line-point").data(function (d) {
        return d.diversity;
      }).enter().append("text").attr("text-anchor", "middle").text(function (d) {
        return d3.format(".0%")(d.percentage);
      }).attr("x", function (d) {
        return _this4.xScale(d.ethnicity) + 25;
      }).attr("y", function (d) {
        return _this4.yScale(d.percentage) - 10;
      }).style("fill", "white");
    }
  }]);

  return WorldGraph;
}(_chart__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (WorldGraph);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkX2dyYXBoLmpzIl0sIm5hbWVzIjpbIkNoYXJ0Iiwic2VsZWN0b3IiLCJvcHRpb25zIiwic2V0Q2hhcnQiLCJnZXREYXRhIiwic2V0TGFiZWxzIiwiZGF0YSIsInRvcE9mZnNldCIsImxlZnRPZmZzZXQiLCJzdmciLCJkMyIsInNlbGVjdCIsImF0dHIiLCJIRUlHSFQiLCJNQVJHSU5TIiwiV0lEVEgiLCJjaGFydCIsImFwcGVuZCIsInRoYXQiLCJqc29uIiwidGhlbiIsInNldERhdGEiLCJ0aWNrcyIsInRpY2tGb3JtYXQiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwiZG9tYWluIiwieEF4aXNDYWxsIiwiYXhpc0JvdHRvbSIsImZvcm1hdCIsImNhbGwiLCJ5U2NhbGUiLCJwYWRkaW5nIiwiYXhpc0xlZnQiLCJ4TGFiZWwiLCJ0ZXh0IiwieUxhYmVsIiwic2NhbGUiLCJwb3NpdGlvbiIsInRpY2tTaXplIiwic2VsZWN0QWxsIiwic29ydGVkRGF0YSIsImVudGVyIiwiZCIsImNpdHkiLCJzdHlsZSIsImkiLCJQTEFOTyIsIlBMQU5PX0NJVFkiLCJQTEFOT19DTEFTUyIsIlBMQU5PX0NPTE9SIiwiSVJWSU5FIiwiSVJWSU5FX0NJVFkiLCJJUlZJTkVfQ0xBU1MiLCJJUlZJTkVfQ09MT1IiLCJNQURJU09OIiwiTUFESVNPTl9DSVRZIiwiTUFESVNPTl9DTEFTUyIsIk1BRElTT05fQ09MT1IiLCJGUkVNT05UIiwiRlJFTU9OVF9DSVRZIiwiRlJFTU9OVF9DTEFTUyIsIkZSRU1PTlRfQ09MT1IiLCJIVU5USU5HVE9OX0JFQUNIIiwiSFVOVElOR1RPTl9CRUFDSF9DSVRZIiwiSFVOVElOR1RPTl9CRUFDSF9DTEFTUyIsIkhVTlRJTkdUT05fQkVBQ0hfQ09MT1IiLCJGQVJHTyIsIkZBUkdPX0NJVFkiLCJGQVJHT19DTEFTUyIsIkZBUkdPX0NPTE9SIiwiR1JBTkRfUFJBSVJJRSIsIkdSQU5EX1BSQUlSSUVfQ0lUWSIsIkdSQU5EX1BSQUlSSUVfQ0xBU1MiLCJHUkFORF9QUkFJUklFX0NPTE9SIiwiU0FOX0pPU0UiLCJTQU5fSk9TRV9DSVRZIiwiU0FOX0pPU0VfQ0xBU1MiLCJTQU5fSk9TRV9DT0xPUiIsIlNDT1RUU0RBTEUiLCJTQ09UVFNEQUxFX0NJVFkiLCJTQ09UVFNEQUxFX0NMQVNTIiwiU0NPVFRTREFMRV9DT0xPUiIsIlNBTl9GUkFOQ0lTQ08iLCJTQU5fRlJBTkNJU0NPX0NJVFkiLCJTQU5fRlJBTkNJU0NPX0NMQVNTIiwiU0FOX0ZSQU5DSVNDT19DT0xPUiIsIkJJU01BUkNLIiwiQklTTUFSQ0tfQ0lUWSIsIkJJU01BUkNLX0NMQVNTIiwiQklTTUFSQ0tfQ09MT1IiLCJPVkVSTEFORF9QQVJLIiwiT1ZFUkxBTkRfUEFSS19DSVRZIiwiT1ZFUkxBTkRfUEFSS19DTEFTUyIsIk9WRVJMQU5EX1BBUktfQ09MT1IiLCJTQU5UQV9ST1NBIiwiU0FOVEFfUk9TQV9DSVRZIiwiU0FOVEFfUk9TQV9DTEFTUyIsIlNBTlRBX1JPU0FfQ09MT1IiLCJBVVNUSU4iLCJBVVNUSU5fQ0lUWSIsIkFVU1RJTl9DTEFTUyIsIkFVU1RJTl9DT0xPUiIsIlNJT1VYX0ZBTExTIiwiU0lPVVhfRkFMTFNfQ0lUWSIsIlNJT1VYX0ZBTExTX0NMQVNTIiwiU0lPVVhfRkFMTFNfQ09MT1IiLCJQRUFSTF9DSVRZIiwiUEVBUkxfQ0lUWV9DSVRZIiwiUEVBUkxfQ0lUWV9DTEFTUyIsIlBFQVJMX0NJVFlfQ09MT1IiLCJHTEVOREFMRSIsIkdMRU5EQUxFX0NJVFkiLCJHTEVOREFMRV9DTEFTUyIsIkdMRU5EQUxFX0NPTE9SIiwiU0FOX0RJRUdPIiwiU0FOX0RJRUdPX0NJVFkiLCJTQU5fRElFR09fQ0xBU1MiLCJTQU5fRElFR09fQ09MT1IiLCJTVF9QQVVMIiwiU1RfUEFVTF9DSVRZIiwiU1RfUEFVTF9DTEFTUyIsIlNUX1BBVUxfQ09MT1IiLCJDSEFSTEVTVE9OIiwiQ0hBUkxFU1RPTl9DSVRZIiwiQ0hBUkxFU1RPTl9DTEFTUyIsIkNIQVJMRVNUT05fQ09MT1IiLCJHSUxCRVJUIiwiR0lMQkVSVF9DSVRZIiwiR0lMQkVSVF9DTEFTUyIsIkdJTEJFUlRfQ09MT1IiLCJBTkFIRUlNIiwiQU5BSEVJTV9DSVRZIiwiQU5BSEVJTV9DTEFTUyIsIkFOQUhFSU1fQ09MT1IiLCJSQUxFSUdIIiwiUkFMRUlHSF9DSVRZIiwiUkFMRUlHSF9DTEFTUyIsIlJBTEVJR0hfQ09MT1IiLCJDQVBFX0NPUkFMIiwiQ0FQRV9DT1JBTF9DSVRZIiwiQ0FQRV9DT1JBTF9DTEFTUyIsIkNBUEVfQ09SQUxfQ09MT1IiLCJDRURBUl9SQVBJRFMiLCJDRURBUl9SQVBJRFNfQ0lUWSIsIkNFREFSX1JBUElEU19DTEFTUyIsIkNFREFSX1JBUElEU19DT0xPUiIsIkNJVElFUyIsImNvbnN0YW50IiwiY29sb3IiLCJlbW90aW9uYWxXZWxsYmVpbmciLCJpbmNvbWVFbXBsb3ltZW50IiwiY29tbXVuaXR5RW52aXJvbm1lbnQiLCJ4IiwieSIsImhhcHBpbmVzc1Njb3JlIiwicmFua2luZyIsIkFOSU1BVElPTl9EVVJBVElPTiIsIkFOSU1BVElPTl9ERUxBWSIsIkFOSU1BVElPTl9FQVNJTkciLCJlYXNlUG9seSIsIkZpbHRlciIsImZpbHRlckRhdGEiLCJ0b29sdGlwIiwib24iLCJjbGFzc05hbWUiLCJzcGxpdCIsImpvaW4iLCJhbGxPdGhlckNpdHlEYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsImh0bWwiLCJtYWluSGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImFsbENpdHlEYXRhIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIldvcmxkR3JhcGgiLCJ4QXhpcyIsInlBeGlzIiwiY2lyY2xlcyIsInBlcmNlbnRhZ2VMYWJlbHMiLCJsYWJlbFRvcCIsImdyaWRMaW5lcyIsImxpbmUiLCJldGhuaWNpdHkiLCJwZXJjZW50YWdlIiwiT2JqZWN0IiwidmFsdWVzIiwiZGl2ZXJzaXR5IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJlYXNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0lBU01BLEs7OztBQUNKLGlCQUFZQyxRQUFaLEVBQXNCQyxPQUF0QixFQUErQjtBQUFBOztBQUM3QixTQUFLQyxRQUFMLENBQWNGLFFBQWQsRUFBd0JDLE9BQXhCO0FBQ0EsU0FBS0UsT0FBTDtBQUNBLFNBQUtDLFNBQUw7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNEOzs7OzZCQUVRTCxRLEVBQXFEO0FBQUEsVUFBM0NDLE9BQTJDLHVFQUFqQztBQUFFSyxpQkFBUyxFQUFFLENBQWI7QUFBZ0JDLGtCQUFVLEVBQUU7QUFBNUIsT0FBaUM7QUFDNUQsVUFBTUMsR0FBRyxHQUFHQyxFQUFFLENBQ1hDLE1BRFMsQ0FDRlYsUUFERSxFQUVUVyxJQUZTLENBRUosUUFGSSxFQUVNQyxpREFBTSxHQUFHQyxrREFBTyxHQUFHLENBRnpCLEVBR1RGLElBSFMsQ0FHSixPQUhJLEVBR0tHLGdEQUFLLEdBQUdELGtEQUFPLEdBQUcsQ0FIdkIsQ0FBWjtBQUlBLFdBQUtFLEtBQUwsR0FBYVAsR0FBRyxDQUNiUSxNQURVLENBQ0gsR0FERyxFQUVWTCxJQUZVLENBR1QsV0FIUyxzQkFJSUUsa0RBQU8sR0FBR1osT0FBTyxDQUFDTSxVQUp0QixlQUlxQ00sa0RBQU8sR0FBRyxDQUFWLEdBQzVDWixPQUFPLENBQUNLLFNBTEQsT0FBYjtBQU9EOzs7OEJBRVM7QUFDUjtBQUNBLFVBQUlXLElBQUksR0FBRyxJQUFYO0FBQ0FSLFFBQUUsQ0FBQ1MsSUFBSCxDQUFRLDJCQUFSLEVBQXFDQyxJQUFyQyxDQUEwQyxVQUFBZCxJQUFJLEVBQUk7QUFDaERZLFlBQUksQ0FBQ0csT0FBTCxDQUFhZixJQUFiO0FBQ0QsT0FGRDtBQUdEOzs7NEJBRU9BLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7NEJBRXdDO0FBQUEsVUFBbkNnQixLQUFtQyx1RUFBM0IsRUFBMkI7QUFBQSxVQUF2QkMsVUFBdUIsdUVBQVYsWUFBTSxDQUFFLENBQUU7QUFDdkMsV0FBS0MsTUFBTCxHQUFjZCxFQUFFLENBQ2JlLFdBRFcsR0FFWEMsS0FGVyxDQUVMLENBQUMsQ0FBRCxFQUFJWCxnREFBSixDQUZLLEVBR1hZLE1BSFcsQ0FHSixDQUFDLENBQUQsRUFBSSxDQUFKLENBSEksQ0FBZDtBQUlBLFVBQUlDLFNBQVMsR0FBR2xCLEVBQUUsQ0FDZm1CLFVBRGEsQ0FDRixLQUFLTCxNQURILEVBRWJGLEtBRmEsQ0FFUEEsS0FGTyxFQUdiQyxVQUhhLENBR0ZiLEVBQUUsQ0FBQ29CLE1BQUgsQ0FBVSxLQUFWLENBSEUsQ0FBaEI7QUFJQSxXQUFLZCxLQUFMLENBQ0dDLE1BREgsQ0FDVSxHQURWLEVBRUdMLElBRkgsQ0FFUSxXQUZSLHlCQUVxQ0MsaURBRnJDLFFBR0drQixJQUhILENBR1FILFNBSFI7QUFJRDs7OzBCQUVLRCxNLEVBQVFLLE0sRUFBMEM7QUFBQSxVQUFsQ1YsS0FBa0MsdUVBQTFCLENBQTBCO0FBQUEsVUFBdkJDLFVBQXVCLHVFQUFWLFlBQU0sQ0FBRSxDQUFFOztBQUN0RCxVQUFJUyxNQUFNLEtBQUssV0FBZixFQUE0QjtBQUMxQixhQUFLQSxNQUFMLEdBQWN0QixFQUFFLENBQUNzQixNQUFELENBQUYsR0FDWEwsTUFEVyxDQUNKQSxNQURJLEVBRVhELEtBRlcsQ0FFTCxDQUFDLENBQUQsRUFBSWIsaURBQUosQ0FGSyxFQUdYb0IsT0FIVyxDQUdILEdBSEcsQ0FBZDtBQUlELE9BTEQsTUFLTztBQUNMLGFBQUtELE1BQUwsR0FBY3RCLEVBQUUsQ0FBQ3NCLE1BQUQsQ0FBRixHQUNYTCxNQURXLENBQ0pBLE1BREksRUFFWEQsS0FGVyxDQUVMLENBQUMsQ0FBRCxFQUFJYixpREFBSixDQUZLLENBQWQ7QUFHRDs7QUFFRCxXQUFLRyxLQUFMLENBQVdDLE1BQVgsQ0FBa0IsR0FBbEIsRUFBdUJjLElBQXZCLENBQ0VyQixFQUFFLENBQ0N3QixRQURILENBQ1ksS0FBS0YsTUFEakIsRUFFR1YsS0FGSCxDQUVTQSxLQUZULEVBR0dDLFVBSEgsQ0FHY0EsVUFBVSxFQUh4QixDQURGO0FBTUQ7OztnQ0FFVztBQUNWO0FBQ0EsVUFBSVksTUFBTSxHQUFHLEtBQUtuQixLQUFMLENBQ1ZDLE1BRFUsQ0FDSCxHQURHLEVBRVZBLE1BRlUsQ0FFSCxNQUZHLEVBR1ZMLElBSFUsQ0FHTCxHQUhLLEVBR0FDLGlEQUFNLEdBQUcsRUFIVCxFQUlWRCxJQUpVLENBSUwsR0FKSyxFQUlBRyxnREFBSyxHQUFHLENBSlIsRUFLVkgsSUFMVSxDQUtMLFdBTEssRUFLUSxNQUxSLEVBTVZBLElBTlUsQ0FNTCxhQU5LLEVBTVUsUUFOVixFQU9Wd0IsSUFQVSxDQU9MLG9CQVBLLENBQWI7QUFRQSxVQUFJQyxNQUFNLEdBQUcsS0FBS3JCLEtBQUwsQ0FDVkMsTUFEVSxDQUNILEdBREcsRUFFVkEsTUFGVSxDQUVILE1BRkcsRUFHVkwsSUFIVSxDQUdMLFdBSEssRUFHUSxhQUhSLEVBSVZBLElBSlUsQ0FJTCxHQUpLLEVBSUEsQ0FBQyxFQUpELEVBS1ZBLElBTFUsQ0FLTCxHQUxLLEVBS0EsQ0FBQyxHQUxELEVBTVZBLElBTlUsQ0FNTCxXQU5LLEVBTVEsTUFOUixFQU9WQSxJQVBVLENBT0wsYUFQSyxFQU9VLFFBUFYsRUFRVndCLElBUlUsQ0FRTCx5QkFSSyxDQUFiO0FBU0Q7Ozs4QkFFU0UsSyxFQUFPQyxRLEVBQXFCO0FBQUEsVUFBWGpCLEtBQVcsdUVBQUgsQ0FBRztBQUNwQyxXQUFLTixLQUFMLENBQ0dDLE1BREgsQ0FDVSxHQURWLEVBRUdMLElBRkgsQ0FFUSxPQUZSLEVBRWlCLE1BRmpCLEVBR0dtQixJQUhILENBR1FyQixFQUFFLENBQUM2QixRQUFELENBSFYsSUFJR0QsS0FKSCxDQUlTQSxLQUpULEVBS0dFLFFBTEgsQ0FLWXpCLGdEQUxaLEVBS21CLENBTG5CLEVBS3NCLENBTHRCLEVBTUdRLFVBTkgsQ0FNYyxFQU5kLEVBT0dELEtBUEgsQ0FPU0EsS0FQVDtBQVFEOzs7b0NBRWVjLEksRUFBTTtBQUFBOztBQUNwQixXQUFLcEIsS0FBTCxDQUNHeUIsU0FESCxHQUVHbkMsSUFGSCxDQUVRLEtBQUtvQyxVQUZiLEVBR0dDLEtBSEgsR0FJRzFCLE1BSkgsQ0FJVSxNQUpWLEVBS0dMLElBTEgsQ0FLUSxPQUxSLEVBS2lCLFVBQUFnQyxDQUFDO0FBQUEsOEJBQVlBLENBQUMsU0FBYjtBQUFBLE9BTGxCLEVBTUdoQyxJQU5ILENBTVEsR0FOUixFQU1hLENBTmIsRUFPR0EsSUFQSCxDQU9RLEdBUFIsRUFPYSxVQUFBZ0MsQ0FBQztBQUFBLGVBQUksS0FBSSxDQUFDWixNQUFMLENBQVlZLENBQUMsQ0FBQ0MsSUFBZCxJQUFzQixDQUExQjtBQUFBLE9BUGQsRUFRR0MsS0FSSCxDQVFTLE1BUlQsRUFRaUIsTUFSakIsRUFTR1YsSUFUSCxDQVNRLFVBQUNRLENBQUQsRUFBSUcsQ0FBSixFQUFVO0FBQ2QsWUFBSSxPQUFPWCxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLGlCQUFPUSxDQUFDLENBQUNSLElBQUQsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPQSxJQUFJLENBQUNMLElBQUwsQ0FBVWEsQ0FBVixFQUFhRyxDQUFiLENBQVA7QUFDRDtBQUNGLE9BZkgsRUFnQkdELEtBaEJILENBZ0JTLFNBaEJULEVBZ0JvQixDQWhCcEI7QUFpQkQ7Ozs2QkFFUVYsSSxFQUFNO0FBQ2IsV0FBS3BCLEtBQUwsQ0FDR0MsTUFESCxDQUNVLE1BRFYsRUFFR0wsSUFGSCxDQUVRLE9BRlIsRUFFaUIsWUFGakIsRUFHR0EsSUFISCxDQUdRLGFBSFIsRUFHdUIsUUFIdkIsRUFJR0EsSUFKSCxDQUlRLEdBSlIsRUFJYUcsZ0RBQUssR0FBRyxDQUpyQixFQUtHSCxJQUxILENBS1EsR0FMUixFQUthLENBQUMsRUFMZCxFQU1Hd0IsSUFOSCxDQU1RQSxJQU5SO0FBT0Q7Ozs7OztBQUdZcEMsb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDN0lBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1nRCxLQUFLLEdBQUcsT0FBZDtBQUNQLElBQU1DLFVBQVUsR0FBRyxPQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxZQUFwQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFwQjtBQUVPLElBQU1DLE1BQU0sR0FBRyxRQUFmO0FBQ1AsSUFBTUMsV0FBVyxHQUFHLFFBQXBCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGFBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQXJCO0FBRU8sSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ1AsSUFBTUMsWUFBWSxHQUFHLFNBQXJCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLGNBQXRCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQXRCO0FBRU8sSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ1AsSUFBTUMsWUFBWSxHQUFHLFNBQXJCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLGNBQXRCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQXRCO0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ1AsSUFBTUMscUJBQXFCLEdBQUcsa0JBQTlCO0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsdUJBQS9CO0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsU0FBL0I7QUFFTyxJQUFNQyxLQUFLLEdBQUcsT0FBZDtBQUNQLElBQU1DLFVBQVUsR0FBRyxPQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxZQUFwQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFwQjtBQUVPLElBQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNQLElBQU1DLGtCQUFrQixHQUFHLGVBQTNCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsb0JBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBNUI7QUFFTyxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDUCxJQUFNQyxhQUFhLEdBQUcsVUFBdEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZUFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBdkI7QUFFTyxJQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDUCxJQUFNQyxlQUFlLEdBQUcsWUFBeEI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxpQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUF6QjtBQUVPLElBQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNQLElBQU1DLGtCQUFrQixHQUFHLGVBQTNCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsb0JBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBNUI7QUFFTyxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDUCxJQUFNQyxhQUFhLEdBQUcsVUFBdEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZUFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBdkI7QUFFTyxJQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDUCxJQUFNQyxrQkFBa0IsR0FBRyxlQUEzQjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLG9CQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLFNBQTVCO0FBRU8sSUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ1AsSUFBTUMsZUFBZSxHQUFHLFlBQXhCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsaUJBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBekI7QUFFTyxJQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUNQLElBQU1DLFdBQVcsR0FBRyxRQUFwQjtBQUNBLElBQU1DLFlBQVksR0FBRyxhQUFyQjtBQUNBLElBQU1DLFlBQVksR0FBRyxTQUFyQjtBQUVPLElBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNQLElBQU1DLGdCQUFnQixHQUFHLGFBQXpCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsa0JBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBMUI7QUFFTyxJQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDUCxJQUFNQyxlQUFlLEdBQUcsWUFBeEI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxpQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUF6QjtBQUVPLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNQLElBQU1DLGFBQWEsR0FBRyxVQUF0QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxlQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxTQUF2QjtBQUVPLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNQLElBQU1DLGNBQWMsR0FBRyxXQUF2QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxnQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBeEI7QUFFTyxJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDUCxJQUFNQyxZQUFZLEdBQUcsU0FBckI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsY0FBdEI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBdEI7QUFFTyxJQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDUCxJQUFNQyxlQUFlLEdBQUcsWUFBeEI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxpQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUF6QjtBQUVPLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNQLElBQU1DLFlBQVksR0FBRyxTQUFyQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxjQUF0QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUF0QjtBQUVPLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNQLElBQU1DLFlBQVksR0FBRyxTQUFyQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxjQUF0QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUF0QjtBQUVPLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNQLElBQU1DLFlBQVksR0FBRyxTQUFyQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxjQUF0QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUF0QjtBQUVPLElBQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNQLElBQU1DLGVBQWUsR0FBRyxZQUF4QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGlCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLFNBQXpCO0FBRU8sSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ1AsSUFBTUMsaUJBQWlCLEdBQUcsY0FBMUI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxtQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUEzQjtBQUVPLElBQU1DLE1BQU0sR0FBRztBQUNwQnBHLE9BQUssRUFBRTtBQUNMSCxRQUFJLEVBQUUsT0FERDtBQUVMd0csWUFBUSxFQUFFckcsS0FGTDtBQUdMLGFBQU9FLFdBSEY7QUFJTG9HLFNBQUssRUFBRW5HLFdBSkY7QUFLTG9HLHNCQUFrQixFQUFFLENBTGY7QUFNTEMsb0JBQWdCLEVBQUUsQ0FOYjtBQU9MQyx3QkFBb0IsRUFBRSxDQVBqQjtBQVFMbEgsWUFBUSxFQUFFO0FBQUVtSCxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUU7QUFBYixLQVJMO0FBU0xDLGtCQUFjLEVBQUUsSUFUWDtBQVVMQyxXQUFPLEVBQUU7QUFWSixHQURhO0FBYXBCekcsUUFBTSxFQUFFO0FBQ05QLFFBQUksRUFBRSxRQURBO0FBRU53RyxZQUFRLEVBQUVqRyxNQUZKO0FBR04sYUFBT0UsWUFIRDtBQUlOZ0csU0FBSyxFQUFFL0YsWUFKRDtBQUtOZ0csc0JBQWtCLEVBQUUsQ0FMZDtBQU1OQyxvQkFBZ0IsRUFBRSxDQU5aO0FBT05DLHdCQUFvQixFQUFFLENBUGhCO0FBUU5sSCxZQUFRLEVBQUU7QUFBRW1ILE9BQUMsRUFBRSxHQUFMO0FBQVVDLE9BQUMsRUFBRTtBQUFiLEtBUko7QUFTTkMsa0JBQWMsRUFBRSxLQVRWO0FBVU5DLFdBQU8sRUFBRTtBQVZILEdBYlk7QUF5QnBCckcsU0FBTyxFQUFFO0FBQ1BYLFFBQUksRUFBRSxTQURDO0FBRVB3RyxZQUFRLEVBQUU3RixPQUZIO0FBR1AsYUFBT0UsYUFIQTtBQUlQNEYsU0FBSyxFQUFFM0YsYUFKQTtBQUtQNEYsc0JBQWtCLEVBQUUsQ0FMYjtBQU1QQyxvQkFBZ0IsRUFBRSxDQU5YO0FBT1BDLHdCQUFvQixFQUFFLENBUGY7QUFRUGxILFlBQVEsRUFBRTtBQUFFbUgsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FSSDtBQVNQQyxrQkFBYyxFQUFFLEtBVFQ7QUFVUEMsV0FBTyxFQUFFO0FBVkYsR0F6Qlc7QUFxQ3BCakcsU0FBTyxFQUFFO0FBQ1BmLFFBQUksRUFBRSxTQURDO0FBRVB3RyxZQUFRLEVBQUV6RixPQUZIO0FBR1AsYUFBT0UsYUFIQTtBQUlQd0YsU0FBSyxFQUFFdkYsYUFKQTtBQUtQd0Ysc0JBQWtCLEVBQUUsQ0FMYjtBQU1QQyxvQkFBZ0IsRUFBRSxFQU5YO0FBT1BDLHdCQUFvQixFQUFFLENBUGY7QUFRUGxILFlBQVEsRUFBRTtBQUFFbUgsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FSSDtBQVNQQyxrQkFBYyxFQUFFLEtBVFQ7QUFVUEMsV0FBTyxFQUFFO0FBVkYsR0FyQ1c7QUFpRHBCN0Ysa0JBQWdCLEVBQUU7QUFDaEJuQixRQUFJLEVBQUUsa0JBRFU7QUFFaEJ3RyxZQUFRLEVBQUVyRixnQkFGTTtBQUdoQixhQUFPRSxzQkFIUztBQUloQm9GLFNBQUssRUFBRW5GLHNCQUpTO0FBS2hCb0Ysc0JBQWtCLEVBQUUsQ0FMSjtBQU1oQkMsb0JBQWdCLEVBQUUsRUFORjtBQU9oQkMsd0JBQW9CLEVBQUUsRUFQTjtBQVFoQmxILFlBQVEsRUFBRTtBQUFFbUgsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FSTTtBQVNoQkMsa0JBQWMsRUFBRSxLQVRBO0FBVWhCQyxXQUFPLEVBQUU7QUFWTyxHQWpERTtBQTZEcEJ6RixPQUFLLEVBQUU7QUFDTHZCLFFBQUksRUFBRSxPQUREO0FBRUx3RyxZQUFRLEVBQUVqRixLQUZMO0FBR0wsYUFBT0UsV0FIRjtBQUlMZ0YsU0FBSyxFQUFFL0UsV0FKRjtBQUtMZ0Ysc0JBQWtCLEVBQUUsQ0FMZjtBQU1MQyxvQkFBZ0IsRUFBRSxFQU5iO0FBT0xDLHdCQUFvQixFQUFFLEVBUGpCO0FBUUxsSCxZQUFRLEVBQUU7QUFBRW1ILE9BQUMsRUFBRSxHQUFMO0FBQVVDLE9BQUMsRUFBRTtBQUFiLEtBUkw7QUFTTEMsa0JBQWMsRUFBRSxLQVRYO0FBVUxDLFdBQU8sRUFBRTtBQVZKLEdBN0RhO0FBeUVwQnJGLGVBQWEsRUFBRTtBQUNiM0IsUUFBSSxFQUFFLGVBRE87QUFFYndHLFlBQVEsRUFBRTdFLGFBRkc7QUFHYixhQUFPRSxtQkFITTtBQUliNEUsU0FBSyxFQUFFM0UsbUJBSk07QUFLYjRFLHNCQUFrQixFQUFFLEVBTFA7QUFNYkMsb0JBQWdCLEVBQUUsRUFOTDtBQU9iQyx3QkFBb0IsRUFBRSxDQVBUO0FBUWJsSCxZQUFRLEVBQUU7QUFBRW1ILE9BQUMsRUFBRSxHQUFMO0FBQVVDLE9BQUMsRUFBRTtBQUFiLEtBUkc7QUFTYkMsa0JBQWMsRUFBRSxJQVRIO0FBVWJDLFdBQU8sRUFBRTtBQVZJLEdBekVLO0FBcUZwQmpGLFVBQVEsRUFBRTtBQUNSL0IsUUFBSSxFQUFFLFVBREU7QUFFUndHLFlBQVEsRUFBRXpFLFFBRkY7QUFHUixhQUFPRSxjQUhDO0FBSVJ3RSxTQUFLLEVBQUV2RSxjQUpDO0FBS1J3RSxzQkFBa0IsRUFBRSxDQUxaO0FBTVJDLG9CQUFnQixFQUFFLEVBTlY7QUFPUkMsd0JBQW9CLEVBQUUsRUFQZDtBQVFSbEgsWUFBUSxFQUFFO0FBQUVtSCxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUU7QUFBYixLQVJGO0FBU1JDLGtCQUFjLEVBQUUsSUFUUjtBQVVSQyxXQUFPLEVBQUU7QUFWRCxHQXJGVTtBQWlHcEI3RSxZQUFVLEVBQUU7QUFDVm5DLFFBQUksRUFBRSxZQURJO0FBRVZ3RyxZQUFRLEVBQUVyRSxVQUZBO0FBR1YsYUFBT0UsZ0JBSEc7QUFJVm9FLFNBQUssRUFBRW5FLGdCQUpHO0FBS1ZvRSxzQkFBa0IsRUFBRSxFQUxWO0FBTVZDLG9CQUFnQixFQUFFLENBTlI7QUFPVkMsd0JBQW9CLEVBQUUsQ0FQWjtBQVFWbEgsWUFBUSxFQUFFO0FBQUVtSCxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUU7QUFBYixLQVJBO0FBU1ZDLGtCQUFjLEVBQUUsS0FUTjtBQVVWQyxXQUFPLEVBQUU7QUFWQyxHQWpHUTtBQTZHcEJ6RSxlQUFhLEVBQUU7QUFDYnZDLFFBQUksRUFBRSxlQURPO0FBRWJ3RyxZQUFRLEVBQUVqRSxhQUZHO0FBR2IsYUFBT0UsbUJBSE07QUFJYmdFLFNBQUssRUFBRS9ELG1CQUpNO0FBS2JnRSxzQkFBa0IsRUFBRSxDQUxQO0FBTWJDLG9CQUFnQixFQUFFLENBTkw7QUFPYkMsd0JBQW9CLEVBQUUsRUFQVDtBQVFibEgsWUFBUSxFQUFFO0FBQUVtSCxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUU7QUFBYixLQVJHO0FBU2JDLGtCQUFjLEVBQUUsS0FUSDtBQVViQyxXQUFPLEVBQUU7QUFWSSxHQTdHSztBQXlIcEJyRSxVQUFRLEVBQUU7QUFDUjNDLFFBQUksRUFBRSxVQURFO0FBRVJ3RyxZQUFRLEVBQUU3RCxRQUZGO0FBR1IsYUFBT0UsY0FIQztBQUlSNEQsU0FBSyxFQUFFM0QsY0FKQztBQUtSNEQsc0JBQWtCLEVBQUUsRUFMWjtBQU1SQyxvQkFBZ0IsRUFBRSxDQU5WO0FBT1JDLHdCQUFvQixFQUFFLEVBUGQ7QUFRUmxILFlBQVEsRUFBRTtBQUFFbUgsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FSRjtBQVNSQyxrQkFBYyxFQUFFLEtBVFI7QUFVUkMsV0FBTyxFQUFFO0FBVkQsR0F6SFU7QUFxSXBCakUsZUFBYSxFQUFFO0FBQ2IvQyxRQUFJLEVBQUUsZUFETztBQUVid0csWUFBUSxFQUFFekQsYUFGRztBQUdiLGFBQU9FLG1CQUhNO0FBSWJ3RCxTQUFLLEVBQUV2RCxtQkFKTTtBQUtid0Qsc0JBQWtCLEVBQUUsRUFMUDtBQU1iQyxvQkFBZ0IsRUFBRSxFQU5MO0FBT2JDLHdCQUFvQixFQUFFLEVBUFQ7QUFRYmxILFlBQVEsRUFBRTtBQUFFbUgsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FSRztBQVNiQyxrQkFBYyxFQUFFLEtBVEg7QUFVYkMsV0FBTyxFQUFFO0FBVkksR0FySUs7QUFpSnBCN0QsWUFBVSxFQUFFO0FBQ1ZuRCxRQUFJLEVBQUUsWUFESTtBQUVWd0csWUFBUSxFQUFFckQsVUFGQTtBQUdWLGFBQU9FLGdCQUhHO0FBSVZvRCxTQUFLLEVBQUVuRCxnQkFKRztBQUtWb0Qsc0JBQWtCLEVBQUUsRUFMVjtBQU1WQyxvQkFBZ0IsRUFBRSxFQU5SO0FBT1ZDLHdCQUFvQixFQUFFLENBUFo7QUFRVmxILFlBQVEsRUFBRTtBQUFFbUgsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FSQTtBQVNWQyxrQkFBYyxFQUFFLEtBVE47QUFVVkMsV0FBTyxFQUFFO0FBVkMsR0FqSlE7QUE2SnBCekQsUUFBTSxFQUFFO0FBQ052RCxRQUFJLEVBQUUsUUFEQTtBQUVOd0csWUFBUSxFQUFFakQsTUFGSjtBQUdOLGFBQU9FLFlBSEQ7QUFJTmdELFNBQUssRUFBRS9DLFlBSkQ7QUFLTmdELHNCQUFrQixFQUFFLENBTGQ7QUFNTkMsb0JBQWdCLEVBQUUsQ0FOWjtBQU9OQyx3QkFBb0IsRUFBRSxFQVBoQjtBQVFObEgsWUFBUSxFQUFFO0FBQUVtSCxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUU7QUFBYixLQVJKO0FBU05DLGtCQUFjLEVBQUUsS0FUVjtBQVVOQyxXQUFPLEVBQUU7QUFWSCxHQTdKWTtBQXlLcEJyRCxhQUFXLEVBQUU7QUFDWDNELFFBQUksRUFBRSxhQURLO0FBRVh3RyxZQUFRLEVBQUU3QyxXQUZDO0FBR1gsYUFBT0UsaUJBSEk7QUFJWDRDLFNBQUssRUFBRTNDLGlCQUpJO0FBS1g0QyxzQkFBa0IsRUFBRSxDQUxUO0FBTVhDLG9CQUFnQixFQUFFLEVBTlA7QUFPWEMsd0JBQW9CLEVBQUUsRUFQWDtBQVFYbEgsWUFBUSxFQUFFO0FBQUVtSCxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUU7QUFBYixLQVJDO0FBU1hDLGtCQUFjLEVBQUUsS0FUTDtBQVVYQyxXQUFPLEVBQUU7QUFWRSxHQXpLTztBQXFMcEJqRCxZQUFVLEVBQUU7QUFDVi9ELFFBQUksRUFBRSxZQURJO0FBRVZ3RyxZQUFRLEVBQUV6QyxVQUZBO0FBR1YsYUFBT0UsZ0JBSEc7QUFJVndDLFNBQUssRUFBRXZDLGdCQUpHO0FBS1Z3QyxzQkFBa0IsRUFBRSxDQUxWO0FBTVZDLG9CQUFnQixFQUFFLEVBTlI7QUFPVkMsd0JBQW9CLEVBQUUsQ0FQWjtBQVFWbEgsWUFBUSxFQUFFO0FBQUVtSCxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUU7QUFBYixLQVJBO0FBU1ZDLGtCQUFjLEVBQUUsS0FUTjtBQVVWQyxXQUFPLEVBQUU7QUFWQyxHQXJMUTtBQWlNcEI3QyxVQUFRLEVBQUU7QUFDUm5FLFFBQUksRUFBRSxVQURFO0FBRVJ3RyxZQUFRLEVBQUVyQyxRQUZGO0FBR1IsYUFBT0UsY0FIQztBQUlSb0MsU0FBSyxFQUFFbkMsY0FKQztBQUtSb0Msc0JBQWtCLEVBQUUsRUFMWjtBQU1SQyxvQkFBZ0IsRUFBRSxFQU5WO0FBT1JDLHdCQUFvQixFQUFFLENBUGQ7QUFRUmxILFlBQVEsRUFBRTtBQUFFbUgsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FSRjtBQVNSQyxrQkFBYyxFQUFFLEtBVFI7QUFVUkMsV0FBTyxFQUFFO0FBVkQsR0FqTVU7QUE2TXBCekMsV0FBUyxFQUFFO0FBQ1R2RSxRQUFJLEVBQUUsV0FERztBQUVUd0csWUFBUSxFQUFFakMsU0FGRDtBQUdULGFBQU9FLGVBSEU7QUFJVGdDLFNBQUssRUFBRS9CLGVBSkU7QUFLVGdDLHNCQUFrQixFQUFFLENBTFg7QUFNVEMsb0JBQWdCLEVBQUUsRUFOVDtBQU9UQyx3QkFBb0IsRUFBRSxFQVBiO0FBUVRsSCxZQUFRLEVBQUU7QUFBRW1ILE9BQUMsRUFBRSxHQUFMO0FBQVVDLE9BQUMsRUFBRTtBQUFiLEtBUkQ7QUFTVEMsa0JBQWMsRUFBRSxLQVRQO0FBVVRDLFdBQU8sRUFBRTtBQVZBLEdBN01TO0FBeU5wQnJDLFNBQU8sRUFBRTtBQUNQM0UsUUFBSSxFQUFFLFVBREM7QUFFUHdHLFlBQVEsRUFBRTdCLE9BRkg7QUFHUCxhQUFPRSxhQUhBO0FBSVA0QixTQUFLLEVBQUUzQixhQUpBO0FBS1A0QixzQkFBa0IsRUFBRSxFQUxiO0FBTVBDLG9CQUFnQixFQUFFLEVBTlg7QUFPUEMsd0JBQW9CLEVBQUUsRUFQZjtBQVFQbEgsWUFBUSxFQUFFO0FBQUVtSCxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUU7QUFBYixLQVJIO0FBU1BDLGtCQUFjLEVBQUUsS0FUVDtBQVVQQyxXQUFPLEVBQUU7QUFWRixHQXpOVztBQXFPcEJqQyxZQUFVLEVBQUU7QUFDVi9FLFFBQUksRUFBRSxZQURJO0FBRVZ3RyxZQUFRLEVBQUV6QixVQUZBO0FBR1YsYUFBT0UsZ0JBSEc7QUFJVndCLFNBQUssRUFBRXZCLGdCQUpHO0FBS1Z3QixzQkFBa0IsRUFBRSxFQUxWO0FBTVZDLG9CQUFnQixFQUFFLENBTlI7QUFPVkMsd0JBQW9CLEVBQUUsQ0FQWjtBQVFWbEgsWUFBUSxFQUFFO0FBQUVtSCxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUU7QUFBYixLQVJBO0FBU1ZDLGtCQUFjLEVBQUUsS0FUTjtBQVVWQyxXQUFPLEVBQUU7QUFWQyxHQXJPUTtBQWlQcEI3QixTQUFPLEVBQUU7QUFDUG5GLFFBQUksRUFBRSxTQURDO0FBRVB3RyxZQUFRLEVBQUVyQixPQUZIO0FBR1AsYUFBT0UsYUFIQTtBQUlQb0IsU0FBSyxFQUFFbkIsYUFKQTtBQUtQb0Isc0JBQWtCLEVBQUUsRUFMYjtBQU1QQyxvQkFBZ0IsRUFBRSxFQU5YO0FBT1BDLHdCQUFvQixFQUFFLENBUGY7QUFRUGxILFlBQVEsRUFBRTtBQUFFbUgsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FSSDtBQVNQQyxrQkFBYyxFQUFFLEtBVFQ7QUFVUEMsV0FBTyxFQUFFO0FBVkYsR0FqUFc7QUE2UHBCekIsU0FBTyxFQUFFO0FBQ1B2RixRQUFJLEVBQUUsU0FEQztBQUVQd0csWUFBUSxFQUFFakIsT0FGSDtBQUdQLGFBQU9FLGFBSEE7QUFJUGdCLFNBQUssRUFBRWYsYUFKQTtBQUtQZ0Isc0JBQWtCLEVBQUUsRUFMYjtBQU1QQyxvQkFBZ0IsRUFBRSxFQU5YO0FBT1BDLHdCQUFvQixFQUFFLEVBUGY7QUFRUGxILFlBQVEsRUFBRTtBQUFFbUgsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FSSDtBQVNQQyxrQkFBYyxFQUFFLEtBVFQ7QUFVUEMsV0FBTyxFQUFFO0FBVkYsR0E3UFc7QUF5UXBCckIsU0FBTyxFQUFFO0FBQ1AzRixRQUFJLEVBQUUsU0FEQztBQUVQd0csWUFBUSxFQUFFYixPQUZIO0FBR1AsYUFBT0UsYUFIQTtBQUlQWSxTQUFLLEVBQUVYLGFBSkE7QUFLUFksc0JBQWtCLEVBQUUsQ0FMYjtBQU1QQyxvQkFBZ0IsRUFBRSxFQU5YO0FBT1BDLHdCQUFvQixFQUFFLEVBUGY7QUFRUGxILFlBQVEsRUFBRTtBQUFFbUgsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FSSDtBQVNQQyxrQkFBYyxFQUFFLEtBVFQ7QUFVUEMsV0FBTyxFQUFFO0FBVkYsR0F6UVc7QUFxUnBCakIsWUFBVSxFQUFFO0FBQ1YvRixRQUFJLEVBQUUsWUFESTtBQUVWd0csWUFBUSxFQUFFVCxVQUZBO0FBR1YsYUFBT0UsZ0JBSEc7QUFJVlEsU0FBSyxFQUFFUCxnQkFKRztBQUtWUSxzQkFBa0IsRUFBRSxFQUxWO0FBTVZDLG9CQUFnQixFQUFFLEVBTlI7QUFPVkMsd0JBQW9CLEVBQUUsQ0FQWjtBQVFWbEgsWUFBUSxFQUFFO0FBQUVtSCxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUU7QUFBYixLQVJBO0FBU1ZDLGtCQUFjLEVBQUUsS0FUTjtBQVVWQyxXQUFPLEVBQUU7QUFWQyxHQXJSUTtBQWlTcEJiLGNBQVksRUFBRTtBQUNabkcsUUFBSSxFQUFFLGNBRE07QUFFWndHLFlBQVEsRUFBRUwsWUFGRTtBQUdaLGFBQU9FLGtCQUhLO0FBSVpJLFNBQUssRUFBRUgsa0JBSks7QUFLWkksc0JBQWtCLEVBQUUsRUFMUjtBQU1aQyxvQkFBZ0IsRUFBRSxFQU5OO0FBT1pDLHdCQUFvQixFQUFFLEVBUFY7QUFRWmxILFlBQVEsRUFBRTtBQUFFbUgsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FSRTtBQVNaQyxrQkFBYyxFQUFFLElBVEo7QUFVWkMsV0FBTyxFQUFFO0FBVkc7QUFqU00sQ0FBZjtBQStTQSxJQUFNQyxrQkFBa0IsR0FBRyxJQUEzQjtBQUNBLElBQU1DLGVBQWUsR0FBRyxDQUF4QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHdEosRUFBRSxDQUFDdUosUUFBNUI7QUFFQSxJQUFNbEosS0FBSyxHQUFHLElBQWQ7QUFDQSxJQUFNRixNQUFNLEdBQUcsR0FBZjtBQUNBLElBQU1DLE9BQU8sR0FBRyxHQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbGJEb0osTTs7O0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLQyxVQUFMO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxVQUFNQyxPQUFPLEdBQUcxSixFQUFFLENBQ2ZDLE1BRGEscUJBRWJNLE1BRmEsQ0FFTixLQUZNLEVBR2I2QixLQUhhLENBR1AsU0FITyxFQUdJLENBSEosRUFJYmxDLElBSmEsQ0FJUixPQUpRLEVBSUMsU0FKRCxFQUtia0MsS0FMYSxDQUtQLGtCQUxPLEVBS2EsT0FMYixFQU1iQSxLQU5hLENBTVAsUUFOTyxFQU1HLE9BTkgsRUFPYkEsS0FQYSxDQU9QLGNBUE8sRUFPUyxLQVBULEVBUWJBLEtBUmEsQ0FRUCxlQVJPLEVBUVUsS0FSVixFQVNiQSxLQVRhLENBU1AsU0FUTyxFQVNJLE1BVEosQ0FBaEI7QUFXQXBDLFFBQUUsQ0FBQytCLFNBQUgsQ0FBYSxPQUFiLEVBQ0c0SCxFQURILENBQ00sV0FETixFQUNtQixVQUFDekgsQ0FBRCxFQUFJRyxDQUFKLEVBQVU7QUFDekIsWUFBSXVILFNBQUo7O0FBQ0EsWUFBSSxPQUFPMUgsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCMEgsbUJBQVMsa0JBQVcxSCxDQUFDLENBQUMySCxLQUFGLENBQVEsR0FBUixFQUFhQyxJQUFiLENBQWtCLEdBQWxCLENBQVgsQ0FBVDtBQUNELFNBRkQsTUFFTyxJQUFJNUgsQ0FBQyxDQUFDdEMsSUFBTixFQUFZO0FBQ2pCZ0ssbUJBQVMsR0FBRzFILENBQUMsQ0FBQ3RDLElBQUYsU0FBWjtBQUNELFNBRk0sTUFFQTtBQUNMZ0ssbUJBQVMsR0FBRzFILENBQUMsU0FBYjtBQUNEOztBQUNELFlBQU02SCxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxzQkFBd0NMLFNBQXhDLE9BQXpCO0FBQ0FHLHdCQUFnQixDQUFDRyxPQUFqQixDQUF5QixVQUFBdEssSUFBSSxFQUFJO0FBQy9CQSxjQUFJLENBQUN1SyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsUUFBbkI7QUFDRCxTQUZELEVBVnlCLENBY3pCOztBQUNBVixlQUFPLENBQ0p0SCxLQURILENBQ1MsU0FEVCxFQUNvQixDQURwQixFQUVHQSxLQUZILENBRVMsUUFGVCxFQUVtQixPQUZuQixFQUdHaUksSUFISCxtSUFPVW5JLENBQUMsQ0FBQ0MsSUFQWiw0R0FVVUQsQ0FBQyxDQUFDaUgsT0FWWixxSEFhVWpILENBQUMsQ0FBQ2dILGNBYlosbUlBZ0JVaEgsQ0FBQyxDQUFDMkcsa0JBaEJaLG1IQW1CVTNHLENBQUMsQ0FBQzRHLGdCQW5CWix1SEFzQlU1RyxDQUFDLENBQUM2RyxvQkF0Qlo7QUEyQkEsWUFBTXVCLFVBQVUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLGVBQXZCLENBQW5CO0FBQ0FELGtCQUFVLENBQUNFLFlBQVgsQ0FBd0IsT0FBeEIsbUJBQTJDdEksQ0FBQyxDQUFDMEcsS0FBN0M7QUFDRCxPQTdDSCxFQThDR2UsRUE5Q0gsQ0E4Q00sWUE5Q04sRUE4Q29CLFlBQU07QUFDdEIsWUFBTWMsV0FBVyxHQUFHVCxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLENBQXBCO0FBQ0FRLG1CQUFXLENBQUNQLE9BQVosQ0FBb0IsVUFBQXRLLElBQUksRUFBSTtBQUMxQkEsY0FBSSxDQUFDdUssU0FBTCxDQUFlTyxNQUFmLENBQXNCLFFBQXRCO0FBQ0QsU0FGRDtBQUlBLFlBQU1KLFVBQVUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLGVBQXZCLENBQW5CO0FBQ0FELGtCQUFVLENBQUNFLFlBQVgsQ0FBd0IsT0FBeEI7QUFDRCxPQXRESDtBQXVERDs7Ozs7O0FBR1loQixxRUFBZixFOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSUFRLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBSUMsb0RBQUosQ0FBZSxXQUFmLEVBRGtELENBRWxEO0FBQ0QsQ0FIRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQU9BOztJQUVNQSxVOzs7OztBQUNKLHNCQUFZckwsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUNwQixvRkFBTUEsUUFBTjtBQUNBLFVBQUtRLEdBQUwsR0FBV0MsRUFBRSxDQUFDQyxNQUFILENBQVVWLFFBQVYsQ0FBWDs7QUFDQSxVQUFLc0wsS0FBTDs7QUFDQSxVQUFLQyxLQUFMLENBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFYLEVBQW1CLGFBQW5CLEVBQWtDLEVBQWxDLEVBQXNDO0FBQUEsYUFBTTlLLEVBQUUsQ0FBQ29CLE1BQUgsQ0FBVSxLQUFWLENBQU47QUFBQSxLQUF0Qzs7QUFDQSxVQUFLMkosT0FBTDs7QUFDQSxVQUFLQyxnQkFBTDs7QUFDQSxVQUFLQyxRQUFMLENBQWMsbUJBQWQ7O0FBQ0EsVUFBS0MsU0FBTCxDQUFlLE1BQUtwSyxNQUFwQixFQUE0QixZQUE1Qjs7QUFDQSxVQUFLb0ssU0FBTCxDQUFlLE1BQUs1SixNQUFwQixFQUE0QixXQUE1Qjs7QUFUb0I7QUFVckI7Ozs7NEJBRU87QUFBQTs7QUFDTixVQUFJNkosSUFBSSxHQUFHbkwsRUFBRSxDQUNWbUwsSUFEUSxHQUVSbkMsQ0FGUSxDQUVOLFVBQUE5RyxDQUFDO0FBQUEsZUFBSSxNQUFJLENBQUNwQixNQUFMLENBQVlvQixDQUFDLENBQUNrSixTQUFkLENBQUo7QUFBQSxPQUZLLEVBR1JuQyxDQUhRLENBR04sVUFBQS9HLENBQUM7QUFBQSxlQUFJLE1BQUksQ0FBQ1osTUFBTCxDQUFZWSxDQUFDLENBQUNtSixVQUFkLENBQUo7QUFBQSxPQUhLLENBQVg7QUFLQSxXQUFLL0ssS0FBTCxDQUNHeUIsU0FESCxDQUNhLE9BRGIsRUFFR25DLElBRkgsQ0FFUTBMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUszTCxJQUFuQixDQUZSLEVBR0dxQyxLQUhILEdBSUcxQixNQUpILENBSVUsTUFKVixFQUtHTCxJQUxILENBS1EsV0FMUixFQUtxQixrQkFMckIsRUFNR0EsSUFOSCxDQU1RLE9BTlIsRUFNaUIsVUFBQWdDLENBQUM7QUFBQSxtQ0FBaUJBLENBQUMsU0FBbEI7QUFBQSxPQU5sQixFQU9HaEMsSUFQSCxDQU9RLEdBUFIsRUFPYSxVQUFBZ0MsQ0FBQztBQUFBLGVBQUlpSixJQUFJLENBQUNqSixDQUFDLENBQUNzSixTQUFILENBQVI7QUFBQSxPQVBkLEVBUUdwSixLQVJILENBUVMsUUFSVCxFQVFtQixVQUFBRixDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDMEcsS0FBTjtBQUFBLE9BUnBCLEVBU0d4RyxLQVRILENBU1MsY0FUVCxFQVN5QixDQVR6QixFQVVHQSxLQVZILENBVVMsZ0JBVlQsRUFVMkIsT0FWM0I7QUFXRDs7OzhCQUVTO0FBQUE7O0FBQ1IsV0FBSzlCLEtBQUwsQ0FDR3lCLFNBREgsR0FFR25DLElBRkgsQ0FFUTBMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUszTCxJQUFuQixDQUZSLEVBR0dxQyxLQUhILEdBSUcxQixNQUpILENBSVUsR0FKVixFQUtHTCxJQUxILENBS1EsT0FMUixFQUtpQixVQUFBZ0MsQ0FBQztBQUFBLDhCQUFZQSxDQUFDLFNBQWI7QUFBQSxPQUxsQixFQU1HaEMsSUFOSCxDQU1RLE1BTlIsRUFNZ0IsVUFBQWdDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUMwRyxLQUFOO0FBQUEsT0FOakIsRUFPRzdHLFNBUEgsR0FRR25DLElBUkgsQ0FRUSxVQUFBc0MsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ3NKLFNBQU47QUFBQSxPQVJULEVBU0d2SixLQVRILEdBVUcxQixNQVZILENBVVUsUUFWVixFQVdHTCxJQVhILENBV1EsSUFYUixFQVdjLFVBQUFnQyxDQUFDO0FBQUEsZUFBSSxNQUFJLENBQUNwQixNQUFMLENBQVlvQixDQUFDLENBQUNrSixTQUFkLElBQTJCLEVBQS9CO0FBQUEsT0FYZixFQVlHSyxVQVpILEdBYUdDLEtBYkgsQ0FhUyxVQUFDeEosQ0FBRCxFQUFJRyxDQUFKO0FBQUEsZUFBVUEsQ0FBQyxHQUFHZ0gsZUFBZDtBQUFBLE9BYlQsRUFjR3NDLFFBZEgsQ0FjWXZDLDZEQWRaLEVBZUd3QyxJQWZILENBZVF0QywyREFmUixFQWdCR3BKLElBaEJILENBZ0JRLEdBaEJSLEVBZ0JhLENBaEJiLEVBaUJHQSxJQWpCSCxDQWlCUSxJQWpCUixFQWlCYyxVQUFBZ0MsQ0FBQztBQUFBLGVBQUksTUFBSSxDQUFDWixNQUFMLENBQVlZLENBQUMsQ0FBQ21KLFVBQWQsQ0FBSjtBQUFBLE9BakJmO0FBa0JEOzs7dUNBRWtCO0FBQUE7O0FBQ2pCLFdBQUsvSyxLQUFMLENBQ0d5QixTQURILEdBRUduQyxJQUZILENBRVE7QUFBQSxlQUFNMEwsTUFBTSxDQUFDQyxNQUFQLENBQWMsTUFBSSxDQUFDM0wsSUFBbkIsQ0FBTjtBQUFBLE9BRlIsRUFHR3FDLEtBSEgsR0FJRzFCLE1BSkgsQ0FJVSxHQUpWLEVBS0dMLElBTEgsQ0FLUSxPQUxSLEVBS2lCLFVBQUFnQyxDQUFDO0FBQUEsOEJBQVlBLENBQUMsU0FBYjtBQUFBLE9BTGxCLEVBTUdILFNBTkgsQ0FNYSxhQU5iLEVBT0duQyxJQVBILENBT1EsVUFBQXNDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNzSixTQUFOO0FBQUEsT0FQVCxFQVFHdkosS0FSSCxHQVNHMUIsTUFUSCxDQVNVLE1BVFYsRUFVR0wsSUFWSCxDQVVRLGFBVlIsRUFVdUIsUUFWdkIsRUFXR3dCLElBWEgsQ0FXUSxVQUFBUSxDQUFDO0FBQUEsZUFBSWxDLEVBQUUsQ0FBQ29CLE1BQUgsQ0FBVSxLQUFWLEVBQWlCYyxDQUFDLENBQUNtSixVQUFuQixDQUFKO0FBQUEsT0FYVCxFQVlHbkwsSUFaSCxDQVlRLEdBWlIsRUFZYSxVQUFBZ0MsQ0FBQztBQUFBLGVBQUksTUFBSSxDQUFDcEIsTUFBTCxDQUFZb0IsQ0FBQyxDQUFDa0osU0FBZCxJQUEyQixFQUEvQjtBQUFBLE9BWmQsRUFhR2xMLElBYkgsQ0FhUSxHQWJSLEVBYWEsVUFBQWdDLENBQUM7QUFBQSxlQUFJLE1BQUksQ0FBQ1osTUFBTCxDQUFZWSxDQUFDLENBQUNtSixVQUFkLElBQTRCLEVBQWhDO0FBQUEsT0FiZCxFQWNHakosS0FkSCxDQWNTLE1BZFQsRUFjaUIsT0FkakI7QUFlRDs7OztFQXJFc0I5Qyw4Qzs7QUF3RVZzTCx5RUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7XG4gIEhFSUdIVCxcbiAgTUFSR0lOUyxcbiAgV0lEVEgsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbiAgQU5JTUFUSU9OX0RFTEFZLFxuICBBTklNQVRJT05fRUFTSU5HXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyk7XG4gICAgdGhpcy5nZXREYXRhKCk7XG4gICAgdGhpcy5zZXRMYWJlbHMoKTtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICB9XG5cbiAgc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMgPSB7IHRvcE9mZnNldDogMCwgbGVmdE9mZnNldDogMCB9KSB7XG4gICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgIC5zZWxlY3Qoc2VsZWN0b3IpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBIRUlHSFQgKyBNQVJHSU5TICogMilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggKyBNQVJHSU5TICogMik7XG4gICAgdGhpcy5jaGFydCA9IHN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFxuICAgICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgICBgdHJhbnNsYXRlKCR7TUFSR0lOUyArIG9wdGlvbnMubGVmdE9mZnNldH0sICR7TUFSR0lOUyAvIDIgK1xuICAgICAgICAgIG9wdGlvbnMudG9wT2Zmc2V0fSlgXG4gICAgICApO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICAvLyB0aGlzLmRhdGEgPSBDSVRJRVM7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGQzLmpzb24oXCIvZGlzdC9kYXRhL2NvdW50cmllcy5qc29uXCIpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGF0LnNldERhdGEoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgeEF4aXModGlja3MgPSAyMCwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgdGhpcy54U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgLmRvbWFpbihbMCwgMV0pO1xuICAgIGxldCB4QXhpc0NhbGwgPSBkM1xuICAgICAgLmF4aXNCb3R0b20odGhpcy54U2NhbGUpXG4gICAgICAudGlja3ModGlja3MpXG4gICAgICAudGlja0Zvcm1hdChkMy5mb3JtYXQoXCIuMCVcIikpO1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7SEVJR0hUfSlgKVxuICAgICAgLmNhbGwoeEF4aXNDYWxsKTtcbiAgfVxuXG4gIHlBeGlzKGRvbWFpbiwgeVNjYWxlLCB0aWNrcyA9IDUsIHRpY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIGlmICh5U2NhbGUgPT09IFwic2NhbGVCYW5kXCIpIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIEhFSUdIVF0pXG4gICAgICAgIC5wYWRkaW5nKDAuOCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIEhFSUdIVF0pO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnQuYXBwZW5kKFwiZ1wiKS5jYWxsKFxuICAgICAgZDNcbiAgICAgICAgLmF4aXNMZWZ0KHRoaXMueVNjYWxlKVxuICAgICAgICAudGlja3ModGlja3MpXG4gICAgICAgIC50aWNrRm9ybWF0KHRpY2tGb3JtYXQoKSlcbiAgICApO1xuICB9XG5cbiAgc2V0TGFiZWxzKCkge1xuICAgIC8vIExhYmVsc1xuICAgIHZhciB4TGFiZWwgPSB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieVwiLCBIRUlHSFQgKyA1MClcbiAgICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIwcHhcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC50ZXh0KFwiR0RQIFBlciBDYXBpdGEgKCQpXCIpO1xuICAgIHZhciB5TGFiZWwgPSB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgIC5hdHRyKFwieVwiLCAtNjUpXG4gICAgICAuYXR0cihcInhcIiwgLTM1MClcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjBweFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJMaWZlIEV4cGVjdGFuY3kgKFllYXJzKVwiKTtcbiAgfVxuXG4gIGdyaWRMaW5lcyhzY2FsZSwgcG9zaXRpb24sIHRpY2tzID0gNSkge1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JpZFwiKVxuICAgICAgLmNhbGwoZDNbcG9zaXRpb25dKSgpXG4gICAgICAuc2NhbGUoc2NhbGUpXG4gICAgICAudGlja1NpemUoV0lEVEgsIDAsIDApXG4gICAgICAudGlja0Zvcm1hdChcIlwiKVxuICAgICAgLnRpY2tzKHRpY2tzKTtcbiAgfVxuXG4gIHJlY3RhbmdsZUxhYmVscyh0ZXh0KSB7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAuZGF0YSh0aGlzLnNvcnRlZERhdGEpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBgY2l0eSAke2QuY2xhc3N9IGJhci1sYWJlbCBjaXR5LWRhdGEtdG9nZ2xlYClcbiAgICAgIC5hdHRyKFwieFwiLCA1KVxuICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4gdGhpcy55U2NhbGUoZC5jaXR5KSAtIDIpXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiI2ZmZlwiKVxuICAgICAgLnRleHQoKGQsIGkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgcmV0dXJuIGRbdGV4dF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRleHQuY2FsbChkLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gIH1cblxuICBsYWJlbFRvcCh0ZXh0KSB7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbC10ZXh0XCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAuYXR0cihcInhcIiwgV0lEVEggLyAyKVxuICAgICAgLmF0dHIoXCJ5XCIsIC0yMClcbiAgICAgIC50ZXh0KHRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIiwiZXhwb3J0IGNvbnN0IFBMQU5PID0gXCJQTEFOT1wiO1xuY29uc3QgUExBTk9fQ0lUWSA9IFwiUGxhbm9cIjtcbmNvbnN0IFBMQU5PX0NMQVNTID0gXCJjaXR5LVBsYW5vXCI7XG5jb25zdCBQTEFOT19DT0xPUiA9IFwiIzUxZWFlYVwiO1xuXG5leHBvcnQgY29uc3QgSVJWSU5FID0gXCJJUlZJTkVcIjtcbmNvbnN0IElSVklORV9DSVRZID0gXCJJUlZJTkVcIjtcbmNvbnN0IElSVklORV9DTEFTUyA9IFwiY2l0eS1JcnZpbmVcIjtcbmNvbnN0IElSVklORV9DT0xPUiA9IFwiI2ZmOWQ3NlwiO1xuXG5leHBvcnQgY29uc3QgTUFESVNPTiA9IFwiTUFESVNPTlwiO1xuY29uc3QgTUFESVNPTl9DSVRZID0gXCJNQURJU09OXCI7XG5jb25zdCBNQURJU09OX0NMQVNTID0gXCJjaXR5LU1hZGlzb25cIjtcbmNvbnN0IE1BRElTT05fQ09MT1IgPSBcIiNmYjM1NjlcIjtcblxuZXhwb3J0IGNvbnN0IEZSRU1PTlQgPSBcIkZSRU1PTlRcIjtcbmNvbnN0IEZSRU1PTlRfQ0lUWSA9IFwiRlJFTU9OVFwiO1xuY29uc3QgRlJFTU9OVF9DTEFTUyA9IFwiY2l0eS1GcmVtb250XCI7XG5jb25zdCBGUkVNT05UX0NPTE9SID0gXCIjZmE4NmJlXCI7XG5cbmV4cG9ydCBjb25zdCBIVU5USU5HVE9OX0JFQUNIID0gXCJIVU5USU5HVE9OX0JFQUNIXCI7XG5jb25zdCBIVU5USU5HVE9OX0JFQUNIX0NJVFkgPSBcIkhVTlRJTkdUT05fQkVBQ0hcIjtcbmNvbnN0IEhVTlRJTkdUT05fQkVBQ0hfQ0xBU1MgPSBcImNpdHktSHVudGluZ3Rvbi1CZWFjaFwiO1xuY29uc3QgSFVOVElOR1RPTl9CRUFDSF9DT0xPUiA9IFwiI2EyNzVlM1wiO1xuXG5leHBvcnQgY29uc3QgRkFSR08gPSBcIkZBUkdPXCI7XG5jb25zdCBGQVJHT19DSVRZID0gXCJGQVJHT1wiO1xuY29uc3QgRkFSR09fQ0xBU1MgPSBcImNpdHktRmFyZ29cIjtcbmNvbnN0IEZBUkdPX0NPTE9SID0gXCIjZmYxZjVhXCI7XG5cbmV4cG9ydCBjb25zdCBHUkFORF9QUkFJUklFID0gXCJHUkFORF9QUkFJUklFXCI7XG5jb25zdCBHUkFORF9QUkFJUklFX0NJVFkgPSBcIkdSQU5EX1BSQUlSSUVcIjtcbmNvbnN0IEdSQU5EX1BSQUlSSUVfQ0xBU1MgPSBcImNpdHktR3JhbmQtUHJhaXJpZVwiO1xuY29uc3QgR1JBTkRfUFJBSVJJRV9DT0xPUiA9IFwiIzY5MDBmZlwiO1xuXG5leHBvcnQgY29uc3QgU0FOX0pPU0UgPSBcIlNBTl9KT1NFXCI7XG5jb25zdCBTQU5fSk9TRV9DSVRZID0gXCJTQU5fSk9TRVwiO1xuY29uc3QgU0FOX0pPU0VfQ0xBU1MgPSBcImNpdHktU2FuLUpvc2VcIjtcbmNvbnN0IFNBTl9KT1NFX0NPTE9SID0gXCIjZmZkNzAwXCI7XG5cbmV4cG9ydCBjb25zdCBTQ09UVFNEQUxFID0gXCJTQ09UVFNEQUxFXCI7XG5jb25zdCBTQ09UVFNEQUxFX0NJVFkgPSBcIlNDT1RUU0RBTEVcIjtcbmNvbnN0IFNDT1RUU0RBTEVfQ0xBU1MgPSBcImNpdHktU2NvdHRzZGFsZVwiO1xuY29uc3QgU0NPVFRTREFMRV9DT0xPUiA9IFwiI2ZmNjEzOFwiO1xuXG5leHBvcnQgY29uc3QgU0FOX0ZSQU5DSVNDTyA9IFwiU0FOX0ZSQU5DSVNDT1wiO1xuY29uc3QgU0FOX0ZSQU5DSVNDT19DSVRZID0gXCJTQU5fRlJBTkNJU0NPXCI7XG5jb25zdCBTQU5fRlJBTkNJU0NPX0NMQVNTID0gXCJjaXR5LVNhbi1GcmFuY2lzY29cIjtcbmNvbnN0IFNBTl9GUkFOQ0lTQ09fQ09MT1IgPSBcIiMzMDM0ODFcIjtcblxuZXhwb3J0IGNvbnN0IEJJU01BUkNLID0gXCJCSVNNQVJDS1wiO1xuY29uc3QgQklTTUFSQ0tfQ0lUWSA9IFwiQklTTUFSQ0tcIjtcbmNvbnN0IEJJU01BUkNLX0NMQVNTID0gXCJjaXR5LUJpc21hcmNrXCI7XG5jb25zdCBCSVNNQVJDS19DT0xPUiA9IFwiIzdjYmQxZVwiO1xuXG5leHBvcnQgY29uc3QgT1ZFUkxBTkRfUEFSSyA9IFwiT1ZFUkxBTkRfUEFSS1wiO1xuY29uc3QgT1ZFUkxBTkRfUEFSS19DSVRZID0gXCJPVkVSTEFORF9QQVJLXCI7XG5jb25zdCBPVkVSTEFORF9QQVJLX0NMQVNTID0gXCJjaXR5LU92ZXJsYW5kLVBhcmtcIjtcbmNvbnN0IE9WRVJMQU5EX1BBUktfQ09MT1IgPSBcIiMwMDkzNzhcIjtcblxuZXhwb3J0IGNvbnN0IFNBTlRBX1JPU0EgPSBcIlNBTlRBX1JPU0FcIjtcbmNvbnN0IFNBTlRBX1JPU0FfQ0lUWSA9IFwiU0FOVEFfUk9TQVwiO1xuY29uc3QgU0FOVEFfUk9TQV9DTEFTUyA9IFwiY2l0eS1TYW50YS1Sb3NhXCI7XG5jb25zdCBTQU5UQV9ST1NBX0NPTE9SID0gXCIjZjYwYzg2XCI7XG5cbmV4cG9ydCBjb25zdCBBVVNUSU4gPSBcIkFVU1RJTlwiO1xuY29uc3QgQVVTVElOX0NJVFkgPSBcIkFVU1RJTlwiO1xuY29uc3QgQVVTVElOX0NMQVNTID0gXCJjaXR5LUF1c3RpblwiO1xuY29uc3QgQVVTVElOX0NPTE9SID0gXCIjZjlkMDBmXCI7XG5cbmV4cG9ydCBjb25zdCBTSU9VWF9GQUxMUyA9IFwiU0lPVVhfRkFMTFNcIjtcbmNvbnN0IFNJT1VYX0ZBTExTX0NJVFkgPSBcIlNJT1VYX0ZBTExTXCI7XG5jb25zdCBTSU9VWF9GQUxMU19DTEFTUyA9IFwiY2l0eS1TaW91eC1GYWxsc1wiO1xuY29uc3QgU0lPVVhfRkFMTFNfQ09MT1IgPSBcIiMzMDM4NDFcIjtcblxuZXhwb3J0IGNvbnN0IFBFQVJMX0NJVFkgPSBcIlBFQVJMX0NJVFlcIjtcbmNvbnN0IFBFQVJMX0NJVFlfQ0lUWSA9IFwiUEVBUkxfQ0lUWVwiO1xuY29uc3QgUEVBUkxfQ0lUWV9DTEFTUyA9IFwiY2l0eS1QZWFybC1DaXR5XCI7XG5jb25zdCBQRUFSTF9DSVRZX0NPTE9SID0gXCIjOTZjZDM5XCI7XG5cbmV4cG9ydCBjb25zdCBHTEVOREFMRSA9IFwiR0xFTkRBTEVcIjtcbmNvbnN0IEdMRU5EQUxFX0NJVFkgPSBcIkdMRU5EQUxFXCI7XG5jb25zdCBHTEVOREFMRV9DTEFTUyA9IFwiY2l0eS1HbGVuZGFsZVwiO1xuY29uc3QgR0xFTkRBTEVfQ09MT1IgPSBcIiMyZmM1Y2NcIjtcblxuZXhwb3J0IGNvbnN0IFNBTl9ESUVHTyA9IFwiU0FOX0RJRUdPXCI7XG5jb25zdCBTQU5fRElFR09fQ0lUWSA9IFwiU0FOX0RJRUdPXCI7XG5jb25zdCBTQU5fRElFR09fQ0xBU1MgPSBcImNpdHktU2FuLURpZWdvXCI7XG5jb25zdCBTQU5fRElFR09fQ09MT1IgPSBcIiNmZjViNDRcIjtcblxuZXhwb3J0IGNvbnN0IFNUX1BBVUwgPSBcIlNUX1BBVUxcIjtcbmNvbnN0IFNUX1BBVUxfQ0lUWSA9IFwiU1RfUEFVTFwiO1xuY29uc3QgU1RfUEFVTF9DTEFTUyA9IFwiY2l0eS1TdC1QYXVsXCI7XG5jb25zdCBTVF9QQVVMX0NPTE9SID0gXCIjYmY2OGY2XCI7XG5cbmV4cG9ydCBjb25zdCBDSEFSTEVTVE9OID0gXCJDSEFSTEVTVE9OXCI7XG5jb25zdCBDSEFSTEVTVE9OX0NJVFkgPSBcIkNIQVJMRVNUT05cIjtcbmNvbnN0IENIQVJMRVNUT05fQ0xBU1MgPSBcImNpdHktQ2hhcmxlc3RvblwiO1xuY29uc3QgQ0hBUkxFU1RPTl9DT0xPUiA9IFwiI2Y5MjcyN1wiO1xuXG5leHBvcnQgY29uc3QgR0lMQkVSVCA9IFwiR0lMQkVSVFwiO1xuY29uc3QgR0lMQkVSVF9DSVRZID0gXCJHSUxCRVJUXCI7XG5jb25zdCBHSUxCRVJUX0NMQVNTID0gXCJjaXR5LUdpbGJlcnRcIjtcbmNvbnN0IEdJTEJFUlRfQ09MT1IgPSBcIiNmZjA1OTJcIjtcblxuZXhwb3J0IGNvbnN0IEFOQUhFSU0gPSBcIkFOQUhFSU1cIjtcbmNvbnN0IEFOQUhFSU1fQ0lUWSA9IFwiQU5BSEVJTVwiO1xuY29uc3QgQU5BSEVJTV9DTEFTUyA9IFwiY2l0eS1BbmFoZWltXCI7XG5jb25zdCBBTkFIRUlNX0NPTE9SID0gXCIjYTU4YmZmXCI7XG5cbmV4cG9ydCBjb25zdCBSQUxFSUdIID0gXCJSQUxFSUdIXCI7XG5jb25zdCBSQUxFSUdIX0NJVFkgPSBcIlJBTEVJR0hcIjtcbmNvbnN0IFJBTEVJR0hfQ0xBU1MgPSBcImNpdHktUmFsZWlnaFwiO1xuY29uc3QgUkFMRUlHSF9DT0xPUiA9IFwiIzAwOTM3OFwiO1xuXG5leHBvcnQgY29uc3QgQ0FQRV9DT1JBTCA9IFwiQ0FQRV9DT1JBTFwiO1xuY29uc3QgQ0FQRV9DT1JBTF9DSVRZID0gXCJDQVBFX0NPUkFMXCI7XG5jb25zdCBDQVBFX0NPUkFMX0NMQVNTID0gXCJjaXR5LUNhcGUtQ29yYWxcIjtcbmNvbnN0IENBUEVfQ09SQUxfQ09MT1IgPSBcIiNmYzM0NWNcIjtcblxuZXhwb3J0IGNvbnN0IENFREFSX1JBUElEUyA9IFwiQ0VEQVJfUkFQSURTXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ0lUWSA9IFwiQ0VEQVJfUkFQSURTXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ0xBU1MgPSBcImNpdHktQ2VkYXItUmFwaWRzXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ09MT1IgPSBcIiMzZDZjYjlcIjtcblxuZXhwb3J0IGNvbnN0IENJVElFUyA9IHtcbiAgUExBTk86IHtcbiAgICBjaXR5OiBcIlBsYW5vXCIsXG4gICAgY29uc3RhbnQ6IFBMQU5PLFxuICAgIGNsYXNzOiBQTEFOT19DTEFTUyxcbiAgICBjb2xvcjogUExBTk9fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA0LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDMsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQsXG4gICAgcG9zaXRpb246IHsgeDogNTI2LCB5OiAzOTAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNzIuMyxcbiAgICByYW5raW5nOiAxXG4gIH0sXG4gIElSVklORToge1xuICAgIGNpdHk6IFwiSXJ2aW5lXCIsXG4gICAgY29uc3RhbnQ6IElSVklORSxcbiAgICBjbGFzczogSVJWSU5FX0NMQVNTLFxuICAgIGNvbG9yOiBJUlZJTkVfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA4LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDYsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDMsXG4gICAgcG9zaXRpb246IHsgeDogMTgwLCB5OiAzMDAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNzEuODYsXG4gICAgcmFua2luZzogMlxuICB9LFxuICBNQURJU09OOiB7XG4gICAgY2l0eTogXCJNYWRpc29uXCIsXG4gICAgY29uc3RhbnQ6IE1BRElTT04sXG4gICAgY2xhc3M6IE1BRElTT05fQ0xBU1MsXG4gICAgY29sb3I6IE1BRElTT05fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDgsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQsXG4gICAgcG9zaXRpb246IHsgeDogNjQwLCB5OiAxNjAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNzEuODEsXG4gICAgcmFua2luZzogM1xuICB9LFxuICBGUkVNT05UOiB7XG4gICAgY2l0eTogXCJGcmVtb250XCIsXG4gICAgY29uc3RhbnQ6IEZSRU1PTlQsXG4gICAgY2xhc3M6IEZSRU1PTlRfQ0xBU1MsXG4gICAgY29sb3I6IEZSRU1PTlRfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA1LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDIwLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxLFxuICAgIHBvc2l0aW9uOiB7IHg6IDE1MSwgeTogMjI1IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDcxLjE3LFxuICAgIHJhbmtpbmc6IDRcbiAgfSxcbiAgSFVOVElOR1RPTl9CRUFDSDoge1xuICAgIGNpdHk6IFwiSHVudGluZ3RvbiBCZWFjaFwiLFxuICAgIGNvbnN0YW50OiBIVU5USU5HVE9OX0JFQUNILFxuICAgIGNsYXNzOiBIVU5USU5HVE9OX0JFQUNIX0NMQVNTLFxuICAgIGNvbG9yOiBIVU5USU5HVE9OX0JFQUNIX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMyxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyNSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTUsXG4gICAgcG9zaXRpb246IHsgeDogMTU5LCB5OiAyOTAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjkuNzQsXG4gICAgcmFua2luZzogNVxuICB9LFxuICBGQVJHTzoge1xuICAgIGNpdHk6IFwiRmFyZ29cIixcbiAgICBjb25zdGFudDogRkFSR08sXG4gICAgY2xhc3M6IEZBUkdPX0NMQVNTLFxuICAgIGNvbG9yOiBGQVJHT19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDksXG4gICAgaW5jb21lRW1wbG95bWVudDogMTEsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDEzLFxuICAgIHBvc2l0aW9uOiB7IHg6IDQ5OCwgeTogOTQgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjkuNTcsXG4gICAgcmFua2luZzogNlxuICB9LFxuICBHUkFORF9QUkFJUklFOiB7XG4gICAgY2l0eTogXCJHcmFuZCBQcmFpcmllXCIsXG4gICAgY29uc3RhbnQ6IEdSQU5EX1BSQUlSSUUsXG4gICAgY2xhc3M6IEdSQU5EX1BSQUlSSUVfQ0xBU1MsXG4gICAgY29sb3I6IEdSQU5EX1BSQUlSSUVfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAxOSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMyxcbiAgICBwb3NpdGlvbjogeyB4OiA1MjUsIHk6IDQxMCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OS4zLFxuICAgIHJhbmtpbmc6IDdcbiAgfSxcbiAgU0FOX0pPU0U6IHtcbiAgICBjaXR5OiBcIlNhbiBKb3NlXCIsXG4gICAgY29uc3RhbnQ6IFNBTl9KT1NFLFxuICAgIGNsYXNzOiBTQU5fSk9TRV9DTEFTUyxcbiAgICBjb2xvcjogU0FOX0pPU0VfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDEwLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyNCxcbiAgICBwb3NpdGlvbjogeyB4OiAxNDAsIHk6IDI0MCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OC45LFxuICAgIHJhbmtpbmc6IDhcbiAgfSxcbiAgU0NPVFRTREFMRToge1xuICAgIGNpdHk6IFwiU2NvdHRzZGFsZVwiLFxuICAgIGNvbnN0YW50OiBTQ09UVFNEQUxFLFxuICAgIGNsYXNzOiBTQ09UVFNEQUxFX0NMQVNTLFxuICAgIGNvbG9yOiBTQ09UVFNEQUxFX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMjUsXG4gICAgaW5jb21lRW1wbG95bWVudDogNyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMSxcbiAgICBwb3NpdGlvbjogeyB4OiAyNzAsIHk6IDM0MSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OC4yNCxcbiAgICByYW5raW5nOiA5XG4gIH0sXG4gIFNBTl9GUkFOQ0lTQ086IHtcbiAgICBjaXR5OiBcIlNhbiBGcmFuY2lzY29cIixcbiAgICBjb25zdGFudDogU0FOX0ZSQU5DSVNDTyxcbiAgICBjbGFzczogU0FOX0ZSQU5DSVNDT19DTEFTUyxcbiAgICBjb2xvcjogU0FOX0ZSQU5DSVNDT19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDIsXG4gICAgaW5jb21lRW1wbG95bWVudDogMSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNjksXG4gICAgcG9zaXRpb246IHsgeDogMTM2LCB5OiAyMTIgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuNTMsXG4gICAgcmFua2luZzogMTBcbiAgfSxcbiAgQklTTUFSQ0s6IHtcbiAgICBjaXR5OiBcIkJpc21hcmNrXCIsXG4gICAgY29uc3RhbnQ6IEJJU01BUkNLLFxuICAgIGNsYXNzOiBCSVNNQVJDS19DTEFTUyxcbiAgICBjb2xvcjogQklTTUFSQ0tfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxNCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyNSxcbiAgICBwb3NpdGlvbjogeyB4OiA0NzgsIHk6IDEwNiB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4zOCxcbiAgICByYW5raW5nOiAxMVxuICB9LFxuICBPVkVSTEFORF9QQVJLOiB7XG4gICAgY2l0eTogXCJPdmVybGFuZCBQYXJrXCIsXG4gICAgY29uc3RhbnQ6IE9WRVJMQU5EX1BBUkssXG4gICAgY2xhc3M6IE9WRVJMQU5EX1BBUktfQ0xBU1MsXG4gICAgY29sb3I6IE9WRVJMQU5EX1BBUktfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzMSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTQsXG4gICAgcG9zaXRpb246IHsgeDogNTcwLCB5OiAyNzggfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuMzcsXG4gICAgcmFua2luZzogMTJcbiAgfSxcbiAgU0FOVEFfUk9TQToge1xuICAgIGNpdHk6IFwiU2FudGEgUm9zYVwiLFxuICAgIGNvbnN0YW50OiBTQU5UQV9ST1NBLFxuICAgIGNsYXNzOiBTQU5UQV9ST1NBX0NMQVNTLFxuICAgIGNvbG9yOiBTQU5UQV9ST1NBX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTMsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjksXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUsXG4gICAgcG9zaXRpb246IHsgeDogMTMyLCB5OiAxOTYgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuMTgsXG4gICAgcmFua2luZzogMTNcbiAgfSxcbiAgQVVTVElOOiB7XG4gICAgY2l0eTogXCJBdXN0aW5cIixcbiAgICBjb25zdGFudDogQVVTVElOLFxuICAgIGNsYXNzOiBBVVNUSU5fQ0xBU1MsXG4gICAgY29sb3I6IEFVU1RJTl9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDgsXG4gICAgaW5jb21lRW1wbG95bWVudDogNCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNDQsXG4gICAgcG9zaXRpb246IHsgeDogNDk3LCB5OiA0MzAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuMTYsXG4gICAgcmFua2luZzogMTRcbiAgfSxcbiAgU0lPVVhfRkFMTFM6IHtcbiAgICBjaXR5OiBcIlNpb3V4IEZhbGxzXCIsXG4gICAgY29uc3RhbnQ6IFNJT1VYX0ZBTExTLFxuICAgIGNsYXNzOiBTSU9VWF9GQUxMU19DTEFTUyxcbiAgICBjb2xvcjogU0lPVVhfRkFMTFNfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA2LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDM3LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA1MixcbiAgICBwb3NpdGlvbjogeyB4OiA1MDAsIHk6IDE2OCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ni45NyxcbiAgICByYW5raW5nOiAxNVxuICB9LFxuICBQRUFSTF9DSVRZOiB7XG4gICAgY2l0eTogXCJQZWFybCBDaXR5XCIsXG4gICAgY29uc3RhbnQ6IFBFQVJMX0NJVFksXG4gICAgY2xhc3M6IFBFQVJMX0NJVFlfQ0xBU1MsXG4gICAgY29sb3I6IFBFQVJMX0NJVFlfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDgxLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA4LFxuICAgIHBvc2l0aW9uOiB7IHg6IDM1MCwgeTogNDkxIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY2Ljc3LFxuICAgIHJhbmtpbmc6IDE2XG4gIH0sXG4gIEdMRU5EQUxFOiB7XG4gICAgY2l0eTogXCJHbGVuZGFsZVwiLFxuICAgIGNvbnN0YW50OiBHTEVOREFMRSxcbiAgICBjbGFzczogR0xFTkRBTEVfQ0xBU1MsXG4gICAgY29sb3I6IEdMRU5EQUxFX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTUsXG4gICAgaW5jb21lRW1wbG95bWVudDogNTYsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDcsXG4gICAgcG9zaXRpb246IHsgeDogMTY3LCB5OiAyNzIgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjYuMjUsXG4gICAgcmFua2luZzogMTdcbiAgfSxcbiAgU0FOX0RJRUdPOiB7XG4gICAgY2l0eTogXCJTYW4gRGllZ29cIixcbiAgICBjb25zdGFudDogU0FOX0RJRUdPLFxuICAgIGNsYXNzOiBTQU5fRElFR09fQ0xBU1MsXG4gICAgY29sb3I6IFNBTl9ESUVHT19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDQsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjAsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDI1LFxuICAgIHBvc2l0aW9uOiB7IHg6IDE4NywgeTogMzIxIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY2LjAxLFxuICAgIHJhbmtpbmc6IDE4XG4gIH0sXG4gIFNUX1BBVUw6IHtcbiAgICBjaXR5OiBcIlN0LiBQYXVsXCIsXG4gICAgY29uc3RhbnQ6IFNUX1BBVUwsXG4gICAgY2xhc3M6IFNUX1BBVUxfQ0xBU1MsXG4gICAgY29sb3I6IFNUX1BBVUxfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzOCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMzYsXG4gICAgcG9zaXRpb246IHsgeDogNTkwLCB5OiAxMzMgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjUuNzksXG4gICAgcmFua2luZzogMTlcbiAgfSxcbiAgQ0hBUkxFU1RPTjoge1xuICAgIGNpdHk6IFwiQ2hhcmxlc3RvblwiLFxuICAgIGNvbnN0YW50OiBDSEFSTEVTVE9OLFxuICAgIGNsYXNzOiBDSEFSTEVTVE9OX0NMQVNTLFxuICAgIGNvbG9yOiBDSEFSTEVTVE9OX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNDEsXG4gICAgaW5jb21lRW1wbG95bWVudDogMyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMixcbiAgICBwb3NpdGlvbjogeyB4OiA4MDUsIHk6IDQwMCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NS40OCxcbiAgICByYW5raW5nOiAyMFxuICB9LFxuICBHSUxCRVJUOiB7XG4gICAgY2l0eTogXCJHaWxiZXJ0XCIsXG4gICAgY29uc3RhbnQ6IEdJTEJFUlQsXG4gICAgY2xhc3M6IEdJTEJFUlRfQ0xBU1MsXG4gICAgY29sb3I6IEdJTEJFUlRfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAzMCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyNixcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNSxcbiAgICBwb3NpdGlvbjogeyB4OiAyNzcsIHk6IDM2MyB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NS4wNyxcbiAgICByYW5raW5nOiAyMVxuICB9LFxuICBBTkFIRUlNOiB7XG4gICAgY2l0eTogXCJBbmFoZWltXCIsXG4gICAgY29uc3RhbnQ6IEFOQUhFSU0sXG4gICAgY2xhc3M6IEFOQUhFSU1fQ0xBU1MsXG4gICAgY29sb3I6IEFOQUhFSU1fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxNixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA0MyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTksXG4gICAgcG9zaXRpb246IHsgeDogMTk2LCB5OiAyODIgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjUuMDIsXG4gICAgcmFua2luZzogMjJcbiAgfSxcbiAgUkFMRUlHSDoge1xuICAgIGNpdHk6IFwiUmFsZWlnaFwiLFxuICAgIGNvbnN0YW50OiBSQUxFSUdILFxuICAgIGNsYXNzOiBSQUxFSUdIX0NMQVNTLFxuICAgIGNvbG9yOiBSQUxFSUdIX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNyxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyMyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNDgsXG4gICAgcG9zaXRpb246IHsgeDogODMwLCB5OiAzMTMgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjQuOTksXG4gICAgcmFua2luZzogMjNcbiAgfSxcbiAgQ0FQRV9DT1JBTDoge1xuICAgIGNpdHk6IFwiQ2FwZSBDb3JhbFwiLFxuICAgIGNvbnN0YW50OiBDQVBFX0NPUkFMLFxuICAgIGNsYXNzOiBDQVBFX0NPUkFMX0NMQVNTLFxuICAgIGNvbG9yOiBDQVBFX0NPUkFMX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMjgsXG4gICAgaW5jb21lRW1wbG95bWVudDogNDgsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDIsXG4gICAgcG9zaXRpb246IHsgeDogODAwLCB5OiA0ODAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjQuOTYsXG4gICAgcmFua2luZzogMjRcbiAgfSxcbiAgQ0VEQVJfUkFQSURTOiB7XG4gICAgY2l0eTogXCJDZWRhciBSYXBpZHNcIixcbiAgICBjb25zdGFudDogQ0VEQVJfUkFQSURTLFxuICAgIGNsYXNzOiBDRURBUl9SQVBJRFNfQ0xBU1MsXG4gICAgY29sb3I6IENFREFSX1JBUElEU19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDIzLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDMyLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxMSxcbiAgICBwb3NpdGlvbjogeyB4OiA2MDAsIHk6IDIwNSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NC45LFxuICAgIHJhbmtpbmc6IDI1XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9ERUxBWSA9IDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0VBU0lORyA9IGQzLmVhc2VQb2x5O1xuXG5leHBvcnQgY29uc3QgV0lEVEggPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IDcwMDtcbmV4cG9ydCBjb25zdCBNQVJHSU5TID0gMTAwO1xuIiwiY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJEYXRhKCk7XG4gIH1cblxuICBmaWx0ZXJEYXRhKCkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBkM1xuICAgICAgLnNlbGVjdChgLmhlYWRlcl9fdG9vbHRpcGApXG4gICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCJzb2xpZFwiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyLXdpZHRoXCIsIFwiMnB4XCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4gICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMXJlbVwiKTtcblxuICAgIGQzLnNlbGVjdEFsbCgnLmNpdHknKVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCAoZCwgaSkgPT4ge1xuICAgICAgICBsZXQgY2xhc3NOYW1lO1xuICAgICAgICBpZiAodHlwZW9mIGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gYGNpdHktJHtkLnNwbGl0KCcgJykuam9pbignLScpfWA7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5kYXRhKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gZC5kYXRhLmNsYXNzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IGQuY2xhc3M7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsT3RoZXJDaXR5RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jaXR5Om5vdCguJHtjbGFzc05hbWV9KWApO1xuICAgICAgICBhbGxPdGhlckNpdHlEYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgZGF0YS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXInKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyB0b29sdGlwICBcbiAgICAgICAgdG9vbHRpcFxuICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgICAgICAgIC5odG1sKFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2NpdHlcIj48c3Ryb25nPkNpdHk6IDwvc3Ryb25nPjxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmNpdHlcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+T3ZlcmFsbCBSYW5rOjwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5yYW5raW5nXG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPlRvdGFsIEhhcHBpbmVzcyBTY29yZTo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuaGFwcGluZXNzU2NvcmVcbiAgICAgICAgICAgICAgICB9LzEwMDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPkVtb3Rpb25hbCAmIFBoeXNpY2FsIFdlbGwtQmVpbmc6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmVtb3Rpb25hbFdlbGxiZWluZ1xuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5JbmNvbWUgJiBFbXBsb3ltZW50Ojwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5pbmNvbWVFbXBsb3ltZW50XG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPkNvbW11bml0eSAmIEVudmlyb25tZW50Ojwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5jb21tdW5pdHlFbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApO1xuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX2hlYWRlcicpO1xuICAgICAgICBtYWluSGVhZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgY29sb3I6ICR7ZC5jb2xvcn1gICk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxDaXR5RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXR5Jyk7XG4gICAgICAgIGFsbENpdHlEYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgZGF0YS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXInKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19oZWFkZXJcIik7XG4gICAgICAgIG1haW5IZWFkZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGNvbG9yOiBpbml0aWFsYCk7XG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCBXb3JsZEdyYXBoIGZyb20gXCIuL3dvcmxkX2dyYXBoXCI7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIG5ldyBXb3JsZEdyYXBoKFwic3ZnLmdyYXBoXCIpO1xuICAvLyBuZXcgRmlsdGVyO1xufSk7IiwiaW1wb3J0IHtcbiAgV0lEVEgsIFxuICBIRUlHSFQsXG4gIEFOSU1BVElPTl9FQVNJTkcsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbmNsYXNzIFdvcmxkR3JhcGggZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHNlbGVjdG9yKTtcbiAgICB0aGlzLnhBeGlzKCk7XG4gICAgdGhpcy55QXhpcyhbMSwgMF0sIFwic2NhbGVMaW5lYXJcIiwgMjAsICgpID0+IGQzLmZvcm1hdChcIi4wJVwiKSk7XG4gICAgdGhpcy5jaXJjbGVzKCk7XG4gICAgdGhpcy5wZXJjZW50YWdlTGFiZWxzKCk7XG4gICAgdGhpcy5sYWJlbFRvcChcIkhhcHBpbmVzcyBSYW5raW5nXCIpO1xuICAgIHRoaXMuZ3JpZExpbmVzKHRoaXMueFNjYWxlLCBcImF4aXNCb3R0b21cIik7XG4gICAgdGhpcy5ncmlkTGluZXModGhpcy55U2NhbGUsIFwiYXhpc1JpZ2h0XCIpO1xuICB9XG5cbiAgbGluZXMoKSB7XG4gICAgbGV0IGxpbmUgPSBkM1xuICAgICAgLmxpbmUoKVxuICAgICAgLngoZCA9PiB0aGlzLnhTY2FsZShkLmV0aG5pY2l0eSkpXG4gICAgICAueShkID0+IHRoaXMueVNjYWxlKGQucGVyY2VudGFnZSkpO1xuXG4gICAgdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdEFsbChcIi5saW5lXCIpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDI1LCA1KVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBsaW5lIGNpdHkgJHtkLmNsYXNzfWApXG4gICAgICAuYXR0cihcImRcIiwgZCA9PiBsaW5lKGQuZGl2ZXJzaXR5KSlcbiAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBkID0+IGQuY29sb3IpXG4gICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAgIC5zdHlsZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gIH1cblxuICBjaXJjbGVzKCkge1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGNpdHkgJHtkLmNsYXNzfWApXG4gICAgICAuYXR0cihcImZpbGxcIiwgZCA9PiBkLmNvbG9yKVxuICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAuZGF0YShkID0+IGQuZGl2ZXJzaXR5KVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB0aGlzLnhTY2FsZShkLmV0aG5pY2l0eSkgKyAyNSlcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kZWxheSgoZCwgaSkgPT4gaSAqIEFOSU1BVElPTl9ERUxBWSlcbiAgICAgIC5kdXJhdGlvbihBTklNQVRJT05fRFVSQVRJT04pXG4gICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgLmF0dHIoXCJyXCIsIDMpXG4gICAgICAuYXR0cihcImN5XCIsIGQgPT4gdGhpcy55U2NhbGUoZC5wZXJjZW50YWdlKSk7XG4gIH1cblxuICBwZXJjZW50YWdlTGFiZWxzKCkge1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgLmRhdGEoKCkgPT4gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGNpdHkgJHtkLmNsYXNzfSBjaXR5LWRhdGEtdG9nZ2xlYClcbiAgICAgIC5zZWxlY3RBbGwoXCIubGluZS1wb2ludFwiKVxuICAgICAgLmRhdGEoZCA9PiBkLmRpdmVyc2l0eSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoZCA9PiBkMy5mb3JtYXQoXCIuMCVcIikoZC5wZXJjZW50YWdlKSlcbiAgICAgIC5hdHRyKFwieFwiLCBkID0+IHRoaXMueFNjYWxlKGQuZXRobmljaXR5KSArIDI1KVxuICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4gdGhpcy55U2NhbGUoZC5wZXJjZW50YWdlKSAtIDEwKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmxkR3JhcGg7Il0sInNvdXJjZVJvb3QiOiIifQ==