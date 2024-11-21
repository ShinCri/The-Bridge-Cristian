 //---------- Arrow functions ----------
 const numbers = [1, 2, 3, 4,];
 console.log('---------- Step 1 ----------');
 function filterCallback(num) {
   return num > 2;
 }
 const filteredNumbers1 = numbers.filter(filterCallback);
 console.log('filteredNumbers1', filteredNumbers1);
 console.log('---------- Step 2 ----------');
 const filteredNumbers2 = numbers.filter(function (num) { return num > 2; });
 console.log('filteredNumbers2', filteredNumbers2);
 console.log('---------- Step 3 ----------');
 const filteredNumbers3 = numbers.filter((num) => { return num > 2; });
 console.log('filteredNumbers3', filteredNumbers3);
 console.log('---------- Step 4 ----------');
 const filteredNumbers4 = numbers.filter((num) => num > 2);
 console.log('filteredNumbers4', filteredNumbers4);
 console.log('---------- Step 5 ----------');
 const filteredNumbers5 = numbers.filter(num => num > 2);
 console.log('filteredNumbers5', filteredNumbers5);


// ---------- Destructuring ----------
// const destructuringNumbers = [1, 2, 3,];

// console.log('---------- Array without destructuring ----------');
// const firstItem = destructuringNumbers[0];
// const thirdItem = destructuringNumbers[2];

// console.log('---------- Array with destructuring ----------');
// const [firstItem, , thirdItem,] = destructuringNumbers;
// console.log('firstItem', firstItem);
// console.log('thirdItem', thirdItem);


// const teacher = { name: 'Jona', gender: 'male', job: 'Lead Instructor', format: 'Part Time',};

// console.log('---------- Object without destructuring ----------');
// const username = teacher.name;

// console.log('---------- Object with destructuring ----------');
// const { name: username, gender, job = 'unemployed', description = 'new description', } = teacher;
// console.log('username', username);
// console.log('gender', gender);
// console.log('job', job);
// console.log('description', description);


// ---------- Spread ----------
// console.log('---------- Spread array ----------');
// const spreadNumbersOne = [1, 2, 3,];
// const spreadNumbersTwo = [4, 5, 6,];
// const spreadNumbersTotal = [...spreadNumbersOne, ...spreadNumbersTwo,];
// console.log('spreadNumbersTotal', spreadNumbersTotal);

// console.log('---------- Spread object ----------');
// const teacherToSpread = {
//   name: 'Jona',
//   age: 32,
//   isAdult: true,
//   description: 'xxxxxxxx',
// };

// const teacherWithSpread = {
//   gender: 'male',
//   ...teacherToSpread,
//   name: 'Pepe',
// };

// console.log('teacherWithSpread', teacherWithSpread);


// ---------- Rest ----------
// console.log('---------- Rest array ----------');
// const numbersToRest = [1, 2, 3,];
// const [firstNumber, ...restArray] = numbersToRest;
// console.log('firstNumber', firstNumber);
// console.log('restArray', restArray);

// console.log('---------- Rest object ----------');
// const teacherToRest = {
//   name: 'Jona',
//   age: 32,
//   isAdult: true,
//   description: 'xxxxxxxx',
// };

// const { isAdult, ...restObject } = teacherToRest;
// console.log('isAdult', isAdult);
// console.log('restObject', restObject);


// ---------- Ternario ----------
// const myAge = 33;
// const adultAge = 18;
// const amIAdult = myAge >= adultAge;

// console.log('---------- Without ternary ----------');
// if (amIAdult) {
//   console.log('Im adult! 1');
// }

// console.log('---------- With ternary and both logs ----------');
// amIAdult ? console.log('Im adult! 2') : console.log('Im a baby! 2');

// console.log('---------- With ternary but one log ----------');
// const message = amIAdult ? 'Im adult! 3' : 'Im a baby! 3';
// console.log(message);


// ---------- Falsy values ----------
// console.log('---------- && ----------');
// undefined && console.log('undefined && log');
// null && console.log('null && log');
// false && console.log('false && log');
// NaN && console.log('NaN && log');
// 0 && console.log('0 && log');
// true && console.log('true && log'); // we can see this log

// console.log('---------- || ----------');
// undefined || console.log('undefined || log'); // we can see this log
// null || console.log('null || log'); // we can see this log
// false || console.log('false || log'); // we can see this log
// NaN || console.log('NaN || log'); // we can see this log
// 0 || console.log('0 || log'); // we can see this log
// true || console.log('true || log');

// console.log('---------- nullish coalescing o ?? ----------');
// undefined ?? console.log('undefined ?? log'); // we can see this log
// null ?? console.log('null ?? log'); // we can see this log
// false ?? console.log('false ?? log');
// NaN ?? console.log('NaN ?? log');
// 0 ?? console.log('0 ?? log');
// true ?? console.log('true ?? log');


// ---------- Optional params ----------
// function add(num1, num2, num3 = 0) {
//   return num1 + num2 + num3;
// }

// console.log('add(1, 2)', add(1, 2));
// console.log('add(1, 2, 0)', add(1, 2, 0));
// console.log('add(1, 2, 3)', add(1, 2, 3));


// ---------- Named params ----------
// function divide({ dividend, divisor, }) {
//   return dividend / divisor;
// }

// const dividend = 10;
// const divisor = 2;
// const divideArgs = { divisor, dividend, };
// console.log('divide(10, 2)', divide(divideArgs));
// console.log('divide(10, 2)', divide({ dividend, divisor, }));


// ---------- Template literals ----------
// const min = 0;
// console.log('El número mínimo es ' + min);
// console.log(`El número mínimo es ${min}`);


// ---------- Advanced loops ----------
// const advancedArray = [1, 2, 3, 4, 5,];

// console.log('----- for -----');
// for (let i = 0; i < advancedArray.length; i++) {
//   console.log(advancedArray[i]);
// }

// console.log('----- forEach -----');
// function myFunction(value, index) {
//   console.log(value, index);
// }
// advancedArray.forEach(myFunction);
// advancedArray.forEach((value, index) => { console.log(value, index); });

// console.log('----- forIn -----');
// for (const i in advancedArray) {
//   console.log(advancedArray[i]);
// }

// console.log('----- forOf -----');
// for (const value of advancedArray) {
//   console.log(value);
// }

// console.log('----- while -----');
// let counter = 0;
// while (counter < advancedArray.length) {
//   console.log(advancedArray[counter]);
//   counter++;
// }

// console.log('----- doWhile -----');
// let doWhileCounter = 0;
// do {
//   console.log(advancedArray[doWhileCounter]);
//   doWhileCounter++;
// } while (doWhileCounter < advancedArray.length);
