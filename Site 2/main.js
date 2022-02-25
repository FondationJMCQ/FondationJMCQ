/* Mobile menu */
function dropdownToggle() {
    let dropdown = document.getElementById("mob-menu");
    dropdown.classList.toggle('active')
}

function progUlToggle() {
    let progUl = document.getElementById("prog-ul");
    let aboutUl = document.getElementById("about-ul");
    progUl.classList.toggle('active')
    aboutUl.classList.remove('active')
}

function aboutUlToggle() {
    let progUl = document.getElementById("prog-ul");
    let aboutUl = document.getElementById("about-ul");
    progUl.classList.remove('active')
    aboutUl.classList.toggle('active')
}

/* Change menu on scroll */
let menu = document.getElementById("menu");
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled > 75) {
    menu.classList.add("scrolled")
  }
  else
    menu.classList.remove("scrolled")
})