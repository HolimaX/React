var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a2, b) => (typeof require !== "undefined" ? require : a2)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i2 = 0; i2 < 10; i2++) {
          test2["_" + String.fromCharCode(i2)] = i2;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            if (propIsEnumerable.call(from, symbols[i2])) {
              to[symbols[i2]] = from[symbols[i2]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement2, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement2(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i2 = 0; i2 < expectedValues.length; i2++) {
            if (is(propValue, expectedValues[i2])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker2 = arrayOfTypeCheckers[i3];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement2(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-adsense/lib/google.js
var require_google = __commonJS({
  "node_modules/react-adsense/lib/google.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i2 = 0; i2 < props.length; i2++) {
          var descriptor = props[i2];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = __require("react");
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Google = function(_React$Component) {
      _inherits(Google2, _React$Component);
      function Google2() {
        _classCallCheck(this, Google2);
        return _possibleConstructorReturn(this, (Google2.__proto__ || Object.getPrototypeOf(Google2)).apply(this, arguments));
      }
      _createClass(Google2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (window)
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      }, {
        key: "render",
        value: function render() {
          return _react2.default.createElement("ins", {
            className: this.props.className + " adsbygoogle",
            style: this.props.style,
            "data-ad-client": this.props.client,
            "data-ad-slot": this.props.slot,
            "data-ad-layout": this.props.layout,
            "data-ad-layout-key": this.props.layoutKey,
            "data-ad-format": this.props.format,
            "data-full-width-responsive": this.props.responsive
          });
        }
      }]);
      return Google2;
    }(_react2.default.Component);
    exports.default = Google;
    Google.propTypes = {
      className: _propTypes2.default.string,
      style: _propTypes2.default.object,
      // eslint-disable-line
      client: _propTypes2.default.string.isRequired,
      slot: _propTypes2.default.string.isRequired,
      layout: _propTypes2.default.string,
      layoutKey: _propTypes2.default.string,
      format: _propTypes2.default.string,
      responsive: _propTypes2.default.string
    };
    Google.defaultProps = {
      className: "",
      style: { display: "block" },
      format: "auto",
      layout: "",
      layoutKey: "",
      responsive: "false"
    };
  }
});

// node_modules/react-adsense/lib/baidu.js
var require_baidu = __commonJS({
  "node_modules/react-adsense/lib/baidu.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i2 = 0; i2 < props.length; i2++) {
          var descriptor = props[i2];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = __require("react");
    var _react2 = _interopRequireDefault(_react);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Baidu = function(_React$Component) {
      _inherits(Baidu2, _React$Component);
      function Baidu2() {
        _classCallCheck(this, Baidu2);
        return _possibleConstructorReturn(this, (Baidu2.__proto__ || Object.getPrototypeOf(Baidu2)).apply(this, arguments));
      }
      _createClass(Baidu2, [{
        key: "render",
        value: function render() {
          return _react2.default.createElement(
            "div",
            { className: "adsbybaidu" },
            "TODO"
          );
        }
      }]);
      return Baidu2;
    }(_react2.default.Component);
    exports.default = Baidu;
  }
});

// node_modules/react-adsense/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-adsense/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _google = require_google();
    var _google2 = _interopRequireDefault(_google);
    var _baidu = require_baidu();
    var _baidu2 = _interopRequireDefault(_baidu);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var AdSense2 = {
      Google: _google2.default,
      Baidu: _baidu2.default
    };
    exports.default = AdSense2;
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i2 = 0; i2 < arguments.length; i2++) {
          var arg = arguments[i2];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/jsonp/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/jsonp/node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n2 = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n2 * y;
        case "days":
        case "day":
        case "d":
          return n2 * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n2 * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n2 * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n2 * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n2;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    function plural(ms, n2, name) {
      if (ms < n2) {
        return;
      }
      if (ms < n2 * 1.5) {
        return Math.floor(ms / n2) + " " + name;
      }
      return Math.ceil(ms / n2) + " " + name + "s";
    }
  }
});

// node_modules/jsonp/node_modules/debug/src/debug.js
var require_debug = __commonJS({
  "node_modules/jsonp/node_modules/debug/src/debug.js"(exports, module) {
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i2;
      for (i2 in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i2);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled)
          return;
        var self = debug;
        var curr = +/* @__PURE__ */ new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i2 = 0; i2 < args.length; i2++) {
          args[i2] = arguments[i2];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%")
            return match;
          index++;
          var formatter = exports.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i2 = 0; i2 < len; i2++) {
        if (!split[i2])
          continue;
        namespaces = split[i2].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i2, len;
      for (i2 = 0, len = exports.skips.length; i2 < len; i2++) {
        if (exports.skips[i2].test(name)) {
          return false;
        }
      }
      for (i2 = 0, len = exports.names.length; i2 < len; i2++) {
        if (exports.names[i2].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error)
        return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/jsonp/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/jsonp/node_modules/debug/src/browser.js"(exports, module) {
    exports = module.exports = require_debug();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2)
        return;
      var c2 = "color: " + this.color;
      args.splice(1, 0, c2, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match)
          return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c2);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e2) {
      }
    }
    function load() {
      var r2;
      try {
        r2 = exports.storage.debug;
      } catch (e2) {
      }
      if (!r2 && typeof process !== "undefined" && "env" in process) {
        r2 = process.env.DEBUG;
      }
      return r2;
    }
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e2) {
      }
    }
  }
});

// node_modules/jsonp/index.js
var require_jsonp = __commonJS({
  "node_modules/jsonp/index.js"(exports, module) {
    var debug = require_browser()("jsonp");
    module.exports = jsonp2;
    var count = 0;
    function noop() {
    }
    function jsonp2(url, opts, fn) {
      if ("function" == typeof opts) {
        fn = opts;
        opts = {};
      }
      if (!opts)
        opts = {};
      var prefix = opts.prefix || "__jp";
      var id = opts.name || prefix + count++;
      var param = opts.param || "callback";
      var timeout = null != opts.timeout ? opts.timeout : 6e4;
      var enc = encodeURIComponent;
      var target = document.getElementsByTagName("script")[0] || document.head;
      var script;
      var timer;
      if (timeout) {
        timer = setTimeout(function() {
          cleanup();
          if (fn)
            fn(new Error("Timeout"));
        }, timeout);
      }
      function cleanup() {
        if (script.parentNode)
          script.parentNode.removeChild(script);
        window[id] = noop;
        if (timer)
          clearTimeout(timer);
      }
      function cancel() {
        if (window[id]) {
          cleanup();
        }
      }
      window[id] = function(data) {
        debug("jsonp got", data);
        cleanup();
        if (fn)
          fn(null, data);
      };
      url += (~url.indexOf("?") ? "&" : "?") + param + "=" + enc(id);
      url = url.replace("?&", "?");
      debug('jsonp req "%s"', url);
      script = document.createElement("script");
      script.src = url;
      target.parentNode.insertBefore(script, target);
      return cancel;
    }
  }
});

// src/actions/beerActions.js
var beerActions_exports = {};
__export(beerActions_exports, {
  displayBeer: () => displayBeer,
  displayPlatformapp: () => displayPlatformapp,
  fetchBeers: () => fetchBeers,
  fetchMoreBeers: () => fetchMoreBeers,
  fetchMorePlatformApps: () => fetchMorePlatformApps,
  fetchPlatformApps: () => fetchPlatformApps,
  handleFavourite: () => handleFavourite,
  handleFavouritePlatformapps: () => handleFavouritePlatformapps,
  searchBeers: () => searchBeers,
  searchPlatformapps: () => searchPlatformapps
});

// src/actions/types.js
var beerActionTypes = {
  FETCH_PLATFORMAPPS: "FETCH_PLATFORMAPPS",
  FETCHING_PLATFORMAPPS: "FETCHING_PLATFORMAPPS",
  FETCH_MORE_PLATFORMAPPS: "FETCH_MORE_PLATFORMAPPS",
  SEARCH_PLATFORMAPPS: "SEARCH_PLATFORMAPPS",
  HANDLE_FAVOURITE_PLATFORMAPP: "HANDLE_FAVOURITE_PLATFORMAPP",
  FETCHING_PLATFORMAPPS_ERROR: "FETCHING_PLATFORMAPPS_ERROR",
  DISPLAY_PLATFORMAPP: "DISPLAY_PLATFORMAPP",
  FETCH_BEERS: "FETCH_BEERS",
  FETCHING_BEERS: "FETCHING_BEERS",
  FETCH_MORE_BEERS: "FETCH_MORE_BEERS",
  SEARCH_BEERS: "SEARCH_BEERS",
  HANDLE_FAVOURITE_BEER: "HANDLE_FAVOURITE_BEER",
  DISPLAY_BEER: "DISPLAY_BEER"
};

