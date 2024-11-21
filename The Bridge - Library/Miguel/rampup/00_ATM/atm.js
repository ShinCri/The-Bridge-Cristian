// cajero.js variant using for().

const money_quantity = 1388;
const bills = [500, 200, 100, 50, 20, 10, 5,];
const coins = [2, 1,];

function atm (money, bills, coins){
  for(let i=0; i<bills.length; i++){
    const num_bills = Math.floor(money/bills[i]);
    for(let j=1; j<=num_bills; j++){
      console.log('| '+bills[i]+'€ |');
    }
    money -= bills[i]*num_bills;
  }
  for(let i=0; i<coins.length; i++){
    const num_coins = Math.floor(money/coins[i]);
    for(let j =1; j<=num_coins; j++){
      console.log('( '+coins[i]+'€ )');
    }
    money -=coins[i]*num_coins;
  }
}
atm(money_quantity, bills, coins);