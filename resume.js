let navigation = document.querySelector(".navigation");
document.querySelector(".menu-toggle").onclick = function () {
  this.classList.toggle("active");
  navigation.classList.toggle("active");
};
