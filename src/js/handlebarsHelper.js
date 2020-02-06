import Handlebars from "handlebars";

export default class HandlebarsHelper {
  setImage(src, selector) {
    const template_image = Handlebars.compile('<img src="{{img}}">');
    const data = template_image({ img: src });
    document.querySelector(selector).innerHTML += data;
  }

  setImages(src, selector) {
    const template_image = Handlebars.compile('<img src="{{img}}">');
    const data = template_image({ img: src });
    const elements = document.querySelectorAll(selector)
    elements.forEach(element => {
        element.innerHTML += data;
    });
  }

  setValue(value, selector) {
    const template = Handlebars.compile('<div class="text"><h2>{{value}}</h2></div>');
    const data = template({ value });
    document.querySelector(selector).innerHTML += data;
  }

  setSpanValue(value, selector) {
    const template = Handlebars.compile('<span>{{value}}</span>');
    const data = template({ value });
    document.querySelector(selector).innerHTML += data;
  }
}
