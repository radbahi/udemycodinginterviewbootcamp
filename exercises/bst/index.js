// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
    insert(data) { // instructor solution
        if (data < this.data && this.left) { // if data keeps being less than this.data and this.left...
            this.left.insert(data) // repeatedly call the method until it's no longer less than this.left, essentially working its way down the tree
        } else if (data < this.data) { // once this.left points to null and fails the check above... 
            this.left = new Node(data) // ... a new Node will be created in that place
        } else if (data > this.data && this.right) { // if data keeps being greater than this.data and this.right...
            this.right.insert(data) // repeatedly call the method until it's no longer greater than this.right, essentially working its way down the tree
        } else if (data > this.data) { // once this.right points to null and fails the check above... 
            this.right = new Node(data) // ... a new Node will be created in that place
        }
    }

    contains(data) { // instructor solution
        if (this.data === data) { // return if it finally matches
            return this
        }

        if (this.data < data && this.right) { // keep working down tree to do more comparisons. remember right should be greater than.
            return this.right.contains(data) 
        } else if (this.data > data && this.left) {// keep working down tree to do more comparisons. remember left should be less than.
            return this.left.contains(data)
        }
        return null // if no comparison can be made, return null
    }

    // contains(data) { // my failed solution
    //     const comparisonNode = this.data
    //     if (data === comparisonNode) {
    //         return comparisonNode
    //     } else if (data < comparisonNode) {
    //         this.left.contains(data)
    //     } else if (data > comparisonNode) {
    //         this.right.contains(data)
    //     }
    //     comparisonNode === data ? comparisonNode : null
    // }

}

module.exports = Node;
