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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);









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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: blueviolet;\r\n    \r\n    height: 100vh; width: 100%;\r\n  \r\n    \r\n}\r\n\r\n.divCalc {\r\n    height:  500px;\r\n    width: 300px;\r\n    background: black;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.clear {\r\n    width: 50%;\r\n    height: 5em;\r\n    background-color: grey; \r\n    color: white;\r\n    outline: 1px solid  white\";\r\n    font-weight: lighter;\r\n    /*border-bottom-left-radius: 15px;*/\r\n    border-bottom-right-radius: 15px;\r\n}\r\n.backspace {\r\n    width: 50%;\r\n    height: 5em;\r\n    background-color: grey; \r\n    color: white;\r\n    outline: 1px solid  white\";\r\n    font-weight: lighter;\r\n    border-bottom-left-radius: 15px;\r\n   /*border-bottom-right-radius: 15px;*/\r\n}\r\n\r\n.account {\r\n    width: 100%;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    color: #d98192;\r\n    font-size: 18px;\r\n    text-align: right;\r\n}\r\n\r\n.accont::placeholder {\r\n    color: #fff;\r\n}\r\n\r\n.result {\r\n    width: 100%;\r\n    margin-top: 18px;\r\n    text-align: right;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    font-size: 60px;\r\n    \r\n}\r\n.result::placeholder {\r\n    color: #fff;\r\n}\r\n\r\n.btn {\r\n    min-width: 75px; \r\n    height: 4em; \r\n    font-weight: lighter; \r\n    font-size: 22px;\r\n    outline: 1px solid #888;\r\n    padding: 25px;\r\n    outline: none;\r\n    \r\n}\r\n\r\n.btnOpenList {\r\n    background: white;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    left: -250px;\r\n    top: 100px;\r\n}\r\n\r\n.btnCloseList {\r\n    background: white;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    left: -250px;\r\n    top: 200px;\r\n}\r\n\r\n\r\n.ListHistory {\r\n    width: 200px;\r\n    min-height: 300px;\r\n    background-color: white;\r\n    position: absolute;\r\n    left: 350px;\r\n    top: 80px;\r\n    display: none;\r\n}\r\n\r\n.result{\r\n    pointer-events: none;\r\n  }\r\n.account{\r\n    pointer-events: none;\r\n  }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map