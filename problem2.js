// sum of range of a Numbers (1 to N)

function sumNumber(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumNumber(12));
console.log(sumNumber(50));
