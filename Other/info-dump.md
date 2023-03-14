HTML Pre-Reset

<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Coding Quiz Challenge</title>
        <link rel="stylesheet" href="./assets/css/reset.css">
	    <link rel="stylesheet" href="./assets/css/style.css">
	</head>

	<body>

        <!-- Header  -->
        <!-- Code for the top of the page headings so users can view high scores and see the remaining time. -->
	    <header id="header">
	        <a href="#"><span>View High Scores</span></a>
	        <h3 id="timer">Time: 75</h3>
	    </header>

	    <!-- Start Page -->
        <!-- Code for the first page that will load for a user to begin taking the challenge quiz. -->
	    <section id="start">
	        <h2>Coding Quiz Challenge</h2>
	        <p>
	            Try to answer the following code-related questions within the time limit.
	            Keep in mind that incorrect answers will penalize your score/time by ten second!
	        </p>

	        <!-- Start Button -->
            <!-- Code for the start button for a user to click to begin the quiz. -->
	        <button id="start-button" class="button">Start Quiz</button>
	    </section>

	    <!-- Questions & Answers -->
        <!-- Code for the Questions and Answer Choices that users will select. -->
	    <section id="card">
	        <div id="questions" class="hide">
	            <div id="question-choice"></div>

	            <div id="choices" class="button-grid">
	                <ol>
	                    <li id="choice-1" class="button"></li>
	                    <li id="choice-2" class="button"></li>
	                    <li id="choice-3" class="button"></li>
	                    <li id="choice-4" class="button"></li>
	                </ol>
	            </div>

	            <div id="answer"></div>
	        </div>
	    </section>

	    <!-- Saved Scores -->
        <!-- Code for saved scores. -->
	    <section>
	        <div id="scores" class="hide">
	            <h3>All done!</h3>
	            <p>Your final score is <span id="score"></span></p>
	            <label>Enter initials: </label>
	            <input type="text" name="initials" id="initials" placeholder="" />
	            <button id="submit" class="button">Submit</button>
	        </div>
	

	        <div id="high-scores" class="hide">
	            <h3>High Scores</h3>
	            <ol id="stored-score"></ol>

	            <button id="back" class="button">Go Back</button>
	            <button id="clear" class="button">Clear High Scores</button>
	        </div>
	    </section>
	        
	 <script src="./assets/js/script.js"></script>

	</body>
	</html>

------------------------------------------------------------------------------------------------------------------------------------------------

    CSS Pre-Reset
    /* Global Styles */

* {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
}

.hide {
    display: none;
}

/* Header Styles */

header {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
}

a {
    text-decoration: none;
    padding: 20px;
}

/* Start Page Styles */

#start {
    text-align: center;
}

/* Timer Styles */

#timer {
    font-weight: lighter;
    padding-right: 15px;
}

/* Question Styles */

#card {
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 5px;
    padding: 50px;
}

#question-choice {
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 22px;
}

#choices {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.button-grid {
    display: grid;
    max-width: 150px;
    width: 80%;
    margin: 10px 0;
    gap: 5px;
}

.button {
    color: white;
    font-size: 14px;
    border-radius: 8px;
    padding: 5px 5px;
    text-align: start;
    background-color: indigo;
}

.button:hover {
    background-color: violet;
}

#scores input:focus {
    padding: 5px;
    margin: 5px 0;
    border: 1px solid deepskyblue;
}

/* Saved Scores Styles */

#scores {
    text-align: center;
}

#scores h3 {
    margin-bottom: 15px;
}

#submit {
    margin-top: 10px;
}

#high-scores {
    text-align: center;
}

#stored-score {
    margin-top: 15px;
    padding-inline-start: 0;
}

#back,
#clear {
    margin-top: 15px;
}

------------------------------------------------------------------------------------------------------------------------------------------------

JS Pre-Reset

// constiable Declarations

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