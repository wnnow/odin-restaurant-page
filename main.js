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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,sBAAsB;EACtB,iCAAiC;AACnC;AACA;;;EAGE,2BAA2B;EAC3B,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,mDAA6C;EAC7C,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,yBAAyB;EACzB,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;AACpB;AACA;;EAEE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB;IACE,UAAU;IACV,cAAc;EAChB;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;IACE,aAAa;IACb,eAAe;EACjB;EACA;IACE,aAAa;IACb,eAAe;EACjB;EACA,iBAAiB;EACjB;IACE,sBAAsB;EACxB;EACA;IACE,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,mBAAmB;EACrB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  max-width: 100dvw;\n  background: url(./images/pizza_wallpaper.jpg);\n  background-repeat: repeat;\n  background-size: 400px auto;\n}\n\n.navbar-container {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  background-color: #242424;\n  border-bottom: 2px dotted #909090;\n  margin-bottom: 16px;\n}\n\n.navbar {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n}\n\n.navbar > div {\n  background-color: #ffffff;\n  padding: 8px 16px;\n  border-radius: 10px;\n  color: #2b292a;\n  width: 80px;\n  text-align: center;\n  cursor: pointer;\n}\n.navbar > div:hover {\n  background-color: rgb(231, 231, 231);\n}\n\n.main-content {\n  padding: 16px;\n  border-radius: 15px;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.main-content-header {\n  font-size: 3rem;\n  margin-bottom: 16px;\n  text-align: center;\n  border: 2px solid #fff;\n  border-radius: 17px;\n  font-weight: 600;\n  background-color: #2b292a;\n  padding: 24px;\n}\n\n.main-content-sub-container {\n  border: 2px solid #ffffff;\n  border-radius: 17px;\n  padding: 24px;\n  margin-bottom: 16px;\n  background-color: #2b292a;\n  font-size: 1.25rem;\n}\n.main-content-header,\n.main-content-sub-container {\n  color: #ffffff;\n}\n.content-header-text {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.main-content-container {\n  margin: 0 auto;\n}\n\n.main-content > div {\n  width: 50%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n/* menu section */\n.menu-container {\n  display: flex;\n  gap: 16px;\n  margin-top: 16px;\n}\n\n.menu-image {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 15px;\n}\n\n.menu-info {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  justify-content: space-around;\n}\n\n.menu-header-text {\n  font-size: 1.5rem;\n}\n\n@media screen and (max-width: 900px) {\n  /* Home section */\n  .main-content {\n    width: 80%;\n    margin: 0 auto;\n  }\n  .main-content-container {\n    width: 100%;\n  }\n  .main-content > div {\n    width: 100%;\n  }\n  .main-content-sub-container {\n    padding: 16px;\n    font-size: 1rem;\n  }\n  .main-content-header {\n    padding: 16px;\n    font-size: 2rem;\n  }\n  /* menu section */\n  .menu-container {\n    flex-direction: column;\n  }\n  .menu-image {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 15px;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   createMenuContent: () => (/* binding */ createMenuContent),
/* harmony export */   createPizzaMenu: () => (/* binding */ createPizzaMenu)
/* harmony export */ });
/* harmony import */ var _images_pizza_magherita_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizza_magherita.jpg */ "./src/images/pizza_magherita.jpg");

function createMenuContent() {
  const mainContentHeader = document.createElement("div");
  mainContentHeader.textContent = "Menu";
  mainContentHeader.classList.add("main-content-header");

  const mainMenuContent = document.createElement("div");
  mainMenuContent.classList.add("main-content");

  const pizza1 = createPizzaMenu(
    "Margherita",
    ` Fresh Garlic, Extra Virgin Olive Oil, Basil, Fresh Roma,
  Tomato Sauce, Romano & Mozzarella`,
    15,
    _images_pizza_magherita_jpg__WEBPACK_IMPORTED_MODULE_0__,
    "Pizza Margherita"
  );

  const pizza2 = createPizzaMenu(
    "Classic Cheese",
    `Garlic Base, Romano Cheese, Sliced Provolone, Shredded
  Mozarella & Ricotta Cheese`,
    19.99,
    "classic-cheese-pizza.jpg",
    "Classic Cheese"
  );
  const pizza3 = createPizzaMenu(
    "BBQ Chicken",
    `Cannonball BBQ Sauce Base, Grill Chicken Mixed in Cannonball
  BBQ Sauce & Shredded Mozzarella Cheese`,
    19.99,
    "BBQ-chicken-pizza-recipe-9.jpg",
    "BBQ Chicken Pizza"
  );
  mainMenuContent.appendChild(mainContentHeader);
  mainMenuContent.appendChild(pizza1);
  mainMenuContent.appendChild(pizza2);
  mainMenuContent.appendChild(pizza3);
  return mainMenuContent;
}

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

