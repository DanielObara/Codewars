

function solve(arr) {
	const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"]

	return arr.map(palavra => {
		let count = 0;
		palavra.split("").map((letra, idx) => {

			if (letra.toUpperCase() === letras[idx]) {
				count++;
			}
		})
		return count
	})
};
const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

console.log(solve(["abode", "ABc", "xyzD"]));
console.log(solve(["abide", "ABc", "xyz"]))
console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]))
console.log(solve(["encode", "abc", "xyzD", "ABmD"]))