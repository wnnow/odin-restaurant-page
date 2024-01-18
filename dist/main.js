/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pizza_wallpaper.jpg */ "./src/images/pizza_wallpaper.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

* {
  margin: 0;
  padding: 0;
}

body {
  max-width: 100dvw;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: repeat;
  background-size: 400px auto;
}

.navbar-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #242424;
  border-bottom: 2px dotted #909090;
  margin-bottom: 16px;
}

.navbar {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.navbar > div {
  background-color: #ffffff;
  padding: 8px 16px;
  border-radius: 10px;
  color: #2b292a;
  width: 80px;
  text-align: center;
  cursor: pointer;
}
.navbar > div:hover {
  background-color: rgb(231, 231, 231);
}

.main-content {
  padding: 16px;
  border-radius: 15px;
  width: 80%;
  margin: 0 auto;
}

.main-content-header {
  font-size: 3rem;
  margin-bottom: 16px;
  text-align: center;
  border: 2px solid #fff;
  border-radius: 17px;
  font-weight: 600;
  background-color: #2b292a;
  padding: 24px;
}

.main-content-sub-container {
  border: 2px solid #ffffff;
  border-radius: 17px;
  padding: 24px;
  margin-bottom: 16px;
  background-color: #2b292a;
  font-size: 1.25rem;
  text-justify: inter-word;
}
.main-content-header,
.main-content-sub-container {
  color: #ffffff;
}
.content-header-text {
  font-size: 1.25rem;
  font-weight: 600;
}
.main-content-container {
  margin: 0 auto;
}

.main-content > div {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 50px;
  text-align: center;
}

/* menu section */
.menu-container {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.menu-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
}

.menu-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-around;
}

.menu-header-text {
  font-size: 1.5rem;
  margin-bottom: 16px;
}

@media screen and (max-width: 900px) {
  /* Home section */
  .main-content {
    width: 80%;
    margin: 0 auto;
  }
  .main-content-container {
    width: 100%;
  }
  .main-content > div {
    width: 100%;
  }
  .main-content-sub-container {
    padding: 16px;
    font-size: 1rem;
  }
  .main-content-header {
    padding: 16px;
    font-size: 2rem;
  }
  /* menu section */
  .menu-container {
    flex-direction: column;
  }
  .menu-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,sBAAsB;EACtB,iCAAiC;AACnC;AACA;;;EAGE,2BAA2B;EAC3B,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,mDAA6C;EAC7C,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,yBAAyB;EACzB,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;;EAEE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB;IACE,UAAU;IACV,cAAc;EAChB;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;IACE,aAAa;IACb,eAAe;EACjB;EACA;IACE,aAAa;IACb,eAAe;EACjB;EACA,iBAAiB;EACjB;IACE,sBAAsB;EACxB;EACA;IACE,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,mBAAmB;EACrB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  max-width: 100dvw;\n  background: url(./images/pizza_wallpaper.jpg);\n  background-repeat: repeat;\n  background-size: 400px auto;\n}\n\n.navbar-container {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  background-color: #242424;\n  border-bottom: 2px dotted #909090;\n  margin-bottom: 16px;\n}\n\n.navbar {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n}\n\n.navbar > div {\n  background-color: #ffffff;\n  padding: 8px 16px;\n  border-radius: 10px;\n  color: #2b292a;\n  width: 80px;\n  text-align: center;\n  cursor: pointer;\n}\n.navbar > div:hover {\n  background-color: rgb(231, 231, 231);\n}\n\n.main-content {\n  padding: 16px;\n  border-radius: 15px;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.main-content-header {\n  font-size: 3rem;\n  margin-bottom: 16px;\n  text-align: center;\n  border: 2px solid #fff;\n  border-radius: 17px;\n  font-weight: 600;\n  background-color: #2b292a;\n  padding: 24px;\n}\n\n.main-content-sub-container {\n  border: 2px solid #ffffff;\n  border-radius: 17px;\n  padding: 24px;\n  margin-bottom: 16px;\n  background-color: #2b292a;\n  font-size: 1.25rem;\n  text-justify: inter-word;\n}\n.main-content-header,\n.main-content-sub-container {\n  color: #ffffff;\n}\n.content-header-text {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.main-content-container {\n  margin: 0 auto;\n}\n\n.main-content > div {\n  width: 50%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n/* menu section */\n.menu-container {\n  display: flex;\n  gap: 16px;\n  margin-top: 16px;\n}\n\n.menu-image {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 15px;\n}\n\n.menu-info {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  justify-content: space-around;\n}\n\n.menu-header-text {\n  font-size: 1.5rem;\n  margin-bottom: 16px;\n}\n\n@media screen and (max-width: 900px) {\n  /* Home section */\n  .main-content {\n    width: 80%;\n    margin: 0 auto;\n  }\n  .main-content-container {\n    width: 100%;\n  }\n  .main-content > div {\n    width: 100%;\n  }\n  .main-content-sub-container {\n    padding: 16px;\n    font-size: 1rem;\n  }\n  .main-content-header {\n    padding: 16px;\n    font-size: 2rem;\n  }\n  /* menu section */\n  .menu-container {\n    flex-direction: column;\n  }\n  .menu-image {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 15px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactComponent: () => (/* binding */ createContactComponent)
/* harmony export */ });
function createContactComponent() {
  const email = document.createElement("div");
  email.textContent = "Email: sales@slicehaven.com";
  email.classList.add("contact-text");

  const fax = document.createElement("div");
  fax.textContent = "Fax: (+123)123-456-987";
  fax.classList.add("contact-text");

  const phone = document.createElement("div");
  phone.textContent = "Phone: (+123)123-456-789";
  phone.classList.add("contact-text");

  const mainContact2 = document.createElement("div");
  mainContact2.classList.add("main-content-sub-container");
  mainContact2.appendChild(phone);
  mainContact2.appendChild(fax);
  mainContact2.appendChild(email);

  const addressLine3 = document.createElement("div");
  addressLine3.textContent = "Wakanda,4EV 987654321";
  const addressLine2 = document.createElement("div");
  addressLine2.textContent = "10001 123 Piz Za";
  const addressLine1 = document.createElement("div");
  addressLine1.textContent = "Slice Haven, Inc.";

  const mainContact1 = document.createElement("div");
  mainContact1.classList.add("main-content-sub-container");
  mainContact1.appendChild(addressLine1);
  mainContact1.appendChild(addressLine2);
  mainContact1.appendChild(addressLine3);

  const mainContentHeader = document.createElement("div");
  mainContentHeader.classList.add("main-content-header");
  mainContentHeader.textContent = "Contact Us";

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  mainContent.appendChild(mainContentHeader);
  mainContent.appendChild(mainContact1);
  mainContent.appendChild(mainContact2);

  return mainContent;
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomeContent: () => (/* binding */ createHomeContent)
/* harmony export */ });
function createHomeContent() {
  const mainContentHeader = document.createElement("div");

  mainContentHeader.classList.add("main-content-header");
  mainContentHeader.textContent = '"Slice Haven"';

  const mainContentSubContainer1 = document.createElement("div");

  mainContentSubContainer1.classList.add("main-content-sub-container");
  mainContentSubContainer1.textContent = ` Welcome to Slice Haven, where each pizza is a masterpiece! From
  classic Margheritas to BBQ Chicken delights, we've got a slice for
  every taste.
  Our chefs craft perfection with fresh ingredients, creating a
  symphony of flavor. Whether sharing a meal or grabbing a quick bite,
  savor the joy of great pizza at Slice Haven.Join us for
  the art of good food, good company, and good times. Indulge in the
  passion, relish the flavor—welcome to Slice Haven!`;

  const contentHeaderText = document.createElement("div");
  contentHeaderText.textContent = "Hours";
  contentHeaderText.classList.add("content-header-text");

  const weekday = document.createElement("div");
  weekday.textContent = ` Monday - Friday:
  11:00 AM - 9:00 PM`;

  const weekend = document.createElement("div");
  weekend.textContent = `  Saturday - Sunday:
  12:00 PM - 10:00 PM`;

  const mainContentSubContainer2 = document.createElement("div");
  mainContentSubContainer2.classList.add("main-content-sub-container");
  mainContentSubContainer2.appendChild(contentHeaderText);
  mainContentSubContainer2.appendChild(weekday);
  mainContentSubContainer2.appendChild(weekend);

  const contentHeaderText2 = document.createElement("div");
  contentHeaderText2.textContent = "Location";
  contentHeaderText2.classList.add("content-header-text");

  const location = document.createElement("div");
  location.textContent = "123 Pizza, Heaven 123456";

  const mainContentSubContainer3 = document.createElement("div");
  mainContentSubContainer3.classList.add("main-content-sub-container");

  mainContentSubContainer3.appendChild(contentHeaderText2);
  mainContentSubContainer3.appendChild(location);

  const mainHomeContent = document.createElement("div");
  mainHomeContent.classList.add("main-content");
  mainHomeContent.appendChild(mainContentHeader);
  mainHomeContent.appendChild(mainContentSubContainer1);
  mainHomeContent.appendChild(mainContentSubContainer2);
  mainHomeContent.appendChild(mainContentSubContainer3);
  return mainHomeContent;
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuContent: () => (/* binding */ createMenuContent)
/* harmony export */ });
/* harmony import */ var _images_pizza_magherita_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizza_magherita.jpg */ "./src/images/pizza_magherita.jpg");
/* harmony import */ var _images_classic_cheese_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/classic-cheese-pizza.jpg */ "./src/images/classic-cheese-pizza.jpg");
/* harmony import */ var _images_BBQ_chicken_pizza_recipe_9_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/BBQ-chicken-pizza-recipe-9.jpg */ "./src/images/BBQ-chicken-pizza-recipe-9.jpg");




