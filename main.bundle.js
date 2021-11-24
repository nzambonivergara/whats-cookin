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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--4-2!./src/styles/index.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/*Colors*/\n/*Box Model*/\n/*Fonts*/\n/*Transitions*/\nhtml {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background-image: url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3331&q=80);\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: #011936;\n  font-family: \"Raleway\", sans-serif;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  overscroll-behavior-y: none;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\nbody::-webkit-scrollbar {\n  display: none;\n}\n\nh1, h2, h3, h4 {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Quicksand\", sans-serif;\n  font-weight: bold;\n}\n\nli,\nol,\np {\n  margin: 16px 0;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  background-color: #E0E0E0;\n  justify-content: space-between;\n  box-sizing: border-box;\n  border-bottom: 1px solid #011936;\n  padding: 0 20px;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.main {\n  box-sizing: border-box;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  padding-top: 51px;\n  width: 100%;\n}\n\nmain > section {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n}\n\nbutton {\n  background-color: transparent;\n  border-style: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-around;\n  padding: 8px;\n}\n\n.nav-bar__nav-tabs {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: row;\n}\n\n.nav-bar__nav-tabs > button {\n  font-size: 16px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  border-bottom: 4px solid transparent;\n  font-family: \"Raleway\", sans-serif;\n  height: 50px;\n  width: 120px;\n  transition: all 0.2s ease-in-out;\n}\n.nav-bar__nav-tabs > button:hover {\n  border-bottom: 4px solid #Ef5D60;\n}\n\n.nav-bar__home-search {\n  display: flex;\n  align-items: center;\n}\n\n.search-bar {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n}\n\n.search-bar__search-label {\n  margin-right: 8px;\n}\n\n.search-bar__home-button {\n  font-size: 16px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  border-bottom: 4px solid transparent;\n  color: #011936;\n  font-family: \"Quicksand\", sans-serif;\n  transition: all 0.2s ease-in-out;\n}\n.search-bar__home-button:hover {\n  color: #Ef5D60;\n  text-shadow: 1px 1px 2px #011936;\n}\n\n/* --------------- HOME VIEW ------------------- */\n.search-glide-container {\n  display: flex;\n  justify-content: space-around;\n  overflow-x: scroll;\n  width: 100%;\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  padding-bottom: 10px;\n}\n\n.search-glide__button {\n  display: flex;\n  align-items: center;\n  background-color: #485A68;\n  border: 1px solid #011936;\n  border-radius: 50%;\n  height: 100px;\n  justify-content: center;\n  min-width: 100px;\n  overflow: hidden;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.search-glide__button:hover {\n  cursor: pointer;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);\n}\n\n.search-glide__tag-name {\n  font-size: 16px;\n  font-weight: 700;\n  color: #fff;\n  font-family: \"Raleway\", sans-serif;\n  text-align: center;\n  transition: all 0.2s ease-in-out;\n  z-index: 1;\n}\n\n.modal__button:hover,\n.search-glide__button:hover,\n.tag-selected {\n  background-color: #Ef5D60;\n}\n\n.main-title {\n  top: 150px;\n  color: #011936;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 85px;\n  font-weight: 700;\n  position: fixed;\n  right: 40px;\n  z-index: -1;\n}\n\n/* ----------- ALL RECIPES VIEW --------------- */\n.searched-recipes-view__recipes-container,\n.tagged-recipes-view__recipes-container,\n.all-recipes-view,\n.all-recipes-view-alt,\n.weekly-recipes-view,\n.favorites-view {\n  display: flex;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.85);\n  padding: 20px;\n  margin-top: 20px;\n}\n\n.recipes-container__search-results,\n.weekly-recipes-view__recipes,\n.tagged-recipes-view__recipes-container,\n.all-recipes-view__recipes-container,\n.recipes-container__no-results,\n.favorites-view__favorites-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 20px;\n}\n\n.all-recipes-view-alt {\n  padding-right: 100px;\n}\n\n.recipes-container__no-results {\n  font-size: 17px;\n}\n\n.recipes-container__recipe-card,\n.search-results-container__recipe-card {\n  display: flex;\n  flex-direction: column;\n  height: 200px;\n  width: 200px;\n  text-align: center;\n  border: 1px solid #d3d3d3;\n}\n.recipes-container__recipe-card:hover,\n.search-results-container__recipe-card:hover {\n  cursor: pointer;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);\n}\n\n.search-glide__button:hover {\n  cursor: pointer;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);\n}\n\n.recipe-card__image {\n  height: 125px;\n  width: 200px;\n}\n\n.recipe-card__name {\n  font-weight: bold;\n  text-transform: capitalize;\n  margin: 16px 5px 0 5px;\n}\n\n/* ---------- SINGLE RECIPE VIEW ----------- */\n.single-recipe-view,\n.single-recipe-view-alt {\n  display: flex;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.85);\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.single-recipe-view-alt {\n  padding-right: 190px;\n}\n\n.single-recipe-view__recipe-information {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.cook-recipe-button,\n.recipe-button {\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  border: 1px solid #d3d3d3;\n  color: #Ef5D60;\n  transition: all 0.2s ease-in-out;\n}\n.cook-recipe-button:hover,\n.recipe-button:hover {\n  background-color: #Ef5D60;\n  color: #fff;\n}\n\n.recipe-button {\n  width: 275px;\n  margin: 15px 10px;\n  padding: 5px;\n  justify-content: center;\n  gap: 8px;\n}\n\n.search-results,\n.recipe-title,\n.top-banner__title {\n  margin-top: 30px;\n  margin-bottom: 20px;\n  font-size: 36px;\n  text-transform: capitalize;\n}\n\n.recipe-image {\n  margin-top: 25px;\n  width: 600px;\n  height: 400px;\n}\n\n.total-cost {\n  display: flex;\n  align-items: center;\n  color: #Ef5D60;\n  font-weight: bold;\n}\n\n.recipe-buttons-container {\n  display: flex;\n}\n\n.recipe-information__container {\n  margin: 25px;\n}\n\n.single-recipe-view__instructions {\n  margin: 20px 0;\n  padding: 0 20px;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.85);\n  left: -168px;\n  padding: 20px;\n  width: 150px;\n  top: 8px;\n  bottom: 24px;\n  box-sizing: border-box;\n}\n\n::-webkit-scrollbar {\n  width: 0;\n  background: transparent;\n}\n\n.pantry-ingredients {\n  overflow-y: scroll;\n  flex: 1;\n  height: 100%;\n}\n\n/* ----- Favorites View ------- */\n.no-weekly-recipes,\n.recipes-container__no-favorites {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  margin-top: 75px;\n  text-align: center;\n}\n\n.modal,\n.hidden {\n  display: none;\n}\n\n.modal.is-open {\n  display: block;\n}\n\n.modal__overlay {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  justify-content: center;\n}\n\n.modal__container {\n  background-color: #fff;\n  padding: 30px;\n  max-width: 500px;\n  max-height: 100vh;\n  border-radius: 4px;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n\n.modal__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.modal__title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 600;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #00449e;\n  box-sizing: border-box;\n}\n\n.modal__close {\n  background: transparent;\n  border: 0;\n}\n\n.modal__header .modal__close:before {\n  content: \"✕\";\n}\n\n.modal__content {\n  display: block;\n  padding: 0;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.modal__footer {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.modal__button {\n  color: #fff;\n  background-color: #485A68;\n  border: 1px solid #011936;\n  border-radius: 4px;\n  margin: 5px;\n  transition: all 0.2s ease-in-out;\n}", "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/reset.scss","webpack://./src/styles/variables.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import './reset.scss';\n@import './variables.scss';\n@import './mixins.scss';\n\nhtml {\n  @include flex-column();\n  height: 100%;\n}\n\nbody {\n  @include flex-column();\n  flex: 1;\n  background-image: url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3331&q=80);\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: $primary-color;\n  font-family: $primary-font;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  overscroll-behavior-y: none;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\nbody::-webkit-scrollbar {\n  display: none;\n}\n\nh1, h2, h3, h4 {\n\t@include flex-column();\n  font-family: $secondary-font;\n  font-weight: bold;\n}\n\nli,\nol,\np {\n  margin: 16px 0;\n}\n\nnav {\n  @include flex-cross-axis-center();\n  background-color: $background-color;\n  justify-content: space-between;\n  box-sizing: border-box;\n  border-bottom: $primary-border;\n  padding: 0 20px;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.main {\n  box-sizing: border-box;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  padding-top: 51px;\n  width: 100%;\n}\n\nmain > section {\n  @include flex-column();\n  position: relative;\n  width: 100%;\n}\n\nbutton {\n  background-color: transparent;\n  border-style: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-around;\n  padding: 8px;\n}\n\n.nav-bar__nav-tabs {\n  @include flex-cross-axis-center();\n  justify-content: space-around;\n  flex-direction: row;\n}\n\n.nav-bar__nav-tabs > button {\n  @include bold-font();\n  @include flex-cross-axis-center();\n  border-bottom: 4px solid transparent;\n  font-family: $primary-font;\n  height: 50px;\n  width: 120px;\n\ttransition: $primary-transition;\n  &:hover {\n    border-bottom: 4px solid $secondary-color;\n  }\n}\n\n.nav-bar__home-search {\n  @include flex-cross-axis-center();\n}\n\n.search-bar {\n  @include flex-cross-axis-center();\n  justify-content: end;\n}\n\n.search-bar__search-label {\n  margin-right: 8px;\n}\n\n.search-bar__home-button {\n  @include bold-font();\n  @include flex-cross-axis-center();\n  border-bottom: 4px solid transparent;\n  color: $primary-color;\n  font-family: $secondary-font;\n\ttransition: $primary-transition;\n  &:hover {\n    color: $secondary-color;\n    text-shadow: 1px 1px 2px $primary-color;\n  }\n}\n\n/* --------------- HOME VIEW ------------------- */\n\n.search-glide-container {\n  display: flex;\n  justify-content: space-around;\n  overflow-x: scroll;\n  width: 100%;\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  padding-bottom: 10px;\n}\n\n.search-glide__button {\n  @include flex-cross-axis-center();\n  background-color: $primary-color-light;\n  border: $primary-border;\n  border-radius: 50%;\n  height: 100px;\n  justify-content: center;\n  min-width: 100px;\n  overflow: hidden;\n  position: relative;\n\ttransition: $primary-transition;\n  &:hover {\n    cursor: pointer;\n    box-shadow: $shadow;\n  }\n}\n\n.search-glide__tag-name {\n  @include bold-font();\n  color: $white;\n  font-family: $primary-font;\n  text-align: center;\n  transition: $primary-transition;\n  z-index: 1;\n}\n\n.modal__button:hover,\n.search-glide__button:hover,\n.tag-selected {\n  background-color: $secondary-color;\n}\n\n.main-title {\n  top: 150px;\n  color: $primary-color;\n  font-family: $secondary-font;\n  font-size: 85px;\n  font-weight: 700;\n  position: fixed;\n  right: 40px;\n  z-index: -1;\n}\n\n/* ----------- ALL RECIPES VIEW --------------- */\n.searched-recipes-view__recipes-container,\n.tagged-recipes-view__recipes-container,\n.all-recipes-view,\n.all-recipes-view-alt,\n.weekly-recipes-view,\n.favorites-view {\n  @include flex-cross-axis-center();\n  background-color: $transparent-white;\n  padding: 20px;\n  margin-top: 20px;\n}\n\n.recipes-container__search-results,\n.weekly-recipes-view__recipes,\n.tagged-recipes-view__recipes-container,\n.all-recipes-view__recipes-container,\n.recipes-container__no-results,\n.favorites-view__favorites-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 20px;\n}\n\n.all-recipes-view-alt {\n  padding-right: 100px;\n}\n\n.recipes-container__no-results {\n  font-size: 17px;\n}\n\n.recipes-container__recipe-card,\n.search-results-container__recipe-card {\n  @include flex-column();\n  @include square(200px);\n  text-align: center;\n  border: 1px solid $primary-color-x-light;\n  &:hover {\n    cursor: pointer;\n    box-shadow: $shadow;\n  }\n}\n\n.search-glide__button:hover {\n  cursor: pointer;\n  box-shadow: $shadow;\n}\n\n.recipe-card__image {\n  height: 125px;\n  width: 200px;\n}\n\n.recipe-card__name {\n  font-weight: bold;\n  text-transform: capitalize;\n  margin: 16px 5px 0 5px;\n}\n\n\n/* ---------- SINGLE RECIPE VIEW ----------- */\n\n.single-recipe-view,\n.single-recipe-view-alt {\n  @include flex-cross-axis-center();\n  background-color: $transparent-white;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.single-recipe-view-alt {\n  padding-right: 190px;\n}\n\n.single-recipe-view__recipe-information {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.cook-recipe-button,\n.recipe-button {\n  @include flex-cross-axis-center();\n  background-color: $white;\n  border: 1px solid $primary-color-x-light;\n  color: $secondary-color;\n  transition: $primary-transition;\n  &:hover {\n    background-color: $secondary-color;\n    color: $white;\n  }\n}\n\n.recipe-button {\n\twidth: 275px;\n  margin: 15px 10px;\n  padding: 5px;\n  justify-content: center;\n  gap: 8px;\n}\n\n.search-results,\n.recipe-title,\n.top-banner__title {\n  margin-top: 30px;\n  margin-bottom: 20px;\n  font-size: 36px;\n  text-transform: capitalize;\n}\n\n.recipe-image {\n  margin-top: 25px;\n  width: 600px;\n  height: 400px;\n}\n\n.total-cost {\n  @include flex-cross-axis-center();\n  color: $secondary-color;\n  font-weight: bold;\n}\n\n.recipe-buttons-container {\n  display: flex;\n}\n\n.recipe-information__container {\n  margin: 25px;\n}\n\n.single-recipe-view__instructions {\n  margin: 20px 0;\n  padding: 0 20px;\n}\n\naside {\n  @include flex-column;\n\tposition: absolute;\n\tbackground-color: $transparent-white;\n\tleft: -168px;\n\tpadding: 20px;\n\twidth: 150px;\n  top: 8px;\n  bottom: 24px;\n  box-sizing: border-box;\n}\n\n::-webkit-scrollbar {\n  width: 0;\n  background: transparent;\n}\n\n.pantry-ingredients {\n\toverflow-y: scroll;\n  flex: 1;\n  height: 100%;\n}\n\n/* ----- Favorites View ------- */\n.no-weekly-recipes,\n.recipes-container__no-favorites {\n  @include flex-cross-axis-center();\n  font-size: 20px;\n  margin-top: 75px;\n  text-align: center;\n}\n\n.modal,\n.hidden {\n  display: none;\n}\n\n.modal.is-open {\n\tdisplay: block;\n}\n\n.modal__overlay {\n  @include flex-cross-axis-center();\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0,0,0,0.6);\n  justify-content: center;\n}\n\n.modal__container {\n  background-color: $white;\n  padding: 30px;\n  max-width: 500px;\n  max-height: 100vh;\n  border-radius: 4px;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n\n.modal__header {\n  @include flex-cross-axis-center();\n  justify-content: space-between;\n}\n\n.modal__title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 600;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: $modal-title;\n  box-sizing: border-box;\n}\n\n.modal__close {\n  background: transparent;\n  border: 0;\n}\n\n.modal__header .modal__close:before {\n  content: \"\\2715\";\n}\n\n.modal__content {\n\tdisplay: block;\n\tpadding: 0;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  line-height: 1.5;\n  color: $transparent-black-dark;\n}\n\n.modal__footer {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n\n.modal__button {\n\tcolor: $white;\n\tbackground-color: $primary-color-light;\n  border: 1px solid $primary-color;\n\tborder-radius: 4px;\n\tmargin: 5px;\n\ttransition: $primary-transition;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}","/*Colors*/ \n$background-color: #E0E0E0;\n$modal-title: #00449e;\n$primary-color: #011936;\n$primary-color-x-light: #d3d3d3;\n$primary-color-light: #485A68;\n$secondary-color: #Ef5D60;\n$white: #fff;\n$transparent-black: rgba(0, 0, 0, 0.2);\n$transparent-black-dark: rgba(0, 0, 0, 0.8);\n$transparent-white: rgba(255, 255, 255, 0.85);\n\n/*Box Model*/\n$primary-border: 1px solid $primary-color;\n$shadow: 0 4px 8px 0 $transparent-black,  0 6px 20px 0 $transparent-black;\n\n/*Fonts*/\n$primary-font: 'Raleway', sans-serif;\n$secondary-font: 'Quicksand', sans-serif;\n\n/*Transitions*/\n$primary-transition: all 0.2s ease-in-out;","@mixin flex-column() {\n  display: flex;\n  flex-direction: column;\n}\n\n@mixin bold-font() {\n  font-size: 16px;\n  font-weight: 700;\n}\n\n@mixin flex-cross-axis-center() {\n  display: flex;\n  align-items: center;\n}\n\n@mixin square($measurement) {\n  height: $measurement;\n  width: $measurement;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/micromodal/dist/micromodal.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromodal/dist/micromodal.es.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var MicroModal = function () {

  var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  var Modal = /*#__PURE__*/function () {
    function Modal(_ref) {
      var targetModal = _ref.targetModal,
          _ref$triggers = _ref.triggers,
          triggers = _ref$triggers === void 0 ? [] : _ref$triggers,
          _ref$onShow = _ref.onShow,
          onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
          _ref$onClose = _ref.onClose,
          onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
          _ref$openTrigger = _ref.openTrigger,
          openTrigger = _ref$openTrigger === void 0 ? 'data-micromodal-trigger' : _ref$openTrigger,
          _ref$closeTrigger = _ref.closeTrigger,
          closeTrigger = _ref$closeTrigger === void 0 ? 'data-micromodal-close' : _ref$closeTrigger,
          _ref$openClass = _ref.openClass,
          openClass = _ref$openClass === void 0 ? 'is-open' : _ref$openClass,
          _ref$disableScroll = _ref.disableScroll,
          disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll,
          _ref$disableFocus = _ref.disableFocus,
          disableFocus = _ref$disableFocus === void 0 ? false : _ref$disableFocus,
          _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
          awaitCloseAnimation = _ref$awaitCloseAnimat === void 0 ? false : _ref$awaitCloseAnimat,
          _ref$awaitOpenAnimati = _ref.awaitOpenAnimation,
          awaitOpenAnimation = _ref$awaitOpenAnimati === void 0 ? false : _ref$awaitOpenAnimati,
          _ref$debugMode = _ref.debugMode,
          debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode;

      _classCallCheck(this, Modal);

      // Save a reference of the modal
      this.modal = document.getElementById(targetModal); // Save a reference to the passed config

      this.config = {
        debugMode: debugMode,
        disableScroll: disableScroll,
        openTrigger: openTrigger,
        closeTrigger: closeTrigger,
        openClass: openClass,
        onShow: onShow,
        onClose: onClose,
        awaitCloseAnimation: awaitCloseAnimation,
        awaitOpenAnimation: awaitOpenAnimation,
        disableFocus: disableFocus
      }; // Register click events only if pre binding eventListeners

      if (triggers.length > 0) this.registerTriggers.apply(this, _toConsumableArray(triggers)); // pre bind functions for event listeners

      this.onClick = this.onClick.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }
    /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */


    _createClass(Modal, [{
      key: "registerTriggers",
      value: function registerTriggers() {
        var _this = this;

        for (var _len = arguments.length, triggers = new Array(_len), _key = 0; _key < _len; _key++) {
          triggers[_key] = arguments[_key];
        }

        triggers.filter(Boolean).forEach(function (trigger) {
          trigger.addEventListener('click', function (event) {
            return _this.showModal(event);
          });
        });
      }
    }, {
      key: "showModal",
      value: function showModal() {
        var _this2 = this;

        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.activeElement = document.activeElement;
        this.modal.setAttribute('aria-hidden', 'false');
        this.modal.classList.add(this.config.openClass);
        this.scrollBehaviour('disable');
        this.addEventListeners();

        if (this.config.awaitOpenAnimation) {
          var handler = function handler() {
            _this2.modal.removeEventListener('animationend', handler, false);

            _this2.setFocusToFirstNode();
          };

          this.modal.addEventListener('animationend', handler, false);
        } else {
          this.setFocusToFirstNode();
        }

        this.config.onShow(this.modal, this.activeElement, event);
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var modal = this.modal;
        this.modal.setAttribute('aria-hidden', 'true');
        this.removeEventListeners();
        this.scrollBehaviour('enable');

        if (this.activeElement && this.activeElement.focus) {
          this.activeElement.focus();
        }

        this.config.onClose(this.modal, this.activeElement, event);

        if (this.config.awaitCloseAnimation) {
          var openClass = this.config.openClass; // <- old school ftw

          this.modal.addEventListener('animationend', function handler() {
            modal.classList.remove(openClass);
            modal.removeEventListener('animationend', handler, false);
          }, false);
        } else {
          modal.classList.remove(this.config.openClass);
        }
      }
    }, {
      key: "closeModalById",
      value: function closeModalById(targetModal) {
        this.modal = document.getElementById(targetModal);
        if (this.modal) this.closeModal();
      }
    }, {
      key: "scrollBehaviour",
      value: function scrollBehaviour(toggle) {
        if (!this.config.disableScroll) return;
        var body = document.querySelector('body');

        switch (toggle) {
          case 'enable':
            Object.assign(body.style, {
              overflow: ''
            });
            break;

          case 'disable':
            Object.assign(body.style, {
              overflow: 'hidden'
            });
            break;
        }
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        this.modal.addEventListener('touchstart', this.onClick);
        this.modal.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.modal.removeEventListener('touchstart', this.onClick);
        this.modal.removeEventListener('click', this.onClick);
        document.removeEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (event.target.hasAttribute(this.config.closeTrigger)) {
          this.closeModal(event);
        }
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(event) {
        if (event.keyCode === 27) this.closeModal(event); // esc

        if (event.keyCode === 9) this.retainFocus(event); // tab
      }
    }, {
      key: "getFocusableNodes",
      value: function getFocusableNodes() {
        var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
        return Array.apply(void 0, _toConsumableArray(nodes));
      }
      /**
       * Tries to set focus on a node which is not a close trigger
       * if no other nodes exist then focuses on first close trigger
       */

    }, {
      key: "setFocusToFirstNode",
      value: function setFocusToFirstNode() {
        var _this3 = this;

        if (this.config.disableFocus) return;
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return; // remove nodes on whose click, the modal closes
        // could not think of a better name :(

        var nodesWhichAreNotCloseTargets = focusableNodes.filter(function (node) {
          return !node.hasAttribute(_this3.config.closeTrigger);
        });
        if (nodesWhichAreNotCloseTargets.length > 0) nodesWhichAreNotCloseTargets[0].focus();
        if (nodesWhichAreNotCloseTargets.length === 0) focusableNodes[0].focus();
      }
    }, {
      key: "retainFocus",
      value: function retainFocus(event) {
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return;
        /**
         * Filters nodes which are hidden to prevent
         * focus leak outside modal
         */

        focusableNodes = focusableNodes.filter(function (node) {
          return node.offsetParent !== null;
        }); // if disableFocus is true

        if (!this.modal.contains(document.activeElement)) {
          focusableNodes[0].focus();
        } else {
          var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

          if (event.shiftKey && focusedItemIndex === 0) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
          }

          if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
            focusableNodes[0].focus();
            event.preventDefault();
          }
        }
      }
    }]);

    return Modal;
  }();
  /**
   * Modal prototype ends.
   * Here on code is responsible for detecting and
   * auto binding event handlers on modal triggers
   */
  // Keep a reference to the opened modal


  var activeModal = null;
  /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */

  var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
    var triggerMap = [];
    triggers.forEach(function (trigger) {
      var targetModal = trigger.attributes[triggerAttr].value;
      if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
      triggerMap[targetModal].push(trigger);
    });
    return triggerMap;
  };
  /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */


  var validateModalPresence = function validateModalPresence(id) {
    if (!document.getElementById(id)) {
      console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(id, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<div class=\"modal\" id=\"".concat(id, "\"></div>"));
      return false;
    }
  };
  /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */


  var validateTriggerPresence = function validateTriggerPresence(triggers) {
    if (triggers.length <= 0) {
      console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<a href=\"#\" data-micromodal-trigger=\"my-modal\"></a>");
      return false;
    }
  };
  /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and their triggers
   * @return {boolean}
   */


  var validateArgs = function validateArgs(triggers, triggerMap) {
    validateTriggerPresence(triggers);
    if (!triggerMap) return true;

    for (var id in triggerMap) {
      validateModalPresence(id);
    }

    return true;
  };
  /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */


  var init = function init(config) {
    // Create an config object with default openTrigger
    var options = Object.assign({}, {
      openTrigger: 'data-micromodal-trigger'
    }, config); // Collects all the nodes with the trigger

    var triggers = _toConsumableArray(document.querySelectorAll("[".concat(options.openTrigger, "]"))); // Makes a mappings of modals with their trigger nodes


    var triggerMap = generateTriggerMap(triggers, options.openTrigger); // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return; // For every target modal creates a new instance

    for (var key in triggerMap) {
      var value = triggerMap[key];
      options.targetModal = key;
      options.triggers = _toConsumableArray(value);
      activeModal = new Modal(options); // eslint-disable-line no-new
    }
  };
  /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */


  var show = function show(targetModal, config) {
    var options = config || {};
    options.targetModal = targetModal; // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateModalPresence(targetModal) === false) return; // clear events in case previous modal wasn't close

    if (activeModal) activeModal.removeEventListeners(); // stores reference to active modal

    activeModal = new Modal(options); // eslint-disable-line no-new

    activeModal.showModal();
  };
  /**
   * Closes the active modal
   * @param  {string} targetModal [The id of the modal to close]
   * @return {void}
   */


  var close = function close(targetModal) {
    targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
  };

  return {
    init: init,
    show: show,
    close: close
  };
}();
window.MicroModal = MicroModal;

