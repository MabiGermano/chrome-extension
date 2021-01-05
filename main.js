document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    body.style.backgroundImage = `url(
        'https://picsum.photos/${body.clientWidth}/${body.clientHeight}'
        )`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';

    getRadomJoke().then(joke => {
        updateContent(document.querySelector('.jokes-section'), joke);
    });
    initSearch();
});


function getRadomJoke() {
    return fetch('https://v2.jokeapi.dev/joke/Programming,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
        .then((res) => {
            return res.json();
        });
}

function updateContent(element, message) {
    element.innerHTML = `<p>${message.setup} <i>${message.delivery}</i></p>`
}

function initSearch() {
    const searchFrom = document.querySelector('.search-section form');
    searchFrom.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('.search-section form input');
        const text = input.value.replaceAll(' ', '+');
        window.open(`https://www.google.com/search?q=${text}`, '_self');
    });
}