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

// const nested = [2, 4, [3, 5]];
// const [even, , odd] = nested;
// console.log(even, odd);

// let prototype = document.createElement("input");
// pr
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

let arr = [4, 5, 6];
let newArr = [1, 2, 3, ...arr];

// console.log(newArr, `Number ${newArr}`);
const weekdays = ["mon"];
const bonuses = ["10%", "15%", "30%"];

const restaurant = {
	name: "Mama Nkechi Resturant",
	location: "Abakpa Nike, Enugu",
	categories: ["Italian", "Nigerian Local", "Chinese Food"],
	mainMenu: ["Jollof Rice", "Rice and Stew", "Bean and Plantain", "Swallow"],
	sideDishes: ["Indomie and Egg", "Tea and Bread", "IceCream", "Fruit Salad"],
	openingHours: {
		mon: {
			open: "08:00",
			close: "18:00",
		},
		tue: {
			open: "08:00",
			close: "18:00",
		},
		wed: {
			open: "08:00",
			close: "18:00",
		},
		thu: {
			open: "08:00",
			close: "16:30",
		},
		fri: {
			open: "08:00",
			close: "15:00",
		},
		sat: {
			open: "10:00",
			close: "17:00",
		},
	},

	// ES6 enhanced object literals
	bonuses,
	order({ mainMenu, sideDishes, address, time }) {
		// console.log(
		// 	`Order Received! ${this.mainMenu[mainMenu]} and ${this.sideDishes[sideDishes]} will be delivered to ${address} by ${time}.`
		// );
	},
};

restaurant.order({
	address: "15 louis Ede crescent, Abakpa Nike Enugu",
	time: "08:30",
	mainMenu: 3,
	sideDishes: 2,
});

// Copied Array
const mainMenuCopy = [...restaurant.mainMenu];

// Joint Array
const [sat, ...otherDays] = [restaurant.openingHours];

// console.log(sat, otherDays);

// Iterables are arrays, strings, maps, or sets but not objects
let Tochukwu = {
	firstName: "Mark",
	lastName: "Ndubuisi",
	birthYear: 2004,
	job: "Student",
	placeOfWork: "University of Nigeria, Nsukka.",
	biography: function () {
		console.log(
			`His name is ${this.firstName} ${this.lastName}. He was born in the year ${this.birthYear}. He is a ${this.job} in the ${this.placeOfWork}`
		);
	},
};
// Tochukwu.biography();

// SPREAD is used on the right side of the '=', while REST is used on the left side of the '='

// console.log(undefined || 0 || "" || "Hello" || 23 || null);
// What will be printed to the console?

// console.log(undefined && 0 && "" && "Hello" && 23 && null);
// What will be printed to the console?

// let userName = prompt("What is Your Name? ") || "User";

/*const rest1 = {
	name: "Capri",
	numGuests: 20,
};

const rest2 = {
	name: "La Piazza",
	owner: "Giovanni Rossi",
};

// OR assignment operator
// rest2.numGuest = rest2.numGuests || 10;
// rest1.numGuest = rest1.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
// console.log(rest1.numGuests, rest1.numGuests);

// Logical Nullish assignment operator
rest1.numGuests &&= 10;
rest2.numGuests &&= 10;
// console.log(rest1.numGuests, rest1.numGuests);

// the OR operator will return the first truthy value or the last value if all of them are falsy, while,
// the AND operator will return the first falsy value or the last value if all of them are truthy.
// Nullish coalescing operator(NCO): This works on non-nullish values like (0 or '')
// Nullish value are 'null' and 'undefined' (NOT 0 or '')*/

/*Challenge

const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

// 1.
const [team1, team2] = game.players; // ✔
// 2.
const [[gk1, ...fieldPlayers1], [gk2, ...fieldPlayers2]] = game.players; // ✔
// 3.
const allPlayers = [...team1, ...team2]; // ✔
// 4.
const team1Final = [...team1, "Thiago", "Coutinho", "Perisic"]; // ✔
// 5.
const { team1: team1Odd, x: drawOdd, team2: team2Odd } = game.odds; // ✔
// 6.
const printGoals = function (...players) {
	console.log(`${players.length} goals were scored by ${players}`);
};
printGoals(...game.scored); // ✔
// 7.
team1Odd < team2Odd && console.log("Team 1 is more likely to win");
team1Odd > team2Odd && console.log("Team 2 is more likely to win");
// console.log((game.odds ||= 10));

// console.log(team1Odd, drawOdd, team2Odd);

// console.log(team1);
// console.log(team2);
// console.log(gk1, fieldPlayers1);
// console.log(gk2, fieldPlayers2);
// console.log(allPlayers);
// console.log(team1Final);
*/

const menu = [...restaurant.mainMenu, ...restaurant.sideDishes];

for (const [i, el] of menu.entries()) console.log(`${i + 1}. ${el}`);
