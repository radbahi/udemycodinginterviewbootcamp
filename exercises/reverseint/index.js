// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// instructor's solution
function reverseInt(n) {
    const nArray = n.toString().split('').reverse().join('')
    return parseInt(nArray) * Math.sign(n)
}

// my way after looking at hints
// function reverseInt(n) {
//     const mathSign = Math.sign(n)
//     const nArray = n.toString().split('').reverse().join('')
//     return parseInt(nArray) * mathSign
// }


// my original way without looking at solution
// function reverseInt(n) {
//     const nArray = n.toString().split('')
//     if (nArray[0] === '-') {
//         const reversedArray = nArray.reverse().join('')
//         return parseInt(reversedArray) * -1
//     } else {
//         const reversedArray = nArray.reverse().join('')
//         return parseInt(reversedArray)
//     }
// }

module.exports = reverseInt;
