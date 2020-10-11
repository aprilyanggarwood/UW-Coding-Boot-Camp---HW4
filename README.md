# Create a Code Quiz Application with JavaScript [HW4](https://aprilyanggarwood.github.io/UW-Coding-Boot-Camp---HW4/)

## Goal

This homework practice is to create a timed code quiz application with multiple-choice questions as well as having a function to store user's intials and high scores to local storage. So later on user can compare each score through current and past for seeing his improvements.

## How this coding quiz application work for user

- This quiz application installed 4 questions as well as set up a limited 3 minutes timer.

- When the timer reach out 0 mins, an alert will pop up in the window and tell user the time is run out. When user clicks Ok button of the alert, this application will return to the first page of the quiz.

- When user works on the questions, he will get 1 score for each answer is correct, otherwise, his remaining time will be deducted 10 seconds as a little punishment for the wrong answer.

- User can see a message shows up for 1 second on the next page of questions after each question is selected and submitted. This message will tell user his answer for the previous question is correct or wrong.

- After user submitted the last question, this application will generate and show the current score in the final score input field which is indicated how many questions got correct by user,so user can see his quiz result and put his initial in the inital form, then click save button to store his score and inital to the local storage.

  - Each intial and score are stored to and pulled from the local storage by JSON.stringify method and JSON.parse method.

  - Each high score is generated after user is done the quiz will join to the high score list by function was designed. User can see his current score and previouse scores through the score list on the High Score page.

- The Clear High Score button on the high score page is gaven a click event method for clearing the hisctory of user's high scores from local storage. The Go Home button is a link for user to go back the first page of the quiz.

- A High Score link is created on the upper left corner of the first page which navigate user to the high score page for reviewing his score history.

## Summary of Javascript functions and methods are used for manipulating HTML files.

- Two HTML files , two Javascript files , and one CSS file are deployed for completing this application.

-
