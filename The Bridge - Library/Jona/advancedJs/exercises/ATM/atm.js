const currencies = [500, 200, 100, 50, 20, 10, 5, 2, 1];
const maxCoin = 2;

function getFreshMoney(myMoney) {
  const summary = [];

  for (let i = 0; i < currencies.length; i++) {
    const currency = currencies[i];
    if (myMoney >= currency) {
      currency > maxCoin ? console.log(`|${currency}€|`) : console.log(`(${currency}€)`);
      myMoney -= currency;
      // summary.push({ quantity: 1, value: currency });
      if (myMoney >= currency) {
        i--;
      }
    }
  }
}

const myMoney = 1498;

getFreshMoney(myMoney);
