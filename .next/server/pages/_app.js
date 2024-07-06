/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store.js":
/*!**********************!*\
  !*** ./app/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_hero_findPlaceSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/hero/findPlaceSlice */ \"./features/hero/findPlaceSlice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        hero: _features_hero_findPlaceSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUNXO0FBRXRELE1BQU1FLFFBQVFGLGdFQUFjQSxDQUFDO0lBQ2hDRyxTQUFTO1FBQ0xDLE1BQU1ILHFFQUFjQTtJQUN4QjtBQUNKLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3RyaXAtbmV4dC8uL2FwcC9zdG9yZS5qcz9jYWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGZpbmRQbGFjZVNsaWNlIGZyb20gXCIuLi9mZWF0dXJlcy9oZXJvL2ZpbmRQbGFjZVNsaWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgICAgaGVybzogZmluZFBsYWNlU2xpY2UsXHJcbiAgICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiZmluZFBsYWNlU2xpY2UiLCJzdG9yZSIsInJlZHVjZXIiLCJoZXJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store.js\n");

/***/ }),

/***/ "./components/common/ScrollTop.jsx":
/*!*****************************************!*\
  !*** ./components/common/ScrollTop.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollToTop)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ScrollToTop() {\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Top: 0 takes us all the way back to the top of the page\n    // Behavior: smooth keeps it smooth!\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Button is displayed after scrolling for 500 pixels\n        const toggleVisibility = ()=>{\n            if (window.pageYOffset > 500) {\n                setIsVisible(true);\n            } else {\n                setIsVisible(false);\n            }\n        };\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return ()=>window.removeEventListener(\"scroll\", toggleVisibility);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll-to-top scroll-to-target\",\n                onClick: scrollToTop,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"icon icon-arrow-top-right\"\n                }, void 0, false, {\n                    fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/guialagamar-site/guialagamarweb/components/common/ScrollTop.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/guialagamar-site/guialagamarweb/components/common/ScrollTop.jsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9TY3JvbGxUb3AuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUU3QixTQUFTRSxjQUFjO0lBQ3BDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELDBEQUEwRDtJQUMxRCxvQ0FBb0M7SUFDcEMsTUFBTUksY0FBYyxJQUFNO1FBQ3hCQyxPQUFPQyxRQUFRLENBQUM7WUFDZEMsS0FBSztZQUNMQyxVQUFVO1FBQ1o7SUFDRjtJQUVBVCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QscURBQXFEO1FBQ3JELE1BQU1VLG1CQUFtQixJQUFNO1lBQzdCLElBQUlKLE9BQU9LLFdBQVcsR0FBRyxLQUFLO2dCQUM1QlAsYUFBYSxJQUFJO1lBQ25CLE9BQU87Z0JBQ0xBLGFBQWEsS0FBSztZQUNwQixDQUFDO1FBQ0g7UUFFQUUsT0FBT00sZ0JBQWdCLENBQUMsVUFBVUY7UUFFbEMsT0FBTyxJQUFNSixPQUFPTyxtQkFBbUIsQ0FBQyxVQUFVSDtJQUNwRCxHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDR1AsMkJBQ0M7c0JBQ0UsNEVBQUNXO2dCQUFJQyxXQUFVO2dCQUFpQ0MsU0FBU1g7MEJBQ3ZELDRFQUFDWTtvQkFBS0YsV0FBVTs7Ozs7Ozs7Ozs7OztBQU01QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ290cmlwLW5leHQvLi9jb21wb25lbnRzL2NvbW1vbi9TY3JvbGxUb3AuanN4PzcyZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsVG9Ub3AoKSB7XHJcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gVG9wOiAwIHRha2VzIHVzIGFsbCB0aGUgd2F5IGJhY2sgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxyXG4gIC8vIEJlaGF2aW9yOiBzbW9vdGgga2VlcHMgaXQgc21vb3RoIVxyXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBCdXR0b24gaXMgZGlzcGxheWVkIGFmdGVyIHNjcm9sbGluZyBmb3IgNTAwIHBpeGVsc1xyXG4gICAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDUwMCkge1xyXG4gICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRvZ2dsZVZpc2liaWxpdHkpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0b2dnbGVWaXNpYmlsaXR5KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNWaXNpYmxlICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtdG8tdG9wIHNjcm9sbC10by10YXJnZXRcIiBvbkNsaWNrPXtzY3JvbGxUb1RvcH0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1hcnJvdy10b3AtcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2Nyb2xsVG9Ub3AiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ0b2dnbGVWaXNpYmlsaXR5IiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/ScrollTop.jsx\n");

/***/ }),

