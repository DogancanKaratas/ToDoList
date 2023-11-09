const input = document.querySelector(".input-text");

const listGroups = document.querySelector(".list-groups");

document.querySelector(".todo-btn").addEventListener("click", (e) => {
  const todoText = input.value.trim();
  const dinamicId = new Date().getTime();
  const newTodoItem = document.createElement("li");
  const firstListItem = listGroups.firstElementChild;
  newTodoItem.classList.add("list-group-item", "bg-transparent", "text-white");
  newTodoItem.innerHTML = `<input
  class="form-check-input me-1 mt-2"
  type="checkbox"
  value=""
  id="${todoText}-${dinamicId}"
/>
<label class="form-check-label mt-1" for="${todoText}-${dinamicId}"
  >${todoText}</label
>
<div class="btn-group dropstart float-end">
  <button
    type="button"
    class="btn btn-point"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </button>
  <ul class="dropdown-menu">
    <div class="d-flex flex-column align-items-center">
      <li>
        <button class="btn-pro1"></button>
        <button class="btn-pro2"></button>
        <button class="btn-pro3"></button>
      </li>
      <li><button class="btn-remove">Remove</button></li>
    </div>
  </ul>
</div>`;
  listGroups.insertBefore(newTodoItem, firstListItem);
  input.value = "";
  listGroups.style.display = "block";
});

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    if (input.value.trim() !== "") {
      document.querySelector(".todo-btn").click();
    }
  }
});

listGroups.addEventListener("click", (event) => {
  if (event.target.closest(".btn-remove")) {
    console.log("silme işlemi");
    event.target.closest(".list-group-item").remove();

    if (listGroups.children.length === 0) {
      listGroups.style.display = "none";
    }
  }
});

document.querySelector(".list-groups").addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("btn-pro1")) {
    const listItem = target.closest(".list-group-item");

    if (listItem) {
      // Önce mevcut rengi kaldır
      listItem.classList.remove("bg-warning", "bg-success"); // Diğer renkleri kaldırabilirsiniz

      // Seçilen rengi ekle
      listItem.classList.add("bg-danger"); // Kırmızı rengi ekler
      listItem
        .querySelector(".form-check-label")
        .classList.remove("text-warning", "text-success"); // Diğer renkleri kaldırabilirsiniz
      listItem.querySelector(".form-check-label").classList.add("text-danger"); // Kırmızı renk ekler
    }
  } else if (target.classList.contains("btn-pro2")) {
    const listItem = target.closest(".list-group-item");

    if (listItem) {
      listItem.classList.remove("bg-danger", "bg-success");
      listItem.classList.add("bg-warning");
      listItem
        .querySelector(".form-check-label")
        .classList.remove("text-danger", "text-success");
      listItem.querySelector(".form-check-label").classList.add("text-warning");
    }
  } else if (target.classList.contains("btn-pro3")) {
    const listItem = target.closest(".list-group-item");

    if (listItem) {
      listItem.classList.remove("bg-danger", "bg-warning");
      listItem.classList.add("bg-success");
      listItem
        .querySelector(".form-check-label")
        .classList.remove("text-danger", "text-warning");
      listItem.querySelector(".form-check-label").classList.add("text-success");
    }
  }
});

document.querySelector(".list-groups").addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("form-check-input")) {
    const listItem = target.closest(".list-group-item");

    if (listItem) {
      const label = listItem.querySelector("label");
      label.classList.toggle("text-decoration-line-through");
    }
  }
});



// ?

document.querySelector(".list-groups").addEventListener("click", (event) => {
  if (event.target.classList.contains("form-check-input")) {
    const pendingSpan = document.querySelector(".pending span");
    const compSpan = document.querySelector(".comp span");

    const liElement = event.target.closest("li");
    if (liElement) {
      if (event.target.checked) {
        pendingSpan.textContent = parseInt(pendingSpan.textContent) - 1;
        compSpan.textContent = parseInt(compSpan.textContent) + 1;
      } else {
        pendingSpan.textContent = parseInt(pendingSpan.textContent) + 1;
        compSpan.textContent = parseInt(compSpan.textContent) - 1;
      }
    }
  }
});

document.querySelector(".list-groups").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-remove")) {
    const liElement = event.target.closest("li");
    if (liElement) {
      liElement.remove();
      updateItemCount();
    }
  }
});

document.querySelector(".todo-btn").addEventListener("click", () => {
  const allSpan = document.querySelector(".all span");
  const pendingSpan = document.querySelector(".pending span");

  allSpan.textContent = parseInt(allSpan.textContent) + 1;
  pendingSpan.textContent = parseInt(pendingSpan.textContent) + 1;
});

function updateItemCount() {
  const liElements = document.querySelectorAll(".list-groups ul");
  const allSpan = document.querySelector(".all span");
  const pendingSpan = document.querySelector(".pending span");
  const compSpan = document.querySelector(".comp span");

  allSpan.textContent = liElements.length;
  pendingSpan.textContent = liElements.length;
  compSpan.textContent =0
    
}

