const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const images = document.querySelectorAll(".img-section img");
const userScoreDisplay = document.querySelector(".user-score-value");
const compScoreDisplay = document.querySelector(".computer-score-value");

let usrChoice;
let compChoice;
let result;
let userScore = 0;
let compScore = 0;

images.forEach(function (img) {
  img.addEventListener("click", function (e) {
    usrChoice = e.target.getAttribute("src");
    userChoice.innerHTML = `
        <img src="${usrChoice}" alt="rock">
    `;
    getrandomNumber();
    getResult();
    updateScore();
  });
});

function getrandomNumber() {
  const randomNumber = Math.floor(Math.random() * images.length) + 1;
  console.log(randomNumber);

  if (randomNumber === 1) {
    compChoice = `<img src="image/rock.png" alt="rock">`;
  } else if (randomNumber === 2) {
    compChoice = `<img src="image/paper.png" alt="paper">`;
  } else if (randomNumber === 3) {
    compChoice = `<img src="image/scissors.png" alt="scissor">`;
  }
  computerChoice.innerHTML = compChoice;
}

function getResult() {
  const userImgSrc = userChoice.querySelector("img").getAttribute("src");
  const compImgSrc = computerChoice.querySelector("img").getAttribute("src");

  if (compImgSrc === userImgSrc) {
    result = `It's a DRAW!`;
    resultDisplay.textContent = result;
    resultDisplay.style.color = "blue";
  } else if (
    (compImgSrc.includes("rock") && userImgSrc.includes("paper")) ||
    (compImgSrc.includes("paper") && userImgSrc.includes("scissor")) ||
    (compImgSrc.includes("scissor") && userImgSrc.includes("rock"))
  ) {
    result = `You WIN!`;
    resultDisplay.textContent = result;
    resultDisplay.style.color = "green";
    userScore++;
  } else {
    result = `You LOSE!`;
    resultDisplay.textContent = result;
    resultDisplay.style.color = "red";
    compScore++;
  }
  updateScore();
}

function updateScore() {
  userScoreDisplay.textContent = userScore;
  compScoreDisplay.textContent = compScore;
}
