var highScore = document.getElementById("high-scores");
var questionsEl = document.getElementById("questions");
var startButton = document.getElementById("start-button");
var startEl = document.getElementById("start");
var questionChoice = document.getElementById("question-choice");
var choice1 = document.getElementById("choice-1");
var choice2 = document.getElementById("choice-2");
var choice3 = document.getElementById("choice-3");
var choice4 = document.getElementById("choice-4");
var currentQuestion = 0
var score = 0;
var answerEl = document.getElementById("answer");
var timeLeft = 75;
var timerEl = document.getElementById("timer"); 
var scores = document.getElementById("scores")
var score = document.getElementById("score");
var highScores = document.getElementById("high-scores");
var header = document.getElementById("header");
var back = document.getElementById("back");
var clear = document.getElementById("clear");
var initials = document.getElementById("initials");
var storedScore = document.getElementById("stored-score")

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. string", "2. boolean", "3. alerts", "4. numbers"],
        answer: 2
    },

    {
        question: "The condition in an if/else statement is enclosed with ___.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: 2
    },

    {
        question: "Arrays in JavaScript can be used to store ___.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: 3
    },

    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: 2
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: 3
    }
];

startButton.addEventListener("click", function(event){
    beginEl.classList.add("hide");
    questionsEl.classList.remove("hide");
    updateQuestion()
});

choice1.addEventListener("click", function(event){
    console.log("clicked1")
    if (0 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textcontent = "Wrong!"
        currentQuestion+=1
        updateQuestion()
        timeLeft-=10
    }
});

choice2.addEventListener("click", function(event){
    console.log("clicked2")
    if (0 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textcontent = "Wrong!"
        currentQuestion+=1
        updateQuestion()
        timeLeft-=10
    }
});

choice3.addEventListener("click", function(event){
    console.log("clicked3")
    if (0 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textcontent = "Wrong!"
        currentQuestion+=1
        updateQuestion()
        timeLeft-=10
    }
});

choice4.addEventListener("click", function(event){
    console.log("clicked4")
    if (0 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textcontent = "Wrong!"
        currentQuestion+=1
        updateQuestion()
        timeLeft-=10
    }
});

function updateQuestion() {
    questionChoice.textContent = questions[currentQuestion].question;
    choice1.textContent = questions[currentQuestion].choices[0];
    choice2.textContent = questions[currentQuestion].choices[1];
    choice3.textContent = questions[currentQuestion].choices[2];
    choice4.textContent = questions[currentQuestion].choices[3];
}

function startTimer() {
    timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft < 0) {
            displayScore(score);
            clearInterval(timeInterval);
        }
    }, 1000);
}

startButton.onclick = startTimer

function totalScore() {
    if (timeLeft < 0) {
        timeLeft === 0;
    }
    console.log(timeLeft);
    return score = timeLeft;
}

function displayScore(s) {
    questionsEl.classList.add("hide")
    submitScore.classList.remove("hide")
}

function storeScore(s) {
    submitScore.classList.add("hide")
    highScores.classList.remove("hide")
}