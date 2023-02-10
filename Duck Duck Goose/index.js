//The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

class Player {
	constructor(name) {
		this.name = name;
	}
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
	while (players.length < goose) {
		goose = goose - players.length
	}
	return players[goose - 1].name
}

console.log(duckDuckGoose(players, 1));