
const myArray = ["a","b","c","d"];


const mapMethod = function myArrayMap(array){
let newArray = [];
for(i=0;i<array.length;i++){
  newArray.push(array[i]+i);
};
return newArray;
}

console.log(mapMethod(myArray));