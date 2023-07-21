const elements = document.querySelectorAll('.imgload');

elements.forEach(element => {
    var imgName = element.getAttribute("-src");
    var imgCat = element.getAttribute("-cat");
    img(element, imgCat, imgName);
});

function link(href) {
    window.location.href = href;
}

function img(element, cat, name) {
    element.src = `${root}/img/${cat}/${name}`;
}

function imgUrl(cat, name) {
    return `${root}/img/${cat}/${name}`;
}

function param(name) {
    return new URL(window.location.href).searchParams.get(name);
}