const quantities = [500, 200, 100, 50, 20, 10, 5, 2, 1];
const maxCoin = 2;

function getMoney(amount) {
  console.log(`Amount to subtract: ${amount}`);

  for (let i = 0; i < quantities.length; i++) {
    const quantity = quantities[i];
    if (amount >= quantity) {
      amount -= quantity;
      quantity > maxCoin ? console.log(`|${quantity} €|`) : console.log(`(${quantity} €)`);
      i--;
    }
  }
}

const amount = 1498;
getMoney(amount);
