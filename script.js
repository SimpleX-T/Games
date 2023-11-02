"use strict";

/*const cutPieces = function (fruit) {
	return fruit * 3;
};

const fruitProcessor = function (apples, oranges) {
	const applesPieces = cutPieces(apples);
	const orangePieces = cutPieces(oranges);

	const juice = `Juice with ${applesPieces} pieces of apple and ${orangePieces} pieces of orange.`;
	return juice;
};

console.log(fruitProcessor(2, 3));
*/

// const calcAge = function (birthYear) {
// 	return 2028 - birthYear;
// };

// const yearsUntilRetirment = function (birthYear, firstName) {
// 	const age = calcAge(birthYear);
// 	const retirement = 65 - age;

// 	return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirment(1991, "Mark"));

// const calcAverage = (num1, num2, num3) => {
// 	return (num1 + num2 + num3) / 3;
// };

// function checkWinner() {
// 	const dolphinAverage = Math.round(calcAverage(85, 54, 41));
// 	const koalaAverage = Math.round(calcAverage(23, 34, 27));

// 	if (dolphinAverage >= koalaAverage * 2) {
// 		console.log(`Koala Wins 🏆 (${dolphinAverage} : ${koalaAverage}!!)`);
// 	} else if (koalaAverage >= dolphinAverage * 2) {
// 		console.log(`Koala Wins 🏆 (${koalaAverage} : ${dolphinAverage}!!)`);
// 	} else {
// 		console.log("No team wins");
// 	}
// }

// checkWinner();
// const friends = ["Firend1", "firend", "firend3"];
// console.log(friends);

// const calcTip = function (bills) {
// 	return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [
// 	Math.round(calcTip(bills[0])),
// 	Math.round(calcTip(bills[1])),
// 	Math.round(calcTip(bills[2])),
// ];

// console.log(bills, tips);

// const friends = ["Michael", "Steven", "Peter"];

// console.log(
// 	`Jonas has ${friends.length} friends, and the best friend is ${friends[0]}`
// );

// const Tochukwu = {
// 	firstName: "Mark",
// 	lastName: "Ndubuisi",
// 	birthYear: 2004,
// 	job: "Student",
// 	level: 100,
// 	school: "UNN",

// 	calcAge: function () {
// 		return 2023 - this.birthYear;
// 	},
// };
// function getSummary() {
// 	return `His name is ${Tochukwu.firstName} ${
// 		Tochukwu.lastName
// 	}, he was born in the year ${
// 		Tochukwu.birthYear
// 	}, and is ${Tochukwu.calcAge()} old. He is a ${Tochukwu.level} level ${
// 		Tochukwu.job
// 	} at ${Tochukwu.school}`;
// }

// console.log(getSummary());

// const mark = {
// 	firstName: "Mark",
// 	lastName: "Miller",
// 	mass: 78,
// 	height: 1.69,
// 	calcBMI: function () {
// 		return this.mass / this.height ** 2;
// 	},
// };

// const john = {
// 	firstName: "John",
// 	lastName: "Smith",
// 	mass: 92,
// 	height: 1.95,
// 	calcBMI: function () {
// 		return this.mass / this.height ** 2;
// 	},
// };

// console.log(john.calcBMI(), mark.calcBMI());

// console.log(
// 	`${john.calcBMI() > mark.calcBMI() ? "John's" : "Mark's"} BMI(${
// 		john.calcBMI() > mark.calcBMI() ? john.calcBMI() : mark.calcBMI()
// 	}) is greater than ${
// 		john.calcBMI() > mark.calcBMI() ? "Mark's" : "John's"
// 	} BMI(${john.calcBMI() > mark.calcBMI() ? mark.calcBMI() : john.calcBMI()})`
// );

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temp) {
// 	let max = temp[0];
// 	let min = temp[0];

// 	for (let i = 0; i < temp.length; i++) {
// 		if (typeof temp[i] !== "number") continue;

// 		if (temp[i] < min) min = temp[i];
// 		if (temp[i] > max) max = temp[i];
// 	}
// 	console.log(max, min);
// 	return max - min;
// };

// const Amplitude = calcTempAmplitude(temperatures);
// console.log(Amplitude);

// const data1 = [17, 21, 23];

// const printForecast = function (arr) {
// 	let string = "";

// 	for (let i = 0; i < arr.length; i++) {
// 		string += `${arr[i]}℃ in ${i + 1} days ...`;
// 	}
// 	console.log("... " + string);
// };
// printForecast(data1);

const openModalBtns = document.querySelectorAll(".show-modal"),
	modalWindow = document.querySelector(".modal"),
	closeBtn = document.querySelector(".closeBtn"),
	overlay = document.querySelector(".overlay");

const closeModal = function () {
	modalWindow.classList.add("hidden");
	overlay.classList.add("hidden");
};

openModalBtns.forEach((button) => {
	button.addEventListener("click", () => {
		modalWindow.classList.remove("hidden");
		overlay.classList.remove("hidden");
	});
});

closeBtn.addEventListener("click", () => {
	closeModal();
});

overlay.addEventListener("click", () => {
	closeModal();
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") closeModal();
});
