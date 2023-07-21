const navbar = document.querySelector('.topnav');
const navdata_location = `${root}/data/ui/navigation.json`;

fetch(navdata_location).then(response => {
    response.json().then(json => {
        json.elements.forEach(element => {
            var isActive = (element.url == location.pathname);

            appendNavigationElement(element.name, element.url, isActive);
        });

        appendNavigationGithubElement();
    });
});

function appendNavigationElement(name, url, active) {
    var child = document.createElement("a");
    child.innerText = name;
    child.href = `${root}${url}`;
    if (active) {
        child.classList.add("active");
    }
    navbar.appendChild(child);
}

function appendNavigationGithubElement() {
    var child = document.createElement("a");
    child.innerText = "Github";
    child.href = "https://github.com/Li2424";
    child.classList.add("right");
    navbar.appendChild(child);
}