function createMenuContent() {
  const pizzaIngredients1 = document.createElement("div");
  pizzaIngredients1.textContent = ` Fresh Garlic, Extra Virgin Olive Oil, Basil, Fresh Roma,
  Tomato Sauce, Romano & Mozzarella`;
  pizzaIngredients1.classList.add("ingredient");

  const pizzaPrice1 = document.createElement("div");
  pizzaPrice1.textContent = `$15`;

  const menuInfo1 = document.createElement("div");
  menuInfo1.classList.add("menu-info");
  menuInfo1.appendChild(pizzaIngredients1);
  menuInfo1.appendChild(pizzaPrice1);

  const pizza_magherita = new Image();
  pizza_magherita.src = _images_pizza_magherita_jpg__WEBPACK_IMPORTED_MODULE_0__;
  pizza_magherita.setAttribute("alt", "Margherita Pizza");
  pizza_magherita.classList.add("menu-image");

  const menuContainer1 = document.createElement("div");
  menuContainer1.appendChild(pizza_magherita);
  menuContainer1.appendChild(menuInfo1);

  const menuHeaderText1 = document.createElement("div");
  menuHeaderText1.textContent = "Margherita";
  menuHeaderText1.classList.add("menu-header-text");

  const mainContentSubContainer1 = document.createElement("div");
  mainContentSubContainer1.classList.add("main-content-sub-container");
  mainContentSubContainer1.appendChild(menuHeaderText1);
  mainContentSubContainer1.appendChild(menuContainer1);

  const pizzaIngredients2 = document.createElement("div");
  pizzaIngredients2.textContent = `  Garlic Base, Romano Cheese, Sliced Provolone, Shredded
  Mozarella & Ricotta Cheese`;
  pizzaIngredients2.classList.add("ingredient");

  const pizzaPrice2 = document.createElement("div");
  pizzaPrice2.textContent = `$20`;

  const menuInfo2 = document.createElement("div");
  menuInfo2.classList.add("menu-info");
  menuInfo2.appendChild(pizzaIngredients2);
  menuInfo2.appendChild(pizzaPrice2);

  const pizza_cheese = new Image();
  pizza_cheese.src = _images_classic_cheese_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__;
  pizza_cheese.setAttribute("alt", "Classic cheese pizza");
  pizza_cheese.classList.add("menu-image");

  const menuContainer2 = document.createElement("div");
  menuContainer2.appendChild(pizza_cheese);
  menuContainer2.appendChild(menuInfo2);

  const menuHeaderText2 = document.createElement("div");
  menuHeaderText2.textContent = "Classic Cheese Pizza";
  menuHeaderText2.classList.add("menu-header-text");

  const mainContentSubContainer2 = document.createElement("div");
  mainContentSubContainer2.classList.add("main-content-sub-container");
  mainContentSubContainer2.appendChild(menuHeaderText2);
  mainContentSubContainer2.appendChild(menuContainer2);

  const pizzaIngredients3 = document.createElement("div");
  pizzaIngredients3.textContent = `Cannonball BBQ Sauce Base, Grill Chicken Mixed in Cannonball
  BBQ Sauce & Shredded Mozzarella Cheese`;
  pizzaIngredients3.classList.add("ingredient");

  const pizzaPrice3 = document.createElement("div");
  pizzaPrice3.textContent = `$19.99`;

  const menuInfo3 = document.createElement("div");
  menuInfo3.classList.add("menu-info");
  menuInfo3.appendChild(pizzaIngredients3);
  menuInfo3.appendChild(pizzaPrice3);

  const pizza_bbq_chicken = new Image();
  pizza_bbq_chicken.src = _images_BBQ_chicken_pizza_recipe_9_jpg__WEBPACK_IMPORTED_MODULE_2__;
  pizza_bbq_chicken.setAttribute("alt", "BBQ Chicken Pizza");
  pizza_bbq_chicken.classList.add("menu-image");

  const menuContainer3 = document.createElement("div");
  menuContainer3.appendChild(pizza_bbq_chicken);
  menuContainer3.appendChild(menuInfo3);

  const menuHeaderText3 = document.createElement("div");
  menuHeaderText3.textContent = "BBQ Chicken Pizza";
  menuHeaderText3.classList.add("menu-header-text");

  const mainContentSubContainer3 = document.createElement("div");
  mainContentSubContainer3.classList.add("main-content-sub-container");
  mainContentSubContainer3.appendChild(menuHeaderText3);
  mainContentSubContainer3.appendChild(menuContainer3);

  const mainContentHeader = document.createElement("div");
  mainContentHeader.textContent = "Menu";
  mainContentHeader.classList.add("main-content-header");

  const mainMenuContent = document.createElement("div");
  mainMenuContent.classList.add("main-content");

  mainMenuContent.appendChild(mainContentHeader);
  mainMenuContent.appendChild(mainContentSubContainer1);
  mainMenuContent.appendChild(mainContentSubContainer2);
  mainMenuContent.appendChild(mainContentSubContainer3);

  return mainMenuContent;
}



