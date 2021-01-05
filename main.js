document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    body.style.backgroundImage = `url(
        'https://picsum.photos/${body.clientWidth}/${body.clientHeight}'
        )`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
});
