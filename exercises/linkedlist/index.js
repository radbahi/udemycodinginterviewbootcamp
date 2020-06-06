// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
        // my solution
        // let newNode = new Node(data, this.head)
        // this.head = newNode
    }

    size() { // i honestly almost had this one
        let counter = 0
        let node = this.head
        while (node) {
            counter++
            node = node.next // didn't think you could assign the entire node object to a new variable like this but u can
        }
        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if (!this.head) {
            return null
        }
        let node = this.head
        while (node.next) {
            node = node.next
        }
        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (this.head.next) {
        this.head = this.head.next
        } else {
            this.head = null
        }
    }

    removeLast() {
        if (!this.head || !this.head.next) {
            this.head = null
            return
        }
        let previous = this.head
        let node = this.head.next
        while (node.next) {
         previous = node
         node = node.next
        }
        previous.next =  null
    }

    insertLast(data) {
        if (!this.head) {
            this.insertFirst(data)
        } else {
            let lastNode = this.getLast()
            lastNode.next = new Node(data)
        }
    }

    getAt(index) {
        let counter = 0
        let node = this.head
        while (node) {
            if (counter === index) {
                return node
            }
            counter++
            node = node.next
        }
        return null

        // // my solution
        // let requestedNode = this.head
        // for (let counter = 0; counter < index; counter++) {
        //     if (!requestedNode || !requestedNode.next) {
        //         return requestedNode
        //     } else {
        //     requestedNode = requestedNode.next
        //     }
        // }
        // return requestedNode
    }

    removeAt(index) {
        if (!this.head) { // for edge case with no elements in linked list
            return
        }

        if (index === 0) { // obviously there is no previous index to 0
            this.head = this.head.next // double whammy. replaces this.head with next. if next is null, that's fine because user wanted to remove at head anyway
        }

        let previous = this.getAt(index - 1) // get the previous node of the one we want to get rid of
        if (!previous || !previous.next) { // obviously if none of these exist we just return
            return
        }
        previous.next = previous.next.next // replace previous node with current node's next, effectively removing reference to current node

        // // yeah i got lazy and couldn't finish this
        // if (index = 0) {
        //     this.head = null
        //     return
        // }
        // let previous = this.head
        // let current = this.head.next
        // let counter = 0
        // while (previous) {
        //     if (counter === index) {
        //         previous.next = current.next
        //         return
        //     }
        //     counter++
        //     previous = current
        //     current = current.next
        // }
    }

    insertAt(data, index) {



        // my solution
        if (!this.head) {
            this.head = new Node(data)
            return
        }

        if (index > this.size()) {
            let lastNode = new Node(data)
            let temp = this.getAt(this.size() - 1)
            temp.next = lastNode
        }

        if (index === 0) {
            let temp = this.head
            this.head = new Node(data)
            this.head.next = temp
            return
        }

        let tempNext = this.getAt(index)
        let tempPrevious = this.getAt(index - 1)
        if (!tempPrevious) {
            return
        }
        let newNode = new Node(data)
        tempPrevious.next = newNode
        newNode.next = tempNext
    }

    forEach(func) { // this video is missing. copied code from another video. need to look at it later.
        let node = this.head
        let counter = 0
        while (node) {
            func(node, counter)
            node = node.next
            counter++
        }
    }
    
}

module.exports = { Node, LinkedList };
