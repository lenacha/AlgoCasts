// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     let isNegative = false;
//     if(n < 0) {
//         isNegative = true;
//         n = Math.abs(n);
//     }
//     let reversed = 0;

//     let helper = (num) => {
//         if(num === 0) {
//             return;
//         } else {
//             reversed = (reversed * 10) + (num % 10);
//             helper(Math.floor(num/10));
//         }
//     }
//     helper(n);

//     if(isNegative) {
//         return reversed * -1;
//     } else {
//         return reversed;
//     }
// }


function reverseInt(n) {
    const reversed = parseInt(n.toString().split('').reverse().join(''));
    return reversed * Math.sign(n);
}

module.exports = reverseInt;
