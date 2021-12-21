const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// =================================================================
// ** FONCTIONS REUTILISABLES **
// =================================================================

// fonction réutilisable générant une li todo.
const generateList = (todo) => {
  const li = `
    <li class=" list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo.toLowerCase()}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

  list.innerHTML += li;
};

// fonction réutilisable de filtrage
const filterTodos = (terme) => {
  // transformation de la liste des li en array et filtrage
  Array.from(list.children)
    // renvoi d'un nouvel array avec la méthode filter, puis return du texte contenu dans chaques todo et check si il inclu le terme
    .filter((todo) => !todo.textContent.includes(terme))
    // ajout d'une class .filter pour les contenus filtré
    .forEach((todo) => todo.classList.add("filter"));

  Array.from(list.children)
    // renvoi d'un nouvel array avec la méthode filter, puis return du texte contenu dans chaques todo et check si il inclu le terme
    .filter((todo) => todo.textContent.includes(terme))
    // suppression de la class .filter pour les contenus plus filtré
    .forEach((todo) => todo.classList.remove("filter"));
};

// =================================================================
// ** FONCTIONS TODOLIST **
// =================================================================

// eventlistener sur l'input lors du submit en tapant enter.
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // fonction pour l'ajout dans le form de la li (trim supprime les espace superflu)
  const todo = addForm.add.value.trim();
  // génération de la "li" dans le DOM.
  if (todo.length > 0) {
    generateList(todo);
    addForm.reset();
  }
});

// suppression des todos du DOM
list.addEventListener("click", (e) => {
  // ciblage de la classList ".delete" qui correspond à la poubelle d'une li.
  if (e.target.classList.contains("delete")) {
    // suppression du parent de cette classList qui n'est autre que la li.
    e.target.parentElement.remove();
  }
});

// filtre des todos
search.addEventListener("keyup", () => {
  const terme = search.value.trim();
  filterTodos(terme);
});
