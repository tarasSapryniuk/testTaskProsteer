export default class CookieHelper {
  checkCookie() {
    return true;
  }

  getCookie(name) {
    if (this.checkCookie()) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
  }

  set cookie(amount_days) {
    const end_date = new Date();
    end_date.setDate(end_date.getDate() + amount_days);
    end_date.setHours(23, 59, 59, 999);
    // end_date.setSeconds(59);
    document.cookie =
      "date=" +
      encodeURIComponent(end_date.getTime()) +
      "; expires=" +
      end_date;
  }

  deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}
