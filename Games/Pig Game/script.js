/* "use strict";

 const player1 = document.querySelector(".player--0"),
 	player2 = document.querySelector(".player--1"),
 	player1Score = document.getElementById("score--0"),
 	player2Score = document.getElementById("score--1"),
 	player1CurrentScore = document.getElementById("current--0"),
 	player2CurrentScore = document.getElementById("current--1"),
 	diceImg = document.getElementById("diceImg"),
 	newGameBtn = document.getElementById("newBtn"),
 	rollDiceBtn = document.getElementById("rollDice"),
 	holdScoreBtn = document.getElementById("hold");
console.log(
	player1,
	player2,
	player1Score,
	player2Score,
	player1CurrentScore,
	player2CurrentScore,
	newGameBtn,
	rollDiceBtn,
	holdScoreBtn
 );
 function reset() {
 	player1.classList.add("player--active");
 	player2.classList.remove("player--active");
 	player1Score.textContent = 0;
 	player2Score.textContent = 0;
 	player1CurrentScore.textContent = 0;
 	player2CurrentScore.textContent = 0;
 	diceImg.style.display = "none";
 }
 const newGame = function () {
 	reset();
 	let activePlayer = player1.classList.contains("player--active")
 		? player1
 		: player2;
 	console.log(activePlayer);
 	rollDiceBtn.addEventListener("click", () => {
 		// let diceNum = 1;
 		let diceNum = Math.floor(Math.random() * 6 + 1);
 		let score = diceNum;
 		if (diceNum === 1) {
 			diceImg.style.display = "none";
 			score = 0;
 			activePlayer.querySelector(".score").textContent = score;
 			console.log("Fail");
 		} else {
 			let src = `images/dice-${diceNum}.png`;
 			diceImg.style.display = "unset";
 			diceImg.setAttribute("src", src);
 			score = score + diceNum;
 			activePlayer.querySelector(".score").textContent = score;
 			console.log(diceNum);
 		}
 	});
 };
 newGame();*/

"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const currScore0El = document.getElementById("current--0");
const currScore1El = document.getElementById("current--1");
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const diceEl = document.getElementById("dice");
const btnNew = document.getElementById("newBtn");
const btnRoll = document.getElementById("rollDice");
const btnHold = document.getElementById("hold");
const modalWindow = document.querySelector(".Instmodal");
const closeBtn = document.querySelector(".closeBtn");
const overlay = document.querySelector(".overlay");

// Starting Instructions
modalWindow.classList.add("hidden");
overlay.classList.add("hidden");

window.addEventListener("load", () => {
	setTimeout(() => {
		modalFunction();
	}, 1000);
});

const modalFunction = function () {
	modalWindow.classList.remove("hidden");
	overlay.classList.remove("hidden");

	const closeModal = function () {
		modalWindow.classList.add("hidden");
		overlay.classList.add("hidden");
	};

	closeBtn.addEventListener("click", () => {
		closeModal();
	});

	overlay.addEventListener("click", () => {
		closeModal();
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") closeModal();
	});
};

// Starting conditions

let activePlayer, scores, playing, currScore;

const init = function () {
	activePlayer = 0;
	scores = [0, 0];
	playing = true;
	currScore = 0;

	score0EL.textContent = 0;
	score1EL.textContent = 0;
	currScore0El.textContent = 0;
	currScore1El.textContent = 0;

	diceEl.classList.add("hidden");
	player0El.classList.remove("player--winner");
	player1El.classList.remove("player--winner");
	player0El.classList.add("player--active");
	player1El.classList.remove("player--active");
};

const setPlayerValues = function () {
	document.getElementById(`current--${activePlayer}`).textContent = currScore;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0El.classList.toggle("player--active");
	player1El.classList.toggle("player--active");
};

init();
// Generate a random dice roll number,
// Check the dice roll number,
btnRoll.addEventListener("click", () => {
	let diceNum = Math.trunc(Math.random() * 6 + 1);
	if (playing) {
		diceEl.classList.remove("hidden");
		diceEl.src = `images/dice-${diceNum}.png`;

		if (diceNum !== 1) {
			currScore += diceNum;
			document.getElementById(`current--${activePlayer}`).textContent =
				currScore;
		} else {
			currScore = 0;
			setPlayerValues();
		}
	} else
		alert(
			`Player ${
				activePlayer + 1
			} has won this set, restart the game to continue`
		);
});

btnHold.addEventListener("click", () => {
	// activePlayer = activePlayer === 0 ? 1 : 0;

	if (playing) {
		scores[activePlayer] += currScore;

		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];
		currScore = 0;

		if (scores[activePlayer] >= 100) {
			playing = false;
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add("player--winner");
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove("player--active");
		} else {
			setPlayerValues();
		}
	} else
		alert(
			`Player ${
				activePlayer + 1
			} has won this set, restart the game to continue`
		);
});

btnNew.addEventListener("click", init);
