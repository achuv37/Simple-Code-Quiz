
// Pseudo code
// 1. Set a timer to a button with a starting value of 0.
// 2. Set a countdown for starting the Quiz.
// 3. When the user clicks on Start Quiz button, then questions will appear with choices.
// 4. A text displays "correct" when the user clicks the right answer.
// 5. A text displays "wrong" when the user clicks the wrong answer.
// 6. Display final score based on user's right answers.
// 7. Show the user leftover time, which is subtracted from final score.
// 8. Display final scores with initials.
// 9. set local storage.
// 10. Display High score.

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
console.log(questionEl);
console.log(containerEl);
console.log(timer);
console.log(currentTime);
console.log(ulEl);