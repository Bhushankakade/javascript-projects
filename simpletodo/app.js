const form = document.getElementById("form");
const msg = document.querySelector(".msg");
const posts = document.querySelector(".posts");
const input = document.querySelector("#input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  formValidation();
});

function formValidation() {
  if (input.value === "") {
    msg.textContent = "Value cannot be empty";
    console.log("failure");
  } else {
    msg.textContent = "";
    acceptData();
    console.log("success");
  }
}

let data = [];
function acceptData(e) {
  data = input.value;
  console.log(data);
  createPost();
}

function createPost() {
  posts.innerHTML += `
                <div class="postContent">
                    <p>${data}</p>
                    <span class="option">
                        <i onClick="editPost(this)" class="fas fa-edit"></i>
                        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
                    </span>
                </div>
    `;
  input.value = "";
}

function deletePost(e) {
  e.parentElement.parentElement.remove();
}

function editPost(e) {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}