// src/actions/beerActions.js
var AWS = typeof window !== "undefined" && window.AWS ? window.AWS : null;
var replaceCharacters = (str) => {
  return str.replace(/\./g, "_").replace(/@/g, "-at-");
};
var formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}${month}${year}`;
};
var getPcdBaseUrl = (pcd_url) => {
  const base = pcd_url || process.env.REACT_APP_PCD_PATH || "https://api.example.com/";
  return base.endsWith("/") ? base : `${base}/`;
};
var MAX_RETRIES = 10;
var RETRY_DELAY = 5e3;
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var isPlatformAppsHalted = false;
var fetchPlatformAppsWithRetry = async (url, maxAttempts = MAX_RETRIES) => {
  if (isPlatformAppsHalted) {
    throw new Error("PlatformApps API requests are halted due to previous permanent failure.");
  }
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok)
        throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (error) {
      lastError = error;
      if (attempt === maxAttempts) {
        console.error(`[FINAL ATTEMPT ${attempt}/${maxAttempts}] Permanently failed: ${url}. Error: ${error.message}`);
        isPlatformAppsHalted = true;
        break;
      }
      console.warn(`[Attempt ${attempt}/${maxAttempts}] Failed: ${url}. Retrying in ${RETRY_DELAY / 1e3}s...`);
      await sleep(RETRY_DELAY);
    }
  }
  throw lastError;
};
var fetchPlatformApps = (page = 1, pcd_url = process.env.REACT_APP_PCD_PATH) => async (dispatch, getState) => {
  if (page === 1)
    isPlatformAppsHalted = false;
  const state = getState && getState().beer || {};
  if (state.isLoading || isPlatformAppsHalted)
    return;
  dispatch({ type: beerActionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });
  try {
    const baseUrl = getPcdBaseUrl(pcd_url);
    const url = `${baseUrl}api/people`;
    const platformapps = await fetchPlatformAppsWithRetry(url);
    dispatch({
      type: beerActionTypes.FETCH_PLATFORMAPPS,
      payload: { platformapps, page, isLoading: false, error: null }
    });
  } catch (error) {
    console.error("fetchPlatformApps failed permanently after max retries:", error);
    dispatch({
      type: beerActionTypes.FETCH_PLATFORMAPPS,
      payload: { platformapps: [], page, isLoading: false, error: "Failed to load platform applications." }
    });
  }
};
var fetchMorePlatformApps = (page, pcd_url = process.env.REACT_APP_PCD_PATH) => async (dispatch, getState) => {
  const state = getState && getState().beer || {};
  if (state.isLoading || isPlatformAppsHalted)
    return;
  dispatch({ type: beerActionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });
  try {
    const baseUrl = getPcdBaseUrl(pcd_url);
    const url = `${baseUrl}api/people/${page}`;
    const platformapps = await fetchPlatformAppsWithRetry(url);
    dispatch({
      type: beerActionTypes.FETCH_MORE_PLATFORMAPPS,
      payload: { platformapps, page, isLoading: false, error: null }
    });
  } catch (error) {
    console.error("fetchMorePlatformApps failed permanently after max retries:", error);
    dispatch({
      type: beerActionTypes.FETCH_MORE_PLATFORMAPPS,
      payload: { platformapps: [], page, isLoading: false, error: "Failed to load more platform applications." }
    });
  }
};
var searchPlatformapps = (keyword, pcd_url = process.env.REACT_APP_PCD_PATH) => async (dispatch, getState) => {
  isPlatformAppsHalted = false;
  if (getState && getState().beer?.isLoading || isPlatformAppsHalted)
    return;
  dispatch({ type: beerActionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });
  try {
    const baseUrl = getPcdBaseUrl(pcd_url);
    const url = `${baseUrl}api/people/${encodeURIComponent(keyword)}`;
    const platformapps = await fetchPlatformAppsWithRetry(url);
    dispatch({
      type: beerActionTypes.SEARCH_PLATFORMAPPS,
      payload: { platformapps, isLoading: false, error: null }
    });
  } catch (error) {
    console.error("searchPlatformapps failed permanently after max retries:", error);
    dispatch({
      type: beerActionTypes.SEARCH_PLATFORMAPPS,
      payload: { platformapps: [], isLoading: false, error: "Failed to search platform applications." }
    });
  }
};
var handleFavouritePlatformapps = (platformapp) => (dispatch) => dispatch({
  type: beerActionTypes.HANDLE_FAVOURITE_PLATFORMAPP,
  payload: { platformapp }
});
var displayPlatformapp = (platformapp, pcd_url = process.env.REACT_APP_PCD_PATH) => async (dispatch, getState) => {
  if (getState && getState().beer?.isLoading || isPlatformAppsHalted)
    return;
  dispatch({ type: beerActionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });
  try {
    const baseUrl = getPcdBaseUrl(pcd_url);
    const id = platformapp.voteid || platformapp.id || "";
    const url = `${baseUrl}api/people/${encodeURIComponent(id)}`;
    const platformapps = await fetchPlatformAppsWithRetry(url);
    let selected = { ...platformapp, similar: platformapps };
    dispatch({
      type: beerActionTypes.DISPLAY_PLATFORMAPP,
      payload: { selected, isLoading: false }
    });
  } catch (error) {
    console.warn("API displayPlatformapp failed, checking S3 fallback:", error);
    if (AWS && process.env.REACT_APP_S3_BUCKET) {
      try {
        const s3 = new AWS.S3();
        const user = getState && getState().user || {};
        const email = user.email_verified || user.email || "default";
        const params = {
          Bucket: process.env.REACT_APP_S3_BUCKET,
          Key: `${replaceCharacters(email)}/${formatDate(/* @__PURE__ */ new Date())}_mockuser_chart_sleep.json`
        };
        s3.getObject(params, (err, data) => {
          if (err) {
            console.warn("S3 fallback failed:", err);
            dispatch({
              type: beerActionTypes.DISPLAY_PLATFORMAPP,
              payload: { selected: platformapp, isLoading: false }
            });
          } else {
            try {
              const platformapps = JSON.parse(data.Body.toString("utf-8"));
              let selected = { ...platformapp, similar: platformapps };
              dispatch({
                type: beerActionTypes.DISPLAY_PLATFORMAPP,
                payload: { selected, isLoading: false }
              });
            } catch (parseErr) {
              dispatch({
                type: beerActionTypes.DISPLAY_PLATFORMAPP,
                payload: { selected: platformapp, isLoading: false }
              });
            }
          }
        });
        return;
      } catch (s3InitErr) {
        console.warn("AWS S3 initialization error:", s3InitErr);
      }
    }
    dispatch({
      type: beerActionTypes.DISPLAY_PLATFORMAPP,
      payload: { selected: platformapp, isLoading: false }
    });
  }
};
var isApiHalted = false;
var fetchWithRetry = async (url, maxAttempts = MAX_RETRIES) => {
  if (isApiHalted) {
    throw new Error("API requests are halted due to previous permanent failure.");
  }
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok)
        throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (error) {
      lastError = error;
      if (attempt === maxAttempts) {
        console.error(`[FINAL ATTEMPT ${attempt}/${maxAttempts}] Permanently failed: ${url}. Error: ${error.message}`);
        isApiHalted = true;
        break;
      }
      console.warn(`[Attempt ${attempt}/${maxAttempts}] Failed: ${url}. Retrying in ${RETRY_DELAY / 1e3}s...`);
      await sleep(RETRY_DELAY);
    }
  }
  throw lastError;
};
var fetchBeers = (page = 1) => async (dispatch, getState) => {
  if (page === 1)
    isApiHalted = false;
  const state = getState && getState().beer || {};
  if (state.isLoading || state.error || isApiHalted)
    return;
  dispatch({ type: beerActionTypes.FETCHING_BEERS, payload: { isLoading: true } });
  try {
    const url = `https://api.punkapi.com/v2/beers?page=${page}`;
    const beers = await fetchWithRetry(url);
    dispatch({
      type: beerActionTypes.FETCH_BEERS,
      payload: { beers, page, isLoading: false, error: null }
    });
  } catch (error) {
    console.error("fetchBeers failed permanently after max retries:", error);
    dispatch({
      type: beerActionTypes.FETCH_BEERS,
      payload: { beers: [], page, isLoading: false, error: "Failed to load beers after several attempts." }
    });
  }
};
var fetchMoreBeers = (page) => async (dispatch, getState) => {
  const state = getState && getState().beer || {};
  if (state.isLoading || state.error || isApiHalted)
    return;
  dispatch({ type: beerActionTypes.FETCHING_BEERS, payload: { isLoading: true } });
  try {
    const url = `https://api.punkapi.com/v2/beers?page=${page}`;
    const beers = await fetchWithRetry(url);
    dispatch({
      type: beerActionTypes.FETCH_MORE_BEERS,
      payload: { beers, page, isLoading: false, error: null }
    });
  } catch (error) {
    console.error("fetchMoreBeers failed permanently after max retries:", error);
    dispatch({
      type: beerActionTypes.FETCH_MORE_BEERS,
      payload: { beers: [], page, isLoading: false, error: "Failed to load more data." }
    });
  }
};
var searchBeers = (keyword) => async (dispatch, getState) => {
  isApiHalted = false;
  if (getState && getState().beer?.isLoading || isApiHalted)
    return;
  dispatch({ type: beerActionTypes.FETCHING_BEERS, payload: { isLoading: true } });
  try {
    const url = `https://api.punkapi.com/v2/beers?beer_name=${encodeURIComponent(keyword)}`;
    const beers = await fetchWithRetry(url);
    dispatch({
      type: beerActionTypes.SEARCH_BEERS,
      payload: { beers, isLoading: false }
    });
  } catch (error) {
    console.error("searchBeers failed permanently after max retries:", error);
    dispatch({ type: beerActionTypes.SEARCH_BEERS, payload: { beers: [], isLoading: false } });
  }
};
var handleFavourite = (beer) => (dispatch) => dispatch({
  type: beerActionTypes.HANDLE_FAVOURITE_BEER,
  payload: { beer }
});
var displayBeer = (beer) => async (dispatch, getState) => {
  if (getState && getState().beer?.isLoading || isApiHalted)
    return;
  dispatch({ type: beerActionTypes.FETCHING_BEERS, payload: { isLoading: true } });
  try {
    const yeast = encodeURIComponent(beer.ingredients.yeast);
    const url = `https://api.punkapi.com/v2/beers?per_page=3&yeast=${yeast}`;
    const beers = await fetchWithRetry(url);
    let selected = { ...beer, similar: beers };
    dispatch({
      type: beerActionTypes.DISPLAY_BEER,
      payload: { selected, isLoading: false }
    });
  } catch (error) {
    console.error("displayBeer failed permanently after max retries:", error);
    dispatch({
      type: beerActionTypes.DISPLAY_BEER,
      payload: { selected: beer, isLoading: false }
    });
  }
};

// src/reducers/beerReducer.js
var initialState = {
  platformapps: [],
  beers: [],
  favourites: [],
  selected: {
    beer: {},
    platformapp: {},
    similar: []
  },
  page: 1,
  isLoading: false,
  error: null,
  searchQuery: ""
};
function reduce(state = initialState, action) {
  switch (action.type) {
    case beerActionTypes.FETCH_BEERS:
      return {
        ...state,
        beers: action.payload.beers,
        page: action.payload.error ? state.page : action.payload.page + 1,
        isLoading: action.payload.isLoading,
        error: action.payload.error || null
      };
    case beerActionTypes.FETCHING_BEERS:
      return { ...state, isLoading: action.payload.isLoading };
    case beerActionTypes.FETCH_MORE_BEERS:
      return {
        ...state,
        beers: action.payload.error ? state.beers : [...state.beers, ...action.payload.beers],
        page: action.payload.error ? state.page : action.payload.page + 1,
        isLoading: action.payload.isLoading,
        error: action.payload.error || null
      };
    case beerActionTypes.SEARCH_BEERS:
      return {
        ...state,
        beers: action.payload.beers,
        isLoading: action.payload.isLoading,
        error: null
      };
    case beerActionTypes.HANDLE_FAVOURITE_BEER:
      let favourites = [...state.favourites];
      let favBeer = action.payload.beer;
      if (favourites.indexOf(favBeer) !== -1) {
        favourites = favourites.filter((item) => item !== favBeer);
      } else
        favourites.push(favBeer);
      return { ...state, favourites };
    case beerActionTypes.DISPLAY_BEER:
      return { ...state, selected: action.payload.selected, isLoading: false };
    case beerActionTypes.FETCH_PLATFORMAPPS:
      return {
        ...state,
        platformapps: action.payload.platformapps || [],
        page: action.payload.error ? state.page : action.payload.page + 1,
        isLoading: action.payload.isLoading,
        error: action.payload.error || null
      };
    case beerActionTypes.FETCHING_PLATFORMAPPS:
      return { ...state, isLoading: action.payload.isLoading };
    case beerActionTypes.FETCH_MORE_PLATFORMAPPS:
      return {
        ...state,
        platformapps: action.payload.error ? state.platformapps : [...state.platformapps, ...action.payload.platformapps || []],
        page: action.payload.error ? state.page : action.payload.page + 1,
        isLoading: action.payload.isLoading,
        error: action.payload.error || null
      };
    case beerActionTypes.SEARCH_PLATFORMAPPS:
      return {
        ...state,
        platformapps: action.payload.platformapps || [],
        isLoading: action.payload.isLoading,
        error: action.payload.error || null
      };
    case beerActionTypes.HANDLE_FAVOURITE_PLATFORMAPP:
      let favList = [...state.favourites];
      let favApp = action.payload.platformapp;
      const favAppIndex = favList.findIndex(
        (item) => (item.voteid || item.id) === (favApp.voteid || favApp.id)
      );
      if (favAppIndex !== -1) {
        favList.splice(favAppIndex, 1);
      } else {
        favList.push(favApp);
      }
      return { ...state, favourites: favList };
    case beerActionTypes.DISPLAY_PLATFORMAPP:
      return { ...state, selected: action.payload.selected, isLoading: false };
    case beerActionTypes.FETCHING_PLATFORMAPPS_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      console.warn("Default Action Type fired in Beer Reducer");
      return state;
  }
}

// src/reducers/index.js
import { combineReducers } from "redux";
var reducers_default = combineReducers({
  beer: reduce
});

// src/store.js
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
var initialState2 = {};
var middleware = [thunk];
var composeEnhancers = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(
  reducers_default,
  initialState2,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);
var store_default = store;

// src/app.config.js
var appConfig = {
  url: process.env.REACT_APP_OKTA_URL || "https://dev-example.okta.com",
  issuer: process.env.REACT_APP_OKTA_ISSUER || "https://dev-example.okta.com/oauth2/default",
  redirect_uri: typeof window !== "undefined" && window.location ? window.location.origin + "/implicit/callback" : "http://localhost:3000/implicit/callback",
  client_id: process.env.REACT_APP_AUTHPROVIDERCID || "",
  recaptcha_site_key: process.env.REACT_APP_REAPTCHA_SITE_KEY || process.env.REACT_APP_REAPTCHA || ""
};
var app_config_default = appConfig;

// src/components/home.jsx
var import_prop_types4 = __toESM(require_prop_types());
var import_react_adsense = __toESM(require_lib());
import React5, { useEffect as useEffect3, useCallback as useCallback2, useState as useState4 } from "react";
import { connect as connect4 } from "react-redux";
import { useOktaAuth } from "@okta/okta-react";

