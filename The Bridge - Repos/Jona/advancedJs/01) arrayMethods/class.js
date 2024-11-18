const original = ['a', 'b', 'c', 'd',];

// *** AT ***
// const response = original.at(2);
// console.log('original', original); // ['a', 'b', 'c', 'd']
// console.log('response', response); // 'c'

// const response = original.at(-1);
// console.log('original', original); // ['a', 'b', 'c', 'd']
// console.log('response', response); // 'd'


// *** CONCAT ***
// const response = original.concat(['e', 'f',]);
// console.log('original', original); // ['a', 'b', 'c', 'd']
// console.log('response', response); // ['a', 'b', 'c', 'd', 'e', 'f']


// *** COPY WITHIN ***
// const response = original.copyWithin(0, 2, 3); // Copy to index 0 the elements between index 2 and index 3
// console.log('original', original); // ['c', 'b', 'c', 'd']
// console.log('response', response); // ['c', 'b', 'c', 'd']

// const response = original.copyWithin(0, 2, 4); // Copy to index 0 the elements between index 2 and index 4
// console.log('original', original); // ['c', 'd', 'c', 'd']
// console.log('response', response); // ['c', 'd', 'c', 'd']

// const response = original.copyWithin(0, 1); // Copy to index 0 all elements between index 1 and the end
// console.log('original', original); // ['b', 'c', 'd', 'd']
// console.log('response', response); // ['b', 'c', 'd', 'd']


// *** FILL ***
// const response = original.fill('x');
// console.log('original', original); // ['x', 'x', 'x', 'x']
// console.log('response', response); // ['x', 'x', 'x', 'x']


// *** FLAT ***
// const flatOriginal = ['a', ['b', 'c', ['d', 'e',],],];
// const response = flatOriginal.flat();
// console.log('flatOriginal', flatOriginal); // ['a', ['b', 'c', ['d', 'e']]]
// console.log('response', response); // [ 'a', 'b', 'c', [ 'd', 'e' ] ]

// const response = flatOriginal.flat(2);
// console.log('flatOriginal', flatOriginal); // ['a', ['b', 'c', ['d', 'e']]]
// console.log('response', response); // [ 'a', 'b', 'c', 'd', 'e' ]


// *** INCLUDES ***
// const response = original.includes('c');
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // true

// const response = original.includes('x');
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // false


// *** INDEX OF ***
// const indexOfOriginal = ['a', 'b', 'c', 'd', 'c',];
// const response = indexOfOriginal.indexOf('c');
// console.log('indexOfOriginal', indexOfOriginal); // [ 'a', 'b', 'c', 'd', 'c' ]
// console.log('response', response); // 2

// const response = indexOfOriginal.indexOf('x');
// console.log('indexOfOriginal', indexOfOriginal); // [ 'a', 'b', 'c', 'd', 'c' ]
// console.log('response', response); // -1


// *** JOIN ***
// const response = original.join();
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // 'a,b,c,d'

// const response = original.join('');
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // 'abcd'

// const response = original.join('-');
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // 'a-b-c-d'


// *** LAST INDEX OF ***
// const lastIndexOfOriginal = ['a', 'b', 'c', 'd', 'c',];
// const response = lastIndexOfOriginal.lastIndexOf('c');
// console.log('lastIndexOfOriginal', lastIndexOfOriginal); // [ 'a', 'b', 'c', 'd', 'c' ]
// console.log('response', response); // 4

// const response = lastIndexOfOriginal.lastIndexOf('x');
// console.log('lastIndexOfOriginal', lastIndexOfOriginal); // [ 'a', 'b', 'c', 'd', 'c' ]
// console.log('response', response); // -1


// *** POP ***
// const response = original.pop();
// console.log('original', original); // [ 'a', 'b', 'c' ]
// console.log('response', response); // 'd'


// *** PUSH ***
// const response = original.push('x');
// console.log('original', original); // [ 'a', 'b', 'c', 'd', 'x' ]
// console.log('response', response); // 5

// const response = original.push('x', 'y');
// console.log('original', original); // [ 'a', 'b', 'c', 'd', 'x', 'y' ]
// console.log('response', response); // 6


// *** REVERSE ***
// const response = original.reverse();
// console.log('original', original); // [ 'd', 'c', 'b', 'a' ]
// console.log('response', response); // [ 'd', 'c', 'b', 'a' ]


// *** SHIFT ***
// const response = original.shift();
// console.log('original', original); // [ 'b', 'c', 'd' ]
// console.log('response', response); // 'a'


// *** SLICE ***
// const response = original.slice(); // Makes a copy
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'a', 'b', 'c', 'd' ]

// const response = original.slice(2);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'c', 'd' ]

// const response = original.slice(1, 3);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'b', 'c' ]

// const response = original.slice(-3);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'b', 'c', 'd' ]

// const response = original.slice(0, -1);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'a', 'b', 'c' ]


// *** SORT ***
// const sortOriginal = ['d', 'a', 'c', 'b',];
// const response = sortOriginal.sort();
// console.log('sortOriginal', sortOriginal); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'a', 'b', 'c', 'd' ]


// *** SPLICE ***
// const response = original.splice(1, 0, 'x');
// console.log('original', original); // [ 'a', 'x', 'b', 'c', 'd' ]
// console.log('response', response); // []

// const response = original.splice(3, 1, 'x');
// console.log('original', original); // [ 'a', 'b', 'c', 'x' ]
// console.log('response', response); // [ 'd' ]

// const response = original.splice(1, 2, 'x');
// console.log('original', original); // [ 'a', 'x', 'd' ]
// console.log('response', response); // [ 'b', 'c' ]


