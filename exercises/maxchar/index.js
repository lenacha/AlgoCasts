// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {};
    let max = 0;
    let character = '';
    for(let char of str) {
        if(char in obj) {
            obj[char] += 1;
            if(max < obj[char]) {
                max = obj[char];
                character = char;
            }
        } else {
            obj[char] = 1;
            if(max === 0) {
                max = 1;
                character = char;
            }
        }
    }
    return character;
}

module.exports = maxChar;
