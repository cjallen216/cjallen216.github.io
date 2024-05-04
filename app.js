const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Problem Solver";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Tinkerer";
  }, 8000);
};
textLoad();

setInterval(textLoad, 12000);