// *** TO REVERSED ***
// const response = original.toReversed();
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'd', 'c', 'b', 'a' ]


// *** TO SORTED ***
// const toSortedOriginal = ['d', 'a', 'c', 'b',];
// const response = toSortedOriginal.toSorted();
// console.log('toSortedOriginal', toSortedOriginal); // [ 'd', 'a', 'c', 'b' ]
// console.log('response', response); // [ 'a', 'b', 'c', 'd' ]


// *** TO SPLICED ***
// const response = original.toSpliced(1, 0, 'x');
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'a', 'x', 'b', 'c', 'd' ]

// const response = original.toSpliced(3, 1, 'x');
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'a', 'b', 'c', 'x' ]

// const response = original.toSpliced(1, 2, 'x');
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'a', 'x', 'd' ]


// *** TO STRING ***
// const response = original.toString();
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // 'a,b,c,d'


// *** UNSHIFT ***
// const response = original.unshift('x');
// console.log('original', original); // [ 'x', 'a', 'b', 'c', 'd' ]
// console.log('response', response); // 5

// const response = original.unshift('x', 'y');
// console.log('original', original); // [ 'x', 'y', 'a', 'b', 'c', 'd' ]
// console.log('response', response); // 6


// *** WITH ***
// const response = original.with(2, 'x');
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'a', 'b', 'x', 'd' ]



// And now methods with callback



// *** EVERY ***
// function everyCallback(item) {
//   return item === 'a';
// }

// const response = original.every(everyCallback);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // false

// const originalEvery = ['a', 'a', 'a',];
// const response = originalEvery.every(everyCallback);
// console.log('originalEvery', originalEvery); // [ 'a', 'a', 'a' ]
// console.log('response', response); // true


// *** FILTER ***
// function filterCallback(item) {
//   return item === 'a' || item === 'c';
// }

// const response = original.filter(filterCallback);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // [ 'a', 'c' ]


// *** FIND ***
// function findCallback(item) {
//   return item === 'a' || item === 'c';
// }

// const response = original.find(findCallback);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // 'a'


// *** FIND INDEX ***
// function findIndexCallback(item) {
//   return item === 'a' || item === 'c';
// }

// const response = original.findIndex(findIndexCallback);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // 0


// *** FIND LAST ***
// function findLastCallback(item) {
//   return item === 'a' || item === 'c';
// }

// const response = original.findLast(findLastCallback);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // 'c'


// *** FIND LAST INDEX ***
// function findLastIndexCallback(item) {
//   return item === 'a' || item === 'c';
// }

// const response = original.findLastIndex(findLastIndexCallback);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // 2


// *** FOR EACH ***
// function forEachCallback(item, index) {
//   console.log(`The item number ${ index } is ${ item }`);
// }

// const response = original.forEach(forEachCallback);
// // The item number 0 is a
// // The item number 1 is b
// // The item number 2 is c
// // The item number 3 is d
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // undefined


//*** MAP ***
//function mapCallback(item, index) {
  //return item + index;
//}

//const response = original.map(mapCallback);
//console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
//console.log('response', response); // [ 'a0', 'b1', 'c2', 'd3' ]


// *** REDUCE ***
// function reduceCallback(total, newItem) {
//   return total + newItem;
// }

// const reduceOriginal = [1, 2, 3, 4,];
// const response = reduceOriginal.reduce(reduceCallback);
// console.log('reduceOriginal', reduceOriginal); // [ 1, 2, 3, 4 ]
// console.log('response', response); // 10

// const response = reduceOriginal.reduce(reduceCallback, 100);
// console.log('reduceOriginal', reduceOriginal); // [ 1, 2, 3, 4 ]
// console.log('response', response); // 110


// *** SOME ***
// function someCallback(item) {
//   return item === 'a';
// }

// const response = original.some(someCallback);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // true

// function someCallback(item) {
//   return item === 'x';
// }

// const response = original.some(someCallback);
// console.log('original', original); // [ 'a', 'b', 'c', 'd' ]
// console.log('response', response); // false


// *** SORT ***
// function sortCallback(itemA, itemB) {
//   if (itemA.weight > itemB.weight) { // sort people from min to max
//     return 1;
//   } else {
//     return -1;
//   }
// }

// const sortOriginal = [
//   { name: 'Ana', weight: 60, },
//   { name: 'Jona', weight: 100, },
//   { name: 'Pepe', weight: 40, },
// ];

// const response = sortOriginal.sort(sortCallback);
// console.log('sortOriginal', sortOriginal); // [{ name: 'Pepe', weight: 40 }, { name: 'Ana', weight: 60 }, { name: 'Jona', weight: 100 }]
// console.log('response', response); // [{ name: 'Pepe', weight: 40 }, { name: 'Ana', weight: 60 }, { name: 'Jona', weight: 100 }]


// *** TO SORTED ***
// function toSortedCallback(itemA, itemB) {
//   if (itemA.weight > itemB.weight) { // sort people from min to max
//     return 1;
//   } else {
//     return -1;
//   }
// }

// const toSortedOriginal = [
//   { name: 'Ana', weight: 60, },
//   { name: 'Jona', weight: 100, },
//   { name: 'Pepe', weight: 40, },
// ];

// const response = toSortedOriginal.toSorted(toSortedCallback);
// console.log('toSortedOriginal', toSortedOriginal); // [{ name: 'Ana', weight: 60 }, { name: 'Jona', weight: 100 }, { name: 'Pepe', weight: 40 }]
// console.log('response', response); // [{ name: 'Pepe', weight: 40 }, { name: 'Ana', weight: 60 }, { name: 'Jona', weight: 100 }]
