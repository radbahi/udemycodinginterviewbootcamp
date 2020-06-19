// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) { // min and max added to arguments to keep check of node values. this will be a recursive solution.
    if (max !== null && node.data > max) { // node.data being greater than max renders the tree invalid...
        return false // so return false
    }

    if (min !== null && node.data < min) { // node.data being less than min renders the tree invalid...
        return false // so return false
    }

    if (node.left && !validate(node.left, min, node.data)) { // if calling validate with those arguments comes back as false, return false
        return false // look at 6:55 for explanation of these here https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547264#content
    }

    if (node.right && !validate(node.right, node.data, max)) { // if calling validate with those arguments comes back as false, return false
        return false // look at 6:55 for explanation of these here https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547264#content
    }

    return true

}

module.exports = validate;
