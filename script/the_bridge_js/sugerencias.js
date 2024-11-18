
// Creamos una variable que representará una lista de jugadores de futbol rusos //

const listRussianPlayers = ['Igor Akinfeev', 'Andrey Semyonov', 'Daler Kuzyayev', 'Aleksandr Golovin', 'Artem Dzyuba', 'Denis Cheryshev', 'Sergei Ignashevich', 'Roman Zobnin',];

// Ahora hacemos una matriz que contendra cada una las letras //

const abc= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];


const mapMethod = function myArrayMap(array){
  let newArray = [];
  for(i=0;i<array.length;i++){
    newArray.push(array[i]+i);
  };
  return newArray;
  }

  console.log(mapMethod(abc));

 //[ 'a0',
 //  'b1',
 //  'c2',
 //  'd3',
 //  'e4',
 //  'f5',
 //  'g6',
 //  'h7',
 //  'i8',
 //  'j9',
 //  'k10',
 //  'l11',
 //  'm12',
 //  'n13',
 //  'ñ14',
 //  'o15',
 //  'p16',
 //  'q17',
 //  'r18',
 //  's19',
 //  't20',
 //  'u21',
 //  'v22',
 //  'w23',
 //  'x24',
 //  'y25',
 //  'z26' ]

 Creamos una función que será la encargada de hacernos la sugerencia en caso de no escribir bien uno de los nombres //
function sugerencia(input, database){

// Algoritmo 1 //

let match_1 = "";

for(i=0;i<database.length;i++){

  const string = database[i];
  match_1 = Math.abs(input.length - string.length);
}

// Algoritmo 2 //

let match_2 = function formula_c2(){

  const input_array = input.split('');
  const string_array = string.split('');
  const abcInputNumber = [];
  const abcStringNumber = [];
  const abcMatch = [];
  let abcConcidence = 0;

  for(z=0;z<abc.length;z++){

    for(y=0;i<input_array;y++){

      if (input_array[y]===abc[z]){
        abcConcidence = abcConcidence + 1;
      }
    }

    abcInputNumber.push(abcConcidence);
    abcConcidence = 0;

    for(y=0;y<string_array;y++){
      if (string_array[y] === abc[z]){
        abcConcidence = abcConcidence + 1;
      }
    }

    abcStringNumber.push(abcConcidence);
    abcConcidence = 0;
  }

  for(i=0;i<abc.length;i++){
    let matchResult = Math.abs(abcInputNumber[i]-abcStringNumber[i]);
    abcMatch.push(matchResult);
  }


}

let match_3 = function string_Match_Levels(input, database){

  for(i=input.length-1;i>=0;i--){




  }


}
