"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody,\r\n#clear-completed {\r\n  background-color: rgba(0, 0, 0, 0.07);\r\n}\r\n\r\nmain {\r\n  background-color: #fff;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n  width: 90%;\r\n  margin: 10% auto;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\nheader,\r\n.form-container,\r\n.task,\r\n#clear-completed {\r\n  padding: 8px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.225);\r\n}\r\n\r\nheader,\r\n#form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#refreshImg {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n/* Form */\r\n#form input,\r\n.edit {\r\n  border: none;\r\n  outline: none;\r\n  width: 95%;\r\n}\r\n\r\n#add-to-list ul {\r\n  list-style-type: none;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.task-info {\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\nbutton {\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#clear-completed {\r\n  text-align: center;\r\n}\r\n\r\n#clear-completer p:hover {\r\n  cursor: pointer;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),


/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storeTask.js */ \"./src/modules/storeTask.js\");\n/* harmony import */ var _modules_handleCompleted_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handleCompleted.js */ \"./src/modules/handleCompleted.js\");\n/* harmony import */ var _assets_refresh_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/refresh.png */ \"./src/assets/refresh.png\");\n/* harmony import */ var _assets_enter_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/enter.png */ \"./src/assets/enter.png\");\n/* harmony import */ var _modules_removeTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/removeTask */ \"./src/modules/removeTask.js\");\n\n\n\n\n\n\n\n\nconst refreshImg = document.getElementById('refreshImg');\nconst enterImg = document.getElementById('enterImg');\n\nrefreshImg.src = _assets_refresh_png__WEBPACK_IMPORTED_MODULE_4__;\nenterImg.src = _assets_enter_png__WEBPACK_IMPORTED_MODULE_5__;\n\nconst display = () => {\n  const tasks = (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.getTask)() || [];\n  if (tasks) {\n    tasks.map((task) => (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task));\n  }\n};\n\ndisplay();\n\ndocument.getElementById('form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const tasks = (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.getTask)();\n  const taskDescription = document.getElementById('task-description').value;\n  const todoTasks = {\n    index: tasks.length + 1,\n    description: taskDescription,\n    completed: false,\n  };\n\n  if (taskDescription !== '') {\n    (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoTasks);\n    (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.addTaskItem)(todoTasks);\n    document.getElementById('form').reset();\n  }\n});\n\nconst textInput = document.querySelectorAll('.edit');\n\ntextInput.forEach((task, index) => {\n  task.addEventListener('change', (e) => {\n    const updateText = e.target.value;\n    const tasks = (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.getTask)();\n    tasks[index].description = updateText;\n    (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.updateTask)(index, tasks[index].description);\n    window.location.reload();\n  });\n});\n\ntextInput.forEach((todo, index) => {\n  todo.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      const updateInput = e.target.value;\n      const tasks = (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.getTask)();\n      tasks[index].description = updateInput;\n      (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.updateTask)(index, tasks[index].description);\n      window.location.reload();\n    }\n  });\n});\n\nwindow.remove = (index) => {\n  (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(index);\n  (0,_modules_removeTask__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(index);\n};\n\nwindow.completedTask = (index) => {\n  (0,_modules_handleCompleted_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index);\n};\n\ndocument.getElementById('clear-completed').addEventListener('click', () => {\n  const tasks = (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.getTask)();\n  const clearCompleted = tasks.filter((task) => !task.completed);\n  clearCompleted.forEach((task, i) => {\n    task.index = i;\n  });\n\n  localStorage.setItem('data', JSON.stringify(clearCompleted));\n  window.location.reload();\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTask.js */ \"./src/modules/removeTask.js\");\n/* harmony import */ var _storeTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeTask.js */ \"./src/modules/storeTask.js\");\n\n\n\nconst list = document.getElementById('list');\n\nconst addTask = (task) => {\n  list.innerHTML += `\n    <li id=${task.index} class=\"task\">\n      <div class=\"task-info\">\n        <input type=\"checkbox\" ${task.completed ? 'checked' : ''} id=check${task.index} onclick=\"completedTask(${task.index})\">\n        <input value=\"${task.description}\" type=\"text\" class=\"edit\">\n      </div>\n      <button type=\"button\" onclick=\"remove(${task.index})\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"M12.025 21.15q-1 0-1.7-.7t-.7-1.675q0-1 .7-1.7t1.675-.7q1 0 1.688.7.687.7.687 1.7 0 .975-.687 1.675-.688.7-1.663.7Zm0-6.775q-1 0-1.7-.7T9.625 12q0-1 .7-1.688.7-.687 1.675-.687 1 0 1.688.687.687.688.687 1.663 0 1-.687 1.7-.688.7-1.663.7Zm0-6.75q-1 0-1.7-.713-.7-.712-.7-1.687 0-1 .7-1.688.7-.687 1.675-.687 1 0 1.688.687.687.688.687 1.688 0 .975-.687 1.687-.688.713-1.663.713Z\" /></svg>\n      </button>\n      </li>\n  `;\n};\n\nwindow.remove = (index) => {\n  (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index);\n  (0,_storeTask_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(index);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/handleCompleted.js":
/*!****************************************!*\
  !*** ./src/modules/handleCompleted.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storeTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeTask.js */ \"./src/modules/storeTask.js\");\n\n\nconst handleCompleted = (index) => {\n  const completed = document.getElementById(`check${index}`).toggleAttribute('checked');\n  const tasks = (0,_storeTask_js__WEBPACK_IMPORTED_MODULE_0__.getTask)();\n\n  tasks[index].completed = completed;\n  localStorage.setItem('data', JSON.stringify(tasks));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleCompleted);\n\n//# sourceURL=webpack://todo-list/./src/modules/handleCompleted.js?");