//  try to generate pizza by createPizzaMenu
// function createMenuContent() {
//   const pizza1 = createPizzaMenu(
//     "Margherita",
//     ` Fresh Garlic, Extra Virgin Olive Oil, Basil, Fresh Roma,
//   Tomato Sauce, Romano & Mozzarella`,
//     15,
//     Pizza_magherita,
//     "Pizza Margherita"
//   );

//   const pizza2 = createPizzaMenu(
//     "Classic Cheese",
//     `Garlic Base, Romano Cheese, Sliced Provolone, Shredded
//   Mozarella & Ricotta Cheese`,
//     19.99,
//     Pizza_cheese,
//     "Classic Cheese"
//   );
//   const pizza3 = createPizzaMenu(
//     "BBQ Chicken",
//     `Cannonball BBQ Sauce Base, Grill Chicken Mixed in Cannonball
//   BBQ Sauce & Shredded Mozzarella Cheese`,
//     19.99,
//     Pizza_bbq_chicken,
//     "BBQ Chicken Pizza"
//   );
//   const mainContentHeader = document.createElement("div");
//   mainContentHeader.textContent = "Menu";
//   mainContentHeader.classList.add("main-content-header");

//   const mainMenuContent = document.createElement("div");
//   mainMenuContent.classList.add("main-content");

//   mainMenuContent.appendChild(mainContentHeader);
//   mainMenuContent.appendChild(pizza1);
//   mainMenuContent.appendChild(pizza2);
//   mainMenuContent.appendChild(pizza3);
//   return mainMenuContent;
// }

// function createPizzaMenu(name, ingredients, price, imgSrc, imgAlt) {
//   const pizzaIngredients = document.createElement("div");
//   pizzaIngredients.textContent = ingredients;
//   pizzaIngredients.classList.add("ingredient");

//   const pizzaPrice = document.createElement("div");
//   pizzaPrice.textContent = `$${price}`;

//   const menuInfo = document.createElement("div");
//   menuInfo.classList.add("menu-info");
//   menuInfo.appendChild(pizzaIngredients);
//   menuInfo.appendChild(pizzaPrice);

//   const pizzaImage = new Image();
//   pizzaImage.src = imgSrc;
//   pizzaImage.setAttribute("src", imgAlt);
//   pizzaImage.classList.add("menu-image");

//   const menuContainer = document.createElement("div");
//   menuContainer.appendChild(pizzaImage, menuInfo);

//   const menuHeaderText = document.createElement("div");
//   menuHeaderText.textContent = name;
//   menuHeaderText.classList.add("menu-header-text");

//   const mainContentSubContainer = document.createElement("div");
//   mainContentSubContainer.classList.add("main-content-sub-container");
//   mainContentSubContainer.appendChild(menuHeaderText, menuContainer);

