const wordsArray = process.argv.slice(2);

if (wordsArray.length < 1) {
	console.log("Provide at least one word");
	return;
}

const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;
const vowelRegex = /[aeiou]/i;

let output = [];

wordsArray.forEach((elem) => {
	const wordSplitted = elem.split("");
	const firstChar = wordSplitted[0];
	const secondChar = wordSplitted[1];

	if (consonantRegex.test(firstChar) && vowelRegex.test(secondChar)) {
		const reservedFirstChar = firstChar;
		wordSplitted.splice(0, 1);
		wordSplitted.push(reservedFirstChar);
		output.push(wordSplitted.join("").concat("ay"));
	}

	if (consonantRegex.test(firstChar) && consonantRegex.test(secondChar)) {
		const reservedFirstChar = firstChar;
		const reservedSecondChar = secondChar;
		wordSplitted.splice(0, 2);
		wordSplitted.push(reservedFirstChar, reservedSecondChar);
		output.push(wordSplitted.join("").concat("ay"));
	}

	if (vowelRegex.test(firstChar)) {
		output.push(elem.concat("way"));
	}
});

console.log(output.join(" "));
