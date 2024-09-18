function printAndSum(start, end) {
    let sum = 0
    let allNum = ''

    for (let i = start; i <= end; i++) {
        allNum += i + ' '
        sum += i
    }

    console.log(allNum)
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)