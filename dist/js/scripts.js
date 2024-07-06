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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./app/scripts/menu.js\");\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools.js */ \"./app/scripts/tools.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.js */ \"./app/scripts/slider.js\");\n\n\n\n\n//# sourceURL=webpack://antool/./app/scripts/main.js?");

/***/ }),

/***/ "./app/scripts/menu.js":
/*!*****************************!*\
  !*** ./app/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const burger = document.querySelector(\".header__burger\");\n  const nav = document.querySelector(\".header__nav-mobile\");\n  burger.addEventListener(\"click\", () => {\n    nav.classList.toggle(\"header__nav-mobile--active\");\n  });\n});\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const dropdown = document.querySelector(\".nav__item--dropdown\");\n  const nav = document.querySelector(\".nav__dropped-menu\");\n  dropdown.addEventListener(\"click\", e => {\n    console.log(e.target);\n    nav.classList.toggle(\"nav__active\");\n  });\n});\ndocument.addEventListener(\"click\", e => {\n  const nav = document.querySelector(\".nav__dropped-menu\");\n  if (e.target.classList.value !== \"nav__droppable\" && e.target.classList.value !== \"nav__link\") {\n    nav.classList.remove(\"nav__active\");\n  }\n});\n\n//# sourceURL=webpack://antool/./app/scripts/menu.js?");

/***/ }),

/***/ "./app/scripts/slider.js":
/*!*******************************!*\
  !*** ./app/scripts/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nclass ReviewsSlider {\n  constructor(selector) {\n    this.slider = document.querySelector(selector);\n    this.slides = this.slider.querySelectorAll(\".reviews-slider__slide\");\n    this.prevBtn = this.slider.querySelector(\".reviews-slider__btn--prev\");\n    this.nextBtn = this.slider.querySelector(\".reviews-slider__btn--next\");\n    this.dots = this.slider.querySelectorAll(\".reviews-slider__dot\");\n    this.currentSlide = 0;\n    this.init();\n  }\n  init() {\n    this.showSlide(this.currentSlide);\n    this.addEventListeners();\n  }\n  showSlide(index) {\n    this.slides.forEach((slide, i) => {\n      slide.style.display = i === index ? \"flex\" : \"none\";\n    });\n    this.dots.forEach((dot, i) => {\n      dot.classList.toggle(\"reviews-slider__dot--active\", i === index);\n    });\n    this.updateControls();\n  }\n  updateControls() {\n    this.prevBtn.disabled = this.currentSlide === 0;\n    this.nextBtn.disabled = this.currentSlide === this.slides.length - 1;\n  }\n  prevSlide() {\n    this.currentSlide = Math.max(this.currentSlide - 1, 0);\n    this.showSlide(this.currentSlide);\n  }\n  nextSlide() {\n    this.currentSlide = Math.min(this.currentSlide + 1, this.slides.length - 1);\n    this.showSlide(this.currentSlide);\n  }\n  addEventListeners() {\n    this.prevBtn.addEventListener(\"click\", () => this.prevSlide());\n    this.nextBtn.addEventListener(\"click\", () => this.nextSlide());\n    this.dots.forEach((dot, index) => {\n      dot.addEventListener(\"click\", () => this.showSlide(index));\n    });\n  }\n}\nnew ReviewsSlider(\".reviews-slider\");\n\n//# sourceURL=webpack://antool/./app/scripts/slider.js?");

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