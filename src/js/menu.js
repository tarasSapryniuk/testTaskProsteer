export default class Menu {
  open(e) {
    if (document.querySelector("#myDropdown").classList.toggle("show"))
      document.querySelector("#myDropdown").classList.add("show");
  }

  close(e) {
    if (document.querySelector("#myDropdown").classList.toggle("show"))
      document.querySelector("#myDropdown").classList.remove("show");
  }
}