/***/ "./features/hero/findPlaceSlice.js":
/*!*****************************************!*\
  !*** ./features/hero/findPlaceSlice.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCurrentTab\": () => (/* binding */ addCurrentTab),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"findPlaceSlice\": () => (/* binding */ findPlaceSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    tabs: [\n        {\n            id: 1,\n            name: \"Hotel\",\n            icon: \"icon-bed\"\n        },\n        {\n            id: 2,\n            name: \"Tour\",\n            icon: \"icon-destination\"\n        },\n        {\n            id: 3,\n            name: \"Activity\",\n            icon: \"icon-ski\"\n        },\n        {\n            id: 4,\n            name: \"Holyday Rentals\",\n            icon: \"icon-home\"\n        },\n        {\n            id: 5,\n            name: \"Car\",\n            icon: \"icon-car\"\n        },\n        {\n            id: 6,\n            name: \"Cruise\",\n            icon: \"icon-yatch\"\n        },\n        {\n            id: 7,\n            name: \"Flights\",\n            icon: \"icon-tickets\"\n        }\n    ],\n    currentTab: \"Hotel\"\n};\nconst findPlaceSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"find-place\",\n    initialState,\n    reducers: {\n        addCurrentTab: (state, { payload  })=>{\n            state.currentTab = payload;\n        }\n    }\n});\nconst { addCurrentTab  } = findPlaceSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findPlaceSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9oZXJvL2ZpbmRQbGFjZVNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLGVBQWU7SUFDbkJDLE1BQU07UUFDSjtZQUFFQyxJQUFJO1lBQUdDLE1BQU07WUFBU0MsTUFBTTtRQUFXO1FBQ3pDO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFRQyxNQUFNO1FBQW1CO1FBQ2hEO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFZQyxNQUFNO1FBQVc7UUFDNUM7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQW1CQyxNQUFNO1FBQVk7UUFDcEQ7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQU9DLE1BQU07UUFBVztRQUN2QztZQUFFRixJQUFJO1lBQUdDLE1BQU07WUFBVUMsTUFBTTtRQUFhO1FBQzVDO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFXQyxNQUFNO1FBQWU7S0FDaEQ7SUFDREMsWUFBWTtBQUNkO0FBRU8sTUFBTUMsaUJBQWlCUCw2REFBV0EsQ0FBQztJQUN4Q0ksTUFBTTtJQUNOSDtJQUNBTyxVQUFVO1FBQ1JDLGVBQWUsQ0FBQ0MsT0FBTyxFQUFFQyxRQUFPLEVBQUUsR0FBSztZQUNyQ0QsTUFBTUosVUFBVSxHQUFHSztRQUNyQjtJQUNGO0FBQ0YsR0FBRztBQUVJLE1BQU0sRUFBRUYsY0FBYSxFQUFFLEdBQUdGLGVBQWVLLE9BQU8sQ0FBQztBQUN4RCxpRUFBZUwsZUFBZU0sT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ290cmlwLW5leHQvLi9mZWF0dXJlcy9oZXJvL2ZpbmRQbGFjZVNsaWNlLmpzPzRkMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHRhYnM6IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiSG90ZWxcIiwgaWNvbjogXCJpY29uLWJlZFwiIH0sXHJcbiAgICB7IGlkOiAyLCBuYW1lOiBcIlRvdXJcIiwgaWNvbjogXCJpY29uLWRlc3RpbmF0aW9uXCIgfSxcclxuICAgIHsgaWQ6IDMsIG5hbWU6IFwiQWN0aXZpdHlcIiwgaWNvbjogXCJpY29uLXNraVwiIH0sXHJcbiAgICB7IGlkOiA0LCBuYW1lOiBcIkhvbHlkYXkgUmVudGFsc1wiLCBpY29uOiBcImljb24taG9tZVwiIH0sXHJcbiAgICB7IGlkOiA1LCBuYW1lOiBcIkNhclwiLCBpY29uOiBcImljb24tY2FyXCIgfSxcclxuICAgIHsgaWQ6IDYsIG5hbWU6IFwiQ3J1aXNlXCIsIGljb246IFwiaWNvbi15YXRjaFwiIH0sXHJcbiAgICB7IGlkOiA3LCBuYW1lOiBcIkZsaWdodHNcIiwgaWNvbjogXCJpY29uLXRpY2tldHNcIiB9LFxyXG4gIF0sXHJcbiAgY3VycmVudFRhYjogXCJIb3RlbFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbmRQbGFjZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiZmluZC1wbGFjZVwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkQ3VycmVudFRhYjogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50VGFiID0gcGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRDdXJyZW50VGFiIH0gPSBmaW5kUGxhY2VTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBmaW5kUGxhY2VTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ0YWJzIiwiaWQiLCJuYW1lIiwiaWNvbiIsImN1cnJlbnRUYWIiLCJmaW5kUGxhY2VTbGljZSIsInJlZHVjZXJzIiwiYWRkQ3VycmVudFRhYiIsInN0YXRlIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/hero/findPlaceSlice.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_common_ScrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/ScrollTop */ \"./components/common/ScrollTop.jsx\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/effect-cards */ \"./node_modules/swiper/modules/effect-cards/effect-cards.min.css\");\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/store */ \"./app/store.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nif (false) {}\nfunction App({ Component , pageProps  }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_1___default().init({\n            duration: 1200,\n            once: true\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_11__.Provider, {\n            store: _app_store__WEBPACK_IMPORTED_MODULE_12__.store,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/guialagamar-site/guialagamarweb/pages/_app.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_ScrollTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/guialagamar-site/guialagamarweb/pages/_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/guialagamar-site/guialagamarweb/pages/_app.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/guialagamar-site/guialagamarweb/pages/_app.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNCO0FBQ1k7QUFDb0I7QUFDbEM7QUFDVztBQUNBO0FBQ0Q7QUFDRztBQUNQO0FBQ0k7QUFDUztBQUNGO0FBRXJDLElBQUksS0FBNkIsRUFBRSxFQUVsQztBQUVjLFNBQVNNLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRFAsZ0RBQVNBLENBQUMsSUFBTTtRQUNkRCwrQ0FBUSxDQUFDO1lBQ1BVLFVBQVU7WUFDVkMsTUFBTSxJQUFJO1FBQ1o7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNULGtEQUFRQTtZQUFDQyxPQUFPQSw4Q0FBS0E7OzhCQUNwQiw4REFBQ0c7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzhCQUN4Qiw4REFBQ04sb0VBQVFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWpCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3RyaXAtbmV4dC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW9zIGZyb20gXCJhb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNyb2xsVG9wIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9TY3JvbGxUb3BcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL3Njcm9sbGJhclwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9lZmZlY3QtY2FyZHNcIjtcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vYXBwL3N0b3JlXCI7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHJlcXVpcmUoXCJib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXBcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBb3MuaW5pdCh7XG4gICAgICBkdXJhdGlvbjogMTIwMCxcbiAgICAgIG9uY2U6IHRydWUsXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPFNyb2xsVG9wIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBb3MiLCJ1c2VFZmZlY3QiLCJTcm9sbFRvcCIsIlByb3ZpZGVyIiwic3RvcmUiLCJyZXF1aXJlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaW5pdCIsImR1cmF0aW9uIiwib25jZSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards/effect-cards.min.css":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards/effect-cards.min.css ***!
  \***********************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/modules/navigation/navigation.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.min.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/modules/pagination/pagination.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/modules/pagination/pagination.min.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar/scrollbar.min.css":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar/scrollbar.min.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();