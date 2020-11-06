const languages = 
  {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };


function greet(language) {
	const restult =
	languages[language] ? languages[language] : "Welcome";
	
  return restult;
}

const greet2 = (language) => languages[language] || languages["english"];

const sports = {
  'karate': 'Karateca',
  'judo': 'Judoca',
  'boxe': 'Boxeador',
  'ciclismo': 'Ciclista',
  'natacao': 'Nadador',
  'corrida': 'Corredor'
}

//Primeiro resultado 
const restult = sport => sports[sport] ? sports[sport] : "Atleta";

//Seguno resultado
const restult2 = sport => sports[sport] || "Atleta";

console.log("greet -> greet", restult("karate"));
console.log("greet -> greet", restult("kardddate"));
console.log("greet -> greet", restult2("ciclismo"));
console.log("greet -> greet", restult2("asdads"));
