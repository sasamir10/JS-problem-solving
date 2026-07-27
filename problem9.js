// max value

function maxValue(arr) {
    let maxVal = 1;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (maxVal < arr[i]) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

console.log(maxValue([10, 20, 30, 40, 50, 60]));
console.log(maxValue([300, 400, 500, 600, 700, 800]));