/* harmony default export */ __webpack_exports__["default"] = (MicroModal);


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

  if (sourceMap && typeof btoa !== 'undefined') {
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

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: loadUsers, loadIngredients, loadRecipes, alterIngredients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUsers", function() { return loadUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadIngredients", function() { return loadIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRecipes", function() { return loadRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alterIngredients", function() { return alterIngredients; });
const apiEndpoint = 'https://whats-cookin-api-data.herokuapp.com';

function loadUsers() {
  return fetch(`${apiEndpoint}/api/v1/users`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error))
}

function loadIngredients() {
  return fetch(`${apiEndpoint}/api/v1/ingredients`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error))
}

function loadRecipes() {
  return fetch(`${apiEndpoint}/api/v1/recipes`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}

function alterIngredients(userId, ingredientsId, ingredientsModification) {
  return fetch(`${apiEndpoint}/api/v1/users`, {
    method: 'POST',
    body: JSON.stringify({
      "userID": userId,
      "ingredientID": ingredientsId,
      "ingredientModification": ingredientsModification
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.log(error))
}




/***/ }),

/***/ "./src/classes/Ingredient.js":
/*!***********************************!*\
  !*** ./src/classes/Ingredient.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.amount = ingredient.quantity.amount;
    this.unit = ingredient.quantity.unit;
    this.name = '';
    this.estimatedCostInCents = 0;
  }

  findIngredientDetails(ingredientsData) {
    const ingredient = ingredientsData.find(ingredient => ingredient.id === this.id);
    this.name = ingredient.name
    this.estimatedCostInCents = ingredient.estimatedCostInCents;
  }

  calculateCost() {
    return this.estimatedCostInCents * this.amount / 100;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Ingredient);


/***/ }),

/***/ "./src/classes/Recipe.js":
/*!*******************************!*\
  !*** ./src/classes/Recipe.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ingredient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ingredient */ "./src/classes/Ingredient.js");


class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }

  getIngredientsInformation(ingredientsData) {
    this.ingredients = this.ingredients.map(ingredient => {
      return new _Ingredient__WEBPACK_IMPORTED_MODULE_0__["default"](ingredient);
    });

    this.ingredients.forEach(ingredient => ingredient.findIngredientDetails(ingredientsData));
  }

  returnIngredientsList() {
    return this.ingredients.map(ingredient => `${ingredient.amount.toFixed(2).replace(/\.00$/, '')} ${ingredient.unit} ${ingredient.name}`)
  }

  returnCostInDollars() {
    const cost = this.ingredients.reduce((acc, ingredient) => {
      acc += ingredient.calculateCost();
      return acc;
    }, 0)
    return cost.toFixed(2);
  }

  returnInstructions() {
    return this.instructions.map(instruction => `${instruction.number}. ${instruction.instruction}`)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/classes/RecipeRepository.js":
/*!*****************************************!*\
  !*** ./src/classes/RecipeRepository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Recipe */ "./src/classes/Recipe.js");


class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData;
  }

  getRecipesInformation(ingredientsData) {
    this.recipes = this.recipes.map(recipe => new _Recipe__WEBPACK_IMPORTED_MODULE_0__["default"](recipe));
    this.recipes.forEach((recipe) => {
      recipe.getIngredientsInformation(ingredientsData);
    });
  }

  findRecipesByTag(tags, recipesToSearch) {
    const recipes = recipesToSearch || this.recipes;
    const foundRecipes = recipes.reduce((accumulator, recipe) => {
      tags.forEach((tag) => {
        if (recipe.tags.includes(tag) && !accumulator.includes(recipe)) {
          accumulator.push(recipe);
        }
      });
      return accumulator;
    }, []);
    return foundRecipes;
  }

  findRecipesByName(searchTerm, recipesToSearch) {
    const recipes = recipesToSearch || this.recipes;
    const foundRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    return foundRecipes;
  }

  findRecipesByIngredient(ingredientName, recipesToSearch) {
    const recipes = recipesToSearch || this.recipes;
    const filteredRecipe = recipes.filter((recipe) => {
      const hasMatchingIngredient = recipe.ingredients.find((ingredient) => {
        return ingredient.name.includes(ingredientName);
      })
      if (hasMatchingIngredient) {
        return true;
      }
      return false;
    })
    return filteredRecipe;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RecipeRepository);


/***/ }),

/***/ "./src/classes/User.js":
/*!*****************************!*\
  !*** ./src/classes/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ingredient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ingredient */ "./src/classes/Ingredient.js");


class User {
  constructor(usersData, recipeRepository) {
    this.name = usersData.name;
    this.id = usersData.id;
    this.pantry = usersData.pantry;
    this.favoriteRecipes = [];
    this.weeklyFavorites = [];
    this.filteredByName = [];
    this.repo = recipeRepository;
  }

  addFavorite(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  addWeeklyRecipe(recipe) {
    const weeklyFav = this.weeklyFavorites;
    weeklyFav.push(recipe);
  }

  removeFavorite(recipe) {
    this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(recipe), 1);
  }

  removeWeeklyRecipe(recipe) {
    return this.weeklyFavorites.splice(
      this.weeklyFavorites.indexOf(recipe), 1);
  }

  checkUserPantry(recipe) {
    let match = 0;
    recipe.ingredients.forEach(recipeIngredient => {
      this.pantry.forEach(pantryIngredient => {
        if (recipeIngredient.id === pantryIngredient.ingredient && pantryIngredient.amount >= recipeIngredient.amount) {
          match += 1;
        }
      })
    })
    return match === recipe.ingredients.length;
  }

  returnNeededIngredients(recipe) {
    const result = recipe.ingredients.reduce((obj, recipeIngredient) => {
      let match = this.pantry.find(pantryIngredient => recipeIngredient.id === pantryIngredient.ingredient)

      if (match) {
        obj.have.push(recipeIngredient)
      } else {
        obj.need.push(recipeIngredient)
      }
      return obj
    },
    {
      have: [],
      need: []
    })

    const needByAmount = result.have.filter(resultIngredient => {
      let foundMatches = this.pantry.find(ingredient => ingredient.ingredient === resultIngredient.id)
      return foundMatches.amount < resultIngredient.amount

    }).map(recipeIngredient => {
      const foundMatches = this.pantry.find(pantryIngredient => pantryIngredient.ingredient === recipeIngredient.id)

      return {
        id: recipeIngredient.id,
        name: recipeIngredient.name,
        amount: recipeIngredient.amount - foundMatches.amount
      }
    })

    const totalNeed = result.need.concat(needByAmount)
    return totalNeed
  }

  filterFavoriteRecipesByTags(tags) {
    const foundRecipes = this.repo.findRecipesByTag(tags, this.favoriteRecipes);
    return foundRecipes;
  }

  findFavoriteRecipesByName(searchTerm) {
    const foundRecipes = this.repo.findRecipesByName(searchTerm, this.favoriteRecipes);
    return foundRecipes;
  }

  findFavoriteRecipesByIngredient(ingredientName) {
    const filteredRecipe = this.repo.findRecipesByIngredient(ingredientName, this.favoriteRecipes);
    return filteredRecipe;
  }

  returnPantryIngredients() {
    let matchingIngredient;

    return this.pantry.reduce((acc, pantryIngredient) => {
      this.repo.recipes.find(recipe => {
        matchingIngredient =  recipe.ingredients.find(ingredient => pantryIngredient.ingredient === ingredient.id)

        return matchingIngredient;
      })

      acc.push(`${pantryIngredient.amount} ${matchingIngredient.name}`)
      return acc
    }, [])
  }

  addIngredientAmount(ingredients) {
    ingredients.forEach(ingredient => {
      const match = this.pantry.find(pantryIngredient => pantryIngredient.ingredient === ingredient.id)

      if (match) {
        match.amount += ingredient.amount;
      } else {
        this.addIngredientToPantry(ingredient);
      }
    })
  }

  subtractIngredientAmount(ingredients) {
    ingredients.forEach(ingredient => {
      const match = this.pantry.find(pantryIngredient => pantryIngredient.ingredient === ingredient.id)

      match.amount -= ingredient.amount;
      !match.amount && this.removeIngredient(match);
    })
  }

  removeIngredient(ingredient) {
    const ingIndex = this.pantry.indexOf(ingredient);
    this.pantry.splice(ingIndex, 1);
  }

  addIngredientToPantry(ingredient) {
    this.pantry.push({ ingredient: ingredient.id, amount: ingredient.amount });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const homeViewImage = document.getElementById('homeViewImage');
const homeViewButton = document.getElementById('homeViewButton');
const homeViewSection = document.getElementById('homeViewSection');
const singleRecipeView = document.getElementById('singleRecipeView');

const allRecipesButton = document.getElementById('allRecipesButton');
const allRecipesSection = document.getElementById('allRecipesSection');
const allRecipesContainer = document.getElementById('allRecipesContainer');

const noFavoritesMessage = document.getElementById('noFavoritesMessage');
const favoritesViewButton = document.getElementById('favoritesViewButton');
const addToFavoritesButton = document.getElementById('addToFavoritesButton');
const favoriteRecipesSection = document.getElementById('favoriteRecipesSection');
const favoriteRecipesContainer = document.getElementById('favoriteRecipesContainer');
const removeFromFavoritesButton = document.getElementById('removeFromFavoritesButton');
const favoriteTaggedRecipesContainer = document.getElementById('favoriteTaggedRecipesContainer');

const mainContentContainer = document.getElementById('mainContentContainer');
const searchIngredientGlide = document.getElementById('searchIngredientGlide');
const taggedRecipesContainer = document.getElementById('taggedRecipesContainer');
const favoritesTagsGlide = searchIngredientGlide.cloneNode(true);

const weeklyRecipesButton = document.querySelector('.nav-tabs__this-week');
const weeklyRecipesSection = document.getElementById('weeklyRecipesSection');

const recipeName = document.getElementById('recipeName');
const recipeCost = document.getElementById('recipeCost');
const recipeImage = document.getElementById('recipeImage');
const recipeIngredients = document.getElementById('recipeIngredients');
const recipeInstructions = document.getElementById('recipeInstructions');

const noResults = document.getElementById('noResults');
const searchBar = document.getElementById('searchBarInput');
const searchResults = document.getElementById('searchedRecipesContainer');
const displayedSearchResults = document.getElementById('searchedRecipes');

const weeklyRecipes = document.getElementById('weeklyRecipes');
const addToWeekButton = document.getElementById('addToWeekButton');
const noWeeklyRecipes = document.getElementById('noWeeklyRecipes');
const removeFromWeekButton = document.getElementById('removeFromWeekButton');
const addIngredientsButton = document.getElementById('addIngredientsButton');
const confirmCookingButton = document.getElementById('confirmCookingButton');

const cookRecipeButton = document.getElementById('cookRecipeButton');
const allSections = document.querySelectorAll('section > section');
const pantryIngredientsContainer = document.getElementById('pantryIngredients');
const ingredientsNeededContainer = document.getElementById('ingredientsNeeded');

let domUpdates = {
  show(element) {
    element.classList.remove('hidden');
  },

  hide(element) {
    element.classList.add('hidden');
  },

  addStyling(element, className) {
    element.classList.add(className);
  },

  removeStyling(element, className) {
    element.classList.remove(className);
  },

  renderRecipeCards(container, recipes) {
    container.innerHTML = '';

    recipes.forEach(recipe => {
      container.innerHTML +=
        `<article tabindex="0" role="button" class="recipes-container__recipe-card" id=${recipe.id}>
            <img src="${recipe.image}" class="recipe-card__image" alt=${recipe.name}>
            <p class="recipe-card__name">${recipe.name}</p>
        </article>`;
    });
  },

  renderRecipeInstructions(instructions) {
    recipeInstructions.innerHTML = instructions.reduce((acc, instruction) => {
      acc += `<li class="ingredient-list__item">${instruction}</li>`;
      return acc;
    }, '');
  },

  renderRecipeIngredients(ingredients) {
    recipeIngredients.innerHTML = ingredients.reduce((acc, ingredient) => {
      acc += `<li class="ingredient-list__item">● ${ingredient}</li>`;
      return acc;
    }, '');
  },

  individualRecipeInterpolation(recipe) {
    recipeImage.alt = recipe.name;
    recipeImage.src = recipe.image;
    recipeName.innerText = recipe.name;
    recipeCost.innerText = recipe.returnCostInDollars();
    addToFavoritesButton.name = recipe.id;
    removeFromFavoritesButton.name = recipe.id;
  },

  removeAllRecipeCards() {
    const recipeCards = document.querySelectorAll('.recipes-container__recipe-card');

    recipeCards.forEach((recipeCard) => {
      recipeCard.remove();
    })
  },

  addTagsGlide() {
    if (!favoriteRecipesSection.contains(favoritesTagsGlide)) {
      favoritesTagsGlide.id = 'favoriteSearchGlide';
      favoriteRecipesSection.appendChild(favoritesTagsGlide);
    }
  },

  removeTagSelection() {
    const selectedTags = document.querySelectorAll('.tag-selected')
    selectedTags.forEach(tag => tag.classList.toggle('tag-selected'));
  },

  renderPantryIngredients(pantryIngredients) {
    pantryIngredientsContainer.innerHTML = pantryIngredients.reduce((acc, pantryIngredients) => {
      acc += `<li class="ingredient-list__item">● ${pantryIngredients}</li>`;
      return acc;
    }, '');
  },

  renderNeededIngredients(neededIngredients) {
    ingredientsNeededContainer.innerHTML = neededIngredients.reduce((acc, neededIngredient) => {
      acc += `<li class="ingredient-list__item">● ${neededIngredient.amount} ${neededIngredient.name}</li>`;
      return acc;
    }, '');
  },

  homeViewImage,
  homeViewButton,
  homeViewSection,
  singleRecipeView,
  allRecipesButton,
  allRecipesSection,
  allRecipesContainer,
  noFavoritesMessage,
  favoritesViewButton,
  addToFavoritesButton,
  favoriteRecipesSection,
  favoriteRecipesContainer,
  removeFromFavoritesButton,
  favoriteTaggedRecipesContainer,
  weeklyRecipesButton,
  weeklyRecipesSection,
  recipeName,
  recipeCost,
  recipeImage,
  recipeIngredients,
  recipeInstructions,
  mainContentContainer,
  searchIngredientGlide,
  taggedRecipesContainer,
  favoritesTagsGlide,
  noResults,
  searchBar,
  searchResults,
  displayedSearchResults,
  weeklyRecipes,
  addToWeekButton,
  noWeeklyRecipes,
  removeFromWeekButton,
  cookRecipeButton,
  allSections,
  addIngredientsButton,
  confirmCookingButton,
  ingredientsNeeded
};

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/RecipeRepository */ "./src/classes/RecipeRepository.js");
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/User */ "./src/classes/User.js");
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");