//   return mainContentSubContainer;
// }


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavbar: () => (/* binding */ createNavbar)
/* harmony export */ });
function createNavbar() {
  const contactDiv = document.createElement("div");
  contactDiv.textContent = "Contact";
  contactDiv.classList.add("contact");

  const menuDiv = document.createElement("div");
  menuDiv.textContent = "Menu";
  menuDiv.classList.add("menu");

  const homeDiv = document.createElement("div");
  homeDiv.textContent = "Home";
  homeDiv.classList.add("home");

  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  navbar.appendChild(homeDiv);
  navbar.appendChild(menuDiv);
  navbar.appendChild(contactDiv);

  const navbarContainer = document.createElement("div");
  navbarContainer.classList.add("navbar-container");
  navbarContainer.appendChild(navbar);

  return navbarContainer;
}




/***/ }),

/***/ "./src/images/BBQ-chicken-pizza-recipe-9.jpg":
/*!***************************************************!*\
  !*** ./src/images/BBQ-chicken-pizza-recipe-9.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b83d86b17fa53ba317e3.jpg";

/***/ }),

/***/ "./src/images/classic-cheese-pizza.jpg":
/*!*********************************************!*\
  !*** ./src/images/classic-cheese-pizza.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0edc2f78caca146e9e4d.jpg";

/***/ }),

/***/ "./src/images/pizza_magherita.jpg":
/*!****************************************!*\
  !*** ./src/images/pizza_magherita.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74c542b3463152b2bdc0.jpg";

/***/ }),

