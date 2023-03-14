// Variable Declarations

var highscore = document.getElementById("high-scores");
var questionEl = document.getElementById("questions");
var startButton = document.getElementById("start-button");
var beginEl = document.getElementById("start");
var questionChoice = document.getElementById("question-choice");
var questionAns1 = document.getElementById("choice-1");
var questionAns2 = document.getElementById("choice-2");
var questionAns3 = document.getElementById("choice-3");
var questionAns4 = document.getElementById("choice-4");
var finalQuestion = document.getElementById("choice-5");
var currentQuestion = 0
var score = 0;
var answerEl = document.getElementById("answer");
var timeLeft = 75;
var timerEl = document.getElementById("timer"); 
var submitScore = document.getElementById("scores")
var scores = document.getElementById("score");
var highScores = document.getElementById("high-scores");
var header = document.getElementById("header");
var back = document.getElementById("back");
var clear = document.getElementById("clear");
var initials = document.getElementById("initials");
var storedScore = document.getElementById("stored-score")

// Questions

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. string", "2. boolean", "3. alerts", "4. numbers"],
        answer: 2
    },
 
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: 2
    },
 
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: 3
    },
 
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: 2
    },
 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: 3
    }
 ];

 // Start Button

 startButton.addEventListener("click", function(event){
    beginEl.classList.add("hide");
    questionEl.classList.remove("hide");
    updateQuestion()
})

// Choosing Answers

questionAns1.addEventListener("click", function(event){
    console.log("clicked1")
    if (0 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textContent = "Wrong!"
        currentQuestion+=1
        updateQuestion()
        timeLeft-=10
    }
});
questionAns2.addEventListener("click", function(event){
    console.log("clicked2") 
    if (1 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textContent = "Wrong!"
        currentQuestion+=1
        updateQuestion()
        timeLeft-=10
    }
});
questionAns3.addEventListener("click", function(event){
    console.log("clicked3") 
    if (2 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textContent = "Wrong!"
        currentQuestion+=1
        timeLeft-=10
        updateQuestion()
    }
});
questionAns4.addEventListener("click", function(event){
    console.log("clicked4") 
    if (3 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textContent = "Wrong!"
        currentQuestion+=1
        timeLeft-=10
        updateQuestion()
    }
});
finalQuestion.addEventListener("click", function(event){
    console.log("clicked5")
    if (4 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        displayScore()
    } else {
        answerEl.textContent = "Wrong!"
        timeLeft-=10
        displayScore()
    }
});

// Question Update

function updateQuestion() {
    questionChoice.textContent = questions[currentQuestion].question;
    questionAns1.textContent = questions[currentQuestion].choices[0];
    questionAns2.textContent = questions[currentQuestion].choices[1];
    questionAns3.textContent = questions[currentQuestion].choices[2];
    questionAns4.textContent = questions[currentQuestion].choices[3];
    finalQuestion.textContent = questions[currentQuestion].choices[4];
}

// Timer 

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

// Score

function totalScore() {
    if (timeLeft < 0) {
        timeLeft === 0;
    }
    console.log(timeLeft);
    return score = timeLeft;
}


function displayScore(s) {
    questionEl.classList.add("hide")
    submitScore.classList.remove("hide")
}

function storeScore(s) { 
    submitScore.classList.add("hide")
    highScores.classList.remove("hide")
}