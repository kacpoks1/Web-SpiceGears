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

