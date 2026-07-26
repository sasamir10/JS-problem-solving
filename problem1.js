// Even or Odd check

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "The number is Even";
    }
    return "The number is Odd";
}

const result = checkEvenOdd(1001);

console.log(result);
