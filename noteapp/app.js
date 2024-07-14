const form = document.querySelector(".form");
const addNotes = document.querySelector(".add-note");
const addBtn = document.querySelector(".add-btn");
const notesSection = document.querySelector(".notes-section");
const title = document.querySelector(".title");
const desc = document.getElementById("description");
const overlay = document.querySelector(".overlay");

addNotes.addEventListener("click", function () {
  setBacktoDefault();
  document.querySelector(".noteapp").classList.toggle("show-form");
});

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (title.value !== "" && desc.value !== "") {
    const element = document.createElement("div");
    element.classList.add("notes");
    element.innerHTML = `
      <h2>${title.value}</h2>
      <p>${desc.value}</p>
      <button><i class="fa-solid fa-trash delte-btn"></i></button>`;
    notesSection.appendChild(element);

    document.querySelector(".noteapp").classList.remove("show-form");

    const deleteBtn = element.querySelector(".delte-btn");
    deleteBtn.addEventListener("click", function () {
      element.remove();
    });

    setBacktoDefault();
  }
});

function setBacktoDefault() {
  title.value = "";
  desc.value = "";
}

overlay.addEventListener("click", function () {
  document.querySelector(".noteapp").classList.remove("show-form");
});
