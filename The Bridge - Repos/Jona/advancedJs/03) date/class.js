// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date

const today = new Date();

console.log(today); // GMT (Greenwich Mean Time)

console.log('toString', today.toString());
console.log('getMilliseconds', today.getMilliseconds());
console.log('getSeconds', today.getSeconds());
console.log('getMinutes', today.getMinutes());
console.log('getHours', today.getHours());
console.log('getDate', today.getDate());
console.log('getDay', today.getDay()); // of the week
console.log('getMonth', today.getMonth());
console.log('getFullYear', today.getFullYear());
console.log('getTime', today.getTime()); // ms since 01/01/1970

today.setMonth(7);
today.setDate(1);
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);

console.log('toString after setters', today.toString());
console.log('new Date after setters', new Date(today));
