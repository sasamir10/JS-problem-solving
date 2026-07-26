// fizzBuzz problem

/* let number = 15;

for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
} */

/* function fizzBuzz(number) {
    let result;
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result = "FizzBuzz";
        } else if (i % 3 === 0) {
            result = "Fizz";
        } else if (i % 5 === 0) {
            result = "Buzz";
        } else {
            result = i;
        }
    }

    return result;
}

console.log(fizzBuzz(15)); */

/* function fizzBuzz(number) {
    const result = [];

    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
}

const output = fizzBuzz(15);

console.log(output); */

function fizzBuzz(number) {
    let result = [];

    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

console.log(fizzBuzz(15));
