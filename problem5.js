// reverse a string

/* let str = "samir";
let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}
console.log(reverseStr); */

function reverseStr(str) {
    let revStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }

    return revStr;
}

console.log(reverseStr("samir"));

console.log(reverseStr("Bangladesh i do"));
