"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./app/ui/dashboard/nav-links.tsx":
/*!****************************************!*\
  !*** ./app/ui/dashboard/nav-links.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navlink: function() { return /* binding */ Navlink; },\n/* harmony export */   \"default\": function() { return /* binding */ NavLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default,Navlink auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Map of links to display in the side navigation.\n// Depending on the size of the application, this would be stored in a database.\nconst links = [\n    {\n        name: \"Home\",\n        href: \"/dashboard\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"Invoices\",\n        href: \"/dashboard/invoices\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: \"Customers\",\n        href: \"/dashboard/customers\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }\n];\nfunction NavLinks() {\n    _s();\n    //to get the pathname inside this component\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: links.map((link)=>{\n            const LinkIcon = link.icon;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: link.href,\n                className: //apply styles depends on pathname\n                //for pages user is on, render it blue in nav link \n                (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3\", {\n                    \"bg-sky-100 text-blue-600\": pathname === link.href\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkIcon, {\n                        className: \"w-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/solomon/Downloads/Github/Projects/nextjs-router-project/app/ui/dashboard/nav-links.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hidden md:block\",\n                        children: link.name\n                    }, void 0, false, {\n                        fileName: \"/Users/solomon/Downloads/Github/Projects/nextjs-router-project/app/ui/dashboard/nav-links.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, link.name, true, {\n                fileName: \"/Users/solomon/Downloads/Github/Projects/nextjs-router-project/app/ui/dashboard/nav-links.tsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(NavLinks, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = NavLinks;\nfunction Navlink() {\n    const pathname = next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname;\n}\n_c1 = Navlink;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavLinks\");\n$RefreshReg$(_c1, \"Navlink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9kYXNoYm9hcmQvbmF2LWxpbmtzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUtxQztBQUVSO0FBQ2lCO0FBQ3RCO0FBRXhCLGtEQUFrRDtBQUNsRCxnRkFBZ0Y7QUFDaEYsTUFBTU0sUUFBUTtJQUNaO1FBQUVDLE1BQU07UUFBUUMsTUFBTTtRQUFjQyxNQUFNUixzSUFBUUE7SUFBQztJQUNuRDtRQUNFTSxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTVAsc0lBQXFCQTtJQUM3QjtJQUNBO1FBQUVLLE1BQU07UUFBYUMsTUFBTTtRQUF3QkMsTUFBTVQsc0lBQWFBO0lBQUM7Q0FDeEU7QUFFYyxTQUFTVTs7SUFDdEIsMkNBQTJDO0lBQzNDLE1BQU1DLFdBQVdQLDREQUFXQTtJQUM1QixxQkFDRTtrQkFDR0UsTUFBTU0sR0FBRyxDQUFDLENBQUNDO1lBQ1YsTUFBTUMsV0FBV0QsS0FBS0osSUFBSTtZQUMxQixxQkFDRSw4REFBQ04saURBQUlBO2dCQUVISyxNQUFNSyxLQUFLTCxJQUFJO2dCQUNmTyxXQUNFLGtDQUFrQztnQkFDbEMsbURBQW1EO2dCQUNuRFYsZ0RBQUlBLENBQUMsd0xBQ0w7b0JBQ0UsNEJBQTRCTSxhQUFhRSxLQUFLTCxJQUFJO2dCQUNwRDs7a0NBR0YsOERBQUNNO3dCQUFTQyxXQUFVOzs7Ozs7a0NBQ3BCLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBbUJGLEtBQUtOLElBQUk7Ozs7Ozs7ZUFacENNLEtBQUtOLElBQUk7Ozs7O1FBZXBCOztBQUdOO0dBM0J3Qkc7O1FBRUxOLHdEQUFXQTs7O0tBRk5NO0FBNkJqQixTQUFTTztJQUNkLE1BQU1OLFdBQVdQLHdEQUFXQTtBQUM5QjtNQUZnQmEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2Rhc2hib2FyZC9uYXYtbGlua3MudHN4PzU1ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHtcbiAgVXNlckdyb3VwSWNvbixcbiAgSG9tZUljb24sXG4gIERvY3VtZW50RHVwbGljYXRlSWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuXG4vLyBNYXAgb2YgbGlua3MgdG8gZGlzcGxheSBpbiB0aGUgc2lkZSBuYXZpZ2F0aW9uLlxuLy8gRGVwZW5kaW5nIG9uIHRoZSBzaXplIG9mIHRoZSBhcHBsaWNhdGlvbiwgdGhpcyB3b3VsZCBiZSBzdG9yZWQgaW4gYSBkYXRhYmFzZS5cbmNvbnN0IGxpbmtzID0gW1xuICB7IG5hbWU6ICdIb21lJywgaHJlZjogJy9kYXNoYm9hcmQnLCBpY29uOiBIb21lSWNvbiB9LFxuICB7XG4gICAgbmFtZTogJ0ludm9pY2VzJyxcbiAgICBocmVmOiAnL2Rhc2hib2FyZC9pbnZvaWNlcycsXG4gICAgaWNvbjogRG9jdW1lbnREdXBsaWNhdGVJY29uLFxuICB9LFxuICB7IG5hbWU6ICdDdXN0b21lcnMnLCBocmVmOiAnL2Rhc2hib2FyZC9jdXN0b21lcnMnLCBpY29uOiBVc2VyR3JvdXBJY29uIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZMaW5rcygpIHtcbiAgLy90byBnZXQgdGhlIHBhdGhuYW1lIGluc2lkZSB0aGlzIGNvbXBvbmVudFxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgY29uc3QgTGlua0ljb24gPSBsaW5rLmljb247XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGtleT17bGluay5uYW1lfVxuICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgLy9hcHBseSBzdHlsZXMgZGVwZW5kcyBvbiBwYXRobmFtZVxuICAgICAgICAgICAgICAvL2ZvciBwYWdlcyB1c2VyIGlzIG9uLCByZW5kZXIgaXQgYmx1ZSBpbiBuYXYgbGluayBcbiAgICAgICAgICAgICAgY2xzeChcImZsZXggaC1bNDhweF0gZ3JvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcm91bmRlZC1tZCBiZy1ncmF5LTUwIHAtMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXNreS0xMDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBtZDpmbGV4LW5vbmUgbWQ6anVzdGlmeS1zdGFydCBtZDpwLTIgbWQ6cHgtM1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2JnLXNreS0xMDAgdGV4dC1ibHVlLTYwMCc6IHBhdGhuYW1lID09PSBsaW5rLmhyZWYsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmtJY29uIGNsYXNzTmFtZT1cInctNlwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj57bGluay5uYW1lfTwvcD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdmxpbmsoKXtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZVxufSJdLCJuYW1lcyI6WyJVc2VyR3JvdXBJY29uIiwiSG9tZUljb24iLCJEb2N1bWVudER1cGxpY2F0ZUljb24iLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJjbHN4IiwibGlua3MiLCJuYW1lIiwiaHJlZiIsImljb24iLCJOYXZMaW5rcyIsInBhdGhuYW1lIiwibWFwIiwibGluayIsIkxpbmtJY29uIiwiY2xhc3NOYW1lIiwicCIsIk5hdmxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/dashboard/nav-links.tsx\n"));

/***/ })

});