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
    let current = this.head;
    console.log('current = ', current.data);
    let length = 0;
    let middle;

    while (current !== null) {
      length += 1;

      current = current.next;
    }

    console.log('Length = ', length);

    if (length % 2 !== 0) {
      middle = Math.floor(length / 2) + (length % 2);
      console.log('Middle = ', middle);
    } else {
      middle = length / 2 + 1;
      console.log('Middle = ', middle);
    }

    let anotherCurrent = this.head;
    let counter = 1;
    while (anotherCurrent != null) {
      if (counter === middle) {
        return anotherCurrent;
      }
      counter += 1;
      anotherCurrent = anotherCurrent.next;
    }
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
