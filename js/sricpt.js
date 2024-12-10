function setLanguage(language) {
    // Przeszukuje wszystkie elementy z atrybutem data-en i zmienia ich tekst
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute('data-' + language);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Pobieramy język przeglądarki
    const userLang = navigator.language || navigator.userLanguage;
    
    // Sprawdzamy, czy język to polski
    const language = userLang.startsWith('pl') ? 'pl' : 'en';
    
    // Ustawiamy język
    setLanguage(language);
});

let currentIndex = 0; 
const gallery = document.querySelector('.gallery-image'); 
const images = document.querySelectorAll('.img-box'); 
const visibleCount = 3; 


function changeImage() {
  
  const firstImages = Array.from(images).slice(currentIndex, currentIndex + visibleCount);

  if (firstImages.length < visibleCount) {
    firstImages.push(...Array.from(images).slice(0, visibleCount - firstImages.length));
  }

  gallery.innerHTML = '';

  firstImages.forEach(image => {
    gallery.appendChild(image);
  });

  currentIndex = (currentIndex + visibleCount) % images.length;
}

changeImage();

setInterval(changeImage, 3000);
