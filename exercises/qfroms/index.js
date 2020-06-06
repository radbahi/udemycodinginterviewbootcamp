// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() { // watch https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547072#questions
    this.frontStack = new Stack(); // for diagram
    this.backStack = new Stack();
  }

  add(record) {
    this.frontStack.push(record);
  }

  remove() {
    while (this.frontStack.peek()) {
      this.backStack.push(this.frontStack.pop());
    }
    const record = this.backStack.pop();
    while (this.backStack.peek()) {
      this.frontStack.push(this.backStack.pop());
    }
    return record;
  }

  peek() {
    while (this.frontStack.peek()) {
      this.backStack.push(this.frontStack.pop());
    }
    const record = this.backStack.peek();
    while (this.backStack.peek()) {
      this.frontStack.push(this.backStack.pop());
    }
    return record;
  }
}

module.exports = Queue;
