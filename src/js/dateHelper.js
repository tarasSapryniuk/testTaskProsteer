export default class DateHelper {
    getDateKey(id) {
        return ['days', 'hours', 'minutes', 'seconds'][id];
    }
    getDate(date) {
        return {
            days: Math.floor(date / (1000 * 60 * 60 * 24)),
            hours: Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((date % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((date % (1000 * 60)) / 1000),
            // weekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()],
            // month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()],
            // year: date.getFullYear()
        }
    }
}
