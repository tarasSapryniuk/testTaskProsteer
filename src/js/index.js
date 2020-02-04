import "./barrel";
import HandelbarHelper from "./handlebarsHelper";
import MyTimer from "./timer";
// images
import landing_logo from "../assets/landing_logo.png";
import landing_chat from "../assets/landing_chat.png";

const hh = new HandelbarHelper();

hh.setImage(landing_logo, ".blog-header-logo");
hh.setImage(landing_chat, ".chat-header-logo");

const timed = {
  days: "#days",
  month: "#hours",
  year: "#minutes",
  hours: "#seconds"
};

const myTimer = new MyTimer(14);
myTimer.timerDom = timed;
myTimer.createTimer();

// function setCookie() {
//     const _date = new Date();
//     const date = getDate(_date);
//     if(!document.cookie)
//         // document.cookie = `date=${dateTime.getTime()}; expires= ${date.weekday}, ${date.days} ${date.month} ${date.year} ${date.hours}:${date.minutes}:${date.seconds} UTC; path=/ `
//         document.cookie = "date=" + _date.getTime();
// }
// document.cookie = "cookiename=cookievalue; expires= Thu, 21 Aug 2014 20:00:00 UTC; path=/ "

// console.log(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][new Date().getMonth()]);
// console.log(new Date().getFullYear());

// setCookie()

// console.log(new Date().getTime())

// console.log(document.cookie);
