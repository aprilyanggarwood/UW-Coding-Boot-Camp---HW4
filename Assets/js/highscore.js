// let userInitial = document.getElementById("inputInitial");
// let saveSoreBtn = document.getElementById("saveScoreBtn");
// let finalScore = document.getElementById("finalScore");
// let mostRecentScore = localStorage.getItem("mostRecentScore");

// let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// finalScore.innerText = mostRecentScore;

// userInitial.addEventListener("keyup", () => {
//   saveScoreBtn.disabled = !userInitial.value;
// });

// saveHighScore = (event) => {
//   // console.log("clicked the save button!");
//   event.preventDefault();

//   let score = {
//     score: Math.floor(Math.random() * 100),
//     initial: userInitial.value,
//   };

//   highScores.push(score);
//   localStorage.setItem("highScores", JSON.stringify(highScores));
//   window.location.assign("./index.html");

//   console.log(highScores);
// };

//   .join("");

// get data of high scores from local storage

let highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
//
// function to get data of high scores from local storage
// each high score is generated after user is done the quiz will join to the high score list by function was designed
// user's initial and highsores will show up as list items in the high score page when user has his intial and score are stored to local storage
function printHighScores() {
  highScores = JSON.parse(localStorage.getItem("highscores")) || [];
  highScoresList.innerHTML = highScores.length
    ? // if then else short cut statement and map and join method are used for creating a high score list
      highScores
        .map((score) => {
          return `<li class="high-score">${score}</li>`;
        })
        .join("")
    : "You don't have any highscores yet!";
  highScoresList.style.listStyle = "none";
}
printHighScores();

let highScoreEl = document.querySelector(".clearHighscores");
highScoreEl.addEventListener("click", function (e) {
  localStorage.removeItem("highscores");
  printHighScores();
});
