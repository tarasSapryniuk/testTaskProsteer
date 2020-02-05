import CookieHelper from "./cookieHelper";
import DateHelper from "./dateHelper";
import HandlebarsHelper from "./handlebarsHelper";

export default class MyTimer {
  constructor(amount) {
    this.hh = new HandlebarsHelper();
    this.dh = new DateHelper();
    this.ch = new CookieHelper();
    this._amount = amount | 0;
    this.isClearInterval = false;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  createTimer(dom) {
    this._timer(dom);
    let timer = setInterval(() => this._timer(dom), 1000);
  }

  _timer(dom) {
    let difference = 0;
    if (this.ch.getCookie("date")) {
      const end_date = this.ch.getCookie("date");
      difference = this.dh.getDate(end_date - new Date().getTime());
      this.drawTimer(difference, dom);
    } else {
      this.ch.cookie = this.amount;
    }

    if (difference < 0) {
      clearInterval(timer);
      this.isClearInterval = true;
    }
  }

  drawTimer(date, doms) {
    for (const i in doms) {
      const elem = document.querySelectorAll(`#${doms[i]} .img-counter h2`);
      this._draw(elem, date[this.dh.getDateKey(i)]);
    }
  }

  _draw(array, date) {
    if (/^[0-9]{2}[:.,-]?$/.test(date)) {
      for (let index = 0; index < array.length; index++) {
        array[index].innerHTML = date.toString()[index];
      }
    } else if (/^[0-9]{1}[:.,-]?$/.test(date)) {
      array[0].innerHTML = 0;
      array[1].innerHTML = date.toString()[0];
    }
  }
}
