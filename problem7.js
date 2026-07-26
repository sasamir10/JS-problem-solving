// palindrome check

function checkPalindrome(word) {
    let reverseWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }

    // let result;
    if (reverseWord === word) {
        return "palindrome";
    }

    return "not palindrome";
}

console.log(checkPalindrome("civics"));
