const quiz = [
  {
    question: "Which of the following is a version control system?",
    a: "Git",
    b: "FTP",
    c: "HTTP",
    d: "SSH",
    correct: "a",
  },
  {
    question: "What is the purpose of the CSS language in web development?",
    a: "To structure the content of web pages",
    b: "To add interactivity to web pages",
    c: "To style and layout web pages",
    d: "To manage databasesQLite",
    correct: "c",
  },
  {
    question:
      "Which of the following languages is primarily used for developing Android applications?",
    a: "Swift",
    b: "Kotlin",
    c: "Ruby",
    d: "PHP",
    correct: "b",
  },
  {
    question: "Which type of programming language is JavaScript?",
    a: "Compiled language",
    b: "Interpreted language",
    c: "Machine language",
    d: "Assembly language",
    correct: "b",
  },
  {
    question:
      "Which operator in JavaScript is used for strict equality comparison?",
    a: "==",
    b: "=",
    c: "!==",
    d: "===",
    correct: "d",
  },
];

const question = document.querySelector(".question");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");
const submitBtn = document.querySelector(".submit");
const options = document.querySelectorAll(".answer");
const quizDisplay = document.querySelector(".quiz");

window.addEventListener("DOMContentLoaded", quizLoad);

let currentquiz = 0;
let score = 0;

function quizLoad() {
  removeChecked();
  currentquizData = quiz[currentquiz];

  question.textContent = currentquizData.question;
  option1.textContent = currentquizData.a;
  option2.textContent = currentquizData.b;
  option3.textContent = currentquizData.c;
  option4.textContent = currentquizData.d;
}

function removeChecked() {
  options.forEach(function (option) {
    option.checked = false;
  });
}

function getselected() {
  let answer = undefined;

  options.forEach(function (option) {
    if (option.checked) {
      answer = option.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", function () {
  const selectedAnswer = getselected();

  if (!selectedAnswer) {
    alert("Please select an answer");
    return;
  }
  if (selectedAnswer === quiz[currentquiz].correct) {
    score++;
  }
  currentquiz++;
  if (currentquiz < quiz.length) {
    quizLoad();
  } else {
    quizDisplay.innerHTML = `
                <h2 class="score">You're are score is <span>${score}</span>.</h2>
                <span id="retry">Try again!</span>
                <button onclick="location.reload()" class='reload'>Reload</button>
            `;
  }
});
