const projectDisplay = document.querySelector(".project__display")
const nextButton = document.querySelector(".position__right")
const prevButton = document.querySelector(".position__left")

var projects = [...projectDisplay.children]
var index = 0
projects[index].classList.add("active__project")

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
