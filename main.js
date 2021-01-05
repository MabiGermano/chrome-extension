function teste () {
    const body = document.querySelector('body');
    console.log(body);
    body.style.backgroundImage = `url('https://picsum.photos/1200/720')`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    fetch(`https://picsum.photos/v2/list`).then((response) => {
        
        return response.json();
        
    }).then((responseJson) => {
        
        //injectInfo(responseJson);
        console.log(responseJson);
        
    });
}
teste();    