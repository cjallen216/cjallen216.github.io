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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faq = button.nextElementSibling;
    const icon = button.children[1];

    faq.classList.toggle("show");
    icon.classList.toggle("rotate");
  });
});

let navigation = document.querySelector(".navigation");
document.querySelector(".menu-toggle").onclick = function () {
  this.classList.toggle("active");
  navigation.classList.toggle("active");
};
