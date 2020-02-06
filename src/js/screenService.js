export default class ScreenService {
  resize() {
    const w = window.outerWidth | window.innerWidth;
    const h = window.outerHeight | window.innerHeight;
    let titles = new Set(), contents = new Set();
    document
      .querySelectorAll(".card-body h5.card-title")
      .forEach(e => titles.add(e.innerHTML));
    document
      .querySelectorAll(".col.d-flex.flex-column")
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
