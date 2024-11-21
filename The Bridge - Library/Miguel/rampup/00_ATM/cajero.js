// Crear una función que reciba por parámetro un importe numérico, un array con los billetes
// disponibles y otro con las monedas disponibles.
// El objetivo es que pinte por consola el número mínimo de billetes y monedas sin centimos.

// Es decir, debería funcionar como un cajero automático o ATM.

// Por ejemplo: ante el importe 1388 la función deberia pintar lo siguiente:
// | 500€ |
// | 500€ |
// | 200€ |
// | 100€ |
// | 50€ |
// | 20€ |
// | 10€ |
// | 5€ |
// ( 2€ )
// ( 1€ )




// El algoritmo para el ATM es el siguiente: Iremos siempre de la cantidad de dinero más grande a la más pequeña.
// En este caso, de 500 a 1. Crearemos un bucle WHILE que NO PARARÁ hasta que el array de billetes (y posteriormente el de monedas) esté vacío.
// Es decir: A medida que los billetes no se puedan gastar, los eliminaremos del array.
// La premisa es fácil: ¿La cantidad de dinero que queremos sacar es divisible entre el billete más grande disponible? Sí. El número entero redondeado
// que quede como resultado será el número de billetes que haya que sacar.
// Ejemplo:
// 1388/500 = 2 (Redondeado). Por tanto: 2 billetes de 500. Y ahora sólo tenemos que sacar 388.
// 388/200 = 1 (Redondeado). Por tanto: 1 billete de 200. Y ahora sólo tenemos que sacar 188.
// 188/100 = 1 (Redondeado). Por tanto: 1 billete de 100. Y ahora sólo tenemos que sacar 88.
// 88/50 = 1 (Redondeado). Por tanto: 1 billete de 50. Y ahora sólo tenemos que sacar 38.
// And so on...

const money_quantity = 1388;
const bills = [500, 200, 100, 50, 20, 10, 5,];
const coins = [2, 1,];

function atm (money, bills, coins){
  while(bills.length>0){
    let num_bills = Math.floor(money/bills[0]);
    if(num_bills>0){
      for(let i =0; i<num_bills; i++){
        console.log('| '+bills[0]+'€ |');
      }
    }
    money -= bills[0]*num_bills;
    bills.shift();
  }

  if(money>0){
    while(coins.length>0){
      let num_coins = Math.floor(money/coins[0]);
      if(num_coins>0){
        for(let i=0; i<num_coins; i++){
          console.log('( '+coins[0]+'€ )');
        }
      }
      money -=coins[0]*num_coins;
      coins.shift();
    }
  }
}

atm(money_quantity, bills, coins);