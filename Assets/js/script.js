// set a 3 minute timer for the entire quize
// this timer will show the time remaining of minutes and seconds by counting down from 3 mins
// an alert will show in the window when time ran out
var time = 180;
var timer;
function clock() {
  var min = Math.floor(time / 60);
  var sec = time % 60;
  document.querySelector(".minutes").textContent = min;
  document.querySelector(".seconds").textContent = sec;
  time--;
  if (time === 0) {
    clearInterval(timer);
    alert("time ran out!");
  }
}

let mainEl1 = document.getElementById("startQuizPage");
let mainEl2 = document.getElementById("questionPage");
let mainEl3 = document.getElementById("endQuizPage");
let NavEl1 = document.getElementById("navStatic");
let NavEl2 = document.getElementById("navTimer");
let finalScoreEl = document.getElementById("finalScore");

//event listener to start quiz
// when click start quize button , the start quize page will be off , and the question on page will show up, and the timer get start to count down by seconds.

document.getElementById("startBtn").addEventListener("click", function (event) {
  mainEl1.style.display = "none";
  mainEl2.style.display = "block";
  NavEl1.style.display = "none";
  NavEl2.style.display = "block";
  timer = setInterval(clock, 1000);
  showtime();
});

// put 4 coding questions in an array
var currentQuestion = 0;
var selectedquestions = [
  {
    question: "1. How do you write 'Hello World' in an alert box?",
    choices: [
      "msg('Hello World')",
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "alert('Hello World');",
    ],
    correctAnswer: 3,
  },
  {
    question: "2. How to empty an array in JavaScript?",
    choices: [
      "arrayList[]",
      "arrayList(0)",
      "arrayList.length=0",
      "arrayList.len(0)",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "3. What function to add an element at the begining of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctAnswer: 1,
  },
  {
    question: "4. What will this output? var a = [1, 2, 3]; console.log(a[6]);",
    choices: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: 0,
  },
];

// 4 quetions will show up in a loop when click submitQ button
function showtime() {
  document.querySelector(".questionText").textContent =
    selectedquestions[currentQuestion].question;
  for (let i = 0; i < 4; i++) {
    var option = document.querySelector(`#lab${i + 1}`);
    option.textContent = selectedquestions[currentQuestion].choices[i];
  }
}

//event listener to submit the quiz with the value of seletedOption is checked

document.getElementById("submitQ").addEventListener("click", check);
Array.from(document.getElementsByClassName("form-check-input")).forEach(
  function (el) {
    el.addEventListener("click", function () {
      console.log(this.value);
      selectedOption = this.value;
    });
  }
);

var commentText = document.getElementById("comment");
var showComment = ["correct!", "wrong!"];
var score = 0;
var selectedOption = 0;

// "correct!" or "wrong!" will show up for 1 second and off
function showSecond() {
  var div1 = document.getElementById("comment");
  div1.className = "show";
  var timeOut = setTimeout(function () {
    // console.log("timeoutran");
    div1.className = "d-none";
  }, 1000);
}

// if the value of seletedOption is checked is a correct answer or a wrong anser, the text of correct! or wrong! will show up to user for 1 second with the next question showing up
// if a correct answer is checked , user will get 1 score
// if a wrong answer is checked , user will get a punishiment by subtrucet 10 seconds from the remaining time
function check() {
  console.log(selectedOption, selectedquestions[currentQuestion].correctAnswer);
  if (selectedOption == selectedquestions[currentQuestion].correctAnswer) {
    commentText.textContent = showComment[0];
    score++;
  } else {
    time -= 10;
    commentText.textContent = showComment[1];
  }
  currentQuestion++;
  if (currentQuestion === selectedquestions.length) {
    return endQuize();
  }
  showtime();
  showSecond();
}

// function to handle end of quize, not complete yet
function endQuize() {
  mainEl2.style.display = "none";
  mainEl3.style.display = "block";
  finalScoreEl.setAttribute("placeholder", `${score}`);
}
