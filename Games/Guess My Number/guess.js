"use strict";

const startGameBtn = document.getElementById("startGame");
const guessDisplay = document.getElementById("correctGuess");
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("check");
const startMsg = document.getElementById("start");
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highScore");

// After Declaration

let hiddenNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const setMessage = function (message) {
	startMsg.textContent = message;
};

checkBtn.addEventListener("click", function () {
	const guess = Number(userInput.value);

	if (!guess) {
		setMessage("⛔ No Number!");
	} else if (guess === hiddenNumber) {
		setMessage("🎉 Correct Number!");
		document.body.style.backgroundColor = "#60b347";
		guessDisplay.style.width = "15rem";
		guessDisplay.textContent = hiddenNumber;

		if (score > highScore) {
			highScore = score;
			highscoreEl.textContent = highScore;
		}
	} else if (guess !== hiddenNumber && score > 1) {
		score--;
		scoreEl.textContent = score;
		if (guess > hiddenNumber) {
			setMessage("📈 Too high!");
		} else if (guess < hiddenNumber) {
			setMessage("📉 Too low!");
		}
	} else {
		setMessage("💥 You lost the game!");
		scoreEl.textContent = 0;
	}
});

startGameBtn.addEventListener("click", function () {
	hiddenNumber = Math.trunc(Math.random() * 20 + 1);
	document.body.style.backgroundColor = "#222";
	guessDisplay.style.width = "100px";
	setMessage("🏁 Start Guessing");
	score = 20;
	scoreEl.textContent = score;
	userInput.value = "";
	guessDisplay.textContent = "?";
});
