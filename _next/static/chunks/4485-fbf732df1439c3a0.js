(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4485],{

/***/ 342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ format)
});

// EXTERNAL MODULE: ./node_modules/date-fns/esm/isValid/index.js + 1 modules
var isValid = __webpack_require__(26923);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var toInteger = __webpack_require__(34279);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/toDate/index.js
var toDate = __webpack_require__(54468);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var requiredArgs = __webpack_require__(93960);
;// ./node_modules/date-fns/esm/addMilliseconds/index.js



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */ function addMilliseconds(dirtyDate, dirtyAmount) {
    (0,requiredArgs/* default */.A)(2, arguments);
    var timestamp = (0,toDate/* default */.A)(dirtyDate).getTime();
    var amount = (0,toInteger/* default */.A)(dirtyAmount);
    return new Date(timestamp + amount);
}

;// ./node_modules/date-fns/esm/subMilliseconds/index.js



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */ function subMilliseconds(dirtyDate, dirtyAmount) {
    (0,requiredArgs/* default */.A)(2, arguments);
    var amount = (0,toInteger/* default */.A)(dirtyAmount);
    return addMilliseconds(dirtyDate, -amount);
}

;// ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
    (0,requiredArgs/* default */.A)(1, arguments);
    var date = (0,toDate/* default */.A)(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

;// ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js


function startOfUTCISOWeek(dirtyDate) {
    (0,requiredArgs/* default */.A)(1, arguments);
    var weekStartsOn = 1;
    var date = (0,toDate/* default */.A)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}

;// ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js



function getUTCISOWeekYear(dirtyDate) {
    (0,requiredArgs/* default */.A)(1, arguments);
    var date = (0,toDate/* default */.A)(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}

;// ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js



function startOfUTCISOWeekYear(dirtyDate) {
    (0,requiredArgs/* default */.A)(1, arguments);
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
}

;// ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
    (0,requiredArgs/* default */.A)(1, arguments);
    var date = (0,toDate/* default */.A)(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

;// ./node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}

;// ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js




function startOfUTCWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0,requiredArgs/* default */.A)(1, arguments);
    var defaultOptions = getDefaultOptions();
    var weekStartsOn = (0,toInteger/* default */.A)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    var date = (0,toDate/* default */.A)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}

;// ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js





function getUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0,requiredArgs/* default */.A)(1, arguments);
    var date = (0,toDate/* default */.A)(dirtyDate);
    var year = date.getUTCFullYear();
    var defaultOptions = getDefaultOptions();
    var firstWeekContainsDate = (0,toInteger/* default */.A)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}

;// ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js





function startOfUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0,requiredArgs/* default */.A)(1, arguments);
    var defaultOptions = getDefaultOptions();
    var firstWeekContainsDate = (0,toInteger/* default */.A)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = getUTCWeekYear(dirtyDate, options);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, options);
    return date;
}

;// ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js




var getUTCWeek_MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
    (0,requiredArgs/* default */.A)(1, arguments);
    var date = (0,toDate/* default */.A)(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / getUTCWeek_MILLISECONDS_IN_WEEK) + 1;
}

;// ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? '-' : '';
    var output = Math.abs(number).toString();
    while(output.length < targetLength){
        output = '0' + output;
    }
    return sign + output;
}

;// ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */ var formatters = {
    // Year
    y: function y(date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        var signedYear = date.getUTCFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
    },
    // Month
    M: function M(date, token) {
        var month = date.getUTCMonth();
        return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    // Day of the month
    d: function d(date, token) {
        return addLeadingZeros(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function a(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'a':
            case 'aa':
                return dayPeriodEnumValue.toUpperCase();
            case 'aaa':
                return dayPeriodEnumValue;
            case 'aaaaa':
                return dayPeriodEnumValue[0];
            case 'aaaa':
            default:
                return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
        }
    },
    // Hour [1-12]
    h: function h(date, token) {
        return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function H(date, token) {
        return addLeadingZeros(date.getUTCHours(), token.length);
    },
    // Minute
    m: function m(date, token) {
        return addLeadingZeros(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function s(date, token) {
        return addLeadingZeros(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function S(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return addLeadingZeros(fractionalSeconds, token.length);
    }
};
/* harmony default export */ const lightFormatters = (formatters);

;// ./node_modules/date-fns/esm/_lib/format/formatters/index.js







var dayPeriodEnum = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */ var formatters_formatters = {
    // Era
    G: function G(date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case 'G':
            case 'GG':
            case 'GGG':
                return localize.era(era, {
                    width: 'abbreviated'
                });
            // A, B
            case 'GGGGG':
                return localize.era(era, {
                    width: 'narrow'
                });
            // Anno Domini, Before Christ
            case 'GGGG':
            default:
                return localize.era(era, {
                    width: 'wide'
                });
        }
    },
    // Year
    y: function y(date, token, localize) {
        // Ordinal number
        if (token === 'yo') {
            var signedYear = date.getUTCFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: 'year'
            });
        }
        return lightFormatters.y(date, token);
    },
    // Local week-numbering year
    Y: function Y(date, token, localize, options) {
        var signedWeekYear = getUTCWeekYear(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === 'YY') {
            var twoDigitYear = weekYear % 100;
            return addLeadingZeros(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === 'Yo') {
            return localize.ordinalNumber(weekYear, {
                unit: 'year'
            });
        }
        // Padding
        return addLeadingZeros(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function R(date, token) {
        var isoWeekYear = getUTCISOWeekYear(date);
        // Padding
        return addLeadingZeros(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function u(date, token) {
        var year = date.getUTCFullYear();
        return addLeadingZeros(year, token.length);
    },
    // Quarter
    Q: function Q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case 'Q':
                return String(quarter);
            // 01, 02, 03, 04
            case 'QQ':
                return addLeadingZeros(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case 'Qo':
                return localize.ordinalNumber(quarter, {
                    unit: 'quarter'
                });
            // Q1, Q2, Q3, Q4
            case 'QQQ':
                return localize.quarter(quarter, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case 'QQQQQ':
                return localize.quarter(quarter, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // 1st quarter, 2nd quarter, ...
            case 'QQQQ':
            default:
                return localize.quarter(quarter, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone quarter
    q: function q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case 'q':
                return String(quarter);
            // 01, 02, 03, 04
            case 'qq':
                return addLeadingZeros(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case 'qo':
                return localize.ordinalNumber(quarter, {
                    unit: 'quarter'
                });
            // Q1, Q2, Q3, Q4
            case 'qqq':
                return localize.quarter(quarter, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case 'qqqqq':
                return localize.quarter(quarter, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // 1st quarter, 2nd quarter, ...
            case 'qqqq':
            default:
                return localize.quarter(quarter, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // Month
    M: function M(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            case 'M':
            case 'MM':
                return lightFormatters.M(date, token);
            // 1st, 2nd, ..., 12th
            case 'Mo':
                return localize.ordinalNumber(month + 1, {
                    unit: 'month'
                });
            // Jan, Feb, ..., Dec
            case 'MMM':
                return localize.month(month, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // J, F, ..., D
            case 'MMMMM':
                return localize.month(month, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // January, February, ..., December
            case 'MMMM':
            default:
                return localize.month(month, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone month
    L: function L(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            // 1, 2, ..., 12
            case 'L':
                return String(month + 1);
            // 01, 02, ..., 12
            case 'LL':
                return addLeadingZeros(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case 'Lo':
                return localize.ordinalNumber(month + 1, {
                    unit: 'month'
                });
            // Jan, Feb, ..., Dec
            case 'LLL':
                return localize.month(month, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // J, F, ..., D
            case 'LLLLL':
                return localize.month(month, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // January, February, ..., December
            case 'LLLL':
            default:
                return localize.month(month, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // Local week of year
    w: function w(date, token, localize, options) {
        var week = getUTCWeek(date, options);
        if (token === 'wo') {
            return localize.ordinalNumber(week, {
                unit: 'week'
            });
        }
        return addLeadingZeros(week, token.length);
    },
    // ISO week of year
    I: function I(date, token, localize) {
        var isoWeek = getUTCISOWeek(date);
        if (token === 'Io') {
            return localize.ordinalNumber(isoWeek, {
                unit: 'week'
            });
        }
        return addLeadingZeros(isoWeek, token.length);
    },
    // Day of the month
    d: function d(date, token, localize) {
        if (token === 'do') {
            return localize.ordinalNumber(date.getUTCDate(), {
                unit: 'date'
            });
        }
        return lightFormatters.d(date, token);
    },
    // Day of year
    D: function D(date, token, localize) {
        var dayOfYear = getUTCDayOfYear(date);
        if (token === 'Do') {
            return localize.ordinalNumber(dayOfYear, {
                unit: 'dayOfYear'
            });
        }
        return addLeadingZeros(dayOfYear, token.length);
    },
    // Day of week
    E: function E(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        switch(token){
            // Tue
            case 'E':
            case 'EE':
            case 'EEE':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'EEEEE':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'EEEEEE':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'EEEE':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Local day of week
    e: function e(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case 'e':
                return String(localDayOfWeek);
            // Padded numerical value
            case 'ee':
                return addLeadingZeros(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case 'eo':
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: 'day'
                });
            case 'eee':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'eeeee':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'eeeeee':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'eeee':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone local day of week
    c: function c(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case 'c':
                return String(localDayOfWeek);
            // Padded numerical value
            case 'cc':
                return addLeadingZeros(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case 'co':
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: 'day'
                });
            case 'ccc':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // T
            case 'ccccc':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // Tu
            case 'cccccc':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'standalone'
                });
            // Tuesday
            case 'cccc':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // ISO day of week
    i: function i(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case 'i':
                return String(isoDayOfWeek);
            // 02
            case 'ii':
                return addLeadingZeros(isoDayOfWeek, token.length);
            // 2nd
            case 'io':
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: 'day'
                });
            // Tue
            case 'iii':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'iiiii':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'iiiiii':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'iiii':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // AM or PM
    a: function a(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'a':
            case 'aa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'aaa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                }).toLowerCase();
            case 'aaaaa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'aaaa':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // AM, PM, midnight, noon
    b: function b(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) {
            dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
            dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
            dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
        }
        switch(token){
            case 'b':
            case 'bb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'bbb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                }).toLowerCase();
            case 'bbbbb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'bbbb':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function B(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours >= 17) {
            dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
            dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
            dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
            dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch(token){
            case 'B':
            case 'BB':
            case 'BBB':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'BBBBB':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'BBBB':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Hour [1-12]
    h: function h(date, token, localize) {
        if (token === 'ho') {
            var hours = date.getUTCHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: 'hour'
            });
        }
        return lightFormatters.h(date, token);
    },
    // Hour [0-23]
    H: function H(date, token, localize) {
        if (token === 'Ho') {
            return localize.ordinalNumber(date.getUTCHours(), {
                unit: 'hour'
            });
        }
        return lightFormatters.H(date, token);
    },
    // Hour [0-11]
    K: function K(date, token, localize) {
        var hours = date.getUTCHours() % 12;
        if (token === 'Ko') {
            return localize.ordinalNumber(hours, {
                unit: 'hour'
            });
        }
        return addLeadingZeros(hours, token.length);
    },
    // Hour [1-24]
    k: function k(date, token, localize) {
        var hours = date.getUTCHours();
        if (hours === 0) hours = 24;
        if (token === 'ko') {
            return localize.ordinalNumber(hours, {
                unit: 'hour'
            });
        }
        return addLeadingZeros(hours, token.length);
    },
    // Minute
    m: function m(date, token, localize) {
        if (token === 'mo') {
            return localize.ordinalNumber(date.getUTCMinutes(), {
                unit: 'minute'
            });
        }
        return lightFormatters.m(date, token);
    },
    // Second
    s: function s(date, token, localize) {
        if (token === 'so') {
            return localize.ordinalNumber(date.getUTCSeconds(), {
                unit: 'second'
            });
        }
        return lightFormatters.s(date, token);
    },
    // Fraction of second
    S: function S(date, token) {
        return lightFormatters.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function X(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) {
            return 'Z';
        }
        switch(token){
            // Hours and optional minutes
            case 'X':
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case 'XXXX':
            case 'XX':
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case 'XXXXX':
            case 'XXX':
            default:
                return formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function x(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case 'x':
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case 'xxxx':
            case 'xx':
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case 'xxxxx':
            case 'xxx':
            default:
                return formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (GMT)
    O: function O(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case 'O':
            case 'OO':
            case 'OOO':
                return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
            // Long
            case 'OOOO':
            default:
                return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (specific non-location)
    z: function z(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case 'z':
            case 'zz':
            case 'zzz':
                return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
            // Long
            case 'zzzz':
            default:
                return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
    },
    // Seconds timestamp
    t: function t(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1000);
        return addLeadingZeros(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function T(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return addLeadingZeros(timestamp, token.length);
    }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) {
        return sign + String(hours);
    }
    var delimiter = dirtyDelimiter || '';
    return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
        var sign = offset > 0 ? '-' : '+';
        return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
    var minutes = addLeadingZeros(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
/* harmony default export */ const format_formatters = (formatters_formatters);

;// ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
    switch(pattern){
        case 'P':
            return formatLong.date({
                width: 'short'
            });
        case 'PP':
            return formatLong.date({
                width: 'medium'
            });
        case 'PPP':
            return formatLong.date({
                width: 'long'
            });
        case 'PPPP':
        default:
            return formatLong.date({
                width: 'full'
            });
    }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
    switch(pattern){
        case 'p':
            return formatLong.time({
                width: 'short'
            });
        case 'pp':
            return formatLong.time({
                width: 'medium'
            });
        case 'ppp':
            return formatLong.time({
                width: 'long'
            });
        case 'pppp':
        default:
            return formatLong.time({
                width: 'full'
            });
    }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
    }
    var dateTimeFormat;
    switch(datePattern){
        case 'P':
            dateTimeFormat = formatLong.dateTime({
                width: 'short'
            });
            break;
        case 'PP':
            dateTimeFormat = formatLong.dateTime({
                width: 'medium'
            });
            break;
        case 'PPP':
            dateTimeFormat = formatLong.dateTime({
                width: 'long'
            });
            break;
        case 'PPPP':
        default:
            dateTimeFormat = formatLong.dateTime({
                width: 'full'
            });
            break;
    }
    return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
/* harmony default export */ const format_longFormatters = (longFormatters);

;// ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
}

;// ./node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = [
    'D',
    'DD'
];
var protectedWeekYearTokens = [
    'YY',
    'YYYY'
];
function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
    if (token === 'YYYY') {
        throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === 'YY') {
        throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === 'D') {
        throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === 'DD') {
        throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    }
}

;// ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds'
    },
    xSeconds: {
        one: '1 second',
        other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes'
    },
    xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes'
    },
    aboutXHours: {
        one: 'about 1 hour',
        other: 'about {{count}} hours'
    },
    xHours: {
        one: '1 hour',
        other: '{{count}} hours'
    },
    xDays: {
        one: '1 day',
        other: '{{count}} days'
    },
    aboutXWeeks: {
        one: 'about 1 week',
        other: 'about {{count}} weeks'
    },
    xWeeks: {
        one: '1 week',
        other: '{{count}} weeks'
    },
    aboutXMonths: {
        one: 'about 1 month',
        other: 'about {{count}} months'
    },
    xMonths: {
        one: '1 month',
        other: '{{count}} months'
    },
    aboutXYears: {
        one: 'about 1 year',
        other: 'about {{count}} years'
    },
    xYears: {
        one: '1 year',
        other: '{{count}} years'
    },
    overXYears: {
        one: 'over 1 year',
        other: 'over {{count}} years'
    },
    almostXYears: {
        one: 'almost 1 year',
        other: 'almost {{count}} years'
    }
};
var formatDistance = function formatDistance(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === 'string') {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace('{{count}}', count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return 'in ' + result;
        } else {
            return result + ' ago';
        }
    }
    return result;
};
/* harmony default export */ const _lib_formatDistance = (formatDistance);

;// ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // TODO: Remove String()
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}

;// ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js

var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
};
var timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
};
var formatLong = {
    date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: 'full'
    }),
    time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: 'full'
    }),
    dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: 'full'
    })
};
/* harmony default export */ const _lib_formatLong = (formatLong);

;// ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
/* harmony default export */ const _lib_formatRelative = (formatRelative);

;// ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
    return function(dirtyIndex, options) {
        var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
        var valuesArray;
        if (context === 'formatting' && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}

;// ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js

var eraValues = {
    narrow: [
        'B',
        'A'
    ],
    abbreviated: [
        'BC',
        'AD'
    ],
    wide: [
        'Before Christ',
        'Anno Domini'
    ]
};
var quarterValues = {
    narrow: [
        '1',
        '2',
        '3',
        '4'
    ],
    abbreviated: [
        'Q1',
        'Q2',
        'Q3',
        'Q4'
    ],
    wide: [
        '1st quarter',
        '2nd quarter',
        '3rd quarter',
        '4th quarter'
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
    narrow: [
        'J',
        'F',
        'M',
        'A',
        'M',
        'J',
        'J',
        'A',
        'S',
        'O',
        'N',
        'D'
    ],
    abbreviated: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    wide: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
};
var dayValues = {
    narrow: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
    ],
    short: [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
    ],
    abbreviated: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ],
    wide: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
};
var dayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + 'st';
            case 2:
                return number + 'nd';
            case 3:
                return number + 'rd';
        }
    }
    return number + 'th';
};
var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
        values: eraValues,
        defaultWidth: 'wide'
    }),
    quarter: buildLocalizeFn({
        values: quarterValues,
        defaultWidth: 'wide',
        argumentCallback: function argumentCallback(quarter) {
            return quarter - 1;
        }
    }),
    month: buildLocalizeFn({
        values: monthValues,
        defaultWidth: 'wide'
    }),
    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: 'wide'
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: 'wide',
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: 'wide'
    })
};
/* harmony default export */ const _lib_localize = (localize);

;// ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
function findKey(object, predicate) {
    for(var key in object){
        if (object.hasOwnProperty(key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}

;// ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}

;// ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: buildMatchPatternFn({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function valueCallback(value) {
            return parseInt(value, 10);
        }
    }),
    era: buildMatchFn({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseEraPatterns,
        defaultParseWidth: 'any'
    }),
    quarter: buildMatchFn({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: 'any',
        valueCallback: function valueCallback(index) {
            return index + 1;
        }
    }),
    month: buildMatchFn({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: 'any'
    }),
    day: buildMatchFn({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseDayPatterns,
        defaultParseWidth: 'any'
    }),
    dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: 'any',
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: 'any'
    })
};
/* harmony default export */ const _lib_match = (match);

;// ./node_modules/date-fns/esm/locale/en-US/index.js





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */ var locale = {
    code: 'en-US',
    formatDistance: _lib_formatDistance,
    formatLong: _lib_formatLong,
    formatRelative: _lib_formatRelative,
    localize: _lib_localize,
    match: _lib_match,
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
/* harmony default export */ const en_US = (locale);

;// ./node_modules/date-fns/esm/_lib/defaultLocale/index.js

/* harmony default export */ const defaultLocale = (en_US);

;// ./node_modules/date-fns/esm/format/index.js










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */ function format(dirtyDate, dirtyFormatStr, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    (0,requiredArgs/* default */.A)(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var defaultOptions = getDefaultOptions();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
    var firstWeekContainsDate = (0,toInteger/* default */.A)((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
    // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }
    var weekStartsOn = (0,toInteger/* default */.A)((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    if (!locale.localize) {
        throw new RangeError('locale must contain localize property');
    }
    if (!locale.formatLong) {
        throw new RangeError('locale must contain formatLong property');
    }
    var originalDate = (0,toDate/* default */.A)(dirtyDate);
    if (!(0,isValid/* default */.A)(originalDate)) {
        throw new RangeError('Invalid time value');
    }
    // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
    var utcDate = subMilliseconds(originalDate, timezoneOffset);
    var formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale,
        _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === 'p' || firstCharacter === 'P') {
            var longFormatter = format_longFormatters[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join('').match(formattingTokensRegExp).map(function(substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
            return "'";
        }
        var firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return cleanEscapedString(substring);
        }
        var formatter = format_formatters[firstCharacter];
        if (formatter) {
            if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
                throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
            }
            if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
                throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
            }
            return formatter(utcDate, substring, locale.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        }
        return substring;
    }).join('');
    return result;
}
function cleanEscapedString(input) {
    var matched = input.match(escapedStringRegExp);
    if (!matched) {
        return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
}


/***/ }),

/***/ 1933:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jH: () => (/* binding */ useDirection)
/* harmony export */ });
/* unused harmony exports DirectionProvider, Provider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95155);
// packages/react/direction/src/direction.tsx


var DirectionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
var DirectionProvider = (props) => {
  const { dir, children } = props;
  return /* @__PURE__ */ jsx(DirectionContext.Provider, { value: dir, children });
};
function useDirection(localDir) {
  const globalDir = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
var Provider = (/* unused pure expression or super */ null && (DirectionProvider));

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 5121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Repeat)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Repeat = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Repeat", [
    [
        "path",
        {
            d: "m17 2 4 4-4 4",
            key: "nntrym"
        }
    ],
    [
        "path",
        {
            d: "M3 11v-1a4 4 0 0 1 4-4h14",
            key: "84bu3i"
        }
    ],
    [
        "path",
        {
            d: "m7 22-4-4 4-4",
            key: "1wqhfi"
        }
    ],
    [
        "path",
        {
            d: "M21 13v1a4 4 0 0 1-4 4H3",
            key: "1rx37r"
        }
    ]
]);
 //# sourceMappingURL=repeat.js.map


/***/ }),

/***/ 5772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97651);
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=image.js.map

/***/ }),

/***/ 6296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LoaderCircle)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const LoaderCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("LoaderCircle", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
]);
 //# sourceMappingURL=loader-circle.js.map


/***/ }),

/***/ 6962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Download)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Download = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Download", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "7 10 12 15 17 10",
            key: "2ggqvy"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "15",
            y2: "3",
            key: "1vk2je"
        }
    ]
]);
 //# sourceMappingURL=download.js.map


/***/ }),

/***/ 7019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LayoutList)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const LayoutList = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("LayoutList", [
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "3",
            y: "3",
            rx: "1",
            key: "1g98yp"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "3",
            y: "14",
            rx: "1",
            key: "1bb6yr"
        }
    ],
    [
        "path",
        {
            d: "M14 4h7",
            key: "3xa0d5"
        }
    ],
    [
        "path",
        {
            d: "M14 9h7",
            key: "1icrd9"
        }
    ],
    [
        "path",
        {
            d: "M14 15h7",
            key: "1mj8o2"
        }
    ],
    [
        "path",
        {
            d: "M14 20h7",
            key: "11slyb"
        }
    ]
]);
 //# sourceMappingURL=layout-list.js.map


/***/ }),

/***/ 8743:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 10029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Music)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Music = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Music", [
    [
        "path",
        {
            d: "M9 18V5l12-2v13",
            key: "1jmyc2"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "16",
            r: "3",
            key: "1hluhg"
        }
    ]
]);
 //# sourceMappingURL=music.js.map


/***/ }),

/***/ 10762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Terminal)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Terminal = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Terminal", [
    [
        "polyline",
        {
            points: "4 17 10 11 4 5",
            key: "akl6gq"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "20",
            y1: "19",
            y2: "19",
            key: "q2wloq"
        }
    ]
]);
 //# sourceMappingURL=terminal.js.map


/***/ }),

/***/ 10857:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if (false) {}
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: false,
            configurable: true
        });
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 12590:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImageBlurSvg", ({
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
}));
function getImageBlurSvg({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? `viewBox='0 0 ${svgWidth} ${svgHeight}'` : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${viewBox}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${preserveAspectRatio}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
} //# sourceMappingURL=image-blur-svg.js.map


/***/ }),

/***/ 13220:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k5: () => (/* reexport */ GenIcon)
});

// UNUSED EXPORTS: DefaultContext, IconBase, IconContext, IconsManifest

;// ./node_modules/react-icons/lib/iconsManifest.mjs
var IconsManifest = [
    {
        "id": "ci",
        "name": "Circum Icons",
        "projectUrl": "https://circumicons.com/",
        "license": "MPL-2.0 license",
        "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
    },
    {
        "id": "fa",
        "name": "Font Awesome 5",
        "projectUrl": "https://fontawesome.com/",
        "license": "CC BY 4.0 License",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        "id": "fa6",
        "name": "Font Awesome 6",
        "projectUrl": "https://fontawesome.com/",
        "license": "CC BY 4.0 License",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        "id": "io",
        "name": "Ionicons 4",
        "projectUrl": "https://ionicons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
    },
    {
        "id": "io5",
        "name": "Ionicons 5",
        "projectUrl": "https://ionicons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
    },
    {
        "id": "md",
        "name": "Material Design icons",
        "projectUrl": "http://google.github.io/material-design-icons/",
        "license": "Apache License Version 2.0",
        "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
    },
    {
        "id": "ti",
        "name": "Typicons",
        "projectUrl": "http://s-ings.com/typicons/",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    },
    {
        "id": "go",
        "name": "Github Octicons icons",
        "projectUrl": "https://octicons.github.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
    },
    {
        "id": "fi",
        "name": "Feather",
        "projectUrl": "https://feathericons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
    },
    {
        "id": "lu",
        "name": "Lucide",
        "projectUrl": "https://lucide.dev/",
        "license": "ISC",
        "licenseUrl": "https://github.com/lucide-icons/lucide/blob/main/LICENSE"
    },
    {
        "id": "gi",
        "name": "Game Icons",
        "projectUrl": "https://game-icons.net/",
        "license": "CC BY 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
    },
    {
        "id": "wi",
        "name": "Weather Icons",
        "projectUrl": "https://erikflowers.github.io/weather-icons/",
        "license": "SIL OFL 1.1",
        "licenseUrl": "http://scripts.sil.org/OFL"
    },
    {
        "id": "di",
        "name": "Devicons",
        "projectUrl": "https://vorillaz.github.io/devicons/",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "ai",
        "name": "Ant Design Icons",
        "projectUrl": "https://github.com/ant-design/ant-design-icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "bs",
        "name": "Bootstrap Icons",
        "projectUrl": "https://github.com/twbs/icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "ri",
        "name": "Remix Icon",
        "projectUrl": "https://github.com/Remix-Design/RemixIcon",
        "license": "Apache License Version 2.0",
        "licenseUrl": "http://www.apache.org/licenses/"
    },
    {
        "id": "fc",
        "name": "Flat Color Icons",
        "projectUrl": "https://github.com/icons8/flat-color-icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "gr",
        "name": "Grommet-Icons",
        "projectUrl": "https://github.com/grommet/grommet-icons",
        "license": "Apache License Version 2.0",
        "licenseUrl": "http://www.apache.org/licenses/"
    },
    {
        "id": "hi",
        "name": "Heroicons",
        "projectUrl": "https://github.com/tailwindlabs/heroicons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "hi2",
        "name": "Heroicons 2",
        "projectUrl": "https://github.com/tailwindlabs/heroicons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "si",
        "name": "Simple Icons",
        "projectUrl": "https://simpleicons.org/",
        "license": "CC0 1.0 Universal",
        "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    {
        "id": "sl",
        "name": "Simple Line Icons",
        "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "im",
        "name": "IcoMoon Free",
        "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
        "license": "CC BY 4.0 License",
        "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
    },
    {
        "id": "bi",
        "name": "BoxIcons",
        "projectUrl": "https://github.com/atisawd/boxicons",
        "license": "MIT",
        "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
    },
    {
        "id": "cg",
        "name": "css.gg",
        "projectUrl": "https://github.com/astrit/css.gg",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "vsc",
        "name": "VS Code Icons",
        "projectUrl": "https://github.com/microsoft/vscode-codicons",
        "license": "CC BY 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        "id": "tb",
        "name": "Tabler Icons",
        "projectUrl": "https://github.com/tabler/tabler-icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "tfi",
        "name": "Themify Icons",
        "projectUrl": "https://github.com/lykmapipo/themify-icons",
        "license": "MIT",
        "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
    },
    {
        "id": "rx",
        "name": "Radix Icons",
        "projectUrl": "https://icons.radix-ui.com",
        "license": "MIT",
        "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
    },
    {
        "id": "pi",
        "name": "Phosphor Icons",
        "projectUrl": "https://github.com/phosphor-icons/core",
        "license": "MIT",
        "licenseUrl": "https://github.com/phosphor-icons/core/blob/main/LICENSE"
    },
    {
        "id": "lia",
        "name": "Icons8 Line Awesome",
        "projectUrl": "https://icons8.com/line-awesome",
        "license": "MIT",
        "licenseUrl": "https://github.com/icons8/line-awesome/blob/master/LICENSE.md"
    }
];

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./node_modules/react-icons/lib/iconContext.mjs

var DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined
};
var IconContext = react.createContext && /*#__PURE__*/ react.createContext(DefaultContext);

;// ./node_modules/react-icons/lib/iconBase.mjs
var _excluded = [
    "attr",
    "size",
    "title"
];
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}


function Tree2Element(tree) {
    return tree && tree.map((node, i)=>/*#__PURE__*/ react.createElement(node.tag, _objectSpread({
            key: i
        }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
    return (props)=>/*#__PURE__*/ react.createElement(IconBase, _extends({
            attr: _objectSpread({}, data.attr)
        }, props), Tree2Element(data.child));
}
function IconBase(props) {
    var elem = (conf)=>{
        var { attr, size, title } = props, svgProps = _objectWithoutProperties(props, _excluded);
        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className) className = conf.className;
        if (props.className) className = (className ? className + " " : "") + props.className;
        return /*#__PURE__*/ react.createElement("svg", _extends({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, conf.attr, attr, svgProps, {
            className: className,
            style: _objectSpread(_objectSpread({
                color: props.color || conf.color
            }, conf.style), props.style),
            height: computedSize,
            width: computedSize,
            xmlns: "http://www.w3.org/2000/svg"
        }), title && /*#__PURE__*/ react.createElement("title", null, title), props.children);
    };
    return IconContext !== undefined ? /*#__PURE__*/ react.createElement(IconContext.Consumer, null, (conf)=>elem(conf)) : elem(DefaultContext);
}

;// ./node_modules/react-icons/lib/index.mjs





/***/ }),

/***/ 15763:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Root)
/* harmony export */ });
/* unused harmony export Separator */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55897);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95155);
// src/separator.tsx



var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__/* .Primitive */ .sG.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator;

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 17150:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ImageConfigContext", ({
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
}));
const _interop_require_default = __webpack_require__(73623);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(12115));
const _imageconfig = __webpack_require__(55762);
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if (false) {} //# sourceMappingURL=image-config-context.shared-runtime.js.map


/***/ }),

/***/ 17347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useCallbackRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
// packages/react/use-callback-ref/src/use-callback-ref.tsx

function useCallbackRef(callback) {
  const callbackRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(callback);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    callbackRef.current = callback;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 18460:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ cva)
/* harmony export */ });
/* unused harmony export cx */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29722);
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ 
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx__WEBPACK_IMPORTED_MODULE_0__/* .clsx */ .$;
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };



/***/ }),

/***/ 18857:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "findClosestQuality", ({
    enumerable: true,
    get: function() {
        return findClosestQuality;
    }
}));
function findClosestQuality(quality, config) {
    const q = quality || 75;
    if (!config?.qualities?.length) {
        return q;
    }
    return config.qualities.reduce((prev, cur)=>Math.abs(cur - q) < Math.abs(prev - q) ? cur : prev, config.qualities[0]);
} //# sourceMappingURL=find-closest-quality.js.map


/***/ }),

/***/ 20091:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __webpack_require__(66388);
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(31393));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if (false) {}
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map


/***/ }),

/***/ 20232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Play)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Play = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Play", [
    [
        "polygon",
        {
            points: "6 3 20 12 6 21 6 3",
            key: "1oa8hb"
        }
    ]
]);
 //# sourceMappingURL=play.js.map


/***/ }),

/***/ 21172:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useMergedRef", ({
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
}));
const _react = __webpack_require__(12115);
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map


/***/ }),

/***/ 21362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ChevronRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
 //# sourceMappingURL=chevron-right.js.map


/***/ }),

/***/ 21827:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXProvider: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   useMDXComponents: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8743);



/***/ }),

/***/ 25777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Lock)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Lock = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Lock", [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
]);
 //# sourceMappingURL=lock.js.map


/***/ }),

/***/ 26923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ isValid)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(63806);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var requiredArgs = __webpack_require__(93960);
;// ./node_modules/date-fns/esm/isDate/index.js


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ function isDate(value) {
    (0,requiredArgs/* default */.A)(1, arguments);
    return value instanceof Date || (0,esm_typeof/* default */.A)(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

// EXTERNAL MODULE: ./node_modules/date-fns/esm/toDate/index.js
var toDate = __webpack_require__(54468);
;// ./node_modules/date-fns/esm/isValid/index.js



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */ function isValid(dirtyDate) {
    (0,requiredArgs/* default */.A)(1, arguments);
    if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
        return false;
    }
    var date = (0,toDate/* default */.A)(dirtyDate);
    return !isNaN(Number(date));
}


/***/ }),

/***/ 27312:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 27412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ parseISO)
});

;// ./node_modules/date-fns/esm/constants/index.js
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */ var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */ var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */ var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */ var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */ var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */ var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */ var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */ var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */ var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */ var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */ var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */ var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */ var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */ var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */ var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */ var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */ var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */ var secondsInQuarter = secondsInMonth * 3;

// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var requiredArgs = __webpack_require__(93960);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var toInteger = __webpack_require__(34279);
;// ./node_modules/date-fns/esm/parseISO/index.js



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */ function parseISO(argument, options) {
    var _options$additionalDi;
    (0,requiredArgs/* default */.A)(1, arguments);
    var additionalDigits = (0,toInteger/* default */.A)((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
    if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
        throw new RangeError('additionalDigits must be 0, 1 or 2');
    }
    if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
        return new Date(NaN);
    }
    var dateStrings = splitDateString(argument);
    var date;
    if (dateStrings.date) {
        var parseYearResult = parseYear(dateStrings.date, additionalDigits);
        date = parseDate(parseYearResult.restDateString, parseYearResult.year);
    }
    if (!date || isNaN(date.getTime())) {
        return new Date(NaN);
    }
    var timestamp = date.getTime();
    var time = 0;
    var offset;
    if (dateStrings.time) {
        time = parseTime(dateStrings.time);
        if (isNaN(time)) {
            return new Date(NaN);
        }
    }
    if (dateStrings.timezone) {
        offset = parseTimezone(dateStrings.timezone);
        if (isNaN(offset)) {
            return new Date(NaN);
        }
    } else {
        var dirtyDate = new Date(timestamp + time);
        // js parsed string assuming it's in UTC timezone
        // but we need it to be parsed in our timezone
        // so we use utc values to build date in our timezone.
        // Year values from 0 to 99 map to the years 1900 to 1999
        // so set year explicitly with setFullYear.
        var result = new Date(0);
        result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
        result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
        return result;
    }
    return new Date(timestamp + time + offset);
}
var patterns = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
    var dateStrings = {};
    var array = dateString.split(patterns.dateTimeDelimiter);
    var timeString;
    // The regex match should only return at maximum two array elements.
    // [date], [time], or [date, time].
    if (array.length > 2) {
        return dateStrings;
    }
    if (/:/.test(array[0])) {
        timeString = array[0];
    } else {
        dateStrings.date = array[0];
        timeString = array[1];
        if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
            dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
            timeString = dateString.substr(dateStrings.date.length, dateString.length);
        }
    }
    if (timeString) {
        var token = patterns.timezone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], '');
            dateStrings.timezone = token[1];
        } else {
            dateStrings.time = timeString;
        }
    }
    return dateStrings;
}
function parseYear(dateString, additionalDigits) {
    var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
    var captures = dateString.match(regex);
    // Invalid ISO-formatted year
    if (!captures) return {
        year: NaN,
        restDateString: ''
    };
    var year = captures[1] ? parseInt(captures[1]) : null;
    var century = captures[2] ? parseInt(captures[2]) : null;
    // either year or century is null, not both
    return {
        year: century === null ? year : century * 100,
        restDateString: dateString.slice((captures[1] || captures[2]).length)
    };
}
function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) return new Date(NaN);
    var captures = dateString.match(dateRegex);
    // Invalid ISO-formatted string
    if (!captures) return new Date(NaN);
    var isWeekDate = !!captures[4];
    var dayOfYear = parseDateUnit(captures[1]);
    var month = parseDateUnit(captures[2]) - 1;
    var day = parseDateUnit(captures[3]);
    var week = parseDateUnit(captures[4]);
    var dayOfWeek = parseDateUnit(captures[5]) - 1;
    if (isWeekDate) {
        if (!validateWeekDate(year, week, dayOfWeek)) {
            return new Date(NaN);
        }
        return dayOfISOWeekYear(year, week, dayOfWeek);
    } else {
        var date = new Date(0);
        if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
            return new Date(NaN);
        }
        date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
        return date;
    }
}
function parseDateUnit(value) {
    return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
    var captures = timeString.match(timeRegex);
    if (!captures) return NaN; // Invalid ISO-formatted time
    var hours = parseTimeUnit(captures[1]);
    var minutes = parseTimeUnit(captures[2]);
    var seconds = parseTimeUnit(captures[3]);
    if (!validateTime(hours, minutes, seconds)) {
        return NaN;
    }
    return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
    return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
    if (timezoneString === 'Z') return 0;
    var captures = timezoneString.match(timezoneRegex);
    if (!captures) return 0;
    var sign = captures[1] === '+' ? -1 : 1;
    var hours = parseInt(captures[2]);
    var minutes = captures[3] && parseInt(captures[3]) || 0;
    if (!validateTimezone(hours, minutes)) {
        return NaN;
    }
    return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
    var date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
// Validation functions
// February is null to handle the leap year (using ||)
var daysInMonths = [
    31,
    null,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
    return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
    return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
    return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
    if (hours === 24) {
        return minutes === 0 && seconds === 0;
    }
    return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
    return minutes >= 0 && minutes <= 59;
}


/***/ }),

/***/ 29486:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Root)
/* harmony export */ });
/* unused harmony export Label */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55897);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95155);
/* __next_internal_client_entry_do_not_use__ Label,Root auto */ // src/label.tsx



var NAME = "Label";
var Label = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__/* .Primitive */ .sG.label, {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event)=>{
            const target = event.target;
            if (target.closest("button, input, select, textarea")) return;
            props.onMouseDown?.(event);
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    });
});
Label.displayName = NAME;
var Root = Label;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 29722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ clsx)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (clsx)));

/***/ }),

/***/ 29842:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "errorOnce", ({
    enumerable: true,
    get: function() {
        return errorOnce;
    }
}));
let errorOnce = (_)=>{};
if (false) {} //# sourceMappingURL=error-once.js.map


/***/ }),

/***/ 31393:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map


/***/ }),

/***/ 31885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Lightbulb)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Lightbulb = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Lightbulb", [
    [
        "path",
        {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
            key: "1gvzjb"
        }
    ],
    [
        "path",
        {
            d: "M9 18h6",
            key: "x1upvd"
        }
    ],
    [
        "path",
        {
            d: "M10 22h4",
            key: "ceow96"
        }
    ]
]);
 //# sourceMappingURL=lightbulb.js.map


/***/ }),

/***/ 32106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ OctagonAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const OctagonAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("OctagonAlert", [
    [
        "path",
        {
            d: "M12 16h.01",
            key: "1drbdi"
        }
    ],
    [
        "path",
        {
            d: "M12 8v4",
            key: "1got3b"
        }
    ],
    [
        "path",
        {
            d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
            key: "1fd625"
        }
    ]
]);
 //# sourceMappingURL=octagon-alert.js.map


/***/ }),

/***/ 32116:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C1: () => (/* binding */ Indicator),
  bL: () => (/* binding */ Root)
});

// UNUSED EXPORTS: Progress, ProgressIndicator, createProgressScope

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
;// ./node_modules/@radix-ui/react-progress/node_modules/@radix-ui/react-context/dist/index.mjs
// src/create-context.tsx


function createContext2(rootComponentName, defaultContext) {
  const Context = React.createContext(defaultContext);
  Context.displayName = rootComponentName + "Context";
  const Provider = (props) => {
    const { children, ...context } = props;
    const value = React.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsx(Context.Provider, { value, children });
  };
  Provider.displayName = rootComponentName + "Provider";
  function useContext2(consumerName) {
    const context = React.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = react.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = react.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = react.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return react.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return react.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var dist = __webpack_require__(55897);
;// ./node_modules/@radix-ui/react-progress/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Indicator,Progress,ProgressIndicator,Root,createProgressScope auto */ // src/progress.tsx




var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext, createProgressScope] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeProgress, value: valueProp = null, max: maxProp, getValueLabel = defaultGetValueLabel, ...progressProps } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
        console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
        console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(ProgressProvider, {
        scope: __scopeProgress,
        value,
        max,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* Primitive */.sG.div, {
            "aria-valuemax": max,
            "aria-valuemin": 0,
            "aria-valuenow": isNumber(value) ? value : void 0,
            "aria-valuetext": valueLabel,
            role: "progressbar",
            "data-state": getProgressState(value, max),
            "data-value": value ?? void 0,
            "data-max": max,
            ...progressProps,
            ref: forwardedRef
        })
    });
});
Progress.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* Primitive */.sG.div, {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
    });
});
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
    return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
    return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
    return typeof value === "number";
}
function isValidMaxNumber(max) {
    return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
    return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
    return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
    return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root = Progress;
var Indicator = ProgressIndicator;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 33210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
 //# sourceMappingURL=x.js.map


/***/ }),

/***/ 33418:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Dk: () => (/* binding */ v),
  kc: () => (/* binding */ react_I),
  c3: () => (/* binding */ react_E)
});

// UNUSED EXPORTS: _useExtracted, useLocale, useMessages, useNow, useTimeZone

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./node_modules/@formatjs/fast-memoize/index.js
function memoize(fn, options) {
	const cache = options && options.cache ? options.cache : cacheDefault;
	const serializer = options && options.serializer ? options.serializer : serializerDefault;
	const strategy = options && options.strategy ? options.strategy : strategyDefault;
	return strategy(fn, {
		cache,
		serializer
	});
}
//
// Strategy
//
function isPrimitive(value) {
	return value == null || typeof value === "number" || typeof value === "boolean";
}
function monadic(fn, cache, serializer, arg) {
	const cacheKey = isPrimitive(arg) ? arg : serializer(arg);
	let computedValue = cache.get(cacheKey);
	if (typeof computedValue === "undefined") {
		computedValue = fn.call(this, arg);
		cache.set(cacheKey, computedValue);
	}
	return computedValue;
}
function variadic(fn, cache, serializer) {
	const args = Array.prototype.slice.call(arguments, 3);
	const cacheKey = serializer(args);
	let computedValue = cache.get(cacheKey);
	if (typeof computedValue === "undefined") {
		computedValue = fn.apply(this, args);
		cache.set(cacheKey, computedValue);
	}
	return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
	return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
	const strategy = fn.length === 1 ? monadic : variadic;
	return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
	return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
	return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
const serializerDefault = function() {
	return JSON.stringify(arguments);
};
//
// Cache
//
class ObjectWithoutPrototypeCache {
	cache;
	constructor() {
		this.cache = Object.create(null);
	}
	get(key) {
		return this.cache[key];
	}
	set(key, value) {
		this.cache[key] = value;
	}
}
const cacheDefault = { create: function create() {
	return new ObjectWithoutPrototypeCache();
} };
const strategies = {
	variadic: strategyVariadic,
	monadic: strategyMonadic
};

;// ./node_modules/use-intl/dist/esm/production/formatters-CJcico0N.js
class formatters_CJcico0N_a extends Error{constructor(e,t){let a=e;t&&(a+=": "+t),super(a),this.code=e,t&&(this.originalMessage=t)}}var formatters_CJcico0N_r=function(e){return e.MISSING_MESSAGE="MISSING_MESSAGE",e.MISSING_FORMAT="MISSING_FORMAT",e.ENVIRONMENT_FALLBACK="ENVIRONMENT_FALLBACK",e.INSUFFICIENT_PATH="INSUFFICIENT_PATH",e.INVALID_MESSAGE="INVALID_MESSAGE",e.INVALID_KEY="INVALID_KEY",e.FORMATTING_ERROR="FORMATTING_ERROR",e}(formatters_CJcico0N_r||{});function s(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function formatters_CJcico0N_i(a,r){return memoize(a,{cache:(s=r,{create:()=>({get:e=>s[e],set(e,t){s[e]=t}})}),strategy:strategies.variadic});var s}function I(e,t){return formatters_CJcico0N_i(((...t)=>new e(...t)),t)}function formatters_CJcico0N_l(e){return{getDateTimeFormat:I(Intl.DateTimeFormat,e.dateTime),getNumberFormat:I(Intl.NumberFormat,e.number),getPluralRules:I(Intl.PluralRules,e.pluralRules),getRelativeTimeFormat:I(Intl.RelativeTimeFormat,e.relativeTime),getListFormat:I(Intl.ListFormat,e.list),getDisplayNames:I(Intl.DisplayNames,e.displayNames)}}

;// ./node_modules/@formatjs/icu-messageformat-parser/types.js

let types_TYPE = /* @__PURE__ */ function(TYPE) {
	/**
	* Raw text
	*/
	TYPE[TYPE["literal"] = 0] = "literal";
	/**
	* Variable w/o any format, e.g `var` in `this is a {var}`
	*/
	TYPE[TYPE["argument"] = 1] = "argument";
	/**
	* Variable w/ number format
	*/
	TYPE[TYPE["number"] = 2] = "number";
	/**
	* Variable w/ date format
	*/
	TYPE[TYPE["date"] = 3] = "date";
	/**
	* Variable w/ time format
	*/
	TYPE[TYPE["time"] = 4] = "time";
	/**
	* Variable w/ select format
	*/
	TYPE[TYPE["select"] = 5] = "select";
	/**
	* Variable w/ plural format
	*/
	TYPE[TYPE["plural"] = 6] = "plural";
	/**
	* Only possible within plural argument.
	* This is the `#` symbol that will be substituted with the count.
	*/
	TYPE[TYPE["pound"] = 7] = "pound";
	/**
	* XML-like tag
	*/
	TYPE[TYPE["tag"] = 8] = "tag";
	return TYPE;
}({});
let SKELETON_TYPE = /* @__PURE__ */ function(SKELETON_TYPE) {
	SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
	SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
	return SKELETON_TYPE;
}({});
/**
* Type Guards
*/
function isLiteralElement(el) {
	return el.type === types_TYPE.literal;
}
function types_isArgumentElement(el) {
	return el.type === types_TYPE.argument;
}
function types_isNumberElement(el) {
	return el.type === types_TYPE.number;
}
function types_isDateElement(el) {
	return el.type === types_TYPE.date;
}
function types_isTimeElement(el) {
	return el.type === types_TYPE.time;
}
function types_isSelectElement(el) {
	return el.type === types_TYPE.select;
}
function types_isPluralElement(el) {
	return el.type === types_TYPE.plural;
}
function types_isPoundElement(el) {
	return el.type === types_TYPE.pound;
}
function types_isTagElement(el) {
	return el.type === types_TYPE.tag;
}
function isNumberSkeleton(el) {
	return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
	return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.dateTime);
}
function createLiteralElement(value) {
	return {
		type: types_TYPE.literal,
		value
	};
}
function createNumberElement(value, style) {
	return {
		type: types_TYPE.number,
		value,
		style
	};
}

;// ./node_modules/@formatjs/icu-messageformat-parser/error.js

let ErrorKind = /* @__PURE__ */ function(ErrorKind) {
	/** Argument is unclosed (e.g. `{0`) */
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
	/** Argument is empty (e.g. `{}`). */
	ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
	/** Argument is malformed (e.g. `{foo!}``) */
	ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
	/** Expect an argument type (e.g. `{foo,}`) */
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
	/** Unsupported argument type (e.g. `{foo,foo}`) */
	ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
	/** Expect an argument style (e.g. `{foo, number, }`) */
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
	/** The number skeleton is invalid. */
	ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
	/** The date time skeleton is invalid. */
	ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
	/** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
	ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
	/** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
	ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
	/** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
	ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
	/** Missing select argument options (e.g. `{foo, select}`) */
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
	/** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
	/** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
	ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
	/** Expecting a selector in `select` argument (e.g `{foo, select}`) */
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
	/** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
	/** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
	/**
	* Expecting a message fragment after the `plural` or `selectordinal` selector
	* (e.g. `{foo, plural, one}`)
	*/
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
	/** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
	ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
	/**
	* Duplicate selectors in `plural` or `selectordinal` argument.
	* (e.g. {foo, plural, one {#} one {#}})
	*/
	ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
	/** Duplicate selectors in `select` argument.
	* (e.g. {foo, select, apple {apple} apple {apple}})
	*/
	ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
	/** Plural or select argument option must have `other` clause. */
	ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
	/** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
	ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
	/** The tag name is invalid. (e.g. `<123>foo</123>`) */
	ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
	/** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
	ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
	/** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
	ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
	return ErrorKind;
}({});

;// ./node_modules/@formatjs/icu-messageformat-parser/regex.generated.js
// @generated from regex-gen.ts
const SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
const WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;

;// ./node_modules/@formatjs/icu-skeleton-parser/date-time.js
/**
* https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
* with some tweaks
*/
const DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
* Parse Date time skeleton into Intl.DateTimeFormatOptions
* Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* @public
* @param skeleton skeleton string
*/
function parseDateTimeSkeleton(skeleton) {
	const result = {};
	skeleton.replace(DATE_TIME_REGEX, (match) => {
		const len = match.length;
		switch (match[0]) {
			case "G":
				result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
				break;
			case "y":
				result.year = len === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw new RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				result.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][len - 1];
				break;
			case "w":
			case "W": throw new RangeError("`w/W` (week) patterns are not supported");
			case "d":
				result.day = ["numeric", "2-digit"][len - 1];
				break;
			case "D":
			case "F":
			case "g": throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				result.weekday = len === 4 ? "long" : len === 5 ? "narrow" : "short";
				break;
			case "e":
				if (len < 4) {
					throw new RangeError("`e..eee` (weekday) patterns are not supported");
				}
				result.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][len - 4];
				break;
			case "c":
				if (len < 4) {
					throw new RangeError("`c..ccc` (weekday) patterns are not supported");
				}
				result.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][len - 4];
				break;
			case "a":
				result.hour12 = true;
				break;
			case "b":
			case "B": throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				result.hourCycle = "h12";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "H":
				result.hourCycle = "h23";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "K":
				result.hourCycle = "h11";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "k":
				result.hourCycle = "h24";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "j":
			case "J":
			case "C": throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				result.minute = ["numeric", "2-digit"][len - 1];
				break;
			case "s":
				result.second = ["numeric", "2-digit"][len - 1];
				break;
			case "S":
			case "A": throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				result.timeZoneName = len < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	});
	return result;
}

;// ./node_modules/@formatjs/icu-skeleton-parser/regex.generated.js
// @generated from regex-gen.ts
const regex_generated_WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

;// ./node_modules/@formatjs/icu-skeleton-parser/number.js

function parseNumberSkeletonFromString(skeleton) {
	if (skeleton.length === 0) {
		throw new Error("Number skeleton cannot be empty");
	}
	// Parse the skeleton
	const stringTokens = skeleton.split(regex_generated_WHITE_SPACE_REGEX).filter((x) => x.length > 0);
	const tokens = [];
	for (const stringToken of stringTokens) {
		let stemAndOptions = stringToken.split("/");
		if (stemAndOptions.length === 0) {
			throw new Error("Invalid number skeleton");
		}
		const [stem, ...options] = stemAndOptions;
		for (const option of options) {
			if (option.length === 0) {
				throw new Error("Invalid number skeleton");
			}
		}
		tokens.push({
			stem,
			options
		});
	}
	return tokens;
}
function icuUnitToEcma(unit) {
	return unit.replace(/^(.*?)-/, "");
}
const FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
const SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
const INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
const CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
	const result = {};
	if (str[str.length - 1] === "r") {
		result.roundingPriority = "morePrecision";
	} else if (str[str.length - 1] === "s") {
		result.roundingPriority = "lessPrecision";
	}
	str.replace(SIGNIFICANT_PRECISION_REGEX, function(_, g1, g2) {
		// @@@ case
		if (typeof g2 !== "string") {
			result.minimumSignificantDigits = g1.length;
			result.maximumSignificantDigits = g1.length;
		} else if (g2 === "+") {
			result.minimumSignificantDigits = g1.length;
		} else if (g1[0] === "#") {
			result.maximumSignificantDigits = g1.length;
		} else {
			result.minimumSignificantDigits = g1.length;
			result.maximumSignificantDigits = g1.length + (typeof g2 === "string" ? g2.length : 0);
		}
		return "";
	});
	return result;
}
function parseSign(str) {
	switch (str) {
		case "sign-auto": return { signDisplay: "auto" };
		case "sign-accounting":
		case "()": return { currencySign: "accounting" };
		case "sign-always":
		case "+!": return { signDisplay: "always" };
		case "sign-accounting-always":
		case "()!": return {
			signDisplay: "always",
			currencySign: "accounting"
		};
		case "sign-except-zero":
		case "+?": return { signDisplay: "exceptZero" };
		case "sign-accounting-except-zero":
		case "()?": return {
			signDisplay: "exceptZero",
			currencySign: "accounting"
		};
		case "sign-never":
		case "+_": return { signDisplay: "never" };
	}
}
function parseConciseScientificAndEngineeringStem(stem) {
	// Engineering
	let result;
	if (stem[0] === "E" && stem[1] === "E") {
		result = { notation: "engineering" };
		stem = stem.slice(2);
	} else if (stem[0] === "E") {
		result = { notation: "scientific" };
		stem = stem.slice(1);
	}
	if (result) {
		const signDisplay = stem.slice(0, 2);
		if (signDisplay === "+!") {
			result.signDisplay = "always";
			stem = stem.slice(2);
		} else if (signDisplay === "+?") {
			result.signDisplay = "exceptZero";
			stem = stem.slice(2);
		}
		if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
			throw new Error("Malformed concise eng/scientific notation");
		}
		result.minimumIntegerDigits = stem.length;
	}
	return result;
}
function parseNotationOptions(opt) {
	const result = {};
	const signOpts = parseSign(opt);
	if (signOpts) {
		return signOpts;
	}
	return result;
}
/**
* https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
*/
function parseNumberSkeleton(tokens) {
	let result = {};
	for (const token of tokens) {
		switch (token.stem) {
			case "percent":
			case "%":
				result.style = "percent";
				continue;
			case "%x100":
				result.style = "percent";
				result.scale = 100;
				continue;
			case "currency":
				result.style = "currency";
				result.currency = token.options[0];
				continue;
			case "group-off":
			case ",_":
				result.useGrouping = false;
				continue;
			case "precision-integer":
			case ".":
				result.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				result.style = "unit";
				result.unit = icuUnitToEcma(token.options[0]);
				continue;
			case "compact-short":
			case "K":
				result.notation = "compact";
				result.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				result.notation = "compact";
				result.compactDisplay = "long";
				continue;
			case "scientific":
				result = {
					...result,
					notation: "scientific",
					...token.options.reduce((all, opt) => ({
						...all,
						...parseNotationOptions(opt)
					}), {})
				};
				continue;
			case "engineering":
				result = {
					...result,
					notation: "engineering",
					...token.options.reduce((all, opt) => ({
						...all,
						...parseNotationOptions(opt)
					}), {})
				};
				continue;
			case "notation-simple":
				result.notation = "standard";
				continue;
			case "unit-width-narrow":
				result.currencyDisplay = "narrowSymbol";
				result.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				result.currencyDisplay = "code";
				result.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				result.currencyDisplay = "name";
				result.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				result.currencyDisplay = "symbol";
				continue;
			case "scale":
				result.scale = parseFloat(token.options[0]);
				continue;
			case "rounding-mode-floor":
				result.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				result.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				result.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				result.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				result.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				result.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				result.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (token.options.length > 1) {
					throw new RangeError("integer-width stems only accept a single optional option");
				}
				token.options[0].replace(INTEGER_WIDTH_REGEX, function(_, g1, g2, g3, g4, g5) {
					if (g1) {
						result.minimumIntegerDigits = g2.length;
					} else if (g3 && g4) {
						throw new Error("We currently do not support maximum integer digits");
					} else if (g5) {
						throw new Error("We currently do not support exact integer digits");
					}
					return "";
				});
				continue;
		}
		// https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
		if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
			result.minimumIntegerDigits = token.stem.length;
			continue;
		}
		if (FRACTION_PRECISION_REGEX.test(token.stem)) {
			// Precision
			// https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
			// precision-integer case
			if (token.options.length > 1) {
				throw new RangeError("Fraction-precision stems only accept a single optional option");
			}
			token.stem.replace(FRACTION_PRECISION_REGEX, function(_, g1, g2, g3, g4, g5) {
				// .000* case (before ICU67 it was .000+)
				if (g2 === "*") {
					result.minimumFractionDigits = g1.length;
				} else if (g3 && g3[0] === "#") {
					result.maximumFractionDigits = g3.length;
				} else if (g4 && g5) {
					result.minimumFractionDigits = g4.length;
					result.maximumFractionDigits = g4.length + g5.length;
				} else {
					result.minimumFractionDigits = g1.length;
					result.maximumFractionDigits = g1.length;
				}
				return "";
			});
			const opt = token.options[0];
			// https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
			if (opt === "w") {
				result = {
					...result,
					trailingZeroDisplay: "stripIfInteger"
				};
			} else if (opt) {
				result = {
					...result,
					...parseSignificantPrecision(opt)
				};
			}
			continue;
		}
		// https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
		if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
			result = {
				...result,
				...parseSignificantPrecision(token.stem)
			};
			continue;
		}
		const signOpts = parseSign(token.stem);
		if (signOpts) {
			result = {
				...result,
				...signOpts
			};
		}
		const conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
		if (conciseScientificAndEngineeringOpts) {
			result = {
				...result,
				...conciseScientificAndEngineeringOpts
			};
		}
	}
	return result;
}

;// ./node_modules/@formatjs/icu-messageformat-parser/time-data.generated.js
// @generated from time-data-gen.ts
// prettier-ignore
const timeData = {
	"001": ["H", "h"],
	"419": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"AC": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"AD": ["H", "hB"],
	"AE": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"AF": [
		"H",
		"hb",
		"hB",
		"h"
	],
	"AG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"AI": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"AL": [
		"h",
		"H",
		"hB"
	],
	"AM": ["H", "hB"],
	"AO": ["H", "hB"],
	"AR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"AS": ["h", "H"],
	"AT": ["H", "hB"],
	"AU": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"AW": ["H", "hB"],
	"AX": ["H"],
	"AZ": [
		"H",
		"hB",
		"h"
	],
	"BA": [
		"H",
		"hB",
		"h"
	],
	"BB": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BD": [
		"h",
		"hB",
		"H"
	],
	"BE": ["H", "hB"],
	"BF": ["H", "hB"],
	"BG": [
		"H",
		"hB",
		"h"
	],
	"BH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"BI": ["H", "h"],
	"BJ": ["H", "hB"],
	"BL": ["H", "hB"],
	"BM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BN": [
		"hb",
		"hB",
		"h",
		"H"
	],
	"BO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"BQ": ["H"],
	"BR": ["H", "hB"],
	"BS": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BT": ["h", "H"],
	"BW": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"BY": ["H", "h"],
	"BZ": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CA": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"CC": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CD": ["hB", "H"],
	"CF": [
		"H",
		"h",
		"hB"
	],
	"CG": ["H", "hB"],
	"CH": [
		"H",
		"hB",
		"h"
	],
	"CI": ["H", "hB"],
	"CK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CL": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CM": [
		"H",
		"h",
		"hB"
	],
	"CN": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"CO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CP": ["H"],
	"CR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CU": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CV": ["H", "hB"],
	"CW": ["H", "hB"],
	"CX": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CY": [
		"h",
		"H",
		"hb",
		"hB"
	],
	"CZ": ["H"],
	"DE": ["H", "hB"],
	"DG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"DJ": ["h", "H"],
	"DK": ["H"],
	"DM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"DO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"DZ": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"EA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"EC": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"EE": ["H", "hB"],
	"EG": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"EH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ER": ["h", "H"],
	"ES": [
		"H",
		"hB",
		"h",
		"hb"
	],
	"ET": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"FI": ["H"],
	"FJ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"FK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"FM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"FO": ["H", "h"],
	"FR": ["H", "hB"],
	"GA": ["H", "hB"],
	"GB": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GD": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GE": [
		"H",
		"hB",
		"h"
	],
	"GF": ["H", "hB"],
	"GG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GH": ["h", "H"],
	"GI": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GL": ["H", "h"],
	"GM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GN": ["H", "hB"],
	"GP": ["H", "hB"],
	"GQ": [
		"H",
		"hB",
		"h",
		"hb"
	],
	"GR": [
		"h",
		"H",
		"hb",
		"hB"
	],
	"GS": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GT": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"GU": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GW": ["H", "hB"],
	"GY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"HK": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"HN": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"HR": ["H", "hB"],
	"HU": ["H", "h"],
	"IC": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ID": ["H"],
	"IE": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IL": ["H", "hB"],
	"IM": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IN": ["h", "H"],
	"IO": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IQ": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"IR": ["hB", "H"],
	"IS": ["H"],
	"IT": ["H", "hB"],
	"JE": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"JM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"JO": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"JP": [
		"H",
		"K",
		"h"
	],
	"KE": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"KG": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"KH": [
		"hB",
		"h",
		"H",
		"hb"
	],
	"KI": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KM": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"KN": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KP": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"KR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"KW": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"KY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KZ": ["H", "hB"],
	"LA": [
		"H",
		"hb",
		"hB",
		"h"
	],
	"LB": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"LC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"LI": [
		"H",
		"hB",
		"h"
	],
	"LK": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"LR": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"LS": ["h", "H"],
	"LT": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"LU": [
		"H",
		"h",
		"hB"
	],
	"LV": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"LY": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"MC": ["H", "hB"],
	"MD": ["H", "hB"],
	"ME": [
		"H",
		"hB",
		"h"
	],
	"MF": ["H", "hB"],
	"MG": ["H", "h"],
	"MH": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"ML": ["H"],
	"MM": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"MN": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"MO": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MP": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MQ": ["H", "hB"],
	"MR": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MS": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"MT": ["H", "h"],
	"MU": ["H", "h"],
	"MV": ["H", "h"],
	"MW": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MX": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"MY": [
		"hb",
		"hB",
		"h",
		"H"
	],
	"MZ": ["H", "hB"],
	"NA": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"NC": ["H", "hB"],
	"NE": ["H"],
	"NF": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NI": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"NL": ["H", "hB"],
	"NO": ["H", "h"],
	"NP": [
		"H",
		"h",
		"hB"
	],
	"NR": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NU": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NZ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"OM": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PA": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PE": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PF": [
		"H",
		"h",
		"hB"
	],
	"PG": ["h", "H"],
	"PH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PK": [
		"h",
		"hB",
		"H"
	],
	"PL": ["H", "h"],
	"PM": ["H", "hB"],
	"PN": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"PR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PS": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PT": ["H", "hB"],
	"PW": ["h", "H"],
	"PY": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"QA": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"RE": ["H", "hB"],
	"RO": ["H", "hB"],
	"RS": [
		"H",
		"hB",
		"h"
	],
	"RU": ["H"],
	"RW": ["H", "h"],
	"SA": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SB": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SC": [
		"H",
		"h",
		"hB"
	],
	"SD": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SE": ["H"],
	"SG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SH": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"SI": ["H", "hB"],
	"SJ": ["H"],
	"SK": ["H"],
	"SL": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SM": [
		"H",
		"h",
		"hB"
	],
	"SN": [
		"H",
		"h",
		"hB"
	],
	"SO": ["h", "H"],
	"SR": ["H", "hB"],
	"SS": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"ST": ["H", "hB"],
	"SV": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"SX": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"SY": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SZ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TA": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"TC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TD": [
		"h",
		"H",
		"hB"
	],
	"TF": [
		"H",
		"h",
		"hB"
	],
	"TG": ["H", "hB"],
	"TH": ["H", "h"],
	"TJ": ["H", "h"],
	"TL": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"TM": ["H", "h"],
	"TN": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"TO": ["h", "H"],
	"TR": ["H", "hB"],
	"TT": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TW": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"TZ": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"UA": [
		"H",
		"hB",
		"h"
	],
	"UG": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"UM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"US": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"UY": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"UZ": [
		"H",
		"hB",
		"h"
	],
	"VA": [
		"H",
		"h",
		"hB"
	],
	"VC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VE": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"VG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VI": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VN": ["H", "h"],
	"VU": ["h", "H"],
	"WF": ["H", "hB"],
	"WS": ["h", "H"],
	"XK": [
		"H",
		"hB",
		"h"
	],
	"YE": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"YT": ["H", "hB"],
	"ZA": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"ZM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"ZW": ["H", "h"],
	"af-ZA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ar-001": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ca-ES": [
		"H",
		"h",
		"hB"
	],
	"en-001": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-HK": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-IL": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"en-MY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"es-BR": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-ES": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-GQ": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"fr-CA": [
		"H",
		"h",
		"hB"
	],
	"gl-ES": [
		"H",
		"h",
		"hB"
	],
	"gu-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"hi-IN": [
		"hB",
		"h",
		"H"
	],
	"it-CH": [
		"H",
		"h",
		"hB"
	],
	"it-IT": [
		"H",
		"h",
		"hB"
	],
	"kn-IN": [
		"hB",
		"h",
		"H"
	],
	"ku-SY": ["H", "hB"],
	"ml-IN": [
		"hB",
		"h",
		"H"
	],
	"mr-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"pa-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"ta-IN": [
		"hB",
		"h",
		"hb",
		"H"
	],
	"te-IN": [
		"hB",
		"h",
		"H"
	],
	"zu-ZA": [
		"H",
		"hB",
		"hb",
		"h"
	]
};

;// ./node_modules/@formatjs/icu-messageformat-parser/date-time-pattern-generator.js

/**
* Returns the best matching date time pattern if a date time skeleton
* pattern is provided with a locale. Follows the Unicode specification:
* https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
* @param skeleton date time skeleton pattern that possibly includes j, J or C
* @param locale
*/
function getBestPattern(skeleton, locale) {
	let skeletonCopy = "";
	for (let patternPos = 0; patternPos < skeleton.length; patternPos++) {
		const patternChar = skeleton.charAt(patternPos);
		if (patternChar === "j") {
			let extraLength = 0;
			while (patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar) {
				extraLength++;
				patternPos++;
			}
			let hourLen = 1 + (extraLength & 1);
			let dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
			let dayPeriodChar = "a";
			let hourChar = getDefaultHourSymbolFromLocale(locale);
			if (hourChar == "H" || hourChar == "k") {
				dayPeriodLen = 0;
			}
			while (dayPeriodLen-- > 0) {
				skeletonCopy += dayPeriodChar;
			}
			while (hourLen-- > 0) {
				skeletonCopy = hourChar + skeletonCopy;
			}
		} else if (patternChar === "J") {
			skeletonCopy += "H";
		} else {
			skeletonCopy += patternChar;
		}
	}
	return skeletonCopy;
}
/**
* Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
* of the given `locale` to the corresponding time pattern.
* @param locale
*/
function getDefaultHourSymbolFromLocale(locale) {
	let hourCycle = locale.hourCycle;
	if (hourCycle === undefined && locale.hourCycles && locale.hourCycles.length) {
		// @ts-ignore
		hourCycle = locale.hourCycles[0];
	}
	if (hourCycle) {
		switch (hourCycle) {
			case "h24": return "k";
			case "h23": return "H";
			case "h12": return "h";
			case "h11": return "K";
			default: throw new Error("Invalid hourCycle");
		}
	}
	// TODO: Once hourCycle is fully supported remove the following with data generation
	const languageTag = locale.language;
	let regionTag;
	if (languageTag !== "root") {
		regionTag = locale.maximize().region;
	}
	const hourCycles = timeData[regionTag || ""] || timeData[languageTag || ""] || timeData[`${languageTag}-001`] || timeData["001"];
	return hourCycles[0];
}

;// ./node_modules/@formatjs/icu-messageformat-parser/parser.js





const SPACE_SEPARATOR_START_REGEX = new RegExp(`^${SPACE_SEPARATOR_REGEX.source}*`);
const SPACE_SEPARATOR_END_REGEX = new RegExp(`${SPACE_SEPARATOR_REGEX.source}*$`);
function createLocation(start, end) {
	return {
		start,
		end
	};
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
const hasNativeFromEntries = !!Object.fromEntries;
const hasTrimStart = !!String.prototype.trimStart;
const hasTrimEnd = !!String.prototype.trimEnd;
const fromEntries = hasNativeFromEntries ? Object.fromEntries : function fromEntries(entries) {
	const obj = {};
	for (const [k, v] of entries) {
		obj[k] = v;
	}
	return obj;
};
const trimStart = hasTrimStart ? function trimStart(s) {
	return s.trimStart();
} : function trimStart(s) {
	return s.replace(SPACE_SEPARATOR_START_REGEX, "");
};
const trimEnd = hasTrimEnd ? function trimEnd(s) {
	return s.trimEnd();
} : function trimEnd(s) {
	return s.replace(SPACE_SEPARATOR_END_REGEX, "");
};
// #endregion
const IDENTIFIER_PREFIX_RE = new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function matchIdentifierAtIndex(s, index) {
	IDENTIFIER_PREFIX_RE.lastIndex = index;
	const match = IDENTIFIER_PREFIX_RE.exec(s);
	return match[1] ?? "";
}
class parser_Parser {
	message;
	position;
	locale;
	ignoreTag;
	requiresOtherClause;
	shouldParseSkeletons;
	constructor(message, options = {}) {
		this.message = message;
		this.position = {
			offset: 0,
			line: 1,
			column: 1
		};
		this.ignoreTag = !!options.ignoreTag;
		this.locale = options.locale;
		this.requiresOtherClause = !!options.requiresOtherClause;
		this.shouldParseSkeletons = !!options.shouldParseSkeletons;
	}
	parse() {
		if (this.offset() !== 0) {
			throw Error("parser can only be used once");
		}
		return this.parseMessage(0, "", false);
	}
	parseMessage(nestingLevel, parentArgType, expectingCloseTag) {
		let elements = [];
		while (!this.isEOF()) {
			const char = this.char();
			if (char === 123) {
				const result = this.parseArgument(nestingLevel, expectingCloseTag);
				if (result.err) {
					return result;
				}
				elements.push(result.val);
			} else if (char === 125 && nestingLevel > 0) {
				break;
			} else if (char === 35 && (parentArgType === "plural" || parentArgType === "selectordinal")) {
				const position = this.clonePosition();
				this.bump();
				elements.push({
					type: types_TYPE.pound,
					location: createLocation(position, this.clonePosition())
				});
			} else if (char === 60 && !this.ignoreTag && this.peek() === 47) {
				if (expectingCloseTag) {
					break;
				} else {
					return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
				}
			} else if (char === 60 && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
				const result = this.parseTag(nestingLevel, parentArgType);
				if (result.err) {
					return result;
				}
				elements.push(result.val);
			} else {
				const result = this.parseLiteral(nestingLevel, parentArgType);
				if (result.err) {
					return result;
				}
				elements.push(result.val);
			}
		}
		return {
			val: elements,
			err: null
		};
	}
	/**
	* A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
	* [custom element name][] except that a dash is NOT always mandatory and uppercase letters
	* are accepted:
	*
	* ```
	* tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
	* tagName ::= [a-z] (PENChar)*
	* PENChar ::=
	*     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
	*     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
	*     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
	* ```
	*
	* [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
	* NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
	* since other tag-based engines like React allow it
	*/
	parseTag(nestingLevel, parentArgType) {
		const startPosition = this.clonePosition();
		this.bump();
		const tagName = this.parseTagName();
		this.bumpSpace();
		if (this.bumpIf("/>")) {
			// Self closing tag
			return {
				val: {
					type: types_TYPE.literal,
					value: `<${tagName}/>`,
					location: createLocation(startPosition, this.clonePosition())
				},
				err: null
			};
		} else if (this.bumpIf(">")) {
			const childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
			if (childrenResult.err) {
				return childrenResult;
			}
			const children = childrenResult.val;
			// Expecting a close tag
			const endTagStartPosition = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !_isAlpha(this.char())) {
					return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
				}
				const closingTagNameStartPosition = this.clonePosition();
				const closingTagName = this.parseTagName();
				if (tagName !== closingTagName) {
					return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
				}
				this.bumpSpace();
				if (!this.bumpIf(">")) {
					return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
				}
				return {
					val: {
						type: types_TYPE.tag,
						value: tagName,
						children,
						location: createLocation(startPosition, this.clonePosition())
					},
					err: null
				};
			} else {
				return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
			}
		} else {
			return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
		}
	}
	/**
	* This method assumes that the caller has peeked ahead for the first tag character.
	*/
	parseTagName() {
		const startOffset = this.offset();
		this.bump();
		while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
			this.bump();
		}
		return this.message.slice(startOffset, this.offset());
	}
	parseLiteral(nestingLevel, parentArgType) {
		const start = this.clonePosition();
		let value = "";
		while (true) {
			const parseQuoteResult = this.tryParseQuote(parentArgType);
			if (parseQuoteResult) {
				value += parseQuoteResult;
				continue;
			}
			const parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
			if (parseUnquotedResult) {
				value += parseUnquotedResult;
				continue;
			}
			const parseLeftAngleResult = this.tryParseLeftAngleBracket();
			if (parseLeftAngleResult) {
				value += parseLeftAngleResult;
				continue;
			}
			break;
		}
		const location = createLocation(start, this.clonePosition());
		return {
			val: {
				type: types_TYPE.literal,
				value,
				location
			},
			err: null
		};
	}
	tryParseLeftAngleBracket() {
		if (!this.isEOF() && this.char() === 60 && (this.ignoreTag || !_isAlphaOrSlash(this.peek() || 0))) {
			this.bump();
			return "<";
		}
		return null;
	}
	/**
	* Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
	* a character that requires quoting (that is, "only where needed"), and works the same in
	* nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
	*/
	tryParseQuote(parentArgType) {
		if (this.isEOF() || this.char() !== 39) {
			return null;
		}
		// Parse escaped char following the apostrophe, or early return if there is no escaped char.
		// Check if is valid escaped character
		switch (this.peek()) {
			case 39:
				// double quote, should return as a single quote.
				this.bump();
				this.bump();
				return "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (parentArgType === "plural" || parentArgType === "selectordinal") {
					break;
				}
				return null;
			default: return null;
		}
		this.bump();
		const codePoints = [this.char()];
		this.bump();
		// read chars until the optional closing apostrophe is found
		while (!this.isEOF()) {
			const ch = this.char();
			if (ch === 39) {
				if (this.peek() === 39) {
					codePoints.push(39);
					// Bump one more time because we need to skip 2 characters.
					this.bump();
				} else {
					// Optional closing apostrophe.
					this.bump();
					break;
				}
			} else {
				codePoints.push(ch);
			}
			this.bump();
		}
		return String.fromCodePoint(...codePoints);
	}
	tryParseUnquoted(nestingLevel, parentArgType) {
		if (this.isEOF()) {
			return null;
		}
		const ch = this.char();
		if (ch === 60 || ch === 123 || ch === 35 && (parentArgType === "plural" || parentArgType === "selectordinal") || ch === 125 && nestingLevel > 0) {
			return null;
		} else {
			this.bump();
			return String.fromCodePoint(ch);
		}
	}
	parseArgument(nestingLevel, expectingCloseTag) {
		const openingBracePosition = this.clonePosition();
		this.bump();
		this.bumpSpace();
		if (this.isEOF()) {
			return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		}
		if (this.char() === 125) {
			this.bump();
			return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		}
		// argument name
		let value = this.parseIdentifierIfPossible().value;
		if (!value) {
			return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		}
		this.bumpSpace();
		if (this.isEOF()) {
			return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		}
		switch (this.char()) {
			case 125: {
				this.bump();
				return {
					val: {
						type: types_TYPE.argument,
						value,
						location: createLocation(openingBracePosition, this.clonePosition())
					},
					err: null
				};
			}
			case 44: {
				this.bump();
				this.bumpSpace();
				if (this.isEOF()) {
					return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
				}
				return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
			}
			default: return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		}
	}
	/**
	* Advance the parser until the end of the identifier, if it is currently on
	* an identifier character. Return an empty string otherwise.
	*/
	parseIdentifierIfPossible() {
		const startingPosition = this.clonePosition();
		const startOffset = this.offset();
		const value = matchIdentifierAtIndex(this.message, startOffset);
		const endOffset = startOffset + value.length;
		this.bumpTo(endOffset);
		const endPosition = this.clonePosition();
		const location = createLocation(startingPosition, endPosition);
		return {
			value,
			location
		};
	}
	parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition) {
		// Parse this range:
		// {name, type, style}
		//        ^---^
		let typeStartPosition = this.clonePosition();
		let argType = this.parseIdentifierIfPossible().value;
		let typeEndPosition = this.clonePosition();
		switch (argType) {
			case "":
 // Expecting a style string number, date, time, plural, selectordinal, or select.
			return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
			case "number":
			case "date":
			case "time": {
				// Parse this range:
				// {name, number, style}
				//              ^-------^
				this.bumpSpace();
				let styleAndLocation = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					const styleStartPosition = this.clonePosition();
					const result = this.parseSimpleArgStyleIfPossible();
					if (result.err) {
						return result;
					}
					const style = trimEnd(result.val);
					if (style.length === 0) {
						return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
					}
					const styleLocation = createLocation(styleStartPosition, this.clonePosition());
					styleAndLocation = {
						style,
						styleLocation
					};
				}
				const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
				if (argCloseResult.err) {
					return argCloseResult;
				}
				const location = createLocation(openingBracePosition, this.clonePosition());
				// Extract style or skeleton
				if (styleAndLocation && styleAndLocation.style.startsWith("::")) {
					// Skeleton starts with `::`.
					let skeleton = trimStart(styleAndLocation.style.slice(2));
					if (argType === "number") {
						const result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
						if (result.err) {
							return result;
						}
						return {
							val: {
								type: types_TYPE.number,
								value,
								location,
								style: result.val
							},
							err: null
						};
					} else {
						if (skeleton.length === 0) {
							return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location);
						}
						let dateTimePattern = skeleton;
						// Get "best match" pattern only if locale is passed, if not, let it
						// pass as-is where `parseDateTimeSkeleton()` will throw an error
						// for unsupported patterns.
						if (this.locale) {
							dateTimePattern = getBestPattern(skeleton, this.locale);
						}
						const style = {
							type: SKELETON_TYPE.dateTime,
							pattern: dateTimePattern,
							location: styleAndLocation.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? parseDateTimeSkeleton(dateTimePattern) : {}
						};
						const type = argType === "date" ? types_TYPE.date : types_TYPE.time;
						return {
							val: {
								type,
								value,
								location,
								style
							},
							err: null
						};
					}
				}
				// Regular style or no style.
				return {
					val: {
						type: argType === "number" ? types_TYPE.number : argType === "date" ? types_TYPE.date : types_TYPE.time,
						value,
						location,
						style: styleAndLocation?.style ?? null
					},
					err: null
				};
			}
			case "plural":
			case "selectordinal":
			case "select": {
				// Parse this range:
				// {name, plural, options}
				//              ^---------^
				const typeEndPosition = this.clonePosition();
				this.bumpSpace();
				if (!this.bumpIf(",")) {
					return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition, { ...typeEndPosition }));
				}
				this.bumpSpace();
				// Parse offset:
				// {name, plural, offset:1, options}
				//                ^-----^
				//
				// or the first option:
				//
				// {name, plural, one {...} other {...}}
				//                ^--^
				let identifierAndLocation = this.parseIdentifierIfPossible();
				let pluralOffset = 0;
				if (argType !== "select" && identifierAndLocation.value === "offset") {
					if (!this.bumpIf(":")) {
						return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
					}
					this.bumpSpace();
					const result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (result.err) {
						return result;
					}
					// Parse another identifier for option parsing
					this.bumpSpace();
					identifierAndLocation = this.parseIdentifierIfPossible();
					pluralOffset = result.val;
				}
				const optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
				if (optionsResult.err) {
					return optionsResult;
				}
				const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
				if (argCloseResult.err) {
					return argCloseResult;
				}
				const location = createLocation(openingBracePosition, this.clonePosition());
				if (argType === "select") {
					return {
						val: {
							type: types_TYPE.select,
							value,
							options: fromEntries(optionsResult.val),
							location
						},
						err: null
					};
				} else {
					return {
						val: {
							type: types_TYPE.plural,
							value,
							options: fromEntries(optionsResult.val),
							offset: pluralOffset,
							pluralType: argType === "plural" ? "cardinal" : "ordinal",
							location
						},
						err: null
					};
				}
			}
			default: return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
		}
	}
	tryParseArgumentClose(openingBracePosition) {
		// Parse: {value, number, ::currency/GBP }
		//
		if (this.isEOF() || this.char() !== 125) {
			return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		}
		this.bump();
		return {
			val: true,
			err: null
		};
	}
	/**
	* See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
	*/
	parseSimpleArgStyleIfPossible() {
		let nestedBraces = 0;
		const startPosition = this.clonePosition();
		while (!this.isEOF()) {
			const ch = this.char();
			switch (ch) {
				case 39: {
					// Treat apostrophe as quoting but include it in the style part.
					// Find the end of the quoted literal text.
					this.bump();
					let apostrophePosition = this.clonePosition();
					if (!this.bumpUntil("'")) {
						return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
					}
					this.bump();
					break;
				}
				case 123: {
					nestedBraces += 1;
					this.bump();
					break;
				}
				case 125: {
					if (nestedBraces > 0) {
						nestedBraces -= 1;
					} else {
						return {
							val: this.message.slice(startPosition.offset, this.offset()),
							err: null
						};
					}
					break;
				}
				default:
					this.bump();
					break;
			}
		}
		return {
			val: this.message.slice(startPosition.offset, this.offset()),
			err: null
		};
	}
	parseNumberSkeletonFromString(skeleton, location) {
		let tokens = [];
		try {
			tokens = parseNumberSkeletonFromString(skeleton);
		} catch {
			return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
		}
		return {
			val: {
				type: SKELETON_TYPE.number,
				tokens,
				location,
				parsedOptions: this.shouldParseSkeletons ? parseNumberSkeleton(tokens) : {}
			},
			err: null
		};
	}
	/**
	* @param nesting_level The current nesting level of messages.
	*     This can be positive when parsing message fragment in select or plural argument options.
	* @param parent_arg_type The parent argument's type.
	* @param parsed_first_identifier If provided, this is the first identifier-like selector of
	*     the argument. It is a by-product of a previous parsing attempt.
	* @param expecting_close_tag If true, this message is directly or indirectly nested inside
	*     between a pair of opening and closing tags. The nested message will not parse beyond
	*     the closing tag boundary.
	*/
	tryParsePluralOrSelectOptions(nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
		let hasOtherClause = false;
		const options = [];
		const parsedSelectors = new Set();
		let { value: selector, location: selectorLocation } = parsedFirstIdentifier;
		// Parse:
		// one {one apple}
		// ^--^
		while (true) {
			if (selector.length === 0) {
				const startPosition = this.clonePosition();
				if (parentArgType !== "select" && this.bumpIf("=")) {
					// Try parse `={number}` selector
					const result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (result.err) {
						return result;
					}
					selectorLocation = createLocation(startPosition, this.clonePosition());
					selector = this.message.slice(startPosition.offset, this.offset());
				} else {
					break;
				}
			}
			// Duplicate selector clauses
			if (parsedSelectors.has(selector)) {
				return this.error(parentArgType === "select" ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
			}
			if (selector === "other") {
				hasOtherClause = true;
			}
			// Parse:
			// one {one apple}
			//     ^----------^
			this.bumpSpace();
			const openingBracePosition = this.clonePosition();
			if (!this.bumpIf("{")) {
				return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
			}
			const fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
			if (fragmentResult.err) {
				return fragmentResult;
			}
			const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
			if (argCloseResult.err) {
				return argCloseResult;
			}
			options.push([selector, {
				value: fragmentResult.val,
				location: createLocation(openingBracePosition, this.clonePosition())
			}]);
			// Keep track of the existing selectors
			parsedSelectors.add(selector);
			// Prep next selector clause.
			this.bumpSpace();
			({value: selector, location: selectorLocation} = this.parseIdentifierIfPossible());
		}
		if (options.length === 0) {
			return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
		}
		if (this.requiresOtherClause && !hasOtherClause) {
			return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
		}
		return {
			val: options,
			err: null
		};
	}
	tryParseDecimalInteger(expectNumberError, invalidNumberError) {
		let sign = 1;
		const startingPosition = this.clonePosition();
		if (this.bumpIf("+")) {} else if (this.bumpIf("-")) {
			sign = -1;
		}
		let hasDigits = false;
		let decimal = 0;
		while (!this.isEOF()) {
			const ch = this.char();
			if (ch >= 48 && ch <= 57) {
				hasDigits = true;
				decimal = decimal * 10 + (ch - 48);
				this.bump();
			} else {
				break;
			}
		}
		const location = createLocation(startingPosition, this.clonePosition());
		if (!hasDigits) {
			return this.error(expectNumberError, location);
		}
		decimal *= sign;
		if (!Number.isSafeInteger(decimal)) {
			return this.error(invalidNumberError, location);
		}
		return {
			val: decimal,
			err: null
		};
	}
	offset() {
		return this.position.offset;
	}
	isEOF() {
		return this.offset() === this.message.length;
	}
	clonePosition() {
		// This is much faster than `Object.assign` or spread.
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	}
	/**
	* Return the code point at the current position of the parser.
	* Throws if the index is out of bound.
	*/
	char() {
		const offset = this.position.offset;
		if (offset >= this.message.length) {
			throw Error("out of bound");
		}
		const code = this.message.codePointAt(offset);
		if (code === undefined) {
			throw Error(`Offset ${offset} is at invalid UTF-16 code unit boundary`);
		}
		return code;
	}
	error(kind, location) {
		return {
			val: null,
			err: {
				kind,
				message: this.message,
				location
			}
		};
	}
	/** Bump the parser to the next UTF-16 code unit. */
	bump() {
		if (this.isEOF()) {
			return;
		}
		const code = this.char();
		if (code === 10) {
			this.position.line += 1;
			this.position.column = 1;
			this.position.offset += 1;
		} else {
			this.position.column += 1;
			// 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
			this.position.offset += code < 65536 ? 1 : 2;
		}
	}
	/**
	* If the substring starting at the current position of the parser has
	* the given prefix, then bump the parser to the character immediately
	* following the prefix and return true. Otherwise, don't bump the parser
	* and return false.
	*/
	bumpIf(prefix) {
		if (this.message.startsWith(prefix, this.offset())) {
			for (let i = 0; i < prefix.length; i++) {
				this.bump();
			}
			return true;
		}
		return false;
	}
	/**
	* Bump the parser until the pattern character is found and return `true`.
	* Otherwise bump to the end of the file and return `false`.
	*/
	bumpUntil(pattern) {
		const currentOffset = this.offset();
		const index = this.message.indexOf(pattern, currentOffset);
		if (index >= 0) {
			this.bumpTo(index);
			return true;
		} else {
			this.bumpTo(this.message.length);
			return false;
		}
	}
	/**
	* Bump the parser to the target offset.
	* If target offset is beyond the end of the input, bump the parser to the end of the input.
	*/
	bumpTo(targetOffset) {
		if (this.offset() > targetOffset) {
			throw Error(`targetOffset ${targetOffset} must be greater than or equal to the current offset ${this.offset()}`);
		}
		targetOffset = Math.min(targetOffset, this.message.length);
		while (true) {
			const offset = this.offset();
			if (offset === targetOffset) {
				break;
			}
			if (offset > targetOffset) {
				throw Error(`targetOffset ${targetOffset} is at invalid UTF-16 code unit boundary`);
			}
			this.bump();
			if (this.isEOF()) {
				break;
			}
		}
	}
	/** advance the parser through all whitespace to the next non-whitespace code unit. */
	bumpSpace() {
		while (!this.isEOF() && _isWhiteSpace(this.char())) {
			this.bump();
		}
	}
	/**
	* Peek at the *next* Unicode codepoint in the input without advancing the parser.
	* If the input has been exhausted, then this returns null.
	*/
	peek() {
		if (this.isEOF()) {
			return null;
		}
		const code = this.char();
		const offset = this.offset();
		const nextCode = this.message.charCodeAt(offset + (code >= 65536 ? 2 : 1));
		return nextCode ?? null;
	}
}
/**
* This check if codepoint is alphabet (lower & uppercase)
* @param codepoint
* @returns
*/
function _isAlpha(codepoint) {
	return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
}
function _isAlphaOrSlash(codepoint) {
	return _isAlpha(codepoint) || codepoint === 47;
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
	return c === 45 || c === 46 || c >= 48 && c <= 57 || c === 95 || c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 183 || c >= 192 && c <= 214 || c >= 216 && c <= 246 || c >= 248 && c <= 893 || c >= 895 && c <= 8191 || c >= 8204 && c <= 8205 || c >= 8255 && c <= 8256 || c >= 8304 && c <= 8591 || c >= 11264 && c <= 12271 || c >= 12289 && c <= 55295 || c >= 63744 && c <= 64975 || c >= 65008 && c <= 65533 || c >= 65536 && c <= 983039;
}
/**
* Code point equivalent of regex `\p{White_Space}`.
* From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
*/
function _isWhiteSpace(c) {
	return c >= 9 && c <= 13 || c === 32 || c === 133 || c >= 8206 && c <= 8207 || c === 8232 || c === 8233;
}

;// ./node_modules/@formatjs/icu-messageformat-parser/manipulator.js

function cloneDeep(obj) {
	if (Array.isArray(obj)) {
		// @ts-expect-error meh
		return obj.map(cloneDeep);
	}
	if (obj !== null && typeof obj === "object") {
		// @ts-expect-error meh
		return Object.keys(obj).reduce((cloned, k) => {
			// @ts-expect-error meh
			cloned[k] = cloneDeep(obj[k]);
			return cloned;
		}, {});
	}
	return obj;
}
/**
* Replace pound elements with number elements referencing the given variable.
* This is needed when nesting plurals - the # in the outer plural should become
* an explicit variable reference when nested inside another plural.
* GH #4202
*/
function replacePoundWithArgument(ast, variableName) {
	return ast.map((el) => {
		if (isPoundElement(el)) {
			// Replace # with {variableName, number}
			return {
				type: TYPE.number,
				value: variableName,
				style: null,
				location: el.location
			};
		}
		if (isPluralElement(el) || isSelectElement(el)) {
			// Recursively process options
			const newOptions = {};
			for (const key of Object.keys(el.options)) {
				newOptions[key] = { value: replacePoundWithArgument(el.options[key].value, variableName) };
			}
			return {
				...el,
				options: newOptions
			};
		}
		if (isTagElement(el)) {
			return {
				...el,
				children: replacePoundWithArgument(el.children, variableName)
			};
		}
		return el;
	});
}
function hoistPluralOrSelectElement(ast, el, positionToInject) {
	// pull this out of the ast and move it to the top
	const cloned = cloneDeep(el);
	const { options } = cloned;
	// GH #4202: Check if there are other plural/select elements after this one
	const afterElements = ast.slice(positionToInject + 1);
	const hasSubsequentPluralOrSelect = afterElements.some(isPluralOrSelectElement);
	cloned.options = Object.keys(options).reduce((all, k) => {
		let optionValue = options[k].value;
		// GH #4202: If there are subsequent plurals/selects and this is a plural,
		// replace # with explicit variable reference to avoid ambiguity
		if (hasSubsequentPluralOrSelect && isPluralElement(el)) {
			optionValue = replacePoundWithArgument(optionValue, el.value);
		}
		const newValue = hoistSelectors([
			...ast.slice(0, positionToInject),
			...optionValue,
			...afterElements
		]);
		all[k] = { value: newValue };
		return all;
	}, {});
	return cloned;
}
function isPluralOrSelectElement(el) {
	return isPluralElement(el) || isSelectElement(el);
}
function findPluralOrSelectElement(ast) {
	return !!ast.find((el) => {
		if (isPluralOrSelectElement(el)) {
			return true;
		}
		if (isTagElement(el)) {
			return findPluralOrSelectElement(el.children);
		}
		return false;
	});
}
/**
* Hoist all selectors to the beginning of the AST & flatten the
* resulting options. E.g:
* "I have {count, plural, one{a dog} other{many dogs}}"
* becomes "{count, plural, one{I have a dog} other{I have many dogs}}".
* If there are multiple selectors, the order of which one is hoisted 1st
* is non-deterministic.
* The goal is to provide as many full sentences as possible since fragmented
* sentences are not translator-friendly
* @param ast AST
*/
function hoistSelectors(ast) {
	for (let i = 0; i < ast.length; i++) {
		const el = ast[i];
		if (isPluralOrSelectElement(el)) {
			return [hoistPluralOrSelectElement(ast, el, i)];
		}
		if (isTagElement(el) && findPluralOrSelectElement([el])) {
			throw new Error("Cannot hoist plural/select within a tag element. Please put the tag element inside each plural/select option");
		}
	}
	return ast;
}
/**
* Collect all variables in an AST to Record<string, TYPE>
* @param ast AST to collect variables from
* @param vars Record of variable name to variable type
*/
function collectVariables(ast, vars = new Map()) {
	ast.forEach((el) => {
		if (isArgumentElement(el) || isDateElement(el) || isTimeElement(el) || isNumberElement(el)) {
			if (el.value in vars && vars.get(el.value) !== el.type) {
				throw new Error(`Variable ${el.value} has conflicting types`);
			}
			vars.set(el.value, el.type);
		}
		if (isPluralElement(el) || isSelectElement(el)) {
			vars.set(el.value, el.type);
			Object.keys(el.options).forEach((k) => {
				collectVariables(el.options[k].value, vars);
			});
		}
		if (isTagElement(el)) {
			vars.set(el.value, el.type);
			collectVariables(el.children, vars);
		}
	});
}
/**
* Check if 2 ASTs are structurally the same. This primarily means that
* they have the same variables with the same type
* @param a
* @param b
* @returns
*/
function isStructurallySame(a, b) {
	const aVars = new Map();
	const bVars = new Map();
	collectVariables(a, aVars);
	collectVariables(b, bVars);
	if (aVars.size !== bVars.size) {
		return {
			success: false,
			error: new Error(`Different number of variables: [${Array.from(aVars.keys()).join(", ")}] vs [${Array.from(bVars.keys()).join(", ")}]`)
		};
	}
	return Array.from(aVars.entries()).reduce((result, [key, type]) => {
		if (!result.success) {
			return result;
		}
		const bType = bVars.get(key);
		if (bType == null) {
			return {
				success: false,
				error: new Error(`Missing variable ${key} in message`)
			};
		}
		if (bType !== type) {
			return {
				success: false,
				error: new Error(`Variable ${key} has conflicting types: ${TYPE[type]} vs ${TYPE[bType]}`)
			};
		}
		return result;
	}, { success: true });
}

;// ./node_modules/@formatjs/icu-messageformat-parser/index.js



function pruneLocation(els) {
	els.forEach((el) => {
		delete el.location;
		if (types_isSelectElement(el) || types_isPluralElement(el)) {
			for (const k in el.options) {
				delete el.options[k].location;
				pruneLocation(el.options[k].value);
			}
		} else if (types_isNumberElement(el) && isNumberSkeleton(el.style)) {
			delete el.style.location;
		} else if ((types_isDateElement(el) || types_isTimeElement(el)) && isDateTimeSkeleton(el.style)) {
			delete el.style.location;
		} else if (types_isTagElement(el)) {
			pruneLocation(el.children);
		}
	});
}
function parse(message, opts = {}) {
	opts = {
		shouldParseSkeletons: true,
		requiresOtherClause: true,
		...opts
	};
	const result = new parser_Parser(message, opts).parse();
	if (result.err) {
		const error = SyntaxError(ErrorKind[result.err.kind]);
		// @ts-expect-error Assign to error object
		error.location = result.err.location;
		// @ts-expect-error Assign to error object
		error.originalMessage = result.err.message;
		throw error;
	}
	if (!opts?.captureLocation) {
		pruneLocation(result.val);
	}
	return result.val;
}

// only for testing
const _Parser = (/* unused pure expression or super */ null && (Parser));


;// ./node_modules/intl-messageformat/src/error.js
let ErrorCode = /* @__PURE__ */ function(ErrorCode) {
	// When we have a placeholder but no value to format
	ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
	// When value supplied is invalid
	ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
	// When we need specific Intl API but it's not available
	ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
	return ErrorCode;
}({});
class FormatError extends Error {
	code;
	/**
	* Original message we're trying to format
	* `undefined` if we're only dealing w/ AST
	*
	* @type {(string | undefined)}
	* @memberof FormatError
	*/
	originalMessage;
	constructor(msg, code, originalMessage) {
		super(msg);
		this.code = code;
		this.originalMessage = originalMessage;
	}
	toString() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}
}
class InvalidValueError extends FormatError {
	constructor(variableId, value, options, originalMessage) {
		super(`Invalid values for "${variableId}": "${value}". Options are "${Object.keys(options).join("\", \"")}"`, ErrorCode.INVALID_VALUE, originalMessage);
	}
}
class InvalidValueTypeError extends FormatError {
	constructor(value, type, originalMessage) {
		super(`Value for "${value}" must be of type ${type}`, ErrorCode.INVALID_VALUE, originalMessage);
	}
}
class MissingValueError extends FormatError {
	constructor(variableId, originalMessage) {
		super(`The intl string context variable "${variableId}" was not provided to the string "${originalMessage}"`, ErrorCode.MISSING_VALUE, originalMessage);
	}
}

;// ./node_modules/intl-messageformat/src/formatters.js



let PART_TYPE = /* @__PURE__ */ function(PART_TYPE) {
	PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
	PART_TYPE[PART_TYPE["object"] = 1] = "object";
	return PART_TYPE;
}({});
function mergeLiteral(parts) {
	if (parts.length < 2) {
		return parts;
	}
	return parts.reduce((all, part) => {
		const lastPart = all[all.length - 1];
		if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) {
			all.push(part);
		} else {
			lastPart.value += part.value;
		}
		return all;
	}, []);
}
function isFormatXMLElementFn(el) {
	return typeof el === "function";
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, originalMessage) {
	// Hot path for straight simple msg translations
	if (els.length === 1 && isLiteralElement(els[0])) {
		return [{
			type: PART_TYPE.literal,
			value: els[0].value
		}];
	}
	const result = [];
	for (const el of els) {
		// Exit early for string parts.
		if (isLiteralElement(el)) {
			result.push({
				type: PART_TYPE.literal,
				value: el.value
			});
			continue;
		}
		// TODO: should this part be literal type?
		// Replace `#` in plural rules with the actual numeric value.
		if (types_isPoundElement(el)) {
			if (typeof currentPluralValue === "number") {
				result.push({
					type: PART_TYPE.literal,
					value: formatters.getNumberFormat(locales).format(currentPluralValue)
				});
			}
			continue;
		}
		const { value: varName } = el;
		// Enforce that all required values are provided by the caller.
		if (!(values && varName in values)) {
			throw new MissingValueError(varName, originalMessage);
		}
		let value = values[varName];
		if (types_isArgumentElement(el)) {
			if (!value || typeof value === "string" || typeof value === "number" || typeof value === "bigint") {
				value = typeof value === "string" || typeof value === "number" || typeof value === "bigint" ? String(value) : "";
			}
			result.push({
				type: typeof value === "string" ? PART_TYPE.literal : PART_TYPE.object,
				value
			});
			continue;
		}
		// Recursively format plural and select parts' option — which can be a
		// nested pattern structure. The choosing of the option to use is
		// abstracted-by and delegated-to the part helper object.
		if (types_isDateElement(el)) {
			const style = typeof el.style === "string" ? formats.date[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : undefined;
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getDateTimeFormat(locales, style).format(value)
			});
			continue;
		}
		if (types_isTimeElement(el)) {
			const style = typeof el.style === "string" ? formats.time[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : formats.time.medium;
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getDateTimeFormat(locales, style).format(value)
			});
			continue;
		}
		if (types_isNumberElement(el)) {
			const style = typeof el.style === "string" ? formats.number[el.style] : isNumberSkeleton(el.style) ? el.style.parsedOptions : undefined;
			if (style && style.scale) {
				const scale = style.scale || 1;
				// Handle bigint scale multiplication
				// BigInt can only be multiplied by BigInt
				if (typeof value === "bigint") {
					// Check if scale is a safe integer that can be converted to BigInt
					if (!Number.isInteger(scale)) {
						throw new TypeError(`Cannot apply fractional scale ${scale} to bigint value. Scale must be an integer when formatting bigint.`);
					}
					value = value * BigInt(scale);
				} else {
					value = value * scale;
				}
			}
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getNumberFormat(locales, style).format(value)
			});
			continue;
		}
		if (types_isTagElement(el)) {
			const { children, value } = el;
			const formatFn = values[value];
			if (!isFormatXMLElementFn(formatFn)) {
				throw new InvalidValueTypeError(value, "function", originalMessage);
			}
			const parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
			let chunks = formatFn(parts.map((p) => p.value));
			if (!Array.isArray(chunks)) {
				chunks = [chunks];
			}
			result.push(...chunks.map((c) => {
				return {
					type: typeof c === "string" ? PART_TYPE.literal : PART_TYPE.object,
					value: c
				};
			}));
		}
		if (types_isSelectElement(el)) {
			// GH #4490: Use hasOwnProperty to avoid prototype chain issues with keys like "constructor"
			const key = value;
			const opt = (Object.prototype.hasOwnProperty.call(el.options, key) ? el.options[key] : undefined) || el.options.other;
			if (!opt) {
				throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
			}
			result.push(...formatToParts(opt.value, locales, formatters, formats, values));
			continue;
		}
		if (types_isPluralElement(el)) {
			// GH #4490: Use hasOwnProperty to avoid prototype chain issues
			const exactKey = `=${value}`;
			let opt = Object.prototype.hasOwnProperty.call(el.options, exactKey) ? el.options[exactKey] : undefined;
			if (!opt) {
				if (!Intl.PluralRules) {
					throw new FormatError(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ErrorCode.MISSING_INTL_API, originalMessage);
				}
				// Convert bigint to number for PluralRules (which only accepts number)
				const numericValue = typeof value === "bigint" ? Number(value) : value;
				const rule = formatters.getPluralRules(locales, { type: el.pluralType }).select(numericValue - (el.offset || 0));
				opt = (Object.prototype.hasOwnProperty.call(el.options, rule) ? el.options[rule] : undefined) || el.options.other;
			}
			if (!opt) {
				throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
			}
			// Convert bigint to number for currentPluralValue
			const numericValue = typeof value === "bigint" ? Number(value) : value;
			result.push(...formatToParts(opt.value, locales, formatters, formats, values, numericValue - (el.offset || 0)));
			continue;
		}
	}
	return mergeLiteral(result);
}

;// ./node_modules/intl-messageformat/src/core.js
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/



// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
	if (!c2) {
		return c1;
	}
	return {
		...c1,
		...c2,
		...Object.keys(c1).reduce((all, k) => {
			all[k] = {
				...c1[k],
				...c2[k]
			};
			return all;
		}, {})
	};
}
function mergeConfigs(defaultConfig, configs) {
	if (!configs) {
		return defaultConfig;
	}
	return Object.keys(defaultConfig).reduce((all, k) => {
		all[k] = mergeConfig(defaultConfig[k], configs[k]);
		return all;
	}, { ...defaultConfig });
}
function createFastMemoizeCache(store) {
	return { create() {
		return {
			get(key) {
				return store[key];
			},
			set(key, value) {
				store[key] = value;
			}
		};
	} };
}
function createDefaultFormatters(cache = {
	number: {},
	dateTime: {},
	pluralRules: {}
}) {
	return {
		getNumberFormat: memoize((...args) => new Intl.NumberFormat(...args), {
			cache: createFastMemoizeCache(cache.number),
			strategy: strategies.variadic
		}),
		getDateTimeFormat: memoize((...args) => new Intl.DateTimeFormat(...args), {
			cache: createFastMemoizeCache(cache.dateTime),
			strategy: strategies.variadic
		}),
		getPluralRules: memoize((...args) => new Intl.PluralRules(...args), {
			cache: createFastMemoizeCache(cache.pluralRules),
			strategy: strategies.variadic
		})
	};
}
class IntlMessageFormat {
	ast;
	locales;
	resolvedLocale;
	formatters;
	formats;
	message;
	formatterCache = {
		number: {},
		dateTime: {},
		pluralRules: {}
	};
	constructor(message, locales = IntlMessageFormat.defaultLocale, overrideFormats, opts) {
		// Defined first because it's used to build the format pattern.
		this.locales = locales;
		this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
		if (typeof message === "string") {
			this.message = message;
			if (!IntlMessageFormat.__parse) {
				throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			}
			const { ...parseOpts } = opts || {};
			// Parse string messages into an AST.
			this.ast = IntlMessageFormat.__parse(message, {
				...parseOpts,
				locale: this.resolvedLocale
			});
		} else {
			this.ast = message;
		}
		if (!Array.isArray(this.ast)) {
			throw new TypeError("A message must be provided as a String or AST.");
		}
		// Creates a new object with the specified `formats` merged with the default
		// formats.
		this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
		this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
	}
	format = (values) => {
		const parts = this.formatToParts(values);
		// Hot path for straight simple msg translations
		if (parts.length === 1) {
			return parts[0].value;
		}
		const result = parts.reduce((all, part) => {
			if (!all.length || part.type !== PART_TYPE.literal || typeof all[all.length - 1] !== "string") {
				all.push(part.value);
			} else {
				all[all.length - 1] += part.value;
			}
			return all;
		}, []);
		if (result.length <= 1) {
			return result[0] || "";
		}
		return result;
	};
	formatToParts = (values) => formatToParts(this.ast, this.locales, this.formatters, this.formats, values, undefined, this.message);
	resolvedOptions = () => ({ locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0] });
	getAst = () => this.ast;
	static memoizedDefaultLocale = null;
	static get defaultLocale() {
		if (!IntlMessageFormat.memoizedDefaultLocale) {
			IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
		}
		return IntlMessageFormat.memoizedDefaultLocale;
	}
	static resolveLocale = (locales) => {
		if (typeof Intl.Locale === "undefined") {
			return;
		}
		const supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
		if (supportedLocales.length > 0) {
			return new Intl.Locale(supportedLocales[0]);
		}
		return new Intl.Locale(typeof locales === "string" ? locales : locales[0]);
	};
	static __parse = parse;
	// Default format options used as the prototype of the `formats` provided to the
	// constructor. These are used when constructing the internal Intl.NumberFormat
	// and Intl.DateTimeFormat instances.
	static formats = {
		number: {
			integer: { maximumFractionDigits: 0 },
			currency: { style: "currency" },
			percent: { style: "percent" }
		},
		date: {
			short: {
				month: "numeric",
				day: "numeric",
				year: "2-digit"
			},
			medium: {
				month: "short",
				day: "numeric",
				year: "numeric"
			},
			long: {
				month: "long",
				day: "numeric",
				year: "numeric"
			},
			full: {
				weekday: "long",
				month: "long",
				day: "numeric",
				year: "numeric"
			}
		},
		time: {
			short: {
				hour: "numeric",
				minute: "numeric"
			},
			medium: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric"
			},
			long: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "short"
			},
			full: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "short"
			}
		}
	};
}

;// ./node_modules/use-intl/dist/esm/production/format-message/index.js
function m(...[m,s,i,n]){if(Array.isArray(s))throw new formatters_CJcico0N_a(formatters_CJcico0N_r.INVALID_MESSAGE,void 0);if("object"==typeof s)throw new formatters_CJcico0N_a(formatters_CJcico0N_r.INSUFFICIENT_PATH,void 0);if("string"==typeof s){const t=function(t,e){return e||/'[{}]/.test(t)?void 0:t}(s,i);if(t)return t}const{cache:f,formats:c,formatters:g,globalFormats:u,locale:d,timeZone:A}=n;let p;g.getMessageFormat||(g.getMessageFormat=function(e,r){return formatters_CJcico0N_i(((...e)=>new IntlMessageFormat(e[0],e[1],e[2],{formatters:r,...e[3]})),e.message)}(f,g));try{p=g.getMessageFormat(s,d,function(e,r,o){const a=IntlMessageFormat.formats.date,m=IntlMessageFormat.formats.time,s={...e?.dateTime,...r?.dateTime},i={date:{...a,...s},time:{...m,...s},number:{...e?.number,...r?.number}};return o&&["date","time"].forEach((t=>{const e=i[t];for(const[t,r]of Object.entries(e))e[t]={timeZone:o,...r}})),i}(u,c,A),{formatters:{...g,getDateTimeFormat:(t,e)=>g.getDateTimeFormat(t,{...e,timeZone:e?.timeZone??A})}})}catch(t){throw new formatters_CJcico0N_a(formatters_CJcico0N_r.INVALID_MESSAGE,void 0)}const w=p.format(i);return (0,react.isValidElement)(w)||Array.isArray(w)||"string"==typeof w?w:String(w)}m.raw=!0;

;// ./node_modules/use-intl/dist/esm/production/initializeConfig-Brh10fyG.js
function c(...e){return e.filter(Boolean).join(".")}function i(e){return c(e.namespace,e.key)}function u(e){console.error(e)}function initializeConfig_Brh10fyG_m(e,t,r,n){const o=c(n,r);if(!t)throw new Error(o);let a=t;return r.split(".").forEach((t=>{const r=a[t];if(null==t||null==r)throw new Error(o+` (${e})`);a=r})),a}function f(a){const s=function(e,t,r){try{if(!t)throw new Error(void 0);const n=r?initializeConfig_Brh10fyG_m(e,t,r):t;if(!n)throw new Error(r);return n}catch(e){return new formatters_CJcico0N_a(formatters_CJcico0N_r.MISSING_MESSAGE,e.message)}}(a.locale,a.messages,a.namespace);return function({cache:a,formats:s,formatters:u,getMessageFallback:f=i,locale:l,messagesOrError:g,namespace:y,onError:h,timeZone:w}){const E=g instanceof formatters_CJcico0N_a;function S(e,t,r,o){const a=new formatters_CJcico0N_a(t,r);return h(a),o??f({error:a,key:e,namespace:y})}function d(i,d,p,M){const T=M;let R;if(E){if(!T)return h(g),f({error:g,key:i,namespace:y});R=T}else{const e=g;try{R=initializeConfig_Brh10fyG_m(l,e,i,y)}catch(e){if(!T)return S(i,formatters_CJcico0N_r.MISSING_MESSAGE,e.message,T);R=T}}try{const n=c(y,i);return m(n,R,d?function(r){const n={};return Object.keys(r).forEach((o=>{let a=0;const s=r[o];let c;c="function"==typeof s?r=>{const n=s(r);return (0,react.isValidElement)(n)?(0,react.cloneElement)(n,{key:o+a++}):n}:s,n[o]=c})),n}(d):d,{cache:a,formatters:u,globalFormats:s,formats:p,locale:l,timeZone:w})}catch(e){let t,r;return e instanceof formatters_CJcico0N_a?(t=e.code,r=e.originalMessage):(t=formatters_CJcico0N_r.FORMATTING_ERROR,r=e.message),S(i,t,r,T)}}function p(e,t,r,n){const a=d(e,t,r,n);return"string"!=typeof a?S(e,formatters_CJcico0N_r.INVALID_MESSAGE,void 0):a}return p.rich=d,p.markup=(e,t,r,n)=>d(e,t,r,n),p.raw=e=>{if(E)return h(g),f({error:g,key:e,namespace:y});const t=g;try{return initializeConfig_Brh10fyG_m(l,t,e,y)}catch(t){return S(e,formatters_CJcico0N_r.MISSING_MESSAGE,t.message)}},p.has=e=>{if(E)return!1;try{return initializeConfig_Brh10fyG_m(l,g,e,y),!0}catch{return!1}},p}({...a,messagesOrError:s})}function initializeConfig_Brh10fyG_l(e,t){return e===t?void 0:e.slice((t+".").length)}const g=3600,y=86400,h=7*y,w=2628e3,E=7884e3,S=365*y,d={second:1,seconds:1,minute:60,minutes:60,hour:g,hours:g,day:y,days:y,week:h,weeks:h,month:w,months:w,quarter:E,quarters:E,year:S,years:S};function p(e){const{_cache:t=s(),_formatters:r=formatters_CJcico0N_l(t),formats:c,locale:i,onError:m=u,timeZone:f}=e;function l(e){return e?.timeZone||(f?e={...e,timeZone:f}:m(new formatters_CJcico0N_a(formatters_CJcico0N_r.ENVIRONMENT_FALLBACK,void 0))),e}function E(e,t,r,a,s){let c;try{c=function(e,t,r){let a;if("string"==typeof t){const r=t;if(a=e?.[r],!a){const e=new formatters_CJcico0N_a(formatters_CJcico0N_r.MISSING_FORMAT,void 0);throw m(e),e}}else a=t;return r&&(a={...a,...r}),a}(r,e,t)}catch{return s()}try{return a(c)}catch(e){return m(new formatters_CJcico0N_a(formatters_CJcico0N_r.FORMATTING_ERROR,e.message)),s()}}function p(e,t,n){return E(t,n,c?.dateTime,(t=>(t=l(t),r.getDateTimeFormat(i,t).format(e))),(()=>String(e)))}function M(){return e.now?e.now:(m(new formatters_CJcico0N_a(formatters_CJcico0N_r.ENVIRONMENT_FALLBACK,void 0)),new Date)}return{dateTime:p,number:function(e,t,n){return E(t,n,c?.number,(t=>r.getNumberFormat(i,t).format(e)),(()=>String(e)))},relativeTime:function(e,t){try{let n,o;const a={};t instanceof Date||"number"==typeof t?n=new Date(t):t&&(n=null!=t.now?new Date(t.now):M(),o=t.unit,a.style=t.style,a.numberingSystem=t.numberingSystem),n||(n=M());const s=(new Date(e).getTime()-n.getTime())/1e3;o||(o=function(e){const t=Math.abs(e);return t<60?"second":t<g?"minute":t<y?"hour":t<h?"day":t<w?"week":t<S?"month":"year"}(s)),a.numeric="second"===o?"auto":"always";const c=function(e,t){return Math.round(e/d[t])}(s,o);return r.getRelativeTimeFormat(i,a).format(c,o)}catch(t){return m(new formatters_CJcico0N_a(formatters_CJcico0N_r.FORMATTING_ERROR,t.message)),String(e)}},list:function(e,t,n){const o=[],a=new Map;let s=0;for(const t of e){let e;"object"==typeof t?(e=String(s),a.set(e,t)):e=String(t),o.push(e),s++}return E(t,n,c?.list,(e=>{const t=r.getListFormat(i,e).formatToParts(o).map((e=>"literal"===e.type?e.value:a.get(e.value)||e.value));return a.size>0?t:t.join("")}),(()=>String(e)))},dateTimeRange:function(e,t,n,o){return E(n,o,c?.dateTime,(n=>(n=l(n),r.getDateTimeFormat(i,n).formatRange(e,t))),(()=>[p(e),p(t)].join(" – ")))}}}function M({formats:e,getMessageFallback:t,messages:r,onError:n,...o}){return{...o,formats:e||void 0,messages:r||void 0,onError:n||u,getMessageFallback:t||i}}

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
;// ./node_modules/use-intl/dist/esm/production/react.js
const react_d=(0,react.createContext)(void 0);function v({children:e,formats:o,getMessageFallback:n,locale:c,messages:i,now:f,onError:u,timeZone:l}){const v=(0,react.useContext)(react_d),w=(0,react.useMemo)((()=>v?.cache||s()),[c,v?.cache]),p=(0,react.useMemo)((()=>v?.formatters||formatters_CJcico0N_l(w)),[w,v?.formatters]),h=(0,react.useMemo)((()=>({...M({locale:c,formats:void 0===o?v?.formats:o,getMessageFallback:n||v?.getMessageFallback,messages:void 0===i?v?.messages:i,now:f||v?.now,onError:u||v?.onError,timeZone:l||v?.timeZone}),formatters:p,cache:w})),[w,o,p,n,c,i,f,u,v,l]);return (0,jsx_runtime.jsx)(react_d.Provider,{value:h,children:e})}function react_w(){const e=(0,react.useContext)(react_d);if(!e)throw new Error(void 0);return e}let react_p=!1;const react_h="undefined"==typeof window;function react_E(e){return function(e,r,o){const{cache:n,formats:a,formatters:s,getMessageFallback:m,locale:l,onError:g,timeZone:d}=react_w(),v=e[o],E=initializeConfig_Brh10fyG_l(r,o);return d||react_p||!react_h||(react_p=!0,g(new formatters_CJcico0N_a(formatters_CJcico0N_r.ENVIRONMENT_FALLBACK,void 0))),(0,react.useMemo)((()=>f({cache:n,formatters:s,getMessageFallback:m,messages:v,namespace:E,onError:g,formats:a,locale:l,timeZone:d})),[n,s,m,v,E,g,a,l,d])}({"!":react_w().messages},e?`!.${e}`:"!","!")}function Z(){return react_w().locale}function k(){return new Date}function b(e){const r=e?.updateInterval,{now:t}=react_w(),[a,s]=o(t||k());return n((()=>{if(!r)return;const e=setInterval((()=>{s(k())}),r);return()=>{clearInterval(e)}}),[t,r]),null==r&&t?t:a}function F(){return react_w().timeZone}function react_M(){const e=react_w();if(!e.messages)throw new Error(void 0);return e.messages}function react_I(){const{formats:e,formatters:r,locale:o,now:n,onError:a,timeZone:s}=react_w();return (0,react.useMemo)((()=>p({formats:e,locale:o,now:n,onError:a,timeZone:s,_formatters:r})),[e,r,n,o,a,s])}function j(e,...r){let t,o;return"string"==typeof e?(t=r[0],o=r[1]):(t=e.values,o=e.formats),[void 0,t,o,void 0]}function x(e){const r=react_E(e);function t(...e){return r(...j(...e))}return t.rich=(...e)=>r.rich(...j(...e)),t.markup=(...e)=>r.markup(...j(...e)),t.has=function(e){return!0},t}


/***/ }),

/***/ 34152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Pause)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Pause = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Pause", [
    [
        "rect",
        {
            x: "14",
            y: "4",
            width: "4",
            height: "16",
            rx: "1",
            key: "zuxfzm"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "4",
            width: "4",
            height: "16",
            rx: "1",
            key: "1okwgv"
        }
    ]
]);
 //# sourceMappingURL=pause.js.map


/***/ }),

/***/ 34279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
        return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}


/***/ }),

/***/ 35733:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  /* unused reexport */ __webpack_require__(53807);
} else {}


/***/ }),

/***/ 36095:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _findclosestquality = __webpack_require__(18857);
const _deploymentid = __webpack_require__(53887);
function defaultLoader({ config, src, width, quality }) {
    if (false) {}
    // Extract dpl parameter early so validation uses the clean URL.
    // If a immutable asset token should be used, it was already added as a query parameter and will
    // be extracted and reused here.
    let deploymentId = (0, _deploymentid.getDeploymentId)();
    if (src.startsWith('/') && !src.startsWith('//')) {
        // We unfortunately can't easily use `new URL()` here, because it normalizes the URL which causes
        // double-encoding with the `encodeURIComponent(src)` below
        const qIndex = src.indexOf('?');
        if (qIndex !== -1) {
            const params = new URLSearchParams(src.slice(qIndex + 1));
            const srcDpl = params.get('dpl');
            if (srcDpl) {
                deploymentId = srcDpl;
                params.delete('dpl');
                const remaining = params.toString();
                src = src.slice(0, qIndex) + (remaining ? '?' + remaining : '');
            }
        }
    }
    if (src.startsWith('/') && src.includes('?') && config.localPatterns?.length === 1 && config.localPatterns[0].pathname === '**' && config.localPatterns[0].search === '') {
        throw Object.defineProperty(new Error(`Image with src "${src}" is using a query string which is not configured in images.localPatterns.` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: false,
            configurable: true
        });
    }
    if (false) {}
    const q = (0, _findclosestquality.findClosestQuality)(quality, config);
    return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${q}${src.startsWith('/') && deploymentId ? `&dpl=${deploymentId}` : ''}`;
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 38194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const List = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("List", [
    [
        "path",
        {
            d: "M3 12h.01",
            key: "nlz23k"
        }
    ],
    [
        "path",
        {
            d: "M3 18h.01",
            key: "1tta3j"
        }
    ],
    [
        "path",
        {
            d: "M3 6h.01",
            key: "1rqtza"
        }
    ],
    [
        "path",
        {
            d: "M8 12h13",
            key: "1za7za"
        }
    ],
    [
        "path",
        {
            d: "M8 18h13",
            key: "1lx6n3"
        }
    ],
    [
        "path",
        {
            d: "M8 6h13",
            key: "ik3vkj"
        }
    ]
]);
 //# sourceMappingURL=list.js.map


/***/ }),

/***/ 38437:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(73623);
const _interop_require_wildcard = __webpack_require__(66388);
const _jsxruntime = __webpack_require__(95155);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(12115));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(47650));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(46686));
const _getimgprops = __webpack_require__(95413);
const _imageconfig = __webpack_require__(55762);
const _imageconfigcontextsharedruntime = __webpack_require__(17150);
const _warnonce = __webpack_require__(47284);
const _routercontextsharedruntime = __webpack_require__(60751);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(36095));
const _usemergedref = __webpack_require__(21172);
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[32,48,64,96,128,256,384],"qualities":[75],"path":"/_next/image/","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true};
if (false) {}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img?.src;
    if (!img || img['data-loaded-src'] === src) {
        return;
    }
    img['data-loaded-src'] = src;
    const p = 'decode' in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== 'empty') {
            setBlurComplete(true);
        }
        if (onLoadRef?.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event('load');
            Object.defineProperty(event, 'target', {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef?.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, forwardedRef)=>{
    const ownRef = (0, _react.useCallback)((img)=>{
        if (!img) {
            return;
        }
        if (onError) {
            // If the image has an error before react hydrates, then the error is lost.
            // The workaround is to wait until the image is mounted which is after hydration,
            // then we set the src again to trigger the error handler (if there was an error).
            // eslint-disable-next-line no-self-assign
            img.src = img.src;
        }
        if (false) {}
        if (img.complete) {
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        }
    }, [
        src,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        onError,
        unoptimized,
        sizesInput
    ]);
    const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? 'fill' : '1',
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: ref,
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== 'empty') {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload({ isAppRouter, imgAttributes }) {
    const opts = {
        as: 'image',
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes,
            qualities,
            // During the SSR, configEnv (__NEXT_IMAGE_OPTS) does not include
            // security sensitive configs like `localPatterns`, which is needed
            // during the server render to ensure it's validated. Therefore use
            // configContext, which holds the config from the server for validation.
            localPatterns:  false ? 0 : c.localPatterns
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.preload ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 38798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Folder)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Folder = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Folder", [
    [
        "path",
        {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
            key: "1kt360"
        }
    ]
]);
 //# sourceMappingURL=folder.js.map


/***/ }),

/***/ 41585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TriangleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const TriangleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("TriangleAlert", [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4",
            key: "juzpu7"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
 //# sourceMappingURL=triangle-alert.js.map


/***/ }),

/***/ 41641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ChevronLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ChevronLeft", [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
]);
 //# sourceMappingURL=chevron-left.js.map


/***/ }),

/***/ 42129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FolderOpen)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const FolderOpen = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("FolderOpen", [
    [
        "path",
        {
            d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
            key: "usdka0"
        }
    ]
]);
 //# sourceMappingURL=folder-open.js.map


/***/ }),

/***/ 42442:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DX: () => (/* binding */ Slot),
/* harmony export */   TL: () => (/* binding */ createSlot)
/* harmony export */ });
/* unused harmony exports Root, Slottable, createSlottable */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47527);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95155);
// src/slot.tsx



var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var use = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))[" use ".trim().toString()];
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    const childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement) > 1) return react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null);
          return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
        props2.ref = forwardedRef ? (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__/* .composeRefs */ .t)(forwardedRef, childrenRef) : childrenRef;
      }
      return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, props2);
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 1 ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable2 = ({ children }) => {
    return /* @__PURE__ */ jsx(Fragment2, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
var Slottable = /* @__PURE__ */ (/* unused pure expression or super */ null && (createSlottable("Slottable")));
function isSlottable(child) {
  return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 43459:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useEmblaCarousel)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js
function isObject(subject) {
  return Object.prototype.toString.call(subject) === '[object Object]';
}
function isRecord(subject) {
  return isObject(subject) || Array.isArray(subject);
}
function canUseDOM() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
  const optionsAKeys = Object.keys(optionsA);
  const optionsBKeys = Object.keys(optionsB);
  if (optionsAKeys.length !== optionsBKeys.length) return false;
  const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));
  const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));
  if (breakpointsA !== breakpointsB) return false;
  return optionsAKeys.every(key => {
    const valueA = optionsA[key];
    const valueB = optionsB[key];
    if (typeof valueA === 'function') return `${valueA}` === `${valueB}`;
    if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
    return areOptionsEqual(valueA, valueB);
  });
}
function sortAndMapPluginToOptions(plugins) {
  return plugins.concat().sort((a, b) => a.name > b.name ? 1 : -1).map(plugin => plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
  if (pluginsA.length !== pluginsB.length) return false;
  const optionsA = sortAndMapPluginToOptions(pluginsA);
  const optionsB = sortAndMapPluginToOptions(pluginsB);
  return optionsA.every((optionA, index) => {
    const optionB = optionsB[index];
    return areOptionsEqual(optionA, optionB);
  });
}


//# sourceMappingURL=embla-carousel-reactive-utils.esm.js.map

;// ./node_modules/embla-carousel/esm/embla-carousel.esm.js
function isNumber(subject) {
  return typeof subject === 'number';
}
function isString(subject) {
  return typeof subject === 'string';
}
function isBoolean(subject) {
  return typeof subject === 'boolean';
}
function embla_carousel_esm_isObject(subject) {
  return Object.prototype.toString.call(subject) === '[object Object]';
}
function mathAbs(n) {
  return Math.abs(n);
}
function mathSign(n) {
  return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
  return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
  if (valueB === 0 || valueA === 0) return 0;
  if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
  const diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
  return mathAbs(diff / valueB);
}
function roundToTwoDecimals(num) {
  return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
  return objectKeys(array).map(Number);
}
function arrayLast(array) {
  return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
  return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
  return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
  return Array.from(Array(n), (_, i) => startAt + i);
}
function objectKeys(object) {
  return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
  return [objectA, objectB].reduce((mergedObjects, currentObject) => {
    objectKeys(currentObject).forEach(key => {
      const valueA = mergedObjects[key];
      const valueB = currentObject[key];
      const areObjects = embla_carousel_esm_isObject(valueA) && embla_carousel_esm_isObject(valueB);
      mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
    });
    return mergedObjects;
  }, {});
}
function isMouseEvent(evt, ownerWindow) {
  return typeof ownerWindow.MouseEvent !== 'undefined' && evt instanceof ownerWindow.MouseEvent;
}

function Alignment(align, viewSize) {
  const predefined = {
    start,
    center,
    end
  };
  function start() {
    return 0;
  }
  function center(n) {
    return end(n) / 2;
  }
  function end(n) {
    return viewSize - n;
  }
  function measure(n, index) {
    if (isString(align)) return predefined[align](n);
    return align(viewSize, n, index);
  }
  const self = {
    measure
  };
  return self;
}

function EventStore() {
  let listeners = [];
  function add(node, type, handler, options = {
    passive: true
  }) {
    let removeListener;
    if ('addEventListener' in node) {
      node.addEventListener(type, handler, options);
      removeListener = () => node.removeEventListener(type, handler, options);
    } else {
      const legacyMediaQueryList = node;
      legacyMediaQueryList.addListener(handler);
      removeListener = () => legacyMediaQueryList.removeListener(handler);
    }
    listeners.push(removeListener);
    return self;
  }
  function clear() {
    listeners = listeners.filter(remove => remove());
  }
  const self = {
    add,
    clear
  };
  return self;
}

function Animations(ownerDocument, ownerWindow, update, render) {
  const documentVisibleHandler = EventStore();
  const fixedTimeStep = 1000 / 60;
  let lastTimeStamp = null;
  let accumulatedTime = 0;
  let animationId = 0;
  function init() {
    documentVisibleHandler.add(ownerDocument, 'visibilitychange', () => {
      if (ownerDocument.hidden) reset();
    });
  }
  function destroy() {
    stop();
    documentVisibleHandler.clear();
  }
  function animate(timeStamp) {
    if (!animationId) return;
    if (!lastTimeStamp) {
      lastTimeStamp = timeStamp;
      update();
      update();
    }
    const timeElapsed = timeStamp - lastTimeStamp;
    lastTimeStamp = timeStamp;
    accumulatedTime += timeElapsed;
    while (accumulatedTime >= fixedTimeStep) {
      update();
      accumulatedTime -= fixedTimeStep;
    }
    const alpha = accumulatedTime / fixedTimeStep;
    render(alpha);
    if (animationId) {
      animationId = ownerWindow.requestAnimationFrame(animate);
    }
  }
  function start() {
    if (animationId) return;
    animationId = ownerWindow.requestAnimationFrame(animate);
  }
  function stop() {
    ownerWindow.cancelAnimationFrame(animationId);
    lastTimeStamp = null;
    accumulatedTime = 0;
    animationId = 0;
  }
  function reset() {
    lastTimeStamp = null;
    accumulatedTime = 0;
  }
  const self = {
    init,
    destroy,
    start,
    stop,
    update,
    render
  };
  return self;
}

function Axis(axis, contentDirection) {
  const isRightToLeft = contentDirection === 'rtl';
  const isVertical = axis === 'y';
  const scroll = isVertical ? 'y' : 'x';
  const cross = isVertical ? 'x' : 'y';
  const sign = !isVertical && isRightToLeft ? -1 : 1;
  const startEdge = getStartEdge();
  const endEdge = getEndEdge();
  function measureSize(nodeRect) {
    const {
      height,
      width
    } = nodeRect;
    return isVertical ? height : width;
  }
  function getStartEdge() {
    if (isVertical) return 'top';
    return isRightToLeft ? 'right' : 'left';
  }
  function getEndEdge() {
    if (isVertical) return 'bottom';
    return isRightToLeft ? 'left' : 'right';
  }
  function direction(n) {
    return n * sign;
  }
  const self = {
    scroll,
    cross,
    startEdge,
    endEdge,
    measureSize,
    direction
  };
  return self;
}

function Limit(min = 0, max = 0) {
  const length = mathAbs(min - max);
  function reachedMin(n) {
    return n < min;
  }
  function reachedMax(n) {
    return n > max;
  }
  function reachedAny(n) {
    return reachedMin(n) || reachedMax(n);
  }
  function constrain(n) {
    if (!reachedAny(n)) return n;
    return reachedMin(n) ? min : max;
  }
  function removeOffset(n) {
    if (!length) return n;
    return n - length * Math.ceil((n - max) / length);
  }
  const self = {
    length,
    max,
    min,
    constrain,
    reachedAny,
    reachedMax,
    reachedMin,
    removeOffset
  };
  return self;
}

function Counter(max, start, loop) {
  const {
    constrain
  } = Limit(0, max);
  const loopEnd = max + 1;
  let counter = withinLimit(start);
  function withinLimit(n) {
    return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
  }
  function get() {
    return counter;
  }
  function set(n) {
    counter = withinLimit(n);
    return self;
  }
  function add(n) {
    return clone().set(get() + n);
  }
  function clone() {
    return Counter(max, get(), loop);
  }
  const self = {
    get,
    set,
    add,
    clone
  };
  return self;
}

function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
  const {
    cross: crossAxis,
    direction
  } = axis;
  const focusNodes = ['INPUT', 'SELECT', 'TEXTAREA'];
  const nonPassiveEvent = {
    passive: false
  };
  const initEvents = EventStore();
  const dragEvents = EventStore();
  const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
  const snapForceBoost = {
    mouse: 300,
    touch: 400
  };
  const freeForceBoost = {
    mouse: 500,
    touch: 600
  };
  const baseSpeed = dragFree ? 43 : 25;
  let isMoving = false;
  let startScroll = 0;
  let startCross = 0;
  let pointerIsDown = false;
  let preventScroll = false;
  let preventClick = false;
  let isMouse = false;
  function init(emblaApi) {
    if (!watchDrag) return;
    function downIfAllowed(evt) {
      if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
    }
    const node = rootNode;
    initEvents.add(node, 'dragstart', evt => evt.preventDefault(), nonPassiveEvent).add(node, 'touchmove', () => undefined, nonPassiveEvent).add(node, 'touchend', () => undefined).add(node, 'touchstart', downIfAllowed).add(node, 'mousedown', downIfAllowed).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click, true);
  }
  function destroy() {
    initEvents.clear();
    dragEvents.clear();
  }
  function addDragEvents() {
    const node = isMouse ? ownerDocument : rootNode;
    dragEvents.add(node, 'touchmove', move, nonPassiveEvent).add(node, 'touchend', up).add(node, 'mousemove', move, nonPassiveEvent).add(node, 'mouseup', up);
  }
  function isFocusNode(node) {
    const nodeName = node.nodeName || '';
    return focusNodes.includes(nodeName);
  }
  function forceBoost() {
    const boost = dragFree ? freeForceBoost : snapForceBoost;
    const type = isMouse ? 'mouse' : 'touch';
    return boost[type];
  }
  function allowedForce(force, targetChanged) {
    const next = index.add(mathSign(force) * -1);
    const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
    if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
    if (skipSnaps && targetChanged) return baseForce * 0.5;
    return scrollTarget.byIndex(next.get(), 0).distance;
  }
  function down(evt) {
    const isMouseEvt = isMouseEvent(evt, ownerWindow);
    isMouse = isMouseEvt;
    preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
    isMoving = deltaAbs(target.get(), location.get()) >= 2;
    if (isMouseEvt && evt.button !== 0) return;
    if (isFocusNode(evt.target)) return;
    pointerIsDown = true;
    dragTracker.pointerDown(evt);
    scrollBody.useFriction(0).useDuration(0);
    target.set(location);
    addDragEvents();
    startScroll = dragTracker.readPoint(evt);
    startCross = dragTracker.readPoint(evt, crossAxis);
    eventHandler.emit('pointerDown');
  }
  function move(evt) {
    const isTouchEvt = !isMouseEvent(evt, ownerWindow);
    if (isTouchEvt && evt.touches.length >= 2) return up(evt);
    const lastScroll = dragTracker.readPoint(evt);
    const lastCross = dragTracker.readPoint(evt, crossAxis);
    const diffScroll = deltaAbs(lastScroll, startScroll);
    const diffCross = deltaAbs(lastCross, startCross);
    if (!preventScroll && !isMouse) {
      if (!evt.cancelable) return up(evt);
      preventScroll = diffScroll > diffCross;
      if (!preventScroll) return up(evt);
    }
    const diff = dragTracker.pointerMove(evt);
    if (diffScroll > dragThreshold) preventClick = true;
    scrollBody.useFriction(0.3).useDuration(0.75);
    animation.start();
    target.add(direction(diff));
    evt.preventDefault();
  }
  function up(evt) {
    const currentLocation = scrollTarget.byDistance(0, false);
    const targetChanged = currentLocation.index !== index.get();
    const rawForce = dragTracker.pointerUp(evt) * forceBoost();
    const force = allowedForce(direction(rawForce), targetChanged);
    const forceFactor = factorAbs(rawForce, force);
    const speed = baseSpeed - 10 * forceFactor;
    const friction = baseFriction + forceFactor / 50;
    preventScroll = false;
    pointerIsDown = false;
    dragEvents.clear();
    scrollBody.useDuration(speed).useFriction(friction);
    scrollTo.distance(force, !dragFree);
    isMouse = false;
    eventHandler.emit('pointerUp');
  }
  function click(evt) {
    if (preventClick) {
      evt.stopPropagation();
      evt.preventDefault();
      preventClick = false;
    }
  }
  function pointerDown() {
    return pointerIsDown;
  }
  const self = {
    init,
    destroy,
    pointerDown
  };
  return self;
}

function DragTracker(axis, ownerWindow) {
  const logInterval = 170;
  let startEvent;
  let lastEvent;
  function readTime(evt) {
    return evt.timeStamp;
  }
  function readPoint(evt, evtAxis) {
    const property = evtAxis || axis.scroll;
    const coord = `client${property === 'x' ? 'X' : 'Y'}`;
    return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
  }
  function pointerDown(evt) {
    startEvent = evt;
    lastEvent = evt;
    return readPoint(evt);
  }
  function pointerMove(evt) {
    const diff = readPoint(evt) - readPoint(lastEvent);
    const expired = readTime(evt) - readTime(startEvent) > logInterval;
    lastEvent = evt;
    if (expired) startEvent = evt;
    return diff;
  }
  function pointerUp(evt) {
    if (!startEvent || !lastEvent) return 0;
    const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
    const diffTime = readTime(evt) - readTime(startEvent);
    const expired = readTime(evt) - readTime(lastEvent) > logInterval;
    const force = diffDrag / diffTime;
    const isFlick = diffTime && !expired && mathAbs(force) > 0.1;
    return isFlick ? force : 0;
  }
  const self = {
    pointerDown,
    pointerMove,
    pointerUp,
    readPoint
  };
  return self;
}

function NodeRects() {
  function measure(node) {
    const {
      offsetTop,
      offsetLeft,
      offsetWidth,
      offsetHeight
    } = node;
    const offset = {
      top: offsetTop,
      right: offsetLeft + offsetWidth,
      bottom: offsetTop + offsetHeight,
      left: offsetLeft,
      width: offsetWidth,
      height: offsetHeight
    };
    return offset;
  }
  const self = {
    measure
  };
  return self;
}

function PercentOfView(viewSize) {
  function measure(n) {
    return viewSize * (n / 100);
  }
  const self = {
    measure
  };
  return self;
}

function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
  const observeNodes = [container].concat(slides);
  let resizeObserver;
  let containerSize;
  let slideSizes = [];
  let destroyed = false;
  function readSize(node) {
    return axis.measureSize(nodeRects.measure(node));
  }
  function init(emblaApi) {
    if (!watchResize) return;
    containerSize = readSize(container);
    slideSizes = slides.map(readSize);
    function defaultCallback(entries) {
      for (const entry of entries) {
        if (destroyed) return;
        const isContainer = entry.target === container;
        const slideIndex = slides.indexOf(entry.target);
        const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
        const newSize = readSize(isContainer ? container : slides[slideIndex]);
        const diffSize = mathAbs(newSize - lastSize);
        if (diffSize >= 0.5) {
          emblaApi.reInit();
          eventHandler.emit('resize');
          break;
        }
      }
    }
    resizeObserver = new ResizeObserver(entries => {
      if (isBoolean(watchResize) || watchResize(emblaApi, entries)) {
        defaultCallback(entries);
      }
    });
    ownerWindow.requestAnimationFrame(() => {
      observeNodes.forEach(node => resizeObserver.observe(node));
    });
  }
  function destroy() {
    destroyed = true;
    if (resizeObserver) resizeObserver.disconnect();
  }
  const self = {
    init,
    destroy
  };
  return self;
}

function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
  let scrollVelocity = 0;
  let scrollDirection = 0;
  let scrollDuration = baseDuration;
  let scrollFriction = baseFriction;
  let rawLocation = location.get();
  let rawLocationPrevious = 0;
  function seek() {
    const displacement = target.get() - location.get();
    const isInstant = !scrollDuration;
    let scrollDistance = 0;
    if (isInstant) {
      scrollVelocity = 0;
      previousLocation.set(target);
      location.set(target);
      scrollDistance = displacement;
    } else {
      previousLocation.set(location);
      scrollVelocity += displacement / scrollDuration;
      scrollVelocity *= scrollFriction;
      rawLocation += scrollVelocity;
      location.add(scrollVelocity);
      scrollDistance = rawLocation - rawLocationPrevious;
    }
    scrollDirection = mathSign(scrollDistance);
    rawLocationPrevious = rawLocation;
    return self;
  }
  function settled() {
    const diff = target.get() - offsetLocation.get();
    return mathAbs(diff) < 0.001;
  }
  function duration() {
    return scrollDuration;
  }
  function direction() {
    return scrollDirection;
  }
  function velocity() {
    return scrollVelocity;
  }
  function useBaseDuration() {
    return useDuration(baseDuration);
  }
  function useBaseFriction() {
    return useFriction(baseFriction);
  }
  function useDuration(n) {
    scrollDuration = n;
    return self;
  }
  function useFriction(n) {
    scrollFriction = n;
    return self;
  }
  const self = {
    direction,
    duration,
    velocity,
    seek,
    settled,
    useBaseFriction,
    useBaseDuration,
    useFriction,
    useDuration
  };
  return self;
}

function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
  const pullBackThreshold = percentOfView.measure(10);
  const edgeOffsetTolerance = percentOfView.measure(50);
  const frictionLimit = Limit(0.1, 0.99);
  let disabled = false;
  function shouldConstrain() {
    if (disabled) return false;
    if (!limit.reachedAny(target.get())) return false;
    if (!limit.reachedAny(location.get())) return false;
    return true;
  }
  function constrain(pointerDown) {
    if (!shouldConstrain()) return;
    const edge = limit.reachedMin(location.get()) ? 'min' : 'max';
    const diffToEdge = mathAbs(limit[edge] - location.get());
    const diffToTarget = target.get() - location.get();
    const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
    target.subtract(diffToTarget * friction);
    if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
      target.set(limit.constrain(target.get()));
      scrollBody.useDuration(25).useBaseFriction();
    }
  }
  function toggleActive(active) {
    disabled = !active;
  }
  const self = {
    shouldConstrain,
    constrain,
    toggleActive
  };
  return self;
}

function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
  const scrollBounds = Limit(-contentSize + viewSize, 0);
  const snapsBounded = measureBounded();
  const scrollContainLimit = findScrollContainLimit();
  const snapsContained = measureContained();
  function usePixelTolerance(bound, snap) {
    return deltaAbs(bound, snap) <= 1;
  }
  function findScrollContainLimit() {
    const startSnap = snapsBounded[0];
    const endSnap = arrayLast(snapsBounded);
    const min = snapsBounded.lastIndexOf(startSnap);
    const max = snapsBounded.indexOf(endSnap) + 1;
    return Limit(min, max);
  }
  function measureBounded() {
    return snapsAligned.map((snapAligned, index) => {
      const {
        min,
        max
      } = scrollBounds;
      const snap = scrollBounds.constrain(snapAligned);
      const isFirst = !index;
      const isLast = arrayIsLastIndex(snapsAligned, index);
      if (isFirst) return max;
      if (isLast) return min;
      if (usePixelTolerance(min, snap)) return min;
      if (usePixelTolerance(max, snap)) return max;
      return snap;
    }).map(scrollBound => parseFloat(scrollBound.toFixed(3)));
  }
  function measureContained() {
    if (contentSize <= viewSize + pixelTolerance) return [scrollBounds.max];
    if (containScroll === 'keepSnaps') return snapsBounded;
    const {
      min,
      max
    } = scrollContainLimit;
    return snapsBounded.slice(min, max);
  }
  const self = {
    snapsContained,
    scrollContainLimit
  };
  return self;
}

function ScrollLimit(contentSize, scrollSnaps, loop) {
  const max = scrollSnaps[0];
  const min = loop ? max - contentSize : arrayLast(scrollSnaps);
  const limit = Limit(min, max);
  const self = {
    limit
  };
  return self;
}

function ScrollLooper(contentSize, limit, location, vectors) {
  const jointSafety = 0.1;
  const min = limit.min + jointSafety;
  const max = limit.max + jointSafety;
  const {
    reachedMin,
    reachedMax
  } = Limit(min, max);
  function shouldLoop(direction) {
    if (direction === 1) return reachedMax(location.get());
    if (direction === -1) return reachedMin(location.get());
    return false;
  }
  function loop(direction) {
    if (!shouldLoop(direction)) return;
    const loopDistance = contentSize * (direction * -1);
    vectors.forEach(v => v.add(loopDistance));
  }
  const self = {
    loop
  };
  return self;
}

function ScrollProgress(limit) {
  const {
    max,
    length
  } = limit;
  function get(n) {
    const currentLocation = n - max;
    return length ? currentLocation / -length : 0;
  }
  const self = {
    get
  };
  return self;
}

function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
  const {
    startEdge,
    endEdge
  } = axis;
  const {
    groupSlides
  } = slidesToScroll;
  const alignments = measureSizes().map(alignment.measure);
  const snaps = measureUnaligned();
  const snapsAligned = measureAligned();
  function measureSizes() {
    return groupSlides(slideRects).map(rects => arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
  }
  function measureUnaligned() {
    return slideRects.map(rect => containerRect[startEdge] - rect[startEdge]).map(snap => -mathAbs(snap));
  }
  function measureAligned() {
    return groupSlides(snaps).map(g => g[0]).map((snap, index) => snap + alignments[index]);
  }
  const self = {
    snaps,
    snapsAligned
  };
  return self;
}

function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
  const {
    groupSlides
  } = slidesToScroll;
  const {
    min,
    max
  } = scrollContainLimit;
  const slideRegistry = createSlideRegistry();
  function createSlideRegistry() {
    const groupedSlideIndexes = groupSlides(slideIndexes);
    const doNotContain = !containSnaps || containScroll === 'keepSnaps';
    if (scrollSnaps.length === 1) return [slideIndexes];
    if (doNotContain) return groupedSlideIndexes;
    return groupedSlideIndexes.slice(min, max).map((group, index, groups) => {
      const isFirst = !index;
      const isLast = arrayIsLastIndex(groups, index);
      if (isFirst) {
        const range = arrayLast(groups[0]) + 1;
        return arrayFromNumber(range);
      }
      if (isLast) {
        const range = arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1;
        return arrayFromNumber(range, arrayLast(groups)[0]);
      }
      return group;
    });
  }
  const self = {
    slideRegistry
  };
  return self;
}

function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
  const {
    reachedAny,
    removeOffset,
    constrain
  } = limit;
  function minDistance(distances) {
    return distances.concat().sort((a, b) => mathAbs(a) - mathAbs(b))[0];
  }
  function findTargetSnap(target) {
    const distance = loop ? removeOffset(target) : constrain(target);
    const ascDiffsToSnaps = scrollSnaps.map((snap, index) => ({
      diff: shortcut(snap - distance, 0),
      index
    })).sort((d1, d2) => mathAbs(d1.diff) - mathAbs(d2.diff));
    const {
      index
    } = ascDiffsToSnaps[0];
    return {
      index,
      distance
    };
  }
  function shortcut(target, direction) {
    const targets = [target, target + contentSize, target - contentSize];
    if (!loop) return target;
    if (!direction) return minDistance(targets);
    const matchingTargets = targets.filter(t => mathSign(t) === direction);
    if (matchingTargets.length) return minDistance(matchingTargets);
    return arrayLast(targets) - contentSize;
  }
  function byIndex(index, direction) {
    const diffToSnap = scrollSnaps[index] - targetVector.get();
    const distance = shortcut(diffToSnap, direction);
    return {
      index,
      distance
    };
  }
  function byDistance(distance, snap) {
    const target = targetVector.get() + distance;
    const {
      index,
      distance: targetSnapDistance
    } = findTargetSnap(target);
    const reachedBound = !loop && reachedAny(target);
    if (!snap || reachedBound) return {
      index,
      distance
    };
    const diffToSnap = scrollSnaps[index] - targetSnapDistance;
    const snapDistance = distance + shortcut(diffToSnap, 0);
    return {
      index,
      distance: snapDistance
    };
  }
  const self = {
    byDistance,
    byIndex,
    shortcut
  };
  return self;
}

function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
  function scrollTo(target) {
    const distanceDiff = target.distance;
    const indexDiff = target.index !== indexCurrent.get();
    targetVector.add(distanceDiff);
    if (distanceDiff) {
      if (scrollBody.duration()) {
        animation.start();
      } else {
        animation.update();
        animation.render(1);
        animation.update();
      }
    }
    if (indexDiff) {
      indexPrevious.set(indexCurrent.get());
      indexCurrent.set(target.index);
      eventHandler.emit('select');
    }
  }
  function distance(n, snap) {
    const target = scrollTarget.byDistance(n, snap);
    scrollTo(target);
  }
  function index(n, direction) {
    const targetIndex = indexCurrent.clone().set(n);
    const target = scrollTarget.byIndex(targetIndex.get(), direction);
    scrollTo(target);
  }
  const self = {
    distance,
    index
  };
  return self;
}

function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
  const focusListenerOptions = {
    passive: true,
    capture: true
  };
  let lastTabPressTime = 0;
  function init(emblaApi) {
    if (!watchFocus) return;
    function defaultCallback(index) {
      const nowTime = new Date().getTime();
      const diffTime = nowTime - lastTabPressTime;
      if (diffTime > 10) return;
      eventHandler.emit('slideFocusStart');
      root.scrollLeft = 0;
      const group = slideRegistry.findIndex(group => group.includes(index));
      if (!isNumber(group)) return;
      scrollBody.useDuration(0);
      scrollTo.index(group, 0);
      eventHandler.emit('slideFocus');
    }
    eventStore.add(document, 'keydown', registerTabPress, false);
    slides.forEach((slide, slideIndex) => {
      eventStore.add(slide, 'focus', evt => {
        if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) {
          defaultCallback(slideIndex);
        }
      }, focusListenerOptions);
    });
  }
  function registerTabPress(event) {
    if (event.code === 'Tab') lastTabPressTime = new Date().getTime();
  }
  const self = {
    init
  };
  return self;
}

function Vector1D(initialValue) {
  let value = initialValue;
  function get() {
    return value;
  }
  function set(n) {
    value = normalizeInput(n);
  }
  function add(n) {
    value += normalizeInput(n);
  }
  function subtract(n) {
    value -= normalizeInput(n);
  }
  function normalizeInput(n) {
    return isNumber(n) ? n : n.get();
  }
  const self = {
    get,
    set,
    add,
    subtract
  };
  return self;
}

function Translate(axis, container) {
  const translate = axis.scroll === 'x' ? x : y;
  const containerStyle = container.style;
  let previousTarget = null;
  let disabled = false;
  function x(n) {
    return `translate3d(${n}px,0px,0px)`;
  }
  function y(n) {
    return `translate3d(0px,${n}px,0px)`;
  }
  function to(target) {
    if (disabled) return;
    const newTarget = roundToTwoDecimals(axis.direction(target));
    if (newTarget === previousTarget) return;
    containerStyle.transform = translate(newTarget);
    previousTarget = newTarget;
  }
  function toggleActive(active) {
    disabled = !active;
  }
  function clear() {
    if (disabled) return;
    containerStyle.transform = '';
    if (!container.getAttribute('style')) container.removeAttribute('style');
  }
  const self = {
    clear,
    to,
    toggleActive
  };
  return self;
}

function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
  const roundingSafety = 0.5;
  const ascItems = arrayKeys(slideSizesWithGaps);
  const descItems = arrayKeys(slideSizesWithGaps).reverse();
  const loopPoints = startPoints().concat(endPoints());
  function removeSlideSizes(indexes, from) {
    return indexes.reduce((a, i) => {
      return a - slideSizesWithGaps[i];
    }, from);
  }
  function slidesInGap(indexes, gap) {
    return indexes.reduce((a, i) => {
      const remainingGap = removeSlideSizes(a, gap);
      return remainingGap > 0 ? a.concat([i]) : a;
    }, []);
  }
  function findSlideBounds(offset) {
    return snaps.map((snap, index) => ({
      start: snap - slideSizes[index] + roundingSafety + offset,
      end: snap + viewSize - roundingSafety + offset
    }));
  }
  function findLoopPoints(indexes, offset, isEndEdge) {
    const slideBounds = findSlideBounds(offset);
    return indexes.map(index => {
      const initial = isEndEdge ? 0 : -contentSize;
      const altered = isEndEdge ? contentSize : 0;
      const boundEdge = isEndEdge ? 'end' : 'start';
      const loopPoint = slideBounds[index][boundEdge];
      return {
        index,
        loopPoint,
        slideLocation: Vector1D(-1),
        translate: Translate(axis, slides[index]),
        target: () => location.get() > loopPoint ? initial : altered
      };
    });
  }
  function startPoints() {
    const gap = scrollSnaps[0];
    const indexes = slidesInGap(descItems, gap);
    return findLoopPoints(indexes, contentSize, false);
  }
  function endPoints() {
    const gap = viewSize - scrollSnaps[0] - 1;
    const indexes = slidesInGap(ascItems, gap);
    return findLoopPoints(indexes, -contentSize, true);
  }
  function canLoop() {
    return loopPoints.every(({
      index
    }) => {
      const otherIndexes = ascItems.filter(i => i !== index);
      return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
    });
  }
  function loop() {
    loopPoints.forEach(loopPoint => {
      const {
        target,
        translate,
        slideLocation
      } = loopPoint;
      const shiftLocation = target();
      if (shiftLocation === slideLocation.get()) return;
      translate.to(shiftLocation);
      slideLocation.set(shiftLocation);
    });
  }
  function clear() {
    loopPoints.forEach(loopPoint => loopPoint.translate.clear());
  }
  const self = {
    canLoop,
    clear,
    loop,
    loopPoints
  };
  return self;
}

function SlidesHandler(container, eventHandler, watchSlides) {
  let mutationObserver;
  let destroyed = false;
  function init(emblaApi) {
    if (!watchSlides) return;
    function defaultCallback(mutations) {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          emblaApi.reInit();
          eventHandler.emit('slidesChanged');
          break;
        }
      }
    }
    mutationObserver = new MutationObserver(mutations => {
      if (destroyed) return;
      if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) {
        defaultCallback(mutations);
      }
    });
    mutationObserver.observe(container, {
      childList: true
    });
  }
  function destroy() {
    if (mutationObserver) mutationObserver.disconnect();
    destroyed = true;
  }
  const self = {
    init,
    destroy
  };
  return self;
}

function SlidesInView(container, slides, eventHandler, threshold) {
  const intersectionEntryMap = {};
  let inViewCache = null;
  let notInViewCache = null;
  let intersectionObserver;
  let destroyed = false;
  function init() {
    intersectionObserver = new IntersectionObserver(entries => {
      if (destroyed) return;
      entries.forEach(entry => {
        const index = slides.indexOf(entry.target);
        intersectionEntryMap[index] = entry;
      });
      inViewCache = null;
      notInViewCache = null;
      eventHandler.emit('slidesInView');
    }, {
      root: container.parentElement,
      threshold
    });
    slides.forEach(slide => intersectionObserver.observe(slide));
  }
  function destroy() {
    if (intersectionObserver) intersectionObserver.disconnect();
    destroyed = true;
  }
  function createInViewList(inView) {
    return objectKeys(intersectionEntryMap).reduce((list, slideIndex) => {
      const index = parseInt(slideIndex);
      const {
        isIntersecting
      } = intersectionEntryMap[index];
      const inViewMatch = inView && isIntersecting;
      const notInViewMatch = !inView && !isIntersecting;
      if (inViewMatch || notInViewMatch) list.push(index);
      return list;
    }, []);
  }
  function get(inView = true) {
    if (inView && inViewCache) return inViewCache;
    if (!inView && notInViewCache) return notInViewCache;
    const slideIndexes = createInViewList(inView);
    if (inView) inViewCache = slideIndexes;
    if (!inView) notInViewCache = slideIndexes;
    return slideIndexes;
  }
  const self = {
    init,
    destroy,
    get
  };
  return self;
}

function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
  const {
    measureSize,
    startEdge,
    endEdge
  } = axis;
  const withEdgeGap = slideRects[0] && readEdgeGap;
  const startGap = measureStartGap();
  const endGap = measureEndGap();
  const slideSizes = slideRects.map(measureSize);
  const slideSizesWithGaps = measureWithGaps();
  function measureStartGap() {
    if (!withEdgeGap) return 0;
    const slideRect = slideRects[0];
    return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
  }
  function measureEndGap() {
    if (!withEdgeGap) return 0;
    const style = ownerWindow.getComputedStyle(arrayLast(slides));
    return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
  }
  function measureWithGaps() {
    return slideRects.map((rect, index, rects) => {
      const isFirst = !index;
      const isLast = arrayIsLastIndex(rects, index);
      if (isFirst) return slideSizes[index] + startGap;
      if (isLast) return slideSizes[index] + endGap;
      return rects[index + 1][startEdge] - rect[startEdge];
    }).map(mathAbs);
  }
  const self = {
    slideSizes,
    slideSizesWithGaps,
    startGap,
    endGap
  };
  return self;
}

function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
  const {
    startEdge,
    endEdge,
    direction
  } = axis;
  const groupByNumber = isNumber(slidesToScroll);
  function byNumber(array, groupSize) {
    return arrayKeys(array).filter(i => i % groupSize === 0).map(i => array.slice(i, i + groupSize));
  }
  function bySize(array) {
    if (!array.length) return [];
    return arrayKeys(array).reduce((groups, rectB, index) => {
      const rectA = arrayLast(groups) || 0;
      const isFirst = rectA === 0;
      const isLast = rectB === arrayLastIndex(array);
      const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
      const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
      const gapA = !loop && isFirst ? direction(startGap) : 0;
      const gapB = !loop && isLast ? direction(endGap) : 0;
      const chunkSize = mathAbs(edgeB - gapB - (edgeA + gapA));
      if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
      if (isLast) groups.push(array.length);
      return groups;
    }, []).map((currentSize, index, groups) => {
      const previousSize = Math.max(groups[index - 1] || 0);
      return array.slice(previousSize, currentSize);
    });
  }
  function groupSlides(array) {
    return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
  }
  const self = {
    groupSlides
  };
  return self;
}

function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
  // Options
  const {
    align,
    axis: scrollAxis,
    direction,
    startIndex,
    loop,
    duration,
    dragFree,
    dragThreshold,
    inViewThreshold,
    slidesToScroll: groupSlides,
    skipSnaps,
    containScroll,
    watchResize,
    watchSlides,
    watchDrag,
    watchFocus
  } = options;
  // Measurements
  const pixelTolerance = 2;
  const nodeRects = NodeRects();
  const containerRect = nodeRects.measure(container);
  const slideRects = slides.map(nodeRects.measure);
  const axis = Axis(scrollAxis, direction);
  const viewSize = axis.measureSize(containerRect);
  const percentOfView = PercentOfView(viewSize);
  const alignment = Alignment(align, viewSize);
  const containSnaps = !loop && !!containScroll;
  const readEdgeGap = loop || !!containScroll;
  const {
    slideSizes,
    slideSizesWithGaps,
    startGap,
    endGap
  } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
  const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
  const {
    snaps,
    snapsAligned
  } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
  const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
  const {
    snapsContained,
    scrollContainLimit
  } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
  const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
  const {
    limit
  } = ScrollLimit(contentSize, scrollSnaps, loop);
  // Indexes
  const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
  const indexPrevious = index.clone();
  const slideIndexes = arrayKeys(slides);
  // Animation
  const update = ({
    dragHandler,
    scrollBody,
    scrollBounds,
    options: {
      loop
    }
  }) => {
    if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
    scrollBody.seek();
  };
  const render = ({
    scrollBody,
    translate,
    location,
    offsetLocation,
    previousLocation,
    scrollLooper,
    slideLooper,
    dragHandler,
    animation,
    eventHandler,
    scrollBounds,
    options: {
      loop
    }
  }, alpha) => {
    const shouldSettle = scrollBody.settled();
    const withinBounds = !scrollBounds.shouldConstrain();
    const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
    const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
    if (hasSettledAndIdle) animation.stop();
    const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
    offsetLocation.set(interpolatedLocation);
    if (loop) {
      scrollLooper.loop(scrollBody.direction());
      slideLooper.loop();
    }
    translate.to(offsetLocation.get());
    if (hasSettledAndIdle) eventHandler.emit('settle');
    if (!hasSettled) eventHandler.emit('scroll');
  };
  const animation = Animations(ownerDocument, ownerWindow, () => update(engine), alpha => render(engine, alpha));
  // Shared
  const friction = 0.68;
  const startLocation = scrollSnaps[index.get()];
  const location = Vector1D(startLocation);
  const previousLocation = Vector1D(startLocation);
  const offsetLocation = Vector1D(startLocation);
  const target = Vector1D(startLocation);
  const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
  const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
  const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
  const scrollProgress = ScrollProgress(limit);
  const eventStore = EventStore();
  const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
  const {
    slideRegistry
  } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
  const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
  // Engine
  const engine = {
    ownerDocument,
    ownerWindow,
    eventHandler,
    containerRect,
    slideRects,
    animation,
    axis,
    dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
    eventStore,
    percentOfView,
    index,
    indexPrevious,
    limit,
    location,
    offsetLocation,
    previousLocation,
    options,
    resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
    scrollBody,
    scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
    scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [location, offsetLocation, previousLocation, target]),
    scrollProgress,
    scrollSnapList: scrollSnaps.map(scrollProgress.get),
    scrollSnaps,
    scrollTarget,
    scrollTo,
    slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
    slideFocus,
    slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
    slidesInView,
    slideIndexes,
    slideRegistry,
    slidesToScroll,
    target,
    translate: Translate(axis, container)
  };
  return engine;
}

function EventHandler() {
  let listeners = {};
  let api;
  function init(emblaApi) {
    api = emblaApi;
  }
  function getListeners(evt) {
    return listeners[evt] || [];
  }
  function emit(evt) {
    getListeners(evt).forEach(e => e(api, evt));
    return self;
  }
  function on(evt, cb) {
    listeners[evt] = getListeners(evt).concat([cb]);
    return self;
  }
  function off(evt, cb) {
    listeners[evt] = getListeners(evt).filter(e => e !== cb);
    return self;
  }
  function clear() {
    listeners = {};
  }
  const self = {
    init,
    emit,
    off,
    on,
    clear
  };
  return self;
}

const defaultOptions = {
  align: 'center',
  axis: 'x',
  container: null,
  slides: null,
  containScroll: 'trimSnaps',
  direction: 'ltr',
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: false,
  dragThreshold: 10,
  loop: false,
  skipSnaps: false,
  duration: 25,
  startIndex: 0,
  active: true,
  watchDrag: true,
  watchResize: true,
  watchSlides: true,
  watchFocus: true
};

function OptionsHandler(ownerWindow) {
  function mergeOptions(optionsA, optionsB) {
    return objectsMergeDeep(optionsA, optionsB || {});
  }
  function optionsAtMedia(options) {
    const optionsAtMedia = options.breakpoints || {};
    const matchedMediaOptions = objectKeys(optionsAtMedia).filter(media => ownerWindow.matchMedia(media).matches).map(media => optionsAtMedia[media]).reduce((a, mediaOption) => mergeOptions(a, mediaOption), {});
    return mergeOptions(options, matchedMediaOptions);
  }
  function optionsMediaQueries(optionsList) {
    return optionsList.map(options => objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries) => acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
  }
  const self = {
    mergeOptions,
    optionsAtMedia,
    optionsMediaQueries
  };
  return self;
}

function PluginsHandler(optionsHandler) {
  let activePlugins = [];
  function init(emblaApi, plugins) {
    activePlugins = plugins.filter(({
      options
    }) => optionsHandler.optionsAtMedia(options).active !== false);
    activePlugins.forEach(plugin => plugin.init(emblaApi, optionsHandler));
    return plugins.reduce((map, plugin) => Object.assign(map, {
      [plugin.name]: plugin
    }), {});
  }
  function destroy() {
    activePlugins = activePlugins.filter(plugin => plugin.destroy());
  }
  const self = {
    init,
    destroy
  };
  return self;
}

function EmblaCarousel(root, userOptions, userPlugins) {
  const ownerDocument = root.ownerDocument;
  const ownerWindow = ownerDocument.defaultView;
  const optionsHandler = OptionsHandler(ownerWindow);
  const pluginsHandler = PluginsHandler(optionsHandler);
  const mediaHandlers = EventStore();
  const eventHandler = EventHandler();
  const {
    mergeOptions,
    optionsAtMedia,
    optionsMediaQueries
  } = optionsHandler;
  const {
    on,
    off,
    emit
  } = eventHandler;
  const reInit = reActivate;
  let destroyed = false;
  let engine;
  let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
  let options = mergeOptions(optionsBase);
  let pluginList = [];
  let pluginApis;
  let container;
  let slides;
  function storeElements() {
    const {
      container: userContainer,
      slides: userSlides
    } = options;
    const customContainer = isString(userContainer) ? root.querySelector(userContainer) : userContainer;
    container = customContainer || root.children[0];
    const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
    slides = [].slice.call(customSlides || container.children);
  }
  function createEngine(options) {
    const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
    if (options.loop && !engine.slideLooper.canLoop()) {
      const optionsWithoutLoop = Object.assign({}, options, {
        loop: false
      });
      return createEngine(optionsWithoutLoop);
    }
    return engine;
  }
  function activate(withOptions, withPlugins) {
    if (destroyed) return;
    optionsBase = mergeOptions(optionsBase, withOptions);
    options = optionsAtMedia(optionsBase);
    pluginList = withPlugins || pluginList;
    storeElements();
    engine = createEngine(options);
    optionsMediaQueries([optionsBase, ...pluginList.map(({
      options
    }) => options)]).forEach(query => mediaHandlers.add(query, 'change', reActivate));
    if (!options.active) return;
    engine.translate.to(engine.location.get());
    engine.animation.init();
    engine.slidesInView.init();
    engine.slideFocus.init(self);
    engine.eventHandler.init(self);
    engine.resizeHandler.init(self);
    engine.slidesHandler.init(self);
    if (engine.options.loop) engine.slideLooper.loop();
    if (container.offsetParent && slides.length) engine.dragHandler.init(self);
    pluginApis = pluginsHandler.init(self, pluginList);
  }
  function reActivate(withOptions, withPlugins) {
    const startIndex = selectedScrollSnap();
    deActivate();
    activate(mergeOptions({
      startIndex
    }, withOptions), withPlugins);
    eventHandler.emit('reInit');
  }
  function deActivate() {
    engine.dragHandler.destroy();
    engine.eventStore.clear();
    engine.translate.clear();
    engine.slideLooper.clear();
    engine.resizeHandler.destroy();
    engine.slidesHandler.destroy();
    engine.slidesInView.destroy();
    engine.animation.destroy();
    pluginsHandler.destroy();
    mediaHandlers.clear();
  }
  function destroy() {
    if (destroyed) return;
    destroyed = true;
    mediaHandlers.clear();
    deActivate();
    eventHandler.emit('destroy');
    eventHandler.clear();
  }
  function scrollTo(index, jump, direction) {
    if (!options.active || destroyed) return;
    engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
    engine.scrollTo.index(index, direction || 0);
  }
  function scrollNext(jump) {
    const next = engine.index.add(1).get();
    scrollTo(next, jump, -1);
  }
  function scrollPrev(jump) {
    const prev = engine.index.add(-1).get();
    scrollTo(prev, jump, 1);
  }
  function canScrollNext() {
    const next = engine.index.add(1).get();
    return next !== selectedScrollSnap();
  }
  function canScrollPrev() {
    const prev = engine.index.add(-1).get();
    return prev !== selectedScrollSnap();
  }
  function scrollSnapList() {
    return engine.scrollSnapList;
  }
  function scrollProgress() {
    return engine.scrollProgress.get(engine.offsetLocation.get());
  }
  function selectedScrollSnap() {
    return engine.index.get();
  }
  function previousScrollSnap() {
    return engine.indexPrevious.get();
  }
  function slidesInView() {
    return engine.slidesInView.get();
  }
  function slidesNotInView() {
    return engine.slidesInView.get(false);
  }
  function plugins() {
    return pluginApis;
  }
  function internalEngine() {
    return engine;
  }
  function rootNode() {
    return root;
  }
  function containerNode() {
    return container;
  }
  function slideNodes() {
    return slides;
  }
  const self = {
    canScrollNext,
    canScrollPrev,
    containerNode,
    internalEngine,
    destroy,
    off,
    on,
    emit,
    plugins,
    previousScrollSnap,
    reInit,
    rootNode,
    scrollNext,
    scrollPrev,
    scrollProgress,
    scrollSnapList,
    scrollTo,
    selectedScrollSnap,
    slideNodes,
    slidesInView,
    slidesNotInView
  };
  activate(userOptions, userPlugins);
  setTimeout(() => eventHandler.emit('init'), 0);
  return self;
}
EmblaCarousel.globalOptions = undefined;


//# sourceMappingURL=embla-carousel.esm.js.map

;// ./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js




function useEmblaCarousel(options = {}, plugins = []) {
  const storedOptions = (0,react.useRef)(options);
  const storedPlugins = (0,react.useRef)(plugins);
  const [emblaApi, setEmblaApi] = (0,react.useState)();
  const [viewport, setViewport] = (0,react.useState)();
  const reInit = (0,react.useCallback)(() => {
    if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
  }, [emblaApi]);
  (0,react.useEffect)(() => {
    if (areOptionsEqual(storedOptions.current, options)) return;
    storedOptions.current = options;
    reInit();
  }, [options, reInit]);
  (0,react.useEffect)(() => {
    if (arePluginsEqual(storedPlugins.current, plugins)) return;
    storedPlugins.current = plugins;
    reInit();
  }, [plugins, reInit]);
  (0,react.useEffect)(() => {
    if (canUseDOM() && viewport) {
      EmblaCarousel.globalOptions = useEmblaCarousel.globalOptions;
      const newEmblaApi = EmblaCarousel(viewport, storedOptions.current, storedPlugins.current);
      setEmblaApi(newEmblaApi);
      return () => newEmblaApi.destroy();
    } else {
      setEmblaApi(undefined);
    }
  }, [viewport, setEmblaApi]);
  return [setViewport, emblaApi];
}
useEmblaCarousel.globalOptions = undefined;


//# sourceMappingURL=embla-carousel-react.esm.js.map


/***/ }),

/***/ 46686:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __webpack_require__(73623);
const _interop_require_wildcard = __webpack_require__(66388);
const _jsxruntime = __webpack_require__(95155);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(12115));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__webpack_require__(76899));
const _headmanagercontextsharedruntime = __webpack_require__(75368);
const _warnonce = __webpack_require__(47284);
function defaultHead() {
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"),
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")
    ];
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    'name',
    'httpEquiv',
    'charSet',
    'itemProp'
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements) {
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead().reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children }) {
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map


/***/ }),

/***/ 47527:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ useComposedRefs),
/* harmony export */   t: () => (/* binding */ composeRefs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
// packages/react/compose-refs/src/compose-refs.tsx

function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 48274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FileCode)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const FileCode = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("FileCode", [
    [
        "path",
        {
            d: "M10 12.5 8 15l2 2.5",
            key: "1tg20x"
        }
    ],
    [
        "path",
        {
            d: "m14 12.5 2 2.5-2 2.5",
            key: "yinavb"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
            key: "1mlx9k"
        }
    ]
]);
 //# sourceMappingURL=file-code.js.map


/***/ }),

/***/ 48368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FileText)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const FileText = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("FileText", [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
]);
 //# sourceMappingURL=file-text.js.map


/***/ }),

/***/ 48896:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  wI: () => (/* binding */ T),
  yx: () => (/* binding */ v)
});

// UNUSED EXPORTS: BalancedMasonryGrid, MasonryGrid, SpannedFrame, SpannedMasonryGrid, useMasonryGrid

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
;// ./node_modules/@masonry-grid/vanilla/dist/index.js
function B(p, r, e) {
  if (p.length > 0) {
    if (p[0].target === r)
      return p[0].contentRect.width;
    if (p.length === 2 && p[1].target === r)
      return p[1].contentRect.width;
  }
  return e;
}
class x {
  constructor(r) {
    this.container = r;
    const e = getComputedStyle(r), a = document.createElement("div");
    r.append(a);
    const l = new ResizeObserver((s) => {
      const t = B(
        s,
        r,
        this.containerWidth
      ), m = B(s, a, this.frameWidth);
      let i = this.gap;
      if ((i === -1 || m !== this.frameWidth) && (i = parseFloat(e.gap), isNaN(i) && (i = 0)), i === this.gap && t === this.containerWidth && m === this.frameWidth)
        return;
      this.containerWidth = t, this.frameWidth = m;
      const f = Math.round(
        (t + i) / (m + i)
      );
      if (this.columnsCount === f && i === this.gap) {
        n(), this.resizeHeight(), o();
        return;
      }
      this.gap = i, this.columnsCount = f, n(), this.reflow(), o();
    }), h = new MutationObserver(() => {
      n(), r.append(a), this.columnsCount > 0 && this.reflow(!0), o();
    }), o = () => {
      h.observe(r, {
        childList: !0,
        attributeFilter: ["style"],
        subtree: !0
      });
    }, n = () => {
      h.disconnect();
    };
    this.marker = a, this.mutationObserver = h, this.resizeObserver = l, l.observe(r), l.observe(a), o();
  }
  /**
   * Grid gap value in pixels.
   * -1 means that the gap is not calculated or set.
   */
  gap = -1;
  /**
   * Width of the frame in pixels.
   * -1 means that the width is not calculated or set.
   */
  frameWidth = -1;
  /**
   * Width of the container in pixels.
   * -1 means that the width is not calculated or set.
   */
  containerWidth = -1;
  /**
   * Number of columns in the grid.
   * -1 means that the number of columns is not calculated or set.
   */
  columnsCount = -1;
  /**
   * Aspect ratio of the container.
   * -1 means that the aspect ratio is not calculated or set.
   */
  containerAspectRatio = -1;
  /**
   * Map of frames positions.
   * Key is the frame element, value is the FramePosition object.
   */
  framesPositionsMap = /* @__PURE__ */ new WeakMap();
  /**
   * Resize observer to observe changes in the container and marker size.
   */
  resizeObserver;
  /**
   * Mutation observer to observe changes in the container's children.
   */
  mutationObserver;
  /**
   * Marker element to observe column width changes.
   */
  marker;
  /**
   * Resize the height of the container based on the current width and aspect ratio.
   * If the aspect ratio is not set, the height will be removed.
   * Aspect ratio should be set while reflowing the grid.
   */
  resizeHeight() {
    const {
      container: r,
      containerAspectRatio: e
    } = this;
    e !== -1 ? r.style.height = `${this.containerWidth * e}px` : r.style.removeProperty("height");
  }
  /**
   * Get the aspect ratio of the frame based on its width and height.
   * @param element - The frame element to calculate the aspect ratio for.
   * @returns The aspect ratio of the frame as a number (height / width).
   */
  getFrameAspectRatio(r) {
    const e = parseFloat(r.style.getPropertyValue("--width"));
    return parseFloat(r.style.getPropertyValue("--height")) / e;
  }
  /**
   * Get the position of the frame in the grid.
   * @param element - The frame element to get the position for.
   * @param i - The real index of the frame in the grid.
   * @param offset - The offset from the top of the container in pixels.
   * @returns An object containing the position of the frame in the grid.
   */
  getFramePosition(r, e, a) {
    const {
      gap: l,
      columnsCount: h,
      frameWidth: o
    } = this, n = this.getFrameAspectRatio(r), s = n * o, t = a + s + (e >= h ? l : 0);
    return {
      aspectRatio: n,
      realIndex: e,
      virtualIndex: e,
      height: s,
      realBottom: t,
      virtualBottom: t,
      width: o
    };
  }
  /**
   * Get the position of the frame in the grid and cache it.
   * @param element - The frame element to get the position for.
   * @param i - The real index of the frame in the grid.
   * @param offset - The offset from the top of the container in pixels.
   * @returns An object containing the position of the frame in the grid.
   */
  getFramePositionAndCache(r, e, a) {
    const l = this.getFramePosition(r, e, a);
    return this.framesPositionsMap.set(r, l), l;
  }
  /**
   * Get the cached position of the frame in the grid and scale it to the current frame width.
   * If the frame position is not cached or the index does not match, return null.
   * @param element - The frame element to get the position for.
   * @param i - The real index of the frame in the grid.
   * @returns An object containing the scaled position of the frame in the grid or null if not found.
   */
  getCachedScaledFramePosition(r, e, a) {
    const { frameWidth: l } = this, h = this.getFrameAspectRatio(r), o = this.framesPositionsMap.get(r);
    if (!o || o.realIndex !== e || o.virtualIndex >= a || o.aspectRatio !== h)
      return null;
    const n = l / o.width;
    return o.height *= n, o.realBottom *= n, o.virtualBottom *= n, o.width = l, o;
  }
  /**
   * Destroy the MasonryGrid instance.
   */
  destroy() {
    const {
      resizeObserver: r,
      mutationObserver: e,
      marker: a,
      container: l,
      framesPositionsMap: h
    } = this;
    r.disconnect(), e.disconnect(), a.remove();
    const o = l.children;
    l.style.removeProperty("height");
    for (let n = 0, s, t = o.length; n < t; n++)
      s = o[n], s.style.removeProperty("transform"), s.style.removeProperty("order"), h.delete(s);
  }
}
class M extends (/* unused pure expression or super */ null && (x)) {
  bufferA = [];
  bufferB = [];
  /**
   * Balance row with previous.
   * Current implementation stacks row with previous to have minimal possible height.
   * @param positions - Virtual positions of the frames in the grid.
   * @param start - Start index of the row to balance.
   * @param end - End index of the row to balance.
   */
  balanceRow(r, e, a) {
    const {
      columnsCount: l,
      bufferA: h,
      bufferB: o
    } = this, n = a - e + 1;
    h.length = n, o.length = n;
    for (let s = 0, t = e; t <= a; s++, t++)
      h[s] = r[t - l], o[s] = r[t];
    h.sort((s, t) => t.virtualBottom - s.virtualBottom), o.sort((s, t) => s.height - t.height);
    for (let s = 0, t = e, m = 0; t <= a; s++, t++)
      m = h[s].virtualIndex + l, r[m] = o[s], o[s].virtualIndex = m;
  }
  reflow(r = !1) {
    const { columnsCount: e } = this;
    if (r && e === 1)
      return;
    const {
      container: a,
      marker: l
    } = this, h = a.children, o = h.length - 1, n = o - 1, s = Array(o);
    let t = -1, m = r;
    l.style.order = String(o);
    for (let i = 0, f, u = 0, g = 0, c; i < o; i++) {
      if (f = h[i], e === 1) {
        f.style.removeProperty("transform"), f.style.removeProperty("order");
        continue;
      }
      if (i % e === 0 && (g = u), m) {
        const v = this.getCachedScaledFramePosition(
          f,
          i,
          o
        );
        if (v)
          c = v, s[c.virtualIndex] = c;
        else {
          m = !1;
          const y = i - i % e;
          for (let d = y, P; d < i; d++)
            P = h[d], c = this.getFramePositionAndCache(
              P,
              d,
              g
            ), s[d] = c;
        }
      }
      if (m)
        u = Math.max(
          u,
          c.realBottom
        ), t = Math.max(t, c.virtualBottom);
      else if (c = this.getFramePositionAndCache(f, i, g), s[i] = c, i >= e && ((i + 1) % e === 0 || i === n)) {
        const v = i - i % e, y = i;
        this.balanceRow(s, v, y);
        for (let d = v; d <= y; d++) {
          c = s[d], f = h[c.realIndex], f.style.order = String(c.virtualIndex);
          const P = s[d - e], b = g - P.virtualBottom;
          if (b !== 0) {
            const R = b * 100 / c.height * -1;
            f.style.transform = `translateY(${R}%)`, c.virtualBottom -= b;
          } else
            f.style.removeProperty("transform");
          u = Math.max(
            u,
            c.realBottom
          ), t = Math.max(
            t,
            c.virtualBottom
          );
        }
      } else i < e && (f.style.order = String(i), f.style.removeProperty("transform"), f.style.removeProperty("order"), u = Math.max(
        u,
        c.realBottom
      ), t = Math.max(t, c.virtualBottom));
    }
    t === -1 ? (a.style.removeProperty("height"), this.containerAspectRatio = -1) : (a.style.height = `${t}px`, this.containerAspectRatio = t / this.containerWidth);
  }
  destroy() {
    super.destroy(), this.bufferA.length = 0, this.bufferB.length = 0;
  }
}
class C extends x {
  reflow(r = !1) {
    const { columnsCount: e } = this;
    if (r && e === 1)
      return;
    const {
      container: a,
      framesPositionsMap: l
    } = this, h = a.children, o = h.length - 1;
    let n = -1, s = r;
    for (let t = 0, m, i = 0, f = 0, u; t < o; t++) {
      if (m = h[t], e === 1) {
        m.style.removeProperty("transform");
        continue;
      }
      if (t % e === 0 && (f = i), s) {
        const g = this.getCachedScaledFramePosition(
          m,
          t,
          o
        );
        g ? u = g : s = !1;
      }
      if (!s)
        if (u = this.getFramePositionAndCache(m, t, f), t >= e) {
          const g = l.get(
            h[t - e]
          ), c = f - g.virtualBottom;
          if (c !== 0) {
            const v = c * 100 / u.height * -1;
            m.style.transform = `translateY(${v}%)`, u.virtualBottom -= c;
          } else
            m.style.removeProperty("transform");
        } else
          m.style.removeProperty("transform");
      i = Math.max(i, u.realBottom), n = Math.max(n, u.virtualBottom);
    }
    n === -1 ? (a.style.removeProperty("height"), this.containerAspectRatio = -1) : (a.style.height = `${n}px`, this.containerAspectRatio = n / this.containerWidth);
  }
}
const w = (/* unused pure expression or super */ null && (C));

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./node_modules/@masonry-grid/react/dist/index.js



function h({
  type: r,
  disabled: n = !1
}) {
  const i = (0,react.useRef)(null);
  return (0,react.useLayoutEffect)(() => {
    const t = i.current;
    if (!t || n)
      return;
    const e = new r(t);
    return () => e.destroy();
  }, [r, n]), i;
}
function d(r) {
  return r === void 0 ? r : typeof r == "number" ? `${r}px` : r;
}
function g(r, n, i) {
  const t = {
    display: "grid",
    overflow: "hidden",
    ...r
  };
  return n !== void 0 && t.gridTemplateColumns === void 0 && (t.gridTemplateColumns = `repeat(auto-fill, minmax(${d(n)}, 1fr))`), i !== void 0 && t.gap === void 0 && (t.gap = d(i)), t;
}
function l({
  ref: r,
  as: n = "div",
  type: i,
  frameWidth: t,
  gap: e,
  disabled: o,
  style: s,
  ...u
}) {
  const c = h({
    type: i,
    disabled: o
  });
  return r && (typeof r == "function" ? r(c.current) : r.current = c.current), /* @__PURE__ */ (0,jsx_runtime.jsx)(
    n,
    {
      ref: c,
      style: g(s, t, e),
      ...u
    }
  );
}
function v(r) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    l,
    {
      type: C,
      ...r
    }
  );
}
const _ = (/* unused pure expression or super */ null && (v));
function A(r) {
  return /* @__PURE__ */ a(
    l,
    {
      type: p,
      ...r
    }
  );
}
function T({
  as: r = "div",
  style: n,
  width: i,
  height: t,
  ...e
}) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    r,
    {
      style: {
        "--width": i,
        "--height": t,
        aspectRatio: "var(--width) / var(--height)",
        ...n
      },
      ...e
    }
  );
}
const R = 10, E = {
  display: "grid",
  clipPath: "margin-box",
  margin: "calc(-1 * var(--gap, 0) / 2)",
  gridTemplateColumns: "repeat(auto-fill, minmax(var(--frame-width), 1fr))"
};
function dist_x({
  ref: r,
  as: n = "div",
  precision: i = R,
  frameWidth: t,
  gap: e,
  style: o,
  innerStyle: s,
  children: u,
  ...c
}) {
  return /* @__PURE__ */ a(
    n,
    {
      style: {
        "--frame-width": d(t),
        "--gap": d(e),
        "--precision": i,
        ...o
      },
      ...c,
      children: /* @__PURE__ */ a(
        "div",
        {
          style: {
            ...E,
            ...s
          },
          children: u
        }
      )
    }
  );
}
const N = {
  aspectRatio: "var(--width) / var(--height)",
  width: "100%",
  height: "100%",
  position: "relative",
  gridRow: "span calc(var(--height) / var(--width) * var(--precision))"
}, dist_w = {
  position: "absolute",
  inset: "calc(var(--gap, 0) / 2)"
};
function P({
  as: r = "div",
  width: n,
  height: i,
  style: t,
  innerStyle: e,
  children: o,
  ...s
}) {
  return /* @__PURE__ */ a(
    r,
    {
      style: {
        "--width": n,
        "--height": i,
        ...N,
        ...t
      },
      ...s,
      children: /* @__PURE__ */ a(
        "div",
        {
          style: {
            ...dist_w,
            ...e
          },
          children: o
        }
      )
    }
  );
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 50910:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export useFormatter */
/* harmony import */ var use_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33418);
function o(r,t){return(...r)=>{try{return t(...r)}catch{throw new Error(void 0)}}}const n=o(0,use_intl__WEBPACK_IMPORTED_MODULE_0__/* .useTranslations */ .c3),e=o(0,use_intl__WEBPACK_IMPORTED_MODULE_0__/* .useFormatter */ .kc);


/***/ }),

/***/ 53807:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
__webpack_unused_export__ = REACT_FRAGMENT_TYPE;
__webpack_unused_export__ = void 0;


/***/ }),

/***/ 54468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63806);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93960);


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */ function toDate(argument) {
    (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    // Clone the date
    if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(argument) === 'object' && argStr === '[object Date]') {
        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
        return new Date(argument.getTime());
    } else if (typeof argument === 'number' || argStr === '[object Number]') {
        return new Date(argument);
    } else {
        if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
            // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}


/***/ }),

/***/ 55762:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    /**
   * @deprecated Use `remotePatterns` instead to protect your application from malicious users.
   */ domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 14400,
    formats: [
        'image/webp'
    ],
    maximumDiskCacheSize: undefined,
    maximumRedirects: 3,
    maximumResponseBody: 50000000,
    dangerouslyAllowLocalIP: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    qualities: [
        75
    ],
    unoptimized: false,
    customCacheHandler: false
}; //# sourceMappingURL=image-config.js.map


/***/ }),

/***/ 55897:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sG: () => (/* binding */ Primitive)
/* harmony export */ });
/* unused harmony exports Root, dispatchDiscreteCustomEvent */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47650);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42442);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95155);
// src/primitive.tsx




var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = (0,_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .createSlot */ .TL)(`Primitive.${node}`);
  const Node = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}
var Root = (/* unused pure expression or super */ null && (Primitive));

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 58516:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lX: () => (/* reexport */ F)
});

// UNUSED EXPORTS: Arrows, Autoplay, Carousel, FancyboxState, Fullscreen, Html, Lazyload, PANZOOM_DEFAULT_POS, Panzoom, PanzoomAction, PanzoomZoomLevel, Sync, Thumbs, Toolbar, ToolbarColumn, Video, Zoomable

;// ./node_modules/@fancyapps/ui/dist/utils/isPlainObject.js
/*! License details at fancyapps.com/license */
const isPlainObject_t=t=>"object"==typeof t&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t);

;// ./node_modules/@fancyapps/ui/dist/utils/isString.js
/*! License details at fancyapps.com/license */
const isString_t=t=>"string"==typeof t;

;// ./node_modules/@fancyapps/ui/dist/utils/isNode.js
/*! License details at fancyapps.com/license */
const isNode_n=n=>n&&null!==n&&n instanceof Element&&"nodeType"in n;

;// ./node_modules/@fancyapps/ui/dist/utils/strToHtml.js
/*! License details at fancyapps.com/license */
const strToHtml_e=function(e){var t=(new DOMParser).parseFromString(e,"text/html").body;if(t.childElementCount>1){for(var n=document.createElement("div");t.firstChild;)n.appendChild(t.firstChild);return n}let r=t.firstChild;return!r||r instanceof HTMLElement?r:((n=document.createElement("div")).appendChild(r),n)};

;// ./node_modules/@fancyapps/ui/dist/utils/getScrollableParent.js
/*! License details at fancyapps.com/license */
const e=function(e){if(!(e&&e instanceof Element&&e.offsetParent))return!1;let n=!1,i=!1;if(e.scrollWidth>e.clientWidth){const i=window.getComputedStyle(e).overflowX,t=-1!==i.indexOf("hidden"),o=-1!==i.indexOf("clip"),d=-1!==i.indexOf("visible");n=!t&&!o&&!d}if(e.scrollHeight>e.clientHeight){const n=window.getComputedStyle(e).overflowY,t=-1!==n.indexOf("hidden"),o=-1!==n.indexOf("clip"),d=-1!==n.indexOf("visible");i=!t&&!o&&!d}return n||i},getScrollableParent_n=function(i,t=void 0){return!i||i===document.body||t&&i===t?null:e(i)?i:getScrollableParent_n(i.parentElement,t)};

;// ./node_modules/@fancyapps/ui/dist/utils/scrollLock.js
/*! License details at fancyapps.com/license */
const scrollLock_t=(t=!0,e="--f-scrollbar-compensate",s="--f-body-margin",o="hide-scrollbar")=>{const n=document,r=n.body,l=n.documentElement;if(t){if(r.classList.contains(o))return;let t=window.innerWidth-l.getBoundingClientRect().width;t<0&&(t=0),l.style.setProperty(e,`${t}px`);const n=parseFloat(window.getComputedStyle(r).marginRight);n&&r.style.setProperty(s,`${n}px`),r.classList.add(o)}else r.classList.remove(o),r.style.setProperty(s,""),n.documentElement.style.setProperty(e,"")};

;// ./node_modules/@fancyapps/ui/dist/utils/extend.js
/*! License details at fancyapps.com/license */
const extend_r=(t,...e)=>{const n=e.length;for(let c=0;c<n;c++){const n=e[c]||{};Object.entries(n).forEach(([e,n])=>{const c=Array.isArray(n)?[]:{};t[e]||Object.assign(t,{[e]:c}),isPlainObject_t(n)?Object.assign(t[e],extend_r(t[e],n)):Array.isArray(n)?Object.assign(t,{[e]:[...n]}):Object.assign(t,{[e]:n})})}return t};

;// ./node_modules/@fancyapps/ui/dist/utils/canUseDOM.js
/*! License details at fancyapps.com/license */
function canUseDOM_e(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}

;// ./node_modules/@fancyapps/ui/dist/utils/clamp.js
/*! License details at fancyapps.com/license */
const clamp_t=function(t=0,n=0,a=0){return Math.max(Math.min(n,a),t)};

;// ./node_modules/@fancyapps/ui/dist/utils/map.js
/*! License details at fancyapps.com/license */
const map_t=function(t=0,n=0,r=0,c=0,m=0,p=!1){const s=(t-n)/(r-n)*(m-c)+c;return p?c<m?clamp_t(c,s,m):clamp_t(m,s,c):s};

;// ./node_modules/@fancyapps/ui/dist/utils/addClass.js
/*! License details at fancyapps.com/license */
const addClass_s=(s,t="")=>{s&&s.classList&&t.split(" ").forEach(t=>{t&&s.classList.add(t)})};

;// ./node_modules/@fancyapps/ui/dist/utils/removeClass.js
/*! License details at fancyapps.com/license */
const removeClass_s=(s,t="")=>{s&&s.classList&&t.split(" ").forEach(t=>{t&&s.classList.remove(t)})};

;// ./node_modules/@fancyapps/ui/dist/utils/toggleClass.js
/*! License details at fancyapps.com/license */
const toggleClass_s=(s,t="",c)=>{s&&s.classList&&t.split(" ").forEach(t=>{t&&s.classList.toggle(t,c||!1)})};

;// ./node_modules/@fancyapps/ui/dist/utils/isEqual.js
/*! License details at fancyapps.com/license */
function isEqual_e(e){return isPlainObject_t(e)||Array.isArray(e)}function isEqual_n(t,r){const o=Object.keys(t),c=Object.keys(r);return o.length===c.length&&o.every(o=>{const c=t[o],i=r[o];return"function"==typeof c?`${c}`==`${i}`:isEqual_e(c)&&isEqual_e(i)?isEqual_n(c,i):c===i})}

;// ./node_modules/@fancyapps/ui/dist/libs/tween.js
/*! License details at fancyapps.com/license */
const tween_e=function(n){for(const t of s)t.getState()===i.Running&&t.tick(a?n-a:0);a=n,u=window.requestAnimationFrame(tween_e)};var i,o,r;!function(n){n[n.Initializing=0]="Initializing",n[n.Running=1]="Running",n[n.Paused=2]="Paused",n[n.Completed=3]="Completed",n[n.Destroyed=4]="Destroyed"}(i||(i={})),function(n){n[n.Spring=0]="Spring",n[n.Ease=1]="Ease"}(o||(o={})),function(n){n[n.Loop=0]="Loop",n[n.Reverse=1]="Reverse"}(r||(r={}));const s=new Set;let u=null,a=0;function tween_c(){let a=i.Initializing,f=o.Ease,l=0,g=0,p=tween_c.Easings.Linear,m=500,d=0,b=0,S=0,h=0,y=1/0,E=.01,R=.01,M=!1,j={},w=null,v={},O={},C={},L=0,I=0,D=r.Loop,z=tween_c.Easings.Linear;const N=new Map;function V(n,...t){for(const e of N.get(n)||[])e(...t)}function q(n){return g=0,n?w=setTimeout(()=>{x()},n):x(),F}function x(){a=i.Running,V("start",v,O)}function A(){if(a=i.Completed,C={},V("end",v),a===i.Completed)if(l<L){if(l++,D===r.Reverse){const n=Object.assign({},j);j=Object.assign({},O),O=n}q(I)}else l=0;return F}const F={getState:function(){return a},easing:function(n){return p=n,f=o.Ease,C={},F},duration:function(n){return m=n,F},spring:function(n={}){f=o.Spring;const t={velocity:0,mass:1,tension:170,friction:26,restDelta:.1,restSpeed:.1,maxSpeed:1/0,clamp:!0},{velocity:e,mass:i,tension:r,friction:s,restDelta:u,restSpeed:a,maxSpeed:c,clamp:l}=Object.assign(Object.assign({},t),n);return d=e,b=i,S=r,h=s,R=u,E=a,y=c,M=l,C={},F},isRunning:function(){return a===i.Running},isSpring:function(){return f===o.Spring},from:function(n){return v=Object.assign({},n),F},to:function(n){return O=n,F},repeat:function(n,t=0,e=r.Loop,i){return L=n,I=t,D=e,z=i||p,F},on:function(n,t){var e,i;return e=n,i=t,N.set(e,[...N.get(e)||[],i]),F},off:function(n,t){var e,i;return e=n,i=t,N.has(e)&&N.set(e,N.get(e).filter(n=>n!==i)),F},start:function(n){return isEqual_n(v,O)||(a=i.Initializing,j=Object.assign({},v),s.add(this),u||(u=window.requestAnimationFrame(tween_e)),q(n)),F},pause:function(){return w&&(clearTimeout(w),w=null),a===i.Running&&(a=i.Paused,V("pause",v)),F},end:A,tick:function(e){e>50&&(e=50),g+=e;let s=0,u=!1;if(a!==i.Running)return F;if(f===o.Ease){s=clamp_t(0,g/m,1),u=1===s;const t=D===r.Reverse?z:p;for(const n in v)v[n]=j[n]+(O[n]-j[n])*t(s)}if(f===o.Spring){const t=.001*e;let i=0;for(const e in v){const o=O[e];let r=v[e];if("number"!=typeof o||isNaN(o)||"number"!=typeof r||isNaN(r))continue;if(Math.abs(o-r)<=R){v[e]=o,C[e]=0;continue}C[e]||("object"==typeof d&&"number"==typeof d[e]?C[e]=d[e]:C[e]="number"==typeof d?d:0);let s=C[e];s=clamp_t(-1*Math.abs(y),s,Math.abs(y));const u=s*b*h;s+=((r>o?-1:1)*(Math.abs(o-r)*S)-u)/b*t,r+=s*t;const a=v[e]>o?r<o:r>o;let c=Math.abs(s)<E&&Math.abs(o-r)<=R;M&&a&&(c=!0),c?(r=o,s=0):i++,v[e]=r,C[e]=s}u=!i}const c=Object.assign({},O);return V("step",v,j,O,s),u&&a===i.Running&&isEqual_n(O,c)&&(a=i.Completed,A()),F},getStartValues:function(){return j},getCurrentValues:function(){return v},getCurrentVelocities:function(){return C},getEndValues:function(){return O},destroy:function(){a=i.Destroyed,w&&(clearTimeout(w),w=null),j=v=O={},s.delete(this)}};return F}tween_c.destroy=()=>{for(const n of s)n.destroy();u&&(cancelAnimationFrame(u),u=null)},tween_c.Easings={Linear:function(n){return n},EaseIn:function(n){return 0===n?0:Math.pow(2,10*n-10)},EaseOut:function(n){return 1===n?1:1-Math.pow(2,-10*n)},EaseInOut:function(n){return 0===n?0:1===n?1:n<.5?Math.pow(2,20*n-10)/2:(2-Math.pow(2,-20*n+10))/2}};

;// ./node_modules/@fancyapps/ui/dist/libs/gestures.js
/*! License details at fancyapps.com/license */
function gestures_e(e){return"undefined"!=typeof TouchEvent&&e instanceof TouchEvent}function t(t,n){const o=[],s=gestures_e(t)?t[n]:t instanceof MouseEvent&&("changedTouches"===n||"mouseup"!==t.type)?[t]:[];for(const e of s)o.push({x:e.clientX,y:e.clientY,ts:Date.now()});return o}function n(e){return t(e,"touches")}function gestures_o(e){return t(e,"targetTouches")}function gestures_s(e){return t(e,"changedTouches")}function gestures_i(e){const t=e[0],n=e[1]||t;return{x:(t.x+n.x)/2,y:(t.y+n.y)/2,ts:n.ts}}function gestures_r(e){const t=e[0],n=e[1]||e[0];return t&&n?-1*Math.sqrt((n.x-t.x)*(n.x-t.x)+(n.y-t.y)*(n.y-t.y)):0}const c=e=>{e.cancelable&&e.preventDefault()},gestures_a={passive:!1},gestures_u={panThreshold:5,swipeThreshold:3,ignore:["textarea","input","select","[contenteditable]","[data-selectable]","[data-draggable]"]};let d=!1,l=!0;const f=(e,t)=>{let f,h,v,g,p,m=Object.assign(Object.assign({},gestures_u),t),E=[],w=[],y=[],T=!1,b=!1,M=!1,L=!1,x=0,P=0,D=0,X=0,Y=0,j=0,k=0,R=0,z=0,A=[];const O=new Map;function S(e){const t=gestures_r(w),n=gestures_r(y),o=t&&n?t/n:0,s=Math.abs(k)>Math.abs(R)?k:R,i={srcEvent:f,isPanRecognized:T,isSwipeRecognized:b,firstTouch:E,previousTouch:y,currentTouch:w,deltaX:D,deltaY:X,offsetX:Y,offsetY:j,velocityX:k,velocityY:R,velocity:s,angle:z,axis:v,scale:o,center:h};for(const t of O.get(e)||[])t(i)}function q(e){const t=e.target,n=e.composedPath()[0],o=m.ignore.join(","),s=e=>e&&e instanceof HTMLElement&&(e.matches(o)||e.closest(o));if(s(t)||s(n))return!1}function C(e){const t=Date.now();if(A=A.filter(e=>!e.ts||e.ts>t-100),e&&A.push(e),k=0,R=0,A.length>3){const e=A[0],t=A[A.length-1];if(e&&t){const n=t.x-e.x,o=t.y-e.y,s=e.ts&&t.ts?t.ts-e.ts:0;s>0&&(k=Math.abs(n)>3?n/(s/30):0,R=Math.abs(o)>3?o/(s/30):0)}}}function H(e){if(!1===q(e))return;if("undefined"!=typeof MouseEvent&&e instanceof MouseEvent){if(d)return}else d=!0;if("undefined"!=typeof MouseEvent&&e instanceof MouseEvent){if(!e.buttons||0!==e.button)return;c(e)}e instanceof MouseEvent&&(window.addEventListener("mousemove",I),window.addEventListener("mouseup",B)),window.addEventListener("blur",F),f=e,w=gestures_o(e),E=[...w],y=[],P=w.length,h=gestures_i(w),1===P&&(T=!1,b=!1,M=!1),P&&C(gestures_i(w));const t=Date.now(),n=t-(x||t);L=n>0&&n<=250&&1===P,x=t,clearTimeout(g),S("start")}function I(e){var t;if(!E.length)return;if(e.defaultPrevented)return;if(!1===q(e))return;f=e,y=[...w],w=n(e);const o=gestures_i(y),s=gestures_i(n(e));if(C(s),P=w.length,h=s,y.length===w.length?(D=s.x-o.x,X=s.y-o.y):(D=0,X=0),E.length){const e=gestures_i(E);Y=s.x-e.x,j=s.y-e.y}if(w.length>1){const e=gestures_r(w),t=gestures_r(y);Math.abs(e-t)>=.1&&(M=!0,S("pinch"))}T||(T=Math.abs(Y)>=m.panThreshold||Math.abs(j)>=m.panThreshold,T&&(l=!1,clearTimeout(p),p=void 0,z=Math.abs(180*Math.atan2(j,Y)/Math.PI),v=z>45&&z<135?"y":"x",E=[...w],y=[...w],Y=0,j=0,D=0,X=0,null===(t=window.getSelection())||void 0===t||t.removeAllRanges(),S("panstart"))),T&&(D||X)&&S("pan"),S("move")}function B(e){if(f=e,!E.length)return;const t=gestures_o(e),n=gestures_s(e);if(P=t.length,h=gestures_i(n),n.length&&C(gestures_i(n)),y=[...w],w=[...t],E=[...t],P>0)S("end"),T=!1,b=!1,A=[];else{const e=m.swipeThreshold;(Math.abs(k)>e||Math.abs(R)>e)&&(b=!0),T&&S("panend"),b&&S("swipe"),T||b||M||(S("tap"),L?S("doubleTap"):g=setTimeout(function(){S("singleTap")},250)),S("end"),G()}}function F(){clearTimeout(g),G(),T&&S("panend"),S("end")}function G(){d=!1,T=!1,b=!1,L=!1,P=0,A=[],w=[],y=[],E=[],D=0,X=0,Y=0,j=0,k=0,R=0,z=0,v=void 0,window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",B),window.removeEventListener("blur",F),l||p||(p=setTimeout(()=>{l=!0,p=void 0},100))}function J(e){const t=e.target;d=!1,t&&!e.defaultPrevented&&(l||(c(e),e.stopPropagation()))}const K={init:function(){return e&&(e.addEventListener("click",J,gestures_a),e.addEventListener("mousedown",H,gestures_a),e.addEventListener("touchstart",H,gestures_a),e.addEventListener("touchmove",I,gestures_a),e.addEventListener("touchend",B),e.addEventListener("touchcancel",B)),K},on:function(e,t){return function(e,t){O.set(e,[...O.get(e)||[],t])}(e,t),K},off:function(e,t){return O.has(e)&&O.set(e,O.get(e).filter(e=>e!==t)),K},isPointerDown:()=>P>0,destroy:function(){clearTimeout(g),clearTimeout(p),p=void 0,e&&(e.removeEventListener("click",J,gestures_a),e.removeEventListener("mousedown",H,gestures_a),e.removeEventListener("touchstart",H,gestures_a),e.removeEventListener("touchmove",I,gestures_a),e.removeEventListener("touchend",B),e.removeEventListener("touchcancel",B)),e=null,G()}};return K};f.isClickAllowed=()=>l;

;// ./node_modules/@fancyapps/ui/dist/panzoom/l10n/en_EN.js
/*! License details at fancyapps.com/license */
const en_EN_e={IMAGE_ERROR:"This image couldn't be loaded. <br /> Please try again later.",MOVE_UP:"Move up",MOVE_DOWN:"Move down",MOVE_LEFT:"Move left",MOVE_RIGHT:"Move right",ZOOM_IN:"Zoom in",ZOOM_OUT:"Zoom out",TOGGLE_FULL:"Toggle zoom level",TOGGLE_1TO1:"Toggle zoom level",ITERATE_ZOOM:"Toggle zoom level",ROTATE_CCW:"Rotate counterclockwise",ROTATE_CW:"Rotate clockwise",FLIP_X:"Flip horizontally",FLIP_Y:"Flip vertically",RESET:"Reset",TOGGLE_FS:"Toggle fullscreen"};

;// ./node_modules/@fancyapps/ui/dist/panzoom/panzoom.js
/*! License details at fancyapps.com/license */
const h=e=>{e.cancelable&&e.preventDefault()},m=(e,t=1e4)=>(e=parseFloat(e+"")||0,Math.round((e+Number.EPSILON)*t)/t),p=e=>e instanceof HTMLImageElement;var v,b;!function(e){e.Reset="reset",e.Zoom="zoom",e.ZoomIn="zoomIn",e.ZoomOut="zoomOut",e.ZoomTo="zoomTo",e.ToggleCover="toggleCover",e.ToggleFull="toggleFull",e.ToggleMax="toggleMax",e.IterateZoom="iterateZoom",e.Pan="pan",e.Swipe="swipe",e.Move="move",e.MoveLeft="moveLeft",e.MoveRight="moveRight",e.MoveUp="moveUp",e.MoveDown="moveDown",e.RotateCCW="rotateCCW",e.RotateCW="rotateCW",e.FlipX="flipX",e.FlipY="flipY",e.ToggleFS="toggleFS"}(v||(v={})),function(e){e.Cover="cover",e.Full="full",e.Max="max"}(b||(b={}));const y={x:0,y:0,scale:1,angle:0,flipX:1,flipY:1},x={bounds:!0,classes:{container:"f-panzoom",wrapper:"f-panzoom__wrapper",content:"f-panzoom__content",viewport:"f-panzoom__viewport"},clickAction:v.ToggleFull,dblClickAction:!1,gestures:{},height:"auto",l10n:en_EN_e,maxScale:4,minScale:1,mouseMoveFactor:1,panMode:"drag",protected:!1,singleClickAction:!1,spinnerTpl:'<div class="f-spinner"></div>',wheelAction:v.Zoom,width:"auto"};let w,M=0,j=0,E=0;const S=(c,b={},S={})=>{let k,O,T,A,C,F,Z,L,P=0,X=Object.assign(Object.assign({},x),b),Y={},R=Object.assign({},y),z=Object.assign({},y);const D=[];function I(e){let t=X[e];return t&&"function"==typeof t?t(je):t}function W(){return c&&c.parentElement&&k&&3===P}const $=new Map;function q(e,...t){const n=[...$.get(e)||[]];X.on&&n.push(X.on[e]);for(const e of n)e&&e instanceof Function&&e(je,...t);"*"!==e&&q("*",e,...t)}function H(e){if(!W())return;const t=e.target;if(getScrollableParent_n(t))return;const o=Date.now(),s=[-e.deltaX||0,-e.deltaY||0,-e.detail||0].reduce(function(e,t){return Math.abs(t)>Math.abs(e)?t:e}),a=clamp_t(-1,s,1);q("wheel",e,a);const r=I("wheelAction");if(!r)return;if(e.defaultPrevented)return;const l=z.scale;let c=l*(a>0?1.5:.5);if(r===v.Zoom){const t=Math.abs(e.deltaY)<100&&Math.abs(e.deltaX)<100;if(o-j<(t?200:45))return void h(e);j=o;const n=ne(),s=se();if(m(c)<m(n)&&m(l)<=m(n)?(E+=Math.abs(a),c=n):m(c)>m(s)&&m(l)>=m(s)?(E+=Math.abs(a),c=s):(E=0,c=clamp_t(n,c,s)),E>7)return}switch(h(e),r){case v.Pan:ce(r,{srcEvent:e,deltaX:2*-e.deltaX,deltaY:2*-e.deltaY});break;case v.Zoom:ce(v.ZoomTo,{srcEvent:e,scale:c,center:{x:e.clientX,y:e.clientY}});break;default:ce(r,{srcEvent:e})}}function _(e){var n,o;const i=e.composedPath()[0];if(!f.isClickAllowed())return;if(!isNode_n(i)||e.defaultPrevented)return;if(!(null==c?void 0:c.contains(i)))return;if(i.hasAttribute("disabled")||i.hasAttribute("aria-disabled")||i.hasAttribute("data-carousel-go-prev")||i.hasAttribute("data-carousel-go-next"))return;const s=i.closest("[data-panzoom-action]"),a=null===(n=null==s?void 0:s.dataset)||void 0===n?void 0:n.panzoomAction,r=(null===(o=null==s?void 0:s.dataset)||void 0===o?void 0:o.panzoomValue)||"";if(a){switch(h(e),a){case v.ZoomTo:case v.ZoomIn:case v.ZoomOut:ce(a,{scale:parseFloat(r||"")||void 0});break;case v.MoveLeft:case v.MoveRight:ce(a,{deltaX:parseFloat(r||"")||void 0});break;case v.MoveUp:case v.MoveDown:ce(a,{deltaY:parseFloat(r||"")||void 0});break;case v.ToggleFS:we();break;default:ce(a)}return}if(!(null==k?void 0:k.contains(i)))return;const u={srcEvent:e};if(ce(I("clickAction"),u),I("dblClickAction")){const e=Date.now(),t=e-(M||e);M=e,t>0&&t<=250?(w&&(clearTimeout(w),w=void 0),ce(I("dblClickAction"),u)):w=setTimeout(()=>{ce(I("singleClickAction"),u)},250)}}function B(e){if(L=e,!W()||!Q())return;if(R.scale<=1||z.scale<=1)return;if(((null==k?void 0:k.dataset.animationName)||"").indexOf("zoom")>-1)return;const t=ee(z.scale);if(!t)return;const{x:n,y:o}=t;ce(v.Pan,{deltaX:n-z.x,deltaY:o-z.y})}function N(){var e;c&&(removeClass_s(c,"is-loading"),null===(e=c.querySelector(".f-spinner"))||void 0===e||e.remove())}function V(){if(!c||!O)return;if(N(),p(O)&&(!O.complete||!O.naturalWidth))return P=2,null==k||k.classList.add("has-error"),void q("error");q("loaded");const{width:e,height:t}=J();p(O)&&(O.setAttribute("width",e+""),O.setAttribute("height",t+"")),k&&(removeClass_s(k,"has-error"),p(O)&&(k.setAttribute("width",e+""),k.setAttribute("height",t+""),k.style.aspectRatio=`${e/t||""}`)),F=tween_c().on("start",(e,t)=>{void 0!==t.angle&&(t.angle=90*Math.round(t.angle/90)),void 0!==t.flipX&&(t.flipX=t.flipX>0?1:-1),void 0!==t.flipY&&(t.flipY=t.flipY>0?1:-1),z=Object.assign(Object.assign({},y),t),le(),q("animationStart")}).on("pause",e=>{z=Object.assign(Object.assign({},y),e)}).on("step",e=>{if(!W())return void(null==F||F.end());if(R=Object.assign(Object.assign({},y),e),Q()||!I("bounds")||be()||z.scale>R.scale||z.scale<oe())return void ue();const t=ae(z.scale);let n=!1,o=!1,s=!1,a=!1;R.x<t.x[0]&&(n=!0),R.x>t.x[1]&&(o=!0),R.y<t.y[0]&&(a=!0),R.y>t.y[1]&&(s=!0);let r=!1,l=!1,c=!1,u=!1;z.x<t.x[0]&&(r=!0),z.x>t.x[1]&&(l=!0),z.y<t.y[0]&&(u=!0),z.y>t.y[1]&&(c=!0);let d=!1;(o&&l||n&&r)&&(z.x=clamp_t(t.x[0],z.x,t.x[1]),d=!0),(s&&c||a&&u)&&(z.y=clamp_t(t.y[0],z.y,t.y[1]),d=!0),d&&F&&F.spring({tension:94,friction:17,maxSpeed:555*z.scale,restDelta:.1,restSpeed:.1,velocity:F.getCurrentVelocities()}).from(R).to(z).start(),ue()}).on("end",()=>{(null==C?void 0:C.isPointerDown())||re(),(null==F?void 0:F.isRunning())||(le(),q("animationEnd"))}),function(){const e=I("gestures");if(!e)return;if(!A||!O)return;let t=!1;C=f(A,e).on("start",e=>{if(!I("gestures"))return;if(!F)return;if(!W()||Q())return;const n=e.srcEvent;(R.scale>1||e.currentTouch.length>1)&&(null==n||n.stopPropagation(),F.pause(),t=!0),1===e.currentTouch.length&&q("touchStart")}).on("move",e=>{var n;t&&(1!==z.scale||e.currentTouch.length>1)&&(h(e.srcEvent),null===(n=e.srcEvent)||void 0===n||n.stopPropagation())}).on("pan",e=>{if(!t)return;const n=e.srcEvent;(1!==z.scale||e.currentTouch.length>1)&&(h(n),ce(v.Pan,e))}).on("swipe",e=>{t&&z.scale>1&&ce(v.Swipe,e)}).on("tap",e=>{q("click",e)}).on("singleTap",e=>{q("singleClick",e)}).on("doubleTap",e=>{q("dblClick",e)}).on("pinch",e=>{t&&(e.scale>oe()?ce(v.ZoomIn,e):e.scale<oe()?ce(v.ZoomOut,e):ce(v.Pan,e))}).on("end",e=>{t&&(e.currentTouch.length?(e.srcEvent.stopPropagation(),h(e.srcEvent),null==F||F.end()):(t=!1,le(),re(),q("touchEnd")))}).init()}(),A&&(A.addEventListener("wheel",H,{passive:!1}),D.push(()=>{null==A||A.removeEventListener("wheel",H,{passive:!1})})),null==c||c.addEventListener("click",_),null===document||void 0===document||document.addEventListener("mousemove",B),D.push(()=>{null==c||c.removeEventListener("click",_),null===document||void 0===document||document.removeEventListener("mousemove",B)});const n=U();R=Object.assign({},n),z=Object.assign({},n),P=3,ue(),le(),q("ready"),requestAnimationFrame(()=>{3===P&&(N(),A&&(A.style.visibility=""))})}function U(){const e=Object.assign({},I("startPos")||{});let t=e.scale,n=1;n="string"==typeof t?te(t):"number"==typeof t?t:oe();const o=Object.assign(Object.assign(Object.assign({},y),e),{scale:n}),i=Q()?ee(n):void 0;if(i){const{x:e,y:t}=i;o.x=e,o.y=t}return o}function G(){const e={top:0,left:0,width:0,height:0};if(k){const t=k.getBoundingClientRect();z.angle%180==90?(e.top=t.top+.5*t.height-.5*t.width,e.left=t.left+.5*t.width-.5*t.height,e.width=t.height,e.height=t.width):(e.top=t.top,e.left=t.left,e.width=t.width,e.height=t.height)}return e}function J(){let t=I("width"),n=I("height");if(O&&"auto"===t){const e=O.getAttribute("width");t=e?parseFloat(e+""):void 0!==O.dataset.width?parseFloat(O.dataset.width+""):p(A)?A.naturalWidth:p(O)?O.naturalWidth:(null==k?void 0:k.getBoundingClientRect().width)||0}else t=isString_t(t)?parseFloat(t):t;if(O&&"auto"===n){const e=O.getAttribute("height");n=e?parseFloat(e+""):void 0!==O.dataset.height?parseFloat(O.dataset.height+""):p(A)?A.naturalHeight:p(O)?O.naturalHeight:(null==k?void 0:k.getBoundingClientRect().height)||0}else n=isString_t(n)?parseFloat(n):n;return{width:t,height:n}}function K(){const e=G();return{width:e.width,height:e.height}}function Q(){return"mousemove"===I("panMode")&&matchMedia("(hover: hover)").matches}function ee(e){const t=L||I("event"),n=null==k?void 0:k.getBoundingClientRect();if(!t||!n||e<=1)return{x:0,y:0};const o=(t.clientX||0)-n.left,s=(t.clientY||0)-n.top,{width:a,height:r}=K(),l=ae(e);if(e>1){const t=I("mouseMoveFactor");t>1&&(e*=t)}let c=a*e,u=r*e,d=.5*(c-a)-o/a*100/100*(c-a),f=.5*(u-r)-s/r*100/100*(u-r);return d=clamp_t(l.x[0],d,l.x[1]),f=clamp_t(l.y[0],f,l.y[1]),{x:d,y:f}}function te(e){if(!e)return z.scale;if(!c)return 1;const t=c.getBoundingClientRect(),n=G(),{width:o,height:s}=J(),a=e=>{if("number"==typeof e)return e;switch(e){case"min":case"base":return 1;case"cover":return Math.max(t.height/n.height,t.width/n.width)||1;case"full":case"max":{const e=z.angle%180==90?s:o;return e&&n.width?e/n.width:1}}},r=I("minScale"),l=I("maxScale"),u=Math.min(a("full"),a(r)),d="number"==typeof l?a("full")*l:Math.min(a("full"),a(l));switch(e){case"min":return u;case"base":return clamp_t(u,1,d);case"cover":return a("cover");case"full":return Math.min(d,a("full"));case"max":return d}}function ne(){return te("min")}function oe(){return te("base")}function ie(){return te("full")}function se(){return te("max")}function ae(e){const t={x:[0,0],y:[0,0]},n=null==c?void 0:c.getBoundingClientRect();if(!n)return t;const o=G(),i=n.width,s=n.height;let a=o.width,r=o.height,l=e=void 0===e?z.scale:e,u=e;if(Q()&&e>1){const t=I("mouseMoveFactor");t>1&&(a*e>i+.01&&(l*=t),r*e>s+.01&&(u*=t))}return a*=l,r*=u,e>1&&(a>i&&(t.x[0]=.5*(i-a),t.x[1]=.5*(a-i)),t.x[0]-=.5*(o.left-n.left),t.x[1]-=.5*(o.left-n.left),t.x[0]-=.5*(o.left+o.width-n.right),t.x[1]-=.5*(o.left+o.width-n.right),r>s&&(t.y[0]=.5*(s-r),t.y[1]=.5*(r-s)),t.y[0]-=.5*(o.top-n.top),t.y[1]-=.5*(o.top-n.top),t.y[0]-=.5*(o.top+o.height-n.bottom),t.y[1]-=.5*(o.top+o.height-n.bottom)),t}function re(){if(!W())return;if(!I("bounds"))return;if(!F)return;const e=ne(),t=se(),n=clamp_t(e,z.scale,t);if(z.scale<e-.01||z.scale>t+.01)return void ce(v.ZoomTo,{scale:n});if(F.isRunning())return;if(be())return;const o=ae(n);z.x<o.x[0]||z.x>o.x[1]||z.y<o.y[0]||z.y>o.y[1]?(z.x=clamp_t(o.x[0],z.x,o.x[1]),z.y=clamp_t(o.y[0],z.y,o.y[1]),F.spring({tension:170,friction:17,restDelta:.001,restSpeed:.001,maxSpeed:1/0,velocity:F.getCurrentVelocities()}),F.from(R).to(z).start()):ue()}function le(e){var t;if(!W())return;const n=ve(),o=be(),i=ye(),s=xe(),a=fe(),r=ge();toggleClass_s(k,"is-fullsize",s),toggleClass_s(k,"is-expanded",i),toggleClass_s(k,"is-dragging",o),toggleClass_s(k,"can-drag",n),toggleClass_s(k,"will-zoom-in",a),toggleClass_s(k,"will-zoom-out",r);const l=me(),u=pe(),d=he(),g=!W();for(const n of(null===(t=e||c)||void 0===t?void 0:t.querySelectorAll("[data-panzoom-action]"))||[]){const e=n.dataset.panzoomAction;let t=!1;if(g)t=!0;else switch(e){case v.ZoomIn:l||(t=!0);break;case v.ZoomOut:d||(t=!0);break;case v.ToggleFull:{u||d||(t=!0);const e=n.querySelector("g");e&&(e.style.display=s&&!t?"none":"");break}case v.IterateZoom:{l||d||(t=!0);const e=n.querySelector("g");e&&(e.style.display=l||t?"":"none");break}case v.ToggleCover:case v.ToggleMax:l||d||(t=!0)}t?(n.setAttribute("aria-disabled",""),n.setAttribute("tabindex","-1")):(n.removeAttribute("aria-disabled"),n.removeAttribute("tabindex"))}}function ce(e,t){var n;if(!(e&&c&&O&&F&&W()))return;if(e===v.Swipe&&Math.abs(F.getCurrentVelocities().scale)>.01)return;const o=Object.assign({},z);let s=Object.assign({},z),l=ae(Q()?o.scale:R.scale);const u=F.getCurrentVelocities(),d=G(),f=((null===(n=(t=t||{}).currentTouch)||void 0===n?void 0:n.length)||0)>1,h=t.velocityX||0,m=t.velocityY||0;let p=t.center;t.srcEvent&&(p=gestures_i(gestures_s(t.srcEvent)));let b=t.deltaX||0,x=t.deltaY||0;switch(e){case v.MoveRight:b=t.deltaX||100;break;case v.MoveLeft:b=t.deltaX||-100;break;case v.MoveUp:x=t.deltaY||-100;break;case v.MoveDown:x=t.deltaY||100}let w=[];if("number"==typeof e)s.scale=e;else switch(e){case v.Reset:s=Object.assign({},y),s.scale=oe();break;case v.ZoomTo:case v.ZoomIn:case v.ZoomOut:case v.ToggleCover:case v.ToggleFull:case v.ToggleMax:case v.IterateZoom:case v.Zoom:s.scale=de(e,t);break;case v.Pan:case v.Move:case v.MoveLeft:case v.MoveRight:case v.MoveUp:case v.MoveDown:if(be()){let e=1,t=1;s.x<=l.x[0]&&h<=0&&(e=Math.max(.01,1-Math.abs(1/d.width*Math.abs(s.x-l.x[0]))),e*=.2),s.x>=l.x[1]&&h>=0&&(e=Math.max(.01,1-Math.abs(1/d.width*Math.abs(s.x-l.x[1]))),e*=.2),s.y<=l.y[0]&&m<=0&&(t=Math.max(.01,1-Math.abs(1/d.height*Math.abs(s.y-l.y[0]))),t*=.2),s.y>=l.y[1]&&m>=0&&(t=Math.max(.01,1-Math.abs(1/d.height*Math.abs(s.y-l.y[1]))),t*=.2),s.x+=b*e,s.y+=x*t}else s.x=clamp_t(l.x[0],s.x+b,l.x[1]),s.y=clamp_t(l.y[0],s.y+x,l.y[1]);break;case v.Swipe:const n=(e=0)=>Math.sign(e)*Math.pow(Math.abs(e),1.5);s.x+=clamp_t(-1e3,n(h),1e3),s.y+=clamp_t(-1e3,n(m),1e3),m&&!h&&(s.x=clamp_t(l.x[0],s.x,l.x[1])),!m&&h&&(s.y=clamp_t(l.y[0],s.y,l.y[1])),u.x=h,u.y=m;break;case v.RotateCW:s.angle+=90;break;case v.RotateCCW:s.angle-=90;break;case v.FlipX:s.flipX*=-1;break;case v.FlipY:s.flipY*=-1}if(void 0!==R.angle&&Math.abs(R.angle)>=360&&(s.angle-=360*Math.floor(R.angle/360),R.angle-=360*Math.floor(R.angle/360)),w.length){const e=w.findIndex(e=>e>s.scale+1e-4);s.scale=w[e]||w[0]}if(f&&(s.scale=clamp_t(ne()*(f?.8:1),s.scale,se()*(f?1.6:1))),Q()){const e=ee(s.scale);if(e){const{x:t,y:n}=e;s.x=t,s.y=n}}else if(Math.abs(s.scale-o.scale)>1e-4){let e=0,t=0;if(p)e=p.x,t=p.y;else{const n=c.getBoundingClientRect();e=n.x+.5*n.width,t=n.y+.5*n.height}let n=e-d.left,a=t-d.top;n-=.5*d.width,a-=.5*d.height;const r=(n-o.x)/o.scale,u=(a-o.y)/o.scale;s.x=n-r*s.scale,s.y=a-u*s.scale,!f&&I("bounds")&&(l=ae(s.scale),s.x=clamp_t(l.x[0],s.x,l.x[1]),s.y=clamp_t(l.y[0],s.y,l.y[1]))}if(e===v.Swipe){let e=94,t=17,n=500*s.scale,o=u;F.spring({tension:e,friction:t,maxSpeed:n,restDelta:.1,restSpeed:.1,velocity:o})}else e===v.Pan||f?F.spring({tension:900,friction:17,restDelta:.01,restSpeed:.01,maxSpeed:1}):F.spring({tension:170,friction:17,restDelta:.001,restSpeed:.001,maxSpeed:1/0,velocity:u});if(0===t.velocity||isEqual_n(R,s))R=Object.assign({},s),z=Object.assign({},s),F.end(),ue(),le();else{if(isEqual_n(z,s))return;F.from(R).to(s).start()}q("action",e)}function ue(){if(!O||!k||!A)return;const{width:e,height:t}=J();Object.assign(k.style,{maxWidth:`min(${e}px, 100%)`,maxHeight:`min(${t}px, 100%)`});const n=function(){const{width:e,height:t}=J(),{width:n,height:o}=K();if(!c)return{x:0,y:0,width:0,height:0,scale:0,flipX:0,flipY:0,angle:0,fitWidth:n,fitHeight:o,fullWidth:e,fullHeight:t};let{x:i,y:s,scale:a,angle:r,flipX:l,flipY:u}=R,d=1/ie(),f=e,g=t,h=R.scale*d,m=z.scale*d;const p=Math.max(n,o),v=Math.min(n,o);e>t?(f=p,g=v):(f=v,g=p);h=e>t?p*a/e||1:p*a/t||1;let b=f?e*m:0,y=g?t*m:0,x=f&&g?e*h/b:0;return i=i+.5*f-.5*b,s=s+.5*g-.5*y,{x:i,y:s,width:b,height:y,scale:x,flipX:l,flipY:u,angle:r,fitWidth:n,fitHeight:o,fullWidth:e,fullHeight:t}}(),{x:o,y:i,width:s,height:a,scale:r,angle:l,flipX:u,flipY:d}=n;let f=`translate(${m(o)}px, ${m(i)}px)`;f+=1!==u||1!==d?` scaleX(${m(r*u)}) scaleY(${m(r*d)})`:` scale(${m(r)})`,0!==l&&(f+=` rotate(${l}deg)`),A.style.width=`${m(s)}px`,A.style.height=`${m(a)}px`,A.style.transform=`${f}`,q("render")}function de(e=I("clickAction"),t={}){let n=z.scale,o=oe(),s=[];if("number"==typeof e)o=e;else if(e){switch(e){case v.ZoomTo:o=t.scale||1;break;case v.ZoomIn:o=n*(t.scale||2);break;case v.ZoomOut:o=n*(t.scale||.5);break;case v.ToggleCover:s=[oe(),te("cover")];break;case v.ToggleFull:s=[oe(),ie()];break;case v.ToggleMax:s=[oe(),se()];break;case v.IterateZoom:s=[oe(),ie(),se()];break;case v.Zoom:const e=ie();o=n>=e-.05?oe():Math.min(e,n*(t.scale||2))}if(s.length){const e=s.findIndex(e=>e>n+1e-4);o=s[e]||oe()}}return e!==v.ZoomTo&&(o=clamp_t(ne(),o,se())),o}function fe(){return!!(W()&&de()>z.scale)}function ge(){return!!(W()&&de()<z.scale)}function he(){return!!(W()&&z.scale>ne())}function me(){return!!(W()&&z.scale<se())}function pe(){return!!(W()&&z.scale<ie())}function ve(){return!(!(W()&&ye()&&C)||Q())}function be(){return!(!W()||!(null==C?void 0:C.isPointerDown())||Q())}function ye(){return!!(W()&&z.scale>oe())}function xe(){return!!(W()&&z.scale>=ie())}function we(){const e="in-fullscreen",t="with-panzoom-in-fullscreen";null==c||c.classList.toggle(e);const n=null==c?void 0:c.classList.contains(e);n?(document.documentElement.classList.add(t),document.addEventListener("keydown",Me,!0)):(document.documentElement.classList.remove(t),document.removeEventListener("keydown",Me,!0)),ue(),q(n?"enterFS":"exitFS")}function Me(e){"Escape"!==e.key||e.defaultPrevented||we()}const je={canDrag:ve,canZoomIn:me,canZoomOut:he,canZoomToFull:pe,destroy:function(){q("destroy");for(const e of Object.values(Y))null==e||e.destroy(je);for(const e of D)e();return k&&(k.style.aspectRatio="",k.style.maxWidth="",k.style.maxHeight=""),A&&(A.style.width="",A.style.height="",A.style.transform=""),k=void 0,O=void 0,A=void 0,R=Object.assign({},y),z=Object.assign({},y),null==F||F.destroy(),F=void 0,null==C||C.destroy(),C=void 0,P=4,je},emit:q,execute:ce,getBoundaries:ae,getContainer:function(){return c},getContent:function(){return O},getFullDim:J,getGestures:function(){return C},getMousemovePos:ee,getOptions:function(){return X},getPlugins:function(){return Y},getScale:te,getStartPosition:U,getState:function(){return P},getTransform:function(e){return!0===e?z:R},getTween:function(){return F},getViewport:function(){return A},getWrapper:function(){return k},init:function(){return P=0,q("init"),function(){for(const[e,t]of Object.entries(Object.assign(Object.assign({},S),X.plugins||{})))if(e&&!Y[e]&&t instanceof Function){const n=t();n.init(je),Y[e]=n}q("initPlugins")}(),function(){var e,t,n;const o=Object.assign(Object.assign({},x.classes),I("classes")),i=null===(e=o.content)||void 0===e?void 0:e.split(" ").shift(),s=null===(t=o.wrapper)||void 0===t?void 0:t.split(" ").shift(),a=null===(n=o.viewport)||void 0===n?void 0:n.split(" ").shift();if(!i||!s||!a)return;if(!c)return;if(addClass_s(c,o.container),O=c.querySelector(`.${i}:not(.is-clone)`),!O)return;O.setAttribute("draggable","false"),k=c.querySelector(`.${s}`),k||(k=document.createElement("div"),addClass_s(k,o.wrapper),O.insertAdjacentElement("beforebegin",k),k.insertAdjacentElement("afterbegin",O));A=c.querySelector(`.${a}`),A||(A=document.createElement("div"),addClass_s(A,o.viewport),k.insertAdjacentElement("beforeend",A));A.contains(O)||A.insertAdjacentElement("afterbegin",O);T=c.querySelector(`.${i}.is-clone`),T||(T=O.cloneNode(!0),T.removeAttribute("id"),addClass_s(T,"is-clone"),k.insertAdjacentElement("afterbegin",T));O instanceof HTMLPictureElement&&(O=O.querySelector("img"));T instanceof HTMLPictureElement&&(T=T.querySelector("img"));A instanceof HTMLPictureElement&&(A=A.querySelector("img"));if(A&&(A.style.visibility="hidden",I("protected"))){A.addEventListener("contextmenu",e=>{h(e)});const e=document.createElement("div");addClass_s(e,"f-panzoom__protected"),A.appendChild(e)}q("initLayout")}(),function(){if(c&&k&&!Z){let e=null;Z=new ResizeObserver(()=>{W()&&(e=e||requestAnimationFrame(()=>{W()&&(le(),re(),q("refresh")),e=null}))}),Z.observe(k),D.push(()=>{null==Z||Z.disconnect(),Z=void 0,e&&(cancelAnimationFrame(e),e=null)})}}(),function(){if(!c||!O)return;if(!p(O)||!p(T))return void V();const e=()=>{O&&p(O)&&O.decode().then(()=>{V()}).catch(()=>{V()})};if(P=1,c.classList.add("is-loading"),q("loading"),T.src&&T.complete)return void e();(function(){if(!c)return;if(null==c?void 0:c.querySelector(".f-spinner"))return;const e=I("spinnerTpl"),t=strToHtml_e(e);t&&(t.classList.add("f-spinner"),c.classList.add("is-loading"),null==k||k.insertAdjacentElement("afterbegin",t))})(),T.addEventListener("load",e,!1),T.addEventListener("error",e,!1),D.push(()=>{null==T||T.removeEventListener("load",e,!1),null==T||T.removeEventListener("error",e,!1)})}(),je},isDragging:be,isExpanded:ye,isFullsize:xe,isMousemoveMode:Q,localize:function(e,t=[]){const n=I("l10n")||{};e=String(e).replace(/\{\{(\w+)\}\}/g,(e,t)=>n[t]||e);for(let n=0;n<t.length;n++)e=e.split(t[n][0]).join(t[n][1]);return e=e.replace(/\{\{(.*?)\}\}/g,(e,t)=>t)},off:function(e,t){for(const n of e instanceof Array?e:[e])$.has(n)&&$.set(n,$.get(n).filter(e=>e!==t));return je},on:function(e,t){for(const n of e instanceof Array?e:[e])$.set(n,[...$.get(n)||[],t]);return je},toggleFS:we,updateControls:le,version:"6.1.13",willZoomIn:fe,willZoomOut:ge};return je};S.l10n={en_EN:en_EN_e},S.getDefaults=()=>x;

;// ./node_modules/@fancyapps/ui/dist/utils/getDirectChildren.js
/*! License details at fancyapps.com/license */
const getDirectChildren_e=(e,o)=>{let t=[];return e.childNodes.forEach(e=>{e.nodeType!==Node.ELEMENT_NODE||o&&!e.matches(o)||t.push(e)}),t};

;// ./node_modules/@fancyapps/ui/dist/carousel/l10n/en_EN.js
/*! License details at fancyapps.com/license */
const en_EN_o=Object.assign(Object.assign({},en_EN_e),{ERROR:"Something went wrong. <br /> Please try again later.",NEXT:"Next page",PREV:"Previous page",GOTO:"Go to page #%d",DOWNLOAD:"Download",TOGGLE_FULLSCREEN:"Toggle full-screen mode",TOGGLE_EXPAND:"Toggle full-size mode",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_AUTOPLAY:"Toggle slideshow"});

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.js
/*! License details at fancyapps.com/license */
const carousel_m=t=>{t.cancelable&&t.preventDefault()},carousel_h={adaptiveHeight:!1,center:!0,classes:{container:"f-carousel",isEnabled:"is-enabled",isLTR:"is-ltr",isRTL:"is-rtl",isHorizontal:"is-horizontal",isVertical:"is-vertical",hasAdaptiveHeight:"has-adaptive-height",viewport:"f-carousel__viewport",slide:"f-carousel__slide",isSelected:"is-selected"},dragFree:!1,enabled:!0,errorTpl:'<div class="f-html">{{ERROR}}</div>',fill:!1,infinite:!0,initialPage:0,l10n:en_EN_o,rtl:!1,slides:[],slidesPerPage:"auto",spinnerTpl:'<div class="f-spinner"></div>',transition:"fade",tween:{clamp:!0,mass:1,tension:160,friction:25,restDelta:1,restSpeed:1,velocity:0},vertical:!1};let carousel_b,carousel_y=0;const carousel_E=(g,x={},M={})=>{carousel_y++;let w,S,j,A,L,P=0,T=Object.assign({},carousel_h),O=Object.assign({},carousel_h),R={},H=null,V=null,C=0,D=0,$=0,q=!1,I=!1,F=!1,z="height",k=0,N=!0,B=0,_=0,G=0,X=0,Y="*",W=[],J=[];const K=new Set;let Q=[],U=[],Z=0,tt=0,et=0;function nt(t,...e){let n=O[t];return n&&n instanceof Function?n(It,...e):n}function it(t,e=[]){const n=nt("l10n")||{};t=String(t).replace(/\{\{(\w+)\}\}/g,(t,e)=>n[e]||t);for(let n=0;n<e.length;n++)t=t.split(e[n][0]).join(e[n][1]);return t=t.replace(/\{\{(.*?)\}\}/g,(t,e)=>e)}const ot=new Map;function st(t,...e){const n=[...ot.get(t)||[]];O.on&&n.push(O.on[t]);for(const t of n)t&&t instanceof Function&&t(It,...e);"*"!==t&&st("*",t,...e)}function rt(){var e,n;const i=extend_r({},carousel_h,T);extend_r(i,carousel_h,T);let r="";const l=T.breakpoints||{};if(l)for(const[t,e]of Object.entries(l))window.matchMedia(t).matches&&(r+=t,extend_r(i,e));if(void 0===L||r!==L){if(L=r,0!==P){let t=null===(n=null===(e=U[B])||void 0===e?void 0:e.slides[0])||void 0===n?void 0:n.index;void 0===t&&(t=O.initialSlide),i.initialSlide=t,i.slides=[];for(const t of W)t.isVirtual&&i.slides.push(t)}Dt(),O=i,!1!==nt("enabled")&&(P=0,st("init"),function(){for(const[t,e]of Object.entries(Object.assign(Object.assign({},M),O.plugins||{})))if(t&&!R[t]&&e instanceof Function){const n=e();n.init(It,carousel_E),R[t]=n}st("initPlugins")}(),function(){if(!H)return;const e=nt("classes")||{};addClass_s(H,e.container);const n=nt("style");if(n&&isPlainObject_t(n))for(const[t,e]of Object.entries(n))H.style.setProperty(t,e);V=H.querySelector(`.${e.viewport}`),V||(V=document.createElement("div"),addClass_s(V,e.viewport),V.append(...getDirectChildren_e(H,`.${e.slide}`)),H.insertAdjacentElement("afterbegin",V)),H.carousel=It,st("initLayout")}(),function(){if(!V)return;const t=nt("classes")||{};W=[],[...getDirectChildren_e(V,`.${t.slide}`)].forEach(t=>{if(t.parentElement){const e=yt(Object.assign({el:t,isVirtual:!1},t.dataset||{}));st("createSlide",e),W.push(e)}}),wt();for(const t of W)st("addSlide",t);bt(nt("slides"));for(const t of W){const e=t.el;(null==e?void 0:e.parentElement)===V&&(addClass_s(e,O.classes.slide),addClass_s(e,t.class),Rt(t),st("attachSlideEl",t))}st("initSlides")}(),St(),P=1,addClass_s(H,(nt("classes")||{}).isEnabled||""),Ct(),ut(),S=tween_c().on("start",()=>{w&&w.isPointerDown()||(dt(),Ct())}).on("step",t=>{const e=k;k=t.pos,k!==e&&(N=!1,Ct())}).on("end",t=>{(null==w?void 0:w.isPointerDown())||(k=t.pos,S&&!q&&(k<G||k>X)?S.spring({clamp:!0,mass:1,tension:200,friction:25,velocity:0,restDelta:1,restSpeed:1}).from({pos:k}).to({pos:clamp_t(G,k,X)}).start():N||(N=!0,st("settle")))}),at(),function(){if(!H||!V)return;H.addEventListener("click",Pt),document.addEventListener("mousemove",lt);const t=V.getBoundingClientRect();if(Z=t.height,tt=t.width,!j){let t=null;j=new ResizeObserver(()=>{t||(t=requestAnimationFrame(()=>{!function(){if(1!==P||!V)return;const t=U.length,e=V.getBoundingClientRect(),n=e.height,i=e.width;t>1&&(F&&Math.abs(n-Z)<.5||!F&&Math.abs(i-tt)<.5)||(St(),at(),Z=n,tt=i,F&&!Z||!F&&!tt||H&&V&&(t===U.length&&(null==w?void 0:w.isPointerDown())||(nt("dragFree")&&(q||k>G&&k<X)?(dt(),Ct()):Ht(B,{transition:!1}))))}(),t=null}))}),j.observe(V)}}(),st("ready"))}}function lt(t){carousel_b=t}function at(){!1===nt("gestures")?w&&(w.destroy(),w=void 0):w||function(){const t=nt("gestures");!w&&!1!==t&&V&&(w=f(V,t).on("start",t=>{var e,n;if(!S)return;if(!1===nt("gestures",t))return;const{srcEvent:o}=t;F&&gestures_e(o)&&!getScrollableParent_n(o.target)&&carousel_m(o),S.pause(),S.getCurrentVelocities().pos=0;const s=null===(e=U[B])||void 0===e?void 0:e.slides[0],r=null==s?void 0:s.el;s&&K.has(s.index)&&r&&(k=s.offset||0,k+=(function(t){const e=window.getComputedStyle(t),n=new DOMMatrixReadOnly(e.transform);return{width:n.m41||0,height:n.m42||0}}(r)[z]||0)*(I&&!F?1:-1)),At(),q||(k<G||k>X)&&S.spring({clamp:!0,mass:1,tension:500,friction:25,velocity:(null===(n=S.getCurrentVelocities())||void 0===n?void 0:n.pos)||0,restDelta:1,restSpeed:1}).from({pos:k}).to({pos:clamp_t(G,k,X)}).start()}).on("move",t=>{var e,n;if(!1===nt("gestures",t))return;const{srcEvent:o,axis:s,deltaX:r,deltaY:l}=t;if(gestures_e(o)&&(null===(e=o.touches)||void 0===e?void 0:e.length)>1)return;const a=o.target,c=getScrollableParent_n(a),d=c?c.scrollHeight>c.clientHeight?"y":"x":void 0;if(c&&c!==V&&(!s||s===d))return;if(!s)return carousel_m(o),o.stopPropagation(),void o.stopImmediatePropagation();if("y"===s&&!F||"x"===s&&F)return;if(carousel_m(o),o.stopPropagation(),!S)return;const u=I&&!F?1:-1,f=F?l:r;let v=(null==S?void 0:S.isRunning())?S.getEndValues().pos:k,g=1;q||(v<=G&&f*u<0?(g=Math.max(.01,1-(Math.abs(1/gt()*Math.abs(v-G))||0)),g*=.2):v>=X&&f*u>0&&(g=Math.max(.01,1-(Math.abs(1/gt()*Math.abs(v-X))||0)),g*=.2)),v+=f*g*u,S.spring({clamp:!0,mass:1,tension:700,friction:25,velocity:(null===(n=S.getCurrentVelocities())||void 0===n?void 0:n.pos)||0,restDelta:1,restSpeed:1}).from({pos:k}).to({pos:v}).start()}).on("panstart",t=>{!1!==nt("gestures",t)&&(null==t?void 0:t.axis)===(F?"y":"x")&&addClass_s(V,"is-dragging")}).on("panend",t=>{!1!==nt("gestures",t)&&removeClass_s(V,"is-dragging")}).on("end",t=>{var e,n;if(!1===nt("gestures",t))return;const{srcEvent:o,axis:s,velocityX:r,velocityY:l,currentTouch:c}=t;if(c.length>0||!S)return;const d=o.target,u=getScrollableParent_n(d),f=u?u.scrollHeight>u.clientHeight?"y":"x":void 0,v=u&&(!s||s===f);F&&gestures_e(o)&&!s&&Pt(o);const g=U.length,m=nt("dragFree");if(!g)return;let h=v?0:nt("vertical")?l:r;s!==(F?"y":"x")&&(h=0);let b=(null==S?void 0:S.isRunning())?S.getEndValues().pos:k;const y=I&&!F?1:-1;if(v||(b+=h*(m?5:1)*y),!q&&(h*y<=0&&b<G||h*y>=0&&b>X)){let t=0;return Math.abs(h)>0&&(t=2*Math.abs(h),t=Math.min(.3*gt(),t)),b=clamp_t(G+-1*t,b,X+t),void S.spring({clamp:!0,mass:1,tension:380,friction:25,velocity:-1*h,restDelta:1,restSpeed:1}).from({pos:k}).to({pos:b}).start()}if(m||(null===(e=R.Autoscroll)||void 0===e?void 0:e.isEnabled()))return void(Math.abs(h)>10?S.spring({clamp:!0,mass:1,tension:150,friction:25,velocity:-1*h,restDelta:1,restSpeed:1}).from({pos:k}).to({pos:b}).start():S.isRunning()||N||(N=!0,st("settle")));if(!m&&!(null===(n=R.Autoscroll)||void 0===n?void 0:n.isEnabled())&&(!t.offsetX&&!t.offsetY||"y"===s&&!F||"x"===s&&F))return void Ht(B,{transition:"tween"});let E=vt(b);Math.abs(h)>10&&E===B&&(E+=h>0?I&&!F?1:-1:I&&!F?-1:1),Ht(E,{transition:"tween",tween:{velocity:-1*h}})}).init())}(),toggleClass_s(V,"is-draggable",!!w&&U.length>0)}function ct(t="*"){var e;const n=[];for(const i of W)("*"===t||i.class&&i.class.includes(t)||i.el&&(null===(e=i.el)||void 0===e?void 0:e.classList.contains(t)))&&n.push(i);A=void 0,Y=t,J=[...n]}function dt(){if(!S)return;const t=vt((null==S?void 0:S.isRunning())?S.getEndValues().pos:k);t!==B&&(A=B,B=t,Rt(),ut(),ft(),st("change",B,A))}function ut(){var t,e;if(!H)return;for(const t of H.querySelectorAll("[data-carousel-index]"))t.innerHTML=B+"";for(const t of H.querySelectorAll("[data-carousel-page]"))t.innerHTML=B+1+"";for(const t of H.querySelectorAll("[data-carousel-pages]"))t.innerHTML=U.length+"";for(const e of H.querySelectorAll("[data-carousel-go-to]")){parseInt((null===(t=e.dataset)||void 0===t?void 0:t.carouselGoTo)||"-1",10)===B?e.setAttribute("aria-current","true"):e.removeAttribute("aria-current")}for(const t of H.querySelectorAll("[data-carousel-go-prev]"))t.toggleAttribute("aria-disabled",!$t()),$t()?t.removeAttribute("tabindex"):t.setAttribute("tabindex","-1");for(const t of H.querySelectorAll("[data-carousel-go-next]"))t.toggleAttribute("aria-disabled",!qt()),qt()?t.removeAttribute("tabindex"):t.setAttribute("tabindex","-1");let n=!1;const i=null===(e=U[B])||void 0===e?void 0:e.slides[0];i&&(i.downloadSrc||"image"===i.type&&i.src)&&(n=!0);for(const t of H.querySelectorAll("[data-carousel-download]"))t.toggleAttribute("aria-disabled",!n)}function ft(t){var e;t||(t=null===(e=U[B])||void 0===e?void 0:e.slides[0]);const n=null==t?void 0:t.el;if(n)for(const e of n.querySelectorAll("[data-slide-index]"))e.innerHTML=t.index+1+""}function vt(t){var e,n,i;if(!U.length)return 0;const o=mt();let s=t;q?s-=Math.floor((t-(null===(e=U[0])||void 0===e?void 0:e.pos))/o)*o||0:s=clamp_t(null===(n=U[0])||void 0===n?void 0:n.pos,t,null===(i=U[U.length-1])||void 0===i?void 0:i.pos);const r=new Map;let l=0;for(const t of U){const e=Math.abs(t.pos-s),n=Math.abs(t.pos-s-o),i=Math.abs(t.pos-s+o),a=Math.min(e,n,i);r.set(l,a),l++}const c=r.size>0?[...r.entries()].reduce((t,e)=>e[1]<t[1]?e:t):[B,0];return parseInt(c[0])}function pt(){return et}function gt(){return C}function mt(t=!0){return J.length?J.reduce((t,e)=>t+e.dim,0)+(J.length-(q&&t?0:1))*et:0}function ht(t){const e=mt(),n=gt();if(!e||!V||!n)return[];const i=[];t=void 0===t?k:t,q&&(t-=Math.floor(t/e)*e||0);let o=0;for(let s of J){const r=(e=0)=>{i.indexOf(s)>-1||(s.pos=o-t+e||0,s.offset+e>t-s.dim-D+.51&&s.offset+e<t+n+$-.51&&i.push(s))};s.offset=o,q&&(r(e),r(-1*e)),r(),o+=s.dim+et}return i}function bt(t,e){const n=[];for(const e of Array.isArray(t)?t:[t]){const t=yt(Object.assign(Object.assign({},e),{isVirtual:!0}));t.el||(t.el=document.createElement("div")),st("createSlide",t),n.push(t)}W.splice(void 0===e?W.length:e,0,...n),wt();for(const t of n)st("addSlide",t),Et(t);return ct(Y),n}function yt(t){return(isString_t(t)||t instanceof HTMLElement)&&(t={html:t}),Object.assign({index:-1,el:void 0,class:"",isVirtual:!0,dim:0,pos:0,offset:0,html:"",src:""},t)}function Et(t){let e=t.el;if(!t||!e)return;const n=t.html?t.html instanceof HTMLElement?t.html:strToHtml_e(t.html):void 0;n&&(addClass_s(n,"f-html"),t.htmlEl=n,addClass_s(e,"has-html"),e.append(n),st("contentReady",t))}function xt(t){if(!V||!t)return;let e=t.el;if(e){if(e.setAttribute("index",t.index+""),e.parentElement!==V){let n;addClass_s(e,O.classes.slide),addClass_s(e,t.class),Rt(t);for(const e of W)if(e.index>t.index){n=e.el;break}V.insertBefore(e,n&&V.contains(n)?n:null),st("attachSlideEl",t)}return ft(t),e}}function Mt(t){const e=null==t?void 0:t.el;e&&(e.remove(),jt(e),st("detachSlideEl",t))}function wt(){for(let t=0;t<W.length;t++){const e=W[t],n=e.el;n&&(e.index!==t&&jt(n),n.setAttribute("index",`${t}`)),e.index=t}}function St(){var t,n,i,o,s;if(!H||!V)return;I=nt("rtl"),F=nt("vertical"),z=F?"height":"width";const r=nt("classes");if(toggleClass_s(H,r.isLTR,!I),toggleClass_s(H,r.isRTL,I),toggleClass_s(H,r.isHorizontal,!F),toggleClass_s(H,r.isVertical,F),toggleClass_s(H,r.hasAdaptiveHeight,nt("adaptiveHeight")),C=0,D=0,$=0,et=0,V){V.childElementCount||(V.style.display="grid");const t=V.getBoundingClientRect();C=V.getBoundingClientRect()[z]||0;const e=window.getComputedStyle(V);et=parseFloat(e.getPropertyValue("--f-carousel-gap"))||0;"visible"===e.getPropertyValue("overflow-"+(F?"y":"x"))&&(D=Math.abs(t[F?"top":"left"]),$=Math.abs(window[F?"innerHeight":"innerWidth"]-t[F?"bottom":"right"])),V.style.display=""}if(!C)return;const l=function(){let t=0;if(V){let e=document.createElement("div");e.style.display="block",addClass_s(e,O.classes.slide),V.appendChild(e),t=e.getBoundingClientRect()[z],e.remove(),e=void 0}return t}();for(const n of J){const i=n.el;let o=0;if(!n.isVirtual&&i&&isNode_n(i)){let e=!1;i.parentElement&&i.parentElement===V||(V.appendChild(i),e=!0),o=i.getBoundingClientRect()[z],e&&(null===(t=i.parentElement)||void 0===t||t.removeChild(i))}else o=l;n.dim=o}if(q=!1,nt("infinite")){q=!0;const t=mt();let e=C+D+$;for(let i=0;i<J.length;i++){const o=(null===(n=J[i])||void 0===n?void 0:n.dim)+et;if(t-o<e&&t-o-e<o){q=!1;break}}}!function(){var t;if(!H)return;const e=gt(),n=mt(!1);let i=nt("slidesPerPage");i="auto"===i?1/0:parseFloat(i+""),U=[];let o=0,s=0;for(const n of J)(!U.length||o+n.dim-e>.05||s>=i)&&(U.push({index:U.length,slides:[],dim:0,offset:0,pos:0}),o=0,s=0),null===(t=U[U.length-1])||void 0===t||t.slides.push(n),o+=n.dim+et,s++;const r=nt("center"),l=nt("fill");let c=0;for(const t of U){t.dim=(t.slides.length-1)*et;for(const e of t.slides)t.dim+=e.dim;t.offset=c,t.pos=c,!1!==r&&(t.pos-=.5*(e-t.dim)),l&&!q&&n>e&&(t.pos=clamp_t(0,t.pos,n-e)),c+=t.dim+et}const d=[];let u;for(const t of U){const e=Object.assign({},t);u&&Math.abs(e.pos-u.pos)<.1?(u.dim+=e.dim,u.slides=[...u.slides,...e.slides]):(u=e,e.index=d.length,d.push(e))}U=d,B=clamp_t(0,B,U.length-1)}(),G=(null===(i=U[0])||void 0===i?void 0:i.pos)||0,X=(null===(o=U[U.length-1])||void 0===o?void 0:o.pos)||0,0===P?function(){var t;A=void 0,B=nt("initialPage");const e=nt("initialSlide")||void 0;void 0!==e&&(B=It.getPageIndex(e)||0),B=clamp_t(0,B,U.length-1),k=(null===(t=U[B])||void 0===t?void 0:t.pos)||0,_=k}():_=(null===(s=U[B||0])||void 0===s?void 0:s.pos)||0,st("refresh"),ut()}function jt(t){if(!t||!isNode_n(t))return;const n=parseInt(t.getAttribute("index")||"-1");let i="";for(const e of Array.from(t.classList)){const t=e.match(/^f-(\w+)(Out|In)$/);t&&t[1]&&(i=t[1]+"")}if(!t||!i)return;const o=[`f-${i}Out`,`f-${i}In`,"to-prev","to-next","from-prev","from-next"];t.removeEventListener("animationend",Lt),removeClass_s(t,o.join(" ")),K.delete(n)}function At(){if(!V)return;const t=K.size>0;for(const t of J)jt(t.el);K.clear(),t&&Ct()}function Lt(t){var e;"f-"===(null===(e=t.animationName)||void 0===e?void 0:e.substring(0,2))&&(jt(t.target),K.size||(removeClass_s(H,"in-transition"),!N&&Math.abs(It.getPosition(!0)-_)<.5&&(N=!0,st("settle"))),Ct())}function Pt(t){var e;if(t.defaultPrevented)return;const n=t.composedPath()[0];if(n.closest("[data-carousel-go-prev]"))return carousel_m(t),void It.prev();if(n.closest("[data-carousel-go-next]"))return carousel_m(t),void It.next();const i=n.closest("[data-carousel-go-to]");if(i)return carousel_m(t),void It.goTo(parseFloat(i.dataset.carouselGoTo||"")||0);if(n.closest("[data-carousel-download]")){carousel_m(t);const n=null===(e=U[B])||void 0===e?void 0:e.slides[0];if(n&&(n.downloadSrc||"image"===n.type&&n.src)){const t=n.downloadFilename,e=document.createElement("a"),i=n.downloadSrc||n.src||"";e.href=i,e.target="_blank",e.download=t||i,e.click()}return}st("click",t)}function Tt(t){var e;const n=t.el;n&&(null===(e=n.querySelector(".f-spinner"))||void 0===e||e.remove())}function Ot(t){var e;const n=t.el;n&&(null===(e=n.querySelector(".f-html.is-error"))||void 0===e||e.remove(),removeClass_s(n,"has-error"))}function Rt(t){var e;t||(t=null===(e=U[B])||void 0===e?void 0:e.slides[0]);const i=null==t?void 0:t.el;if(!i)return;let o=nt("formatCaption",t);void 0===o&&(o=t.caption),o=o||"";const s=nt("captionEl");if(s&&s instanceof HTMLElement){if(t.index!==B)return;if(isString_t(o)&&(s.innerHTML=it(o+"")),o instanceof HTMLElement){if(o.parentElement===s)return;s.innerHTML="",o.parentElement&&(o=o.cloneNode(!0)),s.append(o)}return}if(!o)return;let r=t.captionEl||i.querySelector(".f-caption");!r&&o instanceof HTMLElement&&o.classList.contains("f-caption")&&(r=o),r||(r=document.createElement("div"),addClass_s(r,"f-caption"),isString_t(o)?r.innerHTML=it(o+""):o instanceof HTMLElement&&(o.parentElement&&(o=o.cloneNode(!0)),r.append(o)));const l=`f-caption-${carousel_y}_${t.index}`;r.setAttribute("id",l),r.dataset.selectable="true",addClass_s(i,"has-caption"),i.setAttribute("aria-labelledby",l),t.captionEl=r,i.insertAdjacentElement("beforeend",r)}function Ht(e,i={}){var o,r;let{transition:l,tween:u}=Object.assign({transition:O.transition,tween:O.tween},i||{});if(!H||!S)return;const f=U.length;if(!f)return;if(function(t,e){var i,o,s;if(!(H&&C&&S&&e&&isString_t(e)&&"tween"!==e))return!1;for(const t of Q)if(C-t.dim>.5)return!1;if(D>.5||$>.5)return;const r=U.length;let l=t>B?1:-1;t=q?(t%r+r)%r:clamp_t(0,t,r-1),I&&(l*=-1);const u=null===(i=U[B])||void 0===i?void 0:i.slides[0],f=null==u?void 0:u.index,v=null===(o=U[t])||void 0===o?void 0:o.slides[0],p=null==v?void 0:v.index,g=null===(s=U[t])||void 0===s?void 0:s.pos;if(void 0===p||void 0===f||f===p||k===g||Math.abs(C-((null==v?void 0:v.dim)||0))>1)return!1;N=!1,S.pause(),At(),addClass_s(H,"in-transition"),k=_=g;const m=xt(u),h=xt(v);return dt(),m&&(K.add(f),m.style.transform="",m.addEventListener("animationend",Lt),removeClass_s(m,O.classes.isSelected),m.inert=!1,addClass_s(m,`f-${e}Out to-${l>0?"next":"prev"}`)),h&&(K.add(p),h.style.transform="",h.addEventListener("animationend",Lt),addClass_s(h,O.classes.isSelected),h.inert=!1,addClass_s(h,`f-${e}In from-${l>0?"prev":"next"}`)),Ct(),!0}(e,l))return;e=q?(e%f+f)%f:clamp_t(0,e,f-1);const v=(null===(o=U[e||0])||void 0===o?void 0:o.pos)||0;_=v;const p=S.isRunning()?S.getEndValues().pos:k;if(Math.abs(_-p)<1)return k=_,B!==e&&(Rt(),A=B,B=e,ut(),ft(),st("change",B,A)),Ct(),void(N||(N=!0,st("settle")));if(S.pause(),At(),q){const t=mt(),e=Math.floor((p-(null===(r=U[0])||void 0===r?void 0:r.pos))/t)||0,n=_+e*t;_=[n+t,n,n-t].reduce(function(t,e){return Math.abs(e-p)<Math.abs(t-p)?e:t})}!1!==l&&isPlainObject_t(u)?S.spring(extend_r({},O.tween,u)).from({pos:k}).to({pos:_}).start():(k=_,dt(),Ct(),N||(N=!0,st("settle")))}function Vt(t){var e;let n=k;if(q&&!0!==t){const t=mt();n-=(Math.floor((k-(null===(e=U[0])||void 0===e?void 0:e.pos)||0)/t)||0)*t}return n}function Ct(){var t;if(!H||!V)return;Q=ht();const e=new Set,n=[],i=U[B],s=O.setTransform;let l;for(const o of J){const s=K.has(o.index),r=Q.indexOf(o)>-1,a=(null===(t=null==i?void 0:i.slides)||void 0===t?void 0:t.indexOf(o))>-1;if(o.isVirtual&&!s&&!r)continue;let c=xt(o);if(c&&(n.push(o),a&&e.add(c),nt("adaptiveHeight")&&a)){const t=(c.lastElementChild||c).getBoundingClientRect().height;l=null==l?t:Math.max(l,t)}}V&&l&&(V.style.height=`${l}px`),[...getDirectChildren_e(V,`.${O.classes.slide}`)].forEach(t=>{toggleClass_s(t,O.classes.isSelected,e.has(t));const n=W[parseInt(t.getAttribute("index")||"-1")];if(!n)return t.remove(),void jt(t);const i=K.has(n.index),o=Q.indexOf(n)>-1;if(n.isVirtual&&!i&&!o)return void Mt(n);if(t.inert=!o,!1===s)return;let l=n.pos?Math.round(1e4*n.pos)/1e4:0,a=0,c=0,d=0,f=0;i||(a=F?0:I?-1*l:l,c=F?l:0,d=map_t(a,0,n.dim,0,100),f=map_t(c,0,n.dim,0,100)),s instanceof Function&&!i?s(It,n,{x:a,y:c,xPercent:d,yPercent:f}):t.style.transform=a||c?`translate3d(${d}%, ${f}%,0)`:""}),st("render",n)}function Dt(){null==H||H.removeEventListener("click",Pt),document.removeEventListener("mousemove",lt),K.clear(),null==j||j.disconnect(),j=void 0;for(const t of W){let n=t.el;n&&isNode_n(n)&&(t.state=void 0,Tt(t),Ot(t),t.isVirtual?(Mt(t),t.el=void 0):(jt(n),n.style.transform="",V&&!V.contains(n)&&V.appendChild(n)))}for(const t of Object.values(R))null==t||t.destroy();R={},null==w||w.destroy(),w=void 0,null==S||S.destroy(),S=void 0;for(const[t,e]of Object.entries(O.classes||{}))"container"!==t&&removeClass_s(H,e);removeClass_s(V,"is-draggable")}function $t(){return q||B>0}function qt(){return q||B<U.length-1}const It={add:function(t,e){var n;let i=k;const o=B,s=mt(),r=(null==S?void 0:S.isRunning())?S.getEndValues().pos:k,l=s&&Math.floor((r-((null===(n=U[0])||void 0===n?void 0:n.pos)||0))/s)||0;return bt(t,e),ct(Y),St(),S&&s&&(o===B&&(i-=l*s),i===_?k=_:S.spring({clamp:!0,mass:1,tension:300,friction:25,restDelta:1,restSpeed:1}).from({pos:i}).to({pos:_}).start()),Ct(),It},canGoPrev:$t,canGoNext:qt,destroy:function(){return st("destroy"),window.removeEventListener("resize",rt),Dt(),ot.clear(),H=null,U=[],W=[],O=Object.assign({},carousel_h),R={},J=[],L=void 0,Y="*",P=2,It},emit:st,filter:function(t="*"){return ct(t),St(),k=clamp_t(G,k,X),Ct(),st("filter",t),It},getContainer:function(){return H},getGapDim:pt,getGestures:function(){return w},getLastMouseMove:function(){return carousel_b},getOption:function(t){return nt(t)},getOptions:function(){return O},getPage:function(){return U[B]},getPageIndex:function(t){if(void 0!==t){for(const e of U||[])for(const n of e.slides)if(n.index===t)return e.index;return-1}return B},getPageIndexFromPosition:vt,getPageProgress:function(t,e){var n;void 0===t&&(t=B);const i=U[t];if(!i)return t>B?-1:1;const o=mt(),s=pt();let r=i.pos,l=Vt();if(q&&!0!==e){const t=Math.floor((l-(null===(n=U[0])||void 0===n?void 0:n.pos))/o)||0;l-=t*o,r=[r+o,r,r-o].reduce(function(t,e){return Math.abs(e-l)<Math.abs(t-l)?e:t})}return(l-r)/(i.dim+s)||0},getPageVisibility:function(t){var e;void 0===t&&(t=B);const n=U[t];if(!n)return t>B?-1:1;const i=Vt(),o=gt();let s=n.pos;if(q){const t=mt(),n=s+(Math.floor((i-(null===(e=U[0])||void 0===e?void 0:e.pos))/t)||0)*t;s=[n+t,n,n-t].reduce(function(t,e){return Math.abs(e-i)<Math.abs(t-i)?e:t})}return s>i&&s+n.dim<i+o?1:s<i?(s+n.dim-i)/n.dim||0:s+n.dim>i+o&&(i+o-s)/n.dim||0},getPages:function(){return U},getPlugins:function(){return R},getPosition:Vt,getSlides:function(){return W},getState:function(){return P},getTotalSlideDim:mt,getTween:function(){return S},getViewport:function(){return V},getViewportDim:gt,getVisibleSlides:function(t){return void 0===t?Q:ht(t)},goTo:Ht,hasNavigated:function(){return void 0!==A},hideError:Ot,hideLoading:Tt,init:function(){if(!g||!isNode_n(g))throw new Error("No Element found");return 0!==P&&(Dt(),P=0),H=g,T=x,window.removeEventListener("resize",rt),T.breakpoints&&window.addEventListener("resize",rt),rt(),It},isInfinite:function(){return q},isInTransition:function(){return K.size>0},isRTL:function(){return I},isSettled:function(){return N},isVertical:function(){return F},localize:it,next:function(t={}){return Ht(B+1,t),It},off:function(t,e){for(const n of t instanceof Array?t:[t])ot.has(n)&&ot.set(n,ot.get(n).filter(t=>t!==e));return It},on:function(t,e){for(const n of t instanceof Array?t:[t])ot.set(n,[...ot.get(n)||[],e]);return It},prev:function(t={}){return Ht(B-1,t),It},reInit:function(e={},n){return Dt(),P=0,L=void 0,Y="*",x=e,T=e,isPlainObject_t(n)&&(M=n),rt(),It},remove:function(t){void 0===t&&(t=W.length-1);const e=W[t];return e&&(st("removeSlide",e),e.el&&(jt(e.el),e.el.remove(),e.el=void 0),W.splice(t,1),ct(Y),St(),k=clamp_t(G,k,X),Ct()),It},setPosition:function(t){k=t,dt(),Ct()},showError:function(t,e){if(1===P){Tt(t),Ot(t);const n=t.el;if(n){const i=document.createElement("div");addClass_s(i,"f-html"),addClass_s(i,"is-error"),i.innerHTML=it(e||"<p>{{ERROR}}</p>"),t.htmlEl=i,addClass_s(n,"has-html has-error"),n.insertAdjacentElement("afterbegin",i),st("contentReady",t)}}return It},showLoading:function(t){const e=t.el,n=null==e?void 0:e.querySelector(".f-spinner");if(!e||n)return It;const i=nt("spinnerTpl"),o=strToHtml_e(i);return o&&(addClass_s(o,"f-spinner"),e.insertAdjacentElement("beforeend",o)),It},version:"6.1.13"};return It};carousel_E.l10n={en_EN:en_EN_o},carousel_E.getDefaults=()=>carousel_h;

;// ./node_modules/@fancyapps/ui/dist/utils/replaceAll.js
/*! License details at fancyapps.com/license */
const replaceAll_n=function(n="",t="",o=""){return n.split(t).join(o)};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.zoomable.js
/*! License details at fancyapps.com/license */
const carousel_zoomable_a={tpl:t=>`<img class="f-panzoom__content" \n    ${t.srcset?'data-lazy-srcset="{{srcset}}"':""} \n    ${t.sizes?'data-lazy-sizes="{{sizes}}"':""} \n    data-lazy-src="{{src}}" alt="{{alt}}" />`},carousel_zoomable_s=()=>{let s;function l(e,o){const n=null==s?void 0:s.getOptions().Zoomable;let i=(isPlainObject_t(n)?Object.assign(Object.assign({},carousel_zoomable_a),n):carousel_zoomable_a)[e];return i&&"function"==typeof i&&o?i(o):i}function c(){s&&!1!==s.getOptions().Zoomable&&(s.on("addSlide",f),s.on("removeSlide",u),s.on("attachSlideEl",g),s.on("click",d),s.on("change",r),s.on("ready",r))}function r(){m();const t=(null==s?void 0:s.getVisibleSlides())||[];if(t.length>1||"slide"===(null==s?void 0:s.getOption("transition")))for(const e of t){const t=e.panzoomRef;t&&((null==s?void 0:s.getPage().slides)||[]).indexOf(e)<0&&t.execute(v.ZoomTo,Object.assign({},t.getStartPosition()))}}function d(t,e){const o=e.target;o&&!e.defaultPrevented&&o.dataset.panzoomAction&&p(o.dataset.panzoomAction)}function f(t,i){const a=i.el;if(!s||!a||i.panzoomRef)return;const c=i.src||i.lazySrc||"",r=i.alt||i.caption||`Image #${i.index}`,d=i.srcset||i.lazySrcset||"",f=i.sizes||i.lazySizes||"";if(c&&isString_t(c)&&!i.html&&(!i.type||"image"===i.type)){i.type="image",i.thumbSrc=i.thumbSrc||c;let t=l("tpl",i);t=replaceAll_n(t,"{{src}}",c+""),t=replaceAll_n(t,"{{srcset}}",d+""),t=replaceAll_n(t,"{{sizes}}",f+""),a.insertAdjacentHTML("afterbegin",t)}const u=a.querySelector(".f-panzoom__content");if(!u)return;u.setAttribute("alt",r+"");const g=i.width&&"auto"!==i.width?parseFloat(i.width+""):"auto",p=i.height&&"auto"!==i.height?parseFloat(i.height+""):"auto",z=S(a,Object.assign({width:g,height:p,classes:{container:"f-zoomable"},event:()=>null==s?void 0:s.getLastMouseMove(),spinnerTpl:()=>(null==s?void 0:s.getOption("spinnerTpl"))||""},l("Panzoom")));z.on("*",(t,e,...o)=>{s&&("loading"===e&&(i.state=0),"loaded"===e&&(i.state=1),"error"===e&&(i.state=2,null==s||s.showError(i,"{{IMAGE_ERROR}}")),s.emit(`panzoom:${e}`,i,...o),"loading"===e&&s.emit("contentLoading",i),"ready"===e&&s.emit("contentReady",i),i.index===(null==s?void 0:s.getPageIndex())&&m())}),i.panzoomRef=z}function u(t,e){e.panzoomRef&&(e.panzoomRef.destroy(),e.panzoomRef=void 0)}function g(t,e){const o=e.panzoomRef;if(o)switch(o.getState()){case 0:o.init();break;case 3:o.execute(v.ZoomTo,Object.assign(Object.assign({},o.getStartPosition()),{velocity:0}))}}function m(){var t,e;const o=(null==s?void 0:s.getContainer())||void 0,n=null===(e=null===(t=null==s?void 0:s.getPage())||void 0===t?void 0:t.slides[0])||void 0===e?void 0:e.panzoomRef;if(o)if(n)n.updateControls(o);else for(const t of o.querySelectorAll("[data-panzoom-action]")||[])t.setAttribute("aria-disabled",""),t.setAttribute("tabindex","-1")}function p(t,...e){var o;null===(o=null==s?void 0:s.getPage().slides[0].panzoomRef)||void 0===o||o.execute(t,...e)}return{init:function(t){s=t,s.on("initPlugins",c)},destroy:function(){if(s){s.off("initPlugins",c),s.off("addSlide",f),s.off("removeSlide",u),s.off("attachSlideEl",g),s.off("click",d),s.off("change",r),s.off("ready",r);for(const t of s.getSlides())u(0,t)}s=void 0},execute:p}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.sync.js
/*! License details at fancyapps.com/license */
const carousel_sync_e={syncOnChange:!1,syncOnClick:!0,syncOnHover:!1},carousel_sync_i=()=>{let i,t;function o(){const t=null==i?void 0:i.getOptions().Sync;return isPlainObject_t(t)?Object.assign(Object.assign({},carousel_sync_e),t):carousel_sync_e}function s(n){var e,s,l;i&&n&&(t=n,i.getOptions().classes=Object.assign(Object.assign({},i.getOptions().classes),{isSelected:""}),i.getOptions().initialSlide=(null===(s=null===(e=t.getPage())||void 0===e?void 0:e.slides[0])||void 0===s?void 0:s.index)||0,o().syncOnChange&&i.on("change",c),o().syncOnClick&&i.on("click",g),o().syncOnHover&&(null===(l=i.getViewport())||void 0===l||l.addEventListener("mouseover",u)),function(){if(!i||!t)return;i.on("ready",d),i.on("refresh",a),t.on("change",r),t.on("filter",f)}())}function l(){const n=o().target;i&&n&&s(n)}function d(){v()}function c(){var n;if(i&&t){const e=(null===(n=i.getPage())||void 0===n?void 0:n.slides)||[],o=t.getPageIndex(e[0].index||0);o>-1&&t.goTo(o,i.hasNavigated()?void 0:{tween:!1,transition:!1}),v()}}function r(){var n;if(i&&t){const e=i.getPageIndex((null===(n=t.getPage())||void 0===n?void 0:n.slides[0].index)||0);e>-1&&i.goTo(e,t.hasNavigated()?void 0:{tween:!1,transition:!1}),v()}}function g(n,e){var o;if(!i||!t)return;if(null===(o=i.getTween())||void 0===o?void 0:o.isRunning())return;const s=null==i?void 0:i.getOptions().classes.slide;if(!s)return;const l=s?e.target.closest(`.${s}`):null;if(l){const n=parseInt(l.getAttribute("index")||"")||0,e=t.getPageIndex(n);t.goTo(e)}}function u(n){i&&g(0,n)}function a(){var n;if(i&&t){const e=i.getPageIndex((null===(n=t.getPage())||void 0===n?void 0:n.slides[0].index)||0);e>-1&&i.goTo(e,{tween:!1,transition:!1}),v()}}function f(n,e){i&&t&&(i.filter(e),r())}function v(){var n,e,o;if(!t)return;const s=(null===(e=null===(n=t.getPage())||void 0===n?void 0:n.slides[0])||void 0===e?void 0:e.index)||0;for(const n of(null==i?void 0:i.getSlides())||[])null===(o=n.el)||void 0===o||o.classList.toggle("is-selected",n.index===s)}return{init:function(n){i=n,i.on("initSlides",l)},destroy:function(){var n;null==i||i.off("ready",d),null==i||i.off("refresh",a),null==i||i.off("change",c),null==i||i.off("click",g),null===(n=null==i?void 0:i.getViewport())||void 0===n||n.removeEventListener("mouseover",u),null==t||t.off("change",r),null==t||t.off("filter",f),t=void 0,null==i||i.off("initSlides",l),i=void 0},getTarget:function(){return t}}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.lazyload.js
/*! License details at fancyapps.com/license */
const carousel_lazyload_s={showLoading:!0,preload:1},carousel_lazyload_n="is-lazyloading",carousel_lazyload_o="is-lazyloaded",carousel_lazyload_l="has-lazyerror",carousel_lazyload_i=()=>{let i;function d(){const e=null==i?void 0:i.getOptions().Lazyload;return isPlainObject_t(e)?Object.assign(Object.assign({},carousel_lazyload_s),e):carousel_lazyload_s}function r(t){var s;const r=t.el;if(!r)return;const c="[data-lazy-src],[data-lazy-srcset],[data-lazy-bg]",u=Array.from(r.querySelectorAll(c));r.matches(c)&&u.push(r);for(const r of u){const c=r.dataset.lazySrc,u=r.dataset.lazySrcset,f=r.dataset.lazySizes,m=r.dataset.lazyBg,y=(r instanceof HTMLImageElement||r instanceof HTMLSourceElement)&&(c||u),z=r instanceof HTMLElement&&m;if(!y&&!z)continue;const g=c||u||m;if(g){if(y&&g){const m=null===(s=r.parentElement)||void 0===s?void 0:s.classList.contains("f-panzoom__wrapper");d().showLoading&&(null==i||i.showLoading(t)),r.addEventListener("load",()=>{null==i||i.hideLoading(t),removeClass_s(r,carousel_lazyload_l),r instanceof HTMLImageElement?r.decode().then(()=>{removeClass_s(r,carousel_lazyload_n),addClass_s(r,carousel_lazyload_o)}).catch(()=>{removeClass_s(r,carousel_lazyload_n),addClass_s(r,carousel_lazyload_o)}):(removeClass_s(r,carousel_lazyload_n),addClass_s(r,carousel_lazyload_o)),m||null==i||i.emit("lazyLoad:loaded",t,r,g)}),r.addEventListener("error",()=>{null==i||i.hideLoading(t),removeClass_s(r,carousel_lazyload_n),addClass_s(r,carousel_lazyload_l),m||null==i||i.emit("lazyLoad:error",t,r,g)}),r.classList.add("f-lazyload"),r.classList.add(carousel_lazyload_n),m||null==i||i.emit("lazyLoad:load",t,r,g),c&&(r.src=c),u&&(r.srcset=u),f&&(r.sizes=f)}else if(z){if(!document.body.contains(r)){document.createElement("img").src=m}r.style.backgroundImage=`url('${m}')`}delete r.dataset.lazySrc,delete r.dataset.lazySrcset,delete r.dataset.lazySizes,delete r.dataset.lazyBg}}}function c(){if(!i)return;const e=[...i.getVisibleSlides()],t=d().preload;if(t>0){const a=i.getPosition(),s=i.getViewportDim();e.push(...i.getVisibleSlides(a+s*t),...i.getVisibleSlides(a-s*t))}for(const t of e)r(t)}return{init:function(e){i=e,i.on("render",c)},destroy:function(){null==i||i.off("render",c),i=void 0}}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.arrows.js
/*! License details at fancyapps.com/license */
const carousel_arrows_r='<svg width="24" height="24" viewBox="0 0 24 24" tabindex="-1">',carousel_arrows_i="</svg>",carousel_arrows_s={prevTpl:carousel_arrows_r+'<path d="M15 3l-9 9 9 9"></path>'+carousel_arrows_i,nextTpl:carousel_arrows_r+'<path d="M9 3l9 9-9 9"></path>'+carousel_arrows_i},carousel_arrows_l=()=>{let r,i,l;function a(){const t=null==r?void 0:r.getOptions().Arrows;return isPlainObject_t(t)?Object.assign(Object.assign({},carousel_arrows_s),t):carousel_arrows_s}function u(e){if(!r)return;const o=`<button data-carousel-go-${e} tabindex="0" class="f-button is-arrow is-${e}" title="{{${e.toUpperCase()}}}">`+a()[`${e}Tpl`]+"</button",i=strToHtml_e(r.localize(o))||void 0;return i&&addClass_s(i,a()[`${e}Class`]),i}function c(){var t;null==i||i.remove(),i=void 0,null==l||l.remove(),l=void 0,null===(t=null==r?void 0:r.getContainer())||void 0===t||t.classList.remove("has-arrows")}function d(){r&&!1!==r.getOptions().Arrows&&r.getPages().length>1?(!function(){if(!r)return;const t=r.getViewport();t&&(i||(i=u("prev"),i&&t.insertAdjacentElement("beforebegin",i)),l||(l=u("next"),l&&t.insertAdjacentElement("afterend",l)),toggleClass_s(r.getContainer(),"has-arrows",!(!i&&!l)))}(),r&&(null==i||i.toggleAttribute("aria-disabled",!r.canGoPrev()),null==l||l.toggleAttribute("aria-disabled",!r.canGoNext()))):c()}return{init:function(t){r=t.on(["change","refresh"],d)},destroy:function(){c(),null==r||r.off(["change","refresh"],d),r=void 0}}};

;// ./node_modules/@fancyapps/ui/dist/shared/buttons.js
/*! License details at fancyapps.com/license */
const buttons_t='<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/>',buttons_M='<g><line x1="11" y1="8" x2="11" y2="14"></line></g>'+buttons_t,buttons_o={moveLeft:["moveLeft","MOVE_LEFT",'<path d="M5 12h14M5 12l6 6M5 12l6-6"/>'],moveRight:["moveRight","MOVE_RIGHT",'<path d="M5 12h14M13 18l6-6M13 6l6 6"/>'],moveUp:["moveUp","MOVE_UP",'<path d="M12 5v14M18 11l-6-6M6 11l6-6"/>'],moveDown:["moveDown","MOVE_DOWN",'<path d="M12 5v14M18 13l-6 6M6 13l6 6"/>'],zoomOut:["zoomOut","ZOOM_OUT",buttons_t],zoomIn:["zoomIn","ZOOM_IN",buttons_M],toggleFull:["toggleFull","TOGGLE_FULL",buttons_M],iterateZoom:["iterateZoom","ITERATE_ZOOM",buttons_M],toggle1to1:["toggleFull","TOGGLE_FULL",'<path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/>'],rotateCCW:["rotateCCW","ROTATE_CCW",'<path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/>'],rotateCW:["rotateCW","ROTATE_CW",'<path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/>'],flipX:["flipX","FLIP_X",'<path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/>'],flipY:["flipY","FLIP_Y",'<path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/>'],reset:["reset","RESET",'<path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>'],toggleFS:["toggleFS","TOGGLE_FS",'<g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g>']},buttons_v={};for(const[t,M]of Object.entries(buttons_o))buttons_v[t]={tpl:`<button data-panzoom-action="${M[0]}" class="f-button" title="{{${M[1]}}}"><svg>${M[2]}</svg></button>`};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.toolbar.js
/*! License details at fancyapps.com/license */
var carousel_toolbar_a;!function(t){t.Left="left",t.middle="middle",t.right="right"}(carousel_toolbar_a||(carousel_toolbar_a={}));const carousel_toolbar_r=Object.assign({counter:{tpl:'<div class="f-counter"><span data-carousel-page></span>/<span data-carousel-pages></span></div>'},download:{tpl:'<button data-carousel-download class="f-button" title="{{DOWNLOAD}}"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></button>'},autoplay:{tpl:'<button data-autoplay-action="toggle" class="f-button" title="{{TOGGLE_AUTOPLAY}}"><svg><g><path d="M5 3.5 19 12 5 20.5Z"/></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'},thumbs:{tpl:'<button data-thumbs-action="toggle" class="f-button" title="{{TOGGLE_THUMBS}}"><svg><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1M9 21h1M14 21h1M19 21h1"/></svg></button>'}},buttons_v),carousel_toolbar_u={absolute:!1,display:{left:[],middle:["zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY","reset"],right:[]},enabled:"auto",items:{}},carousel_toolbar_c=()=>{let a,c;function d(e){const o=null==a?void 0:a.getOptions().Toolbar;let n=(isPlainObject_t(o)?Object.assign(Object.assign({},carousel_toolbar_u),o):carousel_toolbar_u)[e];return n&&"function"==typeof n&&a?n(a):n}function f(){var s;if(!(null==a?void 0:a.getOptions().Toolbar))return;if(!a||c)return;const u=a.getContainer();if(!u)return;let f=d("enabled");if(!f)return;const p=d("absolute"),g=a.getSlides().length>1;let b=!1,m=!1;for(const t of a.getSlides())t.panzoomRef&&(b=!0),(t.downloadSrc||"image"===t.type&&t.src)&&(m=!0);const v=(null===(s=a.getPlugins().Thumbs)||void 0===s?void 0:s.isEnabled())||!1,h=g&&a.getPlugins().Autoplay||!1,j=a.getPlugins().Fullscreen&&(document.fullscreenEnabled||document.webkitFullscreenEnabled);if("auto"===f&&(f=b),!f)return;c=u.querySelector(".f-carousel__toolbar")||void 0,c||(c=document.createElement("div"),addClass_s(c,"f-carousel__toolbar"));const E=d("display"),y=extend_r({},carousel_toolbar_r,d("items"));for(const l of["left","middle","right"]){const s=E[l]||[],r=document.createElement("div");addClass_s(r,`f-carousel__toolbar__column is-${l}`);for(const l of s){let i;if(isString_t(l)){if("counter"===l&&!g)continue;if("autoplay"===l&&!h)continue;if(buttons_v[l]&&!b)continue;if("fullscreen"===l&&!j)continue;if("thumbs"===l&&!v)continue;if("download"===l&&!m)continue;i=y[l]}if(isPlainObject_t(l)&&(i=l),i&&i.tpl){let t=a.localize(i.tpl);t=t.split("<svg>").join('<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24">');const e=strToHtml_e(t);e&&("function"==typeof i.click&&a&&e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),"function"==typeof i.click&&a&&i.click(a,t)}),r.append(e))}}c.append(r)}if(c.childElementCount){if(p&&addClass_s(c,"is-absolute"),!c.parentElement){const t=d("parentEl");t?t.insertAdjacentElement("afterbegin",c):u.insertAdjacentElement("afterbegin",c)}u.contains(c)&&(addClass_s(u,"has-toolbar"),p&&addClass_s(u,"has-absolute-toolbar"))}}return{init:function(t){a=t,null==a||a.on("initSlides",f)},destroy:function(){null==a||a.off("initSlides",f),removeClass_s(null==a?void 0:a.getContainer(),"has-toolbar has-absolute-toolbar"),null==c||c.remove(),c=void 0},add:function(t,e){carousel_toolbar_r[t]=e},isEnabled:function(){return!!c}}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.autoplay.js
/*! License details at fancyapps.com/license */
const carousel_autoplay_n={autoStart:!0,pauseOnHover:!0,showProgressbar:!0,timeout:2e3},carousel_autoplay_o=()=>{let o,i,a=!1,s=!1,l=!1,r=null;function u(e){const i=null==o?void 0:o.getOptions().Autoplay;let a=(isPlainObject_t(i)?Object.assign(Object.assign({},carousel_autoplay_n),i):carousel_autoplay_n)[e];return a&&"function"==typeof a&&o?a(o):a}function f(){clearTimeout(i),i=void 0}function g(){if(!o||!a||l||s||i||!o.isSettled()||function(){var t;const e=(null===(t=null==o?void 0:o.getPage())||void 0===t?void 0:t.slides)||[];for(const t of e)if(0===t.state)return!0;return!1}())return;!function(){var t,n,i,a;if(!o)return;if(v(),!u("showProgressbar"))return;let s=u("progressbarParentEl");!s&&(null===(t=o.getPlugins().Toolbar)||void 0===t?void 0:t.isEnabled())&&(s=o.getContainer());if(!s&&!0!==(null===(n=o.getPlugins().Toolbar)||void 0===n?void 0:n.isEnabled())){const t=(null===(i=o.getPages()[0])||void 0===i?void 0:i.slides)||[],e=(null===(a=o.getPage())||void 0===a?void 0:a.slides)||[];1===t.length&&1===e.length&&(s=e[0].el)}s||(s=o.getViewport());if(!s)return;r=document.createElement("div"),addClass_s(r,"f-progressbar"),s.prepend(r);const l=u("timeout")||1e3;r.style.animationDuration=`${l}ms`}();const t=u("timeout");i=setTimeout(()=>{o&&a&&!s&&(o.isInfinite()||o.getPageIndex()!==o.getPages().length-1?o.next():o.goTo(0))},t)}function c(){var t;if(!o||o.getPages().length<2||!1===o.getOptions().Autoplay)return;if(a)return;a=!0,o.emit("autoplay:start",u("timeout")),addClass_s(o.getContainer(),"has-autoplay"),null===(t=o.getTween())||void 0===t||t.on("start",b);const n=null==o?void 0:o.getContainer();n&&u("pauseOnHover")&&matchMedia("(hover: hover)").matches&&(n.addEventListener("mouseenter",E,!1),n.addEventListener("mouseleave",w,!1)),o.on("change",P),o.on("settle",y),o.on("contentReady",p),o.on("panzoom:touchStart",d),o.on("panzoom:wheel",d),o.isSettled()&&g()}function d(){var t;if(f(),v(),o){if(a){o.emit("autoplay:end"),null===(t=o.getTween())||void 0===t||t.off("start",b);const e=o.getContainer();e&&(e.classList.remove("has-autoplay"),e.removeEventListener("mouseenter",E,!1),e.removeEventListener("mouseleave",w,!1))}o.off("change",P),o.off("settle",y),o.off("contentReady",p),o.off("panzoom:touchStart",d),o.off("panzoom:wheel",d)}a=!1,s=!1}function v(){r&&(r.remove(),r=null)}function m(){o&&o.getPages().length>1&&u("autoStart")&&c()}function p(){g()}function h(t,e){const n=e.target;n&&!e.defaultPrevented&&"toggle"===n.dataset.autoplayAction&&O.toggle()}function P(){!o||!(null==o?void 0:o.isInfinite())&&o.getPageIndex()===o.getPages().length-1?d():(v(),f())}function y(){g()}function b(){f(),v()}function E(){l=!0,a&&(v(),f())}function w(){l=!1,a&&!s&&(null==o?void 0:o.isSettled())&&g()}const O={init:function(t){o=t,o.on("ready",m),o.on("click",h)},destroy:function(){d(),null==o||o.off("ready",m),null==o||o.off("click",h),o=void 0},isEnabled:()=>a,pause:function(){s=!0,f()},resume:function(){s=!1,a&&!l&&g()},start(){c()},stop(){d()},toggle(){a?d():c()}};return O};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.thumbs.js
/*! License details at fancyapps.com/license */
const carousel_thumbs_u={Carousel:{Lazyload:{showLoading:!1}},minCount:2,showOnStart:!0,thumbTpl:'<button aria-label="Slide to #{{page}}"><img draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>',type:"modern"};let carousel_thumbs_a;const carousel_thumbs_c=()=>{let c,d,f,m,g,h=0,v=0,p=!0;function b(e){const n=null==c?void 0:c.getOptions().Thumbs;let o=(isPlainObject_t(n)?Object.assign(Object.assign({},carousel_thumbs_u),n):carousel_thumbs_u)[e];return o&&"function"==typeof o&&c?o(c):o}function y(){if(!c)return!1;if(!1===(null==c?void 0:c.getOptions().Thumbs))return!1;let t=0;for(const e of c.getSlides())e.thumbSrc&&t++;return t>=b("minCount")}function x(){return"modern"===b("type")}function S(){return"scrollable"===b("type")}function C(){const t=[],e=(null==c?void 0:c.getSlides())||[];for(const n of e)t.push({index:n.index,class:n.thumbClass,html:T(n)});return t}function T(t){const e=t.thumb?t.thumb instanceof HTMLImageElement?t.thumb.src:t.thumb:t.thumbSrc||void 0,o=void 0===t.thumbAlt?`Thumbnail #${(t.index||0)+1}`:t.thumbAlt+"";let i=b("thumbTpl");return i=replaceAll_n(i,"{{alt}}",o),i=replaceAll_n(i,"{{src}}",e+""),i=replaceAll_n(i,"{{index}}",`${t.index||0}`),i=replaceAll_n(i,"{{page}}",`${(t.index||0)+1}`),i}function L(t){return`<div index="${t.index||0}" class="f-thumbs__slide ${t.class||""}">${t.html||""}</div>`}function E(t=!1){var e;const n=null==c?void 0:c.getContainer();if(!c||!n||f||!y())return;const o=(null===(e=b("Carousel"))||void 0===e?void 0:e.classes)||{};if(o.container=o.container||"f-thumbs",!f){const t=n.nextElementSibling;(null==t?void 0:t.classList.contains(o.container))&&(f=t)}if(!f){f=document.createElement("div");const t=b("parentEl");t?t.insertAdjacentElement("beforeend",f):n.insertAdjacentElement("afterend",f)}addClass_s(f,o.container),addClass_s(f,"f-thumbs"),addClass_s(f,`is-${b("type")}`),t&&addClass_s(f,"is-hidden")}function P(){if(!f||!S())return;m=document.createElement("div"),addClass_s(m,"f-thumbs__viewport");let t="";for(const e of C()){"string"==typeof(e.html||"")&&(t+=L(e))}m.innerHTML=t,f.append(m),f.addEventListener("click",t=>{t.preventDefault();const e=t.target.closest("[index]"),n=parseInt((null==e?void 0:e.getAttribute("index"))||"-1");c&&n>-1&&c.goTo(n)}),g=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&t.target instanceof HTMLImageElement&&(t.target.src=t.target.getAttribute("data-lazy-src")+"",t.target.removeAttribute("data-lazy-src"),null==g||g.unobserve(t.target))})},{root:m,rootMargin:"100px"}),f.querySelectorAll("[data-lazy-src]").forEach(t=>{null==g||g.observe(t)}),null==c||c.emit("thumbs:ready")}function w(){var t;if(!carousel_thumbs_a||!c||!f||S()||d)return;const n=C();if(!n.length)return;const o=extend_r({},{Sync:{target:c},Lazyload:{preload:1},slides:n,classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",slide:"f-thumbs__slide"},center:!0,fill:!x(),infinite:!1,dragFree:!0,rtl:c.getOptions().rtl||!1,slidesPerPage:t=>{let e=0;return x()&&(!function(){if(!x())return;if(!f)return;const t=t=>f&&parseFloat(getComputedStyle(f).getPropertyValue("--f-thumb-"+t))||0;h=t("width"),v=t("clip-width")}(),e=4*(h-v)),t&&t.getTotalSlideDim()<=t.getViewportDim()-e?1/0:1}},carousel_thumbs_u.Carousel||{},b("Carousel")||{});d=carousel_thumbs_a(f,o,{Sync:carousel_sync_i,Lazyload:carousel_lazyload_i}),d.on("ready",()=>{addClass_s(f,"is-syncing"),null==c||c.emit("thumbs:ready"),x()&&(null==c||c.on("render",$))}),d.on("destroy",()=>{null==c||c.emit("thumbs:destroy")}),d.init(),null===(t=d.getGestures())||void 0===t||t.on("start",()=>{p=!1}),d.on("click",(t,e)=>{const n=e.target;if(n){const t=n.matches("button")?n:n.firstElementChild;t&&t.matches("button")&&(e.preventDefault(),t.focus({preventScroll:!0}))}}),addClass_s(c.getContainer(),"has-thumbs"),R()}function j(){y()&&b("showOnStart")&&(E(),P())}function A(){var t;y()&&(w(),null==c||c.on("addSlide",z),null==c||c.on("removeSlide",_),null==c||c.on("click",I),null==c||c.on("refresh",q),null===(t=null==c?void 0:c.getGestures())||void 0===t||t.on("start",M),D(!0))}function M(){var t,e;p=!0;(null===(t=document.activeElement)||void 0===t?void 0:t.closest(".f-thumbs"))&&(null===(e=document.activeElement)||void 0===e||e.blur())}function $(){var t,e;null==f||f.classList.toggle("is-syncing",!1===(null==c?void 0:c.hasNavigated())||(null===(t=null==c?void 0:c.getTween())||void 0===t?void 0:t.isRunning())),R(),(null===(e=null==c?void 0:c.getGestures())||void 0===e?void 0:e.isPointerDown())&&function(){if(!x())return;if(!c||!d)return;if(!p)return;const t=d.getTween(),e=d.getPages(),n=c.getPageIndex()||0,i=c.getPageProgress()||0;if(!(c&&e&&e[n]&&t))return;const l=t.isRunning()?t.getCurrentValues().pos:d.getPosition();if(void 0===l)return;let r=e[n].pos+i*(h-v);r=clamp_t(e[0].pos,r,e[e.length-1].pos),t.from({pos:l}).to({pos:r}).start()}()}function O(){p=!0,D()}function z(t,e){const n={html:T(e)};if(d)d.add(n,e.index);else if(m){const t=strToHtml_e(L(n));if(t){m.append(t);const e=t.querySelector("img");e&&(null==g||g.observe(e))}}}function _(t,e){var n;d?d.remove(e.index):m&&(null===(n=m.querySelector(`[index="${e.index}"]`))||void 0===n||n.remove())}function I(t,e){var n;const o=e.target;e.defaultPrevented||"toggle"!==(null===(n=null==o?void 0:o.dataset)||void 0===n?void 0:n.thumbsAction)||(f||(E(!0),P(),w()),f&&f.classList.toggle("is-hidden"))}function q(){D()}function D(t=!1){if(!c||!m||!S())return;const e=c.getPageIndex();m.querySelectorAll(".is-selected").forEach(t=>{t.classList.remove("is-selected")});const n=m.querySelector(`[index="${e}"]`);if(n){n.classList.add("is-selected");const e=m.getBoundingClientRect(),o=n.getBoundingClientRect(),i=n.offsetTop-m.offsetTop-.5*e.height+.5*o.height,l=n.scrollLeft-m.scrollLeft-.5*e.width+.5*o.width;m.scrollTo({top:i,left:l,behavior:t?"instant":"smooth"})}}function R(){if(!x())return;if(!c||!d)return;const t=(null==d?void 0:d.getSlides())||[];let e=-.5*h;for(const n of t){const t=n.el;if(!t)continue;let o=c.getPageProgress(n.index)||0;o=Math.max(-1,Math.min(1,o)),o>-1&&o<1&&(e+=.5*h*(1-Math.abs(o))),o=Math.round(1e4*o)/1e4,e=Math.round(1e4*e)/1e4,t.style.setProperty("--progress",`${Math.abs(o)}`),t.style.setProperty("--shift",`${(null==c?void 0:c.isRTL())?-1*e:e}px`),o>-1&&o<1&&(e+=.5*h*(1-Math.abs(o)))}}return{init:function(t,e){carousel_thumbs_a=e,c=t,c.on("ready",A),c.on("initSlides",j),c.on("change",O)},destroy:function(){var t,e;S()&&(null==c||c.emit("thumbs:destroy")),null==c||c.off("ready",A),null==c||c.off("initSlides",j),null==c||c.off("change",O),null==c||c.off("render",$),null==c||c.off("addSlide",z),null==c||c.off("click",I),null==c||c.off("refresh",q),null===(t=null==c?void 0:c.getGestures())||void 0===t||t.off("start",M),null===(e=null==c?void 0:c.getContainer())||void 0===e||e.classList.remove("has-thumbs"),c=void 0,null==d||d.destroy(),d=void 0,null==f||f.remove(),f=void 0},getCarousel:function(){return d},getContainer:function(){return f},getType:function(){return b("type")},isEnabled:y}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.html.js
/*! License details at fancyapps.com/license */
const carousel_html_o={autosize:!1,iframeAttr:{allow:"autoplay; fullscreen",scrolling:"auto"},preload:!1},carousel_html_l=()=>{let l;function n(){const e=null==l?void 0:l.getOptions().Html;return isPlainObject_t(e)?Object.assign(Object.assign({},carousel_html_o),e):carousel_html_o}function s(t,e){let i=t[e];return void 0===i&&(i=n()[e]),"true"===i||"false"!==i&&i}function r(t,i){let a=i.type,o=i.src;if(!a&&isString_t(o)){if("#"===o.charAt(0)?a="inline":o.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.((a)?png|avif|gif|jp(g|eg)|pjp(eg)?|jfif|svg|webp|bmp|ico|tif(f)?)((\?|#).*)?$)/i)?a="image":o.match(/\.(pdf)((\?|#).*)?$/i)?a="pdf":o.match(/\.(html|php)((\?|#).*)?$/i)&&(a="iframe"),!a){const t=o.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i);t&&(o=`https://maps.google.${t[1]}/?ll=${(t[2]?t[2]+"&z="+Math.floor(parseFloat(t[3]))+(t[4]?t[4].replace(/^\//,"&"):""):t[4]+"").replace(/\?/,"&")}&output=${t[4]&&t[4].indexOf("layer=c")>0?"svembed":"embed"}`,a="gmap")}if(!a){const t=o.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i);t&&(o=`https://maps.google.${t[1]}/maps?q=${t[2].replace("query=","q=").replace("api=1","")}&output=embed`,a="gmap")}a&&(i.src=o,i.type=a)}}function d(t,e){"iframe"!==e.type&&"pdf"!==e.type&&"gmap"!==e.type||function(t){const e=t.el,o=t.src;if(!l||!e||!o)return;const r=document.createElement("iframe");addClass_s(r,"f-iframe");for(const[t,e]of Object.entries(n().iframeAttr||{}))r.setAttribute(t,e);r.onerror=()=>{t.state=2,null==l||l.showError(t,"{{IFRAME_ERROR}}")};const d=document.createElement("div");if(addClass_s(d,"f-html"),d.append(r),t.width){let e=`${t.width}`;e.match(/^\d+$/)&&(e+="px"),d.style.maxWidth=`${e}`}if(t.height){let e=`${t.height}`;e.match(/^\d+$/)&&(e+="px"),d.style.maxHeight=`${e}`}if(t.aspectRatio){const i=e.getBoundingClientRect();d.style.aspectRatio=`${t.aspectRatio}`,d.style[i.width>i.height?"width":"height"]="auto",d.style[i.width>i.height?"maxWidth":"maxHeight"]="none"}t.htmlEl=d,t.contentEl=r,addClass_s(e,`has-html has-iframe has-${t.type}`),e.prepend(d);const c=s(t,"preload"),p=s(t,"autosize");"iframe"===t.type&&(c||p)?(t.state=0,l.showLoading(t),addClass_s(e,"is-loading"),r.onload=()=>{if(!l||1!==l.getState()||!r.src.length)return;t.state=1;const i="true"!==r.dataset.ready;r.dataset.ready="true",function(t){const e=t.contentEl,i=null==e?void 0:e.parentElement,a=null==i?void 0:i.style;let o=s(t,"autosize"),l=t.width||0,n=t.height||0;l&&n&&(o=!1);if(!(e&&i&&a&&o))return;try{const t=window.getComputedStyle(i),o=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),s=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),r=e.contentWindow;if(r){const t=r.document,e=t.getElementsByTagName("html")[0],i=t.body;a.width="";const d=window.getComputedStyle(i),c=parseFloat(d.marginLeft)+parseFloat(d.marginRight),p=i.style.overflow||"";i.style.overflow="hidden",l=l||i.scrollWidth+c+o,a.flex="0 0 auto",a.width=`${l}px`,a.height=`${i.scrollHeight}px`,i.style.overflow=p;n=Math.max(e.scrollHeight,Math.ceil(e.getBoundingClientRect().height))+s}}catch(t){}if(l||n){const t={flex:"0 1 auto",width:"",height:""};l&&"auto"!==l&&(t.width=`${l}px`),n&&"auto"!==n&&(t.height=`${n}px`),Object.assign(a,t)}}(t),l.hideLoading(t),i&&l.emit("contentReady",t),removeClass_s(e,"is-loading")},r.src=`${o}`):(r.src=`${o}`,l.emit("contentReady",t))}(e)}function c(t,e){var i,a;"iframe"!==e.type&&"pdf"!==e.type&&"gmap"!==e.type||(null==l||l.hideError(e),null===(i=e.contentEl)||void 0===i||i.remove(),e.contentEl=void 0,null===(a=e.htmlEl)||void 0===a||a.remove(),e.htmlEl=void 0)}return{init:function(t){l=t,l.on("addSlide",r),l.on("attachSlideEl",d),l.on("detachSlideEl",c)},destroy:function(){null==l||l.off("addSlide",r),null==l||l.off("attachSlideEl",d),null==l||l.off("detachSlideEl",c),l=void 0}}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.video.js
/*! License details at fancyapps.com/license */
const carousel_video_i=(t,e={})=>{const o=new URL(t),n=new URLSearchParams(o.search),i=new URLSearchParams;for(const[t,o]of[...n,...Object.entries(e)]){let e=o+"";if("t"===t){let t=e.match(/((\d*)m)?(\d*)s?/);t&&i.set("start",60*parseInt(t[2]||"0")+parseInt(t[3]||"0")+"")}else i.set(t,e)}let l=i+"",s=t.match(/#t=((.*)?\d+s)/);return s&&(l+=`#t=${s[1]}`),l},carousel_video_l={autoplay:!1,html5videoTpl:'<video class="f-html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n    <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',iframeAttr:{allow:"autoplay; fullscreen",scrolling:"no",referrerPolicy:"strict-origin-when-cross-origin",credentialless:""},vimeo:{byline:1,color:"00adef",controls:1,dnt:1,muted:0},youtube:{controls:1,enablejsapi:1,nocookie:1,rel:0,fs:1}},carousel_video_s=()=>{let s,r=!1;function c(){const t=null==s?void 0:s.getOptions().Video;return isPlainObject_t(t)?Object.assign(Object.assign({},carousel_video_l),t):carousel_video_l}function a(){var t;return null===(t=null==s?void 0:s.getPage())||void 0===t?void 0:t.slides[0]}const d=t=>{var e;try{let o=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===o.event)for(let o of Array.from((null===(e=null==s?void 0:s.getContainer())||void 0===e?void 0:e.getElementsByClassName("f-iframe"))||[]))o instanceof HTMLIFrameElement&&o.contentWindow===t.source&&(o.dataset.ready="true")}else if(t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/)&&"onReady"===o.event){const t=document.getElementById(o.id);t&&(t.dataset.ready="true")}}catch(t){}};function m(t,e){const n=e.src;if(!isString_t(n))return;let l=e.type;if(!l||"html5video"===l){const t=n.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i);t&&(l="html5video",e.html5videoFormat=e.html5videoFormat||"video/"+("ogv"===t[1]?"ogg":t[1]))}if(!l||"youtube"===l){const t=n.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i);if(t){const o=Object.assign(Object.assign({},c().youtube),e.youtube||{}),s=`www.youtube${o.nocookie?"-nocookie":""}.com`,r=carousel_video_i(n,o),a=encodeURIComponent(t[2]);e.videoId=a,e.src=`https://${s}/embed/${a}?${r}`,e.thumb=e.thumb||`https://i.ytimg.com/vi/${a}/mqdefault.jpg`,l="youtube"}}if(!l||"vimeo"===l){const t=n.match(/^.+vimeo.com\/(?:\/)?(video\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/);if(t){const o=Object.assign(Object.assign({},c().vimeo),e.vimeo||{}),s=carousel_video_i(n,o),r=encodeURIComponent(t[2]),a=t[5]||"";e.videoId=r,e.src=`https://player.vimeo.com/video/${r}?${a?`h=${a}${s?"&":""}`:""}${s}`,l="vimeo"}}e.type=l}function u(e,i){"html5video"===i.type&&function(e){const i=e.el,l=e.src;if(!s||!i||!l)return;const r=e.html5videoTpl||c().html5videoTpl,a=e.html5videoFormat||c().html5videoFormat;if(!r)return;const d=e.poster||(e.thumb&&isString_t(e.thumb)?e.thumb:""),m=strToHtml_e(r.replace(/\{\{src\}\}/gi,l+"").replace(/\{\{format\}\}/gi,a||"").replace(/\{\{poster\}\}/gi,d+""));if(!m)return;const u=document.createElement("div");addClass_s(u,"f-html"),u.append(m),e.contentEl=m,e.htmlEl=u,addClass_s(i,`has-${e.type}`),i.prepend(u),v(e),s.emit("contentReady",e)}(i),"youtube"!==i.type&&"vimeo"!==i.type||function(e){const o=e.el,n=e.src;if(!s||!o||!n)return;const i=document.createElement("iframe");addClass_s(i,"f-iframe"),i.setAttribute("id",`f-iframe_${e.videoId}`);for(const[t,e]of Object.entries(c().iframeAttr||{}))i.setAttribute(t,e);"youtube"===e.type&&(i.onload=()=>{var t;1===(null==s?void 0:s.getState())&&(null===(t=i.contentWindow)||void 0===t||t.postMessage(JSON.stringify({event:"listening",id:i.getAttribute("id")}),"*"))}),i.onerror=()=>{null==s||s.showError(e,"{{IFRAME_ERROR}}")};const l=document.createElement("div");addClass_s(l,"f-html"),l.append(i),e.contentEl=i,e.htmlEl=l,addClass_s(o,`has-html has-iframe has-${e.type}`),i.src=`${e.src}`,o.prepend(l),v(e),s.emit("contentReady",e)}(i)}function f(t,e){var o,n;"html5video"!==e.type&&"youtube"!==e.type&&"vimeo"!==e.type||(null===(o=e.contentEl)||void 0===o||o.remove(),e.contentEl=void 0,null===(n=e.htmlEl)||void 0===n||n.remove(),e.htmlEl=void 0),e.poller&&clearTimeout(e.poller)}function p(){r=!1}function h(){if(r)return;r=!0;const t=a();(t&&void 0!==t.autoplay?t.autoplay:c().autoplay)&&(function(){var t;const e=a(),o=null==e?void 0:e.el;if(o&&"html5video"===(null==e?void 0:e.type))try{const t=o.querySelector("video");if(t){const e=t.play();void 0!==e&&e.then(()=>{}).catch(e=>{t.muted=!0,t.play()})}}catch(t){}const n=null==e?void 0:e.htmlEl;n instanceof HTMLIFrameElement&&(null===(t=n.contentWindow)||void 0===t||t.postMessage('{"event":"command","func":"stopVideo","args":""}',"*"))}(),function(){const t=a(),e=null==t?void 0:t.type;if(!(null==t?void 0:t.el)||"youtube"!==e&&"vimeo"!==e)return;const o=()=>{if(t.contentEl&&t.contentEl instanceof HTMLIFrameElement&&t.contentEl.contentWindow){let e;if("true"===t.contentEl.dataset.ready)return e="youtube"===t.type?{event:"command",func:"playVideo"}:{method:"play",value:"true"},e&&t.contentEl.contentWindow.postMessage(JSON.stringify(e),"*"),void(t.poller=void 0);"youtube"===t.type&&(e={event:"listening",id:t.contentEl.getAttribute("id")},t.contentEl.contentWindow.postMessage(JSON.stringify(e),"*"))}t.poller=setTimeout(o,250)};o()}())}function v(t){const e=null==t?void 0:t.htmlEl;if(t&&e&&("html5video"===t.type||"youtube"===t.type||"vimeo"===t.type)){if(e.style.aspectRatio="",e.style.width="",e.style.height="",e.style.maxWidth="",e.style.maxHeight="",t.width){let o=`${t.width}`;o.match(/^\d+$/)&&(o+="px"),e.style.maxWidth=`${o}`}if(t.height){let o=`${t.height}`;o.match(/^\d+$/)&&(o+="px"),e.style.maxHeight=`${o}`}if(t.aspectRatio){const o=t.aspectRatio.split("/"),n=parseFloat(o[0].trim()),i=o[1]?parseFloat(o[1].trim()):0,l=n&&i?n/i:n;e.offsetHeight;const s=e.getBoundingClientRect(),r=l<(s.width||1)/(s.height||1);e.style.aspectRatio=`${t.aspectRatio}`,e.style.width=r?"auto":"",e.style.height=r?"":"auto"}}}function y(){v(a())}return{init:function(t){s=t,s.on("addSlide",m),s.on("attachSlideEl",u),s.on("detachSlideEl",f),s.on("ready",h),s.on("change",p),s.on("settle",h),s.on("refresh",y),window.addEventListener("message",d)},destroy:function(){null==s||s.off("addSlide",m),null==s||s.off("attachSlideEl",u),null==s||s.off("detachSlideEl",f),null==s||s.off("ready",h),null==s||s.off("change",p),null==s||s.off("settle",h),null==s||s.off("refresh",y),window.removeEventListener("message",d),s=void 0}}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.fullscreen.js
/*! License details at fancyapps.com/license */
const carousel_fullscreen_n={autoStart:!1,btnTpl:'<button data-fullscreen-action="toggle" class="f-button" title="{{TOGGLE_FULLSCREEN}}"><svg><g><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'},carousel_fullscreen_t="in-fullscreen-mode",carousel_fullscreen_l=()=>{let l;function u(t){const u=null==l?void 0:l.getOptions().Fullscreen;let o=(isPlainObject_t(u)?Object.assign(Object.assign({},carousel_fullscreen_n),u):carousel_fullscreen_n)[t];return o&&"function"==typeof o&&l?o(l):o}function o(){var e;null===(e=null==l?void 0:l.getPlugins().Toolbar)||void 0===e||e.add("fullscreen",{tpl:u("btnTpl")})}function c(){if(u("autoStart")){const e=s();e&&a(e)}}function i(e,n){const t=n.target;t&&!n.defaultPrevented&&"toggle"===t.dataset.fullscreenAction&&d()}function s(){return u("el")||(null==l?void 0:l.getContainer())||void 0}function r(){const e=document;return e.fullscreenEnabled?!!e.fullscreenElement:!!e.webkitFullscreenEnabled&&!!e.webkitFullscreenElement}function a(e){const n=document;let l;return e||(e=n.documentElement),n.fullscreenEnabled?l=e.requestFullscreen():n.webkitFullscreenEnabled&&(l=e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)),l&&l.then(()=>{e.classList.add(carousel_fullscreen_t)}),l}function f(){const e=document;let n;return e.fullscreenEnabled?n=e.fullscreenElement&&e.exitFullscreen():e.webkitFullscreenEnabled&&(n=e.webkitFullscreenElement&&e.webkitExitFullscreen()),n&&n.then(()=>{var e;null===(e=s())||void 0===e||e.classList.remove(carousel_fullscreen_t)}),n}function d(){if(r())f();else{const e=s();e&&a(e)}}return{init:function(e){l=e,l.on("initPlugins",o),l.on("ready",c),l.on("click",i)},destroy:function(){null==l||l.off("initPlugins",o),null==l||l.off("ready",c),null==l||l.off("click",i)},exit:f,inFullscreen:r,request:a,toggle:d}};

;// ./node_modules/@fancyapps/ui/dist/fancybox/fancybox.hash.js
/*! License details at fancyapps.com/license */
let fancybox_hash_n,fancybox_hash_o,fancybox_hash_r=!1,fancybox_hash_i=!1,fancybox_hash_l=!1,fancybox_hash_s=!1;const fancybox_hash_a=()=>{const t=new URL(document.URL).hash,e=t.slice(1).split("-"),n=e[e.length-1],o=n&&/^\+?\d+$/.test(n)&&parseInt(e.pop()||"1",10)||1;return{urlHash:t,urlSlug:e.join("-"),urlIndex:o}},fancybox_hash_u=()=>{const t=null==fancybox_hash_n?void 0:fancybox_hash_n.getInstance(),e=null==t?void 0:t.getState();return!(!t||0!==e&&1!==e)},fancybox_hash_c=()=>{if(!fancybox_hash_n)return;if(fancybox_hash_u())return;const{urlSlug:t,urlIndex:e}=fancybox_hash_a();if(!t)return;let o=document.querySelector(`[data-slug="${t}"]`);o&&fancybox_hash_n.fromTriggerEl(o),fancybox_hash_u()||(o=document.querySelectorAll(`[data-fancybox="${t}"]`)[e-1],o&&fancybox_hash_n.fromTriggerEl(o,{startIndex:e-1})),fancybox_hash_u()&&o&&!o.closest("[inert]")&&o.scrollIntoView({behavior:"instant",block:"center",inline:"center"})},fancybox_hash_d=t=>{const n=t.getOptions().Hash,o=t.getSlide();return o&&(o.slug||o.fancybox||(isPlainObject_t(n)?n.slug:""))||""},g=t=>{var e,n;const o=fancybox_hash_d(t),r=t.getSlide();if(!r||!o)return"";let i=parseInt(r.index+"",10)+1,l=r.slug?`#${r.slug}`:`#${o}-${i}`;return((null===(n=null===(e=t.getCarousel())||void 0===e?void 0:e.getPages())||void 0===n?void 0:n.length)||0)<2&&(l=`#${o}`),l},fancybox_hash_f=()=>{if(!fancybox_hash_n)return;if(fancybox_hash_l)return;const t=null==fancybox_hash_n?void 0:fancybox_hash_n.getInstance(),o=null==t?void 0:t.getCarousel(),{urlSlug:r,urlIndex:u}=fancybox_hash_a(),d=null==t?void 0:t.getOptions().Hash;if(!1!==d){if(t&&1===t.getState()&&o){const n=o.getSlides();for(const t of n||[])if(t.slug===r||(t.fancybox===r||isPlainObject_t(d)&&d.slug===r)&&t.index===u-1)return fancybox_hash_i=!1,void o.goTo(t.index);fancybox_hash_s=!0,t.close(),fancybox_hash_s=!1}fancybox_hash_c()}},fancybox_hash_h=()=>{fancybox_hash_n&&(fancybox_hash_o=setTimeout(()=>{fancybox_hash_r=!0,fancybox_hash_c(),fancybox_hash_r=!1},300),window.addEventListener("hashchange",fancybox_hash_f,!1))};let fancybox_hash_w;function fancybox_hash_v(){history.scrollRestoration&&fancybox_hash_w&&(history.scrollRestoration=fancybox_hash_w,fancybox_hash_w=void 0)}const fancybox_hash_m=()=>{let t,e="";function u(){var n;if(!t||!t.isTopMost()||!1===t.getOptions().Hash)return;if(fancybox_hash_r){const e=t.getOptions().sync;e&&e.goTo((null===(n=null==t?void 0:t.getCarousel())||void 0===n?void 0:n.getPageIndex())||0,{transition:!1,tween:!1})}const o=t.getCarousel();if(!o)return;if(!t.getSlide())return;const l=fancybox_hash_d(t);if(!l)return;const{urlHash:s,urlSlug:u}=fancybox_hash_a(),f=g(t);s!==f&&(e=s),history.scrollRestoration&&!fancybox_hash_w&&(fancybox_hash_w=history.scrollRestoration,history.scrollRestoration="manual",window.addEventListener("beforeunload",fancybox_hash_v)),o.on("change",c);const h=l!==u;try{window.history[h?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+f),h&&(fancybox_hash_i=!0)}catch(t){}}function c(){if(!t||!t.isTopMost()||!1===t.getOptions().Hash)return;if(!t.getSlide())return;if(!fancybox_hash_d(t))return;const e=g(t);fancybox_hash_l=!0;try{window.history.replaceState({},document.title,window.location.pathname+window.location.search+e)}catch(t){}fancybox_hash_l=!1}function f(){var n;if(!t||!t.isTopMost()||!1===t.getOptions().Hash||fancybox_hash_s)return;if(fancybox_hash_d(t)){fancybox_hash_l=!0;try{fancybox_hash_i&&!function(){if(window.parent===window)return!1;try{var t=window.frameElement}catch(e){t=null}return null===t?"data:"===location.protocol:t.hasAttribute("sandbox")}()&&"IFRAME"!==(null===(n=document.activeElement)||void 0===n?void 0:n.nodeName)?window.history.back():window.history.replaceState({},document.title,window.location.pathname+window.location.search+e)}catch(t){}fancybox_hash_l=!1}}return{init:function(e){clearTimeout(fancybox_hash_o),t=e,t.on("ready",u),t.on("close",f)},destroy:function(){null==t||t.off("ready",u),null==t||t.off("close",f);const e=null==t?void 0:t.getCarousel();e&&e.off("change",c),t=void 0,(null==fancybox_hash_n?void 0:fancybox_hash_n.getInstance())||(fancybox_hash_v(),window.removeEventListener("beforeunload",fancybox_hash_v))}}};fancybox_hash_m.getInfoFromURL=fancybox_hash_a,fancybox_hash_m.startFromUrl=fancybox_hash_c,fancybox_hash_m.setup=function(e){fancybox_hash_n||(fancybox_hash_n=e,canUseDOM_e()&&(/complete|interactive|loaded/.test(document.readyState)?fancybox_hash_h():document.addEventListener("DOMContentLoaded",fancybox_hash_h)))};

;// ./node_modules/@fancyapps/ui/dist/fancybox/l10n/en_EN.js
/*! License details at fancyapps.com/license */
const l10n_en_EN_o=Object.assign(Object.assign({},en_EN_o),{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ELEMENT_NOT_FOUND:"HTML Element Not Found",IFRAME_ERROR:"Error Loading Page",NO_CAPTION:"No Caption",TOGGLE_SIDEBAR:"Toggle sidebar"});

;// ./node_modules/@fancyapps/ui/dist/fancybox/fancybox.js
/*! License details at fancyapps.com/license */
const A='<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path d="M19.286 4.714 4.714 19.286M4.714 4.714l14.572 14.572" /></svg></button>';carousel_toolbar_c().add("close",{tpl:A});const k=e=>{e.cancelable&&e.preventDefault()};const R=(e=null,t="",n)=>{if(!e||!e.parentElement||!t)return void(n&&n());O(e);const o=i=>{i.target===e&&e.dataset.animationName&&(e.removeEventListener("animationend",o),delete e.dataset.animationName,n&&n(),e.classList.remove(t))};e.dataset.animationName=t,e.addEventListener("animationend",o),addClass_s(e,t)},O=e=>{e&&e.dispatchEvent(new CustomEvent("animationend",{bubbles:!1,cancelable:!0,currentTarget:e}))};var _;!function(e){e[e.Init=0]="Init",e[e.Ready=1]="Ready",e[e.Closing=2]="Closing",e[e.Destroyed=3]="Destroyed"}(_||(_={}));const I={ajax:null,backdropClick:"close",Carousel:{},closeButton:"auto",closeButtonTpl:A,closeExisting:!1,delegateEl:void 0,dragToClose:!0,fadeEffect:!0,groupAll:!1,groupAttr:"data-fancybox",hideClass:"f-fadeOut",hideScrollbar:!0,id:void 0,idle:!1,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"prev",ArrowDown:"next",ArrowRight:"next",ArrowLeft:"prev"},l10n:l10n_en_EN_o,mainClass:"",mainStyle:{},mainTpl:'<dialog class="fancybox__dialog">\n    <div class="fancybox__container" tabindex="0" aria-label="{{MODAL}}">\n      <div class="fancybox__backdrop"></div>\n      <div class="fancybox__carousel"></div>\n    </div>\n  </dialog>',modal:!0,on:{},parentEl:void 0,placeFocusBack:!0,showClass:"f-zoomInUp",startIndex:0,sync:void 0,theme:"dark",triggerEl:void 0,triggerEvent:void 0,zoomEffect:!0},z=new Map;let H=0;const B="with-fancybox",D=()=>{let r,C,M,A,D,q,N,V=_.Init,W=Object.assign({},I),$=-1,K={},U=[],X=!1,G=!0,Y=0;function Z(e,...t){let n=W[e];return n&&"function"==typeof n?n(Re,...t):n}function J(e,t=[]){const n=Z("l10n")||{};e=String(e).replace(/\{\{(\w+)\}\}/g,(e,t)=>n[t]||e);for(let n=0;n<t.length;n++)e=e.split(t[n][0]).join(t[n][1]);return e=e.replace(/\{\{(.*?)\}\}/g,(e,t)=>t)}const Q=new Map;function ee(e,...t){const n=[...Q.get(e)||[]];for(const[t,o]of Object.entries(W.on||{}))(t===e||t.split(" ").indexOf(e)>-1)&&n.push(o);for(const e of n)e&&"function"==typeof e&&e(Re,...t);"*"!==e&&ee("*",e,...t)}function te(){removeClass_s(C,"is-revealing");try{if(document.activeElement===r){((null==C?void 0:C.querySelector("[autofocus]"))||C).focus()}}catch(e){}}function ne(e,n){var o;ve(n),de(),null===(o=n.el)||void 0===o||o.addEventListener("click",ie),"inline"!==n.type&&"clone"!==n.type||function(e){if(!A||!e||!e.el)return;let n=null;if(isString_t(e.src)){const t=e.src.split("#",2).pop();n=t?document.getElementById(t):null}if(n){if(addClass_s(n,"f-html"),"clone"===e.type||n.closest(".fancybox__carousel")){n=n.cloneNode(!0);const t=n.dataset.animationName;t&&(n.classList.remove(t),delete n.dataset.animationName);let o=n.getAttribute("id");o=o?`${o}--clone`:`clone-${$}-${e.index}`,n.setAttribute("id",o)}else if(n.parentNode){const t=document.createElement("div");t.inert=!0,n.parentNode.insertBefore(t,n),e.placeholderEl=t}e.htmlEl=n,addClass_s(e.el,"has-html"),e.el.prepend(n),n.classList.remove("hidden"),"none"===n.style.display&&(n.style.display=""),"none"===getComputedStyle(n).getPropertyValue("display")&&(n.style.display=n.dataset.display||"flex"),null==A||A.emit("contentReady",e)}else null==A||A.showError(e,"{{ELEMENT_NOT_FOUND}}")}(n),"ajax"===n.type&&function(e){const t=e.el;if(!t)return;if(e.htmlEl||e.xhr)return;null==A||A.showLoading(e),e.state=0;const n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE&&V===_.Ready)if(null==A||A.hideLoading(e),e.state=1,200===n.status){let o=n.responseText+"",i=null,s=null;if(e.filter){const t=document.createElement("div");t.innerHTML=o,s=t.querySelector(e.filter+"")}s&&s instanceof HTMLElement?i=s:(i=document.createElement("div"),i.innerHTML=o),i.classList.add("f-html"),e.htmlEl=i,t.classList.add("has-html"),t.classList.add("has-ajax"),t.prepend(i),null==A||A.emit("contentReady",e)}else null==A||A.showError(e)};const o=Z("ajax")||null;n.open(o?"POST":"GET",e.src+""),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(o),e.xhr=n}(n)}function oe(e,t){var n;ye(t),null===(n=t.el)||void 0===n||n.removeEventListener("click",ie),"inline"!==t.type&&"clone"!==t.type||function(e){const t=e.htmlEl,n=e.placeholderEl;t&&("none"!==getComputedStyle(t).getPropertyValue("display")&&(t.style.display="none"),t.offsetHeight);n&&(t&&n.parentNode&&n.parentNode.insertBefore(t,n),n.remove());e.htmlEl=void 0,e.placeholderEl=void 0}(t),t.xhr&&(t.xhr.abort(),t.xhr=void 0)}function ie(e){if(!be())return;if(V!==_.Ready)return k(e),void e.stopPropagation();if(e.defaultPrevented)return;if(!f.isClickAllowed())return;const t=e.composedPath()[0];t.closest(".fancybox__carousel")&&t.classList.contains("fancybox__slide")&&fe(e)}function se(){G=!1,C&&A&&C.classList.remove("is-revealing"),de();const e=Z("sync");if(A&&e){const t=e.getPageIndex(A.getPageIndex())||0;e.goTo(t,{transition:!1,tween:!1})}}function le(){var e;!function(){const e=null==A?void 0:A.getViewport();if(!Z("dragToClose")||!A||!e)return;if(D=f(e).init(),!D)return;let t=!1,n=0,o=0,s={},l=1;function r(){var e,t;null==q||q.spring({clamp:!0,mass:1,tension:0===o?140:960,friction:17,restDelta:.1,restSpeed:.1,maxSpeed:1/0}).from({y:n}).to({y:o}).start();const i=(null===(e=null==A?void 0:A.getViewport())||void 0===e?void 0:e.getBoundingClientRect().height)||0,s=null===(t=Ee())||void 0===t?void 0:t.panzoomRef;if(i&&s)if(0===o)s.execute(v.Reset);else{const e=map_t(Math.abs(n),0,.33*i,l,.77*l,!1);s.execute(v.ZoomTo,{scale:e})}}const c=e=>{var t;const n=e.srcEvent,o=n.target;return A&&!(gestures_e(n)&&(null===(t=n.touches)||void 0===t?void 0:t.length)>1)&&o&&!getScrollableParent_n(o)};q=tween_c().on("step",t=>{if(C&&e&&V===_.Ready){const o=e.getBoundingClientRect().height;n=Math.min(o,Math.max(-1*o,t.y));const i=map_t(Math.abs(n),0,.65*o,1,.2,!0);C.style.setProperty("--f-drag-opacity",i+""),C.style.setProperty("--f-drag-offset",n+"px")}}),D.on("start",function(){t||(null==q||q.pause(),o=n)}).on("panstart",e=>{var n,o;if(!t&&c(e)&&"y"===e.axis){k(e.srcEvent),t=!0,Ce(),null===(n=null==A?void 0:A.getViewport())||void 0===n||n.classList.add("is-dragging");const i=null===(o=Ee())||void 0===o?void 0:o.panzoomRef;if(i){l=i.getTransform().scale||1;const e=i.getOptions();s=Object.assign({},e),e.bounds=!1,e.gestures=!1}}else t=!1}).on("pan",function(e){t&&c(e)&&(k(e.srcEvent),e.srcEvent.stopPropagation(),"y"===e.axis&&(o+=e.deltaY,r()))}).on("end",e=>{var i,l,a;if(null===(i=null==A?void 0:A.getViewport())||void 0===i||i.classList.remove("is-dragging"),t){const t=null===(l=Ee())||void 0===l?void 0:l.panzoomRef;if(t){null===(a=t.getTween())||void 0===a||a.end();const e=t.getOptions();e.bounds=s.bounds||!1,e.gestures=s.gestures||!1}c(e)&&"y"===e.axis&&(Math.abs(e.velocityY)>5||Math.abs(n)>50)&&Me(e.srcEvent,"f-throwOut"+(e.velocityY>0?"Down":"Up"))}t=!1,V===_.Ready&&0!==n&&(o=0,r())})}(),document.body.addEventListener("click",pe),document.body.addEventListener("keydown",ge,{passive:!1,capture:!0}),de(),je();const t=Z("sync");A&&t&&(null===(e=t.getTween())||void 0===e||e.start()),he(Ee())}function re(){(null==A?void 0:A.canGoNext())?je():Te()}function ae(e,t){ve(t)}function ce(e,t){ve(t),he(t)}function ue(){var e;const t=null==A?void 0:A.getPlugins().Thumbs;toggleClass_s(C,"has-thumbs",(null==t?void 0:t.isEnabled())||!1),toggleClass_s(C,"has-vertical-thumbs",!!t&&("scrollable"===t.getType()||!0===(null===(e=t.getCarousel())||void 0===e?void 0:e.isVertical())))}function de(){if(C){const e=(null==A?void 0:A.getPages())||[],t=(null==A?void 0:A.getPageIndex())||0;for(const e of C.querySelectorAll("[data-fancybox-index]"))e.innerHTML=t+"";for(const e of C.querySelectorAll("[data-fancybox-page]"))e.innerHTML=t+1+"";for(const t of C.querySelectorAll("[data-fancybox-pages]"))t.innerHTML=e.length+""}}function fe(e){if(!!e.composedPath()[0].closest("[data-fancybox-close]"))return void Me(e);if(ee("backdropClick",e),e.defaultPrevented)return;Z("backdropClick")&&Me(e)}function me(){Pe()}function ge(e){if(!be())return;if(V!==_.Ready)return;const t=e.key,o=Z("keyboard");if(!o)return;if(e.ctrlKey||e.altKey||e.shiftKey)return;const i=e.composedPath()[0];if(!isNode_n(i))return;if("Escape"!==t&&(e=>{const t=["input","textarea","select","option","video","iframe","[contenteditable]","[data-selectable]","[data-draggable]"].join(",");return e.matches(t)||e.closest(t)})(i))return;if(ee("keydown",e),e.defaultPrevented)return;const s=o[t];if(s)switch(s){case"close":Me(e);break;case"next":k(e),null==A||A.next();break;case"prev":k(e),null==A||A.prev()}}function pe(e){if(!be())return;if(V!==_.Ready)return;if(Pe(),e.defaultPrevented)return;const t=e.composedPath()[0],n=!!t.closest("[data-fancybox-close]"),o=t.classList.contains("fancybox__backdrop");(n||o)&&fe(e)}function ve(e){var t;const{el:n,htmlEl:i,panzoomRef:s,closeButtonEl:l}=e,r=s?s.getWrapper():i;if(!n||!n.parentElement||!r)return;let a=Z("closeButton");if("auto"===a&&(a=!0!==(null===(t=null==A?void 0:A.getPlugins().Toolbar)||void 0===t?void 0:t.isEnabled())),a){if(!l){const t=strToHtml_e(J(Z("closeButtonTpl")));t&&(addClass_s(t,"is-close-button"),e.closeButtonEl=r.insertAdjacentElement("afterbegin",t),addClass_s(n,"has-close-btn"))}}else ye(e)}function ye(e){e.closeButtonEl&&(e.closeButtonEl.remove(),e.closeButtonEl=void 0),removeClass_s(e.el,"has-close-btn")}function he(e){if(!(G&&A&&1===A.getState()&&e&&e.index===A.getOptions().initialPage&&e.el&&e.el.parentElement))return;if(void 0!==e.state&&1!==e.state)return;G=!1;const t=e.panzoomRef,n=null==t?void 0:t.getTween(),o=Z("zoomEffect")&&n?we(e):void 0;if(t&&n&&o){const{x:e,y:i,scale:s}=t.getStartPosition();return void n.spring({tension:215,friction:25,restDelta:.001,restSpeed:.001,maxSpeed:1/0}).from(o).to({x:e,y:i,scale:s}).start()}const i=(null==t?void 0:t.getContent())||e.htmlEl;i&&R(i,Z("showClass",e))}function be(){var e;return(null===(e=F.getInstance())||void 0===e?void 0:e.getId())===$}function Ee(){var e;return null===(e=null==A?void 0:A.getPage())||void 0===e?void 0:e.slides[0]}function xe(){const e=Ee();return e?e.triggerEl||Z("triggerEl"):void 0}function we(e){var t,n;const o=e.thumbEl;if(!o||!(e=>{const t=e.getBoundingClientRect(),n=e.closest("[style]"),o=null==n?void 0:n.parentElement;if(n&&n.style.transform&&o){const e=o.getBoundingClientRect();if(t.left<e.left||t.left>e.left+e.width-t.width)return!1;if(t.top<e.top||t.top>e.top+e.height-t.height)return!1}const i=Math.max(document.documentElement.clientHeight,window.innerHeight),s=Math.max(document.documentElement.clientWidth,window.innerWidth);return!(t.bottom<0||t.top-i>=0||t.right<0||t.left-s>=0)})(o))return;const i=null===(n=null===(t=e.panzoomRef)||void 0===t?void 0:t.getWrapper())||void 0===n?void 0:n.getBoundingClientRect(),s=null==i?void 0:i.width,l=null==i?void 0:i.height;if(!s||!l)return;const r=o.getBoundingClientRect();let a=r.width,c=r.height,u=r.left,d=r.top;if(!r||!a||!c)return;if(o instanceof HTMLImageElement){const e=window.getComputedStyle(o).getPropertyValue("object-fit");if("contain"===e||"scale-down"===e){const{width:t,height:n}=((e,t,n,o,i="contain")=>{if("contain"===i||e>n||t>o){const i=n/e,s=o/t,l=Math.min(i,s);e*=l,t*=l}return{width:e,height:t}})(o.naturalWidth,o.naturalHeight,a,c,e);u+=.5*(a-t),d+=.5*(c-n),a=t,c=n}}if(Math.abs(s/l-a/c)>.1)return;return{x:u+.5*a-(i.left+.5*s),y:d+.5*c-(i.top+.5*l),scale:a/s}}function Le(){N&&clearTimeout(N),N=void 0,document.removeEventListener("mousemove",me)}function je(){if(X)return;if(N)return;const e=Z("idle");e&&(N=setTimeout(Se,e))}function Se(){C&&(Le(),addClass_s(C,"is-idle"),document.addEventListener("mousemove",me),X=!0)}function Pe(){X&&(Te(),je())}function Te(){Le(),null==C||C.classList.remove("is-idle"),X=!1}function Ce(){const e=xe();var t;!e||(t=e.getBoundingClientRect()).bottom>0&&t.right>0&&t.left<(window.innerWidth||document.documentElement.clientWidth)&&t.top<(window.innerHeight||document.documentElement.clientHeight)||e.closest("[inert]")||e.scrollIntoView({behavior:"instant",block:"center",inline:"center"})}function Me(e,t){var n,o,i,s,r;if(V===_.Closing||V===_.Destroyed)return;const a=new Event("shouldClose",{bubbles:!0,cancelable:!0});if(ee("shouldClose",a,e),a.defaultPrevented)return;if(Le(),e){if(e.defaultPrevented)return;k(e),e.stopPropagation(),e.stopImmediatePropagation()}if(V=_.Closing,null==q||q.pause(),null==D||D.destroy(),A){null===(n=A.getGestures())||void 0===n||n.destroy(),null===(o=A.getTween())||void 0===o||o.pause();for(const e of A.getSlides()){const t=e.panzoomRef;t&&(extend_r(t.getOptions(),{clickAction:!1,dblClickAction:!1,wheelAction:!1,bounds:!1,minScale:0,maxScale:1/0}),null===(i=t.getGestures())||void 0===i||i.destroy(),null===(s=t.getTween())||void 0===s||s.pause())}}const c=null==A?void 0:A.getPlugins();null===(r=null==c?void 0:c.Autoplay)||void 0===r||r.stop();const u=null==c?void 0:c.Fullscreen;u&&u.inFullscreen()?Promise.resolve(u.exit()).then(()=>{setTimeout(()=>{Ae(e,t)},150)}):Ae(e,t)}function Ae(e,t){var n,o;if(V!==_.Closing)return;ee("close",e),G=!1,document.body.removeEventListener("click",pe),document.body.removeEventListener("keydown",ge,{passive:!1,capture:!0}),Z("placeFocusBack")&&Ce();const i=document.activeElement;i&&(null==r?void 0:r.contains(i))&&i.blur(),Z("fadeEffect")&&(null==C||C.classList.remove("is-ready"),null==C||C.classList.add("is-hiding")),null==C||C.classList.add("is-closing");const s=Ee(),l=null==s?void 0:s.el,a=null==s?void 0:s.panzoomRef,c=null===(n=null==s?void 0:s.panzoomRef)||void 0===n?void 0:n.getTween(),u=t||Z("hideClass");let d=!1,m=!1;if(A&&s&&l&&a&&c){let e;if(Z("zoomEffect")&&1===s.state&&(e=we(s)),e){d=!0;const t=()=>{e=we(s),e?c.to(Object.assign(Object.assign({},y),e)):ke()};a.on("refresh",()=>{t()}),c.easing(tween_c.Easings.EaseOut).duration(350).from(Object.assign({},a.getTransform())).to(Object.assign(Object.assign({},y),e)).start(),(null==l?void 0:l.getAnimations())&&(l.style.animationPlayState="paused",requestAnimationFrame(()=>{t()}))}}const g=(null==s?void 0:s.htmlEl)||(null===(o=null==s?void 0:s.panzoomRef)||void 0===o?void 0:o.getWrapper());g&&O(g),!d&&u&&g&&(m=!0,R(g,u,()=>{ke()})),d||m?setTimeout(()=>{ke()},350):ke()}function ke(){var e,t,n,o,i;if(V===_.Destroyed)return;V=_.Destroyed;const l=xe();ee("destroy"),null===(t=null===(e=Z("sync"))||void 0===e?void 0:e.getPlugins().Autoplay)||void 0===t||t.resume(),null===(o=null===(n=Z("sync"))||void 0===n?void 0:n.getPlugins().Autoscroll)||void 0===o||o.resume(),r instanceof HTMLDialogElement&&r.close(),null===(i=null==A?void 0:A.getContainer())||void 0===i||i.classList.remove("is-idle"),null==A||A.destroy();for(const e of Object.values(K))null==e||e.destroy();if(K={},null==r||r.remove(),r=void 0,C=void 0,A=void 0,z.delete($),!z.size&&(scrollLock_t(!1),document.documentElement.classList.remove(B),Z("placeFocusBack")&&l&&!l.closest("[inert]")))try{null==l||l.focus({preventScroll:!0})}catch(e){}}const Re={close:Me,destroy:ke,getCarousel:function(){return A},getContainer:function(){return C},getId:function(){return $},getOptions:function(){return W},getPlugins:function(){return K},getSlide:function(){return Ee()},getState:function(){return V},init:function(t=[],n={}){V!==_.Init&&(Re.destroy(),V=_.Init),W=extend_r({},I,n),$=Z("id")||"fancybox-"+ ++H;const a=z.get($);if(a&&a.destroy(),z.set($,Re),ee("init"),function(){for(const[e,t]of Object.entries(Object.assign(Object.assign({},F.Plugins),W.plugins||{})))if(e&&!K[e]&&t instanceof Function){const n=t();n.init(Re),K[e]=n}ee("initPlugins")}(),function(e=[]){ee("initSlides",e),U=[...e]}(t),function(){const t=Z("parentEl")||document.body;if(!(t&&t instanceof HTMLElement))return;const n=J(Z("mainTpl")||"");if(r=strToHtml_e(n)||void 0,!r)return;if(C=r.querySelector(".fancybox__container"),!(C&&C instanceof HTMLElement))return;const l=Z("mainClass");l&&addClass_s(C,l);const a=Z("mainStyle");if(a&&isPlainObject_t(a))for(const[e,t]of Object.entries(a))C.style.setProperty(e,t);const u=Z("theme"),d="auto"===u?window.matchMedia("(prefers-color-scheme:light)").matches:"light"===u;C.setAttribute("theme",d?"light":"dark"),r.setAttribute("id",`${$}`),r.addEventListener("keydown",e=>{"Escape"===e.key&&k(e)}),r.addEventListener("wheel",e=>{const t=e.target;let n=Z("wheel",e);t.closest(".f-thumbs")&&(n="slide");const o="slide"===n,s=[-e.deltaX||0,-e.deltaY||0,-e.detail||0].reduce(function(e,t){return Math.abs(t)>Math.abs(e)?t:e}),l=Math.max(-1,Math.min(1,s)),r=Date.now();Y&&r-Y<300?o&&k(e):(Y=r,ee("wheel",e,l),e.defaultPrevented||("close"===n?Me(e):"slide"===n&&A&&!getScrollableParent_n(t)&&(k(e),A[l>0?"prev":"next"]())))},{capture:!0,passive:!1}),r.addEventListener("cancel",e=>{Me(e)}),t.append(r),1===z.size&&(Z("hideScrollbar")&&scrollLock_t(!0),document.documentElement.classList.add(B));ee("initLayout"),r instanceof HTMLDialogElement&&(Z("modal")?r.showModal():r.show())}(),function(){if(M=(null==r?void 0:r.querySelector(".fancybox__carousel"))||void 0,!M)return;M.fancybox=Re;const e=extend_r({},{Autoplay:{autoStart:!1,pauseOnHover:!1,progressbarParentEl:e=>{const t=e.getContainer();return(null==t?void 0:t.querySelector(".f-carousel__toolbar [data-autoplay-action]"))||t}},Fullscreen:{el:C},Toolbar:{absolute:!0,items:{counter:{tpl:'<div class="f-counter"><span data-fancybox-page></span>/<span data-fancybox-pages></span></div>'}},display:{left:["counter"],right:["toggleFull","autoplay","fullscreen","thumbs","close"]}},Video:{autoplay:!0},Thumbs:{minCount:2,Carousel:{classes:{container:"fancybox__thumbs"}}},classes:{container:"fancybox__carousel",viewport:"fancybox__viewport",slide:"fancybox__slide"},spinnerTpl:'<div class="f-spinner" data-fancybox-close></div>',dragFree:!1,slidesPerPage:1,plugins:{Sync:carousel_sync_i,Arrows:carousel_arrows_l,Lazyload:carousel_lazyload_i,Zoomable:carousel_zoomable_s,Html:carousel_html_l,Video:carousel_video_s,Autoplay:carousel_autoplay_o,Fullscreen:carousel_fullscreen_l,Thumbs:carousel_thumbs_c,Toolbar:carousel_toolbar_c}},Z("Carousel")||{},{slides:U,enabled:!0,initialPage:Z("startIndex")||0,l10n:Z("l10n")});A=carousel_E(M,e),ee("initCarousel",A),A.on("*",(e,t,...n)=>{ee(`Carousel.${t}`,e,...n)}),A.on("attachSlideEl",ne),A.on("detachSlideEl",oe),A.on("contentLoading",ae),A.on("contentReady",ce),A.on("ready",le),A.on("change",se),A.on("settle",re),A.on("thumbs:ready",ue),A.on("thumbs:destroy",ue),A.init()}(),r&&C){if(Z("closeExisting"))for(const[e,t]of z.entries())e!==$&&t.close();Z("fadeEffect")?(setTimeout(()=>{te()},500),addClass_s(C,"is-revealing")):te(),C.classList.add("is-ready"),V=_.Ready,ee("ready")}},isCurrentSlide:function(e){const t=Ee();return!(!e||!t)&&t.index===e.index},isTopMost:function(){return be()},localize:J,off:function(e,t){return Q.has(e)&&Q.set(e,Q.get(e).filter(e=>e!==t)),Re},on:function(e,t){return Q.set(e,[...Q.get(e)||[],t]),Re},toggleIdle(e){(X||!0===e)&&Se(),X&&!1!==e||Te()}};return Re};function q(){for(const e of Object.values(F.Plugins)){const t=e.setup;"function"==typeof t&&t(F)}}function N(e,t={}){var n,o,i;if(!(e&&e instanceof Element))return;let s,r,a,c,u={};for(const[t,n]of F.openers)if(t.contains(e))for(const[o,i]of n){let n;if(o){for(const i of t.querySelectorAll(o))if(i.contains(e)){n=i;break}if(!n)continue}for(const[o,d]of i){let i=null;try{i=e.closest(o)}catch(e){}i&&(r=t,a=n,s=i,c=o,extend_r(u,d||{}))}}if(!r||!c||!s)return;const d=extend_r({},I,t,u,{triggerEl:s});let f=[].slice.call((a||r).querySelectorAll(c));const m=s.closest(".f-carousel"),g=null==m?void 0:m.carousel;if(g&&(!a||!m.contains(a))){const e=[];for(const t of null==g?void 0:g.getSlides()){const n=t.el;n&&(n.matches(c)?e.push(n):e.push(...[].slice.call(n.querySelectorAll(c))))}e.length&&(f=[...e],null===(n=g.getPlugins().Autoplay)||void 0===n||n.pause(),null===(o=g.getPlugins().Autoscroll)||void 0===o||o.pause(),d.sync=g)}if(!1===d.groupAll){const e=d.groupAttr,t=e&&s?s.getAttribute(`${e}`):"";f=e&&t?f.filter(n=>n.getAttribute(`${e}`)===t):[s]}if(!f.length)return;null===(i=d.triggerEvent)||void 0===i||i.preventDefault();const p=F.getInstance(),v=null==p?void 0:p.getState();if(p&&(v===_.Init||v===_.Ready)){const e=p.getOptions().triggerEl;if(e&&f.indexOf(e)>-1)return}return Object.assign({},d.Carousel||{}).rtl&&(f=f.reverse()),s&&void 0===t.startIndex&&(d.startIndex=f.indexOf(s)),F.fromNodes(f,d)}const F={Plugins:{Hash:fancybox_hash_m},version:"6.1.13",openers:new Map,bind:function(e,n,o,i){if(!canUseDOM_e())return;let s=document.body,l=null,a="[data-fancybox]",c={};e instanceof Element&&(s=e),isString_t(e)&&isString_t(n)?(l=e,a=n):isString_t(n)&&isString_t(o)?(l=n,a=o):isString_t(n)?a=n:isString_t(e)&&(a=e),"object"==typeof n&&(c=n||{}),"object"==typeof o&&(c=o||{}),"object"==typeof i&&(c=i||{}),function(e,t,n,o={}){if(!(e&&e instanceof Element&&n))return;const i=F.openers.get(e)||new Map,s=i.get(t)||new Map;s.set(n,o),i.set(t,s),F.openers.set(e,i),1===i.size&&e.addEventListener("click",F.fromEvent),q()}(s,l,a,c)},close:function(e=!0,...t){if(e)for(const e of z.values())e.close(...t);else{const e=F.getInstance();e&&e.close(...t)}},destroy:function(){let e;for(;e=F.getInstance();)e.destroy();for(const e of F.openers.keys())e.removeEventListener("click",F.fromEvent);F.openers.clear()},fromEvent:function(e){if(e.defaultPrevented)return;if(e.button&&0!==e.button)return;if(e.ctrlKey||e.metaKey||e.shiftKey)return;let t=e.composedPath()[0];const n={triggerEvent:e};if(t.closest(".fancybox__container.is-hiding"))return k(e),void e.stopPropagation();const o=t.closest("[data-fancybox-delegate]")||void 0;if(o){const e=o.dataset.fancyboxDelegate||"",i=document.querySelectorAll(`[data-fancybox="${e}"]`),s=parseInt(o.dataset.fancyboxIndex||"",10)||0;t=i[s]||i[0],extend_r(n,{delegateEl:o,startIndex:s})}return N(t,n)},fromNodes:function(e,t){t=extend_r({},I,t||{});const n=[],o=e=>e instanceof HTMLImageElement?e:e instanceof HTMLElement?e.querySelector("img:not([aria-hidden])"):void 0;for(const i of e){const s=i.dataset||{},l=t.delegateEl&&e.indexOf(i)===t.startIndex?t.delegateEl:void 0,r=o(l)||o(i)||void 0,a=s.src||i.getAttribute("href")||i.getAttribute("currentSrc")||i.getAttribute("src")||void 0,c=s.thumb||s.thumbSrc||(null==r?void 0:r.getAttribute("currentSrc"))||(null==r?void 0:r.getAttribute("src"))||(null==r?void 0:r.dataset.lazySrc)||void 0,u={src:a,alt:s.alt||(null==r?void 0:r.getAttribute("alt"))||void 0,thumbSrc:c,thumbEl:r,triggerEl:i,delegateEl:l};for(const e in s){let t=s[e]+"";t="false"!==t&&("true"===t||t),u[e]=t}n.push(u)}return F.show(n,t)},fromSelector:function(e,n,o,i){if(!canUseDOM_e())return;let s=document.body,l=null,a="[data-fancybox]",c={};e instanceof Element&&(s=e),isString_t(e)&&isString_t(n)?(l=e,a=n):isString_t(n)&&isString_t(o)?(l=n,a=o):isString_t(n)?a=n:isString_t(e)&&(a=e),"object"==typeof n&&(c=n||{}),"object"==typeof o&&(c=o||{}),"object"==typeof i&&(c=i||{});for(const[e,t]of F.openers)for(const[n,o]of t)for(const[t,i]of o)if(e===s&&n===l){const e=s.querySelector((n?`${n} `:"")+a);if(e&&e.matches(t))return F.fromTriggerEl(e,c)}},fromTriggerEl:N,getCarousel:function(){var e;return(null===(e=F.getInstance())||void 0===e?void 0:e.getCarousel())||void 0},getDefaults:function(){return I},getInstance:function(e){if(e){const t=z.get(e);return t&&t.getState()!==_.Destroyed?t:void 0}return Array.from(z.values()).reverse().find(e=>{if(e.getState()!==_.Destroyed)return e})||void 0},getSlide:function(){var e;return(null===(e=F.getInstance())||void 0===e?void 0:e.getSlide())||void 0},show:function(e=[],t={}){return q(),D().init(e,t)},unbind:function(e,n,o){if(!canUseDOM_e())return;let i=document.body,s=null,l="[data-fancybox]";e instanceof Element&&(i=e),isString_t(e)&&isString_t(n)?(s=e,l=n):isString_t(n)&&isString_t(o)?(s=n,l=o):isString_t(n)?l=n:isString_t(e)&&(l=e),function(e,t,n){if(!(e&&e instanceof Element&&n))return;const o=F.openers.get(e)||new Map,i=o.get(t)||new Map;i&&n&&i.delete(n),i.size&&n||o.delete(t),o.size||(F.openers.delete(e),e.removeEventListener("click",F.fromEvent))}(i,s,l)}};

;// ./node_modules/@fancyapps/ui/dist/fancybox/index.js
/*! License details at fancyapps.com/license */



/***/ }),

/***/ 60751:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "RouterContext", ({
    enumerable: true,
    get: function() {
        return RouterContext;
    }
}));
const _interop_require_default = __webpack_require__(73623);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(12115));
const RouterContext = _react.default.createContext(null);
if (false) {} //# sourceMappingURL=router-context.shared-runtime.js.map


/***/ }),

/***/ 61878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Search = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
 //# sourceMappingURL=search.js.map


/***/ }),

/***/ 63806:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ 64831:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ createCollection)
});

// UNUSED EXPORTS: unstable_createCollection

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var dist = __webpack_require__(68599);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(47527);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
;// ./node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot/dist/index.mjs
// src/slot.tsx



// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = react.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = react.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (react.Children.count(newElement) > 1) return react.Children.only(null);
          return react.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react.isValidElement(newElement) ? react.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ (/* unused pure expression or super */ null && (createSlot("Slot")));
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = react.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (react.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== react.Fragment) {
        props2.ref = forwardedRef ? (0,react_compose_refs_dist/* composeRefs */.t)(forwardedRef, childrenRef) : childrenRef;
      }
      return react.cloneElement(children, props2);
    }
    return react.Children.count(children) > 1 ? react.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable2 = ({ children }) => {
    return /* @__PURE__ */ jsx(Fragment2, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
var Slottable = /* @__PURE__ */ (/* unused pure expression or super */ null && (createSlottable("Slottable")));
function isSlottable(child) {
  return react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

//# sourceMappingURL=index.mjs.map

;// ./node_modules/@radix-ui/react-collection/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ createCollection,unstable_createCollection auto */ // src/collection-legacy.tsx





function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0,dist/* createContextScope */.A)(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope, children } = props;
        const ref = react.useRef(null);
        const itemMap = react.useRef(/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(CollectionProviderImpl, {
            scope,
            itemMap,
            collectionRef: ref,
            children
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
    const CollectionSlot = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.s)(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(CollectionSlotImpl, {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
    const CollectionItemSlot = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = react.useRef(null);
        const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.s)(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        react.useEffect(()=>{
            context.itemMap.set(ref, {
                ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(CollectionItemSlotImpl, {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        const getItems = react.useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}
// src/collection.tsx




// src/ordered-dictionary.ts
var __instanciated = /* @__PURE__ */ new WeakMap();
var OrderedDict = class _OrderedDict extends Map {
    #keys;
    constructor(entries){
        super(entries);
        this.#keys = [
            ...super.keys()
        ];
        __instanciated.set(this, true);
    }
    set(key, value) {
        if (__instanciated.get(this)) {
            if (this.has(key)) {
                this.#keys[this.#keys.indexOf(key)] = key;
            } else {
                this.#keys.push(key);
            }
        }
        super.set(key, value);
        return this;
    }
    insert(index, key, value) {
        const has = this.has(key);
        const length = this.#keys.length;
        const relativeIndex = toSafeInteger(index);
        let actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
        const safeIndex = actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
        if (safeIndex === this.size || has && safeIndex === this.size - 1 || safeIndex === -1) {
            this.set(key, value);
            return this;
        }
        const size = this.size + (has ? 0 : 1);
        if (relativeIndex < 0) {
            actualIndex++;
        }
        const keys = [
            ...this.#keys
        ];
        let nextValue;
        let shouldSkip = false;
        for(let i = actualIndex; i < size; i++){
            if (actualIndex === i) {
                let nextKey = keys[i];
                if (keys[i] === key) {
                    nextKey = keys[i + 1];
                }
                if (has) {
                    this.delete(key);
                }
                nextValue = this.get(nextKey);
                this.set(key, value);
            } else {
                if (!shouldSkip && keys[i - 1] === key) {
                    shouldSkip = true;
                }
                const currentKey = keys[shouldSkip ? i : i - 1];
                const currentValue = nextValue;
                nextValue = this.get(currentKey);
                this.delete(currentKey);
                this.set(currentKey, currentValue);
            }
        }
        return this;
    }
    with(index, key, value) {
        const copy = new _OrderedDict(this);
        copy.insert(index, key, value);
        return copy;
    }
    before(key) {
        const index = this.#keys.indexOf(key) - 1;
        if (index < 0) {
            return void 0;
        }
        return this.entryAt(index);
    }
    /**
   * Sets a new key-value pair at the position before the given key.
   */ setBefore(key, newKey, value) {
        const index = this.#keys.indexOf(key);
        if (index === -1) {
            return this;
        }
        return this.insert(index, newKey, value);
    }
    after(key) {
        let index = this.#keys.indexOf(key);
        index = index === -1 || index === this.size - 1 ? -1 : index + 1;
        if (index === -1) {
            return void 0;
        }
        return this.entryAt(index);
    }
    /**
   * Sets a new key-value pair at the position after the given key.
   */ setAfter(key, newKey, value) {
        const index = this.#keys.indexOf(key);
        if (index === -1) {
            return this;
        }
        return this.insert(index + 1, newKey, value);
    }
    first() {
        return this.entryAt(0);
    }
    last() {
        return this.entryAt(-1);
    }
    clear() {
        this.#keys = [];
        return super.clear();
    }
    delete(key) {
        const deleted = super.delete(key);
        if (deleted) {
            this.#keys.splice(this.#keys.indexOf(key), 1);
        }
        return deleted;
    }
    deleteAt(index) {
        const key = this.keyAt(index);
        if (key !== void 0) {
            return this.delete(key);
        }
        return false;
    }
    at(index) {
        const key = at(this.#keys, index);
        if (key !== void 0) {
            return this.get(key);
        }
    }
    entryAt(index) {
        const key = at(this.#keys, index);
        if (key !== void 0) {
            return [
                key,
                this.get(key)
            ];
        }
    }
    indexOf(key) {
        return this.#keys.indexOf(key);
    }
    keyAt(index) {
        return at(this.#keys, index);
    }
    from(key, offset) {
        const index = this.indexOf(key);
        if (index === -1) {
            return void 0;
        }
        let dest = index + offset;
        if (dest < 0) dest = 0;
        if (dest >= this.size) dest = this.size - 1;
        return this.at(dest);
    }
    keyFrom(key, offset) {
        const index = this.indexOf(key);
        if (index === -1) {
            return void 0;
        }
        let dest = index + offset;
        if (dest < 0) dest = 0;
        if (dest >= this.size) dest = this.size - 1;
        return this.keyAt(dest);
    }
    find(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return entry;
            }
            index++;
        }
        return void 0;
    }
    findIndex(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return index;
            }
            index++;
        }
        return -1;
    }
    filter(predicate, thisArg) {
        const entries = [];
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                entries.push(entry);
            }
            index++;
        }
        return new _OrderedDict(entries);
    }
    map(callbackfn, thisArg) {
        const entries = [];
        let index = 0;
        for (const entry of this){
            entries.push([
                entry[0],
                Reflect.apply(callbackfn, thisArg, [
                    entry,
                    index,
                    this
                ])
            ]);
            index++;
        }
        return new _OrderedDict(entries);
    }
    reduce(...args) {
        const [callbackfn, initialValue] = args;
        let index = 0;
        let accumulator = initialValue ?? this.at(0);
        for (const entry of this){
            if (index === 0 && args.length === 1) {
                accumulator = entry;
            } else {
                accumulator = Reflect.apply(callbackfn, this, [
                    accumulator,
                    entry,
                    index,
                    this
                ]);
            }
            index++;
        }
        return accumulator;
    }
    reduceRight(...args) {
        const [callbackfn, initialValue] = args;
        let accumulator = initialValue ?? this.at(-1);
        for(let index = this.size - 1; index >= 0; index--){
            const entry = this.at(index);
            if (index === this.size - 1 && args.length === 1) {
                accumulator = entry;
            } else {
                accumulator = Reflect.apply(callbackfn, this, [
                    accumulator,
                    entry,
                    index,
                    this
                ]);
            }
        }
        return accumulator;
    }
    toSorted(compareFn) {
        const entries = [
            ...this.entries()
        ].sort(compareFn);
        return new _OrderedDict(entries);
    }
    toReversed() {
        const reversed = new _OrderedDict();
        for(let index = this.size - 1; index >= 0; index--){
            const key = this.keyAt(index);
            const element = this.get(key);
            reversed.set(key, element);
        }
        return reversed;
    }
    toSpliced(...args) {
        const entries = [
            ...this.entries()
        ];
        entries.splice(...args);
        return new _OrderedDict(entries);
    }
    slice(start, end) {
        const result = new _OrderedDict();
        let stop = this.size - 1;
        if (start === void 0) {
            return result;
        }
        if (start < 0) {
            start = start + this.size;
        }
        if (end !== void 0 && end > 0) {
            stop = end - 1;
        }
        for(let index = start; index <= stop; index++){
            const key = this.keyAt(index);
            const element = this.get(key);
            result.set(key, element);
        }
        return result;
    }
    every(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (!Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return false;
            }
            index++;
        }
        return true;
    }
    some(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return true;
            }
            index++;
        }
        return false;
    }
};
function at(array, index) {
    if ("at" in Array.prototype) {
        return Array.prototype.at.call(array, index);
    }
    const actualIndex = toSafeIndex(array, index);
    return actualIndex === -1 ? void 0 : array[actualIndex];
}
function toSafeIndex(array, index) {
    const length = array.length;
    const relativeIndex = toSafeInteger(index);
    const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
    return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
function toSafeInteger(number) {
    return number !== number || number === 0 ? 0 : Math.trunc(number);
}
// src/collection.tsx

function createCollection2(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = createContextScope2(PROVIDER_NAME);
    const [CollectionContextProvider, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionElement: null,
        collectionRef: {
            current: null
        },
        collectionRefObject: {
            current: null
        },
        itemMap: new OrderedDict(),
        setItemMap: ()=>void 0
    });
    const CollectionProvider = ({ state, ...props })=>{
        return state ? /* @__PURE__ */ jsx2(CollectionProviderImpl, {
            ...props,
            state
        }) : /* @__PURE__ */ jsx2(CollectionInit, {
            ...props
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const CollectionInit = (props)=>{
        const state = useInitCollection();
        return /* @__PURE__ */ jsx2(CollectionProviderImpl, {
            ...props,
            state
        });
    };
    CollectionInit.displayName = PROVIDER_NAME + "Init";
    const CollectionProviderImpl = (props)=>{
        const { scope, children, state } = props;
        const ref = React2.useRef(null);
        const [collectionElement, setCollectionElement] = React2.useState(null);
        const composeRefs = useComposedRefs2(ref, setCollectionElement);
        const [itemMap, setItemMap] = state;
        React2.useEffect(()=>{
            if (!collectionElement) return;
            const observer = getChildListObserver(()=>{});
            observer.observe(collectionElement, {
                childList: true,
                subtree: true
            });
            return ()=>{
                observer.disconnect();
            };
        }, [
            collectionElement
        ]);
        return /* @__PURE__ */ jsx2(CollectionContextProvider, {
            scope,
            itemMap,
            setItemMap,
            collectionRef: composeRefs,
            collectionRefObject: ref,
            collectionElement,
            children
        });
    };
    CollectionProviderImpl.displayName = PROVIDER_NAME + "Impl";
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlotImpl = createSlot2(COLLECTION_SLOT_NAME);
    const CollectionSlot = /*#__PURE__*/ React2.forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = useComposedRefs2(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ jsx2(CollectionSlotImpl, {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlotImpl = createSlot2(ITEM_SLOT_NAME);
    const CollectionItemSlot = /*#__PURE__*/ React2.forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = React2.useRef(null);
        const [element, setElement] = React2.useState(null);
        const composedRefs = useComposedRefs2(forwardedRef, ref, setElement);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        const { setItemMap } = context;
        const itemDataRef = React2.useRef(itemData);
        if (!shallowEqual(itemDataRef.current, itemData)) {
            itemDataRef.current = itemData;
        }
        const memoizedItemData = itemDataRef.current;
        React2.useEffect(()=>{
            const itemData2 = memoizedItemData;
            setItemMap((map)=>{
                if (!element) {
                    return map;
                }
                if (!map.has(element)) {
                    map.set(element, {
                        ...itemData2,
                        element
                    });
                    return map.toSorted(sortByDocumentPosition);
                }
                return map.set(element, {
                    ...itemData2,
                    element
                }).toSorted(sortByDocumentPosition);
            });
            return ()=>{
                setItemMap((map)=>{
                    if (!element || !map.has(element)) {
                        return map;
                    }
                    map.delete(element);
                    return new OrderedDict(map);
                });
            };
        }, [
            element,
            memoizedItemData,
            setItemMap
        ]);
        return /* @__PURE__ */ jsx2(CollectionItemSlotImpl, {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useInitCollection() {
        return React2.useState(new OrderedDict());
    }
    function useCollection(scope) {
        const { itemMap } = useCollectionContext(name + "CollectionConsumer", scope);
        return itemMap;
    }
    const functions = {
        createCollectionScope,
        useCollection,
        useInitCollection
    };
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        functions
    ];
}
function shallowEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== "object" || typeof b !== "object") return false;
    if (a == null || b == null) return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA){
        if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
        if (a[key] !== b[key]) return false;
    }
    return true;
}
function isElementPreceding(a, b) {
    return !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
function sortByDocumentPosition(a, b) {
    return !a[1].element || !b[1].element ? 0 : isElementPreceding(a[1].element, b[1].element) ? -1 : 1;
}
function getChildListObserver(callback) {
    const observer = new MutationObserver((mutationsList)=>{
        for (const mutation of mutationsList){
            if (mutation.type === "childList") {
                callback();
                return;
            }
        }
    });
    return observer;
}
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 66088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ChevronDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
 //# sourceMappingURL=chevron-down.js.map


/***/ }),

/***/ 66294:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useLayoutEffect2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
// packages/react/use-layout-effect/src/use-layout-effect.tsx

var useLayoutEffect2 = globalThis?.document ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : () => {
};

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 67635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Copy)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Copy = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Copy", [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
]);
 //# sourceMappingURL=copy.js.map


/***/ }),

/***/ 68599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createContextScope)
/* harmony export */ });
/* unused harmony export createContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95155);
// packages/react/context/src/create-context.tsx


function createContext2(rootComponentName, defaultContext) {
  const Context = React.createContext(defaultContext);
  const Provider = (props) => {
    const { children, ...context } = props;
    const value = React.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsx(Context.Provider, { value, children });
  };
  Provider.displayName = rootComponentName + "Provider";
  function useContext2(consumerName) {
    const context = React.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 68822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Info = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Info", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 16v-4",
            key: "1dtifu"
        }
    ],
    [
        "path",
        {
            d: "M12 8h.01",
            key: "e9boi3"
        }
    ]
]);
 //# sourceMappingURL=info.js.map


/***/ }),

/***/ 69470:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isLocalURL", ({
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
}));
const _utils = __webpack_require__(10857);
const _hasbasepath = __webpack_require__(48512);
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map


/***/ }),

/***/ 69747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Repeat1)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Repeat1 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Repeat1", [
    [
        "path",
        {
            d: "m17 2 4 4-4 4",
            key: "nntrym"
        }
    ],
    [
        "path",
        {
            d: "M3 11v-1a4 4 0 0 1 4-4h14",
            key: "84bu3i"
        }
    ],
    [
        "path",
        {
            d: "m7 22-4-4 4-4",
            key: "1wqhfi"
        }
    ],
    [
        "path",
        {
            d: "M21 13v1a4 4 0 0 1-4 4H3",
            key: "1rx37r"
        }
    ],
    [
        "path",
        {
            d: "M11 10h1v4",
            key: "70cz1p"
        }
    ]
]);
 //# sourceMappingURL=repeat-1.js.map


/***/ }),

/***/ 70379:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mK: () => (/* binding */ composeEventHandlers)
/* harmony export */ });
/* unused harmony exports canUseDOM, getActiveElement, getOwnerDocument, getOwnerWindow, isFrame */
// src/primitive.tsx
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}
function getOwnerWindow(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access window outside of the DOM");
  }
  return element?.ownerDocument?.defaultView ?? window;
}
function getOwnerDocument(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access document outside of the DOM");
  }
  return element?.ownerDocument ?? document;
}
function getActiveElement(node, activeDescendant = false) {
  const { activeElement } = getOwnerDocument(node);
  if (!activeElement?.nodeName) {
    return null;
  }
  if (isFrame(activeElement) && activeElement.contentDocument) {
    return getActiveElement(activeElement.contentDocument.body, activeDescendant);
  }
  if (activeDescendant) {
    const id = activeElement.getAttribute("aria-activedescendant");
    if (id) {
      const element = getOwnerDocument(activeElement).getElementById(id);
      if (element) {
        return element;
      }
    }
  }
  return activeElement;
}
function isFrame(element) {
  return element.tagName === "IFRAME";
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 74643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Volume2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Volume2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Volume2", [
    [
        "path",
        {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw"
        }
    ],
    [
        "path",
        {
            d: "M16 9a5 5 0 0 1 0 6",
            key: "1q6k2b"
        }
    ],
    [
        "path",
        {
            d: "M19.364 18.364a9 9 0 0 0 0-12.728",
            key: "ijwkga"
        }
    ]
]);
 //# sourceMappingURL=volume-2.js.map


/***/ }),

/***/ 75806:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ twMerge)
});

;// ./node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = '-';
function createClassUtils(config) {
  var classMap = createClassMap(config);
  var conflictingClassGroups = config.conflictingClassGroups,
    _config$conflictingCl = config.conflictingClassGroupModifiers,
    conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    var conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
    }
    return conflicts;
  }
  return {
    getClassGroupId: getClassGroupId,
    getConflictingClassGroupIds: getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(function (_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })?.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
}
/**
 * Exported for testing only
 */
function createClassMap(config) {
  var theme = config.theme,
    prefix = config.prefix;
  var classMap = {
    nextPart: new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function (_ref2) {
    var classGroupId = _ref2[0],
      classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function (classDefinition) {
    if (typeof classDefinition === 'string') {
      var classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId: classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(function (_ref3) {
      var key = _ref3[0],
        classGroup = _ref3[1];
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function (pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(function (_ref4) {
    var classGroupId = _ref4[0],
      classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function (classDefinition) {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(function (_ref5) {
          var key = _ref5[0],
            value = _ref5[1];
          return [prefix + key, value];
        }));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}


//# sourceMappingURL=class-utils.mjs.map

;// ./node_modules/tailwind-merge/dist/lib/lru-cache.mjs
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return undefined;
      },
      set: function set() {}
    };
  }
  var cacheSize = 0;
  var cache = new Map();
  var previousCache = new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  }
  return {
    get: function get(key) {
      var value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}


//# sourceMappingURL=lru-cache.mjs.map

;// ./node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
var IMPORTANT_MODIFIER = '!';
function createSplitModifiers(config) {
  var separator = config.separator || ':';
  var isSeparatorSingleCharacter = separator.length === 1;
  var firstSeparatorCharacter = separator[0];
  var separatorLength = separator.length;
  // splitModifiers inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  return function splitModifiers(className) {
    var modifiers = [];
    var bracketDepth = 0;
    var modifierStart = 0;
    var postfixModifierPosition;
    for (var index = 0; index < className.length; index++) {
      var currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers: modifiers,
      hasImportantModifier: hasImportantModifier,
      baseClassName: baseClassName,
      maybePostfixModifierPosition: maybePostfixModifierPosition
    };
  };
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function (modifier) {
    var isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}


//# sourceMappingURL=modifier-utils.mjs.map

;// ./node_modules/tailwind-merge/dist/lib/config-utils.mjs




function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}


//# sourceMappingURL=config-utils.mjs.map

;// ./node_modules/tailwind-merge/dist/lib/merge-classlist.mjs


var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers,
    getClassGroupId = configUtils.getClassGroupId,
    getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  var classGroupsInConflict = new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function (originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName),
      modifiers = _splitModifiers.modifiers,
      hasImportantModifier = _splitModifiers.hasImportantModifier,
      baseClassName = _splitModifiers.baseClassName,
      maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
    var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName: originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName: originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    var variantModifier = sortModifiers(modifiers).join(':');
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId: modifierId,
      classGroupId: classGroupId,
      originalClassName: originalClassName,
      hasPostfixModifier: hasPostfixModifier
    };
  }).reverse()
  // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
  .filter(function (parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }
    var modifierId = parsed.modifierId,
      classGroupId = parsed.classGroupId,
      hasPostfixModifier = parsed.hasPostfixModifier;
    var classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function (group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function (parsed) {
    return parsed.originalClassName;
  }).join(' ');
}


//# sourceMappingURL=merge-classlist.mjs.map

;// ./node_modules/tailwind-merge/dist/lib/tw-join.mjs
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  var index = 0;
  var argument;
  var resolvedValue;
  var string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === 'string') {
    return mix;
  }
  var resolvedValue;
  var string = '';
  for (var k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}


//# sourceMappingURL=tw-join.mjs.map

;// ./node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs




function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }
  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0],
      restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function (previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}


//# sourceMappingURL=create-tailwind-merge.mjs.map

;// ./node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
  var themeGetter = function themeGetter(theme) {
    return theme[key] || [];
  };
  themeGetter.isThemeGetter = true;
  return themeGetter;
}


//# sourceMappingURL=from-theme.mjs.map

;// ./node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
// Shadow always begins with x and y offset separated by underscore
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, 'length', isLengthOnly);
}
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, 'size', isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, 'position', isNever);
}
function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, 'url', isUrl);
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, 'number', isNumber);
}
/**
 * @deprecated Will be removed in next major version. Use `isArbitraryNumber` instead.
 */
var isArbitraryWeight = (/* unused pure expression or super */ null && (isArbitraryNumber));
function isNumber(value) {
  return !Number.isNaN(Number(value));
}
function isPercent(value) {
  return value.endsWith('%') && isNumber(value.slice(0, -1));
}
function isInteger(value) {
  return isIntegerOnly(value) || getIsArbitraryValue(value, 'number', isIntegerOnly);
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isAny() {
  return true;
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, '', isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return result[1] === label;
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isUrl(value) {
  return value.startsWith('url(');
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value));
}
function isShadow(value) {
  return shadowRegex.test(value);
}


//# sourceMappingURL=validators.mjs.map

;// ./node_modules/tailwind-merge/dist/lib/default-config.mjs



function getDefaultConfig() {
  var colors = fromTheme('colors');
  var spacing = fromTheme('spacing');
  var blur = fromTheme('blur');
  var brightness = fromTheme('brightness');
  var borderColor = fromTheme('borderColor');
  var borderRadius = fromTheme('borderRadius');
  var borderSpacing = fromTheme('borderSpacing');
  var borderWidth = fromTheme('borderWidth');
  var contrast = fromTheme('contrast');
  var grayscale = fromTheme('grayscale');
  var hueRotate = fromTheme('hueRotate');
  var invert = fromTheme('invert');
  var gap = fromTheme('gap');
  var gradientColorStops = fromTheme('gradientColorStops');
  var gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  var inset = fromTheme('inset');
  var margin = fromTheme('margin');
  var opacity = fromTheme('opacity');
  var padding = fromTheme('padding');
  var saturate = fromTheme('saturate');
  var scale = fromTheme('scale');
  var sepia = fromTheme('sepia');
  var skew = fromTheme('skew');
  var space = fromTheme('space');
  var translate = fromTheme('translate');
  var getOverscroll = function getOverscroll() {
    return ['auto', 'contain', 'none'];
  };
  var getOverflow = function getOverflow() {
    return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  };
  var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary() {
    return ['auto', isArbitraryValue, spacing];
  };
  var getSpacingWithArbitrary = function getSpacingWithArbitrary() {
    return [isArbitraryValue, spacing];
  };
  var getLengthWithEmpty = function getLengthWithEmpty() {
    return ['', isLength];
  };
  var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary() {
    return ['auto', isNumber, isArbitraryValue];
  };
  var getPositions = function getPositions() {
    return ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  };
  var getLineStyles = function getLineStyles() {
    return ['solid', 'dashed', 'dotted', 'double', 'none'];
  };
  var getBlendModes = function getBlendModes() {
    return ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'plus-lighter'];
  };
  var getAlign = function getAlign() {
    return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  };
  var getZeroAndEmpty = function getZeroAndEmpty() {
    return ['', '0', isArbitraryValue];
  };
  var getBreaks = function getBreaks() {
    return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  };
  var getNumber = function getNumber() {
    return [isNumber, isArbitraryNumber];
  };
  var getNumberAndArbitrary = function getNumberAndArbitrary() {
    return [isNumber, isArbitraryValue];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmpty(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ['right', 'left', 'none']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal'].concat(getAlign())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal'].concat(getAlign(), ['baseline'])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [].concat(getAlign(), ['baseline'])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': ['min', 'max', 'fit', isArbitraryValue, isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryValue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': ['min', 'max', 'fit', isArbitraryValue, isLength]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isArbitraryValue, isLength]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [].concat(getLineStyles(), ['wavy'])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isArbitraryValue, isLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryUrl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [].concat(getLineStyles(), ['hidden'])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: [''].concat(getLineStyles())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isArbitraryValue, isLength]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmpty()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ['appearance-none'],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'pinch-zoom', 'manipulation', {
          pan: ['x', 'left', 'right', 'y', 'up', 'down']
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only']
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
}


//# sourceMappingURL=default-config.mjs.map

;// ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs



var twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);


//# sourceMappingURL=tw-merge.mjs.map


/***/ }),

/***/ 76899:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return SideEffect;
    }
}));
const _react = __webpack_require__(12115);
const isServer = "object" === 'undefined';
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements));
        }
    }
    if (isServer) {
        headManager?.mountedInstances?.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect(()=>{
        headManager?.mountedInstances?.add(props.children);
        return ()=>{
            headManager?.mountedInstances?.delete(props.children);
        };
    });
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect(()=>{
        if (headManager) {
            headManager._pendingUpdate = emitChange;
        }
        return ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
        };
    });
    useClientOnlyEffect(()=>{
        if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
        }
        return ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
        };
    });
    return null;
} //# sourceMappingURL=side-effect.js.map


/***/ }),

/***/ 77314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ListOrdered)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ListOrdered = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ListOrdered", [
    [
        "path",
        {
            d: "M10 12h11",
            key: "6m4ad9"
        }
    ],
    [
        "path",
        {
            d: "M10 18h11",
            key: "11hvi2"
        }
    ],
    [
        "path",
        {
            d: "M10 6h11",
            key: "c7qv1k"
        }
    ],
    [
        "path",
        {
            d: "M4 10h2",
            key: "16xx2s"
        }
    ],
    [
        "path",
        {
            d: "M4 6h1v4",
            key: "cnovpq"
        }
    ],
    [
        "path",
        {
            d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",
            key: "m9a95d"
        }
    ]
]);
 //# sourceMappingURL=list-ordered.js.map


/***/ }),

/***/ 78340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createLucideIcon)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
 //# sourceMappingURL=utils.js.map

;// ./node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
 //# sourceMappingURL=defaultAttributes.js.map

;// ./node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const Icon = /*#__PURE__*/ (0,react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return /*#__PURE__*/ (0,react.createElement)("svg", {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>/*#__PURE__*/ (0,react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
 //# sourceMappingURL=Icon.js.map

;// ./node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const createLucideIcon = (iconName, iconNode)=>{
    const Component = /*#__PURE__*/ (0,react.forwardRef)(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react.createElement)(Icon, {
            ref,
            iconNode,
            className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
 //# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ 78916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const File = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("File", [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ]
]);
 //# sourceMappingURL=file.js.map


/***/ }),

/***/ 89971:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66294);
// packages/react/id/src/id.tsx


var useReactId = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(useReactId());
  (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N)(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 91930:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var use_intl_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33418);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function t({ locale: t, ...e }) {
    if (!t) throw new Error(void 0);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(use_intl_react__WEBPACK_IMPORTED_MODULE_1__/* .IntlProvider */ .Dk, {
        locale: t,
        ...e
    });
}



/***/ }),

/***/ 93164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LockOpen)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const LockOpen = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("LockOpen", [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 9.9-1",
            key: "1mm8w8"
        }
    ]
]);
 //# sourceMappingURL=lock-open.js.map


/***/ }),

/***/ 93960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
    if (args.length < required) {
        throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
    }
}


/***/ }),

/***/ 94514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Check)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Check", [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
]);
 //# sourceMappingURL=check.js.map


/***/ }),

/***/ 94840:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UC: () => (/* binding */ Content),
  B8: () => (/* binding */ List),
  bL: () => (/* binding */ Root2),
  l9: () => (/* binding */ Trigger)
});

// UNUSED EXPORTS: Tabs, TabsContent, TabsList, TabsTrigger, createTabsScope

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(70379);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(68599);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-collection/dist/index.mjs + 1 modules
var react_collection_dist = __webpack_require__(64831);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(47527);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(89971);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react-dom/index.js
var react_dom = __webpack_require__(47650);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
;// ./node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-slot/dist/index.mjs
// src/slot.tsx



// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = react.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = react.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (react.Children.count(newElement) > 1) return react.Children.only(null);
          return react.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react.isValidElement(newElement) ? react.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ (/* unused pure expression or super */ null && (createSlot("Slot")));
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = react.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (react.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== react.Fragment) {
        props2.ref = forwardedRef ? (0,react_compose_refs_dist/* composeRefs */.t)(forwardedRef, childrenRef) : childrenRef;
      }
      return react.cloneElement(children, props2);
    }
    return react.Children.count(children) > 1 ? react.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable2 = ({ children }) => {
    return /* @__PURE__ */ jsx(Fragment2, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
var Slottable = /* @__PURE__ */ (/* unused pure expression or super */ null && (createSlottable("Slottable")));
function isSlottable(child) {
  return react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

//# sourceMappingURL=index.mjs.map

;// ./node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-primitive/dist/index.mjs
// src/primitive.tsx




var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = react.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}
var Root = (/* unused pure expression or super */ null && (Primitive));

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var react_use_callback_ref_dist = __webpack_require__(17347);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(98979);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(1933);
;// ./node_modules/@radix-ui/react-roving-focus/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Item,Root,RovingFocusGroup,RovingFocusGroupItem,createRovingFocusGroupScope auto */ // src/roving-focus-group.tsx











var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = (0,react_collection_dist/* createCollection */.N)(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = (0,react_context_dist/* createContextScope */.A)(GROUP_NAME, [
    createCollectionScope
]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Collection.Provider, {
        scope: props.__scopeRovingFocusGroup,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Collection.Slot, {
            scope: props.__scopeRovingFocusGroup,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(RovingFocusGroupImpl, {
                ...props,
                ref: forwardedRef
            })
        })
    });
});
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
    const ref = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.s)(forwardedRef, ref);
    const direction = (0,react_direction_dist/* useDirection */.jH)(dir);
    const [currentTabStopId, setCurrentTabStopId] = (0,react_use_controllable_state_dist/* useControllableState */.i)({
        prop: currentTabStopIdProp,
        defaultProp: defaultCurrentTabStopId ?? null,
        onChange: onCurrentTabStopIdChange,
        caller: GROUP_NAME
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = react.useState(false);
    const handleEntryFocus = (0,react_use_callback_ref_dist/* useCallbackRef */.c)(onEntryFocus);
    const getItems = useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = react.useRef(false);
    const [focusableItemsCount, setFocusableItemsCount] = react.useState(0);
    react.useEffect(()=>{
        const node = ref.current;
        if (node) {
            node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
            return ()=>node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
        }
    }, [
        handleEntryFocus
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(RovingFocusProvider, {
        scope: __scopeRovingFocusGroup,
        orientation,
        dir: direction,
        loop,
        currentTabStopId,
        onItemFocus: react.useCallback((tabStopId)=>setCurrentTabStopId(tabStopId), [
            setCurrentTabStopId
        ]),
        onItemShiftTab: react.useCallback(()=>setIsTabbingBackOut(true), []),
        onFocusableItemAdd: react.useCallback(()=>setFocusableItemsCount((prevCount)=>prevCount + 1), []),
        onFocusableItemRemove: react.useCallback(()=>setFocusableItemsCount((prevCount)=>prevCount - 1), []),
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Primitive.div, {
            tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
            "data-orientation": orientation,
            ...groupProps,
            ref: composedRefs,
            style: {
                outline: "none",
                ...props.style
            },
            onMouseDown: (0,dist/* composeEventHandlers */.mK)(props.onMouseDown, ()=>{
                isClickFocusRef.current = true;
            }),
            onFocus: (0,dist/* composeEventHandlers */.mK)(props.onFocus, (event)=>{
                const isKeyboardFocus = !isClickFocusRef.current;
                if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                    const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
                    event.currentTarget.dispatchEvent(entryFocusEvent);
                    if (!entryFocusEvent.defaultPrevented) {
                        const items = getItems().filter((item)=>item.focusable);
                        const activeItem = items.find((item)=>item.active);
                        const currentItem = items.find((item)=>item.id === currentTabStopId);
                        const candidateItems = [
                            activeItem,
                            currentItem,
                            ...items
                        ].filter(Boolean);
                        const candidateNodes = candidateItems.map((item)=>item.ref.current);
                        focusFirst(candidateNodes, preventScrollOnEntryFocus);
                    }
                }
                isClickFocusRef.current = false;
            }),
            onBlur: (0,dist/* composeEventHandlers */.mK)(props.onBlur, ()=>setIsTabbingBackOut(false))
        })
    });
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, children, ...itemProps } = props;
    const autoId = (0,react_id_dist/* useId */.B)();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    react.useEffect(()=>{
        if (focusable) {
            onFocusableItemAdd();
            return ()=>onFocusableItemRemove();
        }
    }, [
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Collection.ItemSlot, {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Primitive.span, {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: (0,dist/* composeEventHandlers */.mK)(props.onMouseDown, (event)=>{
                if (!focusable) event.preventDefault();
                else context.onItemFocus(id);
            }),
            onFocus: (0,dist/* composeEventHandlers */.mK)(props.onFocus, ()=>context.onItemFocus(id)),
            onKeyDown: (0,dist/* composeEventHandlers */.mK)(props.onKeyDown, (event)=>{
                if (event.key === "Tab" && event.shiftKey) {
                    context.onItemShiftTab();
                    return;
                }
                if (event.target !== event.currentTarget) return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                    event.preventDefault();
                    const items = getItems().filter((item)=>item.focusable);
                    let candidateNodes = items.map((item)=>item.ref.current);
                    if (focusIntent === "last") candidateNodes.reverse();
                    else if (focusIntent === "prev" || focusIntent === "next") {
                        if (focusIntent === "prev") candidateNodes.reverse();
                        const currentIndex = candidateNodes.indexOf(event.currentTarget);
                        candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                    }
                    setTimeout(()=>focusFirst(candidateNodes));
                }
            }),
            children: typeof children === "function" ? children({
                isCurrentTabStop,
                hasTabStop: currentTabStopId != null
            }) : children
        })
    });
});
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && [
        "ArrowLeft",
        "ArrowRight"
    ].includes(key)) return void 0;
    if (orientation === "horizontal" && [
        "ArrowUp",
        "ArrowDown"
    ].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus({
            preventScroll
        });
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
var dist_Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;
 //# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var react_use_layout_effect_dist = __webpack_require__(66294);
;// ./node_modules/@radix-ui/react-presence/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Presence,Root auto */ // src/presence.tsx



// src/use-state-machine.tsx

function useStateMachine(initialState, machine) {
    return react.useReducer((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
// src/presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : react.Children.only(children);
    const ref = (0,react_compose_refs_dist/* useComposedRefs */.s)(presence.ref, dist_getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? /*#__PURE__*/ react.cloneElement(child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = react.useState();
    const stylesRef = react.useRef(null);
    const prevPresentRef = react.useRef(present);
    const prevAnimationNameRef = react.useRef("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    react.useEffect(()=>{
        const currentAnimationName = getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [
        state
    ]);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.N)(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = getAnimationName(styles);
            if (present) {
                send("MOUNT");
            } else if (currentAnimationName === "none" || styles?.display === "none") {
                send("UNMOUNT");
            } else {
                const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) {
                    send("ANIMATION_OUT");
                } else {
                    send("UNMOUNT");
                }
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.N)(()=>{
        if (node) {
            let timeoutId;
            const ownerWindow = node.ownerDocument.defaultView ?? window;
            const handleAnimationEnd = (event)=>{
                const currentAnimationName = getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
                if (event.target === node && isCurrentAnimation) {
                    send("ANIMATION_END");
                    if (!prevPresentRef.current) {
                        const currentFillMode = node.style.animationFillMode;
                        node.style.animationFillMode = "forwards";
                        timeoutId = ownerWindow.setTimeout(()=>{
                            if (node.style.animationFillMode === "forwards") {
                                node.style.animationFillMode = currentFillMode;
                            }
                        });
                    }
                }
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node) {
                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                }
            };
            node.addEventListener("animationstart", handleAnimationStart);
            node.addEventListener("animationcancel", handleAnimationEnd);
            node.addEventListener("animationend", handleAnimationEnd);
            return ()=>{
                ownerWindow.clearTimeout(timeoutId);
                node.removeEventListener("animationstart", handleAnimationStart);
                node.removeEventListener("animationcancel", handleAnimationEnd);
                node.removeEventListener("animationend", handleAnimationEnd);
            };
        } else {
            send("ANIMATION_END");
        }
    }, [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: react.useCallback((node2)=>{
            stylesRef.current = node2 ? getComputedStyle(node2) : null;
            setNode(node2);
        }, [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function dist_getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var react_presence_dist_Root = (/* unused pure expression or super */ null && (Presence));
 //# sourceMappingURL=index.mjs.map

;// ./node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-slot/dist/index.mjs
// src/slot.tsx



// @__NO_SIDE_EFFECTS__
function dist_createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ dist_createSlotClone(ownerName);
  const Slot2 = react.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = react.Children.toArray(children);
    const slottable = childrenArray.find(dist_isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (react.Children.count(newElement) > 1) return react.Children.only(null);
          return react.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react.isValidElement(newElement) ? react.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var dist_Slot = /* @__PURE__ */ (/* unused pure expression or super */ null && (dist_createSlot("Slot")));
// @__NO_SIDE_EFFECTS__
function dist_createSlotClone(ownerName) {
  const SlotClone = react.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (react.isValidElement(children)) {
      const childrenRef = react_slot_dist_getElementRef(children);
      const props2 = dist_mergeProps(slotProps, children.props);
      if (children.type !== react.Fragment) {
        props2.ref = forwardedRef ? (0,react_compose_refs_dist/* composeRefs */.t)(forwardedRef, childrenRef) : childrenRef;
      }
      return react.cloneElement(children, props2);
    }
    return react.Children.count(children) > 1 ? react.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var dist_SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function dist_createSlottable(ownerName) {
  const Slottable2 = ({ children }) => {
    return /* @__PURE__ */ jsx(Fragment2, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = dist_SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
var dist_Slottable = /* @__PURE__ */ (/* unused pure expression or super */ null && (dist_createSlottable("Slottable")));
function dist_isSlottable(child) {
  return react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === dist_SLOTTABLE_IDENTIFIER;
}
function dist_mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function react_slot_dist_getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

//# sourceMappingURL=index.mjs.map

;// ./node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-primitive/dist/index.mjs
// src/primitive.tsx




var dist_NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var dist_Primitive = dist_NODES.reduce((primitive, node) => {
  const Slot = dist_createSlot(`Primitive.${node}`);
  const Node = react.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dist_dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}
var react_primitive_dist_Root = (/* unused pure expression or super */ null && (dist_Primitive));

//# sourceMappingURL=index.mjs.map

;// ./node_modules/@radix-ui/react-tabs/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Content,List,Root,Tabs,TabsContent,TabsList,TabsTrigger,Trigger,createTabsScope auto */ // src/tabs.tsx











var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = (0,react_context_dist/* createContextScope */.A)(TABS_NAME, [
    createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
    const direction = (0,react_direction_dist/* useDirection */.jH)(dir);
    const [value, setValue] = (0,react_use_controllable_state_dist/* useControllableState */.i)({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue ?? "",
        caller: TABS_NAME
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(TabsProvider, {
        scope: __scopeTabs,
        baseId: (0,react_id_dist/* useId */.B)(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_Primitive.div, {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
        })
    });
});
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_Root, {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_Primitive.div, {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
        })
    });
});
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Item, {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_Primitive.button, {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: (0,dist/* composeEventHandlers */.mK)(props.onMouseDown, (event)=>{
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                    context.onValueChange(value);
                } else {
                    event.preventDefault();
                }
            }),
            onKeyDown: (0,dist/* composeEventHandlers */.mK)(props.onKeyDown, (event)=>{
                if ([
                    " ",
                    "Enter"
                ].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: (0,dist/* composeEventHandlers */.mK)(props.onFocus, ()=>{
                const isAutomaticActivation = context.activationMode !== "manual";
                if (!isSelected && !disabled && isAutomaticActivation) {
                    context.onValueChange(value);
                }
            })
        })
    });
});
TabsTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = react.useRef(isSelected);
    react.useEffect(()=>{
        const rAF = requestAnimationFrame(()=>isMountAnimationPreventedRef.current = false);
        return ()=>cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Presence, {
        present: forceMount || isSelected,
        children: ({ present })=>/* @__PURE__ */ (0,jsx_runtime.jsx)(dist_Primitive.div, {
                "data-state": isSelected ? "active" : "inactive",
                "data-orientation": context.orientation,
                role: "tabpanel",
                "aria-labelledby": triggerId,
                hidden: !present,
                id: contentId,
                tabIndex: 0,
                ...contentProps,
                ref: forwardedRef,
                style: {
                    ...props.style,
                    animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
                },
                children: present && children
            })
    });
});
TabsContent.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
    return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
    return `${baseId}-content-${value}`;
}
var Root2 = Tabs;
var List = TabsList;
var Trigger = TabsTrigger;
var Content = TabsContent;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 95413:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImgProps", ({
    enumerable: true,
    get: function() {
        return getImgProps;
    }
}));
const _warnonce = __webpack_require__(47284);
const _deploymentid = __webpack_require__(53887);
const _imageblursvg = __webpack_require__(12590);
const _imageconfig = __webpack_require__(55762);
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    'lazy',
    'eager',
    undefined
]));
// Object-fit values that are not valid background-size values
const INVALID_BACKGROUND_SIZE_VALUES = [
    '-moz-initial',
    'fill',
    'none',
    'scale-down',
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths({ deviceSizes, allSizes }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs({ config, src, unoptimized, width, quality, sizes, loader }) {
    if (unoptimized) {
        if (src.startsWith('/') && !src.startsWith('//')) {
            let deploymentId = (0, _deploymentid.getDeploymentId)();
            if (deploymentId) {
                // We unfortunately can't easily use `new URL()` here, because it normalizes the URL which causes
                // double-encoding with the `encodeURIComponent(src)` below
                const qIndex = src.indexOf('?');
                if (qIndex !== -1) {
                    const params = new URLSearchParams(src.slice(qIndex + 1));
                    const srcDpl = params.get('dpl');
                    if (!srcDpl) {
                        // src is missing the dpl parameter, but we have a deploymentId, so add it to the src URL
                        params.append('dpl', deploymentId);
                        src = src.slice(0, qIndex) + '?' + params.toString();
                    }
                } else {
                    // src is missing the dpl parameter, but we have a deploymentId, so add it to the src URL
                    src = src + `?dpl=${deploymentId}`;
                }
            }
        }
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, _state) {
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && !preload && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    })}")` : `url("${placeholder}")` // assume `data:image/`
     : null;
    const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === 'fill' ? '100% 100%' // the background-size equivalent of `fill`
     : 'cover';
    let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    const loadingFinal = isLazy ? 'lazy' : loading;
    if (false) {}
    const props = {
        ...rest,
        loading: loadingFinal,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        preload: preload || priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map


/***/ }),

/***/ 96035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MessageSquare)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const MessageSquare = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("MessageSquare", [
    [
        "path",
        {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz"
        }
    ]
]);
 //# sourceMappingURL=message-square.js.map


/***/ }),

/***/ 97651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __webpack_require__(73623);
const _getimgprops = __webpack_require__(95413);
const _imagecomponent = __webpack_require__(38437);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(36095));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[32,48,64,96,128,256,384],"qualities":[75],"path":"/_next/image/","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true}
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 98500:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __webpack_require__(66388);
const _jsxruntime = __webpack_require__(95155);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(12115));
const _formaturl = __webpack_require__(20091);
const _approutercontextsharedruntime = __webpack_require__(22909);
const _usemergedref = __webpack_require__(21172);
const _utils = __webpack_require__(10857);
const _addbasepath = __webpack_require__(70127);
const _warnonce = __webpack_require__(47284);
const _routerreducertypes = __webpack_require__(74616);
const _links = __webpack_require__(24972);
const _islocalurl = __webpack_require__(69470);
const _types = __webpack_require__(77565);
const _erroronce = __webpack_require__(29842);
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes) {
    if (true) {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __webpack_require__(70156);
        _react.default.startTransition(()=>{
            dispatchNavigateAction(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if (false) {}
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if (false) {}
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback((element)=>{
        if (router !== null) {
            linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
        }
        return ()=>{
            if (linkInstanceRef.current) {
                (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                linkInstanceRef.current = null;
            }
            (0, _links.unmountPrefetchableInstance)(element);
        };
    }, [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled || "production" === 'development') {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        },
        onTouchStart:  false ? 0 : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if (false) {}
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if (false) {} else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 98817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ VolumeX)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const VolumeX = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("VolumeX", [
    [
        "path",
        {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "16",
            y1: "9",
            y2: "15",
            key: "1ewh16"
        }
    ],
    [
        "line",
        {
            x1: "16",
            x2: "22",
            y1: "9",
            y2: "15",
            key: "5ykzw1"
        }
    ]
]);
 //# sourceMappingURL=volume-x.js.map


/***/ }),

/***/ 98979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useControllableState)
/* harmony export */ });
/* unused harmony export useControllableStateReducer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66294);
// src/use-controllable-state.tsx


var useInsertionEffect = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))[" useInsertionEffect ".trim().toString()] || _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  },
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(prop !== void 0);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (nextValue) => {
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          onChangeRef.current?.(value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp);
  const prevValueRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);
  const onChangeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}

// src/use-controllable-state-reducer.tsx


var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
  const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
  const isControlled = controlledState !== void 0;
  const onChange = useEffectEvent(onChangeProp);
  if (true) {
    const isControlledRef = React2.useRef(controlledState !== void 0);
    React2.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const args = [{ ...initialArg, state: defaultProp }];
  if (init) {
    args.push(init);
  }
  const [internalState, dispatch] = React2.useReducer(
    (state2, action) => {
      if (action.type === SYNC_STATE) {
        return { ...state2, state: action.state };
      }
      const next = reducer(state2, action);
      if (isControlled && !Object.is(next.state, state2.state)) {
        onChange(next.state);
      }
      return next;
    },
    ...args
  );
  const uncontrolledState = internalState.state;
  const prevValueRef = React2.useRef(uncontrolledState);
  React2.useEffect(() => {
    if (prevValueRef.current !== uncontrolledState) {
      prevValueRef.current = uncontrolledState;
      if (!isControlled) {
        onChange(uncontrolledState);
      }
    }
  }, [onChange, uncontrolledState, prevValueRef, isControlled]);
  const state = React2.useMemo(() => {
    const isControlled2 = controlledState !== void 0;
    if (isControlled2) {
      return { ...internalState, state: controlledState };
    }
    return internalState;
  }, [internalState, controlledState]);
  React2.useEffect(() => {
    if (isControlled && !Object.is(controlledState, internalState.state)) {
      dispatch({ type: SYNC_STATE, state: controlledState });
    }
  }, [controlledState, internalState.state, isControlled]);
  return [state, dispatch];
}

//# sourceMappingURL=index.mjs.map


/***/ })

}]);