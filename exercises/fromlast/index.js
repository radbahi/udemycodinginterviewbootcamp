// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) { // watched video. using fast and slow yet again but i modified it to fit this solution
    let slow = list.getFirst(); // using same method as midpoint to get these two nodes
    let fast = list.getFirst();
    for (let i = 0; i < n; i++) { // must initially call fast by n amount of times to establish how many spaces we want
        fast = fast.next
    }

    // while (n > 0) { // video used this loop for n
    //     fast = fast.next
    //     n--
    // }
  
    while (fast.next) { // as long as there is a next, keep moving up by just one
      slow = slow.next;
      fast = fast.next
    }
    return slow; // return slow node once fast has no next
}

module.exports = fromLast;