let recipeRepository;
let tags = [];
let user;

window.addEventListener('load', getUser);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].searchBar.addEventListener('keyup', prepSearch);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].searchIngredientGlide.addEventListener('click', selectTag);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].homeViewButton.addEventListener('click', displayHomeView);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesButton.addEventListener('click', displayAllRecipes);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToWeekButton.addEventListener('click', addToWeeklyRecipes);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyRecipesButton.addEventListener('click', displayWeeklyRecipes);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromWeekButton.addEventListener('click', removeFromWeeklyRecipes);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoritesViewButton.addEventListener('click', displayFavoritesView);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToFavoritesButton.addEventListener('click', addToFavorites);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromFavoritesButton.addEventListener('click', removeFromFavorites);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesSection.addEventListener('click', selectTag);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].cookRecipeButton.addEventListener('click', displayModal);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addIngredientsButton.addEventListener('click', addIngredients);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].confirmCookingButton.addEventListener('click', useIngredients);
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allSections.forEach(section => section.addEventListener('click', displayRecipe))
_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allSections.forEach(section => {
  section.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        displayRecipe(event)
    }
  });
})

function getRandomUser(array) {
  const index =  Math.floor(Math.random() * array.length);
  const userData = array[index];
  return userData;
}

function getUser() {
  Object(_apiCalls__WEBPACK_IMPORTED_MODULE_2__["loadUsers"])().then(usersData => {
    getRecipes(usersData);
  });
}

function getRecipes(usersData) {
  Object(_apiCalls__WEBPACK_IMPORTED_MODULE_2__["loadRecipes"])().then(recipeData => {
    recipeRepository = new _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_3__["default"](recipeData);
    getIngredients(usersData);
  });
}

function getIngredients(usersData) {
  Object(_apiCalls__WEBPACK_IMPORTED_MODULE_2__["loadIngredients"])().then(ingredientsData => {
    recipeRepository.getRecipesInformation(ingredientsData);

    const userData = getRandomUser(usersData);
    user = new _classes_User__WEBPACK_IMPORTED_MODULE_4__["default"](userData, recipeRepository);
  });
}

function addToFavorites() {
  const favoriteRecipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToFavoritesButton.name));
  user.addFavorite(favoriteRecipe);

  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToFavoritesButton);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromFavoritesButton);
}

function removeFromFavorites() {
  const favoriteRecipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromFavoritesButton.name));
  user.removeFavorite(favoriteRecipe);

  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromFavoritesButton);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToFavoritesButton);
}

function displayFavoritesView() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].searchResults);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].homeViewSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyRecipesSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesSection);
  clearTags();
  checkFavoriteRecipes();
}

function checkFavoriteRecipes() {
  if (user.favoriteRecipes.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].noFavoritesMessage);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteTaggedRecipesContainer);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesContainer);

    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addTagsGlide();
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoritesTagsGlide, 'featured__search-ingredient-glide');
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderRecipeCards(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesContainer, user.favoriteRecipes);
  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesContainer);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].noFavoritesMessage);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesSection.removeChild(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoritesTagsGlide);
  }
}

function prepSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  checkSearchField(searchTerm);
}

function checkSearchField(searchTerm) {
  if (!_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].searchBar.value && !_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayedSearchResults.innerHTML) {
    return;

  } else if (_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].searchBar.value) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].noResults);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].homeViewSection);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyRecipesSection);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].taggedRecipesContainer);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].searchResults);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayedSearchResults);

    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView, 'single-recipe-view-alt');
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection, 'all-recipes-view__recipes-container-alt');
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView, 'single-recipe-view');
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection, 'all-recipes-view__recipes-container');

    searchingNow(searchTerm);

  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayedSearchResults);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].noResults);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].searchResults);
  }
}

function searchingNow(searchTerm) {
  const filteredRecipes = recipeRepository.findRecipesByName(searchTerm);
  const foundRecipesByIngredient = recipeRepository.findRecipesByIngredient(searchTerm);

  foundRecipesByIngredient.forEach(recipe => {
    if (!filteredRecipes.includes(recipe)) {
      filteredRecipes.push(recipe);
    }
  });

  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderRecipeCards(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayedSearchResults, filteredRecipes);
}

function displayHomeView() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].noResults);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].searchResults);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyRecipesSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayedSearchResults);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].homeViewSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].taggedRecipesContainer);
  clearTags();
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView, 'single-recipe-view');
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection, 'all-recipes-view__recipes-container');
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView, 'single-recipe-view-alt');
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection, 'all-recipes-view__recipes-container-alt');
}

function displayAllRecipes() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].searchResults);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].homeViewSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyRecipesSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection);

  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView, 'single-recipe-view');
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection, 'all-recipes-view__recipes-container');
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView, 'single-recipe-view-alt');
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeStyling(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection, 'all-recipes-view__recipes-container-alt');

  sortRecipesByName();
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderRecipeCards(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesContainer, recipeRepository.recipes);
}

function displayRecipe(event) {
  const card = event.target.closest('article');

  if (card.classList.contains('recipes-container__recipe-card')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].homeViewSection);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyRecipesSection);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesSection);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView);
    renderIndividualRecipe(card.id);
  }
}

function addToWeeklyRecipes() {
  const recipe = findRecipeTitle();
  user.addWeeklyRecipe(recipe);

  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToWeekButton);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromWeekButton);
}

function removeFromWeeklyRecipes() {
  const recipe = findRecipeTitle();
  user.removeWeeklyRecipe(recipe);

  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromWeekButton);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToWeekButton);
}

function findRecipeTitle() {
  const recipeTitle = document.querySelector('.recipe-title').innerText;
  const recipes = recipeRepository.findRecipesByName(recipeTitle.toLowerCase());
  return recipes[0];
}

function displayWeeklyRecipes() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].homeViewSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesSection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyRecipesSection);

  checkWeeklyFavorites();
}

function checkWeeklyFavorites() {
  if (!user.weeklyFavorites.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyRecipes);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].noWeeklyRecipes);

  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].noWeeklyRecipes);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyRecipes);

    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderRecipeCards(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyRecipes, user.weeklyFavorites);
  }
}

function selectTag(event) {
  const tagElement = event.target.closest('button');
  const tag = tagElement.value;

  toggleTag(tag, tagElement);
  if (tagElement.parentNode.id === 'favoriteSearchGlide') {
    updateFavorites();
  } else {
    updateMain();
  }
}

function updateFavorites() {
  if (tags.length) {
    const filteredRecipes = user.filterFavoriteRecipesByTags(tags);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderRecipeCards(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteTaggedRecipesContainer, filteredRecipes);

    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesContainer);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteTaggedRecipesContainer);

  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeAllRecipeCards();

    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteTaggedRecipesContainer);
    checkFavoriteRecipes();
  }
}

function updateMain() {
  if (tags.length) {
    const filteredRecipes = recipeRepository.findRecipesByTag(tags);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderRecipeCards(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].taggedRecipesContainer, filteredRecipes);

    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].noResults);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].searchResults);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].singleRecipeView);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].allRecipesSection);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyRecipesSection);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteRecipesSection);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayedSearchResults);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].homeViewSection);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].taggedRecipesContainer);

  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeAllRecipeCards();

    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].taggedRecipesContainer);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].homeViewImage)
  }
}

function toggleTag(tag, tagElement) {
  if (!tags.includes(tag)) {
    addTag(tag);

  } else {
    removeTag(tag);
  }
  tagElement.classList.toggle('tag-selected');
}

function addTag(tag) {
  tags.push(tag);
}

function removeTag(tag) {
  tags = tags.filter((element) => {
    if (element === tag) {
      return false;
    }
    return true;
  })
}

function renderIndividualRecipe(recipeId) {
  const recipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(recipeId));

  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].individualRecipeInterpolation(recipe);

  createIngredientList(recipe);
  createInstructionList(recipe);
  checkIfRecipeInWeekly(recipe);
  checkIfRecipeInFavorites(recipe);
  const pantryIngredients = user.returnPantryIngredients();
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderPantryIngredients(pantryIngredients);
}

function checkIfRecipeInWeekly(recipe) {
  const matchingRecipe = user.weeklyFavorites.find((weeklyRecipe) => weeklyRecipe.id === recipe.id);
  if (matchingRecipe) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToWeekButton);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromWeekButton);

  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromWeekButton);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToWeekButton);
  }
}

function checkIfRecipeInFavorites(recipe) {
  if (user.favoriteRecipes.includes(recipe)) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToFavoritesButton);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromFavoritesButton);

  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hide(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromFavoritesButton);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].show(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToFavoritesButton);
  }
}

function createIngredientList(recipe) {
  const ingredientList = recipe.returnIngredientsList();
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderRecipeIngredients(ingredientList);
}

function createInstructionList(recipe) {
  const instructionsList = recipe.returnInstructions();
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderRecipeInstructions(instructionsList);
}

function sortRecipesByName() {
  recipeRepository.recipes.sort((a, b) => a.name - b.name);
}

function clearTags() {
  tags = [];
  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeTagSelection()
}

function displayModal() {
  const currentRecipe = findRecipeTitle();
  if (user.checkUserPantry(currentRecipe)) {
    micromodal__WEBPACK_IMPORTED_MODULE_5__["default"].show("modal-2")
  } else {
    const neededIngredients = user.returnNeededIngredients(currentRecipe);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderNeededIngredients(neededIngredients);
    micromodal__WEBPACK_IMPORTED_MODULE_5__["default"].show("modal-1")
  }
}

function updateIngredients(ingredients) {
  return Promise.all(
    ingredients.map((ingredient) => {
      Object(_apiCalls__WEBPACK_IMPORTED_MODULE_2__["alterIngredients"])(user.id, ingredient.id, ingredient.amount)
    })
  )
}

function addIngredients() {
  const currentRecipe = findRecipeTitle();
  const neededIngredients = user.returnNeededIngredients(currentRecipe);

  updateIngredients(neededIngredients)
  .then(response => {
    user.addIngredientAmount(neededIngredients);
    const pantryIngredients = user.returnPantryIngredients();
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderPantryIngredients(pantryIngredients);
    micromodal__WEBPACK_IMPORTED_MODULE_5__["default"].close("modal-1");
    micromodal__WEBPACK_IMPORTED_MODULE_5__["default"].show("modal-2");
  })
}

