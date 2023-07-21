const project_data_location = `${root}/data/projects/${param("type")}/${param("id")}.json`;
const header = document.querySelector('.project-name');
const project_tags = document.querySelector('.project-tags');
const project_materials = document.querySelector('.project-materials');
const circuit = document.querySelector('.project-circuit');
const demonstration = document.querySelector('.project-demonstration');
const description = document.querySelector('.project-description');
const codeList = document.querySelector('.project-code');

fetch(project_data_location).then(response => {
    response.json().then(project => {
        header.innerText = project.name;
        circuit.innerText = project.circuit;
        description.innerHTML = project.description;
        project.tags.forEach(tag => {
            addTag(tag);
        });

        project.materials.forEach(material => {
            addMaterial(material);
        });
        project.demonstration.forEach(demo => {
            addDemoContent(demo);
        });
        project.code.forEach(url => {
            addCode(url);
        });
    });
});

function addTag(tag) {
    var element = document.createElement("div");
    element.classList.add("roundObject");
    element.innerText = tag;
    project_tags.appendChild(element);
}

function addMaterial(material) {
    var element = document.createElement("div");
    element.classList.add("roundObject");
    element.classList.add("large-link");
    element.addEventListener("click", () => {
        link(material.url);
    });
    element.innerText = material.name;
    project_materials.appendChild(element);
}

function addDemoContent(demo) {
    var element = document.createElement("a");
    element.classList.add("project-demo-img")
    switch (demo.type) {
        case "image":
            var url = imgUrl(demo.id[0], demo.id[1]);
            var img = document.createElement("img");
            img.width = 350;
            img.height = 300;
            img.src = url;
            element.href = url;
            element.appendChild(img);
            break;
    }

    demonstration.appendChild(element);
}

function addCode(url) {
    var p = document.createElement("p");
    var a = document.createElement("a");
    a.href = url;
    a.innerText = url;
    p.appendChild(a);
    codeList.appendChild(p);
}