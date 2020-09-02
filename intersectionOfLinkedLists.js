function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getIntersectionNode(headOne, headTwo) {
  const set = new Set();

  let currentOne = headOne;
  while (currentOne !== null) {
    set.add(currentOne)
    currentOne = currentOne.next
  }

  let currentTwo = headTwo;
  while (currentTwo !== null) {
    if (set.has(currentTwo)) {
      return currentTwo;
    }
  }

  return null;
}


