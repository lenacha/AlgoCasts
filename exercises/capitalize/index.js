// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// My solution

// function capitalize(str) {
//    let result = str.split(' ');
//    for(let i = 0; i < result.length; i++) {
//        result[i] = result[i][0].toUpperCase() + result[i].slice(1);
//    }
//    return result.join(' ');
// }

// function capitalize(str) {
//     let result = [];
//     for(let word of str.split(' ')) {
//         result.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return result.join(' ');
// }

function capitalize(str) {
    let result = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++) {
        if(str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }
    return result;
}
module.exports = capitalize;
