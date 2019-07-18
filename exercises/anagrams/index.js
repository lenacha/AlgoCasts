// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.toLowerCase().split(' ').join('');
    stringB = stringB.toLowerCase().split(' ').join('');
    let helper = (str) => {
        let obj = {};
        for(let char of str) {
            if(char in obj) {
                obj[char] ++
            } else {
                obj[char] = 1
            }
        }
        return obj;
    }
    objA = helper(stringA);
    objB = helper(stringB);

    // let objToArr = (object) => {
    //     let arr = [];
    //     for(let key in object) {
    //         arr.push([key, object[key]]);
    //     }
    //     arr.sort((a, b) => {
    //         if(a[0] > b[0]) {
    //             return 1;
    //         } else {
    //             return -1;
    //         }
    //     });
    //     return arr;
    // }
    // return JSON.stringify(objToArr(objA)) === JSON.stringify(objToArr(objB));
    let cb = (a, b) => {
        if(a[0] > b[0]) {
            return 1;
        } else {
            return -1;
        }
    }
    let arrA = Object.keys(objA).sort(cb);
    let arrB = Object.keys(objB).sort(cb);

    return JSON.stringify(arrA) === JSON.stringify(arrB);
}

module.exports = anagrams;
