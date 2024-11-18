// dado un array con strings dentro, function que me haga una prediccion del elemento que más se parezca al input que yo le meto.
import {football_surnames, rich_business, aztec_names, russian_names, europe_mountains} from './db.js';

const db = europe_mountains;
// const db = rich_business;
// const db = aztec_names;
// const db = football_surnames;

// Funcion para formatear strings
function format_strings(a){
  const format_array=a.split('');
  const result_formatted = format_array.filter(letter => letter.toLowerCase() !== 'h').map(letter => {
    letter = letter.toLowerCase();
    if (letter === 'g') return 'j';
    if (letter === 'b') return 'v';
    return letter;
  });
  return result_formatted;
}

function word_prediction(string){
  // Spliteo la palabra que introducimos nosotros
  const word_input = format_strings(string);
  const output =[];

  // for para recorrer la bd. Una vez apuntando a cada elemento, spliteo el elemento para hacer una comparación letter a letter.
  for(let i = 0; i<db.length; i++){
    const word_to_compare = format_strings(db[i]);
    let word_acumulator = 0;

    // Algoritmo de sistema de puntuaciones. Tres fors encadenados. Primero para recorrer la BD. Segundo para recorrer la palabra introducida, tercero para la palabra comparada de BD.
    for(let j=0; j<word_input.length; j++){
      for(let k=0; k<word_to_compare.length; k++){
        if(word_to_compare[k] === word_input[j]) {
          word_acumulator ++;
          if(word_to_compare[k-1] === word_input[j-1]){word_acumulator += 2;}
          // if(word_to_compare.length === word_input.length){word_acumulator *=2}
        }
      }
    }
    const new_object = {[db[i]]: (word_acumulator/db[i].length)*100,};
    output.push(new_object);
    // console.log((db[i])+': ' + (word_acumulator/db[i].length)*100 +'%');
  }
  output.sort((a, b) => {
    const A = Object.values(a)[0];
    const B = Object.values(b)[0];
    return B - A;
  });
  // console.log(output);
  const first_output = output[Object.keys(output)[0]];
  // console.log('Introdujiste '+string+'. Tal vez quisiste decir: '+first_output);
  console.log(first_output);
}

// word_prediction('Tarkin'); // En BD "Tarpin"
// word_prediction('Kalashnikov'); // En BD "Smolnikov"
// word_prediction('Kunin'); // En BD "Shunin"
// word_prediction('Lukashenko'); // En BD "Pavlyuchenko"
// word_prediction('Bernardes'); // En BD "Fernandes"
// word_prediction('Jarkov'); // En BD "Zhirkov"

word_prediction('Blanc');



