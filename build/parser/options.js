"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var DEFAULTS = {
    weeks: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekabbrs: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthabbrs: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    displayWeekAbbr: false,
    displayMonthAbbr: false,
    startIn: 1,
    weekdays: 'MON, TUE, WED, THU, FRI',
    weekends: 'SAT, SUN',
};
function parseOptions(options) {
    return __assign({}, DEFAULTS, options);
}
exports.parseOptions = parseOptions;
//# sourceMappingURL=options.js.map