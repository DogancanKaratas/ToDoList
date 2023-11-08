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
  listGroups.style.display="block"
 
});


input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    if (input.value.trim() !== "") {
      document.querySelector(".todo-btn").click();
    }   }
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



// const todoListContainer = document.querySelector(".list-container");

// //-------------------------- todo ekleme işlemi--------

// document.querySelector(".todo-btn").addEventListener("click", (element) => {
//   const todoText = input.value.trim().toUpperCase();
//   const dinamicId = new Date().getTime();
//   if (todoText === "") {
//     //  add alert
//     const alert = `
// <div class="alert alert-danger">Lütfen Boş bırakmayın</div>
// `;

//     todoListContainer.insertAdjacentHTML("beforebegin", alert);
//     setTimeout(() => {
//       document.querySelectorAll(".alert").forEach((alert) => {
//         alert.remove();
//       });
//     }, 2000);
//     return;
//   }

//   const newTodoItem = document.createElement("li");
//   newTodoItem.classList.add(
//     "list-group-item",
//     "d-flex",
//     "justify-content-between",
//     "align-items-center"
//   );

//   newTodoItem.innerHTML = `
// <div>
//   <input class="form-check-input me-1" type="checkbox" value="" id="${todoText}-${dinamicId}">
//   <label class="form-check-label" for="${todoText}-${dinamicId}">${todoText}</label>
// </div>
// <i class="fa-solid fa-trash-can  "></i>
// `;

//   todoListContainer.appendChild(newTodoItem);

//   input.value = "";
//   todoListContainer.style.display = "block";
// });
// //------------------------------------ todo ekleme işlemi-------------------

// // enter'a basınca ekleme işlemi
// input.addEventListener("keyup", (event) => {
//   if (event.keyCode === 13) {
//     if (input.value.trim() !== "") {
//       document.querySelector(".todo-btn").click();
//     }
//   }
// });

// // ---------------------- todo silme işlemi----------------
// todoListContainer.addEventListener("click", (event) => {
//   if (event.target.closest(".fa-trash-can")) {
//     console.log("silme işlemi");
//     event.target.closest(".list-group-item").remove();

//     if (todoListContainer.children.length === 0) {
//       todoListContainer.style.display = "none";
//     }
//   }
// });
