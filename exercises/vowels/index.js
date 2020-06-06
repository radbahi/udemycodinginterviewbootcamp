// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// regexp solution. did not come up with it.
function vowels(str) {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}

// // iterative solution. did not come up with this. very easy, too. disappointed in myself.
// function vowels(str) {
//     let count = 0
//     const vowelLetters = "aeiou"

//     for (let char of str.toLowerCase()) {
//         vowelLetters.includes(char) ? count++ : null
//     }
//     return count
// }

module.exports = vowels;
