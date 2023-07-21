const project_container = document.querySelector('.projects-list');
const project_data_location = `${root}/data/projects/list.json`;

fetch(project_data_location).then(response => {
    response.json().then(json => {
        json[project_type].forEach(element => {
            addProject(element);
        });
    });
});

function addProject(project) {
    var container = document.createElement("div");
    container.classList.add("tech-project");
    container.addEventListener("click", () => link(`${root}/html/projects/project.html?type=${project_type}&id=${project.id}`));

    var image = document.createElement("img");
    image.classList.add("project-image");
    img(image, project.image[0], project.image[1]);

    var title = document.createElement("h3");
    title.innerText = project.name;
    title.classList.add("title");

    container.appendChild(image);
    container.appendChild(title);

    project_container.appendChild(container);
}