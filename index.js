const navItem = document.querySelector(".nav__item");

const fun = navItem.addEventListener("click", () => {
  navItem.classList.toggle("active");
});

