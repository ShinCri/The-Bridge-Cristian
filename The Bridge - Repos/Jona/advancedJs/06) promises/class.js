// *** THEN/CATCH ***
// fetch('https://restcountries.com/v3.1/all')
// fetch('https://wrongRequestToFakeApi.com/')
//   .then(res => res.json())
//   .then(formattedResponse => console.log('formattedResponse', formattedResponse))
//   .catch(err => console.error('ERROR at catch block!', err));


// *** ASYNC/AWAIT with TRY/CATCH ***
// async function getCountries() {
//   try {
//     // const response = await fetch('https://restcountries.com/v3.1/all');
//     const response = await fetch('https://wrongRequestToFakeApi.com/');
//     const data = await response.json();
//     console.log('async/await', data);
//   } catch(err) {
//     // console.error('ERROR!', err);
//     // console.error('JSON.stringify(ERROR!)', JSON.stringify(err));
//     const { cause, } = err;
//     const msg = `ERROR: Request to ${cause.hostname} response with code ${cause.code}`;
//     const myError = new Error(msg);
//     throw myError;
//   }
// }

// async function runProgram() {
//   try {
//     await getCountries();
//   } catch(myError) {
//     console.error('myError', myError.message);
//   }
// }

// runProgram();


// *** PROMISE.RACE ***
// async function getFastCountryByCapital(capitalNames) {
//   const responsesAsPromises = [];
//   for (let i = 0; i < capitalNames.length; i++) {
//     const capitalName = capitalNames[i];
//     const url = `https://restcountries.com/v3.1/capital/${capitalName}`;
//     const responseAsPromise = fetch(url);
//     responsesAsPromises.push(responseAsPromise);
//   }

//   const fastUnformatedCountry = await Promise.race(responsesAsPromises);
//   const country = await fastUnformatedCountry.json();
//   console.log(country[0].name.common);
// }

// getFastCountryByCapital(['Madrid', 'London', 'Rome', 'Lisbon', 'Paris',]);


// *** PROMISE.ALL ***
// async function getAllCountriesByCapital(capitalNames) {
//   const initialTime = new Date().getTime();
//   const responsesAsPromises = [];
//   for (let i = 0; i < capitalNames.length; i++) {
//     const capitalName = capitalNames[i];
//     const url = `https://restcountries.com/v3.1/capital/${capitalName}`;
//     const responseAsPromise = fetch(url);
//     responsesAsPromises.push(responseAsPromise);
//   }

//   const unformatedCountries = await Promise.all(responsesAsPromises);
//   for (let i = 0; i < unformatedCountries.length; i++) {
//     const unformatedCountry = unformatedCountries[i];
//     const country = await unformatedCountry.json();
//     const countryName = country[0].name.common;
//     console.log(countryName);
//     const timeWhenLogTheCurrentCountry = new Date().getTime();
//     console.log(`Milliseconds spent to obtain ${countryName} are ${timeWhenLogTheCurrentCountry - initialTime}`);
//   }
// }

// getAllCountriesByCapital(['Madrid', 'London', 'Rome', 'Lisbon', 'Paris',]);

// async function getWrongAllCountriesByCapital(capitalNames) {
//   const initialTime = new Date().getTime();
//   for (let i = 0; i < capitalNames.length; i++) {
//     const capitalName = capitalNames[i];
//     const url = `https://restcountries.com/v3.1/capital/${capitalName}`;
//     const responseAsPromise = fetch(url);
//     const unformatedCountry = await responseAsPromise;
//     const country = await unformatedCountry.json();
//     const countryName = country[0].name.common;
//     console.log(countryName);
//     const timeWhenLogTheCurrentCountry = new Date().getTime();
//     console.log(`Milliseconds spent to obtain ${countryName} are ${timeWhenLogTheCurrentCountry - initialTime}`);
//   }
// }

// getWrongAllCountriesByCapital(['Madrid', 'London', 'Rome', 'Lisbon', 'Paris',]);
