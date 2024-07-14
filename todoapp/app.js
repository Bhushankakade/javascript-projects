const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editId;
let editFlag = false;

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  let id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `
    <p class="title">${value}</p>
                <div class="btn-container">
                    <!-- edit btn  -->
                    <button type="button" class="edit-btn">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                    <!-- delete btn  -->
                    <button type="button" class="delete-btn">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
    `;

    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);
    list.appendChild(element);
    displayAlert("item added to the list", "success");
    container.classList.add("show-container");
    setBacktoDefault();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  displayAlert("empty list", "danger");
  container.classList.remove("show-container");
  setBacktoDefault();
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  console.log(element);
  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }

  displayAlert("item removed", "danger");
  setBacktoDefault();
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;

  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = "edit";
}

function setBacktoDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}
