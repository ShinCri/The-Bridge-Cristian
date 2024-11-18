//Convertidor de Millas a Km

const inputValue = 10;
const milesToKm = false;
let result = 0;

if (milesToKm === true) {
  result = Number((inputValue * 1.60934).toFixed(2));
} else {
  result = Number((inputValue / 1.60934).toFixed(2));
}

let resultString = inputValue + " millas son " + result + " kilometros.";

console.log(resultString);

const resultElement = document.getElementById("resultElement");

resultElement.innerHTML=resultString;

