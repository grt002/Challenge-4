// HTML Variables

var questionEl = document.getElementById("questions");
var startPageEl = document.getElementById("start");
var answerEl = document.getElementById("answer");
var timerEl = document.getElementById("timer"); 
var submitScoreEl = document.getElementById("submit-score");
var scoreEl = document.getElementById("score");
var highScoresEl = document.getElementById("high-scores");
var initialsEl = document.getElementById("initials");
var storedScoreEl = document.getElementById("stored-score");
var questionChoice = document.getElementById("question-choice");
var answerChoice1 = document.getElementById("choice-1");
var answerChoice2 = document.getElementById("choice-2");
var answerChoice3 = document.getElementById("choice-3");
var answerChoice4 = document.getElementById("choice-4");
var startBtn = document.getElementById("start-button");
var submitScoreBtn = document.getElementById("submit-button");
var highScoreBtn = document.getElementById("hs-button");
var backBtn = document.getElementById("back-button");
var clearBtn = document.getElementById("clear-button");

// Game Variables

var currentQuestion = 0;
var score = 0;
var playing = true;
var timeLeft = 75;
var highScoreArray = JSON.parse(localStorage.getItem("High Score Table"));
    if (highScoreArray === null) {
        highScoreArray = [];
    }

// Questions

var questions = [
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

 startBtn.addEventListener("click", function(event){
    console.log(currentQuestion);
    startPageEl.classList.add("hide");
    questionEl.classList.remove("hide");
    updateQuestion();
    startTimer();
    resetGame();
})

// Choosing Answers

answerChoice1.addEventListener("click", function(event){
    console.log("clicked1")
    if (0 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        score+=10
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textContent = "Wrong!"
        currentQuestion+=1
        updateQuestion()
        timeLeft-=10
    }
});
answerChoice2.addEventListener("click", function(event){
    console.log("clicked2") 
    if (1 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        score+=10
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textContent = "Wrong!"
        currentQuestion+=1
        updateQuestion()
        timeLeft-=10
    }
});
answerChoice3.addEventListener("click", function(event){
    console.log("clicked3") 
    if (2 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        score+=10
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textContent = "Wrong!"
        currentQuestion+=1
        timeLeft-=10
        updateQuestion()
    }
});
answerChoice4.addEventListener("click", function(event){
    console.log("clicked4") 
    if (3 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        score+=10
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
        answerChoice1.textContent = questions[currentQuestion].choices[0];
        answerChoice2.textContent = questions[currentQuestion].choices[1];
        answerChoice3.textContent = questions[currentQuestion].choices[2];
        answerChoice4.textContent = questions[currentQuestion].choices[3];
    } else {
        playing=false;
    }
}

// Timer 

function startTimer() {
    timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft === 0 || playing===false) {
            displayScore(score);
            clearInterval(timeInterval);
        } 
    }, 1000);
}

// Scoring

function totalScore() {
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    console.log(timeLeft);
    return score = timeLeft;
}

function displayScore() {
    questionEl.classList.add("hide");
    submitScoreEl.classList.remove("hide");
    scoreEl.textContent = score;
}

function storeScore() { 
    highScoreArray.push({initials: initialsEl.value, score: score});
    console.log(highScoreArray);
    localStorage.setItem("High Score Table", JSON.stringify(highScoreArray));
    displayHighScore();
}

function displayHighScore() {
    submitScoreEl.classList.add("hide");
    highScoresEl.classList.remove("hide");
    startPageEl.classList.add("hide");
    storedScoreEl.innerHTML="";
    for (var i = 0; i < highScoreArray.length; i++) {
        var newScore = document.createElement("li");
        newScore.textContent=highScoreArray[i].initials + " - " + highScoreArray[i].score;
        console.log(newScore);
        storedScoreEl.appendChild(newScore);
    }
}

// Reset the Game

function resetGame() {
    score = 0;
    timeLeft = 75;
    currentQuestion = 0;
    playing = true;
    answerEl.textContent = "";
    updateQuestion();
}

// Other Button Event Listeners

submitScoreBtn.addEventListener("click", storeScore);

backBtn.addEventListener("click", function(){
    highScoresEl.classList.add("hide");
    startPageEl.classList.remove("hide");
});

clearBtn.addEventListener("click", function(){
    highScoreArray=[];
    displayHighScore();
    localStorage.setItem("High Score Table", JSON.stringify(highScoreArray));
    console.log("Running");
});

highScoreBtn.addEventListener("click", function(){
    displayHighScore();
});