// Implementing Node class:
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Implementing a LinkedList class:
// If the head node is not passed, the head is initialized to null
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Add first:
  addFirst(value) {
    if (this.head === null) {
      let newNode = new Node(value);
      this.head = newNode;
    } else {
      let newNode = new Node(value, this.head);
      this.head = newNode;
    }
  }

  search(value) {
    if (this.head === null) {
      return false;
    }

    let current = this.head;
    while (current != null) {
      if (current.data === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  mergeTwoSortedLists(l1, l2) {
    let mergedListHead = null;

    if (l1 === null) {
      return l2;
    }

    if (l2 === null) {
      return l1;
    }

    if (l1.val < l2.val) {
      mergedListHead = l1;
      l1 = mergedListHead.next;
    } else {
      mergedListHead = l2;
      l2 = mergedListHead.next;
    }

    let mergedListTail = mergedListHead;

    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        mergedListTail.next = l1;
        mergedListTail = l1;
        l1 = mergedListTail.next;
      } else {
        mergedListTail.next = l2;
        mergedListTail = l2;
        l2 = mergedListTail.next;
      }
    }

    if (l1 === null) {
      mergedListTail.next = l2;
    }

    if (l2 === null) {
      mergedListTail.next = l1;
    }

    return mergedListHead;
  }
}
