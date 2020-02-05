import "./barrel";
import HandelbarHelper from "./handlebarsHelper";
import MyTimer from "./timer";
// images
import landing_logo from "../assets/landing_logo.png";
import landing_chat from "../assets/landing_chat.png";
import counter from "../assets/counter.png";

const hh = new HandelbarHelper();

hh.setImage(landing_logo, ".blog-header-logo");
hh.setImage(landing_chat, ".chat-header-logo");

const timerDom = ["days", "hours", "minutes", "seconds"];

const myTimer = new MyTimer(14);
myTimer.createTimer(timerDom);