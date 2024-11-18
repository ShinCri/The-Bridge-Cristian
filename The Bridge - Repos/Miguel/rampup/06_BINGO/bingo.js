//   Bingo eficiente =>
//    Crear una función que genere números aleatorios desde 1 hasta el 90.
//   Medir eficiencia.

//   Opcional 1: diseñar un cartón de bingo y jugar midiendo los turnos.
//   Al cantar bingo debe haber recuento de los números.
//   Ejemplo:
//   [
//     [1,     null, 22,   33,   null, 51,   62,   73,   null],
//     [null,  11,   null, 35,   41,   59,   null, 77,   88],
//     [9,     12,   25,   null, 44,   null, 66,   null, 89],
//   ]

//   Opcional 2: poder cantar linea
let card = [
  [1,     null, 22,   33,   null, 51,   62,   73,   null,],
  [null,  11,   null, 35,   41,   59,   null, 77,   88,],
  [9,     12,   25,   null, 44,   null, 66,   null, 89,],
];

let match = [];

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function eficientbingo(){
  const ordered_list = [];
  const unordered_list = [];
  for(let i=1; i<=90; i++){
    ordered_list.push(i);
  }

  while(ordered_list.length>0){
    const index = getRandomInt(0,ordered_list.length); // 0
    const number = ordered_list[index]; // [4, 5, 6...]

    unordered_list.push(number);
    ordered_list.splice(index, 1);
    check_bingo(number);
    if(match.length===17) break;
  }
  console.log('BINGOOOO!!');
  console.log(unordered_list);
  console.log('Cantidad de números cantados: '+unordered_list.length);
  console.log('Orden de los números matcheados del cartón: '+match);

}

function check_bingo(a){

  for(let i=0; i<card.length;i++){
    if(card.indexOf(a)>=0){
      match.push(a);
      break;
    }
    for(let j=0; j<card[i].length;j++){
      if(card[i].indexOf(a)>=0){
        match.push(a);
        break;
      }
    }
  }
  if(match.length===17) return true;
}

const startTime = new Date().getTime();
eficientbingo();


const endTime = new Date().getTime();
console.log(endTime - startTime + ' milliseconds');