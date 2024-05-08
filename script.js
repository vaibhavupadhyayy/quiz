const questions = [
    
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyper Text Markup Language", correct: true },
        { text: "Hyperlinks and Text Markup Language", correct: false },
        { text: "Home Tool Markup Language", correct: false },
        { text: "Hyper Transfer Markup Language", correct: false },
      ],
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheets", correct: false },
        { text: "Creative Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false },
      ],
    },
    {
      question: "What is the purpose of JavaScript?",
      answers: [
        { text: "To add interactivity to web pages", correct: true },
        { text: "To style web pages", correct: false },
        { text: "To define the structure of web pages", correct: false },
        { text: "To store data on the server", correct: false },
      ],
    },
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      answers: [
        { text: "<script src='script.js'></script>", correct: true },
        { text: "<script href='script.js'></script>", correct: false },
        { text: "<script name='script.js'></script>", correct: false },
        { text: "<script link='script.js'></script>", correct: false },
      ],
    },
    {
      question: "What does DOM stand for?",
      answers: [
        { text: "Document Object Model", correct: true },
        { text: "Document Orientation Model", correct: false },
        { text: "Document Order Model", correct: false },
        { text: "Document Option Model", correct: false },
      ],
    },
    {
      question: "What is the purpose of event handling in JavaScript?",
      answers: [
        { text: "To respond to user actions or system events", correct: true },
        { text: "To create animations on web pages", correct: false },
        { text: "To manage database operations", correct: false },
        { text: "To style web pages dynamically", correct: false },
      ],
    },
    {
      question: "What is the correct syntax for creating a function in JavaScript?",
      answers: [
        { text: "function myFunction() {}", correct: true },
        { text: "create function myFunction() {}", correct: false },
        { text: "myFunction = function() {}", correct: false },
        { text: "function: myFunction() {}", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      answers: [
        { text: "To refer to the current object", correct: true },
        { text: "To define a new variable", correct: false },
        { text: "To create a loop", correct: false },
        { text: "To execute a function", correct: false },
      ],
    },
    {
      question: "What does AJAX stand for?",
      answers: [
        { text: "Asynchronous JavaScript and XML", correct: true },
        { text: "Asynchronous JavaScript and XHTML", correct: false },
        { text: "Asynchronous JavaScript and JSON", correct: false },
        { text: "Asynchronous JavaScript and HTML", correct: false },
      ],
    },
    {
      question: "What is the purpose of JSON?",
      answers: [
        { text: "To store and transport data", correct: true },
        { text: "To style web pages", correct: false },
        { text: "To create animations", correct: false },
        { text: "To define the structure of web pages", correct: false },
      ],
    },
    {
      question: "What does API stand for?",
      answers: [
        { text: "Application Programming Interface", correct: true },
        { text: "Application Protocol Interface", correct: false },
        { text: "Automated Programming Interface", correct: false },
        { text: "Advanced Programming Interface", correct: false },
      ],
    },
    {
      question: "What is the purpose of Git?",
      answers: [
        { text: "Version control and collaboration", correct: true },
        { text: "To style web pages", correct: false },
        { text: "To create animations", correct: false },
        { text: "To define the structure of web pages", correct: false },
      ],
    },
    {
      question: "What is the correct syntax for a 'for' loop in JavaScript?",
      answers: [
        { text: "for (let i = 0; i < 5; i++) {}", correct: true },
        { text: "for (i = 0; i < 5; i++) {}", correct: false },
        { text: "for (i < 5; i++) {}", correct: false },
        { text: "for (i = 0; i++) {}", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'async' keyword in JavaScript?",
      answers: [
        { text: "To indicate that a function returns a promise", correct: true },
        { text: "To define a function as asynchronous", correct: false },
        { text: "To execute a function asynchronously", correct: false },
        { text: "To import external libraries asynchronously", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'localStorage' object in JavaScript?",
      answers: [
        { text: "To store data in the browser", correct: true },
        { text: "To manipulate the DOM", correct: false },
        { text: "To make HTTP requests", correct: false },
        { text: "To create animations", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'querySelector()' method in JavaScript?",
      answers: [
        { text: "To select elements in the DOM based on CSS selectors", correct: true },
        { text: "To select elements by their class name", correct: false },
        { text: "To select elements by their tag name", correct: false },
        { text: "To select elements by their ID", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'map()' method in JavaScript?",
      answers: [
        { text: "To apply a function to each element in an array and return a new array", correct: true },
        { text: "To iterate over the keys of an object", correct: false },
        { text: "To filter elements in an array based on a condition", correct: false },
        { text: "To sort elements in an array", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'addEventListener()' method in JavaScript?",
      answers: [
        { text: "To attach an event handler to an element", correct: true },
        { text: "To create a new event", correct: false },
        { text: "To remove an event handler from an element", correct: false },
        { text: "To trigger an event manually", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'fetch()' function in JavaScript?",
      answers: [
        { text: "To make HTTP requests", correct: true },
        { text: "To add elements to the DOM", correct: false },
        { text: "To store data in the browser", correct: false },
        { text: "To create animations", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
      answers: [
        { text: "To convert a JavaScript object to a JSON string", correct: true },
        { text: "To parse a JSON string into a JavaScript object", correct: false },
        { text: "To format a JSON string", correct: false },
        { text: "To validate a JSON string", correct: false },
      ],
    },
  ];






const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
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
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.textContent = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++; // Increment score if the answer is correct
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true; // Fixed typo 'ture' to 'true'
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    handleNextButton();
});

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
        nextButton.removeEventListener("click", handleNextButton); // Remove the event listener to prevent multiple event bindings
        nextButton.addEventListener("click", startQuiz); // Add event listener for "Play Again" button
    }
}


startQuiz();
