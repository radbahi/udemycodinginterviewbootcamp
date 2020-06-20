// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) { // instructor solution. had to change only a few things
    for (let j = 0; j < arr.length; j++) { // have to make it a for let loop
        for (let i = 0; i < (arr.length - j - 1); i++) { // also had to subtract j on top of 1
            if (arr[i] > arr[i + 1]) {
                const tempHolder = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tempHolder
            }
        }
    }
    return arr // forgot to return, duh
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
    for (let i = 0; i < arr.length; i++) { // iterate through the whole array
        let indexOfMin = i // have a constant variable for the least value. start off with i.

        for (let j = i + 1; j < arr.length; j++) { // gets value of next element each time
            if (arr[j] < arr[indexOfMin]) { // if it's lesser than current minimum value...
                indexOfMin = j // ...redefine it to get the INDEX of new minimum value
            }
        }

        if (indexOfMin !== i) { // if these don't equal, swap as below. this is to not swap where the current minimum value is
            let lesser = arr[indexOfMin] // get the minimum value 
            arr[indexOfMin] = arr[i] // the value of the former minimum index will now get swapped...
            arr[i] = lesser // ...and the current index now has the original minimum value
        }
    }

    return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
