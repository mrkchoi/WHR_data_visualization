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
    this.setLabels(); // this.data = null;
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
      var yLabel = this.chart.append("g").append("text").attr("transform", "rotate(-90)").attr("y", -65).attr("x", -350).attr("font-size", "20px").attr("text-anchor", "middle").text("Happiness Index (%)");
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
        that.setData(data); // that.lines();

        that.circles(); // that.percentageLabels();
      });
    } // lines() {
    //   let line = d3
    //     .line()
    //     .x(d => this.xScale(d.graphRanking))
    //     .y(d => this.yScale(d.graphGdp));
    //   debugger
    //   this.chart
    //     .selectAll(".line")
    //     .data(Object.values(this.data))
    //     .enter()
    //     .append("path")
    //     .attr("transform", "translate(25, 5)")
    //     .attr("class", d => `line city ${d.class}`)
    //     .attr("d", d => line(d.diversity))
    //     .style("stroke", d => d.color)
    //     .style("stroke-width", 2)
    //     .style("stroke-linecap", "round");
    // }

  }, {
    key: "circles",
    value: function circles() {
      var _this2 = this;

      // debugger;
      this.chart.selectAll('circle').data(Object.values(this.data)).enter().append("circle") // .append("g")
      .attr("class", function (d) {
        return "city ".concat(d["class"]);
      }).attr("fill", function (d) {
        if (d.continent === 'Africa') {
          return "red";
        } else if (d.continent === 'Asia') {
          return "blue";
        } else if (d.continent === 'North America') {
          return "orange";
        } else if (d.continent === "South America") {
          return "green";
        } else if (d.continent === "Europe") {
          return "purple";
        } else {
          return "red";
        }
      }).attr('opacity', ".4").attr('border', '1px solid grey') // .selectAll()
      // .data(d => d)
      // .enter()
      .attr("cx", function (d) {
        // return 100;
        return _this2.xScale(d.graphGdp / 156) + 25;
      }).transition().delay(function (d, i) {
        return i * _constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DELAY"];
      }).duration(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DURATION"]).ease(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_EASING"]).attr("r", function (d) {
        if (d.population > 100000000) {
          return d.population / 25000000;
        } else if (d.population > 1000000) {
          return d.population / 2500000;
        } else {
          return d.population / 250000;
        }
      }).attr("cy", function (d) {
        // return 100;
        return _this2.yScale(d.graphRanking / 156);
      });
    } // percentageLabels() {
    //   // debugger;
    //   this.chart
    //     .selectAll()
    //     .data(() => Object.values(this.data))
    //     .enter()
    //     .append("g")
    //     .attr("class", d => `city ${d.class} city-data-toggle`)
    //     .selectAll(".line-point")
    //     .data(d => d.diversity)
    //     .enter()
    //     .append("text")
    //     .attr("text-anchor", "middle")
    //     .text(d => d3.format(".0%")(d.percentage))
    //     .attr("x", d => this.xScale(d.ethnicity) + 25)
    //     .attr("y", d => this.yScale(d.percentage) - 10)
    //     .style("fill", "white");
    // }

  }]);

  return WorldGraph;
}(_chart__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (WorldGraph);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkX2dyYXBoLmpzIl0sIm5hbWVzIjpbIkNoYXJ0Iiwic2VsZWN0b3IiLCJvcHRpb25zIiwic2V0Q2hhcnQiLCJnZXREYXRhIiwic2V0TGFiZWxzIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIkhFSUdIVCIsIk1BUkdJTlMiLCJXSURUSCIsImNoYXJ0IiwiYXBwZW5kIiwidGhhdCIsImpzb24iLCJ0aGVuIiwiZGF0YSIsInNldERhdGEiLCJ0aWNrcyIsInRpY2tGb3JtYXQiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwiZG9tYWluIiwieEF4aXNDYWxsIiwiYXhpc0JvdHRvbSIsImZvcm1hdCIsImNhbGwiLCJ5U2NhbGUiLCJwYWRkaW5nIiwiYXhpc0xlZnQiLCJ4TGFiZWwiLCJ0ZXh0IiwieUxhYmVsIiwic2NhbGUiLCJwb3NpdGlvbiIsInRpY2tTaXplIiwic2VsZWN0QWxsIiwic29ydGVkRGF0YSIsImVudGVyIiwiZCIsImNpdHkiLCJzdHlsZSIsImkiLCJQTEFOTyIsIlBMQU5PX0NJVFkiLCJQTEFOT19DTEFTUyIsIlBMQU5PX0NPTE9SIiwiSVJWSU5FIiwiSVJWSU5FX0NJVFkiLCJJUlZJTkVfQ0xBU1MiLCJJUlZJTkVfQ09MT1IiLCJNQURJU09OIiwiTUFESVNPTl9DSVRZIiwiTUFESVNPTl9DTEFTUyIsIk1BRElTT05fQ09MT1IiLCJGUkVNT05UIiwiRlJFTU9OVF9DSVRZIiwiRlJFTU9OVF9DTEFTUyIsIkZSRU1PTlRfQ09MT1IiLCJIVU5USU5HVE9OX0JFQUNIIiwiSFVOVElOR1RPTl9CRUFDSF9DSVRZIiwiSFVOVElOR1RPTl9CRUFDSF9DTEFTUyIsIkhVTlRJTkdUT05fQkVBQ0hfQ09MT1IiLCJGQVJHTyIsIkZBUkdPX0NJVFkiLCJGQVJHT19DTEFTUyIsIkZBUkdPX0NPTE9SIiwiR1JBTkRfUFJBSVJJRSIsIkdSQU5EX1BSQUlSSUVfQ0lUWSIsIkdSQU5EX1BSQUlSSUVfQ0xBU1MiLCJHUkFORF9QUkFJUklFX0NPTE9SIiwiU0FOX0pPU0UiLCJTQU5fSk9TRV9DSVRZIiwiU0FOX0pPU0VfQ0xBU1MiLCJTQU5fSk9TRV9DT0xPUiIsIlNDT1RUU0RBTEUiLCJTQ09UVFNEQUxFX0NJVFkiLCJTQ09UVFNEQUxFX0NMQVNTIiwiU0NPVFRTREFMRV9DT0xPUiIsIlNBTl9GUkFOQ0lTQ08iLCJTQU5fRlJBTkNJU0NPX0NJVFkiLCJTQU5fRlJBTkNJU0NPX0NMQVNTIiwiU0FOX0ZSQU5DSVNDT19DT0xPUiIsIkJJU01BUkNLIiwiQklTTUFSQ0tfQ0lUWSIsIkJJU01BUkNLX0NMQVNTIiwiQklTTUFSQ0tfQ09MT1IiLCJPVkVSTEFORF9QQVJLIiwiT1ZFUkxBTkRfUEFSS19DSVRZIiwiT1ZFUkxBTkRfUEFSS19DTEFTUyIsIk9WRVJMQU5EX1BBUktfQ09MT1IiLCJTQU5UQV9ST1NBIiwiU0FOVEFfUk9TQV9DSVRZIiwiU0FOVEFfUk9TQV9DTEFTUyIsIlNBTlRBX1JPU0FfQ09MT1IiLCJBVVNUSU4iLCJBVVNUSU5fQ0lUWSIsIkFVU1RJTl9DTEFTUyIsIkFVU1RJTl9DT0xPUiIsIlNJT1VYX0ZBTExTIiwiU0lPVVhfRkFMTFNfQ0lUWSIsIlNJT1VYX0ZBTExTX0NMQVNTIiwiU0lPVVhfRkFMTFNfQ09MT1IiLCJQRUFSTF9DSVRZIiwiUEVBUkxfQ0lUWV9DSVRZIiwiUEVBUkxfQ0lUWV9DTEFTUyIsIlBFQVJMX0NJVFlfQ09MT1IiLCJHTEVOREFMRSIsIkdMRU5EQUxFX0NJVFkiLCJHTEVOREFMRV9DTEFTUyIsIkdMRU5EQUxFX0NPTE9SIiwiU0FOX0RJRUdPIiwiU0FOX0RJRUdPX0NJVFkiLCJTQU5fRElFR09fQ0xBU1MiLCJTQU5fRElFR09fQ09MT1IiLCJTVF9QQVVMIiwiU1RfUEFVTF9DSVRZIiwiU1RfUEFVTF9DTEFTUyIsIlNUX1BBVUxfQ09MT1IiLCJDSEFSTEVTVE9OIiwiQ0hBUkxFU1RPTl9DSVRZIiwiQ0hBUkxFU1RPTl9DTEFTUyIsIkNIQVJMRVNUT05fQ09MT1IiLCJHSUxCRVJUIiwiR0lMQkVSVF9DSVRZIiwiR0lMQkVSVF9DTEFTUyIsIkdJTEJFUlRfQ09MT1IiLCJBTkFIRUlNIiwiQU5BSEVJTV9DSVRZIiwiQU5BSEVJTV9DTEFTUyIsIkFOQUhFSU1fQ09MT1IiLCJSQUxFSUdIIiwiUkFMRUlHSF9DSVRZIiwiUkFMRUlHSF9DTEFTUyIsIlJBTEVJR0hfQ09MT1IiLCJDQVBFX0NPUkFMIiwiQ0FQRV9DT1JBTF9DSVRZIiwiQ0FQRV9DT1JBTF9DTEFTUyIsIkNBUEVfQ09SQUxfQ09MT1IiLCJDRURBUl9SQVBJRFMiLCJDRURBUl9SQVBJRFNfQ0lUWSIsIkNFREFSX1JBUElEU19DTEFTUyIsIkNFREFSX1JBUElEU19DT0xPUiIsIkNJVElFUyIsImNvbnN0YW50IiwiY29sb3IiLCJlbW90aW9uYWxXZWxsYmVpbmciLCJpbmNvbWVFbXBsb3ltZW50IiwiY29tbXVuaXR5RW52aXJvbm1lbnQiLCJ4IiwieSIsImhhcHBpbmVzc1Njb3JlIiwicmFua2luZyIsIkFOSU1BVElPTl9EVVJBVElPTiIsIkFOSU1BVElPTl9ERUxBWSIsIkFOSU1BVElPTl9FQVNJTkciLCJlYXNlUG9seSIsIkZpbHRlciIsImZpbHRlckRhdGEiLCJ0b29sdGlwIiwib24iLCJjbGFzc05hbWUiLCJzcGxpdCIsImpvaW4iLCJhbGxPdGhlckNpdHlEYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsImh0bWwiLCJtYWluSGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImFsbENpdHlEYXRhIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIldvcmxkR3JhcGgiLCJ4QXhpcyIsInlBeGlzIiwiY2lyY2xlcyIsIk9iamVjdCIsInZhbHVlcyIsImNvbnRpbmVudCIsImdyYXBoR2RwIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJlYXNlIiwicG9wdWxhdGlvbiIsImdyYXBoUmFua2luZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztJQVNNQSxLOzs7QUFDSixpQkFBWUMsUUFBWixFQUFzQkMsT0FBdEIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0MsUUFBTCxDQUFjRixRQUFkLEVBQXdCQyxPQUF4QjtBQUNBLFNBQUtFLE9BQUw7QUFDQSxTQUFLQyxTQUFMLEdBSDZCLENBSTdCO0FBQ0Q7Ozs7NkJBRVFKLFEsRUFBcUQ7QUFBQSxVQUEzQ0MsT0FBMkMsdUVBQWpDO0FBQUVJLGlCQUFTLEVBQUUsQ0FBYjtBQUFnQkMsa0JBQVUsRUFBRTtB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LENBa0NRakMsMkRBbENSLEVBbUNHckosSUFuQ0gsQ0FtQ1EsR0FuQ1IsRUFtQ2EsVUFBQWlDLENBQUMsRUFBSTtBQUNkLFlBQUlBLENBQUMsQ0FBQ3NKLFVBQUYsR0FBZSxTQUFuQixFQUE4QjtBQUM1QixpQkFBT3RKLENBQUMsQ0FBQ3NKLFVBQUYsR0FBZSxRQUF0QjtBQUNELFNBRkQsTUFFTyxJQUFJdEosQ0FBQyxDQUFDc0osVUFBRixHQUFlLE9BQW5CLEVBQTRCO0FBQ2pDLGlCQUFPdEosQ0FBQyxDQUFDc0osVUFBRixHQUFlLE9BQXRCO0FBQ0QsU0FGTSxNQUVBO0FBQ0wsaUJBQU90SixDQUFDLENBQUNzSixVQUFGLEdBQWUsTUFBdEI7QUFDRDtBQUNGLE9BM0NILEVBNENHdkwsSUE1Q0gsQ0E0Q1EsSUE1Q1IsRUE0Q2MsVUFBQWlDLENBQUMsRUFBSTtBQUNmO0FBQ0EsZUFBTyxNQUFJLENBQUNaLE1BQUwsQ0FBWVksQ0FBQyxDQUFDdUosWUFBRixHQUFpQixHQUE3QixDQUFQO0FBQ0QsT0EvQ0g7QUFnREQsSyxDQUVEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7RUFqSHVCbk0sOEM7O0FBb0hWc0wseUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1xuICBIRUlHSFQsXG4gIE1BUkdJTlMsXG4gIFdJRFRILFxuICBBTklNQVRJT05fRFVSQVRJT04sXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lOR1xufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHRoaXMuc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMpO1xuICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgIHRoaXMuc2V0TGFiZWxzKCk7XG4gICAgLy8gdGhpcy5kYXRhID0gbnVsbDtcbiAgfVxuXG4gIHNldENoYXJ0KHNlbGVjdG9yLCBvcHRpb25zID0geyB0b3BPZmZzZXQ6IDAsIGxlZnRPZmZzZXQ6IDAgfSkge1xuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KHNlbGVjdG9yKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOUyAqIDIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOUyAqIDIpO1xuICAgIHRoaXMuY2hhcnQgPSBzdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgYHRyYW5zbGF0ZSgke01BUkdJTlMgKyBvcHRpb25zLmxlZnRPZmZzZXR9LCAke01BUkdJTlMgLyAyICtcbiAgICAgICAgICBvcHRpb25zLnRvcE9mZnNldH0pYFxuICAgICAgKTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGQzLmpzb24oXCIvZGlzdC9kYXRhL2NvdW50cmllcy5qc29uXCIpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGF0LnNldERhdGEoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgeEF4aXModGlja3MgPSAyMCwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgdGhpcy54U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgLmRvbWFpbihbMCwgMV0pO1xuICAgIGxldCB4QXhpc0NhbGwgPSBkM1xuICAgICAgLmF4aXNCb3R0b20odGhpcy54U2NhbGUpXG4gICAgICAudGlja3ModGlja3MpXG4gICAgICAudGlja0Zvcm1hdChkMy5mb3JtYXQoXCIuMCVcIikpO1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7SEVJR0hUfSlgKVxuICAgICAgLmNhbGwoeEF4aXNDYWxsKTtcbiAgfVxuXG4gIHlBeGlzKGRvbWFpbiwgeVNjYWxlLCB0aWNrcyA9IDUsIHRpY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIGlmICh5U2NhbGUgPT09IFwic2NhbGVCYW5kXCIpIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIEhFSUdIVF0pXG4gICAgICAgIC5wYWRkaW5nKDAuOCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIEhFSUdIVF0pO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnQuYXBwZW5kKFwiZ1wiKS5jYWxsKFxuICAgICAgZDNcbiAgICAgICAgLmF4aXNMZWZ0KHRoaXMueVNjYWxlKVxuICAgICAgICAudGlja3ModGlja3MpXG4gICAgICAgIC50aWNrRm9ybWF0KHRpY2tGb3JtYXQoKSlcbiAgICApO1xuICB9XG5cbiAgc2V0TGFiZWxzKCkge1xuICAgIC8vIExhYmVsc1xuICAgIHZhciB4TGFiZWwgPSB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieVwiLCBIRUlHSFQgKyA1MClcbiAgICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIwcHhcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC50ZXh0KFwiR0RQIFBlciBDYXBpdGEgKCQpXCIpO1xuICAgIHZhciB5TGFiZWwgPSB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgIC5hdHRyKFwieVwiLCAtNjUpXG4gICAgICAuYXR0cihcInhcIiwgLTM1MClcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjBweFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJIYXBwaW5lc3MgSW5kZXggKCUpXCIpO1xuICB9XG5cbiAgZ3JpZExpbmVzKHNjYWxlLCBwb3NpdGlvbiwgdGlja3MgPSA1KSB7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJncmlkXCIpXG4gICAgICAuY2FsbChkM1twb3NpdGlvbl0pKClcbiAgICAgIC5zY2FsZShzY2FsZSlcbiAgICAgIC50aWNrU2l6ZShXSURUSCwgMCwgMClcbiAgICAgIC50aWNrRm9ybWF0KFwiXCIpXG4gICAgICAudGlja3ModGlja3MpO1xuICB9XG5cbiAgcmVjdGFuZ2xlTGFiZWxzKHRleHQpIHtcbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKClcbiAgICAgIC5kYXRhKHRoaXMuc29ydGVkRGF0YSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBjaXR5ICR7ZC5jbGFzc30gYmFyLWxhYmVsIGNpdHktZGF0YS10b2dnbGVgKVxuICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAuYXR0cihcInlcIiwgZCA9PiB0aGlzLnlTY2FsZShkLmNpdHkpIC0gMilcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgXCIjZmZmXCIpXG4gICAgICAudGV4dCgoZCwgaSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gZFt0ZXh0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGV4dC5jYWxsKGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgfVxuXG4gIGxhYmVsVG9wKHRleHQpIHtcbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsLXRleHRcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDIpXG4gICAgICAuYXR0cihcInlcIiwgLTIwKVxuICAgICAgLnRleHQodGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iLCJleHBvcnQgY29uc3QgUExBTk8gPSBcIlBMQU5PXCI7XG5jb25zdCBQTEFOT19DSVRZID0gXCJQbGFub1wiO1xuY29uc3QgUExBTk9fQ0xBU1MgPSBcImNpdHktUGxhbm9cIjtcbmNvbnN0IFBMQU5PX0NPTE9SID0gXCIjNTFlYWVhXCI7XG5cbmV4cG9ydCBjb25zdCBJUlZJTkUgPSBcIklSVklORVwiO1xuY29uc3QgSVJWSU5FX0NJVFkgPSBcIklSVklORVwiO1xuY29uc3QgSVJWSU5FX0NMQVNTID0gXCJjaXR5LUlydmluZVwiO1xuY29uc3QgSVJWSU5FX0NPTE9SID0gXCIjZmY5ZDc2XCI7XG5cbmV4cG9ydCBjb25zdCBNQURJU09OID0gXCJNQURJU09OXCI7XG5jb25zdCBNQURJU09OX0NJVFkgPSBcIk1BRElTT05cIjtcbmNvbnN0IE1BRElTT05fQ0xBU1MgPSBcImNpdHktTWFkaXNvblwiO1xuY29uc3QgTUFESVNPTl9DT0xPUiA9IFwiI2ZiMzU2OVwiO1xuXG5leHBvcnQgY29uc3QgRlJFTU9OVCA9IFwiRlJFTU9OVFwiO1xuY29uc3QgRlJFTU9OVF9DSVRZID0gXCJGUkVNT05UXCI7XG5jb25zdCBGUkVNT05UX0NMQVNTID0gXCJjaXR5LUZyZW1vbnRcIjtcbmNvbnN0IEZSRU1PTlRfQ09MT1IgPSBcIiNmYTg2YmVcIjtcblxuZXhwb3J0IGNvbnN0IEhVTlRJTkdUT05fQkVBQ0ggPSBcIkhVTlRJTkdUT05fQkVBQ0hcIjtcbmNvbnN0IEhVTlRJTkdUT05fQkVBQ0hfQ0lUWSA9IFwiSFVOVElOR1RPTl9CRUFDSFwiO1xuY29uc3QgSFVOVElOR1RPTl9CRUFDSF9DTEFTUyA9IFwiY2l0eS1IdW50aW5ndG9uLUJlYWNoXCI7XG5jb25zdCBIVU5USU5HVE9OX0JFQUNIX0NPTE9SID0gXCIjYTI3NWUzXCI7XG5cbmV4cG9ydCBjb25zdCBGQVJHTyA9IFwiRkFSR09cIjtcbmNvbnN0IEZBUkdPX0NJVFkgPSBcIkZBUkdPXCI7XG5jb25zdCBGQVJHT19DTEFTUyA9IFwiY2l0eS1GYXJnb1wiO1xuY29uc3QgRkFSR09fQ09MT1IgPSBcIiNmZjFmNWFcIjtcblxuZXhwb3J0IGNvbnN0IEdSQU5EX1BSQUlSSUUgPSBcIkdSQU5EX1BSQUlSSUVcIjtcbmNvbnN0IEdSQU5EX1BSQUlSSUVfQ0lUWSA9IFwiR1JBTkRfUFJBSVJJRVwiO1xuY29uc3QgR1JBTkRfUFJBSVJJRV9DTEFTUyA9IFwiY2l0eS1HcmFuZC1QcmFpcmllXCI7XG5jb25zdCBHUkFORF9QUkFJUklFX0NPTE9SID0gXCIjNjkwMGZmXCI7XG5cbmV4cG9ydCBjb25zdCBTQU5fSk9TRSA9IFwiU0FOX0pPU0VcIjtcbmNvbnN0IFNBTl9KT1NFX0NJVFkgPSBcIlNBTl9KT1NFXCI7XG5jb25zdCBTQU5fSk9TRV9DTEFTUyA9IFwiY2l0eS1TYW4tSm9zZVwiO1xuY29uc3QgU0FOX0pPU0VfQ09MT1IgPSBcIiNmZmQ3MDBcIjtcblxuZXhwb3J0IGNvbnN0IFNDT1RUU0RBTEUgPSBcIlNDT1RUU0RBTEVcIjtcbmNvbnN0IFNDT1RUU0RBTEVfQ0lUWSA9IFwiU0NPVFRTREFMRVwiO1xuY29uc3QgU0NPVFRTREFMRV9DTEFTUyA9IFwiY2l0eS1TY290dHNkYWxlXCI7XG5jb25zdCBTQ09UVFNEQUxFX0NPTE9SID0gXCIjZmY2MTM4XCI7XG5cbmV4cG9ydCBjb25zdCBTQU5fRlJBTkNJU0NPID0gXCJTQU5fRlJBTkNJU0NPXCI7XG5jb25zdCBTQU5fRlJBTkNJU0NPX0NJVFkgPSBcIlNBTl9GUkFOQ0lTQ09cIjtcbmNvbnN0IFNBTl9GUkFOQ0lTQ09fQ0xBU1MgPSBcImNpdHktU2FuLUZyYW5jaXNjb1wiO1xuY29uc3QgU0FOX0ZSQU5DSVNDT19DT0xPUiA9IFwiIzMwMzQ4MVwiO1xuXG5leHBvcnQgY29uc3QgQklTTUFSQ0sgPSBcIkJJU01BUkNLXCI7XG5jb25zdCBCSVNNQVJDS19DSVRZID0gXCJCSVNNQVJDS1wiO1xuY29uc3QgQklTTUFSQ0tfQ0xBU1MgPSBcImNpdHktQmlzbWFyY2tcIjtcbmNvbnN0IEJJU01BUkNLX0NPTE9SID0gXCIjN2NiZDFlXCI7XG5cbmV4cG9ydCBjb25zdCBPVkVSTEFORF9QQVJLID0gXCJPVkVSTEFORF9QQVJLXCI7XG5jb25zdCBPVkVSTEFORF9QQVJLX0NJVFkgPSBcIk9WRVJMQU5EX1BBUktcIjtcbmNvbnN0IE9WRVJMQU5EX1BBUktfQ0xBU1MgPSBcImNpdHktT3ZlcmxhbmQtUGFya1wiO1xuY29uc3QgT1ZFUkxBTkRfUEFSS19DT0xPUiA9IFwiIzAwOTM3OFwiO1xuXG5leHBvcnQgY29uc3QgU0FOVEFfUk9TQSA9IFwiU0FOVEFfUk9TQVwiO1xuY29uc3QgU0FOVEFfUk9TQV9DSVRZID0gXCJTQU5UQV9ST1NBXCI7XG5jb25zdCBTQU5UQV9ST1NBX0NMQVNTID0gXCJjaXR5LVNhbnRhLVJvc2FcIjtcbmNvbnN0IFNBTlRBX1JPU0FfQ09MT1IgPSBcIiNmNjBjODZcIjtcblxuZXhwb3J0IGNvbnN0IEFVU1RJTiA9IFwiQVVTVElOXCI7XG5jb25zdCBBVVNUSU5fQ0lUWSA9IFwiQVVTVElOXCI7XG5jb25zdCBBVVNUSU5fQ0xBU1MgPSBcImNpdHktQXVzdGluXCI7XG5jb25zdCBBVVNUSU5fQ09MT1IgPSBcIiNmOWQwMGZcIjtcblxuZXhwb3J0IGNvbnN0IFNJT1VYX0ZBTExTID0gXCJTSU9VWF9GQUxMU1wiO1xuY29uc3QgU0lPVVhfRkFMTFNfQ0lUWSA9IFwiU0lPVVhfRkFMTFNcIjtcbmNvbnN0IFNJT1VYX0ZBTExTX0NMQVNTID0gXCJjaXR5LVNpb3V4LUZhbGxzXCI7XG5jb25zdCBTSU9VWF9GQUxMU19DT0xPUiA9IFwiIzMwMzg0MVwiO1xuXG5leHBvcnQgY29uc3QgUEVBUkxfQ0lUWSA9IFwiUEVBUkxfQ0lUWVwiO1xuY29uc3QgUEVBUkxfQ0lUWV9DSVRZID0gXCJQRUFSTF9DSVRZXCI7XG5jb25zdCBQRUFSTF9DSVRZX0NMQVNTID0gXCJjaXR5LVBlYXJsLUNpdHlcIjtcbmNvbnN0IFBFQVJMX0NJVFlfQ09MT1IgPSBcIiM5NmNkMzlcIjtcblxuZXhwb3J0IGNvbnN0IEdMRU5EQUxFID0gXCJHTEVOREFMRVwiO1xuY29uc3QgR0xFTkRBTEVfQ0lUWSA9IFwiR0xFTkRBTEVcIjtcbmNvbnN0IEdMRU5EQUxFX0NMQVNTID0gXCJjaXR5LUdsZW5kYWxlXCI7XG5jb25zdCBHTEVOREFMRV9DT0xPUiA9IFwiIzJmYzVjY1wiO1xuXG5leHBvcnQgY29uc3QgU0FOX0RJRUdPID0gXCJTQU5fRElFR09cIjtcbmNvbnN0IFNBTl9ESUVHT19DSVRZID0gXCJTQU5fRElFR09cIjtcbmNvbnN0IFNBTl9ESUVHT19DTEFTUyA9IFwiY2l0eS1TYW4tRGllZ29cIjtcbmNvbnN0IFNBTl9ESUVHT19DT0xPUiA9IFwiI2ZmNWI0NFwiO1xuXG5leHBvcnQgY29uc3QgU1RfUEFVTCA9IFwiU1RfUEFVTFwiO1xuY29uc3QgU1RfUEFVTF9DSVRZID0gXCJTVF9QQVVMXCI7XG5jb25zdCBTVF9QQVVMX0NMQVNTID0gXCJjaXR5LVN0LVBhdWxcIjtcbmNvbnN0IFNUX1BBVUxfQ09MT1IgPSBcIiNiZjY4ZjZcIjtcblxuZXhwb3J0IGNvbnN0IENIQVJMRVNUT04gPSBcIkNIQVJMRVNUT05cIjtcbmNvbnN0IENIQVJMRVNUT05fQ0lUWSA9IFwiQ0hBUkxFU1RPTlwiO1xuY29uc3QgQ0hBUkxFU1RPTl9DTEFTUyA9IFwiY2l0eS1DaGFybGVzdG9uXCI7XG5jb25zdCBDSEFSTEVTVE9OX0NPTE9SID0gXCIjZjkyNzI3XCI7XG5cbmV4cG9ydCBjb25zdCBHSUxCRVJUID0gXCJHSUxCRVJUXCI7XG5jb25zdCBHSUxCRVJUX0NJVFkgPSBcIkdJTEJFUlRcIjtcbmNvbnN0IEdJTEJFUlRfQ0xBU1MgPSBcImNpdHktR2lsYmVydFwiO1xuY29uc3QgR0lMQkVSVF9DT0xPUiA9IFwiI2ZmMDU5MlwiO1xuXG5leHBvcnQgY29uc3QgQU5BSEVJTSA9IFwiQU5BSEVJTVwiO1xuY29uc3QgQU5BSEVJTV9DSVRZID0gXCJBTkFIRUlNXCI7XG5jb25zdCBBTkFIRUlNX0NMQVNTID0gXCJjaXR5LUFuYWhlaW1cIjtcbmNvbnN0IEFOQUhFSU1fQ09MT1IgPSBcIiNhNThiZmZcIjtcblxuZXhwb3J0IGNvbnN0IFJBTEVJR0ggPSBcIlJBTEVJR0hcIjtcbmNvbnN0IFJBTEVJR0hfQ0lUWSA9IFwiUkFMRUlHSFwiO1xuY29uc3QgUkFMRUlHSF9DTEFTUyA9IFwiY2l0eS1SYWxlaWdoXCI7XG5jb25zdCBSQUxFSUdIX0NPTE9SID0gXCIjMDA5Mzc4XCI7XG5cbmV4cG9ydCBjb25zdCBDQVBFX0NPUkFMID0gXCJDQVBFX0NPUkFMXCI7XG5jb25zdCBDQVBFX0NPUkFMX0NJVFkgPSBcIkNBUEVfQ09SQUxcIjtcbmNvbnN0IENBUEVfQ09SQUxfQ0xBU1MgPSBcImNpdHktQ2FwZS1Db3JhbFwiO1xuY29uc3QgQ0FQRV9DT1JBTF9DT0xPUiA9IFwiI2ZjMzQ1Y1wiO1xuXG5leHBvcnQgY29uc3QgQ0VEQVJfUkFQSURTID0gXCJDRURBUl9SQVBJRFNcIjtcbmNvbnN0IENFREFSX1JBUElEU19DSVRZID0gXCJDRURBUl9SQVBJRFNcIjtcbmNvbnN0IENFREFSX1JBUElEU19DTEFTUyA9IFwiY2l0eS1DZWRhci1SYXBpZHNcIjtcbmNvbnN0IENFREFSX1JBUElEU19DT0xPUiA9IFwiIzNkNmNiOVwiO1xuXG5leHBvcnQgY29uc3QgQ0lUSUVTID0ge1xuICBQTEFOTzoge1xuICAgIGNpdHk6IFwiUGxhbm9cIixcbiAgICBjb25zdGFudDogUExBTk8sXG4gICAgY2xhc3M6IFBMQU5PX0NMQVNTLFxuICAgIGNvbG9yOiBQTEFOT19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDQsXG4gICAgaW5jb21lRW1wbG95bWVudDogMyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNCxcbiAgICBwb3NpdGlvbjogeyB4OiA1MjYsIHk6IDM5MCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA3Mi4zLFxuICAgIHJhbmtpbmc6IDFcbiAgfSxcbiAgSVJWSU5FOiB7XG4gICAgY2l0eTogXCJJcnZpbmVcIixcbiAgICBjb25zdGFudDogSVJWSU5FLFxuICAgIGNsYXNzOiBJUlZJTkVfQ0xBU1MsXG4gICAgY29sb3I6IElSVklORV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDgsXG4gICAgaW5jb21lRW1wbG95bWVudDogNixcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMyxcbiAgICBwb3NpdGlvbjogeyB4OiAxODAsIHk6IDMwMCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA3MS44NixcbiAgICByYW5raW5nOiAyXG4gIH0sXG4gIE1BRElTT046IHtcbiAgICBjaXR5OiBcIk1hZGlzb25cIixcbiAgICBjb25zdGFudDogTUFESVNPTixcbiAgICBjbGFzczogTUFESVNPTl9DTEFTUyxcbiAgICBjb2xvcjogTUFESVNPTl9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDIsXG4gICAgaW5jb21lRW1wbG95bWVudDogOCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNCxcbiAgICBwb3NpdGlvbjogeyB4OiA2NDAsIHk6IDE2MCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA3MS44MSxcbiAgICByYW5raW5nOiAzXG4gIH0sXG4gIEZSRU1PTlQ6IHtcbiAgICBjaXR5OiBcIkZyZW1vbnRcIixcbiAgICBjb25zdGFudDogRlJFTU9OVCxcbiAgICBjbGFzczogRlJFTU9OVF9DTEFTUyxcbiAgICBjb2xvcjogRlJFTU9OVF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDUsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjAsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDEsXG4gICAgcG9zaXRpb246IHsgeDogMTUxLCB5OiAyMjUgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNzEuMTcsXG4gICAgcmFua2luZzogNFxuICB9LFxuICBIVU5USU5HVE9OX0JFQUNIOiB7XG4gICAgY2l0eTogXCJIdW50aW5ndG9uIEJlYWNoXCIsXG4gICAgY29uc3RhbnQ6IEhVTlRJTkdUT05fQkVBQ0gsXG4gICAgY2xhc3M6IEhVTlRJTkdUT05fQkVBQ0hfQ0xBU1MsXG4gICAgY29sb3I6IEhVTlRJTkdUT05fQkVBQ0hfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAzLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDI1LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxNSxcbiAgICBwb3NpdGlvbjogeyB4OiAxNTksIHk6IDI5MCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OS43NCxcbiAgICByYW5raW5nOiA1XG4gIH0sXG4gIEZBUkdPOiB7XG4gICAgY2l0eTogXCJGYXJnb1wiLFxuICAgIGNvbnN0YW50OiBGQVJHTyxcbiAgICBjbGFzczogRkFSR09fQ0xBU1MsXG4gICAgY29sb3I6IEZBUkdPX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogOSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAxMSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTMsXG4gICAgcG9zaXRpb246IHsgeDogNDk4LCB5OiA5NCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2OS41NyxcbiAgICByYW5raW5nOiA2XG4gIH0sXG4gIEdSQU5EX1BSQUlSSUU6IHtcbiAgICBjaXR5OiBcIkdyYW5kIFByYWlyaWVcIixcbiAgICBjb25zdGFudDogR1JBTkRfUFJBSVJJRSxcbiAgICBjbGFzczogR1JBTkRfUFJBSVJJRV9DTEFTUyxcbiAgICBjb2xvcjogR1JBTkRfUFJBSVJJRV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDExLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDE5LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAzLFxuICAgIHBvc2l0aW9uOiB7IHg6IDUyNSwgeTogNDEwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY5LjMsXG4gICAgcmFua2luZzogN1xuICB9LFxuICBTQU5fSk9TRToge1xuICAgIGNpdHk6IFwiU2FuIEpvc2VcIixcbiAgICBjb25zdGFudDogU0FOX0pPU0UsXG4gICAgY2xhc3M6IFNBTl9KT1NFX0NMQVNTLFxuICAgIGNvbG9yOiBTQU5fSk9TRV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEsXG4gICAgaW5jb21lRW1wbG95bWVudDogMTAsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDI0LFxuICAgIHBvc2l0aW9uOiB7IHg6IDE0MCwgeTogMjQwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY4LjksXG4gICAgcmFua2luZzogOFxuICB9LFxuICBTQ09UVFNEQUxFOiB7XG4gICAgY2l0eTogXCJTY290dHNkYWxlXCIsXG4gICAgY29uc3RhbnQ6IFNDT1RUU0RBTEUsXG4gICAgY2xhc3M6IFNDT1RUU0RBTEVfQ0xBU1MsXG4gICAgY29sb3I6IFNDT1RUU0RBTEVfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyNSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA3LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxLFxuICAgIHBvc2l0aW9uOiB7IHg6IDI3MCwgeTogMzQxIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY4LjI0LFxuICAgIHJhbmtpbmc6IDlcbiAgfSxcbiAgU0FOX0ZSQU5DSVNDTzoge1xuICAgIGNpdHk6IFwiU2FuIEZyYW5jaXNjb1wiLFxuICAgIGNvbnN0YW50OiBTQU5fRlJBTkNJU0NPLFxuICAgIGNsYXNzOiBTQU5fRlJBTkNJU0NPX0NMQVNTLFxuICAgIGNvbG9yOiBTQU5fRlJBTkNJU0NPX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAxLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA2OSxcbiAgICBwb3NpdGlvbjogeyB4OiAxMzYsIHk6IDIxMiB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny41MyxcbiAgICByYW5raW5nOiAxMFxuICB9LFxuICBCSVNNQVJDSzoge1xuICAgIGNpdHk6IFwiQmlzbWFyY2tcIixcbiAgICBjb25zdGFudDogQklTTUFSQ0ssXG4gICAgY2xhc3M6IEJJU01BUkNLX0NMQVNTLFxuICAgIGNvbG9yOiBCSVNNQVJDS19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDE0LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDIsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDI1LFxuICAgIHBvc2l0aW9uOiB7IHg6IDQ3OCwgeTogMTA2IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY3LjM4LFxuICAgIHJhbmtpbmc6IDExXG4gIH0sXG4gIE9WRVJMQU5EX1BBUks6IHtcbiAgICBjaXR5OiBcIk92ZXJsYW5kIFBhcmtcIixcbiAgICBjb25zdGFudDogT1ZFUkxBTkRfUEFSSyxcbiAgICBjbGFzczogT1ZFUkxBTkRfUEFSS19DTEFTUyxcbiAgICBjb2xvcjogT1ZFUkxBTkRfUEFSS19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEyLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDMxLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxNCxcbiAgICBwb3NpdGlvbjogeyB4OiA1NzAsIHk6IDI3OCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4zNyxcbiAgICByYW5raW5nOiAxMlxuICB9LFxuICBTQU5UQV9ST1NBOiB7XG4gICAgY2l0eTogXCJTYW50YSBSb3NhXCIsXG4gICAgY29uc3RhbnQ6IFNBTlRBX1JPU0EsXG4gICAgY2xhc3M6IFNBTlRBX1JPU0FfQ0xBU1MsXG4gICAgY29sb3I6IFNBTlRBX1JPU0FfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMyxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyOSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNSxcbiAgICBwb3NpdGlvbjogeyB4OiAxMzIsIHk6IDE5NiB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4xOCxcbiAgICByYW5raW5nOiAxM1xuICB9LFxuICBBVVNUSU46IHtcbiAgICBjaXR5OiBcIkF1c3RpblwiLFxuICAgIGNvbnN0YW50OiBBVVNUSU4sXG4gICAgY2xhc3M6IEFVU1RJTl9DTEFTUyxcbiAgICBjb2xvcjogQVVTVElOX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogOCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA0LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA0NCxcbiAgICBwb3NpdGlvbjogeyB4OiA0OTcsIHk6IDQzMCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4xNixcbiAgICByYW5raW5nOiAxNFxuICB9LFxuICBTSU9VWF9GQUxMUzoge1xuICAgIGNpdHk6IFwiU2lvdXggRmFsbHNcIixcbiAgICBjb25zdGFudDogU0lPVVhfRkFMTFMsXG4gICAgY2xhc3M6IFNJT1VYX0ZBTExTX0NMQVNTLFxuICAgIGNvbG9yOiBTSU9VWF9GQUxMU19DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDYsXG4gICAgaW5jb21lRW1wbG95bWVudDogMzcsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUyLFxuICAgIHBvc2l0aW9uOiB7IHg6IDUwMCwgeTogMTY4IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY2Ljk3LFxuICAgIHJhbmtpbmc6IDE1XG4gIH0sXG4gIFBFQVJMX0NJVFk6IHtcbiAgICBjaXR5OiBcIlBlYXJsIENpdHlcIixcbiAgICBjb25zdGFudDogUEVBUkxfQ0lUWSxcbiAgICBjbGFzczogUEVBUkxfQ0lUWV9DTEFTUyxcbiAgICBjb2xvcjogUEVBUkxfQ0lUWV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEsXG4gICAgaW5jb21lRW1wbG95bWVudDogODEsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDgsXG4gICAgcG9zaXRpb246IHsgeDogMzUwLCB5OiA0OTEgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjYuNzcsXG4gICAgcmFua2luZzogMTZcbiAgfSxcbiAgR0xFTkRBTEU6IHtcbiAgICBjaXR5OiBcIkdsZW5kYWxlXCIsXG4gICAgY29uc3RhbnQ6IEdMRU5EQUxFLFxuICAgIGNsYXNzOiBHTEVOREFMRV9DTEFTUyxcbiAgICBjb2xvcjogR0xFTkRBTEVfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxNSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA1NixcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNyxcbiAgICBwb3NpdGlvbjogeyB4OiAxNjcsIHk6IDI3MiB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ni4yNSxcbiAgICByYW5raW5nOiAxN1xuICB9LFxuICBTQU5fRElFR086IHtcbiAgICBjaXR5OiBcIlNhbiBEaWVnb1wiLFxuICAgIGNvbnN0YW50OiBTQU5fRElFR08sXG4gICAgY2xhc3M6IFNBTl9ESUVHT19DTEFTUyxcbiAgICBjb2xvcjogU0FOX0RJRUdPX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyMCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMjUsXG4gICAgcG9zaXRpb246IHsgeDogMTg3LCB5OiAzMjEgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjYuMDEsXG4gICAgcmFua2luZzogMThcbiAgfSxcbiAgU1RfUEFVTDoge1xuICAgIGNpdHk6IFwiU3QuIFBhdWxcIixcbiAgICBjb25zdGFudDogU1RfUEFVTCxcbiAgICBjbGFzczogU1RfUEFVTF9DTEFTUyxcbiAgICBjb2xvcjogU1RfUEFVTF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEwLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDM4LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAzNixcbiAgICBwb3NpdGlvbjogeyB4OiA1OTAsIHk6IDEzMyB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NS43OSxcbiAgICByYW5raW5nOiAxOVxuICB9LFxuICBDSEFSTEVTVE9OOiB7XG4gICAgY2l0eTogXCJDaGFybGVzdG9uXCIsXG4gICAgY29uc3RhbnQ6IENIQVJMRVNUT04sXG4gICAgY2xhc3M6IENIQVJMRVNUT05fQ0xBU1MsXG4gICAgY29sb3I6IENIQVJMRVNUT05fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA0MSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyLFxuICAgIHBvc2l0aW9uOiB7IHg6IDgwNSwgeTogNDAwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY1LjQ4LFxuICAgIHJhbmtpbmc6IDIwXG4gIH0sXG4gIEdJTEJFUlQ6IHtcbiAgICBjaXR5OiBcIkdpbGJlcnRcIixcbiAgICBjb25zdGFudDogR0lMQkVSVCxcbiAgICBjbGFzczogR0lMQkVSVF9DTEFTUyxcbiAgICBjb2xvcjogR0lMQkVSVF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDMwLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDI2LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA1LFxuICAgIHBvc2l0aW9uOiB7IHg6IDI3NywgeTogMzYzIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY1LjA3LFxuICAgIHJhbmtpbmc6IDIxXG4gIH0sXG4gIEFOQUhFSU06IHtcbiAgICBjaXR5OiBcIkFuYWhlaW1cIixcbiAgICBjb25zdGFudDogQU5BSEVJTSxcbiAgICBjbGFzczogQU5BSEVJTV9DTEFTUyxcbiAgICBjb2xvcjogQU5BSEVJTV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDE2LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDQzLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxOSxcbiAgICBwb3NpdGlvbjogeyB4OiAxOTYsIHk6IDI4MiB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NS4wMixcbiAgICByYW5raW5nOiAyMlxuICB9LFxuICBSQUxFSUdIOiB7XG4gICAgY2l0eTogXCJSYWxlaWdoXCIsXG4gICAgY29uc3RhbnQ6IFJBTEVJR0gsXG4gICAgY2xhc3M6IFJBTEVJR0hfQ0xBU1MsXG4gICAgY29sb3I6IFJBTEVJR0hfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA3LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDIzLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA0OCxcbiAgICBwb3NpdGlvbjogeyB4OiA4MzAsIHk6IDMxMyB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NC45OSxcbiAgICByYW5raW5nOiAyM1xuICB9LFxuICBDQVBFX0NPUkFMOiB7XG4gICAgY2l0eTogXCJDYXBlIENvcmFsXCIsXG4gICAgY29uc3RhbnQ6IENBUEVfQ09SQUwsXG4gICAgY2xhc3M6IENBUEVfQ09SQUxfQ0xBU1MsXG4gICAgY29sb3I6IENBUEVfQ09SQUxfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyOCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA0OCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMixcbiAgICBwb3NpdGlvbjogeyB4OiA4MDAsIHk6IDQ4MCB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2NC45NixcbiAgICByYW5raW5nOiAyNFxuICB9LFxuICBDRURBUl9SQVBJRFM6IHtcbiAgICBjaXR5OiBcIkNlZGFyIFJhcGlkc1wiLFxuICAgIGNvbnN0YW50OiBDRURBUl9SQVBJRFMsXG4gICAgY2xhc3M6IENFREFSX1JBUElEU19DTEFTUyxcbiAgICBjb2xvcjogQ0VEQVJfUkFQSURTX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMjMsXG4gICAgaW5jb21lRW1wbG95bWVudDogMzIsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDExLFxuICAgIHBvc2l0aW9uOiB7IHg6IDYwMCwgeTogMjA1IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY0LjksXG4gICAgcmFua2luZzogMjVcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDEwMDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0RFTEFZID0gMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fRUFTSU5HID0gZDMuZWFzZVBvbHk7XG5cbmV4cG9ydCBjb25zdCBXSURUSCA9IDEwMDA7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gNzAwO1xuZXhwb3J0IGNvbnN0IE1BUkdJTlMgPSAxMDA7XG4iLCJjbGFzcyBGaWx0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlckRhdGEoKTtcbiAgfVxuXG4gIGZpbHRlckRhdGEoKSB7XG4gICAgY29uc3QgdG9vbHRpcCA9IGQzXG4gICAgICAuc2VsZWN0KGAuaGVhZGVyX190b29sdGlwYClcbiAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0b29sdGlwXCIpXG4gICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcInNvbGlkXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItd2lkdGhcIiwgXCIycHhcIilcbiAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCI1cHhcIilcbiAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxcmVtXCIpO1xuXG4gICAgZDMuc2VsZWN0QWxsKCcuY2l0eScpXG4gICAgICAub24oJ21vdXNlb3ZlcicsIChkLCBpKSA9PiB7XG4gICAgICAgIGxldCBjbGFzc05hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBgY2l0eS0ke2Quc3BsaXQoJyAnKS5qb2luKCctJyl9YDtcbiAgICAgICAgfSBlbHNlIGlmIChkLmRhdGEpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBkLmRhdGEuY2xhc3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gZC5jbGFzcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxPdGhlckNpdHlEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNpdHk6bm90KC4ke2NsYXNzTmFtZX0pYCk7XG4gICAgICAgIGFsbE90aGVyQ2l0eURhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICBkYXRhLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcicpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHRvb2x0aXAgIFxuICAgICAgICB0b29sdGlwXG4gICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwX19pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fY2l0eVwiPjxzdHJvbmc+Q2l0eTogPC9zdHJvbmc+PHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuY2l0eVxuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5PdmVyYWxsIFJhbms6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLnJhbmtpbmdcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+VG90YWwgSGFwcGluZXNzIFNjb3JlOjwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5oYXBwaW5lc3NTY29yZVxuICAgICAgICAgICAgICAgIH0vMTAwPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+RW1vdGlvbmFsICYgUGh5c2ljYWwgV2VsbC1CZWluZzo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuZW1vdGlvbmFsV2VsbGJlaW5nXG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPkluY29tZSAmIEVtcGxveW1lbnQ6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmluY29tZUVtcGxveW1lbnRcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+Q29tbXVuaXR5ICYgRW52aXJvbm1lbnQ6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmNvbW11bml0eUVudmlyb25tZW50XG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9faGVhZGVyJyk7XG4gICAgICAgIG1haW5IZWFkZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBjb2xvcjogJHtkLmNvbG9yfWAgKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbENpdHlEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNpdHknKTtcbiAgICAgICAgYWxsQ2l0eURhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICBkYXRhLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcicpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2hlYWRlclwiKTtcbiAgICAgICAgbWFpbkhlYWRlci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgY29sb3I6IGluaXRpYWxgKTtcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IFdvcmxkR3JhcGggZnJvbSBcIi4vd29ybGRfZ3JhcGhcIjtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbmV3IFdvcmxkR3JhcGgoXCJzdmcuZ3JhcGhcIik7XG4gIC8vIG5ldyBGaWx0ZXI7XG59KTsiLCJpbXBvcnQge1xuICBXSURUSCwgXG4gIEhFSUdIVCxcbiAgQU5JTUFUSU9OX0RFTEFZLFxuICBBTklNQVRJT05fRUFTSU5HLFxuICBBTklNQVRJT05fRFVSQVRJT04sXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG5jbGFzcyBXb3JsZEdyYXBoIGV4dGVuZHMgQ2hhcnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdChzZWxlY3Rvcik7XG4gICAgdGhpcy54QXhpcygpO1xuICAgIHRoaXMueUF4aXMoWzEsIDBdLCBcInNjYWxlTGluZWFyXCIsIDIwLCAoKSA9PiBkMy5mb3JtYXQoXCIuMCVcIikpO1xuICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgIC8vIHRoaXMubGluZXMoKTtcbiAgICAvLyB0aGlzLmNpcmNsZXMoKTtcbiAgICAvLyB0aGlzLnBlcmNlbnRhZ2VMYWJlbHMoKTtcbiAgICAvLyB0aGlzLmxhYmVsVG9wKFwiSGFwcGluZXNzIFJhbmtpbmdcIik7XG4gICAgLy8gdGhpcy5ncmlkTGluZXModGhpcy54U2NhbGUsIFwiYXhpc0JvdHRvbVwiKTtcbiAgICAvLyB0aGlzLmdyaWRMaW5lcyh0aGlzLnlTY2FsZSwgXCJheGlzUmlnaHRcIik7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBkMy5qc29uKFwiL2Rpc3QvZGF0YS9jb3VudHJpZXMuanNvblwiKS50aGVuKGRhdGEgPT4ge1xuICAgICAgdGhhdC5zZXREYXRhKGRhdGEpO1xuICAgICAgLy8gdGhhdC5saW5lcygpO1xuICAgICAgdGhhdC5jaXJjbGVzKCk7XG4gICAgICAvLyB0aGF0LnBlcmNlbnRhZ2VMYWJlbHMoKTtcbiAgICB9KTtcbiAgfVxuICAvLyBsaW5lcygpIHtcbiAgLy8gICBsZXQgbGluZSA9IGQzXG4gIC8vICAgICAubGluZSgpXG4gIC8vICAgICAueChkID0+IHRoaXMueFNjYWxlKGQuZ3JhcGhSYW5raW5nKSlcbiAgLy8gICAgIC55KGQgPT4gdGhpcy55U2NhbGUoZC5ncmFwaEdkcCkpO1xuICAvLyAgIGRlYnVnZ2VyXG4gIC8vICAgdGhpcy5jaGFydFxuICAvLyAgICAgLnNlbGVjdEFsbChcIi5saW5lXCIpXG4gIC8vICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gIC8vICAgICAuZW50ZXIoKVxuICAvLyAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgLy8gICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDI1LCA1KVwiKVxuICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBsaW5lIGNpdHkgJHtkLmNsYXNzfWApXG4gIC8vICAgICAuYXR0cihcImRcIiwgZCA9PiBsaW5lKGQuZGl2ZXJzaXR5KSlcbiAgLy8gICAgIC5zdHlsZShcInN0cm9rZVwiLCBkID0+IGQuY29sb3IpXG4gIC8vICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgLy8gICAgIC5zdHlsZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gIC8vIH1cblxuICBjaXJjbGVzKCkge1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLy8gLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBgY2l0eSAke2QuY2xhc3N9YClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQuY29udGluZW50ID09PSAnQWZyaWNhJykge1xuICAgICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSAnQXNpYScpIHtcbiAgICAgICAgICByZXR1cm4gXCJibHVlXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09ICdOb3J0aCBBbWVyaWNhJykge1xuICAgICAgICAgIHJldHVybiBcIm9yYW5nZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIlNvdXRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcImdyZWVuXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiRXVyb3BlXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJwdXJwbGVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgXCIuNFwiKVxuICAgICAgLmF0dHIoJ2JvcmRlcicsICcxcHggc29saWQgZ3JleScpXG4gICAgICAvLyAuc2VsZWN0QWxsKClcbiAgICAgIC8vIC5kYXRhKGQgPT4gZClcbiAgICAgIC8vIC5lbnRlcigpXG4gICAgICAuYXR0cihcImN4XCIsIGQgPT4ge1xuICAgICAgICAvLyByZXR1cm4gMTAwO1xuICAgICAgICByZXR1cm4gdGhpcy54U2NhbGUoZC5ncmFwaEdkcCAvIDE1NikgKyAyNTtcbiAgICAgIH0pXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZGVsYXkoKGQsIGkpID0+IGkgKiBBTklNQVRJT05fREVMQVkpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgLmVhc2UoQU5JTUFUSU9OX0VBU0lORylcbiAgICAgIC5hdHRyKFwiclwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQucG9wdWxhdGlvbiA+IDEwMDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAyNTAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiAxMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDI1MDAwMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDI1MDAwMDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7XG4gICAgICAgIC8vIHJldHVybiAxMDA7XG4gICAgICAgIHJldHVybiB0aGlzLnlTY2FsZShkLmdyYXBoUmFua2luZyAvIDE1NilcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gcGVyY2VudGFnZUxhYmVscygpIHtcbiAgLy8gICAvLyBkZWJ1Z2dlcjtcblxuICAvLyAgIHRoaXMuY2hhcnRcbiAgLy8gICAgIC5zZWxlY3RBbGwoKVxuICAvLyAgICAgLmRhdGEoKCkgPT4gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpKVxuICAvLyAgICAgLmVudGVyKClcbiAgLy8gICAgIC5hcHBlbmQoXCJnXCIpXG4gIC8vICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGNpdHkgJHtkLmNsYXNzfSBjaXR5LWRhdGEtdG9nZ2xlYClcbiAgLy8gICAgIC5zZWxlY3RBbGwoXCIubGluZS1wb2ludFwiKVxuICAvLyAgICAgLmRhdGEoZCA9PiBkLmRpdmVyc2l0eSlcbiAgLy8gICAgIC5lbnRlcigpXG4gIC8vICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAvLyAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAvLyAgICAgLnRleHQoZCA9PiBkMy5mb3JtYXQoXCIuMCVcIikoZC5wZXJjZW50YWdlKSlcbiAgLy8gICAgIC5hdHRyKFwieFwiLCBkID0+IHRoaXMueFNjYWxlKGQuZXRobmljaXR5KSArIDI1KVxuICAvLyAgICAgLmF0dHIoXCJ5XCIsIGQgPT4gdGhpcy55U2NhbGUoZC5wZXJjZW50YWdlKSAtIDEwKVxuICAvLyAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmxkR3JhcGg7Il0sInNvdXJjZVJvb3QiOiIifQ==