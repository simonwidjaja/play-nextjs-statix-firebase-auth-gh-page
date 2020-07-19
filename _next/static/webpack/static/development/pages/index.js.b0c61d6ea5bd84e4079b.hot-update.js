webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _trendspurt_trendspurt_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @trendspurt/trendspurt-theme */ \"./node_modules/@trendspurt/trendspurt-theme/dist/index.modern.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Data/Repos/Misc/FirebasePlayground/playground_nextjs_static_firebase_auth/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar _default = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_default, _React$Component);\n\n  var _super = _createSuper(_default);\n\n  function _default(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, _default);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      user: null,\n      status: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_default, [{\n    key: \"signOut\",\n    value: function signOut() {\n      firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth().signOut().then(function () {\n        // Sign-out successful.\n        alert('signed out');\n      })[\"catch\"](console.log);\n    }\n  }, {\n    key: \"googleLogin\",\n    value: function googleLogin() {\n      var _this2 = this;\n\n      console.log('googleLogin()');\n      console.log('googleLogin()');\n      console.log('googleLogin()');\n      var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth.GoogleAuthProvider();\n      firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth().signInWithPopup(provider).then(function (result) {\n        _this2.setState({\n          user: result.user\n        }); //document.write(`Hello ${user.displayName}`);\n        // console.log('user:', user);\n\n      })[\"catch\"](console.log);\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this3 = this;\n\n      firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth().onAuthStateChanged(function (authUser) {\n        console.log(authUser);\n\n        if (authUser) {\n          _this3.setState({\n            status: 'SIGNED_IN'\n          });\n        } else {// router.push('/');\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // Your web app's Firebase configuration\n      var firebaseConfig = {\n        apiKey: \"AIzaSyArJJ2dea7jcXEpSOJ5dvDSNCL723QqQfU\",\n        authDomain: \"fir-playground-email.firebaseapp.com\",\n        databaseURL: \"https://fir-playground-email.firebaseio.com\",\n        projectId: \"fir-playground-email\",\n        storageBucket: \"fir-playground-email.appspot.com\",\n        messagingSenderId: \"173985620259\",\n        appId: \"1:173985620259:web:1c0a2f304593c9368fec96\"\n      }; // Initialize Firebase\n      // Singleton approach taken from https://medium.com/@uvictor/simple-firebase-authentication-with-next-js-using-hoc-higher-order-components-8e8931d25cfa\n\n      if (!firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.apps.length) {\n        firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.initializeApp(firebaseConfig);\n      }\n\n      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 7\n        }\n      }, __jsx(\"script\", {\n        src: \"https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 1\n        }\n      }), __jsx(\"script\", {\n        src: \"https://www.gstatic.com/firebasejs/7.16.1/firebase-auth.js\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 1\n        }\n      }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        maxWidth: \"xl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 9\n        }\n      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        container: true,\n        spacing: 3,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }\n      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        item: true,\n        sm: 12,\n        md: 10,\n        xl: 8,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 13\n        }\n      }, __jsx(_trendspurt_trendspurt_theme__WEBPACK_IMPORTED_MODULE_10__[\"Headline\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 15\n        }\n      }, \"Firebase Test\"), __jsx(_trendspurt_trendspurt_theme__WEBPACK_IMPORTED_MODULE_10__[\"Text\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 15\n        }\n      }, \"This publication is still work in progress.\"), __jsx(_trendspurt_trendspurt_theme__WEBPACK_IMPORTED_MODULE_10__[\"Text\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 15\n        }\n      }, \"User: \", this.state.user.email, \" \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 47\n        }\n      }), \"Status: \", this.state.status), __jsx(\"button\", {\n        onClick: this.signOut,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 15\n        }\n      }, \"Sign out\"), __jsx(\"button\", {\n        onClick: this.googleLogin.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 15\n        }\n      }, \"Login with Google\")))));\n    }\n  }]);\n\n  return _default;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJ1c2VyIiwic3RhdHVzIiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsInRoZW4iLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsInJlc3VsdCIsInNldFN0YXRlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aFVzZXIiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJlbWFpbCIsImdvb2dsZUxvZ2luIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0FBTUUsb0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBQ0MsVUFBSSxFQUFFLElBQVA7QUFBYUMsWUFBTSxFQUFFO0FBQXJCLEtBQWI7QUFGaUI7QUFHbEI7Ozs7OEJBRVM7QUFDUkMsMERBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsT0FBaEIsR0FBMEJDLElBQTFCLENBQStCLFlBQVc7QUFDeEM7QUFDQUMsYUFBSyxDQUFDLFlBQUQsQ0FBTDtBQUNELE9BSEQsV0FHU0MsT0FBTyxDQUFDQyxHQUhqQjtBQUlEOzs7a0NBRWE7QUFBQTs7QUFDWkQsYUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FELGFB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RDs7OztFQXRGMEJDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQge0hlYWRsaW5lLCBUZXh0LCBJbWFnZSwgVmlkZW8sIFlvdVR1YmUsIERvd25sb2FkLCBDVEF9IGZyb20gJ0B0cmVuZHNwdXJ0L3RyZW5kc3B1cnQtdGhlbWUnXG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3VzZXI6IG51bGwsIHN0YXR1czogZmFsc2V9O1xuICB9XG5cbiAgc2lnbk91dCgpIHtcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxuICAgICAgYWxlcnQoJ3NpZ25lZCBvdXQnKTtcbiAgICB9KS5jYXRjaChjb25zb2xlLmxvZyk7IFxuICB9XG5cbiAgZ29vZ2xlTG9naW4oKSB7XG4gICAgY29uc29sZS5sb2coJ2dvb2dsZUxvZ2luKCknKTtcbiAgICBjb25zb2xlLmxvZygnZ29vZ2xlTG9naW4oKScpO1xuICAgIGNvbnNvbGUubG9nKCdnb29nbGVMb2dpbigpJyk7XG5cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VyOiByZXN1bHQudXNlcn0pO1xuICAgICAgICAvL2RvY3VtZW50LndyaXRlKGBIZWxsbyAke3VzZXIuZGlzcGxheU5hbWV9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2VyOicsIHVzZXIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKGF1dGhVc2VyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGF1dGhVc2VyKTtcbiAgICAgIGlmIChhdXRoVXNlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6ICdTSUdORURfSU4nXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcm91dGVyLnB1c2goJy8nKTtcbiAgICAgIH1cbiAgICB9KTsgICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG5cblxuICAvLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG4gIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lBckpKMmRlYTdqY1hFcFNPSjVkdkRTTkNMNzIzUXFRZlVcIixcbiAgICBhdXRoRG9tYWluOiBcImZpci1wbGF5Z3JvdW5kLWVtYWlsLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZmlyLXBsYXlncm91bmQtZW1haWwuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiZmlyLXBsYXlncm91bmQtZW1haWxcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImZpci1wbGF5Z3JvdW5kLWVtYWlsLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTczOTg1NjIwMjU5XCIsXG4gICAgYXBwSWQ6IFwiMToxNzM5ODU2MjAyNTk6d2ViOjFjMGEyZjMwNDU5M2M5MzY4ZmVjOTZcIlxuICB9O1xuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXG4gIC8vIFNpbmdsZXRvbiBhcHByb2FjaCB0YWtlbiBmcm9tIGh0dHBzOi8vbWVkaXVtLmNvbS9AdXZpY3Rvci9zaW1wbGUtZmlyZWJhc2UtYXV0aGVudGljYXRpb24td2l0aC1uZXh0LWpzLXVzaW5nLWhvYy1oaWdoZXItb3JkZXItY29tcG9uZW50cy04ZTg5MzFkMjVjZmFcbiAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICB9ICBcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvNy4xNi4xL2ZpcmViYXNlLWFwcC5qc1wiPjwvc2NyaXB0PlxuPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzcuMTYuMS9maXJlYmFzZS1hdXRoLmpzXCI+PC9zY3JpcHQ+XG5cblxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHNtPXsxMn0gbWQ9ezEwfSB4bD17OH0+XG4gICAgICAgICAgICAgIDxIZWFkbGluZT5GaXJlYmFzZSBUZXN0PC9IZWFkbGluZT5cbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgVGhpcyBwdWJsaWNhdGlvbiBpcyBzdGlsbCB3b3JrIGluIHByb2dyZXNzLlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgIFVzZXI6IHt0aGlzLnN0YXRlLnVzZXIuZW1haWx9IDxici8+XG4gICAgICAgICAgICAgICAgU3RhdHVzOiB7dGhpcy5zdGF0ZS5zdGF0dXN9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNpZ25PdXR9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nb29nbGVMb2dpbi5iaW5kKHRoaXMpfT5Mb2dpbiB3aXRoIEdvb2dsZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})