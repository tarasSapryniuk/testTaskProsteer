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
    document.cookie =
      "date=" +
      encodeURIComponent(end_date.getTime()) +
      "; expires=" +
      end_date;
  }
}
