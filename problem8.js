// count word in a sentence

/* function countWord(word) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i].includes(" ")) {
            count++;
        }
    }

    return count + 1;
}

console.log(countWord("i love to travel all over the world can i")); */

// more shortcut smarter way

function checkWord(word) {
    return word.split(" ").length;
}

console.log(checkWord("i love aesthetic life, can i found that life"));
