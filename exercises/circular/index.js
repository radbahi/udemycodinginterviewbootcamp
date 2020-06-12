// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) { // watched video solution but modified code myself
  let slow = list.getFirst(); // using same method as midpoint to get these two nodes
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) { // if at any point these two equal each other, break the loop by returning true
      return true;
    }
  }
  return false; // if they're not equal at any point, return false
}

module.exports = circular;
