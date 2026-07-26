// reverse a string

function reverseStr(str) {
    let revStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }

    return revStr;
}

console.log(reverseStr("samir"));
console.log(reverseStr("Bangladesh i do"));
