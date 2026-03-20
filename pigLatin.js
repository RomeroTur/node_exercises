/*

process.argv - An array taking [path to the Node.js], [path to .js File], [elem_1], [elem_2],.. [elem_n].
To get needed inputs (data to work with), .slice() method is being used. 1st and 2nd elements are being removed from process.argv Array.

*/

const wordsArray = process.argv.slice(2);

/*

If no words were provided (elements [2], [3],.. [n] are missing), then abort script.

*/

if (wordsArray.length < 1) {
	console.log("Provide at least one word");
	return;
}

/*

To distinguish between consonants and vowel for further purpose, regexes are being defined.

*/

const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;
const vowelRegex = /[aeiou]/i;

let output = [];

// code to walk through every element in wordsArray

wordsArray.forEach((elem) => {
	// transform element into array
	const wordSplitted = elem.split("");

	// get first char
	const firstChar = wordSplitted[0];

	// get second char
	const secondChar = wordSplitted[1];

	// test if first char is a consonant and second a vowel
	if (consonantRegex.test(firstChar) && vowelRegex.test(secondChar)) {
		//make copy of first char
		const reservedFirstChar = firstChar;

		// delete first element in word array
		wordSplitted.splice(0, 1);

		// insert copy of first char into word array
		wordSplitted.push(reservedFirstChar);

		// make a string out of word array, add "ay" at the end of string, and push into output array
		output.push(wordSplitted.join("").concat("ay"));
	}

	// test if first char is a consonant, as well as second

	if (consonantRegex.test(firstChar) && consonantRegex.test(secondChar)) {
		// make copy of first char
		const reservedFirstChar = firstChar;

		// make copy of second char
		const reservedSecondChar = secondChar;

		// delete first two elements in word array
		wordSplitted.splice(0, 2);

		// push reserved chars into word array
		wordSplitted.push(reservedFirstChar, reservedSecondChar);

		// make string out of modified word array, add "ay" at the end of string, push string into output array
		output.push(wordSplitted.join("").concat("ay"));
	}

	// test if first char is a vowel
	if (vowelRegex.test(firstChar)) {
		// add way at the end of string, push into output array
		output.push(elem.concat("way"));
	}
});

// make string out of output array and show string
console.log(output.join(" "));
