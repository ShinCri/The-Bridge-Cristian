let clueIndex = 0;

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/independent?status=true');
  const countries = await response.json();
  // console.log('countries', countries);
  // console.log('countries', JSON.stringify(data));
  return countries;
}

function printElements(randomCountry, countries) {
  console.log(randomCountry.translations.spa.common);
  printFlag(randomCountry.flags.png);
  const clues = generateClues(randomCountry);
  createInput(randomCountry.translations.spa, countries);
  createClueButton(clues);
}

function reset(countries) {
  const rootElement = document.getElementById('root');
  const children = rootElement.children;
  const length = children.length;

  for (let childrenIndex = 0; childrenIndex < length; childrenIndex++) {
    const child = children[0];
    rootElement.removeChild(child);
  }

  const randomCountry = getRandomCountry(countries);
  printElements(randomCountry, countries);
}

function createNextButton(countries) {
  const rootElement = document.getElementById('root');
  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Siguiente';
  button.addEventListener('click', () => reset(countries));
  rootElement.appendChild(button);
}

function removeAccents(name) {
  const splittedName = name.split('');
  const accents = 'ÈÉÊËÛÙÏÎÀÂÔèéêëûùïîàâôÇçÃãÕõçÇáéíóúýÁÉÍÓÚÝàèìòùÀÈÌÒÙãõñäëïöüÿÄËÏÖÜÃÕÑâêîôûÂÊÎÔÛ'.split();
  const withoutAccents = 'EEEEUUIIAAOeeeeuuiiaaoCcAaOocCaeiouyAEIOUYaeiouAEIOUaonaeiouyAEIOUAONaeiouAEIOU'.split();

  const mappedSplittedName = splittedName.map((letter) => {
    const accentsIndex = accents.indexOf(letter);
    if (accentsIndex !== -1) {
      return withoutAccents[accentsIndex];
    }

    return letter;
  });

  return mappedSplittedName.join('');
}

function checkResponse(e, countryName, countries) {
  if (e.code === 'Enter') {
    const value = removeAccents(e.target.value.toLowerCase());
    const commonName = removeAccents(countryName.common.toLowerCase());
    const officialName = removeAccents(countryName.official.toLowerCase());
    if (value === commonName || value === officialName) {
      console.log(value);
      console.log(commonName);
      console.log(officialName);
      // createNextButton(countries);
    }
  }
}

function createInput(countryName, countries) {
  const rootElement = document.getElementById('root');
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.classList.add('input');
  input.addEventListener('keyup', (e) => checkResponse(e, countryName, countries));
  rootElement.appendChild(input);
}

function printFlag(flagSrc) {
  const rootElement = document.getElementById('root');
  const flag = document.createElement('img');
  flag.setAttribute('src', flagSrc);
  flag.classList.add('flag');
  rootElement.appendChild(flag);
}

function revealClue(clues) {
  if (clueIndex >= clues.length) {
    return;
  }

  const rootElement = document.getElementById('root');
  const p = document.createElement('p');
  p.classList.add('p');
  p.innerText = `${clues[clueIndex].text} ${clues[clueIndex].value}` ;
  clueIndex++;
  rootElement.appendChild(p);
}

function createClueButton(clues) {
  const rootElement = document.getElementById('root');
  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Pista';
  button.addEventListener('click', () => revealClue(clues));
  rootElement.appendChild(button);
}

function generateClues(randomCountry) {
  const clues = [];
  const capitals = Object.values(randomCountry.capital);
  const languages = Object.values(randomCountry.languages);
  const continents = Object.values(randomCountry.continents);

  clues.push({
    text: 'La capital es:',
    value: capitals.join(', '),
  });

  clues.push({
    text: 'Se habla en:',
    value: languages.join(', '),
  });

  clues.push({
    text: 'Pertenece a los siguientes continentes:',
    value: continents.join(', '),
  });

  return clues;
}

function getRandomCountry(countries) {
  const min = 0;
  const max = countries.length;
  const randomNumber = getRandomNumber(min, max);
  const randomCountry = countries[randomNumber];

  console.log('randomCountry', randomCountry);
  return randomCountry;
}

async function initApp() {
  let countries;
  try {
    countries = await getCountries();
  } catch(err) {
    console.error('Error obteniendo los paises: ', err);
  }

  const randomCountry = getRandomCountry(countries);
  printElements(randomCountry, countries);
}

initApp();
