var viewScore = document.getElementById("viewScore");
var back = document.getElementById("back");
var clear = document.getElementById("clear");

// EventListener clears the scores.
clear.addEventListener("click", function() {
  localStorage.clear();
  
});
//Storing data from local storage in to an array of objects.
var localStorageHighScores = localStorage.getItem("localStorageHighScores");
localStorageHighScores = JSON.parse(localStorageHighScores);

if(localStorageHighScores !== null) {
  for(var i=0;i<localStorageHighScores.length;i++) {
    var newListEl = document.createElement("li");
    newListEl.textContent = "Initial: "  +  localStorageHighScores[i].initials + " " + "Score: " +  localStorageHighScores[i].score;
    viewScore.appendChild(newListEl);
  }
}
// EventListener to back 
back.addEventListener("click", function() {
  location.href = "index.html";
});