function solve(n){
  let i = 1;
  let odd = 0
  let sum = 0;
  while (n < 101){
      odd = 2 * i - 1;
      console.log(odd);
      if( i >= n){
        break;
      }
    i++;
  }
  sum = n * n;
  console.log(`Sum: ${sum}`);
}
solve(3);