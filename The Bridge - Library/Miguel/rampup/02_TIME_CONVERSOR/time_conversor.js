// Conversor reloj analógico/digital =>
//   Crear una función en la que se introduce un objeto con las props hours, minutes y isPm
//   Las props hours y minutes son numéricas y pueden tener valor de 1 a 12
//   La prop isPm es booleana e indica que es pm si es true, o es am si es false
//   El objetivo es pasar esa hora analógica a formato digital 24h (23:55)

const obj = {
  hours: 7,
  minutes: 7,
  isPm: true,
};

function time_converter(a){
  a.isPm ? a.hours +=12 : a.hours;
  console.log('('+a.hours+':'+a.minutes*5+')');
}

time_converter(obj);