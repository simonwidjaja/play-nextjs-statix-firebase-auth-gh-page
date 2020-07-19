webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _trendspurt_trendspurt_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @trendspurt/trendspurt-theme */ \"./node_modules/@trendspurt/trendspurt-theme/dist/index.modern.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Data/Repos/Misc/FirebasePlayground/playground_nextjs_static_firebase_auth/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar _default = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_default, _React$Component);\n\n  var _super = _createSuper(_default);\n\n  function _default(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, _default);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      user: null,\n      status: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_default, [{\n    key: \"signOut\",\n    value: function signOut() {\n      firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth().signOut().then(function () {\n        // Sign-out successful.\n        alert('signed out');\n      })[\"catch\"](console.log);\n    }\n  }, {\n    key: \"googleLogin\",\n    value: function googleLogin() {\n      var _this2 = this;\n\n      console.log('googleLogin()');\n      console.log('googleLogin()');\n      console.log('googleLogin()');\n      var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth.GoogleAuthProvider();\n      firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth().signInWithPopup(provider).then(function (result) {\n        _this2.setState({\n          user: result.user\n        }); //document.write(`Hello ${user.displayName}`);\n        // console.log('user:', user);\n\n      })[\"catch\"](console.log);\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this3 = this;\n\n      firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth().onAuthStateChanged(function (authUser) {\n        console.log(authUser);\n\n        if (authUser) {\n          _this3.setState({\n            status: 'SIGNED_IN'\n          });\n        } else {// router.push('/');\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // Your web app's Firebase configuration\n      var firebaseConfig = {\n        apiKey: \"AIzaSyArJJ2dea7jcXEpSOJ5dvDSNCL723QqQfU\",\n        authDomain: \"fir-playground-email.firebaseapp.com\",\n        databaseURL: \"https://fir-playground-email.firebaseio.com\",\n        projectId: \"fir-playground-email\",\n        storageBucket: \"fir-playground-email.appspot.com\",\n        messagingSenderId: \"173985620259\",\n        appId: \"1:173985620259:web:1c0a2f304593c9368fec96\"\n      }; // Initialize Firebase\n      // Singleton approach taken from https://medium.com/@uvictor/simple-firebase-authentication-with-next-js-using-hoc-higher-order-components-8e8931d25cfa\n\n      if (!firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.apps.length) {\n        firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.initializeApp(firebaseConfig);\n      }\n\n      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 7\n        }\n      }, __jsx(\"script\", {\n        src: \"https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 1\n        }\n      }), __jsx(\"script\", {\n        src: \"https://www.gstatic.com/firebasejs/7.16.1/firebase-auth.js\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 1\n        }\n      }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        maxWidth: \"xl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 9\n        }\n      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        container: true,\n        spacing: 3,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }\n      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        item: true,\n        sm: 12,\n        md: 10,\n        xl: 8,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 13\n        }\n      }, __jsx(_trendspurt_trendspurt_theme__WEBPACK_IMPORTED_MODULE_10__[\"Headline\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 15\n        }\n      }, \"Firebase Test\"), __jsx(_trendspurt_trendspurt_theme__WEBPACK_IMPORTED_MODULE_10__[\"Text\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 15\n        }\n      }, \"This publication is still work in progress.\"), __jsx(_trendspurt_trendspurt_theme__WEBPACK_IMPORTED_MODULE_10__[\"Text\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 15\n        }\n      }, \"User: \", this.state.user, \" \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 41\n        }\n      }), \"Status: \", this.state.status), __jsx(\"button\", {\n        onClick: this.signOut,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 15\n        }\n      }, \"Sign out\"), __jsx(\"button\", {\n        onClick: this.googleLogin.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 15\n        }\n      }, \"Login with Google\")))));\n    }\n  }]);\n\n  return _default;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJ1c2VyIiwic3RhdHVzIiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsInRoZW4iLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsInJlc3VsdCIsInNldFN0YXRlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aFVzZXIiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJnb29nbGVMb2dpbiIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQU1FLG9CQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUNDLFVBQUksRUFBRSxJQUFQO0FBQWFDLFlBQU0sRUFBRTtBQUFyQixLQUFiO0FBRmlCO0FBR2xCOzs7OzhCQUVTO0FBQ1JDLDBEQUFRLENBQUNDLElBQVQsR0FBZ0JDLE9BQWhCLEdBQTBCQyxJQUExQixDQUErQixZQUFXO0FBQ3hDO0FBQ0FDLGFBQUssQ0FBQyxZQUFELENBQUw7QUFDRCxPQUhELFdBR1NDLE9BQU8sQ0FBQ0MsR0FIakI7QUFJRDs7O2tDQUVhO0FBQUE7O0FBQ1pELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBRCxhQUFPLENBQUND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Q0MsUyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCB7SGVhZGxpbmUsIFRleHQsIEltYWdlLCBWaWRlbywgWW91VHViZSwgRG93bmxvYWQsIENUQX0gZnJvbSAnQHRyZW5kc3B1cnQvdHJlbmRzcHVydC10aGVtZSdcblxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7dXNlcjogbnVsbCwgc3RhdHVzOiBmYWxzZX07XG4gIH1cblxuICBzaWduT3V0KCkge1xuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXG4gICAgICBhbGVydCgnc2lnbmVkIG91dCcpO1xuICAgIH0pLmNhdGNoKGNvbnNvbGUubG9nKTsgXG4gIH1cblxuICBnb29nbGVMb2dpbigpIHtcbiAgICBjb25zb2xlLmxvZygnZ29vZ2xlTG9naW4oKScpO1xuICAgIGNvbnNvbGUubG9nKCdnb29nbGVMb2dpbigpJyk7XG4gICAgY29uc29sZS5sb2coJ2dvb2dsZUxvZ2luKCknKTtcblxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXI6IHJlc3VsdC51c2VyfSk7XG4gICAgICAgIC8vZG9jdW1lbnQud3JpdGUoYEhlbGxvICR7dXNlci5kaXNwbGF5TmFtZX1gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXI6JywgdXNlcik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aFVzZXIgPT4ge1xuICAgICAgY29uc29sZS5sb2coYXV0aFVzZXIpO1xuICAgICAgaWYgKGF1dGhVc2VyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogJ1NJR05FRF9JTidcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgfVxuICAgIH0pOyAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuXG4gIC8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbiAgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUFySkoyZGVhN2pjWEVwU09KNWR2RFNOQ0w3MjNRcVFmVVwiLFxuICAgIGF1dGhEb21haW46IFwiZmlyLXBsYXlncm91bmQtZW1haWwuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9maXItcGxheWdyb3VuZC1lbWFpbC5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJmaXItcGxheWdyb3VuZC1lbWFpbFwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZmlyLXBsYXlncm91bmQtZW1haWwuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxNzM5ODU2MjAyNTlcIixcbiAgICBhcHBJZDogXCIxOjE3Mzk4NTYyMDI1OTp3ZWI6MWMwYTJmMzA0NTkzYzkzNjhmZWM5NlwiXG4gIH07XG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcbiAgLy8gU2luZ2xldG9uIGFwcHJvYWNoIHRha2VuIGZyb20gaHR0cHM6Ly9tZWRpdW0uY29tL0B1dmljdG9yL3NpbXBsZS1maXJlYmFzZS1hdXRoZW50aWNhdGlvbi13aXRoLW5leHQtanMtdXNpbmctaG9jLWhpZ2hlci1vcmRlci1jb21wb25lbnRzLThlODkzMWQyNWNmYVxuICBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gIH0gIFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG5cbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy83LjE2LjEvZmlyZWJhc2UtYXBwLmpzXCI+PC9zY3JpcHQ+XG48c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvNy4xNi4xL2ZpcmViYXNlLWF1dGguanNcIj48L3NjcmlwdD5cblxuXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezEyfSBtZD17MTB9IHhsPXs4fT5cbiAgICAgICAgICAgICAgPEhlYWRsaW5lPkZpcmViYXNlIFRlc3Q8L0hlYWRsaW5lPlxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICBUaGlzIHB1YmxpY2F0aW9uIGlzIHN0aWxsIHdvcmsgaW4gcHJvZ3Jlc3MuXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgVXNlcjoge3RoaXMuc3RhdGUudXNlcn0gPGJyLz5cbiAgICAgICAgICAgICAgICBTdGF0dXM6IHt0aGlzLnN0YXRlLnN0YXR1c31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2lnbk91dH0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdvb2dsZUxvZ2luLmJpbmQodGhpcyl9PkxvZ2luIHdpdGggR29vZ2xlPC9idXR0b24+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})