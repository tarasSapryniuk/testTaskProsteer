export default class HandlebarsHelper {
  draw(selector, callback, object) {
    document.querySelector(selector).innerHTML = callback(object);
  }
}