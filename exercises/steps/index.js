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

// recursive solution
function steps(n, row = 0, stepString = '') {
    if (n === row ) { // base case. this is a check to end the recursion if n === row. we won't need to log any other steps past here.
        return
    }

    if (n === stepString.length) { // this is a check to see if n is = to the length of stepString, also the column, and log it and move to next row
        console.log(stepString)
        return steps(n, row + 1) // we reset stepString to empty by calling this again and moving to next row
    }

    if (stepString.length <= row) { // add # corresponding to row value. 
        stepString += '#'
    } else {
        stepString += ' ' // if row value is met but row doesnt = n, then add empty space to complete that string.
    }

    steps(n, row, stepString) // this is calling the function again with updated values to continue recursion until base case is met
}


// // first solution. couldn't come up with one myself
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stepString = "";

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stepString += "#";
//       } else {
//         stepString += " ";
//       }
//     }
//     console.log(stepString);
//   }
// }

module.exports = steps;
