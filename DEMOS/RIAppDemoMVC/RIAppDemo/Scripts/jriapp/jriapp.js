var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("jriapp_core/const", ["require", "exports"], function (require, exports) {
    "use strict";
    (function (DEBUG_LEVEL) {
        DEBUG_LEVEL[DEBUG_LEVEL["NONE"] = 0] = "NONE";
        DEBUG_LEVEL[DEBUG_LEVEL["NORMAL"] = 1] = "NORMAL";
        DEBUG_LEVEL[DEBUG_LEVEL["HIGH"] = 2] = "HIGH";
    })(exports.DEBUG_LEVEL || (exports.DEBUG_LEVEL = {}));
    var DEBUG_LEVEL = exports.DEBUG_LEVEL;
    exports.APP_NAME = "app_default";
    exports.DUMY_ERROR = "DUMMY_ERROR";
    exports.TOOLTIP_SVC = "tooltipSVC";
    exports.STORE_KEY = {
        SVC: "svc.",
        CONVERTER: "cnv.",
        OBJECT: "obj."
    };
    exports.DATA_ATTR = {
        EL_VIEW_KEY: "data-elvwkey",
        DATA_BIND: "data-bind",
        DATA_VIEW: "data-view",
        DATA_EVENT_SCOPE: "data-scope",
        DATA_ITEM_KEY: "data-key",
        DATA_CONTENT: "data-content",
        DATA_COLUMN: "data-column",
        DATA_NAME: "data-name",
        DATA_FORM: "data-form",
        DATA_REQUIRE: "data-require"
    };
    (function (DATE_CONVERSION) {
        DATE_CONVERSION[DATE_CONVERSION["None"] = 0] = "None";
        DATE_CONVERSION[DATE_CONVERSION["ServerLocalToClientLocal"] = 1] = "ServerLocalToClientLocal";
        DATE_CONVERSION[DATE_CONVERSION["UtcToClientLocal"] = 2] = "UtcToClientLocal";
    })(exports.DATE_CONVERSION || (exports.DATE_CONVERSION = {}));
    var DATE_CONVERSION = exports.DATE_CONVERSION;
    (function (DATA_TYPE) {
        DATA_TYPE[DATA_TYPE["None"] = 0] = "None";
        DATA_TYPE[DATA_TYPE["String"] = 1] = "String";
        DATA_TYPE[DATA_TYPE["Bool"] = 2] = "Bool";
        DATA_TYPE[DATA_TYPE["Integer"] = 3] = "Integer";
        DATA_TYPE[DATA_TYPE["Decimal"] = 4] = "Decimal";
        DATA_TYPE[DATA_TYPE["Float"] = 5] = "Float";
        DATA_TYPE[DATA_TYPE["DateTime"] = 6] = "DateTime";
        DATA_TYPE[DATA_TYPE["Date"] = 7] = "Date";
        DATA_TYPE[DATA_TYPE["Time"] = 8] = "Time";
        DATA_TYPE[DATA_TYPE["Guid"] = 9] = "Guid";
        DATA_TYPE[DATA_TYPE["Binary"] = 10] = "Binary";
    })(exports.DATA_TYPE || (exports.DATA_TYPE = {}));
    var DATA_TYPE = exports.DATA_TYPE;
    (function (FIELD_TYPE) {
        FIELD_TYPE[FIELD_TYPE["None"] = 0] = "None";
        FIELD_TYPE[FIELD_TYPE["ClientOnly"] = 1] = "ClientOnly";
        FIELD_TYPE[FIELD_TYPE["Calculated"] = 2] = "Calculated";
        FIELD_TYPE[FIELD_TYPE["Navigation"] = 3] = "Navigation";
        FIELD_TYPE[FIELD_TYPE["RowTimeStamp"] = 4] = "RowTimeStamp";
        FIELD_TYPE[FIELD_TYPE["Object"] = 5] = "Object";
        FIELD_TYPE[FIELD_TYPE["ServerCalculated"] = 6] = "ServerCalculated";
    })(exports.FIELD_TYPE || (exports.FIELD_TYPE = {}));
    var FIELD_TYPE = exports.FIELD_TYPE;
    (function (SORT_ORDER) {
        SORT_ORDER[SORT_ORDER["ASC"] = 0] = "ASC";
        SORT_ORDER[SORT_ORDER["DESC"] = 1] = "DESC";
    })(exports.SORT_ORDER || (exports.SORT_ORDER = {}));
    var SORT_ORDER = exports.SORT_ORDER;
    (function (FILTER_TYPE) {
        FILTER_TYPE[FILTER_TYPE["Equals"] = 0] = "Equals";
        FILTER_TYPE[FILTER_TYPE["Between"] = 1] = "Between";
        FILTER_TYPE[FILTER_TYPE["StartsWith"] = 2] = "StartsWith";
        FILTER_TYPE[FILTER_TYPE["EndsWith"] = 3] = "EndsWith";
        FILTER_TYPE[FILTER_TYPE["Contains"] = 4] = "Contains";
        FILTER_TYPE[FILTER_TYPE["Gt"] = 5] = "Gt";
        FILTER_TYPE[FILTER_TYPE["Lt"] = 6] = "Lt";
        FILTER_TYPE[FILTER_TYPE["GtEq"] = 7] = "GtEq";
        FILTER_TYPE[FILTER_TYPE["LtEq"] = 8] = "LtEq";
        FILTER_TYPE[FILTER_TYPE["NotEq"] = 9] = "NotEq";
    })(exports.FILTER_TYPE || (exports.FILTER_TYPE = {}));
    var FILTER_TYPE = exports.FILTER_TYPE;
    (function (KEYS) {
        KEYS[KEYS["backspace"] = 8] = "backspace";
        KEYS[KEYS["tab"] = 9] = "tab";
        KEYS[KEYS["enter"] = 13] = "enter";
        KEYS[KEYS["esc"] = 27] = "esc";
        KEYS[KEYS["space"] = 32] = "space";
        KEYS[KEYS["pageUp"] = 33] = "pageUp";
        KEYS[KEYS["pageDown"] = 34] = "pageDown";
        KEYS[KEYS["end"] = 35] = "end";
        KEYS[KEYS["home"] = 36] = "home";
        KEYS[KEYS["left"] = 37] = "left";
        KEYS[KEYS["up"] = 38] = "up";
        KEYS[KEYS["right"] = 39] = "right";
        KEYS[KEYS["down"] = 40] = "down";
        KEYS[KEYS["del"] = 127] = "del";
    })(exports.KEYS || (exports.KEYS = {}));
    var KEYS = exports.KEYS;
    exports.ELVIEW_NM = { DataForm: "dataform" };
    exports.LOADER_GIF = { Small: "loader2.gif", Default: "loader.gif" };
    (function (BindTo) {
        BindTo[BindTo["Source"] = 0] = "Source";
        BindTo[BindTo["Target"] = 1] = "Target";
    })(exports.BindTo || (exports.BindTo = {}));
    var BindTo = exports.BindTo;
    (function (BINDING_MODE) {
        BINDING_MODE[BINDING_MODE["OneTime"] = 0] = "OneTime";
        BINDING_MODE[BINDING_MODE["OneWay"] = 1] = "OneWay";
        BINDING_MODE[BINDING_MODE["TwoWay"] = 2] = "TwoWay";
        BINDING_MODE[BINDING_MODE["BackWay"] = 3] = "BackWay";
    })(exports.BINDING_MODE || (exports.BINDING_MODE = {}));
    var BINDING_MODE = exports.BINDING_MODE;
});
define("jriapp_core/shared", ["require", "exports", "jriapp_core/const"], function (require, exports, constsMOD) {
    "use strict";
    exports.Config = window.jriapp_config || {};
    exports.DebugLevel = (!exports.Config.debugLevel) ? constsMOD.DEBUG_LEVEL.NONE : exports.Config.debugLevel;
    var ButtonCss = (function () {
        function ButtonCss() {
        }
        ButtonCss.Edit = "jriapp-actions jriapp-edit";
        ButtonCss.Delete = "jriapp-actions jriapp-delete";
        ButtonCss.OK = "jriapp-actions jriapp-ok";
        ButtonCss.Cancel = "jriapp-actions jriapp-cancel";
        return ButtonCss;
    }());
    exports.ButtonCss = ButtonCss;
    (function (TPriority) {
        TPriority[TPriority["Normal"] = 0] = "Normal";
        TPriority[TPriority["AboveNormal"] = 1] = "AboveNormal";
        TPriority[TPriority["High"] = 2] = "High";
    })(exports.TPriority || (exports.TPriority = {}));
    var TPriority = exports.TPriority;
    var BaseError = (function () {
        function BaseError(message) {
            this._message = message || "Error";
        }
        BaseError.prototype.toString = function () {
            return this._message;
        };
        Object.defineProperty(BaseError.prototype, "isDummy", {
            get: function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseError.prototype, "message", {
            get: function () {
                return this._message;
            },
            enumerable: true,
            configurable: true
        });
        return BaseError;
    }());
    exports.BaseError = BaseError;
    var DummyError = (function (_super) {
        __extends(DummyError, _super);
        function DummyError(originalError) {
            _super.call(this, constsMOD.DUMY_ERROR);
            this._origError = originalError;
        }
        Object.defineProperty(DummyError.prototype, "isDummy", {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DummyError.prototype, "origError", {
            get: function () {
                return this._origError;
            },
            enumerable: true,
            configurable: true
        });
        return DummyError;
    }(BaseError));
    exports.DummyError = DummyError;
    var AbortError = (function (_super) {
        __extends(AbortError, _super);
        function AbortError(reason) {
            _super.call(this, constsMOD.DUMY_ERROR);
            this._reason = reason || "Operation Aborted";
        }
        Object.defineProperty(AbortError.prototype, "isDummy", {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbortError.prototype, "reason", {
            get: function () {
                return this._reason;
            },
            enumerable: true,
            configurable: true
        });
        return AbortError;
    }(BaseError));
    exports.AbortError = AbortError;
    var AggregateError = (function (_super) {
        __extends(AggregateError, _super);
        function AggregateError(errors) {
            _super.call(this, "AggregateError");
            this._errors = errors || [];
        }
        Object.defineProperty(AggregateError.prototype, "errors", {
            get: function () {
                return this._errors;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AggregateError.prototype, "count", {
            get: function () {
                return this._errors.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AggregateError.prototype, "message", {
            get: function () {
                var hashMap = {};
                this._errors.forEach(function (err) {
                    if (!err)
                        return;
                    var str = "";
                    if (err instanceof AggregateError) {
                        str = err.message;
                    }
                    else if (err instanceof Error) {
                        str = err.message;
                    }
                    else if (!!err.message) {
                        str = "" + err.message;
                    }
                    else
                        str = "" + err;
                    hashMap[str] = "";
                });
                var msg = "", errs = Object.keys(hashMap);
                errs.forEach(function (err) {
                    if (!!msg) {
                        msg += "\r\n";
                    }
                    msg += "" + err;
                });
                if (!msg)
                    msg = "Aggregate Error";
                return msg;
            },
            enumerable: true,
            configurable: true
        });
        AggregateError.prototype.toString = function () {
            return "AggregateError: " + "\r\n" + this.message;
        };
        return AggregateError;
    }(BaseError));
    exports.AggregateError = AggregateError;
});
define("jriapp_utils/arrhelper", ["require", "exports"], function (require, exports) {
    "use strict";
    var ArrayHelper = (function () {
        function ArrayHelper() {
        }
        ArrayHelper.clone = function (arr) {
            if (arr.length === 1) {
                return [arr[0]];
            }
            else {
                return Array.apply(null, arr);
            }
        };
        ArrayHelper.fromList = function (list) {
            return [].slice.call(list);
        };
        ArrayHelper.distinct = function (arr) {
            var o = {}, i, l = arr.length, r = [];
            for (i = 0; i < l; i += 1)
                o["" + arr[i]] = arr[i];
            var k = Object.keys(o);
            for (i = 0, l = k.length; i < l; i += 1)
                r.push(o[k[i]]);
            return r;
        };
        ArrayHelper.remove = function (array, obj) {
            var i = array.indexOf(obj);
            if (i > -1) {
                array.splice(i, 1);
            }
            return i;
        };
        ArrayHelper.insert = function (array, obj, pos) {
            array.splice(pos, 0, obj);
        };
        return ArrayHelper;
    }());
    exports.ArrayHelper = ArrayHelper;
});
define("jriapp_utils/strutils", ["require", "exports"], function (require, exports) {
    "use strict";
    var undefined = void (0);
    var StringUtils = (function () {
        function StringUtils() {
        }
        StringUtils.endsWith = function (str, suffix) {
            if (!str || !suffix)
                return false;
            return (str.substr(str.length - suffix.length) === suffix);
        };
        StringUtils.startsWith = function (str, prefix) {
            if (!str || !prefix)
                return false;
            return (str.substr(0, prefix.length) === prefix);
        };
        StringUtils.fastTrim = function (str) {
            if (!str)
                return str;
            return str.replace(/^\s+|\s+$/g, "");
        };
        StringUtils.trim = function (str, chars) {
            if (!chars) {
                return StringUtils.fastTrim(str);
            }
            return StringUtils.ltrim(StringUtils.rtrim(str, chars), chars);
        };
        StringUtils.ltrim = function (str, chars) {
            if (!str)
                return str;
            chars = chars || "\\s";
            return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
        };
        StringUtils.rtrim = function (str, chars) {
            if (!str)
                return str;
            chars = chars || "\\s";
            return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
        };
        StringUtils.format = function (format_str) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var result = "";
            for (var i = 0;;) {
                var open_1 = format_str.indexOf("{", i);
                var close_1 = format_str.indexOf("}", i);
                if ((open_1 < 0) && (close_1 < 0)) {
                    result += format_str.slice(i);
                    break;
                }
                if ((close_1 > 0) && ((close_1 < open_1) || (open_1 < 0))) {
                    if (format_str.charAt(close_1 + 1) !== "}") {
                        throw new Error(StringUtils.ERR_STRING_FORMAT_INVALID + format_str);
                    }
                    result += format_str.slice(i, close_1 + 1);
                    i = close_1 + 2;
                    continue;
                }
                result += format_str.slice(i, open_1);
                i = open_1 + 1;
                if (format_str.charAt(i) === "{") {
                    result += "{";
                    i++;
                    continue;
                }
                if (close_1 < 0)
                    throw new Error(StringUtils.ERR_STRING_FORMAT_INVALID + format_str);
                var brace = format_str.substring(i, close_1);
                var colonIndex = brace.indexOf(":");
                var argNumber = parseInt((colonIndex < 0) ? brace : brace.substring(0, colonIndex), 10);
                if (isNaN(argNumber))
                    throw new Error(StringUtils.ERR_STRING_FORMAT_INVALID + format_str);
                var argFormat = (colonIndex < 0) ? "" : brace.substring(colonIndex + 1);
                var arg = args[argNumber];
                if (arg === undefined || arg === null) {
                    arg = "";
                }
                if (arg.format) {
                    result += arg.format(argFormat);
                }
                else
                    result += arg.toString();
                i = close_1 + 1;
            }
            return result;
        };
        StringUtils.formatNumber = function (num, decimals, dec_point, thousands_sep) {
            num = (num + "").replace(/[^0-9+-Ee.]/g, "");
            var n = !isFinite(+num) ? 0 : +num, prec = !isFinite(+decimals) ? 0 : Math.abs(decimals), sep = (thousands_sep === undefined) ? "," : thousands_sep, dec = (dec_point === undefined) ? "." : dec_point, s = [""], toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return "" + Math.round(n * k) / k;
            };
            if (decimals === null || decimals === undefined) {
                s = ("" + n).split(".");
                prec = 2;
            }
            else {
                s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
            }
            var i, s0 = "", len = s[0].length;
            if (len > 3) {
                for (i = 0; i < len; i += 1) {
                    s0 = s0 + s[0].charAt(i);
                    if (i < (len - 1) && (len - i - 1) % 3 === 0)
                        s0 = s0 + sep;
                }
                s[0] = s0;
            }
            if ((s[1] || "").length < prec) {
                s[1] = s[1] || "";
                s[1] += new Array(prec - s[1].length + 1).join("0");
            }
            return s.join(dec);
        };
        StringUtils.stripNonNumeric = function (str) {
            str += "";
            var rgx = /^\d|\.|-$/;
            var out = "";
            for (var i = 0; i < str.length; i++) {
                if (rgx.test(str.charAt(i))) {
                    if (!((str.charAt(i) === "." && out.indexOf(".") !== -1) ||
                        (str.charAt(i) === "-" && out.length !== 0))) {
                        out += str.charAt(i);
                    }
                }
            }
            return out;
        };
        StringUtils.padLeft = function (val, length, str) {
            str = str || " ";
            return val.length >= length
                ? val
                : (new Array(Math.ceil((length - val.length) / str.length) + 1).join(str)).substr(0, (length - val.length)) + val;
        };
        StringUtils.ERR_STRING_FORMAT_INVALID = "String format has invalid expression value: ";
        return StringUtils;
    }());
    exports.StringUtils = StringUtils;
    ;
});
define("jriapp_utils/syschecks", ["require", "exports"], function (require, exports) {
    "use strict";
    var PROP_BAG = "IPBag";
    var SysChecks = (function () {
        function SysChecks() {
        }
        SysChecks._PROP_BAG_NAME = function () { return PROP_BAG; };
        SysChecks._isBaseObj = function (obj) { return false; };
        SysChecks._isElView = function (obj) { return false; };
        SysChecks._isBinding = function (obj) { return false; };
        SysChecks._isPropBag = function (obj) {
            return SysChecks._isBaseObj(obj) && obj.toString() === PROP_BAG;
        };
        SysChecks._isCollection = function (obj) { return false; };
        SysChecks._getItemByProp = function (obj, prop) { return null; };
        SysChecks._isValidationError = function (obj) { return false; };
        SysChecks._isTemplateElView = function (obj) { return false; };
        SysChecks._setIsInsideTemplate = function (elView) { };
        SysChecks._isDataForm = function (el) { return false; };
        SysChecks._isInsideDataForm = function (el) { return false; };
        SysChecks._isInNestedForm = function (root, forms, el) { return false; };
        SysChecks._getParentDataForm = function (rootForm, el) { return null; };
        return SysChecks;
    }());
    exports.SysChecks = SysChecks;
});
define("jriapp_utils/checks", ["require", "exports", "jriapp_utils/syschecks"], function (require, exports, syschecks_1) {
    "use strict";
    var syschecks = syschecks_1.SysChecks;
    var Checks = (function () {
        function Checks() {
        }
        Checks.isHasProp = function (obj, prop) {
            if (!obj)
                return false;
            return prop in obj;
        };
        Checks.isNull = function (a) {
            return a === null;
        };
        Checks.isUndefined = function (a) {
            return a === Checks.undefined;
        };
        Checks.isNt = function (a) {
            return (a === null || a === Checks.undefined);
        };
        Checks.isObject = function (a) {
            if (Checks.isNt(a))
                return false;
            return (typeof a === "object");
        };
        Checks.isSimpleObject = function (a) {
            if (!a)
                return false;
            return ((typeof a === "object") && Object.prototype === Object.getPrototypeOf(a));
        };
        Checks.isString = function (a) {
            if (Checks.isNt(a))
                return false;
            return (typeof a === "string") || (typeof a === "object" && a instanceof String);
        };
        Checks.isFunc = function (a) {
            if (Checks.isNt(a))
                return false;
            return (typeof a === "function") || (typeof a === "object" && a instanceof Function);
        };
        Checks.isBoolean = function (a) {
            if (Checks.isNt(a))
                return false;
            return (typeof a === "boolean") || (typeof a === "object" && a instanceof Boolean);
        };
        Checks.isDate = function (a) {
            if (Checks.isNt(a))
                return false;
            return (typeof a === "object" && a instanceof Date);
        };
        Checks.isNumber = function (a) {
            if (Checks.isNt(a))
                return false;
            return typeof a === "number" || (typeof a === "object" && a instanceof Number);
        };
        Checks.isNumeric = function (a) {
            return Checks.isNumber(a) || (Checks.isString(a) && !isNaN(Number(a)));
        };
        Checks.isBoolString = function (a) {
            if (Checks.isNt(a))
                return false;
            return (a === "true" || a === "false");
        };
        Checks.isArray = function (a) {
            if (!a)
                return false;
            return Array.isArray(a);
        };
        Checks.isBaseObject = function (a) {
            return syschecks._isBaseObj(a);
        };
        Checks.isCollection = function (a) {
            return syschecks._isCollection(a);
        };
        Checks.isEditable = function (obj) {
            var isBO = Checks.isBaseObject(obj);
            return isBO && Checks.isFunc(obj.beginEdit) && !!obj.endEdit && !!obj.cancelEdit && Checks.isHasProp(obj, "isEditing");
        };
        Checks.isSubmittable = function (obj) {
            return !!obj && Checks.isFunc(obj.submitChanges) && Checks.isHasProp(obj, "isCanSubmit");
        };
        Checks.isErrorNotification = function (obj) {
            if (!obj)
                return false;
            if (!Checks.isFunc(obj.getIErrorNotification))
                return false;
            var tmp = obj.getIErrorNotification();
            return !!tmp && Checks.isFunc(tmp.getIErrorNotification);
        };
        Checks.isThenable = function (a) {
            if (!a)
                return false;
            return ((typeof (a) === "object") && Checks.isFunc(a.then));
        };
        Checks.undefined = void (0);
        return Checks;
    }());
    exports.Checks = Checks;
});
define("jriapp_utils/coreutils", ["require", "exports", "jriapp_core/const", "jriapp_core/shared", "jriapp_utils/arrhelper", "jriapp_utils/strutils", "jriapp_utils/checks"], function (require, exports, const_1, shared_1, arrhelper_1, strutils_1, checks_1) {
    "use strict";
    var DEBUG = (function () {
        function DEBUG() {
        }
        DEBUG.checkStartDebugger = function () {
            if (shared_1.DebugLevel === const_1.DEBUG_LEVEL.HIGH) {
                debugger;
            }
        };
        DEBUG.isDebugging = function () {
            return shared_1.DebugLevel > const_1.DEBUG_LEVEL.NONE;
        };
        return DEBUG;
    }());
    exports.DEBUG = DEBUG;
    var ERROR = (function () {
        function ERROR() {
        }
        ERROR.addHandler = function (name, handler) {
            ERROR._handlers[name] = handler;
        };
        ERROR.removeHandler = function (name) {
            delete ERROR._handlers[name];
        };
        ERROR.handleError = function (sender, error, source) {
            if (ERROR.checkIsDummy(error)) {
                return true;
            }
            var handler, isHandled = false;
            handler = ERROR._handlers[const_1.APP_NAME];
            if (!!handler) {
                if (handler === sender)
                    handler = null;
                else {
                    isHandled = handler.handleError(error, source);
                }
            }
            if (!isHandled) {
                handler = ERROR._handlers["*"];
                if (!!handler) {
                    if (handler === sender)
                        handler = null;
                    else
                        isHandled = handler.handleError(error, source);
                }
            }
            return isHandled;
        };
        ERROR.throwDummy = function (err) {
            if (ERROR.checkIsDummy(err))
                throw err;
            else
                throw new shared_1.DummyError(err);
        };
        ERROR.checkIsDummy = function (error) {
            return !!error && !!error.isDummy;
        };
        ERROR.checkIsAbort = function (error) {
            return !!error && (error instanceof shared_1.AbortError);
        };
        ERROR.reThrow = function (ex, isHandled) {
            if (!isHandled)
                throw ex;
            else
                ERROR.throwDummy(ex);
        };
        ERROR.abort = function (reason) {
            throw new shared_1.AbortError(reason);
        };
        ERROR._handlers = {};
        return ERROR;
    }());
    exports.ERROR = ERROR;
    var LOG = (function () {
        function LOG() {
        }
        LOG.log = function (str) {
            console.log(str);
        };
        LOG.warn = function (str) {
            console.warn(str);
        };
        LOG.error = function (str) {
            console.error(str);
        };
        return LOG;
    }());
    exports.LOG = LOG;
    var CoreUtils = (function () {
        function CoreUtils() {
        }
        CoreUtils.getNewID = function () {
            var id = CoreUtils._newID;
            CoreUtils._newID += 1;
            return id;
        };
        CoreUtils.setValue = function (root, namePath, val, checkOverwrite) {
            var parts = namePath.split("."), parent = root, i;
            for (i = 0; i < parts.length - 1; i += 1) {
                if (!parent[parts[i]]) {
                    parent[parts[i]] = {};
                }
                parent = parent[parts[i]];
            }
            var n = parts[parts.length - 1];
            if (!!checkOverwrite && (parent[n] !== checks_1.Checks.undefined)) {
                throw new Error(strutils_1.StringUtils.format(CoreUtils.ERR_OBJ_ALREADY_REGISTERED, namePath));
            }
            parent[n] = val;
        };
        CoreUtils.getValue = function (root, namePath) {
            var res;
            var parts = namePath.split("."), parent = root, i;
            for (i = 0; i < parts.length; i += 1) {
                res = parent[parts[i]];
                if (res === checks_1.Checks.undefined) {
                    return null;
                }
                parent = res;
            }
            return res;
        };
        CoreUtils.removeValue = function (root, namePath) {
            var parts = namePath.split("."), parent = root, i, val = null;
            for (i = 0; i < parts.length - 1; i += 1) {
                if (!parent[parts[i]]) {
                    return null;
                }
                parent = parent[parts[i]];
            }
            var n = parts[parts.length - 1];
            val = parent[n];
            if (val !== checks_1.Checks.undefined) {
                delete parent[n];
            }
            return val;
        };
        CoreUtils.resolveOwner = function (obj, path) {
            var parts = path.split("."), i, res, len = parts.length;
            if (len === 1)
                return obj;
            res = obj;
            for (i = 0; i < len - 1; i += 1) {
                res = res[parts[i]];
                if (res === checks_1.Checks.undefined)
                    return checks_1.Checks.undefined;
                if (res === null)
                    return null;
            }
            return res;
        };
        CoreUtils.uuid = function (len, radix) {
            var i, chars = CoreUtils.CHARS, uuid = [], rnd = Math.random;
            radix = radix || chars.length;
            if (!!len) {
                for (i = 0; i < len; i += 1)
                    uuid[i] = chars[0 | rnd() * radix];
            }
            else {
                var r = void 0;
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
                uuid[14] = "4";
                for (i = 0; i < 36; i += 1) {
                    if (!uuid[i]) {
                        r = 0 | rnd() * 16;
                        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r & 0xf];
                    }
                }
            }
            return uuid.join("");
        };
        CoreUtils.parseBool = function (a) {
            if (checks_1.Checks.isBoolean(a))
                return a;
            var v = strutils_1.StringUtils.trim(a).toLowerCase();
            if (v === "false")
                return false;
            if (v === "true")
                return true;
            throw new Error(strutils_1.StringUtils.format("parseBool, argument: {0} is not a valid boolean string", a));
        };
        CoreUtils.round = function (num, decimals) {
            return parseFloat(num.toFixed(decimals));
        };
        CoreUtils.merge = function (source, target) {
            if (!target) {
                target = {};
            }
            if (!source)
                return target;
            var names = Object.getOwnPropertyNames(source), n;
            for (var i = 0, len = names.length; i < len; i += 1) {
                n = names[i];
                target[n] = source[n];
            }
            return target;
        };
        CoreUtils.clone = function (obj, target) {
            var res, i, len;
            if (!obj) {
                return obj;
            }
            if (CoreUtils.check.isArray(obj)) {
                len = obj.length;
                res = new Array(len);
                for (i = 0; i < len; i += 1) {
                    res[i] = CoreUtils.clone(obj[i], null);
                }
            }
            else if (CoreUtils.check.isSimpleObject(obj)) {
                res = target || {};
                var p = void 0, keys = Object.getOwnPropertyNames(obj);
                len = keys.length;
                for (i = 0; i < len; i += 1) {
                    p = keys[i];
                    res[p] = CoreUtils.clone(obj[p], null);
                }
            }
            else
                return obj;
            return res;
        };
        CoreUtils.iterateIndexer = function (obj, fn) {
            if (!obj)
                return;
            var names = Object.keys(obj);
            for (var i = 0; i < names.length; i += 1) {
                var name_1 = names[i];
                var val = obj[name_1];
                fn(name_1, val);
            }
        };
        CoreUtils.extend = function (defaults, current) {
            return CoreUtils.merge(current, defaults);
        };
        CoreUtils.memoize = function (callback) {
            var value;
            return function () {
                if (!!callback) {
                    value = callback();
                    callback = checks_1.Checks.undefined;
                }
                return value;
            };
        };
        CoreUtils.forEachProp = function (obj, fn) {
            if (!obj)
                return;
            var names = Object.getOwnPropertyNames(obj);
            names.forEach(fn);
        };
        CoreUtils.assignStrings = function (target, source) {
            if (checks_1.Checks.isNt(target))
                target = {};
            if (!checks_1.Checks.isSimpleObject(source))
                return target;
            var p, keys = Object.keys(source), len = keys.length, tval, sval;
            for (var i = 0; i < len; i += 1) {
                p = keys[i];
                tval = target[p];
                sval = source[p];
                if (checks_1.Checks.isSimpleObject(sval)) {
                    target[p] = CoreUtils.assignStrings(tval, sval);
                }
                else if (checks_1.Checks.isString(sval)) {
                    target[p] = sval;
                }
            }
            return target;
        };
        CoreUtils._newID = 0;
        CoreUtils.ERR_OBJ_ALREADY_REGISTERED = "an Object with the name: {0} is already registered and can not be overwritten";
        CoreUtils.CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        CoreUtils.check = checks_1.Checks;
        CoreUtils.str = strutils_1.StringUtils;
        CoreUtils.arr = arrhelper_1.ArrayHelper;
        CoreUtils.get_timeZoneOffset = (function () {
            var dt = new Date();
            var tz = dt.getTimezoneOffset();
            return function () {
                return tz;
            };
        })();
        CoreUtils.hasProp = checks_1.Checks.isHasProp;
        return CoreUtils;
    }());
    exports.CoreUtils = CoreUtils;
});
define("jriapp_core/lang", ["require", "exports", "jriapp_utils/coreutils"], function (require, exports, coreutils_1) {
    "use strict";
    function assign(target, source) {
        return coreutils_1.CoreUtils.assignStrings(target, source);
    }
    exports.assign = assign;
    var _ERRS = {
        ERR_OBJ_ALREADY_REGISTERED: "an Object with the name: {0} is already registered and can not be overwritten",
        ERR_APP_NEED_JQUERY: "The project is dependent on JQuery",
        ERR_ASSERTION_FAILED: 'The Assertion "{0}" failed',
        ERR_BINDING_CONTENT_NOT_FOUND: "BindingContent is not found",
        ERR_DBSET_READONLY: "TDbSet: {0} is readOnly and can not be edited",
        ERR_DBSET_INVALID_FIELDNAME: "TDbSet: {0} has no field with the name: {1}",
        ERR_FIELD_READONLY: "Field is readOnly and can not be edited",
        ERR_FIELD_ISNOT_NULLABLE: "Field is not nullable and can not be set to null",
        ERR_FIELD_WRONG_TYPE: "Value {0} has wrong datatype. It should have {1} datatype.",
        ERR_FIELD_MAXLEN: "Value exceeds field maxlength: {0}",
        ERR_FIELD_DATATYPE: "Unknown field data type: {0}",
        ERR_FIELD_REGEX: "Value {0} can not be accepted as the right value for this field",
        ERR_FIELD_RANGE: "Value {0} is outside the allowed range {1} for this field",
        ERR_EVENT_INVALID: "Invalid event name: {0}",
        ERR_EVENT_INVALID_FUNC: "Invalid event function value",
        ERR_MODULE_NOT_REGISTERED: "Module: {0} is not registered",
        ERR_MODULE_ALREDY_REGISTERED: "Module: {0} is already registered",
        ERR_PROP_NAME_EMPTY: "Empty property name parameter",
        ERR_PROP_NAME_INVALID: 'The object does not have a property with a name: "{0}"',
        ERR_GLOBAL_SINGLTON: "There must be only one instance of Global object",
        ERR_TEMPLATE_ALREADY_REGISTERED: "TEMPLATE with the name: {0} is already registered",
        ERR_TEMPLATE_NOTREGISTERED: "TEMPLATE with the name: {0} is not registered",
        ERR_TEMPLATE_GROUP_NOTREGISTERED: "TEMPLATE's group: {0} is not registered",
        ERR_TEMPLATE_HAS_NO_ID: "TEMPLATE inside SCRIPT tag must have an ID attribute",
        ERR_CONVERTER_NOTREGISTERED: "Converter: {0} is not registered",
        ERR_JQUERY_DATEPICKER_NOTFOUND: "Application is dependent on JQuery.UI.datepicker. Please include it in the scripts.",
        ERR_PARAM_INVALID: "Parameter: {0} has invalid value: {1}",
        ERR_PARAM_INVALID_TYPE: "Parameter: {0} has invalid type. It must be {1}",
        ERR_KEY_IS_EMPTY: "Key value must not be empty",
        ERR_KEY_IS_NOTFOUND: "Can not find item with the key: {0}",
        ERR_ITEM_IS_ATTACHED: "Operation invalid, reason: Item already has been attached",
        ERR_ITEM_IS_DETACHED: "Operation invalid, reason: Item is detached",
        ERR_ITEM_IS_NOTFOUND: "Operation invalid, reason: Item is not found",
        ERR_ITEM_NAME_COLLISION: 'The "{0}" TDbSet\'s field name: "{1}" is invalid, because a property with that name already exists on the entity type.',
        ERR_DICTKEY_IS_NOTFOUND: "Dictionary keyName: {0} does not exist in item's properties",
        ERR_DICTKEY_IS_EMPTY: "Dictionary key property: {0} must be not empty",
        ERR_CONV_INVALID_DATE: "Cannot parse string value: {0} to a valid Date",
        ERR_CONV_INVALID_NUM: "Cannot parse string value: {0} to a valid Numeric",
        ERR_QUERY_NAME_NOTFOUND: "Can not find Query with the name: {0}",
        ERR_QUERY_BETWEEN: '"BETWEEN" Query operator expects two values',
        ERR_QUERY_OPERATOR_INVALID: "Invalid query operator {0}",
        ERR_OPER_REFRESH_INVALID: "Refresh operation can not be done with items in Detached or Added State",
        ERR_CALC_FIELD_DEFINE: 'Field: "{0}" definition error: Calculated fields can be dependent only on items fields',
        ERR_CALC_FIELD_SELF_DEPEND: 'Field: "{0}" definition error: Calculated fields can not be dependent on themselves',
        ERR_DOMAIN_CONTEXT_INITIALIZED: "DbContext already initialized",
        ERR_DOMAIN_CONTEXT_NOT_INITIALIZED: "DbContext is not initialized",
        ERR_SVC_METH_PARAM_INVALID: "Invalid parameter {0} value {1} for service method: {2} invocation",
        ERR_DB_LOAD_NO_QUERY: "Query parameter is not supplied",
        ERR_DBSET_NAME_INVALID: "Invalid dbSet Name: {0}",
        ERR_APP_NAME_NOT_UNIQUE: "Application instance with the name: {0} already exists",
        ERR_ELVIEW_NOT_REGISTERED: "Can not find registered element view with the name: {0}",
        ERR_ELVIEW_NOT_CREATED: "Can not create element view for element with Tag Name: {0}",
        ERR_BIND_TARGET_EMPTY: "Binding target is empty",
        ERR_BIND_TGTPATH_INVALID: "Binding targetPath has invalid value: {0}",
        ERR_BIND_MODE_INVALID: "Binding mode has invalid value: {0}",
        ERR_BIND_TARGET_INVALID: "Binding target must be a descendant of BaseObject",
        ERR_EXPR_BRACES_INVALID: "Expression {0} has no closing braces",
        ERR_APP_SETUP_INVALID: "Application's setUp method parameter must be a valid function",
        ERR_GRID_DATASRC_INVALID: "DataGrid's datasource must be a descendant of Collection type",
        ERR_COLLECTION_CHANGETYPE_INVALID: "Invalid Collection change type value: {0}",
        ERR_GRID_COLTYPE_INVALID: "Invalid Column type type value: {0}",
        ERR_PAGER_DATASRC_INVALID: "Pager datasource must be a descendant of Collection type",
        ERR_STACKPNL_DATASRC_INVALID: "StackPanel datasource must be a descendant of Collection type",
        ERR_STACKPNL_TEMPLATE_INVALID: "StackPanel templateID is not provided in the options",
        ERR_LISTBOX_DATASRC_INVALID: "ListBox datasource must be a descendant of Collection type",
        ERR_DATAFRM_DCTX_INVALID: "DataForm's dataContext must be a descendant of BaseObject type",
        ERR_DCTX_HAS_NO_FIELDINFO: "DataContext has no getFieldInfo method",
        ERR_TEMPLATE_ID_INVALID: "Element can not be found by TemplateID: {0}",
        ERR_ITEM_DELETED_BY_ANOTHER_USER: "The record was deleted by another user",
        ERR_ACCESS_DENIED: "The access is denied. Please, ask administrator to assign user rights to your account.",
        ERR_CONCURRENCY: "The record has been modified by another user. Please, refresh record before editing.",
        ERR_VALIDATION: "Data validation error",
        ERR_SVC_VALIDATION: "Data validation error: {0}",
        ERR_SVC_ERROR: "Service error: {0}",
        ERR_UNEXPECTED_SVC_ERROR: "Unexpected service error: {0}",
        ERR_ASSOC_NAME_INVALID: "Invalid association name: {0}",
        ERR_DATAVIEW_DATASRC_INVALID: "TDataView datasource must not be null and should be descendant of Collection type",
        ERR_DATAVIEW_FILTER_INVALID: "TDataView fn_filter option must be valid function which accepts entity and returns boolean value"
    };
    var PAGER = {
        firstText: "<<",
        lastText: ">>",
        previousText: "<",
        nextText: ">",
        pageInfo: "Page {0} of {1}",
        firstPageTip: "to first page",
        prevPageTip: "back to page {0}",
        nextPageTip: "next to page {0}",
        lastPageTip: "last page",
        showingTip: "showing result {0} to {1} of {2}",
        showTip: "show result {0} to {1} of {2}"
    };
    var VALIDATE = {
        errorInfo: "Validation errors:",
        errorField: "field:"
    };
    var TEXT = {
        txtEdit: "Edit",
        txtAddNew: "Add new",
        txtDelete: "Delete",
        txtCancel: "Cancel",
        txtOk: "Ok",
        txtRefresh: "Refresh",
        txtAskDelete: "Are you sure, you want to delete row?",
        txtSubmitting: "Submitting data ...",
        txtSave: "Save",
        txtClose: "Close",
        txtField: "Field"
    };
    var _STRS = { PAGER: PAGER, VALIDATE: VALIDATE, TEXT: TEXT };
    exports.ERRS = _ERRS;
    exports.STRS = _STRS;
});
define("jriapp_utils/eventhelper", ["require", "exports", "jriapp_utils/checks", "jriapp_utils/strutils", "jriapp_utils/coreutils", "jriapp_core/lang"], function (require, exports, checks_2, strutils_2, coreutils_2, lang_1) {
    "use strict";
    var checks = checks_2.Checks, strUtils = strutils_2.StringUtils, debug = coreutils_2.DEBUG;
    var EventList = (function () {
        function EventList() {
        }
        EventList.Create = function () {
            return {};
        };
        EventList.Node = function (handler, ns, context) {
            return { fn: handler, next: null, context: !context ? null : context };
        };
        EventList.count = function (list) {
            if (!list)
                return 0;
            var ns_keys, cnt = 0, obj;
            for (var j = 0; j <= 2; ++j) {
                obj = list[j];
                if (!!obj) {
                    ns_keys = Object.keys(obj);
                    for (var i = 0; i < ns_keys.length; ++i) {
                        cnt += obj[ns_keys[i]].length;
                    }
                }
            }
            return cnt;
        };
        EventList.append = function (list, node, ns, priority) {
            if (priority === void 0) { priority = 0; }
            if (!ns)
                ns = "*";
            var obj = list[priority];
            if (!obj) {
                list[priority] = obj = {};
            }
            var arr = obj[ns];
            if (!arr)
                obj[ns] = arr = [];
            arr.push(node);
        };
        EventList.remove = function (list, ns) {
            if (!list)
                return;
            var ns_keys, obj;
            if (!ns)
                ns = "*";
            for (var j = 0; j <= 2; ++j) {
                obj = list[j];
                if (!!obj) {
                    if (ns === "*") {
                        ns_keys = Object.keys(obj);
                        for (var i = 0; i < ns_keys.length; ++i) {
                            delete obj[ns_keys[i]];
                        }
                    }
                    else {
                        delete obj[ns];
                    }
                }
            }
        };
        EventList.toArray = function (list) {
            if (!list)
                return [];
            var res = [], arr, cur, obj;
            for (var k = 2; k >= 0; k -= 1) {
                obj = list[k];
                if (!!obj) {
                    var ns_keys = Object.keys(obj);
                    for (var i = 0; i < ns_keys.length; ++i) {
                        arr = obj[ns_keys[i]];
                        for (var j = 0; j < arr.length; ++j) {
                            res.push(arr[j]);
                        }
                    }
                }
            }
            return res;
        };
        return EventList;
    }());
    var evList = EventList;
    var EventHelper = (function () {
        function EventHelper() {
        }
        EventHelper.removeNs = function (ev, ns) {
            if (!ev)
                return;
            if (!ns)
                ns = "*";
            var keys = Object.keys(ev);
            for (var i = 0; i < keys.length; i += 1) {
                if (ns === "*") {
                    delete ev[keys[i]];
                }
                else {
                    evList.remove(ev[keys[i]], ns);
                }
            }
        };
        EventHelper.add = function (ev, name, handler, nmspace, context, priority) {
            if (!ev) {
                debug.checkStartDebugger();
                throw new Error(strUtils.format(lang_1.ERRS.ERR_ASSERTION_FAILED, "ev is a valid object"));
            }
            if (!checks.isFunc(handler)) {
                throw new Error(lang_1.ERRS.ERR_EVENT_INVALID_FUNC);
            }
            if (!name)
                throw new Error(strUtils.format(lang_1.ERRS.ERR_EVENT_INVALID, "[Empty]"));
            var self = this, n = name, ns = !nmspace ? "*" : "" + nmspace;
            var list = ev[n], node = evList.Node(handler, ns, context);
            if (!list) {
                ev[n] = list = evList.Create();
            }
            evList.append(list, node, ns, priority);
        };
        EventHelper.remove = function (ev, name, nmspace) {
            if (!ev)
                return null;
            var self = this, ns = !nmspace ? "*" : "" + nmspace;
            if (!name) {
                EventHelper.removeNs(ev, ns);
            }
            else {
                if (ns === "*") {
                    delete ev[name];
                }
                else {
                    evList.remove(ev[name], ns);
                }
            }
        };
        EventHelper.raise = function (sender, ev, name, args) {
            if (!ev)
                return;
            if (!!name) {
                var arr = evList.toArray(ev[name]);
                var node = void 0;
                for (var i = 0; i < arr.length; i++) {
                    node = arr[i];
                    node.fn.apply(node.context, [sender, args]);
                }
            }
        };
        EventHelper.raiseProp = function (sender, ev, prop, args) {
            if (!ev)
                return;
            if (!!prop) {
                var isAllProp = prop === "*";
                if (!isAllProp) {
                    EventHelper.raise(sender, ev, "0*", args);
                }
                EventHelper.raise(sender, ev, "0" + prop, args);
            }
        };
        return EventHelper;
    }());
    exports.EventHelper = EventHelper;
});
define("jriapp_core/object", ["require", "exports", "jriapp_core/lang", "jriapp_utils/syschecks", "jriapp_utils/checks", "jriapp_utils/strutils", "jriapp_utils/coreutils", "jriapp_utils/eventhelper"], function (require, exports, lang_2, syschecks_2, checks_3, strUtils_1, coreutils_3, eventhelper_1) {
    "use strict";
    var OBJ_EVENTS = {
        error: "error",
        destroyed: "destroyed"
    };
    var checks = checks_3.Checks, strUtils = strUtils_1.StringUtils, coreUtils = coreutils_3.CoreUtils, evHelper = eventhelper_1.EventHelper, debug = coreutils_3.DEBUG, syschecks = syschecks_2.SysChecks;
    syschecks._isBaseObj = function (obj) {
        return (!!obj && obj instanceof BaseObject);
    };
    var ObjState;
    (function (ObjState) {
        ObjState[ObjState["None"] = 0] = "None";
        ObjState[ObjState["DestroyCalled"] = 1] = "DestroyCalled";
        ObjState[ObjState["Destroyed"] = 2] = "Destroyed";
    })(ObjState || (ObjState = {}));
    var BaseObject = (function () {
        function BaseObject() {
            this._obj_state = 0;
            this._events = null;
        }
        BaseObject.prototype._getEventNames = function () {
            return [OBJ_EVENTS.error, OBJ_EVENTS.destroyed];
        };
        BaseObject.prototype._addHandler = function (name, handler, nmspace, context, priority) {
            if (this._obj_state === void 0) {
                throw new Error("Using uninitialized object");
            }
            if (this._obj_state !== 0)
                throw new Error(strUtils.format(lang_2.ERRS.ERR_ASSERTION_FAILED, "this._obj_state !== ObjState.None"));
            if (debug.isDebugging()) {
                if (!!name && this._getEventNames().indexOf(name) < 0) {
                    debug.checkStartDebugger();
                    throw new Error(strUtils.format(lang_2.ERRS.ERR_EVENT_INVALID, name));
                }
            }
            if (!this._events)
                this._events = {};
            evHelper.add(this._events, name, handler, nmspace, context, priority);
        };
        BaseObject.prototype._removeHandler = function (name, nmspace) {
            evHelper.remove(this._events, name, nmspace);
        };
        Object.defineProperty(BaseObject.prototype, "_isDestroyed", {
            get: function () {
                return this._obj_state === 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "_isDestroyCalled", {
            get: function () {
                return this._obj_state !== 0;
            },
            set: function (v) {
                if (this._obj_state === 2) {
                    throw new Error(strUtils.format(lang_2.ERRS.ERR_ASSERTION_FAILED, "this._obj_state !== ObjState.Destroyed"));
                }
                this._obj_state = !v ? 0 : 1;
            },
            enumerable: true,
            configurable: true
        });
        BaseObject.prototype._isHasProp = function (prop) {
            return checks.isHasProp(this, prop);
        };
        BaseObject.prototype.handleError = function (error, source) {
            if (coreutils_3.ERROR.checkIsDummy(error)) {
                return true;
            }
            if (!error.message) {
                error = new Error("Unexpected Error: " + error);
            }
            var args = { error: error, source: source, isHandled: false };
            evHelper.raise(this, this._events, OBJ_EVENTS.error, args);
            var isHandled = args.isHandled;
            if (!isHandled) {
                isHandled = coreutils_3.ERROR.handleError(this, error, source);
            }
            return isHandled;
        };
        BaseObject.prototype.addHandler = function (name, handler, nmspace, context, priority) {
            this._addHandler(name, handler, nmspace, context, priority);
        };
        BaseObject.prototype.removeHandler = function (name, nmspace) {
            if (debug.isDebugging() && !!name && this._getEventNames().indexOf(name) < 0) {
                debug.checkStartDebugger();
                throw new Error(strUtils.format(lang_2.ERRS.ERR_EVENT_INVALID, name));
            }
            this._removeHandler(name, nmspace);
        };
        BaseObject.prototype.addOnDestroyed = function (handler, nmspace, context, priority) {
            this._addHandler(OBJ_EVENTS.destroyed, handler, nmspace, context, priority);
        };
        BaseObject.prototype.removeOnDestroyed = function (nmspace) {
            evHelper.remove(this._events, OBJ_EVENTS.destroyed, nmspace);
        };
        BaseObject.prototype.addOnError = function (handler, nmspace, context, priority) {
            this._addHandler(OBJ_EVENTS.error, handler, nmspace, context, priority);
        };
        BaseObject.prototype.removeOnError = function (nmspace) {
            evHelper.remove(this._events, OBJ_EVENTS.error, nmspace);
        };
        BaseObject.prototype.removeNSHandlers = function (nmspace) {
            evHelper.remove(this._events, null, nmspace);
        };
        BaseObject.prototype.raiseEvent = function (name, args) {
            if (!name)
                throw new Error(lang_2.ERRS.ERR_EVENT_INVALID);
            evHelper.raise(this, this._events, name, args);
        };
        BaseObject.prototype.raisePropertyChanged = function (name) {
            var data = { property: name };
            var parts = name.split("."), lastPropName = parts[parts.length - 1];
            if (parts.length > 1) {
                var obj = coreUtils.resolveOwner(this, name);
                if (debug.isDebugging() && checks.isUndefined(obj)) {
                    debug.checkStartDebugger();
                    throw new Error(strUtils.format(lang_2.ERRS.ERR_PROP_NAME_INVALID, name));
                }
                if (syschecks._isBaseObj(obj)) {
                    obj.raisePropertyChanged(lastPropName);
                }
            }
            else {
                if (debug.isDebugging() && !this._isHasProp(lastPropName)) {
                    debug.checkStartDebugger();
                    throw new Error(strUtils.format(lang_2.ERRS.ERR_PROP_NAME_INVALID, lastPropName));
                }
                evHelper.raiseProp(this, this._events, lastPropName, data);
            }
        };
        BaseObject.prototype.addOnPropertyChange = function (prop, handler, nmspace, context, priority) {
            if (!prop)
                throw new Error(lang_2.ERRS.ERR_PROP_NAME_EMPTY);
            if (debug.isDebugging() && prop !== "*" && !this._isHasProp(prop)) {
                debug.checkStartDebugger();
                throw new Error(strUtils.format(lang_2.ERRS.ERR_PROP_NAME_INVALID, prop));
            }
            if (!this._events)
                this._events = {};
            evHelper.add(this._events, "0" + prop, handler, nmspace, context, priority);
        };
        BaseObject.prototype.removeOnPropertyChange = function (prop, nmspace) {
            if (!!prop) {
                if (debug.isDebugging() && prop !== "*" && !this._isHasProp(prop)) {
                    debug.checkStartDebugger();
                    throw new Error(strUtils.format(lang_2.ERRS.ERR_PROP_NAME_INVALID, prop));
                }
                evHelper.remove(this._events, "0" + prop, nmspace);
            }
            else {
                evHelper.removeNs(this._events, nmspace);
            }
        };
        BaseObject.prototype.getIsDestroyed = function () {
            return this._obj_state === 2;
        };
        BaseObject.prototype.getIsDestroyCalled = function () {
            return this._obj_state !== 0;
        };
        BaseObject.prototype.destroy = function () {
            if (this._obj_state === 2)
                return;
            this._obj_state = 2;
            try {
                evHelper.raise(this, this._events, OBJ_EVENTS.destroyed, {});
            }
            finally {
                this._events = null;
            }
        };
        return BaseObject;
    }());
    exports.BaseObject = BaseObject;
});
define("jriapp_core/parser", ["require", "exports", "jriapp_core/lang", "jriapp_utils/syschecks", "jriapp_utils/checks", "jriapp_utils/strutils", "jriapp_utils/coreutils"], function (require, exports, lang_3, syschecks_3, checks_4, strUtils_2, coreutils_4) {
    "use strict";
    var checks = checks_4.Checks, syschecks = syschecks_3.SysChecks, strUtils = strUtils_2.StringUtils, coreUtils = coreutils_4.CoreUtils;
    var __trimOuterBracesRX = /^([{]){0,1}|([}]){0,1}$/g;
    var __trimQuotsRX = /^(['"])+|(['"])+$/g;
    var __trimBracketsRX = /^(\[)+|(\])+$/g;
    var __indexedPropRX = /(^\w+)\s*\[\s*['"]?\s*([^'"]+)\s*['",]?\s*\]/i;
    var __valueDelimeter1 = ":";
    var __valueDelimeter2 = "=";
    var __keyValDelimeter = ",";
    function trimOuterBraces(val) {
        return strUtils.trim(val.replace(__trimOuterBracesRX, ""));
    }
    function trimQuotes(val) {
        return strUtils.trim(val.replace(__trimQuotsRX, ""));
    }
    function trimBrackets(val) {
        return strUtils.trim(val.replace(__trimBracketsRX, ""));
    }
    function isInsideBraces(str) {
        return (strUtils.startsWith(str, "{") && strUtils.endsWith(str, "}"));
    }
    var Parser = (function () {
        function Parser() {
        }
        Parser.prototype._getKeyVals = function (val) {
            var i, ch, literal, parts = [], kv = { key: "", val: "" }, isKey = true, vd1 = __valueDelimeter1, vd2 = __valueDelimeter2, kvd = __keyValDelimeter;
            var addNewKeyValPair = function (kv) {
                if (kv.val) {
                    if (checks.isNumeric(kv.val)) {
                        kv.val = Number(kv.val);
                    }
                    else if (checks.isBoolString(kv.val)) {
                        kv.val = coreUtils.parseBool(kv.val);
                    }
                }
                parts.push(kv);
            };
            var checkTokens = function (kv) {
                if (kv.val === "" && strUtils.startsWith(kv.key, "this.")) {
                    kv.val = kv.key.substr(5);
                    kv.key = "targetPath";
                }
            };
            for (i = 0; i < val.length; i += 1) {
                ch = val.charAt(i);
                if (ch === "'" || ch === '"') {
                    if (!literal)
                        literal = ch;
                    else if (literal === ch)
                        literal = null;
                }
                if (!literal && ch === "{" && !isKey) {
                    var bracePart = val.substr(i);
                    var braceParts = this.getBraceParts(bracePart, true);
                    if (braceParts.length > 0) {
                        bracePart = braceParts[0];
                        kv.val += bracePart;
                        i += bracePart.length - 1;
                    }
                    else {
                        throw new Error(strUtils.format(lang_3.ERRS.ERR_EXPR_BRACES_INVALID, bracePart));
                    }
                    continue;
                }
                if (!literal && ch === kvd) {
                    if (!!kv.key) {
                        addNewKeyValPair(kv);
                        kv = { key: "", val: "" };
                        isKey = true;
                    }
                }
                else if (!literal && (ch === vd1 || ch === vd2)) {
                    isKey = false;
                }
                else {
                    if (isKey)
                        kv.key += ch;
                    else
                        kv.val += ch;
                }
            }
            if (!!kv.key) {
                addNewKeyValPair(kv);
            }
            parts.forEach(function (kv) {
                kv.key = strUtils.trim(kv.key);
                if (checks.isString(kv.val))
                    kv.val = strUtils.trim(kv.val);
                checkTokens(kv);
            });
            parts = parts.filter(function (kv) {
                return kv.val !== "";
            });
            return parts;
        };
        Parser.prototype.getPathParts = function (path) {
            var self = this, parts = (!path) ? [] : path.split("."), parts2 = [];
            parts.forEach(function (part) {
                var matches, obj, index;
                matches = part.match(__indexedPropRX);
                if (!!matches) {
                    obj = matches[1];
                    index = matches[2];
                    parts2.push(obj);
                    parts2.push("[" + index + "]");
                }
                else
                    parts2.push(part);
            });
            return parts2;
        };
        Parser.prototype.resolveProp = function (obj, prop) {
            if (!prop)
                return obj;
            if (checks.isBaseObject(obj) && obj.getIsDestroyCalled())
                return checks.undefined;
            if (strUtils.startsWith(prop, "[")) {
                prop = trimQuotes(trimBrackets(prop));
                if (syschecks._isCollection(obj)) {
                    return syschecks._getItemByProp(obj, prop);
                }
                else if (checks.isArray(obj)) {
                    return obj[parseInt(prop, 10)];
                }
            }
            if (syschecks._isPropBag(obj)) {
                return obj.getProp(prop);
            }
            else {
                return obj[prop];
            }
        };
        Parser.prototype.setPropertyValue = function (obj, prop, val) {
            if (!prop)
                throw new Error("Invalid operation: Empty Property name");
            if (checks.isBaseObject(obj) && obj.getIsDestroyCalled())
                return;
            if (strUtils.startsWith(prop, "[")) {
                prop = trimQuotes(trimBrackets(prop));
                if (checks.isArray(obj)) {
                    obj[parseInt(prop, 10)] = val;
                    return;
                }
            }
            if (syschecks._isPropBag(obj)) {
                obj.setProp(prop, val);
            }
            else {
                obj[prop] = val;
            }
        };
        Parser.prototype.resolveBindingSource = function (root, srcParts) {
            if (!root)
                return checks.undefined;
            if (srcParts.length === 0) {
                return root;
            }
            if (srcParts.length > 0) {
                return this.resolveBindingSource(this.resolveProp(root, srcParts[0]), srcParts.slice(1));
            }
            throw new Error("Invalid operation");
        };
        Parser.prototype.resolvePath = function (obj, path) {
            if (!path)
                return obj;
            var parts = this.getPathParts(path), res = obj, len = parts.length - 1;
            for (var i = 0; i < len; i += 1) {
                res = this.resolveProp(res, parts[i]);
                if (!res)
                    return checks.undefined;
            }
            return this.resolveProp(res, parts[len]);
        };
        Parser.prototype.getBraceParts = function (val, firstOnly) {
            var i, s = "", ch, literal, cnt = 0, parts = [];
            for (i = 0; i < val.length; i += 1) {
                ch = val.charAt(i);
                if (ch === "'" || ch === '"') {
                    if (!literal)
                        literal = ch;
                    else if (literal === ch)
                        literal = null;
                }
                if (!literal && ch === "{") {
                    cnt += 1;
                    s += ch;
                }
                else if (!literal && ch === "}") {
                    cnt -= 1;
                    s += ch;
                    if (cnt === 0) {
                        parts.push(s);
                        s = "";
                        if (firstOnly)
                            return parts;
                    }
                }
                else {
                    if (cnt > 0) {
                        s += ch;
                    }
                }
            }
            return parts;
        };
        Parser.prototype.parseOption = function (part) {
            var res = {}, self = this;
            part = strUtils.trim(part);
            if (isInsideBraces(part))
                part = trimOuterBraces(part);
            var kvals = self._getKeyVals(part);
            kvals.forEach(function (kv) {
                var isString = checks.isString(kv.val);
                if (isString && isInsideBraces(kv.val))
                    res[kv.key] = self.parseOption(kv.val);
                else {
                    if (isString)
                        res[kv.key] = trimQuotes(kv.val);
                    else
                        res[kv.key] = kv.val;
                }
            });
            return res;
        };
        Parser.prototype.parseOptions = function (str) {
            var res = [], self = this;
            str = strUtils.trim(str);
            var parts = [str];
            if (isInsideBraces(str)) {
                parts = self.getBraceParts(str, false);
            }
            parts.forEach(function (part) {
                res.push(self.parseOption(part));
            });
            return res;
        };
        Parser.prototype.toString = function () {
            return "Parser";
        };
        return Parser;
    }());
    exports.Parser = Parser;
    exports.parser = new Parser();
});
define("jriapp_utils/lifetime", ["require", "exports", "jriapp_core/object", "jriapp_utils/arrhelper"], function (require, exports, object_1, arrhelper_2) {
    "use strict";
    var LifeTimeScope = (function (_super) {
        __extends(LifeTimeScope, _super);
        function LifeTimeScope() {
            _super.call(this);
            this._objs = [];
        }
        LifeTimeScope.create = function () {
            return new LifeTimeScope();
        };
        LifeTimeScope.prototype.addObj = function (b) {
            if (this._objs.indexOf(b) < 0)
                this._objs.push(b);
        };
        LifeTimeScope.prototype.removeObj = function (b) {
            arrhelper_2.ArrayHelper.remove(this._objs, b);
        };
        LifeTimeScope.prototype.getObjs = function () {
            return this._objs;
        };
        LifeTimeScope.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            this._objs.forEach(function (obj) {
                if (!obj.getIsDestroyCalled())
                    obj.destroy();
            });
            this._objs = [];
            _super.prototype.destroy.call(this);
        };
        LifeTimeScope.prototype.toString = function () {
            return "LifeTimeScope";
        };
        return LifeTimeScope;
    }(object_1.BaseObject));
    exports.LifeTimeScope = LifeTimeScope;
});
define("jriapp_utils/dom", ["require", "exports", "jriapp_core/lang"], function (require, exports, lang_4) {
    "use strict";
    if (!window.jQuery)
        throw new Error(lang_4.ERRS.ERR_APP_NEED_JQUERY);
    var DomUtils = (function () {
        function DomUtils() {
        }
        DomUtils.isContained = function (oNode, oCont) {
            if (!oNode)
                return false;
            while (!!(oNode = oNode.parentNode))
                if (oNode === oCont)
                    return true;
            return false;
        };
        DomUtils.removeNode = function (node) {
            if (!node)
                return;
            var pnd = node.parentNode;
            if (!!pnd)
                pnd.removeChild(node);
        };
        DomUtils.insertAfter = function (node, refNode) {
            var parent = refNode.parentNode;
            if (parent.lastChild === refNode)
                parent.appendChild(node);
            else
                parent.insertBefore(node, refNode.nextSibling);
        };
        DomUtils.insertBefore = function (node, refNode) {
            var parent = refNode.parentNode;
            parent.insertBefore(node, refNode);
        };
        DomUtils.wrap = function (elem, wrapper) {
            var parent = elem.parentElement, nsibling = elem.nextSibling;
            if (!parent)
                return;
            wrapper.appendChild(elem);
            (!nsibling) ? parent.appendChild(wrapper) : parent.insertBefore(wrapper, nsibling);
        };
        DomUtils.unwrap = function (elem) {
            var wrapper = elem.parentElement;
            if (!wrapper)
                return;
            var parent = wrapper.parentElement, nsibling = wrapper.nextSibling;
            if (!parent)
                return;
            parent.removeChild(wrapper);
            (!nsibling) ? parent.appendChild(elem) : parent.insertBefore(elem, nsibling);
        };
        DomUtils.getClassMap = function (el) {
            var res = {};
            if (!el)
                return res;
            var className = el.className;
            if (!className)
                return res;
            var arr = className.split(" ");
            for (var i = 0; i < arr.length; i += 1) {
                arr[i] = arr[i].trim();
                if (!!arr[i]) {
                    res[arr[i]] = i;
                }
            }
            return res;
        };
        DomUtils.setClasses = function (elems, classes) {
            if (!elems.length || !classes.length)
                return;
            var toAdd = [], toRemove = [], removeAll = false;
            classes.forEach(function (v) {
                if (!v)
                    return;
                var name = v.trim();
                if (!name)
                    return;
                var op = v.charAt(0);
                if (op == "+" || op == "-") {
                    name = v.substr(1).trim();
                }
                if (!name)
                    return;
                var arr = name.split(" ");
                for (var i = 0; i < arr.length; i += 1) {
                    var v2 = arr[i].trim();
                    if (!!v2) {
                        if (op != "-") {
                            toAdd.push(v2);
                        }
                        else {
                            if (name === "*")
                                removeAll = true;
                            else
                                toRemove.push(v2);
                        }
                    }
                }
            });
            if (removeAll) {
                toRemove = [];
            }
            for (var j = 0; j < elems.length; j += 1) {
                var el = elems[j];
                var map = DomUtils.getClassMap(el);
                if (removeAll) {
                    map = {};
                }
                for (var i = 0; i < toRemove.length; i += 1) {
                    delete map[toRemove[i]];
                }
                for (var i = 0; i < toAdd.length; i += 1) {
                    map[toAdd[i]] = i + 1000;
                }
                var keys = Object.keys(map);
                el.className = keys.join(" ");
            }
        };
        DomUtils.setClass = function (elems, css, remove) {
            if (remove === void 0) { remove = false; }
            if (!elems.length)
                return;
            if (remove && !css) {
                for (var j = 0; j < elems.length; j += 1) {
                    elems[j].className = "";
                }
                return;
            }
            if (!css)
                return;
            var arr = css.split(" ");
            for (var i = 0; i < arr.length; i += 1) {
                arr[i] = arr[i].trim();
            }
            for (var j = 0; j < elems.length; j += 1) {
                var el = elems[j];
                if (arr.length === 1 && !!arr[0] && !!el.classList) {
                    if (remove)
                        el.classList.remove(arr[0]);
                    else
                        el.classList.add(arr[0]);
                }
                else {
                    var map = DomUtils.getClassMap(el);
                    for (var i = 0; i < arr.length; i += 1) {
                        if (!!arr[i]) {
                            if (remove)
                                delete map[arr[i]];
                            else
                                map[arr[i]] = i + 1000;
                        }
                    }
                    var keys = Object.keys(map);
                    el.className = keys.join(" ");
                }
            }
        };
        DomUtils.addClass = function (elems, css) {
            DomUtils.setClass(elems || [], css, false);
        };
        DomUtils.removeClass = function (elems, css) {
            DomUtils.setClass(elems || [], css, true);
        };
        DomUtils.destroyJQueryPlugin = function ($el, name) {
            var plugin = $el.data(name);
            if (!!plugin) {
                $el[name]("destroy");
            }
        };
        DomUtils.window = window;
        DomUtils.document = window.document;
        DomUtils.$ = jQuery;
        return DomUtils;
    }());
    exports.DomUtils = DomUtils;
});
define("jriapp_utils/deferred", ["require", "exports", "jriapp_core/shared", "jriapp_utils/checks"], function (require, exports, coreMOD, checks_5) {
    "use strict";
    (function (PromiseState) {
        PromiseState[PromiseState["Pending"] = 0] = "Pending";
        PromiseState[PromiseState["ResolutionInProgress"] = 1] = "ResolutionInProgress";
        PromiseState[PromiseState["Resolved"] = 2] = "Resolved";
        PromiseState[PromiseState["Rejected"] = 3] = "Rejected";
    })(exports.PromiseState || (exports.PromiseState = {}));
    var PromiseState = exports.PromiseState;
    function create() {
        return new Deferred(fn_dispatch);
    }
    exports.create = create;
    function createSync() {
        return new Deferred(fn_dispatchImmediate);
    }
    exports.createSync = createSync;
    function getTaskQueue() {
        return taskQueue;
    }
    exports.getTaskQueue = getTaskQueue;
    function whenAll(args) {
        var deferred = create(), errors = [], countAll = args.length, result = new Array(args.length);
        var checkResult = function () {
            if (countAll === 0) {
                if (errors.length > 0)
                    deferred.reject(new coreMOD.AggregateError(errors));
                else
                    deferred.resolve(result);
            }
        };
        var cnt = args.length;
        if (cnt === 0) {
            deferred.resolve([]);
        }
        var _loop_1 = function(i) {
            var value = args[i];
            if (checks_5.Checks.isThenable(value)) {
                value.then(function (res) {
                    --countAll;
                    result[i] = res;
                    checkResult();
                }, function (err) {
                    --countAll;
                    result[i] = err;
                    errors.push(err);
                    checkResult();
                });
            }
            else {
                --countAll;
                result[i] = value;
                checkResult();
            }
        };
        for (var i = 0; i < cnt; i += 1) {
            _loop_1(i);
        }
        return deferred.promise();
    }
    exports.whenAll = whenAll;
    function fn_dispatch(task) {
        taskQueue.enque(task);
    }
    function fn_dispatchImmediate(task) {
        task();
    }
    var TaskQueue = (function () {
        function TaskQueue() {
            this._tasks = [];
            this._state = 0;
        }
        TaskQueue.prototype._process = function () {
            var tasks = this._tasks;
            this._tasks = [];
            for (var i = 0; i < tasks.length; i += 1) {
                tasks[i]();
            }
        };
        TaskQueue.prototype.enque = function (task) {
            var _this = this;
            this._tasks.push(task);
            if (this._state === 0) {
                this._state = 1;
                setTimeout(function () { if (_this._state !== 1)
                    return; _this._state = 0; _this._process(); }, 0);
            }
        };
        TaskQueue.prototype.clear = function () {
            this._tasks = [];
            this._state = 0;
        };
        return TaskQueue;
    }());
    var Callback = (function () {
        function Callback(dispatcher, successCB, errorCB) {
            this._dispatcher = dispatcher;
            this._successCB = successCB;
            this._errorCB = errorCB;
            this.deferred = new Deferred(this._dispatcher);
        }
        Callback.prototype.resolve = function (value, defer) {
            var _this = this;
            if (!checks_5.Checks.isFunc(this._successCB)) {
                this.deferred.resolve(value);
                return;
            }
            if (!!defer) {
                this._dispatcher(function () { return _this._dispatchCallback(_this._successCB, value); });
            }
            else {
                this._dispatchCallback(this._successCB, value);
            }
        };
        Callback.prototype.reject = function (error, defer) {
            var _this = this;
            if (!checks_5.Checks.isFunc(this._errorCB)) {
                this.deferred.reject(error);
                return;
            }
            if (!!defer) {
                this._dispatcher(function () { return _this._dispatchCallback(_this._errorCB, error); });
            }
            else {
                this._dispatchCallback(this._errorCB, error);
            }
        };
        Callback.prototype._dispatchCallback = function (callback, arg) {
            var result;
            try {
                result = callback(arg);
                this.deferred.resolve(result);
            }
            catch (err) {
                this.deferred.reject(err);
                return;
            }
        };
        return Callback;
    }());
    var Deferred = (function () {
        function Deferred(dispatcher) {
            this._dispatcher = dispatcher;
            this._value = checks_5.Checks.undefined;
            this._error = checks_5.Checks.undefined;
            this._state = 0;
            this._stack = [];
            this._promise = new Promise(this);
        }
        Deferred.prototype._resolve = function (value) {
            var _this = this;
            var pending = true;
            try {
                if (checks_5.Checks.isThenable(value)) {
                    if (value === this._promise) {
                        throw new TypeError("recursive resolution");
                    }
                    var fn_then = value.then;
                    this._state = 1;
                    fn_then.call(value, function (result) {
                        if (pending) {
                            pending = false;
                            _this._resolve(result);
                        }
                    }, function (error) {
                        if (pending) {
                            pending = false;
                            _this._reject(error);
                        }
                    });
                }
                else {
                    this._state = 1;
                    this._dispatcher(function () {
                        _this._state = 2;
                        _this._value = value;
                        var i, stackSize = _this._stack.length;
                        for (i = 0; i < stackSize; i++) {
                            _this._stack[i].resolve(value, false);
                        }
                        _this._stack.splice(0, stackSize);
                    });
                }
            }
            catch (err) {
                if (pending) {
                    this._reject(err);
                }
            }
            return this;
        };
        Deferred.prototype._reject = function (error) {
            var _this = this;
            this._state = 1;
            this._dispatcher(function () {
                _this._state = 3;
                _this._error = error;
                var stackSize = _this._stack.length, i = 0;
                for (i = 0; i < stackSize; i++) {
                    _this._stack[i].reject(error, false);
                }
                _this._stack.splice(0, stackSize);
            });
            return this;
        };
        Deferred.prototype._then = function (successCB, errorCB) {
            if (!checks_5.Checks.isFunc(successCB) && !checks_5.Checks.isFunc(errorCB)) {
                return this._promise;
            }
            var cb = new Callback(this._dispatcher, successCB, errorCB);
            switch (this._state) {
                case 0:
                case 1:
                    this._stack.push(cb);
                    break;
                case 2:
                    cb.resolve(this._value, true);
                    break;
                case 3:
                    cb.reject(this._error, true);
                    break;
            }
            return cb.deferred.promise();
        };
        Deferred.prototype.resolve = function (value) {
            if (this._state !== 0) {
                return this.promise();
            }
            return this._resolve(value).promise();
        };
        Deferred.prototype.reject = function (error) {
            if (this._state !== 0) {
                return this.promise();
            }
            return this._reject(error).promise();
        };
        Deferred.prototype.promise = function () {
            return this._promise;
        };
        Deferred.prototype.state = function () {
            return this._state;
        };
        return Deferred;
    }());
    var Promise = (function () {
        function Promise(deferred) {
            this._deferred = deferred;
        }
        Promise.prototype.then = function (successCB, errorCB) {
            return this._deferred._then(successCB, errorCB);
        };
        Promise.prototype.fail = function (errorCB) {
            return this._deferred._then(checks_5.Checks.undefined, errorCB);
        };
        Promise.prototype.always = function (errorCB) {
            return this._deferred._then(errorCB, errorCB);
        };
        Promise.prototype.state = function () {
            return this._deferred.state();
        };
        return Promise;
    }());
    var AbortablePromise = (function () {
        function AbortablePromise(deferred, abortable) {
            this._deferred = deferred;
            this._abortable = abortable;
            this._aborted = false;
        }
        AbortablePromise.prototype.then = function (successCB, errorCB) {
            return this._deferred.promise().then(successCB, errorCB);
        };
        AbortablePromise.prototype.fail = function (errorCB) {
            return this._deferred.promise().fail(errorCB);
        };
        AbortablePromise.prototype.always = function (errorCB) {
            return this._deferred.promise().always(errorCB);
        };
        AbortablePromise.prototype.abort = function (reason) {
            if (this._aborted)
                return;
            var self = this;
            self._deferred.reject(new coreMOD.AbortError(reason));
            self._aborted = true;
            setTimeout(function () { self._abortable.abort(); }, 0);
        };
        AbortablePromise.prototype.state = function () {
            return this._deferred.state();
        };
        return AbortablePromise;
    }());
    exports.AbortablePromise = AbortablePromise;
    var taskQueue = new TaskQueue();
});
define("jriapp_utils/async", ["require", "exports", "jriapp_utils/deferred", "jriapp_utils/deferred"], function (require, exports, deferred_1, deferred_2) {
    "use strict";
    exports.PromiseState = deferred_2.PromiseState;
    exports.whenAll = deferred_2.whenAll;
    exports.AbortablePromise = deferred_2.AbortablePromise;
    var AsyncUtils = (function () {
        function AsyncUtils() {
        }
        AsyncUtils.createDeferred = function () {
            return deferred_1.create();
        };
        AsyncUtils.createSyncDeferred = function () {
            return deferred_1.createSync();
        };
        AsyncUtils.whenAll = function (args) {
            return deferred_1.whenAll(args);
        };
        AsyncUtils.getTaskQueue = function () {
            return deferred_1.getTaskQueue();
        };
        AsyncUtils.delay = function (func, time) {
            var deferred = deferred_1.create();
            setTimeout(function () {
                try {
                    deferred.resolve(func());
                }
                catch (err) {
                    deferred.reject(err);
                }
            }, !time ? 0 : time);
            return deferred.promise();
        };
        return AsyncUtils;
    }());
    exports.AsyncUtils = AsyncUtils;
});
define("jriapp_utils/http", ["require", "exports", "jriapp_core/shared", "jriapp_utils/strutils", "jriapp_utils/coreutils", "jriapp_utils/async"], function (require, exports, shared_2, strUtils_3, coreutils_5, async_1) {
    "use strict";
    var coreUtils = coreutils_5.CoreUtils, strUtils = strUtils_3.StringUtils, defer = async_1.AsyncUtils;
    var HttpUtils = (function () {
        function HttpUtils() {
        }
        HttpUtils.isStatusOK = function (status) {
            var chk = "" + status;
            return chk.length === 3 && strUtils.startsWith(chk, "2");
        };
        HttpUtils._getXMLRequest = function (url, method, deferred, headers) {
            var req = new XMLHttpRequest();
            req.open(method, url, true);
            req.responseType = "text";
            req.onload = function (e) {
                var status = "" + this.status;
                if (status === "200") {
                    var res = this.response;
                    deferred.resolve(res);
                }
                else {
                    if (HttpUtils.isStatusOK(status))
                        deferred.reject(new shared_2.DummyError(new Error(strUtils.format('Status: "{0}" loading from URL: "{1}"', status, url))));
                    else
                        deferred.reject(new Error(strUtils.format('Error: "{0}" to load from URL: "{1}"', status, url)));
                }
            };
            req.onerror = function (e) {
                deferred.reject(new Error(strUtils.format('Error: "{0}" to load from URL: "{1}"', this.status, url)));
            };
            req.ontimeout = function () {
                deferred.reject(new Error(strUtils.format('Error: "Request Timeout" to load from URL: "{0}"', url)));
            };
            req.onabort = function (e) {
                deferred.reject(new Error(strUtils.format('HTTP Request Operation Aborted for URL: "{0}"', url)));
            };
            req.timeout = HttpUtils.ajaxTimeOut * 1000;
            var _headers = coreUtils.merge(HttpUtils.defaultHeaders);
            _headers = coreUtils.merge(headers, _headers);
            coreUtils.iterateIndexer(_headers, function (name, val) {
                req.setRequestHeader(name, val);
            });
            return req;
        };
        HttpUtils.postAjax = function (url, postData, headers) {
            var _headers = coreUtils.merge(headers, { "Content-Type": "application/json; charset=utf-8" });
            var deferred = defer.createDeferred(), req = HttpUtils._getXMLRequest(url, "POST", deferred, _headers);
            req.send(postData);
            return new async_1.AbortablePromise(deferred, req);
        };
        HttpUtils.getAjax = function (url, headers) {
            var deferred = defer.createDeferred(), req = HttpUtils._getXMLRequest(url, "GET", deferred, headers);
            req.send(null);
            return new async_1.AbortablePromise(deferred, req);
        };
        HttpUtils.defaultHeaders = {};
        HttpUtils.ajaxTimeOut = 600;
        return HttpUtils;
    }());
    exports.HttpUtils = HttpUtils;
});
define("jriapp_utils/utils", ["require", "exports", "jriapp_utils/coreutils", "jriapp_utils/syschecks", "jriapp_utils/dom", "jriapp_utils/async", "jriapp_utils/http", "jriapp_utils/strutils", "jriapp_utils/checks", "jriapp_utils/arrhelper"], function (require, exports, coreutils_6, syschecks_4, dom_1, async_2, http_1, strutils_3, checks_6, arrhelper_3) {
    "use strict";
    var checks = checks_6.Checks, _async = async_2.AsyncUtils;
    var Utils = (function () {
        function Utils() {
        }
        Utils.getErrorNotification = function (obj) {
            if (!obj) {
                return null;
            }
            else if (!!obj._aspect && checks.isErrorNotification(obj._aspect))
                return obj._aspect.getIErrorNotification();
            else if (checks.isErrorNotification(obj))
                return obj.getIErrorNotification();
            return null;
        };
        Utils.getEditable = function (obj) {
            if (!obj) {
                return null;
            }
            else if (!!obj._aspect && checks.isEditable(obj._aspect)) {
                return obj._aspect;
            }
            else if (checks.isEditable(obj)) {
                return obj;
            }
            return null;
        };
        Utils.getSubmittable = function (obj) {
            if (!obj) {
                return null;
            }
            else if (!!obj._aspect && checks.isSubmittable(obj._aspect)) {
                return obj._aspect;
            }
            else if (checks.isSubmittable(obj)) {
                return obj;
            }
            return null;
        };
        Utils.parseJSON = function (res) {
            return _async.delay(function () {
                var parsed = null;
                if (checks.isString(res))
                    parsed = JSON.parse(res);
                else
                    parsed = res;
                return parsed;
            });
        };
        Utils.check = checks;
        Utils.str = strutils_3.StringUtils;
        Utils.arr = arrhelper_3.ArrayHelper;
        Utils.dom = dom_1.DomUtils;
        Utils.http = http_1.HttpUtils;
        Utils.core = coreutils_6.CoreUtils;
        Utils.defer = _async;
        Utils.err = coreutils_6.ERROR;
        Utils.log = coreutils_6.LOG;
        Utils.debug = coreutils_6.DEBUG;
        Utils.sys = syschecks_4.SysChecks;
        return Utils;
    }());
    exports.Utils = Utils;
});
define("jriapp_elview/factory", ["require", "exports", "jriapp_core/const", "jriapp_core/bootstrap", "jriapp_core/lang", "jriapp_core/parser", "jriapp_core/object", "jriapp_utils/utils"], function (require, exports, const_2, bootstrap_1, lang_5, parser_1, object_2, utils_1) {
    "use strict";
    var utils = utils_1.Utils, $ = utils.dom.$;
    function createElViewFactory(register) {
        return new ElViewFactory(register);
    }
    exports.createElViewFactory = createElViewFactory;
    function createElViewRegister(next) {
        return new ElViewRegister(next);
    }
    exports.createElViewRegister = createElViewRegister;
    var ElViewRegister = (function () {
        function ElViewRegister(next) {
            this._exports = {};
            this._next = next;
        }
        ElViewRegister.prototype.registerElView = function (name, vw_type) {
            if (!bootstrap_1.bootstrap._getInternal().getObject(this, name)) {
                bootstrap_1.bootstrap._getInternal().registerObject(this, name, vw_type);
            }
            else
                throw new Error(utils.str.format(lang_5.ERRS.ERR_OBJ_ALREADY_REGISTERED, name));
        };
        ElViewRegister.prototype.getElViewType = function (name) {
            var res = bootstrap_1.bootstrap._getInternal().getObject(this, name);
            if (!res && !!this._next) {
                res = this._next.getElViewType(name);
            }
            return res;
        };
        ElViewRegister.prototype.destroy = function () {
            this._exports = {};
        };
        ElViewRegister.prototype.getExports = function () {
            return this._exports;
        };
        return ElViewRegister;
    }());
    var ElViewStore = (function () {
        function ElViewStore() {
            this._ELV_STORE_KEY = const_2.DATA_ATTR.EL_VIEW_KEY;
        }
        ElViewStore.prototype.destroy = function () {
        };
        ElViewStore.prototype.getElView = function (el) {
            return $.data(el, this._ELV_STORE_KEY);
        };
        ElViewStore.prototype.setElView = function (el, view) {
            if (!view) {
                $.removeData(el, this._ELV_STORE_KEY);
            }
            else {
                $.data(el, this._ELV_STORE_KEY, view);
            }
        };
        return ElViewStore;
    }());
    var ElViewFactory = (function (_super) {
        __extends(ElViewFactory, _super);
        function ElViewFactory(register) {
            _super.call(this);
            this._store = new ElViewStore();
            this._register = createElViewRegister(register);
        }
        ElViewFactory.prototype.destroy = function () {
            if (!this._store)
                return;
            this._store.destroy();
            this._register.destroy();
            this._store = null;
            this._register = null;
            _super.prototype.destroy.call(this);
        };
        ElViewFactory.prototype.createElView = function (view_info) {
            var viewType, elView, options = view_info.options;
            var el = options.el;
            if (!!view_info.name) {
                viewType = this._register.getElViewType(view_info.name);
                if (!viewType)
                    throw new Error(utils.str.format(lang_5.ERRS.ERR_ELVIEW_NOT_REGISTERED, view_info.name));
            }
            if (!viewType) {
                var nodeNm = el.nodeName.toLowerCase(), attrType = void 0;
                switch (nodeNm) {
                    case "input":
                        {
                            attrType = el.getAttribute("type");
                            nodeNm = nodeNm + ":" + attrType;
                            viewType = this._register.getElViewType(nodeNm);
                        }
                        break;
                    default:
                        viewType = this._register.getElViewType(nodeNm);
                        break;
                }
                if (!viewType)
                    throw new Error(utils.str.format(lang_5.ERRS.ERR_ELVIEW_NOT_CREATED, nodeNm));
            }
            try {
                elView = new viewType(options);
            }
            catch (e) {
                this._store.setElView(el, null);
                throw e;
            }
            return elView;
        };
        ElViewFactory.prototype.getOrCreateElView = function (el) {
            var elView = this.store.getElView(el);
            if (!!elView)
                return elView;
            var info = this.getElementViewInfo(el);
            return this.createElView(info);
        };
        ElViewFactory.prototype.getElementViewInfo = function (el) {
            var view_name = null, vw_options = null, attr, data_view_op_arr, data_view_op;
            if (el.hasAttribute(const_2.DATA_ATTR.DATA_VIEW)) {
                attr = el.getAttribute(const_2.DATA_ATTR.DATA_VIEW);
                data_view_op_arr = parser_1.parser.parseOptions(attr);
                if (!!data_view_op_arr && data_view_op_arr.length > 0) {
                    data_view_op = data_view_op_arr[0];
                    if (!!data_view_op.name && data_view_op.name !== "default") {
                        view_name = data_view_op.name;
                    }
                    vw_options = data_view_op.options;
                }
            }
            var options = utils.core.merge({ el: el }, vw_options);
            return { name: view_name, options: options };
        };
        Object.defineProperty(ElViewFactory.prototype, "store", {
            get: function () {
                return this._store;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ElViewFactory.prototype, "register", {
            get: function () {
                return this._register;
            },
            enumerable: true,
            configurable: true
        });
        return ElViewFactory;
    }(object_2.BaseObject));
});
define("jriapp_core/defaults", ["require", "exports", "jriapp_core/shared", "jriapp_core/object", "jriapp_utils/checks", "jriapp_utils/strutils"], function (require, exports, coreMOD, object_3, checks_7, strUtils_4) {
    "use strict";
    var checks = checks_7.Checks, strUtils = strUtils_4.StringUtils;
    var PROP_NAME = {
        dateFormat: "dateFormat",
        timeFormat: "timeFormat",
        dateTimeFormat: "dateTimeFormat",
        datepicker: "datepicker",
        imagesPath: "imagesPath",
        decimalPoint: "decimalPoint",
        thousandSep: "thousandSep",
        decPrecision: "decPrecision"
    };
    var Defaults = (function (_super) {
        __extends(Defaults, _super);
        function Defaults(typeStore) {
            _super.call(this);
            this._svcStore = typeStore;
            this._dateFormat = "DD.MM.YYYY";
            this._dateTimeFormat = "DD.MM.YYYY HH:mm:ss";
            this._timeFormat = "HH:mm:ss";
            this._imagesPath = "";
            this._decimalPoint = ",";
            this._thousandSep = " ";
            this._decPrecision = 2;
        }
        Defaults.prototype.toString = function () {
            return "Defaults";
        };
        Object.defineProperty(Defaults.prototype, "dateFormat", {
            get: function () { return this._dateFormat; },
            set: function (v) {
                if (this._dateFormat !== v) {
                    this._dateFormat = v;
                    this.raisePropertyChanged(PROP_NAME.dateFormat);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Defaults.prototype, "timeFormat", {
            get: function () { return this._timeFormat; },
            set: function (v) {
                if (this._timeFormat !== v) {
                    this._timeFormat = v;
                    this.raisePropertyChanged(PROP_NAME.timeFormat);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Defaults.prototype, "dateTimeFormat", {
            get: function () { return this._dateTimeFormat; },
            set: function (v) {
                if (this._dateTimeFormat !== v) {
                    this._dateTimeFormat = v;
                    this.raisePropertyChanged(PROP_NAME.dateTimeFormat);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Defaults.prototype, "datepicker", {
            get: function () { return this._svcStore.getSvc("IDatepicker"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Defaults.prototype, "imagesPath", {
            get: function () { return this._imagesPath; },
            set: function (v) {
                if (!v)
                    v = "";
                if (this._imagesPath !== v) {
                    if (!strUtils.endsWith(v, "/")) {
                        this._imagesPath = v + "/";
                    }
                    else
                        this._imagesPath = v;
                    this.raisePropertyChanged(PROP_NAME.imagesPath);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Defaults.prototype, "decimalPoint", {
            get: function () { return this._decimalPoint; },
            set: function (v) {
                if (this._decimalPoint !== v) {
                    this._decimalPoint = v;
                    this.raisePropertyChanged(PROP_NAME.decimalPoint);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Defaults.prototype, "thousandSep", {
            get: function () { return this._thousandSep; },
            set: function (v) {
                if (this._thousandSep !== v) {
                    this._thousandSep = v;
                    this.raisePropertyChanged(PROP_NAME.thousandSep);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Defaults.prototype, "decPrecision", {
            get: function () { return this._decPrecision; },
            set: function (v) {
                if (this._decPrecision !== v) {
                    this._decPrecision = v;
                    this.raisePropertyChanged(PROP_NAME.decPrecision);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Defaults.prototype, "ButtonsCSS", {
            get: function () {
                return coreMOD.ButtonCss;
            },
            enumerable: true,
            configurable: true
        });
        return Defaults;
    }(object_3.BaseObject));
    exports.Defaults = Defaults;
});
define("jriapp_utils/waitqueue", ["require", "exports", "jriapp_core/object", "jriapp_utils/coreutils"], function (require, exports, object_4, coreutils_7) {
    "use strict";
    var WaitQueue = (function (_super) {
        __extends(WaitQueue, _super);
        function WaitQueue(owner) {
            _super.call(this);
            this._objId = "wq" + coreutils_7.CoreUtils.getNewID();
            this._owner = owner;
            this._queue = {};
        }
        WaitQueue.prototype._checkQueue = function (prop, value) {
            if (!this._owner || this._owner.getIsDestroyCalled()) {
                return;
            }
            var self = this, propQueue = this._queue[prop], task;
            if (!propQueue || propQueue.length === 0) {
                return;
            }
            var i, firstWinsTask = null, groups = { group: null, tasks: [] }, found = [], forRemoval = [];
            for (i = 0; i < propQueue.length; i += 1) {
                task = propQueue[i];
                if (task.predicate(value)) {
                    if (!task.group && groups.tasks.length === 0) {
                        firstWinsTask = task;
                        break;
                    }
                    else if (!!task.group) {
                        if (!groups.group) {
                            groups.group = task.group;
                        }
                        if (groups.group === task.group) {
                            groups.tasks.push(task);
                        }
                    }
                }
            }
            if (!!firstWinsTask) {
                found.push(firstWinsTask);
                forRemoval.push(firstWinsTask);
            }
            else {
                while (groups.tasks.length > 0) {
                    task = groups.tasks.pop();
                    if (!firstWinsTask) {
                        firstWinsTask = task;
                    }
                    if (firstWinsTask.lastWins) {
                        if (found.length === 0)
                            found.push(task);
                    }
                    else
                        found.push(task);
                    forRemoval.push(task);
                }
            }
            try {
                if (found.length > 0) {
                    i = propQueue.length;
                    while (i > 0) {
                        i -= 1;
                        if (forRemoval.indexOf(propQueue[i]) > -1) {
                            propQueue.splice(i, 1);
                        }
                    }
                    found.forEach(function (task) {
                        try {
                            task.action.apply(self._owner, task.args);
                        }
                        catch (ex) {
                            self._owner.handleError(ex, self);
                        }
                    });
                }
            }
            finally {
                if (propQueue.length === 0) {
                    delete this._queue[prop];
                    this._owner.removeOnPropertyChange(prop, this.uniqueID);
                }
            }
        };
        WaitQueue.prototype.enQueue = function (item) {
            var opts = coreutils_7.CoreUtils.extend({
                prop: "",
                groupName: null,
                predicate: null,
                action: null,
                actionArgs: [],
                lastWins: false
            }, item);
            var self = this;
            if (!this._owner)
                return;
            var property = opts.prop, propQueue = this._queue[property];
            if (!propQueue) {
                propQueue = [];
                this._queue[property] = propQueue;
                this._owner.addOnPropertyChange(property, function (s, a) {
                    setTimeout(function () {
                        if (self.getIsDestroyCalled())
                            return;
                        self._checkQueue(property, self._owner[property]);
                    }, 0);
                }, self.uniqueID);
            }
            var task = {
                predicate: opts.predicate,
                action: opts.action,
                group: opts.groupName,
                lastWins: opts.lastWins,
                args: (!opts.actionArgs ? [] : opts.actionArgs)
            };
            propQueue.push(task);
            self._checkQueue(property, self._owner[property]);
            setTimeout(function () {
                if (self.getIsDestroyCalled())
                    return;
                self._checkQueue(property, self._owner[property]);
            }, 0);
        };
        WaitQueue.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            this._owner.removeNSHandlers(this.uniqueID);
            this._queue = {};
            this._owner = null;
            _super.prototype.destroy.call(this);
        };
        WaitQueue.prototype.toString = function () {
            return "WaitQueue " + this._objId;
        };
        Object.defineProperty(WaitQueue.prototype, "uniqueID", {
            get: function () {
                return this._objId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WaitQueue.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            enumerable: true,
            configurable: true
        });
        return WaitQueue;
    }(object_4.BaseObject));
    exports.WaitQueue = WaitQueue;
});
define("jriapp_utils/tloader", ["require", "exports", "jriapp_core/lang", "jriapp_core/object", "jriapp_utils/strutils", "jriapp_utils/checks", "jriapp_utils/coreutils", "jriapp_utils/async", "jriapp_utils/http", "jriapp_utils/waitqueue"], function (require, exports, lang_6, object_5, strUtils_5, checks_8, coreutils_8, async_3, http_2, waitqueue_1) {
    "use strict";
    var checks = checks_8.Checks, coreUtils = coreutils_8.CoreUtils, strUtils = strUtils_5.StringUtils, defer = async_3.AsyncUtils;
    var PROP_NAME = {
        isLoading: "isLoading"
    };
    var TemplateLoader = (function (_super) {
        __extends(TemplateLoader, _super);
        function TemplateLoader() {
            _super.call(this);
            var self = this;
            this._templateLoaders = {};
            this._templateGroups = {};
            this._promises = [];
            this._waitQueue = new waitqueue_1.WaitQueue(self);
        }
        TemplateLoader.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            var self = this;
            self._promises = [];
            self._templateLoaders = {};
            self._templateGroups = {};
            if (!!self._waitQueue) {
                self._waitQueue.destroy();
                self._waitQueue = null;
            }
            _super.prototype.destroy.call(this);
        };
        TemplateLoader.prototype._getEventNames = function () {
            var base_events = _super.prototype._getEventNames.call(this);
            return ["loaded"].concat(base_events);
        };
        TemplateLoader.prototype.addOnLoaded = function (fn, nmspace) {
            this.addHandler("loaded", fn, nmspace);
        };
        TemplateLoader.prototype.removeOnLoaded = function (nmspace) {
            this.removeHandler("loaded", nmspace);
        };
        TemplateLoader.prototype.waitForNotLoading = function (callback, callbackArgs) {
            this._waitQueue.enQueue({
                prop: PROP_NAME.isLoading,
                groupName: null,
                predicate: function (val) {
                    return !val;
                },
                action: callback,
                actionArgs: callbackArgs
            });
        };
        TemplateLoader.prototype._onLoaded = function (html, app) {
            this.raiseEvent("loaded", { html: html, app: app });
        };
        TemplateLoader.prototype._getTemplateGroup = function (name) {
            return coreUtils.getValue(this._templateGroups, name);
        };
        TemplateLoader.prototype._registerTemplateLoaderCore = function (name, loader) {
            coreUtils.setValue(this._templateLoaders, name, loader, false);
        };
        TemplateLoader.prototype._getTemplateLoaderCore = function (name) {
            return coreUtils.getValue(this._templateLoaders, name);
        };
        TemplateLoader.prototype.loadTemplatesAsync = function (fn_loader, app) {
            var self = this, promise = fn_loader(), old = self.isLoading;
            self._promises.push(promise);
            if (self.isLoading !== old)
                self.raisePropertyChanged(PROP_NAME.isLoading);
            var res = promise.then(function (html) {
                self._onLoaded(html, app);
            });
            res.always(function () {
                coreUtils.arr.remove(self._promises, promise);
                if (!self.isLoading)
                    self.raisePropertyChanged(PROP_NAME.isLoading);
            });
            return res;
        };
        TemplateLoader.prototype.unRegisterTemplateLoader = function (name) {
            coreUtils.removeValue(this._templateLoaders, name);
        };
        TemplateLoader.prototype.unRegisterTemplateGroup = function (name) {
            coreUtils.removeValue(this._templateGroups, name);
        };
        TemplateLoader.prototype.registerTemplateLoader = function (name, loader) {
            var self = this;
            loader = coreUtils.extend({
                fn_loader: null,
                groupName: null
            }, loader);
            if (!loader.groupName && !checks.isFunc(loader.fn_loader)) {
                throw new Error(strUtils.format(lang_6.ERRS.ERR_ASSERTION_FAILED, "fn_loader is Function"));
            }
            var prevLoader = self._getTemplateLoaderCore(name);
            if (!!prevLoader) {
                if ((!prevLoader.fn_loader && !!prevLoader.groupName) && (!loader.groupName && !!loader.fn_loader)) {
                    return self._registerTemplateLoaderCore(name, loader);
                }
                throw new Error(strUtils.format(lang_6.ERRS.ERR_TEMPLATE_ALREADY_REGISTERED, name));
            }
            return self._registerTemplateLoaderCore(name, loader);
        };
        TemplateLoader.prototype.getTemplateLoader = function (name) {
            var self = this, loader = self._getTemplateLoaderCore(name);
            if (!loader)
                return null;
            if (!loader.fn_loader && !!loader.groupName) {
                var group_1 = self._getTemplateGroup(loader.groupName);
                if (!group_1) {
                    throw new Error(strUtils.format(lang_6.ERRS.ERR_TEMPLATE_GROUP_NOTREGISTERED, loader.groupName));
                }
                return function () {
                    if (!group_1.promise) {
                        group_1.promise = self.loadTemplatesAsync(group_1.fn_loader, group_1.app);
                    }
                    var deferred = defer.createSyncDeferred();
                    group_1.promise.then(function () {
                        group_1.promise = null;
                        group_1.names.forEach(function (name) {
                            if (!!group_1.app) {
                                name = group_1.app.appName + "." + name;
                            }
                            var loader = self._getTemplateLoaderCore(name);
                            if (!loader || !loader.fn_loader) {
                                var error = strUtils.format(lang_6.ERRS.ERR_TEMPLATE_NOTREGISTERED, name);
                                if (coreutils_8.DEBUG.isDebugging())
                                    coreutils_8.LOG.error(error);
                                throw new Error(error);
                            }
                        });
                        var loader = self._getTemplateLoaderCore(name);
                        if (!loader || !loader.fn_loader) {
                            var error = strUtils.format(lang_6.ERRS.ERR_TEMPLATE_NOTREGISTERED, name);
                            if (coreutils_8.DEBUG.isDebugging())
                                coreutils_8.LOG.error(error);
                            throw new Error(error);
                        }
                        delete self._templateGroups[loader.groupName];
                        var promise = loader.fn_loader();
                        promise.then(function (html) {
                            deferred.resolve(html);
                        }, function (err) {
                            deferred.reject(err);
                        });
                    }).fail(function (err) {
                        group_1.promise = null;
                        deferred.reject(err);
                    });
                    return deferred.promise();
                };
            }
            else
                return loader.fn_loader;
        };
        TemplateLoader.prototype.registerTemplateGroup = function (groupName, group) {
            var self = this, group2 = coreUtils.extend({
                fn_loader: null,
                url: null,
                names: null,
                promise: null,
                app: null
            }, group);
            if (!!group2.url && !group2.fn_loader) {
                group2.fn_loader = function () {
                    return http_2.HttpUtils.getAjax(group2.url);
                };
            }
            coreUtils.setValue(self._templateGroups, groupName, group2, true);
            group2.names.forEach(function (name) {
                if (!!group2.app) {
                    name = group2.app.appName + "." + name;
                }
                self.registerTemplateLoader(name, {
                    groupName: groupName,
                    fn_loader: null
                });
            });
        };
        TemplateLoader.prototype.loadTemplates = function (url) {
            var self = this;
            this.loadTemplatesAsync(function () {
                return http_2.HttpUtils.getAjax(url);
            }, null);
        };
        Object.defineProperty(TemplateLoader.prototype, "isLoading", {
            get: function () {
                return this._promises.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        return TemplateLoader;
    }(object_5.BaseObject));
    exports.TemplateLoader = TemplateLoader;
});
define("jriapp_utils/path", ["require", "exports", "jriapp_core/shared", "jriapp_utils/dom", "jriapp_utils/arrhelper", "jriapp_utils/strutils"], function (require, exports, shared_3, dom_2, arrhelper_4, strutils_4) {
    "use strict";
    var doc = dom_2.DomUtils.document, head = doc.head || doc.getElementsByTagName("head")[0];
    exports.frameworkJS = shared_3.Config.frameworkJS || "jriapp.js";
    var stylesDir = "css", imageDir = "img";
    function fn_getFrameworkPath() {
        var name = exports.frameworkJS;
        var arr = arrhelper_4.ArrayHelper.fromList(doc.scripts);
        for (var i = 0; i < arr.length; i += 1) {
            var script = arr[i];
            if (!!script.src) {
                var parts = PathHelper.getUrlParts(script.src);
                var pathName = strutils_4.StringUtils.rtrim(parts.pathname, "/");
                if (!!parts.pathname) {
                    pathName = pathName.toLowerCase();
                    if (!!pathName && pathName.lastIndexOf(name) > -1) {
                        var url = script.src;
                        return PathHelper.getParentUrl(url);
                    }
                }
            }
        }
        return null;
    }
    var _cache = {};
    var PathHelper = (function () {
        function PathHelper() {
        }
        PathHelper.appendBust = function (url) {
            var bust = shared_3.Config.bust;
            if (!bust)
                return url;
            return PathHelper.appendSearch(url, bust);
        };
        PathHelper.appendSearch = function (url, search) {
            search = strutils_4.StringUtils.ltrim(search, "?");
            var parts = PathHelper.getUrlParts(url);
            var oldSearch = strutils_4.StringUtils.ltrim(parts.search, "?");
            if (!!oldSearch && oldSearch.lastIndexOf(search) > -1)
                return url;
            if (!oldSearch)
                url = url + "?" + search;
            else
                url = url + "&" + search;
            return url;
        };
        PathHelper.getNormalizedUrl = function (url) {
            PathHelper._anchor.href = url;
            return PathHelper._anchor.href;
        };
        PathHelper.getUrlParts = function (url) {
            var parser = PathHelper._anchor;
            parser.href = url;
            if (!parser.host) {
                parser.href = parser.href;
            }
            return {
                protocol: parser.protocol,
                host: parser.host,
                hostname: parser.hostname,
                port: parser.port,
                pathname: parser.pathname,
                hash: parser.hash,
                search: parser.search
            };
        };
        PathHelper.getParentUrl = function (url) {
            var res = "";
            if (url.charAt(url.length - 1) === "/") {
                res = url.slice(0, url.lastIndexOf("/"));
                res = res.slice(0, res.lastIndexOf("/")) + "/";
            }
            else {
                res = url.slice(0, url.lastIndexOf("/")) + "/";
            }
            return res;
        };
        PathHelper.getFrameworkPath = function () {
            var res = _cache["root"];
            if (!res) {
                if (!!shared_3.Config.frameworkPath) {
                    res = shared_3.Config.frameworkPath;
                }
                if (!res) {
                    res = fn_getFrameworkPath();
                }
                if (!!res) {
                    _cache["root"] = res;
                }
            }
            if (!res)
                throw new Error(strutils_4.StringUtils.format("Can not resolve {0} framework path", name));
            return res;
        };
        PathHelper.getFrameworkCssPath = function () {
            var res = _cache["css"];
            if (!res) {
                res = PathHelper.getFrameworkPath() + [stylesDir, "/"].join("");
                _cache["css"] = res;
            }
            return res;
        };
        PathHelper.getFrameworkImgPath = function () {
            var res = _cache["img"];
            if (!res) {
                res = PathHelper.getFrameworkPath() + [imageDir, "/"].join("");
                _cache["img"] = res;
            }
            return res;
        };
        PathHelper._anchor = doc.createElement("a");
        return PathHelper;
    }());
    exports.PathHelper = PathHelper;
});
define("jriapp_utils/sloader", ["require", "exports", "jriapp_utils/arrhelper", "jriapp_utils/dom", "jriapp_utils/async", "jriapp_utils/path"], function (require, exports, arrhelper_5, dom_3, async_4, path_1) {
    "use strict";
    var resolvedPromise = async_4.AsyncUtils.createSyncDeferred().resolve();
    var doc = dom_3.DomUtils.document, head = doc.head || doc.getElementsByTagName("head")[0];
    var _stylesLoader = null;
    exports.frameworkCss = "jriapp.css";
    function create() {
        if (!_stylesLoader)
            _stylesLoader = new StylesLoader();
        return _stylesLoader;
    }
    exports.create = create;
    function whenAll(promises) {
        if (!promises)
            return resolvedPromise;
        if (promises.length === 1)
            return promises[0];
        var cnt = promises.length, resolved = 0;
        for (var i = 0; i < cnt; i += 1) {
            if (promises[i].state() === 2) {
                ++resolved;
            }
        }
        if (resolved === cnt) {
            return resolvedPromise;
        }
        else {
            return async_4.whenAll(promises);
        }
    }
    function createLink(url) {
        var link = doc.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        return link;
    }
    var StylesLoader = (function () {
        function StylesLoader() {
            this._loadedCSS = {};
        }
        StylesLoader.prototype.isStyleSheetLoaded = function (url) {
            var testUrl = path_1.PathHelper.getUrlParts(url);
            var arr = arrhelper_5.ArrayHelper.fromList(doc.styleSheets);
            for (var i = 0; i < arr.length; i += 1) {
                var cssUrl = path_1.PathHelper.getUrlParts(arr[i].href);
                if (cssUrl.hostname === testUrl.hostname && cssUrl.pathname === testUrl.pathname) {
                    return true;
                }
            }
            return false;
        };
        StylesLoader.prototype.loadByLink = function (url, fn_onload) {
            var link = createLink(url);
            link.onload = function () {
                fn_onload(null);
            };
            link.onerror = function () {
                fn_onload("Error loading: " + url);
            };
            head.appendChild(link);
        };
        StylesLoader.prototype.load = function (url, load) {
            this.loadByLink(url, load);
        };
        ;
        StylesLoader.ensureCssExt = function (name) {
            return name.search(/\.(css|less|scss)$/i) === -1 ? name + ".css" : name;
        };
        StylesLoader.prototype.loadStyle = function (url) {
            url = path_1.PathHelper.appendBust(url);
            var cssUrl = path_1.PathHelper.getNormalizedUrl(url);
            var cssPromise = this._loadedCSS[cssUrl];
            if (!!cssPromise) {
                return cssPromise;
            }
            var deferred = async_4.AsyncUtils.createSyncDeferred();
            cssPromise = deferred.promise();
            if (this.isStyleSheetLoaded(url)) {
                deferred.resolve(url);
                this._loadedCSS[cssUrl] = cssPromise;
                return cssPromise;
            }
            this.load(url, function (err) {
                if (!!err)
                    deferred.reject(err);
                else
                    deferred.resolve(url);
            });
            this._loadedCSS[cssUrl] = cssPromise;
            return cssPromise;
        };
        StylesLoader.prototype.loadStyles = function (urls) {
            var promises = [];
            for (var i = 0; i < urls.length; i += 1) {
                promises.push(this.loadStyle(urls[i]));
            }
            return whenAll(promises);
        };
        StylesLoader.prototype.loadOwnStyle = function (cssName) {
            cssName = cssName || exports.frameworkCss;
            var cssUrl = path_1.PathHelper.getFrameworkCssPath() + StylesLoader.ensureCssExt(cssName);
            return this.loadStyle(cssUrl);
        };
        StylesLoader.prototype.whenAllLoaded = function () {
            var obj = this._loadedCSS, names = Object.keys(obj), promises = [];
            for (var i = 0; i < names.length; i += 1) {
                promises.push(obj[names[i]]);
            }
            return whenAll(promises);
        };
        return StylesLoader;
    }());
});
define("jriapp_utils/tooltip", ["require", "exports", "jriapp_utils/dom"], function (require, exports, dom_4) {
    "use strict";
    var dom = dom_4.DomUtils, $ = dom.$, window = dom.window;
    exports.css = {
        toolTip: "qtip",
        toolTipError: "qtip-red"
    };
    function create() {
        return new tooltipService();
    }
    exports.create = create;
    var tooltipService = (function () {
        function tooltipService() {
        }
        tooltipService.prototype.addToolTip = function ($el, tip, isError, pos) {
            var options = {
                content: {
                    text: tip
                },
                style: {
                    classes: !!isError ? exports.css.toolTipError : exports.css.toolTip
                },
                position: {
                    my: "top left",
                    at: (!!pos) ? pos : "bottom right",
                    viewport: $(window),
                    adjust: {
                        method: "flip",
                        x: 0,
                        y: 0
                    }
                },
                hide: {
                    event: "unfocus click mouseleave",
                    leave: true
                }
            };
            if (!!$el.data("qtip")) {
                if (!tip) {
                    $el.qtip("destroy", true);
                }
                else
                    $el.qtip("option", "content.text", tip);
            }
            else if (!!tip) {
                $el.qtip(options);
            }
        };
        return tooltipService;
    }());
});
define("jriapp_core/bootstrap", ["require", "exports", "jriapp_core/const", "jriapp_elview/factory", "jriapp_core/lang", "jriapp_core/object", "jriapp_core/defaults", "jriapp_utils/strutils", "jriapp_utils/coreutils", "jriapp_utils/tloader", "jriapp_utils/sloader", "jriapp_utils/path", "jriapp_utils/tooltip", "jriapp_utils/dom", "jriapp_utils/async"], function (require, exports, const_3, factory_1, lang_7, object_6, defaults_1, strutils_5, coreutils_9, tloader_1, sloader_1, path_2, tooltip_1, dom_5, async_5) {
    "use strict";
    var dom = dom_5.DomUtils, $ = dom.$, _async = async_5.AsyncUtils, doc = dom.document, win = dom.window, coreUtils = coreutils_9.CoreUtils, strUtils = strutils_5.StringUtils;
    var _TEMPLATE_SELECTOR = 'script[type="text/html"]';
    var stylesLoader = sloader_1.create();
    var GLOB_EVENTS = {
        load: "load",
        unload: "unload",
        initialized: "initialize"
    };
    var PROP_NAME = {
        curSelectable: "currentSelectable",
        isReady: "isReady"
    };
    var BootstrapState;
    (function (BootstrapState) {
        BootstrapState[BootstrapState["None"] = 0] = "None";
        BootstrapState[BootstrapState["Initializing"] = 1] = "Initializing";
        BootstrapState[BootstrapState["Initialized"] = 2] = "Initialized";
        BootstrapState[BootstrapState["Ready"] = 3] = "Ready";
        BootstrapState[BootstrapState["Error"] = 4] = "Error";
    })(BootstrapState || (BootstrapState = {}));
    var Bootstrap = (function (_super) {
        __extends(Bootstrap, _super);
        function Bootstrap() {
            _super.call(this);
            var self = this;
            if (!!exports.bootstrap)
                throw new Error(lang_7.ERRS.ERR_GLOBAL_SINGLTON);
            this._bootState = 0;
            this._appInst = null;
            this._currentSelectable = null;
            this._exports = {};
            this._moduleInits = [];
            this._templateLoader = null;
            this._templateLoader = new tloader_1.TemplateLoader();
            this._templateLoader.addOnLoaded(function (s, a) {
                self._onTemplateLoaded(a.html, a.app);
            });
            this._templateLoader.addOnError(function (s, a) {
                return self.handleError(a.error, a.source);
            });
            this._elViewRegister = factory_1.createElViewRegister(null);
            this._internal = {
                initialize: function () {
                    return self._initialize();
                },
                trackSelectable: function (selectable) {
                    self._trackSelectable(selectable);
                },
                untrackSelectable: function (selectable) {
                    self._untrackSelectable(selectable);
                },
                registerApp: function (app) {
                    self._registerApp(app);
                },
                unregisterApp: function (app) {
                    self._unregisterApp(app);
                },
                registerObject: function (root, name, obj) {
                    self._registerObject(root, name, obj);
                },
                unregisterObject: function (root, name) {
                    self._unregisterObject(root, name);
                },
                getObject: function (root, name) {
                    return self._getObject(root, name);
                },
                getConverter: function (name) {
                    return self._getConverter(name);
                }
            };
            this._defaults = new defaults_1.Defaults(this);
            this.defaults.imagesPath = path_2.PathHelper.getFrameworkImgPath();
            stylesLoader.loadOwnStyle();
            coreutils_9.ERROR.addHandler("*", this);
        }
        Bootstrap._initFramework = function () {
            $(doc).ready(function ($) {
                exports.bootstrap._getInternal().initialize();
            });
        };
        Bootstrap.prototype._bindGlobalEvents = function () {
            var self = this;
            var $win = $(win), $doc = $(doc);
            $doc.on("click.jriapp", function (e) {
                e.stopPropagation();
                self.currentSelectable = null;
            });
            $doc.on("keydown.jriapp", function (e) {
                e.stopPropagation();
                if (!!self._currentSelectable) {
                    self._currentSelectable.getISelectable().onKeyDown(e.which, e);
                }
            });
            $doc.on("keyup.jriapp", function (e) {
                e.stopPropagation();
                if (!!self._currentSelectable) {
                    self._currentSelectable.getISelectable().onKeyUp(e.which, e);
                }
            });
            $win.on("beforeunload.jriapp", function () {
                self.raiseEvent(GLOB_EVENTS.unload, {});
            });
            dom.window.onerror = function (msg, url, linenumber) {
                if (!!msg && msg.toString().indexOf(const_3.DUMY_ERROR) > -1) {
                    return true;
                }
                alert("Error: " + msg + "\nURL: " + url + "\nLine Number: " + linenumber);
                return false;
            };
        };
        Bootstrap.prototype._onTemplateLoaded = function (html, app) {
            var tmpDiv = doc.createElement("div");
            tmpDiv.innerHTML = strUtils.fastTrim(html);
            this._processTemplates(tmpDiv, app);
        };
        Bootstrap.prototype._processTemplates = function (root, app) {
            if (app === void 0) { app = null; }
            var self = this, templates = coreUtils.arr.fromList(root.querySelectorAll(_TEMPLATE_SELECTOR));
            templates.forEach(function (el) {
                var html, name = el.getAttribute("id");
                if (!name)
                    throw new Error(lang_7.ERRS.ERR_TEMPLATE_HAS_NO_ID);
                html = el.innerHTML;
                self._processTemplate(name, html, app);
            });
        };
        Bootstrap.prototype._processHTMLTemplates = function () {
            var self = this, root = dom.document;
            self._processTemplates(root);
        };
        Bootstrap.prototype._processTemplate = function (name, html, app) {
            var self = this, deferred = _async.createSyncDeferred();
            var res = strUtils.fastTrim(html);
            var fn = function () {
                return deferred.promise();
            };
            if (!!app) {
                name = app.appName + "." + name;
            }
            self.templateLoader.registerTemplateLoader(name, {
                fn_loader: fn
            });
            deferred.resolve(res);
        };
        Bootstrap.prototype._getEventNames = function () {
            var base_events = _super.prototype._getEventNames.call(this);
            var events = Object.keys(GLOB_EVENTS).map(function (key, i, arr) { return GLOB_EVENTS[key]; });
            return events.concat(base_events);
        };
        Bootstrap.prototype._addHandler = function (name, fn, nmspace, context, priority) {
            var self = this, isReady = self._bootState === 3;
            var isIntialized = (self._bootState === 2 || self._bootState === 3);
            if ((name === GLOB_EVENTS.load && isReady) || (name === GLOB_EVENTS.initialized && isIntialized)) {
                setTimeout(function () { fn.apply(self, [self, {}]); }, 0);
                return;
            }
            _super.prototype._addHandler.call(this, name, fn, nmspace, context, priority);
        };
        Bootstrap.prototype._init = function () {
            var self = this, deferred = _async.createDeferred(), invalidOpErr = new Error("Invalid operation");
            if (self.getIsDestroyCalled())
                return deferred.reject(invalidOpErr);
            this._bindGlobalEvents();
            self.registerSvc(const_3.TOOLTIP_SVC, tooltip_1.create());
            self._bootState = 2;
            self.raiseEvent(GLOB_EVENTS.initialized, {});
            self.removeHandler(GLOB_EVENTS.initialized, null);
            deferred.resolve(_async.delay(function () {
                if (self.getIsDestroyCalled())
                    throw invalidOpErr;
                self._processHTMLTemplates();
                self._bootState = 3;
                self.raisePropertyChanged(PROP_NAME.isReady);
            }));
            return deferred.promise().then(function () {
                self.raiseEvent(GLOB_EVENTS.load, {});
                self.removeHandler(GLOB_EVENTS.load, null);
            });
        };
        Bootstrap.prototype._initialize = function () {
            var _this = this;
            var self = this, deferred = _async.createDeferred(), invalidOpErr = new Error("Invalid operation");
            if (this._bootState !== 0)
                return deferred.reject(invalidOpErr);
            this._bootState = 1;
            var promise = deferred.resolve(this.stylesLoader.whenAllLoaded()).then(function () {
                return self._init();
            }).fail(function (err) {
                _this._bootState = 4;
                _this.handleError(err, _this);
                throw err;
            });
            return promise;
        };
        Bootstrap.prototype._trackSelectable = function (selectable) {
            var self = this, isel = selectable.getISelectable(), el = isel.getContainerEl();
            $(el).on("click." + isel.getUniqueID(), function (e) {
                e.stopPropagation();
                var target = e.target;
                if (dom.isContained(target, el))
                    self.currentSelectable = selectable;
            });
        };
        Bootstrap.prototype._untrackSelectable = function (selectable) {
            var self = this, isel = selectable.getISelectable(), el = isel.getContainerEl();
            $(el).off("click." + isel.getUniqueID());
            if (this.currentSelectable === selectable)
                this.currentSelectable = null;
        };
        Bootstrap.prototype._registerApp = function (app) {
            if (!this._appInst) {
                this._appInst = app;
                coreutils_9.ERROR.addHandler(app.appName, app);
            }
        };
        Bootstrap.prototype._unregisterApp = function (app) {
            if (!this._appInst)
                return;
            coreutils_9.ERROR.removeHandler(app.appName);
            this._appInst = null;
            this.templateLoader.unRegisterTemplateGroup(app.appName);
            this.templateLoader.unRegisterTemplateLoader(app.appName);
        };
        Bootstrap.prototype._destroyApp = function () {
            var self = this;
            if (!!self._appInst) {
                self._appInst.destroy();
                self._appInst = null;
            }
        };
        Bootstrap.prototype._registerObject = function (root, name, obj) {
            coreUtils.setValue(root.getExports(), name, obj, true);
        };
        Bootstrap.prototype._unregisterObject = function (root, name) {
            return coreUtils.removeValue(root.getExports(), name);
        };
        Bootstrap.prototype._getObject = function (root, name) {
            return coreUtils.getValue(root.getExports(), name);
        };
        Bootstrap.prototype._getConverter = function (name) {
            var name2 = const_3.STORE_KEY.CONVERTER + name;
            var res = this._getObject(this, name2);
            if (!res)
                throw new Error(strUtils.format(lang_7.ERRS.ERR_CONVERTER_NOTREGISTERED, name));
            return res;
        };
        Bootstrap.prototype._waitLoaded = function (onLoad) {
            var self = this;
            self.init(function () {
                self.addOnLoad(function (s, a) {
                    setTimeout(function () {
                        try {
                            onLoad(self);
                        }
                        catch (err) {
                            self.handleError(err, self);
                            throw err;
                        }
                    }, 0);
                });
            });
        };
        Bootstrap.prototype._getInternal = function () {
            return this._internal;
        };
        Bootstrap.prototype.addOnLoad = function (fn, nmspace, context) {
            this._addHandler(GLOB_EVENTS.load, fn, nmspace, context);
        };
        Bootstrap.prototype.addOnUnLoad = function (fn, nmspace, context) {
            this._addHandler(GLOB_EVENTS.unload, fn, nmspace, context);
        };
        Bootstrap.prototype.addOnInitialize = function (fn, nmspace, context) {
            this._addHandler(GLOB_EVENTS.initialized, fn, nmspace, context);
        };
        Bootstrap.prototype.addModuleInit = function (fn) {
            if (this._moduleInits.filter(function (val) { return val === fn; }).length === 0) {
                this._moduleInits.push(fn);
                return true;
            }
            return false;
        };
        Bootstrap.prototype.getExports = function () {
            return this._exports;
        };
        Bootstrap.prototype.getApp = function () {
            return this._appInst;
        };
        Bootstrap.prototype.init = function (onInit) {
            var self = this;
            self.addOnInitialize(function (s, a) {
                setTimeout(function () {
                    try {
                        onInit(self);
                    }
                    catch (err) {
                        self.handleError(err, self);
                        throw err;
                    }
                }, 0);
            });
        };
        Bootstrap.prototype.startApp = function (appFactory, onStartUp) {
            var self = this, deferred = _async.createDeferred();
            var promise = deferred.promise().fail(function (err) {
                self.handleError(err, self);
                throw err;
            });
            self._waitLoaded(function () {
                try {
                    var app = appFactory();
                    deferred.resolve(app.startUp(onStartUp));
                }
                catch (err) {
                    deferred.reject(err);
                }
            });
            return promise;
        };
        Bootstrap.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            var self = this;
            self._removeHandler();
            self._destroyApp();
            self._exports = {};
            if (self._templateLoader !== null) {
                self._templateLoader.destroy();
                self._templateLoader = null;
            }
            self._elViewRegister.destroy();
            self._elViewRegister = null;
            self._moduleInits = [];
            $(doc).off(".jriapp");
            win.onerror = null;
            $(win).off(".jriapp");
            coreutils_9.ERROR.removeHandler("*");
            _super.prototype.destroy.call(this);
        };
        Bootstrap.prototype.registerSvc = function (name, obj) {
            var name2 = const_3.STORE_KEY.SVC + name;
            return this._registerObject(this, name2, obj);
        };
        Bootstrap.prototype.unregisterSvc = function (name, obj) {
            var name2 = const_3.STORE_KEY.SVC + name;
            return this._unregisterObject(this, name2);
        };
        Bootstrap.prototype.getSvc = function (name) {
            var name2 = const_3.STORE_KEY.SVC + name;
            return this._getObject(this, name2);
        };
        Bootstrap.prototype.registerConverter = function (name, obj) {
            var name2 = const_3.STORE_KEY.CONVERTER + name;
            if (!this._getObject(this, name2)) {
                this._registerObject(this, name2, obj);
            }
            else
                throw new Error(strUtils.format(lang_7.ERRS.ERR_OBJ_ALREADY_REGISTERED, name));
        };
        Bootstrap.prototype.registerElView = function (name, elViewType) {
            this._elViewRegister.registerElView(name, elViewType);
        };
        Bootstrap.prototype.getImagePath = function (imageName) {
            var images = this.defaults.imagesPath;
            return images + imageName;
        };
        Bootstrap.prototype.loadOwnStyle = function (name) {
            return this.stylesLoader.loadOwnStyle(name);
        };
        Bootstrap.prototype.toString = function () {
            return "JRIApp Bootstrap";
        };
        Object.defineProperty(Bootstrap.prototype, "stylesLoader", {
            get: function () { return stylesLoader; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bootstrap.prototype, "elViewRegister", {
            get: function () { return this._elViewRegister; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bootstrap.prototype, "templateLoader", {
            get: function () { return this._templateLoader; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bootstrap.prototype, "currentSelectable", {
            get: function () {
                return this._currentSelectable;
            },
            set: function (v) {
                if (this._currentSelectable !== v) {
                    this._currentSelectable = v;
                    this.raisePropertyChanged(PROP_NAME.curSelectable);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bootstrap.prototype, "defaults", {
            get: function () {
                return this._defaults;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bootstrap.prototype, "isReady", {
            get: function () {
                return this._bootState === 3;
            },
            enumerable: true,
            configurable: true
        });
        return Bootstrap;
    }(object_6.BaseObject));
    exports.Bootstrap = Bootstrap;
    exports.bootstrap = new Bootstrap();
});
define("jriapp_core/converter", ["require", "exports", "jriapp_core/lang", "jriapp_utils/checks", "jriapp_utils/strutils", "jriapp_utils/coreutils", "jriapp_core/bootstrap"], function (require, exports, lang_8, checks_9, strUtils_6, coreutils_10, bootstrap_2) {
    "use strict";
    var checks = checks_9.Checks, strUtils = strUtils_6.StringUtils, coreUtils = coreutils_10.CoreUtils, boot = bootstrap_2.bootstrap;
    exports.NUM_CONV = { None: 0, Integer: 1, Decimal: 2, Float: 3, SmallInt: 4 };
    var BaseConverter = (function () {
        function BaseConverter() {
        }
        BaseConverter.prototype.convertToSource = function (val, param, dataContext) {
            return val;
        };
        BaseConverter.prototype.convertToTarget = function (val, param, dataContext) {
            if (checks.isNt(val))
                return null;
            return val;
        };
        return BaseConverter;
    }());
    exports.BaseConverter = BaseConverter;
    ;
    exports.baseConverter = new BaseConverter();
    var DateConverter = (function () {
        function DateConverter() {
        }
        DateConverter.prototype.convertToSource = function (val, param, dataContext) {
            if (!val)
                return null;
            var defaults = bootstrap_2.bootstrap.defaults, datepicker = defaults.datepicker;
            if (!!datepicker)
                return datepicker.parseDate(val);
            else
                return dateTimeConverter.convertToSource(val, defaults.dateFormat, dataContext);
        };
        DateConverter.prototype.convertToTarget = function (val, param, dataContext) {
            if (checks.isNt(val))
                return "";
            var defaults = bootstrap_2.bootstrap.defaults, datepicker = defaults.datepicker;
            if (!!datepicker)
                return datepicker.formatDate(val);
            else
                return dateTimeConverter.convertToTarget(val, defaults.dateFormat, dataContext);
        };
        DateConverter.prototype.toString = function () {
            return "DateConverter";
        };
        return DateConverter;
    }());
    exports.DateConverter = DateConverter;
    ;
    var dateConverter = new DateConverter();
    var DateTimeConverter = (function () {
        function DateTimeConverter() {
        }
        DateTimeConverter.prototype.convertToSource = function (val, param, dataContext) {
            if (!val)
                return null;
            var m = moment(val, param);
            if (!m.isValid()) {
                throw new Error(strUtils.format(lang_8.ERRS.ERR_CONV_INVALID_DATE, val));
            }
            return m.toDate();
        };
        DateTimeConverter.prototype.convertToTarget = function (val, param, dataContext) {
            if (checks.isNt(val)) {
                return "";
            }
            var m = moment(val);
            return m.format(param);
        };
        DateTimeConverter.prototype.toString = function () {
            return "DateTimeConverter";
        };
        return DateTimeConverter;
    }());
    exports.DateTimeConverter = DateTimeConverter;
    ;
    var dateTimeConverter = new DateTimeConverter();
    var NumberConverter = (function () {
        function NumberConverter() {
        }
        NumberConverter.prototype.convertToSource = function (val, param, dataContext) {
            if (checks.isNt(val))
                return null;
            var defaults = bootstrap_2.bootstrap.defaults, dp = defaults.decimalPoint, thousand_sep = defaults.thousandSep, prec = 4;
            var value = val.replace(thousand_sep, "");
            value = value.replace(dp, ".");
            value = strUtils.stripNonNumeric(value);
            if (value === "") {
                return null;
            }
            var num = null;
            switch (param) {
                case exports.NUM_CONV.SmallInt:
                    num = parseInt(value, 10);
                    break;
                case exports.NUM_CONV.Integer:
                    num = parseInt(value, 10);
                    break;
                case exports.NUM_CONV.Decimal:
                    prec = defaults.decPrecision;
                    num = coreUtils.round(parseFloat(value), prec);
                    break;
                case exports.NUM_CONV.Float:
                    num = parseFloat(value);
                    break;
                default:
                    num = Number(value);
                    break;
            }
            if (!checks.isNumber(num)) {
                throw new Error(strUtils.format(lang_8.ERRS.ERR_CONV_INVALID_NUM, val));
            }
            return num;
        };
        NumberConverter.prototype.convertToTarget = function (val, param, dataContext) {
            if (checks.isNt(val)) {
                return "";
            }
            var defaults = bootstrap_2.bootstrap.defaults, dp = defaults.decimalPoint, thousand_sep = defaults.thousandSep, prec;
            switch (param) {
                case exports.NUM_CONV.Integer:
                    prec = 0;
                    return strUtils.formatNumber(val, prec, dp, thousand_sep);
                case exports.NUM_CONV.Decimal:
                    prec = defaults.decPrecision;
                    return strUtils.formatNumber(val, prec, dp, thousand_sep);
                case exports.NUM_CONV.SmallInt:
                    prec = 0;
                    return strUtils.formatNumber(val, prec, dp, "");
                case exports.NUM_CONV.Float:
                    return strUtils.formatNumber(val, null, dp, thousand_sep);
                default:
                    return strUtils.formatNumber(val, null, dp, thousand_sep);
            }
        };
        NumberConverter.prototype.toString = function () {
            return "NumberConverter";
        };
        return NumberConverter;
    }());
    exports.NumberConverter = NumberConverter;
    ;
    var numberConverter = new NumberConverter();
    var IntegerConverter = (function () {
        function IntegerConverter() {
        }
        IntegerConverter.prototype.convertToSource = function (val, param, dataContext) {
            return numberConverter.convertToSource(val, exports.NUM_CONV.Integer, dataContext);
        };
        IntegerConverter.prototype.convertToTarget = function (val, param, dataContext) {
            return numberConverter.convertToTarget(val, exports.NUM_CONV.Integer, dataContext);
        };
        IntegerConverter.prototype.toString = function () {
            return "IntegerConverter";
        };
        return IntegerConverter;
    }());
    exports.IntegerConverter = IntegerConverter;
    ;
    var integerConverter = new IntegerConverter();
    var SmallIntConverter = (function () {
        function SmallIntConverter() {
        }
        SmallIntConverter.prototype.convertToSource = function (val, param, dataContext) {
            return numberConverter.convertToSource(val, exports.NUM_CONV.SmallInt, dataContext);
        };
        SmallIntConverter.prototype.convertToTarget = function (val, param, dataContext) {
            return numberConverter.convertToTarget(val, exports.NUM_CONV.SmallInt, dataContext);
        };
        SmallIntConverter.prototype.toString = function () {
            return "SmallIntConverter";
        };
        return SmallIntConverter;
    }());
    exports.SmallIntConverter = SmallIntConverter;
    ;
    var smallIntConverter = new SmallIntConverter();
    var DecimalConverter = (function () {
        function DecimalConverter() {
        }
        DecimalConverter.prototype.convertToSource = function (val, param, dataContext) {
            return numberConverter.convertToSource(val, exports.NUM_CONV.Decimal, dataContext);
        };
        DecimalConverter.prototype.convertToTarget = function (val, param, dataContext) {
            return numberConverter.convertToTarget(val, exports.NUM_CONV.Decimal, dataContext);
        };
        DecimalConverter.prototype.toString = function () {
            return "DecimalConverter";
        };
        return DecimalConverter;
    }());
    exports.DecimalConverter = DecimalConverter;
    ;
    var decimalConverter = new DecimalConverter();
    var FloatConverter = (function () {
        function FloatConverter() {
        }
        FloatConverter.prototype.convertToSource = function (val, param, dataContext) {
            return numberConverter.convertToSource(val, exports.NUM_CONV.Float, dataContext);
        };
        FloatConverter.prototype.convertToTarget = function (val, param, dataContext) {
            return numberConverter.convertToTarget(val, exports.NUM_CONV.Float, dataContext);
        };
        FloatConverter.prototype.toString = function () {
            return "FloatConverter";
        };
        return FloatConverter;
    }());
    exports.FloatConverter = FloatConverter;
    ;
    var floatConverter = new FloatConverter();
    var NotConverter = (function () {
        function NotConverter() {
        }
        NotConverter.prototype.convertToSource = function (val, param, dataContext) {
            return !val;
        };
        NotConverter.prototype.convertToTarget = function (val, param, dataContext) {
            return !val;
        };
        return NotConverter;
    }());
    exports.NotConverter = NotConverter;
    boot.registerConverter("BaseConverter", exports.baseConverter);
    boot.registerConverter("dateConverter", dateConverter);
    boot.registerConverter("dateTimeConverter", dateTimeConverter);
    boot.registerConverter("numberConverter", numberConverter);
    boot.registerConverter("integerConverter", integerConverter);
    boot.registerConverter("smallIntConverter", smallIntConverter);
    boot.registerConverter("decimalConverter", decimalConverter);
    boot.registerConverter("floatConverter", floatConverter);
    boot.registerConverter("notConverter", new NotConverter());
});
define("jriapp_utils/debounce", ["require", "exports"], function (require, exports) {
    "use strict";
    var Debounce = (function () {
        function Debounce(interval) {
            if (interval === void 0) { interval = 0; }
            this._isDestroyed = false;
            this._timer = null;
            this._interval = !interval ? 0 : interval;
        }
        Debounce.prototype.enqueue = function (fn) {
            var _this = this;
            if (this._isDestroyed)
                return;
            clearTimeout(this._timer);
            this._timer = setTimeout(function () {
                _this._timer = null;
                if (_this._isDestroyed)
                    return;
                fn();
            }, this._interval);
        };
        Debounce.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyed = true;
            clearTimeout(this._timer);
            this._timer = null;
        };
        Debounce.prototype.getIsDestroyed = function () {
            return this._isDestroyed;
        };
        Debounce.prototype.getIsDestroyCalled = function () {
            return this._isDestroyed;
        };
        Object.defineProperty(Debounce.prototype, "interval", {
            get: function () {
                return this._interval;
            },
            set: function (v) {
                this._interval = v;
            },
            enumerable: true,
            configurable: true
        });
        return Debounce;
    }());
    exports.Debounce = Debounce;
});
define("jriapp_utils/dblclick", ["require", "exports"], function (require, exports) {
    "use strict";
    var DblClick = (function () {
        function DblClick(interval) {
            if (interval === void 0) { interval = 0; }
            this._isDestroyed = false;
            this._timer = null;
            this._interval = !interval ? 0 : interval;
            this._fn_OnClick = null;
            this._fn_OnDblClick = null;
        }
        DblClick.prototype.click = function () {
            var self = this;
            if (!!this._timer) {
                clearTimeout(this._timer);
                this._timer = null;
                if (!!this._fn_OnDblClick)
                    this._fn_OnDblClick();
                else if (!!this._fn_OnClick)
                    this._fn_OnClick();
            }
            else {
                if (!!this._fn_OnClick) {
                    this._timer = setTimeout(function () {
                        self._timer = null;
                        if (!!self._fn_OnClick)
                            self._fn_OnClick();
                    }, self._interval);
                }
            }
        };
        DblClick.prototype.add = function (fn_OnClick, fn_OnDblClick) {
            if (this._isDestroyed)
                return;
            this._fn_OnClick = fn_OnClick;
            this._fn_OnDblClick = fn_OnDblClick;
        };
        DblClick.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyed = true;
            clearTimeout(this._timer);
            this._timer = null;
            this._fn_OnClick = null;
            this._fn_OnDblClick = null;
        };
        DblClick.prototype.getIsDestroyed = function () {
            return this._isDestroyed;
        };
        DblClick.prototype.getIsDestroyCalled = function () {
            return this._isDestroyed;
        };
        Object.defineProperty(DblClick.prototype, "interval", {
            get: function () {
                return this._interval;
            },
            set: function (v) {
                this._interval = v;
            },
            enumerable: true,
            configurable: true
        });
        return DblClick;
    }());
    exports.DblClick = DblClick;
});
define("jriapp_content/int", ["require", "exports", "jriapp_utils/utils", "jriapp_core/parser"], function (require, exports, utils_2, parser_2) {
    "use strict";
    var utils = utils_2.Utils, coreUtils = utils.core, checks = utils.check;
    exports.css = {
        content: "ria-content-field",
        required: "ria-required-field",
        checkbox: "ria-checkbox"
    };
    function parseContentAttr(content_attr) {
        var contentOptions = {
            name: null,
            templateInfo: null,
            bindingInfo: null,
            displayInfo: null,
            fieldName: null,
            options: null
        };
        var attr, temp_opts = parser_2.parser.parseOptions(content_attr);
        if (temp_opts.length === 0)
            return contentOptions;
        attr = temp_opts[0];
        if (!attr.template && !!attr.fieldName) {
            var bindInfo = {
                target: null, source: null,
                targetPath: null, sourcePath: attr.fieldName,
                mode: "OneWay",
                converter: null, converterParam: null
            };
            contentOptions.bindingInfo = bindInfo;
            contentOptions.displayInfo = attr.css;
            contentOptions.fieldName = attr.fieldName;
            if (!!attr.name)
                contentOptions.name = attr.name;
            if (!!attr.options)
                contentOptions.options = attr.options;
            if (attr.readOnly !== checks.undefined)
                contentOptions.readOnly = coreUtils.parseBool(attr.readOnly);
        }
        else if (!!attr.template) {
            contentOptions.templateInfo = attr.template;
            delete attr.template;
        }
        return contentOptions;
    }
    exports.parseContentAttr = parseContentAttr;
});
define("jriapp_core/mvvm", ["require", "exports", "jriapp_core/object", "jriapp_utils/coreutils"], function (require, exports, object_7, coreutils_11) {
    "use strict";
    var CMD_EVENTS = {
        can_execute_changed: "canExecute_changed"
    };
    var TCommand = (function (_super) {
        __extends(TCommand, _super);
        function TCommand(fn_action, thisObj, fn_canExecute) {
            _super.call(this);
            this._objId = "cmd" + coreutils_11.CoreUtils.getNewID();
            this._action = fn_action;
            this._thisObj = !thisObj ? null : thisObj;
            this._predicate = !fn_canExecute ? null : fn_canExecute;
        }
        TCommand.prototype._getEventNames = function () {
            var base_events = _super.prototype._getEventNames.call(this);
            return [CMD_EVENTS.can_execute_changed].concat(base_events);
        };
        TCommand.prototype._canExecute = function (sender, param, context) {
            if (!this._predicate)
                return true;
            return this._predicate.apply(context, [sender, param, this._thisObj]);
        };
        TCommand.prototype._execute = function (sender, param, context) {
            if (!!this._action) {
                this._action.apply(context, [sender, param, this._thisObj]);
            }
        };
        TCommand.prototype.addOnCanExecuteChanged = function (fn, nmspace, context) {
            this._addHandler(CMD_EVENTS.can_execute_changed, fn, nmspace, context);
        };
        TCommand.prototype.removeOnCanExecuteChanged = function (nmspace) {
            this._removeHandler(CMD_EVENTS.can_execute_changed, nmspace);
        };
        TCommand.prototype.canExecute = function (sender, param) {
            return this._canExecute(sender, param, this._thisObj || this);
        };
        TCommand.prototype.execute = function (sender, param) {
            this._execute(sender, param, this._thisObj || this);
        };
        TCommand.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            this._action = null;
            this._thisObj = null;
            this._predicate = null;
            _super.prototype.destroy.call(this);
        };
        TCommand.prototype.raiseCanExecuteChanged = function () {
            this.raiseEvent(CMD_EVENTS.can_execute_changed, {});
        };
        TCommand.prototype.toString = function () {
            return "Command";
        };
        Object.defineProperty(TCommand.prototype, "uniqueID", {
            get: function () {
                return this._objId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TCommand.prototype, "thisObj", {
            get: function () {
                return this._thisObj;
            },
            enumerable: true,
            configurable: true
        });
        return TCommand;
    }(object_7.BaseObject));
    exports.TCommand = TCommand;
    var BaseCommand = (function (_super) {
        __extends(BaseCommand, _super);
        function BaseCommand(thisObj) {
            _super.call(this, null, thisObj, null);
            this._action = this.Action;
            this._predicate = this.getIsCanExecute;
        }
        BaseCommand.prototype.canExecute = function (sender, param) {
            return this._canExecute(sender, param, this);
        };
        BaseCommand.prototype.execute = function (sender, param) {
            this._execute(sender, param, this);
        };
        return BaseCommand;
    }(TCommand));
    exports.BaseCommand = BaseCommand;
    exports.Command = TCommand;
    exports.TemplateCommand = TCommand;
    var ViewModel = (function (_super) {
        __extends(ViewModel, _super);
        function ViewModel(app) {
            _super.call(this);
            this._app = app;
            this._objId = "vm" + coreutils_11.CoreUtils.getNewID();
        }
        ViewModel.prototype.toString = function () {
            return "ViewModel";
        };
        ViewModel.prototype.destroy = function () {
            this._app = null;
            _super.prototype.destroy.call(this);
        };
        Object.defineProperty(ViewModel.prototype, "uniqueID", {
            get: function () {
                return this._objId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewModel.prototype, "app", {
            get: function () {
                return this._app;
            },
            enumerable: true,
            configurable: true
        });
        return ViewModel;
    }(object_7.BaseObject));
    exports.ViewModel = ViewModel;
});
define("jriapp_utils/eventstore", ["require", "exports", "jriapp_core/object", "jriapp_utils/syschecks"], function (require, exports, object_8, syschecks_5) {
    "use strict";
    var PROP_BAG = syschecks_5.SysChecks._PROP_BAG_NAME();
    (function (EVENT_CHANGE_TYPE) {
        EVENT_CHANGE_TYPE[EVENT_CHANGE_TYPE["None"] = 0] = "None";
        EVENT_CHANGE_TYPE[EVENT_CHANGE_TYPE["Added"] = 1] = "Added";
        EVENT_CHANGE_TYPE[EVENT_CHANGE_TYPE["Deleted"] = 2] = "Deleted";
        EVENT_CHANGE_TYPE[EVENT_CHANGE_TYPE["Updated"] = 3] = "Updated";
    })(exports.EVENT_CHANGE_TYPE || (exports.EVENT_CHANGE_TYPE = {}));
    var EVENT_CHANGE_TYPE = exports.EVENT_CHANGE_TYPE;
    var EventStore = (function (_super) {
        __extends(EventStore, _super);
        function EventStore(onChange) {
            _super.call(this);
            this._dic = null;
            this._onChange = onChange;
        }
        EventStore.prototype._isHasProp = function (prop) {
            return true;
        };
        EventStore.prototype.getProp = function (name) {
            if (!this._dic)
                return null;
            var cmd = this._dic[name];
            if (!cmd)
                return null;
            return cmd;
        };
        EventStore.prototype.setProp = function (name, command) {
            if (!this._dic && !!command)
                this._dic = {};
            if (!this._dic)
                return;
            var old = this._dic[name];
            if (!command && !!old) {
                delete this._dic[name];
                if (!!this._onChange) {
                    this._onChange(this, {
                        name: name,
                        changeType: 2,
                        oldVal: old,
                        newVal: null
                    });
                    this.raisePropertyChanged(name);
                }
                return;
            }
            this._dic[name] = command;
            if (!!this._onChange) {
                if (!old) {
                    this._onChange(this, {
                        name: name,
                        changeType: 1,
                        oldVal: null,
                        newVal: command
                    });
                }
                else {
                    this._onChange(this, {
                        name: name,
                        changeType: 3,
                        oldVal: old,
                        newVal: command
                    });
                }
                this.raisePropertyChanged(name);
            }
        };
        EventStore.prototype.trigger = function (name, args) {
            if (!this._dic)
                return;
            var command = this._dic[name];
            if (!command)
                return;
            args = args || {};
            if (command.canExecute(this, args))
                command.execute(this, args);
        };
        EventStore.prototype.toString = function () {
            return PROP_BAG;
        };
        EventStore.prototype.destroy = function () {
            if (!!this._dic) {
                this._dic = null;
            }
            this._onChange = null;
            _super.prototype.destroy.call(this);
        };
        return EventStore;
    }(object_8.BaseObject));
    exports.EventStore = EventStore;
});
define("jriapp_elview/elview", ["require", "exports", "jriapp_core/const", "jriapp_core/lang", "jriapp_core/object", "jriapp_utils/syschecks", "jriapp_core/bootstrap", "jriapp_utils/utils", "jriapp_core/mvvm", "jriapp_utils/eventstore"], function (require, exports, const_4, lang_9, object_9, syschecks_6, bootstrap_3, utils_3, mvvm_1, eventstore_1) {
    "use strict";
    exports.EVENT_CHANGE_TYPE = eventstore_1.EVENT_CHANGE_TYPE;
    var utils = utils_3.Utils, coreUtils = utils.core, dom = utils.dom, $ = dom.$, checks = utils.check;
    var PROP_BAG = syschecks_6.SysChecks._PROP_BAG_NAME(), boot = bootstrap_3.bootstrap;
    syschecks_6.SysChecks._isElView = function (obj) {
        return !!obj && obj instanceof BaseElView;
    };
    function fn_addToolTip($el, tip, isError, pos) {
        var svc = bootstrap_3.bootstrap.getSvc(const_4.TOOLTIP_SVC);
        svc.addToolTip($el, tip, isError, pos);
    }
    exports.fn_addToolTip = fn_addToolTip;
    exports.PropChangedCommand = mvvm_1.TCommand;
    exports.css = {
        fieldError: "ria-field-error",
        commandLink: "ria-command-link",
        checkedNull: "ria-checked-null",
        disabled: "disabled",
        opacity: "opacity",
        color: "color",
        fontSize: "font-size"
    };
    exports.PROP_NAME = {
        isVisible: "isVisible",
        validationErrors: "validationErrors",
        toolTip: "toolTip",
        css: "css",
        isEnabled: "isEnabled",
        value: "value",
        command: "command",
        disabled: "disabled",
        commandParam: "commandParam",
        isBusy: "isBusy",
        delay: "delay",
        checked: "checked",
        color: "color",
        wrap: "wrap",
        text: "text",
        html: "html",
        preventDefault: "preventDefault",
        imageSrc: "imageSrc",
        glyph: "glyph",
        href: "href",
        fontSize: "fontSize",
        borderColor: "borderColor",
        borderStyle: "borderStyle",
        width: "width",
        height: "height",
        src: "src",
        click: "click"
    };
    var PropertyBag = (function (_super) {
        __extends(PropertyBag, _super);
        function PropertyBag(el) {
            _super.call(this);
            this._el = el;
        }
        PropertyBag.prototype._isHasProp = function (prop) {
            return checks.isHasProp(this._el, prop);
        };
        PropertyBag.prototype.getProp = function (name) {
            return this._el[name];
        };
        PropertyBag.prototype.setProp = function (name, val) {
            var old = this._el[name];
            if (old !== val) {
                this._el[name] = val;
                this.raisePropertyChanged(name);
            }
        };
        PropertyBag.prototype.toString = function () {
            return PROP_BAG;
        };
        return PropertyBag;
    }(object_9.BaseObject));
    var CSSBag = (function (_super) {
        __extends(CSSBag, _super);
        function CSSBag(el) {
            _super.call(this);
            this._el = el;
        }
        CSSBag.prototype._isHasProp = function (prop) {
            return true;
        };
        CSSBag.prototype.getProp = function (name) {
            return checks.undefined;
        };
        CSSBag.prototype.setProp = function (name, val) {
            if (val === checks.undefined)
                return;
            if (name === "*") {
                if (!val) {
                    dom.removeClass([this._el], null);
                }
                else if (checks.isArray(val)) {
                    dom.setClasses([this._el], val);
                }
                else if (checks.isString(val)) {
                    dom.setClasses([this._el], val.split(" "));
                }
                return;
            }
            dom.setClass([this._el], name, !val);
        };
        CSSBag.prototype.toString = function () {
            return PROP_BAG;
        };
        return CSSBag;
    }(object_9.BaseObject));
    var BaseElView = (function (_super) {
        __extends(BaseElView, _super);
        function BaseElView(options) {
            _super.call(this);
            var el = options.el;
            this._$el = $(el);
            this._toolTip = options.tip;
            this._eventStore = null;
            this._props = null;
            this._classes = null;
            this._display = null;
            this._css = options.css;
            this._objId = "elv" + coreUtils.getNewID();
            this._errors = null;
            if (!!this._css) {
                dom.addClass([el], this._css);
            }
            this._applyToolTip();
            this.app.viewFactory.store.setElView(el, this);
        }
        BaseElView.prototype._onEventChanged = function (args) {
            switch (args.changeType) {
                case 1:
                    this._onEventAdded(args.name, args.newVal);
                    break;
                case 2:
                    this._onEventDeleted(args.name, args.oldVal);
                    break;
            }
        };
        BaseElView.prototype._onEventAdded = function (name, newVal) {
            var self = this;
            if (this.getIsDestroyCalled())
                return;
            this.$el.on(name + "." + this.uniqueID, function (e) {
                e.stopPropagation();
                if (!!self._eventStore)
                    self._eventStore.trigger(name, e);
            });
        };
        BaseElView.prototype._onEventDeleted = function (name, oldVal) {
            this.$el.off(name + "." + this.uniqueID);
        };
        BaseElView.prototype._applyToolTip = function () {
            if (!!this._toolTip) {
                this._setToolTip(this.$el, this._toolTip);
            }
        };
        BaseElView.prototype._getErrorTipInfo = function (errors) {
            var tip = ["<b>", lang_9.STRS.VALIDATE.errorInfo, "</b>", "<br/>"];
            errors.forEach(function (info) {
                var res = "";
                info.errors.forEach(function (str) {
                    res = res + " " + str;
                });
                tip.push(res);
                res = "";
            });
            return tip.join("");
        };
        BaseElView.prototype._setFieldError = function (isError) {
            dom.setClass([this.el], exports.css.fieldError, !isError);
        };
        BaseElView.prototype._updateErrorUI = function (el, errors) {
            if (!el) {
                return;
            }
            var $el = this.$el;
            if (!!errors && errors.length > 0) {
                fn_addToolTip($el, this._getErrorTipInfo(errors), true);
                this._setFieldError(true);
            }
            else {
                this._setToolTip($el, this.toolTip);
                this._setFieldError(false);
            }
        };
        BaseElView.prototype._setToolTip = function ($el, tip, isError) {
            fn_addToolTip($el, tip, isError);
        };
        BaseElView.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            this.app.viewFactory.store.setElView(this.el, null);
            this._$el.off("." + this.uniqueID);
            this.validationErrors = null;
            this.toolTip = null;
            if (!!this._eventStore) {
                this._eventStore.destroy();
                this._eventStore = null;
            }
            if (!!this._props) {
                this._props.destroy();
                this._props = checks.undefined;
            }
            if (!!this._classes) {
                this._classes.destroy();
                this._classes = checks.undefined;
            }
            this._display = null;
            this._css = null;
            _super.prototype.destroy.call(this);
        };
        BaseElView.prototype.toString = function () {
            return "BaseElView";
        };
        Object.defineProperty(BaseElView.prototype, "$el", {
            get: function () {
                return this._$el;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElView.prototype, "el", {
            get: function () {
                return this._$el[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElView.prototype, "uniqueID", {
            get: function () { return this._objId; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElView.prototype, "isVisible", {
            get: function () {
                var v = this.$el.css("display");
                return !(v === "none");
            },
            set: function (v) {
                v = !!v;
                if (v !== this.isVisible) {
                    if (!v) {
                        this._display = this.$el.css("display");
                        if (this._display === "none")
                            this._display = null;
                        this.$el.css("display", "none");
                    }
                    else {
                        if (!!this._display)
                            this.$el.css("display", this._display);
                        else
                            this.$el.css("display", "");
                    }
                    this.raisePropertyChanged(exports.PROP_NAME.isVisible);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElView.prototype, "validationErrors", {
            get: function () { return this._errors; },
            set: function (v) {
                if (v !== this._errors) {
                    this._errors = v;
                    this.raisePropertyChanged(exports.PROP_NAME.validationErrors);
                    this._updateErrorUI(this.el, this._errors);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElView.prototype, "dataName", {
            get: function () { return this._$el.attr(const_4.DATA_ATTR.DATA_NAME); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElView.prototype, "toolTip", {
            get: function () { return this._toolTip; },
            set: function (v) {
                if (this._toolTip !== v) {
                    this._toolTip = v;
                    this._setToolTip(this.$el, v);
                    this.raisePropertyChanged(exports.PROP_NAME.toolTip);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElView.prototype, "events", {
            get: function () {
                var _this = this;
                if (!this._eventStore) {
                    if (this.getIsDestroyCalled())
                        return null;
                    this._eventStore = new eventstore_1.EventStore(function (s, a) {
                        _this._onEventChanged(a);
                    });
                }
                return this._eventStore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElView.prototype, "props", {
            get: function () {
                if (!this._props) {
                    if (this.getIsDestroyCalled())
                        return checks.undefined;
                    this._props = new PropertyBag(this.el);
                }
                return this._props;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElView.prototype, "classes", {
            get: function () {
                if (!this._classes) {
                    if (this.getIsDestroyCalled())
                        return checks.undefined;
                    this._classes = new CSSBag(this.el);
                }
                return this._classes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElView.prototype, "css", {
            get: function () { return this._css; },
            set: function (v) {
                var arr = [];
                if (this._css !== v) {
                    if (!!this._css)
                        arr.push("-" + this._css);
                    this._css = v;
                    if (!!this._css)
                        arr.push("+" + this._css);
                    dom.setClasses(this._$el.toArray(), arr);
                    this.raisePropertyChanged(exports.PROP_NAME.css);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElView.prototype, "app", {
            get: function () {
                return boot.getApp();
            },
            enumerable: true,
            configurable: true
        });
        return BaseElView;
    }(object_9.BaseObject));
    exports.BaseElView = BaseElView;
    boot.registerElView("generic", BaseElView);
});
define("jriapp_core/binding", ["require", "exports", "jriapp_core/lang", "jriapp_core/object", "jriapp_core/bootstrap", "jriapp_core/parser", "jriapp_utils/utils"], function (require, exports, lang_10, object_10, bootstrap_4, parser_3, utils_4) {
    "use strict";
    var utils = utils_4.Utils, checks = utils.check, strUtils = utils.str, coreUtils = utils.core, syschecks = utils.sys, debug = utils.debug, log = utils.log, parse = parser_3.parser, boot = bootstrap_4.bootstrap;
    syschecks._isBinding = function (obj) {
        return (!!obj && obj instanceof Binding);
    };
    function fn_reportUnResolved(bindTo, root, path, propName) {
        if (!debug.isDebugging()) {
            return;
        }
        debug.checkStartDebugger();
        var msg = "Unresolved data binding for ";
        if (bindTo === 0) {
            msg += " Source: ";
        }
        else {
            msg += " Target: ";
        }
        msg += "'" + root + "'";
        msg += ", property: '" + propName + "'";
        msg += ", binding path: '" + path + "'";
        log.error(msg);
    }
    function fn_reportMaxRec(bindTo, src, tgt, spath, tpath) {
        if (!debug.isDebugging()) {
            return;
        }
        debug.checkStartDebugger();
        var msg = "Maximum recursion exceeded for ";
        if (bindTo === 0) {
            msg += "Updating Source value: ";
        }
        else {
            msg += "Updating Target value: ";
        }
        msg += " source:'" + src + "'";
        msg += ", target:'" + tgt + "'";
        msg += ", source path: '" + spath + "'";
        msg += ", target path: '" + tpath + "'";
        log.error(msg);
    }
    var _newID = 0;
    function getNewID() {
        var id = "$bnd" + _newID;
        _newID += 1;
        return id;
    }
    var bindModeMap = {
        OneTime: 0,
        OneWay: 1,
        TwoWay: 2,
        BackWay: 3
    };
    function getBindingOptions(bindInfo, defaultTarget, defaultSource) {
        var bindingOpts = {
            mode: 1,
            converterParam: null,
            converter: null,
            targetPath: null,
            sourcePath: null,
            target: null,
            source: null,
            isSourceFixed: false
        };
        var converter, app = boot.getApp();
        if (checks.isString(bindInfo.converter)) {
            converter = app.getConverter(bindInfo.converter);
        }
        else {
            converter = bindInfo.converter;
        }
        var fixedSource = bindInfo.source, fixedTarget = bindInfo.target;
        if (!bindInfo.sourcePath && !!bindInfo.to)
            bindingOpts.sourcePath = bindInfo.to;
        else if (!!bindInfo.sourcePath)
            bindingOpts.sourcePath = bindInfo.sourcePath;
        if (!!bindInfo.targetPath)
            bindingOpts.targetPath = bindInfo.targetPath;
        if (!!bindInfo.converterParam)
            bindingOpts.converterParam = bindInfo.converterParam;
        if (!!bindInfo.mode)
            bindingOpts.mode = bindModeMap[bindInfo.mode];
        if (!!converter) {
            bindingOpts.converter = converter;
        }
        if (!fixedTarget) {
            bindingOpts.target = defaultTarget;
        }
        else {
            if (checks.isString(fixedTarget)) {
                if (fixedTarget === "this")
                    bindingOpts.target = defaultTarget;
                else {
                    bindingOpts.target = parse.resolveBindingSource(app, parse.getPathParts(fixedTarget));
                }
            }
            else {
                bindingOpts.target = fixedTarget;
            }
        }
        if (!fixedSource) {
            bindingOpts.source = defaultSource;
        }
        else {
            bindingOpts.isSourceFixed = true;
            if (checks.isString(fixedSource)) {
                if (fixedSource === "this") {
                    bindingOpts.source = defaultTarget;
                }
                else {
                    bindingOpts.source = parse.resolveBindingSource(app, parse.getPathParts(fixedSource));
                }
            }
            else {
                bindingOpts.source = fixedSource;
            }
        }
        return bindingOpts;
    }
    exports.getBindingOptions = getBindingOptions;
    var Binding = (function (_super) {
        __extends(Binding, _super);
        function Binding(options) {
            _super.call(this);
            var opts = coreUtils.extend({
                target: null, source: null,
                targetPath: null, sourcePath: null, mode: 1,
                converter: null, converterParam: null, isSourceFixed: false
            }, options);
            if (checks.isString(opts.mode)) {
                opts.mode = bindModeMap[opts.mode];
            }
            if (!checks.isString(opts.targetPath)) {
                debug.checkStartDebugger();
                throw new Error(strUtils.format(lang_10.ERRS.ERR_BIND_TGTPATH_INVALID, opts.targetPath));
            }
            if (checks.isNt(opts.mode)) {
                debug.checkStartDebugger();
                throw new Error(strUtils.format(lang_10.ERRS.ERR_BIND_MODE_INVALID, opts.mode));
            }
            if (!opts.target) {
                throw new Error(lang_10.ERRS.ERR_BIND_TARGET_EMPTY);
            }
            if (!syschecks._isBaseObj(opts.target)) {
                throw new Error(lang_10.ERRS.ERR_BIND_TARGET_INVALID);
            }
            this._state = null;
            this._mode = opts.mode;
            this._converter = !opts.converter ? null : opts.converter;
            this._converterParam = opts.converterParam;
            this._srcPath = parse.getPathParts(opts.sourcePath);
            this._tgtPath = parse.getPathParts(opts.targetPath);
            if (this._tgtPath.length < 1)
                throw new Error(strUtils.format(lang_10.ERRS.ERR_BIND_TGTPATH_INVALID, opts.targetPath));
            this._srcFixed = (!!opts.isSourceFixed);
            this._pathItems = {};
            this._objId = getNewID();
            this._srcEnd = null;
            this._tgtEnd = null;
            this._source = null;
            this._target = null;
            this._umask = 0;
            this._cntUtgt = 0;
            this._cntUSrc = 0;
            this._setTarget(opts.target);
            this._setSource(opts.source);
            this._update();
            var err_notif = utils.getErrorNotification(this._srcEnd);
            if (!!err_notif && err_notif.getIsHasErrors())
                this._onSrcErrChanged(err_notif);
        }
        Binding.prototype._update = function () {
            var umask = this._umask, MAX_REC = 3;
            var flag = 0;
            this._umask = 0;
            if (this._mode === 3) {
                if (!!(umask & 1)) {
                    flag = 1;
                }
            }
            else {
                if (!!(umask & 2)) {
                    flag = 2;
                }
                else if (!!(umask & 1) && (this._mode === 2)) {
                    flag = 1;
                }
            }
            switch (flag) {
                case 1:
                    if (this._cntUtgt === 0) {
                        if (this._cntUSrc < MAX_REC) {
                            this._cntUSrc += 1;
                            try {
                                this._updateSource();
                            }
                            finally {
                                this._cntUSrc -= 1;
                            }
                        }
                        else {
                            fn_reportMaxRec(0, this._source, this._target, this._srcPath.join("."), this._tgtPath.join("."));
                        }
                    }
                    break;
                case 2:
                    if (this._cntUSrc === 0) {
                        if (this._cntUtgt < MAX_REC) {
                            this._cntUtgt += 1;
                            try {
                                this._updateTarget();
                            }
                            finally {
                                this._cntUtgt -= 1;
                            }
                        }
                        else {
                            fn_reportMaxRec(1, this._source, this._target, this._srcPath.join("."), this._tgtPath.join("."));
                        }
                    }
                    break;
            }
        };
        Binding.prototype._onSrcErrChanged = function (err_notif, args) {
            var errors = [], tgt = this._tgtEnd, src = this._srcEnd, srcPath = this._srcPath;
            if (!!tgt && syschecks._isElView(tgt)) {
                if (!!src && srcPath.length > 0) {
                    var prop = srcPath[srcPath.length - 1];
                    errors = err_notif.getFieldErrors(prop);
                }
                tgt.validationErrors = errors;
            }
        };
        Binding.prototype._getTgtChangedFn = function (self, obj, prop, restPath, lvl) {
            var fn = function (sender, data) {
                var val = parse.resolveProp(obj, prop);
                if (restPath.length > 0) {
                    self._setPathItem(null, 1, lvl, restPath);
                }
                self._parseTgt(val, restPath, lvl);
                self._update();
            };
            return fn;
        };
        Binding.prototype._getSrcChangedFn = function (self, obj, prop, restPath, lvl) {
            var fn = function (sender, data) {
                var val = parse.resolveProp(obj, prop);
                if (restPath.length > 0) {
                    self._setPathItem(null, 0, lvl, restPath);
                }
                self._parseSrc(val, restPath, lvl);
                self._update();
            };
            return fn;
        };
        Binding.prototype._parseSrc = function (obj, path, lvl) {
            var self = this;
            self._srcEnd = null;
            if (path.length === 0) {
                self._srcEnd = obj;
            }
            else {
                self._parseSrc2(obj, path, lvl);
            }
            if (self._mode === 3) {
                if (!!self._srcEnd)
                    self._umask |= 1;
            }
            else {
                if (!!self._tgtEnd)
                    self._umask |= 2;
            }
        };
        Binding.prototype._parseSrc2 = function (obj, path, lvl) {
            var self = this, nextObj, isBaseObj = (!!obj && syschecks._isBaseObj(obj)), isValidProp;
            if (isBaseObj) {
                obj.addOnDestroyed(self._onSrcDestroyed, self._objId, self);
                self._setPathItem(obj, 0, lvl, path);
            }
            if (path.length > 1) {
                if (isBaseObj) {
                    obj.addOnPropertyChange(path[0], self._getSrcChangedFn(self, obj, path[0], path.slice(1), lvl + 1), self._objId);
                }
                if (!!obj) {
                    nextObj = parse.resolveProp(obj, path[0]);
                    if (!!nextObj) {
                        self._parseSrc2(nextObj, path.slice(1), lvl + 1);
                    }
                    else if (checks.isUndefined(nextObj)) {
                        fn_reportUnResolved(0, self.source, self._srcPath.join("."), path[0]);
                    }
                }
                return;
            }
            if (!!obj && path.length === 1) {
                isValidProp = true;
                if (debug.isDebugging())
                    isValidProp = isBaseObj ? obj._isHasProp(path[0]) : checks.isHasProp(obj, path[0]);
                if (isValidProp) {
                    var updateOnChange = isBaseObj && (self._mode === 1 || self._mode === 2);
                    if (updateOnChange) {
                        obj.addOnPropertyChange(path[0], function () {
                            if (!!self._tgtEnd) {
                                self._umask |= 2;
                                self._update();
                            }
                        }, self._objId);
                    }
                    var err_notif = utils.getErrorNotification(obj);
                    if (!!err_notif) {
                        err_notif.addOnErrorsChanged(self._onSrcErrChanged, self._objId, self);
                    }
                    self._srcEnd = obj;
                }
                else {
                    fn_reportUnResolved(0, self.source, self._srcPath.join("."), path[0]);
                }
            }
        };
        Binding.prototype._parseTgt = function (obj, path, lvl) {
            var self = this;
            self._tgtEnd = null;
            if (path.length === 0) {
                self._tgtEnd = obj;
            }
            else {
                self._parseTgt2(obj, path, lvl);
            }
            if (self._mode === 3) {
                if (!!self._srcEnd)
                    this._umask |= 1;
            }
            else {
                if (!!self._tgtEnd)
                    this._umask |= 2;
            }
        };
        Binding.prototype._parseTgt2 = function (obj, path, lvl) {
            var self = this, nextObj, isBaseObj = syschecks._isBaseObj(obj), isValidProp = false;
            if (isBaseObj) {
                obj.addOnDestroyed(self._onTgtDestroyed, self._objId, self);
                self._setPathItem(obj, 1, lvl, path);
            }
            if (path.length > 1) {
                if (isBaseObj) {
                    obj.addOnPropertyChange(path[0], self._getTgtChangedFn(self, obj, path[0], path.slice(1), lvl + 1), self._objId);
                }
                if (!!obj) {
                    nextObj = parse.resolveProp(obj, path[0]);
                    if (!!nextObj) {
                        self._parseTgt2(nextObj, path.slice(1), lvl + 1);
                    }
                    else if (checks.isUndefined(nextObj)) {
                        fn_reportUnResolved(1, self.target, self._tgtPath.join("."), path[0]);
                    }
                }
                return;
            }
            if (!!obj && path.length === 1) {
                isValidProp = true;
                if (debug.isDebugging()) {
                    isValidProp = isBaseObj ? obj._isHasProp(path[0]) : checks.isHasProp(obj, path[0]);
                }
                if (isValidProp) {
                    var updateOnChange = isBaseObj && (self._mode === 2 || self._mode === 3);
                    if (updateOnChange) {
                        obj.addOnPropertyChange(path[0], function () {
                            if (!!self._srcEnd) {
                                self._umask |= 1;
                                self._update();
                            }
                        }, self._objId);
                    }
                    self._tgtEnd = obj;
                }
                else {
                    fn_reportUnResolved(1, self.target, self._tgtPath.join("."), path[0]);
                }
            }
        };
        Binding.prototype._setPathItem = function (newObj, bindingTo, lvl, path) {
            var oldObj, key, len = lvl + path.length;
            for (var i = lvl; i < len; i += 1) {
                switch (bindingTo) {
                    case 0:
                        key = "s" + i;
                        break;
                    case 1:
                        key = "t" + i;
                        break;
                    default:
                        throw new Error(strUtils.format(lang_10.ERRS.ERR_PARAM_INVALID, "bindingTo", bindingTo));
                }
                oldObj = this._pathItems[key];
                if (!!oldObj) {
                    this._cleanUp(oldObj);
                    delete this._pathItems[key];
                }
                if (!!newObj && i === lvl) {
                    this._pathItems[key] = newObj;
                }
            }
        };
        Binding.prototype._cleanUp = function (obj) {
            if (!!obj) {
                obj.removeNSHandlers(this._objId);
                var err_notif = utils.getErrorNotification(obj);
                if (!!err_notif) {
                    err_notif.removeOnErrorsChanged(this._objId);
                }
            }
        };
        Binding.prototype._onTgtDestroyed = function (sender, args) {
            if (this.getIsDestroyCalled())
                return;
            this._setTarget(null);
            this._update();
        };
        Binding.prototype._onSrcDestroyed = function (sender, args) {
            var self = this;
            if (self.getIsDestroyCalled())
                return;
            if (sender === self.source) {
                self._setSource(null);
                self._update();
            }
            else {
                self._setPathItem(null, 0, 0, self._srcPath);
                setTimeout(function () {
                    if (self.getIsDestroyCalled())
                        return;
                    self._parseSrc(self.source, self._srcPath, 0);
                    self._update();
                }, 0);
            }
        };
        Binding.prototype._updateTarget = function (sender, args) {
            if (this.getIsDestroyCalled())
                return;
            try {
                if (!this._converter)
                    this.targetValue = this.sourceValue;
                else
                    this.targetValue = this._converter.convertToTarget(this.sourceValue, this._converterParam, this._srcEnd);
            }
            catch (ex) {
                utils.err.reThrow(ex, this.handleError(ex, this));
            }
        };
        Binding.prototype._updateSource = function (sender, args) {
            if (this.getIsDestroyCalled())
                return;
            try {
                if (!this._converter)
                    this.sourceValue = this.targetValue;
                else
                    this.sourceValue = this._converter.convertToSource(this.targetValue, this._converterParam, this._srcEnd);
            }
            catch (ex) {
                if (!syschecks._isValidationError(ex) || !syschecks._isElView(this._tgtEnd)) {
                    utils.err.reThrow(ex, this.handleError(ex, this));
                }
            }
        };
        Binding.prototype._setTarget = function (value) {
            if (!!this._state) {
                this._state.target = value;
                return;
            }
            if (this._target !== value) {
                if (!!this._tgtEnd && !(this._mode === 3)) {
                    this._cntUtgt += 1;
                    try {
                        this.targetValue = null;
                    }
                    finally {
                        this._cntUtgt -= 1;
                        if (this._cntUtgt < 0)
                            throw new Error("Invalid operation: this._cntUtgt = " + this._cntUtgt);
                    }
                }
                this._setPathItem(null, 1, 0, this._tgtPath);
                if (!!value && !syschecks._isBaseObj(value))
                    throw new Error(lang_10.ERRS.ERR_BIND_TARGET_INVALID);
                this._target = value;
                this._parseTgt(this._target, this._tgtPath, 0);
                if (!!this._target && !this._tgtEnd)
                    throw new Error(strUtils.format(lang_10.ERRS.ERR_BIND_TGTPATH_INVALID, this._tgtPath.join(".")));
            }
        };
        Binding.prototype._setSource = function (value) {
            if (!!this._state) {
                this._state.source = value;
                return;
            }
            if (this._source !== value) {
                if (!!this._srcEnd && (this._mode === 3)) {
                    this._cntUSrc += 1;
                    try {
                        this.sourceValue = null;
                    }
                    finally {
                        this._cntUSrc -= 1;
                        if (this._cntUSrc < 0)
                            throw new Error("Invalid operation: this._cntUSrc = " + this._cntUSrc);
                    }
                }
                this._setPathItem(null, 0, 0, this._srcPath);
                this._source = value;
                this._parseSrc(this._source, this._srcPath, 0);
            }
        };
        Binding.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            var self = this;
            coreUtils.iterateIndexer(this._pathItems, function (key, old) {
                self._cleanUp(old);
            });
            this._pathItems = {};
            this._setSource(null);
            this._setTarget(null);
            this._state = null;
            this._converter = null;
            this._converterParam = null;
            this._srcPath = null;
            this._tgtPath = null;
            this._srcEnd = null;
            this._tgtEnd = null;
            this._source = null;
            this._target = null;
            this._umask = 0;
            _super.prototype.destroy.call(this);
        };
        Binding.prototype.toString = function () {
            return "Binding";
        };
        Object.defineProperty(Binding.prototype, "uniqueID", {
            get: function () {
                return this._objId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "target", {
            get: function () { return this._target; },
            set: function (v) {
                this._setTarget(v);
                this._update();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "source", {
            get: function () { return this._source; },
            set: function (v) {
                this._setSource(v);
                this._update();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "targetPath", {
            get: function () { return this._tgtPath; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "sourcePath", {
            get: function () { return this._srcPath; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "sourceValue", {
            get: function () {
                var res = null;
                if (this._srcPath.length === 0)
                    res = this._srcEnd;
                if (!!this._srcEnd) {
                    var prop = this._srcPath[this._srcPath.length - 1];
                    res = parse.resolveProp(this._srcEnd, prop);
                }
                return res;
            },
            set: function (v) {
                if (this._srcPath.length === 0 || !this._srcEnd || v === checks.undefined)
                    return;
                var prop = this._srcPath[this._srcPath.length - 1];
                parse.setPropertyValue(this._srcEnd, prop, v);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "targetValue", {
            get: function () {
                var res = null;
                if (!!this._tgtEnd) {
                    var prop = this._tgtPath[this._tgtPath.length - 1];
                    res = parse.resolveProp(this._tgtEnd, prop);
                }
                return res;
            },
            set: function (v) {
                if (this._tgtPath.length === 0 || !this._tgtEnd || v === checks.undefined)
                    return;
                var prop = this._tgtPath[this._tgtPath.length - 1];
                parse.setPropertyValue(this._tgtEnd, prop, v);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "mode", {
            get: function () { return this._mode; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "converter", {
            get: function () { return this._converter; },
            set: function (v) { this._converter = v; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "converterParam", {
            get: function () { return this._converterParam; },
            set: function (v) { this._converterParam = v; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "isSourceFixed", {
            get: function () { return this._srcFixed; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "isDisabled", {
            get: function () { return !!this._state; },
            set: function (v) {
                var s;
                v = !!v;
                if (this.isDisabled !== v) {
                    if (v) {
                        s = { source: this._source, target: this._target };
                        try {
                            this.target = null;
                            this.source = null;
                        }
                        finally {
                            this._state = s;
                        }
                    }
                    else {
                        s = this._state;
                        this._state = null;
                        this._setTarget(s.target);
                        this._setSource(s.source);
                        this._update();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        return Binding;
    }(object_10.BaseObject));
    exports.Binding = Binding;
});
define("jriapp_content/basic", ["require", "exports", "jriapp_core/bootstrap", "jriapp_core/object", "jriapp_core/binding", "jriapp_utils/lifetime", "jriapp_utils/utils", "jriapp_content/int"], function (require, exports, bootstrap_5, object_11, binding_1, lifetime_1, utils_5, int_1) {
    "use strict";
    var utils = utils_5.Utils, dom = utils.dom, $ = dom.$, doc = utils.dom.document, coreUtils = utils.core, checks = utils.check, boot = bootstrap_5.bootstrap;
    var BasicContent = (function (_super) {
        __extends(BasicContent, _super);
        function BasicContent(options) {
            _super.call(this);
            options = coreUtils.extend({
                parentEl: null,
                contentOptions: null,
                dataContext: null,
                isEditing: false
            }, options);
            this._el = null;
            this._parentEl = options.parentEl;
            this._isEditing = !!options.isEditing;
            this._dataContext = options.dataContext;
            this._options = options.contentOptions;
            this._isReadOnly = !!this._options.readOnly;
            this._lfScope = null;
            this._target = null;
            dom.addClass([this._parentEl], int_1.css.content);
            this.init();
            this.render();
        }
        BasicContent.prototype.init = function () { };
        BasicContent.prototype.updateCss = function () {
            var displayInfo = this._options.displayInfo, el = this._parentEl, fieldInfo = this.getFieldInfo();
            if (this._isEditing && this.getIsCanBeEdited()) {
                if (!!displayInfo) {
                    if (!!displayInfo.editCss) {
                        dom.addClass([el], displayInfo.editCss);
                    }
                    if (!!displayInfo.displayCss) {
                        dom.removeClass([el], displayInfo.displayCss);
                    }
                }
                if (!!fieldInfo && !fieldInfo.isNullable) {
                    dom.addClass([el], int_1.css.required);
                }
            }
            else {
                if (!!displayInfo) {
                    if (!!displayInfo.displayCss) {
                        dom.addClass([el], displayInfo.displayCss);
                    }
                    if (!!displayInfo.editCss) {
                        dom.removeClass([el], displayInfo.editCss);
                    }
                }
                if (!!fieldInfo && !fieldInfo.isNullable) {
                    dom.removeClass([el], int_1.css.required);
                }
            }
        };
        BasicContent.prototype.getIsCanBeEdited = function () {
            if (this._isReadOnly)
                return false;
            var finf = this.getFieldInfo();
            if (!finf)
                return false;
            var editable = utils.getEditable(this._dataContext);
            return !!editable && !finf.isReadOnly && finf.fieldType !== 2;
        };
        BasicContent.prototype.createTargetElement = function () {
            var el, info = { name: null, options: null };
            if (this._isEditing && this.getIsCanBeEdited()) {
                el = doc.createElement("input");
                el.setAttribute("type", "text");
                info.options = this._options.options;
            }
            else {
                el = doc.createElement("span");
            }
            this.updateCss();
            this._el = el;
            return this.getElementView(this._el, info);
        };
        BasicContent.prototype.getBindingOption = function (bindingInfo, target, dataContext, targetPath) {
            var options = binding_1.getBindingOptions(bindingInfo, target, dataContext);
            if (this.isEditing && this.getIsCanBeEdited())
                options.mode = 2;
            else
                options.mode = 1;
            if (!!targetPath)
                options.targetPath = targetPath;
            return options;
        };
        BasicContent.prototype.getBindings = function () {
            if (!this._lfScope)
                return [];
            var arr = this._lfScope.getObjs(), res = [];
            for (var i = 0, len = arr.length; i < len; i += 1) {
                if (utils.sys._isBinding(arr[i]))
                    res.push(arr[i]);
            }
            return res;
        };
        BasicContent.prototype.updateBindingSource = function () {
            var binding, bindings = this.getBindings();
            for (var i = 0, len = bindings.length; i < len; i += 1) {
                binding = bindings[i];
                if (!binding.isSourceFixed)
                    binding.source = this._dataContext;
            }
        };
        BasicContent.prototype.cleanUp = function () {
            if (!!this._lfScope) {
                this._lfScope.destroy();
                this._lfScope = null;
            }
            if (!!this._el) {
                dom.removeNode(this._el);
                this._el = null;
            }
            this._target = null;
        };
        BasicContent.prototype.getElementView = function (el, view_info) {
            var factory = boot.getApp().viewFactory, elView = factory.store.getElView(el);
            if (!!elView)
                return elView;
            view_info.options = coreUtils.merge({ el: el }, view_info.options);
            return factory.createElView(view_info);
        };
        BasicContent.prototype.getFieldInfo = function () {
            return this._options.fieldInfo;
        };
        BasicContent.prototype.render = function () {
            try {
                this.cleanUp();
                var bindingInfo = this._options.bindingInfo;
                if (!!bindingInfo) {
                    this._target = this.createTargetElement();
                    this._lfScope = new lifetime_1.LifeTimeScope();
                    if (!!this._target)
                        this._lfScope.addObj(this._target);
                    var options = this.getBindingOption(bindingInfo, this._target, this._dataContext, "value");
                    this._parentEl.appendChild(this._el);
                    this._lfScope.addObj(this.app.bind(options));
                }
            }
            catch (ex) {
                utils.err.reThrow(ex, this.handleError(ex, this));
            }
        };
        BasicContent.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            var displayInfo = this._options.displayInfo;
            dom.removeClass([this._parentEl], int_1.css.content);
            dom.removeClass([this._parentEl], int_1.css.required);
            if (!!displayInfo && !!displayInfo.displayCss) {
                dom.removeClass([this._parentEl], displayInfo.displayCss);
            }
            if (!!displayInfo && !!displayInfo.editCss) {
                dom.removeClass([this._parentEl], displayInfo.editCss);
            }
            this.cleanUp();
            this._parentEl = null;
            this._dataContext = null;
            this._options = null;
            _super.prototype.destroy.call(this);
        };
        BasicContent.prototype.toString = function () {
            return "BindingContent";
        };
        Object.defineProperty(BasicContent.prototype, "parentEl", {
            get: function () { return this._parentEl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicContent.prototype, "target", {
            get: function () { return this._target; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicContent.prototype, "isEditing", {
            get: function () { return this._isEditing; },
            set: function (v) {
                if (this._isEditing !== v) {
                    this._isEditing = v;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicContent.prototype, "dataContext", {
            get: function () { return this._dataContext; },
            set: function (v) {
                if (this._dataContext !== v) {
                    this._dataContext = v;
                    this.updateBindingSource();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicContent.prototype, "app", {
            get: function () {
                return boot.getApp();
            },
            enumerable: true,
            configurable: true
        });
        return BasicContent;
    }(object_11.BaseObject));
    exports.BasicContent = BasicContent;
});
define("jriapp_elview/command", ["require", "exports", "jriapp_utils/utils", "jriapp_elview/elview"], function (require, exports, utils_6, elview_1) {
    "use strict";
    var utils = utils_6.Utils, dom = utils.dom, checks = utils.check;
    var CommandElView = (function (_super) {
        __extends(CommandElView, _super);
        function CommandElView(options) {
            _super.call(this, options);
            this._command = null;
            this._commandParam = null;
            this._preventDefault = !!options.preventDefault;
            this._stopPropagation = !!options.stopPropagation;
            this._disabled = ("disabled" in this.el) ? checks.undefined : false;
            dom.setClass(this.$el.toArray(), elview_1.css.disabled, this.isEnabled);
        }
        CommandElView.prototype._onCanExecuteChanged = function (cmd, args) {
            this.isEnabled = cmd.canExecute(this, this._commandParam);
        };
        CommandElView.prototype._onCommandChanged = function () {
            this.raisePropertyChanged(elview_1.PROP_NAME.command);
        };
        CommandElView.prototype.invokeCommand = function (args, isAsync) {
            var self = this;
            args = args || this._commandParam || {};
            if (!!self.command && self.command.canExecute(self, args)) {
                if (isAsync) {
                    setTimeout(function () {
                        if (self.getIsDestroyCalled())
                            return;
                        try {
                            if (!!self.command && self.command.canExecute(self, args))
                                self.command.execute(self, args);
                        }
                        catch (ex) {
                            self.handleError(ex, self);
                        }
                    }, 0);
                }
                else {
                    self.command.execute(self, args);
                }
            }
        };
        CommandElView.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            if (checks.isBaseObject(this._command)) {
                this._command.removeNSHandlers(this.uniqueID);
            }
            this.command = null;
            this._commandParam = null;
            _super.prototype.destroy.call(this);
        };
        CommandElView.prototype.toString = function () {
            return "CommandElView";
        };
        Object.defineProperty(CommandElView.prototype, "isEnabled", {
            get: function () {
                var el = this.el;
                if (this._disabled === checks.undefined)
                    return !el.disabled;
                else
                    return !this._disabled;
            },
            set: function (v) {
                var el = this.el;
                if (v !== this.isEnabled) {
                    if (this._disabled === checks.undefined)
                        el.disabled = !v;
                    else
                        this._disabled = !v;
                    dom.setClass(this.$el.toArray(), elview_1.css.disabled, !!v);
                    this.raisePropertyChanged(elview_1.PROP_NAME.isEnabled);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CommandElView.prototype, "command", {
            get: function () { return this._command; },
            set: function (v) {
                var self = this;
                if (v !== this._command) {
                    if (checks.isBaseObject(this._command)) {
                        this._command.removeNSHandlers(this.uniqueID);
                    }
                    this._command = v;
                    if (!!this._command) {
                        this._command.addOnCanExecuteChanged(self._onCanExecuteChanged, this.uniqueID, self);
                        self.isEnabled = this._command.canExecute(self, this.commandParam || {});
                    }
                    else {
                        self.isEnabled = false;
                    }
                    this._onCommandChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CommandElView.prototype, "commandParam", {
            get: function () { return this._commandParam; },
            set: function (v) {
                if (v !== this._commandParam) {
                    this._commandParam = v;
                    this.raisePropertyChanged(elview_1.PROP_NAME.commandParam);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CommandElView.prototype, "preventDefault", {
            get: function () {
                return this._preventDefault;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CommandElView.prototype, "stopPropagation", {
            get: function () {
                return this._stopPropagation;
            },
            enumerable: true,
            configurable: true
        });
        return CommandElView;
    }(elview_1.BaseElView));
    exports.CommandElView = CommandElView;
});
define("jriapp_core/template", ["require", "exports", "jriapp_core/const", "jriapp_utils/syschecks", "jriapp_utils/checks", "jriapp_utils/strutils", "jriapp_utils/arrhelper", "jriapp_utils/coreutils", "jriapp_utils/dom", "jriapp_utils/async", "jriapp_core/lang", "jriapp_core/object", "jriapp_core/bootstrap", "jriapp_elview/command"], function (require, exports, const_5, syschecks_7, checks_10, strUtils_7, arrhelper_6, coreutils_12, dom_6, async_6, lang_11, object_12, bootstrap_6, command_1) {
    "use strict";
    var defer = async_6.AsyncUtils, dom = dom_6.DomUtils, $ = dom.$, doc = dom.document, coreUtils = coreutils_12.CoreUtils, checks = checks_10.Checks, strUtils = strUtils_7.StringUtils, arrHelper = arrhelper_6.ArrayHelper, syschecks = syschecks_7.SysChecks, boot = bootstrap_6.bootstrap;
    exports.css = {
        templateContainer: "ria-template-container",
        templateError: "ria-template-error"
    };
    syschecks_7.SysChecks._isTemplateElView = function (obj) {
        return !!obj && obj instanceof TemplateElView;
    };
    var PROP_NAME = {
        dataContext: "dataContext",
        templateID: "templateID",
        template: "template",
        isEnabled: "isEnabled"
    };
    function createTemplate(dataContext, templEvents) {
        var options = {
            dataContext: dataContext,
            templEvents: templEvents
        };
        return new Template(options);
    }
    exports.createTemplate = createTemplate;
    var Template = (function (_super) {
        __extends(Template, _super);
        function Template(options) {
            _super.call(this);
            this._dataContext = options.dataContext;
            this._templEvents = options.templEvents;
            this._loadedElem = null;
            this._lfTime = null;
            this._templateID = null;
            this._templElView = null;
            this._el = doc.createElement("div");
            this._el.className = exports.css.templateContainer;
        }
        Template.prototype._getBindings = function () {
            if (!this._lfTime)
                return [];
            var arr = this._lfTime.getObjs(), res = [];
            for (var i = 0, len = arr.length; i < len; i += 1) {
                if (syschecks._isBinding(arr[i]))
                    res.push(arr[i]);
            }
            return res;
        };
        Template.prototype._getElViews = function () {
            if (!this._lfTime)
                return [];
            var arr = this._lfTime.getObjs(), res = [];
            for (var i = 0, len = arr.length; i < len; i += 1) {
                if (syschecks._isElView(arr[i]))
                    res.push(arr[i]);
            }
            return res;
        };
        Template.prototype._getTemplateElView = function () {
            if (!this._lfTime)
                return null;
            var arr = this._getElViews();
            for (var i = 0, j = arr.length; i < j; i += 1) {
                if (syschecks_7.SysChecks._isTemplateElView(arr[i])) {
                    return arr[i];
                }
            }
            return null;
        };
        Template.prototype._loadAsync = function (name) {
            var self = this, fn_loader = this.app.getTemplateLoader(name), promise;
            if (checks.isFunc(fn_loader) && checks.isThenable(promise = fn_loader())) {
                return promise.then(function (html) {
                    var tmpDiv = doc.createElement("div");
                    tmpDiv.innerHTML = html;
                    tmpDiv = tmpDiv.firstElementChild;
                    return tmpDiv;
                }, function (err) {
                    if (!!err && !!err.message)
                        throw err;
                    else
                        throw new Error(strUtils.format(lang_11.ERRS.ERR_TEMPLATE_ID_INVALID, self.templateID));
                });
            }
            else {
                var deferred = defer.createDeferred();
                return deferred.reject(new Error(strUtils.format(lang_11.ERRS.ERR_TEMPLATE_ID_INVALID, self.templateID)));
            }
        };
        Template.prototype._loadTemplate = function () {
            var self = this, id = self.templateID, templateEl = self.el;
            try {
                if (!!self._loadedElem)
                    self._unloadTemplate();
                if (!!id) {
                    var loadPromise = self._loadAsync(id), bindPromise = loadPromise.then(function (loadedEl) {
                        return self._dataBind(templateEl, loadedEl);
                    });
                    bindPromise.fail(function (err) {
                        if (self.getIsDestroyCalled())
                            return;
                        self._onFail(templateEl, err);
                    });
                }
            }
            catch (ex) {
                self._onFail(templateEl, ex);
            }
        };
        Template.prototype._onLoading = function () {
            if (!!this._templEvents) {
                this._templEvents.templateLoading(this);
            }
        };
        Template.prototype._onLoaded = function (error) {
            this._templElView = this._getTemplateElView();
            if (!!this._templEvents) {
                this._templEvents.templateLoaded(this, error);
            }
            if (!!this._templElView) {
                this._templElView.templateLoaded(this, error);
            }
        };
        Template.prototype._unloadTemplate = function () {
            try {
                if (!!this._templEvents) {
                    this._templEvents.templateUnLoading(this);
                }
                if (!!this._templElView) {
                    this._templElView.templateUnLoading(this);
                }
            }
            finally {
                this._cleanUp();
            }
        };
        Template.prototype._dataBind = function (templateEl, loadedEl) {
            var self = this;
            if (self.getIsDestroyCalled())
                coreutils_12.ERROR.abort();
            if (!loadedEl)
                throw new Error(strUtils.format(lang_11.ERRS.ERR_TEMPLATE_ID_INVALID, self.templateID));
            if (!!self._loadedElem) {
                self._unloadTemplate();
            }
            dom.setClass([templateEl], exports.css.templateError, true);
            self._loadedElem = loadedEl;
            self._onLoading();
            templateEl.appendChild(loadedEl);
            var promise = self.app._getInternal().bindTemplateElements(loadedEl);
            return promise.then(function (lftm) {
                if (self.getIsDestroyCalled()) {
                    lftm.destroy();
                    coreutils_12.ERROR.abort();
                }
                self._lfTime = lftm;
                self._updateBindingSource();
                self._onLoaded(null);
                return loadedEl;
            });
        };
        Template.prototype._onFail = function (templateEl, err) {
            var self = this;
            if (self.getIsDestroyCalled())
                return;
            self._onLoaded(err);
            if (coreutils_12.ERROR.checkIsAbort(err)) {
                return;
            }
            dom.setClass([templateEl], exports.css.templateError, false);
            var ex;
            if (!!err) {
                if (!!err.message) {
                    ex = err;
                }
                else if (!!err.statusText) {
                    ex = new Error(err.statusText);
                }
                else {
                    ex = new Error('error: ' + err);
                }
            }
            if (!ex)
                ex = new Error(strUtils.format(lang_11.ERRS.ERR_TEMPLATE_ID_INVALID, self.templateID));
            self.handleError(ex, self);
        };
        Template.prototype._updateBindingSource = function () {
            var i, len, binding, bindings = this._getBindings();
            for (i = 0, len = bindings.length; i < len; i += 1) {
                binding = bindings[i];
                if (!binding.isSourceFixed)
                    binding.source = this.dataContext;
            }
        };
        Template.prototype._cleanUp = function () {
            if (!!this._lfTime) {
                this._lfTime.destroy();
                this._lfTime = null;
            }
            this._templElView = null;
            if (!!this._loadedElem) {
                $(this._loadedElem).remove();
                this._loadedElem = null;
            }
        };
        Template.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            this._unloadTemplate();
            if (!!this._el) {
                $(this._el).remove();
                this._el = null;
            }
            this._dataContext = null;
            this._templEvents = null;
            _super.prototype.destroy.call(this);
        };
        Template.prototype.findElByDataName = function (name) {
            return arrHelper.fromList(this._el.querySelectorAll(["*[", const_5.DATA_ATTR.DATA_NAME, '="', name, '"]'].join("")));
        };
        Template.prototype.findElViewsByDataName = function (name) {
            var self = this, els = this.findElByDataName(name), res = [], viewStore = boot.getApp().viewFactory.store;
            els.forEach(function (el) {
                var elView = viewStore.getElView(el);
                if (!!elView)
                    res.push(elView);
            });
            return res;
        };
        Template.prototype.toString = function () {
            return "ITemplate";
        };
        Object.defineProperty(Template.prototype, "loadedElem", {
            get: function () {
                return this._loadedElem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Template.prototype, "dataContext", {
            get: function () { return this._dataContext; },
            set: function (v) {
                if (this._dataContext !== v) {
                    this._dataContext = v;
                    this._updateBindingSource();
                    this.raisePropertyChanged(PROP_NAME.dataContext);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Template.prototype, "templateID", {
            get: function () { return this._templateID; },
            set: function (v) {
                if (this._templateID !== v) {
                    this._templateID = v;
                    this._loadTemplate();
                    this.raisePropertyChanged(PROP_NAME.templateID);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Template.prototype, "el", {
            get: function () { return this._el; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Template.prototype, "app", {
            get: function () {
                return bootstrap_6.bootstrap.getApp();
            },
            enumerable: true,
            configurable: true
        });
        return Template;
    }(object_12.BaseObject));
    var TemplateElView = (function (_super) {
        __extends(TemplateElView, _super);
        function TemplateElView(options) {
            _super.call(this, options);
            this._template = null;
            this._isEnabled = true;
        }
        TemplateElView.prototype.templateLoading = function (template) {
        };
        TemplateElView.prototype.templateLoaded = function (template, error) {
            if (!!error)
                return;
            var self = this;
            try {
                self._template = template;
                var args = { template: template, isLoaded: true };
                self.invokeCommand(args, false);
                this.raisePropertyChanged(PROP_NAME.template);
            }
            catch (ex) {
                this.handleError(ex, this);
                coreutils_12.ERROR.throwDummy(ex);
            }
        };
        TemplateElView.prototype.templateUnLoading = function (template) {
            var self = this;
            try {
                var args = { template: template, isLoaded: false };
                self.invokeCommand(args, false);
            }
            catch (ex) {
                this.handleError(ex, this);
            }
            finally {
                self._template = null;
            }
            this.raisePropertyChanged(PROP_NAME.template);
        };
        TemplateElView.prototype.toString = function () {
            return "TemplateElView";
        };
        Object.defineProperty(TemplateElView.prototype, "isEnabled", {
            get: function () { return this._isEnabled; },
            set: function (v) {
                if (this._isEnabled !== v) {
                    this._isEnabled = v;
                    this.raisePropertyChanged(PROP_NAME.isEnabled);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateElView.prototype, "template", {
            get: function () {
                return this._template;
            },
            enumerable: true,
            configurable: true
        });
        return TemplateElView;
    }(command_1.CommandElView));
    exports.TemplateElView = TemplateElView;
    ;
    boot.registerElView("template", TemplateElView);
});
define("jriapp_content/template", ["require", "exports", "jriapp_core/bootstrap", "jriapp_core/object", "jriapp_core/template", "jriapp_core/lang", "jriapp_utils/coreutils", "jriapp_utils/utils", "jriapp_content/int"], function (require, exports, bootstrap_7, object_13, template_1, lang_12, coreutils_13, utils_7, int_2) {
    "use strict";
    var utils = utils_7.Utils, coreUtils = utils.core, dom = utils.dom, $ = dom.$, boot = bootstrap_7.bootstrap;
    var TemplateContent = (function (_super) {
        __extends(TemplateContent, _super);
        function TemplateContent(options) {
            _super.call(this);
            options = coreUtils.extend({
                parentEl: null,
                contentOptions: null,
                dataContext: null,
                isEditing: false,
                appName: null
            }, options);
            this._templateID = null;
            this._parentEl = options.parentEl;
            this._isEditing = options.isEditing;
            this._dataContext = options.dataContext;
            this._templateInfo = options.contentOptions.templateInfo;
            this._template = null;
            dom.addClass([this._parentEl], int_2.css.content);
            this.render();
        }
        TemplateContent.prototype.getTemplateID = function () {
            if (!this._templateInfo) {
                throw new Error(lang_12.ERRS.ERR_TEMPLATE_ID_INVALID);
            }
            var info = this._templateInfo, id = info.displayID;
            if (this._isEditing && !!info.editID) {
                id = info.editID;
            }
            if (!id) {
                id = info.editID;
            }
            if (!id)
                throw new Error(lang_12.ERRS.ERR_TEMPLATE_ID_INVALID);
            return id;
        };
        TemplateContent.prototype.createTemplate = function () {
            var template = template_1.createTemplate(this._dataContext);
            template.templateID = this._templateID;
            return template;
        };
        TemplateContent.prototype.render = function () {
            try {
                var id = this.getTemplateID();
                if (this._templateID !== id) {
                    this.cleanUp();
                    this._templateID = id;
                    this._template = this.createTemplate();
                    this._parentEl.appendChild(this._template.el);
                }
            }
            catch (ex) {
                coreutils_13.ERROR.reThrow(ex, this.handleError(ex, this));
            }
        };
        TemplateContent.prototype.cleanUp = function () {
            if (!!this._template) {
                this._template.destroy();
                this._template = null;
                this._templateID = null;
            }
        };
        TemplateContent.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            dom.removeClass([this._parentEl], int_2.css.content);
            this.cleanUp();
            this._parentEl = null;
            this._dataContext = null;
            this._templateInfo = null;
            _super.prototype.destroy.call(this);
        };
        TemplateContent.prototype.toString = function () {
            return "TemplateContent";
        };
        Object.defineProperty(TemplateContent.prototype, "parentEl", {
            get: function () { return this._parentEl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateContent.prototype, "template", {
            get: function () { return this._template; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateContent.prototype, "isEditing", {
            get: function () { return this._isEditing; },
            set: function (v) {
                if (this._isEditing !== v) {
                    this._isEditing = v;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateContent.prototype, "dataContext", {
            get: function () { return this._dataContext; },
            set: function (v) {
                if (this._dataContext !== v) {
                    this._dataContext = v;
                    if (!!this._template) {
                        this._template.dataContext = this._dataContext;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateContent.prototype, "app", {
            get: function () { return boot.getApp(); },
            enumerable: true,
            configurable: true
        });
        return TemplateContent;
    }(object_13.BaseObject));
    exports.TemplateContent = TemplateContent;
});
define("jriapp_elview/input", ["require", "exports", "jriapp_elview/elview"], function (require, exports, elview_2) {
    "use strict";
    var InputElView = (function (_super) {
        __extends(InputElView, _super);
        function InputElView() {
            _super.apply(this, arguments);
        }
        InputElView.prototype.toString = function () {
            return "InputElView";
        };
        Object.defineProperty(InputElView.prototype, "isEnabled", {
            get: function () {
                var el = this.el;
                return !el.disabled;
            },
            set: function (v) {
                var el = this.el;
                if (v !== this.isEnabled) {
                    el.disabled = !v;
                    this.raisePropertyChanged(elview_2.PROP_NAME.isEnabled);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputElView.prototype, "value", {
            get: function () {
                return this.$el.val();
            },
            set: function (v) {
                var x = this.value;
                var str = "" + v;
                v = (v === null) ? "" : str;
                if (x !== v) {
                    this.$el.val(v);
                    this.raisePropertyChanged(elview_2.PROP_NAME.value);
                }
            },
            enumerable: true,
            configurable: true
        });
        return InputElView;
    }(elview_2.BaseElView));
    exports.InputElView = InputElView;
});
define("jriapp_elview/textbox", ["require", "exports", "jriapp_utils/utils", "jriapp_core/bootstrap", "jriapp_elview/elview", "jriapp_elview/input"], function (require, exports, utils_8, bootstrap_8, elview_3, input_1) {
    "use strict";
    var utils = utils_8.Utils, $ = utils.dom.$;
    var TXTBOX_EVENTS = {
        keypress: "keypress"
    };
    var TextBoxElView = (function (_super) {
        __extends(TextBoxElView, _super);
        function TextBoxElView(options) {
            _super.call(this, options);
            var self = this;
            var $el = this.$el;
            $el.on("change." + this.uniqueID, function (e) {
                e.stopPropagation();
                self.raisePropertyChanged(elview_3.PROP_NAME.value);
            });
            $el.on("keypress." + this.uniqueID, function (e) {
                e.stopPropagation();
                var args = { keyCode: e.which, value: e.target.value, isCancel: false };
                self.raiseEvent(TXTBOX_EVENTS.keypress, args);
                if (args.isCancel)
                    e.preventDefault();
            });
            if (!!options.updateOnKeyUp) {
                $el.on("keyup." + this.uniqueID, function (e) {
                    e.stopPropagation();
                    self.raisePropertyChanged(elview_3.PROP_NAME.value);
                });
            }
        }
        TextBoxElView.prototype._getEventNames = function () {
            var base_events = _super.prototype._getEventNames.call(this);
            return [TXTBOX_EVENTS.keypress].concat(base_events);
        };
        TextBoxElView.prototype.addOnKeyPress = function (fn, nmspace) {
            this._addHandler(TXTBOX_EVENTS.keypress, fn, nmspace);
        };
        TextBoxElView.prototype.removeOnKeyPress = function (nmspace) {
            this._removeHandler(TXTBOX_EVENTS.keypress, nmspace);
        };
        TextBoxElView.prototype.toString = function () {
            return "TextBoxElView";
        };
        Object.defineProperty(TextBoxElView.prototype, "color", {
            get: function () {
                var $el = this.$el;
                return $el.css(elview_3.css.color);
            },
            set: function (v) {
                var $el = this.$el;
                var x = $el.css(elview_3.css.color);
                if (v !== x) {
                    $el.css(elview_3.css.color, v);
                    this.raisePropertyChanged(elview_3.PROP_NAME.color);
                }
            },
            enumerable: true,
            configurable: true
        });
        return TextBoxElView;
    }(input_1.InputElView));
    exports.TextBoxElView = TextBoxElView;
    bootstrap_8.bootstrap.registerElView("input:text", TextBoxElView);
});
define("jriapp_content/string", ["require", "exports", "jriapp_elview/textbox", "jriapp_content/basic"], function (require, exports, textbox_1, basic_1) {
    "use strict";
    var StringContent = (function (_super) {
        __extends(StringContent, _super);
        function StringContent() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(StringContent.prototype, "_allowedKeys", {
            get: function () {
                if (!StringContent.__allowedKeys) {
                    StringContent.__allowedKeys = [0, 8, 127, 37, 39, 35, 36, 9, 27, 13];
                }
                return StringContent.__allowedKeys;
            },
            enumerable: true,
            configurable: true
        });
        StringContent.prototype.render = function () {
            _super.prototype.render.call(this);
            var self = this, fieldInfo = self.getFieldInfo();
            if (self._target instanceof textbox_1.TextBoxElView) {
                self._target.addOnKeyPress(function (sender, args) {
                    args.isCancel = !self.previewKeyPress(fieldInfo, args.keyCode, args.value);
                });
            }
        };
        StringContent.prototype.previewKeyPress = function (fieldInfo, keyCode, value) {
            if (this._allowedKeys.indexOf(keyCode) > -1)
                return true;
            return !(fieldInfo.maxLength > 0 && value.length >= fieldInfo.maxLength);
        };
        StringContent.prototype.toString = function () {
            return "StringContent";
        };
        StringContent.__allowedKeys = null;
        return StringContent;
    }(basic_1.BasicContent));
    exports.StringContent = StringContent;
});
define("jriapp_elview/textarea", ["require", "exports", "jriapp_utils/utils", "jriapp_core/bootstrap", "jriapp_elview/elview"], function (require, exports, utils_9, bootstrap_9, elview_4) {
    "use strict";
    var utils = utils_9.Utils, $ = utils.dom.$;
    var TXTAREA_EVENTS = {
        keypress: "keypress"
    };
    var TextAreaElView = (function (_super) {
        __extends(TextAreaElView, _super);
        function TextAreaElView(options) {
            _super.call(this, options);
            var self = this;
            if (!!options.wrap) {
                this.wrap = options.wrap;
            }
            var $el = this.$el;
            $el.on("change." + this.uniqueID, function (e) {
                e.stopPropagation();
                self.raisePropertyChanged(elview_4.PROP_NAME.value);
            });
            $el.on("keypress." + this.uniqueID, function (e) {
                e.stopPropagation();
                var args = { keyCode: e.which, value: e.target.value, isCancel: false };
                self.raiseEvent(TXTAREA_EVENTS.keypress, args);
                if (args.isCancel)
                    e.preventDefault();
            });
            if (!!options.updateOnKeyUp) {
                $el.on("keyup." + this.uniqueID, function (e) {
                    e.stopPropagation();
                    self.raisePropertyChanged(elview_4.PROP_NAME.value);
                });
            }
        }
        TextAreaElView.prototype._getEventNames = function () {
            var base_events = _super.prototype._getEventNames.call(this);
            return [TXTAREA_EVENTS.keypress].concat(base_events);
        };
        TextAreaElView.prototype.addOnKeyPress = function (fn, nmspace) {
            this._addHandler(TXTAREA_EVENTS.keypress, fn, nmspace);
        };
        TextAreaElView.prototype.removeOnKeyPress = function (nmspace) {
            this._removeHandler(TXTAREA_EVENTS.keypress, nmspace);
        };
        TextAreaElView.prototype.toString = function () {
            return "TextAreaElView";
        };
        Object.defineProperty(TextAreaElView.prototype, "value", {
            get: function () {
                return this.$el.val();
            },
            set: function (v) {
                var x = this.$el.val();
                var str = "" + v;
                v = (v === null) ? "" : str;
                if (x !== v) {
                    this.$el.val(v);
                    this.raisePropertyChanged(elview_4.PROP_NAME.value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextAreaElView.prototype, "isEnabled", {
            get: function () { return !this.$el.prop("disabled"); },
            set: function (v) {
                v = !!v;
                if (v !== this.isEnabled) {
                    this.$el.prop("disabled", !v);
                    this.raisePropertyChanged(elview_4.PROP_NAME.isEnabled);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextAreaElView.prototype, "wrap", {
            get: function () {
                return this.$el.prop("wrap");
            },
            set: function (v) {
                var x = this.wrap;
                if (x !== v) {
                    this.$el.prop("wrap", v);
                    this.raisePropertyChanged(elview_4.PROP_NAME.wrap);
                }
            },
            enumerable: true,
            configurable: true
        });
        return TextAreaElView;
    }(elview_4.BaseElView));
    exports.TextAreaElView = TextAreaElView;
    bootstrap_9.bootstrap.registerElView("textarea", TextAreaElView);
});
define("jriapp_content/multyline", ["require", "exports", "jriapp_core/lang", "jriapp_utils/utils", "jriapp_elview/textarea", "jriapp_content/basic"], function (require, exports, lang_13, utils_10, textarea_1, basic_2) {
    "use strict";
    var utils = utils_10.Utils, NAME = "multyline", strUtils = utils.str, document = utils.dom.document;
    var MultyLineContent = (function (_super) {
        __extends(MultyLineContent, _super);
        function MultyLineContent(options) {
            if (options.contentOptions.name !== NAME) {
                throw new Error(strUtils.format(lang_13.ERRS.ERR_ASSERTION_FAILED, strUtils.format("contentOptions.name === '{0}'", NAME)));
            }
            _super.call(this, options);
        }
        Object.defineProperty(MultyLineContent.prototype, "_allowedKeys", {
            get: function () {
                if (!MultyLineContent.__allowedKeys) {
                    MultyLineContent.__allowedKeys = [0, 8, 127, 37, 39, 35, 36, 9, 27, 13];
                }
                return MultyLineContent.__allowedKeys;
            },
            enumerable: true,
            configurable: true
        });
        MultyLineContent.prototype.createTargetElement = function () {
            var el, info = { name: null, options: null };
            if (this.isEditing && this.getIsCanBeEdited()) {
                el = document.createElement("textarea");
                info.options = this._options.options;
                info.name = null;
            }
            else {
                el = document.createElement("div");
            }
            this.updateCss();
            this._el = el;
            return this.getElementView(this._el, info);
        };
        MultyLineContent.prototype.render = function () {
            _super.prototype.render.call(this);
            var self = this, fieldInfo = self.getFieldInfo();
            if (self._target instanceof textarea_1.TextAreaElView) {
                self._target.addOnKeyPress(function (sender, args) {
                    args.isCancel = !self.previewKeyPress(fieldInfo, args.keyCode, args.value);
                });
            }
        };
        MultyLineContent.prototype.previewKeyPress = function (fieldInfo, keyCode, value) {
            if (this._allowedKeys.indexOf(keyCode) > -1)
                return true;
            return !(fieldInfo.maxLength > 0 && value.length >= fieldInfo.maxLength);
        };
        MultyLineContent.prototype.toString = function () {
            return "MultyLineContent";
        };
        MultyLineContent.__allowedKeys = null;
        return MultyLineContent;
    }(basic_2.BasicContent));
    exports.MultyLineContent = MultyLineContent;
});
define("jriapp_elview/checkbox", ["require", "exports", "jriapp_utils/utils", "jriapp_core/bootstrap", "jriapp_elview/elview", "jriapp_elview/input"], function (require, exports, utils_11, bootstrap_10, elview_5, input_2) {
    "use strict";
    var utils = utils_11.Utils, dom = utils.dom, $ = dom.$, boot = bootstrap_10.bootstrap;
    var CheckBoxElView = (function (_super) {
        __extends(CheckBoxElView, _super);
        function CheckBoxElView(options) {
            _super.call(this, options);
            var self = this;
            var chk = this.el;
            this._checked = null;
            chk.checked = false;
            this.$el.on("change." + this.uniqueID, function (e) {
                e.stopPropagation();
                if (self.checked !== this.checked)
                    self.checked = this.checked;
            });
            this._updateState();
        }
        CheckBoxElView.prototype._updateState = function () {
            dom.setClass(this.$el.toArray(), elview_5.css.checkedNull, !utils.check.isNt(this.checked));
        };
        CheckBoxElView.prototype.toString = function () {
            return "CheckBoxElView";
        };
        Object.defineProperty(CheckBoxElView.prototype, "checked", {
            get: function () {
                return this._checked;
            },
            set: function (v) {
                if (this._checked !== v) {
                    this._checked = v;
                    var chk = this.el;
                    chk.checked = !!v;
                    this._updateState();
                    this.raisePropertyChanged(elview_5.PROP_NAME.checked);
                }
            },
            enumerable: true,
            configurable: true
        });
        return CheckBoxElView;
    }(input_2.InputElView));
    exports.CheckBoxElView = CheckBoxElView;
    boot.registerElView("input:checkbox", CheckBoxElView);
    boot.registerElView("checkbox", CheckBoxElView);
});
define("jriapp_content/bool", ["require", "exports", "jriapp_utils/lifetime", "jriapp_utils/utils", "jriapp_elview/checkbox", "jriapp_content/int", "jriapp_content/basic"], function (require, exports, lifetime_2, utils_12, checkbox_1, int_3, basic_3) {
    "use strict";
    var dom = utils_12.Utils.dom, doc = dom.document;
    var BoolContent = (function (_super) {
        __extends(BoolContent, _super);
        function BoolContent() {
            _super.apply(this, arguments);
        }
        BoolContent.prototype.init = function () {
            this._target = this.createTargetElement();
            var bindingInfo = this._options.bindingInfo;
            if (!!bindingInfo) {
                this.updateCss();
                this._lfScope = new lifetime_2.LifeTimeScope();
                var options = this.getBindingOption(bindingInfo, this._target, this._dataContext, "checked");
                options.mode = 2;
                this._lfScope.addObj(this.app.bind(options));
            }
        };
        BoolContent.prototype.cleanUp = function () {
        };
        BoolContent.prototype.createCheckBoxView = function () {
            var chk = document.createElement("input");
            chk.setAttribute("type", "checkbox");
            dom.addClass([chk], int_3.css.checkbox);
            var chbxView = new checkbox_1.CheckBoxElView({ el: chk });
            return chbxView;
        };
        BoolContent.prototype.createTargetElement = function () {
            var tgt = this._target;
            if (!tgt) {
                tgt = this.createCheckBoxView();
                this._el = tgt.el;
            }
            var label = doc.createElement("label");
            dom.addClass([label], int_3.css.checkbox);
            label.appendChild(this._el);
            label.appendChild(doc.createElement("span"));
            this._parentEl.appendChild(label);
            return tgt;
        };
        BoolContent.prototype.updateCss = function () {
            _super.prototype.updateCss.call(this);
            var el = this._el;
            if (this.isEditing && this.getIsCanBeEdited()) {
                el.disabled = false;
            }
            else {
                el.disabled = true;
            }
        };
        BoolContent.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            if (!!this._lfScope) {
                this._lfScope.destroy();
                this._lfScope = null;
            }
            if (!!this._target) {
                this._target.destroy();
                this._target = null;
            }
            _super.prototype.destroy.call(this);
        };
        BoolContent.prototype.render = function () {
            this.cleanUp();
            this.updateCss();
        };
        BoolContent.prototype.toString = function () {
            return "BoolContent";
        };
        return BoolContent;
    }(basic_3.BasicContent));
    exports.BoolContent = BoolContent;
});
define("jriapp_content/number", ["require", "exports", "jriapp_core/bootstrap", "jriapp_elview/textbox", "jriapp_content/basic"], function (require, exports, bootstrap_11, textbox_2, basic_4) {
    "use strict";
    var NumberContent = (function (_super) {
        __extends(NumberContent, _super);
        function NumberContent() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(NumberContent.prototype, "_allowedKeys", {
            get: function () {
                if (!NumberContent.__allowedKeys) {
                    NumberContent.__allowedKeys = [0, 8, 127, 37, 39, 35, 36, 9, 27, 13];
                }
                return NumberContent.__allowedKeys;
            },
            enumerable: true,
            configurable: true
        });
        NumberContent.prototype.getBindingOption = function (bindingInfo, tgt, dctx, targetPath) {
            var options = _super.prototype.getBindingOption.call(this, bindingInfo, tgt, dctx, targetPath);
            var finf = this.getFieldInfo();
            switch (finf.dataType) {
                case 3:
                    options.converter = this.app.getConverter("integerConverter");
                    break;
                case 4:
                    options.converter = this.app.getConverter("decimalConverter");
                    break;
                default:
                    options.converter = this.app.getConverter("floatConverter");
                    break;
            }
            return options;
        };
        NumberContent.prototype.render = function () {
            _super.prototype.render.call(this);
            var self = this;
            if (self._target instanceof textbox_2.TextBoxElView) {
                self._target.addOnKeyPress(function (sender, args) {
                    args.isCancel = !self.previewKeyPress(args.keyCode, args.value);
                });
            }
        };
        NumberContent.prototype.previewKeyPress = function (keyCode, value) {
            var ch = String.fromCharCode(keyCode), digits = "1234567890", defaults = bootstrap_11.bootstrap.defaults, notAllowedChars = "~@#$%^&*()+=_";
            if (notAllowedChars.indexOf(ch) > -1)
                return false;
            if (this._allowedKeys.indexOf(keyCode) > -1)
                return true;
            if (ch === "-" && value.length === 0)
                return true;
            if (ch === defaults.decimalPoint) {
                if (value.length === 0)
                    return false;
                else
                    return value.indexOf(ch) < 0;
            }
            if (ch === defaults.thousandSep)
                return true;
            else
                return digits.indexOf(ch) > -1;
        };
        NumberContent.prototype.toString = function () {
            return "NumberContent";
        };
        NumberContent.__allowedKeys = null;
        return NumberContent;
    }(basic_4.BasicContent));
    exports.NumberContent = NumberContent;
});
define("jriapp_content/date", ["require", "exports", "jriapp_core/lang", "jriapp_utils/utils", "jriapp_content/basic"], function (require, exports, lang_14, utils_13, basic_5) {
    "use strict";
    var utils = utils_13.Utils, strUtils = utils.str, doc = utils.dom.document;
    var NAME = "datepicker";
    var DateContent = (function (_super) {
        __extends(DateContent, _super);
        function DateContent(options) {
            if (options.contentOptions.name !== NAME) {
                throw new Error(strUtils.format(lang_14.ERRS.ERR_ASSERTION_FAILED, strUtils.format("contentOptions.name === '{0}'", NAME)));
            }
            _super.call(this, options);
        }
        DateContent.prototype.getBindingOption = function (bindingInfo, tgt, dctx, targetPath) {
            var options = _super.prototype.getBindingOption.call(this, bindingInfo, tgt, dctx, targetPath);
            options.converter = this.app.getConverter("dateConverter");
            return options;
        };
        DateContent.prototype.createTargetElement = function () {
            var el, info = { name: null, options: null };
            if (this.isEditing && this.getIsCanBeEdited()) {
                el = doc.createElement("input");
                el.setAttribute("type", "text");
                info.options = this._options.options;
                info.name = NAME;
            }
            else {
                el = doc.createElement("span");
            }
            this.updateCss();
            this._el = el;
            return this.getElementView(this._el, info);
        };
        DateContent.prototype.toString = function () {
            return "DateContent";
        };
        return DateContent;
    }(basic_5.BasicContent));
    exports.DateContent = DateContent;
});
define("jriapp_content/datetime", ["require", "exports", "jriapp_core/bootstrap", "jriapp_content/basic"], function (require, exports, bootstrap_12, basic_6) {
    "use strict";
    var DateTimeContent = (function (_super) {
        __extends(DateTimeContent, _super);
        function DateTimeContent() {
            _super.apply(this, arguments);
        }
        DateTimeContent.prototype.getBindingOption = function (bindingInfo, tgt, dctx, targetPath) {
            var options = _super.prototype.getBindingOption.call(this, bindingInfo, tgt, dctx, targetPath);
            options.converter = this.app.getConverter("dateTimeConverter");
            var finf = this.getFieldInfo(), defaults = bootstrap_12.bootstrap.defaults;
            switch (finf.dataType) {
                case 6:
                    options.converterParam = defaults.dateTimeFormat;
                    break;
                case 7:
                    options.converterParam = defaults.dateFormat;
                    break;
                case 8:
                    options.converterParam = defaults.timeFormat;
                    break;
                default:
                    options.converterParam = null;
                    break;
            }
            return options;
        };
        DateTimeContent.prototype.toString = function () {
            return "DateTimeContent";
        };
        return DateTimeContent;
    }(basic_6.BasicContent));
    exports.DateTimeContent = DateTimeContent;
});
define("jriapp_content/factory", ["require", "exports", "jriapp_core/lang", "jriapp_utils/utils", "jriapp_content/basic", "jriapp_content/template", "jriapp_content/string", "jriapp_content/multyline", "jriapp_content/bool", "jriapp_content/number", "jriapp_content/date", "jriapp_content/datetime", "jriapp_content/int", "jriapp_content/basic", "jriapp_content/template", "jriapp_content/string", "jriapp_content/multyline", "jriapp_content/bool", "jriapp_content/number", "jriapp_content/date", "jriapp_content/datetime"], function (require, exports, lang_15, utils_14, basic_7, template_2, string_1, multyline_1, bool_1, number_1, date_1, datetime_1, int_4, basic_8, template_3, string_2, multyline_2, bool_2, number_2, date_2, datetime_2) {
    "use strict";
    exports.contentCSS = int_4.css;
    exports.BasicContent = basic_8.BasicContent;
    exports.TemplateContent = template_3.TemplateContent;
    exports.StringContent = string_2.StringContent;
    exports.MultyLineContent = multyline_2.MultyLineContent;
    exports.BoolContent = bool_2.BoolContent;
    exports.NumberContent = number_2.NumberContent;
    exports.DateContent = date_2.DateContent;
    exports.DateTimeContent = datetime_2.DateTimeContent;
    var utils = utils_14.Utils, strUtils = utils.str;
    var ContentFactory = (function () {
        function ContentFactory() {
        }
        ContentFactory.prototype.getContentType = function (options) {
            if (!!options.templateInfo) {
                return template_2.TemplateContent;
            }
            if (!options.bindingInfo) {
                throw new Error(strUtils.format(lang_15.ERRS.ERR_PARAM_INVALID, "options", "bindingInfo"));
            }
            var fieldInfo = options.fieldInfo, res;
            switch (fieldInfo.dataType) {
                case 0:
                    res = basic_7.BasicContent;
                    break;
                case 1:
                    if (options.name === "multyline")
                        res = multyline_1.MultyLineContent;
                    else
                        res = string_1.StringContent;
                    break;
                case 2:
                    res = bool_1.BoolContent;
                    break;
                case 3:
                    res = number_1.NumberContent;
                    break;
                case 4:
                case 5:
                    res = number_1.NumberContent;
                    break;
                case 6:
                case 8:
                    res = datetime_1.DateTimeContent;
                    break;
                case 7:
                    if (options.name === "datepicker")
                        res = date_1.DateContent;
                    else
                        res = datetime_1.DateTimeContent;
                    break;
                case 9:
                case 10:
                    res = basic_7.BasicContent;
                    break;
                default:
                    throw new Error(strUtils.format(lang_15.ERRS.ERR_FIELD_DATATYPE, fieldInfo.dataType));
            }
            if (!res)
                throw new Error(lang_15.ERRS.ERR_BINDING_CONTENT_NOT_FOUND);
            return res;
        };
        ContentFactory.prototype.createContent = function (options) {
            var contentType = this.getContentType(options.contentOptions);
            return new contentType(options);
        };
        ContentFactory.prototype.isExternallyCachable = function (contentType) {
            return false;
        };
        return ContentFactory;
    }());
    exports.ContentFactory = ContentFactory;
    var FactoryList = (function () {
        function FactoryList() {
            this._factory = new ContentFactory();
        }
        FactoryList.prototype.addFactory = function (factoryGetter) {
            this._factory = factoryGetter(this._factory);
        };
        FactoryList.prototype.getContentType = function (options) {
            return this._factory.getContentType(options);
        };
        FactoryList.prototype.createContent = function (options) {
            return this._factory.createContent(options);
        };
        FactoryList.prototype.isExternallyCachable = function (contentType) {
            return this._factory.isExternallyCachable(contentType);
        };
        return FactoryList;
    }());
    exports.FactoryList = FactoryList;
    exports.contentFactories = new FactoryList();
});
define("jriapp_core/datepicker", ["require", "exports", "jriapp_core/lang", "jriapp_core/object", "jriapp_utils/coreutils", "jriapp_utils/dom", "jriapp_core/bootstrap", "jriapp_elview/textbox"], function (require, exports, lang_16, object_14, coreutils_14, dom_7, bootstrap_13, textbox_3) {
    "use strict";
    var coreUtils = coreutils_14.CoreUtils, dom = dom_7.DomUtils, $ = dom.$, boot = bootstrap_13.bootstrap;
    var PROP_NAME = {
        dateFormat: "dateFormat",
        datepickerRegion: "datepickerRegion"
    };
    var Datepicker = (function (_super) {
        __extends(Datepicker, _super);
        function Datepicker() {
            _super.call(this);
            this._dateFormat = null;
            this._datepickerRegion = "";
            if (!$.datepicker) {
                throw new Error(lang_16.ERRS.ERR_JQUERY_DATEPICKER_NOTFOUND);
            }
            this.dateFormat = "dd.mm.yy";
        }
        Datepicker.prototype.toString = function () {
            return "Datepicker";
        };
        Datepicker.prototype.attachTo = function ($el, options) {
            if (!!options)
                $el.datepicker(options);
            else
                $el.datepicker();
        };
        Datepicker.prototype.detachFrom = function ($el) {
            dom.destroyJQueryPlugin($el, "datepicker");
        };
        Datepicker.prototype.parseDate = function (str) {
            return this.datePickerFn.parseDate(this.dateFormat, str);
        };
        Datepicker.prototype.formatDate = function (date) {
            return this.datePickerFn.formatDate(this.dateFormat, date);
        };
        Object.defineProperty(Datepicker.prototype, "dateFormat", {
            get: function () {
                if (!this._dateFormat) {
                    var regional = this.datePickerFn.regional[this._datepickerRegion];
                    return regional.dateFormat;
                }
                else
                    return this._dateFormat;
            },
            set: function (v) {
                if (this.dateFormat !== v) {
                    this._dateFormat = v;
                    var regional = this.datePickerFn.regional[this._datepickerRegion];
                    if (!!this._dateFormat) {
                        regional.dateFormat = this._dateFormat;
                        this.datePickerFn.setDefaults(regional);
                    }
                    this.raisePropertyChanged(PROP_NAME.dateFormat);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Datepicker.prototype, "datepickerRegion", {
            get: function () { return this._datepickerRegion; },
            set: function (v) {
                if (!v)
                    v = "";
                var oldDateFormat = this.dateFormat;
                if (this._datepickerRegion !== v) {
                    var regional = this.datePickerFn.regional[v];
                    if (!!regional) {
                        this._datepickerRegion = v;
                        regional.dateFormat = oldDateFormat;
                        this.datePickerFn.setDefaults(regional);
                        this.raisePropertyChanged(PROP_NAME.datepickerRegion);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Datepicker.prototype, "datePickerFn", {
            get: function () {
                return $.datepicker;
            },
            enumerable: true,
            configurable: true
        });
        return Datepicker;
    }(object_14.BaseObject));
    exports.Datepicker = Datepicker;
    var DatePickerElView = (function (_super) {
        __extends(DatePickerElView, _super);
        function DatePickerElView(options) {
            _super.call(this, options);
            var $el = this.$el;
            boot.defaults.datepicker.attachTo($el, options.datepicker);
        }
        DatePickerElView.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            var $el = this.$el;
            boot.defaults.datepicker.detachFrom($el);
            _super.prototype.destroy.call(this);
        };
        DatePickerElView.prototype.toString = function () {
            return "DatePickerElView";
        };
        return DatePickerElView;
    }(textbox_3.TextBoxElView));
    exports.DatePickerElView = DatePickerElView;
    boot.registerSvc("IDatepicker", new Datepicker());
    boot.registerElView("datepicker", DatePickerElView);
});
define("jriapp_core/dataform", ["require", "exports", "jriapp_core/const", "jriapp_core/lang", "jriapp_core/object", "jriapp_core/bootstrap", "jriapp_content/factory", "jriapp_core/parser", "jriapp_utils/utils", "jriapp_elview/elview", "jriapp_content/int"], function (require, exports, const_6, lang_17, object_15, bootstrap_14, factory_2, parser_4, utils_15, elview_6, int_5) {
    "use strict";
    var utils = utils_15.Utils, dom = utils.dom, $ = dom.$, doc = dom.document, checks = utils.check, coreUtils = utils.core, strUtils = utils.str, syschecks = utils.sys, parse = parser_4.parser, boot = bootstrap_14.bootstrap;
    exports.css = {
        dataform: "ria-dataform",
        error: "ria-form-error"
    };
    syschecks._setIsInsideTemplate = function (elView) {
        if (!!elView && elView instanceof DataFormElView) {
            elView.form.isInsideTemplate = true;
        }
    };
    syschecks._isDataForm = function (el) {
        if (!el) {
            return false;
        }
        if (el.hasAttribute(const_6.DATA_ATTR.DATA_FORM)) {
            return true;
        }
        else {
            var attr = el.getAttribute(const_6.DATA_ATTR.DATA_VIEW);
            if (!attr) {
                return false;
            }
            var opts = parse.parseOptions(attr);
            return (opts.length > 0 && opts[0].name === const_6.ELVIEW_NM.DataForm);
        }
    };
    syschecks._isInsideDataForm = function (el) {
        if (!el) {
            return false;
        }
        var parent = el.parentElement;
        if (!!parent) {
            if (!syschecks._isDataForm(parent)) {
                return syschecks._isInsideDataForm(parent);
            }
            else {
                return true;
            }
        }
        return false;
    };
    syschecks._isInNestedForm = function (root, forms, el) {
        var i, oNode, len = forms.length;
        if (len === 0) {
            return false;
        }
        oNode = el.parentElement;
        while (!!oNode) {
            for (i = 0; i < len; i += 1) {
                if (oNode === forms[i]) {
                    return true;
                }
            }
            if (!!root && oNode === root) {
                return false;
            }
            oNode = oNode.parentElement;
        }
        return false;
    };
    syschecks._getParentDataForm = function (rootForm, el) {
        if (!el)
            return null;
        var parent = el.parentElement, attr, opts;
        if (!!parent) {
            if (parent === rootForm)
                return rootForm;
            if (syschecks._isDataForm(parent)) {
                return parent;
            }
            else
                return syschecks._getParentDataForm(rootForm, parent);
        }
        return null;
    };
    function getFieldInfo(obj, fieldName) {
        if (!obj)
            return null;
        if (!!obj._aspect && checks.isFunc(obj._aspect.getFieldInfo)) {
            return obj._aspect.getFieldInfo(fieldName);
        }
        else if (checks.isFunc(obj.getFieldInfo)) {
            return obj.getFieldInfo(fieldName);
        }
        else
            return null;
    }
    var PROP_NAME = {
        dataContext: "dataContext",
        isEditing: "isEditing",
        validationErrors: "validationErrors",
        form: "form"
    };
    var DataForm = (function (_super) {
        __extends(DataForm, _super);
        function DataForm(options) {
            _super.call(this);
            var self = this, parent;
            this._el = options.el;
            this._$el = $(this._el);
            this._objId = "frm" + coreUtils.getNewID();
            this._dataContext = null;
            dom.addClass([this._el], exports.css.dataform);
            this._isEditing = false;
            this._content = [];
            this._lfTime = null;
            this._contentCreated = false;
            this._editable = null;
            this._errNotification = null;
            this._parentDataForm = null;
            this._errors = null;
            this._contentPromise = null;
            parent = syschecks._getParentDataForm(null, this._el);
            if (!!parent) {
                self._parentDataForm = boot.getApp().viewFactory.getOrCreateElView(parent);
                self._parentDataForm.addOnDestroyed(function (sender, args) {
                    if (!self._isDestroyCalled)
                        self.destroy();
                }, self._objId);
            }
        }
        DataForm.prototype._getBindings = function () {
            if (!this._lfTime)
                return [];
            var arr = this._lfTime.getObjs(), res = [];
            for (var i = 0, len = arr.length; i < len; i += 1) {
                if (syschecks._isBinding(arr[i]))
                    res.push(arr[i]);
            }
            return res;
        };
        DataForm.prototype._getElViews = function () {
            if (!this._lfTime)
                return [];
            var arr = this._lfTime.getObjs(), res = [];
            for (var i = 0, len = arr.length; i < len; i += 1) {
                if (syschecks._isElView(arr[i]))
                    res.push(arr[i]);
            }
            return res;
        };
        DataForm.prototype._createContent = function () {
            var dctx = this._dataContext, self = this;
            if (!dctx) {
                return;
            }
            var contentElements = coreUtils.arr.fromList(this._el.querySelectorAll(DataForm._DATA_CONTENT_SELECTOR)), isEditing = this.isEditing;
            var forms = coreUtils.arr.fromList(this._el.querySelectorAll(DataForm._DATA_FORM_SELECTOR));
            contentElements.forEach(function (el) {
                if (syschecks._isInNestedForm(self._el, forms, el))
                    return;
                var attr = el.getAttribute(const_6.DATA_ATTR.DATA_CONTENT), op = int_5.parseContentAttr(attr);
                if (!!op.fieldName && !op.fieldInfo) {
                    op.fieldInfo = getFieldInfo(dctx, op.fieldName);
                    if (!op.fieldInfo) {
                        throw new Error(strUtils.format(lang_17.ERRS.ERR_DBSET_INVALID_FIELDNAME, "", op.fieldName));
                    }
                }
                var contentType = factory_2.contentFactories.getContentType(op);
                var content = new contentType({ parentEl: el, contentOptions: op, dataContext: dctx, isEditing: isEditing });
                self._content.push(content);
            });
            var promise = self.app._getInternal().bindElements(this._el, dctx, true, this.isInsideTemplate);
            return promise.then(function (lftm) {
                if (self.getIsDestroyCalled()) {
                    lftm.destroy();
                    return;
                }
                self._lfTime = lftm;
                var bindings = self._getBindings();
                bindings.forEach(function (binding) {
                    if (!binding.isSourceFixed)
                        binding.source = dctx;
                });
                self._contentCreated = true;
            });
        };
        DataForm.prototype._updateCreatedContent = function () {
            var dctx = this._dataContext, self = this;
            try {
                this._content.forEach(function (content) {
                    content.dataContext = dctx;
                    content.isEditing = self.isEditing;
                });
                var bindings = this._getBindings();
                bindings.forEach(function (binding) {
                    if (!binding.isSourceFixed)
                        binding.source = dctx;
                });
            }
            catch (ex) {
                utils.err.reThrow(ex, this.handleError(ex, this));
            }
        };
        DataForm.prototype._updateContent = function () {
            var self = this;
            try {
                if (self._contentCreated) {
                    self._updateCreatedContent();
                }
                else {
                    if (!!self._contentPromise) {
                        self._contentPromise.then(function () {
                            if (self.getIsDestroyCalled())
                                return;
                            self._updateCreatedContent();
                        }, function (err) {
                            if (self.getIsDestroyCalled())
                                return;
                            self.handleError(err, self);
                        });
                    }
                    else {
                        self._contentPromise = self._createContent();
                    }
                }
            }
            catch (ex) {
                utils.err.reThrow(ex, self.handleError(ex, self));
            }
        };
        DataForm.prototype._onDSErrorsChanged = function (sender, args) {
            if (!!this._errNotification)
                this.validationErrors = this._errNotification.getAllErrors();
        };
        DataForm.prototype._onIsEditingChanged = function (sender, args) {
            this.isEditing = this._editable.isEditing;
        };
        DataForm.prototype._bindDS = function () {
            var dataContext = this._dataContext, self = this;
            if (!dataContext)
                return;
            if (!!dataContext) {
                this._editable = utils.getEditable(dataContext);
                this._errNotification = utils.getErrorNotification(dataContext);
            }
            dataContext.addOnDestroyed(function (s, a) {
                self.dataContext = null;
            }, self._objId);
            if (!!this._editable) {
                this._editable.addOnPropertyChange(PROP_NAME.isEditing, self._onIsEditingChanged, self._objId, self);
            }
            if (!!this._errNotification) {
                this._errNotification.addOnErrorsChanged(self._onDSErrorsChanged, self._objId, self);
            }
        };
        DataForm.prototype._unbindDS = function () {
            var dataContext = this._dataContext;
            this.validationErrors = null;
            if (!!dataContext && !dataContext.getIsDestroyCalled()) {
                dataContext.removeNSHandlers(this._objId);
                if (!!this._editable) {
                    this._editable.removeNSHandlers(this._objId);
                }
                if (!!this._errNotification) {
                    this._errNotification.removeOnErrorsChanged(this._objId);
                }
            }
            this._editable = null;
            this._errNotification = null;
        };
        DataForm.prototype._clearContent = function () {
            this._content.forEach(function (content) {
                content.destroy();
            });
            this._content = [];
            if (!!this._lfTime) {
                this._lfTime.destroy();
                this._lfTime = null;
            }
            this._contentCreated = false;
        };
        DataForm.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            this._clearContent();
            dom.removeClass([this.el], exports.css.dataform);
            this._el = null;
            this._$el = null;
            this._unbindDS();
            var parentDataForm = this._parentDataForm;
            this._parentDataForm = null;
            if (!!parentDataForm && !parentDataForm.getIsDestroyCalled()) {
                parentDataForm.removeNSHandlers(this._objId);
            }
            this._dataContext = null;
            this._contentCreated = false;
            this._contentPromise = null;
            _super.prototype.destroy.call(this);
        };
        DataForm.prototype.toString = function () {
            return "DataForm";
        };
        Object.defineProperty(DataForm.prototype, "app", {
            get: function () { return boot.getApp(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataForm.prototype, "el", {
            get: function () { return this._el; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataForm.prototype, "dataContext", {
            get: function () { return this._dataContext; },
            set: function (v) {
                try {
                    if (v === this._dataContext)
                        return;
                    if (!!v && !syschecks._isBaseObj(v)) {
                        throw new Error(lang_17.ERRS.ERR_DATAFRM_DCTX_INVALID);
                    }
                    this._unbindDS();
                    this._dataContext = v;
                    this._bindDS();
                    this._updateContent();
                    this.raisePropertyChanged(PROP_NAME.dataContext);
                    if (!!this._dataContext) {
                        if (!!this._editable && this._isEditing !== this._editable.isEditing) {
                            this.isEditing = this._editable.isEditing;
                        }
                        if (!!this._errNotification) {
                            this._onDSErrorsChanged();
                        }
                    }
                }
                catch (ex) {
                    utils.err.reThrow(ex, this.handleError(ex, this));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataForm.prototype, "isEditing", {
            get: function () { return this._isEditing; },
            set: function (v) {
                var dataContext = this._dataContext;
                if (!dataContext)
                    return;
                var isEditing = this._isEditing, editable;
                if (!!this._editable)
                    editable = this._editable;
                if (!editable && v !== isEditing) {
                    this._isEditing = v;
                    this._updateContent();
                    this.raisePropertyChanged(PROP_NAME.isEditing);
                    return;
                }
                if (v !== isEditing && !!editable) {
                    try {
                        if (v) {
                            editable.beginEdit();
                        }
                        else {
                            editable.endEdit();
                        }
                    }
                    catch (ex) {
                        utils.err.reThrow(ex, this.handleError(ex, dataContext));
                    }
                }
                if (!!editable && editable.isEditing !== isEditing) {
                    this._isEditing = editable.isEditing;
                    this._updateContent();
                    this.raisePropertyChanged(PROP_NAME.isEditing);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataForm.prototype, "validationErrors", {
            get: function () { return this._errors; },
            set: function (v) {
                if (v !== this._errors) {
                    this._errors = v;
                    this.raisePropertyChanged(PROP_NAME.validationErrors);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataForm.prototype, "isInsideTemplate", {
            get: function () { return this._isInsideTemplate; },
            set: function (v) {
                this._isInsideTemplate = v;
            },
            enumerable: true,
            configurable: true
        });
        DataForm._DATA_FORM_SELECTOR = ["*[", const_6.DATA_ATTR.DATA_FORM, "]"].join("");
        DataForm._DATA_CONTENT_SELECTOR = ["*[", const_6.DATA_ATTR.DATA_CONTENT, "]:not([", const_6.DATA_ATTR.DATA_COLUMN, "])"].join("");
        return DataForm;
    }(object_15.BaseObject));
    exports.DataForm = DataForm;
    var DataFormElView = (function (_super) {
        __extends(DataFormElView, _super);
        function DataFormElView(options) {
            _super.call(this, options);
            var self = this;
            this._form = new DataForm(options);
            this._form.addOnDestroyed(function () {
                self._form = null;
                self.raisePropertyChanged(PROP_NAME.form);
            });
            this._form.addOnPropertyChange("*", function (form, args) {
                switch (args.property) {
                    case PROP_NAME.validationErrors:
                        self.validationErrors = form.validationErrors;
                        break;
                    case PROP_NAME.dataContext:
                        self.raisePropertyChanged(args.property);
                        break;
                }
            }, this.uniqueID);
        }
        DataFormElView.prototype._getErrorTipInfo = function (errors) {
            var tip = ["<b>", lang_17.STRS.VALIDATE.errorInfo, "</b>", "<ul>"];
            errors.forEach(function (info) {
                var fieldName = info.fieldName, res = "";
                if (!!fieldName) {
                    res = lang_17.STRS.VALIDATE.errorField + " " + fieldName;
                }
                info.errors.forEach(function (str) {
                    if (!!res)
                        res = res + " -> " + str;
                    else
                        res = str;
                });
                tip.push("<li>" + res + "</li>");
                res = "";
            });
            tip.push("</ul>");
            return tip.join("");
        };
        DataFormElView.prototype._updateErrorUI = function (el, errors) {
            if (!el) {
                return;
            }
            var $el = this.$el;
            if (!!errors && errors.length > 0) {
                var $img = $("<div data-name=\"error_info\" class=\"" + exports.css.error + "\" />");
                $el.prepend($img);
                elview_6.fn_addToolTip($img, this._getErrorTipInfo(errors), true);
                this._setFieldError(true);
            }
            else {
                $el.children('div[data-name="error_info"]').remove();
                this._setFieldError(false);
            }
        };
        DataFormElView.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            if (!!this._form && !this._form.getIsDestroyCalled()) {
                this._form.destroy();
            }
            this._form = null;
            _super.prototype.destroy.call(this);
        };
        DataFormElView.prototype.toString = function () {
            return "DataFormElView";
        };
        Object.defineProperty(DataFormElView.prototype, "dataContext", {
            get: function () {
                if (this._isDestroyCalled)
                    return null;
                return this._form.dataContext;
            },
            set: function (v) {
                if (this._isDestroyCalled)
                    return;
                if (this.dataContext !== v) {
                    this._form.dataContext = v;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataFormElView.prototype, "form", {
            get: function () { return this._form; },
            enumerable: true,
            configurable: true
        });
        return DataFormElView;
    }(elview_6.BaseElView));
    exports.DataFormElView = DataFormElView;
    boot.registerElView(const_6.ELVIEW_NM.DataForm, DataFormElView);
});
define("jriapp_elview/anchor", ["require", "exports", "jriapp_utils/utils", "jriapp_core/bootstrap", "jriapp_elview/elview", "jriapp_elview/command"], function (require, exports, utils_16, bootstrap_15, elview_7, command_2) {
    "use strict";
    var utils = utils_16.Utils, dom = utils.dom, $ = dom.$;
    var AnchorElView = (function (_super) {
        __extends(AnchorElView, _super);
        function AnchorElView(options) {
            _super.call(this, options);
            var self = this;
            this._imageSrc = null;
            this._image = null;
            this._span = null;
            this._glyph = null;
            if (!!options.imageSrc)
                this.imageSrc = options.imageSrc;
            if (!!options.glyph)
                this.glyph = options.glyph;
            dom.addClass([this.el], elview_7.css.commandLink);
            this.$el.on("click." + this.uniqueID, function (e) {
                self._onClick(e);
            });
        }
        AnchorElView.prototype._onClick = function (e) {
            if (this.stopPropagation)
                e.stopPropagation();
            if (this.preventDefault)
                e.preventDefault();
            this.invokeCommand(null, true);
        };
        AnchorElView.prototype._updateImage = function (src) {
            var $a = this.$el, self = this;
            if (this._imageSrc === src)
                return;
            this._imageSrc = src;
            if (!!this._image && !src) {
                dom.removeNode(this._image);
                this._image = null;
                return;
            }
            if (!!src) {
                if (!this._image) {
                    $a.empty();
                    this._image = new Image();
                    $a[0].appendChild(this._image);
                }
                this._image.src = src;
            }
        };
        AnchorElView.prototype._updateGlyph = function (glyph) {
            var $a = this.$el;
            if (this._glyph === glyph)
                return;
            var oldGlyph = this._glyph;
            this._glyph = glyph;
            if (!!oldGlyph && !glyph) {
                dom.removeNode(this._span);
                return;
            }
            if (!!glyph) {
                if (!this._span) {
                    $a.empty();
                    this._span = dom.document.createElement("span");
                    $a[0].appendChild(this._span);
                }
                if (!!oldGlyph) {
                    dom.removeClass([this._span], oldGlyph);
                }
                dom.addClass([this._span], glyph);
            }
        };
        AnchorElView.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            dom.removeClass([this.el], elview_7.css.commandLink);
            this.imageSrc = null;
            this.glyph = null;
            _super.prototype.destroy.call(this);
        };
        AnchorElView.prototype.toString = function () {
            return "AnchorElView";
        };
        Object.defineProperty(AnchorElView.prototype, "imageSrc", {
            get: function () { return this._imageSrc; },
            set: function (v) {
                var x = this._imageSrc;
                if (x !== v) {
                    this._updateImage(v);
                    this.raisePropertyChanged(elview_7.PROP_NAME.imageSrc);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnchorElView.prototype, "glyph", {
            get: function () { return this._glyph; },
            set: function (v) {
                var x = this._glyph;
                if (x !== v) {
                    this._updateGlyph(v);
                    this.raisePropertyChanged(elview_7.PROP_NAME.glyph);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnchorElView.prototype, "html", {
            get: function () {
                return this.$el.html();
            },
            set: function (v) {
                var x = this.$el.html();
                if (v === null)
                    v = "";
                else
                    v = "" + v;
                if (x !== v) {
                    this.$el.html(v);
                    this.raisePropertyChanged(elview_7.PROP_NAME.html);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnchorElView.prototype, "text", {
            get: function () {
                return this.$el.text();
            },
            set: function (v) {
                var x = this.$el.text();
                if (v === null)
                    v = "";
                else
                    v = "" + v;
                if (x !== v) {
                    this.$el.text(v);
                    this.raisePropertyChanged(elview_7.PROP_NAME.text);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnchorElView.prototype, "href", {
            get: function () {
                return this.$el.prop("href");
            },
            set: function (v) {
                var x = this.href;
                if (v === null)
                    v = "";
                else
                    v = "" + v;
                if (x !== v) {
                    this.$el.prop("href", v);
                    this.raisePropertyChanged(elview_7.PROP_NAME.href);
                }
            },
            enumerable: true,
            configurable: true
        });
        return AnchorElView;
    }(command_2.CommandElView));
    exports.AnchorElView = AnchorElView;
    bootstrap_15.bootstrap.registerElView("a", AnchorElView);
    bootstrap_15.bootstrap.registerElView("abutton", AnchorElView);
});
define("jriapp_elview/span", ["require", "exports", "jriapp_utils/utils", "jriapp_core/bootstrap", "jriapp_elview/elview"], function (require, exports, utils_17, bootstrap_16, elview_8) {
    "use strict";
    var utils = utils_17.Utils, $ = utils.dom.$;
    var SpanElView = (function (_super) {
        __extends(SpanElView, _super);
        function SpanElView() {
            _super.apply(this, arguments);
        }
        SpanElView.prototype.toString = function () {
            return "SpanElView";
        };
        Object.defineProperty(SpanElView.prototype, "text", {
            get: function () { return this.$el.text(); },
            set: function (v) {
                var $el = this.$el, x = $el.text();
                var str = "" + v;
                v = v === null ? "" : str;
                if (x !== v) {
                    $el.text(v);
                    this.raisePropertyChanged(elview_8.PROP_NAME.text);
                    this.raisePropertyChanged(elview_8.PROP_NAME.value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpanElView.prototype, "value", {
            get: function () {
                return this.text;
            },
            set: function (v) {
                this.text = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpanElView.prototype, "html", {
            get: function () { return this.$el.html(); },
            set: function (v) {
                var x = this.$el.html();
                var str = "" + v;
                v = v === null ? "" : str;
                if (x !== v) {
                    this.$el.html(v);
                    this.raisePropertyChanged(elview_8.PROP_NAME.html);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpanElView.prototype, "color", {
            get: function () {
                var $el = this.$el;
                return $el.css(elview_8.css.color);
            },
            set: function (v) {
                var $el = this.$el;
                var x = $el.css(elview_8.css.color);
                if (v !== x) {
                    $el.css(elview_8.css.color, v);
                    this.raisePropertyChanged(elview_8.PROP_NAME.color);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpanElView.prototype, "fontSize", {
            get: function () {
                var $el = this.$el;
                return $el.css(elview_8.css.fontSize);
            },
            set: function (v) {
                var $el = this.$el;
                var x = $el.css(elview_8.css.fontSize);
                if (v !== x) {
                    $el.css(elview_8.css.fontSize, v);
                    this.raisePropertyChanged(elview_8.PROP_NAME.fontSize);
                }
            },
            enumerable: true,
            configurable: true
        });
        return SpanElView;
    }(elview_8.BaseElView));
    exports.SpanElView = SpanElView;
    bootstrap_16.bootstrap.registerElView("span", SpanElView);
});
define("jriapp_elview/block", ["require", "exports", "jriapp_utils/utils", "jriapp_core/bootstrap", "jriapp_elview/elview", "jriapp_elview/span"], function (require, exports, utils_18, bootstrap_17, elview_9, span_1) {
    "use strict";
    var utils = utils_18.Utils, $ = utils.dom.$, boot = bootstrap_17.bootstrap;
    var BlockElView = (function (_super) {
        __extends(BlockElView, _super);
        function BlockElView() {
            _super.apply(this, arguments);
        }
        BlockElView.prototype.toString = function () {
            return "BlockElView";
        };
        Object.defineProperty(BlockElView.prototype, "width", {
            get: function () {
                var $el = this.$el;
                return $el.width();
            },
            set: function (v) {
                var $el = this.$el;
                var x = $el.width();
                if (v !== x) {
                    $el.width(v);
                    this.raisePropertyChanged(elview_9.PROP_NAME.width);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BlockElView.prototype, "height", {
            get: function () {
                var $el = this.$el;
                return $el.height();
            },
            set: function (v) {
                var $el = this.$el;
                var x = $el.height();
                if (v !== x) {
                    $el.height(v);
                    this.raisePropertyChanged(elview_9.PROP_NAME.height);
                }
            },
            enumerable: true,
            configurable: true
        });
        return BlockElView;
    }(span_1.SpanElView));
    exports.BlockElView = BlockElView;
    boot.registerElView("block", BlockElView);
    boot.registerElView("div", BlockElView);
    boot.registerElView("section", BlockElView);
});
define("jriapp_elview/busy", ["require", "exports", "jriapp_core/const", "jriapp_utils/utils", "jriapp_core/bootstrap", "jriapp_elview/elview"], function (require, exports, const_7, utils_19, bootstrap_18, elview_10) {
    "use strict";
    var utils = utils_19.Utils, $ = utils.dom.$, checks = utils.check;
    var BusyElView = (function (_super) {
        __extends(BusyElView, _super);
        function BusyElView(options) {
            _super.call(this, options);
            var img;
            if (!!options.img)
                img = options.img;
            else
                img = const_7.LOADER_GIF.Default;
            this._delay = 400;
            this._timeOut = null;
            if (!checks.isNt(options.delay))
                this._delay = parseInt("" + options.delay);
            this._loaderPath = bootstrap_18.bootstrap.getImagePath(img);
            this._$loader = $(new Image());
            this._$loader.css({ position: "absolute", display: "none", zIndex: "10000" });
            this._$loader.prop("src", this._loaderPath);
            this._$loader.appendTo(this.el);
            this._isBusy = false;
        }
        BusyElView.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            if (!!this._timeOut) {
                clearTimeout(this._timeOut);
                this._timeOut = null;
            }
            this._$loader.remove();
            this._$loader = null;
            _super.prototype.destroy.call(this);
        };
        BusyElView.prototype.toString = function () {
            return "BusyElView";
        };
        Object.defineProperty(BusyElView.prototype, "isBusy", {
            get: function () { return this._isBusy; },
            set: function (v) {
                var self = this, fn = function () {
                    self._timeOut = null;
                    self._$loader.show();
                    self._$loader.position({
                        "of": $(self.el)
                    });
                };
                if (v !== self._isBusy) {
                    self._isBusy = v;
                    if (self._isBusy) {
                        if (!!self._timeOut) {
                            clearTimeout(self._timeOut);
                            self._timeOut = null;
                        }
                        if (self._delay > 0) {
                            self._timeOut = setTimeout(fn, self._delay);
                        }
                        else
                            fn();
                    }
                    else {
                        if (!!self._timeOut) {
                            clearTimeout(self._timeOut);
                            self._timeOut = null;
                        }
                        else
                            self._$loader.hide();
                    }
                    self.raisePropertyChanged(elview_10.PROP_NAME.isBusy);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BusyElView.prototype, "delay", {
            get: function () { return this._delay; },
            set: function (v) {
                if (v !== this._delay) {
                    this._delay = v;
                    this.raisePropertyChanged(elview_10.PROP_NAME.delay);
                }
            },
            enumerable: true,
            configurable: true
        });
        return BusyElView;
    }(elview_10.BaseElView));
    exports.BusyElView = BusyElView;
    bootstrap_18.bootstrap.registerElView("busy", BusyElView);
    bootstrap_18.bootstrap.registerElView("busy_indicator", BusyElView);
});
define("jriapp_elview/button", ["require", "exports", "jriapp_utils/utils", "jriapp_core/bootstrap", "jriapp_elview/elview", "jriapp_elview/command"], function (require, exports, utils_20, bootstrap_19, elview_11, command_3) {
    "use strict";
    var utils = utils_20.Utils, $ = utils.dom.$, boot = bootstrap_19.bootstrap;
    var ButtonElView = (function (_super) {
        __extends(ButtonElView, _super);
        function ButtonElView(options) {
            _super.call(this, options);
            var self = this;
            this.$el.on("click." + this.uniqueID, function (e) {
                self._onClick(e);
            });
        }
        ButtonElView.prototype._onClick = function (e) {
            if (this.stopPropagation)
                e.stopPropagation();
            if (this.preventDefault)
                e.preventDefault();
            this.invokeCommand(null, true);
        };
        ButtonElView.prototype.toString = function () {
            return "ButtonElView";
        };
        Object.defineProperty(ButtonElView.prototype, "value", {
            get: function () {
                return this.$el.val();
            },
            set: function (v) {
                var x = this.$el.val();
                if (v === null)
                    v = "";
                else
                    v = "" + v;
                if (x !== v) {
                    this.$el.val(v);
                    this.raisePropertyChanged(elview_11.PROP_NAME.value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonElView.prototype, "text", {
            get: function () {
                return this.$el.text();
            },
            set: function (v) {
                var x = this.$el.text();
                if (v === null)
                    v = "";
                else
                    v = "" + v;
                if (x !== v) {
                    this.$el.text(v);
                    this.raisePropertyChanged(elview_11.PROP_NAME.text);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonElView.prototype, "html", {
            get: function () {
                return this.$el.html();
            },
            set: function (v) {
                var x = this.$el.html();
                if (v === null)
                    v = "";
                else
                    v = "" + v;
                if (x !== v) {
                    this.$el.html(v);
                    this.raisePropertyChanged(elview_11.PROP_NAME.html);
                }
            },
            enumerable: true,
            configurable: true
        });
        return ButtonElView;
    }(command_3.CommandElView));
    exports.ButtonElView = ButtonElView;
    boot.registerElView("input:button", ButtonElView);
    boot.registerElView("input:submit", ButtonElView);
    boot.registerElView("button", ButtonElView);
});
define("jriapp_elview/checkbox3", ["require", "exports", "jriapp_utils/utils", "jriapp_core/bootstrap", "jriapp_elview/elview", "jriapp_elview/input"], function (require, exports, utils_21, bootstrap_20, elview_12, input_3) {
    "use strict";
    var utils = utils_21.Utils, dom = utils.dom, $ = dom.$, boot = bootstrap_20.bootstrap;
    var CheckBoxThreeStateElView = (function (_super) {
        __extends(CheckBoxThreeStateElView, _super);
        function CheckBoxThreeStateElView(options) {
            _super.call(this, options);
            var self = this;
            var chk = this.el;
            this._checked = null;
            chk.checked = false;
            chk.indeterminate = this._checked === null;
            this.$el.on("click." + this.uniqueID, function (e) {
                e.stopPropagation();
                if (self.checked === null)
                    self.checked = true;
                else
                    self.checked = !self.checked ? null : false;
            });
            this._updateState();
        }
        CheckBoxThreeStateElView.prototype._updateState = function () {
            dom.setClass(this.$el.toArray(), elview_12.css.checkedNull, !utils.check.isNt(this.checked));
        };
        CheckBoxThreeStateElView.prototype.toString = function () {
            return "CheckBoxThreeStateElView";
        };
        Object.defineProperty(CheckBoxThreeStateElView.prototype, "checked", {
            get: function () {
                return this._checked;
            },
            set: function (v) {
                if (this._checked !== v) {
                    this._checked = v;
                    var chk = this.el;
                    chk.checked = !!v;
                    chk.indeterminate = this._checked === null;
                    this._updateState();
                    this.raisePropertyChanged(elview_12.PROP_NAME.checked);
                }
            },
            enumerable: true,
            configurable: true
        });
        return CheckBoxThreeStateElView;
    }(input_3.InputElView));
    exports.CheckBoxThreeStateElView = CheckBoxThreeStateElView;
    boot.registerElView("threeState", CheckBoxThreeStateElView);
    boot.registerElView("checkbox3", CheckBoxThreeStateElView);
});
define("jriapp_elview/expander", ["require", "exports", "jriapp_utils/utils", "jriapp_core/bootstrap", "jriapp_elview/anchor"], function (require, exports, utils_22, bootstrap_21, anchor_1) {
    "use strict";
    var utils = utils_22.Utils, $ = utils.dom.$;
    exports.PROP_NAME = {
        isExpanded: "isExpanded"
    };
    var COLLAPSE_IMG = "collapse.jpg", EXPAND_IMG = "expand.jpg";
    var ExpanderElView = (function (_super) {
        __extends(ExpanderElView, _super);
        function ExpanderElView(options) {
            var expandedsrc = options.expandedsrc || bootstrap_21.bootstrap.getImagePath(COLLAPSE_IMG);
            var collapsedsrc = options.collapsedsrc || bootstrap_21.bootstrap.getImagePath(EXPAND_IMG);
            var isExpanded = !!options.isExpanded;
            options.imageSrc = null;
            _super.call(this, options);
            this._expandedsrc = expandedsrc;
            this._collapsedsrc = collapsedsrc;
            this.isExpanded = isExpanded;
        }
        ExpanderElView.prototype.refresh = function () {
            if (this.getIsDestroyCalled())
                return;
            this.imageSrc = this._isExpanded ? this._expandedsrc : this._collapsedsrc;
        };
        ExpanderElView.prototype._onCommandChanged = function () {
            _super.prototype._onCommandChanged.call(this);
            this.invokeCommand();
        };
        ExpanderElView.prototype._onClick = function (e) {
            if (this.preventDefault)
                e.preventDefault();
            this.isExpanded = !this.isExpanded;
        };
        ExpanderElView.prototype.invokeCommand = function () {
            this.refresh();
            _super.prototype.invokeCommand.call(this, null, true);
        };
        ExpanderElView.prototype.toString = function () {
            return "ExpanderElView";
        };
        Object.defineProperty(ExpanderElView.prototype, "isExpanded", {
            get: function () { return this._isExpanded; },
            set: function (v) {
                if (this._isExpanded !== v) {
                    this._isExpanded = v;
                    this.invokeCommand();
                    this.raisePropertyChanged(exports.PROP_NAME.isExpanded);
                }
            },
            enumerable: true,
            configurable: true
        });
        return ExpanderElView;
    }(anchor_1.AnchorElView));
    exports.ExpanderElView = ExpanderElView;
    bootstrap_21.bootstrap.registerElView("expander", ExpanderElView);
});
define("jriapp_elview/hidden", ["require", "exports", "jriapp_core/bootstrap", "jriapp_elview/input"], function (require, exports, bootstrap_22, input_4) {
    "use strict";
    var HiddenElView = (function (_super) {
        __extends(HiddenElView, _super);
        function HiddenElView() {
            _super.apply(this, arguments);
        }
        HiddenElView.prototype.toString = function () {
            return "HiddenElView";
        };
        return HiddenElView;
    }(input_4.InputElView));
    exports.HiddenElView = HiddenElView;
    bootstrap_22.bootstrap.registerElView("input:hidden", HiddenElView);
});
define("jriapp_elview/img", ["require", "exports", "jriapp_core/bootstrap", "jriapp_elview/elview"], function (require, exports, bootstrap_23, elview_13) {
    "use strict";
    var ImgElView = (function (_super) {
        __extends(ImgElView, _super);
        function ImgElView(options) {
            _super.call(this, options);
        }
        ImgElView.prototype.toString = function () {
            return "ImgElView";
        };
        Object.defineProperty(ImgElView.prototype, "src", {
            get: function () { return this.$el.prop("src"); },
            set: function (v) {
                var x = this.src;
                if (x !== v) {
                    this.$el.prop("src", v);
                    this.raisePropertyChanged(elview_13.PROP_NAME.src);
                }
            },
            enumerable: true,
            configurable: true
        });
        return ImgElView;
    }(elview_13.BaseElView));
    exports.ImgElView = ImgElView;
    bootstrap_23.bootstrap.registerElView("img", ImgElView);
});
define("jriapp_elview/radio", ["require", "exports", "jriapp_utils/utils", "jriapp_core/bootstrap", "jriapp_elview/elview", "jriapp_elview/checkbox"], function (require, exports, utils_23, bootstrap_24, elview_14, checkbox_2) {
    "use strict";
    var utils = utils_23.Utils, dom = utils.dom, $ = dom.$;
    var RadioElView = (function (_super) {
        __extends(RadioElView, _super);
        function RadioElView() {
            _super.apply(this, arguments);
        }
        RadioElView.prototype.toString = function () {
            return "RadioElView";
        };
        Object.defineProperty(RadioElView.prototype, "value", {
            get: function () { return this.$el.val(); },
            set: function (v) {
                var strv = utils.core.check.isNt(v) ? "" : ("" + v);
                if (strv !== this.$el.val()) {
                    this.$el.val(strv);
                    this.raisePropertyChanged(elview_14.PROP_NAME.value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RadioElView.prototype, "name", {
            get: function () { return this.$el.prop("name"); },
            enumerable: true,
            configurable: true
        });
        return RadioElView;
    }(checkbox_2.CheckBoxElView));
    exports.RadioElView = RadioElView;
    bootstrap_24.bootstrap.registerElView("input:radio", RadioElView);
});
define("jriapp_elview/all", ["require", "exports", "jriapp_elview/elview", "jriapp_elview/anchor", "jriapp_elview/block", "jriapp_elview/busy", "jriapp_elview/button", "jriapp_elview/checkbox", "jriapp_elview/checkbox3", "jriapp_elview/command", "jriapp_elview/expander", "jriapp_elview/hidden", "jriapp_elview/img", "jriapp_elview/input", "jriapp_elview/radio", "jriapp_elview/span", "jriapp_elview/textarea", "jriapp_elview/textbox"], function (require, exports, elview_15, anchor_2, block_1, busy_1, button_1, checkbox_3, checkbox3_1, command_4, expander_1, hidden_1, img_1, input_5, radio_1, span_2, textarea_2, textbox_4) {
    "use strict";
    exports.BaseElView = elview_15.BaseElView;
    exports.fn_addToolTip = elview_15.fn_addToolTip;
    exports.PropChangedCommand = elview_15.PropChangedCommand;
    exports.EVENT_CHANGE_TYPE = elview_15.EVENT_CHANGE_TYPE;
    exports.AnchorElView = anchor_2.AnchorElView;
    exports.BlockElView = block_1.BlockElView;
    exports.BusyElView = busy_1.BusyElView;
    exports.ButtonElView = button_1.ButtonElView;
    exports.CheckBoxElView = checkbox_3.CheckBoxElView;
    exports.CheckBoxThreeStateElView = checkbox3_1.CheckBoxThreeStateElView;
    exports.CommandElView = command_4.CommandElView;
    exports.ExpanderElView = expander_1.ExpanderElView;
    exports.HiddenElView = hidden_1.HiddenElView;
    exports.ImgElView = img_1.ImgElView;
    exports.InputElView = input_5.InputElView;
    exports.RadioElView = radio_1.RadioElView;
    exports.SpanElView = span_2.SpanElView;
    exports.TextAreaElView = textarea_2.TextAreaElView;
    exports.TextBoxElView = textbox_4.TextBoxElView;
});
define("jriapp_utils/propwatcher", ["require", "exports", "jriapp_core/object", "jriapp_utils/coreutils"], function (require, exports, object_16, coreutils_15) {
    "use strict";
    var PropWatcher = (function (_super) {
        __extends(PropWatcher, _super);
        function PropWatcher() {
            _super.call(this);
            this._objId = "prw" + coreutils_15.CoreUtils.getNewID();
            this._objs = [];
        }
        PropWatcher.create = function () {
            return new PropWatcher();
        };
        PropWatcher.prototype.addPropWatch = function (obj, prop, fn_onChange) {
            var self = this;
            obj.addOnPropertyChange(prop, function (s, a) {
                fn_onChange(a.property);
            }, self.uniqueID);
            if (self._objs.indexOf(obj) < 0)
                self._objs.push(obj);
        };
        PropWatcher.prototype.addWatch = function (obj, props, fn_onChange) {
            var self = this;
            obj.addOnPropertyChange("*", function (s, a) {
                if (props.indexOf(a.property) > -1) {
                    fn_onChange(a.property);
                }
            }, self.uniqueID);
            if (self._objs.indexOf(obj) < 0)
                self._objs.push(obj);
        };
        PropWatcher.prototype.removeWatch = function (obj) {
            obj.removeNSHandlers(this.uniqueID);
        };
        PropWatcher.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            var self = this;
            this._objs.forEach(function (obj) {
                self.removeWatch(obj);
            });
            this._objs = [];
            _super.prototype.destroy.call(this);
        };
        PropWatcher.prototype.toString = function () {
            return "PropWatcher " + this._objId;
        };
        Object.defineProperty(PropWatcher.prototype, "uniqueID", {
            get: function () {
                return this._objId;
            },
            enumerable: true,
            configurable: true
        });
        return PropWatcher;
    }(object_16.BaseObject));
    exports.PropWatcher = PropWatcher;
});
define("jriapp_collection/int", ["require", "exports"], function (require, exports) {
    "use strict";
    (function (COLL_CHANGE_TYPE) {
        COLL_CHANGE_TYPE[COLL_CHANGE_TYPE["Remove"] = 0] = "Remove";
        COLL_CHANGE_TYPE[COLL_CHANGE_TYPE["Add"] = 1] = "Add";
        COLL_CHANGE_TYPE[COLL_CHANGE_TYPE["Reset"] = 2] = "Reset";
        COLL_CHANGE_TYPE[COLL_CHANGE_TYPE["Remap"] = 3] = "Remap";
    })(exports.COLL_CHANGE_TYPE || (exports.COLL_CHANGE_TYPE = {}));
    var COLL_CHANGE_TYPE = exports.COLL_CHANGE_TYPE;
    (function (COLL_CHANGE_REASON) {
        COLL_CHANGE_REASON[COLL_CHANGE_REASON["None"] = 0] = "None";
        COLL_CHANGE_REASON[COLL_CHANGE_REASON["PageChange"] = 1] = "PageChange";
        COLL_CHANGE_REASON[COLL_CHANGE_REASON["Sorting"] = 2] = "Sorting";
    })(exports.COLL_CHANGE_REASON || (exports.COLL_CHANGE_REASON = {}));
    var COLL_CHANGE_REASON = exports.COLL_CHANGE_REASON;
    (function (COLL_CHANGE_OPER) {
        COLL_CHANGE_OPER[COLL_CHANGE_OPER["None"] = 0] = "None";
        COLL_CHANGE_OPER[COLL_CHANGE_OPER["Fill"] = 1] = "Fill";
        COLL_CHANGE_OPER[COLL_CHANGE_OPER["Attach"] = 2] = "Attach";
        COLL_CHANGE_OPER[COLL_CHANGE_OPER["Remove"] = 3] = "Remove";
        COLL_CHANGE_OPER[COLL_CHANGE_OPER["Commit"] = 4] = "Commit";
        COLL_CHANGE_OPER[COLL_CHANGE_OPER["Sort"] = 5] = "Sort";
    })(exports.COLL_CHANGE_OPER || (exports.COLL_CHANGE_OPER = {}));
    var COLL_CHANGE_OPER = exports.COLL_CHANGE_OPER;
    (function (ITEM_STATUS) {
        ITEM_STATUS[ITEM_STATUS["None"] = 0] = "None";
        ITEM_STATUS[ITEM_STATUS["Added"] = 1] = "Added";
        ITEM_STATUS[ITEM_STATUS["Updated"] = 2] = "Updated";
        ITEM_STATUS[ITEM_STATUS["Deleted"] = 3] = "Deleted";
    })(exports.ITEM_STATUS || (exports.ITEM_STATUS = {}));
    var ITEM_STATUS = exports.ITEM_STATUS;
    exports.PROP_NAME = {
        isEditing: "isEditing",
        currentItem: "currentItem",
        count: "count",
        totalCount: "totalCount",
        pageCount: "pageCount",
        pageSize: "pageSize",
        pageIndex: "pageIndex",
        isUpdating: "isUpdating",
        isLoading: "isLoading"
    };
    exports.ITEM_EVENTS = {
        errors_changed: "errors_changed",
        destroyed: "destroyed"
    };
});
define("jriapp_collection/utils", ["require", "exports", "jriapp_utils/utils", "jriapp_core/lang"], function (require, exports, utils_24, lang_18) {
    "use strict";
    var utils = utils_24.Utils, coreUtils = utils.core, strUtils = utils.str, checks = utils.check;
    function pad(num) {
        if (num < 10) {
            return "0" + num;
        }
        return "" + num;
    }
    function dateToString(dt) {
        return ("" + dt.getFullYear()) +
            '-' + pad(dt.getMonth() + 1) +
            '-' + pad(dt.getDate()) +
            'T' + pad(dt.getHours()) +
            ':' + pad(dt.getMinutes()) +
            ':' + pad(dt.getSeconds()) +
            '.' + (dt.getMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
    }
    exports.valueUtils = {
        valueToDate: function (val, dtcnv, serverTZ) {
            if (!val)
                return null;
            var dt = new Date(val);
            var clientTZ = coreUtils.get_timeZoneOffset();
            dt.setMinutes(dt.getMinutes() + clientTZ);
            switch (dtcnv) {
                case 0:
                    break;
                case 1:
                    dt.setMinutes(dt.getMinutes() + serverTZ);
                    dt.setMinutes(dt.getMinutes() - clientTZ);
                    break;
                case 2:
                    dt.setMinutes(dt.getMinutes() - clientTZ);
                    break;
                default:
                    throw new Error(strUtils.format(lang_18.ERRS.ERR_PARAM_INVALID, "dtcnv", dtcnv));
            }
            return dt;
        },
        dateToValue: function (dt, dtcnv, serverTZ) {
            if (dt === null)
                return null;
            if (!checks.isDate(dt))
                throw new Error(strUtils.format(lang_18.ERRS.ERR_PARAM_INVALID, "dt", dt));
            var clientTZ = coreUtils.get_timeZoneOffset();
            switch (dtcnv) {
                case 0:
                    break;
                case 1:
                    dt.setMinutes(dt.getMinutes() + clientTZ);
                    dt.setMinutes(dt.getMinutes() - serverTZ);
                    break;
                case 2:
                    dt.setMinutes(dt.getMinutes() + clientTZ);
                    break;
                default:
                    throw new Error(strUtils.format(lang_18.ERRS.ERR_PARAM_INVALID, "dtcnv", dtcnv));
            }
            return dateToString(dt);
        },
        compareVals: function (v1, v2, dataType) {
            if ((v1 === null && v2 !== null) || (v1 !== null && v2 === null))
                return false;
            switch (dataType) {
                case 6:
                case 7:
                case 8:
                    if (checks.isDate(v1) && checks.isDate(v2))
                        return v1.getTime() === v2.getTime();
                    else
                        return false;
                default:
                    return v1 === v2;
            }
        },
        stringifyValue: function (v, dtcnv, dataType, serverTZ) {
            var res = null;
            if (checks.isNt(v))
                return res;
            function conv(v) {
                if (checks.isDate(v))
                    return exports.valueUtils.dateToValue(v, dtcnv, serverTZ);
                else if (checks.isArray(v))
                    return JSON.stringify(v);
                else if (checks.isString(v))
                    return v;
                else
                    return JSON.stringify(v);
            }
            ;
            var isOK = false;
            switch (dataType) {
                case 0:
                    res = conv(v);
                    isOK = true;
                    break;
                case 1:
                case 9:
                    if (checks.isString(v)) {
                        res = v;
                        isOK = true;
                    }
                    break;
                case 2:
                    if (checks.isBoolean(v)) {
                        res = JSON.stringify(v);
                        isOK = true;
                    }
                    break;
                case 3:
                case 4:
                case 5:
                    if (checks.isNumber(v)) {
                        res = JSON.stringify(v);
                        isOK = true;
                    }
                    break;
                case 6:
                case 7:
                case 8:
                    if (checks.isDate(v)) {
                        res = exports.valueUtils.dateToValue(v, dtcnv, serverTZ);
                        isOK = true;
                    }
                    break;
                case 10:
                    if (checks.isArray(v)) {
                        res = JSON.stringify(v);
                        isOK = true;
                    }
                    break;
                default:
                    throw new Error(strUtils.format(lang_18.ERRS.ERR_PARAM_INVALID, "dataType", dataType));
            }
            if (!isOK)
                throw new Error(strUtils.format(lang_18.ERRS.ERR_FIELD_WRONG_TYPE, v, dataType));
            return res;
        },
        parseValue: function (v, dataType, dtcnv, serverTZ) {
            var res = null;
            if (v === checks.undefined || v === null)
                return res;
            switch (dataType) {
                case 0:
                    res = v;
                    break;
                case 1:
                case 9:
                    res = v;
                    break;
                case 2:
                    res = coreUtils.parseBool(v);
                    break;
                case 3:
                    res = parseInt(v, 10);
                    break;
                case 4:
                case 5:
                    res = parseFloat(v);
                    break;
                case 6:
                case 7:
                case 8:
                    res = exports.valueUtils.valueToDate(v, dtcnv, serverTZ);
                    break;
                case 10:
                    res = JSON.parse(v);
                    break;
                default:
                    throw new Error(strUtils.format(lang_18.ERRS.ERR_PARAM_INVALID, "dataType", dataType));
            }
            return res;
        }
    };
    function fn_getPropertyByName(name, props) {
        var arrProps = props.filter(function (f) { return f.fieldName === name; });
        if (!arrProps || arrProps.length !== 1)
            throw new Error(strUtils.format(lang_18.ERRS.ERR_ASSERTION_FAILED, "arrProps.length === 1"));
        return arrProps[0];
    }
    exports.fn_getPropertyByName = fn_getPropertyByName;
    function _fn_traverseField(fldName, fld, fn, parent_res) {
        if (fld.fieldType === 5) {
            var res = fn(fld, fldName, parent_res);
            if (!!fld.nested && fld.nested.length > 0) {
                var nestedFld = void 0, len = fld.nested.length;
                for (var i = 0; i < len; i += 1) {
                    nestedFld = fld.nested[i];
                    if (nestedFld.fieldType === 5) {
                        _fn_traverseField(fldName + "." + nestedFld.fieldName, nestedFld, fn, res);
                    }
                    else {
                        fn(nestedFld, fldName + "." + nestedFld.fieldName, res);
                    }
                }
            }
        }
        else {
            fn(fld, fldName, parent_res);
        }
    }
    function fn_traverseField(fld, fn, parent_res) {
        _fn_traverseField(fld.fieldName, fld, fn, parent_res);
    }
    exports.fn_traverseField = fn_traverseField;
    function fn_traverseFields(flds, fn, parent_res) {
        for (var i = 0; i < flds.length; i += 1) {
            fn_traverseField(flds[i], fn, parent_res);
        }
    }
    exports.fn_traverseFields = fn_traverseFields;
});
define("jriapp_collection/validation", ["require", "exports", "jriapp_core/shared", "jriapp_core/lang", "jriapp_utils/syschecks", "jriapp_utils/utils"], function (require, exports, shared_4, lang_19, syschecks_8, utils_25) {
    "use strict";
    var utils = utils_25.Utils;
    syschecks_8.SysChecks._isValidationError = function (obj) {
        return (!!obj && obj instanceof ValidationError);
    };
    var ValidationError = (function (_super) {
        __extends(ValidationError, _super);
        function ValidationError(errorInfo, item) {
            var message = lang_19.ERRS.ERR_VALIDATION + "\r\n", i = 0;
            errorInfo.forEach(function (err) {
                if (i > 0)
                    message = message + "\r\n";
                if (!!err.fieldName)
                    message = message + " " + lang_19.STRS.TEXT.txtField + ": " + err.fieldName + " -> " + err.errors.join(", ");
                else
                    message = message + err.errors.join(", ");
                i += 1;
            });
            _super.call(this, message);
            this._errors = errorInfo;
            this._item = item;
        }
        Object.defineProperty(ValidationError.prototype, "item", {
            get: function () {
                return this._item;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValidationError.prototype, "errors", {
            get: function () {
                return this._errors;
            },
            enumerable: true,
            configurable: true
        });
        return ValidationError;
    }(shared_4.BaseError));
    exports.ValidationError = ValidationError;
    var Validations = (function () {
        function Validations() {
        }
        Validations._dtRangeToDate = function (str) {
            var dtParts = str.split("-");
            var dt = new Date(parseInt(dtParts[0], 10), parseInt(dtParts[1], 10) - 1, parseInt(dtParts[2], 10));
            return dt;
        };
        Validations.checkNumRange = function (num, range) {
            var rangeParts = range.split(",");
            if (!!rangeParts[0]) {
                if (num < parseFloat(rangeParts[0])) {
                    throw new Error(utils.str.format(lang_19.ERRS.ERR_FIELD_RANGE, num, range));
                }
            }
            if (!!rangeParts[1]) {
                if (num > parseFloat(rangeParts[1])) {
                    throw new Error(utils.str.format(lang_19.ERRS.ERR_FIELD_RANGE, num, range));
                }
            }
        };
        Validations.checkDateRange = function (dt, range) {
            var rangeParts = range.split(",");
            if (!!rangeParts[0]) {
                if (dt < Validations._dtRangeToDate(rangeParts[0])) {
                    throw new Error(utils.str.format(lang_19.ERRS.ERR_FIELD_RANGE, dt, range));
                }
            }
            if (!!rangeParts[1]) {
                if (dt > Validations._dtRangeToDate(rangeParts[1])) {
                    throw new Error(utils.str.format(lang_19.ERRS.ERR_FIELD_RANGE, dt, range));
                }
            }
        };
        return Validations;
    }());
    exports.Validations = Validations;
});
define("jriapp_collection/collection", ["require", "exports", "jriapp_utils/syschecks", "jriapp_core/object", "jriapp_core/lang", "jriapp_utils/waitqueue", "jriapp_utils/utils", "jriapp_core/parser", "jriapp_collection/int", "jriapp_collection/utils", "jriapp_collection/validation"], function (require, exports, syschecks_9, object_17, lang_20, waitqueue_2, utils_26, parser_5, int_6, utils_27, validation_1) {
    "use strict";
    var utils = utils_26.Utils, coreUtils = utils.core, strUtils = utils.str, checks = utils.check, parse = parser_5.parser;
    syschecks_9.SysChecks._isCollection = function (obj) { return (!!obj && obj instanceof BaseCollection); };
    var COLL_EVENTS = {
        begin_edit: "begin_edit",
        end_edit: "end_edit",
        before_begin_edit: "before_be",
        before_end_edit: "before_ee",
        collection_changed: "coll_changed",
        fill: "fill",
        item_deleting: "item_deleting",
        item_adding: "item_adding",
        item_added: "item_added",
        validate: "validate",
        current_changing: "current_changing",
        page_changing: "page_changing",
        errors_changed: "errors_changed",
        status_changed: "status_changed",
        clearing: "clearing",
        cleared: "cleared",
        commit_changes: "commit_changes"
    };
    var BaseCollection = (function (_super) {
        __extends(BaseCollection, _super);
        function BaseCollection() {
            _super.call(this);
            var self = this;
            this._options = { enablePaging: false, pageSize: 50 };
            this._isLoading = false;
            this._isUpdating = false;
            this._EditingItem = null;
            this._perms = { canAddRow: true, canEditRow: true, canDeleteRow: true, canRefreshRow: false };
            this._totalCount = 0;
            this._pageIndex = 0;
            this._items = [];
            this._itemsByKey = {};
            this._currentPos = -1;
            this._newKey = 0;
            this._fieldMap = {};
            this._fieldInfos = [];
            this._errors = {};
            this._ignoreChangeErrors = false;
            this._pkInfo = null;
            this._waitQueue = new waitqueue_2.WaitQueue(this);
            this._internal = {
                getEditingItem: function () {
                    return self._getEditingItem();
                },
                getStrValue: function (val, fieldInfo) {
                    return self._getStrValue(val, fieldInfo);
                },
                onBeforeEditing: function (item, isBegin, isCanceled) {
                    self._onBeforeEditing(item, isBegin, isCanceled);
                },
                onEditing: function (item, isBegin, isCanceled) {
                    self._onEditing(item, isBegin, isCanceled);
                },
                onCommitChanges: function (item, isBegin, isRejected, status) {
                    self._onCommitChanges(item, isBegin, isRejected, status);
                },
                validateItem: function (item) {
                    return self._validateItem(item);
                },
                validateItemField: function (item, fieldName) {
                    return self._validateItemField(item, fieldName);
                },
                addErrors: function (item, errors) {
                    self._addErrors(item, errors);
                },
                addError: function (item, fieldName, errors) {
                    self._addError(item, fieldName, errors);
                },
                removeError: function (item, fieldName) {
                    self._removeError(item, fieldName);
                },
                removeAllErrors: function (item) {
                    self._removeAllErrors(item);
                },
                getErrors: function (item) {
                    return self._getErrors(item);
                },
                onErrorsChanged: function (item) {
                    self._onErrorsChanged(item);
                },
                onItemDeleting: function (args) {
                    return self._onItemDeleting(args);
                }
            };
        }
        BaseCollection.getEmptyFieldInfo = function (fieldName) {
            var fieldInfo = {
                fieldName: fieldName,
                isPrimaryKey: 0,
                dataType: 0,
                isNullable: true,
                maxLength: -1,
                isReadOnly: false,
                isAutoGenerated: false,
                allowClientDefault: false,
                dateConversion: 0,
                fieldType: 1,
                isNeedOriginal: false,
                range: null,
                regex: null,
                nested: null,
                dependentOn: null,
                fullName: null
            };
            return fieldInfo;
        };
        BaseCollection.prototype._getEventNames = function () {
            var base_events = _super.prototype._getEventNames.call(this);
            var events = Object.keys(COLL_EVENTS).map(function (key, i, arr) { return COLL_EVENTS[key]; });
            return events.concat(base_events);
        };
        BaseCollection.prototype.addOnClearing = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.clearing, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnClearing = function (nmspace) {
            this._removeHandler(COLL_EVENTS.clearing, nmspace);
        };
        BaseCollection.prototype.addOnCleared = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.cleared, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnCleared = function (nmspace) {
            this._removeHandler(COLL_EVENTS.cleared, nmspace);
        };
        BaseCollection.prototype.addOnCollChanged = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.collection_changed, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnCollChanged = function (nmspace) {
            this._removeHandler(COLL_EVENTS.collection_changed, nmspace);
        };
        BaseCollection.prototype.addOnFill = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.fill, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnFill = function (nmspace) {
            this._removeHandler(COLL_EVENTS.fill, nmspace);
        };
        BaseCollection.prototype.addOnValidate = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.validate, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnValidate = function (nmspace) {
            this._removeHandler(COLL_EVENTS.validate, nmspace);
        };
        BaseCollection.prototype.addOnItemDeleting = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.item_deleting, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnItemDeleting = function (nmspace) {
            this._removeHandler(COLL_EVENTS.item_deleting, nmspace);
        };
        BaseCollection.prototype.addOnItemAdding = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.item_adding, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnItemAdding = function (nmspace) {
            this._removeHandler(COLL_EVENTS.item_adding, nmspace);
        };
        BaseCollection.prototype.addOnItemAdded = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.item_added, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnItemAdded = function (nmspace) {
            this._removeHandler(COLL_EVENTS.item_added, nmspace);
        };
        BaseCollection.prototype.addOnCurrentChanging = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.current_changing, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnCurrentChanging = function (nmspace) {
            this._removeHandler(COLL_EVENTS.current_changing, nmspace);
        };
        BaseCollection.prototype.addOnPageChanging = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.page_changing, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnPageChanging = function (nmspace) {
            this._removeHandler(COLL_EVENTS.page_changing, nmspace);
        };
        BaseCollection.prototype.addOnErrorsChanged = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.errors_changed, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnErrorsChanged = function (nmspace) {
            this._removeHandler(COLL_EVENTS.errors_changed, nmspace);
        };
        BaseCollection.prototype.addOnBeginEdit = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.begin_edit, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnBeginEdit = function (nmspace) {
            this._removeHandler(COLL_EVENTS.begin_edit, nmspace);
        };
        BaseCollection.prototype.addOnEndEdit = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.end_edit, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnEndEdit = function (nmspace) {
            this._removeHandler(COLL_EVENTS.end_edit, nmspace);
        };
        BaseCollection.prototype.addOnBeforeBeginEdit = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.before_begin_edit, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnBeforeBeginEdit = function (nmspace) {
            this._removeHandler(COLL_EVENTS.before_begin_edit, nmspace);
        };
        BaseCollection.prototype.addOnBeforeEndEdit = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.before_end_edit, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeBeforeOnEndEdit = function (nmspace) {
            this._removeHandler(COLL_EVENTS.before_end_edit, nmspace);
        };
        BaseCollection.prototype.addOnCommitChanges = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.commit_changes, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnCommitChanges = function (nmspace) {
            this._removeHandler(COLL_EVENTS.commit_changes, nmspace);
        };
        BaseCollection.prototype.addOnStatusChanged = function (fn, nmspace, context, priority) {
            this._addHandler(COLL_EVENTS.status_changed, fn, nmspace, context, priority);
        };
        BaseCollection.prototype.removeOnStatusChanged = function (nmspace) {
            this._removeHandler(COLL_EVENTS.status_changed, nmspace);
        };
        BaseCollection.prototype.addOnPageIndexChanged = function (handler, nmspace, context) {
            this.addOnPropertyChange(int_6.PROP_NAME.pageIndex, handler, nmspace, context);
        };
        BaseCollection.prototype.addOnPageSizeChanged = function (handler, nmspace, context) {
            this.addOnPropertyChange(int_6.PROP_NAME.pageSize, handler, nmspace, context);
        };
        BaseCollection.prototype.addOnTotalCountChanged = function (handler, nmspace, context) {
            this.addOnPropertyChange(int_6.PROP_NAME.totalCount, handler, nmspace, context);
        };
        BaseCollection.prototype.addOnCurrentChanged = function (handler, nmspace, context) {
            this.addOnPropertyChange(int_6.PROP_NAME.currentItem, handler, nmspace, context);
        };
        BaseCollection.prototype._getPKFieldInfos = function () {
            if (!!this._pkInfo)
                return this._pkInfo;
            var fldMap = this._fieldMap, pk = [];
            coreUtils.forEachProp(fldMap, function (fldName) {
                if (fldMap[fldName].isPrimaryKey > 0) {
                    pk.push(fldMap[fldName]);
                }
            });
            pk.sort(function (a, b) {
                return a.isPrimaryKey - b.isPrimaryKey;
            });
            this._pkInfo = pk;
            return this._pkInfo;
        };
        BaseCollection.prototype._checkCurrentChanging = function (newCurrent) {
            try {
                this.endEdit();
            }
            catch (ex) {
                utils.err.reThrow(ex, this.handleError(ex, this));
            }
        };
        BaseCollection.prototype._onCurrentChanging = function (newCurrent) {
            this._checkCurrentChanging(newCurrent);
            this.raiseEvent(COLL_EVENTS.current_changing, { newCurrent: newCurrent });
        };
        BaseCollection.prototype._onCurrentChanged = function () {
            this.raisePropertyChanged(int_6.PROP_NAME.currentItem);
        };
        BaseCollection.prototype._onCountChanged = function () {
            this.raisePropertyChanged(int_6.PROP_NAME.count);
        };
        BaseCollection.prototype._onEditingChanged = function () {
            this.raisePropertyChanged(int_6.PROP_NAME.isEditing);
        };
        BaseCollection.prototype._onItemStatusChanged = function (item, oldStatus) {
            this.raiseEvent(COLL_EVENTS.status_changed, { item: item, oldStatus: oldStatus, key: item._key });
        };
        BaseCollection.prototype._onCollectionChanged = function (args) {
            this.raiseEvent(COLL_EVENTS.collection_changed, args);
        };
        BaseCollection.prototype._onFillEnd = function (args) {
            this.raiseEvent(COLL_EVENTS.fill, args);
        };
        BaseCollection.prototype._onItemAdding = function (item) {
            var args = { item: item, isCancel: false };
            this.raiseEvent(COLL_EVENTS.item_adding, args);
            if (args.isCancel)
                utils.err.throwDummy(new Error("operation canceled"));
        };
        BaseCollection.prototype._onItemAdded = function (item) {
            var args = { item: item, isAddNewHandled: false };
            this.raiseEvent(COLL_EVENTS.item_added, args);
        };
        BaseCollection.prototype._createNew = function () {
            throw new Error("_createNew Not implemented");
        };
        BaseCollection.prototype._attach = function (item, itemPos) {
            if (!!this._itemsByKey[item._key]) {
                throw new Error(lang_20.ERRS.ERR_ITEM_IS_ATTACHED);
            }
            try {
                this.endEdit();
            }
            catch (ex) {
                utils.err.reThrow(ex, this.handleError(ex, this));
            }
            var pos;
            item._aspect._onAttaching();
            if (checks.isNt(itemPos)) {
                pos = this._items.length;
                this._items.push(item);
            }
            else {
                pos = itemPos;
                utils.arr.insert(this._items, item, pos);
            }
            this._itemsByKey[item._key] = item;
            this._onCollectionChanged({ changeType: 1, reason: 0, oper: 2, items: [item], pos: [pos] });
            item._aspect._onAttach();
            this.raisePropertyChanged(int_6.PROP_NAME.count);
            this._onCurrentChanging(item);
            this._currentPos = pos;
            this._onCurrentChanged();
            return pos;
        };
        BaseCollection.prototype._onRemoved = function (item, pos) {
            try {
                this._onCollectionChanged({ changeType: 0, reason: 0, oper: 3, items: [item], pos: [pos] });
            }
            finally {
                this.raisePropertyChanged(int_6.PROP_NAME.count);
            }
        };
        BaseCollection.prototype._onPageSizeChanged = function () {
        };
        BaseCollection.prototype._onPageChanging = function () {
            var args = { page: this.pageIndex, isCancel: false };
            this.raiseEvent(COLL_EVENTS.page_changing, args);
            if (!args.isCancel) {
                try {
                    this.endEdit();
                }
                catch (ex) {
                    utils.err.reThrow(ex, this.handleError(ex, this));
                }
            }
            return !args.isCancel;
        };
        BaseCollection.prototype._onPageChanged = function () {
        };
        BaseCollection.prototype._setCurrentItem = function (v) {
            var self = this, oldPos = self._currentPos;
            if (!v) {
                if (oldPos !== -1) {
                    self._onCurrentChanging(null);
                    self._currentPos = -1;
                    self._onCurrentChanged();
                }
                return;
            }
            if (!v._key)
                throw new Error(lang_20.ERRS.ERR_ITEM_IS_DETACHED);
            var oldItem, pos, item = self.getItemByKey(v._key);
            if (!item) {
                throw new Error(lang_20.ERRS.ERR_ITEM_IS_NOTFOUND);
            }
            oldItem = self.getItemByPos(oldPos);
            pos = self._items.indexOf(v);
            if (pos < 0) {
                throw new Error(lang_20.ERRS.ERR_ITEM_IS_NOTFOUND);
            }
            if (oldPos !== pos || oldItem !== v) {
                self._onCurrentChanging(v);
                self._currentPos = pos;
                self._onCurrentChanged();
            }
        };
        BaseCollection.prototype._destroyItems = function () {
            this._items.forEach(function (item) {
                item._aspect._setIsDetached(true);
                item.destroy();
            });
        };
        BaseCollection.prototype._isHasProp = function (prop) {
            if (strUtils.startsWith(prop, "[")) {
                var res = parse.resolveProp(this, prop);
                return !checks.isUndefined(res);
            }
            return _super.prototype._isHasProp.call(this, prop);
        };
        BaseCollection.prototype._getEditingItem = function () {
            return this._EditingItem;
        };
        BaseCollection.prototype._getStrValue = function (val, fieldInfo) {
            var dcnv = fieldInfo.dateConversion, stz = coreUtils.get_timeZoneOffset();
            return utils_27.valueUtils.stringifyValue(val, dcnv, fieldInfo.dataType, stz);
        };
        BaseCollection.prototype._onBeforeEditing = function (item, isBegin, isCanceled) {
            if (this._isUpdating)
                return;
            if (isBegin) {
                this.raiseEvent(COLL_EVENTS.before_begin_edit, { item: item });
            }
            else {
                this.raiseEvent(COLL_EVENTS.before_end_edit, { item: item, isCanceled: isCanceled });
            }
        };
        BaseCollection.prototype._onEditing = function (item, isBegin, isCanceled) {
            if (this._isUpdating)
                return;
            if (isBegin) {
                this._EditingItem = item;
                this.raiseEvent(COLL_EVENTS.begin_edit, { item: item });
                this._onEditingChanged();
                if (!!item) {
                    item._aspect.raisePropertyChanged(int_6.PROP_NAME.isEditing);
                }
            }
            else {
                var oldItem = this._EditingItem;
                this._EditingItem = null;
                this.raiseEvent(COLL_EVENTS.end_edit, { item: item, isCanceled: isCanceled });
                this._onEditingChanged();
                if (!!oldItem) {
                    oldItem._aspect.raisePropertyChanged(int_6.PROP_NAME.isEditing);
                }
            }
        };
        BaseCollection.prototype._onCommitChanges = function (item, isBegin, isRejected, status) {
            this.raiseEvent(COLL_EVENTS.commit_changes, { item: item, isBegin: isBegin, isRejected: isRejected, status: status });
        };
        BaseCollection.prototype._validateItem = function (item) {
            var args = { item: item, fieldName: null, errors: [] };
            this.raiseEvent(COLL_EVENTS.validate, args);
            if (!!args.errors && args.errors.length > 0)
                return { fieldName: null, errors: args.errors };
            else
                return null;
        };
        BaseCollection.prototype._validateItemField = function (item, fieldName) {
            var args = { item: item, fieldName: fieldName, errors: [] };
            this.raiseEvent(COLL_EVENTS.validate, args);
            if (!!args.errors && args.errors.length > 0)
                return { fieldName: fieldName, errors: args.errors };
            else
                return null;
        };
        BaseCollection.prototype._addErrors = function (item, errors) {
            var self = this;
            this._ignoreChangeErrors = true;
            try {
                errors.forEach(function (err) {
                    self._addError(item, err.fieldName, err.errors);
                });
            }
            finally {
                this._ignoreChangeErrors = false;
            }
            this._onErrorsChanged(item);
        };
        BaseCollection.prototype._addError = function (item, fieldName, errors) {
            if (!fieldName)
                fieldName = "*";
            if (!(checks.isArray(errors) && errors.length > 0)) {
                this._removeError(item, fieldName);
                return;
            }
            if (!this._errors[item._key])
                this._errors[item._key] = {};
            var itemErrors = this._errors[item._key];
            itemErrors[fieldName] = errors;
            if (!this._ignoreChangeErrors)
                this._onErrorsChanged(item);
        };
        BaseCollection.prototype._removeError = function (item, fieldName) {
            var itemErrors = this._errors[item._key];
            if (!itemErrors)
                return;
            if (!fieldName)
                fieldName = "*";
            if (!itemErrors[fieldName])
                return;
            delete itemErrors[fieldName];
            if (Object.keys(itemErrors).length === 0) {
                delete this._errors[item._key];
            }
            this._onErrorsChanged(item);
        };
        BaseCollection.prototype._removeAllErrors = function (item) {
            var self = this, itemErrors = this._errors[item._key];
            if (!itemErrors)
                return;
            delete this._errors[item._key];
            self._onErrorsChanged(item);
        };
        BaseCollection.prototype._getErrors = function (item) {
            return this._errors[item._key];
        };
        BaseCollection.prototype._onErrorsChanged = function (item) {
            var args = { item: item };
            this.raiseEvent(COLL_EVENTS.errors_changed, args);
            item._aspect.raiseErrorsChanged({});
        };
        BaseCollection.prototype._onItemDeleting = function (args) {
            this.raiseEvent(COLL_EVENTS.item_deleting, args);
            return !args.isCancel;
        };
        BaseCollection.prototype._clear = function (reason, oper) {
            this.raiseEvent(COLL_EVENTS.clearing, { reason: reason });
            this.cancelEdit();
            this._EditingItem = null;
            this._newKey = 0;
            this.currentItem = null;
            this._destroyItems();
            this._items = [];
            this._itemsByKey = {};
            this._errors = {};
            if (oper !== 1)
                this._onCollectionChanged({ changeType: 2, reason: reason, oper: oper, items: [], pos: [] });
            this.raiseEvent(COLL_EVENTS.cleared, { reason: reason });
            this._onCountChanged();
        };
        BaseCollection.prototype._setIsLoading = function (v) {
            if (this._isLoading !== v) {
                this._isLoading = v;
                this.raisePropertyChanged(int_6.PROP_NAME.isLoading);
            }
        };
        BaseCollection.prototype._getInternal = function () {
            return this._internal;
        };
        BaseCollection.prototype._getSortFn = function (fieldNames, sortOrder) {
            var self = this, mult = 1;
            if (sortOrder === 1)
                mult = -1;
            var fn_sort = function (a, b) {
                var res = 0, i, len, af, bf, fieldName;
                for (i = 0, len = fieldNames.length; i < len; i += 1) {
                    fieldName = fieldNames[i];
                    af = parse.resolvePath(a, fieldName);
                    bf = parse.resolvePath(b, fieldName);
                    if (af === checks.undefined)
                        af = null;
                    if (bf === checks.undefined)
                        bf = null;
                    if (af === null && bf !== null)
                        res = -1 * mult;
                    else if (af !== null && bf === null)
                        res = mult;
                    else if (af < bf)
                        res = -1 * mult;
                    else if (af > bf)
                        res = mult;
                    else
                        res = 0;
                    if (res !== 0)
                        return res;
                }
                return res;
            };
            return fn_sort;
        };
        BaseCollection.prototype.getFieldInfo = function (fieldName) {
            var parts = fieldName.split(".");
            var fld = this._fieldMap[parts[0]];
            if (parts.length === 1) {
                return fld;
            }
            if (fld.fieldType === 5) {
                for (var i = 1; i < parts.length; i += 1) {
                    fld = utils_27.fn_getPropertyByName(parts[i], fld.nested);
                }
                return fld;
            }
            throw new Error(strUtils.format(lang_20.ERRS.ERR_PARAM_INVALID, "fieldName", fieldName));
        };
        BaseCollection.prototype.getFieldNames = function () {
            return this.getFieldInfos().map(function (f) {
                return f.fieldName;
            });
        };
        BaseCollection.prototype.getFieldInfos = function () {
            return this._fieldInfos;
        };
        BaseCollection.prototype.cancelEdit = function () {
            if (this.isEditing) {
                this._EditingItem._aspect.cancelEdit();
            }
        };
        BaseCollection.prototype.endEdit = function () {
            var EditingItem;
            if (this.isEditing) {
                EditingItem = this._EditingItem;
                if (!EditingItem._aspect.endEdit() && EditingItem._aspect.getIsHasErrors()) {
                    this.handleError(new validation_1.ValidationError(EditingItem._aspect.getAllErrors(), EditingItem), EditingItem);
                    this.cancelEdit();
                }
            }
        };
        BaseCollection.prototype.getItemsWithErrors = function () {
            var self = this, res = [];
            coreUtils.forEachProp(this._errors, function (key) {
                var item = self.getItemByKey(key);
                res.push(item);
            });
            return res;
        };
        BaseCollection.prototype.addNew = function () {
            var item, isHandled;
            item = this._createNew();
            this._onItemAdding(item);
            this._attach(item, null);
            try {
                this.currentItem = item;
                item._aspect.beginEdit();
                this._onItemAdded(item);
            }
            catch (ex) {
                isHandled = this.handleError(ex, this);
                item._aspect.cancelEdit();
                utils.err.reThrow(ex, isHandled);
            }
            return item;
        };
        BaseCollection.prototype.getItemByPos = function (pos) {
            if (pos < 0 || pos >= this._items.length)
                return null;
            return this._items[pos];
        };
        BaseCollection.prototype.getItemByKey = function (key) {
            if (!key)
                throw new Error(lang_20.ERRS.ERR_KEY_IS_EMPTY);
            return this._itemsByKey["" + key];
        };
        BaseCollection.prototype.findByPK = function () {
            var vals = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                vals[_i - 0] = arguments[_i];
            }
            if (arguments.length === 0)
                return null;
            var self = this, pkInfo = self._getPKFieldInfos(), arr = [], key, values = [];
            if (vals.length === 1 && checks.isArray(vals[0])) {
                values = vals[0];
            }
            else
                values = vals;
            if (values.length !== pkInfo.length) {
                return null;
            }
            for (var i = 0, len = pkInfo.length; i < len; i += 1) {
                arr.push(self._getStrValue(values[i], pkInfo[i]));
            }
            key = arr.join(";");
            return self.getItemByKey(key);
        };
        BaseCollection.prototype.moveFirst = function (skipDeleted) {
            var pos = 0, old = this._currentPos;
            if (old === pos)
                return false;
            var item = this.getItemByPos(pos);
            if (!item)
                return false;
            if (!!skipDeleted) {
                if (item._aspect.isDeleted) {
                    return this.moveNext(true);
                }
            }
            this._onCurrentChanging(item);
            this._currentPos = pos;
            this._onCurrentChanged();
            return true;
        };
        BaseCollection.prototype.movePrev = function (skipDeleted) {
            var pos = -1, old = this._currentPos;
            var item = this.getItemByPos(old);
            if (!!item) {
                pos = old;
                pos -= 1;
            }
            item = this.getItemByPos(pos);
            if (!item)
                return false;
            if (!!skipDeleted) {
                if (item._aspect.isDeleted) {
                    this._currentPos = pos;
                    return this.movePrev(true);
                }
            }
            this._onCurrentChanging(item);
            this._currentPos = pos;
            this._onCurrentChanged();
            return true;
        };
        BaseCollection.prototype.moveNext = function (skipDeleted) {
            var pos = -1, old = this._currentPos;
            var item = this.getItemByPos(old);
            if (!!item) {
                pos = old;
                pos += 1;
            }
            item = this.getItemByPos(pos);
            if (!item)
                return false;
            if (!!skipDeleted) {
                if (item._aspect.isDeleted) {
                    this._currentPos = pos;
                    return this.moveNext(true);
                }
            }
            this._onCurrentChanging(item);
            this._currentPos = pos;
            this._onCurrentChanged();
            return true;
        };
        BaseCollection.prototype.moveLast = function (skipDeleted) {
            var pos = this._items.length - 1, old = this._currentPos;
            if (old === pos)
                return false;
            var item = this.getItemByPos(pos);
            if (!item)
                return false;
            if (!!skipDeleted) {
                if (item._aspect.isDeleted) {
                    return this.movePrev(true);
                }
            }
            this._onCurrentChanging(item);
            this._currentPos = pos;
            this._onCurrentChanged();
            return true;
        };
        BaseCollection.prototype.goTo = function (pos) {
            var old = this._currentPos;
            if (old === pos)
                return false;
            var item = this.getItemByPos(pos);
            if (!item)
                return false;
            this._onCurrentChanging(item);
            this._currentPos = pos;
            this._onCurrentChanged();
            return true;
        };
        BaseCollection.prototype.forEach = function (callback, thisObj) {
            this._items.forEach(callback, thisObj);
        };
        BaseCollection.prototype.removeItem = function (item) {
            if (item._aspect.isDetached || !this._itemsByKey[item._key]) {
                return;
            }
            try {
                var oldPos = utils.arr.remove(this._items, item), key = item._key;
                if (oldPos < 0) {
                    throw new Error(lang_20.ERRS.ERR_ITEM_IS_NOTFOUND);
                }
                this._onRemoved(item, oldPos);
                delete this._itemsByKey[key];
                delete this._errors[key];
                item._aspect._setIsDetached(true);
                var test = this.getItemByPos(oldPos), curPos = this._currentPos;
                if (curPos === oldPos) {
                    if (!test) {
                        this._currentPos = curPos - 1;
                    }
                    this._onCurrentChanged();
                }
                if (curPos > oldPos) {
                    this._currentPos = curPos - 1;
                    this._onCurrentChanged();
                }
            }
            finally {
                if (!item.getIsDestroyCalled()) {
                    item.destroy();
                }
            }
        };
        BaseCollection.prototype.getIsHasErrors = function () {
            if (!this._errors)
                return false;
            return (Object.keys(this._errors).length > 0);
        };
        BaseCollection.prototype.sort = function (fieldNames, sortOrder) {
            return this.sortLocal(fieldNames, sortOrder);
        };
        BaseCollection.prototype.sortLocal = function (fieldNames, sortOrder) {
            var sortFn = this._getSortFn(fieldNames, sortOrder);
            var self = this, deferred = utils.defer.createDeferred();
            this.waitForNotLoading(function () {
                var cur = self.currentItem;
                self._setIsLoading(true);
                try {
                    self._items.sort(sortFn);
                    self._onCollectionChanged({ changeType: 2, reason: 2, oper: 5, items: [], pos: [] });
                }
                finally {
                    self._setIsLoading(false);
                    deferred.resolve();
                }
                self.currentItem = null;
                self.currentItem = cur;
            }, "sorting");
            return deferred.promise();
        };
        BaseCollection.prototype.clear = function () {
            this._clear(0, 0);
            this.totalCount = 0;
        };
        BaseCollection.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            this._waitQueue.destroy();
            this._waitQueue = null;
            this.clear();
            this._fieldMap = {};
            this._fieldInfos = [];
            _super.prototype.destroy.call(this);
        };
        BaseCollection.prototype.waitForNotLoading = function (callback, groupName) {
            this._waitQueue.enQueue({
                prop: int_6.PROP_NAME.isLoading,
                groupName: groupName,
                predicate: function (val) {
                    return !val;
                },
                action: callback,
                actionArgs: [],
                lastWins: !!groupName
            });
        };
        BaseCollection.prototype.toString = function () {
            return "Collection";
        };
        Object.defineProperty(BaseCollection.prototype, "options", {
            get: function () { return this._options; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "items", {
            get: function () { return this._items; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "currentItem", {
            get: function () { return this.getItemByPos(this._currentPos); },
            set: function (v) { this._setCurrentItem(v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "count", {
            get: function () { return this._items.length; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "totalCount", {
            get: function () { return this._totalCount; },
            set: function (v) {
                if (v !== this._totalCount) {
                    this._totalCount = v;
                    this.raisePropertyChanged(int_6.PROP_NAME.totalCount);
                    this.raisePropertyChanged(int_6.PROP_NAME.pageCount);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "pageSize", {
            get: function () { return this._options.pageSize; },
            set: function (v) {
                if (this._options.pageSize !== v) {
                    this._options.pageSize = v;
                    this.raisePropertyChanged(int_6.PROP_NAME.pageSize);
                    this._onPageSizeChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "pageIndex", {
            get: function () { return this._pageIndex; },
            set: function (v) {
                if (v !== this._pageIndex && this.isPagingEnabled) {
                    if (v < 0)
                        return;
                    if (!this._onPageChanging()) {
                        return;
                    }
                    this._pageIndex = v;
                    this._onPageChanged();
                    this.raisePropertyChanged(int_6.PROP_NAME.pageIndex);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "pageCount", {
            get: function () {
                var rowCount = this.totalCount, rowPerPage = this.pageSize, result;
                if ((rowCount === 0) || (rowPerPage === 0)) {
                    return 0;
                }
                if ((rowCount % rowPerPage) === 0) {
                    result = (rowCount / rowPerPage);
                }
                else {
                    result = (rowCount / rowPerPage);
                    result = Math.floor(result) + 1;
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "isPagingEnabled", {
            get: function () { return this._options.enablePaging; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "isEditing", {
            get: function () { return !!this._EditingItem; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "isLoading", {
            get: function () { return this._isLoading; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "isUpdating", {
            get: function () { return this._isUpdating; },
            set: function (v) {
                if (this._isUpdating !== v) {
                    this._isUpdating = v;
                    this.raisePropertyChanged(int_6.PROP_NAME.isUpdating);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCollection.prototype, "permissions", {
            get: function () { return this._perms; },
            enumerable: true,
            configurable: true
        });
        return BaseCollection;
    }(object_17.BaseObject));
    exports.BaseCollection = BaseCollection;
});
define("jriapp_collection/aspect", ["require", "exports", "jriapp_core/object", "jriapp_utils/coreutils", "jriapp_utils/utils", "jriapp_core/lang", "jriapp_collection/int", "jriapp_collection/utils", "jriapp_collection/validation"], function (require, exports, object_18, coreutils_16, utils_28, lang_21, int_7, utils_29, validation_2) {
    "use strict";
    var utils = utils_28.Utils, coreUtils = utils.core, strUtils = utils.str, checks = utils.check;
    var ItemAspect = (function (_super) {
        __extends(ItemAspect, _super);
        function ItemAspect(collection) {
            _super.call(this);
            this._key = null;
            this._item = null;
            this._collection = collection;
            this._status = 0;
            this._saveVals = null;
            this._vals = {};
            this._notEdited = true;
            this._isCached = false;
            this._isDetached = false;
        }
        ItemAspect.prototype._setIsDetached = function (v) {
            this._isDetached = v;
        };
        ItemAspect.prototype._setIsCached = function (v) {
            this._isCached = v;
        };
        ItemAspect.prototype._getEventNames = function () {
            var base_events = _super.prototype._getEventNames.call(this);
            return [int_7.ITEM_EVENTS.errors_changed].concat(base_events);
        };
        ItemAspect.prototype._onErrorsChanged = function (args) {
            this.raiseEvent(int_7.ITEM_EVENTS.errors_changed, args);
        };
        ItemAspect.prototype._beginEdit = function () {
            var coll = this.collection;
            var isHandled = false;
            if (coll.isEditing) {
                var item = coll._getInternal().getEditingItem();
                if (item._aspect === this)
                    return false;
                try {
                    item._aspect.endEdit();
                    if (item._aspect.getIsHasErrors()) {
                        this.handleError(new validation_2.ValidationError(item._aspect.getAllErrors(), item), item);
                        item._aspect.cancelEdit();
                    }
                }
                catch (ex) {
                    isHandled = this.handleError(ex, item);
                    item._aspect.cancelEdit();
                    coreutils_16.ERROR.reThrow(ex, isHandled);
                }
            }
            if (this.isDetached)
                return false;
            this._saveVals = coreUtils.clone(this._vals);
            this.collection.currentItem = this.item;
            return true;
        };
        ItemAspect.prototype._endEdit = function () {
            if (!this.isEditing)
                return false;
            var coll = this.collection, self = this, internal = coll._getInternal();
            if (this.getIsHasErrors()) {
                return false;
            }
            internal.removeAllErrors(this.item);
            var validation_errors = this._validateAll();
            if (validation_errors.length > 0) {
                internal.addErrors(self.item, validation_errors);
            }
            if (this.getIsHasErrors()) {
                return false;
            }
            this._saveVals = null;
            return true;
        };
        ItemAspect.prototype._cancelEdit = function () {
            if (!this.isEditing)
                return false;
            var coll = this.collection, self = this, item = self.item, changes = this._saveVals;
            this._vals = this._saveVals;
            this._saveVals = null;
            coll._getInternal().removeAllErrors(item);
            coll.getFieldNames().forEach(function (name) {
                if (changes[name] !== self._vals[name]) {
                    item.raisePropertyChanged(name);
                }
            });
            return true;
        };
        ItemAspect.prototype._validate = function () {
            return this.collection._getInternal().validateItem(this.item);
        };
        ItemAspect.prototype._skipValidate = function (fieldInfo, val) {
            return false;
        };
        ItemAspect.prototype._validateField = function (fieldName) {
            var value, fieldInfo = this.getFieldInfo(fieldName), valInfo = null;
            try {
                value = coreUtils.getValue(this._vals, fieldName);
                if (this._skipValidate(fieldInfo, value))
                    return valInfo;
                if (this.isNew) {
                    if (value === null && !fieldInfo.isNullable && !fieldInfo.isReadOnly && !fieldInfo.isAutoGenerated)
                        throw new Error(lang_21.ERRS.ERR_FIELD_ISNOT_NULLABLE);
                }
                else {
                    if (value === null && !fieldInfo.isNullable && !fieldInfo.isReadOnly)
                        throw new Error(lang_21.ERRS.ERR_FIELD_ISNOT_NULLABLE);
                }
            }
            catch (ex) {
                valInfo = { fieldName: fieldName, errors: [ex.message] };
            }
            var tmpValInfo = this.collection._getInternal().validateItemField(this.item, fieldName);
            if (!!valInfo && !!tmpValInfo) {
                valInfo = { fieldName: valInfo.fieldName, errors: valInfo.errors.concat(tmpValInfo.errors) };
            }
            else if (!!tmpValInfo)
                valInfo = tmpValInfo;
            return valInfo;
        };
        ItemAspect.prototype._validateAll = function () {
            var self = this, fieldInfos = this.collection.getFieldInfos(), errs = [];
            utils_29.fn_traverseFields(fieldInfos, function (fld, fullName) {
                if (fld.fieldType !== 5) {
                    var res_1 = self._validateField(fullName);
                    if (!!res_1) {
                        errs.push(res_1);
                    }
                }
            });
            var res = self._validate();
            if (!!res) {
                errs.push(res);
            }
            return errs;
        };
        ItemAspect.prototype._checkVal = function (fieldInfo, val) {
            var res = val;
            if (this._skipValidate(fieldInfo, val))
                return res;
            if (fieldInfo.isReadOnly && !(fieldInfo.allowClientDefault && this.isNew))
                throw new Error(lang_21.ERRS.ERR_FIELD_READONLY);
            if ((val === null || (checks.isString(val) && !val)) && !fieldInfo.isNullable)
                throw new Error(lang_21.ERRS.ERR_FIELD_ISNOT_NULLABLE);
            if (val === null)
                return val;
            switch (fieldInfo.dataType) {
                case 0:
                    break;
                case 9:
                case 1:
                    if (!checks.isString(val)) {
                        throw new Error(strUtils.format(lang_21.ERRS.ERR_FIELD_WRONG_TYPE, val, "String"));
                    }
                    if (fieldInfo.maxLength > 0 && val.length > fieldInfo.maxLength)
                        throw new Error(strUtils.format(lang_21.ERRS.ERR_FIELD_MAXLEN, fieldInfo.maxLength));
                    if (fieldInfo.isNullable && val === "")
                        res = null;
                    if (!!fieldInfo.regex) {
                        var reg = new RegExp(fieldInfo.regex, "i");
                        if (!reg.test(val)) {
                            throw new Error(strUtils.format(lang_21.ERRS.ERR_FIELD_REGEX, val));
                        }
                    }
                    break;
                case 10:
                    if (!checks.isArray(val)) {
                        throw new Error(strUtils.format(lang_21.ERRS.ERR_FIELD_WRONG_TYPE, val, "Array"));
                    }
                    if (fieldInfo.maxLength > 0 && val.length > fieldInfo.maxLength)
                        throw new Error(strUtils.format(lang_21.ERRS.ERR_FIELD_MAXLEN, fieldInfo.maxLength));
                    break;
                case 2:
                    if (!checks.isBoolean(val))
                        throw new Error(strUtils.format(lang_21.ERRS.ERR_FIELD_WRONG_TYPE, val, "Boolean"));
                    break;
                case 3:
                case 4:
                case 5:
                    if (!checks.isNumber(val))
                        throw new Error(strUtils.format(lang_21.ERRS.ERR_FIELD_WRONG_TYPE, val, "Number"));
                    if (!!fieldInfo.range) {
                        validation_2.Validations.checkNumRange(Number(val), fieldInfo.range);
                    }
                    break;
                case 6:
                case 7:
                    if (!checks.isDate(val))
                        throw new Error(strUtils.format(lang_21.ERRS.ERR_FIELD_WRONG_TYPE, val, "Date"));
                    if (!!fieldInfo.range) {
                        validation_2.Validations.checkDateRange(val, fieldInfo.range);
                    }
                    break;
                case 8:
                    if (!checks.isDate(val))
                        throw new Error(strUtils.format(lang_21.ERRS.ERR_FIELD_WRONG_TYPE, val, "Time"));
                    break;
                default:
                    throw new Error(strUtils.format(lang_21.ERRS.ERR_PARAM_INVALID, "dataType", fieldInfo.dataType));
            }
            return res;
        };
        ItemAspect.prototype._resetIsNew = function () {
        };
        ItemAspect.prototype._fakeDestroy = function () {
            this.raiseEvent(int_7.ITEM_EVENTS.destroyed, {});
            this.removeNSHandlers();
        };
        ItemAspect.prototype.handleError = function (error, source) {
            if (!this._collection)
                return _super.prototype.handleError.call(this, error, source);
            else
                return this._collection.handleError(error, source);
        };
        ItemAspect.prototype._onAttaching = function () {
        };
        ItemAspect.prototype._onAttach = function () {
        };
        ItemAspect.prototype.raiseErrorsChanged = function (args) {
            this._onErrorsChanged(args);
        };
        ItemAspect.prototype.getFieldInfo = function (fieldName) {
            return this.collection.getFieldInfo(fieldName);
        };
        ItemAspect.prototype.getFieldNames = function () {
            return this.collection.getFieldNames();
        };
        ItemAspect.prototype.getErrorString = function () {
            var itemErrors = this.collection._getInternal().getErrors(this.item);
            if (!itemErrors)
                return "";
            var res = [];
            coreUtils.forEachProp(itemErrors, function (name) {
                res.push(strUtils.format("{0}: {1}", name, itemErrors[name]));
            });
            return res.join("|");
        };
        ItemAspect.prototype.submitChanges = function () {
            var deferred = utils.defer.createDeferred();
            deferred.reject();
            return deferred.promise();
        };
        ItemAspect.prototype.rejectChanges = function () {
        };
        ItemAspect.prototype.beginEdit = function () {
            if (this.isEditing)
                return false;
            var coll = this.collection, internal = coll._getInternal(), item = this.item;
            internal.onBeforeEditing(item, true, false);
            if (!this._beginEdit())
                return false;
            internal.onEditing(item, true, false);
            if (!!this._valueBag && this.isEditing) {
                coreUtils.iterateIndexer(this._valueBag, function (name, obj) {
                    if (!!obj && checks.isEditable(obj.val))
                        obj.val.beginEdit();
                });
            }
            return true;
        };
        ItemAspect.prototype.endEdit = function () {
            if (!this.isEditing)
                return false;
            var coll = this.collection, internal = coll._getInternal(), item = this.item;
            internal.onBeforeEditing(item, false, false);
            if (!!this._valueBag) {
                coreUtils.iterateIndexer(this._valueBag, function (name, obj) {
                    if (!!obj && checks.isEditable(obj.val))
                        obj.val.endEdit();
                });
            }
            if (!this._endEdit())
                return false;
            internal.onEditing(item, false, false);
            this._notEdited = false;
            return true;
        };
        ItemAspect.prototype.cancelEdit = function () {
            if (!this.isEditing)
                return false;
            var coll = this.collection, internal = coll._getInternal(), item = this.item, isNew = this.isNew;
            internal.onBeforeEditing(item, false, true);
            if (!!this._valueBag) {
                coreUtils.iterateIndexer(this._valueBag, function (name, obj) {
                    if (!!obj && checks.isEditable(obj.val))
                        obj.val.cancelEdit();
                });
            }
            if (!this._cancelEdit())
                return false;
            internal.onEditing(item, false, true);
            if (isNew && this._notEdited && !this.getIsDestroyCalled()) {
                this.destroy();
            }
            return true;
        };
        ItemAspect.prototype.deleteItem = function () {
            var coll = this.collection;
            if (!this.key)
                return false;
            var args = { item: this.item, isCancel: false };
            coll._getInternal().onItemDeleting(args);
            if (args.isCancel) {
                return false;
            }
            this.destroy();
            return true;
        };
        ItemAspect.prototype.getIsHasErrors = function () {
            var itemErrors = this.collection._getInternal().getErrors(this.item);
            return !!itemErrors;
        };
        ItemAspect.prototype.addOnErrorsChanged = function (fn, nmspace, context) {
            this._addHandler(int_7.ITEM_EVENTS.errors_changed, fn, nmspace, context);
        };
        ItemAspect.prototype.removeOnErrorsChanged = function (nmspace) {
            this._removeHandler(int_7.ITEM_EVENTS.errors_changed, nmspace);
        };
        ItemAspect.prototype.getFieldErrors = function (fieldName) {
            var itemErrors = this.collection._getInternal().getErrors(this.item);
            if (!itemErrors)
                return [];
            var name = fieldName;
            if (!fieldName)
                fieldName = "*";
            if (!itemErrors[fieldName])
                return [];
            if (fieldName === "*")
                name = null;
            return [
                { fieldName: name, errors: itemErrors[fieldName] }
            ];
        };
        ItemAspect.prototype.getAllErrors = function () {
            var itemErrors = this.collection._getInternal().getErrors(this.item);
            if (!itemErrors)
                return [];
            var res = [];
            coreUtils.forEachProp(itemErrors, function (name) {
                var fieldName = null;
                if (name !== "*") {
                    fieldName = name;
                }
                res.push({ fieldName: fieldName, errors: itemErrors[name] });
            });
            return res;
        };
        ItemAspect.prototype.getIErrorNotification = function () {
            return this;
        };
        ItemAspect.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            var self = this;
            this._isDestroyCalled = true;
            var coll = this._collection;
            var item = this._item;
            if (!!item) {
                this.cancelEdit();
                if (this._isCached) {
                    try {
                        this._fakeDestroy();
                    }
                    finally {
                        this._isDestroyCalled = false;
                    }
                    return;
                }
                if (!item._aspect.isDetached) {
                    coll.removeItem(item);
                }
            }
            this._key = null;
            this._saveVals = null;
            this._vals = {};
            this._isCached = false;
            this._isDetached = true;
            this._collection = null;
            if (!!this._valueBag) {
                utils.core.forEachProp(this._valueBag, function (name) {
                    self._delCustomVal(self._valueBag[name]);
                });
                this._valueBag = null;
            }
            _super.prototype.destroy.call(this);
        };
        ItemAspect.prototype._delCustomVal = function (old) {
            if (!!old) {
                if (checks.isEditable(old.val) && old.val.isEditing)
                    old.val.cancelEdit();
                if (old.isOwnIt && checks.isBaseObject(old.val))
                    old.val.destroy();
            }
        };
        ItemAspect.prototype.toString = function () {
            return "ItemAspect";
        };
        Object.defineProperty(ItemAspect.prototype, "item", {
            get: function () {
                return this._item;
            },
            set: function (v) {
                this._item = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemAspect.prototype, "isCanSubmit", {
            get: function () { return false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemAspect.prototype, "status", {
            get: function () { return this._status; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemAspect.prototype, "isNew", {
            get: function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemAspect.prototype, "isDeleted", {
            get: function () { return false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemAspect.prototype, "key", {
            get: function () { return this._key; },
            set: function (v) {
                if (v !== null)
                    v = "" + v;
                this._key = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemAspect.prototype, "collection", {
            get: function () { return this._collection; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemAspect.prototype, "isUpdating", {
            get: function () {
                var coll = this.collection;
                if (!coll)
                    return false;
                return coll.isUpdating;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemAspect.prototype, "isEditing", {
            get: function () {
                var coll = this._collection, editingItem = !coll ? null : coll._getInternal().getEditingItem();
                return !!editingItem && editingItem._aspect === this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemAspect.prototype, "isHasChanges", {
            get: function () { return this._status !== 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemAspect.prototype, "isCached", {
            get: function () { return this._isCached; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemAspect.prototype, "isDetached", {
            get: function () { return this._isDetached; },
            enumerable: true,
            configurable: true
        });
        ItemAspect.prototype.setCustomVal = function (name, val, isOwnVal) {
            if (isOwnVal === void 0) { isOwnVal = true; }
            if (this.getIsDestroyCalled())
                return;
            if (!this._valueBag) {
                if (checks.isNt(val))
                    return;
                this._valueBag = {};
            }
            var old = this._valueBag[name];
            if (!!old && old.val !== val) {
                this._delCustomVal(old);
            }
            if (checks.isNt(val)) {
                delete this._valueBag[name];
            }
            else {
                this._valueBag[name] = { val: val, isOwnIt: !!isOwnVal };
                if (this.isEditing && checks.isEditable(val))
                    val.beginEdit();
            }
        };
        ItemAspect.prototype.getCustomVal = function (name) {
            if (this.getIsDestroyCalled() || !this._valueBag)
                return null;
            var obj = this._valueBag[name];
            if (!obj) {
                return null;
            }
            return obj.val;
        };
        return ItemAspect;
    }(object_18.BaseObject));
    exports.ItemAspect = ItemAspect;
});
define("jriapp_collection/item", ["require", "exports", "jriapp_core/object", "jriapp_collection/int"], function (require, exports, object_19, int_8) {
    "use strict";
    var CollectionItem = (function (_super) {
        __extends(CollectionItem, _super);
        function CollectionItem(aspect) {
            _super.call(this);
            this.__aspect = aspect;
        }
        CollectionItem.prototype._fakeDestroy = function () {
            this.raiseEvent(int_8.ITEM_EVENTS.destroyed, {});
            this.removeNSHandlers();
        };
        Object.defineProperty(CollectionItem.prototype, "_aspect", {
            get: function () { return this.__aspect; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CollectionItem.prototype, "_key", {
            get: function () { return !!this.__aspect ? this.__aspect.key : null; },
            set: function (v) { if (!this.__aspect)
                return; this.__aspect.key = v; },
            enumerable: true,
            configurable: true
        });
        CollectionItem.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            var aspect = this.__aspect;
            if (!!aspect) {
                if (!aspect.getIsDestroyCalled()) {
                    aspect.destroy();
                }
                if (aspect.isCached) {
                    try {
                        this._fakeDestroy();
                    }
                    finally {
                        this._isDestroyCalled = false;
                    }
                }
                else {
                    _super.prototype.destroy.call(this);
                }
            }
        };
        CollectionItem.prototype.toString = function () {
            return "CollectionItem";
        };
        return CollectionItem;
    }(object_19.BaseObject));
    exports.CollectionItem = CollectionItem;
});
define("jriapp_collection/list", ["require", "exports", "jriapp_utils/coreutils", "jriapp_utils/utils", "jriapp_core/lang", "jriapp_collection/int", "jriapp_collection/utils", "jriapp_collection/collection", "jriapp_collection/aspect", "jriapp_collection/validation"], function (require, exports, coreutils_17, utils_30, lang_22, int_9, utils_31, collection_1, aspect_1, validation_3) {
    "use strict";
    var utils = utils_30.Utils, coreUtils = utils.core, strUtils = utils.str, checks = utils.check;
    function fn_initVals(coll, obj) {
        var vals = obj || {};
        if (!!obj) {
            var fieldInfos = coll.getFieldInfos();
            utils_31.fn_traverseFields(fieldInfos, function (fld, fullName) {
                if (fld.fieldType === 5)
                    coreUtils.setValue(vals, fullName, {}, false);
                else
                    coreUtils.setValue(vals, fullName, null, false);
            });
        }
        return vals;
    }
    ;
    var ListItemAspect = (function (_super) {
        __extends(ListItemAspect, _super);
        function ListItemAspect(coll, obj) {
            _super.call(this, coll);
            var self = this;
            this._isNew = !obj ? true : false;
            if (!!obj)
                this._vals = obj;
            else
                this._vals = fn_initVals(coll, obj);
        }
        ListItemAspect.prototype._setProp = function (name, val) {
            var validation_error, error, coll = this.collection;
            var item = this.item;
            if (this._getProp(name) !== val) {
                try {
                    coreUtils.setValue(this._vals, name, val, false);
                    item.raisePropertyChanged(name);
                    coll._getInternal().removeError(item, name);
                    validation_error = this._validateField(name);
                    if (!!validation_error) {
                        throw new validation_3.ValidationError([validation_error], this);
                    }
                }
                catch (ex) {
                    if (ex instanceof validation_3.ValidationError) {
                        error = ex;
                    }
                    else {
                        error = new validation_3.ValidationError([
                            { fieldName: name, errors: [ex.message] }
                        ], this);
                    }
                    coll._getInternal().addError(item, name, error.errors[0].errors);
                    throw error;
                }
            }
        };
        ListItemAspect.prototype._getProp = function (name) {
            return coreUtils.getValue(this._vals, name);
        };
        ListItemAspect.prototype._resetIsNew = function () {
            this._isNew = false;
        };
        ListItemAspect.prototype.toString = function () {
            if (!this.item)
                return "ListItemAspect";
            return this.item.toString() + "Aspect";
        };
        Object.defineProperty(ListItemAspect.prototype, "list", {
            get: function () { return this.collection; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListItemAspect.prototype, "vals", {
            get: function () { return this._vals; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListItemAspect.prototype, "isNew", {
            get: function () { return this._isNew; },
            enumerable: true,
            configurable: true
        });
        return ListItemAspect;
    }(aspect_1.ItemAspect));
    exports.ListItemAspect = ListItemAspect;
    var BaseList = (function (_super) {
        __extends(BaseList, _super);
        function BaseList(itemType, props) {
            _super.call(this);
            this._itemType = itemType;
            if (!!props)
                this._updateFieldMap(props);
        }
        BaseList.prototype._updateFieldMap = function (props) {
            var self = this;
            if (!checks.isArray(props) || props.length === 0)
                throw new Error(strUtils.format(lang_22.ERRS.ERR_PARAM_INVALID, "props", props));
            self._fieldMap = {};
            self._fieldInfos = [];
            props.forEach(function (prop) {
                var fldInfo = collection_1.BaseCollection.getEmptyFieldInfo(prop.name);
                fldInfo.dataType = prop.dtype;
                self._fieldMap[prop.name] = fldInfo;
                self._fieldInfos.push(fldInfo);
                utils_31.fn_traverseField(fldInfo, function (fld, fullName) {
                    fld.dependents = null;
                    fld.fullName = fullName;
                });
            });
        };
        BaseList.prototype._attach = function (item) {
            try {
                this.endEdit();
            }
            catch (ex) {
                coreutils_17.ERROR.reThrow(ex, this.handleError(ex, this));
            }
            return _super.prototype._attach.call(this, item);
        };
        BaseList.prototype._createNew = function () {
            return this.createItem(null);
        };
        BaseList.prototype._getNewKey = function (item) {
            var key = "clkey_" + this._newKey;
            this._newKey += 1;
            return key;
        };
        BaseList.prototype.createItem = function (obj) {
            var aspect = new ListItemAspect(this, obj);
            var item = new this._itemType(aspect);
            aspect.key = this._getNewKey(item);
            aspect.item = item;
            return item;
        };
        BaseList.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            this._itemType = null;
            _super.prototype.destroy.call(this);
        };
        BaseList.prototype.fillItems = function (objArray, clearAll) {
            var self = this, newItems = [], positions = [], items = [];
            if (!objArray)
                objArray = [];
            try {
                if (!!clearAll)
                    this.clear();
                objArray.forEach(function (obj) {
                    var item = self.createItem(obj);
                    var oldItem = self._itemsByKey[item._key];
                    if (!oldItem) {
                        self._items.push(item);
                        self._itemsByKey[item._key] = item;
                        newItems.push(item);
                        positions.push(self._items.length - 1);
                        items.push(item);
                    }
                    else {
                        items.push(oldItem);
                    }
                });
                if (newItems.length > 0) {
                    this.raisePropertyChanged(int_9.PROP_NAME.count);
                }
            }
            finally {
                this._onCollectionChanged({
                    changeType: 2,
                    reason: 0,
                    oper: 1,
                    items: items,
                    pos: positions
                });
                this._onFillEnd({
                    items: items,
                    newItems: newItems,
                    reason: 0
                });
            }
            this.moveFirst();
        };
        BaseList.prototype.toArray = function () {
            return this.items.map(function (item, index, arr) {
                return coreUtils.clone(item._aspect.vals);
            });
        };
        BaseList.prototype.getNewObjects = function () {
            return this._items.filter(function (item) {
                return item._aspect.isNew;
            });
        };
        BaseList.prototype.resetNewObjects = function () {
            this._items.forEach(function (item) {
                item._aspect._resetIsNew();
            });
        };
        BaseList.prototype.toString = function () {
            return "BaseList";
        };
        return BaseList;
    }(collection_1.BaseCollection));
    exports.BaseList = BaseList;
});
define("jriapp_collection/dictionary", ["require", "exports", "jriapp_utils/utils", "jriapp_core/lang", "jriapp_utils/syschecks", "jriapp_collection/collection", "jriapp_collection/list"], function (require, exports, utils_32, lang_23, syschecks_10, collection_2, list_1) {
    "use strict";
    var utils = utils_32.Utils, strUtils = utils.str, checks = utils.check;
    syschecks_10.SysChecks._getItemByProp = function (obj, prop) {
        if (obj instanceof BaseDictionary) {
            return obj.getItemByKey(prop);
        }
        else if (obj instanceof collection_2.BaseCollection) {
            obj.getItemByPos(parseInt(prop, 10));
        }
        else
            return null;
    };
    var BaseDictionary = (function (_super) {
        __extends(BaseDictionary, _super);
        function BaseDictionary(itemType, keyName, props) {
            if (!keyName)
                throw new Error(strUtils.format(lang_23.ERRS.ERR_PARAM_INVALID, "keyName", keyName));
            _super.call(this, itemType, props);
            this._keyName = keyName;
            var keyFld = this.getFieldInfo(keyName);
            if (!keyFld)
                throw new Error(strUtils.format(lang_23.ERRS.ERR_DICTKEY_IS_NOTFOUND, keyName));
            keyFld.isPrimaryKey = 1;
        }
        BaseDictionary.prototype._getNewKey = function (item) {
            if (!item || item._aspect.isNew) {
                return _super.prototype._getNewKey.call(this, item);
            }
            var key = item[this._keyName];
            if (checks.isNt(key))
                throw new Error(strUtils.format(lang_23.ERRS.ERR_DICTKEY_IS_EMPTY, this.keyName));
            return "" + key;
        };
        BaseDictionary.prototype._onItemAdded = function (item) {
            _super.prototype._onItemAdded.call(this, item);
            var key = item[this._keyName], self = this;
            if (checks.isNt(key))
                throw new Error(strUtils.format(lang_23.ERRS.ERR_DICTKEY_IS_EMPTY, this.keyName));
            var oldkey = item._key, newkey = "" + key;
            if (oldkey !== newkey) {
                delete self._itemsByKey[oldkey];
                item._aspect.key = newkey;
                self._itemsByKey[item._key] = item;
                self._onCollectionChanged({
                    changeType: 3,
                    reason: 0,
                    oper: 4,
                    items: [item],
                    old_key: oldkey,
                    new_key: newkey
                });
            }
            this.raisePropertyChanged("[" + item._key + "]");
        };
        BaseDictionary.prototype._onRemoved = function (item, pos) {
            var key = item[this._keyName];
            _super.prototype._onRemoved.call(this, item, pos);
            this.raisePropertyChanged("[" + key + "]");
        };
        Object.defineProperty(BaseDictionary.prototype, "keyName", {
            get: function () {
                return this._keyName;
            },
            enumerable: true,
            configurable: true
        });
        BaseDictionary.prototype.toString = function () {
            return "BaseDictionary";
        };
        return BaseDictionary;
    }(list_1.BaseList));
    exports.BaseDictionary = BaseDictionary;
});
define("jriapp_utils/mloader", ["require", "exports", "jriapp_utils/utils", "jriapp_utils/sloader"], function (require, exports, utils_33, sloader_2) {
    "use strict";
    var utils = utils_33.Utils, coreUtils = utils.core, strUtils = utils.str, defer = utils.defer, arr = utils.arr, resolvedPromise = defer.createSyncDeferred().resolve(), CSSPrefix = "css!";
    var _moduleLoader = null;
    function create() {
        if (!_moduleLoader)
            _moduleLoader = new ModuleLoader();
        return _moduleLoader;
    }
    exports.create = create;
    var LOAD_STATE;
    (function (LOAD_STATE) {
        LOAD_STATE[LOAD_STATE["NONE"] = 0] = "NONE";
        LOAD_STATE[LOAD_STATE["LOADING"] = 1] = "LOADING";
        LOAD_STATE[LOAD_STATE["LOADED"] = 2] = "LOADED";
    })(LOAD_STATE || (LOAD_STATE = {}));
    function whenAll(loads) {
        if (!loads || loads.length === 0)
            return resolvedPromise;
        if (loads.length === 1)
            return loads[0].defered.promise();
        var cnt = loads.length, resolved = 0, err = null;
        for (var i = 0; i < cnt; i += 1) {
            if (loads[i].state === 2) {
                ++resolved;
                if (!!loads[i].err)
                    err = loads[i].err;
            }
        }
        if (resolved === cnt) {
            if (!err)
                return resolvedPromise;
            else {
                return defer.createDeferred().reject(err);
            }
        }
        else {
            return defer.whenAll(loads.map(function (load) { return load.defered.promise(); }));
        }
    }
    var ModuleLoader = (function () {
        function ModuleLoader() {
            this._loads = {};
            this._cssLoads = {};
        }
        ModuleLoader.prototype.load = function (names) {
            var self = this;
            var cssNames = names.filter(function (val) { return self.isCSS(val); });
            var cssLoads = self.loadCSS(cssNames);
            var modNames = names.filter(function (val) { return !self.isCSS(val); });
            var forLoad = modNames.filter(function (val) { return !self._loads[val]; });
            if (forLoad.length > 0) {
                forLoad.forEach(function (name) {
                    self._loads[name] = {
                        name: name,
                        err: null,
                        state: 1,
                        defered: defer.createSyncDeferred()
                    };
                });
                require(forLoad, function () {
                    forLoad.forEach(function (name) {
                        var load = self._loads[name];
                        load.state = 2;
                        load.defered.resolve();
                    });
                }, function (err) {
                    forLoad.forEach(function (name) {
                        var load = self._loads[name];
                        load.state = 2;
                        load.err = err;
                        load.defered.reject(utils.str.format("Error loading modules: {0}", err));
                    });
                });
            }
            var loads = modNames.map(function (name) {
                return self._loads[name];
            });
            loads = loads.concat(cssLoads);
            return whenAll(loads);
        };
        ModuleLoader.prototype.whenAllLoaded = function () {
            var loads = [];
            coreUtils.iterateIndexer(this._loads, function (name, val) {
                loads.push(val);
            });
            return whenAll(loads);
        };
        ModuleLoader.prototype.loadCSS = function (names) {
            var self = this;
            var forLoad = names.filter(function (val) { return !self._cssLoads[val]; });
            var urls = forLoad.map(function (val) { return self.getUrl(val); });
            if (forLoad.length > 0) {
                var cssLoader = sloader_2.create();
                forLoad.forEach(function (name) {
                    self._cssLoads[name] = {
                        name: name,
                        err: null,
                        state: 1,
                        defered: defer.createSyncDeferred()
                    };
                });
                cssLoader.loadStyles(urls).then(function () {
                    forLoad.forEach(function (name) {
                        var load = self._cssLoads[name];
                        load.state = 2;
                        load.defered.resolve();
                    });
                }, function (err) {
                    forLoad.forEach(function (name) {
                        var load = self._cssLoads[name];
                        load.state = 2;
                        load.err = err;
                        load.defered.reject(err);
                    });
                });
            }
            var loads = names.map(function (name) {
                return self._cssLoads[name];
            });
            return loads;
        };
        ModuleLoader.prototype.isCSS = function (name) {
            return !!name && strUtils.startsWith(name, CSSPrefix);
        };
        ModuleLoader.prototype.getUrl = function (name) {
            if (this.isCSS(name)) {
                name = name.substr(CSSPrefix.length);
            }
            return require.toUrl(name);
        };
        return ModuleLoader;
    }());
});
define("jriapp_core/databindsvc", ["require", "exports", "jriapp_core/const", "jriapp_core/shared", "jriapp_core/lang", "jriapp_core/object", "jriapp_core/bootstrap", "jriapp_utils/lifetime", "jriapp_utils/utils", "jriapp_utils/mloader", "jriapp_core/binding", "jriapp_core/parser"], function (require, exports, const_8, shared_5, lang_24, object_20, bootstrap_25, lifetime_3, utils_34, mloader_1, binding_2, parser_6) {
    "use strict";
    var utils = utils_34.Utils, $ = utils.dom.$, doc = utils.dom.document, strUtils = utils.str, syschecks = utils.sys, checks = utils.check, boot = bootstrap_25.bootstrap;
    function createDataBindSvc(root, elViewFactory) {
        return new DataBindingService(root, elViewFactory);
    }
    exports.createDataBindSvc = createDataBindSvc;
    var DataBindingService = (function (_super) {
        __extends(DataBindingService, _super);
        function DataBindingService(root, elViewFactory) {
            _super.call(this);
            this._root = root;
            this._elViewFactory = elViewFactory;
            this._objLifeTime = null;
            this._mloader = mloader_1.create();
        }
        DataBindingService.prototype._toBindableElement = function (el) {
            var val, allAttrs = el.attributes, attr, res = { el: el, dataView: null, dataForm: null, expressions: [] };
            for (var i = 0, n = allAttrs.length; i < n; i++) {
                attr = allAttrs[i];
                if (strUtils.startsWith(attr.name, const_8.DATA_ATTR.DATA_BIND)) {
                    val = attr.value.trim();
                    if (!val) {
                        throw new Error(strUtils.format(lang_24.ERRS.ERR_PARAM_INVALID, attr.name, "empty"));
                    }
                    if (val[0] !== "{" && val[val.length - 1] !== "}")
                        val = "{" + val + "}";
                    res.expressions.push(val);
                }
                if (strUtils.startsWith(attr.name, const_8.DATA_ATTR.DATA_FORM)) {
                    res.dataForm = attr.value.trim();
                }
                if (strUtils.startsWith(attr.name, const_8.DATA_ATTR.DATA_VIEW)) {
                    res.dataView = attr.value.trim();
                }
            }
            if (!!res.dataView || res.expressions.length > 0)
                return res;
            else
                return null;
        };
        DataBindingService.prototype._getBindableElements = function (scope) {
            var self = this, result = [], allElems = utils.arr.fromList(scope.querySelectorAll("*"));
            allElems.forEach(function (el) {
                var res = self._toBindableElement(el);
                if (!!res)
                    result.push(res);
            });
            return result;
        };
        DataBindingService.prototype._cleanUp = function () {
            if (!!this._objLifeTime) {
                this._objLifeTime.destroy();
                this._objLifeTime = null;
            }
        };
        DataBindingService.prototype._getRequiredModuleNames = function (el) {
            var attr = el.getAttribute(const_8.DATA_ATTR.DATA_REQUIRE);
            if (!attr)
                return [];
            var reqArr = attr.split(",");
            var hashMap = {};
            reqArr.forEach(function (name) {
                if (!name)
                    return;
                name = strUtils.fastTrim(name);
                if (!!name)
                    hashMap[name] = name;
            });
            return Object.keys(hashMap);
        };
        DataBindingService.prototype._getOnlyDataFormElems = function (bindElems) {
            return bindElems.filter(function (bindElem, index, arr) {
                return !!bindElem.dataForm;
            }).map(function (bindElem, index, arr) {
                return bindElem.el;
            });
        };
        DataBindingService.prototype._updDataFormAttr = function (bindElems) {
            bindElems.forEach(function (bindElem) {
                if (!bindElem.dataForm && syschecks._isDataForm(bindElem.el)) {
                    bindElem.el.setAttribute(const_8.DATA_ATTR.DATA_FORM, "yes");
                    bindElem.dataForm = "yes";
                }
            });
        };
        DataBindingService.prototype._bindElView = function (elView, bindElem, lftm, isInsideTemplate, defSource) {
            var self = this, op, bind_attr, temp_opts, info;
            lftm.addObj(elView);
            if (isInsideTemplate)
                syschecks._setIsInsideTemplate(elView);
            bind_attr = bindElem.expressions.join("");
            if (!!bind_attr) {
                temp_opts = parser_6.parser.parseOptions(bind_attr);
                for (var j = 0, len = temp_opts.length; j < len; j += 1) {
                    info = temp_opts[j];
                    op = binding_2.getBindingOptions(info, elView, defSource);
                    var binding = self.bind(op);
                    lftm.addObj(binding);
                }
            }
        };
        DataBindingService.prototype._bindTemplateElements = function (templateEl) {
            var self = this, defer = utils.defer.createSyncDeferred();
            try {
                var rootBindEl = self._toBindableElement(templateEl), bindElems = void 0, lftm_1 = new lifetime_3.LifeTimeScope();
                if (!!rootBindEl && !!rootBindEl.dataForm) {
                    bindElems = [rootBindEl];
                }
                else {
                    bindElems = self._getBindableElements(templateEl);
                    if (!!rootBindEl) {
                        bindElems.push(rootBindEl);
                    }
                }
                self._updDataFormAttr(bindElems);
                var forms_1 = self._getOnlyDataFormElems(bindElems);
                var needBinding = bindElems.filter(function (bindElem) {
                    return !syschecks._isInNestedForm(templateEl, forms_1, bindElem.el);
                });
                needBinding.forEach(function (bindElem) {
                    var elView = self._elViewFactory.getOrCreateElView(bindElem.el);
                    self._bindElView(elView, bindElem, lftm_1, true, null);
                });
                defer.resolve(lftm_1);
            }
            catch (err) {
                self.handleError(err, self);
                setTimeout(function () {
                    defer.reject(new shared_5.DummyError(err));
                }, 0);
            }
            return defer.promise();
        };
        DataBindingService.prototype.bindTemplateElements = function (templateEl) {
            var self = this;
            var requiredModules = self._getRequiredModuleNames(templateEl), res;
            if (requiredModules.length > 0) {
                res = self._mloader.load(requiredModules).then(function () {
                    return self._bindTemplateElements(templateEl);
                });
            }
            else {
                res = self._bindTemplateElements(templateEl);
            }
            res.fail(function (err) {
                setTimeout(function () {
                    self.handleError(err, self);
                }, 0);
            });
            return res;
        };
        DataBindingService.prototype.bindElements = function (scope, defaultDataContext, isDataFormBind, isInsideTemplate) {
            var self = this, defer = utils.defer.createSyncDeferred();
            scope = scope || doc;
            try {
                var bindElems = self._getBindableElements(scope), lftm_2 = new lifetime_3.LifeTimeScope();
                if (!isDataFormBind) {
                    self._updDataFormAttr(bindElems);
                }
                var forms_2 = self._getOnlyDataFormElems(bindElems);
                var needBinding = bindElems.filter(function (bindElem) {
                    return !syschecks._isInNestedForm(scope, forms_2, bindElem.el);
                });
                needBinding.forEach(function (bindElem) {
                    var elView = self._elViewFactory.getOrCreateElView(bindElem.el);
                    self._bindElView(elView, bindElem, lftm_2, isInsideTemplate, defaultDataContext);
                });
                defer.resolve(lftm_2);
            }
            catch (err) {
                self.handleError(err, self);
                setTimeout(function () {
                    defer.reject(new shared_5.DummyError(err));
                }, 0);
            }
            return defer.promise();
        };
        DataBindingService.prototype.setUpBindings = function () {
            var defScope = this._root, defaultDataContext = boot.getApp(), self = this;
            this._cleanUp();
            var promise = this.bindElements(defScope, defaultDataContext, false, false);
            return promise.then(function (lftm) {
                if (self.getIsDestroyCalled()) {
                    lftm.destroy();
                    return;
                }
                self._objLifeTime = lftm;
            });
        };
        DataBindingService.prototype.bind = function (opts) {
            return new binding_2.Binding(opts);
        };
        DataBindingService.prototype.destroy = function () {
            this._cleanUp();
            this._elViewFactory = null;
            this._mloader = null;
            _super.prototype.destroy.call(this);
        };
        return DataBindingService;
    }(object_20.BaseObject));
});
define("jriapp_core/app", ["require", "exports", "jriapp_core/const", "jriapp_core/lang", "jriapp_core/object", "jriapp_core/bootstrap", "jriapp_utils/utils", "jriapp_elview/factory", "jriapp_core/databindsvc"], function (require, exports, const_9, lang_25, object_21, bootstrap_26, utils_35, factory_3, databindsvc_1) {
    "use strict";
    var utils = utils_35.Utils, $ = utils.dom.$, doc = utils.dom.document, boot = bootstrap_26.bootstrap;
    var APP_EVENTS = {
        startup: "startup"
    };
    var AppState;
    (function (AppState) {
        AppState[AppState["None"] = 0] = "None";
        AppState[AppState["Starting"] = 1] = "Starting";
        AppState[AppState["Started"] = 2] = "Started";
        AppState[AppState["Destroyed"] = 3] = "Destroyed";
        AppState[AppState["Error"] = 4] = "Error";
    })(AppState || (AppState = {}));
    var Application = (function (_super) {
        __extends(Application, _super);
        function Application(options) {
            _super.call(this);
            if (!options) {
                options = {};
            }
            var self = this, moduleInits = options.modulesInits || {}, app_name = const_9.APP_NAME;
            this._appName = app_name;
            this._options = options;
            if (!!boot.getApp())
                throw new Error(utils.str.format(lang_25.ERRS.ERR_APP_NAME_NOT_UNIQUE, app_name));
            this._objId = "app:" + utils.core.getNewID();
            this._app_state = 0;
            this._moduleInits = moduleInits;
            this._viewFactory = factory_3.createElViewFactory(boot.elViewRegister);
            this._dataBindingService = databindsvc_1.createDataBindSvc(this.appRoot, this._viewFactory);
            this._objMaps = [];
            this._exports = {};
            this._UC = {};
            this._internal = {
                bindTemplateElements: function (templateEl) {
                    return self._dataBindingService.bindTemplateElements(templateEl);
                },
                bindElements: function (scope, dctx, isDataFormBind, isInsideTemplate) {
                    return self._dataBindingService.bindElements(scope, dctx, isDataFormBind, isInsideTemplate);
                }
            };
            boot._getInternal().registerApp(this);
        }
        Application.prototype._cleanUpObjMaps = function () {
            var self = this;
            this._objMaps.forEach(function (objMap) {
                utils.core.forEachProp(objMap, function (name) {
                    var obj = objMap[name];
                    if (obj instanceof object_21.BaseObject) {
                        if (!obj.getIsDestroyed()) {
                            obj.removeNSHandlers(self.uniqueID);
                        }
                    }
                });
            });
            this._objMaps = [];
        };
        Application.prototype._initAppModules = function () {
            var self = this;
            var keys = Object.keys(self._moduleInits);
            keys.forEach(function (key) {
                var initFn = self._moduleInits[key];
                initFn(self);
            });
        };
        Application.prototype._getEventNames = function () {
            var base_events = _super.prototype._getEventNames.call(this);
            return [APP_EVENTS.startup].concat(base_events);
        };
        Application.prototype.onStartUp = function () {
        };
        Application.prototype._getInternal = function () {
            return this._internal;
        };
        Application.prototype.addOnStartUp = function (fn, nmspace, context) {
            this._addHandler(APP_EVENTS.startup, fn, nmspace, context);
        };
        Application.prototype.removeOnStartUp = function (nmspace) {
            this._removeHandler(APP_EVENTS.startup, nmspace);
        };
        Application.prototype.getExports = function () {
            return this._exports;
        };
        Application.prototype.bind = function (opts) {
            return this._dataBindingService.bind(opts);
        };
        Application.prototype.registerConverter = function (name, obj) {
            var name2 = const_9.STORE_KEY.CONVERTER + name;
            if (!boot._getInternal().getObject(this, name2)) {
                boot._getInternal().registerObject(this, name2, obj);
            }
            else
                throw new Error(utils.str.format(lang_25.ERRS.ERR_OBJ_ALREADY_REGISTERED, name));
        };
        Application.prototype.getConverter = function (name) {
            var name2 = const_9.STORE_KEY.CONVERTER + name;
            var res = boot._getInternal().getObject(this, name2);
            if (!res) {
                res = boot._getInternal().getObject(boot, name2);
            }
            if (!res)
                throw new Error(utils.str.format(lang_25.ERRS.ERR_CONVERTER_NOTREGISTERED, name));
            return res;
        };
        Application.prototype.registerSvc = function (name, obj) {
            var name2 = const_9.STORE_KEY.SVC + name;
            return boot._getInternal().registerObject(this, name2, obj);
        };
        Application.prototype.getSvc = function (name) {
            var name2 = const_9.STORE_KEY.SVC + name;
            var res = boot._getInternal().getObject(this, name2);
            if (!res) {
                res = boot._getInternal().getObject(boot, name2);
            }
            return res;
        };
        Application.prototype.registerElView = function (name, vw_type) {
            this._viewFactory.register.registerElView(name, vw_type);
        };
        Application.prototype.registerObject = function (name, obj) {
            var self = this, name2 = const_9.STORE_KEY.OBJECT + name;
            if (utils.check.isBaseObject(obj)) {
                obj.addOnDestroyed(function (s, a) {
                    boot._getInternal().unregisterObject(self, name2);
                }, self.uniqueID);
            }
            var objMap = boot._getInternal().registerObject(this, name2, obj);
            if (this._objMaps.indexOf(objMap) < 0) {
                this._objMaps.push(objMap);
            }
        };
        Application.prototype.getObject = function (name) {
            var name2 = const_9.STORE_KEY.OBJECT + name;
            var res = boot._getInternal().getObject(this, name2);
            return res;
        };
        Application.prototype.startUp = function (onStartUp) {
            var self = this, deferred = utils.defer.createDeferred();
            if (this._app_state !== 0) {
                return deferred.reject(new Error("Application can not be started when state != AppState.None"));
            }
            var fn_startApp = function () {
                try {
                    self._initAppModules();
                    var onStartupRes1 = self.onStartUp();
                    var setupPromise1 = void 0;
                    if (utils.check.isThenable(onStartupRes1)) {
                        setupPromise1 = onStartupRes1;
                    }
                    else {
                        setupPromise1 = utils.defer.createDeferred().resolve();
                    }
                    var promise_1 = setupPromise1.then(function () {
                        self.raiseEvent(APP_EVENTS.startup, {});
                        var onStartupRes2 = (!!onStartUp) ? onStartUp.apply(self, [self]) : null;
                        var setupPromise2;
                        if (utils.check.isThenable(onStartupRes2)) {
                            setupPromise2 = onStartupRes2.then(function () {
                                return self._dataBindingService.setUpBindings();
                            }, function (err) {
                                deferred.reject(err);
                            });
                        }
                        else {
                            setupPromise2 = self._dataBindingService.setUpBindings();
                        }
                        return setupPromise2;
                    });
                    promise_1.then(function () {
                        deferred.resolve(self);
                    }, function (err) {
                        deferred.reject(err);
                    });
                }
                catch (ex) {
                    deferred.reject(ex);
                }
            };
            this._app_state = 1;
            var promise = deferred.promise().then(function (app) {
                self._app_state = 2;
                return self;
            }, function (err) {
                self._app_state = 4;
                throw err;
            });
            try {
                if (!!onStartUp && !utils.check.isFunc(onStartUp))
                    throw new Error(lang_25.ERRS.ERR_APP_SETUP_INVALID);
                boot.templateLoader.waitForNotLoading(fn_startApp, null);
            }
            catch (ex) {
                deferred.reject(ex);
            }
            return promise;
        };
        Application.prototype.loadTemplates = function (url) {
            return this.loadTemplatesAsync(function () {
                return utils.http.getAjax(url);
            });
        };
        Application.prototype.loadTemplatesAsync = function (fn_loader) {
            return boot.templateLoader.loadTemplatesAsync(fn_loader, this);
        };
        Application.prototype.registerTemplateLoader = function (name, fn_loader) {
            boot.templateLoader.registerTemplateLoader(this.appName + "." + name, {
                fn_loader: fn_loader
            });
        };
        Application.prototype.registerTemplateById = function (name, templateId) {
            this.registerTemplateLoader(name, utils.core.memoize(function () {
                var deferred = utils.defer.createSyncDeferred();
                var str = $("#" + templateId).html();
                deferred.resolve(str);
                return deferred.promise();
            }));
        };
        Application.prototype.getTemplateLoader = function (name) {
            var res = boot.templateLoader.getTemplateLoader(this.appName + "." + name);
            if (!res) {
                res = boot.templateLoader.getTemplateLoader(name);
                if (!res)
                    return function () { return utils.defer.createDeferred().reject(new Error(utils.str.format(lang_25.ERRS.ERR_TEMPLATE_NOTREGISTERED, name))); };
            }
            return res;
        };
        Application.prototype.registerTemplateGroup = function (name, group) {
            var group2 = utils.core.extend({
                fn_loader: null,
                url: null,
                names: null,
                promise: null,
                app: this
            }, group);
            boot.templateLoader.registerTemplateGroup(this.appName + "." + name, group2);
        };
        Application.prototype.destroy = function () {
            if (this._isDestroyed)
                return;
            this._isDestroyCalled = true;
            var self = this;
            try {
                self._app_state = 3;
                boot._getInternal().unregisterApp(self);
                self._cleanUpObjMaps();
                self._dataBindingService.destroy();
                self._dataBindingService = null;
                self._viewFactory.destroy();
                self._exports = {};
                self._moduleInits = {};
                self._UC = {};
                self._options = null;
                self._viewFactory = null;
            }
            finally {
                _super.prototype.destroy.call(this);
            }
        };
        Application.prototype.toString = function () {
            return "Application: " + this.appName;
        };
        Object.defineProperty(Application.prototype, "uniqueID", {
            get: function () { return this._objId; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Application.prototype, "options", {
            get: function () { return this._options; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Application.prototype, "appName", {
            get: function () { return this._appName; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Application.prototype, "appRoot", {
            get: function () {
                if (!this._options || !this._options.appRoot)
                    return doc;
                else
                    return this._options.appRoot;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Application.prototype, "viewFactory", {
            get: function () {
                return this._viewFactory;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Application.prototype, "UC", {
            get: function () { return this._UC; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Application.prototype, "app", {
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        return Application;
    }(object_21.BaseObject));
    exports.Application = Application;
});
define("jriapp", ["require", "exports", "jriapp_core/bootstrap", "jriapp_core/const", "jriapp_core/shared", "jriapp_utils/syschecks", "jriapp_core/lang", "jriapp_core/converter", "jriapp_core/object", "jriapp_utils/debounce", "jriapp_utils/dblclick", "jriapp_utils/coreutils", "jriapp_core/bootstrap", "jriapp_content/factory", "jriapp_core/binding", "jriapp_core/datepicker", "jriapp_core/dataform", "jriapp_core/template", "jriapp_elview/all", "jriapp_utils/lifetime", "jriapp_utils/propwatcher", "jriapp_utils/waitqueue", "jriapp_utils/utils", "jriapp_core/mvvm", "jriapp_collection/int", "jriapp_collection/collection", "jriapp_collection/item", "jriapp_collection/aspect", "jriapp_collection/list", "jriapp_collection/dictionary", "jriapp_collection/validation", "jriapp_collection/utils", "jriapp_core/app"], function (require, exports, bootstrap_27, const_10, shared_6, syschecks_11, lang_26, converter_1, object_22, debounce_1, dblclick_1, coreutils_18, bootstrap_28, factory_4, binding_3, datepicker_1, dataform_1, template_4, all_1, lifetime_4, propwatcher_1, waitqueue_3, utils_36, mvvm_2, int_10, collection_3, item_1, aspect_2, list_2, dictionary_1, validation_4, utils_37, app_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    exports.DEBUG_LEVEL = const_10.DEBUG_LEVEL;
    exports.DATE_CONVERSION = const_10.DATE_CONVERSION;
    exports.FIELD_TYPE = const_10.FIELD_TYPE;
    exports.DATA_TYPE = const_10.DATA_TYPE;
    exports.SORT_ORDER = const_10.SORT_ORDER;
    exports.FILTER_TYPE = const_10.FILTER_TYPE;
    exports.KEYS = const_10.KEYS;
    exports.BINDING_MODE = const_10.BINDING_MODE;
    exports.BindTo = const_10.BindTo;
    exports.BaseError = shared_6.BaseError;
    exports.SysChecks = syschecks_11.SysChecks;
    exports.LocaleSTRS = lang_26.STRS;
    exports.LocaleERRS = lang_26.ERRS;
    exports.BaseConverter = converter_1.BaseConverter;
    exports.BaseObject = object_22.BaseObject;
    exports.Debounce = debounce_1.Debounce;
    exports.DblClick = dblclick_1.DblClick;
    exports.DEBUG = coreutils_18.DEBUG;
    exports.ERROR = coreutils_18.ERROR;
    exports.bootstrap = bootstrap_28.bootstrap;
    exports.contentFactories = factory_4.contentFactories;
    exports.Binding = binding_3.Binding;
    __export(datepicker_1);
    exports.DataForm = dataform_1.DataForm;
    exports.DataFormElView = dataform_1.DataFormElView;
    exports.createTemplate = template_4.createTemplate;
    exports.TemplateElView = template_4.TemplateElView;
    __export(all_1);
    exports.LifeTimeScope = lifetime_4.LifeTimeScope;
    exports.PropWatcher = propwatcher_1.PropWatcher;
    exports.WaitQueue = waitqueue_3.WaitQueue;
    exports.Utils = utils_36.Utils;
    __export(mvvm_2);
    __export(int_10);
    __export(collection_3);
    __export(item_1);
    __export(aspect_2);
    __export(list_2);
    __export(dictionary_1);
    __export(validation_4);
    __export(utils_37);
    exports.Application = app_1.Application;
    exports.VERSION = "0.9.92";
    bootstrap_27.Bootstrap._initFramework();
});
