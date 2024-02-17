function updateContent(component) {
    const { element, content } = component;
    element().innerHTML = content;
}

function appendContent(parentElemet, element) {
    parentElemet().append(element);
}