//   const pizzaImage = document.createElement("img");
//   pizzaImage.setAttribute("src", `./images/${imgSrc}`);
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

function createPizzaMenu(name, ingredients, price, imgSrc, imgAlt) {
  const pizzaIngredients = document.createElement("div");
  pizzaIngredients.textContent = ingredients;
  pizzaIngredients.classList.add("ingredient");

  const pizzaPrice = document.createElement("div");
  pizzaPrice.textContent = `$${price}`;

  const menuInfo = document.createElement("div");
  menuInfo.classList.add("menu-info");
  menuInfo.appendChild(pizzaIngredients);
  menuInfo.appendChild(pizzaPrice);

  const pizzaImage = document.createElement("img");
  pizzaImage.setAttribute("src", `./images/${imgSrc}`);
  pizzaImage.setAttribute("alt", imgAlt);
  pizzaImage.classList.add("menu-image");

  const menuContainer = document.createElement("div");
  menuContainer.appendChild(pizzaImage, menuInfo);
  menuContainer.appendChild(menuInfo);

  const menuHeaderText = document.createElement("div");
  menuHeaderText.textContent = name;
  menuHeaderText.classList.add("menu-header-text");

  const mainContentSubContainer = document.createElement("div");
  mainContentSubContainer.classList.add("main-content-sub-container");
  mainContentSubContainer.appendChild(menuHeaderText);
  mainContentSubContainer.appendChild(menuContainer);

  //   const mainContentHeader = document.createElement("div");
  //   mainContentHeader.textContent = "Menu";
  //   mainContentHeader.classList.add("main-content-header");

  //   const mainMenuContent = document.createElement("div");
  //   mainMenuContent.classList.add("main-content");
  //   mainMenuContent, appendChild(mainContentHeader, mainContentSubContainer);

  return mainContentSubContainer;
}




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

