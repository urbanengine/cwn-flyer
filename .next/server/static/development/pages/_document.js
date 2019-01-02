module.exports = /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = require("../../../ssr-module-cache.js"); // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {}
            /******/
        }); // Execute the module function
        /******/
        /******/ /******/ var threw = true;
        /******/ try {
            /******/ modules[moduleId].call(
                module.exports,
                module,
                module.exports,
                __webpack_require__
            );
            /******/ threw = false;
            /******/
        } finally {
            /******/ if (threw) delete installedModules[moduleId];
            /******/
        } // Flag the module as loaded
        /******/
        /******/ /******/ module.l = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
        /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            /******/
        }
        /******/ Object.defineProperty(exports, "__esModule", { value: true });
        /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
        value,
        mode
    ) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (
            mode & 4 &&
            typeof value === "object" &&
            value &&
            value.__esModule
        )
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        /******/ if (mode & 2 && typeof value != "string")
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function(key) {
                        return value[key];
                    }.bind(null, key)
                );
        /******/ return ns;
        /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module["default"];
                  }
                : /******/ function getModuleExports() {
                      return module;
                  };
        /******/ __webpack_require__.d(getter, "a", getter);
        /******/ return getter;
        /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
})(
    /************************************************************************/
    /******/ {
        /***/ "./pages/_document.js":
            /*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    "default",
                    function() {
                        return SiteDocument;
                    }
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ "react"
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_0__
                );
                /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! next/document */ "next/document"
                );
                /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    next_document__WEBPACK_IMPORTED_MODULE_1__
                );
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! styled-components */ "styled-components"
                );
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    styled_components__WEBPACK_IMPORTED_MODULE_2__
                );

                function _typeof(obj) {
                    if (
                        typeof Symbol === "function" &&
                        typeof Symbol.iterator === "symbol"
                    ) {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj &&
                                typeof Symbol === "function" &&
                                obj.constructor === Symbol &&
                                obj !== Symbol.prototype
                                ? "symbol"
                                : typeof obj;
                        };
                    }
                    return _typeof(obj);
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                    }
                }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(
                            target,
                            descriptor.key,
                            descriptor
                        );
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps)
                        _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps)
                        _defineProperties(Constructor, staticProps);
                    return Constructor;
                }

                function _possibleConstructorReturn(self, call) {
                    if (
                        call &&
                        (_typeof(call) === "object" ||
                            typeof call === "function")
                    ) {
                        return call;
                    }
                    return _assertThisInitialized(self);
                }

                function _assertThisInitialized(self) {
                    if (self === void 0) {
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    }
                    return self;
                }

                function _getPrototypeOf(o) {
                    _getPrototypeOf = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function _getPrototypeOf(o) {
                              return o.__proto__ || Object.getPrototypeOf(o);
                          };
                    return _getPrototypeOf(o);
                }

                function _inherits(subClass, superClass) {
                    if (
                        typeof superClass !== "function" &&
                        superClass !== null
                    ) {
                        throw new TypeError(
                            "Super expression must either be null or a function"
                        );
                    }
                    subClass.prototype = Object.create(
                        superClass && superClass.prototype,
                        {
                            constructor: {
                                value: subClass,
                                writable: true,
                                configurable: true
                            }
                        }
                    );
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }

                function _setPrototypeOf(o, p) {
                    _setPrototypeOf =
                        Object.setPrototypeOf ||
                        function _setPrototypeOf(o, p) {
                            o.__proto__ = p;
                            return o;
                        };
                    return _setPrototypeOf(o, p);
                }

                var SiteDocument =
                    /*#__PURE__*/
                    (function(_Document) {
                        _inherits(SiteDocument, _Document);

                        function SiteDocument() {
                            _classCallCheck(this, SiteDocument);

                            return _possibleConstructorReturn(
                                this,
                                _getPrototypeOf(SiteDocument).apply(
                                    this,
                                    arguments
                                )
                            );
                        }

                        _createClass(SiteDocument, [
                            {
                                key: "render",
                                value: function render() {
                                    var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__[
                                        "ServerStyleSheet"
                                    ]();
                                    var main = sheet.collectStyles(
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            next_document__WEBPACK_IMPORTED_MODULE_1__[
                                                "Main"
                                            ],
                                            null
                                        )
                                    );
                                    var styleTags = sheet.getStyleElement();
                                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "html",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            next_document__WEBPACK_IMPORTED_MODULE_1__[
                                                "Head"
                                            ],
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "meta",
                                                {
                                                    httpEquiv:
                                                        "X-UA-Compatible",
                                                    content: "IE=edge,chrome=1"
                                                }
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "meta",
                                                {
                                                    charSet: "utf-8"
                                                }
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "meta",
                                                {
                                                    name: "viewport",
                                                    content:
                                                        "width=device-width, initial-scale=1.0"
                                                }
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "meta",
                                                {
                                                    property: "og:type",
                                                    content: "event"
                                                }
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "meta",
                                                {
                                                    property: "og:url",
                                                    content:
                                                        "https://cwnflyer.com"
                                                }
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "meta",
                                                {
                                                    property: "og:image",
                                                    content:
                                                        "http://api.screenshotmachine.com/?key=cc48ac&dimension=1200x630&format=png&hash=0ce5a0fa9c3712995bfb21b1719381cb&cacheLimit=1&timeout=3000&url=https://www.cwnflyer.com/"
                                                }
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "meta",
                                                {
                                                    property: "og:description",
                                                    content:
                                                        "CoWorking Night is a free weekly conference where professionals come to learn, connect, and collaborate.  Each week features a new lineup of workshops.  See what's happening this week!"
                                                }
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "meta",
                                                {
                                                    property: "og:site_name",
                                                    content: "CoWorking Night"
                                                }
                                            ),
                                            styleTags
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "body",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    className: "root"
                                                },
                                                main
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                next_document__WEBPACK_IMPORTED_MODULE_1__[
                                                    "NextScript"
                                                ],
                                                null
                                            )
                                        )
                                    );
                                }
                            }
                        ]);

                        return SiteDocument;
                    })(next_document__WEBPACK_IMPORTED_MODULE_1___default.a);

                /***/
            },

        /***/ 0:
            /*!**********************************!*\
  !*** multi ./pages/_document.js ***!
  \**********************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                    /*! ./pages/_document.js */ "./pages/_document.js"
                );

                /***/
            },

        /***/ "next/document":
            /*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require("next/document");

                /***/
            },

        /***/ react:
            /*!************************!*\
  !*** external "react" ***!
  \************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require("react");

                /***/
            },

        /***/ "styled-components":
            /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require("styled-components");

                /***/
            }

        /******/
    }
);
//# sourceMappingURL=_document.js.map
