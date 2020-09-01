class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addFirst(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let newNode = new Node(value, this.head);
      this.head = newNode;
    }
  }

  middleOfLinkedList() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
}

const my_list = new LinkedList();

my_list.addFirst(2);
my_list.addFirst(4);
my_list.addFirst(6);
my_list.addFirst(8);
my_list.addFirst(10);

console.log(my_list.head.data);
console.log(my_list);
console.log(my_list.middleOfLinkedList());
let middleNode = my_list.middleOfLinkedList();
console.log(middleNode.data);