// Números primos =>
//   Crear una función en la que se introduce un número inicial y un número final
//   El objetivo es mostrar los números primos comprendidos entre los introducidos por params
//   (ambos incluidos)
const start = Date.now();

const inicio = 0;
const fin = 1000000;

const isPrimeNumber = num => {
  let isPrime = true;
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      isPrime = false;
    }
  }
  if(num <= 1) isPrime = false;
  if(isPrime) console.log(num);
};

function checkprime(range_ini, range_end){
  for(let i=range_ini; i<=range_end; i++){
    isPrimeNumber(i);
  }
}

checkprime(inicio, fin);

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