/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeTask = (index) => {\n  const taskIndex = document.getElementById(index);\n  taskIndex.remove();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/removeTask.js?");

/***/ }),

/***/ "./src/modules/storeTask.js":
/*!**********************************!*\
  !*** ./src/modules/storeTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskItem: () => (/* binding */ addTaskItem),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   getTask: () => (/* binding */ getTask),\n/* harmony export */   updateTask: () => (/* binding */ updateTask)\n/* harmony export */ });\nconst getTask = () => {\n  let tasks;\n  if (localStorage.getItem('data') === null) {\n    tasks = [];\n  } else {\n    tasks = JSON.parse(localStorage.getItem('data'));\n  }\n  return tasks;\n};\n\nconst addTaskItem = (task) => {\n  const tasks = getTask();\n  tasks.push(task);\n  localStorage.setItem('data', JSON.stringify(tasks));\n};\n\nconst deleteTask = (index) => {\n  const tasks = getTask();\n  const deletedTasks = tasks.filter((task) => task.index !== index);\n  deletedTasks.forEach((task, i) => {\n    task.index = i;\n  });\n  localStorage.setItem('data', JSON.stringify(deletedTasks));\n  window.location.reload();\n};\n\nconst updateTask = (index, description) => {\n  const tasks = getTask();\n  const task = tasks.find((taskItem) => taskItem.index === index);\n  task.description = description;\n  localStorage.setItem('data', JSON.stringify(tasks));\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/storeTask.js?");

/***/ }),

/***/ "./src/assets/enter.png":
/*!******************************!*\
  !*** ./src/assets/enter.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"enter.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/enter.png?");

/***/ }),

