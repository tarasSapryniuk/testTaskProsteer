export default class ScreenService {
  resize() {
    const w = window.outerWidth | window.innerWidth;
    const h = window.outerHeight | window.innerHeight;
    let titles = new Set(), contents = new Set();
    Array.prototype.slice.call(document
      .querySelectorAll(".card-body h5.card-title"), 0)
      .forEach(e => titles.add(e.innerHTML));
      Array.prototype.slice.call(document
      .querySelectorAll(".col.d-flex.flex-column"), 0)
      .forEach(e => contents.add(e.innerHTML));

    titles = Array.from(titles);
    contents = Array.from(contents);

    if (w < 768) {
      for (let i = 0; i < titles.length; i++) {
        if (!contents[i].includes(titles[i]) && titles[i] != "")
          document.querySelectorAll(".col.d-flex.flex-column h6")[i].innerHTML = titles[i];

        document.querySelectorAll(".card-body")[i].style.display = "none";
        document.querySelectorAll(".button-more")[i].classList.add("hide");
      }
    } else {
      for (let i = 0; i < titles.length; i++) {
        document.querySelectorAll(".card-body")[i].style.display = "block";
        document.querySelectorAll(".button-more")[i].classList.remove("hide");
        document.querySelectorAll(".col.d-flex.flex-column h6")[i].innerHTML = "";
      }
    }
  }
}