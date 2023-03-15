// constant Declarations

const highscore = document.getElementById("high-scores");
const questionEl = document.getElementById("questions");
const startButton = document.getElementById("start-button");
const beginEl = document.getElementById("start");
const questionChoice = document.getElementById("question-choice");
const questionAns1 = document.getElementById("choice-1");
const questionAns2 = document.getElementById("choice-2");
const questionAns3 = document.getElementById("choice-3");
const questionAns4 = document.getElementById("choice-4");
const currentQuestion = 0
const score = 0;
const answerEl = document.getElementById("answer");
const timeLeft = 75;
const timerEl = document.getElementById("timer"); 
const submitScore = document.getElementById("scores")
const scores = document.getElementById("score");
const highScores = document.getElementById("high-scores");
const header = document.getElementById("header");
const back = document.getElementById("back");
const clear = document.getElementById("clear");
const initials = document.getElementById("initials");
const storedScore = document.getElementById("stored-score")

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
    console.log(currentQuestion);
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
    if (2 === questions[currentQuestion].answer - 1){
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


// Question Update

function updateQuestion() {
    if (currentQuestion >= 0 && currentQuestion < questions.length) {
        questionChoice.textContent = questions[currentQuestion].question;
        questionAns1.textContent = questions[currentQuestion].choices[0];
        questionAns2.textContent = questions[currentQuestion].choices[1];
        questionAns3.textContent = questions[currentQuestion].choices[2];
        questionAns4.textContent = questions[currentQuestion].choices[3];
    }
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
        timeLeft = 0;
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