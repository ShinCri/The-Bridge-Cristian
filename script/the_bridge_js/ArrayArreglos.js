
function russianPlayers(name, surname, age, height, team){
  this.name = name;
  this.surname;
  this.age = age;
  this.height = height;
  this.team = team;
}

const player1 = new russianPlayers('Igor', 'Akinfeev', 21, '188', 'CSKA Moscow');
const player2 = new russianPlayers('Andrey', 'Semyonov', 28, '178cm', 'Akhmat Grozny');
const player3 = new russianPlayers('Daler', 'Kuzyayev', 27, '168cm', 'Zenit St. Petersburg');
const player4 = new russianPlayers('Aleksandr', 'Golovin', 28, '164cm', 'AS Monaco');
const player5 = new russianPlayers('Artem', 'Dzyuba', 32, '159cm', 'FC Sochi');
const player6 = new russianPlayers('Denis', 'Cheryshev', 27, '192cm', 'Villarreal');
const player7 = new russianPlayers('Sergei', 'Ignashevich', 18, '186cm', 'retirado');
const player8 = new russianPlayers('Roman', 'Zobnin', 28, '168cm', 'Spartak Moscow');
const player9 = new russianPlayers('Anton', 'Shunin', 28, '168cm', 'Dynamo Moscow');
const player10 = new russianPlayers('Alexander', 'Erokhin', 28, '168cm', 'Zenit St. Petersburg');


const listOfRussianPlayers = [player1,player2,player3,player4,player5,player5,player6,player6,player7,player8,player9,player10]

function updateBrowserDataBase(object){
  this.object = object;
}

let update = new updateDataBase(listOfRussianPlayers);





const listRussianPlayers = ['Igor Akinfeev', 'Andrey Semyonov', 'Daler Kuzyayev', 'Aleksandr Golovin', 'Artem Dzyuba', 'Denis Cheryshev', 'Sergei Ignashevich', 'Roman Zobnin',];
const abecedario = ['a', 'b', 'c', 'd', 'e', ​​'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function sugerencia (input){
  const propability = [];

  let string = "";
  let coincidencia_1 = "";
  let coincidencia_2 = "";
  let coincidencia_3 = "";
  let coincidencia_4 = "";

  for(i=0;i<listOfRussianPlayers.length;i++){

    string = listOfRussianPlayers[i];

    coincidencia_1 = Math.abs(input.length - string.length);

    coincidencia_2 = function formula_c2(){


      const input_array = input.split('');
      const string_array = string.split('');
      const abcInputNumber = [];
      const abcStringNumber = [];
      const abcMatch = [];
      let abcConcidence = 0;

      for(z=0;z<abecedario.length;z++){


        for(y=0;i<input_array;y++){
          if (input_array[y]===abecedario[z]){
            abcConcidence = abcConcidence + 1;
          }
          abcInputNumber.push(abcConcidence);
          abcConcidence = 0;

          for(y=0;i<string_array;y++){
            if (string_array[y] === abecedario[z]){
              abcConcidence = abcConcidence + 1;
            }
          }
          abcStringNumber.push(abcConcidence);
          abcConcidence = 0;

        }

      }
      let matchResult = 0;
      for(i=0;i<abecedario.length;i++){
        matchResult = 0;
        matchResult = abcInputNumber[i]-abcStringNumber[i];
        abcMatch.push(matchResult);
      }


    }
  }
}