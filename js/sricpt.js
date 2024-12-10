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

// Funkcja do dostosowywania liczby widocznych obrazów w zależności od szerokości ekranu
function adjustVisibleCount() {
    if (window.innerWidth < 1100) {
      return 1;  // Tylko 1 zdjęcie na małych ekranach
    } else if (window.innerWidth >= 1100 && window.innerWidth <= 1600) {
      return 2;  // 2 zdjęcia na ekranach od 768px do 1400px
    } else {
      return 3;  // 3 zdjęcia na większych ekranach powyżej 1400px
    }
  }
  

let visibleCount = adjustVisibleCount();  // Początkowa liczba widocznych zdjęć

// Funkcja do zmiany obrazów
function changeImage() {
  visibleCount = adjustVisibleCount();  // Sprawdzenie aktualnej liczby widocznych zdjęć na podstawie rozmiaru ekranu

  // Zbieramy odpowiednią liczbę obrazów
  const firstImages = Array.from(images).slice(currentIndex, currentIndex + visibleCount);

  // Jeśli wycinamy mniej niż widoczna liczba obrazów, dodajemy obrazy z początku
  if (firstImages.length < visibleCount) {
    firstImages.push(...Array.from(images).slice(0, visibleCount - firstImages.length));
  }

  gallery.innerHTML = '';  // Czyścimy galerię przed dodaniem nowych obrazów

  firstImages.forEach(image => {
    gallery.appendChild(image);
  });

  // Ustawiamy nowy index, uwzględniając liczbę widocznych obrazów
  currentIndex = (currentIndex + visibleCount) % images.length;
}

// Uruchamiamy zmianę obrazu
changeImage();

// Ustawiamy interwał zmiany obrazów co 3 sekundy
setInterval(changeImage, 3000);

// Dodajemy nasłuchiwacz zmiany rozmiaru okna
window.addEventListener('resize', function() {
  visibleCount = adjustVisibleCount();  // Ponownie dostosowujemy liczbę widocznych zdjęć przy zmianie rozmiaru okna
});

