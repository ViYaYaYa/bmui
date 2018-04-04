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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      radio: ['111', { name: '选项2', value: '222' }, { name: '禁用选项', value: '333', disabled: true }, '444', '555'],
      radioModel: '',
      radioList: ['radio-list', { name: '选项', value: '222', disabled: true }, '选项很长很长很长很长很长很长很长很长很长很长很长很长很长'],
      radioListModel: '',
      checkListLeft: ['check-list-left', '222', { name: '选项名称', value: '333', disabled: true }],
      checkListLeftModel: [],
      checkListRight: ['check-list-right', '222', { name: '选项名称超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长', value: '333', disabled: true }],
      checkListRightModel: [],
      selector1: '选项1',
      selector2: { name: '选项2的名称', value: '222' },
      selector2Disabled: true,
      fieldText1Model: '',
      fieldText2Model: '',
      fieldParagraph: '',
      fieldStatus: '',
      searchbox: 'searchbox',
      searchboxEmpty: false,
      segment: ['标题1', { name: '标题2带值', value: '333', mark: 999 }, '标题3'],
      segmentIndex: 2
    };
  },

  methods: {
    selectorChange: function selectorChange(res) {
      console.log(res);
    },
    fieldBtnChange: function fieldBtnChange(ev) {
      console.log(ev);
    },
    fieldBtn: function fieldBtn() {
      var _this = this;

      this.fieldStatus = 'loading';
      setTimeout(function () {
        _this.fieldStatus = 'success';
      }, 1000);
      setTimeout(function () {
        _this.fieldStatus = 'warning';
      }, 2000);
      setTimeout(function () {
        _this.fieldStatus = 'fail';
      }, 3000);
      setTimeout(function () {
        _this.fieldStatus = '';
      }, 4000);
    },
    segmentChange: function segmentChange(index) {
      this.segmentIndex = index;
    }
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _vue3 = __webpack_require__(3);

var _vue4 = _interopRequireDefault(_vue3);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 加载插件

// 组件库
_vue2.default.use(_vue4.default);

// eslint-disable-next-line

// 页面模型
// Vue
new _vue2.default({
  el: '#app',
  render: function render(h) {
    return h(_index2.default);
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = bmui;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e79f902_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(11);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(5)
}
var normalizeComponent = __webpack_require__(10)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e79f902_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e79f902", Component.options)
  } else {
    hotAPI.reload("data-v-0e79f902", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("63a3cc2f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0e79f902\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0e79f902\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(true);
// imports


// module
exports.push([module.i, "\n.wrap {\n  position: relative;\n  border: 1px solid red;\n  height: 300px;\n  overflow: auto;\n}\n", "", {"version":3,"sources":["C:/Users/huangjiali/Documents/_MY/bmui/docs/docs/index.vue"],"names":[],"mappings":";AAiGA;EACA,mBAAA;EACA,sBAAA;EACA,cAAA;EACA,eAAA;CACA","file":"index.vue","sourcesContent":["<template>\r\n  <div>\r\n    <h2>cell</h2>\r\n    <div class=\"wrap\">\r\n      <bmui-cell-arrow1 title=\"cell-arrow1\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut magni perferendis rem hic quam, sunt cum, culpa inventore obcaecati at harum nam eaque fugit fuga perspiciatis. Illum, nihil voluptatibus.\" />\r\n      <bmui-cell-arrow2 title=\"cell-arrow2\" />\r\n      <bmui-cell-text title=\"cell-text\" content=\"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aut debitis nihil distinctio dolorum repudiandae laborum aliquid sapiente, totam culpa sint reiciendis modi dolor quasi dolorem iusto atque error qui.\" />\r\n      <bmui-cell-paragraph title=\"cell-paragraph\" content=\"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit commodi corporis repellendus ipsum aliquid asperiores rerum quos. Aliquam, non nam alias eveniet, voluptate, maxime facere dolor provident rem recusandae excepturi.\" />\r\n    </div>\r\n    <h2>choice</h2>\r\n    <div class=\"wrap\">\r\n      <bmui-radio title=\"radio\" :items=\"radio\" v-model=\"radioModel\" />\r\n      <bmui-radio-list :items=\"radioList\" v-model=\"radioListModel\" />\r\n      <bmui-check-list-left :items=\"checkListLeft\" v-model=\"checkListLeftModel\" />\r\n      <bmui-check-list-right :items=\"checkListRight\" v-model=\"checkListRightModel\" />\r\n      <bmui-selector :item=\"selector1\" @change=\"selectorChange\" />\r\n      <bmui-selector :item=\"selector2\" :disabled=\"selector2Disabled\" @change=\"selectorChange\" />\r\n    </div>\r\n    <h2>field</h2>\r\n    <div class=\"wrap\">\r\n      <bmui-field-arrow1 title=\"field-arrow1\"/>\r\n      <bmui-field-arrow2 title=\"field-arrow2\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veritatis eveniet magnam animi atque natus dolorum ex a tenetur commodi earum ducimus, voluptatibus corrupti amet, ad autem praesentium optio tempora?\" />\r\n      <bmui-field-text1 title=\"field-text1\" v-model=\"fieldText1Model\" />\r\n      <bmui-field-text2 title=\"field-text2\" v-model=\"fieldText2Model\" />\r\n      <bmui-field-paragraph maxlength=\"100\" v-model=\"fieldParagraph\" />\r\n      <bmui-field-btn title=\"field-btn\" @change=\"fieldBtnChange\" @submit=\"fieldBtn\" :status=\"fieldStatus\" />\r\n      <bmui-field-btn title=\"field-btn\" type=\"password\" maxlength=\"8\" @submit=\"fieldBtn\" status=\"loading\" />\r\n    </div>\r\n    <h2>searchbox</h2>\r\n    <div class=\"wrap\">\r\n      <bmui-searchbox v-model=\"searchbox\" placeholder=\"placeholder\" @submit=\"searchboxEmpty = true\" />\r\n      <bmui-searchbox-empty v-if=\"searchboxEmpty\" />\r\n    </div>\r\n    <h2>segment</h2>\r\n    <div class=\"wrap\">\r\n      <bmui-segment :items=\"segment\" :index=\"segmentIndex\" @change=\"segmentChange\" />\r\n    </div>\r\n    <h2>empty</h2>\r\n    <div class=\"wrap\">\r\n      <bmui-empty btn=\"按钮要监听组件click.native事件\" />\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      radio: ['111', { name: '选项2', value: '222' }, { name: '禁用选项', value: '333', disabled: true }, '444', '555'],\r\n      radioModel: '',\r\n      radioList: ['radio-list', { name: '选项', value: '222', disabled: true }, '选项很长很长很长很长很长很长很长很长很长很长很长很长很长'],\r\n      radioListModel: '',\r\n      checkListLeft: ['check-list-left', '222', { name: '选项名称', value: '333', disabled: true }],\r\n      checkListLeftModel: [],\r\n      checkListRight: ['check-list-right', '222', { name: '选项名称超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长', value: '333', disabled: true }],\r\n      checkListRightModel: [],\r\n      selector1: '选项1',\r\n      selector2: { name: '选项2的名称', value: '222' },\r\n      selector2Disabled: true,\r\n      fieldText1Model: '',\r\n      fieldText2Model: '',\r\n      fieldParagraph: '',\r\n      fieldStatus: '',\r\n      searchbox: 'searchbox',\r\n      searchboxEmpty: false,\r\n      segment: ['标题1', { name: '标题2带值', value: '333', mark: 999 }, '标题3'],\r\n      segmentIndex: 2\r\n    }\r\n  },\r\n  methods: {\r\n    selectorChange (res) {\r\n      console.log(res)\r\n    },\r\n    fieldBtnChange (ev) {\r\n      console.log(ev)\r\n    },\r\n    fieldBtn () {\r\n      this.fieldStatus = 'loading'\r\n      setTimeout(() => {\r\n        this.fieldStatus = 'success'\r\n      }, 1000)\r\n      setTimeout(() => {\r\n        this.fieldStatus = 'warning'\r\n      }, 2000)\r\n      setTimeout(() => {\r\n        this.fieldStatus = 'fail'\r\n      }, 3000)\r\n      setTimeout(() => {\r\n        this.fieldStatus = ''\r\n      }, 4000)\r\n    },\r\n    segmentChange (index) {\r\n      this.segmentIndex = index\r\n    }\r\n  }\r\n}\r\n</script>\r\n<style>\r\n  .wrap {\r\n    position: relative;\r\n    border: 1px solid red;\r\n    height: 300px;\r\n    overflow: auto;\r\n  }\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(9)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("cell")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "wrap" },
      [
        _c("bmui-cell-arrow1", {
          attrs: {
            title: "cell-arrow1",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut magni perferendis rem hic quam, sunt cum, culpa inventore obcaecati at harum nam eaque fugit fuga perspiciatis. Illum, nihil voluptatibus."
          }
        }),
        _vm._v(" "),
        _c("bmui-cell-arrow2", { attrs: { title: "cell-arrow2" } }),
        _vm._v(" "),
        _c("bmui-cell-text", {
          attrs: {
            title: "cell-text",
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aut debitis nihil distinctio dolorum repudiandae laborum aliquid sapiente, totam culpa sint reiciendis modi dolor quasi dolorem iusto atque error qui."
          }
        }),
        _vm._v(" "),
        _c("bmui-cell-paragraph", {
          attrs: {
            title: "cell-paragraph",
            content:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit commodi corporis repellendus ipsum aliquid asperiores rerum quos. Aliquam, non nam alias eveniet, voluptate, maxime facere dolor provident rem recusandae excepturi."
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("h2", [_vm._v("choice")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "wrap" },
      [
        _c("bmui-radio", {
          attrs: { title: "radio", items: _vm.radio },
          model: {
            value: _vm.radioModel,
            callback: function($$v) {
              _vm.radioModel = $$v
            },
            expression: "radioModel"
          }
        }),
        _vm._v(" "),
        _c("bmui-radio-list", {
          attrs: { items: _vm.radioList },
          model: {
            value: _vm.radioListModel,
            callback: function($$v) {
              _vm.radioListModel = $$v
            },
            expression: "radioListModel"
          }
        }),
        _vm._v(" "),
        _c("bmui-check-list-left", {
          attrs: { items: _vm.checkListLeft },
          model: {
            value: _vm.checkListLeftModel,
            callback: function($$v) {
              _vm.checkListLeftModel = $$v
            },
            expression: "checkListLeftModel"
          }
        }),
        _vm._v(" "),
        _c("bmui-check-list-right", {
          attrs: { items: _vm.checkListRight },
          model: {
            value: _vm.checkListRightModel,
            callback: function($$v) {
              _vm.checkListRightModel = $$v
            },
            expression: "checkListRightModel"
          }
        }),
        _vm._v(" "),
        _c("bmui-selector", {
          attrs: { item: _vm.selector1 },
          on: { change: _vm.selectorChange }
        }),
        _vm._v(" "),
        _c("bmui-selector", {
          attrs: { item: _vm.selector2, disabled: _vm.selector2Disabled },
          on: { change: _vm.selectorChange }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("h2", [_vm._v("field")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "wrap" },
      [
        _c("bmui-field-arrow1", { attrs: { title: "field-arrow1" } }),
        _vm._v(" "),
        _c("bmui-field-arrow2", {
          attrs: {
            title: "field-arrow2",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veritatis eveniet magnam animi atque natus dolorum ex a tenetur commodi earum ducimus, voluptatibus corrupti amet, ad autem praesentium optio tempora?"
          }
        }),
        _vm._v(" "),
        _c("bmui-field-text1", {
          attrs: { title: "field-text1" },
          model: {
            value: _vm.fieldText1Model,
            callback: function($$v) {
              _vm.fieldText1Model = $$v
            },
            expression: "fieldText1Model"
          }
        }),
        _vm._v(" "),
        _c("bmui-field-text2", {
          attrs: { title: "field-text2" },
          model: {
            value: _vm.fieldText2Model,
            callback: function($$v) {
              _vm.fieldText2Model = $$v
            },
            expression: "fieldText2Model"
          }
        }),
        _vm._v(" "),
        _c("bmui-field-paragraph", {
          attrs: { maxlength: "100" },
          model: {
            value: _vm.fieldParagraph,
            callback: function($$v) {
              _vm.fieldParagraph = $$v
            },
            expression: "fieldParagraph"
          }
        }),
        _vm._v(" "),
        _c("bmui-field-btn", {
          attrs: { title: "field-btn", status: _vm.fieldStatus },
          on: { change: _vm.fieldBtnChange, submit: _vm.fieldBtn }
        }),
        _vm._v(" "),
        _c("bmui-field-btn", {
          attrs: {
            title: "field-btn",
            type: "password",
            maxlength: "8",
            status: "loading"
          },
          on: { submit: _vm.fieldBtn }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("h2", [_vm._v("searchbox")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "wrap" },
      [
        _c("bmui-searchbox", {
          attrs: { placeholder: "placeholder" },
          on: {
            submit: function($event) {
              _vm.searchboxEmpty = true
            }
          },
          model: {
            value: _vm.searchbox,
            callback: function($$v) {
              _vm.searchbox = $$v
            },
            expression: "searchbox"
          }
        }),
        _vm._v(" "),
        _vm.searchboxEmpty ? _c("bmui-searchbox-empty") : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c("h2", [_vm._v("segment")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "wrap" },
      [
        _c("bmui-segment", {
          attrs: { items: _vm.segment, index: _vm.segmentIndex },
          on: { change: _vm.segmentChange }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("h2", [_vm._v("empty")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "wrap" },
      [_c("bmui-empty", { attrs: { btn: "按钮要监听组件click.native事件" } })],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e79f902", esExports)
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=index.build.js.map