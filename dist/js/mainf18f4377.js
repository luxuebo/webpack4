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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.scss?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _static_image_laobi_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/image/laobi.png */ \"./src/static/image/laobi.png\");\n/* harmony import */ var _static_image_laobi_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_image_laobi_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mock_data_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/data.xml */ \"./src/mock/data.xml\");\n/* harmony import */ var _mock_data_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mock_data_xml__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mock_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/data.json */ \"./src/mock/data.json\");\nvar _mock_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mock/data.json */ \"./src/mock/data.json\", 1);\n// import _ from 'lodash';\n\n\n\n\n // import $ from 'jquery';\n// import jq from './js/a';\n// console.log(window.$)\n// console.log(jq.jq)\n// console.log($)\n\nfunction component() {\n  var element = document.createElement('div'); // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的\n  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\n  element.innerHTML = 'Hellow webpack';\n  element.classList.add('hello'); //css\n\n  element.classList.add('fontsize'); //sass\n  // 将图像添加到我们现有的 div。\n\n  var myIcon = new Image();\n  myIcon.src = _static_image_laobi_png__WEBPACK_IMPORTED_MODULE_2___default.a; // element.appendChild(myIcon);\n  // console.log(DataXml);\n  // console.log(DataJson);\n\n  return element;\n}\n\ndocument.body.appendChild(component());\n/*es6,7,8语法,需要babel */\n// let arrFn = () => {\n//     // console.log('111')\n// }\n// arrFn();\n// @log\n// class A {\n//     // a = 1;\n// }\n// let a = new A();\n// function log(target) {\n//     // console.log(target)\n// }\n// function *ge(){\n//     yield 'haha';\n//     return 'ending';\n// }\n// let geResult = ge().next();\n// // console.log(geResult)\n// let clu = \"foobar\".includes(\"foo\");\n// // console.log(clu)\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/mock/data.json":
/*!****************************!*\
  !*** ./src/mock/data.json ***!
  \****************************/
/*! exports provided: name, age, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"wo\\\",\\\"age\\\":\\\"20\\\"}\");\n\n//# sourceURL=webpack:///./src/mock/data.json?");

/***/ }),

/***/ "./src/mock/data.xml":
/*!***************************!*\
  !*** ./src/mock/data.xml ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"note\":{\"to\":[\"Mary\"],\"from\":[\"John\"],\"heading\":[\"Reminder\"],\"body\":[\"Call Cindy on Tuesday\"]}}\n\n//# sourceURL=webpack:///./src/mock/data.xml?");

/***/ }),

/***/ "./src/static/image/laobi.png":
/*!************************************!*\
  !*** ./src/static/image/laobi.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/img/a14e3c96f28295d15eb3cbec4a115eb9.png\";\n\n//# sourceURL=webpack:///./src/static/image/laobi.png?");

/***/ })

/******/ });