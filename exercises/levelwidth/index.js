// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // instructor solution
  const arr = [root, "s"]; // create array with root and string of s. string of s used to know when to move to next level
  const counters = [0]; // keeps record of the values in each level
  while (arr.length > 1) { // keeps loop going as long as string of s isn't the only element in array
    const node = arr.shift(); // assign variable to first element in array
    if (node === "s") { // if that value is string of s...
      counters.push(0); // push 0 value to start new count of new level
      arr.push("s"); // push string of s to detect new level
    } else {
      arr.push(...node.children); // pushes the children of that node element to the end of the array. uses spread operator because node.children is an array. we don't want to push the whole array, just the elements INSIDE the node.children array
      counters[counters.length - 1]++; // increments the last element in counters array to keep count for that level
    }
  }
  return counters;
}
// function levelWidth(root) { // my function, but it didn't work. got a FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory

//     let counter = 0
//     const widthArr = []
//     const tempArr = [root, 's']
//     while (tempArr.length > 1) {
//         if (tempArr[0] = 's') {
//             tempArr.shift()
//             tempArr.push('s')
//             widthArr.push(counter)
//             counter = 0
//         } else {
//             let node = tempArr[0]
//             tempArr.push(node.children)
//             counter++
//             tempArr.shift()
//         }
//     }
//     return widthArr
// }

module.exports = levelWidth;