// node_modules/react-share/dist/index.js
var import_classnames = __toESM(require_classnames(), 1);
var import_jsonp = __toESM(require_jsonp(), 1);
import { jsxs, jsx } from "react/jsx-runtime";
import { Children, isValidElement, cloneElement, forwardRef, useRef, useEffect, useCallback, useState } from "react";
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function withDefaultFill(children, iconFillColor) {
  return Children.map(children, (child) => {
    if (!isValidElement(child) || child.props.fill !== void 0) {
      return child;
    }
    return cloneElement(child, { fill: iconFillColor });
  });
}
function IconBase(_a) {
  var _b = _a, {
    bgStyle = {},
    borderRadius = 0,
    children,
    color,
    iconFillColor = "white",
    round = false,
    size = 64
  } = _b, rest = __objRest(_b, [
    "bgStyle",
    "borderRadius",
    "children",
    "color",
    "iconFillColor",
    "round",
    "size"
  ]);
  const content = withDefaultFill(children, iconFillColor);
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({ viewBox: "0 0 64 64", width: size, height: size }, rest), { children: [
    round ? /* @__PURE__ */ jsx("circle", { cx: "32", cy: "32", r: "32", fill: color, style: bgStyle }) : /* @__PURE__ */ jsx(
      "rect",
      {
        width: "64",
        height: "64",
        rx: borderRadius,
        ry: borderRadius,
        fill: color,
        style: bgStyle
      }
    ),
    content
  ] }));
}
var AssertionError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "AssertionError";
  }
};
function assert(value, message) {
  if (!value) {
    throw new AssertionError(message);
  }
}
function objectToGetParams(object) {
  const params = Object.entries(object).filter(([, value]) => value !== void 0 && value !== null).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  return params.length > 0 ? `?${params.join("&")}` : "";
}
var DEFAULT_ARIA_LABELS = {
  bluesky: "Share on Bluesky",
  email: "Share by email",
  facebook: "Share on Facebook",
  facebookmessenger: "Share in Messenger",
  gab: "Share on Gab",
  hatena: "Share on Hatena",
  instapaper: "Save to Instapaper",
  line: "Share on Line",
  linkedin: "Share on LinkedIn",
  livejournal: "Share on LiveJournal",
  mailru: "Share on Mail.ru",
  ok: "Share on OK",
  pinterest: "Pin on Pinterest",
  pocket: "Save to Pocket",
  reddit: "Share on Reddit",
  telegram: "Share on Telegram",
  threads: "Share on Threads",
  tumblr: "Share on Tumblr",
  twitter: "Share on X",
  viber: "Share on Viber",
  vk: "Share on VK",
  weibo: "Share on Weibo",
  whatsapp: "Share on WhatsApp",
  workplace: "Share on Workplace"
};
var isPromise = (obj) => !!obj && (typeof obj === "object" || typeof obj === "function") && "then" in obj && typeof obj.then === "function";
var getBoxPositionOnWindowCenter = (width, height) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2
});
var getBoxPositionOnScreenCenter = (width, height) => ({
  top: (window.screen.height - height) / 2,
  left: (window.screen.width - width) / 2
});
function getButtonBorderRadius(children) {
  var _a;
  const childNodes = Children.toArray(children);
  if (childNodes.length !== 1) {
    return void 0;
  }
  const [child] = childNodes;
  if (!isValidElement(child)) {
    return void 0;
  }
  if (child.props.round) {
    return "50%";
  }
  return (_a = child.props.borderRadius) != null ? _a : 0;
}
function hasTextContent(children) {
  return Children.toArray(children).some((child) => {
    if (typeof child === "string") {
      return child.trim().length > 0;
    }
    if (typeof child === "number") {
      return true;
    }
    if (!isValidElement(child)) {
      return false;
    }
    return hasTextContent(child.props.children);
  });
}
function windowOpen(url, _c, onClose) {
  var _d = _c, { height, width } = _d, configRest = __objRest(_d, ["height", "width"]);
  const config = __spreadValues({
    height,
    width,
    location: "no",
    toolbar: "no",
    status: "no",
    directories: "no",
    menubar: "no",
    scrollbars: "yes",
    resizable: "no",
    centerscreen: "yes",
    chrome: "yes"
  }, configRest);
  const shareDialog = window.open(
    url,
    "",
    Object.keys(config).map((key) => `${key}=${config[key]}`).join(", ")
  );
  if (onClose) {
    const interval = window.setInterval(() => {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval);
          onClose(shareDialog);
        }
      } catch (e2) {
        console.error(e2);
      }
    }, 1e3);
  }
  return shareDialog;
}
function ShareButton(_e) {
  var _f = _e, {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    beforeOnClick,
    children,
    className,
    disabled,
    disabledStyle = { opacity: 0.6 },
    forwardedRef,
    htmlTitle,
    networkLink,
    networkName,
    onClick,
    onShareWindowClose,
    openShareDialogOnClick = true,
    opts,
    resetButtonStyle = true,
    style,
    title,
    type = "button",
    url,
    windowHeight = 400,
    windowPosition = "windowCenter",
    windowWidth = 550
  } = _f, rest = __objRest(_f, [
    "aria-label",
    "aria-labelledby",
    "beforeOnClick",
    "children",
    "className",
    "disabled",
    "disabledStyle",
    "forwardedRef",
    "htmlTitle",
    "networkLink",
    "networkName",
    // deconstructed from ...rest to prevent passing it to the button element
    "onClick",
    "onShareWindowClose",
    "openShareDialogOnClick",
    "opts",
    "resetButtonStyle",
    "style",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "title",
    // deconstructed from ...rest to prevent passing it to the button element
    "type",
    "url",
    "windowHeight",
    "windowPosition",
    "windowWidth"
  ]);
  const buttonBorderRadius = getButtonBorderRadius(children);
  const fallbackAriaLabel = !ariaLabel && !ariaLabelledBy && !hasTextContent(children) ? DEFAULT_ARIA_LABELS[networkName] : void 0;
  const handleClick = async (event) => {
    if (disabled) {
      return;
    }
    const link = networkLink(url, opts);
    event.preventDefault();
    if (beforeOnClick) {
      const returnVal = beforeOnClick();
      if (isPromise(returnVal)) {
        await returnVal;
      }
    }
    if (openShareDialogOnClick) {
      const windowConfig = __spreadValues({
        height: windowHeight,
        width: windowWidth
      }, windowPosition === "windowCenter" ? getBoxPositionOnWindowCenter(windowWidth, windowHeight) : getBoxPositionOnScreenCenter(windowWidth, windowHeight));
      windowOpen(link, windowConfig, onShareWindowClose);
    }
    if (onClick) {
      onClick(event, link);
    }
  };
  const newClassName = (0, import_classnames.default)(
    "react-share__ShareButton",
    {
      "react-share__ShareButton--disabled": !!disabled,
      disabled: !!disabled
    },
    className
  );
  const newStyle = resetButtonStyle ? __spreadValues(__spreadValues({
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    display: "inline-flex",
    borderRadius: buttonBorderRadius,
    outlineOffset: 2,
    font: "inherit",
    color: "inherit",
    cursor: "pointer"
  }, style), disabled && disabledStyle) : __spreadValues(__spreadValues({}, style), disabled && disabledStyle);
  return /* @__PURE__ */ jsx(
    "button",
    __spreadProps(__spreadValues({}, rest), {
      "aria-label": ariaLabel || fallbackAriaLabel,
      "aria-labelledby": ariaLabelledBy,
      className: newClassName,
      disabled,
      onClick: handleClick,
      ref: forwardedRef,
      style: newStyle,
      title: htmlTitle,
      type,
      children
    })
  );
}
function blueskyLink(url, { title, separator }) {
  assert(url, "bluesky.url");
  return "https://bsky.app/intent/compose" + objectToGetParams({
    text: title ? title + separator + url : url
  });
}
var BlueskyShareButton = forwardRef(
  (_g, ref) => {
    var _h = _g, { separator, title } = _h, props = __objRest(_h, ["separator", "title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "bluesky",
        networkLink: blueskyLink,
        opts: {
          title,
          separator: separator || " "
        },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
BlueskyShareButton.displayName = "BlueskyShareButton";
function emailLink(url, { subject, body, separator }) {
  return "mailto:" + objectToGetParams({ subject, body: body ? body + separator + url : url });
}
var EmailShareButton = forwardRef(
  (_i, ref) => {
    var _j = _i, { body, separator, subject } = _j, props = __objRest(_j, ["body", "separator", "subject"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "email",
        networkLink: emailLink,
        onClick: (_, link) => {
          window.location.href = link;
        },
        openShareDialogOnClick: false,
        opts: {
          subject,
          body,
          separator: separator || " "
        }
      })
    );
  }
);
EmailShareButton.displayName = "EmailShareButton";
function FacebookIcon(props) {
  return /* @__PURE__ */ jsx(IconBase, __spreadProps(__spreadValues({ color: "#0866FF" }, props), { children: /* @__PURE__ */ jsx("path", { d: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" }) }));
}
function facebookMessengerLink(url, { appId, redirectUri, to }) {
  return "https://www.facebook.com/dialog/send" + objectToGetParams({
    link: url,
    redirect_uri: redirectUri || url,
    app_id: appId,
    to
  });
}
var FacebookMessengerShareButton = forwardRef((_k, ref) => {
  var _l = _k, { appId, redirectUri, to } = _l, props = __objRest(_l, ["appId", "redirectUri", "to"]);
  return /* @__PURE__ */ jsx(
    ShareButton,
    __spreadProps(__spreadValues({}, props), {
      forwardedRef: ref,
      networkName: "facebookmessenger",
      networkLink: facebookMessengerLink,
      opts: {
        appId,
        redirectUri,
        to
      },
      windowHeight: 820,
      windowWidth: 1e3
    })
  );
});
FacebookMessengerShareButton.displayName = "FacebookMessengerShareButton";
function facebookLink(url, { hashtag }) {
  assert(url, "facebook.url");
  return "https://www.facebook.com/sharer/sharer.php" + objectToGetParams({ u: url, hashtag });
}
var FacebookShareButton = forwardRef(
  (_m, ref) => {
    var _n = _m, { hashtag } = _n, props = __objRest(_n, ["hashtag"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "facebook",
        networkLink: facebookLink,
        opts: { hashtag },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
FacebookShareButton.displayName = "FacebookShareButton";
function useIsMounted() {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return useCallback(() => isMounted.current, []);
}
function SocialMediaShareCount(_o) {
  var _p = _o, {
    children = (shareCount) => shareCount,
    className,
    getCount,
    url
  } = _p, rest = __objRest(_p, [
    "children",
    "className",
    "getCount",
    "url"
  ]);
  const isMounted = useIsMounted();
  const [count, setCount] = useState(void 0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getCount(url, (count2) => {
      if (isMounted()) {
        setCount(count2);
        setIsLoading(false);
      }
    });
  }, [url]);
  return /* @__PURE__ */ jsx("span", __spreadProps(__spreadValues({ className: (0, import_classnames.default)("react-share__ShareCount", className) }, rest), { children: !isLoading && count !== void 0 && children(count) }));
}
function createShareCount(getCount) {
  const ShareCount = (props) => /* @__PURE__ */ jsx(SocialMediaShareCount, __spreadValues({ getCount }, props));
  ShareCount.displayName = `ShareCount(${getCount.name})`;
  return ShareCount;
}
function getFacebookShareCount(shareUrl, callback) {
  const endpoint = `https://graph.facebook.com/?id=${shareUrl}&fields=og_object{engagement}`;
  (0, import_jsonp.default)(endpoint, (err, data) => {
    callback(
      !err && data && data.og_object && data.og_object.engagement ? data.og_object.engagement.count : void 0
    );
  });
}
var FacebookShareCount = createShareCount(getFacebookShareCount);
function hatenaLink(url, { title }) {
  assert(url, "hatena.url");
  return `http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`;
}
var HatenaShareButton = forwardRef(
  (_q, ref) => {
    var _r = _q, { title } = _r, props = __objRest(_r, ["title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "hatena",
        networkLink: hatenaLink,
        opts: { title },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
HatenaShareButton.displayName = "HatenaShareButton";
function getHatenaShareCount(shareUrl, callback) {
  const url = "https://bookmark.hatenaapis.com/count/entry";
  (0, import_jsonp.default)(
    url + objectToGetParams({
      url: shareUrl
    }),
    (err, data) => {
      callback(data != null ? data : void 0);
    }
  );
}
var HatenaShareCount = createShareCount(getHatenaShareCount);
function instapaperLink(url, { title, description }) {
  assert(url, "instapaper.url");
  return "http://www.instapaper.com/hello2" + objectToGetParams({
    url,
    title,
    description
  });
}
var InstapaperShareButton = forwardRef(
  (_s, ref) => {
    var _t = _s, { description, title } = _t, props = __objRest(_t, ["description", "title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "instapaper",
        networkLink: instapaperLink,
        opts: {
          title,
          description
        },
        windowHeight: 500,
        windowPosition: "windowCenter",
        windowWidth: 500
      })
    );
  }
);
InstapaperShareButton.displayName = "InstapaperShareButton";
function lineLink(url, { title }) {
  assert(url, "line.url");
  return "https://social-plugins.line.me/lineit/share" + objectToGetParams({
    url,
    text: title
  });
}
var LineShareButton = forwardRef(
  (_u, ref) => {
    var _v = _u, { title } = _v, props = __objRest(_v, ["title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "line",
        networkLink: lineLink,
        opts: { title },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
LineShareButton.displayName = "LineShareButton";
function LinkedinIcon(props) {
  return /* @__PURE__ */ jsx(IconBase, __spreadProps(__spreadValues({ color: "#0077B5" }, props), { children: /* @__PURE__ */ jsx("path", { d: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" }) }));
}
function linkedinLink(url, { title, summary, source }) {
  assert(url, "linkedin.url");
  return "https://linkedin.com/shareArticle" + objectToGetParams({ url, mini: "true", title, summary, source });
}
var LinkedinShareButton = forwardRef(
  (_w, ref) => {
    var _x = _w, { source, summary, title } = _x, props = __objRest(_x, ["source", "summary", "title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "linkedin",
        networkLink: linkedinLink,
        opts: { title, summary, source },
        windowHeight: 600,
        windowWidth: 750
      })
    );
  }
);
LinkedinShareButton.displayName = "LinkedinShareButton";
function livejournalLink(url, { title, description }) {
  assert(url, "livejournal.url");
  return "https://www.livejournal.com/update.bml" + objectToGetParams({
    subject: title,
    event: description
  });
}
var LivejournalShareButton = forwardRef(
  (_y, ref) => {
    var _z = _y, { description, title } = _z, props = __objRest(_z, ["description", "title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "livejournal",
        networkLink: livejournalLink,
        opts: {
          title,
          description
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
LivejournalShareButton.displayName = "LivejournalShareButton";
function mailruLink(url, { title, description, imageUrl }) {
  assert(url, "mailru.url");
  return "https://connect.mail.ru/share" + objectToGetParams({
    url,
    title,
    description,
    image_url: imageUrl
  });
}
var MailruShareButton = forwardRef(
  (_A, ref) => {
    var _B = _A, { description, imageUrl, title } = _B, props = __objRest(_B, ["description", "imageUrl", "title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "mailru",
        networkLink: mailruLink,
        opts: {
          title,
          description,
          imageUrl
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
MailruShareButton.displayName = "MailruShareButton";
function okLink(url, { title, description, image }) {
  assert(url, "ok.url");
  return "https://connect.ok.ru/offer" + objectToGetParams({
    url,
    title,
    description,
    imageUrl: image
  });
}
var OKShareButton = forwardRef(
  (_C, ref) => {
    var _D = _C, { description, image, title } = _D, props = __objRest(_D, ["description", "image", "title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "ok",
        networkLink: okLink,
        opts: {
          title,
          description,
          image
        },
        windowHeight: 480,
        windowPosition: "screenCenter",
        windowWidth: 588
      })
    );
  }
);
OKShareButton.displayName = "OKShareButton";
function getOKShareCount(shareUrl, callback) {
  if (!window.OK) {
    window.OK = {
      Share: {
        count: function count(index2, _count) {
          var _a, _b;
          (_b = (_a = window.OK.callbacks)[index2]) == null ? void 0 : _b.call(_a, _count);
        }
      },
      callbacks: []
    };
  }
  const url = "https://connect.ok.ru/dk";
  const index = window.OK.callbacks.length;
  window.ODKL = {
    updateCount(index2, count) {
      var _a, _b;
      const callbackIndex = index2 === "" ? 0 : parseInt(index2.replace("react-share-", ""), 10);
      (_b = (_a = window.OK.callbacks)[callbackIndex]) == null ? void 0 : _b.call(_a, count === "" ? void 0 : parseInt(count, 10));
    }
  };
  window.OK.callbacks.push(callback);
  return (0, import_jsonp.default)(
    url + objectToGetParams({
      "st.cmd": "extLike",
      uid: `react-share-${index}`,
      ref: shareUrl
    })
  );
}
var OKShareCount = createShareCount(getOKShareCount);
function pinterestLink(url, { media, description, pinId }) {
  if (pinId) {
    return `https://pinterest.com/pin/${pinId}/repin/x/`;
  }
  assert(url, "pinterest.url");
  assert(media, "pinterest.media");
  return "https://pinterest.com/pin/create/button/" + objectToGetParams({
    url,
    media,
    description
  });
}
var PinterestShareButton = forwardRef(
  (_E, ref) => {
    var _F = _E, { description, media, pinId } = _F, props = __objRest(_F, ["description", "media", "pinId"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "pinterest",
        networkLink: pinterestLink,
        opts: {
          media,
          description,
          pinId
        },
        windowHeight: 730,
        windowWidth: 1e3
      })
    );
  }
);
PinterestShareButton.displayName = "PinterestShareButton";
function getPinterestShareCount(shareUrl, callback) {
  const url = "https://api.pinterest.com/v1/urls/count.json";
  (0, import_jsonp.default)(
    url + objectToGetParams({
      url: shareUrl
    }),
    (err, data) => {
      callback(data ? data.count : void 0);
    }
  );
}
var PinterestShareCount = createShareCount(getPinterestShareCount);
function pocketLink(url, { title }) {
  assert(url, "pocket.url");
  return "https://getpocket.com/save" + objectToGetParams({
    url,
    title
  });
}
var PocketShareButton = forwardRef(
  (_G, ref) => {
    var _H = _G, { title } = _H, props = __objRest(_H, ["title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "pocket",
        networkLink: pocketLink,
        opts: { title },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
PocketShareButton.displayName = "PocketShareButton";
function redditLink(url, { title }) {
  assert(url, "reddit.url");
  return "https://www.reddit.com/submit" + objectToGetParams({
    url,
    title
  });
}
var RedditShareButton = forwardRef(
  (_I, ref) => {
    var _J = _I, { title } = _J, props = __objRest(_J, ["title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "reddit",
        networkLink: redditLink,
        opts: { title },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
RedditShareButton.displayName = "RedditShareButton";
function gabLink(url, { title }) {
  assert(url, "gab.url");
  return "https://gab.com/compose" + objectToGetParams({
    url,
    text: title
  });
}
var GabShareButton = forwardRef(
  (_K, ref) => {
    var _L = _K, { title } = _L, props = __objRest(_L, ["title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "gab",
        networkLink: gabLink,
        opts: { title },
        windowHeight: 640,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
GabShareButton.displayName = "GabShareButton";
function getRedditShareCount(shareUrl, callback) {
  const endpoint = `https://www.reddit.com/api/info.json?limit=1&url=${shareUrl}`;
  (0, import_jsonp.default)(endpoint, { param: "jsonp" }, (err, response) => {
    callback(
      !err && response && response.data && response.data.children.length > 0 && response.data.children[0].data.score ? response.data.children[0].data.score : void 0
    );
  });
}
var RedditShareCount = createShareCount(getRedditShareCount);
function TelegramIcon(props) {
  return /* @__PURE__ */ jsx(IconBase, __spreadProps(__spreadValues({ color: "#26A5E4" }, props), { children: /* @__PURE__ */ jsx("path", { d: "m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957" }) }));
}
function telegramLink(url, { title }) {
  assert(url, "telegram.url");
  return "https://telegram.me/share/url" + objectToGetParams({
    url,
    text: title
  });
}
var TelegramShareButton = forwardRef(
  (_M, ref) => {
    var _N = _M, { title } = _N, props = __objRest(_N, ["title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "telegram",
        networkLink: telegramLink,
        opts: { title },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
TelegramShareButton.displayName = "TelegramShareButton";
function threadsLink(url, { title }) {
  assert(url, "threads.url");
  return "https://threads.net/intent/post" + objectToGetParams({
    url,
    text: title
  });
}
var ThreadsShareButton = forwardRef(
  (_O, ref) => {
    var _P = _O, { hashtags, related, title, via } = _P, props = __objRest(_P, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "threads",
        networkLink: threadsLink,
        opts: { title },
        windowHeight: 600,
        windowWidth: 550
      })
    );
  }
);
ThreadsShareButton.displayName = "ThreadsShareButton";
function tumblrLink(url, {
  title,
  caption,
  tags,
  posttype
}) {
  assert(url, "tumblr.url");
  return "https://www.tumblr.com/widgets/share/tool" + objectToGetParams({
    canonicalUrl: url,
    title,
    caption,
    tags,
    posttype
  });
}
var TumblrShareButton = forwardRef(
  (_Q, ref) => {
    var _R = _Q, { caption, posttype, tags, title } = _R, props = __objRest(_R, ["caption", "posttype", "tags", "title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "tumblr",
        networkLink: tumblrLink,
        opts: {
          title,
          tags: (tags || []).join(","),
          caption,
          posttype: posttype || "link"
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
TumblrShareButton.displayName = "TumblrShareButton";
function getTumblrShareCount(shareUrl, callback) {
  const endpoint = "https://api.tumblr.com/v2/share/stats";
  return (0, import_jsonp.default)(
    endpoint + objectToGetParams({
      url: shareUrl
    }),
    (err, data) => {
      callback(!err && data && data.response ? data.response.note_count : void 0);
    }
  );
}
var TumblrShareCount = createShareCount(getTumblrShareCount);
function TwitterIcon(props) {
  return /* @__PURE__ */ jsx(IconBase, __spreadProps(__spreadValues({ color: "#00aced" }, props), { children: /* @__PURE__ */ jsx("path", { d: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" }) }));
}
function xLink(url, {
  title,
  via,
  hashtags = [],
  related = []
}) {
  assert(url, "x.url");
  assert(Array.isArray(hashtags), "x.hashtags is not an array");
  assert(Array.isArray(related), "x.related is not an array");
  return "https://twitter.com/intent/tweet" + objectToGetParams({
    url,
    text: title,
    via,
    hashtags: hashtags.length > 0 ? hashtags.join(",") : void 0,
    related: related.length > 0 ? related.join(",") : void 0
  });
}
var XShareButton = forwardRef(
  (_S, ref) => {
    var _T = _S, { hashtags, related, title, via } = _T, props = __objRest(_T, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "twitter",
        networkLink: xLink,
        opts: {
          hashtags,
          title,
          via,
          related
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
XShareButton.displayName = "XShareButton";
var TwitterShareButton = forwardRef((props, ref) => /* @__PURE__ */ jsx(XShareButton, __spreadProps(__spreadValues({}, props), { ref })));
TwitterShareButton.displayName = "TwitterShareButton";
function viberLink(url, { title, separator }) {
  assert(url, "viber.url");
  return "viber://forward" + objectToGetParams({
    text: title ? title + separator + url : url
  });
}
var ViberShareButton = forwardRef(
  (_U, ref) => {
    var _V = _U, { separator, title } = _V, props = __objRest(_V, ["separator", "title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "viber",
        networkLink: viberLink,
        opts: {
          title,
          separator: separator || " "
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
ViberShareButton.displayName = "ViberShareButton";
function vkLink(url, { title, image, noParse, noVkLinks }) {
  assert(url, "vk.url");
  return "https://vk.com/share.php" + objectToGetParams({
    url,
    title,
    image,
    noparse: noParse ? 1 : 0,
    no_vk_links: noVkLinks ? 1 : 0
  });
}
var VKShareButton = forwardRef(
  (_W, ref) => {
    var _X = _W, { image, noParse, noVkLinks, title } = _X, props = __objRest(_X, ["image", "noParse", "noVkLinks", "title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "vk",
        networkLink: vkLink,
        opts: {
          title,
          image,
          noParse,
          noVkLinks
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
VKShareButton.displayName = "VKShareButton";
function getVKShareCount(shareUrl, callback) {
  if (!window.VK)
    window.VK = {};
  window.VK.Share = {
    count: (index2, count) => {
      var _a, _b;
      return (_b = (_a = window.VK.callbacks) == null ? void 0 : _a[index2]) == null ? void 0 : _b.call(_a, count);
    }
  };
  window.VK.callbacks = [];
  const url = "https://vk.com/share.php";
  const index = window.VK.callbacks.length;
  window.VK.callbacks.push(callback);
  return (0, import_jsonp.default)(
    url + objectToGetParams({
      act: "count",
      index,
      url: shareUrl
    })
  );
}
var VKShareCount = createShareCount(getVKShareCount);
function weiboLink(url, { title, image }) {
  assert(url, "weibo.url");
  return "http://service.weibo.com/share/share.php" + objectToGetParams({
    url,
    title,
    pic: image
  });
}
var WeiboShareButton = forwardRef(
  (_Y, ref) => {
    var _Z = _Y, { image, title } = _Z, props = __objRest(_Z, ["image", "title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "weibo",
        networkLink: weiboLink,
        opts: {
          title,
          image
        },
        windowHeight: 550,
        windowPosition: "screenCenter",
        windowWidth: 660
      })
    );
  }
);
WeiboShareButton.displayName = "WeiboShareButton";
function whatsappLink(url, { title, separator }) {
  assert(url, "whatsapp.url");
  return "https://api.whatsapp.com/send" + objectToGetParams({
    text: title ? title + separator + url : url
  });
}
var WhatsappShareButton = forwardRef(
  (__, ref) => {
    var _$ = __, { separator, title } = _$, props = __objRest(_$, ["separator", "title"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "whatsapp",
        networkLink: whatsappLink,
        opts: {
          title,
          separator: separator || " "
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
WhatsappShareButton.displayName = "WhatsappShareButton";
function workplaceLink(url, { quote, hashtag }) {
  assert(url, "workplace.url");
  return "https://work.facebook.com/sharer.php" + objectToGetParams({
    u: url,
    quote,
    hashtag
  });
}
var WorkplaceShareButton = forwardRef(
  (_aa, ref) => {
    var _ba = _aa, { hashtag, quote } = _ba, props = __objRest(_ba, ["hashtag", "quote"]);
    return /* @__PURE__ */ jsx(
      ShareButton,
      __spreadProps(__spreadValues({}, props), {
        forwardedRef: ref,
        networkName: "workplace",
        networkLink: workplaceLink,
        opts: {
          quote,
          hashtag
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
WorkplaceShareButton.displayName = "WorkplaceShareButton";

// src/components/search.jsx
var import_prop_types = __toESM(require_prop_types());
import React, { useState as useState2, useRef as useRef2 } from "react";
import { connect } from "react-redux";
var Search = ({ searchBeers: searchBeers2, fetchBeers: fetchBeers2, searchPlatformapps: searchPlatformapps2, fetchPlatformApps: fetchPlatformApps2 }) => {
  const [keyword, setKeyword] = useState2("");
  const timeout = useRef2(null);
  const onSearch = (e2) => {
    const value = e2.target.value;
    setKeyword(value);
    if (timeout.current)
      clearTimeout(timeout.current);
    timeout.current = setTimeout(() => handleSearch(value), 500);
  };
  const handleSearch = (keyword2) => {
    const trimmed = keyword2.trim();
    if (trimmed.length !== 0) {
      searchBeers2(trimmed);
      if (searchPlatformapps2) {
        searchPlatformapps2(trimmed);
      }
    } else {
      fetchBeers2();
      if (fetchPlatformApps2) {
        fetchPlatformApps2();
      }
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "row justify-content-center" }, /* @__PURE__ */ React.createElement("form", { className: "col-md-6 col-sm-12", onSubmit: (e2) => e2.preventDefault() }, /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      className: "form-control",
      placeholder: "Search for beer name",
      value: keyword,
      onChange: onSearch
    }
  ))));
};
Search.propTypes = {
  searchBeers: import_prop_types.default.func.isRequired,
  fetchBeers: import_prop_types.default.func.isRequired,
  searchPlatformapps: import_prop_types.default.func,
  fetchPlatformApps: import_prop_types.default.func
};
var search_default = connect(
  null,
  { searchBeers, fetchBeers, searchPlatformapps, fetchPlatformApps }
)(Search);

// src/components/beers.jsx
import React4, { useState as useState3 } from "react";

// src/components/beer.jsx
var import_prop_types2 = __toESM(require_prop_types());
import React2, { useEffect as useEffect2 } from "react";
import { connect as connect2 } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactGA from "react-ga4";
var Beer = ({ beer, favourites, handleFavourite: handleFavourite2, onDetail }) => {
  useEffect2(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);
  const isFavourite = favourites.indexOf(beer) !== -1;
  const onFavouriteToggle = (e2) => {
    e2.stopPropagation();
    handleFavourite2(beer);
  };
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      className: "beer-item col-12 col-sm-6 col-md-4 p-3 text-center",
      onClick: () => onDetail && onDetail(beer)
    },
    /* @__PURE__ */ React2.createElement("div", { className: "details bg-white p-3" }, /* @__PURE__ */ React2.createElement("div", { className: "row" }, /* @__PURE__ */ React2.createElement("div", { className: "col-12" }, /* @__PURE__ */ React2.createElement(
      "button",
      {
        className: "btn btn-link btn-fav float-right " + (isFavourite ? "active" : ""),
        onClick: onFavouriteToggle
      },
      /* @__PURE__ */ React2.createElement(FontAwesomeIcon, { icon: "star" })
    ))), /* @__PURE__ */ React2.createElement("div", { className: "row my-1" }, /* @__PURE__ */ React2.createElement("div", { className: "col" }, /* @__PURE__ */ React2.createElement(
      "img",
      {
        src: beer.image_url,
        alt: beer.name,
        className: "beer-thumbnail"
      }
    ))), /* @__PURE__ */ React2.createElement("h5", { className: "text-warning font-weight-bold" }, beer.name), /* @__PURE__ */ React2.createElement("p", { className: "text-muted" }, beer.tagline))
  );
};
Beer.propTypes = {
  favourites: import_prop_types2.default.array.isRequired,
  handleFavourite: import_prop_types2.default.func.isRequired,
  beer: import_prop_types2.default.object.isRequired,
  onDetail: import_prop_types2.default.func
};
var mapStateToProps = (state) => ({
  favourites: state.beer.favourites
});
var beer_default = connect2(
  mapStateToProps,
  { handleFavourite }
)(Beer);

// src/components/beer-details.jsx
import React3 from "react";
var BeerDetails = ({ beer = {}, onClose }) => {
  const renderFoodPairing = () => {
    return beer.food_pairing?.map((item, key) => /* @__PURE__ */ React3.createElement("li", { key }, item));
  };
  const renderSimilarBeers = () => {
    return beer.similar?.map((similarBeer) => /* @__PURE__ */ React3.createElement("div", { className: "col-lg-4 text-center", key: similarBeer.id }, /* @__PURE__ */ React3.createElement("div", { className: "similar-beer m-1 p-3" }, /* @__PURE__ */ React3.createElement(
      "img",
      {
        src: similarBeer.image_url,
        alt: similarBeer.name,
        className: "img-fluid d-block mx-auto"
      }
    ), /* @__PURE__ */ React3.createElement("h6", { className: "font-weight-bold text-muted my-3" }, similarBeer.name))));
  };
  return /* @__PURE__ */ React3.createElement("div", { className: "modal-body py-3" }, /* @__PURE__ */ React3.createElement("button", { type: "button", className: "btn-close float-end", onClick: onClose, "aria-label": "Close" }), /* @__PURE__ */ React3.createElement("div", { className: "row p-2 beer-detail" }, /* @__PURE__ */ React3.createElement("div", { className: "col-lg-3 mb-2 p-2" }, /* @__PURE__ */ React3.createElement(
    "img",
    {
      src: beer.image_url,
      alt: beer.name,
      className: "img-fluid d-block mx-auto"
    }
  )), /* @__PURE__ */ React3.createElement("div", { className: "col-lg-9 p-2" }, /* @__PURE__ */ React3.createElement("h3", { className: "text-warning font-weight-bold" }, beer.name), /* @__PURE__ */ React3.createElement("h5", { className: "beer-tagline" }, beer.tagline), /* @__PURE__ */ React3.createElement("div", { className: "divider my-2" }), /* @__PURE__ */ React3.createElement("ul", { className: "list-inline" }, /* @__PURE__ */ React3.createElement("li", { className: "list-inline-item" }, /* @__PURE__ */ React3.createElement("strong", null, "IBU:"), " ", beer.ibu), /* @__PURE__ */ React3.createElement("li", { className: "list-inline-item" }, /* @__PURE__ */ React3.createElement("strong", null, "ABV:"), " ", beer.abv + "%"), /* @__PURE__ */ React3.createElement("li", { className: "list-inline-item" }, /* @__PURE__ */ React3.createElement("strong", null, "EBC:"), " ", beer.ebc)), /* @__PURE__ */ React3.createElement("p", { className: "my-3" }, beer.description), /* @__PURE__ */ React3.createElement("h5", { className: "text-muted" }, "Best served with:"), /* @__PURE__ */ React3.createElement("ul", null, beer.food_pairing && renderFoodPairing()))), /* @__PURE__ */ React3.createElement("div", { className: "row align-items-center p-2" }, /* @__PURE__ */ React3.createElement("div", { className: "col" }, /* @__PURE__ */ React3.createElement("h4", { className: "my-2 text-warning" }, "You might also like:"), /* @__PURE__ */ React3.createElement("div", { className: "row" }, beer.similar && renderSimilarBeers()))));
};
var beer_details_default = BeerDetails;

// src/components/beers.jsx
var import_prop_types3 = __toESM(require_prop_types());
import { connect as connect3 } from "react-redux";
import { Modal, Alert, Spinner } from "react-bootstrap";
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
var Beers = ({
  beers = [],
  platformapps = [],
  displayBeer: displayBeer2,
  displayPlatformapp: displayPlatformapp2,
  selected = {},
  isLoading = false,
  error = null,
  searchQuery = "",
  isGivingUp = false,
  retryCount = 0
}) => {
  const [modalIsOpen, setModalIsOpen] = useState3(false);
  const displayDetails = (beer) => {
    displayBeer2(beer);
    setModalIsOpen(true);
  };
  const displayPlatformAppDetails = (platformapp) => {
    if (displayPlatformapp2) {
      displayPlatformapp2(platformapp);
    } else {
      displayBeer2(platformapp);
    }
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const renderPlatformApps = () => {
    if (!platformapps || platformapps.length === 0)
      return null;
    return /* @__PURE__ */ React4.createElement("div", { className: "row row-eq-height py-3" }, /* @__PURE__ */ React4.createElement("div", { className: "col-12 mb-2" }, /* @__PURE__ */ React4.createElement("h4", { className: "text-secondary font-weight-bold" }, "Platform Applications")), platformapps.map((platformapp) => /* @__PURE__ */ React4.createElement(
      beer_default,
      {
        key: platformapp.voteid || platformapp.id,
        beer: platformapp,
        onDetail: displayPlatformAppDetails
      }
    )));
  };
  const renderBeersList = () => {
    if (isGivingUp) {
      return /* @__PURE__ */ React4.createElement("div", { className: "col-12" }, /* @__PURE__ */ React4.createElement(Alert, { variant: "danger", className: "shadow-sm border-0 my-4 text-center" }, /* @__PURE__ */ React4.createElement(FontAwesomeIcon2, { icon: "exclamation-triangle", className: "me-2 text-danger", size: "2x" }), /* @__PURE__ */ React4.createElement("h4", { className: "alert-heading font-weight-bold mt-2" }, "Temporary Service Disruption"), /* @__PURE__ */ React4.createElement("p", { className: "lead" }, "Despite multiple consecutive attempts, metrics could not be retrieved at this time."), /* @__PURE__ */ React4.createElement("hr", null), /* @__PURE__ */ React4.createElement("p", { className: "mb-0 small text-muted" }, "The external API service is currently unresponsive. Please try refreshing this page in a few minutes.")));
    }
    if (error) {
      return /* @__PURE__ */ React4.createElement("div", { className: "col-12" }, /* @__PURE__ */ React4.createElement(Alert, { variant: "warning", className: "shadow-sm border-0" }, /* @__PURE__ */ React4.createElement(FontAwesomeIcon2, { icon: "exclamation-triangle", className: "me-2" }), /* @__PURE__ */ React4.createElement("strong", null, "Service Connectivity Issue:"), " ", error, ".", " ", isLoading && /* @__PURE__ */ React4.createElement(Spinner, { animation: "border", size: "sm", variant: "dark", className: "ms-2" }), /* @__PURE__ */ React4.createElement("br", null), /* @__PURE__ */ React4.createElement("small", { className: "text-dark" }, "Retry attempt ", retryCount, "/5 will occur automatically...")));
    }
    if (isLoading) {
      return /* @__PURE__ */ React4.createElement("div", { className: "col-12 text-center my-5" }, /* @__PURE__ */ React4.createElement(Spinner, { animation: "border", variant: "warning", className: "mb-2" }), /* @__PURE__ */ React4.createElement("p", { className: "text-muted" }, "Retrieving catalog data..."));
    }
    if (beers.length === 0) {
      return /* @__PURE__ */ React4.createElement("div", { className: "col-12 my-5 text-center fade-in" }, /* @__PURE__ */ React4.createElement(FontAwesomeIcon2, { className: "beer-icon", icon: "beer", size: "5x" }), /* @__PURE__ */ React4.createElement("h4", { className: "mt-4 text-muted font-weight-light" }, searchQuery ? `No records found for "${searchQuery}"` : "No items available in the current view."));
    }
    return beers.map((beer) => /* @__PURE__ */ React4.createElement(beer_default, { key: beer.id, beer, onDetail: displayDetails }));
  };
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("div", { className: "container" }, renderPlatformApps(), /* @__PURE__ */ React4.createElement("div", { className: "row row-eq-height py-5" }, renderBeersList())), /* @__PURE__ */ React4.createElement(Modal, { show: modalIsOpen, onHide: closeModal, size: "lg" }, modalIsOpen && !isLoading && /* @__PURE__ */ React4.createElement(beer_details_default, { beer: selected, onClose: closeModal })));
};
Beers.propTypes = {
  displayBeer: import_prop_types3.default.func.isRequired,
  displayPlatformapp: import_prop_types3.default.func,
  selected: import_prop_types3.default.object.isRequired,
  beers: import_prop_types3.default.array,
  platformapps: import_prop_types3.default.array,
  isLoading: import_prop_types3.default.bool,
  error: import_prop_types3.default.string,
  searchQuery: import_prop_types3.default.string,
  isGivingUp: import_prop_types3.default.bool,
  retryCount: import_prop_types3.default.number
};
var mapStateToProps2 = (state) => ({
  selected: state.beer.selected,
  isLoading: state.beer.isLoading,
  error: state.beer.error,
  searchQuery: state.beer.searchQuery
});
var beers_default = connect3(
  mapStateToProps2,
  { displayBeer, displayPlatformapp }
)(Beers);

// src/gitInfo.json
var gitInfo_default = {
  branch: "feature/Add-Android14-HSGalaxyRing-NFTMint",
  repoPath: "/home/linards/Documents/Dev/HolimaX_GHOrg/React",
  remoteRepoPath: "https://github.com/HolimaX/React.git",
  shortHash: "3d282ac"
};

// src/components/home.jsx
var Home = ({
  beers,
  platformapps,
  page,
  isLoading,
  error,
  searchQuery,
  fetchBeers: fetchBeers2,
  fetchMoreBeers: fetchMoreBeers2,
  fetchPlatformApps: fetchPlatformApps2,
  fetchMorePlatformApps: fetchMorePlatformApps2
}) => {
  const { authState } = useOktaAuth();
  const [attempts, setAttempts] = useState4(0);
  const [isGivingUp, setIsGivingUp] = useState4(false);
  useEffect3(() => {
    if (platformapps && platformapps.length === 0) {
      fetchPlatformApps2(page);
    }
    if (beers && beers.length === 0) {
      fetchBeers2(page);
    }
  }, [platformapps, beers, fetchPlatformApps2, fetchBeers2, page, isGivingUp]);
  useEffect3(() => {
    if (beers && beers.length > 0 && (attempts > 0 || isGivingUp)) {
      setAttempts(0);
      setIsGivingUp(false);
    }
  }, [beers, attempts, isGivingUp]);
  useEffect3(() => {
    if (error && attempts < 5 && !isLoading) {
      const timer = setTimeout(() => {
        console.info(`Retry attempt ${attempts + 1} for catalog data...`);
        setAttempts((prev) => prev + 1);
        fetchBeers2(page);
      }, 3e4);
      return () => clearTimeout(timer);
    }
    if (error && attempts >= 5) {
      setIsGivingUp(true);
    }
  }, [error, attempts, isLoading, fetchBeers2, page]);
  const onScroll = useCallback2(() => {
    if (isLoading)
      return;
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 100) {
      fetchMoreBeers2(page);
      if (fetchMorePlatformApps2) {
        fetchMorePlatformApps2(page);
      }
    }
  }, [isLoading, fetchMoreBeers2, fetchMorePlatformApps2, page]);
  useEffect3(() => {
    window.addEventListener("scroll", onScroll, false);
    return () => window.removeEventListener("scroll", onScroll, false);
  }, [onScroll]);
  const enableAds = process.env.REACT_APP_ENABLE_ADS === "true";
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement("header", { className: "justify-content-center py-2 bg-warning text-center text-white" }, /* @__PURE__ */ React5.createElement("div", { className: "container" }, /* @__PURE__ */ React5.createElement("div", { className: "row" }, /* @__PURE__ */ React5.createElement("div", { className: "col" }, /* @__PURE__ */ React5.createElement("h1", { className: "font-weight-bold" }, "Beer Bank | ", authState?.isAuthenticated ? "The Personalized Cloud Dashboard" : "The Cloud Dashboard", " ", process.env.REACT_APP_VERSION || ""), gitInfo_default && /* @__PURE__ */ React5.createElement("label", { className: "d-block small text-dark opacity-75" }, gitInfo_default.remoteRepoPath, " (Supported apps: ", gitInfo_default.branch, "/", gitInfo_default.shortHash, ")"), /* @__PURE__ */ React5.createElement("p", null, "Find your favourite beer here (or open your personalized dashboard to access your available services)"))), /* @__PURE__ */ React5.createElement(search_default, null), /* @__PURE__ */ React5.createElement("div", { className: "d-flex justify-content-center gap-2 mt-3" }, /* @__PURE__ */ React5.createElement(TwitterShareButton, { url: window.location.href }, /* @__PURE__ */ React5.createElement(TwitterIcon, { size: 32, round: true })), /* @__PURE__ */ React5.createElement(FacebookShareButton, { url: window.location.href }, /* @__PURE__ */ React5.createElement(FacebookIcon, { size: 32, round: true })), /* @__PURE__ */ React5.createElement(TelegramShareButton, { url: window.location.href }, /* @__PURE__ */ React5.createElement(TelegramIcon, { size: 32, round: true })), /* @__PURE__ */ React5.createElement(LinkedinShareButton, { url: window.location.href }, /* @__PURE__ */ React5.createElement(LinkedinIcon, { size: 32, round: true }))))), /* @__PURE__ */ React5.createElement(
    beers_default,
    {
      beers,
      platformapps,
      isLoading,
      error,
      searchQuery,
      isGivingUp,
      retryCount: attempts
    }
  ), enableAds && process.env.REACT_APP_GADS_ID && /* @__PURE__ */ React5.createElement("div", { className: "container text-center my-4" }, /* @__PURE__ */ React5.createElement(
    import_react_adsense.default.Google,
    {
      client: process.env.REACT_APP_GADS_ID,
      slot: process.env.REACT_APP_GADS_SLOT || "",
      style: { display: "block" },
      format: "auto",
      responsive: "true"
    }
  )));
};
Home.propTypes = {
  fetchBeers: import_prop_types4.default.func.isRequired,
  fetchMoreBeers: import_prop_types4.default.func.isRequired,
  beers: import_prop_types4.default.array.isRequired,
  fetchPlatformApps: import_prop_types4.default.func.isRequired,
  fetchMorePlatformApps: import_prop_types4.default.func.isRequired,
  platformapps: import_prop_types4.default.array,
  page: import_prop_types4.default.number.isRequired,
  isLoading: import_prop_types4.default.bool.isRequired,
  error: import_prop_types4.default.string,
  searchQuery: import_prop_types4.default.string
};
var mapStateToProps3 = (state) => ({
  beers: state.beer.beers,
  platformapps: state.beer.platformapps,
  page: state.beer.page,
  isLoading: state.beer.isLoading,
  error: state.beer.error,
  searchQuery: state.beer.searchQuery
});
var home_default = connect4(
  mapStateToProps3,
  { fetchBeers, fetchMoreBeers, fetchPlatformApps, fetchMorePlatformApps }
)(Home);

// src/components/user.jsx
import React7, { useEffect as useEffect5 } from "react";
import { Link as Link2, useLocation } from "react-router-dom";

// src/components/shared/Navigation.js
import React6, { useCallback as useCallback3, useEffect as useEffect4 } from "react";
import { Link } from "react-router-dom";
import { useOktaAuth as useOktaAuth2 } from "@okta/okta-react";
import ReactGA2 from "react-ga4";
var Navigation = () => {
  const { oktaAuth, authState } = useOktaAuth2();
  const logout = useCallback3(() => {
    if (oktaAuth?.signOut) {
      oktaAuth.signOut();
    }
  }, [oktaAuth]);
  useEffect4(() => {
    ReactGA2.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);
  if (!authState)
    return null;
  const authNav = authState.isAuthenticated ? /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React6.createElement(Link, { className: "nav-link font-weight-bold", to: "/profile" }, "Profile")), /* @__PURE__ */ React6.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React6.createElement("button", { className: "btn btn-link nav-link text-warning", onClick: logout }, "Logout"))) : /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React6.createElement(Link, { className: "nav-link", to: "/login" }, "Login")), /* @__PURE__ */ React6.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React6.createElement(Link, { className: "nav-link text-warning font-weight-bold", to: "/register" }, "Register")));
  return /* @__PURE__ */ React6.createElement("nav", { className: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm" }, /* @__PURE__ */ React6.createElement("div", { className: "container-fluid" }, /* @__PURE__ */ React6.createElement(Link, { to: "/", className: "navbar-brand text-warning font-weight-bold" }, authState.isAuthenticated ? /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("abbr", { title: "Personalized Cloud Dashboard" }, "PCD"), " Home") : /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("abbr", { title: "Cloud Dashboard" }, "CD"), " Home")), /* @__PURE__ */ React6.createElement("ul", { className: "navbar-nav ms-auto align-items-center" }, authNav)));
};
var Navigation_default = Navigation;

// src/components/user.jsx
import { useOktaAuth as useOktaAuth3 } from "@okta/okta-react";
import { Alert as Alert2 } from "react-bootstrap";
import ReactGA3 from "react-ga4";
import { FontAwesomeIcon as FontAwesomeIcon3 } from "@fortawesome/react-fontawesome";
var Dashboard = () => {
  const location = useLocation();
  const { authState } = useOktaAuth3();
  useEffect5(() => {
    ReactGA3.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  return /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement(Navigation_default, null), /* @__PURE__ */ React7.createElement("header", { className: "justify-content-center py-2 bg-warning text-center text-white shadow-sm mt-5" }, /* @__PURE__ */ React7.createElement("div", { className: "container" }, /* @__PURE__ */ React7.createElement("div", { className: "row" }, /* @__PURE__ */ React7.createElement("div", { className: "col" }, /* @__PURE__ */ React7.createElement("h1", { className: "font-weight-bold" }, "HolimaX Product Ecosystem | ", authState?.isAuthenticated ? /* @__PURE__ */ React7.createElement(React7.Fragment, null, "Personalized Cloud Dashboard (", /* @__PURE__ */ React7.createElement("abbr", { title: "Personalized Cloud Dashboard" }, "PCD"), ")") : /* @__PURE__ */ React7.createElement(React7.Fragment, null, "The Cloud Dashboard (", /* @__PURE__ */ React7.createElement("abbr", { title: "Cloud Dashboard" }, "CD"), ")")), /* @__PURE__ */ React7.createElement("p", null, "Version ", process.env.REACT_APP_VERSION || "0.1.20", " - Please", " ", /* @__PURE__ */ React7.createElement(Link2, { to: "/login", className: "text-white text-decoration-underline fw-bold" }, "Login"), " ", "to view your personalized resources!"))))), /* @__PURE__ */ React7.createElement("section", { className: "py-5 bg-light" }, /* @__PURE__ */ React7.createElement("div", { className: "container" }, /* @__PURE__ */ React7.createElement(Alert2, { variant: "warning", className: "shadow-sm border-0 mb-5 fw-light" }, /* @__PURE__ */ React7.createElement(FontAwesomeIcon3, { icon: "exclamation-triangle", className: "me-2" }), /* @__PURE__ */ React7.createElement("strong", null, "Ecosystem Notice:"), " If you have access to the ", /* @__PURE__ */ React7.createElement("strong", null, "Personalized Cloud Dashboard (", /* @__PURE__ */ React7.createElement("abbr", { title: "Personalized Cloud Dashboard" }, "PCD"), ")"), ", but are currently utilizing the standard ", /* @__PURE__ */ React7.createElement("strong", null, "Cloud Dashboard (", /* @__PURE__ */ React7.createElement("abbr", { title: "Cloud Dashboard" }, "CD"), ")"), " interface, certain premium data synchronization features and advanced analytical modules will remain unused."), /* @__PURE__ */ React7.createElement("div", { className: "row" }, /* @__PURE__ */ React7.createElement("div", { className: "col-md-6 col-lg-4 mb-4" }, /* @__PURE__ */ React7.createElement("div", { className: "card h-100 shadow-sm border-0 rounded-lg text-center p-4" }, /* @__PURE__ */ React7.createElement("div", { className: "text-warning mb-3 display-4" }, /* @__PURE__ */ React7.createElement(FontAwesomeIcon3, { icon: "mobile-alt" })), /* @__PURE__ */ React7.createElement("h5", { className: "font-weight-bold" }, "Mobile Application"), /* @__PURE__ */ React7.createElement("p", { className: "small text-muted" }, "Flagship mobile client for real-time telemetry tracking and synchronization."), /* @__PURE__ */ React7.createElement("div", { className: "mt-auto" }, /* @__PURE__ */ React7.createElement("span", { className: "badge bg-secondary" }, "Android Companion")))), /* @__PURE__ */ React7.createElement("div", { className: "col-md-6 col-lg-4 mb-4" }, /* @__PURE__ */ React7.createElement("div", { className: "card h-100 shadow-sm border-0 rounded-lg text-center p-4" }, /* @__PURE__ */ React7.createElement("div", { className: "text-warning mb-3 display-4" }, /* @__PURE__ */ React7.createElement(FontAwesomeIcon3, { icon: "cloud" })), /* @__PURE__ */ React7.createElement("h5", { className: "font-weight-bold" }, "Cloud Dashboard (", /* @__PURE__ */ React7.createElement("abbr", { title: "Personalized Cloud Dashboard" }, "PCD"), ")"), /* @__PURE__ */ React7.createElement("p", { className: "small text-muted" }, "Personalized data synchronization and management portal for authenticated users."), /* @__PURE__ */ React7.createElement("div", { className: "mt-auto" }, /* @__PURE__ */ React7.createElement("span", { className: "badge bg-primary" }, "Cloud Core")))), /* @__PURE__ */ React7.createElement("div", { className: "col-md-6 col-lg-4 mb-4" }, /* @__PURE__ */ React7.createElement("div", { className: "card h-100 shadow-sm border-0 rounded-lg text-center p-4" }, /* @__PURE__ */ React7.createElement("div", { className: "text-warning mb-3 display-4" }, /* @__PURE__ */ React7.createElement(FontAwesomeIcon3, { icon: "chart-bar" })), /* @__PURE__ */ React7.createElement("h5", { className: "font-weight-bold" }, "Visualizer (", /* @__PURE__ */ React7.createElement("abbr", { title: "Data Source Visualizer" }, "DSV"), ")"), /* @__PURE__ */ React7.createElement("p", { className: "small text-muted" }, "Advanced visualization engine for cross-platform health and activity metrics."), /* @__PURE__ */ React7.createElement("div", { className: "mt-auto" }, /* @__PURE__ */ React7.createElement("span", { className: "badge bg-success" }, "Telemetry Visualizer"))))))));
};
var user_default = Dashboard;

// src/components/favourites.jsx
var import_prop_types5 = __toESM(require_prop_types());
import React8, { useEffect as useEffect6 } from "react";
import { connect as connect5 } from "react-redux";
import { useOktaAuth as useOktaAuth4 } from "@okta/okta-react";
import ReactGA4 from "react-ga4";
var Favourites = ({ favourites = [] }) => {
  const { authState } = useOktaAuth4();
  useEffect6(() => {
    ReactGA4.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("header", { className: "justify-content-center py-2 bg-warning text-center text-white" }, /* @__PURE__ */ React8.createElement("div", { className: "container" }, /* @__PURE__ */ React8.createElement("div", { className: "row" }, /* @__PURE__ */ React8.createElement("div", { className: "col" }, /* @__PURE__ */ React8.createElement("h1", { className: "font-weight-bold" }, "Beer Bank | ", authState?.isAuthenticated ? "The Personalized Cloud Dashboard" : "The Cloud Dashboard", " ", process.env.REACT_APP_VERSION || ""), /* @__PURE__ */ React8.createElement("p", null, "These are your favourite beers"))))), /* @__PURE__ */ React8.createElement(beers_default, { beers: favourites, platformapps: favourites }));
};
Favourites.propTypes = {
  favourites: import_prop_types5.default.array.isRequired
};
var mapStateToProps4 = (state) => ({
  favourites: state.beer.favourites
});
var favourites_default = connect5(
  mapStateToProps4,
  {}
)(Favourites);

// src/components/navbar.jsx
import React9, { useEffect as useEffect7, useCallback as useCallback4 } from "react";
import { Link as Link3, useLocation as useLocation2 } from "react-router-dom";
import { useOktaAuth as useOktaAuth5 } from "@okta/okta-react";
import ReactGA5 from "react-ga4";
var Navbar = () => {
  const location = useLocation2();
  const { authState, oktaAuth } = useOktaAuth5();
  const logout = useCallback4(() => {
    if (oktaAuth?.signOut) {
      oktaAuth.signOut();
    }
  }, [oktaAuth]);
  useEffect7(() => {
    ReactGA5.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  return /* @__PURE__ */ React9.createElement("nav", { className: "navbar navbar-expand fixed-top navbar-dark bg-warning shadow-sm" }, /* @__PURE__ */ React9.createElement("div", { className: "container-fluid" }, /* @__PURE__ */ React9.createElement(Link3, { to: "/", className: "navbar-brand font-weight-bold text-white" }, "Beer Bank"), /* @__PURE__ */ React9.createElement("div", { className: "collapse navbar-collapse", id: "navbarsExample02" }, /* @__PURE__ */ React9.createElement("ul", { className: "navbar-nav ms-auto align-items-center" }, /* @__PURE__ */ React9.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React9.createElement(Link3, { className: "nav-link text-white", to: "/" }, "Home")), /* @__PURE__ */ React9.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React9.createElement(Link3, { className: "nav-link text-white", to: "/favourite" }, "Favourite")), /* @__PURE__ */ React9.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React9.createElement(Link3, { className: "nav-link text-white", to: "/user" }, "Dashboard")), authState?.isAuthenticated ? /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React9.createElement(Link3, { className: "nav-link text-white", to: "/profile" }, "Profile")), /* @__PURE__ */ React9.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React9.createElement("button", { className: "btn btn-link nav-link text-white", onClick: logout }, "Logout"))) : /* @__PURE__ */ React9.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React9.createElement(Link3, { className: "nav-link text-white", to: "/login" }, "Login"))))));
};
var navbar_default = Navbar;

// src/components/auth/LoginForm.js
import React10, { useState as useState5 } from "react";
import { Link as Link4 } from "react-router-dom";
import { useOktaAuth as useOktaAuth6 } from "@okta/okta-react";
import { FontAwesomeIcon as FontAwesomeIcon4 } from "@fortawesome/react-fontawesome";
import { faBeer, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
var LoginForm = () => {
  const { oktaAuth } = useOktaAuth6();
  const [sessionToken, setSessionToken] = useState5(null);
  const [error, setError] = useState5(null);
  const [username, setUsername] = useState5("");
  const [password, setPassword] = useState5("");
  const handleSubmit = (e2) => {
    e2.preventDefault();
    setError(null);
    if (oktaAuth?.signInWithCredentials) {
      oktaAuth.signInWithCredentials({
        username,
        password
      }).then((res) => setSessionToken(res.sessionToken)).catch((err) => {
        setError(err.message || "Login failed. Please verify your credentials.");
        console.error("Okta Sign-In Error:", err);
      });
    } else if (oktaAuth?.signIn) {
      oktaAuth.signIn({
        username,
        password
      }).then((res) => setSessionToken(res.sessionToken)).catch((err) => {
        setError(err.message || "Login failed. Please verify your credentials.");
        console.error("Okta Sign-In Error:", err);
      });
    }
  };
  const handleUsernameChange = (e2) => setUsername(e2.target.value);
  const handlePasswordChange = (e2) => setPassword(e2.target.value);
  if (sessionToken) {
    if (oktaAuth?.signInWithRedirect) {
      oktaAuth.signInWithRedirect({ sessionToken });
    }
    return null;
  }
  return /* @__PURE__ */ React10.createElement("div", { className: "bg-light py-5 min-vh-100 mt-5" }, error && /* @__PURE__ */ React10.createElement("div", { className: "alert alert-warning alert-dismissible fade show shadow-sm", role: "alert" }, /* @__PURE__ */ React10.createElement("strong", null, "Notice:"), " ", error, /* @__PURE__ */ React10.createElement("button", { type: "button", className: "btn-close", onClick: () => setError(null), "aria-label": "Close" })), /* @__PURE__ */ React10.createElement("div", { className: "row justify-content-center" }, /* @__PURE__ */ React10.createElement("div", { className: "col-md-8 col-lg-5" }, /* @__PURE__ */ React10.createElement("div", { className: "card shadow-sm border-0 rounded-3" }, /* @__PURE__ */ React10.createElement("div", { className: "card-header bg-white border-bottom-0 pt-4 text-center" }, /* @__PURE__ */ React10.createElement("div", { className: "text-warning mb-2 display-4" }, /* @__PURE__ */ React10.createElement(FontAwesomeIcon4, { icon: faBeer })), /* @__PURE__ */ React10.createElement("h3", { className: "fw-light my-2" }, "Account Login"), /* @__PURE__ */ React10.createElement("p", { className: "text-muted small" }, "Access Personalized Cloud Dashboard (PCD) features!")), /* @__PURE__ */ React10.createElement("div", { className: "card-body px-4" }, /* @__PURE__ */ React10.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ React10.createElement("div", { className: "mb-3" }, /* @__PURE__ */ React10.createElement("label", { htmlFor: "username", className: "form-label small text-muted" }, "Username:"), /* @__PURE__ */ React10.createElement("div", { className: "input-group input-group-alternative" }, /* @__PURE__ */ React10.createElement("span", { className: "input-group-text" }, /* @__PURE__ */ React10.createElement(FontAwesomeIcon4, { icon: faEnvelope, className: "text-muted" })), /* @__PURE__ */ React10.createElement(
    "input",
    {
      className: "form-control",
      placeholder: "Username or Email",
      type: "text",
      id: "username",
      value: username,
      onChange: handleUsernameChange,
      required: true
    }
  ))), /* @__PURE__ */ React10.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React10.createElement("label", { htmlFor: "password", className: "form-label small text-muted" }, "Password:"), /* @__PURE__ */ React10.createElement("div", { className: "input-group input-group-alternative" }, /* @__PURE__ */ React10.createElement("span", { className: "input-group-text" }, /* @__PURE__ */ React10.createElement(FontAwesomeIcon4, { icon: faLock, className: "text-muted" })), /* @__PURE__ */ React10.createElement(
    "input",
    {
      className: "form-control",
      placeholder: "Password",
      type: "password",
      id: "password",
      value: password,
      onChange: handlePasswordChange,
      required: true
    }
  ))), /* @__PURE__ */ React10.createElement("div", { className: "text-center mb-3" }, /* @__PURE__ */ React10.createElement("button", { type: "submit", id: "submit", className: "btn btn-warning w-100 shadow-sm py-2 fw-bold text-uppercase" }, "Login")), /* @__PURE__ */ React10.createElement("div", { className: "text-center mt-3" }, /* @__PURE__ */ React10.createElement("p", { className: "small text-muted mb-0" }, "Don't have an account?", " ", /* @__PURE__ */ React10.createElement(Link4, { to: "/register", className: "text-warning fw-bold" }, "Register here")))))))));
};
var LoginForm_default = LoginForm;

// src/components/auth/LoginPage.js
import React11 from "react";
import { Navigate } from "react-router-dom";
import { useOktaAuth as useOktaAuth7 } from "@okta/okta-react";
var LoginPage = ({ baseUrl }) => {
  const { authState, oktaAuth } = useOktaAuth7();
  if (!oktaAuth) {
    return /* @__PURE__ */ React11.createElement("div", { className: "p-5 text-center" }, /* @__PURE__ */ React11.createElement("h1", null, "Login Unavailable"), /* @__PURE__ */ React11.createElement("p", null, "Authentication service is not configured in this environment."));
  }
  if (authState?.isAuthenticated) {
    return /* @__PURE__ */ React11.createElement(Navigate, { to: "/profile", replace: true });
  }
  return /* @__PURE__ */ React11.createElement(LoginForm_default, { baseUrl });
};
var LoginPage_default = LoginPage;

// src/components/auth/ProfilePage.js
import React12, { useEffect as useEffect8, useState as useState6 } from "react";
import { useOktaAuth as useOktaAuth8 } from "@okta/okta-react";
var ProfilePage = ({ healthCards = [] }) => {
  const { oktaAuth, authState } = useOktaAuth8();
  const [user, setUser] = useState6(null);
  useEffect8(() => {
    if (authState?.isAuthenticated && oktaAuth?.getUser) {
      oktaAuth.getUser().then(setUser).catch((err) => console.error("Error fetching user profile:", err));
    }
  }, [authState, oktaAuth]);
  if (!user)
    return null;
  const isPro = user?.tier === "PRO" || user?.tier === "PREMIUM";
  return /* @__PURE__ */ React12.createElement("div", { className: "profile-wrapper container py-5 mt-5" }, /* @__PURE__ */ React12.createElement("section", { className: "pro-appreciation" }, isPro && /* @__PURE__ */ React12.createElement("div", { className: "alert alert-warning shadow-sm mb-4" }, /* @__PURE__ */ React12.createElement("h4", { className: "fw-bold" }, "Welcome, Valued Customer!"), /* @__PURE__ */ React12.createElement("p", { className: "mb-0" }, "Your account is enabled for Personalized Cloud Dashboard (PCD) integration features."))), /* @__PURE__ */ React12.createElement("div", { className: "card shadow-sm border-0 rounded-3 mb-4" }, /* @__PURE__ */ React12.createElement("div", { className: "card-header bg-white border-bottom-0 pt-4" }, /* @__PURE__ */ React12.createElement("h3", { className: "fw-light mb-1" }, "User Profile"), /* @__PURE__ */ React12.createElement("p", { className: "text-muted small" }, "Personalized account overview and configuration settings")), /* @__PURE__ */ React12.createElement("div", { className: "card-body px-4" }, /* @__PURE__ */ React12.createElement("ul", { className: "list-group list-group-flush mb-3" }, /* @__PURE__ */ React12.createElement("li", { className: "list-group-item d-flex justify-content-between align-items-center" }, /* @__PURE__ */ React12.createElement("strong", null, "Name:"), /* @__PURE__ */ React12.createElement("span", null, user.name || "N/A")), /* @__PURE__ */ React12.createElement("li", { className: "list-group-item d-flex justify-content-between align-items-center" }, /* @__PURE__ */ React12.createElement("strong", null, "Email / Account:"), /* @__PURE__ */ React12.createElement("span", null, user.email || "N/A")), /* @__PURE__ */ React12.createElement("li", { className: "list-group-item d-flex justify-content-between align-items-center" }, /* @__PURE__ */ React12.createElement("strong", null, "Locale:"), /* @__PURE__ */ React12.createElement("span", null, user.locale || "en_US")), /* @__PURE__ */ React12.createElement("li", { className: "list-group-item d-flex justify-content-between align-items-center" }, /* @__PURE__ */ React12.createElement("strong", null, "Access Tier:"), /* @__PURE__ */ React12.createElement("span", { className: "badge bg-warning text-dark" }, user.tier || (isPro ? "PRO / PREMIUM" : "STANDARD"))), /* @__PURE__ */ React12.createElement("li", { className: "list-group-item d-flex justify-content-between align-items-center" }, /* @__PURE__ */ React12.createElement("strong", null, "Sync Status:"), /* @__PURE__ */ React12.createElement("span", { className: "text-success fw-bold" }, "Active"))))), /* @__PURE__ */ React12.createElement("div", { className: "card shadow-sm border-0 rounded-3 mb-4" }, /* @__PURE__ */ React12.createElement("div", { className: "card-header bg-white border-bottom-0 pt-4" }, /* @__PURE__ */ React12.createElement("h4", { className: "fw-light mb-1" }, "Your Cloud Dashboard Cards"), /* @__PURE__ */ React12.createElement("p", { className: "text-muted small" }, "Processed telemetry cards and synchronized targets")), /* @__PURE__ */ React12.createElement("div", { className: "card-body px-4" }, healthCards && healthCards.length > 0 ? healthCards.map((card) => /* @__PURE__ */ React12.createElement("div", { className: "border rounded p-3 mb-2 shadow-sm", key: card.id }, /* @__PURE__ */ React12.createElement("div", { className: "d-flex justify-content-between align-items-center" }, /* @__PURE__ */ React12.createElement("strong", null, card.title), /* @__PURE__ */ React12.createElement("span", { className: "badge bg-info text-dark" }, "Source: ", card.meta?.dataSource || "Sync Target")), /* @__PURE__ */ React12.createElement("p", { className: "mb-1 mt-2" }, card.summary))) : /* @__PURE__ */ React12.createElement("p", { className: "text-muted font-italic mb-0" }, "No custom telemetry cards configured yet. Synchronize your mobile app or external integrations to view cards here."))));
};
var ProfilePage_default = ProfilePage;

// src/components/auth/RegistrationForm.js
import React13, { useState as useState7, useCallback as useCallback5 } from "react";
import { useOktaAuth as useOktaAuth9 } from "@okta/okta-react";

// node_modules/reaptcha/dist/index.esm.js
import e, { Component as t } from "react";
function r(e2, t2) {
  return r = Object.setPrototypeOf || function(e3, t3) {
    return e3.__proto__ = t3, e3;
  }, r(e2, t2);
}
var n = function(e2) {
  var t2 = document.createElement("script");
  t2.async = true, t2.defer = true, t2.src = e2, document.head && document.head.appendChild(t2);
};
var i = function(e2) {
  return Array.from(document.scripts).reduce(function(t2, r2) {
    return t2 || e2.test(r2.src);
  }, false);
};
var o = /(http|https):\/\/(www)?.+\/recaptcha/;
var a = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"];
var c = /* @__PURE__ */ function(t2) {
  var c2, s;
  function p() {
    for (var r2, a2 = arguments.length, c3 = new Array(a2), s2 = 0; s2 < a2; s2++)
      c3[s2] = arguments[s2];
    return (r2 = t2.call.apply(t2, [this].concat(c3)) || this).container = void 0, r2.timer = void 0, r2.state = { instanceKey: Date.now(), ready: false, rendered: false, invisible: "invisible" === r2.props.size }, r2._isAvailable = function() {
      var e2;
      return Boolean(null == (e2 = window.grecaptcha) ? void 0 : e2.ready);
    }, r2._inject = function() {
      r2.props.inject && !i(o) && n("https://recaptcha.net/recaptcha/api.js?render=explicit" + (r2.props.hl ? "&hl=" + r2.props.hl : ""));
    }, r2._prepare = function() {
      var e2 = r2.props, t3 = e2.explicit, n2 = e2.onLoad;
      window.grecaptcha.ready(function() {
        r2.setState({ ready: true }, function() {
          t3 || r2.renderExplicitly(), n2 && n2();
        });
      });
    }, r2._renderRecaptcha = function(e2, t3) {
      return window.grecaptcha.render(e2, t3);
    }, r2._resetRecaptcha = function() {
      return window.grecaptcha.reset(r2.state.instanceId);
    }, r2._executeRecaptcha = function() {
      return window.grecaptcha.execute(r2.state.instanceId);
    }, r2._getResponseRecaptcha = function() {
      return window.grecaptcha.getResponse(r2.state.instanceId);
    }, r2._onVerify = function(e2) {
      return r2.props.onVerify(e2);
    }, r2._onExpire = function() {
      return r2.props.onExpire && r2.props.onExpire();
    }, r2._onError = function() {
      return r2.props.onError && r2.props.onError();
    }, r2._stopTimer = function() {
      r2.timer && clearInterval(r2.timer);
    }, r2.componentDidMount = function() {
      r2._inject(), r2._isAvailable() ? r2._prepare() : r2.timer = window.setInterval(function() {
        r2._isAvailable() && (r2._prepare(), r2._stopTimer());
      }, 500);
    }, r2.componentWillUnmount = function() {
      r2._stopTimer();
    }, r2.renderExplicitly = function() {
      return new Promise(function(e2, t3) {
        if (r2.state.rendered)
          return t3(new Error("This recaptcha instance has been already rendered."));
        if (!r2.state.ready || !r2.container)
          return t3(new Error("Recaptcha is not ready for rendering yet."));
        var n2 = r2._renderRecaptcha(r2.container, { sitekey: r2.props.sitekey, theme: r2.props.theme, size: r2.props.size, badge: r2.state.invisible ? r2.props.badge : void 0, tabindex: r2.props.tabindex, callback: r2._onVerify, "expired-callback": r2._onExpire, "error-callback": r2._onError, isolated: r2.state.invisible ? r2.props.isolated : void 0, hl: r2.state.invisible ? void 0 : r2.props.hl });
        r2.setState({ instanceId: n2, rendered: true }, function() {
          r2.props.onRender && r2.props.onRender(), e2();
        });
      });
    }, r2.reset = function() {
      return new Promise(function(e2, t3) {
        if (r2.state.rendered)
          return r2._resetRecaptcha(), e2();
        t3(new Error("This recaptcha instance did not render yet."));
      });
    }, r2.execute = function() {
      return new Promise(function(e2, t3) {
        return r2.state.invisible ? (r2.state.rendered && (r2._executeRecaptcha(), e2()), t3(new Error("This recaptcha instance did not render yet."))) : t3(new Error("Manual execution is only available for invisible size."));
      });
    }, r2.getResponse = function() {
      return new Promise(function(e2, t3) {
        if (r2.state.rendered)
          return e2(r2._getResponseRecaptcha());
        t3(new Error("This recaptcha instance did not render yet."));
      });
    }, r2.render = function() {
      var t3 = /* @__PURE__ */ e.createElement("div", { key: r2.state.instanceKey, id: r2.props.id, className: r2.props.className, ref: function(e2) {
        return r2.container = e2;
      } });
      return r2.props.children ? r2.props.children({ renderExplicitly: r2.renderExplicitly, reset: r2.reset, execute: r2.execute, getResponse: r2.getResponse, recaptchaComponent: t3 }) : t3;
    }, r2;
  }
  return s = t2, (c2 = p).prototype = Object.create(s.prototype), c2.prototype.constructor = c2, r(c2, s), p.getDerivedStateFromProps = function(e2, t3) {
    var r2 = "invisible" === e2.size;
    return r2 !== t3.invisible ? { invisible: r2 } : null;
  }, p.prototype.componentDidUpdate = function(e2) {
    var t3 = this;
    a.reduce(function(r2, n2) {
      return t3.props[n2] !== e2[n2] ? [].concat(r2, [n2]) : r2;
    }, []).length > 0 && this.setState({ instanceKey: Date.now(), rendered: false }, function() {
      t3.props.explicit || t3.renderExplicitly();
    });
  }, p;
}(t);
c.defaultProps = { id: "", className: "g-recaptcha", theme: "light", size: "normal", badge: "bottomright", tabindex: 0, explicit: false, inject: true, isolated: false, hl: "" };

// src/components/auth/RegistrationForm.js
import axios from "axios";
import { FontAwesomeIcon as FontAwesomeIcon5 } from "@fortawesome/react-fontawesome";
import { faBeer as faBeer2, faEnvelope as faEnvelope2, faLock as faLock2 } from "@fortawesome/free-solid-svg-icons";
var RegistrationForm = () => {
  const { oktaAuth } = useOktaAuth9();
  const [fields, setFields] = useState7({ firstName: "", lastName: "", email: "", password: "" });
  const [error, setError] = useState7(null);
  const [sessionToken, setSessionToken] = useState7(null);
  const handleChange = useCallback5((e2) => {
    const { id, value } = e2.target;
    setFields((prev) => ({ ...prev, [id]: value }));
  }, []);
  const handleSubmit = (e2) => {
    e2.preventDefault();
    setError(null);
    axios.post("/api/users", fields, {
      headers: { "Accept": "application/json" }
    }).then(() => {
      const signInFn = oktaAuth?.signInWithCredentials || oktaAuth?.signIn;
      if (signInFn) {
        return signInFn.call(oktaAuth, {
          username: fields.email,
          password: fields.password
        }).then((res) => setSessionToken(res.sessionToken)).catch((err) => {
          console.error("Okta sign-in error", err);
          setError("Registration successful, but auto-login failed. Please login manually.");
        });
      }
    }).catch((err) => {
      const message = err.response?.data?.error || err.response?.data?.message || "Unable to complete registration. Please check your details and try again.";
      console.error("Registration error", message);
      setError(message);
    });
  };
  const key = process.env.REACT_APP_REAPTCHA_SITE_KEY || process.env.REACT_APP_REAPTCHA;
  if (sessionToken) {
    if (oktaAuth?.signInWithRedirect) {
      oktaAuth.signInWithRedirect({ sessionToken });
    }
    return null;
  }
  return /* @__PURE__ */ React13.createElement("div", { className: "bg-light py-5 min-vh-100 mt-5" }, error && /* @__PURE__ */ React13.createElement("div", { className: "alert alert-warning alert-dismissible fade show shadow-sm", role: "alert" }, /* @__PURE__ */ React13.createElement("strong", null, "Notice:"), " ", error, /* @__PURE__ */ React13.createElement("button", { type: "button", className: "btn-close", onClick: () => setError(null), "aria-label": "Close" })), /* @__PURE__ */ React13.createElement("div", { className: "row justify-content-center" }, /* @__PURE__ */ React13.createElement("div", { className: "col-md-8 col-lg-5" }, /* @__PURE__ */ React13.createElement("div", { className: "card shadow-sm border-0 rounded-3" }, /* @__PURE__ */ React13.createElement("div", { className: "card-header bg-white border-bottom-0 pt-4 text-center" }, /* @__PURE__ */ React13.createElement("div", { className: "text-warning mb-2 display-4" }, /* @__PURE__ */ React13.createElement(FontAwesomeIcon5, { icon: faBeer2 })), /* @__PURE__ */ React13.createElement("h3", { className: "fw-light my-2" }, "Create Account"), /* @__PURE__ */ React13.createElement("p", { className: "text-muted small" }, "Access Personalized Cloud Dashboard (PCD) features!")), /* @__PURE__ */ React13.createElement("div", { className: "card-body px-4" }, /* @__PURE__ */ React13.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ React13.createElement("div", { className: "mb-3" }, /* @__PURE__ */ React13.createElement("div", { className: "input-group input-group-alternative" }, /* @__PURE__ */ React13.createElement("span", { className: "input-group-text" }, /* @__PURE__ */ React13.createElement(FontAwesomeIcon5, { icon: faEnvelope2, className: "text-muted" })), /* @__PURE__ */ React13.createElement(
    "input",
    {
      className: "form-control",
      placeholder: "Email Address",
      type: "email",
      id: "email",
      value: fields.email,
      onChange: handleChange,
      required: true
    }
  ))), /* @__PURE__ */ React13.createElement("div", { className: "row" }, /* @__PURE__ */ React13.createElement("div", { className: "col-6 pe-1" }, /* @__PURE__ */ React13.createElement("div", { className: "mb-3" }, /* @__PURE__ */ React13.createElement("input", { className: "form-control", placeholder: "First Name", type: "text", id: "firstName", value: fields.firstName, onChange: handleChange, required: true }))), /* @__PURE__ */ React13.createElement("div", { className: "col-6 ps-1" }, /* @__PURE__ */ React13.createElement("div", { className: "mb-3" }, /* @__PURE__ */ React13.createElement("input", { className: "form-control", placeholder: "Last Name", type: "text", id: "lastName", value: fields.lastName, onChange: handleChange, required: true })))), /* @__PURE__ */ React13.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React13.createElement("div", { className: "input-group input-group-alternative" }, /* @__PURE__ */ React13.createElement("span", { className: "input-group-text" }, /* @__PURE__ */ React13.createElement(FontAwesomeIcon5, { icon: faLock2, className: "text-muted" })), /* @__PURE__ */ React13.createElement("input", { className: "form-control", placeholder: "Password", type: "password", id: "password", value: fields.password, onChange: handleChange, required: true }))), /* @__PURE__ */ React13.createElement("div", { className: "d-flex justify-content-center mb-4" }, key ? /* @__PURE__ */ React13.createElement(c, { sitekey: key }) : null), /* @__PURE__ */ React13.createElement("div", { className: "text-center" }, /* @__PURE__ */ React13.createElement("button", { type: "submit", id: "submit", className: "btn btn-warning w-100 shadow-sm py-2 fw-bold text-uppercase" }, "Register"))))))));
};
var RegistrationForm_default = RegistrationForm;

// src/index.lib.js
function verifyPcdAccess(user, authState) {
  if (!authState || !authState.isAuthenticated || !user) {
    return {
      authorized: false,
      tier: "UNAUTHENTICATED",
      reason: "User is not authenticated with Okta."
    };
  }
  const rawTier = typeof user.tier === "string" ? user.tier.trim().toUpperCase() : "";
  const isProOrPremium = rawTier === "PRO" || rawTier === "PREMIUM";
  if (isProOrPremium) {
    return {
      authorized: true,
      tier: rawTier,
      reason: "Active Pro/Premium entitlement verified via Okta OIDC."
    };
  }
  return {
    authorized: false,
    tier: rawTier || "STANDARD",
    reason: "PCD access restricted. User must be onboarded as a Pro/Premium customer via the Android mobile app."
  };
}
function myFunction(options = {}) {
  console.info("[CD Foundation] Initialized CD base module (@HolimaX/beerbank) with core services.");
  const authState = options.authState || null;
  const user = options.user || null;
  const entitlement = verifyPcdAccess(user, authState);
  if ((options.tier === "PRO" || options.tier === "PREMIUM" || options.isPcdAuthorized === true) && !entitlement.authorized) {
    console.warn(
      "[CD Foundation Security Alert] Unauthorized attempt to activate PCD premium tier detected. Access denied: caller does not hold verified Pro/Premium Okta entitlement."
    );
  }
  const safeOptions = { ...options };
  delete safeOptions.name;
  delete safeOptions.version;
  delete safeOptions.tier;
  delete safeOptions.isPcdAuthorized;
  delete safeOptions.pcdEntitlement;
  delete safeOptions.capabilities;
  delete safeOptions.status;
  return {
    name: "@HolimaX/beerbank",
    version: "0.1.26",
    tier: entitlement.authorized ? `Cloud Dashboard (CD) + PCD ${entitlement.tier}` : "Cloud Dashboard (CD) Foundation",
    isPcdAuthorized: entitlement.authorized,
    pcdEntitlement: entitlement,
    status: "active",
    capabilities: [
      "catalog-browsing",
      "debounced-search",
      "platformapps-telemetry",
      "circuit-breaker-retry",
      "okta-oidc-auth",
      "favourites-sync"
    ],
    initialized: true,
    ...safeOptions
  };
}
function componentIdentityDescriptionAH(REACT_APP_COMPONENT_VERSION, REACT_APP_COMPONENT_NAME) {
  const VERSION = REACT_APP_COMPONENT_VERSION;
  const COMPONENT = REACT_APP_COMPONENT_NAME;
  return `<div>${VERSION}</div><div>${COMPONENT}</div><div><p>This functionality is not yet supported!</p></div>`;
}
Object.assign(myFunction, {
  myFunction,
  verifyPcdAccess,
  componentIdentityDescriptionAH,
  beerActions: beerActions_exports,
  beerActionTypes,
  beerReducer: reduce,
  rootReducer: reducers_default,
  store: store_default,
  appConfig: app_config_default,
  Home: home_default,
  Dashboard: user_default,
  Favourites: favourites_default,
  Navbar: navbar_default,
  Search: search_default,
  Beer: beer_default,
  Beers: beers_default,
  BeerDetails: beer_details_default,
  Navigation: Navigation_default,
  LoginForm: LoginForm_default,
  LoginPage: LoginPage_default,
  ProfilePage: ProfilePage_default,
  RegistrationForm: RegistrationForm_default
});
var index_lib_default = myFunction;
export {
  beer_default as Beer,
  beer_details_default as BeerDetails,
  beers_default as Beers,
  user_default as Dashboard,
  favourites_default as Favourites,
  home_default as Home,
  LoginForm_default as LoginForm,
  LoginPage_default as LoginPage,
  navbar_default as Navbar,
  Navigation_default as Navigation,
  ProfilePage_default as ProfilePage,
  RegistrationForm_default as RegistrationForm,
  search_default as Search,
  app_config_default as appConfig,
  beerActionTypes,
  beerActions_exports as beerActions,
  reduce as beerReducer,
  componentIdentityDescriptionAH,
  index_lib_default as default,
  displayBeer,
  displayPlatformapp,
  fetchBeers,
  fetchMoreBeers,
  fetchMorePlatformApps,
  fetchPlatformApps,
  handleFavourite,
  handleFavouritePlatformapps,
  myFunction,
  reducers_default as rootReducer,
  searchBeers,
  searchPlatformapps,
  store_default as store,
  verifyPcdAccess
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
