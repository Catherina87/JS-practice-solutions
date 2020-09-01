function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function isPalindrome(head) {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow = reverse(slow);
  fast = head;

  while (slow !== null && fast !== null) {
    if (slow.val !== fast.val) {
      return false;
    }

    slow = slow.next;
    fast = fast.next;
  }

  return true;
}

function reverse(head) {
  let prev = null;
  let current = head;
  let nextNodeLocation;

  while (current != null) {
    nextNodeLocation = current.next;
    current.next = prev;
    prev = current;
    current = nextNodeLocation;
  }

  head = prev;
  return head;
}