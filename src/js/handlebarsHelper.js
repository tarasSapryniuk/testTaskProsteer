import Handlebars from "handlebars";

export default class HandlebarsHelper {
  setImage(src, selector) {
    const template_image = Handlebars.compile('<img src="{{img}}">');
    const data = template_image({ img: src });
    document.querySelector(selector).innerHTML += data;
    console.log(document.querySelector(selector));
  }

  setValue(value, selector) {
    const template = Handlebars.compile('<div class="text"><h2>{{value}}</h2></div>');
    const data = template({ value });
    document.querySelector(selector).innerHTML += data;

  }
}
