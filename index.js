

//*                   1	 2  5  7  8*/
const arrayExample = [5, 2, 8, 1, 7];


// Algoritimo Selection Sort
// Ordenação por seleção
function selectionSort(array) {
	const tamanhoDoArray = array.length;

	//4 < 5
	for (let i = 0; i < tamanhoDoArray; i++) {
		console.log("O numero atual é: ", array[i]);

		//Encontrar o INDICE do menor elemento
		//3
		let indiceMenor = i;
		// 4									5 < 5      
		for (let j = i + 1; j < tamanhoDoArray; j++) {

			//      7          8
			if (array[j] < array[indiceMenor]) {

				// indiceMenor era 3 passa a ser 4
				//4
				indiceMenor = j;
			}
		}

		//4 é diferente de 3
		if (indiceMenor !== i) {
			// 8        
			const temp = array[i]

			//O que era 8 recebe 7
			array[i] = array[indiceMenor];

			//O que era 7 passa a ser 8
			array[indiceMenor] = temp;
		}
	}

	return array;
}

console.log(selectionSort(arrayExample))