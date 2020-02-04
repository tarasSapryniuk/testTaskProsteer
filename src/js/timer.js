import CookieHelper from "./cookieHelper";
import DateHelper from "./dateHelper";
import HandlebarsHelper from "./handlebarsHelper";

import counter from "../assets/counter.png";

export default class MyTimer {
  constructor(amount) {
    this.hh = new HandlebarsHelper();
    this.dh = new DateHelper();
    this.ch = new CookieHelper();
    this._amount = amount | 0;
    this.isClearInterval = false;
  }

  get timerDom() {
    return this._timerDom;
  }

  set timerDom(timerDom) {
    this._timerDom = timerDom;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  createTimer() {
    let timer = setInterval(() => {
      let difference = 0;
      if (this.ch.getCookie("date")) {
        const end_date = this.ch.getCookie("date");
        difference = this.dh.getDate(end_date - new Date().getTime());
        console.log(difference);
        this.drawTimer(difference);
      } else {
        this.ch.cookie = this.amount;
      }

      if (difference < 0) {
        clearInterval(timer);
        this.isClearInterval = true;
      }
    }, 1000);
  }
}
