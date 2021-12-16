"use strict";
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = document.querySelector(".highscore").textContent;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //if there is no number
  if (!guess) {
    displayMessage("There is no number!");
    //if the number is wrong
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    score--;
    document.querySelector(".score").textContent = score;
    //if the number is right
  } else if (guess === secretNumber) {
    displayMessage("You win!");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = guess;
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
