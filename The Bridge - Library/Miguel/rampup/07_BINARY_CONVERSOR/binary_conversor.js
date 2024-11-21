function binary_conversor(imput){
  // console.log(typeof imput);
  if(typeof imput === "string"){
    binary_to_decimal(imput);
  } else decimal_to_binary(imput);
}

function binary_to_decimal(string){
  const binary_array =string.split('');
  const numberArray = [];
  let solution = 0;
  let index = 0;

  for (let i = 0; i < binary_array.length; i++){
    numberArray.push(parseInt(binary_array[i]));
  }

  for(let i=numberArray.length-1; i>=0; i--){
    solution += numberArray[i] ** index;
    index++;
  }
  console.log(solution);
}

function decimal_to_binary(integer){
  console.log(integer.toString(2));
}

binary_conversor(42);
binary_conversor("10");