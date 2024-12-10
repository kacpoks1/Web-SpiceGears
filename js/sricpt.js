function setLanguage(Language){
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute('data-'+Language)
    });
}

document.addEventListener('DOMContentLoaded',() =>{
    const userLang = navigator.language || navigator.userLanguage;
    const language = userLang.startwith('pl') ? 'pl' : 'en';
    setLanguage(language)
})