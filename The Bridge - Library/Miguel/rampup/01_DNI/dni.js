const DNI = [4, 8, 7, 0, 8, 5, 0, 9,];

function getLetra(a){
  const dni_number = a.reduce((a, b) => (a*10)+b, 0);
  const resto = dni_number%23;
  const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E',];
  return (letras[resto]);
}
console.log(getLetra(DNI));