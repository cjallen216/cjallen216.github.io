// Smooth Scrolling for internal links
$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();

  let target = this.hash;
  let $target = $(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset()?.top ?? 0
      },
      900,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
});

// Change background of nav bar on scroll
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll > window.innerHeight - 55) {
    $(".navbar").removeClass("transparent");
  } else {
    $(".navbar").addClass("transparent");
  }
});

// Activate scrollspy to highlight nav item when scrolled over
$("body").scrollspy({ target: ".navbar" });

const dynamicText = document.querySelector("h1 span");
const words = ["Developer", "Problem Solver", "Tinkerer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();