function useIngredients() {
  const currentRecipe = findRecipeTitle();

  updateIngredients(currentRecipe.ingredients)
  .then(response => {
    user.subtractIngredientAmount(currentRecipe.ingredients);
    const pantryIngredients = user.returnPantryIngredients();
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].renderPantryIngredients(pantryIngredients);
    micromodal__WEBPACK_IMPORTED_MODULE_5__["default"].close("modal-2");
  })
}


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_4_2_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--4-2!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_4_2_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_4_2_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pY3JvbW9kYWwvZGlzdC9taWNyb21vZGFsLmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvSW5ncmVkaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9SZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvUmVjaXBlUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz81YzE3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qs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LE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsYUFBYSxlQUFlLE9BQU8sTUFBTSxXQUFXLFlBQVksT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsY0FBYyxjQUFjLFlBQVksVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsWUFBWSxPQUFPLFFBQVEsYUFBYSxRQUFRLE1BQU0sVUFBVSxXQUFXLGFBQWEsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sWUFBWSxVQUFVLFdBQVcsV0FBVyxjQUFjLFlBQVksV0FBVyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsWUFBWSxjQUFjLFlBQVksV0FBVyxNQUFNLE9BQU8sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxZQUFZLE1BQU0sV0FBVyxXQUFXLGNBQWMsYUFBYSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLGFBQWEsWUFBWSxZQUFZLGVBQWUsT0FBTyxPQUFPLFlBQVksWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sUUFBUSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxhQUFh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RUFBRSxtREFBVSxlQUFlLG1EQUFVO0FBQ3JDOztBQUVBO0FBQ0EsRUFBRSxtREFBVSxNQUFNLG1EQUFVO0FBQzVCLEVBQUUsbURBQVUsTUFBTSxtREFBVTtBQUM1QixFQUFFLG1EQUFVLE1BQU0sbURBQVU7QUFDNUIsRUFBRSxtREFBVSxNQUFNLG1EQUFVO0FBQzVCLEVBQUUsbURBQVUsTUFBTSxtREFBVTtBQUM1QixFQUFFLG1EQUFVLE1BQU0sbURBQVU7O0FBRTVCLEVBQUUsbURBQVUsWUFBWSxtREFBVTtBQUNsQyxFQUFFLG1EQUFVLFlBQVksbURBQVU7QUFDbEMsRUFBRSxtREFBVSxlQUFlLG1EQUFVO0FBQ3JDLEVBQUUsbURBQVUsZUFBZSxtREFBVTs7QUFFckM7QUFDQSxFQUFFLG1EQUFVLG1CQUFtQixtREFBVTtBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBVSxNQUFNLG1EQUFVO0FBQzlCLElBQUksbURBQVUsTUFBTSxtREFBVTtBQUM5QixJQUFJLG1EQUFVLE1BQU0sbURBQVU7QUFDOUIsSUFBSSxtREFBVSxNQUFNLG1EQUFVO0FBQzlCLElBQUksbURBQVUsTUFBTSxtREFBVTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsbURBQVUsTUFBTSxtREFBVTtBQUM1QixFQUFFLG1EQUFVLE1BQU0sbURBQVU7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsbURBQVUsTUFBTSxtREFBVTtBQUM1QixFQUFFLG1EQUFVLE1BQU0sbURBQVU7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsbURBQVUsTUFBTSxtREFBVTtBQUM1QixFQUFFLG1EQUFVLE1BQU0sbURBQVU7QUFDNUIsRUFBRSxtREFBVSxNQUFNLG1EQUFVO0FBQzVCLEVBQUUsbURBQVUsTUFBTSxtREFBVTtBQUM1QixFQUFFLG1EQUFVLE1BQU0sbURBQVU7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksbURBQVUsTUFBTSxtREFBVTtBQUM5QixJQUFJLG1EQUFVLE1BQU0sbURBQVU7O0FBRTlCLEdBQUc7QUFDSCxJQUFJLG1EQUFVLE1BQU0sbURBQVU7QUFDOUIsSUFBSSxtREFBVSxNQUFNLG1EQUFVOztBQUU5QixJQUFJLG1EQUFVLG1CQUFtQixtREFBVTtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVUsbUJBQW1CLG1EQUFVOztBQUUzQyxJQUFJLG1EQUFVLE1BQU0sbURBQVU7QUFDOUIsSUFBSSxtREFBVSxNQUFNLG1EQUFVOztBQUU5QixHQUFHO0FBQ0gsSUFBSSxtREFBVTs7QUFFZCxJQUFJLG1EQUFVLE1BQU0sbURBQVU7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVUsbUJBQW1CLG1EQUFVOztBQUUzQyxJQUFJLG1EQUFVLE1BQU0sbURBQVU7QUFDOUIsSUFBSSxtREFBVSxNQUFNLG1EQUFVO0FBQzlCLElBQUksbURBQVUsTUFBTSxtREFBVTtBQUM5QixJQUFJLG1EQUFVLE1BQU0sbURBQVU7QUFDOUIsSUFBSSxtREFBVSxNQUFNLG1EQUFVO0FBQzlCLElBQUksbURBQVUsTUFBTSxtREFBVTtBQUM5QixJQUFJLG1EQUFVLE1BQU0sbURBQVU7QUFDOUIsSUFBSSxtREFBVSxNQUFNLG1EQUFVO0FBQzlCLElBQUksbURBQVUsTUFBTSxtREFBVTs7QUFFOUIsR0FBRztBQUNILElBQUksbURBQVU7O0FBRWQsSUFBSSxtREFBVSxNQUFNLG1EQUFVO0FBQzlCLElBQUksbURBQVUsTUFBTSxtREFBVTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBLEVBQUUsbURBQVU7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFVLE1BQU0sbURBQVU7QUFDOUIsSUFBSSxtREFBVSxNQUFNLG1EQUFVOztBQUU5QixHQUFHO0FBQ0gsSUFBSSxtREFBVSxNQUFNLG1EQUFVO0FBQzlCLElBQUksbURBQVUsTUFBTSxtREFBVTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1EQUFVLE1BQU0sbURBQVU7QUFDOUIsSUFBSSxtREFBVSxNQUFNLG1EQUFVOztBQUU5QixHQUFHO0FBQ0gsSUFBSSxtREFBVSxNQUFNLG1EQUFVO0FBQzlCLElBQUksbURBQVUsTUFBTSxtREFBVTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG1EQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLEVBQUUsbURBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsbURBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFVO0FBQ2QsR0FBRztBQUNIO0FBQ0EsSUFBSSxtREFBVTtBQUNkLElBQUksa0RBQVU7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0VBQWdCO0FBQ3RCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZCxJQUFJLGtEQUFVO0FBQ2QsSUFBSSxrREFBVTtBQUNkLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBVTtBQUNkLElBQUksa0RBQVU7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM5WkE7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDNUYsWUFBZ0o7O0FBRWhKOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG9JQUFPOzs7O0FBSVQsbU1BQU8sYUFBYSxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qQ29sb3JzKi9cXG4vKkJveCBNb2RlbCovXFxuLypGb250cyovXFxuLypUcmFuc2l0aW9ucyovXFxuaHRtbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTA4MTgzODc1ODMtMWJhYmE1ZTYzOGFmP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMzMxJnE9ODApO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBjb2xvcjogIzAxMTkzNjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmxpLFxcbm9sLFxcbnAge1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMTE5MzY7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tYWluIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDUxcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxubWFpbiA+IHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ubmF2LWJhcl9fbmF2LXRhYnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5uYXYtYmFyX19uYXYtdGFicyA+IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5uYXYtYmFyX19uYXYtdGFicyA+IGJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI0VmNUQ2MDtcXG59XFxuXFxuLm5hdi1iYXJfX2hvbWUtc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uc2VhcmNoLWJhcl9fc2VhcmNoLWxhYmVsIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJhcl9faG9tZS1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMwMTE5MzY7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLnNlYXJjaC1iYXJfX2hvbWUtYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjRWY1RDYwO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMwMTE5MzY7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSBIT01FIFZJRVcgLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5zZWFyY2gtZ2xpZGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWdsaWRlX19idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg1QTY4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAxMTkzNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zZWFyY2gtZ2xpZGVfX2J1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5zZWFyY2gtZ2xpZGVfX3RhZy1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tb2RhbF9fYnV0dG9uOmhvdmVyLFxcbi5zZWFyY2gtZ2xpZGVfX2J1dHRvbjpob3ZlcixcXG4udGFnLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFZjVENjA7XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gIHRvcDogMTUwcHg7XFxuICBjb2xvcjogIzAxMTkzNjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogODVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNDBweDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLSBBTEwgUkVDSVBFUyBWSUVXIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi5zZWFyY2hlZC1yZWNpcGVzLXZpZXdfX3JlY2lwZXMtY29udGFpbmVyLFxcbi50YWdnZWQtcmVjaXBlcy12aWV3X19yZWNpcGVzLWNvbnRhaW5lcixcXG4uYWxsLXJlY2lwZXMtdmlldyxcXG4uYWxsLXJlY2lwZXMtdmlldy1hbHQsXFxuLndlZWtseS1yZWNpcGVzLXZpZXcsXFxuLmZhdm9yaXRlcy12aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ucmVjaXBlcy1jb250YWluZXJfX3NlYXJjaC1yZXN1bHRzLFxcbi53ZWVrbHktcmVjaXBlcy12aWV3X19yZWNpcGVzLFxcbi50YWdnZWQtcmVjaXBlcy12aWV3X19yZWNpcGVzLWNvbnRhaW5lcixcXG4uYWxsLXJlY2lwZXMtdmlld19fcmVjaXBlcy1jb250YWluZXIsXFxuLnJlY2lwZXMtY29udGFpbmVyX19uby1yZXN1bHRzLFxcbi5mYXZvcml0ZXMtdmlld19fZmF2b3JpdGVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uYWxsLXJlY2lwZXMtdmlldy1hbHQge1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxufVxcblxcbi5yZWNpcGVzLWNvbnRhaW5lcl9fbm8tcmVzdWx0cyB7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5yZWNpcGVzLWNvbnRhaW5lcl9fcmVjaXBlLWNhcmQsXFxuLnNlYXJjaC1yZXN1bHRzLWNvbnRhaW5lcl9fcmVjaXBlLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcXG59XFxuLnJlY2lwZXMtY29udGFpbmVyX19yZWNpcGUtY2FyZDpob3ZlcixcXG4uc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyX19yZWNpcGUtY2FyZDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5zZWFyY2gtZ2xpZGVfX2J1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5yZWNpcGUtY2FyZF9faW1hZ2Uge1xcbiAgaGVpZ2h0OiAxMjVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnJlY2lwZS1jYXJkX19uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW46IDE2cHggNXB4IDAgNXB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tIFNJTkdMRSBSRUNJUEUgVklFVyAtLS0tLS0tLS0tLSAqL1xcbi5zaW5nbGUtcmVjaXBlLXZpZXcsXFxuLnNpbmdsZS1yZWNpcGUtdmlldy1hbHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5zaW5nbGUtcmVjaXBlLXZpZXctYWx0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE5MHB4O1xcbn1cXG5cXG4uc2luZ2xlLXJlY2lwZS12aWV3X19yZWNpcGUtaW5mb3JtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29vay1yZWNpcGUtYnV0dG9uLFxcbi5yZWNpcGUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XFxuICBjb2xvcjogI0VmNUQ2MDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uY29vay1yZWNpcGUtYnV0dG9uOmhvdmVyLFxcbi5yZWNpcGUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFZjVENjA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnJlY2lwZS1idXR0b24ge1xcbiAgd2lkdGg6IDI3NXB4O1xcbiAgbWFyZ2luOiAxNXB4IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uc2VhcmNoLXJlc3VsdHMsXFxuLnJlY2lwZS10aXRsZSxcXG4udG9wLWJhbm5lcl9fdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnJlY2lwZS1pbWFnZSB7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLnRvdGFsLWNvc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogI0VmNUQ2MDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVjaXBlLWJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5yZWNpcGUtaW5mb3JtYXRpb25fX2NvbnRhaW5lciB7XFxuICBtYXJnaW46IDI1cHg7XFxufVxcblxcbi5zaW5nbGUtcmVjaXBlLXZpZXdfX2luc3RydWN0aW9ucyB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuYXNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcbiAgbGVmdDogLTE2OHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHRvcDogOHB4O1xcbiAgYm90dG9tOiAyNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucGFudHJ5LWluZ3JlZGllbnRzIHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIC0tLS0tIEZhdm9yaXRlcyBWaWV3IC0tLS0tLS0gKi9cXG4ubm8td2Vla2x5LXJlY2lwZXMsXFxuLnJlY2lwZXMtY29udGFpbmVyX19uby1mYXZvcml0ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA3NXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwsXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwuaXMtb3BlbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vZGFsX19vdmVybGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbF9fY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tb2RhbF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWxfX3RpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgY29sb3I6ICMwMDQ0OWU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4ubW9kYWxfX2hlYWRlciAubW9kYWxfX2Nsb3NlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyVXFxcIjtcXG59XFxuXFxuLm1vZGFsX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5tb2RhbF9fZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubW9kYWxfX2J1dHRvbiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODVBNjg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDExOTM2O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBRENEOztBQ0NBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBREVEOztBQ0FBO0VBQ0MsY0FBQTtBREdEOztBQ0RBO0VBQ0MsZ0JBQUE7QURJRDs7QUNGQTtFQUNDLFlBQUE7QURLRDs7QUNIQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBRE1EOztBQ0pBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBRE9EOztBRXJEQSxTQUFBO0FBWUEsWUFBQTtBQUlBLFFBQUE7QUFJQSxjQUFBO0FGaEJBO0VHSEUsYUFBQTtFQUNBLHNCQUFBO0VISUEsWUFBQTtBQXlERjs7QUF0REE7RUdSRSxhQUFBO0VBQ0Esc0JBQUE7RUhTQSxPQUFBO0VBQ0EscUxBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0VaYztFRmFkLGtDRUNhO0VGQWIsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBMERGOztBQXZEQTtFQUNFLGFBQUE7QUEwREY7O0FBdkRBO0VHNUJFLGFBQUE7RUFD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RDs7QUExRUE7RUcxVkUsYUFBQTtFQUNBLG1CQUFBO0VIMlZBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQThFRjs7QUEzRUE7RUFDRSxzQkUxV007RUYyV04sYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUE4RUY7O0FBM0VBO0VHL1dFLGFBQUE7RUFDQSxtQkFBQTtFSGdYQSw4QkFBQTtBQStFRjs7QUE1RUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRW5ZWTtFRm9ZWixzQkFBQTtBQStFRjs7QUE1RUE7RUFDRSx1QkFBQTtFQUNBLFNBQUE7QUErRUY7O0FBNUVBO0VBQ0UsWUFBQTtBQStFRjs7QUE1RUE7RUFDQyxjQUFBO0VBQ0EsVUFBQTtFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCRS9ZdUI7QUY4ZHpCOztBQTVFQTtFQUNDLGFBQUE7RUFDQSx5QkFBQTtBQStFRDs7QUE1RUE7RUFDQyxXRTFaTztFRjJaUCx5QkU3WnFCO0VGOFpwQix5QkFBQTtFQUNELGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDRWpab0I7QUZnZXJCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vcmVzZXQuc2Nzcyc7XFxuQGltcG9ydCAnLi92YXJpYWJsZXMuc2Nzcyc7XFxuQGltcG9ydCAnLi9taXhpbnMuc2Nzcyc7XFxuXFxuaHRtbCB7XFxuICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDkwODE4Mzg3NTgzLTFiYWJhNWU2MzhhZj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzMzMSZxPTgwKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0IHtcXG5cXHRAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5saSxcXG5vbCxcXG5wIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG5uYXYge1xcbiAgQGluY2x1ZGUgZmxleC1jcm9zcy1heGlzLWNlbnRlcigpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogJHByaW1hcnktYm9yZGVyO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1MXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1haW4gPiBzZWN0aW9uIHtcXG4gIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ubmF2LWJhcl9fbmF2LXRhYnMge1xcbiAgQGluY2x1ZGUgZmxleC1jcm9zcy1heGlzLWNlbnRlcigpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ubmF2LWJhcl9fbmF2LXRhYnMgPiBidXR0b24ge1xcbiAgQGluY2x1ZGUgYm9sZC1mb250KCk7XFxuICBAaW5jbHVkZSBmbGV4LWNyb3NzLWF4aXMtY2VudGVyKCk7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG5cXHR0cmFuc2l0aW9uOiAkcHJpbWFyeS10cmFuc2l0aW9uO1xcbiAgJjpob3ZlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgfVxcbn1cXG5cXG4ubmF2LWJhcl9faG9tZS1zZWFyY2gge1xcbiAgQGluY2x1ZGUgZmxleC1jcm9zcy1heGlzLWNlbnRlcigpO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBAaW5jbHVkZSBmbGV4LWNyb3NzLWF4aXMtY2VudGVyKCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLnNlYXJjaC1iYXJfX3NlYXJjaC1sYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuXFxuLnNlYXJjaC1iYXJfX2hvbWUtYnV0dG9uIHtcXG4gIEBpbmNsdWRlIGJvbGQtZm9udCgpO1xcbiAgQGluY2x1ZGUgZmxleC1jcm9zcy1heGlzLWNlbnRlcigpO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcXG5cXHR0cmFuc2l0aW9uOiAkcHJpbWFyeS10cmFuc2l0aW9uO1xcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggJHByaW1hcnktY29sb3I7XFxuICB9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSBIT01FIFZJRVcgLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zZWFyY2gtZ2xpZGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWdsaWRlX19idXR0b24ge1xcbiAgQGluY2x1ZGUgZmxleC1jcm9zcy1heGlzLWNlbnRlcigpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XFxuICBib3JkZXI6ICRwcmltYXJ5LWJvcmRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRyYW5zaXRpb246ICRwcmltYXJ5LXRyYW5zaXRpb247XFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xcbiAgfVxcbn1cXG5cXG4uc2VhcmNoLWdsaWRlX190YWctbmFtZSB7XFxuICBAaW5jbHVkZSBib2xkLWZvbnQoKTtcXG4gIGNvbG9yOiAkd2hpdGU7XFxuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246ICRwcmltYXJ5LXRyYW5zaXRpb247XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWxfX2J1dHRvbjpob3ZlcixcXG4uc2VhcmNoLWdsaWRlX19idXR0b246aG92ZXIsXFxuLnRhZy1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbn1cXG5cXG4ubWFpbi10aXRsZSB7XFxuICB0b3A6IDE1MHB4O1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcXG4gIGZvbnQtc2l6ZTogODVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNDBweDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLSBBTEwgUkVDSVBFUyBWSUVXIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi5zZWFyY2hlZC1yZWNpcGVzLXZpZXdfX3JlY2lwZXMtY29udGFpbmVyLFxcbi50YWdnZWQtcmVjaXBlcy12aWV3X19yZWNpcGVzLWNvbnRhaW5lcixcXG4uYWxsLXJlY2lwZXMtdmlldyxcXG4uYWxsLXJlY2lwZXMtdmlldy1hbHQsXFxuLndlZWtseS1yZWNpcGVzLXZpZXcsXFxuLmZhdm9yaXRlcy12aWV3IHtcXG4gIEBpbmNsdWRlIGZsZXgtY3Jvc3MtYXhpcy1jZW50ZXIoKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC13aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ucmVjaXBlcy1jb250YWluZXJfX3NlYXJjaC1yZXN1bHRzLFxcbi53ZWVrbHktcmVjaXBlcy12aWV3X19yZWNpcGVzLFxcbi50YWdnZWQtcmVjaXBlcy12aWV3X19yZWNpcGVzLWNvbnRhaW5lcixcXG4uYWxsLXJlY2lwZXMtdmlld19fcmVjaXBlcy1jb250YWluZXIsXFxuLnJlY2lwZXMtY29udGFpbmVyX19uby1yZXN1bHRzLFxcbi5mYXZvcml0ZXMtdmlld19fZmF2b3JpdGVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uYWxsLXJlY2lwZXMtdmlldy1hbHQge1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxufVxcblxcbi5yZWNpcGVzLWNvbnRhaW5lcl9fbm8tcmVzdWx0cyB7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5yZWNpcGVzLWNvbnRhaW5lcl9fcmVjaXBlLWNhcmQsXFxuLnNlYXJjaC1yZXN1bHRzLWNvbnRhaW5lcl9fcmVjaXBlLWNhcmQge1xcbiAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcXG4gIEBpbmNsdWRlIHNxdWFyZSgyMDBweCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvci14LWxpZ2h0O1xcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcXG4gIH1cXG59XFxuXFxuLnNlYXJjaC1nbGlkZV9fYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XFxufVxcblxcbi5yZWNpcGUtY2FyZF9faW1hZ2Uge1xcbiAgaGVpZ2h0OiAxMjVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnJlY2lwZS1jYXJkX19uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW46IDE2cHggNXB4IDAgNXB4O1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tIFNJTkdMRSBSRUNJUEUgVklFVyAtLS0tLS0tLS0tLSAqL1xcblxcbi5zaW5nbGUtcmVjaXBlLXZpZXcsXFxuLnNpbmdsZS1yZWNpcGUtdmlldy1hbHQge1xcbiAgQGluY2x1ZGUgZmxleC1jcm9zcy1heGlzLWNlbnRlcigpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LXdoaXRlO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5zaW5nbGUtcmVjaXBlLXZpZXctYWx0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE5MHB4O1xcbn1cXG5cXG4uc2luZ2xlLXJlY2lwZS12aWV3X19yZWNpcGUtaW5mb3JtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29vay1yZWNpcGUtYnV0dG9uLFxcbi5yZWNpcGUtYnV0dG9uIHtcXG4gIEBpbmNsdWRlIGZsZXgtY3Jvc3MtYXhpcy1jZW50ZXIoKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yLXgtbGlnaHQ7XFxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIHRyYW5zaXRpb246ICRwcmltYXJ5LXRyYW5zaXRpb247XFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gICAgY29sb3I6ICR3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLnJlY2lwZS1idXR0b24ge1xcblxcdHdpZHRoOiAyNzVweDtcXG4gIG1hcmdpbjogMTVweCAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnNlYXJjaC1yZXN1bHRzLFxcbi5yZWNpcGUtdGl0bGUsXFxuLnRvcC1iYW5uZXJfX3RpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5yZWNpcGUtaW1hZ2Uge1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi50b3RhbC1jb3N0IHtcXG4gIEBpbmNsdWRlIGZsZXgtY3Jvc3MtYXhpcy1jZW50ZXIoKTtcXG4gIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWNpcGUtYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnJlY2lwZS1pbmZvcm1hdGlvbl9fY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMjVweDtcXG59XFxuXFxuLnNpbmdsZS1yZWNpcGUtdmlld19faW5zdHJ1Y3Rpb25zIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG5hc2lkZSB7XFxuICBAaW5jbHVkZSBmbGV4LWNvbHVtbjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LXdoaXRlO1xcblxcdGxlZnQ6IC0xNjhweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdHdpZHRoOiAxNTBweDtcXG4gIHRvcDogOHB4O1xcbiAgYm90dG9tOiAyNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucGFudHJ5LWluZ3JlZGllbnRzIHtcXG5cXHRvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiAtLS0tLSBGYXZvcml0ZXMgVmlldyAtLS0tLS0tICovXFxuLm5vLXdlZWtseS1yZWNpcGVzLFxcbi5yZWNpcGVzLWNvbnRhaW5lcl9fbm8tZmF2b3JpdGVzIHtcXG4gIEBpbmNsdWRlIGZsZXgtY3Jvc3MtYXhpcy1jZW50ZXIoKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDc1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbCxcXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbC5pcy1vcGVuIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vZGFsX19vdmVybGF5IHtcXG4gIEBpbmNsdWRlIGZsZXgtY3Jvc3MtYXhpcy1jZW50ZXIoKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWxfX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tb2RhbF9faGVhZGVyIHtcXG4gIEBpbmNsdWRlIGZsZXgtY3Jvc3MtYXhpcy1jZW50ZXIoKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsX190aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGNvbG9yOiAkbW9kYWwtdGl0bGU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4ubW9kYWxfX2hlYWRlciAubW9kYWxfX2Nsb3NlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI3MTVcXFwiO1xcbn1cXG5cXG4ubW9kYWxfX2NvbnRlbnQge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogJHRyYW5zcGFyZW50LWJsYWNrLWRhcms7XFxufVxcblxcbi5tb2RhbF9fZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5tb2RhbF9fYnV0dG9uIHtcXG5cXHRjb2xvcjogJHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdG1hcmdpbjogNXB4O1xcblxcdHRyYW5zaXRpb246ICRwcmltYXJ5LXRyYW5zaXRpb247XFxufVxcblwiLFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiLFwiLypDb2xvcnMqLyBcXG4kYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcXG4kbW9kYWwtdGl0bGU6ICMwMDQ0OWU7XFxuJHByaW1hcnktY29sb3I6ICMwMTE5MzY7XFxuJHByaW1hcnktY29sb3IteC1saWdodDogI2QzZDNkMztcXG4kcHJpbWFyeS1jb2xvci1saWdodDogIzQ4NUE2ODtcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjRWY1RDYwO1xcbiR3aGl0ZTogI2ZmZjtcXG4kdHJhbnNwYXJlbnQtYmxhY2s6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4kdHJhbnNwYXJlbnQtYmxhY2stZGFyazogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiR0cmFuc3BhcmVudC13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXG5cXG4vKkJveCBNb2RlbCovXFxuJHByaW1hcnktYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XFxuJHNoYWRvdzogMCA0cHggOHB4IDAgJHRyYW5zcGFyZW50LWJsYWNrLCAgMCA2cHggMjBweCAwICR0cmFuc3BhcmVudC1ibGFjaztcXG5cXG4vKkZvbnRzKi9cXG4kcHJpbWFyeS1mb250OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuJHNlY29uZGFyeS1mb250OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG5cXG4vKlRyYW5zaXRpb25zKi9cXG4kcHJpbWFyeS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcIixcIkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5AbWl4aW4gYm9sZC1mb250KCkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuQG1peGluIGZsZXgtY3Jvc3MtYXhpcy1jZW50ZXIoKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1peGluIHNxdWFyZSgkbWVhc3VyZW1lbnQpIHtcXG4gIGhlaWdodDogJG1lYXN1cmVtZW50O1xcbiAgd2lkdGg6ICRtZWFzdXJlbWVudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgTWljcm9Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgRk9DVVNBQkxFX0VMRU1FTlRTID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXScsICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXTtcblxuICB2YXIgTW9kYWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vZGFsKF9yZWYpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IF9yZWYudGFyZ2V0TW9kYWwsXG4gICAgICAgICAgX3JlZiR0cmlnZ2VycyA9IF9yZWYudHJpZ2dlcnMsXG4gICAgICAgICAgdHJpZ2dlcnMgPSBfcmVmJHRyaWdnZXJzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkdHJpZ2dlcnMsXG4gICAgICAgICAgX3JlZiRvblNob3cgPSBfcmVmLm9uU2hvdyxcbiAgICAgICAgICBvblNob3cgPSBfcmVmJG9uU2hvdyA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uU2hvdyxcbiAgICAgICAgICBfcmVmJG9uQ2xvc2UgPSBfcmVmLm9uQ2xvc2UsXG4gICAgICAgICAgb25DbG9zZSA9IF9yZWYkb25DbG9zZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uQ2xvc2UsXG4gICAgICAgICAgX3JlZiRvcGVuVHJpZ2dlciA9IF9yZWYub3BlblRyaWdnZXIsXG4gICAgICAgICAgb3BlblRyaWdnZXIgPSBfcmVmJG9wZW5UcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInIDogX3JlZiRvcGVuVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJGNsb3NlVHJpZ2dlciA9IF9yZWYuY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIGNsb3NlVHJpZ2dlciA9IF9yZWYkY2xvc2VUcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLWNsb3NlJyA6IF9yZWYkY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIF9yZWYkb3BlbkNsYXNzID0gX3JlZi5vcGVuQ2xhc3MsXG4gICAgICAgICAgb3BlbkNsYXNzID0gX3JlZiRvcGVuQ2xhc3MgPT09IHZvaWQgMCA/ICdpcy1vcGVuJyA6IF9yZWYkb3BlbkNsYXNzLFxuICAgICAgICAgIF9yZWYkZGlzYWJsZVNjcm9sbCA9IF9yZWYuZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBkaXNhYmxlU2Nyb2xsID0gX3JlZiRkaXNhYmxlU2Nyb2xsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBfcmVmJGRpc2FibGVGb2N1cyA9IF9yZWYuZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIGRpc2FibGVGb2N1cyA9IF9yZWYkZGlzYWJsZUZvY3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9IF9yZWYuYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uID0gX3JlZiRhd2FpdENsb3NlQW5pbWF0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCxcbiAgICAgICAgICBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPSBfcmVmLmF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdE9wZW5BbmltYXRpb24gPSBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhd2FpdE9wZW5BbmltYXRpLFxuICAgICAgICAgIF9yZWYkZGVidWdNb2RlID0gX3JlZi5kZWJ1Z01vZGUsXG4gICAgICAgICAgZGVidWdNb2RlID0gX3JlZiRkZWJ1Z01vZGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkZWJ1Z01vZGU7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICAgIC8vIFNhdmUgYSByZWZlcmVuY2Ugb2YgdGhlIG1vZGFsXG4gICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpOyAvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXNzZWQgY29uZmlnXG5cbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICBkZWJ1Z01vZGU6IGRlYnVnTW9kZSxcbiAgICAgICAgZGlzYWJsZVNjcm9sbDogZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgb3BlblRyaWdnZXI6IG9wZW5UcmlnZ2VyLFxuICAgICAgICBjbG9zZVRyaWdnZXI6IGNsb3NlVHJpZ2dlcixcbiAgICAgICAgb3BlbkNsYXNzOiBvcGVuQ2xhc3MsXG4gICAgICAgIG9uU2hvdzogb25TaG93LFxuICAgICAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uOiBhd2FpdENsb3NlQW5pbWF0aW9uLFxuICAgICAgICBhd2FpdE9wZW5BbmltYXRpb246IGF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgZGlzYWJsZUZvY3VzOiBkaXNhYmxlRm9jdXNcbiAgICAgIH07IC8vIFJlZ2lzdGVyIGNsaWNrIGV2ZW50cyBvbmx5IGlmIHByZSBiaW5kaW5nIGV2ZW50TGlzdGVuZXJzXG5cbiAgICAgIGlmICh0cmlnZ2Vycy5sZW5ndGggPiAwKSB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMuYXBwbHkodGhpcywgX3RvQ29uc3VtYWJsZUFycmF5KHRyaWdnZXJzKSk7IC8vIHByZSBiaW5kIGZ1bmN0aW9ucyBmb3IgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5vbktleWRvd24gPSB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb29wcyB0aHJvdWdoIGFsbCBvcGVuVHJpZ2dlcnMgYW5kIGJpbmRzIGNsaWNrIGV2ZW50XG4gICAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzIFtBcnJheSBvZiBub2RlIGVsZW1lbnRzXVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICAgIGtleTogXCJyZWdpc3RlclRyaWdnZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJUcmlnZ2VycygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHJpZ2dlcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgdHJpZ2dlcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB0cmlnZ2Vycy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zaG93TW9kYWwoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2hvd01vZGFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkNsYXNzKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2Rpc2FibGUnKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdE9wZW5BbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBfdGhpczIubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuXG4gICAgICAgICAgICBfdGhpczIuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uU2hvdyh0aGlzLm1vZGFsLCB0aGlzLmFjdGl2ZUVsZW1lbnQsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICAgICAgdmFyIG1vZGFsID0gdGhpcy5tb2RhbDtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW91cignZW5hYmxlJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlRWxlbWVudCAmJiB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uQ2xvc2UodGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF3YWl0Q2xvc2VBbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgb3BlbkNsYXNzID0gdGhpcy5jb25maWcub3BlbkNsYXNzOyAvLyA8LSBvbGQgc2Nob29sIGZ0d1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShvcGVuQ2xhc3MpO1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbEJ5SWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpO1xuICAgICAgICBpZiAodGhpcy5tb2RhbCkgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNjcm9sbEJlaGF2aW91clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbEJlaGF2aW91cih0b2dnbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlU2Nyb2xsKSByZXR1cm47XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgICAgIHN3aXRjaCAodG9nZ2xlKSB7XG4gICAgICAgICAgY2FzZSAnZW5hYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdkaXNhYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkRXZlbnRMaXN0ZW5lcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbW92ZUV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lmhhc0F0dHJpYnV0ZSh0aGlzLmNvbmZpZy5jbG9zZVRyaWdnZXIpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbktleWRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleWRvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpOyAvLyBlc2NcblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSkgdGhpcy5yZXRhaW5Gb2N1cyhldmVudCk7IC8vIHRhYlxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRGb2N1c2FibGVOb2Rlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZvY3VzYWJsZU5vZGVzKCkge1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMRU1FTlRTKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KG5vZGVzKSk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFRyaWVzIHRvIHNldCBmb2N1cyBvbiBhIG5vZGUgd2hpY2ggaXMgbm90IGEgY2xvc2UgdHJpZ2dlclxuICAgICAgICogaWYgbm8gb3RoZXIgbm9kZXMgZXhpc3QgdGhlbiBmb2N1c2VzIG9uIGZpcnN0IGNsb3NlIHRyaWdnZXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldEZvY3VzVG9GaXJzdE5vZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGb2N1c1RvRmlyc3ROb2RlKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGlzYWJsZUZvY3VzKSByZXR1cm47XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyByZW1vdmUgbm9kZXMgb24gd2hvc2UgY2xpY2ssIHRoZSBtb2RhbCBjbG9zZXNcbiAgICAgICAgLy8gY291bGQgbm90IHRoaW5rIG9mIGEgYmV0dGVyIG5hbWUgOihcblxuICAgICAgICB2YXIgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyA9IGZvY3VzYWJsZU5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiAhbm9kZS5oYXNBdHRyaWJ1dGUoX3RoaXMzLmNvbmZpZy5jbG9zZVRyaWdnZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID4gMCkgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0c1swXS5mb2N1cygpO1xuICAgICAgICBpZiAobm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cy5sZW5ndGggPT09IDApIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJldGFpbkZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmV0YWluRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGhpcy5nZXRGb2N1c2FibGVOb2RlcygpOyAvLyBubyBmb2N1c2FibGUgbm9kZXNcblxuICAgICAgICBpZiAoZm9jdXNhYmxlTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWx0ZXJzIG5vZGVzIHdoaWNoIGFyZSBoaWRkZW4gdG8gcHJldmVudFxuICAgICAgICAgKiBmb2N1cyBsZWFrIG91dHNpZGUgbW9kYWxcbiAgICAgICAgICovXG5cbiAgICAgICAgZm9jdXNhYmxlTm9kZXMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZS5vZmZzZXRQYXJlbnQgIT09IG51bGw7XG4gICAgICAgIH0pOyAvLyBpZiBkaXNhYmxlRm9jdXMgaXMgdHJ1ZVxuXG4gICAgICAgIGlmICghdGhpcy5tb2RhbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZvY3VzZWRJdGVtSW5kZXggPSBmb2N1c2FibGVOb2Rlcy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGZvY3VzYWJsZU5vZGVzW2ZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNhYmxlTm9kZXMubGVuZ3RoID4gMCAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSBmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIE1vZGFsIHByb3RvdHlwZSBlbmRzLlxuICAgKiBIZXJlIG9uIGNvZGUgaXMgcmVzcG9uc2libGUgZm9yIGRldGVjdGluZyBhbmRcbiAgICogYXV0byBiaW5kaW5nIGV2ZW50IGhhbmRsZXJzIG9uIG1vZGFsIHRyaWdnZXJzXG4gICAqL1xuICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBvcGVuZWQgbW9kYWxcblxuXG4gIHZhciBhY3RpdmVNb2RhbCA9IG51bGw7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW4gYXNzb2NpYXRpdmUgYXJyYXkgb2YgbW9kYWxzIGFuZCBpdCdzXG4gICAqIHJlc3BlY3RpdmUgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgICBBbiBhcnJheSBvZiBhbGwgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0cmlnZ2VyQXR0ciBUaGUgZGF0YS1hdHRyaWJ1dGUgd2hpY2ggdHJpZ2dlcnMgdGhlIG1vZHVsZVxuICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICovXG5cbiAgdmFyIGdlbmVyYXRlVHJpZ2dlck1hcCA9IGZ1bmN0aW9uIGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2VycywgdHJpZ2dlckF0dHIpIHtcbiAgICB2YXIgdHJpZ2dlck1hcCA9IFtdO1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IHRyaWdnZXIuYXR0cmlidXRlc1t0cmlnZ2VyQXR0cl0udmFsdWU7XG4gICAgICBpZiAodHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPT09IHVuZGVmaW5lZCkgdHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPSBbXTtcbiAgICAgIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdLnB1c2godHJpZ2dlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyaWdnZXJNYXA7XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgd2hldGhlciBhIG1vZGFsIG9mIHRoZSBnaXZlbiBpZCBleGlzdHNcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGlkICBUaGUgaWQgb2YgdGhlIG1vZGFsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlTW9kYWxQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlTW9kYWxQcmVzZW5jZShpZCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3U2VlbXMgbGlrZSB5b3UgaGF2ZSBtaXNzZWQgJWMnXCIuY29uY2F0KGlkLCBcIidcIiksICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsICdJRCBzb21ld2hlcmUgaW4geW91ciBjb2RlLiBSZWZlciBleGFtcGxlIGJlbG93IHRvIHJlc29sdmUgaXQuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIGlkPVxcXCJcIi5jb25jYXQoaWQsIFwiXFxcIj48L2Rpdj5cIikpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBhcmUgbW9kYWwgdHJpZ2dlcnMgcHJlc2VudFxuICAgKiBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBBbiBhcnJheSBvZiBkYXRhLXRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlID0gZnVuY3Rpb24gdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpIHtcbiAgICBpZiAodHJpZ2dlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1pY3JvTW9kYWw6IFxcdTI3NTdQbGVhc2Ugc3BlY2lmeSBhdCBsZWFzdCBvbmUgJWMnbWljcm9tb2RhbC10cmlnZ2VyJ1wiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnZGF0YSBhdHRyaWJ1dGUuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1taWNyb21vZGFsLXRyaWdnZXI9XFxcIm15LW1vZGFsXFxcIj48L2E+XCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0cmlnZ2VycyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBtb2RhbHNcbiAgICogYXJlIHByZXNlbnQgaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgICBBcnJheSBvZiBET00gbm9kZXMgd2hpY2ggaGF2ZSBkYXRhLXRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VyTWFwIEFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgdGhlaXIgdHJpZ2dlcnNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVBcmdzID0gZnVuY3Rpb24gdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSB7XG4gICAgdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpO1xuICAgIGlmICghdHJpZ2dlck1hcCkgcmV0dXJuIHRydWU7XG5cbiAgICBmb3IgKHZhciBpZCBpbiB0cmlnZ2VyTWFwKSB7XG4gICAgICB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICAvKipcbiAgICogQmluZHMgY2xpY2sgaGFuZGxlcnMgdG8gYWxsIG1vZGFsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuXG5cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KGNvbmZpZykge1xuICAgIC8vIENyZWF0ZSBhbiBjb25maWcgb2JqZWN0IHdpdGggZGVmYXVsdCBvcGVuVHJpZ2dlclxuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgb3BlblRyaWdnZXI6ICdkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcidcbiAgICB9LCBjb25maWcpOyAvLyBDb2xsZWN0cyBhbGwgdGhlIG5vZGVzIHdpdGggdGhlIHRyaWdnZXJcblxuICAgIHZhciB0cmlnZ2VycyA9IF90b0NvbnN1bWFibGVBcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiLmNvbmNhdChvcHRpb25zLm9wZW5UcmlnZ2VyLCBcIl1cIikpKTsgLy8gTWFrZXMgYSBtYXBwaW5ncyBvZiBtb2RhbHMgd2l0aCB0aGVpciB0cmlnZ2VyIG5vZGVzXG5cblxuICAgIHZhciB0cmlnZ2VyTWFwID0gZ2VuZXJhdGVUcmlnZ2VyTWFwKHRyaWdnZXJzLCBvcHRpb25zLm9wZW5UcmlnZ2VyKTsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gRm9yIGV2ZXJ5IHRhcmdldCBtb2RhbCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFyIHZhbHVlID0gdHJpZ2dlck1hcFtrZXldO1xuICAgICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IGtleTtcbiAgICAgIG9wdGlvbnMudHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkodmFsdWUpO1xuICAgICAgYWN0aXZlTW9kYWwgPSBuZXcgTW9kYWwob3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogU2hvd3MgYSBwYXJ0aWN1bGFyIG1vZGFsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFyZ2V0TW9kYWwgW1RoZSBpZCBvZiB0aGUgbW9kYWwgdG8gZGlzcGxheV1cbiAgICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgW1RoZSBjb25maWd1cmF0aW9uIG9iamVjdCB0byBwYXNzXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyh0YXJnZXRNb2RhbCwgY29uZmlnKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBjb25maWcgfHwge307XG4gICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IHRhcmdldE1vZGFsOyAvLyBDaGVja3MgaWYgbW9kYWxzIGFuZCB0cmlnZ2VycyBleGlzdCBpbiBkb21cblxuICAgIGlmIChvcHRpb25zLmRlYnVnTW9kZSA9PT0gdHJ1ZSAmJiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UodGFyZ2V0TW9kYWwpID09PSBmYWxzZSkgcmV0dXJuOyAvLyBjbGVhciBldmVudHMgaW4gY2FzZSBwcmV2aW91cyBtb2RhbCB3YXNuJ3QgY2xvc2VcblxuICAgIGlmIChhY3RpdmVNb2RhbCkgYWN0aXZlTW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTsgLy8gc3RvcmVzIHJlZmVyZW5jZSB0byBhY3RpdmUgbW9kYWxcblxuICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXG4gICAgYWN0aXZlTW9kYWwuc2hvd01vZGFsKCk7XG4gIH07XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGFjdGl2ZSBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGNsb3NlXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKHRhcmdldE1vZGFsKSB7XG4gICAgdGFyZ2V0TW9kYWwgPyBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkgOiBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICAgIHNob3c6IHNob3csXG4gICAgY2xvc2U6IGNsb3NlXG4gIH07XG59KCk7XG53aW5kb3cuTWljcm9Nb2RhbCA9IE1pY3JvTW9kYWw7XG5cbmV4cG9ydCBkZWZhdWx0IE1pY3JvTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IGFwaUVuZHBvaW50ID0gJ2h0dHBzOi8vd2hhdHMtY29va2luLWFwaS1kYXRhLmhlcm9rdWFwcC5jb20nO1xuXG5mdW5jdGlvbiBsb2FkVXNlcnMoKSB7XG4gIHJldHVybiBmZXRjaChgJHthcGlFbmRwb2ludH0vYXBpL3YxL3VzZXJzYClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcbn1cblxuZnVuY3Rpb24gbG9hZEluZ3JlZGllbnRzKCkge1xuICByZXR1cm4gZmV0Y2goYCR7YXBpRW5kcG9pbnR9L2FwaS92MS9pbmdyZWRpZW50c2ApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gZGF0YSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpXG59XG5cbmZ1bmN0aW9uIGxvYWRSZWNpcGVzKCkge1xuICByZXR1cm4gZmV0Y2goYCR7YXBpRW5kcG9pbnR9L2FwaS92MS9yZWNpcGVzYClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG59XG5cbmZ1bmN0aW9uIGFsdGVySW5ncmVkaWVudHModXNlcklkLCBpbmdyZWRpZW50c0lkLCBpbmdyZWRpZW50c01vZGlmaWNhdGlvbikge1xuICByZXR1cm4gZmV0Y2goYCR7YXBpRW5kcG9pbnR9L2FwaS92MS91c2Vyc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcInVzZXJJRFwiOiB1c2VySWQsXG4gICAgICBcImluZ3JlZGllbnRJRFwiOiBpbmdyZWRpZW50c0lkLFxuICAgICAgXCJpbmdyZWRpZW50TW9kaWZpY2F0aW9uXCI6IGluZ3JlZGllbnRzTW9kaWZpY2F0aW9uXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH1cbiAgfSlcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihkYXRhID0+IGRhdGEpXG4gIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG59XG5cbmV4cG9ydCB7XG4gIGxvYWRVc2VycyxcbiAgbG9hZEluZ3JlZGllbnRzLFxuICBsb2FkUmVjaXBlcyxcbiAgYWx0ZXJJbmdyZWRpZW50c1xufVxuIiwiY2xhc3MgSW5ncmVkaWVudCB7XG4gIGNvbnN0cnVjdG9yKGluZ3JlZGllbnQpIHtcbiAgICB0aGlzLmlkID0gaW5ncmVkaWVudC5pZDtcbiAgICB0aGlzLmFtb3VudCA9IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50O1xuICAgIHRoaXMudW5pdCA9IGluZ3JlZGllbnQucXVhbnRpdHkudW5pdDtcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmVzdGltYXRlZENvc3RJbkNlbnRzID0gMDtcbiAgfVxuXG4gIGZpbmRJbmdyZWRpZW50RGV0YWlscyhpbmdyZWRpZW50c0RhdGEpIHtcbiAgICBjb25zdCBpbmdyZWRpZW50ID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LmlkID09PSB0aGlzLmlkKTtcbiAgICB0aGlzLm5hbWUgPSBpbmdyZWRpZW50Lm5hbWVcbiAgICB0aGlzLmVzdGltYXRlZENvc3RJbkNlbnRzID0gaW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cztcbiAgfVxuXG4gIGNhbGN1bGF0ZUNvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkQ29zdEluQ2VudHMgKiB0aGlzLmFtb3VudCAvIDEwMDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmdyZWRpZW50O1xuIiwiaW1wb3J0IEluZ3JlZGllbnQgZnJvbSAnLi9JbmdyZWRpZW50JztcblxuY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlKSB7XG4gICAgdGhpcy5pZCA9IHJlY2lwZS5pZDtcbiAgICB0aGlzLmltYWdlID0gcmVjaXBlLmltYWdlO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSByZWNpcGUuaW5ncmVkaWVudHM7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMubmFtZSA9IHJlY2lwZS5uYW1lO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICB9XG5cbiAgZ2V0SW5ncmVkaWVudHNJbmZvcm1hdGlvbihpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gdGhpcy5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IEluZ3JlZGllbnQoaW5ncmVkaWVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LmZpbmRJbmdyZWRpZW50RGV0YWlscyhpbmdyZWRpZW50c0RhdGEpKTtcbiAgfVxuXG4gIHJldHVybkluZ3JlZGllbnRzTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiBgJHtpbmdyZWRpZW50LmFtb3VudC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcLjAwJC8sICcnKX0gJHtpbmdyZWRpZW50LnVuaXR9ICR7aW5ncmVkaWVudC5uYW1lfWApXG4gIH1cblxuICByZXR1cm5Db3N0SW5Eb2xsYXJzKCkge1xuICAgIGNvbnN0IGNvc3QgPSB0aGlzLmluZ3JlZGllbnRzLnJlZHVjZSgoYWNjLCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICBhY2MgKz0gaW5ncmVkaWVudC5jYWxjdWxhdGVDb3N0KCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApXG4gICAgcmV0dXJuIGNvc3QudG9GaXhlZCgyKTtcbiAgfVxuXG4gIHJldHVybkluc3RydWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0cnVjdGlvbnMubWFwKGluc3RydWN0aW9uID0+IGAke2luc3RydWN0aW9uLm51bWJlcn0uICR7aW5zdHJ1Y3Rpb24uaW5zdHJ1Y3Rpb259YClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGU7XG4iLCJpbXBvcnQgUmVjaXBlIGZyb20gJy4vUmVjaXBlJztcblxuY2xhc3MgUmVjaXBlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZURhdGEpIHtcbiAgICB0aGlzLnJlY2lwZXMgPSByZWNpcGVEYXRhO1xuICB9XG5cbiAgZ2V0UmVjaXBlc0luZm9ybWF0aW9uKGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMucmVjaXBlcyA9IHRoaXMucmVjaXBlcy5tYXAocmVjaXBlID0+IG5ldyBSZWNpcGUocmVjaXBlKSk7XG4gICAgdGhpcy5yZWNpcGVzLmZvckVhY2goKHJlY2lwZSkgPT4ge1xuICAgICAgcmVjaXBlLmdldEluZ3JlZGllbnRzSW5mb3JtYXRpb24oaW5ncmVkaWVudHNEYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRSZWNpcGVzQnlUYWcodGFncywgcmVjaXBlc1RvU2VhcmNoKSB7XG4gICAgY29uc3QgcmVjaXBlcyA9IHJlY2lwZXNUb1NlYXJjaCB8fCB0aGlzLnJlY2lwZXM7XG4gICAgY29uc3QgZm91bmRSZWNpcGVzID0gcmVjaXBlcy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCByZWNpcGUpID0+IHtcbiAgICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAgIGlmIChyZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpICYmICFhY2N1bXVsYXRvci5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICAgICAgYWNjdW11bGF0b3IucHVzaChyZWNpcGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGZvdW5kUmVjaXBlcztcbiAgfVxuXG4gIGZpbmRSZWNpcGVzQnlOYW1lKHNlYXJjaFRlcm0sIHJlY2lwZXNUb1NlYXJjaCkge1xuICAgIGNvbnN0IHJlY2lwZXMgPSByZWNpcGVzVG9TZWFyY2ggfHwgdGhpcy5yZWNpcGVzO1xuICAgIGNvbnN0IGZvdW5kUmVjaXBlcyA9IHJlY2lwZXMuZmlsdGVyKChyZWNpcGUpID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSk7XG4gICAgfSlcbiAgICByZXR1cm4gZm91bmRSZWNpcGVzO1xuICB9XG5cbiAgZmluZFJlY2lwZXNCeUluZ3JlZGllbnQoaW5ncmVkaWVudE5hbWUsIHJlY2lwZXNUb1NlYXJjaCkge1xuICAgIGNvbnN0IHJlY2lwZXMgPSByZWNpcGVzVG9TZWFyY2ggfHwgdGhpcy5yZWNpcGVzO1xuICAgIGNvbnN0IGZpbHRlcmVkUmVjaXBlID0gcmVjaXBlcy5maWx0ZXIoKHJlY2lwZSkgPT4ge1xuICAgICAgY29uc3QgaGFzTWF0Y2hpbmdJbmdyZWRpZW50ID0gcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQoKGluZ3JlZGllbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhpbmdyZWRpZW50TmFtZSk7XG4gICAgICB9KVxuICAgICAgaWYgKGhhc01hdGNoaW5nSW5ncmVkaWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICAgIHJldHVybiBmaWx0ZXJlZFJlY2lwZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVSZXBvc2l0b3J5O1xuIiwiaW1wb3J0IEluZ3JlZGllbnQgZnJvbSAnLi9JbmdyZWRpZW50JztcblxuY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJzRGF0YSwgcmVjaXBlUmVwb3NpdG9yeSkge1xuICAgIHRoaXMubmFtZSA9IHVzZXJzRGF0YS5uYW1lO1xuICAgIHRoaXMuaWQgPSB1c2Vyc0RhdGEuaWQ7XG4gICAgdGhpcy5wYW50cnkgPSB1c2Vyc0RhdGEucGFudHJ5O1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzID0gW107XG4gICAgdGhpcy53ZWVrbHlGYXZvcml0ZXMgPSBbXTtcbiAgICB0aGlzLmZpbHRlcmVkQnlOYW1lID0gW107XG4gICAgdGhpcy5yZXBvID0gcmVjaXBlUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFkZEZhdm9yaXRlKHJlY2lwZSkge1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnB1c2gocmVjaXBlKTtcbiAgfVxuXG4gIGFkZFdlZWtseVJlY2lwZShyZWNpcGUpIHtcbiAgICBjb25zdCB3ZWVrbHlGYXYgPSB0aGlzLndlZWtseUZhdm9yaXRlcztcbiAgICB3ZWVrbHlGYXYucHVzaChyZWNpcGUpO1xuICB9XG5cbiAgcmVtb3ZlRmF2b3JpdGUocmVjaXBlKSB7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMuc3BsaWNlKHRoaXMuZmF2b3JpdGVSZWNpcGVzLmluZGV4T2YocmVjaXBlKSwgMSk7XG4gIH1cblxuICByZW1vdmVXZWVrbHlSZWNpcGUocmVjaXBlKSB7XG4gICAgcmV0dXJuIHRoaXMud2Vla2x5RmF2b3JpdGVzLnNwbGljZShcbiAgICAgIHRoaXMud2Vla2x5RmF2b3JpdGVzLmluZGV4T2YocmVjaXBlKSwgMSk7XG4gIH1cblxuICBjaGVja1VzZXJQYW50cnkocmVjaXBlKSB7XG4gICAgbGV0IG1hdGNoID0gMDtcbiAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChyZWNpcGVJbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMucGFudHJ5LmZvckVhY2gocGFudHJ5SW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChyZWNpcGVJbmdyZWRpZW50LmlkID09PSBwYW50cnlJbmdyZWRpZW50LmluZ3JlZGllbnQgJiYgcGFudHJ5SW5ncmVkaWVudC5hbW91bnQgPj0gcmVjaXBlSW5ncmVkaWVudC5hbW91bnQpIHtcbiAgICAgICAgICBtYXRjaCArPSAxO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIG1hdGNoID09PSByZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuTmVlZGVkSW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gcmVjaXBlLmluZ3JlZGllbnRzLnJlZHVjZSgob2JqLCByZWNpcGVJbmdyZWRpZW50KSA9PiB7XG4gICAgICBsZXQgbWF0Y2ggPSB0aGlzLnBhbnRyeS5maW5kKHBhbnRyeUluZ3JlZGllbnQgPT4gcmVjaXBlSW5ncmVkaWVudC5pZCA9PT0gcGFudHJ5SW5ncmVkaWVudC5pbmdyZWRpZW50KVxuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgb2JqLmhhdmUucHVzaChyZWNpcGVJbmdyZWRpZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqLm5lZWQucHVzaChyZWNpcGVJbmdyZWRpZW50KVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9ialxuICAgIH0sXG4gICAge1xuICAgICAgaGF2ZTogW10sXG4gICAgICBuZWVkOiBbXVxuICAgIH0pXG5cbiAgICBjb25zdCBuZWVkQnlBbW91bnQgPSByZXN1bHQuaGF2ZS5maWx0ZXIocmVzdWx0SW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgZm91bmRNYXRjaGVzID0gdGhpcy5wYW50cnkuZmluZChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQuaW5ncmVkaWVudCA9PT0gcmVzdWx0SW5ncmVkaWVudC5pZClcbiAgICAgIHJldHVybiBmb3VuZE1hdGNoZXMuYW1vdW50IDwgcmVzdWx0SW5ncmVkaWVudC5hbW91bnRcblxuICAgIH0pLm1hcChyZWNpcGVJbmdyZWRpZW50ID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kTWF0Y2hlcyA9IHRoaXMucGFudHJ5LmZpbmQocGFudHJ5SW5ncmVkaWVudCA9PiBwYW50cnlJbmdyZWRpZW50LmluZ3JlZGllbnQgPT09IHJlY2lwZUluZ3JlZGllbnQuaWQpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiByZWNpcGVJbmdyZWRpZW50LmlkLFxuICAgICAgICBuYW1lOiByZWNpcGVJbmdyZWRpZW50Lm5hbWUsXG4gICAgICAgIGFtb3VudDogcmVjaXBlSW5ncmVkaWVudC5hbW91bnQgLSBmb3VuZE1hdGNoZXMuYW1vdW50XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHRvdGFsTmVlZCA9IHJlc3VsdC5uZWVkLmNvbmNhdChuZWVkQnlBbW91bnQpXG4gICAgcmV0dXJuIHRvdGFsTmVlZFxuICB9XG5cbiAgZmlsdGVyRmF2b3JpdGVSZWNpcGVzQnlUYWdzKHRhZ3MpIHtcbiAgICBjb25zdCBmb3VuZFJlY2lwZXMgPSB0aGlzLnJlcG8uZmluZFJlY2lwZXNCeVRhZyh0YWdzLCB0aGlzLmZhdm9yaXRlUmVjaXBlcyk7XG4gICAgcmV0dXJuIGZvdW5kUmVjaXBlcztcbiAgfVxuXG4gIGZpbmRGYXZvcml0ZVJlY2lwZXNCeU5hbWUoc2VhcmNoVGVybSkge1xuICAgIGNvbnN0IGZvdW5kUmVjaXBlcyA9IHRoaXMucmVwby5maW5kUmVjaXBlc0J5TmFtZShzZWFyY2hUZXJtLCB0aGlzLmZhdm9yaXRlUmVjaXBlcyk7XG4gICAgcmV0dXJuIGZvdW5kUmVjaXBlcztcbiAgfVxuXG4gIGZpbmRGYXZvcml0ZVJlY2lwZXNCeUluZ3JlZGllbnQoaW5ncmVkaWVudE5hbWUpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFJlY2lwZSA9IHRoaXMucmVwby5maW5kUmVjaXBlc0J5SW5ncmVkaWVudChpbmdyZWRpZW50TmFtZSwgdGhpcy5mYXZvcml0ZVJlY2lwZXMpO1xuICAgIHJldHVybiBmaWx0ZXJlZFJlY2lwZTtcbiAgfVxuXG4gIHJldHVyblBhbnRyeUluZ3JlZGllbnRzKCkge1xuICAgIGxldCBtYXRjaGluZ0luZ3JlZGllbnQ7XG5cbiAgICByZXR1cm4gdGhpcy5wYW50cnkucmVkdWNlKChhY2MsIHBhbnRyeUluZ3JlZGllbnQpID0+IHtcbiAgICAgIHRoaXMucmVwby5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHtcbiAgICAgICAgbWF0Y2hpbmdJbmdyZWRpZW50ID0gIHJlY2lwZS5pbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4gcGFudHJ5SW5ncmVkaWVudC5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50LmlkKVxuXG4gICAgICAgIHJldHVybiBtYXRjaGluZ0luZ3JlZGllbnQ7XG4gICAgICB9KVxuXG4gICAgICBhY2MucHVzaChgJHtwYW50cnlJbmdyZWRpZW50LmFtb3VudH0gJHttYXRjaGluZ0luZ3JlZGllbnQubmFtZX1gKVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIFtdKVxuICB9XG5cbiAgYWRkSW5ncmVkaWVudEFtb3VudChpbmdyZWRpZW50cykge1xuICAgIGluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBjb25zdCBtYXRjaCA9IHRoaXMucGFudHJ5LmZpbmQocGFudHJ5SW5ncmVkaWVudCA9PiBwYW50cnlJbmdyZWRpZW50LmluZ3JlZGllbnQgPT09IGluZ3JlZGllbnQuaWQpXG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaC5hbW91bnQgKz0gaW5ncmVkaWVudC5hbW91bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZEluZ3JlZGllbnRUb1BhbnRyeShpbmdyZWRpZW50KTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3VidHJhY3RJbmdyZWRpZW50QW1vdW50KGluZ3JlZGllbnRzKSB7XG4gICAgaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5wYW50cnkuZmluZChwYW50cnlJbmdyZWRpZW50ID0+IHBhbnRyeUluZ3JlZGllbnQuaW5ncmVkaWVudCA9PT0gaW5ncmVkaWVudC5pZClcblxuICAgICAgbWF0Y2guYW1vdW50IC09IGluZ3JlZGllbnQuYW1vdW50O1xuICAgICAgIW1hdGNoLmFtb3VudCAmJiB0aGlzLnJlbW92ZUluZ3JlZGllbnQobWF0Y2gpO1xuICAgIH0pXG4gIH1cblxuICByZW1vdmVJbmdyZWRpZW50KGluZ3JlZGllbnQpIHtcbiAgICBjb25zdCBpbmdJbmRleCA9IHRoaXMucGFudHJ5LmluZGV4T2YoaW5ncmVkaWVudCk7XG4gICAgdGhpcy5wYW50cnkuc3BsaWNlKGluZ0luZGV4LCAxKTtcbiAgfVxuXG4gIGFkZEluZ3JlZGllbnRUb1BhbnRyeShpbmdyZWRpZW50KSB7XG4gICAgdGhpcy5wYW50cnkucHVzaCh7IGluZ3JlZGllbnQ6IGluZ3JlZGllbnQuaWQsIGFtb3VudDogaW5ncmVkaWVudC5hbW91bnQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImNvbnN0IGhvbWVWaWV3SW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZVZpZXdJbWFnZScpO1xuY29uc3QgaG9tZVZpZXdCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZVZpZXdCdXR0b24nKTtcbmNvbnN0IGhvbWVWaWV3U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lVmlld1NlY3Rpb24nKTtcbmNvbnN0IHNpbmdsZVJlY2lwZVZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2luZ2xlUmVjaXBlVmlldycpO1xuXG5jb25zdCBhbGxSZWNpcGVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFJlY2lwZXNCdXR0b24nKTtcbmNvbnN0IGFsbFJlY2lwZXNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFJlY2lwZXNTZWN0aW9uJyk7XG5jb25zdCBhbGxSZWNpcGVzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFJlY2lwZXNDb250YWluZXInKTtcblxuY29uc3Qgbm9GYXZvcml0ZXNNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vRmF2b3JpdGVzTWVzc2FnZScpO1xuY29uc3QgZmF2b3JpdGVzVmlld0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXZvcml0ZXNWaWV3QnV0dG9uJyk7XG5jb25zdCBhZGRUb0Zhdm9yaXRlc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUb0Zhdm9yaXRlc0J1dHRvbicpO1xuY29uc3QgZmF2b3JpdGVSZWNpcGVzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXZvcml0ZVJlY2lwZXNTZWN0aW9uJyk7XG5jb25zdCBmYXZvcml0ZVJlY2lwZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmF2b3JpdGVSZWNpcGVzQ29udGFpbmVyJyk7XG5jb25zdCByZW1vdmVGcm9tRmF2b3JpdGVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZUZyb21GYXZvcml0ZXNCdXR0b24nKTtcbmNvbnN0IGZhdm9yaXRlVGFnZ2VkUmVjaXBlc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXZvcml0ZVRhZ2dlZFJlY2lwZXNDb250YWluZXInKTtcblxuY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKTtcbmNvbnN0IHNlYXJjaEluZ3JlZGllbnRHbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbmdyZWRpZW50R2xpZGUnKTtcbmNvbnN0IHRhZ2dlZFJlY2lwZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnZ2VkUmVjaXBlc0NvbnRhaW5lcicpO1xuY29uc3QgZmF2b3JpdGVzVGFnc0dsaWRlID0gc2VhcmNoSW5ncmVkaWVudEdsaWRlLmNsb25lTm9kZSh0cnVlKTtcblxuY29uc3Qgd2Vla2x5UmVjaXBlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdGFic19fdGhpcy13ZWVrJyk7XG5jb25zdCB3ZWVrbHlSZWNpcGVzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrbHlSZWNpcGVzU2VjdGlvbicpO1xuXG5jb25zdCByZWNpcGVOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZU5hbWUnKTtcbmNvbnN0IHJlY2lwZUNvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlQ29zdCcpO1xuY29uc3QgcmVjaXBlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlSW1hZ2UnKTtcbmNvbnN0IHJlY2lwZUluZ3JlZGllbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZUluZ3JlZGllbnRzJyk7XG5jb25zdCByZWNpcGVJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlSW5zdHJ1Y3Rpb25zJyk7XG5cbmNvbnN0IG5vUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub1Jlc3VsdHMnKTtcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCYXJJbnB1dCcpO1xuY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hlZFJlY2lwZXNDb250YWluZXInKTtcbmNvbnN0IGRpc3BsYXllZFNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoZWRSZWNpcGVzJyk7XG5cbmNvbnN0IHdlZWtseVJlY2lwZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla2x5UmVjaXBlcycpO1xuY29uc3QgYWRkVG9XZWVrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvV2Vla0J1dHRvbicpO1xuY29uc3Qgbm9XZWVrbHlSZWNpcGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vV2Vla2x5UmVjaXBlcycpO1xuY29uc3QgcmVtb3ZlRnJvbVdlZWtCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlRnJvbVdlZWtCdXR0b24nKTtcbmNvbnN0IGFkZEluZ3JlZGllbnRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEluZ3JlZGllbnRzQnV0dG9uJyk7XG5jb25zdCBjb25maXJtQ29va2luZ0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtQ29va2luZ0J1dHRvbicpO1xuXG5jb25zdCBjb29rUmVjaXBlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2tSZWNpcGVCdXR0b24nKTtcbmNvbnN0IGFsbFNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbiA+IHNlY3Rpb24nKTtcbmNvbnN0IHBhbnRyeUluZ3JlZGllbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbnRyeUluZ3JlZGllbnRzJyk7XG5jb25zdCBpbmdyZWRpZW50c05lZWRlZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmdyZWRpZW50c05lZWRlZCcpO1xuXG5sZXQgZG9tVXBkYXRlcyA9IHtcbiAgc2hvdyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSxcblxuICBoaWRlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9LFxuXG4gIGFkZFN0eWxpbmcoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0sXG5cbiAgcmVtb3ZlU3R5bGluZyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSxcblxuICByZW5kZXJSZWNpcGVDYXJkcyhjb250YWluZXIsIHJlY2lwZXMpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz1cbiAgICAgICAgYDxhcnRpY2xlIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cInJlY2lwZXMtY29udGFpbmVyX19yZWNpcGUtY2FyZFwiIGlkPSR7cmVjaXBlLmlkfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZWNpcGUuaW1hZ2V9XCIgY2xhc3M9XCJyZWNpcGUtY2FyZF9faW1hZ2VcIiBhbHQ9JHtyZWNpcGUubmFtZX0+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInJlY2lwZS1jYXJkX19uYW1lXCI+JHtyZWNpcGUubmFtZX08L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5gO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlclJlY2lwZUluc3RydWN0aW9ucyhpbnN0cnVjdGlvbnMpIHtcbiAgICByZWNpcGVJbnN0cnVjdGlvbnMuaW5uZXJIVE1MID0gaW5zdHJ1Y3Rpb25zLnJlZHVjZSgoYWNjLCBpbnN0cnVjdGlvbikgPT4ge1xuICAgICAgYWNjICs9IGA8bGkgY2xhc3M9XCJpbmdyZWRpZW50LWxpc3RfX2l0ZW1cIj4ke2luc3RydWN0aW9ufTwvbGk+YDtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgJycpO1xuICB9LFxuXG4gIHJlbmRlclJlY2lwZUluZ3JlZGllbnRzKGluZ3JlZGllbnRzKSB7XG4gICAgcmVjaXBlSW5ncmVkaWVudHMuaW5uZXJIVE1MID0gaW5ncmVkaWVudHMucmVkdWNlKChhY2MsIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGFjYyArPSBgPGxpIGNsYXNzPVwiaW5ncmVkaWVudC1saXN0X19pdGVtXCI+4pePICR7aW5ncmVkaWVudH08L2xpPmA7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sICcnKTtcbiAgfSxcblxuICBpbmRpdmlkdWFsUmVjaXBlSW50ZXJwb2xhdGlvbihyZWNpcGUpIHtcbiAgICByZWNpcGVJbWFnZS5hbHQgPSByZWNpcGUubmFtZTtcbiAgICByZWNpcGVJbWFnZS5zcmMgPSByZWNpcGUuaW1hZ2U7XG4gICAgcmVjaXBlTmFtZS5pbm5lclRleHQgPSByZWNpcGUubmFtZTtcbiAgICByZWNpcGVDb3N0LmlubmVyVGV4dCA9IHJlY2lwZS5yZXR1cm5Db3N0SW5Eb2xsYXJzKCk7XG4gICAgYWRkVG9GYXZvcml0ZXNCdXR0b24ubmFtZSA9IHJlY2lwZS5pZDtcbiAgICByZW1vdmVGcm9tRmF2b3JpdGVzQnV0dG9uLm5hbWUgPSByZWNpcGUuaWQ7XG4gIH0sXG5cbiAgcmVtb3ZlQWxsUmVjaXBlQ2FyZHMoKSB7XG4gICAgY29uc3QgcmVjaXBlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVjaXBlcy1jb250YWluZXJfX3JlY2lwZS1jYXJkJyk7XG5cbiAgICByZWNpcGVDYXJkcy5mb3JFYWNoKChyZWNpcGVDYXJkKSA9PiB7XG4gICAgICByZWNpcGVDYXJkLnJlbW92ZSgpO1xuICAgIH0pXG4gIH0sXG5cbiAgYWRkVGFnc0dsaWRlKCkge1xuICAgIGlmICghZmF2b3JpdGVSZWNpcGVzU2VjdGlvbi5jb250YWlucyhmYXZvcml0ZXNUYWdzR2xpZGUpKSB7XG4gICAgICBmYXZvcml0ZXNUYWdzR2xpZGUuaWQgPSAnZmF2b3JpdGVTZWFyY2hHbGlkZSc7XG4gICAgICBmYXZvcml0ZVJlY2lwZXNTZWN0aW9uLmFwcGVuZENoaWxkKGZhdm9yaXRlc1RhZ3NHbGlkZSk7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZVRhZ1NlbGVjdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3RlZFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFnLXNlbGVjdGVkJylcbiAgICBzZWxlY3RlZFRhZ3MuZm9yRWFjaCh0YWcgPT4gdGFnLmNsYXNzTGlzdC50b2dnbGUoJ3RhZy1zZWxlY3RlZCcpKTtcbiAgfSxcblxuICByZW5kZXJQYW50cnlJbmdyZWRpZW50cyhwYW50cnlJbmdyZWRpZW50cykge1xuICAgIHBhbnRyeUluZ3JlZGllbnRzQ29udGFpbmVyLmlubmVySFRNTCA9IHBhbnRyeUluZ3JlZGllbnRzLnJlZHVjZSgoYWNjLCBwYW50cnlJbmdyZWRpZW50cykgPT4ge1xuICAgICAgYWNjICs9IGA8bGkgY2xhc3M9XCJpbmdyZWRpZW50LWxpc3RfX2l0ZW1cIj7il48gJHtwYW50cnlJbmdyZWRpZW50c308L2xpPmA7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sICcnKTtcbiAgfSxcblxuICByZW5kZXJOZWVkZWRJbmdyZWRpZW50cyhuZWVkZWRJbmdyZWRpZW50cykge1xuICAgIGluZ3JlZGllbnRzTmVlZGVkQ29udGFpbmVyLmlubmVySFRNTCA9IG5lZWRlZEluZ3JlZGllbnRzLnJlZHVjZSgoYWNjLCBuZWVkZWRJbmdyZWRpZW50KSA9PiB7XG4gICAgICBhY2MgKz0gYDxsaSBjbGFzcz1cImluZ3JlZGllbnQtbGlzdF9faXRlbVwiPuKXjyAke25lZWRlZEluZ3JlZGllbnQuYW1vdW50fSAke25lZWRlZEluZ3JlZGllbnQubmFtZX08L2xpPmA7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sICcnKTtcbiAgfSxcblxuICBob21lVmlld0ltYWdlLFxuICBob21lVmlld0J1dHRvbixcbiAgaG9tZVZpZXdTZWN0aW9uLFxuICBzaW5nbGVSZWNpcGVWaWV3LFxuICBhbGxSZWNpcGVzQnV0dG9uLFxuICBhbGxSZWNpcGVzU2VjdGlvbixcbiAgYWxsUmVjaXBlc0NvbnRhaW5lcixcbiAgbm9GYXZvcml0ZXNNZXNzYWdlLFxuICBmYXZvcml0ZXNWaWV3QnV0dG9uLFxuICBhZGRUb0Zhdm9yaXRlc0J1dHRvbixcbiAgZmF2b3JpdGVSZWNpcGVzU2VjdGlvbixcbiAgZmF2b3JpdGVSZWNpcGVzQ29udGFpbmVyLFxuICByZW1vdmVGcm9tRmF2b3JpdGVzQnV0dG9uLFxuICBmYXZvcml0ZVRhZ2dlZFJlY2lwZXNDb250YWluZXIsXG4gIHdlZWtseVJlY2lwZXNCdXR0b24sXG4gIHdlZWtseVJlY2lwZXNTZWN0aW9uLFxuICByZWNpcGVOYW1lLFxuICByZWNpcGVDb3N0LFxuICByZWNpcGVJbWFnZSxcbiAgcmVjaXBlSW5ncmVkaWVudHMsXG4gIHJlY2lwZUluc3RydWN0aW9ucyxcbiAgbWFpbkNvbnRlbnRDb250YWluZXIsXG4gIHNlYXJjaEluZ3JlZGllbnRHbGlkZSxcbiAgdGFnZ2VkUmVjaXBlc0NvbnRhaW5lcixcbiAgZmF2b3JpdGVzVGFnc0dsaWRlLFxuICBub1Jlc3VsdHMsXG4gIHNlYXJjaEJhcixcbiAgc2VhcmNoUmVzdWx0cyxcbiAgZGlzcGxheWVkU2VhcmNoUmVzdWx0cyxcbiAgd2Vla2x5UmVjaXBlcyxcbiAgYWRkVG9XZWVrQnV0dG9uLFxuICBub1dlZWtseVJlY2lwZXMsXG4gIHJlbW92ZUZyb21XZWVrQnV0dG9uLFxuICBjb29rUmVjaXBlQnV0dG9uLFxuICBhbGxTZWN0aW9ucyxcbiAgYWRkSW5ncmVkaWVudHNCdXR0b24sXG4gIGNvbmZpcm1Db29raW5nQnV0dG9uLFxuICBpbmdyZWRpZW50c05lZWRlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlcztcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuaW1wb3J0IHsgbG9hZFVzZXJzLCBsb2FkSW5ncmVkaWVudHMsIGxvYWRSZWNpcGVzLCBhbHRlckluZ3JlZGllbnRzIH0gZnJvbSAnLi9hcGlDYWxscyc7XG5pbXBvcnQgUmVjaXBlUmVwb3NpdG9yeSBmcm9tICcuL2NsYXNzZXMvUmVjaXBlUmVwb3NpdG9yeSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL2NsYXNzZXMvVXNlcic7XG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcblxubGV0IHJlY2lwZVJlcG9zaXRvcnk7XG5sZXQgdGFncyA9IFtdO1xubGV0IHVzZXI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZ2V0VXNlcik7XG5kb21VcGRhdGVzLnNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHByZXBTZWFyY2gpO1xuZG9tVXBkYXRlcy5zZWFyY2hJbmdyZWRpZW50R2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RUYWcpO1xuZG9tVXBkYXRlcy5ob21lVmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlIb21lVmlldyk7XG5kb21VcGRhdGVzLmFsbFJlY2lwZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWxsUmVjaXBlcyk7XG5kb21VcGRhdGVzLmFkZFRvV2Vla0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvV2Vla2x5UmVjaXBlcyk7XG5kb21VcGRhdGVzLndlZWtseVJlY2lwZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5V2Vla2x5UmVjaXBlcyk7XG5kb21VcGRhdGVzLnJlbW92ZUZyb21XZWVrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRnJvbVdlZWtseVJlY2lwZXMpO1xuZG9tVXBkYXRlcy5mYXZvcml0ZXNWaWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUZhdm9yaXRlc1ZpZXcpO1xuZG9tVXBkYXRlcy5hZGRUb0Zhdm9yaXRlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvRmF2b3JpdGVzKTtcbmRvbVVwZGF0ZXMucmVtb3ZlRnJvbUZhdm9yaXRlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUZyb21GYXZvcml0ZXMpO1xuZG9tVXBkYXRlcy5mYXZvcml0ZVJlY2lwZXNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0VGFnKTtcbmRvbVVwZGF0ZXMuY29va1JlY2lwZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlNb2RhbCk7XG5kb21VcGRhdGVzLmFkZEluZ3JlZGllbnRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkSW5ncmVkaWVudHMpO1xuZG9tVXBkYXRlcy5jb25maXJtQ29va2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVzZUluZ3JlZGllbnRzKTtcbmRvbVVwZGF0ZXMuYWxsU2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UmVjaXBlKSlcbmRvbVVwZGF0ZXMuYWxsU2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgc2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGRpc3BsYXlSZWNpcGUoZXZlbnQpXG4gICAgfVxuICB9KTtcbn0pXG5cbmZ1bmN0aW9uIGdldFJhbmRvbVVzZXIoYXJyYXkpIHtcbiAgY29uc3QgaW5kZXggPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbiAgY29uc3QgdXNlckRhdGEgPSBhcnJheVtpbmRleF07XG4gIHJldHVybiB1c2VyRGF0YTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcigpIHtcbiAgbG9hZFVzZXJzKCkudGhlbih1c2Vyc0RhdGEgPT4ge1xuICAgIGdldFJlY2lwZXModXNlcnNEYXRhKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlY2lwZXModXNlcnNEYXRhKSB7XG4gIGxvYWRSZWNpcGVzKCkudGhlbihyZWNpcGVEYXRhID0+IHtcbiAgICByZWNpcGVSZXBvc2l0b3J5ID0gbmV3IFJlY2lwZVJlcG9zaXRvcnkocmVjaXBlRGF0YSk7XG4gICAgZ2V0SW5ncmVkaWVudHModXNlcnNEYXRhKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEluZ3JlZGllbnRzKHVzZXJzRGF0YSkge1xuICBsb2FkSW5ncmVkaWVudHMoKS50aGVuKGluZ3JlZGllbnRzRGF0YSA9PiB7XG4gICAgcmVjaXBlUmVwb3NpdG9yeS5nZXRSZWNpcGVzSW5mb3JtYXRpb24oaW5ncmVkaWVudHNEYXRhKTtcblxuICAgIGNvbnN0IHVzZXJEYXRhID0gZ2V0UmFuZG9tVXNlcih1c2Vyc0RhdGEpO1xuICAgIHVzZXIgPSBuZXcgVXNlcih1c2VyRGF0YSwgcmVjaXBlUmVwb3NpdG9yeSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUb0Zhdm9yaXRlcygpIHtcbiAgY29uc3QgZmF2b3JpdGVSZWNpcGUgPSByZWNpcGVSZXBvc2l0b3J5LnJlY2lwZXMuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBwYXJzZUludChkb21VcGRhdGVzLmFkZFRvRmF2b3JpdGVzQnV0dG9uLm5hbWUpKTtcbiAgdXNlci5hZGRGYXZvcml0ZShmYXZvcml0ZVJlY2lwZSk7XG5cbiAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuYWRkVG9GYXZvcml0ZXNCdXR0b24pO1xuICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy5yZW1vdmVGcm9tRmF2b3JpdGVzQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUZhdm9yaXRlcygpIHtcbiAgY29uc3QgZmF2b3JpdGVSZWNpcGUgPSByZWNpcGVSZXBvc2l0b3J5LnJlY2lwZXMuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBwYXJzZUludChkb21VcGRhdGVzLnJlbW92ZUZyb21GYXZvcml0ZXNCdXR0b24ubmFtZSkpO1xuICB1c2VyLnJlbW92ZUZhdm9yaXRlKGZhdm9yaXRlUmVjaXBlKTtcblxuICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5yZW1vdmVGcm9tRmF2b3JpdGVzQnV0dG9uKTtcbiAgZG9tVXBkYXRlcy5zaG93KGRvbVVwZGF0ZXMuYWRkVG9GYXZvcml0ZXNCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RmF2b3JpdGVzVmlldygpIHtcbiAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuc2VhcmNoUmVzdWx0cyk7XG4gIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLmhvbWVWaWV3U2VjdGlvbik7XG4gIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLnNpbmdsZVJlY2lwZVZpZXcpO1xuICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5hbGxSZWNpcGVzU2VjdGlvbik7XG4gIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLndlZWtseVJlY2lwZXNTZWN0aW9uKTtcbiAgZG9tVXBkYXRlcy5zaG93KGRvbVVwZGF0ZXMuZmF2b3JpdGVSZWNpcGVzU2VjdGlvbik7XG4gIGNsZWFyVGFncygpO1xuICBjaGVja0Zhdm9yaXRlUmVjaXBlcygpO1xufVxuXG5mdW5jdGlvbiBjaGVja0Zhdm9yaXRlUmVjaXBlcygpIHtcbiAgaWYgKHVzZXIuZmF2b3JpdGVSZWNpcGVzLmxlbmd0aCkge1xuICAgIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLm5vRmF2b3JpdGVzTWVzc2FnZSk7XG4gICAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuZmF2b3JpdGVUYWdnZWRSZWNpcGVzQ29udGFpbmVyKTtcbiAgICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy5mYXZvcml0ZVJlY2lwZXNDb250YWluZXIpO1xuXG4gICAgZG9tVXBkYXRlcy5hZGRUYWdzR2xpZGUoKTtcbiAgICBkb21VcGRhdGVzLmFkZFN0eWxpbmcoZG9tVXBkYXRlcy5mYXZvcml0ZXNUYWdzR2xpZGUsICdmZWF0dXJlZF9fc2VhcmNoLWluZ3JlZGllbnQtZ2xpZGUnKTtcbiAgICBkb21VcGRhdGVzLnJlbmRlclJlY2lwZUNhcmRzKGRvbVVwZGF0ZXMuZmF2b3JpdGVSZWNpcGVzQ29udGFpbmVyLCB1c2VyLmZhdm9yaXRlUmVjaXBlcyk7XG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuZmF2b3JpdGVSZWNpcGVzQ29udGFpbmVyKTtcbiAgICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy5ub0Zhdm9yaXRlc01lc3NhZ2UpO1xuICAgIGRvbVVwZGF0ZXMuZmF2b3JpdGVSZWNpcGVzU2VjdGlvbi5yZW1vdmVDaGlsZChkb21VcGRhdGVzLmZhdm9yaXRlc1RhZ3NHbGlkZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcFNlYXJjaChldmVudCkge1xuICBjb25zdCBzZWFyY2hUZXJtID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gIGNoZWNrU2VhcmNoRmllbGQoc2VhcmNoVGVybSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrU2VhcmNoRmllbGQoc2VhcmNoVGVybSkge1xuICBpZiAoIWRvbVVwZGF0ZXMuc2VhcmNoQmFyLnZhbHVlICYmICFkb21VcGRhdGVzLmRpc3BsYXllZFNlYXJjaFJlc3VsdHMuaW5uZXJIVE1MKSB7XG4gICAgcmV0dXJuO1xuXG4gIH0gZWxzZSBpZiAoZG9tVXBkYXRlcy5zZWFyY2hCYXIudmFsdWUpIHtcbiAgICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5ub1Jlc3VsdHMpO1xuICAgIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLmhvbWVWaWV3U2VjdGlvbik7XG4gICAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMud2Vla2x5UmVjaXBlc1NlY3Rpb24pO1xuICAgIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLnRhZ2dlZFJlY2lwZXNDb250YWluZXIpO1xuICAgIGRvbVVwZGF0ZXMuc2hvdyhkb21VcGRhdGVzLnNlYXJjaFJlc3VsdHMpO1xuICAgIGRvbVVwZGF0ZXMuc2hvdyhkb21VcGRhdGVzLmRpc3BsYXllZFNlYXJjaFJlc3VsdHMpO1xuXG4gICAgZG9tVXBkYXRlcy5hZGRTdHlsaW5nKGRvbVVwZGF0ZXMuc2luZ2xlUmVjaXBlVmlldywgJ3NpbmdsZS1yZWNpcGUtdmlldy1hbHQnKTtcbiAgICBkb21VcGRhdGVzLmFkZFN0eWxpbmcoZG9tVXBkYXRlcy5hbGxSZWNpcGVzU2VjdGlvbiwgJ2FsbC1yZWNpcGVzLXZpZXdfX3JlY2lwZXMtY29udGFpbmVyLWFsdCcpO1xuICAgIGRvbVVwZGF0ZXMucmVtb3ZlU3R5bGluZyhkb21VcGRhdGVzLnNpbmdsZVJlY2lwZVZpZXcsICdzaW5nbGUtcmVjaXBlLXZpZXcnKTtcbiAgICBkb21VcGRhdGVzLnJlbW92ZVN0eWxpbmcoZG9tVXBkYXRlcy5hbGxSZWNpcGVzU2VjdGlvbiwgJ2FsbC1yZWNpcGVzLXZpZXdfX3JlY2lwZXMtY29udGFpbmVyJyk7XG5cbiAgICBzZWFyY2hpbmdOb3coc2VhcmNoVGVybSk7XG5cbiAgfSBlbHNlIHtcbiAgICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5kaXNwbGF5ZWRTZWFyY2hSZXN1bHRzKTtcbiAgICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy5ub1Jlc3VsdHMpO1xuICAgIGRvbVVwZGF0ZXMuc2hvdyhkb21VcGRhdGVzLnNlYXJjaFJlc3VsdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlYXJjaGluZ05vdyhzZWFyY2hUZXJtKSB7XG4gIGNvbnN0IGZpbHRlcmVkUmVjaXBlcyA9IHJlY2lwZVJlcG9zaXRvcnkuZmluZFJlY2lwZXNCeU5hbWUoc2VhcmNoVGVybSk7XG4gIGNvbnN0IGZvdW5kUmVjaXBlc0J5SW5ncmVkaWVudCA9IHJlY2lwZVJlcG9zaXRvcnkuZmluZFJlY2lwZXNCeUluZ3JlZGllbnQoc2VhcmNoVGVybSk7XG5cbiAgZm91bmRSZWNpcGVzQnlJbmdyZWRpZW50LmZvckVhY2gocmVjaXBlID0+IHtcbiAgICBpZiAoIWZpbHRlcmVkUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICBmaWx0ZXJlZFJlY2lwZXMucHVzaChyZWNpcGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9tVXBkYXRlcy5yZW5kZXJSZWNpcGVDYXJkcyhkb21VcGRhdGVzLmRpc3BsYXllZFNlYXJjaFJlc3VsdHMsIGZpbHRlcmVkUmVjaXBlcyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIb21lVmlldygpIHtcbiAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMubm9SZXN1bHRzKTtcbiAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuc2VhcmNoUmVzdWx0cyk7XG4gIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLnNpbmdsZVJlY2lwZVZpZXcpO1xuICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5hbGxSZWNpcGVzU2VjdGlvbik7XG4gIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLndlZWtseVJlY2lwZXNTZWN0aW9uKTtcbiAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuZGlzcGxheWVkU2VhcmNoUmVzdWx0cyk7XG4gIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLmZhdm9yaXRlUmVjaXBlc1NlY3Rpb24pO1xuICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy5ob21lVmlld1NlY3Rpb24pO1xuICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy50YWdnZWRSZWNpcGVzQ29udGFpbmVyKTtcbiAgY2xlYXJUYWdzKCk7XG4gIGRvbVVwZGF0ZXMuYWRkU3R5bGluZyhkb21VcGRhdGVzLnNpbmdsZVJlY2lwZVZpZXcsICdzaW5nbGUtcmVjaXBlLXZpZXcnKTtcbiAgZG9tVXBkYXRlcy5hZGRTdHlsaW5nKGRvbVVwZGF0ZXMuYWxsUmVjaXBlc1NlY3Rpb24sICdhbGwtcmVjaXBlcy12aWV3X19yZWNpcGVzLWNvbnRhaW5lcicpO1xuICBkb21VcGRhdGVzLnJlbW92ZVN0eWxpbmcoZG9tVXBkYXRlcy5zaW5nbGVSZWNpcGVWaWV3LCAnc2luZ2xlLXJlY2lwZS12aWV3LWFsdCcpO1xuICBkb21VcGRhdGVzLnJlbW92ZVN0eWxpbmcoZG9tVXBkYXRlcy5hbGxSZWNpcGVzU2VjdGlvbiwgJ2FsbC1yZWNpcGVzLXZpZXdfX3JlY2lwZXMtY29udGFpbmVyLWFsdCcpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsUmVjaXBlcygpIHtcbiAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuc2VhcmNoUmVzdWx0cyk7XG4gIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLmhvbWVWaWV3U2VjdGlvbik7XG4gIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLnNpbmdsZVJlY2lwZVZpZXcpO1xuICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy53ZWVrbHlSZWNpcGVzU2VjdGlvbik7XG4gIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLmZhdm9yaXRlUmVjaXBlc1NlY3Rpb24pO1xuICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy5hbGxSZWNpcGVzU2VjdGlvbik7XG5cbiAgZG9tVXBkYXRlcy5hZGRTdHlsaW5nKGRvbVVwZGF0ZXMuc2luZ2xlUmVjaXBlVmlldywgJ3NpbmdsZS1yZWNpcGUtdmlldycpO1xuICBkb21VcGRhdGVzLmFkZFN0eWxpbmcoZG9tVXBkYXRlcy5hbGxSZWNpcGVzU2VjdGlvbiwgJ2FsbC1yZWNpcGVzLXZpZXdfX3JlY2lwZXMtY29udGFpbmVyJyk7XG4gIGRvbVVwZGF0ZXMucmVtb3ZlU3R5bGluZyhkb21VcGRhdGVzLnNpbmdsZVJlY2lwZVZpZXcsICdzaW5nbGUtcmVjaXBlLXZpZXctYWx0Jyk7XG4gIGRvbVVwZGF0ZXMucmVtb3ZlU3R5bGluZyhkb21VcGRhdGVzLmFsbFJlY2lwZXNTZWN0aW9uLCAnYWxsLXJlY2lwZXMtdmlld19fcmVjaXBlcy1jb250YWluZXItYWx0Jyk7XG5cbiAgc29ydFJlY2lwZXNCeU5hbWUoKTtcbiAgZG9tVXBkYXRlcy5yZW5kZXJSZWNpcGVDYXJkcyhkb21VcGRhdGVzLmFsbFJlY2lwZXNDb250YWluZXIsIHJlY2lwZVJlcG9zaXRvcnkucmVjaXBlcyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSZWNpcGUoZXZlbnQpIHtcbiAgY29uc3QgY2FyZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhcnRpY2xlJyk7XG5cbiAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWNpcGVzLWNvbnRhaW5lcl9fcmVjaXBlLWNhcmQnKSkge1xuICAgIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLmhvbWVWaWV3U2VjdGlvbik7XG4gICAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuYWxsUmVjaXBlc1NlY3Rpb24pO1xuICAgIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLndlZWtseVJlY2lwZXNTZWN0aW9uKTtcbiAgICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5mYXZvcml0ZVJlY2lwZXNTZWN0aW9uKTtcbiAgICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy5zaW5nbGVSZWNpcGVWaWV3KTtcbiAgICByZW5kZXJJbmRpdmlkdWFsUmVjaXBlKGNhcmQuaWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvV2Vla2x5UmVjaXBlcygpIHtcbiAgY29uc3QgcmVjaXBlID0gZmluZFJlY2lwZVRpdGxlKCk7XG4gIHVzZXIuYWRkV2Vla2x5UmVjaXBlKHJlY2lwZSk7XG5cbiAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuYWRkVG9XZWVrQnV0dG9uKTtcbiAgZG9tVXBkYXRlcy5zaG93KGRvbVVwZGF0ZXMucmVtb3ZlRnJvbVdlZWtCdXR0b24pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tV2Vla2x5UmVjaXBlcygpIHtcbiAgY29uc3QgcmVjaXBlID0gZmluZFJlY2lwZVRpdGxlKCk7XG4gIHVzZXIucmVtb3ZlV2Vla2x5UmVjaXBlKHJlY2lwZSk7XG5cbiAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMucmVtb3ZlRnJvbVdlZWtCdXR0b24pO1xuICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy5hZGRUb1dlZWtCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVjaXBlVGl0bGUoKSB7XG4gIGNvbnN0IHJlY2lwZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZS10aXRsZScpLmlubmVyVGV4dDtcbiAgY29uc3QgcmVjaXBlcyA9IHJlY2lwZVJlcG9zaXRvcnkuZmluZFJlY2lwZXNCeU5hbWUocmVjaXBlVGl0bGUudG9Mb3dlckNhc2UoKSk7XG4gIHJldHVybiByZWNpcGVzWzBdO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2Vla2x5UmVjaXBlcygpIHtcbiAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuaG9tZVZpZXdTZWN0aW9uKTtcbiAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuc2luZ2xlUmVjaXBlVmlldyk7XG4gIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLmFsbFJlY2lwZXNTZWN0aW9uKTtcbiAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuZmF2b3JpdGVSZWNpcGVzU2VjdGlvbik7XG4gIGRvbVVwZGF0ZXMuc2hvdyhkb21VcGRhdGVzLndlZWtseVJlY2lwZXNTZWN0aW9uKTtcblxuICBjaGVja1dlZWtseUZhdm9yaXRlcygpO1xufVxuXG5mdW5jdGlvbiBjaGVja1dlZWtseUZhdm9yaXRlcygpIHtcbiAgaWYgKCF1c2VyLndlZWtseUZhdm9yaXRlcy5sZW5ndGgpIHtcbiAgICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy53ZWVrbHlSZWNpcGVzKTtcbiAgICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy5ub1dlZWtseVJlY2lwZXMpO1xuXG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMubm9XZWVrbHlSZWNpcGVzKTtcbiAgICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy53ZWVrbHlSZWNpcGVzKTtcblxuICAgIGRvbVVwZGF0ZXMucmVuZGVyUmVjaXBlQ2FyZHMoZG9tVXBkYXRlcy53ZWVrbHlSZWNpcGVzLCB1c2VyLndlZWtseUZhdm9yaXRlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0VGFnKGV2ZW50KSB7XG4gIGNvbnN0IHRhZ0VsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJyk7XG4gIGNvbnN0IHRhZyA9IHRhZ0VsZW1lbnQudmFsdWU7XG5cbiAgdG9nZ2xlVGFnKHRhZywgdGFnRWxlbWVudCk7XG4gIGlmICh0YWdFbGVtZW50LnBhcmVudE5vZGUuaWQgPT09ICdmYXZvcml0ZVNlYXJjaEdsaWRlJykge1xuICAgIHVwZGF0ZUZhdm9yaXRlcygpO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZU1haW4oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVGYXZvcml0ZXMoKSB7XG4gIGlmICh0YWdzLmxlbmd0aCkge1xuICAgIGNvbnN0IGZpbHRlcmVkUmVjaXBlcyA9IHVzZXIuZmlsdGVyRmF2b3JpdGVSZWNpcGVzQnlUYWdzKHRhZ3MpO1xuICAgIGRvbVVwZGF0ZXMucmVuZGVyUmVjaXBlQ2FyZHMoZG9tVXBkYXRlcy5mYXZvcml0ZVRhZ2dlZFJlY2lwZXNDb250YWluZXIsIGZpbHRlcmVkUmVjaXBlcyk7XG5cbiAgICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5mYXZvcml0ZVJlY2lwZXNDb250YWluZXIpO1xuICAgIGRvbVVwZGF0ZXMuc2hvdyhkb21VcGRhdGVzLmZhdm9yaXRlVGFnZ2VkUmVjaXBlc0NvbnRhaW5lcik7XG5cbiAgfSBlbHNlIHtcbiAgICBkb21VcGRhdGVzLnJlbW92ZUFsbFJlY2lwZUNhcmRzKCk7XG5cbiAgICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5mYXZvcml0ZVRhZ2dlZFJlY2lwZXNDb250YWluZXIpO1xuICAgIGNoZWNrRmF2b3JpdGVSZWNpcGVzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTWFpbigpIHtcbiAgaWYgKHRhZ3MubGVuZ3RoKSB7XG4gICAgY29uc3QgZmlsdGVyZWRSZWNpcGVzID0gcmVjaXBlUmVwb3NpdG9yeS5maW5kUmVjaXBlc0J5VGFnKHRhZ3MpO1xuICAgIGRvbVVwZGF0ZXMucmVuZGVyUmVjaXBlQ2FyZHMoZG9tVXBkYXRlcy50YWdnZWRSZWNpcGVzQ29udGFpbmVyLCBmaWx0ZXJlZFJlY2lwZXMpO1xuXG4gICAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMubm9SZXN1bHRzKTtcbiAgICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5zZWFyY2hSZXN1bHRzKTtcbiAgICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5zaW5nbGVSZWNpcGVWaWV3KTtcbiAgICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5hbGxSZWNpcGVzU2VjdGlvbik7XG4gICAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMud2Vla2x5UmVjaXBlc1NlY3Rpb24pO1xuICAgIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLmZhdm9yaXRlUmVjaXBlc1NlY3Rpb24pO1xuICAgIGRvbVVwZGF0ZXMuaGlkZShkb21VcGRhdGVzLmRpc3BsYXllZFNlYXJjaFJlc3VsdHMpO1xuICAgIGRvbVVwZGF0ZXMuc2hvdyhkb21VcGRhdGVzLmhvbWVWaWV3U2VjdGlvbik7XG4gICAgZG9tVXBkYXRlcy5zaG93KGRvbVVwZGF0ZXMudGFnZ2VkUmVjaXBlc0NvbnRhaW5lcik7XG5cbiAgfSBlbHNlIHtcbiAgICBkb21VcGRhdGVzLnJlbW92ZUFsbFJlY2lwZUNhcmRzKCk7XG5cbiAgICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy50YWdnZWRSZWNpcGVzQ29udGFpbmVyKTtcbiAgICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy5ob21lVmlld0ltYWdlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRhZyh0YWcsIHRhZ0VsZW1lbnQpIHtcbiAgaWYgKCF0YWdzLmluY2x1ZGVzKHRhZykpIHtcbiAgICBhZGRUYWcodGFnKTtcblxuICB9IGVsc2Uge1xuICAgIHJlbW92ZVRhZyh0YWcpO1xuICB9XG4gIHRhZ0VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgndGFnLXNlbGVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhZyh0YWcpIHtcbiAgdGFncy5wdXNoKHRhZyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhZyh0YWcpIHtcbiAgdGFncyA9IHRhZ3MuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQgPT09IHRhZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVySW5kaXZpZHVhbFJlY2lwZShyZWNpcGVJZCkge1xuICBjb25zdCByZWNpcGUgPSByZWNpcGVSZXBvc2l0b3J5LnJlY2lwZXMuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBwYXJzZUludChyZWNpcGVJZCkpO1xuXG4gIGRvbVVwZGF0ZXMuaW5kaXZpZHVhbFJlY2lwZUludGVycG9sYXRpb24ocmVjaXBlKTtcblxuICBjcmVhdGVJbmdyZWRpZW50TGlzdChyZWNpcGUpO1xuICBjcmVhdGVJbnN0cnVjdGlvbkxpc3QocmVjaXBlKTtcbiAgY2hlY2tJZlJlY2lwZUluV2Vla2x5KHJlY2lwZSk7XG4gIGNoZWNrSWZSZWNpcGVJbkZhdm9yaXRlcyhyZWNpcGUpO1xuICBjb25zdCBwYW50cnlJbmdyZWRpZW50cyA9IHVzZXIucmV0dXJuUGFudHJ5SW5ncmVkaWVudHMoKTtcbiAgZG9tVXBkYXRlcy5yZW5kZXJQYW50cnlJbmdyZWRpZW50cyhwYW50cnlJbmdyZWRpZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZSZWNpcGVJbldlZWtseShyZWNpcGUpIHtcbiAgY29uc3QgbWF0Y2hpbmdSZWNpcGUgPSB1c2VyLndlZWtseUZhdm9yaXRlcy5maW5kKCh3ZWVrbHlSZWNpcGUpID0+IHdlZWtseVJlY2lwZS5pZCA9PT0gcmVjaXBlLmlkKTtcbiAgaWYgKG1hdGNoaW5nUmVjaXBlKSB7XG4gICAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuYWRkVG9XZWVrQnV0dG9uKTtcbiAgICBkb21VcGRhdGVzLnNob3coZG9tVXBkYXRlcy5yZW1vdmVGcm9tV2Vla0J1dHRvbik7XG5cbiAgfSBlbHNlIHtcbiAgICBkb21VcGRhdGVzLmhpZGUoZG9tVXBkYXRlcy5yZW1vdmVGcm9tV2Vla0J1dHRvbik7XG4gICAgZG9tVXBkYXRlcy5zaG93KGRvbVVwZGF0ZXMuYWRkVG9XZWVrQnV0dG9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0lmUmVjaXBlSW5GYXZvcml0ZXMocmVjaXBlKSB7XG4gIGlmICh1c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMuYWRkVG9GYXZvcml0ZXNCdXR0b24pO1xuICAgIGRvbVVwZGF0ZXMuc2hvdyhkb21VcGRhdGVzLnJlbW92ZUZyb21GYXZvcml0ZXNCdXR0b24pO1xuXG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlcy5oaWRlKGRvbVVwZGF0ZXMucmVtb3ZlRnJvbUZhdm9yaXRlc0J1dHRvbik7XG4gICAgZG9tVXBkYXRlcy5zaG93KGRvbVVwZGF0ZXMuYWRkVG9GYXZvcml0ZXNCdXR0b24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZ3JlZGllbnRMaXN0KHJlY2lwZSkge1xuICBjb25zdCBpbmdyZWRpZW50TGlzdCA9IHJlY2lwZS5yZXR1cm5JbmdyZWRpZW50c0xpc3QoKTtcbiAgZG9tVXBkYXRlcy5yZW5kZXJSZWNpcGVJbmdyZWRpZW50cyhpbmdyZWRpZW50TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluc3RydWN0aW9uTGlzdChyZWNpcGUpIHtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zTGlzdCA9IHJlY2lwZS5yZXR1cm5JbnN0cnVjdGlvbnMoKTtcbiAgZG9tVXBkYXRlcy5yZW5kZXJSZWNpcGVJbnN0cnVjdGlvbnMoaW5zdHJ1Y3Rpb25zTGlzdCk7XG59XG5cbmZ1bmN0aW9uIHNvcnRSZWNpcGVzQnlOYW1lKCkge1xuICByZWNpcGVSZXBvc2l0b3J5LnJlY2lwZXMuc29ydCgoYSwgYikgPT4gYS5uYW1lIC0gYi5uYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYWdzKCkge1xuICB0YWdzID0gW107XG4gIGRvbVVwZGF0ZXMucmVtb3ZlVGFnU2VsZWN0aW9uKClcbn1cblxuZnVuY3Rpb24gZGlzcGxheU1vZGFsKCkge1xuICBjb25zdCBjdXJyZW50UmVjaXBlID0gZmluZFJlY2lwZVRpdGxlKCk7XG4gIGlmICh1c2VyLmNoZWNrVXNlclBhbnRyeShjdXJyZW50UmVjaXBlKSkge1xuICAgIE1pY3JvTW9kYWwuc2hvdyhcIm1vZGFsLTJcIilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBuZWVkZWRJbmdyZWRpZW50cyA9IHVzZXIucmV0dXJuTmVlZGVkSW5ncmVkaWVudHMoY3VycmVudFJlY2lwZSk7XG4gICAgZG9tVXBkYXRlcy5yZW5kZXJOZWVkZWRJbmdyZWRpZW50cyhuZWVkZWRJbmdyZWRpZW50cyk7XG4gICAgTWljcm9Nb2RhbC5zaG93KFwibW9kYWwtMVwiKVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUluZ3JlZGllbnRzKGluZ3JlZGllbnRzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChcbiAgICBpbmdyZWRpZW50cy5tYXAoKGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGFsdGVySW5ncmVkaWVudHModXNlci5pZCwgaW5ncmVkaWVudC5pZCwgaW5ncmVkaWVudC5hbW91bnQpXG4gICAgfSlcbiAgKVxufVxuXG5mdW5jdGlvbiBhZGRJbmdyZWRpZW50cygpIHtcbiAgY29uc3QgY3VycmVudFJlY2lwZSA9IGZpbmRSZWNpcGVUaXRsZSgpO1xuICBjb25zdCBuZWVkZWRJbmdyZWRpZW50cyA9IHVzZXIucmV0dXJuTmVlZGVkSW5ncmVkaWVudHMoY3VycmVudFJlY2lwZSk7XG5cbiAgdXBkYXRlSW5ncmVkaWVudHMobmVlZGVkSW5ncmVkaWVudHMpXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICB1c2VyLmFkZEluZ3JlZGllbnRBbW91bnQobmVlZGVkSW5ncmVkaWVudHMpO1xuICAgIGNvbnN0IHBhbnRyeUluZ3JlZGllbnRzID0gdXNlci5yZXR1cm5QYW50cnlJbmdyZWRpZW50cygpO1xuICAgIGRvbVVwZGF0ZXMucmVuZGVyUGFudHJ5SW5ncmVkaWVudHMocGFudHJ5SW5ncmVkaWVudHMpO1xuICAgIE1pY3JvTW9kYWwuY2xvc2UoXCJtb2RhbC0xXCIpO1xuICAgIE1pY3JvTW9kYWwuc2hvdyhcIm1vZGFsLTJcIik7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHVzZUluZ3JlZGllbnRzKCkge1xuICBjb25zdCBjdXJyZW50UmVjaXBlID0gZmluZFJlY2lwZVRpdGxlKCk7XG5cbiAgdXBkYXRlSW5ncmVkaWVudHMoY3VycmVudFJlY2lwZS5pbmdyZWRpZW50cylcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIHVzZXIuc3VidHJhY3RJbmdyZWRpZW50QW1vdW50KGN1cnJlbnRSZWNpcGUuaW5ncmVkaWVudHMpO1xuICAgIGNvbnN0IHBhbnRyeUluZ3JlZGllbnRzID0gdXNlci5yZXR1cm5QYW50cnlJbmdyZWRpZW50cygpO1xuICAgIGRvbVVwZGF0ZXMucmVuZGVyUGFudHJ5SW5ncmVkaWVudHMocGFudHJ5SW5ncmVkaWVudHMpO1xuICAgIE1pY3JvTW9kYWwuY2xvc2UoXCJtb2RhbC0yXCIpO1xuICB9KVxufVxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9