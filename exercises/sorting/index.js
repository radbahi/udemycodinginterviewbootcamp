// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) { // instructor solution. had to change only a few things
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < (arr.length - j - 1); i++) {
            if (arr[i] > arr[i + 1]) {
                const tempHolder = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tempHolder
            }
        }
    }
    return arr
}

// function bubbleSort(arr) { // my failed solution
//     for (let lengthNumber of arr) {
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 const tempHolder = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = tempHolder
//             }
//         }
//     }
// }

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