function addEventNavbarChildren() {
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
addEventNavbarChildren();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9waXp6YV93YWxscGFwZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBtYXgtd2lkdGg6IDEwMGR2dztcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IGF1dG87XG59XG5cbi5uYXZiYXItY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xuICBib3JkZXItYm90dG9tOiAycHggZG90dGVkICM5MDkwOTA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmF2YmFyID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjMmIyOTJhO1xuICB3aWR0aDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyID4gZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tYWluLWNvbnRlbnQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjI5MmE7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5tYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjI5MmE7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5tYWluLWNvbnRlbnQtaGVhZGVyLFxuLm1haW4tY29udGVudC1zdWItY29udGFpbmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY29udGVudC1oZWFkZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tYWluLWNvbnRlbnQgPiBkaXYge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBtZW51IHNlY3Rpb24gKi9cbi5tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1lbnUtaW1hZ2Uge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubWVudS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm1lbnUtaGVhZGVyLXRleHQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLyogSG9tZSBzZWN0aW9uICovXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tYWluLWNvbnRlbnQgPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgLm1haW4tY29udGVudC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC8qIG1lbnUgc2VjdGlvbiAqL1xuICAubWVudS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLm1lbnUtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsaUNBQWlDO0FBQ25DO0FBQ0E7OztFQUdFLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtREFBNkM7RUFDN0MseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCO0lBQ0UsVUFBVTtJQUNWLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7RUFDQSxpQkFBaUI7RUFDakI7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuaHRtbCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwZHZ3O1xcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL3BpenphX3dhbGxwYXBlci5qcGcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwcHggYXV0bztcXG59XFxuXFxuLm5hdmJhci1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XFxuICBib3JkZXItYm90dG9tOiAycHggZG90dGVkICM5MDkwOTA7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmJhciA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6ICMyYjI5MmE7XFxuICB3aWR0aDogODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdmJhciA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5tYWluLWNvbnRlbnQtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyOTJhO1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLm1haW4tY29udGVudC1zdWItY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xcbiAgcGFkZGluZzogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyOTJhO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4ubWFpbi1jb250ZW50LWhlYWRlcixcXG4ubWFpbi1jb250ZW50LXN1Yi1jb250YWluZXIge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5jb250ZW50LWhlYWRlci10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5tYWluLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50ID4gZGl2IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIG1lbnUgc2VjdGlvbiAqL1xcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLm1lbnUtaW1hZ2Uge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1lbnUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubWVudS1oZWFkZXItdGV4dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC8qIEhvbWUgc2VjdGlvbiAqL1xcbiAgLm1haW4tY29udGVudCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcbiAgLm1haW4tY29udGVudC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tYWluLWNvbnRlbnQgPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5tYWluLWNvbnRlbnQtaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLyogbWVudSBzZWN0aW9uICovXFxuICAubWVudS1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1lbnUtaW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdENvbXBvbmVudCgpIHtcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWw6IHNhbGVzQHNsaWNlaGF2ZW4uY29tXCI7XG4gIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRleHRcIik7XG5cbiAgY29uc3QgZmF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmF4LnRleHRDb250ZW50ID0gXCJGYXg6ICgrMTIzKTEyMy00NTYtOTg3XCI7XG4gIGZheC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC10ZXh0XCIpO1xuXG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGhvbmUudGV4dENvbnRlbnQgPSBcIlBob25lOiAoKzEyMykxMjMtNDU2LTc4OVwiO1xuICBwaG9uZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC10ZXh0XCIpO1xuXG4gIGNvbnN0IG1haW5Db250YWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250YWN0Mi5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LXN1Yi1jb250YWluZXJcIik7XG4gIG1haW5Db250YWN0Mi5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIG1haW5Db250YWN0Mi5hcHBlbmRDaGlsZChmYXgpO1xuICBtYWluQ29udGFjdDIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIGNvbnN0IGFkZHJlc3NMaW5lMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZHJlc3NMaW5lMy50ZXh0Q29udGVudCA9IFwiV2FrYW5kYSw0RVYgOTg3NjU0MzIxXCI7XG4gIGNvbnN0IGFkZHJlc3NMaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZHJlc3NMaW5lMi50ZXh0Q29udGVudCA9IFwiMTAwMDEgMTIzIFBpeiBaYVwiO1xuICBjb25zdCBhZGRyZXNzTGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRyZXNzTGluZTEudGV4dENvbnRlbnQgPSBcIlNsaWNlIEhhdmVuLCBJbmMuXCI7XG5cbiAgY29uc3QgbWFpbkNvbnRhY3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRhY3QxLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRhY3QxLmFwcGVuZENoaWxkKGFkZHJlc3NMaW5lMSk7XG4gIG1haW5Db250YWN0MS5hcHBlbmRDaGlsZChhZGRyZXNzTGluZTIpO1xuICBtYWluQ29udGFjdDEuYXBwZW5kQ2hpbGQoYWRkcmVzc0xpbmUzKTtcblxuICBjb25zdCBtYWluQ29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtaGVhZGVyXCIpO1xuICBtYWluQ29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudEhlYWRlcik7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWN0MSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWN0Mik7XG5cbiAgcmV0dXJuIG1haW5Db250ZW50O1xufVxuXG5leHBvcnQgeyBjcmVhdGVDb250YWN0Q29tcG9uZW50IH07XG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lQ29udGVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG1haW5Db250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtaGVhZGVyXCIpO1xuICBtYWluQ29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdcIlNsaWNlIEhhdmVuXCInO1xuXG4gIGNvbnN0IG1haW5Db250ZW50U3ViQ29udGFpbmVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIxLnRleHRDb250ZW50ID0gYCBXZWxjb21lIHRvIFNsaWNlIEhhdmVuLCB3aGVyZSBlYWNoIHBpenphIGlzIGEgbWFzdGVycGllY2UhIEZyb21cbiAgY2xhc3NpYyBNYXJnaGVyaXRhcyB0byBCQlEgQ2hpY2tlbiBkZWxpZ2h0cywgd2UndmUgZ290IGEgc2xpY2UgZm9yXG4gIGV2ZXJ5IHRhc3RlLlxuICBPdXIgY2hlZnMgY3JhZnQgcGVyZmVjdGlvbiB3aXRoIGZyZXNoIGluZ3JlZGllbnRzLCBjcmVhdGluZyBhXG4gIHN5bXBob255IG9mIGZsYXZvci4gV2hldGhlciBzaGFyaW5nIGEgbWVhbCBvciBncmFiYmluZyBhIHF1aWNrIGJpdGUsXG4gIHNhdm9yIHRoZSBqb3kgb2YgZ3JlYXQgcGl6emEgYXQgU2xpY2UgSGF2ZW4uSm9pbiB1cyBmb3JcbiAgdGhlIGFydCBvZiBnb29kIGZvb2QsIGdvb2QgY29tcGFueSwgYW5kIGdvb2QgdGltZXMuIEluZHVsZ2UgaW4gdGhlXG4gIHBhc3Npb24sIHJlbGlzaCB0aGUgZmxhdm9y4oCUd2VsY29tZSB0byBTbGljZSBIYXZlbiFgO1xuXG4gIGNvbnN0IGNvbnRlbnRIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG4gIGNvbnRlbnRIZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWhlYWRlci10ZXh0XCIpO1xuXG4gIGNvbnN0IHdlZWtkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWVrZGF5LnRleHRDb250ZW50ID0gYCBNb25kYXkgLSBGcmlkYXk6XG4gIDExOjAwIEFNIC0gOTowMCBQTWA7XG5cbiAgY29uc3Qgd2Vla2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdlZWtlbmQudGV4dENvbnRlbnQgPSBgICBTYXR1cmRheSAtIFN1bmRheTpcbiAgMTI6MDAgUE0gLSAxMDowMCBQTWA7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnRTdWJDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIyLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXJUZXh0KTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIyLmFwcGVuZENoaWxkKHdlZWtkYXkpO1xuICBtYWluQ29udGVudFN1YkNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQod2Vla2VuZCk7XG5cbiAgY29uc3QgY29udGVudEhlYWRlclRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudEhlYWRlclRleHQyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuICBjb250ZW50SGVhZGVyVGV4dDIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtaGVhZGVyLXRleHRcIik7XG5cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiMTIzIFBpenphLCBIZWF2ZW4gMTIzNDU2XCI7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnRTdWJDb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIzLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lclwiKTtcblxuICBtYWluQ29udGVudFN1YkNvbnRhaW5lcjMuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRlclRleHQyKTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIzLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICBjb25zdCBtYWluSG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluSG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcbiAgbWFpbkhvbWVDb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50SGVhZGVyKTtcbiAgbWFpbkhvbWVDb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50U3ViQ29udGFpbmVyMSk7XG4gIG1haW5Ib21lQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudFN1YkNvbnRhaW5lcjIpO1xuICBtYWluSG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnRTdWJDb250YWluZXIzKTtcbiAgcmV0dXJuIG1haW5Ib21lQ29udGVudDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSG9tZUNvbnRlbnQgfTtcbiIsImltcG9ydCBwaXp6YU1hZ2hlcml0YUltYWdlIGZyb20gXCIuL2ltYWdlcy9waXp6YV9tYWdoZXJpdGEuanBnXCI7XG5mdW5jdGlvbiBjcmVhdGVNZW51Q29udGVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtYWluQ29udGVudEhlYWRlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LWhlYWRlclwiKTtcblxuICBjb25zdCBtYWluTWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluTWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcblxuICBjb25zdCBwaXp6YTEgPSBjcmVhdGVQaXp6YU1lbnUoXG4gICAgXCJNYXJnaGVyaXRhXCIsXG4gICAgYCBGcmVzaCBHYXJsaWMsIEV4dHJhIFZpcmdpbiBPbGl2ZSBPaWwsIEJhc2lsLCBGcmVzaCBSb21hLFxuICBUb21hdG8gU2F1Y2UsIFJvbWFubyAmIE1venphcmVsbGFgLFxuICAgIDE1LFxuICAgIHBpenphTWFnaGVyaXRhSW1hZ2UsXG4gICAgXCJQaXp6YSBNYXJnaGVyaXRhXCJcbiAgKTtcblxuICBjb25zdCBwaXp6YTIgPSBjcmVhdGVQaXp6YU1lbnUoXG4gICAgXCJDbGFzc2ljIENoZWVzZVwiLFxuICAgIGBHYXJsaWMgQmFzZSwgUm9tYW5vIENoZWVzZSwgU2xpY2VkIFByb3ZvbG9uZSwgU2hyZWRkZWRcbiAgTW96YXJlbGxhICYgUmljb3R0YSBDaGVlc2VgLFxuICAgIDE5Ljk5LFxuICAgIFwiY2xhc3NpYy1jaGVlc2UtcGl6emEuanBnXCIsXG4gICAgXCJDbGFzc2ljIENoZWVzZVwiXG4gICk7XG4gIGNvbnN0IHBpenphMyA9IGNyZWF0ZVBpenphTWVudShcbiAgICBcIkJCUSBDaGlja2VuXCIsXG4gICAgYENhbm5vbmJhbGwgQkJRIFNhdWNlIEJhc2UsIEdyaWxsIENoaWNrZW4gTWl4ZWQgaW4gQ2Fubm9uYmFsbFxuICBCQlEgU2F1Y2UgJiBTaHJlZGRlZCBNb3p6YXJlbGxhIENoZWVzZWAsXG4gICAgMTkuOTksXG4gICAgXCJCQlEtY2hpY2tlbi1waXp6YS1yZWNpcGUtOS5qcGdcIixcbiAgICBcIkJCUSBDaGlja2VuIFBpenphXCJcbiAgKTtcbiAgbWFpbk1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50SGVhZGVyKTtcbiAgbWFpbk1lbnVDb250ZW50LmFwcGVuZENoaWxkKHBpenphMSk7XG4gIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChwaXp6YTIpO1xuICBtYWluTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQocGl6emEzKTtcbiAgcmV0dXJuIG1haW5NZW51Q29udGVudDtcbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlUGl6emFNZW51KG5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSwgaW1nU3JjLCBpbWdBbHQpIHtcbi8vICAgY29uc3QgcGl6emFJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIHBpenphSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBpbmdyZWRpZW50cztcbi8vICAgcGl6emFJbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKFwiaW5ncmVkaWVudFwiKTtcblxuLy8gICBjb25zdCBwaXp6YVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgcGl6emFQcmljZS50ZXh0Q29udGVudCA9IGAkJHtwcmljZX1gO1xuXG4vLyAgIGNvbnN0IG1lbnVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgbWVudUluZm8uY2xhc3NMaXN0LmFkZChcIm1lbnUtaW5mb1wiKTtcbi8vICAgbWVudUluZm8uYXBwZW5kQ2hpbGQocGl6emFJbmdyZWRpZW50cyk7XG4vLyAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKHBpenphUHJpY2UpO1xuXG4vLyAgIGNvbnN0IHBpenphSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuLy8gICBwaXp6YUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgLi9pbWFnZXMvJHtpbWdTcmN9YCk7XG4vLyAgIHBpenphSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZ0FsdCk7XG4vLyAgIHBpenphSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1hZ2VcIik7XG5cbi8vICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocGl6emFJbWFnZSwgbWVudUluZm8pO1xuXG4vLyAgIGNvbnN0IG1lbnVIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgbWVudUhlYWRlclRleHQudGV4dENvbnRlbnQgPSBuYW1lO1xuLy8gICBtZW51SGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwibWVudS1oZWFkZXItdGV4dFwiKTtcblxuLy8gICBjb25zdCBtYWluQ29udGVudFN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIG1haW5Db250ZW50U3ViQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc3ViLWNvbnRhaW5lclwiKTtcbi8vICAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlclRleHQsIG1lbnVDb250YWluZXIpO1xuXG4vLyAgIHJldHVybiBtYWluQ29udGVudFN1YkNvbnRhaW5lcjtcbi8vIH1cblxuZnVuY3Rpb24gY3JlYXRlUGl6emFNZW51KG5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSwgaW1nU3JjLCBpbWdBbHQpIHtcbiAgY29uc3QgcGl6emFJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBpenphSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBpbmdyZWRpZW50cztcbiAgcGl6emFJbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKFwiaW5ncmVkaWVudFwiKTtcblxuICBjb25zdCBwaXp6YVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGl6emFQcmljZS50ZXh0Q29udGVudCA9IGAkJHtwcmljZX1gO1xuXG4gIGNvbnN0IG1lbnVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUluZm8uY2xhc3NMaXN0LmFkZChcIm1lbnUtaW5mb1wiKTtcbiAgbWVudUluZm8uYXBwZW5kQ2hpbGQocGl6emFJbmdyZWRpZW50cyk7XG4gIG1lbnVJbmZvLmFwcGVuZENoaWxkKHBpenphUHJpY2UpO1xuXG4gIGNvbnN0IHBpenphSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBwaXp6YUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgLi9pbWFnZXMvJHtpbWdTcmN9YCk7XG4gIHBpenphSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGltZ0FsdCk7XG4gIHBpenphSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1hZ2VcIik7XG5cbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocGl6emFJbWFnZSwgbWVudUluZm8pO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJbmZvKTtcblxuICBjb25zdCBtZW51SGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gbmFtZTtcbiAgbWVudUhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVhZGVyLXRleHRcIik7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnRTdWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudFN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LXN1Yi1jb250YWluZXJcIik7XG4gIG1haW5Db250ZW50U3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXJUZXh0KTtcbiAgbWFpbkNvbnRlbnRTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgLy8gICBjb25zdCBtYWluQ29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgbWFpbkNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgLy8gICBtYWluQ29udGVudEhlYWRlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LWhlYWRlclwiKTtcblxuICAvLyAgIGNvbnN0IG1haW5NZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgbWFpbk1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gIC8vICAgbWFpbk1lbnVDb250ZW50LCBhcHBlbmRDaGlsZChtYWluQ29udGVudEhlYWRlciwgbWFpbkNvbnRlbnRTdWJDb250YWluZXIpO1xuXG4gIHJldHVybiBtYWluQ29udGVudFN1YkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudUNvbnRlbnQsIGNyZWF0ZVBpenphTWVudSB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlTmF2YmFyKCkge1xuICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdERpdi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51RGl2LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG1lbnVEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVEaXYudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZURpdi5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudURpdik7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxuICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1jb250YWluZXJcIik7XG4gIG5hdmJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZiYXIpO1xuXG4gIHJldHVybiBuYXZiYXJDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5hdmJhciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjcmVhdGVOYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcbmltcG9ydCB7IGNyZWF0ZUhvbWVDb250ZW50IH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgY3JlYXRlTWVudUNvbnRlbnQgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50RGl2KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBlbGVtZW50LmlkID0gXCJjb250ZW50XCI7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGVudERpdigpKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJhcigpKTtcblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnRDb250YWluZXIoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBtYWluQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuaWQgPSBcIm1haW4tY29udGVudC1jb250YWluZXJcIjtcblxuICByZXR1cm4gbWFpbkNvbnRlbnRDb250YWluZXI7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnRDb250YWluZXIoKSk7XG5cbmZ1bmN0aW9uIGluamVjdENvbnRlbnQoY3JlYXRlQ29udGVudEZ1bmN0aW9uKSB7XG4gIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNtYWluLWNvbnRlbnQtY29udGFpbmVyXCJcbiAgKTtcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGVudEZ1bmN0aW9uKCkpO1xufVxuXG5pbmplY3RDb250ZW50KGNyZWF0ZUhvbWVDb250ZW50KTtcblxuZnVuY3Rpb24gY2xlYXJDb21wb25lbnQoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNtYWluLWNvbnRlbnQtY29udGFpbmVyXCJcbiAgKTtcbiAgd2hpbGUgKG1haW5Db250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluQ29udGVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRFdmVudE5hdmJhckNoaWxkcmVuKCkge1xuICBjb25zdCBuYXZiYXJDaGlsZHJlbiA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikucXVlcnlTZWxlY3RvckFsbChcIipcIilcbiAgKTtcbiAgbmF2YmFyQ2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJDb21wb25lbnQoKTtcbiAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QudmFsdWUgPT09IFwiaG9tZVwiKSB7XG4gICAgICAgIGluamVjdENvbnRlbnQoY3JlYXRlSG9tZUNvbnRlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdC52YWx1ZSA9PT0gXCJtZW51XCIpIHtcbiAgICAgICAgaW5qZWN0Q29udGVudChjcmVhdGVNZW51Q29udGVudCk7XG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0LnZhbHVlID09PSBcImNvbnRhY3RcIikge1xuICAgICAgICBpbmplY3RDb250ZW50KGNyZWF0ZUNvbnRhY3RDb21wb25lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbmFkZEV2ZW50TmF2YmFyQ2hpbGRyZW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==