/***/ "./src/assets/refresh.png":
/*!********************************!*\
  !*** ./src/assets/refresh.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"refresh.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/refresh.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storeTask.js */ \"./src/modules/storeTask.js\");\n/* harmony import */ var _assets_refresh_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/refresh.png */ \"./src/assets/refresh.png\");\n/* harmony import */ var _assets_enter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/enter.png */ \"./src/assets/enter.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst refreshImg = document.getElementById('refreshImg');\r\nconst enterImg = document.getElementById('enterImg');\r\n\r\nrefreshImg.src = _assets_refresh_png__WEBPACK_IMPORTED_MODULE_3__;\r\nenterImg.src = _assets_enter_png__WEBPACK_IMPORTED_MODULE_4__;\r\n\r\nconst display = () => {\r\n  const tasks = (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.getTask)() || [];\r\n  if (tasks) {\r\n    tasks.map((task) => (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task));\r\n  }\r\n};\r\n\r\ndisplay();\r\n\r\ndocument.getElementById('form').addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const tasks = (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.getTask)();\r\n  const taskDescription = document.getElementById('task-description').value;\r\n  const todoTasks = {\r\n    index: tasks.length + 1,\r\n    description: taskDescription,\r\n    completed: false,\r\n  };\r\n\r\n  if (taskDescription !== '') {\r\n    (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoTasks);\r\n    (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.addTaskItem)(todoTasks);\r\n    document.getElementById('form').reset();\r\n  }\r\n});\r\n\r\nconst textInput = document.querySelectorAll('.edit');\r\n\r\ntextInput.forEach((task, index) => {\r\n  task.addEventListener('change', (e) => {\r\n    const updateText = e.target.value;\r\n    const tasks = (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.getTask)();\r\n    tasks[index].description = updateText;\r\n    (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.updateTask)(index, tasks[index].description);\r\n    window.location.reload();\r\n  });\r\n});\r\n\r\ntextInput.forEach((todo, index) => {\r\n  todo.addEventListener('keypress', (e) => {\r\n    if (e.key === 'Enter') {\r\n      const updateInput = e.target.value;\r\n      const tasks = (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.getTask)();\r\n      tasks[index].description = updateInput;\r\n      (0,_modules_storeTask_js__WEBPACK_IMPORTED_MODULE_2__.updateTask)(index, tasks[index].description);\r\n      window.location.reload();\r\n    }\r\n  });\r\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTask.js */ \"./src/modules/removeTask.js\");\n/* harmony import */ var _storeTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeTask.js */ \"./src/modules/storeTask.js\");\n\r\n\r\n\r\nconst list = document.getElementById('list');\r\n\r\nconst addTask = (task) => {\r\n  list.innerHTML += `\r\n    <li id=${task.index} class=\"task\">\r\n      <div class=\"task-info\">\r\n        <input type=\"checkbox\" ${task.completed ? 'checked' : ''}>\r\n        <input value=\"${task.description}\" type=\"text\" class=\"edit\">\r\n      </div>\r\n      <button type=\"button\" onclick=\"remove(${task.index})\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"M12.025 21.15q-1 0-1.7-.7t-.7-1.675q0-1 .7-1.7t1.675-.7q1 0 1.688.7.687.7.687 1.7 0 .975-.687 1.675-.688.7-1.663.7Zm0-6.775q-1 0-1.7-.7T9.625 12q0-1 .7-1.688.7-.687 1.675-.687 1 0 1.688.687.687.688.687 1.663 0 1-.687 1.7-.688.7-1.663.7Zm0-6.75q-1 0-1.7-.713-.7-.712-.7-1.687 0-1 .7-1.688.7-.687 1.675-.687 1 0 1.688.687.687.688.687 1.688 0 .975-.687 1.687-.688.713-1.663.713Z\" /></svg>\r\n      </button>\r\n      </li>\r\n  `;\r\n};\r\n\r\nwindow.remove = (index) => {\r\n  (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index);\r\n  (0,_storeTask_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(index);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeTask = (index) => {\r\n  const taskIndex = document.getElementById(index);\r\n  taskIndex.remove();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/removeTask.js?");

/***/ }),

/***/ "./src/modules/storeTask.js":
/*!**********************************!*\
  !*** ./src/modules/storeTask.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskItem: () => (/* binding */ addTaskItem),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   getTask: () => (/* binding */ getTask),\n/* harmony export */   updateTask: () => (/* binding */ updateTask)\n/* harmony export */ });\nconst getTask = () => {\r\n  let tasks;\r\n  if (localStorage.getItem('data') === null) {\r\n    tasks = [];\r\n  } else {\r\n    tasks = JSON.parse(localStorage.getItem('data'));\r\n  }\r\n  return tasks;\r\n};\r\n\r\nconst addTaskItem = (task) => {\r\n  const tasks = getTask();\r\n  tasks.push(task);\r\n  localStorage.setItem('data', JSON.stringify(tasks));\r\n};\r\n\r\nconst deleteTask = (index) => {\r\n  const tasks = getTask();\r\n  const deletedTasks = tasks.filter((task) => task.index !== index);\r\n  deletedTasks.forEach((task, i) => {\r\n    task.index = i;\r\n  });\r\n  localStorage.setItem('data', JSON.stringify(deletedTasks));\r\n  window.location.reload();\r\n};\r\n\r\nconst updateTask = (index, description) => {\r\n  const tasks = getTask();\r\n  const task = tasks.find((taskItem) => taskItem.index === index);\r\n  task.description = description;\r\n  localStorage.setItem('data', JSON.stringify(tasks));\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/storeTask.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);