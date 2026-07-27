// min value

function minValue(arr) {
    let minVal;

    for (let i = 0; i <= arr.length - 1; i++) {
        minVal = arr[i];
        if (minVal < arr[i]) {
            minVal = arr[i];
        }
    }

    return minVal;
}

console.log(minValue([300, 400, 500, 600, 700, 800]));
// not solved yet
