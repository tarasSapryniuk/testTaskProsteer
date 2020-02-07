import CookieHelper from "./cookieHelper";
import DateHelper from "./dateHelper";
import HandlebarsHelper from "./handlebarsHelper";

export default class MyTimer {
  constructor(amount, callback, timerRender, withoutTimerRender, domElem) {
    this.hh = new HandlebarsHelper();
    this.dh = new DateHelper();
    this.ch = new CookieHelper();
    this._amount = amount | 0;
    this.isClearInterval = false;
    this.isCreated = false;
    this.callback = callback;
    this.domElem = domElem;
    this.timerRender = timerRender;
    this.timer;
    this.withoutTimerRender = withoutTimerRender;
    this.body = document.querySelector('body').innerHTML
  }

  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  createTimer() {
    if (this.ch.getCookie("date")) {
      this.timer = setInterval(() => this._timer(), 1000);
      this._timer();
    } else {
      this.ch.cookie = this.amount;
    }
  }

  _timer(flag) {
    let difference = 0;

    const end_date = this.ch.getCookie("date");
    difference = end_date - new Date().getTime();

    if (difference <= 0) {
      this.clear()
      clearInterval(this.timer);
      this.isClearInterval = true;
      this.ch.deleteCookie("date");

      for (const d of this.withoutTimerRender)
        this.hh.draw(d.selector, d.template, d.object);

    } else {
      if (!this.isCreated) {
        this.clear()
        this.isCreated = true;
        for (const d of this.timerRender)
          this.hh.draw(d.selector, d.template, d.object);
      }
      this.drawTimer(this.dh.getDate(difference));
    }
  }

  clear() {
    document.querySelector('body').innerHTML = this.body;
  }

  drawTimer(date) {
    const time = [
      { name: "days", value: [] },
      { name: "hours", value: [] },
      { name: "minutes", value: [] },
      { name: "seconds", value: [] }
    ];
    for (const i in time) {
      if (time.hasOwnProperty(i)) {
        this._draw(time[i], date[this.dh.getDateKey(i)]);
      }
    }
    document.querySelector(this.domElem).innerHTML = this.callback({ time });
  }

  _draw(e, date) {
    if (/^[0-9]{2}[:.,-]?$/.test(date)) {
      for (let index = 0; index < 2; index++) {
        e.value.push({ num: date.toString()[index] });
      }
    } else if (/^[0-9]{1}[:.,-]?$/.test(date)) {
      e.value.push({ num: 0 });
      e.value.push({ num: date.toString()[0] });
    }
  }
}