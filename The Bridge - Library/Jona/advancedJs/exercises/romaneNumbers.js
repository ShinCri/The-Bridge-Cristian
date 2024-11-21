function romanParseator({numberAsString}) {
  const errorMessage = 'El número introducido no es válido';
  // const romanLetters = ['I', 'V', 'X', 'L', 'C'];
  const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  // const romanLimit = 'C';

  const numberAsInteger = parseInt(numberAsString);
  const isRomanString = isNaN(numberAsInteger);

  const splittedNumber = numberAsString.split('');

  let output = '';

  if (isRomanString) { // roman to decimal number
    if (splittedNumber.filter(letter => !romanLetters.includes(letter)).length !== 0) {
      return errorMessage;
    }

    // if (numberAsString.length > 1 && numberAsString.startsWith(romanLimit)) {
    //   return errorMessage;
    // }

    const decimalNumbers = [];

    for (let i = 0; i < splittedNumber.length; i++) { // [X, X, X, I, X]
      const char = splittedNumber[i];
      const charIndexAtRomanLetters = romanLetters.indexOf(char);

      const rest = charIndexAtRomanLetters % 2;
      const numberOfZeros = (charIndexAtRomanLetters - rest) / 2;

      const arrayOfZeros = new Array(numberOfZeros).fill(0);
      // const arrayOfZeros = [];
      // for (let i = 0; i < numberOfZeros; i++) {
      //   arrayOfZeros.push(0);
      // }

      const initialNumber = rest === 0 ? 1 : 5;
      const decimalNumberAsArray = [initialNumber, ...arrayOfZeros];
      const decimalNumberAsString = decimalNumberAsArray.join('');
      const decimalNumber = parseInt(decimalNumberAsString);

      const nextChar = splittedNumber[i + 1];
      const nextCharIndexAtRomanLetters = romanLetters.indexOf(nextChar);
      const isLowerThanNext = charIndexAtRomanLetters < nextCharIndexAtRomanLetters;
      const decimalNumberToPush = isLowerThanNext ? decimalNumber * -1 : decimalNumber;
      decimalNumbers.push(decimalNumberToPush);
    }

    output = decimalNumbers.reduce((acc, next) => acc + next);

  } else { // decimal to roman number
    // if (numberAsString.length > 2 && numberAsString !== '100') {
    //   return errorMessage;
    // }

    for (let i = 0; i < splittedNumber.length; i++) { // [3, 1, 6]
      const digit = splittedNumber[i]; // 1

      const position = splittedNumber.length - i;

      // position === 1 (unidades), position === 2 (decenas), position === 3 (centenas)
      // [5] === [5].length - i = 0 === 1 - 0 === 1 ===> unidades

      // [5, ?] === [5, ?].length - i = 0 === 2 - 0 === 2 ===> decenas
      // [?, 0] === [?, 0].length - i = 1 === 2 - 1 === 1 ===> unidades

      // [1, ?, ?] === [1, ?, ?].length - i = 0 === 3 - 0 === 3 ===> centenas
      // [?, 0, ?] === [?, 0, ?].length - i = 1 === 3 - 1 === 2 ===> decenas
      // [?, ?, 0] === [?, ?, 0].length - i = 2 === 3 - 2 === 1 ===> unidades

      const firstRomanIndexByPosition = (position - 1) * 2; // ['I', 'V', 'X', 'L', 'C']
      // unidades === (1 - 1) * 2 === firstRomanIndexByPosition => 0 === I
      // decenas === (2 - 1) * 2 === firstRomanIndexByPosition => 2 === X
      // centenas === (3 - 1) * 2 === firstRomanIndexByPosition => 4 === C
      const secondRomanIndexByPosition = firstRomanIndexByPosition + 1;
      // unidades === 0 + 1 === secondRomanIndexByPosition => 1 === V
      // decenas === 2 + 1 === secondRomanIndexByPosition => 3 === L
      // centenas === 4 + 1 === secondRomanIndexByPosition => 5 === no configurado
      const thirdRomanIndexByPosition = firstRomanIndexByPosition + 2;
      // unidades === 0 + 2 === thirdRomanIndexByPosition => 2 === X
      // decenas === 2 + 2 === thirdRomanIndexByPosition => 4 === C
      // centenas === 4 + 2 === thirdRomanIndexByPosition => 6 === no configurado

      // centenas === [C, no configurado, no configurado]
      // decenas === [X, L, C]
      // unidades === [I, V, X]

      const digitAsInt = parseInt(digit);
      if (digitAsInt % 5 && digitAsInt % 5 <= 3) {
        digitAsInt > 5 && (output += romanLetters[secondRomanIndexByPosition]);
        for (let j = 0; j < digitAsInt % 5; j++) {
          output += romanLetters[firstRomanIndexByPosition];
        }
      } else if (digitAsInt % 5 === 4) {
        output += romanLetters[firstRomanIndexByPosition];
        output += romanLetters[digitAsInt < 5 ? secondRomanIndexByPosition : thirdRomanIndexByPosition];
      } else if (digitAsInt === 5) {
        output += romanLetters[secondRomanIndexByPosition];
      }
    }
  }

  return `${ numberAsString } ==> ${ output }`;
}






// console.log(romanParseator({numberAsString: 'I'}));
// console.log(romanParseator({numberAsString: 'II'}));
// console.log(romanParseator({numberAsString: 'III'}));
// console.log(romanParseator({numberAsString: 'IV'}));
// console.log(romanParseator({numberAsString: 'V'}));
// console.log(romanParseator({numberAsString: 'VI'}));
// console.log(romanParseator({numberAsString: 'IX'}));
// console.log(romanParseator({numberAsString: 'X'}));
// console.log(romanParseator({numberAsString: 'XI'}));
// console.log(romanParseator({numberAsString: 'XC'}));
// console.log(romanParseator({numberAsString: 'XCIX'}));
// console.log(romanParseator({numberAsString: 'XXXIX'}));
// console.log(romanParseator({numberAsString: 'C'}));
// console.log(romanParseator({numberAsString: 'CMXCIII'}));
// console.log(romanParseator({numberAsString: 'CMXCIV'}));
// console.log(romanParseator({numberAsString: 'CMXCIX'}));
console.log(romanParseator({numberAsString: 'MMMCMXCIX'}));


// for (let i = 1; i <= 100; i++) {
//   const numberAsString = `${i}`;
//   console.log(romanParseator({numberAsString}));
// }

// console.log(romanParseator({numberAsString: '3845'}));
console.log(romanParseator({numberAsString: '3999'}));
// max 3999 porque el número romano más alto quee existe es el 1000 === M
// MMM === 3000 pero MMMM !== 4000, y no existe letra para el 5000
