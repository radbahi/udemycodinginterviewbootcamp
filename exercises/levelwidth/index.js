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
  const arr = [root, "s"];
  const counters = [0];
  while (arr.length > 1) {
    const node = arr.shift();
    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
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
