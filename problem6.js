// count vowels

function countVowel(word) {
    let vowel = "aeiou";
    let count = 0;

    for (let i = 0; i <= word.length - 1; i++) {
        if (vowel.includes(word[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowel("samiriou"));
