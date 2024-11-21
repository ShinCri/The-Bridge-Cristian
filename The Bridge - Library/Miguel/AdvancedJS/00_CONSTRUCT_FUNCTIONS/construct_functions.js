// Pillar métodos de array que mas nos gusten.
// Crear una función donde el primer parámetro sea una array.
// El segundo es un numero (o conjunto) necesarios para poder hacer la función original).


// CONCAT
// const a1 = [1,2,3,4,];
// const a2 = [5,6,7,8,9,10,];

// function myConcatMethod(array1, array2){
//   const solve = [...array1];
//   for(let i=0; i<array2.length; i++){
//     solve.push(array2[i]);
//   }
//   return solve;
// }

// const a3 = myConcatMethod(a1,a2);
// console.log(a3);

// MAP //al callbackfunction le puedo meter como segundo argumento el indice del array, y como tercero el array entero.
// const cb = function callback(integer){
// return integer += 2;
// }

// const a = [1,2,3,4,5,6,];

// function myMapMethod(array, callbackfunction){
//   const solve = [...array];
//   for(let i=0; i<solve.length; i++){
//     const b = callbackfunction(solve[i]);
//     solve[i] = b;
//   }
//   return solve;

// }
// console.log(myMapMethod(a, cb));
// console.log(a);

// REDUCE

// FILTER,REVERSE