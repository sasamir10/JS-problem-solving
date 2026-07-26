function factorialNumber(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return `Factorial of ${number} -> ${result}`;
}

console.log(factorialNumber(10));
