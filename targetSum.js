// Given a list of numbers and a target value, return the 2 numbers in the list that when added together
// would provide the target as their sum. 
// Ex: Input1= [1, 2, 3, 3, 7] & target = 8, Output: [1, 7]
// only looking for 1 pair, but bonus extension: find all the pairs that add up to target sum

function targetSum(array, target) {
  // create empty set to store complements
  let nums = new Set()

  for (let i = 0; i < array.length; i++) {
    // we're looking for target - array[i]
    if (nums.has(target - array[i])){
      return [target - array[i], array[i]]
    } else {
      nums.add(array[i])
    }
  }

  // no pairs 
  return -1
}

console.log(targetSum([1, 2, 3, 3, 7], 8));


// using Object instead of Set
function targetSum(array, target) {
  const object = {};

  for (let i = 0; i < array.length; i++) {
    let complement = (target - array[i]).toString();
    if (object.hasOwnProperty(complement)) {
      return [target - array[i], array[i]];
    } else {
      let currentNum = array[i].toString();
      object[currentNum] = 1
    }
  }

  return -1;
}

console.log(targetSum([1, 2, 3, 3, 9], 8));


// bonus example: input = [2, 8, 3, 5, 6, 5], 10
// output: [[2, 8], [5, 5]]

function targetSum(array, target) {
  let pairs = [];
  const object = {};

  for (let i = 0; i < array.length; i++) {
    let complement = (target - array[i]).toString();
    // check if we have complement in object and at least one copy of it
    if (object.hasOwnProperty(complement) && object[complement] > 0) {
      pairs.push([target - array[i], array[i]]);
      // update value because we used one copy
      object[complement] -= 1;
    } else { 
      let currentNum = array[i].toString();
      object.hasOwnProperty(currentNum) ? object[currentNum] += 1 : object[currentNum] = 1;
    }
  }

  return pairs;
}

console.log(targetSum([], 10));