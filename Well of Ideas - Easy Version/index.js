function well(x) {
	var count = 0

	x.forEach(element => {
		element === 'good' ? count++ : count
	});
	if (count >= 3) return 'I smell a series!'

	if (count >= 1 || count >= 2) return 'Publish!'


	return 'Fail!'
}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));