/***/ "./src/images/pizza_wallpaper.jpg":
/*!****************************************!*\
  !*** ./src/images/pizza_wallpaper.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5604f6227627f7718a74.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







function createContentDiv() {
  const element = document.createElement("div");

  element.id = "content";

  return element;
}

document.body.appendChild(createContentDiv());

document.querySelector("#content").appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__.createNavbar)());

function createMainContentContainer() {
  const mainContentContainer = document.createElement("div");

  mainContentContainer.classList.add("main-content-container");
  mainContentContainer.id = "main-content-container";

  return mainContentContainer;
}

document.body.appendChild(createMainContentContainer());

function injectContent(createContentFunction) {
  const mainContentContainer = document.querySelector(
    "#main-content-container"
  );
  mainContentContainer.appendChild(createContentFunction());
}

injectContent(_home__WEBPACK_IMPORTED_MODULE_1__.createHomeContent);

function clearComponent() {
  const mainContentContainer = document.querySelector(
    "#main-content-container"
  );
  while (mainContentContainer.firstChild) {
    mainContentContainer.removeChild(mainContentContainer.firstChild);
  }
}

function updateComponent() {
  const navbarChildren = Array.from(
    document.querySelector(".navbar").querySelectorAll("*")
  );
  navbarChildren.forEach((child) => {
    child.addEventListener("click", () => {
      clearComponent();
      if (child.classList.value === "home") {
        injectContent(_home__WEBPACK_IMPORTED_MODULE_1__.createHomeContent);
      }
      if (child.classList.value === "menu") {
        injectContent(_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuContent);
      }
      if (child.classList.value === "contact") {
        injectContent(_contact__WEBPACK_IMPORTED_MODULE_3__.createContactComponent);
      }
    });
  });
}
updateComponent();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEOEI7QUFDRTtBQUNXOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isd0RBQWU7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsNkRBQVk7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUVBQWlCO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUU2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsTUFBTTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFMQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNHO0FBQ0E7QUFDUTs7QUFFOUI7O0FBRXJCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBK0MscURBQVk7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG9EQUFpQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9EQUFpQjtBQUN2QztBQUNBO0FBQ0Esc0JBQXNCLG9EQUFpQjtBQUN2QztBQUNBO0FBQ0Esc0JBQXNCLDREQUFzQjtBQUM1QztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcGl6emFfd2FsbHBhcGVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgbWF4LXdpZHRoOiAxMDBkdnc7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDBweCBhdXRvO1xufVxuXG4ubmF2YmFyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjOTA5MDkwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5hdmJhciA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzJiMjkyYTtcbiAgd2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhciA+IGRpdjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWFpbi1jb250ZW50LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyOTJhO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4ubWFpbi1jb250ZW50LXN1Yi1jb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyOTJhO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cbi5tYWluLWNvbnRlbnQtaGVhZGVyLFxuLm1haW4tY29udGVudC1zdWItY29udGFpbmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY29udGVudC1oZWFkZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tYWluLWNvbnRlbnQgPiBkaXYge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBtZW51IHNlY3Rpb24gKi9cbi5tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1lbnUtaW1hZ2Uge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubWVudS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm1lbnUtaGVhZGVyLXRleHQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLyogSG9tZSBzZWN0aW9uICovXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tYWluLWNvbnRlbnQgPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgLm1haW4tY29udGVudC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC8qIG1lbnUgc2VjdGlvbiAqL1xuICAubWVudS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLm1lbnUtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsaUNBQWlDO0FBQ25DO0FBQ0E7OztFQUdFLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtREFBNkM7RUFDN0MseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCO0FBQ0E7O0VBRUUsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakI7SUFDRSxVQUFVO0lBQ1YsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjtFQUNBLGlCQUFpQjtFQUNqQjtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5odG1sIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxMDBkdnc7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvcGl6emFfd2FsbHBhcGVyLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDBweCBhdXRvO1xcbn1cXG5cXG4ubmF2YmFyLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgIzkwOTA5MDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2YmFyID4gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogIzJiMjkyYTtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2YmFyID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1haW4tY29udGVudC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjI5MmE7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LXN1Yi1jb250YWluZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjI5MmE7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XFxufVxcbi5tYWluLWNvbnRlbnQtaGVhZGVyLFxcbi5tYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lciB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmNvbnRlbnQtaGVhZGVyLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm1haW4tY29udGVudC1jb250YWluZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5tYWluLWNvbnRlbnQgPiBkaXYge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogbWVudSBzZWN0aW9uICovXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4ubWVudS1pbWFnZSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubWVudS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tZW51LWhlYWRlci10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC8qIEhvbWUgc2VjdGlvbiAqL1xcbiAgLm1haW4tY29udGVudCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcbiAgLm1haW4tY29udGVudC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tYWluLWNvbnRlbnQgPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5tYWluLWNvbnRlbnQtaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLyogbWVudSBzZWN0aW9uICovXFxuICAubWVudS1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1lbnUtaW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdENvbXBvbmVudCgpIHtcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWw6IHNhbGVzQHNsaWNlaGF2ZW4uY29tXCI7XG4gIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRleHRcIik7XG5cbiAgY29uc3QgZmF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmF4LnRleHRDb250ZW50ID0gXCJGYXg6ICgrMTIzKTEyMy00NTYtOTg3XCI7XG4gIGZheC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC10ZXh0XCIpO1xuXG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGhvbmUudGV4dENvbnRlbnQgPSBcIlBob25lOiAoKzEyMykxMjMtNDU2LTc4OVwiO1xuICBwaG9uZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC10ZXh0XCIpO1xuXG4gIGNvbnN0IG1haW5Db250YWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250YWN0Mi5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LXN1Yi1jb250YWluZXJcIik7XG4gIG1haW5Db250YWN0Mi5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIG1haW5Db250YWN0Mi5hcHBlbmRDaGlsZChmYXgpO1xuICBtYWluQ29udGFjdDIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIGNvbnN0IGFkZHJlc3NMaW5lMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZHJlc3NMaW5lMy50ZXh0Q29udGVudCA9IFwiV2FrYW5kYSw0RVYgOTg3NjU0MzIxXCI7XG4gIGNvbnN0IGFkZHJlc3NMaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZHJlc3NMaW5lMi50ZXh0Q29udGVudCA9IFwiMTAwMDEgMTIzIFBpeiBaYVwiO1xuICBjb25zdCBhZGRyZXNzTGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRyZXNzTGluZTEudGV4dENvbnRlbnQgPSBcIlNsaWNlIEhhdmVuLCBJbmMuXCI7XG5cbiAgY29uc3QgbWFpbkNvbnRhY3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRhY3QxLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRhY3QxLmFwcGVuZENoaWxkKGFkZHJlc3NMaW5lMSk7XG4gIG1haW5Db250YWN0MS5hcHBlbmRDaGlsZChhZGRyZXNzTGluZTIpO1xuICBtYWluQ29udGFjdDEuYXBwZW5kQ2hpbGQoYWRkcmVzc0xpbmUzKTtcblxuICBjb25zdCBtYWluQ29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtaGVhZGVyXCIpO1xuICBtYWluQ29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudEhlYWRlcik7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWN0MSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWN0Mik7XG5cbiAgcmV0dXJuIG1haW5Db250ZW50O1xufVxuXG5leHBvcnQgeyBjcmVhdGVDb250YWN0Q29tcG9uZW50IH07XG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lQ29udGVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG1haW5Db250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtaGVhZGVyXCIpO1xuICBtYWluQ29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdcIlNsaWNlIEhhdmVuXCInO1xuXG4gIGNvbnN0IG1haW5Db250ZW50U3ViQ29udGFpbmVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIxLnRleHRDb250ZW50ID0gYCBXZWxjb21lIHRvIFNsaWNlIEhhdmVuLCB3aGVyZSBlYWNoIHBpenphIGlzIGEgbWFzdGVycGllY2UhIEZyb21cbiAgY2xhc3NpYyBNYXJnaGVyaXRhcyB0byBCQlEgQ2hpY2tlbiBkZWxpZ2h0cywgd2UndmUgZ290IGEgc2xpY2UgZm9yXG4gIGV2ZXJ5IHRhc3RlLlxuICBPdXIgY2hlZnMgY3JhZnQgcGVyZmVjdGlvbiB3aXRoIGZyZXNoIGluZ3JlZGllbnRzLCBjcmVhdGluZyBhXG4gIHN5bXBob255IG9mIGZsYXZvci4gV2hldGhlciBzaGFyaW5nIGEgbWVhbCBvciBncmFiYmluZyBhIHF1aWNrIGJpdGUsXG4gIHNhdm9yIHRoZSBqb3kgb2YgZ3JlYXQgcGl6emEgYXQgU2xpY2UgSGF2ZW4uSm9pbiB1cyBmb3JcbiAgdGhlIGFydCBvZiBnb29kIGZvb2QsIGdvb2QgY29tcGFueSwgYW5kIGdvb2QgdGltZXMuIEluZHVsZ2UgaW4gdGhlXG4gIHBhc3Npb24sIHJlbGlzaCB0aGUgZmxhdm9y4oCUd2VsY29tZSB0byBTbGljZSBIYXZlbiFgO1xuXG4gIGNvbnN0IGNvbnRlbnRIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG4gIGNvbnRlbnRIZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWhlYWRlci10ZXh0XCIpO1xuXG4gIGNvbnN0IHdlZWtkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWVrZGF5LnRleHRDb250ZW50ID0gYCBNb25kYXkgLSBGcmlkYXk6XG4gIDExOjAwIEFNIC0gOTowMCBQTWA7XG5cbiAgY29uc3Qgd2Vla2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdlZWtlbmQudGV4dENvbnRlbnQgPSBgICBTYXR1cmRheSAtIFN1bmRheTpcbiAgMTI6MDAgUE0gLSAxMDowMCBQTWA7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnRTdWJDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIyLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXJUZXh0KTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIyLmFwcGVuZENoaWxkKHdlZWtkYXkpO1xuICBtYWluQ29udGVudFN1YkNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQod2Vla2VuZCk7XG5cbiAgY29uc3QgY29udGVudEhlYWRlclRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudEhlYWRlclRleHQyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuICBjb250ZW50SGVhZGVyVGV4dDIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtaGVhZGVyLXRleHRcIik7XG5cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiMTIzIFBpenphLCBIZWF2ZW4gMTIzNDU2XCI7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnRTdWJDb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIzLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lclwiKTtcblxuICBtYWluQ29udGVudFN1YkNvbnRhaW5lcjMuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRlclRleHQyKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIzLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICBjb25zdCBtYWluSG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluSG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcbiAgbWFpbkhvbWVDb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50SGVhZGVyKTtcbiAgbWFpbkhvbWVDb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50U3ViQ29udGFpbmVyMSk7XG4gIG1haW5Ib21lQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudFN1YkNvbnRhaW5lcjIpO1xuICBtYWluSG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnRTdWJDb250YWluZXIzKTtcbiAgcmV0dXJuIG1haW5Ib21lQ29udGVudDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSG9tZUNvbnRlbnQgfTtcbiIsImltcG9ydCBQaXp6YV9tYWdoZXJpdGEgZnJvbSBcIi4vaW1hZ2VzL3BpenphX21hZ2hlcml0YS5qcGdcIjtcbmltcG9ydCBQaXp6YV9jaGVlc2UgZnJvbSBcIi4vaW1hZ2VzL2NsYXNzaWMtY2hlZXNlLXBpenphLmpwZ1wiO1xuaW1wb3J0IFBpenphX2JicV9jaGlja2VuIGZyb20gXCIuL2ltYWdlcy9CQlEtY2hpY2tlbi1waXp6YS1yZWNpcGUtOS5qcGdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTWVudUNvbnRlbnQoKSB7XG4gIGNvbnN0IHBpenphSW5ncmVkaWVudHMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGl6emFJbmdyZWRpZW50czEudGV4dENvbnRlbnQgPSBgIEZyZXNoIEdhcmxpYywgRXh0cmEgVmlyZ2luIE9saXZlIE9pbCwgQmFzaWwsIEZyZXNoIFJvbWEsXG4gIFRvbWF0byBTYXVjZSwgUm9tYW5vICYgTW96emFyZWxsYWA7XG4gIHBpenphSW5ncmVkaWVudHMxLmNsYXNzTGlzdC5hZGQoXCJpbmdyZWRpZW50XCIpO1xuXG4gIGNvbnN0IHBpenphUHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGl6emFQcmljZTEudGV4dENvbnRlbnQgPSBgJDE1YDtcblxuICBjb25zdCBtZW51SW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51SW5mbzEuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW5mb1wiKTtcbiAgbWVudUluZm8xLmFwcGVuZENoaWxkKHBpenphSW5ncmVkaWVudHMxKTtcbiAgbWVudUluZm8xLmFwcGVuZENoaWxkKHBpenphUHJpY2UxKTtcblxuICBjb25zdCBwaXp6YV9tYWdoZXJpdGEgPSBuZXcgSW1hZ2UoKTtcbiAgcGl6emFfbWFnaGVyaXRhLnNyYyA9IFBpenphX21hZ2hlcml0YTtcbiAgcGl6emFfbWFnaGVyaXRhLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIk1hcmdoZXJpdGEgUGl6emFcIik7XG4gIHBpenphX21hZ2hlcml0YS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWFnZVwiKTtcblxuICBjb25zdCBtZW51Q29udGFpbmVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250YWluZXIxLmFwcGVuZENoaWxkKHBpenphX21hZ2hlcml0YSk7XG4gIG1lbnVDb250YWluZXIxLmFwcGVuZENoaWxkKG1lbnVJbmZvMSk7XG5cbiAgY29uc3QgbWVudUhlYWRlclRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUhlYWRlclRleHQxLnRleHRDb250ZW50ID0gXCJNYXJnaGVyaXRhXCI7XG4gIG1lbnVIZWFkZXJUZXh0MS5jbGFzc0xpc3QuYWRkKFwibWVudS1oZWFkZXItdGV4dFwiKTtcblxuICBjb25zdCBtYWluQ29udGVudFN1YkNvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudFN1YkNvbnRhaW5lcjEuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1zdWItY29udGFpbmVyXCIpO1xuICBtYWluQ29udGVudFN1YkNvbnRhaW5lcjEuYXBwZW5kQ2hpbGQobWVudUhlYWRlclRleHQxKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIxLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIxKTtcblxuICBjb25zdCBwaXp6YUluZ3JlZGllbnRzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBpenphSW5ncmVkaWVudHMyLnRleHRDb250ZW50ID0gYCAgR2FybGljIEJhc2UsIFJvbWFubyBDaGVlc2UsIFNsaWNlZCBQcm92b2xvbmUsIFNocmVkZGVkXG4gIE1vemFyZWxsYSAmIFJpY290dGEgQ2hlZXNlYDtcbiAgcGl6emFJbmdyZWRpZW50czIuY2xhc3NMaXN0LmFkZChcImluZ3JlZGllbnRcIik7XG5cbiAgY29uc3QgcGl6emFQcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaXp6YVByaWNlMi50ZXh0Q29udGVudCA9IGAkMjBgO1xuXG4gIGNvbnN0IG1lbnVJbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJbmZvMi5jbGFzc0xpc3QuYWRkKFwibWVudS1pbmZvXCIpO1xuICBtZW51SW5mbzIuYXBwZW5kQ2hpbGQocGl6emFJbmdyZWRpZW50czIpO1xuICBtZW51SW5mbzIuYXBwZW5kQ2hpbGQocGl6emFQcmljZTIpO1xuXG4gIGNvbnN0IHBpenphX2NoZWVzZSA9IG5ldyBJbWFnZSgpO1xuICBwaXp6YV9jaGVlc2Uuc3JjID0gUGl6emFfY2hlZXNlO1xuICBwaXp6YV9jaGVlc2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQ2xhc3NpYyBjaGVlc2UgcGl6emFcIik7XG4gIHBpenphX2NoZWVzZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWFnZVwiKTtcblxuICBjb25zdCBtZW51Q29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250YWluZXIyLmFwcGVuZENoaWxkKHBpenphX2NoZWVzZSk7XG4gIG1lbnVDb250YWluZXIyLmFwcGVuZENoaWxkKG1lbnVJbmZvMik7XG5cbiAgY29uc3QgbWVudUhlYWRlclRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUhlYWRlclRleHQyLnRleHRDb250ZW50ID0gXCJDbGFzc2ljIENoZWVzZSBQaXp6YVwiO1xuICBtZW51SGVhZGVyVGV4dDIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVhZGVyLXRleHRcIik7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnRTdWJDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXJUZXh0Mik7XG4gIG1haW5Db250ZW50U3ViQ29udGFpbmVyMi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyMik7XG5cbiAgY29uc3QgcGl6emFJbmdyZWRpZW50czMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaXp6YUluZ3JlZGllbnRzMy50ZXh0Q29udGVudCA9IGBDYW5ub25iYWxsIEJCUSBTYXVjZSBCYXNlLCBHcmlsbCBDaGlja2VuIE1peGVkIGluIENhbm5vbmJhbGxcbiAgQkJRIFNhdWNlICYgU2hyZWRkZWQgTW96emFyZWxsYSBDaGVlc2VgO1xuICBwaXp6YUluZ3JlZGllbnRzMy5jbGFzc0xpc3QuYWRkKFwiaW5ncmVkaWVudFwiKTtcblxuICBjb25zdCBwaXp6YVByaWNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBpenphUHJpY2UzLnRleHRDb250ZW50ID0gYCQxOS45OWA7XG5cbiAgY29uc3QgbWVudUluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUluZm8zLmNsYXNzTGlzdC5hZGQoXCJtZW51LWluZm9cIik7XG4gIG1lbnVJbmZvMy5hcHBlbmRDaGlsZChwaXp6YUluZ3JlZGllbnRzMyk7XG4gIG1lbnVJbmZvMy5hcHBlbmRDaGlsZChwaXp6YVByaWNlMyk7XG5cbiAgY29uc3QgcGl6emFfYmJxX2NoaWNrZW4gPSBuZXcgSW1hZ2UoKTtcbiAgcGl6emFfYmJxX2NoaWNrZW4uc3JjID0gUGl6emFfYmJxX2NoaWNrZW47XG4gIHBpenphX2JicV9jaGlja2VuLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkJCUSBDaGlja2VuIFBpenphXCIpO1xuICBwaXp6YV9iYnFfY2hpY2tlbi5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWFnZVwiKTtcblxuICBjb25zdCBtZW51Q29udGFpbmVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250YWluZXIzLmFwcGVuZENoaWxkKHBpenphX2JicV9jaGlja2VuKTtcbiAgbWVudUNvbnRhaW5lcjMuYXBwZW5kQ2hpbGQobWVudUluZm8zKTtcblxuICBjb25zdCBtZW51SGVhZGVyVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51SGVhZGVyVGV4dDMudGV4dENvbnRlbnQgPSBcIkJCUSBDaGlja2VuIFBpenphXCI7XG4gIG1lbnVIZWFkZXJUZXh0My5jbGFzc0xpc3QuYWRkKFwibWVudS1oZWFkZXItdGV4dFwiKTtcblxuICBjb25zdCBtYWluQ29udGVudFN1YkNvbnRhaW5lcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudFN1YkNvbnRhaW5lcjMuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1zdWItY29udGFpbmVyXCIpO1xuICBtYWluQ29udGVudFN1YkNvbnRhaW5lcjMuYXBwZW5kQ2hpbGQobWVudUhlYWRlclRleHQzKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIzLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIzKTtcblxuICBjb25zdCBtYWluQ29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG1haW5Db250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtaGVhZGVyXCIpO1xuXG4gIGNvbnN0IG1haW5NZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5NZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xuXG4gIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudEhlYWRlcik7XG4gIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudFN1YkNvbnRhaW5lcjEpO1xuICBtYWluTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnRTdWJDb250YWluZXIyKTtcbiAgbWFpbk1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50U3ViQ29udGFpbmVyMyk7XG5cbiAgcmV0dXJuIG1haW5NZW51Q29udGVudDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudUNvbnRlbnQgfTtcblxuLy8gIHRyeSB0byBnZW5lcmF0ZSBwaXp6YSBieSBjcmVhdGVQaXp6YU1lbnVcbi8vIGZ1bmN0aW9uIGNyZWF0ZU1lbnVDb250ZW50KCkge1xuLy8gICBjb25zdCBwaXp6YTEgPSBjcmVhdGVQaXp6YU1lbnUoXG4vLyAgICAgXCJNYXJnaGVyaXRhXCIsXG4vLyAgICAgYCBGcmVzaCBHYXJsaWMsIEV4dHJhIFZpcmdpbiBPbGl2ZSBPaWwsIEJhc2lsLCBGcmVzaCBSb21hLFxuLy8gICBUb21hdG8gU2F1Y2UsIFJvbWFubyAmIE1venphcmVsbGFgLFxuLy8gICAgIDE1LFxuLy8gICAgIFBpenphX21hZ2hlcml0YSxcbi8vICAgICBcIlBpenphIE1hcmdoZXJpdGFcIlxuLy8gICApO1xuXG4vLyAgIGNvbnN0IHBpenphMiA9IGNyZWF0ZVBpenphTWVudShcbi8vICAgICBcIkNsYXNzaWMgQ2hlZXNlXCIsXG4vLyAgICAgYEdhcmxpYyBCYXNlLCBSb21hbm8gQ2hlZXNlLCBTbGljZWQgUHJvdm9sb25lLCBTaHJlZGRlZFxuLy8gICBNb3phcmVsbGEgJiBSaWNvdHRhIENoZWVzZWAsXG4vLyAgICAgMTkuOTksXG4vLyAgICAgUGl6emFfY2hlZXNlLFxuLy8gICAgIFwiQ2xhc3NpYyBDaGVlc2VcIlxuLy8gICApO1xuLy8gICBjb25zdCBwaXp6YTMgPSBjcmVhdGVQaXp6YU1lbnUoXG4vLyAgICAgXCJCQlEgQ2hpY2tlblwiLFxuLy8gICAgIGBDYW5ub25iYWxsIEJCUSBTYXVjZSBCYXNlLCBHcmlsbCBDaGlja2VuIE1peGVkIGluIENhbm5vbmJhbGxcbi8vICAgQkJRIFNhdWNlICYgU2hyZWRkZWQgTW96emFyZWxsYSBDaGVlc2VgLFxuLy8gICAgIDE5Ljk5LFxuLy8gICAgIFBpenphX2JicV9jaGlja2VuLFxuLy8gICAgIFwiQkJRIENoaWNrZW4gUGl6emFcIlxuLy8gICApO1xuLy8gICBjb25zdCBtYWluQ29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIG1haW5Db250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4vLyAgIG1haW5Db250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtaGVhZGVyXCIpO1xuXG4vLyAgIGNvbnN0IG1haW5NZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIG1haW5NZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xuXG4vLyAgIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudEhlYWRlcik7XG4vLyAgIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChwaXp6YTEpO1xuLy8gICBtYWluTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQocGl6emEyKTtcbi8vICAgbWFpbk1lbnVDb250ZW50LmFwcGVuZENoaWxkKHBpenphMyk7XG4vLyAgIHJldHVybiBtYWluTWVudUNvbnRlbnQ7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVBpenphTWVudShuYW1lLCBpbmdyZWRpZW50cywgcHJpY2UsIGltZ1NyYywgaW1nQWx0KSB7XG4vLyAgIGNvbnN0IHBpenphSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBwaXp6YUluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gaW5ncmVkaWVudHM7XG4vLyAgIHBpenphSW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcImluZ3JlZGllbnRcIik7XG5cbi8vICAgY29uc3QgcGl6emFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIHBpenphUHJpY2UudGV4dENvbnRlbnQgPSBgJCR7cHJpY2V9YDtcblxuLy8gICBjb25zdCBtZW51SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIG1lbnVJbmZvLmNsYXNzTGlzdC5hZGQoXCJtZW51LWluZm9cIik7XG4vLyAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKHBpenphSW5ncmVkaWVudHMpO1xuLy8gICBtZW51SW5mby5hcHBlbmRDaGlsZChwaXp6YVByaWNlKTtcblxuLy8gICBjb25zdCBwaXp6YUltYWdlID0gbmV3IEltYWdlKCk7XG4vLyAgIHBpenphSW1hZ2Uuc3JjID0gaW1nU3JjO1xuLy8gICBwaXp6YUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWdBbHQpO1xuLy8gICBwaXp6YUltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltYWdlXCIpO1xuXG4vLyAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphSW1hZ2UsIG1lbnVJbmZvKTtcblxuLy8gICBjb25zdCBtZW51SGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIG1lbnVIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gbmFtZTtcbi8vICAgbWVudUhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVhZGVyLXRleHRcIik7XG5cbi8vICAgY29uc3QgbWFpbkNvbnRlbnRTdWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBtYWluQ29udGVudFN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LXN1Yi1jb250YWluZXJcIik7XG4vLyAgIG1haW5Db250ZW50U3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXJUZXh0LCBtZW51Q29udGFpbmVyKTtcblxuLy8gICByZXR1cm4gbWFpbkNvbnRlbnRTdWJDb250YWluZXI7XG4vLyB9XG4iLCJmdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0RGl2LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVEaXYudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZURpdi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lRGl2LmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuXG4gIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWNvbnRhaW5lclwiKTtcbiAgbmF2YmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgcmV0dXJuIG5hdmJhckNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmF2YmFyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZU5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IHsgY3JlYXRlSG9tZUNvbnRlbnQgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51Q29udGVudCB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnREaXYoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGVsZW1lbnQuaWQgPSBcImNvbnRlbnRcIjtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50RGl2KCkpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudENvbnRhaW5lcigpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG1haW5Db250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtY29udGFpbmVyXCIpO1xuICBtYWluQ29udGVudENvbnRhaW5lci5pZCA9IFwibWFpbi1jb250ZW50LWNvbnRhaW5lclwiO1xuXG4gIHJldHVybiBtYWluQ29udGVudENvbnRhaW5lcjtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNYWluQ29udGVudENvbnRhaW5lcigpKTtcblxuZnVuY3Rpb24gaW5qZWN0Q29udGVudChjcmVhdGVDb250ZW50RnVuY3Rpb24pIHtcbiAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI21haW4tY29udGVudC1jb250YWluZXJcIlxuICApO1xuICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50RnVuY3Rpb24oKSk7XG59XG5cbmluamVjdENvbnRlbnQoY3JlYXRlSG9tZUNvbnRlbnQpO1xuXG5mdW5jdGlvbiBjbGVhckNvbXBvbmVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI21haW4tY29udGVudC1jb250YWluZXJcIlxuICApO1xuICB3aGlsZSAobWFpbkNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudCgpIHtcbiAgY29uc3QgbmF2YmFyQ2hpbGRyZW4gPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpXG4gICk7XG4gIG5hdmJhckNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsZWFyQ29tcG9uZW50KCk7XG4gICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0LnZhbHVlID09PSBcImhvbWVcIikge1xuICAgICAgICBpbmplY3RDb250ZW50KGNyZWF0ZUhvbWVDb250ZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QudmFsdWUgPT09IFwibWVudVwiKSB7XG4gICAgICAgIGluamVjdENvbnRlbnQoY3JlYXRlTWVudUNvbnRlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdC52YWx1ZSA9PT0gXCJjb250YWN0XCIpIHtcbiAgICAgICAgaW5qZWN0Q29udGVudChjcmVhdGVDb250YWN0Q29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG51cGRhdGVDb21wb25lbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==