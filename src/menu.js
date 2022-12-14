const toggle = document.querySelector(".toggle__button")
const menu = document.querySelector(".mobile__menu")

const sections = ["#home", "#about", "#project", "#contact"]

const navCircleMenu = document.querySelector(".nav__circles__container")

MoveToPage("#home")

window.addEventListener("hashchange", () => {
  removeActive()
  var hash = window.location.hash
  var children = [...navCircleMenu.children]
  children[sections.indexOf(hash)].classList.add("active")
})

toggle.addEventListener("click", () => {
  const check = menu.getAttribute("aria-expanded")
  const button_check = toggle.getAttribute("data-button-clicked")
  if (check === "false" && button_check === "false") {
    menu.setAttribute("aria-expanded", true)
    toggle.setAttribute("data-button-clicked", true)
    menu.classList.add("menu__show")
  } else if (check === "true" && button_check === "true") {
    menu.setAttribute("aria-expanded", false)
    toggle.setAttribute("data-button-clicked", false)
    menu.classList.remove("menu__show")
  }
})

function MoveToPage(url) {
  window.location.href = url
}

function removeActive() {
  ;[...navCircleMenu.children].forEach((e) => {
    if (e.classList != undefined) {
      e.classList.remove("active")
    }
  })
}

window.onmousemove = (e) => {
  let box = document.querySelector(".front-box")
  let cursorYCoverage =
    ((window.innerHeight - e.clientY) * 100) / window.innerHeight
  box.style.width = e.clientX - 1 + "px"
  box.style.borderBottomRightRadius = cursorYCoverage + "%"
  box.style.borderTopRightRadius = 100 - cursorYCoverage + "%"
}
