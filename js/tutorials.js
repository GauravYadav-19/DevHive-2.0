const searchBar = document.getElementById('search-bar');
const languageCards = document.querySelectorAll('.language-card');

searchBar.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    languageCards.forEach(card => {
        const language = card.querySelector('h3').textContent.toLowerCase();
        if (language.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});