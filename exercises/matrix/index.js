// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// solution explanation https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547002#questions

function matrix(n) {
  let results = [];

  for (let i = 0; i < n; i++) {
    results.push([]); // create the amount of arrays we need which we get from the input for the function
  }
  let counter = 1; // to map out the numbers in the array
  let startColumn = 0; // stands as first element in the arrays
  let endColumn = n - 1; // stands as last but we subtract 1 cuz arrays start at 0
  let startRow = 0; // ditto
  let endRow = n - 1; // ditto
  while (startColumn <= endColumn && startRow <= endRow) {
      // top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter; // straight across, very basic
      counter++;
    }
    startRow++; // move to next row for below
    // right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter; // increment the rows and add a value to the end column, which is the last index of each array
      counter++;
    }
    endColumn--; // decrement end column to get indexes in the middle of the array
    // bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter; // work backwards from the value of the end column
      counter++;
    }
    endRow--; // decrement end row to get array in the middle
    // start column
    for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter; // work up from each row from the bottom row and assign value to start column, which is the first index of each array
        counter++
    }
    startColumn++ // increment to also get values in the middle. starts working towards the values in the middle with endColumn--
  }
  return results
}

module.exports = matrix;
