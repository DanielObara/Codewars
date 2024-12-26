const fs = require('fs');
const path = require('path');
const readline = require('readline');

const answersPath = path.resolve(__dirname, 'answers');
console.log("🚀 ~ file: index.js:5 ~ answersPath:", answersPath)

const readFiles = () => {
	fs.readdir(answersPath, (err, files) => {
		console.log("🚀 ~ file: index.js:9 ~ fs.readdir ~ answersPath:", answersPath)
		// upload files one by one
		files.forEach(filename => {
			// console.log("🚀 ~ file: index.js:11 ~ fs.readdir ~ filename:", filename)
			const file = `${answersPath}/${filename}`;

			fs.readFile(file, 'utf8', (err, data) => {
				let correctAnswers = 0;
				if (err) {
					console.error(err)
					return
				}

				const rl = readline.createInterface({
					input: fs.createReadStream(file),
					crlfDelay: Infinity,
				});

				rl.on('line', (line) => {
					if (line === 'O') {
						correctAnswers++;
					}
				});
				const resposta = countLines(fs.createReadStream(file))
				console.log("🚀 ~ file: index.js:34 ~ fs.readFile ~ resposta:", resposta)
			})
			// if (fs.existsSync(file)) {
			// 	const fileStream = fs.createReadStream(file);
			// 	console.log("🚀 ~ file: index.js:29 ~ fs.readdir ~ fileStream", fileStream)


			// }
		});
	});
}


readFiles();