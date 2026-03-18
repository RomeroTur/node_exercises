const takeArray = process.argv.slice(2);

if (takeArray.length < 1) {
	console.log("Provide a choice (rock, paper, or scissors)");
	return;
}

const betArray = ["rock", "paper", "scissors"];

const killsArray = [
	["rock", "scissors"],
	["scissors", "paper"],
	["paper", "rock"],
];

function computerBet() {
	const randNum = Math.floor(Math.random() * 3);
	return betArray[randNum];
}

const userChoice = takeArray[0].toLowerCase();
const computerChoice = computerBet();

const index = killsArray.findIndex((item) => {
	return item[0] === userChoice;
});

let result = "";

if (index != -1) {
	if (computerChoice === killsArray[index][1]) {
		result = `You chose ${userChoice}. Computer chose ${computerChoice}. You win!`;
	} else if (computerChoice === userChoice) {
		result = `You chose ${userChoice}. Computer chose ${computerChoice}. Draw!`;
	} else {
		result = `You chose ${userChoice}. Computer chose ${computerChoice}. You lose!`;
	}
} else {
	console.log(`${userChoice} not found, check spelling`);
}

console.log(result);
