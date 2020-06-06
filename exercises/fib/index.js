// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// faster recursive solution with memoization. explanation https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547034#questions
function memoize(fn) {
    const cache = {}
    return function(...args) {
        if (cache[args]) {
            return cache[args]
        }
        const result = fn.apply(this, args) // read up on apply on MDN
        cache[args] = result
        return result
    }
}

// instructor recursive solution. slower version explanation https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547022#questions
// look at memoization solution above to see how it makes this faster
function fib(n) {
    if (n < 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

fib = memoize(fib)

// // instructor iterative solution
// function fib(n) {
//     const result = [0,1]
//     for (let i = 2; i <= n; i++) {
//         const a = result[i-1]
//         const b = result[i-2]
//         result.push(a+b)
//     }
//     return result[n]
// }

// // my own solution
// function fib(n) {
//     if (n === 1 || n === 2) {
//         return 1
//     } else {
//     let prevIndex1 = 0;
//     let prevIndex2 = 1;
//     let result = [0,1]
//     for (let i = 0; i <= n; i++) {
//         let newNumber = result[prevIndex1] + result[prevIndex2]
//         result.push(newNumber)
//         prevIndex1++
//         prevIndex2++
//     }
//     return result[n]
//   }
// }

module.exports = fib;
