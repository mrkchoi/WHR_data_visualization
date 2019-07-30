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
    this.setData();
  }

  _createClass(Chart, [{
    key: "setChart",
    value: function setChart(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        topOffset: 0,
        leftOffset: 0
      };
      var svg = d3.select(selector).attr('height', _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] + _constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] * 2).attr('width', _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] + _constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] * 2);
      this.chart = svg.append('g').attr('transform', "translate(".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] + options.leftOffset, ", ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] / 2 + options.topOffset, ")"));
    }
  }, {
    key: "setData",
    value: function setData() {
      this.data = _constants__WEBPACK_IMPORTED_MODULE_0__["CITIES"];
    }
  }, {
    key: "xAxis",
    value: function xAxis(domain, xScale) {
      var ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      var tockFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
      this.xScale = d3[xScale]().domain(domain).range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]]);
      this.chart.append('g').call(axisBottom(this.xScale)).ticks(ticks).tickFormat(tickFormat()).attr('transform', "translate(0, ".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"], ")"));
    }
  }, {
    key: "yAxis",
    value: function yAxis(domain, yScale) {
      var ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      var tickFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      if (yScale === 'scaleBand') {
        this.yScale = d3[yScale]().domain(domain).range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]]).padding(0.8);
      } else {
        this.yScale = d3[yScale]().domain(domain).range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]]);
      }

      this.chart.append('g').call(d3.axisLeft(this.yScale).ticks(ticks).tickFormat(tickFormat()));
    }
  }, {
    key: "gridLines",
    value: function gridLines(scale, position) {
      var ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      this.chart.append('g').attr('class', 'grid').call(d3[position])().scale(scale).tickSize(_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"], 0, 0).tickFormat('').ticks(ticks);
    }
  }, {
    key: "rectangleLabels",
    value: function rectangleLabels(text) {
      var _this = this;

      this.chart.selectAll().data(this.sortedData).enter().append('text').attr('class', function (d) {
        return "city ".concat(d["class"], " bar-label city-data-toggle");
      }).attr('x', 5).attr('y', function (d) {
        return _this.yScale(d.city) - 2;
      }).style('fill', '#fff').text(function (d, i) {
        if (typeof text === 'string') {
          return d[text];
        } else {
          return text.call(d, i);
        }
      }).style('opacity', 0);
    }
  }, {
    key: "labelTop",
    value: function labelTop(text) {
      this.chart.append('text').attr('class', 'label-text').attr('text-anchor', 'middle').attr('x', _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2).attr('y', -20).text(text);
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
var WIDTH = 972;
var HEIGHT = 564;
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
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/map.js");
// import _ from 'lodash';


document.addEventListener("DOMContentLoaded", function () {
  new _map__WEBPACK_IMPORTED_MODULE_1__["default"]('svg.map');
  new _filter__WEBPACK_IMPORTED_MODULE_0__["default"]();
});

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
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




var Map =
/*#__PURE__*/
function (_Chart) {
  _inherits(Map, _Chart);

  function Map(selector) {
    var _this;

    _classCallCheck(this, Map);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Map).call(this, selector));
    _this.svg = d3.select(selector);

    _this.circle();

    _this.cityLabel();

    _this.ranking();

    _this.pointer();

    return _this;
  }

  _createClass(Map, [{
    key: "circle",
    value: function circle() {
      this.svg.selectAll().data(Object.values(this.data)).enter().append("circle").attr("r", 10).style("fill", function (d) {
        return d.color;
      }).attr("class", function (d) {
        return "city ".concat(d["class"], " city-pinpoint");
      }).transition().ease(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_EASING"]).duration(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DURATION"]).attr("cy", function (d) {
        return d.position.y;
      }).attr("cx", function (d) {
        return d.position.x;
      }).style("z-index", 100).style("cursor", "pointer");
    }
  }, {
    key: "cityLabel",
    value: function cityLabel() {
      this.svg.selectAll("text").data(Object.values(this.data)).enter().append("text").attr("opacity", 0).attr("class", function (d) {
        return "map-city-label city ".concat(d["class"]);
      }).text(function (d) {
        return d.city;
      }).style("font-size", 14).style("stroke-width", 3).style("fill", function (d) {
        return d.color;
      }).transition().ease(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_EASING"]).duration(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DURATION"] / 1.5).attr("opacity", 1).attr("x", function (d) {
        if (d.city === "San Francisco") {
          return d.position.x - 110;
        } else if (d.city === "San Jose") {
          return d.position.x - 78;
        } else if (d.city === "Huntington Beach") {
          return d.position.x - 140;
        } else if (d.city === 'San Diego') {
          return d.position.x - 85;
        } else if (d.city === 'Bismarck') {
          return d.position.x - 85;
        } else if (d.city === 'Plano') {
          return d.position.x - 55;
        } else if (d.city === 'Sioux Falls') {
          return d.position.x - 90;
        } else if (d.city === 'Glendale') {
          return d.position.x - 75;
        }

        return d.position.x + 15;
      }).attr("y", function (d) {
        return d.position.y + 5;
      }).style("z-index", 100);
    }
  }, {
    key: "ranking",
    value: function ranking() {
      this.svg.selectAll(".ranking").data(Object.values(this.data)).enter().append("text").text(function (d) {
        return d.ranking;
      }).style("fill", "white").style("font-size", 12).style("font-weight", 700).attr("class", function (d) {
        return "city ".concat(d["class"], " city-pinpoint");
      }).transition().ease(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_EASING"]).duration(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DURATION"]).attr("y", function (d) {
        return d.position.y + 4;
      }).attr("x", function (d) {
        return d.position.x;
      }).style("text-anchor", "middle").style('z-index', 100);
    }
  }, {
    key: "pointer",
    value: function pointer() {}
  }]);

  return Map;
}(_chart__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyJdLCJuYW1lcyI6WyJDaGFydCIsInNlbGVjdG9yIiwib3B0aW9ucyIsInNldENoYXJ0Iiwic2V0RGF0YSIsInRvcE9mZnNldCIsImxlZnRPZmZzZXQiLCJzdmciLCJkMyIsInNlbGVjdCIsImF0dHIiLCJIRUlHSFQiLCJNQVJHSU5TIiwiV0lEVEgiLCJjaGFydCIsImFwcGVuZCIsImRhdGEiLCJDSVRJRVMiLCJkb21haW4iLCJ4U2NhbGUiLCJ0aWNrcyIsInRvY2tGb3JtYXQiLCJyYW5nZSIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja0Zvcm1hdCIsInlTY2FsZSIsInBhZGRpbmciLCJheGlzTGVmdCIsInNjYWxlIiwicG9zaXRpb24iLCJ0aWNrU2l6ZSIsInRleHQiLCJzZWxlY3RBbGwiLCJzb3J0ZWREYXRhIiwiZW50ZXIiLCJkIiwiY2l0eSIsInN0eWxlIiwiaSIsIlBMQU5PIiwiUExBTk9fQ0lUWSIsIlBMQU5PX0NMQVNTIiwiUExBTk9fQ09MT1IiLCJJUlZJTkUiLCJJUlZJTkVfQ0lUWSIsIklSVklORV9DTEFTUyIsIklSVklORV9DT0xPUiIsIk1BRElTT04iLCJNQURJU09OX0NJVFkiLCJNQURJU09OX0NMQVNTIiwiTUFESVNPTl9DT0xPUiIsIkZSRU1PTlQiLCJGUkVNT05UX0NJVFkiLCJGUkVNT05UX0NMQVNTIiwiRlJFTU9OVF9DT0xPUiIsIkhVTlRJTkdUT05fQkVBQ0giLCJIVU5USU5HVE9OX0JFQUNIX0NJVFkiLCJIVU5USU5HVE9OX0JFQUNIX0NMQVNTIiwiSFVOVElOR1RPTl9CRUFDSF9DT0xPUiIsIkZBUkdPIiwiRkFSR09fQ0lUWSIsIkZBUkdPX0NMQVNTIiwiRkFSR09fQ09MT1IiLCJHUkFORF9QUkFJUklFIiwiR1JBTkRfUFJBSVJJRV9DSVRZIiwiR1JBTkRfUFJBSVJJRV9DTEFTUyIsIkdSQU5EX1BSQUlSSUVfQ09MT1IiLCJTQU5fSk9TRSIsIlNBTl9KT1NFX0NJVFkiLCJTQU5fSk9TRV9DTEFTUyIsIlNBTl9KT1NFX0NPTE9SIiwiU0NPVFRTREFMRSIsIlNDT1RUU0RBTEVfQ0lUWSIsIlNDT1RUU0RBTEVfQ0xBU1MiLCJTQ09UVFNEQUxFX0NPTE9SIiwiU0FOX0ZSQU5DSVNDTyIsIlNBTl9GUkFOQ0lTQ09fQ0lUWSIsIlNBTl9GUkFOQ0lTQ09fQ0xBU1MiLCJTQU5fRlJBTkNJU0NPX0NPTE9SIiwiQklTTUFSQ0siLCJCSVNNQVJDS19DSVRZIiwiQklTTUFSQ0tfQ0xBU1MiLCJCSVNNQVJDS19DT0xPUiIsIk9WRVJMQU5EX1BBUksiLCJPVkVSTEFORF9QQVJLX0NJVFkiLCJPVkVSTEFORF9QQVJLX0NMQVNTIiwiT1ZFUkxBTkRfUEFSS19DT0xPUiIsIlNBTlRBX1JPU0EiLCJTQU5UQV9ST1NBX0NJVFkiLCJTQU5UQV9ST1NBX0NMQVNTIiwiU0FOVEFfUk9TQV9DT0xPUiIsIkFVU1RJTiIsIkFVU1RJTl9DSVRZIiwiQVVTVElOX0NMQVNTIiwiQVVTVElOX0NPTE9SIiwiU0lPVVhfRkFMTFMiLCJTSU9VWF9GQUxMU19DSVRZIiwiU0lPVVhfRkFMTFNfQ0xBU1MiLCJTSU9VWF9GQUxMU19DT0xPUiIsIlBFQVJMX0NJVFkiLCJQRUFSTF9DSVRZX0NJVFkiLCJQRUFSTF9DSVRZX0NMQVNTIiwiUEVBUkxfQ0lUWV9DT0xPUiIsIkdMRU5EQUxFIiwiR0xFTkRBTEVfQ0lUWSIsIkdMRU5EQUxFX0NMQVNTIiwiR0xFTkRBTEVfQ09MT1IiLCJTQU5fRElFR08iLCJTQU5fRElFR09fQ0lUWSIsIlNBTl9ESUVHT19DTEFTUyIsIlNBTl9ESUVHT19DT0xPUiIsIlNUX1BBVUwiLCJTVF9QQVVMX0NJVFkiLCJTVF9QQVVMX0NMQVNTIiwiU1RfUEFVTF9DT0xPUiIsIkNIQVJMRVNUT04iLCJDSEFSTEVTVE9OX0NJVFkiLCJDSEFSTEVTVE9OX0NMQVNTIiwiQ0hBUkxFU1RPTl9DT0xPUiIsIkdJTEJFUlQiLCJHSUxCRVJUX0NJVFkiLCJHSUxCRVJUX0NMQVNTIiwiR0lMQkVSVF9DT0xPUiIsIkFOQUhFSU0iLCJBTkFIRUlNX0NJVFkiLCJBTkFIRUlNX0NMQVNTIiwiQU5BSEVJTV9DT0xPUiIsIlJBTEVJR0giLCJSQUxFSUdIX0NJVFkiLCJSQUxFSUdIX0NMQVNTIiwiUkFMRUlHSF9DT0xPUiIsIkNBUEVfQ09SQUwiLCJDQVBFX0NPUkFMX0NJVFkiLCJDQVBFX0NPUkFMX0NMQVNTIiwiQ0FQRV9DT1JBTF9DT0xPUiIsIkNFREFSX1JBUElEUyIsIkNFREFSX1JBUElEU19DSVRZIiwiQ0VEQVJfUkFQSURTX0NMQVNTIiwiQ0VEQVJfUkFQSURTX0NPTE9SIiwiY29uc3RhbnQiLCJjb2xvciIsImVtb3Rpb25hbFdlbGxiZWluZyIsImluY29tZUVtcGxveW1lbnQiLCJjb21tdW5pdHlFbnZpcm9ubWVudCIsIngiLCJ5IiwiaGFwcGluZXNzU2NvcmUiLCJyYW5raW5nIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwiQU5JTUFUSU9OX0RFTEFZIiwiQU5JTUFUSU9OX0VBU0lORyIsImVhc2VQb2x5IiwiRmlsdGVyIiwiZmlsdGVyRGF0YSIsInRvb2x0aXAiLCJvbiIsImNsYXNzTmFtZSIsInNwbGl0Iiwiam9pbiIsImFsbE90aGVyQ2l0eURhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiYWRkIiwiaHRtbCIsIm1haW5IZWFkZXIiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYWxsQ2l0eURhdGEiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiTWFwIiwiY2lyY2xlIiwiY2l0eUxhYmVsIiwicG9pbnRlciIsIk9iamVjdCIsInZhbHVlcyIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRp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QUFBQSxlQUFJQSxDQUFDLENBQUNnSCxPQUFOO0FBQUEsT0FMVCxFQU1HOUcsS0FOSCxDQU1TLE1BTlQsRUFNaUIsT0FOakIsRUFPR0EsS0FQSCxDQU9TLFdBUFQsRUFPc0IsRUFQdEIsRUFRR0EsS0FSSCxDQVFTLGFBUlQsRUFRd0IsR0FSeEIsRUFTRzVCLElBVEgsQ0FTUSxPQVRSLEVBU2lCLFVBQUEwQixDQUFDO0FBQUEsOEJBQVlBLENBQUMsU0FBYjtBQUFBLE9BVGxCLEVBVUcrSSxVQVZILEdBV0dDLElBWEgsQ0FXUTdCLDJEQVhSLEVBWUc4QixRQVpILENBWVloQyw2REFaWixFQWFHM0ksSUFiSCxDQWFRLEdBYlIsRUFhYSxVQUFBMEIsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ04sUUFBRixDQUFXb0gsQ0FBWCxHQUFlLENBQW5CO0FBQUEsT0FiZCxFQWNHeEksSUFkSCxDQWNRLEdBZFIsRUFjYSxVQUFBMEIsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ04sUUFBRixDQUFXbUgsQ0FBZjtBQUFBLE9BZGQsRUFlRzNHLEtBZkgsQ0FlUyxhQWZULEVBZXdCLFFBZnhCLEVBZ0JHQSxLQWhCSCxDQWdCUyxTQWhCVCxFQWdCb0IsR0FoQnBCO0FBaUJEOzs7OEJBRVMsQ0FBRTs7OztFQXhGSXRDLDhDOztBQTJGSDZLLGtFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtcbiAgSEVJR0hULFxuICBNQVJHSU5TLFxuICBXSURUSCxcbiAgQU5JTUFUSU9OX0RVUkFUSU9OLFxuICBBTklNQVRJT05fREVMQVksXG4gIEFOSU1BVElPTl9FQVNJTkcsXG4gIENJVElFU1xufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldENoYXJ0KHNlbGVjdG9yLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldERhdGEoKTtcbiAgfVxuXG4gIHNldENoYXJ0KHNlbGVjdG9yLCBvcHRpb25zID0geyB0b3BPZmZzZXQ6IDAsIGxlZnRPZmZzZXQ6IDAgfSkge1xuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzZWxlY3RvcilcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBIRUlHSFQgKyBNQVJHSU5TICogMilcbiAgICAgIC5hdHRyKCd3aWR0aCcsIFdJRFRIICsgTUFSR0lOUyAqIDIpXG4gICAgdGhpcy5jaGFydCA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtNQVJHSU5TICsgb3B0aW9ucy5sZWZ0T2Zmc2V0fSwgJHtNQVJHSU5TIC8gMiArIG9wdGlvbnMudG9wT2Zmc2V0fSlgKTtcbiAgfVxuXG4gIHNldERhdGEoKSB7XG4gICAgdGhpcy5kYXRhID0gQ0lUSUVTO1xuICB9XG5cbiAgeEF4aXMoZG9tYWluLCB4U2NhbGUsIHRpY2tzID0gNSwgdG9ja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgdGhpcy54U2NhbGUgPSBkM1t4U2NhbGVdKClcbiAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgLnJhbmdlKFswLCBXSURUSF0pXG5cbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5jYWxsKGF4aXNCb3R0b20odGhpcy54U2NhbGUpKVxuICAgICAgICAudGlja3ModGlja3MpXG4gICAgICAgIC50aWNrRm9ybWF0KHRpY2tGb3JtYXQoKSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7SEVJR0hUfSlgKTtcbiAgfVxuXG4gIHlBeGlzKGRvbWFpbiwgeVNjYWxlLCB0aWNrcyA9IDUsIHRpY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIGlmICh5U2NhbGUgPT09ICdzY2FsZUJhbmQnKSB7XG4gICAgICB0aGlzLnlTY2FsZSA9IGQzW3lTY2FsZV0oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKFswLCBXSURUSF0pXG4gICAgICAgIC5wYWRkaW5nKDAuOClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuICAgIH1cbiAgICBcbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5jYWxsKFxuICAgICAgICBkMy5heGlzTGVmdCh0aGlzLnlTY2FsZSlcbiAgICAgICAgICAudGlja3ModGlja3MpXG4gICAgICAgICAgLnRpY2tGb3JtYXQodGlja0Zvcm1hdCgpKVxuICAgICAgKVxuICB9XG5cbiAgZ3JpZExpbmVzKHNjYWxlLCBwb3NpdGlvbiwgdGlja3MgPSA1KSB7XG4gICAgdGhpcy5jaGFydC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2dyaWQnKVxuICAgICAgLmNhbGwoZDNbcG9zaXRpb25dKSgpXG4gICAgICAgIC5zY2FsZShzY2FsZSlcbiAgICAgICAgLnRpY2tTaXplKFdJRFRILCAwLCAwKVxuICAgICAgICAudGlja0Zvcm1hdCgnJylcbiAgICAgICAgLnRpY2tzKHRpY2tzKTtcbiAgfVxuXG4gIHJlY3RhbmdsZUxhYmVscyh0ZXh0KSB7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAuZGF0YSh0aGlzLnNvcnRlZERhdGEpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBjaXR5ICR7ZC5jbGFzc30gYmFyLWxhYmVsIGNpdHktZGF0YS10b2dnbGVgKVxuICAgICAgLmF0dHIoJ3gnLCA1KVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueVNjYWxlKGQuY2l0eSkgLSAyKVxuICAgICAgLnN0eWxlKCdmaWxsJywgJyNmZmYnKVxuICAgICAgLnRleHQoKGQsIGkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBkW3RleHRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0ZXh0LmNhbGwoZCwgaSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApO1xuICB9XG5cbiAgbGFiZWxUb3AodGV4dCkge1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsLXRleHQnKVxuICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuYXR0cigneCcsIFdJRFRIIC8gMilcbiAgICAgIC5hdHRyKCd5JywgLTIwKVxuICAgICAgLnRleHQodGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iLCJleHBvcnQgY29uc3QgUExBTk8gPSBcIlBMQU5PXCI7XG5jb25zdCBQTEFOT19DSVRZID0gXCJQbGFub1wiO1xuY29uc3QgUExBTk9fQ0xBU1MgPSBcImNpdHktUGxhbm9cIjtcbmNvbnN0IFBMQU5PX0NPTE9SID0gXCIjNTFlYWVhXCI7XG5cbmV4cG9ydCBjb25zdCBJUlZJTkUgPSBcIklSVklORVwiO1xuY29uc3QgSVJWSU5FX0NJVFkgPSBcIklSVklORVwiO1xuY29uc3QgSVJWSU5FX0NMQVNTID0gXCJjaXR5LUlydmluZVwiO1xuY29uc3QgSVJWSU5FX0NPTE9SID0gXCIjZmY5ZDc2XCI7XG5cbmV4cG9ydCBjb25zdCBNQURJU09OID0gXCJNQURJU09OXCI7XG5jb25zdCBNQURJU09OX0NJVFkgPSBcIk1BRElTT05cIjtcbmNvbnN0IE1BRElTT05fQ0xBU1MgPSBcImNpdHktTWFkaXNvblwiO1xuY29uc3QgTUFESVNPTl9DT0xPUiA9IFwiI2ZiMzU2OVwiO1xuXG5leHBvcnQgY29uc3QgRlJFTU9OVCA9IFwiRlJFTU9OVFwiO1xuY29uc3QgRlJFTU9OVF9DSVRZID0gXCJGUkVNT05UXCI7XG5jb25zdCBGUkVNT05UX0NMQVNTID0gXCJjaXR5LUZyZW1vbnRcIjtcbmNvbnN0IEZSRU1PTlRfQ09MT1IgPSBcIiNmYTg2YmVcIjtcblxuZXhwb3J0IGNvbnN0IEhVTlRJTkdUT05fQkVBQ0ggPSBcIkhVTlRJTkdUT05fQkVBQ0hcIjtcbmNvbnN0IEhVTlRJTkdUT05fQkVBQ0hfQ0lUWSA9IFwiSFVOVElOR1RPTl9CRUFDSFwiO1xuY29uc3QgSFVOVElOR1RPTl9CRUFDSF9DTEFTUyA9IFwiY2l0eS1IdW50aW5ndG9uLUJlYWNoXCI7XG5jb25zdCBIVU5USU5HVE9OX0JFQUNIX0NPTE9SID0gXCIjYTI3NWUzXCI7XG5cbmV4cG9ydCBjb25zdCBGQVJHTyA9IFwiRkFSR09cIjtcbmNvbnN0IEZBUkdPX0NJVFkgPSBcIkZBUkdPXCI7XG5jb25zdCBGQVJHT19DTEFTUyA9IFwiY2l0eS1GYXJnb1wiO1xuY29uc3QgRkFSR09fQ09MT1IgPSBcIiNmZjFmNWFcIjtcblxuZXhwb3J0IGNvbnN0IEdSQU5EX1BSQUlSSUUgPSBcIkdSQU5EX1BSQUlSSUVcIjtcbmNvbnN0IEdSQU5EX1BSQUlSSUVfQ0lUWSA9IFwiR1JBTkRfUFJBSVJJRVwiO1xuY29uc3QgR1JBTkRfUFJBSVJJRV9DTEFTUyA9IFwiY2l0eS1HcmFuZC1QcmFpcmllXCI7XG5jb25zdCBHUkFORF9QUkFJUklFX0NPTE9SID0gXCIjNjkwMGZmXCI7XG5cbmV4cG9ydCBjb25zdCBTQU5fSk9TRSA9IFwiU0FOX0pPU0VcIjtcbmNvbnN0IFNBTl9KT1NFX0NJVFkgPSBcIlNBTl9KT1NFXCI7XG5jb25zdCBTQU5fSk9TRV9DTEFTUyA9IFwiY2l0eS1TYW4tSm9zZVwiO1xuY29uc3QgU0FOX0pPU0VfQ09MT1IgPSBcIiNmZmQ3MDBcIjtcblxuZXhwb3J0IGNvbnN0IFNDT1RUU0RBTEUgPSBcIlNDT1RUU0RBTEVcIjtcbmNvbnN0IFNDT1RUU0RBTEVfQ0lUWSA9IFwiU0NPVFRTREFMRVwiO1xuY29uc3QgU0NPVFRTREFMRV9DTEFTUyA9IFwiY2l0eS1TY290dHNkYWxlXCI7XG5jb25zdCBTQ09UVFNEQUxFX0NPTE9SID0gXCIjZmY2MTM4XCI7XG5cbmV4cG9ydCBjb25zdCBTQU5fRlJBTkNJU0NPID0gXCJTQU5fRlJBTkNJU0NPXCI7XG5jb25zdCBTQU5fRlJBTkNJU0NPX0NJVFkgPSBcIlNBTl9GUkFOQ0lTQ09cIjtcbmNvbnN0IFNBTl9GUkFOQ0lTQ09fQ0xBU1MgPSBcImNpdHktU2FuLUZyYW5jaXNjb1wiO1xuY29uc3QgU0FOX0ZSQU5DSVNDT19DT0xPUiA9IFwiIzMwMzQ4MVwiO1xuXG5leHBvcnQgY29uc3QgQklTTUFSQ0sgPSBcIkJJU01BUkNLXCI7XG5jb25zdCBCSVNNQVJDS19DSVRZID0gXCJCSVNNQVJDS1wiO1xuY29uc3QgQklTTUFSQ0tfQ0xBU1MgPSBcImNpdHktQmlzbWFyY2tcIjtcbmNvbnN0IEJJU01BUkNLX0NPTE9SID0gXCIjN2NiZDFlXCI7XG5cbmV4cG9ydCBjb25zdCBPVkVSTEFORF9QQVJLID0gXCJPVkVSTEFORF9QQVJLXCI7XG5jb25zdCBPVkVSTEFORF9QQVJLX0NJVFkgPSBcIk9WRVJMQU5EX1BBUktcIjtcbmNvbnN0IE9WRVJMQU5EX1BBUktfQ0xBU1MgPSBcImNpdHktT3ZlcmxhbmQtUGFya1wiO1xuY29uc3QgT1ZFUkxBTkRfUEFSS19DT0xPUiA9IFwiIzAwOTM3OFwiO1xuXG5leHBvcnQgY29uc3QgU0FOVEFfUk9TQSA9IFwiU0FOVEFfUk9TQVwiO1xuY29uc3QgU0FOVEFfUk9TQV9DSVRZID0gXCJTQU5UQV9ST1NBXCI7XG5jb25zdCBTQU5UQV9ST1NBX0NMQVNTID0gXCJjaXR5LVNhbnRhLVJvc2FcIjtcbmNvbnN0IFNBTlRBX1JPU0FfQ09MT1IgPSBcIiNmNjBjODZcIjtcblxuZXhwb3J0IGNvbnN0IEFVU1RJTiA9IFwiQVVTVElOXCI7XG5jb25zdCBBVVNUSU5fQ0lUWSA9IFwiQVVTVElOXCI7XG5jb25zdCBBVVNUSU5fQ0xBU1MgPSBcImNpdHktQXVzdGluXCI7XG5jb25zdCBBVVNUSU5fQ09MT1IgPSBcIiNmOWQwMGZcIjtcblxuZXhwb3J0IGNvbnN0IFNJT1VYX0ZBTExTID0gXCJTSU9VWF9GQUxMU1wiO1xuY29uc3QgU0lPVVhfRkFMTFNfQ0lUWSA9IFwiU0lPVVhfRkFMTFNcIjtcbmNvbnN0IFNJT1VYX0ZBTExTX0NMQVNTID0gXCJjaXR5LVNpb3V4LUZhbGxzXCI7XG5jb25zdCBTSU9VWF9GQUxMU19DT0xPUiA9IFwiIzMwMzg0MVwiO1xuXG5leHBvcnQgY29uc3QgUEVBUkxfQ0lUWSA9IFwiUEVBUkxfQ0lUWVwiO1xuY29uc3QgUEVBUkxfQ0lUWV9DSVRZID0gXCJQRUFSTF9DSVRZXCI7XG5jb25zdCBQRUFSTF9DSVRZX0NMQVNTID0gXCJjaXR5LVBlYXJsLUNpdHlcIjtcbmNvbnN0IFBFQVJMX0NJVFlfQ09MT1IgPSBcIiM5NmNkMzlcIjtcblxuZXhwb3J0IGNvbnN0IEdMRU5EQUxFID0gXCJHTEVOREFMRVwiO1xuY29uc3QgR0xFTkRBTEVfQ0lUWSA9IFwiR0xFTkRBTEVcIjtcbmNvbnN0IEdMRU5EQUxFX0NMQVNTID0gXCJjaXR5LUdsZW5kYWxlXCI7XG5jb25zdCBHTEVOREFMRV9DT0xPUiA9IFwiIzJmYzVjY1wiO1xuXG5leHBvcnQgY29uc3QgU0FOX0RJRUdPID0gXCJTQU5fRElFR09cIjtcbmNvbnN0IFNBTl9ESUVHT19DSVRZID0gXCJTQU5fRElFR09cIjtcbmNvbnN0IFNBTl9ESUVHT19DTEFTUyA9IFwiY2l0eS1TYW4tRGllZ29cIjtcbmNvbnN0IFNBTl9ESUVHT19DT0xPUiA9IFwiI2ZmNWI0NFwiO1xuXG5leHBvcnQgY29uc3QgU1RfUEFVTCA9IFwiU1RfUEFVTFwiO1xuY29uc3QgU1RfUEFVTF9DSVRZID0gXCJTVF9QQVVMXCI7XG5jb25zdCBTVF9QQVVMX0NMQVNTID0gXCJjaXR5LVN0LVBhdWxcIjtcbmNvbnN0IFNUX1BBVUxfQ09MT1IgPSBcIiNiZjY4ZjZcIjtcblxuZXhwb3J0IGNvbnN0IENIQVJMRVNUT04gPSBcIkNIQVJMRVNUT05cIjtcbmNvbnN0IENIQVJMRVNUT05fQ0lUWSA9IFwiQ0hBUkxFU1RPTlwiO1xuY29uc3QgQ0hBUkxFU1RPTl9DTEFTUyA9IFwiY2l0eS1DaGFybGVzdG9uXCI7XG5jb25zdCBDSEFSTEVTVE9OX0NPTE9SID0gXCIjZjkyNzI3XCI7XG5cbmV4cG9ydCBjb25zdCBHSUxCRVJUID0gXCJHSUxCRVJUXCI7XG5jb25zdCBHSUxCRVJUX0NJVFkgPSBcIkdJTEJFUlRcIjtcbmNvbnN0IEdJTEJFUlRfQ0xBU1MgPSBcImNpdHktR2lsYmVydFwiO1xuY29uc3QgR0lMQkVSVF9DT0xPUiA9IFwiI2ZmMDU5MlwiO1xuXG5leHBvcnQgY29uc3QgQU5BSEVJTSA9IFwiQU5BSEVJTVwiO1xuY29uc3QgQU5BSEVJTV9DSVRZID0gXCJBTkFIRUlNXCI7XG5jb25zdCBBTkFIRUlNX0NMQVNTID0gXCJjaXR5LUFuYWhlaW1cIjtcbmNvbnN0IEFOQUhFSU1fQ09MT1IgPSBcIiNhNThiZmZcIjtcblxuZXhwb3J0IGNvbnN0IFJBTEVJR0ggPSBcIlJBTEVJR0hcIjtcbmNvbnN0IFJBTEVJR0hfQ0lUWSA9IFwiUkFMRUlHSFwiO1xuY29uc3QgUkFMRUlHSF9DTEFTUyA9IFwiY2l0eS1SYWxlaWdoXCI7XG5jb25zdCBSQUxFSUdIX0NPTE9SID0gXCIjMDA5Mzc4XCI7XG5cbmV4cG9ydCBjb25zdCBDQVBFX0NPUkFMID0gXCJDQVBFX0NPUkFMXCI7XG5jb25zdCBDQVBFX0NPUkFMX0NJVFkgPSBcIkNBUEVfQ09SQUxcIjtcbmNvbnN0IENBUEVfQ09SQUxfQ0xBU1MgPSBcImNpdHktQ2FwZS1Db3JhbFwiO1xuY29uc3QgQ0FQRV9DT1JBTF9DT0xPUiA9IFwiI2ZjMzQ1Y1wiO1xuXG5leHBvcnQgY29uc3QgQ0VEQVJfUkFQSURTID0gXCJDRURBUl9SQVBJRFNcIjtcbmNvbnN0IENFREFSX1JBUElEU19DSVRZID0gXCJDRURBUl9SQVBJRFNcIjtcbmNvbnN0IENFREFSX1JBUElEU19DTEFTUyA9IFwiY2l0eS1DZWRhci1SYXBpZHNcIjtcbmNvbnN0IENFREFSX1JBUElEU19DT0xPUiA9IFwiIzNkNmNiOVwiO1xuXG5leHBvcnQgY29uc3QgQ0lUSUVTID0ge1xuICAgICAgICAgUExBTk86IHtcbiAgICAgICAgICAgY2l0eTogXCJQbGFub1wiLFxuICAgICAgICAgICBjb25zdGFudDogUExBTk8sXG4gICAgICAgICAgIGNsYXNzOiBQTEFOT19DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IFBMQU5PX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDQsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDMsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiA0LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MjYsIHk6IDM5MCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNzIuMyxcbiAgICAgICAgICAgcmFua2luZzogMVxuICAgICAgICAgfSxcbiAgICAgICAgIElSVklORToge1xuICAgICAgICAgICBjaXR5OiBcIklydmluZVwiLFxuICAgICAgICAgICBjb25zdGFudDogSVJWSU5FLFxuICAgICAgICAgICBjbGFzczogSVJWSU5FX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogSVJWSU5FX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDgsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDYsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAzLFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxODAsIHk6IDMwMCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNzEuODYsXG4gICAgICAgICAgIHJhbmtpbmc6IDJcbiAgICAgICAgIH0sXG4gICAgICAgICBNQURJU09OOiB7XG4gICAgICAgICAgIGNpdHk6IFwiTWFkaXNvblwiLFxuICAgICAgICAgICBjb25zdGFudDogTUFESVNPTixcbiAgICAgICAgICAgY2xhc3M6IE1BRElTT05fQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBNQURJU09OX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDIsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDgsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiA0LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NDAsIHk6IDE2MCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNzEuODEsXG4gICAgICAgICAgIHJhbmtpbmc6IDNcbiAgICAgICAgIH0sXG4gICAgICAgICBGUkVNT05UOiB7XG4gICAgICAgICAgIGNpdHk6IFwiRnJlbW9udFwiLFxuICAgICAgICAgICBjb25zdGFudDogRlJFTU9OVCxcbiAgICAgICAgICAgY2xhc3M6IEZSRU1PTlRfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBGUkVNT05UX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDUsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDIwLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMSxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTUxLCB5OiAyMjUgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDcxLjE3LFxuICAgICAgICAgICByYW5raW5nOiA0XG4gICAgICAgICB9LFxuICAgICAgICAgSFVOVElOR1RPTl9CRUFDSDoge1xuICAgICAgICAgICBjaXR5OiBcIkh1bnRpbmd0b24gQmVhY2hcIixcbiAgICAgICAgICAgY29uc3RhbnQ6IEhVTlRJTkdUT05fQkVBQ0gsXG4gICAgICAgICAgIGNsYXNzOiBIVU5USU5HVE9OX0JFQUNIX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogSFVOVElOR1RPTl9CRUFDSF9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAzLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAyNSxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDE1LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxNTksIHk6IDI5MCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjkuNzQsXG4gICAgICAgICAgIHJhbmtpbmc6IDVcbiAgICAgICAgIH0sXG4gICAgICAgICBGQVJHTzoge1xuICAgICAgICAgICBjaXR5OiBcIkZhcmdvXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBGQVJHTyxcbiAgICAgICAgICAgY2xhc3M6IEZBUkdPX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogRkFSR09fQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogOSxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMTEsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxMyxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogNDk4LCB5OiA5NCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjkuNTcsXG4gICAgICAgICAgIHJhbmtpbmc6IDZcbiAgICAgICAgIH0sXG4gICAgICAgICBHUkFORF9QUkFJUklFOiB7XG4gICAgICAgICAgIGNpdHk6IFwiR3JhbmQgUHJhaXJpZVwiLFxuICAgICAgICAgICBjb25zdGFudDogR1JBTkRfUFJBSVJJRSxcbiAgICAgICAgICAgY2xhc3M6IEdSQU5EX1BSQUlSSUVfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBHUkFORF9QUkFJUklFX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDExLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAxOSxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDMsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUyNSwgeTogNDEwIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2OS4zLFxuICAgICAgICAgICByYW5raW5nOiA3XG4gICAgICAgICB9LFxuICAgICAgICAgU0FOX0pPU0U6IHtcbiAgICAgICAgICAgY2l0eTogXCJTYW4gSm9zZVwiLFxuICAgICAgICAgICBjb25zdGFudDogU0FOX0pPU0UsXG4gICAgICAgICAgIGNsYXNzOiBTQU5fSk9TRV9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IFNBTl9KT1NFX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDEwLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMjQsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDE0MCwgeTogMjQwIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2OC45LFxuICAgICAgICAgICByYW5raW5nOiA4XG4gICAgICAgICB9LFxuICAgICAgICAgU0NPVFRTREFMRToge1xuICAgICAgICAgICBjaXR5OiBcIlNjb3R0c2RhbGVcIixcbiAgICAgICAgICAgY29uc3RhbnQ6IFNDT1RUU0RBTEUsXG4gICAgICAgICAgIGNsYXNzOiBTQ09UVFNEQUxFX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogU0NPVFRTREFMRV9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyNSxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogNyxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDEsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDI3MCwgeTogMzQxIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2OC4yNCxcbiAgICAgICAgICAgcmFua2luZzogOVxuICAgICAgICAgfSxcbiAgICAgICAgIFNBTl9GUkFOQ0lTQ086IHtcbiAgICAgICAgICAgY2l0eTogXCJTYW4gRnJhbmNpc2NvXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBTQU5fRlJBTkNJU0NPLFxuICAgICAgICAgICBjbGFzczogU0FOX0ZSQU5DSVNDT19DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IFNBTl9GUkFOQ0lTQ09fQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMixcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMSxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDY5LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMzYsIHk6IDIxMiB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjcuNTMsXG4gICAgICAgICAgIHJhbmtpbmc6IDEwXG4gICAgICAgICB9LFxuICAgICAgICAgQklTTUFSQ0s6IHtcbiAgICAgICAgICAgY2l0eTogXCJCaXNtYXJja1wiLFxuICAgICAgICAgICBjb25zdGFudDogQklTTUFSQ0ssXG4gICAgICAgICAgIGNsYXNzOiBCSVNNQVJDS19DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IEJJU01BUkNLX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDE0LFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAyLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMjUsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDQ3OCwgeTogMTA2IH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4zOCxcbiAgICAgICAgICAgcmFua2luZzogMTFcbiAgICAgICAgIH0sXG4gICAgICAgICBPVkVSTEFORF9QQVJLOiB7XG4gICAgICAgICAgIGNpdHk6IFwiT3ZlcmxhbmQgUGFya1wiLFxuICAgICAgICAgICBjb25zdGFudDogT1ZFUkxBTkRfUEFSSyxcbiAgICAgICAgICAgY2xhc3M6IE9WRVJMQU5EX1BBUktfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBPVkVSTEFORF9QQVJLX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEyLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAzMSxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDE0LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NzAsIHk6IDI3OCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjcuMzcsXG4gICAgICAgICAgIHJhbmtpbmc6IDEyXG4gICAgICAgICB9LFxuICAgICAgICAgU0FOVEFfUk9TQToge1xuICAgICAgICAgICBjaXR5OiBcIlNhbnRhIFJvc2FcIixcbiAgICAgICAgICAgY29uc3RhbnQ6IFNBTlRBX1JPU0EsXG4gICAgICAgICAgIGNsYXNzOiBTQU5UQV9ST1NBX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogU0FOVEFfUk9TQV9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMyxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMjksXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiA1LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMzIsIHk6IDE5NiB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjcuMTgsXG4gICAgICAgICAgIHJhbmtpbmc6IDEzXG4gICAgICAgICB9LFxuICAgICAgICAgQVVTVElOOiB7XG4gICAgICAgICAgIGNpdHk6IFwiQXVzdGluXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBBVVNUSU4sXG4gICAgICAgICAgIGNsYXNzOiBBVVNUSU5fQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBBVVNUSU5fQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogOCxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogNCxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQ0LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA0OTcsIHk6IDQzMCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjcuMTYsXG4gICAgICAgICAgIHJhbmtpbmc6IDE0XG4gICAgICAgICB9LFxuICAgICAgICAgU0lPVVhfRkFMTFM6IHtcbiAgICAgICAgICAgY2l0eTogXCJTaW91eCBGYWxsc1wiLFxuICAgICAgICAgICBjb25zdGFudDogU0lPVVhfRkFMTFMsXG4gICAgICAgICAgIGNsYXNzOiBTSU9VWF9GQUxMU19DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IFNJT1VYX0ZBTExTX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDYsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDM3LFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNTIsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUwMCwgeTogMTY4IH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2Ni45NyxcbiAgICAgICAgICAgcmFua2luZzogMTVcbiAgICAgICAgIH0sXG4gICAgICAgICBQRUFSTF9DSVRZOiB7XG4gICAgICAgICAgIGNpdHk6IFwiUGVhcmwgQ2l0eVwiLFxuICAgICAgICAgICBjb25zdGFudDogUEVBUkxfQ0lUWSxcbiAgICAgICAgICAgY2xhc3M6IFBFQVJMX0NJVFlfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBQRUFSTF9DSVRZX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDgxLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogOCxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogMzUwLCB5OiA0OTEgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY2Ljc3LFxuICAgICAgICAgICByYW5raW5nOiAxNlxuICAgICAgICAgfSxcbiAgICAgICAgIEdMRU5EQUxFOiB7XG4gICAgICAgICAgIGNpdHk6IFwiR2xlbmRhbGVcIixcbiAgICAgICAgICAgY29uc3RhbnQ6IEdMRU5EQUxFLFxuICAgICAgICAgICBjbGFzczogR0xFTkRBTEVfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBHTEVOREFMRV9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxNSxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogNTYsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiA3LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxNjcsIHk6IDI3MiB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjYuMjUsXG4gICAgICAgICAgIHJhbmtpbmc6IDE3XG4gICAgICAgICB9LFxuICAgICAgICAgU0FOX0RJRUdPOiB7XG4gICAgICAgICAgIGNpdHk6IFwiU2FuIERpZWdvXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBTQU5fRElFR08sXG4gICAgICAgICAgIGNsYXNzOiBTQU5fRElFR09fQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBTQU5fRElFR09fQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNCxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMjAsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyNSxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTg3LCB5OiAzMjEgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY2LjAxLFxuICAgICAgICAgICByYW5raW5nOiAxOFxuICAgICAgICAgfSxcbiAgICAgICAgIFNUX1BBVUw6IHtcbiAgICAgICAgICAgY2l0eTogXCJTdC4gUGF1bFwiLFxuICAgICAgICAgICBjb25zdGFudDogU1RfUEFVTCxcbiAgICAgICAgICAgY2xhc3M6IFNUX1BBVUxfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBTVF9QQVVMX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEwLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAzOCxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDM2LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1OTAsIHk6IDEzMyB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjUuNzksXG4gICAgICAgICAgIHJhbmtpbmc6IDE5XG4gICAgICAgICB9LFxuICAgICAgICAgQ0hBUkxFU1RPTjoge1xuICAgICAgICAgICBjaXR5OiBcIkNoYXJsZXN0b25cIixcbiAgICAgICAgICAgY29uc3RhbnQ6IENIQVJMRVNUT04sXG4gICAgICAgICAgIGNsYXNzOiBDSEFSTEVTVE9OX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogQ0hBUkxFU1RPTl9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA0MSxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMyxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDIsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDgwNSwgeTogNDAwIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2NS40OCxcbiAgICAgICAgICAgcmFua2luZzogMjBcbiAgICAgICAgIH0sXG4gICAgICAgICBHSUxCRVJUOiB7XG4gICAgICAgICAgIGNpdHk6IFwiR2lsYmVydFwiLFxuICAgICAgICAgICBjb25zdGFudDogR0lMQkVSVCxcbiAgICAgICAgICAgY2xhc3M6IEdJTEJFUlRfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBHSUxCRVJUX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDMwLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAyNixcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDI3NywgeTogMzYzIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2NS4wNyxcbiAgICAgICAgICAgcmFua2luZzogMjFcbiAgICAgICAgIH0sXG4gICAgICAgICBBTkFIRUlNOiB7XG4gICAgICAgICAgIGNpdHk6IFwiQW5haGVpbVwiLFxuICAgICAgICAgICBjb25zdGFudDogQU5BSEVJTSxcbiAgICAgICAgICAgY2xhc3M6IEFOQUhFSU1fQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBBTkFIRUlNX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDE2LFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiA0MyxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDE5LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxOTYsIHk6IDI4MiB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjUuMDIsXG4gICAgICAgICAgIHJhbmtpbmc6IDIyXG4gICAgICAgICB9LFxuICAgICAgICAgUkFMRUlHSDoge1xuICAgICAgICAgICBjaXR5OiBcIlJhbGVpZ2hcIixcbiAgICAgICAgICAgY29uc3RhbnQ6IFJBTEVJR0gsXG4gICAgICAgICAgIGNsYXNzOiBSQUxFSUdIX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogUkFMRUlHSF9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA3LFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAyMyxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQ4LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA4MzAsIHk6IDMxMyB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjQuOTksXG4gICAgICAgICAgIHJhbmtpbmc6IDIzXG4gICAgICAgICB9LFxuICAgICAgICAgQ0FQRV9DT1JBTDoge1xuICAgICAgICAgICBjaXR5OiBcIkNhcGUgQ29yYWxcIixcbiAgICAgICAgICAgY29uc3RhbnQ6IENBUEVfQ09SQUwsXG4gICAgICAgICAgIGNsYXNzOiBDQVBFX0NPUkFMX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogQ0FQRV9DT1JBTF9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyOCxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogNDgsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyLFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA4MDAsIHk6IDQ4MCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjQuOTYsXG4gICAgICAgICAgIHJhbmtpbmc6IDI0XG4gICAgICAgICB9LFxuICAgICAgICAgQ0VEQVJfUkFQSURTOiB7XG4gICAgICAgICAgIGNpdHk6IFwiQ2VkYXIgUmFwaWRzXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBDRURBUl9SQVBJRFMsXG4gICAgICAgICAgIGNsYXNzOiBDRURBUl9SQVBJRFNfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBDRURBUl9SQVBJRFNfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMjMsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDMyLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTEsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYwMCwgeTogMjA1IH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2NC45LFxuICAgICAgICAgICByYW5raW5nOiAyNVxuICAgICAgICAgfVxuICAgICAgIH07XG5cbmV4cG9ydCBjb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9ERUxBWSA9IDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0VBU0lORyA9IGQzLmVhc2VQb2x5O1xuXG5leHBvcnQgY29uc3QgV0lEVEggPSA5NzI7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gNTY0O1xuZXhwb3J0IGNvbnN0IE1BUkdJTlMgPSAxMDA7IiwiY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJEYXRhKCk7XG4gIH1cblxuICBmaWx0ZXJEYXRhKCkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBkM1xuICAgICAgLnNlbGVjdChgLmhlYWRlcl9fdG9vbHRpcGApXG4gICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCJzb2xpZFwiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyLXdpZHRoXCIsIFwiMnB4XCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4gICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMXJlbVwiKTtcblxuICAgIGQzLnNlbGVjdEFsbCgnLmNpdHknKVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCAoZCwgaSkgPT4ge1xuICAgICAgICBsZXQgY2xhc3NOYW1lO1xuICAgICAgICBpZiAodHlwZW9mIGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gYGNpdHktJHtkLnNwbGl0KCcgJykuam9pbignLScpfWA7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5kYXRhKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gZC5kYXRhLmNsYXNzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IGQuY2xhc3M7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsT3RoZXJDaXR5RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jaXR5Om5vdCguJHtjbGFzc05hbWV9KWApO1xuICAgICAgICBhbGxPdGhlckNpdHlEYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgZGF0YS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXInKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyB0b29sdGlwICBcbiAgICAgICAgdG9vbHRpcFxuICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgICAgICAgIC5odG1sKFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2NpdHlcIj48c3Ryb25nPkNpdHk6IDwvc3Ryb25nPjxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmNpdHlcbiAgICAgICAgICAgICAgICB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+T3ZlcmFsbCBSYW5rOjwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5yYW5raW5nXG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPlRvdGFsIEhhcHBpbmVzcyBTY29yZTo8L3N0cm9uZz4gPHNwYW4+JHtcbiAgICAgICAgICAgICAgICAgIGQuaGFwcGluZXNzU2NvcmVcbiAgICAgICAgICAgICAgICB9LzEwMDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPkVtb3Rpb25hbCAmIFBoeXNpY2FsIFdlbGwtQmVpbmc6PC9zdHJvbmc+IDxzcGFuPiR7XG4gICAgICAgICAgICAgICAgICBkLmVtb3Rpb25hbFdlbGxiZWluZ1xuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5JbmNvbWUgJiBFbXBsb3ltZW50Ojwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5pbmNvbWVFbXBsb3ltZW50XG4gICAgICAgICAgICAgICAgfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPkNvbW11bml0eSAmIEVudmlyb25tZW50Ojwvc3Ryb25nPiA8c3Bhbj4ke1xuICAgICAgICAgICAgICAgICAgZC5jb21tdW5pdHlFbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApO1xuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX2hlYWRlcicpO1xuICAgICAgICBtYWluSGVhZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgY29sb3I6ICR7ZC5jb2xvcn1gICk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxDaXR5RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXR5Jyk7XG4gICAgICAgIGFsbENpdHlEYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgZGF0YS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXInKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19oZWFkZXJcIik7XG4gICAgICAgIG1haW5IZWFkZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGNvbG9yOiBpbml0aWFsYCk7XG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCBNYXAgZnJvbSAnLi9tYXAnO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBuZXcgTWFwKCdzdmcubWFwJyk7XG4gIG5ldyBGaWx0ZXI7XG59KTsiLCJpbXBvcnQge1xuICBBTklNQVRJT05fRUFTSU5HLFxuICBBTklNQVRJT05fRFVSQVRJT04sXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG5jbGFzcyBNYXAgZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHNlbGVjdG9yKTtcbiAgICB0aGlzLmNpcmNsZSgpO1xuICAgIHRoaXMuY2l0eUxhYmVsKCk7XG4gICAgdGhpcy5yYW5raW5nKCk7XG4gICAgdGhpcy5wb2ludGVyKCk7XG4gIH1cblxuICBjaXJjbGUoKSB7XG4gICAgdGhpcy5zdmdcbiAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgIC5hdHRyKFwiclwiLCAxMClcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBkLmNvbG9yKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBjaXR5ICR7ZC5jbGFzc30gY2l0eS1waW5wb2ludGApXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgLmR1cmF0aW9uKEFOSU1BVElPTl9EVVJBVElPTilcbiAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiBkLnBvc2l0aW9uLnkpXG4gICAgICAuYXR0cihcImN4XCIsIGQgPT4gZC5wb3NpdGlvbi54KVxuICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCAxMDApXG4gICAgICAuc3R5bGUoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICB9XG5cbiAgY2l0eUxhYmVsKCkge1xuICAgIHRoaXMuc3ZnXG4gICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgMClcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBgbWFwLWNpdHktbGFiZWwgY2l0eSAke2QuY2xhc3N9YClcbiAgICAgIC50ZXh0KGQgPT4gZC5jaXR5KVxuICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIDE0KVxuICAgICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDMpXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gZC5jb2xvcilcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5lYXNlKEFOSU1BVElPTl9FQVNJTkcpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OIC8gMS41KVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAuYXR0cihcInhcIiwgZCA9PiB7XG4gICAgICAgIGlmIChkLmNpdHkgPT09IFwiU2FuIEZyYW5jaXNjb1wiKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9zaXRpb24ueCAtIDExMDtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNpdHkgPT09IFwiU2FuIEpvc2VcIikge1xuICAgICAgICAgIHJldHVybiBkLnBvc2l0aW9uLnggLSA3ODtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNpdHkgPT09IFwiSHVudGluZ3RvbiBCZWFjaFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9zaXRpb24ueCAtIDE0MDtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNpdHkgPT09ICdTYW4gRGllZ28nKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9zaXRpb24ueCAtIDg1O1xuICAgICAgICB9IGVsc2UgaWYgKGQuY2l0eSA9PT0gJ0Jpc21hcmNrJykge1xuICAgICAgICAgIHJldHVybiBkLnBvc2l0aW9uLnggLSA4NTtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNpdHkgPT09ICdQbGFubycpIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3NpdGlvbi54IC0gNTU7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jaXR5ID09PSAnU2lvdXggRmFsbHMnKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9zaXRpb24ueCAtIDkwO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY2l0eSA9PT0gJ0dsZW5kYWxlJykge1xuICAgICAgICAgIHJldHVybiBkLnBvc2l0aW9uLnggLSA3NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZC5wb3NpdGlvbi54ICsgMTU7XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4gZC5wb3NpdGlvbi55ICsgNSlcbiAgICAgIC5zdHlsZShcInotaW5kZXhcIiwgMTAwKTtcbiAgfVxuXG4gIHJhbmtpbmcoKSB7XG4gICAgdGhpcy5zdmdcbiAgICAgIC5zZWxlY3RBbGwoXCIucmFua2luZ1wiKVxuICAgICAgLmRhdGEoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAudGV4dChkID0+IGQucmFua2luZylcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIDEyKVxuICAgICAgLnN0eWxlKFwiZm9udC13ZWlnaHRcIiwgNzAwKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBjaXR5ICR7ZC5jbGFzc30gY2l0eS1waW5wb2ludGApXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZWFzZShBTklNQVRJT05fRUFTSU5HKVxuICAgICAgLmR1cmF0aW9uKEFOSU1BVElPTl9EVVJBVElPTilcbiAgICAgIC5hdHRyKFwieVwiLCBkID0+IGQucG9zaXRpb24ueSArIDQpXG4gICAgICAuYXR0cihcInhcIiwgZCA9PiBkLnBvc2l0aW9uLngpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnN0eWxlKCd6LWluZGV4JywgMTAwKTtcbiAgfVxuXG4gIHBvaW50ZXIoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7Il0sInNvdXJjZVJvb3QiOiIifQ==