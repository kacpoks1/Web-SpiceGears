const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!offScreenMenu.contains(event.target) && !hamMenu.contains(event.target)) {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
  }
});

const images = document.querySelectorAll(".no-drag");

images.forEach((img) => {
  img.addEventListener("contextmenu", (event) => event.preventDefault());
  img.addEventListener("mousedown", (event) => event.preventDefault());
});

document.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.classList.contains("show")) {
      content.classList.remove("show");
    } else {
      content.classList.add("show");
    }
  });
}

function setLanguage(language) {
  document.querySelectorAll('[data-en]').forEach(element => {
    element.textContent = element.getAttribute('data-' + language);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const userLang = navigator.language || navigator.userLanguage;
  const language = userLang.startsWith('tr') ? 'tr' : 'en';
  setLanguage(language);
});
