var root =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by ostrovskij on 28.04.2017.
 */

function summa(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        return new Error('Делить на ноль нельзя ');
    }
}

exports.summa = summa;
exports.subtraction = subtraction;
exports.multiplication = multiplication;
exports.division = division;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ostrovskij on 27.04.2017.
 */

//export define

module.exports = function (message) {

  return 'Welcome! ' + message;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ostrovskij on 27.04.2017.
 */


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goodbye = undefined;

var _math = __webpack_require__(0);

Object.keys(_math).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _math[key];
    }
  });
});

var _goodbye = __webpack_require__(3);

var _goodbye2 = _interopRequireDefault(_goodbye);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var welcome = __webpack_require__(1);
var pifagor = __webpack_require__(4).pifagor;

console.log(welcome("root!"));
console.log((0, _goodbye2.default)("root!"));
console.log((0, _math.summa)(2, 3));

exports.welcome = welcome;
exports.pifagor = pifagor;
exports.goodbye = _goodbye2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ostrovskij on 05.05.2017.
 */


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (message) {
  return 'Goodbye ' + message;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by ostrovskij on 05.05.2017.
 */
function GetPifagor(a, b, c) {
  return { cos: (b * b + c * c - a * a) / (2 * b * c), sin: a / c, tg: a / b };
}

exports.pifagor = GetPifagor;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjBkMzI5NGFjYTNjNTUyYTBlY2QiLCJ3ZWJwYWNrOi8vL21hdGguanMiLCJ3ZWJwYWNrOi8vL3dlbGNvbWUuanMiLCJ3ZWJwYWNrOi8vL2hvbWUuanMiLCJ3ZWJwYWNrOi8vL2dvb2RieWUuanMiLCJ3ZWJwYWNrOi8vL3RyaWdvbm9tZXRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIwZDMyOTRhY2EzYzU1MmEwZWNkIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgb3N0cm92c2tpaiBvbiAyOC4wNC4yMDE3LlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHN1bW1hIChhLGIpIHtcclxuICAgIHJldHVybiBhK2I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1YnRyYWN0aW9uIChhLGIpIHtcclxuICAgIHJldHVybiBhLWI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG11bHRpcGxpY2F0aW9uIChhLGIpIHtcclxuICAgIHJldHVybiBhKmI7XHJcbn1cclxuZnVuY3Rpb24gZGl2aXNpb24gKGEsYikge1xyXG4gICAgaWYoYiE9MCl7XHJcbiAgICAgICAgcmV0dXJuIGEvYjtcclxuICAgIH1lbHNlIHtyZXR1cm4gbmV3IEVycm9yKCfQlNC10LvQuNGC0Ywg0L3QsCDQvdC+0LvRjCDQvdC10LvRjNC30Y8gJyl9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7c3VtbWEsc3VidHJhY3Rpb24sbXVsdGlwbGljYXRpb24sZGl2aXNpb259XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtYXRoLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgb3N0cm92c2tpaiBvbiAyNy4wNC4yMDE3LlxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG4vL2V4cG9ydCBkZWZpbmVcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG5cclxuICAgcmV0dXJuIChgV2VsY29tZSEgJHttZXNzYWdlfWApO1xyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VsY29tZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG9zdHJvdnNraWogb24gMjcuMDQuMjAxNy5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5pbXBvcnQge3N1bW1hfSBmcm9tICAnLi9tYXRoJztcclxuaW1wb3J0IGdvb2RieWUgZnJvbSAnLi9nb29kYnllJztcclxuXHJcbmxldCB3ZWxjb21lID0gcmVxdWlyZSgnLi93ZWxjb21lJyk7XHJcbmxldCBwaWZhZ29yID0gcmVxdWlyZSgnLi90cmlnb25vbWV0cnknKS5waWZhZ29yO1xyXG5cclxuY29uc29sZS5sb2cod2VsY29tZShcInJvb3QhXCIpKTtcclxuY29uc29sZS5sb2coZ29vZGJ5ZShcInJvb3QhXCIpKTtcclxuY29uc29sZS5sb2coc3VtbWEoMiwzKSk7XHJcblxyXG5leHBvcnRzLndlbGNvbWUgPSB3ZWxjb21lO1xyXG5leHBvcnRzLnBpZmFnb3IgPSBwaWZhZ29yO1xyXG5leHBvcnQge2dvb2RieWV9O1xyXG5leHBvcnQgKiBmcm9tICcuL21hdGgnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaG9tZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG9zdHJvdnNraWogb24gMDUuMDUuMjAxNy5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gKGBHb29kYnllICR7bWVzc2FnZX1gKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZ29vZGJ5ZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG9zdHJvdnNraWogb24gMDUuMDUuMjAxNy5cclxuICovXHJcbmZ1bmN0aW9uIEdldFBpZmFnb3IoYSxiLGMpIHtcclxuICAgIHJldHVybiB7Y29zOihiKmIrYypjLWEqYSkvKDIqYipjKSxzaW46YS9jLHRnOmEvYn07XHJcbn1cclxuXHJcbmV4cG9ydHMucGlmYWdvciA9IEdldFBpZmFnb3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRyaWdvbm9tZXRyeS5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7OztBQ2hFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUN4QkE7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FDVEE7OztBQUdBO0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWJBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkE7OztBQUdBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNOQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=