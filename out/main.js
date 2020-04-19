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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! exports provided: inputCalc, resultCalc, ListHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputCalc", function() { return inputCalc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultCalc", function() { return resultCalc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHistory", function() { return ListHistory; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./js/module.js");








Object(_module__WEBPACK_IMPORTED_MODULE_0__["creatInput"])();
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButton"])("7");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButton"])("8");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButton"])("9");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButtonOperator"])("/");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButton"])("4");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButton"])("5");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButton"])("6");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButtonOperator"])("*");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButton"])("1");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButton"])("2");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButton"])("3");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButtonOperator"])("+");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButton"])(".");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButton"])("0");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButtonOutput"])("=");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButtonOperator"])("-");
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButtonBackspace"])();
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButtonClear"])();
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButtonOpenList"])();
Object(_module__WEBPACK_IMPORTED_MODULE_0__["createButtonCloseList"])();
var inputCalc = document.querySelector('.account');
var resultCalc = document.querySelector('.result');
var ListHistory = document.querySelector('.ListHistory');

/***/ }),

/***/ "./js/module.js":
/*!**********************!*\
  !*** ./js/module.js ***!
  \**********************/
/*! exports provided: creatInput, createButtonClear, createButtonBackspace, backsp, createButton, createButtonOperator, createButtonOutput, input, backspace, createButtonOpenList, createButtonCloseList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creatInput", function() { return creatInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonClear", function() { return createButtonClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonBackspace", function() { return createButtonBackspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backsp", function() { return backsp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return createButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonOperator", function() { return createButtonOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonOutput", function() { return createButtonOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backspace", function() { return backspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonOpenList", function() { return createButtonOpenList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonCloseList", function() { return createButtonCloseList; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./js/index.js");

var divCalc = document.createElement('div');
divCalc.className = "divCalc";
document.body.append(divCalc);
var divListHistory = document.createElement('div');
divListHistory.className = "ListHistory";
divCalc.append(divListHistory);
var a;
var mas = [];
var q;
var creatInput = function creatInput() {
  var Input = document.createElement('input');
  Input.type = "text";
  Input.placeholder = "0,00";
  Input.className = "account";
  divCalc.append(Input);
  var Input2 = document.createElement('input');
  Input2.type = "text";
  Input2.placeholder = "0,00";
  Input2.className = "result";
  divCalc.append(Input2);
};
var createButtonClear = function createButtonClear() {
  var Clear = document.createElement('button');
  Clear.className = "clear";
  Clear.innerHTML = "Сlear";

  Clear.onclick = function () {
    _index__WEBPACK_IMPORTED_MODULE_0__["resultCalc"].value = '';
    _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value = "0,00";
    backspace();
    divListHistory.innerHTML = '';
    mas = [];
  };

  divCalc.append(Clear);
};
var createButtonBackspace = function createButtonBackspace() {
  var Backspace = document.createElement('button');
  Backspace.className = "backspace";
  Backspace.innerHTML = "Backspace";

  Backspace.onclick = function () {
    backsp();
  };

  divCalc.append(Backspace);
};
var backsp = function backsp() {
  q = _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value;
  var arr = q.split('');
  arr.splice(-1);
  var b = arr.join(['']);
  _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value = b;
};
var createButton = function createButton(a) {
  var button = document.createElement('button');

  button.onclick = function () {
    input(a);
  };

  button.style = "background-image: linear-gradient(to right, #f7f7f7 0%, #f7f7f7 100%);  color: #888;";
  button.className = "btn";
  button.innerHTML = a;
  divCalc.append(button);
};
var createButtonOperator = function createButtonOperator(a) {
  var button = document.createElement('button');

  button.onclick = function () {
    var arrr = _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value.toString();
    arrr = arrr.split('');
    var w = arrr[arrr.length - 1];

    if (w + a === '++' || w === '+') {
      backsp();
    }

    if (w + a === '--' || w === '-') {
      backsp();
    }

    if (w + a === '//' || w === '/') {
      backsp();
    }

    if (w + a === '**' || w === '*') {
      backsp();
    }

    if (arrr[0] !== undefined) {
      if (a.toString !== '=') {
        input(a);
      }
    }
  };

  button.className = "btn";
  button.style = "background-color: #fe9241; color: white;";
  button.innerHTML = a;
  divCalc.append(button);
};
var createButtonOutput = function createButtonOutput(a) {
  var button = document.createElement('button');

  button.onclick = function () {
    var a;
    a = _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value + '=' + eval(_index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value);

    if (eval(_index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value) == undefined) {
      _index__WEBPACK_IMPORTED_MODULE_0__["resultCalc"].value = "";
      _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value = "";
      mas.push(a);
      divListHistory.innerHTML = '';

      for (var i = 0; i < mas.length; i++) {
        divListHistory.innerHTML += '<li>' + mas[i] + '</li>';
      }
    } else if (eval(_index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value) == Infinity) {
      _index__WEBPACK_IMPORTED_MODULE_0__["resultCalc"].value = "0,00";
      alert("на ноль делить нельзя!!!");
      _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value = '';
      mas.push(a);
      divListHistory.innerHTML = '';

      for (var _i = 0; _i < mas.length; _i++) {
        divListHistory.innerHTML += '<li>' + mas[_i] + '</li>';
      }
    } else {
      mas.push(_index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value + '=' + eval(_index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value).toFixed(2));
      _index__WEBPACK_IMPORTED_MODULE_0__["resultCalc"].value = eval(_index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value).toFixed(2);
      _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value = eval(_index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value).toFixed(2);
      divListHistory.innerHTML = '';

      for (var _i2 = 0; _i2 < mas.length; _i2++) {
        divListHistory.innerHTML += '<li>' + mas[_i2] + '</li>';
      }
    }

    ;
  };

  button.className = "btn";
  button.style = "background-image: linear-gradient(to right, #f7f7f7 0%, #f7f7f7 100%);  color: #888;";
  button.innerHTML = a;
  divCalc.append(button);
};
var input = function input(i) {
  _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value = _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value + i;
};
var backspace = function backspace() {
  _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value = _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value.substring(0, _index__WEBPACK_IMPORTED_MODULE_0__["inputCalc"].value.lenght - 1);
};
var createButtonOpenList = function createButtonOpenList() {
  var button = document.createElement('button');

  button.onclick = function () {
    divListHistory.style = 'display: block';
  };

  button.className = " btn btnOpenList";
  button.innerHTML = 'Open history List';
  divCalc.append(button);
};
var createButtonCloseList = function createButtonCloseList() {
  var button = document.createElement('button');

  button.onclick = function () {
    divListHistory.style = 'display: none';
  };

  button.className = " btn btnCloseList";
  button.innerHTML = 'Close history List';
  divCalc.append(button);
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map