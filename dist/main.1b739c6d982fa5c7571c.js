/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/PostController.js":
/*!*******************************************!*\
  !*** ./src/controllers/PostController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPost\": () => (/* binding */ addPost),\n/* harmony export */   \"deletePost\": () => (/* binding */ deletePost)\n/* harmony export */ });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ \"./src/domElements.js\");\n/* harmony import */ var _data_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/stack */ \"./src/data/stack.js\");\n/* harmony import */ var _utils_MakeID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/MakeID */ \"./src/utils/MakeID.js\");\n\r\n\r\n\r\n\r\nif (_data_stack__WEBPACK_IMPORTED_MODULE_1__.stack.length === 0) {\r\n    _domElements__WEBPACK_IMPORTED_MODULE_0__.posts.innerHTML = \"<h1>Add or reduce elements!</h1>\"\r\n}\r\n\r\n\r\nconst addPost = () => {\r\n    const before = _data_stack__WEBPACK_IMPORTED_MODULE_1__.stack.length\r\n    _data_stack__WEBPACK_IMPORTED_MODULE_1__.stack.push((0,_utils_MakeID__WEBPACK_IMPORTED_MODULE_2__.default)(5))\r\n    if (_data_stack__WEBPACK_IMPORTED_MODULE_1__.stack.length > before) {\r\n        const li = document.createElement(\"li\")\r\n        const title = document.createTextNode(_data_stack__WEBPACK_IMPORTED_MODULE_1__.stack[before])\r\n        li.id = _data_stack__WEBPACK_IMPORTED_MODULE_1__.stack[before]\r\n        console.log(_data_stack__WEBPACK_IMPORTED_MODULE_1__.stack)\r\n        console.log(\"ID:\", li.id)\r\n        li.className = \"list-group-item\"\r\n        li.appendChild(title)\r\n        _domElements__WEBPACK_IMPORTED_MODULE_0__.posts.appendChild(li)\r\n    }\r\n}\r\n\r\nconst deletePost = () => {\r\n    const removed = _data_stack__WEBPACK_IMPORTED_MODULE_1__.stack.pop()\r\n    const before = _data_stack__WEBPACK_IMPORTED_MODULE_1__.stack.length\r\n    console.log(\"REMOVED\", removed)\r\n    if (before === 0) {\r\n        console.log(_data_stack__WEBPACK_IMPORTED_MODULE_1__.stack.length)\r\n        _domElements__WEBPACK_IMPORTED_MODULE_0__.posts.innerHTML = \"<h1> Empty stack. </h1>\"\r\n        return\r\n    }\r\n    const getRemoved = document.getElementById(removed)\r\n    getRemoved.remove()\r\n}\r\n\n\n//# sourceURL=webpack://simple-app/./src/controllers/PostController.js?");

/***/ }),

/***/ "./src/data/stack.js":
/*!***************************!*\
  !*** ./src/data/stack.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stack\": () => (/* binding */ stack),\n/* harmony export */   \"counter\": () => (/* binding */ counter)\n/* harmony export */ });\nconst stack = [] // stack\r\nlet counter = stack.length\r\n\r\nif (stack.length === 0) {\r\n    posts.innerHTML = \"<h1>Add or reduce elements!</h1>\"\r\n}\r\n\n\n//# sourceURL=webpack://simple-app/./src/data/stack.js?");

/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"posts\": () => (/* binding */ posts),\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce)\n/* harmony export */ });\nconst posts = document.getElementById(\"posts\")\r\nconst add = document.getElementById(\"add\")\r\nconst reduce = document.getElementById(\"reduce\")\r\n\n\n//# sourceURL=webpack://simple-app/./src/domElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_PostController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/PostController */ \"./src/controllers/PostController.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n\r\n\r\n\r\n_domElements__WEBPACK_IMPORTED_MODULE_1__.add.addEventListener(\"click\", _controllers_PostController__WEBPACK_IMPORTED_MODULE_0__.addPost)\r\n_domElements__WEBPACK_IMPORTED_MODULE_1__.reduce.addEventListener(\"click\", _controllers_PostController__WEBPACK_IMPORTED_MODULE_0__.deletePost)\n\n//# sourceURL=webpack://simple-app/./src/index.js?");

/***/ }),

/***/ "./src/utils/MakeID.js":
/*!*****************************!*\
  !*** ./src/utils/MakeID.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst makeid = (length) => {\r\n    let result = [];\r\n    const characters = 'ABCD9NAy7ozZiVwr7Us8ZNJtXWrXcCMC9ym4Zm2RfEHfKtuvwxyz0123456789';\r\n    const charactersLength = characters.length;\r\n    for (var i = 0; i < length; i++) {\r\n        result.push(characters.charAt(Math.floor(Math.random() *\r\n            charactersLength)));\r\n    }\r\n    return result.join('');\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeid);\n\n//# sourceURL=webpack://simple-app/./src/utils/MakeID.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;