function solve(start, end){
    let sum = 0;
    let allNum = '';
    for(let i = start; i <= end; i++){
        allNum += i + ' '
        sum += i
    }
    console.log(allNum);
    console.log(`Sum: ${sum}`);
}
solve(5, 10)