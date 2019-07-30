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
      this.chart.selectAll("circle").data(Object.values(this.data)).enter().append("circle") // .append("g")
      .attr("class", function (d) {
        return "city ".concat(d["class"]);
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
      }).attr("opacity", ".7").attr("stroke", "#CDCDCD").attr("stroke-width", "2px") // .selectAll()
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
          return d.population / 100000;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkX2dyYXBoLmpzIl0sIm5hbWVzIjpbIkNoYXJ0Iiwic2VsZWN0b3IiLCJvcHRpb25zIiwic2V0Q2hhcnQiLCJnZXREYXRhIiwic2V0TGFiZWxzIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIkhFSUdIVCIsIk1BUkdJTlMiLCJXSURUSCIsImNoYXJ0IiwiYXBwZW5kIiwidGhhdCIsImpzb24iLCJ0aGVuIiwiZGF0YSIsInNldERhdGEiLCJ0aWNrcyIsInRpY2tGb3JtYXQiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwiZG9tYWluIiwieEF4aXNDYWxsIiwiYXhpc0JvdHRvbSIsImZvcm1hdCIsImNhbGwiLCJ5U2NhbGUiLCJwYWRkaW5nIiwiYXhpc0xlZnQiLCJ4TGFiZWwiLCJ0ZXh0IiwieUxhYmVsIiwic2NhbGUiLCJwb3NpdGlvbiIsInRpY2tTaXplIiwic2VsZWN0QWxsIiwic29ydGVkRGF0YSIsImVudGVyIiwiZCIsImNpdHkiLCJzdHlsZSIsImkiLCJQTEFOTyIsIlBMQU5PX0NJVFkiLCJQTEFOT19DTEFTUyIsIlBMQU5PX0NPTE9SIiwiSVJWSU5FIiwiSVJWSU5FX0NJVFkiLCJJUlZJTkVfQ0xBU1MiLCJJUlZJTkVfQ09MT1IiLCJNQURJU09OIiwiTUFESVNPTl9DSVRZIiwiTUFESVNPTl9DTEFTUyIsIk1BRElTT05fQ09MT1IiLCJGUkVNT05UIiwiRlJFTU9OVF9DSVRZIiwiRlJFTU9OVF9DTEFTUyIsIkZSRU1PTlRfQ09MT1IiLCJIVU5USU5HVE9OX0JFQUNIIiwiSFVOVElOR1RPTl9CRUFDSF9DSVRZIiwiSFVOVElOR1RPTl9CRUFDSF9DTEFTUyIsIkhVTlRJTkdUT05fQkVBQ0hfQ09MT1IiLCJGQVJHTyIsIkZBUkdPX0NJVFkiLCJGQVJHT19DTEFTUyIsIkZBUkdPX0NPTE9SIiwiR1JBTkRfUFJBSVJJRSIsIkdSQU5EX1BSQUlSSUVfQ0lUWSIsIkdSQU5EX1BSQUlSSUVfQ0xBU1MiLCJHUkFORF9QUkFJUklFX0NPTE9SIiwiU0FOX0pPU0UiLCJTQU5fSk9TRV9DSVRZIiwiU0FOX0pPU0VfQ0xBU1MiLCJTQU5fSk9TRV9DT0xPUiIsIlNDT1RUU0RBTEUiLCJTQ09UVFNEQUxFX0NJVFkiLCJTQ09UVFNEQUxFX0NMQVNTIiwiU0NPVFRTREFMRV9DT0xPUiIsIlNBTl9GUkFOQ0lTQ08iLCJTQU5fRlJBTkNJU0NPX0NJVFkiLCJTQU5fRlJBTkNJU0NPX0NMQVNTIiwiU0FOX0ZSQU5DSVNDT19DT0xPUiIsIkJJU01BUkNLIiwiQklTTUFSQ0tfQ0lUWSIsIkJJU01BUkNLX0NMQVNTIiwiQklTTUFSQ0tfQ09MT1IiLCJPVkVSTEFORF9QQVJLIiwiT1ZFUkxBTkRfUEFSS19DSVRZIiwiT1ZFUkxBTkRfUEFSS19DTEFTUyIsIk9WRVJMQU5EX1BBUktfQ09MT1IiLCJTQU5UQV9ST1NBIiwiU0FOVEFfUk9TQV9DSVRZIiwiU0FOVEFfUk9TQV9DTEFTUyIsIlNBTlRBX1JPU0FfQ09MT1IiLCJBVVNUSU4iLCJBVVNUSU5fQ0lUWSIsIkFVU1RJTl9DTEFTUyIsIkFVU1RJTl9DT0xPUiIsIlNJT1VYX0ZBTExTIiwiU0lPVVhfRkFMTFNfQ0lUWSIsIlNJT1VYX0ZBTExTX0NMQVNTIiwiU0lPVVhfRkFMTFNfQ09MT1IiLCJQRUFSTF9DSVRZIiwiUEVBUkxfQ0lUWV9DSVRZIiwiUEVBUkxfQ0lUWV9DTEFTUyIsIlBFQVJMX0NJVFlfQ09MT1IiLCJHTEVOREFMRSIsIkdMRU5EQUxFX0NJVFkiLCJHTEVOREFMRV9DTEFTUyIsIkdMRU5EQUxFX0NPTE9SIiwiU0FOX0RJRUdPIiwiU0FOX0RJRUdPX0NJVFkiLCJTQU5fRElFR09fQ0xBU1MiLCJTQU5fRElFR09fQ09MT1IiLCJTVF9QQVVMIiwiU1RfUEFVTF9DSVRZIiwiU1RfUEFVTF9DTEFTUyIsIlNUX1BBVUxfQ09MT1IiLCJDSEFSTEVTVE9OIiwiQ0hBUkxFU1RPTl9DSVRZIiwiQ0hBUkxFU1RPTl9DTEFTUyIsIkNIQVJMRVNUT05fQ09MT1IiLCJHSUxCRVJUIiwiR0lMQkVSVF9DSVRZIiwiR0lMQkVSVF9DTEFTUyIsIkdJTEJFUlRfQ09MT1IiLCJBTkFIRUlNIiwiQU5BSEVJTV9DSVRZIiwiQU5BSEVJTV9DTEFTUyIsIkFOQUhFSU1fQ09MT1IiLCJSQUxFSUdIIiwiUkFMRUlHSF9DSVRZIiwiUkFMRUlHSF9DTEFTUyIsIlJBTEVJR0hfQ09MT1IiLCJDQVBFX0NPUkFMIiwiQ0FQRV9DT1JBTF9DSVRZIiwiQ0FQRV9DT1JBTF9DTEFTUyIsIkNBUEVfQ09SQUxfQ09MT1IiLCJDRURBUl9SQVBJRFMiLCJDRURBUl9SQVBJRFNfQ0lUWSIsIkNFREFSX1JBUElEU19DTEFTUyIsIkNFREFSX1JBUElEU19DT0xPUiIsIkNJVElFUyIsImNvbnN0YW50IiwiY29sb3IiLCJlbW90aW9uYWxXZWxsYmVpbmciLCJpbmNvbWVFbXBsb3ltZW50IiwiY29tbXVuaXR5RW52aXJvbm1lbnQiLCJ4IiwieSIsImhhcHBpbmVzc1Njb3JlIiwicmFua2luZyIsIkFOSU1BVElPTl9EVVJBVElPTiIsIkFOSU1BVElPTl9ERUxBWSIsIkFOSU1BVElPTl9FQVNJTkciLCJlYXNlUG9seSIsIkZpbHRlciIsImZpbHRlckRhdGEiLCJ0b29sdGlwIiwib24iLCJjbGFzc05hbWUiLCJzcGxpdCIsImpvaW4iLCJhbGxPdGhlckNpdHlEYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsImh0bWwiLCJtYWluSGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImFsbENpdHlEYXRhIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIldvcmxkR3JhcGgiLCJ4QXhpcyIsInlBeGlzIiwiY2lyY2xlcyIsIk9iamVjdCIsInZhbHVlcyIsImNvbnRpbmVudCIsImdyYXBoR2RwIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJlYXNlIiwicG9wdWxhdGlvbiIsImdyYXBoUmFua2luZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztJQVNNQSxLOzs7QUFDSixpQkFBWUMsUUFBWixFQUFzQkMsT0FBdEIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0MsUUFBTCxDQUFjRixRQUFkLEVBQXdCQyxPQUF4QjtBQUNBLFNBQUtFLE9BQUw7QUFDQSxTQUFLQyxTQUFMLEdBSDZCLENBSTdCO0FBQ0Q7Ozs7NkJBRVFKLFEsRUFBcUQ7QUFBQSxVQUEzQ0MsT0FBMkMsdUVBQWpDO0FBQUVJLGlCQUFTLEVBQUUsQ0FBYjtBQUFnQkMsa0JBQVUsRUFBRTtB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R2lDLFFBbENILENBa0NZbEMsNkRBbENaLEVBbUNHbUMsSUFuQ0gsQ0FtQ1FqQywyREFuQ1IsRUFvQ0dySixJQXBDSCxDQW9DUSxHQXBDUixFQW9DYSxVQUFBaUMsQ0FBQyxFQUFJO0FBQ2QsWUFBSUEsQ0FBQyxDQUFDc0osVUFBRixHQUFlLFNBQW5CLEVBQThCO0FBQzVCLGlCQUFPdEosQ0FBQyxDQUFDc0osVUFBRixHQUFlLFFBQXRCO0FBQ0QsU0FGRCxNQUVPLElBQUl0SixDQUFDLENBQUNzSixVQUFGLEdBQWUsT0FBbkIsRUFBNEI7QUFDakMsaUJBQU90SixDQUFDLENBQUNzSixVQUFGLEdBQWUsT0FBdEI7QUFDRCxTQUZNLE1BRUE7QUFDTCxpQkFBT3RKLENBQUMsQ0FBQ3NKLFVBQUYsR0FBZSxNQUF0QjtBQUNEO0FBQ0YsT0E1Q0gsRUE2Q0d2TCxJQTdDSCxDQTZDUSxJQTdDUixFQTZDYyxVQUFBaUMsQ0FBQyxFQUFJO0FBQ2Y7QUFDQSxlQUFPLE1BQUksQ0FBQ1osTUFBTCxDQUFZWSxDQUFDLENBQUN1SixZQUFGLEdBQWlCLEdBQTdCLENBQVA7QUFDRCxPQWhESDtBQWlERCxLLENBRUQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztFQWxIdUJuTSw4Qzs7QUFxSFZzTCx5RUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7XG4gIEhFSUdIVCxcbiAgTUFSR0lOUyxcbiAgV0lEVEgsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbiAgQU5JTUFUSU9OX0RFTEFZLFxuICBBTklNQVRJT05fRUFTSU5HXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyk7XG4gICAgdGhpcy5nZXREYXRhKCk7XG4gICAgdGhpcy5zZXRMYWJlbHMoKTtcbiAgICAvLyB0aGlzLmRhdGEgPSBudWxsO1xuICB9XG5cbiAgc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMgPSB7IHRvcE9mZnNldDogMCwgbGVmdE9mZnNldDogMCB9KSB7XG4gICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgIC5zZWxlY3Qoc2VsZWN0b3IpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBIRUlHSFQgKyBNQVJHSU5TICogMilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggKyBNQVJHSU5TICogMik7XG4gICAgdGhpcy5jaGFydCA9IHN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFxuICAgICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgICBgdHJhbnNsYXRlKCR7TUFSR0lOUyArIG9wdGlvbnMubGVmdE9mZnNldH0sICR7TUFSR0lOUyAvIDIgK1xuICAgICAgICAgIG9wdGlvbnMudG9wT2Zmc2V0fSlgXG4gICAgICApO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgZDMuanNvbihcIi9kaXN0L2RhdGEvY291bnRyaWVzLmpzb25cIikudGhlbihkYXRhID0+IHtcbiAgICAgIHRoYXQuc2V0RGF0YShkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldERhdGEoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICB4QXhpcyh0aWNrcyA9IDIwLCB0aWNrRm9ybWF0ID0gKCkgPT4ge30pIHtcbiAgICB0aGlzLnhTY2FsZSA9IGQzXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCBXSURUSF0pXG4gICAgICAuZG9tYWluKFswLCAxXSk7XG4gICAgbGV0IHhBeGlzQ2FsbCA9IGQzXG4gICAgICAuYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSlcbiAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgIC50aWNrRm9ybWF0KGQzLmZvcm1hdChcIi4wJVwiKSk7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtIRUlHSFR9KWApXG4gICAgICAuY2FsbCh4QXhpc0NhbGwpO1xuICB9XG5cbiAgeUF4aXMoZG9tYWluLCB5U2NhbGUsIHRpY2tzID0gNSwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgaWYgKHlTY2FsZSA9PT0gXCJzY2FsZUJhbmRcIikge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgSEVJR0hUXSlcbiAgICAgICAgLnBhZGRpbmcoMC44KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgSEVJR0hUXSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydC5hcHBlbmQoXCJnXCIpLmNhbGwoXG4gICAgICBkM1xuICAgICAgICAuYXhpc0xlZnQodGhpcy55U2NhbGUpXG4gICAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgICAgLnRpY2tGb3JtYXQodGlja0Zvcm1hdCgpKVxuICAgICk7XG4gIH1cblxuICBzZXRMYWJlbHMoKSB7XG4gICAgLy8gTGFiZWxzXG4gICAgdmFyIHhMYWJlbCA9IHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIEhFSUdIVCArIDUwKVxuICAgICAgLmF0dHIoXCJ4XCIsIFdJRFRIIC8gMilcbiAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjBweFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJHRFAgUGVyIENhcGl0YSAoJClcIik7XG4gICAgdmFyIHlMYWJlbCA9IHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIC02NSlcbiAgICAgIC5hdHRyKFwieFwiLCAtMzUwKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMHB4XCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkhhcHBpbmVzcyBJbmRleCAoJSlcIik7XG4gIH1cblxuICBncmlkTGluZXMoc2NhbGUsIHBvc2l0aW9uLCB0aWNrcyA9IDUpIHtcbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImdyaWRcIilcbiAgICAgIC5jYWxsKGQzW3Bvc2l0aW9uXSkoKVxuICAgICAgLnNjYWxlKHNjYWxlKVxuICAgICAgLnRpY2tTaXplKFdJRFRILCAwLCAwKVxuICAgICAgLnRpY2tGb3JtYXQoXCJcIilcbiAgICAgIC50aWNrcyh0aWNrcyk7XG4gIH1cblxuICByZWN0YW5nbGVMYWJlbHModGV4dCkge1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgLmRhdGEodGhpcy5zb3J0ZWREYXRhKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGNpdHkgJHtkLmNsYXNzfSBiYXItbGFiZWwgY2l0eS1kYXRhLXRvZ2dsZWApXG4gICAgICAuYXR0cihcInhcIiwgNSlcbiAgICAgIC5hdHRyKFwieVwiLCBkID0+IHRoaXMueVNjYWxlKGQuY2l0eSkgLSAyKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiNmZmZcIilcbiAgICAgIC50ZXh0KChkLCBpKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHJldHVybiBkW3RleHRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0ZXh0LmNhbGwoZCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICB9XG5cbiAgbGFiZWxUb3AodGV4dCkge1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGFiZWwtdGV4dFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIFdJRFRIIC8gMilcbiAgICAgIC5hdHRyKFwieVwiLCAtMjApXG4gICAgICAudGV4dCh0ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiIsImV4cG9ydCBjb25zdCBQTEFOTyA9IFwiUExBTk9cIjtcbmNvbnN0IFBMQU5PX0NJVFkgPSBcIlBsYW5vXCI7XG5jb25zdCBQTEFOT19DTEFTUyA9IFwiY2l0eS1QbGFub1wiO1xuY29uc3QgUExBTk9fQ09MT1IgPSBcIiM1MWVhZWFcIjtcblxuZXhwb3J0IGNvbnN0IElSVklORSA9IFwiSVJWSU5FXCI7XG5jb25zdCBJUlZJTkVfQ0lUWSA9IFwiSVJWSU5FXCI7XG5jb25zdCBJUlZJTkVfQ0xBU1MgPSBcImNpdHktSXJ2aW5lXCI7XG5jb25zdCBJUlZJTkVfQ09MT1IgPSBcIiNmZjlkNzZcIjtcblxuZXhwb3J0IGNvbnN0IE1BRElTT04gPSBcIk1BRElTT05cIjtcbmNvbnN0IE1BRElTT05fQ0lUWSA9IFwiTUFESVNPTlwiO1xuY29uc3QgTUFESVNPTl9DTEFTUyA9IFwiY2l0eS1NYWRpc29uXCI7XG5jb25zdCBNQURJU09OX0NPTE9SID0gXCIjZmIzNTY5XCI7XG5cbmV4cG9ydCBjb25zdCBGUkVNT05UID0gXCJGUkVNT05UXCI7XG5jb25zdCBGUkVNT05UX0NJVFkgPSBcIkZSRU1PTlRcIjtcbmNvbnN0IEZSRU1PTlRfQ0xBU1MgPSBcImNpdHktRnJlbW9udFwiO1xuY29uc3QgRlJFTU9OVF9DT0xPUiA9IFwiI2ZhODZiZVwiO1xuXG5leHBvcnQgY29uc3QgSFVOVElOR1RPTl9CRUFDSCA9IFwiSFVOVElOR1RPTl9CRUFDSFwiO1xuY29uc3QgSFVOVElOR1RPTl9CRUFDSF9DSVRZID0gXCJIVU5USU5HVE9OX0JFQUNIXCI7XG5jb25zdCBIVU5USU5HVE9OX0JFQUNIX0NMQVNTID0gXCJjaXR5LUh1bnRpbmd0b24tQmVhY2hcIjtcbmNvbnN0IEhVTlRJTkdUT05fQkVBQ0hfQ09MT1IgPSBcIiNhMjc1ZTNcIjtcblxuZXhwb3J0IGNvbnN0IEZBUkdPID0gXCJGQVJHT1wiO1xuY29uc3QgRkFSR09fQ0lUWSA9IFwiRkFSR09cIjtcbmNvbnN0IEZBUkdPX0NMQVNTID0gXCJjaXR5LUZhcmdvXCI7XG5jb25zdCBGQVJHT19DT0xPUiA9IFwiI2ZmMWY1YVwiO1xuXG5leHBvcnQgY29uc3QgR1JBTkRfUFJBSVJJRSA9IFwiR1JBTkRfUFJBSVJJRVwiO1xuY29uc3QgR1JBTkRfUFJBSVJJRV9DSVRZID0gXCJHUkFORF9QUkFJUklFXCI7XG5jb25zdCBHUkFORF9QUkFJUklFX0NMQVNTID0gXCJjaXR5LUdyYW5kLVByYWlyaWVcIjtcbmNvbnN0IEdSQU5EX1BSQUlSSUVfQ09MT1IgPSBcIiM2OTAwZmZcIjtcblxuZXhwb3J0IGNvbnN0IFNBTl9KT1NFID0gXCJTQU5fSk9TRVwiO1xuY29uc3QgU0FOX0pPU0VfQ0lUWSA9IFwiU0FOX0pPU0VcIjtcbmNvbnN0IFNBTl9KT1NFX0NMQVNTID0gXCJjaXR5LVNhbi1Kb3NlXCI7XG5jb25zdCBTQU5fSk9TRV9DT0xPUiA9IFwiI2ZmZDcwMFwiO1xuXG5leHBvcnQgY29uc3QgU0NPVFRTREFMRSA9IFwiU0NPVFRTREFMRVwiO1xuY29uc3QgU0NPVFRTREFMRV9DSVRZID0gXCJTQ09UVFNEQUxFXCI7XG5jb25zdCBTQ09UVFNEQUxFX0NMQVNTID0gXCJjaXR5LVNjb3R0c2RhbGVcIjtcbmNvbnN0IFNDT1RUU0RBTEVfQ09MT1IgPSBcIiNmZjYxMzhcIjtcblxuZXhwb3J0IGNvbnN0IFNBTl9GUkFOQ0lTQ08gPSBcIlNBTl9GUkFOQ0lTQ09cIjtcbmNvbnN0IFNBTl9GUkFOQ0lTQ09fQ0lUWSA9IFwiU0FOX0ZSQU5DSVNDT1wiO1xuY29uc3QgU0FOX0ZSQU5DSVNDT19DTEFTUyA9IFwiY2l0eS1TYW4tRnJhbmNpc2NvXCI7XG5jb25zdCBTQU5fRlJBTkNJU0NPX0NPTE9SID0gXCIjMzAzNDgxXCI7XG5cbmV4cG9ydCBjb25zdCBCSVNNQVJDSyA9IFwiQklTTUFSQ0tcIjtcbmNvbnN0IEJJU01BUkNLX0NJVFkgPSBcIkJJU01BUkNLXCI7XG5jb25zdCBCSVNNQVJDS19DTEFTUyA9IFwiY2l0eS1CaXNtYXJja1wiO1xuY29uc3QgQklTTUFSQ0tfQ09MT1IgPSBcIiM3Y2JkMWVcIjtcblxuZXhwb3J0IGNvbnN0IE9WRVJMQU5EX1BBUksgPSBcIk9WRVJMQU5EX1BBUktcIjtcbmNvbnN0IE9WRVJMQU5EX1BBUktfQ0lUWSA9IFwiT1ZFUkxBTkRfUEFSS1wiO1xuY29uc3QgT1ZFUkxBTkRfUEFSS19DTEFTUyA9IFwiY2l0eS1PdmVybGFuZC1QYXJrXCI7XG5jb25zdCBPVkVSTEFORF9QQVJLX0NPTE9SID0gXCIjMDA5Mzc4XCI7XG5cbmV4cG9ydCBjb25zdCBTQU5UQV9ST1NBID0gXCJTQU5UQV9ST1NBXCI7XG5jb25zdCBTQU5UQV9ST1NBX0NJVFkgPSBcIlNBTlRBX1JPU0FcIjtcbmNvbnN0IFNBTlRBX1JPU0FfQ0xBU1MgPSBcImNpdHktU2FudGEtUm9zYVwiO1xuY29uc3QgU0FOVEFfUk9TQV9DT0xPUiA9IFwiI2Y2MGM4NlwiO1xuXG5leHBvcnQgY29uc3QgQVVTVElOID0gXCJBVVNUSU5cIjtcbmNvbnN0IEFVU1RJTl9DSVRZID0gXCJBVVNUSU5cIjtcbmNvbnN0IEFVU1RJTl9DTEFTUyA9IFwiY2l0eS1BdXN0aW5cIjtcbmNvbnN0IEFVU1RJTl9DT0xPUiA9IFwiI2Y5ZDAwZlwiO1xuXG5leHBvcnQgY29uc3QgU0lPVVhfRkFMTFMgPSBcIlNJT1VYX0ZBTExTXCI7XG5jb25zdCBTSU9VWF9GQUxMU19DSVRZID0gXCJTSU9VWF9GQUxMU1wiO1xuY29uc3QgU0lPVVhfRkFMTFNfQ0xBU1MgPSBcImNpdHktU2lvdXgtRmFsbHNcIjtcbmNvbnN0IFNJT1VYX0ZBTExTX0NPTE9SID0gXCIjMzAzODQxXCI7XG5cbmV4cG9ydCBjb25zdCBQRUFSTF9DSVRZID0gXCJQRUFSTF9DSVRZXCI7XG5jb25zdCBQRUFSTF9DSVRZX0NJVFkgPSBcIlBFQVJMX0NJVFlcIjtcbmNvbnN0IFBFQVJMX0NJVFlfQ0xBU1MgPSBcImNpdHktUGVhcmwtQ2l0eVwiO1xuY29uc3QgUEVBUkxfQ0lUWV9DT0xPUiA9IFwiIzk2Y2QzOVwiO1xuXG5leHBvcnQgY29uc3QgR0xFTkRBTEUgPSBcIkdMRU5EQUxFXCI7XG5jb25zdCBHTEVOREFMRV9DSVRZID0gXCJHTEVOREFMRVwiO1xuY29uc3QgR0xFTkRBTEVfQ0xBU1MgPSBcImNpdHktR2xlbmRhbGVcIjtcbmNvbnN0IEdMRU5EQUxFX0NPTE9SID0gXCIjMmZjNWNjXCI7XG5cbmV4cG9ydCBjb25zdCBTQU5fRElFR08gPSBcIlNBTl9ESUVHT1wiO1xuY29uc3QgU0FOX0RJRUdPX0NJVFkgPSBcIlNBTl9ESUVHT1wiO1xuY29uc3QgU0FOX0RJRUdPX0NMQVNTID0gXCJjaXR5LVNhbi1EaWVnb1wiO1xuY29uc3QgU0FOX0RJRUdPX0NPTE9SID0gXCIjZmY1YjQ0XCI7XG5cbmV4cG9ydCBjb25zdCBTVF9QQVVMID0gXCJTVF9QQVVMXCI7XG5jb25zdCBTVF9QQVVMX0NJVFkgPSBcIlNUX1BBVUxcIjtcbmNvbnN0IFNUX1BBVUxfQ0xBU1MgPSBcImNpdHktU3QtUGF1bFwiO1xuY29uc3QgU1RfUEFVTF9DT0xPUiA9IFwiI2JmNjhmNlwiO1xuXG5leHBvcnQgY29uc3QgQ0hBUkxFU1RPTiA9IFwiQ0hBUkxFU1RPTlwiO1xuY29uc3QgQ0hBUkxFU1RPTl9DSVRZID0gXCJDSEFSTEVTVE9OXCI7XG5jb25zdCBDSEFSTEVTVE9OX0NMQVNTID0gXCJjaXR5LUNoYXJsZXN0b25cIjtcbmNvbnN0IENIQVJMRVNUT05fQ09MT1IgPSBcIiNmOTI3MjdcIjtcblxuZXhwb3J0IGNvbnN0IEdJTEJFUlQgPSBcIkdJTEJFUlRcIjtcbmNvbnN0IEdJTEJFUlRfQ0lUWSA9IFwiR0lMQkVSVFwiO1xuY29uc3QgR0lMQkVSVF9DTEFTUyA9IFwiY2l0eS1HaWxiZXJ0XCI7XG5jb25zdCBHSUxCRVJUX0NPTE9SID0gXCIjZmYwNTkyXCI7XG5cbmV4cG9ydCBjb25zdCBBTkFIRUlNID0gXCJBTkFIRUlNXCI7XG5jb25zdCBBTkFIRUlNX0NJVFkgPSBcIkFOQUhFSU1cIjtcbmNvbnN0IEFOQUhFSU1fQ0xBU1MgPSBcImNpdHktQW5haGVpbVwiO1xuY29uc3QgQU5BSEVJTV9DT0xPUiA9IFwiI2E1OGJmZlwiO1xuXG5leHBvcnQgY29uc3QgUkFMRUlHSCA9IFwiUkFMRUlHSFwiO1xuY29uc3QgUkFMRUlHSF9DSVRZID0gXCJSQUxFSUdIXCI7XG5jb25zdCBSQUxFSUdIX0NMQVNTID0gXCJjaXR5LVJhbGVpZ2hcIjtcbmNvbnN0IFJBTEVJR0hfQ09MT1IgPSBcIiMwMDkzNzhcIjtcblxuZXhwb3J0IGNvbnN0IENBUEVfQ09SQUwgPSBcIkNBUEVfQ09SQUxcIjtcbmNvbnN0IENBUEVfQ09SQUxfQ0lUWSA9IFwiQ0FQRV9DT1JBTFwiO1xuY29uc3QgQ0FQRV9DT1JBTF9DTEFTUyA9IFwiY2l0eS1DYXBlLUNvcmFsXCI7XG5jb25zdCBDQVBFX0NPUkFMX0NPTE9SID0gXCIjZmMzNDVjXCI7XG5cbmV4cG9ydCBjb25zdCBDRURBUl9SQVBJRFMgPSBcIkNFREFSX1JBUElEU1wiO1xuY29uc3QgQ0VEQVJfUkFQSURTX0NJVFkgPSBcIkNFREFSX1JBUElEU1wiO1xuY29uc3QgQ0VEQVJfUkFQSURTX0NMQVNTID0gXCJjaXR5LUNlZGFyLVJhcGlkc1wiO1xuY29uc3QgQ0VEQVJfUkFQSURTX0NPTE9SID0gXCIjM2Q2Y2I5XCI7XG5cbmV4cG9ydCBjb25zdCBDSVRJRVMgPSB7XG4gIFBMQU5POiB7XG4gICAgY2l0eTogXCJQbGFub1wiLFxuICAgIGNvbnN0YW50OiBQTEFOTyxcbiAgICBjbGFzczogUExBTk9fQ0xBU1MsXG4gICAgY29sb3I6IFBMQU5PX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA0LFxuICAgIHBvc2l0aW9uOiB7IHg6IDUyNiwgeTogMzkwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDcyLjMsXG4gICAgcmFua2luZzogMVxuICB9LFxuICBJUlZJTkU6IHtcbiAgICBjaXR5OiBcIklydmluZVwiLFxuICAgIGNvbnN0YW50OiBJUlZJTkUsXG4gICAgY2xhc3M6IElSVklORV9DTEFTUyxcbiAgICBjb2xvcjogSVJWSU5FX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogOCxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA2LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAzLFxuICAgIHBvc2l0aW9uOiB7IHg6IDE4MCwgeTogMzAwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDcxLjg2LFxuICAgIHJhbmtpbmc6IDJcbiAgfSxcbiAgTUFESVNPTjoge1xuICAgIGNpdHk6IFwiTWFkaXNvblwiLFxuICAgIGNvbnN0YW50OiBNQURJU09OLFxuICAgIGNsYXNzOiBNQURJU09OX0NMQVNTLFxuICAgIGNvbG9yOiBNQURJU09OX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA4LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA0LFxuICAgIHBvc2l0aW9uOiB7IHg6IDY0MCwgeTogMTYwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDcxLjgxLFxuICAgIHJhbmtpbmc6IDNcbiAgfSxcbiAgRlJFTU9OVDoge1xuICAgIGNpdHk6IFwiRnJlbW9udFwiLFxuICAgIGNvbnN0YW50OiBGUkVNT05ULFxuICAgIGNsYXNzOiBGUkVNT05UX0NMQVNTLFxuICAgIGNvbG9yOiBGUkVNT05UX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAyMCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMSxcbiAgICBwb3NpdGlvbjogeyB4OiAxNTEsIHk6IDIyNSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA3MS4xNyxcbiAgICByYW5raW5nOiA0XG4gIH0sXG4gIEhVTlRJTkdUT05fQkVBQ0g6IHtcbiAgICBjaXR5OiBcIkh1bnRpbmd0b24gQmVhY2hcIixcbiAgICBjb25zdGFudDogSFVOVElOR1RPTl9CRUFDSCxcbiAgICBjbGFzczogSFVOVElOR1RPTl9CRUFDSF9DTEFTUyxcbiAgICBjb2xvcjogSFVOVElOR1RPTl9CRUFDSF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDMsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjUsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDE1LFxuICAgIHBvc2l0aW9uOiB7IHg6IDE1OSwgeTogMjkwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY5Ljc0LFxuICAgIHJhbmtpbmc6IDVcbiAgfSxcbiAgRkFSR086IHtcbiAgICBjaXR5OiBcIkZhcmdvXCIsXG4gICAgY29uc3RhbnQ6IEZBUkdPLFxuICAgIGNsYXNzOiBGQVJHT19DTEFTUyxcbiAgICBjb2xvcjogRkFSR09fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA5LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDExLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxMyxcbiAgICBwb3NpdGlvbjogeyB4OiA0OTgsIHk6IDk0IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY5LjU3LFxuICAgIHJhbmtpbmc6IDZcbiAgfSxcbiAgR1JBTkRfUFJBSVJJRToge1xuICAgIGNpdHk6IFwiR3JhbmQgUHJhaXJpZVwiLFxuICAgIGNvbnN0YW50OiBHUkFORF9QUkFJUklFLFxuICAgIGNsYXNzOiBHUkFORF9QUkFJUklFX0NMQVNTLFxuICAgIGNvbG9yOiBHUkFORF9QUkFJUklFX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTEsXG4gICAgaW5jb21lRW1wbG95bWVudDogMTksXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDMsXG4gICAgcG9zaXRpb246IHsgeDogNTI1LCB5OiA0MTAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjkuMyxcbiAgICByYW5raW5nOiA3XG4gIH0sXG4gIFNBTl9KT1NFOiB7XG4gICAgY2l0eTogXCJTYW4gSm9zZVwiLFxuICAgIGNvbnN0YW50OiBTQU5fSk9TRSxcbiAgICBjbGFzczogU0FOX0pPU0VfQ0xBU1MsXG4gICAgY29sb3I6IFNBTl9KT1NFX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAxMCxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMjQsXG4gICAgcG9zaXRpb246IHsgeDogMTQwLCB5OiAyNDAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjguOSxcbiAgICByYW5raW5nOiA4XG4gIH0sXG4gIFNDT1RUU0RBTEU6IHtcbiAgICBjaXR5OiBcIlNjb3R0c2RhbGVcIixcbiAgICBjb25zdGFudDogU0NPVFRTREFMRSxcbiAgICBjbGFzczogU0NPVFRTREFMRV9DTEFTUyxcbiAgICBjb2xvcjogU0NPVFRTREFMRV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDI1LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDcsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDEsXG4gICAgcG9zaXRpb246IHsgeDogMjcwLCB5OiAzNDEgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjguMjQsXG4gICAgcmFua2luZzogOVxuICB9LFxuICBTQU5fRlJBTkNJU0NPOiB7XG4gICAgY2l0eTogXCJTYW4gRnJhbmNpc2NvXCIsXG4gICAgY29uc3RhbnQ6IFNBTl9GUkFOQ0lTQ08sXG4gICAgY2xhc3M6IFNBTl9GUkFOQ0lTQ09fQ0xBU1MsXG4gICAgY29sb3I6IFNBTl9GUkFOQ0lTQ09fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDEsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDY5LFxuICAgIHBvc2l0aW9uOiB7IHg6IDEzNiwgeTogMjEyIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY3LjUzLFxuICAgIHJhbmtpbmc6IDEwXG4gIH0sXG4gIEJJU01BUkNLOiB7XG4gICAgY2l0eTogXCJCaXNtYXJja1wiLFxuICAgIGNvbnN0YW50OiBCSVNNQVJDSyxcbiAgICBjbGFzczogQklTTUFSQ0tfQ0xBU1MsXG4gICAgY29sb3I6IEJJU01BUkNLX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTQsXG4gICAgaW5jb21lRW1wbG95bWVudDogMixcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMjUsXG4gICAgcG9zaXRpb246IHsgeDogNDc4LCB5OiAxMDYgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjcuMzgsXG4gICAgcmFua2luZzogMTFcbiAgfSxcbiAgT1ZFUkxBTkRfUEFSSzoge1xuICAgIGNpdHk6IFwiT3ZlcmxhbmQgUGFya1wiLFxuICAgIGNvbnN0YW50OiBPVkVSTEFORF9QQVJLLFxuICAgIGNsYXNzOiBPVkVSTEFORF9QQVJLX0NMQVNTLFxuICAgIGNvbG9yOiBPVkVSTEFORF9QQVJLX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTIsXG4gICAgaW5jb21lRW1wbG95bWVudDogMzEsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDE0LFxuICAgIHBvc2l0aW9uOiB7IHg6IDU3MCwgeTogMjc4IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY3LjM3LFxuICAgIHJhbmtpbmc6IDEyXG4gIH0sXG4gIFNBTlRBX1JPU0E6IHtcbiAgICBjaXR5OiBcIlNhbnRhIFJvc2FcIixcbiAgICBjb25zdGFudDogU0FOVEFfUk9TQSxcbiAgICBjbGFzczogU0FOVEFfUk9TQV9DTEFTUyxcbiAgICBjb2xvcjogU0FOVEFfUk9TQV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEzLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDI5LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA1LFxuICAgIHBvc2l0aW9uOiB7IHg6IDEzMiwgeTogMTk2IH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY3LjE4LFxuICAgIHJhbmtpbmc6IDEzXG4gIH0sXG4gIEFVU1RJTjoge1xuICAgIGNpdHk6IFwiQXVzdGluXCIsXG4gICAgY29uc3RhbnQ6IEFVU1RJTixcbiAgICBjbGFzczogQVVTVElOX0NMQVNTLFxuICAgIGNvbG9yOiBBVVNUSU5fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA4LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDQsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQ0LFxuICAgIHBvc2l0aW9uOiB7IHg6IDQ5NywgeTogNDMwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY3LjE2LFxuICAgIHJhbmtpbmc6IDE0XG4gIH0sXG4gIFNJT1VYX0ZBTExTOiB7XG4gICAgY2l0eTogXCJTaW91eCBGYWxsc1wiLFxuICAgIGNvbnN0YW50OiBTSU9VWF9GQUxMUyxcbiAgICBjbGFzczogU0lPVVhfRkFMTFNfQ0xBU1MsXG4gICAgY29sb3I6IFNJT1VYX0ZBTExTX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNixcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzNyxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNTIsXG4gICAgcG9zaXRpb246IHsgeDogNTAwLCB5OiAxNjggfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjYuOTcsXG4gICAgcmFua2luZzogMTVcbiAgfSxcbiAgUEVBUkxfQ0lUWToge1xuICAgIGNpdHk6IFwiUGVhcmwgQ2l0eVwiLFxuICAgIGNvbnN0YW50OiBQRUFSTF9DSVRZLFxuICAgIGNsYXNzOiBQRUFSTF9DSVRZX0NMQVNTLFxuICAgIGNvbG9yOiBQRUFSTF9DSVRZX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMSxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiA4MSxcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogOCxcbiAgICBwb3NpdGlvbjogeyB4OiAzNTAsIHk6IDQ5MSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ni43NyxcbiAgICByYW5raW5nOiAxNlxuICB9LFxuICBHTEVOREFMRToge1xuICAgIGNpdHk6IFwiR2xlbmRhbGVcIixcbiAgICBjb25zdGFudDogR0xFTkRBTEUsXG4gICAgY2xhc3M6IEdMRU5EQUxFX0NMQVNTLFxuICAgIGNvbG9yOiBHTEVOREFMRV9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDE1LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDU2LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiA3LFxuICAgIHBvc2l0aW9uOiB7IHg6IDE2NywgeTogMjcyIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY2LjI1LFxuICAgIHJhbmtpbmc6IDE3XG4gIH0sXG4gIFNBTl9ESUVHTzoge1xuICAgIGNpdHk6IFwiU2FuIERpZWdvXCIsXG4gICAgY29uc3RhbnQ6IFNBTl9ESUVHTyxcbiAgICBjbGFzczogU0FOX0RJRUdPX0NMQVNTLFxuICAgIGNvbG9yOiBTQU5fRElFR09fQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA0LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDIwLFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyNSxcbiAgICBwb3NpdGlvbjogeyB4OiAxODcsIHk6IDMyMSB9LFxuICAgIGhhcHBpbmVzc1Njb3JlOiA2Ni4wMSxcbiAgICByYW5raW5nOiAxOFxuICB9LFxuICBTVF9QQVVMOiB7XG4gICAgY2l0eTogXCJTdC4gUGF1bFwiLFxuICAgIGNvbnN0YW50OiBTVF9QQVVMLFxuICAgIGNsYXNzOiBTVF9QQVVMX0NMQVNTLFxuICAgIGNvbG9yOiBTVF9QQVVMX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTAsXG4gICAgaW5jb21lRW1wbG95bWVudDogMzgsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDM2LFxuICAgIHBvc2l0aW9uOiB7IHg6IDU5MCwgeTogMTMzIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY1Ljc5LFxuICAgIHJhbmtpbmc6IDE5XG4gIH0sXG4gIENIQVJMRVNUT046IHtcbiAgICBjaXR5OiBcIkNoYXJsZXN0b25cIixcbiAgICBjb25zdGFudDogQ0hBUkxFU1RPTixcbiAgICBjbGFzczogQ0hBUkxFU1RPTl9DTEFTUyxcbiAgICBjb2xvcjogQ0hBUkxFU1RPTl9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDQxLFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDMsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDIsXG4gICAgcG9zaXRpb246IHsgeDogODA1LCB5OiA0MDAgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjUuNDgsXG4gICAgcmFua2luZzogMjBcbiAgfSxcbiAgR0lMQkVSVDoge1xuICAgIGNpdHk6IFwiR2lsYmVydFwiLFxuICAgIGNvbnN0YW50OiBHSUxCRVJULFxuICAgIGNsYXNzOiBHSUxCRVJUX0NMQVNTLFxuICAgIGNvbG9yOiBHSUxCRVJUX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMzAsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjYsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUsXG4gICAgcG9zaXRpb246IHsgeDogMjc3LCB5OiAzNjMgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjUuMDcsXG4gICAgcmFua2luZzogMjFcbiAgfSxcbiAgQU5BSEVJTToge1xuICAgIGNpdHk6IFwiQW5haGVpbVwiLFxuICAgIGNvbnN0YW50OiBBTkFIRUlNLFxuICAgIGNsYXNzOiBBTkFIRUlNX0NMQVNTLFxuICAgIGNvbG9yOiBBTkFIRUlNX0NPTE9SLFxuICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTYsXG4gICAgaW5jb21lRW1wbG95bWVudDogNDMsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDE5LFxuICAgIHBvc2l0aW9uOiB7IHg6IDE5NiwgeTogMjgyIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY1LjAyLFxuICAgIHJhbmtpbmc6IDIyXG4gIH0sXG4gIFJBTEVJR0g6IHtcbiAgICBjaXR5OiBcIlJhbGVpZ2hcIixcbiAgICBjb25zdGFudDogUkFMRUlHSCxcbiAgICBjbGFzczogUkFMRUlHSF9DTEFTUyxcbiAgICBjb2xvcjogUkFMRUlHSF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDcsXG4gICAgaW5jb21lRW1wbG95bWVudDogMjMsXG4gICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQ4LFxuICAgIHBvc2l0aW9uOiB7IHg6IDgzMCwgeTogMzEzIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY0Ljk5LFxuICAgIHJhbmtpbmc6IDIzXG4gIH0sXG4gIENBUEVfQ09SQUw6IHtcbiAgICBjaXR5OiBcIkNhcGUgQ29yYWxcIixcbiAgICBjb25zdGFudDogQ0FQRV9DT1JBTCxcbiAgICBjbGFzczogQ0FQRV9DT1JBTF9DTEFTUyxcbiAgICBjb2xvcjogQ0FQRV9DT1JBTF9DT0xPUixcbiAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDI4LFxuICAgIGluY29tZUVtcGxveW1lbnQ6IDQ4LFxuICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyLFxuICAgIHBvc2l0aW9uOiB7IHg6IDgwMCwgeTogNDgwIH0sXG4gICAgaGFwcGluZXNzU2NvcmU6IDY0Ljk2LFxuICAgIHJhbmtpbmc6IDI0XG4gIH0sXG4gIENFREFSX1JBUElEUzoge1xuICAgIGNpdHk6IFwiQ2VkYXIgUmFwaWRzXCIsXG4gICAgY29uc3RhbnQ6IENFREFSX1JBUElEUyxcbiAgICBjbGFzczogQ0VEQVJfUkFQSURTX0NMQVNTLFxuICAgIGNvbG9yOiBDRURBUl9SQVBJRFNfQ09MT1IsXG4gICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyMyxcbiAgICBpbmNvbWVFbXBsb3ltZW50OiAzMixcbiAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTEsXG4gICAgcG9zaXRpb246IHsgeDogNjAwLCB5OiAyMDUgfSxcbiAgICBoYXBwaW5lc3NTY29yZTogNjQuOSxcbiAgICByYW5raW5nOiAyNVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMTAwMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fREVMQVkgPSAwO1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9FQVNJTkcgPSBkMy5lYXNlUG9seTtcblxuZXhwb3J0IGNvbnN0IFdJRFRIID0gMTAwMDtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSA2MDA7XG5leHBvcnQgY29uc3QgTUFSR0lOUyA9IDEwMDtcbiIsImNsYXNzIEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVyRGF0YSgpO1xuICB9XG5cbiAgZmlsdGVyRGF0YSgpIHtcbiAgICBjb25zdCB0b29sdGlwID0gZDNcbiAgICAgIC5zZWxlY3QoYC5oZWFkZXJfX3Rvb2x0aXBgKVxuICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRvb2x0aXBcIilcbiAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwic29saWRcIilcbiAgICAgIC5zdHlsZShcImJvcmRlci13aWR0aFwiLCBcIjJweFwiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjVweFwiKVxuICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBcIjFyZW1cIik7XG5cbiAgICBkMy5zZWxlY3RBbGwoJy5jaXR5JylcbiAgICAgIC5vbignbW91c2VvdmVyJywgKGQsIGkpID0+IHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHR5cGVvZiBkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IGBjaXR5LSR7ZC5zcGxpdCgnICcpLmpvaW4oJy0nKX1gO1xuICAgICAgICB9IGVsc2UgaWYgKGQuZGF0YSkge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IGQuZGF0YS5jbGFzcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBkLmNsYXNzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbE90aGVyQ2l0eURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuY2l0eTpub3QoLiR7Y2xhc3NOYW1lfSlgKTtcbiAgICAgICAgYWxsT3RoZXJDaXR5RGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICAgIGRhdGEuY2xhc3NMaXN0LmFkZCgnZmlsdGVyJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gdG9vbHRpcCAgXG4gICAgICAgIHRvb2x0aXBcbiAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAgICAgICAuaHRtbChcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXBfX2lubmVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19jaXR5XCI+PHN0cm9uZz5DaXR5OiA8L3N0cm9uZz48c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5jaXR5XG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPk92ZXJhbGwgUmFuazo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQucmFua2luZ1xuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5Ub3RhbCBIYXBwaW5lc3MgU2NvcmU6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmhhcHBpbmVzc1Njb3JlXG4gICAgICAgICAgICAgICAgfS8xMDA8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5FbW90aW9uYWwgJiBQaHlzaWNhbCBXZWxsLUJlaW5nOjwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5lbW90aW9uYWxXZWxsYmVpbmdcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+SW5jb21lICYgRW1wbG95bWVudDo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuaW5jb21lRW1wbG95bWVudFxuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5Db21tdW5pdHkgJiBFbnZpcm9ubWVudDo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuY29tbXVuaXR5RW52aXJvbm1lbnRcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19oZWFkZXInKTtcbiAgICAgICAgbWFpbkhlYWRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGNvbG9yOiAke2QuY29sb3J9YCApO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsQ2l0eURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2l0eScpO1xuICAgICAgICBhbGxDaXR5RGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICAgIGRhdGEuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faGVhZGVyXCIpO1xuICAgICAgICBtYWluSGVhZGVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBjb2xvcjogaW5pdGlhbGApO1xuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IEZpbHRlciBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgV29ybGRHcmFwaCBmcm9tIFwiLi93b3JsZF9ncmFwaFwiO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBuZXcgV29ybGRHcmFwaChcInN2Zy5ncmFwaFwiKTtcbiAgLy8gbmV3IEZpbHRlcjtcbn0pOyIsImltcG9ydCB7XG4gIFdJRFRILCBcbiAgSEVJR0hULFxuICBBTklNQVRJT05fREVMQVksXG4gIEFOSU1BVElPTl9FQVNJTkcsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbmNsYXNzIFdvcmxkR3JhcGggZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHNlbGVjdG9yKTtcbiAgICB0aGlzLnhBeGlzKCk7XG4gICAgdGhpcy55QXhpcyhbMSwgMF0sIFwic2NhbGVMaW5lYXJcIiwgMjAsICgpID0+IGQzLmZvcm1hdChcIi4wJVwiKSk7XG4gICAgdGhpcy5nZXREYXRhKCk7XG4gICAgLy8gdGhpcy5saW5lcygpO1xuICAgIC8vIHRoaXMuY2lyY2xlcygpO1xuICAgIC8vIHRoaXMucGVyY2VudGFnZUxhYmVscygpO1xuICAgIC8vIHRoaXMubGFiZWxUb3AoXCJIYXBwaW5lc3MgUmFua2luZ1wiKTtcbiAgICAvLyB0aGlzLmdyaWRMaW5lcyh0aGlzLnhTY2FsZSwgXCJheGlzQm90dG9tXCIpO1xuICAgIC8vIHRoaXMuZ3JpZExpbmVzKHRoaXMueVNjYWxlLCBcImF4aXNSaWdodFwiKTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGQzLmpzb24oXCIvZGlzdC9kYXRhL2NvdW50cmllcy5qc29uXCIpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGF0LnNldERhdGEoZGF0YSk7XG4gICAgICAvLyB0aGF0LmxpbmVzKCk7XG4gICAgICB0aGF0LmNpcmNsZXMoKTtcbiAgICAgIC8vIHRoYXQucGVyY2VudGFnZUxhYmVscygpO1xuICAgIH0pO1xuICB9XG4gIC8vIGxpbmVzKCkge1xuICAvLyAgIGxldCBsaW5lID0gZDNcbiAgLy8gICAgIC5saW5lKClcbiAgLy8gICAgIC54KGQgPT4gdGhpcy54U2NhbGUoZC5ncmFwaFJhbmtpbmcpKVxuICAvLyAgICAgLnkoZCA9PiB0aGlzLnlTY2FsZShkLmdyYXBoR2RwKSk7XG4gIC8vICAgZGVidWdnZXJcbiAgLy8gICB0aGlzLmNoYXJ0XG4gIC8vICAgICAuc2VsZWN0QWxsKFwiLmxpbmVcIilcbiAgLy8gICAgIC5kYXRhKE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSlcbiAgLy8gICAgIC5lbnRlcigpXG4gIC8vICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAvLyAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMjUsIDUpXCIpXG4gIC8vICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGxpbmUgY2l0eSAke2QuY2xhc3N9YClcbiAgLy8gICAgIC5hdHRyKFwiZFwiLCBkID0+IGxpbmUoZC5kaXZlcnNpdHkpKVxuICAvLyAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIGQgPT4gZC5jb2xvcilcbiAgLy8gICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCAyKVxuICAvLyAgICAgLnN0eWxlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgLy8gfVxuXG4gIGNpcmNsZXMoKSB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgIC8vIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGNpdHkgJHtkLmNsYXNzfWApXG4gICAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBZnJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiM3Y2JkMWVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJBc2lhXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCIjZmYxZjVhXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jb250aW5lbnQgPT09IFwiTm9ydGggQW1lcmljYVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiIzMwMzQ4MVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY29udGluZW50ID09PSBcIlNvdXRoIEFtZXJpY2FcIikge1xuICAgICAgICAgIHJldHVybiBcIiNmZjViNDRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNvbnRpbmVudCA9PT0gXCJFdXJvcGVcIikge1xuICAgICAgICAgIHJldHVybiBcIiMyZmM1Y2NcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBcIi43XCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNDRENEQ0RcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMnB4XCIpXG4gICAgICAvLyAuc2VsZWN0QWxsKClcbiAgICAgIC8vIC5kYXRhKGQgPT4gZClcbiAgICAgIC8vIC5lbnRlcigpXG4gICAgICAuYXR0cihcImN4XCIsIGQgPT4ge1xuICAgICAgICAvLyByZXR1cm4gMTAwO1xuICAgICAgICByZXR1cm4gdGhpcy54U2NhbGUoZC5ncmFwaEdkcCAvIDE1NikgKyAyNTtcbiAgICAgIH0pXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZGVsYXkoKGQsIGkpID0+IGkgKiBBTklNQVRJT05fREVMQVkpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgLmVhc2UoQU5JTUFUSU9OX0VBU0lORylcbiAgICAgIC5hdHRyKFwiclwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQucG9wdWxhdGlvbiA+IDEwMDAwMDAwMCkge1xuICAgICAgICAgIHJldHVybiBkLnBvcHVsYXRpb24gLyAyNTAwMDAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnBvcHVsYXRpb24gPiAxMDAwMDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDI1MDAwMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9wdWxhdGlvbiAvIDEwMDAwMDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7XG4gICAgICAgIC8vIHJldHVybiAxMDA7XG4gICAgICAgIHJldHVybiB0aGlzLnlTY2FsZShkLmdyYXBoUmFua2luZyAvIDE1Nik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIHBlcmNlbnRhZ2VMYWJlbHMoKSB7XG4gIC8vICAgLy8gZGVidWdnZXI7XG5cbiAgLy8gICB0aGlzLmNoYXJ0XG4gIC8vICAgICAuc2VsZWN0QWxsKClcbiAgLy8gICAgIC5kYXRhKCgpID0+IE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSlcbiAgLy8gICAgIC5lbnRlcigpXG4gIC8vICAgICAuYXBwZW5kKFwiZ1wiKVxuICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBjaXR5ICR7ZC5jbGFzc30gY2l0eS1kYXRhLXRvZ2dsZWApXG4gIC8vICAgICAuc2VsZWN0QWxsKFwiLmxpbmUtcG9pbnRcIilcbiAgLy8gICAgIC5kYXRhKGQgPT4gZC5kaXZlcnNpdHkpXG4gIC8vICAgICAuZW50ZXIoKVxuICAvLyAgICAgLmFwcGVuZChcInRleHRcIilcbiAgLy8gICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgLy8gICAgIC50ZXh0KGQgPT4gZDMuZm9ybWF0KFwiLjAlXCIpKGQucGVyY2VudGFnZSkpXG4gIC8vICAgICAuYXR0cihcInhcIiwgZCA9PiB0aGlzLnhTY2FsZShkLmV0aG5pY2l0eSkgKyAyNSlcbiAgLy8gICAgIC5hdHRyKFwieVwiLCBkID0+IHRoaXMueVNjYWxlKGQucGVyY2VudGFnZSkgLSAxMClcbiAgLy8gICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JsZEdyYXBoOyJdLCJzb3VyY2VSb290IjoiIn0=