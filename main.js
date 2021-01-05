document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    body.style.backgroundImage = `url(
        'https://picsum.photos/${body.clientWidth}/${body.clientHeight}'
        )`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    getRadomJoke();
});


function getRadomJoke() {
    fetch('https://v2.jokeapi.dev/joke/Programming,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
        .then((res) => {
            return res.json();
        }).then((data)=> {
            updateContent(document.querySelector('.jokes-section'), data);
        });
}

function updateContent(element, message) {
    element.innerHTML = `<p>${message.setup} <i>${message.delivery}</i></p>`
}