// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// // solution 1
// function capitalize(str) {
//     const words = []
//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }
//     return words.join(' ')
// }


// // my solution
// function capitalize(str) {
//     const arrayWords = str.split(" ")
//     capitalArray = []
//     arrayWords.forEach(word => {
//         capitalArray.push(word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
//     })
//     return capitalArray.join(" ")
// }

module.exports = capitalize;
