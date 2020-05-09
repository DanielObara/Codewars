String.prototype.toAlternatingCase = function () {
  let resultado = "";
  Array.from(this).map((letra) => {
    letra.charCodeAt() <= 90
      ? (resultado += letra.toLowerCase())
      : (resultado += letra.toUpperCase());
  });

  return resultado;
};

let str1 = "hello world";
let str2 = "HELLO WORLD";
let str3 = "hello WORLD";
let str4 = "HeLLo WoRLD";
let str5 = "12345";
let str6 = "1a2b3c4d5e";
let str7 = "String.prototype.toAlternatingCase";
let str8 = "Hello World";

console.log("Result str1", str1.toAlternatingCase());
console.log("Result str2", str2.toAlternatingCase());
console.log("Result str3", str3.toAlternatingCase());
console.log("Result str4", str4.toAlternatingCase());
console.log("Result str5", str5.toAlternatingCase());
console.log("Result str6", str6.toAlternatingCase());
console.log("Result str7", str1.toAlternatingCase());
console.log("Result str8", str8.toAlternatingCase());
