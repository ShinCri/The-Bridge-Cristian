
const german_endpoint = "https://uselessfacts.jsph.pl/api/v2/facts/today?language=de";
const english_endpoint = "https://uselessfacts.jsph.pl/api/v2/facts/today?language=en";

async function translatedgetwords() {

  const language = document.getElementById("language").value;

  console.log(language);

let response="";
let resultString="";
if (language==="English"){
   response = await fetch(english_endpoint);
   resultString = await response.json();
}else{
   response = await fetch(german_endpoint);
   resultString = await response.json();
}



const resultElement = document.getElementById("resultElement");

resultElement.innerHTML=resultString.text;
}