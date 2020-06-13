// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data // we do a !== because we want filter to return the things that do NOT equal data. we're removing that. hence the name of the method.
        })
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    traverseBF(fn) {
        const arr = [this.root] // create array with the root value
        while (arr.length) { // while there are elements in the array...
            const node = arr.shift() // takes out the first element in the array
            arr.push(...node.children) // pushes the children of that element to the end of the array. uses spread operator because node.children is an array. we don't want to push the whole array, just the elements INSIDE the node.children array
            fn(node) // look at instructions. this is called as a function because traverseBF is meant to apply things to each node, like add 10. look at this video 0:35 for example. https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547228#content
        }
    }

    traverseDF(fn) {
        const arr = [this.root] // create array with the root value
        while (arr.length) { // while there are elements in the array...
            const node = arr.shift() // takes out the first element in the array
            arr.unshift(...node.children) // literally the same thing. we just push to front of array because we want the nested children first.
            fn(node) // look at instructions. this is called as a function because traverseBF is meant to apply things to each node, like add 10. look at this video 0:35 for example. https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547228#content
        }
    }
}

module.exports = { Tree, Node };
