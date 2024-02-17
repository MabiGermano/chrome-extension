window.onload = async () => {
    setRandomBackground();

    const mostVisitedURLs = await chrome.topSites.get();
    const currentTime = new Date();
    titleComponent.content = wellcomePhrases(currentTime);
    updateContent(titleComponent);   

    for (let index = 0; index < 5; index++) {
        const metadata = mostVisitedURLs[index];
        appendContent(topSitesComponent.element, topSiteItemComponent.element(metadata));
    }
   
    getRadomJoke().then(joke => {
        jokeCompoenent.content = `<p>${joke.setup} <i>${joke.delivery}</i></p>`
        updateContent(jokeCompoenent);
    });
    initSearch();
};

function setRandomBackground() {
    const body = document.body;
    body.style.backgroundImage = `url(
        'https://picsum.photos/${body.clientWidth}/${body.clientHeight}?grayscale&blur=1'
        )`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
}

async function getRadomJoke() {
    return fetch('https://v2.jokeapi.dev/joke/Programming,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
        .then((res) => {
            return res.json();
        });
}

function initSearch() {
    searchInputComponent.element().focus();
    searchComponent.element().addEventListener('submit', (event) => {
        event.preventDefault();
        const input = searchInputComponent.element();
        const text = input.value.replaceAll(' ', '+');
        window.open(`https://www.google.com/search?q=${text}`, '_self');
    });
}
function wellcomePhrases(currentTime) {
    const hours = currentTime.getHours();
    if (hours >= 5 && hours < 12)
        return "Good Morning Sunshine!"
    else if (hours >= 12 && hours < 18)
        return "Heey wellcome back."
    else if ((hours >= 18 && hours <= 23) || (hours >= 0 && hours < 5))
        return "Good evening my friend."
}