
const numbersDistributionRows =[];
let addrow=[];
let b=1;

for(a=1;a<=3;a++){
  for(b=b;b<=90/3*a;b++){
  addrow.push(b);
}
numbersDistributionRows.push(addrow);
addrow=[];
}

console.log(numbersDistributionRows);

