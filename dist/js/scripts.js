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

/***/ "./app/scripts/main.js":
/*!*****************************!*\
  !*** ./app/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./app/scripts/menu.js\");\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools.js */ \"./app/scripts/tools.js\");\n\n\n\n//# sourceURL=webpack://antool/./app/scripts/main.js?");

/***/ }),

/***/ "./app/scripts/menu.js":
/*!*****************************!*\
  !*** ./app/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const burger = document.querySelector(\".header__burger\");\n  const nav = document.querySelector(\".header__nav-mobile\");\n  burger.addEventListener(\"click\", () => {\n    nav.classList.toggle(\"header__nav-mobile--active\");\n  });\n});\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const dropdown = document.querySelector(\".nav__item--dropdown\");\n  const nav = document.querySelector(\".nav__dropped-menu\");\n  dropdown.addEventListener(\"click\", e => {\n    console.log(e.target);\n    nav.classList.toggle(\"nav__active\");\n  });\n});\ndocument.addEventListener(\"click\", e => {\n  const nav = document.querySelector(\".nav__dropped-menu\");\n  if (e.target.classList.value !== \"nav__droppable\" && e.target.classList.value !== \"nav__link\") {\n    nav.classList.remove(\"nav__active\");\n  }\n});\n\n//# sourceURL=webpack://antool/./app/scripts/menu.js?");

/***/ }),

/***/ "./app/scripts/tools.js":
/*!******************************!*\
  !*** ./app/scripts/tools.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst tools = document.querySelectorAll(\".tools__tool\");\nconst newcomers = document.querySelectorAll(\".newcomers__tool\");\nfunction addHover(blocks, element) {\n  blocks.forEach(block => {\n    const image = block.querySelector(`.${element}__heart`);\n    const originalSrc = image.src;\n    const newSrc = \"./images/svg/heart-red.svg\";\n    const button = block.querySelector(`.${element}__button`);\n    block.addEventListener(\"mouseenter\", () => {\n      image.src = newSrc;\n      button.classList.remove(`${element}__button`);\n      button.classList.add(\"button-transform\");\n    });\n    block.addEventListener(\"mouseleave\", () => {\n      image.src = originalSrc;\n      button.classList.remove(\"button-transform\");\n      button.classList.add(`${element}__button`);\n    });\n  });\n}\naddHover(tools, \"tools\");\naddHover(newcomers, \"newcomers\");\n\n//# sourceURL=webpack://antool/./app/scripts/tools.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/scripts/main.js");
/******/ 	
/******/ })()
;