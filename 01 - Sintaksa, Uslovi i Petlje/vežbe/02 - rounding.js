function solve(num, round){
    if(round > 15){
        round = 15;
    }

    let finalNum = parseFloat(num.toFixed(round));
    console.log(finalNum);
}
solve(3.1415926535897932384626433832795, 2);