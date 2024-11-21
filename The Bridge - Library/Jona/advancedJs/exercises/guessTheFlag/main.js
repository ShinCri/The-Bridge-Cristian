
function getRandomNumber({min, max}) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

async function getCountry() {
  const countriesResponse = await fetch('https://restcountries.com/v3.1/independent?status=true');
  const countries = await countriesResponse.json();
  const randomIndex = getRandomNumber({min: 0, max: countries.length});
  return countries[randomIndex];
}

function printFlag({ root, url }) {
  const img = document.createElement('img');
  // img.setAttribute('src', url);
  img.src = url;
  img.classList.add('flag');

  root.appendChild(img);
}

function keydownHandler({event, countryName}) {
  if (event.key === 'Enter') {
    const userGuess = event.target.value;
    userGuess.toLowerCase().trim() === countryName.toLowerCase().trim() ? alert('Ganaste!') : alert('Perdiste perdedor, no sirves de nada!');
  }
}

function createInput({ root, country }) {
  const input = document.createElement('input');
  input.type = 'text';
  const countryName = country.name.common;
  // input.addEventListener('keydown', (event) => keydownHandler({ event, countryName }));
  input.onkeydown = (event) => keydownHandler({ event, countryName });
  root.appendChild(input);
}

function createHintButton({ root, country }) {
  const { capital, languages } = country;
  const capitalAsString = capital.join(', ');
  const languagesAsString = Object.values(languages).join(', ');
  const hints = [
    `Sus capitales son: ${capitalAsString}`,
    `Sus idiomas oficiales son ${languagesAsString}`,
  ];
  const button = document.createElement('button');
  button.innerText = 'Give me a hint';
  button.onclick = () => {
    if (!hints.length) {
      return;
    }

    const deletedHint = hints.shift();
    const hintContainer = document.createElement('div');
    hintContainer.classList.add('hintContainer');
    hintContainer.innerText += deletedHint;
    root.appendChild(hintContainer);
    // hints.splice(0, 1);
  };
  root.appendChild(button);
}

async function initPage() {
  const root = document.getElementById('root');
  const country = await getCountry();
  const { svg } = country.flags; // ES6
  // const svg = country.flags.svg;
  printFlag({ root, url: svg });
  createInput({ root, country });
  createHintButton({ root, country });
}

initPage();
