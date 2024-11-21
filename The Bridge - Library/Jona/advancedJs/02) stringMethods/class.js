const myString = 'Hello world';

// *** LENGTH ***
// const response = myString.length;
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // 11


// *** AT / CHAR AT ***
// const response = myString.at(6);
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // w

// const response = myString.at(-3);
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // r


// *** ENDS WITH ***
// const response = myString.endsWith('orld');
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // true


// *** INCLUDES ***
// const response = myString.includes('lo wo');
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // true


// *** INDEX OF ***
// const response = myString.indexOf('p');
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // -1


// *** LAST INDEX OF ***
// const response = myString.lastIndexOf('e');
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // 1


// *** MATCH ***
// // https://aukera.es/blog/imagenes/cheat-sheet-expresiones-regulares-aukera-ga-gtm.pdf

// const myRegExp = /^[A-Z][a-z]+\s[a-z]+d$/;
// const response = myString.match(myRegExp);
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // [ 'Hello world', index: 0, input: 'Hello world', groups: undefined ]

// const myRegExp = /\d{3}/g;
// const response = '123456789'.match(myRegExp);
// console.log('myString', myString); // '123456789'
// console.log('response', response); // [ '123', '456', '789' ]


// *** REPEAT ***
// const response = myString.repeat(2);
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // 'Hello worldHello world'


// *** REPLACE ***
// const response = myString.replace('Hello', 'Bye');
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // 'Bye world'


// *** REPLACE ALL ***
// const response = '1-2-3-4=10'.replaceAll('-', '+');
// console.log('myString', myString); // '1-2-3-4=10'
// console.log('response', response); // '1+2+3+4=10'


// *** SLICE / SUBSTRING ***
// https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring#:~:text=slice()%20extracts%20parts%20of,the%20specified%20number%20of%20characters.

// const response = myString.slice(1, 3);
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // el

// const response = myString.substring(1, 3);
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // el

// const response = myString.substr(1, 3);
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // ell


// *** SPLIT ***
// const response = myString.split(' ');
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // ['Hello', 'world']

// const response = myString.split('');
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// const response = myString.split();
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // [ 'Hello world' ]


// *** STARTS WITH ***
// const response = myString.startsWith('Hell');
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // true


// *** TO LOWER CASE ***
// const response = myString.toLowerCase();
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // 'hello world'


// *** TO UPPER CASE ***
// const response = myString.toUpperCase();
// console.log('myString', myString); // 'Hello world'
// console.log('response', response); // 'HELLO WORLD'


// *** TRIM ***
// const stringToTrim = '  Hello world  ';
// const response = stringToTrim.trim();
// console.log('myString', `|${stringToTrim}|`); // '|  Hello world  |'
// console.log('response', `|${response}|`); // '|Hello world|'


// *** TRIM END ***
// const stringToTrim = '  Hello world  ';
// const response = stringToTrim.trimEnd();
// console.log('myString', `|${stringToTrim}|`); // '|  Hello world  |'
// console.log('response', `|${response}|`); // '|  Hello world|'


// *** TRIM START ***
// const stringToTrim = '  Hello world  ';
// const response = stringToTrim.trimStart();
// console.log('myString', `|${stringToTrim}|`); // '|  Hello world  |'
// console.log('response', `|${response}|`); // '|Hello world  |'


// *** JSON.stringify / JSON.parse ***
// const myObject = { name: 'Jona', gender: 'male', job: 'Lead Instructor', format: 'Part Time',};
// const myObjectAsString = JSON.stringify(myObject);
// const myParsedObject = JSON.parse(myObjectAsString);
// console.log(`Text ${myObject}`);
// console.log(typeof myObject, myObject);
// console.log(typeof myObjectAsString, myObjectAsString);
// console.log(typeof myParsedObject, myParsedObject);
