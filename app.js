const projects = [
  {
    id: 1,
    title: "project name",
    img: "python.jpg",
    url:
      "https://github.com/chakravarthi-giduthuri/javascript-basic-projects/tree/master/1-color-flipper",
  },
  {
    id: 2,
    title: "project name 2",
    img: "django.jpeg",
    url:
      "https://github.com/chakravarthi-giduthuri/javascript-basic-projects/tree/master/1-color-flipper",
  },
  {
    id: 3,
    title: "project name 3",
    img: "js.png",
    url:
      "https://github.com/chakravarthi-giduthuri/javascript-basic-projects/tree/master/1-color-flipper",
  },
  {
    id: 4,
    title: "project name 3",
    img: "js.png",
    url:
      "https://github.com/chakravarthi-giduthuri/javascript-basic-projects/tree/master/1-color-flipper",
  },
  {
    id: 5,
    title: "project name",
    img: "python.jpg",
    url:
      "https://github.com/chakravarthi-giduthuri/javascript-basic-projects/tree/master/1-color-flipper",
  },
];

const mainheader = document.querySelector(".main");

window.addEventListener("DOMContentLoaded", () => {
  displayProjects(projects);
});

const displayProjects = (project) => {
  let pro = project.map((item) => {
    return ` <article class="card">
        <img class="photo" src="${item.img}" />
        <div class="button">
            <a href="${item.url}"><button>${item.title}</button></a>
        </div>
      </article>`;
  });
  pro = pro.join("");
  mainheader.innerHTML = pro;
};
