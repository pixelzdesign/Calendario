const DEFAULTS = {
    weeks : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekabbrs : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthabbrs : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    displayWeekAbbr : false,
    displayMonthAbbr : false,
    startIn : 1,
    weekdays: 'MON, TUE, WED, THU, FRI',
    weekends: 'SAT, SUN',
}

export function parseOptions(options: any) {
    return {...DEFAULTS, ...options}
}