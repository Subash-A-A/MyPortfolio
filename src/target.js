// const targets = {
//   unity: "../images/unity.png",
//   html: "../images/html.png",
//   css: "../images/css.png",
//   js: "../images/java-script.png",
//   react: "../images/react.png",
//   java: "../images/java.png",
//   python: "../images/python.png",
// }

const target__box = document.querySelector(".target__box").childNodes

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false) // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt) // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false)
}

target__box.forEach((target) => {
  target.addEventListener("click", () => {
    target.classList.remove("target__hover")
    target.classList.add("fall")
    setTimeout(() => {
      target.classList.remove("fall")
      target.classList.add("target__hover")
    }, 3000)
  })
})
