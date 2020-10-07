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
// user's initial and highsores will show up as list items in this high score page when user has his intial and score are stored to local storage
let highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

highScoresList.innerHTML = highScores.length
  ? highScores
      .map((score) => {
        return `<li class="high-score">${score}</li>`;
      })
      .join("")
  : "You don't have any highscores yet!";
highScoresList.style.listStyle = "none";

// let highScoreEl = document.querySelector(".clearHighscores");
// function clearHighscore() {
//   highScoreEl.addEventListener("click", function (e) {
//     e.highscores.localStorage.clear(highScoresList);
//   });
// }
// clearHighscore();
//
// });
