function fibonachi (a,b,c){

  const arrfibo=[a,b];
  let i = 0;
  let calculadora = 0;
  while((arrfibo[i]+arrfibo[i+1])<=c){

  calculadora= arrfibo[i]+arrfibo[i+1];
  arrfibo.push(calculadora);
  i=i+1;
  console.log(calculadora);

  }

  return arrfibo;
  }

entrada = fibonachi(7,13,100);
console.log(entrada);
