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

// recursive solution. did most on my own. look at comment on line 25
function pyramid(n, row = 0, step = "") {
  const midpoint = Math.floor((2 * n - 1) / 2); // this is the equation to get the midpoint

  if (n === row) {
    return;
  }

  if (step.length === 2 * n - 1) { // had trouble with this cuz you need to compare step.length to 2 * n - 1 because that's the amount of characters there are. that's the limit u have to hit to go to next row
    console.log(step);
    return pyramid(n, row + 1);
  }

  for (let column = 0; column < 2 * n - 1; column++) {
    if (midpoint - row <= column && midpoint + row >= column) {
      step += "#";
    } else {
      step += " ";
    }
  }

  pyramid(n, row, step);
}

// // iterative solution. did not come up with my own.
// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2) // this is the equation to get the midpoint
//     for (let row = 0; row < n; row++) {
//         let step = ''

//         for (let column = 0; column < 2 * n - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) { // this is to get the indexes of the characters next to the midpoint relative to the row
//                 step += '#'
//             } else {
//                 step += ' '
//             }
//         }
//         console.log(step)
//     }

// }

module.exports = pyramid;
