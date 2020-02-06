export default class Menu {

  open() {
      const elem = document.querySelectorAll("#myDropdown");
      if(elem[0].classList.toggle("show"))
        elem[0].classList.add('show')
  }

  close() {
    const elem = document.querySelectorAll("#myDropdown");
    if(elem[0].classList.toggle("show"))
        elem[0].classList.remove('show')
  }
}
