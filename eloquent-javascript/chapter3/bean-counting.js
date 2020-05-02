
function countBs(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == 'B') {
            count ++;
        };
    };
    return count;
};

console.log(countBs('BBC'));

function countChar(word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            count ++;
        };
    };
    return count;
};

console.log(countChar('kakkerlak', 'k'));