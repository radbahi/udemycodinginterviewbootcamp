// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// second solution. I tried doing a mix of both solutions
function chunk(array, size) {
    const bigArray = []
    let index = 0
    while (index < array.length) {
        bigArray.push(array.slice(index, index = size))
        index += size
    }
    return bigArray
}


// // first solution
// function chunk(array, size) {
//     let bigArray = [] // holds all of the chunks
//     for (let element of array) { // iterate through each element
//         const chunk = bigArray[bigArray.length - 1] // define this to grab the element of the last chunk inside bigArray
//         if (!chunk || chunk.length === size) { // if there is no chunk or the last chunk is already at max size...
//             bigArray.push([element]) // ...push a new array with the latest element in there
//         } else {
//             chunk.push(element) // if chunk is not at max size, push in new element. the data is saved in bigArray so no need to worry about chunk getting redefined
//         }
//     }
//     return bigArray
// }


// // my original way of doing it. DOES NOT WORK. This was almost like the second solution.
// function chunk(array, size) {
//     let bigArray = []
//     for (let i = 0; i <= array.length; i + (size+1)) {
//         let chunkArray = []
//         chunkArray.push(array.slice(i, (i+size)))
//         bigArray.push(chunkArray)
//     }
//     return bigArray
// }
                
                
module.exports = chunk;