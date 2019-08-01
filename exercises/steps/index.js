// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let str = '';
//     let count = 0;
//     while(count < n) {
//         str += '#';
//         count++;
//     }

//     count = 1;

//     while(count <= n) {
//         console.log(str.slice(0, count) + str.slice(count).replace(/#/gi, ' '));
//         count++
//     }

// }

// function steps(n) {
//     let board = Array(n).fill(Array(n).fill(' '));
//     for(let r = 0; r < board.length; r++) {
//         for(let c = 0; c < board[r].length; c++) {
//             if(r >= c) {
//                 board[r][c] = '#';
//             }
//         }
//         console.log(board[r].join(''));
//     }    
// }

function steps(n) {
    for(let row = 0; row < n; row++) {
        let stair = '';
        for(let col = 0; col < n; col++) {
            if(row >= col) {
                stair += '#'
            } else {
                stair += ' '
            }
        }
        console.log(stair);
    }
}

module.exports = steps;
