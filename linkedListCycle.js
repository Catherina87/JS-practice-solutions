function hasCycle(head) {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (true) {
    slow = slow.next; // 1 hop

    if (fast.next !== null) {
      fast = fast.net.next; // 2 hops
    } else {
      return false; // no loop/cycle
    }

    if (slow === null || fast === null) {
      return false; // no loop/cycle
    }

    if (slow === fast) {
      return true; // there is a loop/cycle
    }
  }
}