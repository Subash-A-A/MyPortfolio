const toggle = document.querySelector(".toggle__button");
const menu = document.querySelector(".mobile__menu");

toggle.addEventListener("click", () => {
  const check = menu.getAttribute("aria-expanded");
  const button_check = toggle.getAttribute("data-button-clicked");
  if (check === "false" && button_check === "false") {
    menu.setAttribute("aria-expanded", true);
    toggle.setAttribute("data-button-clicked", true);
    menu.classList.add("menu__show");
  } else if (check === "true" && button_check === "true") {
    menu.setAttribute("aria-expanded", false);
    toggle.setAttribute("data-button-clicked", false);
    menu.classList.remove("menu__show");
  }
});
