const inputsArray = process.argv.slice(2);

if (inputsArray.length < 2) {
	console.log("Provide a word and a shift number!");
	return;
}

console.log("inputsArray[0]: ", inputsArray[0]);
console.log("inputsArray[1]: ", inputsArray[1]);

const word = inputsArray[0].toString();
const shiftNum = inputsArray[1];

let newWord = "";

for (let i = 0; i < word.length; i++) {
	const letter = word.charAt(i);
	const ascii = letter.codePointAt(0);
	const newLetter = String.fromCharCode(ascii + shiftNum);
	newWord += newLetter;
}

console.log(newWord.toString());
