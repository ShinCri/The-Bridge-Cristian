function roman_conversor(imput){
  // console.log(typeof imput);
  if(typeof imput === "string"){
    roman_to_decimal(imput);
  } else decimal_to_roman(imput);
}

const conversor = {M:1000,D:500,C:100,L:50,X:10,IX:9,V:5,IV:4,I:1,};


function decimal_to_roman(integer) {
  let roman = '';
  for (let i in conversor) {
    while (integer >= conversor[i]) {
      roman += i;
      integer -= conversor[i];

      // if (i=== 'D' && integer >= 900) {
      //   roman += 'CM';
      //   integer -= 900;
      // }
      // if (i=== 'C' && integer >= 400) {
      //   roman += 'CD';
      //   integer -= 400;
      // }
      // if (i=== 'L' && integer >= 90) {
      //   roman += 'XC';
      //   integer -= 90;
      // }
      // if (i=== 'X' && integer >= 40) {
      //   roman += 'XL';
      //   integer -= 40;
      }
      if (i=== 'X' && integer >= 9) {
        roman += 'IX';
        integer -= 9;
      }
      if (i === 'V' && integer >= 4) {
        roman += 'IV';
        integer -= 4;
      }

    }
  }
  console.log(roman);
}

function roman_to_decimal(string){
  string.split('');
  let result = 0;
  for(let i=0; i<string.length; i++){
    const actual = conversor[string[i]];
    const next = conversor[string[i+1]];
    actual<next?result+=next-actual && i++:result+=actual;
  }
  console.log(result);
}

roman_conversor(900);
roman_conversor('LV');