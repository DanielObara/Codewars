// // In this kata we want to convert a string into an integer.The strings simply represent the numbers in words.

// // 	Examples:

// // "one" => 1
// // "twenty" => 20
// // "two hundred forty-six" => 246
// // "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// // Additional Notes:

// // The minimum number is "zero"(inclusively)
// // The maximum number, which must be supported is 1 million(inclusively)
// // The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// // All tested numbers are valid, you don't need to validate them
// function wordsToNumbers(input) {
// 	// Define number words and their corresponding numeric values
// 	const wordsToNum = {
// 		zero: 0,
// 		one: 1,
// 		two: 2,
// 		three: 3,
// 		four: 4,
// 		five: 5,
// 		six: 6,
// 		seven: 7,
// 		eight: 8,
// 		nine: 9,
// 		ten: 10,
// 		eleven: 11,
// 		twelve: 12,
// 		thirteen: 13,
// 		fourteen: 14,
// 		fifteen: 15,
// 		sixteen: 16,
// 		seventeen: 17,
// 		eighteen: 18,
// 		nineteen: 19,
// 		twenty: 20,
// 		thirty: 30,
// 		forty: 40,
// 		fifty: 50,
// 		sixty: 60,
// 		seventy: 70,
// 		eighty: 80,
// 		ninety: 90,
// 		hundred: 100,
// 		thousand: 1000,
// 		million: 1000000
// 	};

// 	// Split the input string into an array of words
// 	const words = input.toLowerCase().match(/[a-z]+/g);

// 	// Initialize the output variable and the temporary variables
// 	let output = 0;
// 	let temp = 0;
// 	let prev = 0;

// 	// Loop through the array of words
// 	words.forEach(word => {
// 		const value = wordsToNum[word];
// 		if (value != null) {
// 			// If the word is a number word, add it to the temporary variable
// 			temp += value;
// 			prev = value;
// 		} else if (word === "hundred") {
// 			// If the word is "hundred", multiply the temporary variable by 100
// 			temp *= 100;
// 		} else {
// 			// Otherwise, add the temporary variable to the output variable and reset it
// 			output += temp;
// 			temp = 0;
// 		}
// 	});

// 	// Add the last temporary variable to the output variable
// 	output += temp;

// 	// Return the output variable
// 	return output;
// }

// console.log(wordsToNumbers("one")); // 1
// console.log(wordsToNumbers("twenty")); // 20
// console.log(wordsToNumbers("two hundred forty-six")); // 246
// console.log(wordsToNumbers("two hundred")); // 200
// console.log(wordsToNumbers("seven hundred eighty-three thousand nine hundred and nineteen")); // 783919
// console.log(wordsToNumbers("one million")); // 1000000
// console.log(wordsToNumbers("zero")); // 0


function parseInt(str) {
	const words = str.split(/\s+/);
	const lookup = {
		'zero': 0,
		'one': 1,
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5,
		'six': 6,
		'seven': 7,
		'eight': 8,
		'nine': 9,
		'ten': 10,
		'eleven': 11,
		'twelve': 12,
		'thirteen': 13,
		'fourteen': 14,
		'fifteen': 15,
		'sixteen': 16,
		'seventeen': 17,
		'eighteen': 18,
		'nineteen': 19,
		'twenty': 20,
		'thirty': 30,
		'forty': 40,
		'fifty': 50,
		'sixty': 60,
		'seventy': 70,
		'eighty': 80,
		'ninety': 90,
		'hundred': 100,
		'thousand': 1000,
		'million': 1000000,
	};

	let result = 0;
	let temp = 0;
	let hasAnd = false;

	for (let i = 0; i < words.length; i++) {
		const word = words[i];

		if (word === 'and') {
			hasAnd = true;
			continue;
		}

		const value = lookup[word];

		if (value === undefined) {
			throw new Error('Invalid input: ' + word);
		}

		if (value >= 1000) {
			if (result === 0 && temp === 0) {
				result = 1;
			}
			result += temp * value;
			temp = 0;
		} else if (value >= 100) {
			temp *= value;
		} else {
			if (hasAnd) {
				throw new Error('"and" should only be used with values >= 100');
			}
			temp += value;
		}

		hasAnd = false;
	}

	return result + temp;
}

console.log(parseInt("one")); // 1
console.log(parseInt("twenty")); // 20
console.log(parseInt("two hundred forty-six")); // 246
console.log(parseInt("two hundred")); // 200
console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen")); // 783919
console.log(parseInt("one million")); // 1000000
console.log(parseInt("zero")); // 0

