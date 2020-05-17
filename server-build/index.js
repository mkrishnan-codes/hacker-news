/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".index.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_Components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/Home */ \"./src/Components/Home.js\");\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/theme */ \"./src/theme.js\");\n/* harmony import */ var _wrapHtml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wrapHtml */ \"./server/wrapHtml.js\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/manu/Documents/live-proj/hacker-earth/hacker-news/server/index.js\";\n// import path from 'path';\n// import fs from 'fs';\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 7777;\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(compression__WEBPACK_IMPORTED_MODULE_7___default()());\n\nconst renderHandler = (req, res) => {\n  const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"ServerStyleSheets\"](); // const preloadedState = store.getState()\n\n  const html = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToNodeStream(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: _src_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Components_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  })))); // const css = sheets.toString();\n\n  res.set('Cache-Control', 'public, max-age=31557600');\n  res.send(Object(_wrapHtml__WEBPACK_IMPORTED_MODULE_6__[\"renderPage\"])(html, ''));\n};\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static('./build'));\napp.use(renderHandler);\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT} 🚚`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/wrapHtml.js":
/*!****************************!*\
  !*** ./server/wrapHtml.js ***!
  \****************************/
/*! exports provided: renderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPage\", function() { return renderPage; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst renderPage = (html, css) => {\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return 'Oops, better luck next time!';\n    }\n\n    return data.replace('<div id=\"root\"></div>', `<div id=\"root\">${html}</div>`).replace('<style id=\"jss-server-side\"></style>', `<style id=\"jss-server-side\">${css}</style>`);\n  });\n};\n\n//# sourceURL=webpack:///./server/wrapHtml.js?");

/***/ }),

/***/ "./src/Components/Home.js":
/*!********************************!*\
  !*** ./src/Components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputBase */ \"@material-ui/core/InputBase\");\n/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Search */ \"@material-ui/icons/Search\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n/* harmony import */ var _redux_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/reducer */ \"./src/redux/reducer.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__);\nvar _jsxFileName = \"/Users/manu/Documents/live-proj/hacker-earth/hacker-news/src/Components/Home.js\";\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst News = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./News */ \"./src/Components/News.js\")));\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  grow: {\n    flexGrow: 1\n  },\n  menuButton: {\n    marginRight: theme.spacing(2)\n  },\n  title: {\n    display: 'none',\n    [theme.breakpoints.up('sm')]: {\n      display: 'block'\n    }\n  },\n  search: {\n    position: 'relative',\n    borderRadius: theme.shape.borderRadius,\n    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"fade\"])(theme.palette.common.white, 0.15),\n    '&:hover': {\n      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"fade\"])(theme.palette.common.white, 0.25)\n    },\n    marginRight: theme.spacing(2),\n    marginLeft: 0,\n    width: '100%',\n    [theme.breakpoints.up('sm')]: {\n      marginLeft: theme.spacing(3),\n      width: 'auto'\n    }\n  },\n  searchIcon: {\n    padding: theme.spacing(0, 2),\n    height: '100%',\n    position: 'absolute',\n    pointerEvents: 'none',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  inputRoot: {\n    color: 'inherit'\n  },\n  inputInput: {\n    padding: theme.spacing(1, 1, 1, 0),\n    // vertical padding + font size from searchIcon\n    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,\n    transition: theme.transitions.create('width'),\n    width: '100%',\n    [theme.breakpoints.up('md')]: {\n      width: '20ch'\n    }\n  },\n  sel: {\n    color: theme.palette.common.white\n  }\n}));\nfunction MainPage(props) {\n  const classes = useStyles();\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[\"useDispatch\"])();\n  const {\n    page\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[\"useSelector\"])(state => state);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (props.load) {\n      async function initDataCall() {\n        const data = await Object(_services_api__WEBPACK_IMPORTED_MODULE_9__[\"GET\"])({\n          tags: 'front_page',\n          page\n        });\n\n        if (data) {\n          dispatch(Object(_redux_reducer__WEBPACK_IMPORTED_MODULE_10__[\"fillNews\"])(data));\n        }\n      }\n\n      initDataCall();\n    } // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  }, [page]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__[\"CssBaseline\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    position: \"fixed\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    edge: \"start\",\n    className: classes.menuButton,\n    color: \"inherit\",\n    \"aria-label\": \"open drawer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    className: classes.title,\n    variant: \"h6\",\n    noWrap: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, \"Hacker News\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.search,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.searchIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 15\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    placeholder: \"Search\\u2026\",\n    classes: {\n      root: classes.inputRoot,\n      input: classes.inputInput\n    },\n    inputProps: {\n      'aria-label': 'search'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__[\"Box\"], {\n    my: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 9\n    }\n  }, props.load && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(News, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 27\n    }\n  }))));\n}\n\n//# sourceURL=webpack:///./src/Components/Home.js?");

/***/ }),

/***/ "./src/redux/reducer.js":
/*!******************************!*\
  !*** ./src/redux/reducer.js ***!
  \******************************/
/*! exports provided: fillNews, updatePage, like, restoreLikes, hide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fillNews\", function() { return fillNews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePage\", function() { return updatePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"like\", function() { return like; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restoreLikes\", function() { return restoreLikes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hide\", function() { return hide; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst postsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'news',\n  initialState: {\n    data: [],\n    page: 0,\n    pages: Number.MAX_VALUE,\n    likesMap: {}\n  },\n  reducers: {\n    fillNews(state, action) {\n      state.data = action.payload.hits;\n      state.pages = action.payload.nbPages;\n    },\n\n    updatePage(state, action) {\n      state.page = action.payload;\n    },\n\n    like(state, action) {\n      if (!isNaN(state.likesMap[action.payload])) {\n        state.likesMap[action.payload] = state.likesMap[action.payload] + 1;\n      } else {\n        const ind = state.data.findIndex(item => item.objectID === action.payload);\n        state.likesMap[action.payload] = state.data[ind].points + 1;\n      }\n\n      localStorage.setItem('likesMap', JSON.stringify(state.likesMap));\n    },\n\n    restoreLikes(state, action) {\n      state.likesMap = action.payload ? action.payload : {};\n    },\n\n    hide(state, action) {\n      const ind = state.data.findIndex(item => item.objectID === action.payload);\n      state.data[ind].hidden = true;\n    }\n\n  }\n});\nconst {\n  actions,\n  reducer\n} = postsSlice;\nconst {\n  fillNews,\n  updatePage,\n  like,\n  restoreLikes,\n  hide\n} = actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./src/redux/reducer.js?");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: GET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET\", function() { return GET; });\nconst dataUrl = 'https://hn.algolia.com/api/v1/search/';\nconst headers = {\n  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'\n};\nconst GET = async params => {\n  try {\n    var url = new URL(dataUrl);\n\n    if (params) {\n      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));\n    }\n\n    let response = await fetch(url, {\n      headers\n    });\n    let data = await response.json();\n    return data;\n  } catch (e) {\n    console.log(e, 'ERROR');\n    return null;\n  }\n};\n\n//# sourceURL=webpack:///./src/services/api.js?");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n // Create a theme instance.\n\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"orange\"],\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"red\"].A400\n    },\n    background: {\n      default: '#fff'\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n//# sourceURL=webpack:///./src/theme.js?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/InputBase\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/InputBase%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons%22?");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Menu\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Menu%22?");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Search\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Search%22?");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");\n\n//# sourceURL=webpack:///external_%22@reduxjs/toolkit%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-google-charts":
/*!**************************************!*\
  !*** external "react-google-charts" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-google-charts\");\n\n//# sourceURL=webpack:///external_%22react-google-charts%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ })

/******/ });