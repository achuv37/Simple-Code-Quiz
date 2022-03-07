
// Pseudo code
// 1. Set a timer to a button with a starting value of 0.
// 2. Set a countdown for starting the Quiz.
// 3. When the user clicks on Start Quiz button, then questions will appear with choices.
// 4. A comparison function checks user option with right answer.
// 5. A text displays "correct" when the user clicks the right answer.
// 6. A text displays "wrong" when the user clicks the wrong answer.
// 7. Display final score based on user's right answers.
// 8. Show the user leftover time, which is subtracted from final score.
// 9. Quiz over function appears when leftover time reaches 0 and question lenth reaches 0.
// 10. Display  score with initials.
// 11. set local storage.
// 12. Display High score.

// creating a object questions
var questions = [
  {
    title: "Which symbol is used to separate JavaScript statements?",
    options: ["Comma","Colon","Hyphen","Semicolon"],
    answer: "Semicolon"
  },
  {
    title: "JavaScript ignores ?",
    options: ["Newlines","Tabs","Spaces","All of the above"],
    answer: "All of the above"
  },
  {
    title: "Which JavaScript method is used to write on browser's console?",
    options: ["console.write()","console.output()","console.log()","console.writeHTML()"],
    answer: "console.log()"
  },
  {
    title: "In JavaScript, single line comment begin with ?",
    options: ["#","/*","$","//"],
    answer: "//"
  },
  {
    title: "Which JavaScript keyword is used to declare a variable?",
    options: ["Var","var","Let","All of the above"],
    answer: "var"
  },
];
// Declaring the variables.
var questionEl = document.querySelector("#questionContainer");
var containerEl = document.querySelector("#container");
var timer = document.querySelector("#startQuiz");
var currentTime = document.querySelector("#currentTime");
var score = 0;
var questionIndex = 0;
var timeInterval = 0;
var penalty = 10;
var secondsLeft = 76; // 15 seconds per question + 1;
var ulEl = document.createElement("ul"); // create new ul element

// Set a timer to a button with a starting value of 0. Seconds left displays on the screen.
timer.addEventListener("click",function () {
  // checking and displays the leftover time to user
  if(timeInterval ===0) {
    timeInterval = setInterval(function() {
      secondsLeft--;
      currentTime.textContent = "Time: " + secondsLeft;

      if(secondsLeft<=0) {
        clearInterval(timeInterval);
        quizOver();
        currentTime.textContent = "Time up !";
      }
    },1000);
  } 
  show(questionIndex);   
});

//Function for showing question and options to the user.
function show(questionIndex) {
// Questions will appear inside the questionContainer, we need to clear it before starting.
  questionContainer.innerHTML = "";
  ulEl.innerHTML = "";
// Using for loop to loop through the questions array.
  for(var i=0; i<questions.length; i++) {
    var askQuestion = questions[questionIndex].title;
    var userOption = questions[questionIndex].options;
    questionContainer.textContent = askQuestion;
  }
/* Options are in a array. so we need to display the options as  list elements for users.
The forEach () method calls a function for each element in an array */
userOption.forEach (function (newEl) {
  var listEl = document.createElement("li");
  listEl.textContent = newEl;
  questionContainer.appendChild(ulEl);
  ulEl.appendChild(listEl);
  listEl.addEventListener("click", (comparison));
});
}

// creating a new function comparison, it compares the userOption with answer.
function comparison(event) {
  event.preventDefault();
  var element = event.target;
  if(element.matches("li")) {
    var divEl = document.createElement("div");
    divEl.setAttribute("id", "newDiv");
  // checking userOption : correct condition
    if(element.textContent == questions[questionIndex].answer) {
      score++;
      divEl.textContent = "Correct answer!"
    } 
    // wrong condition: Subtract 10 seconds from secondsLeft
    else {
      secondsLeft = secondsLeft - penalty;
      divEl.textContent = " Wrong answer! The answer is : " + questions[questionIndex].answer;
    }
  }
  // Next Question
  questionIndex++;
  // End of question
  if(questionIndex >= questions.length) {
    quizOver();
    divEl.textContent = " End of Quiz ! " + "" + " you got " + score + "/" + questions.length + "correct!";
  }
  else {
    show(questionIndex);
  }
  questionContainer.appendChild(divEl);
} 

// Function for quizOver 
function quizOver() {
  // checking
  questionContainer.innerHTML = "";
  currentTime.innerHTML = "";
  // Display Quiz over 
  var newHl = document.createElement("h1")
  newHl.setAttribute("id", "endQuiz");
  newHl.textContent = "Quiz Over!";
  questionContainer.appendChild(newHl);
  // Display final score to the user.
  if (secondsLeft >= 0) {
    var timeLeft = secondsLeft;
    var newPl = document.createElement("p");
    clearInterval(timeInterval);
    newPl.textContent = "Your final score is : "  + timeLeft;
    questionContainer.appendChild(newPl);
  }
  // creating input field for initial.
    var labelEl = document.createElement("label");
    labelEl.setAttribute("id","labelPart");
    labelEl.textContent ="Enter your initials:";
    questionContainer.appendChild(labelEl);

    var inputEl = document.createElement("input");
    inputEl.setAttribute("type","text");
    inputEl.setAttribute("id","initials");
    inputEl.textContent = "";
    questionContainer.appendChild(inputEl);

  // submit button
    var submitEl = document.createElement("button");
    submitEl.setAttribute("type","submit");
    submitEl.setAttribute("id","submitPart");
    submitEl.textContent = "Submit";
    questionContainer.appendChild(submitEl);
  
  // Event listener to submit initials
    submitEl.addEventListener("click",function () {
      var initials = inputEl.value;
      if(!initials) {
        window.alert("Enter your Initial");
      } else {
      // create a variable newEntry and set it equal to an object with two key value pairs.
          var newEntry = {
          initials: initials,
          score: timeLeft
        }
      // If this value does not exit, then set localStorageHighScores to an empty array. 
          var localStorageHighScores = JSON.parse(localStorage.getItem("localStorageHighScores")) || [] ;
      // push newEntry into localStorageHighScores.  
          localStorageHighScores.push(newEntry);
      // set localStorageHighScores into local storage with the key name of "localStorageHighScores"
          localStorage.setItem("localStorageHighScores", JSON.stringify(localStorageHighScores));
      // Redirect the user to "highScores.html"
          location.href = "highScores.html";
      }
    });
}


