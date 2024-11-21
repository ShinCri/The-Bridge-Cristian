function fibonacci(range1, range2, limit){
  let nextNumber;
  let output = [];
  output.push(range1);
  output.push(range2);
  nextNumber = range1+range2;

  while(nextNumber<=limit){
    output.push(nextNumber);
    range1=range2;
    range2=nextNumber;
    nextNumber=range1+range2;
  }
  console.log(output);
}

fibonacci(0,1,1000);

// Output:
// [
//   0,   1,   1,  2,  3,   5,   8,
//  13,  21,  34, 55, 89, 144, 233,
// 377, 610, 987
// ]