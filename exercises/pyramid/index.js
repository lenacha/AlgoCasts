// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let str = '#';
    let count = 1;
    while(count < n) {
        str = '#' + str + '#';
        count ++
    }

    let logging = (num) => {
        if(num === 0) {
            return;
        }
        let stair = n - num;
        let spaces = '';
        let spaceCount = 0;
        while(spaceCount < stair) {
            spaces += ' ';
            spaceCount ++ 
        }

        let replacedStr = spaces + str.slice(n - num, n + num -1) + spaces;
        logging(num - 1)
        console.log(replacedStr)
    }

    logging(n);
}

module.exports = pyramid;
