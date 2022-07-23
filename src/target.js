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

target__box.forEach((target) => {
  target.addEventListener("click", () => {
    target.classList.add("fall")
    setTimeout(() => {
      target.classList.remove("fall")
    }, 3000)
  })
})
