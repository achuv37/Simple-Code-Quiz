var viewScore = document.getElementById("viewScore");
var back = document.getElementById("back");
var clear = document.getElementById("clear");

// eventListener clears the scores.
clear.addEventListener("click", function() {
  localStorage.clear();
  
});

var localStorageHighScores = localStorage.getItem("localStorageHighScores");
localStorageHighScores = JSON.parse(localStorageHighScores);

if(localStorageHighScores !== null) {
  for(var i=0;i<localStorageHighScores.length;i++) {
    var newListEl = document.createElement("li");
    newListEl.textContent = "Initial: "  +  localStorageHighScores[i].initials + " " + "Score: " +  localStorageHighScores[i].score;
    viewScore.appendChild(newListEl);
  }
}
// eventListener to back 
back.addEventListener("click", function() {
  location.href = "index.html";
});