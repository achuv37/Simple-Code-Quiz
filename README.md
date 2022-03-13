# Simple-Code-Quiz-Generator
This is a timer based code quiz website build with JavaScript. It generates questions and accepts answers from the user and generates and displayes the high score. 
## Description 

*  Pseudo code 
   1. Set a timer to a button with a starting value of 0.
   2. Set a countdown for starting the Quiz.
   3. When the user clicks on Start Quiz button, then questions will appear with choices.
   4. A comparison function checks user option with right answer.
   5. A text displays "correct" when the user clicks the right answer.
   6. A text displays "wrong" when the user clicks the wrong answer.
   7. Display final score based on user's right answers.
   8. Show the user leftover time, which is subtracted from final score.
   9. Quiz over function appears when leftover time reaches 0 or the question length parameter reaches 0.
   10. Display  score with initials.
   11. Set local storage.
   12. Display High score.
   
* A Simple-Timed-Code_quiz, This code-quiz contains 5 questions and 15 seconds for each questions, so declared a global variable "secondsLeft" with initial value of 76. Then set a timer to the startQuiz button element with a starting value of "0".The JavaScript setInterval () method executes a specified function multiple times at set time intervals specified in milliseconds.The JS setInterval () method will keep calling the function until clearInterval () method is called.
*created a function "show" for showing question and options to the user. Questions will appear inside the question container. For loop is used to loop through the questions.Options are in a array. So we need to display the options as  list elements for users.The forEach () method calls a function for each element in an array.
* Created the function "comparison" for comparing the user option with answer. The event.target property returns which DOM element triggered the event. This property is used to compare. If the user answered wrongly,then the subtract penalty from secondsLeft. At the end of quiz,displays the user correct answer out of total questions.
* Created another function "quizOver", for showing final score of the user. It allows user to enter the initials and highScore displays with initials.
* Finally, saves the initials and score to local storage. Created a variable newEntry and set it equal to an object with two key value pairs. Used array.push method to push newEntry into localStorageHighScores. Set localStorageHighScores into local storage with the key name of "localStorageHighScores".
* Redirects the user to another Html file "highScore.html" which displays h1 heading "High Score" with user entered initials and scores. localStorage.getItem() method returns the value of the storage object item.
* Created two buttons in highScore.html file, "clear and back". clear button clears the localStorage and back button redirects the user to the index.html file.

## Website
https://achuv37.github.io/Simple-Timed-Code-Quiz/

## Built With
* HTML
* CSS
* JavaScript

## Images
![1](https://user-images.githubusercontent.com/93412486/158040690-47807743-876c-49e0-b603-bc5f6f249b03.JPG)
![4](https://user-images.githubusercontent.com/93412486/158040692-1feb8a94-0b75-421d-b2fe-05852a25a6ab.JPG)
![6](https://user-images.githubusercontent.com/93412486/158040694-31a3a44d-cd1c-4b67-940a-d36c33a1440a.JPG)

## Video
https://user-images.githubusercontent.com/93412486/158041054-6c535c70-cdaa-4752-9bd6-09ddd8de1b3f.mp4
## Contributed By
   Aswathy
