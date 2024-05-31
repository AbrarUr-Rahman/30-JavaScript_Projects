const questions = [
  {
    question: "What is the largest desert in the world? ",
    answer: [
      { text: "Sahara Dessert", correct: false },
      { text: "Arabian Dessert", correct: false },
      { text: "Gobi Dessert", correct: false },
      { text: "Antarctic Dessert", correct: true },
    ],
  },
  {
    question: "Which organ does a snake listen with",
    answer: [
      { text: "Ears", correct: false },
      { text: "Tongue", correct: false },
      { text: "Snakes Can't Hear", correct: true },
      { text: "Body", correct: false },
    ],
  },
  {
    question: "What is the longest river in the world? ",
    answer: [
      { text: "Nile", correct: true },
      { text: "Amazon", correct: false },
      { text: "Mississippi", correct: false },
      { text: "Yangtze", correct: false },
    ],
  },
  {
    question: "Which city is located on two continents? ",
    answer: [
      { text: "Istanbul", correct: true },
      { text: "Rome", correct: false },
      { text: "Athens", correct: false },
      { text: "Cairo", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}.${currentQuestion.question}`;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true"; //!dataset
  if (isCorrect) {
    selectedBtn.classList.add("correct"); //!childList
    score++;
  } else {
    selectedBtn.classList.add("incorrect"); //!childList
  }
  //!Array.from query
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct"); //!childList
    }
    button.disabled = true; //# Disabled attribute
  });
  nextButton.style.display = "block";
};

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "play Again?";
  nextButton.style.display = "block";
}

const handleNextButton = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
