const titleComponent = {
    element: () => document.querySelector(".title>h1"),
    content: "Lacks implementation"
}

const jokeCompoenent = {
    element: () => document.querySelector('.jokes-section'),
    content: "Lacks implementation"
}

const searchComponent = {
    element: () => document.querySelector('.search-section form'),
    content: "Lacks implementation"
}

const searchInputComponent = {
    element: () => document.querySelector('.search-section form input'),
    content: "Lacks implementation"
}

const topSitesComponent = {
    element: () => document.querySelector('nav'),
    content: "Lacks implementation"
}

const topSiteItemComponent = {
    element: (metadata) => {
        const a = document.createElement("a");
        const div = document.createElement("div");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const metaUrl = new URL(metadata.url);

        const url = new URL(chrome.runtime.getURL("/_favicon/"));
        url.searchParams.set("pageUrl", metaUrl.origin);
        url.searchParams.set("size", "32");
        a.href = metadata.url;
        img.src = url.toString();
        p.innerHTML = metadata.title;
        div.append(img);
        div.append(p);
        a.append(div);
        return a;
    },
    content: "Lacks implementation"
}