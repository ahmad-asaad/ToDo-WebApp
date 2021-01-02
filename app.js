const search = document.querySelector(".search input");
const add = document.querySelector(".add");
const todoList = document.querySelector("ul");

// Adding a To-Do item

const addToDo = (todo) =>{
    if (todo.length > 0) {
		todoList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
		add.reset();
	}
}
add.addEventListener("submit", (e) => {
	e.preventDefault();
	const todo = add.add.value.trim();
    addToDo(todo);
	
});

// Deleteing a To-Do item
todoList.addEventListener("click", (e) => {
	if (e.target.classList.contains("delete")) {
		e.target.parentElement.remove();
	}
});

// Searching for a To-Do item
const filterList = (keywords) => {
	// First we transform the HTMLCollection into an array
	// This will help us use better methods to search for what we need

	//Filter out the To-Dos that don't match
	Array.from(todoList.children)
		.filter((todo) => !todo.textContent.toLowerCase().includes(keywords.toLowerCase()))
		.forEach((todo) => todo.classList.add("filtered"));

	//Filter in the To-Dos that do match
	Array.from(todoList.children)
		.filter((todo) => todo.textContent.toLowerCase().includes(keywords.toLowerCase()))
		.forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", (e) => {
	const searchedKey = search.value.trim();
	filterList(searchedKey);
});
