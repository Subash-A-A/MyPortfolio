const projectDisplay = document.querySelector(".project__display")
const nextButton = document.querySelector(".position__right")
const prevButton = document.querySelector(".position__left")
const images = document.querySelectorAll(".project__img")

var projects = [...projectDisplay.children]
var index = 0
projects[index].classList.add("active__project")

images.forEach((e) => {
  e.addEventListener("mouseover", () => {
    console.log(e.parentNode.lastChild)
    e.parentElement.lastElementChild.classList.add("project__title__appear")
  })
  e.addEventListener("mouseout", () => {
    e.parentElement.lastElementChild.classList.remove("project__title__appear")
  })
})

nextButton.addEventListener("click", () => {
  projects[index].classList.remove("active__project")
  index = (index + 1) % projects.length
  projects[index].classList.add("active__project")
})
prevButton.addEventListener("click", () => {
  projects[index].classList.remove("active__project")
  index = index == 0 ? projects.length - 1 : index - 1
  projects[index].classList.add("active__project")
})
