// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

function validAnagram(inputOne, inputTwo) {
  if (inputOne === undefined || inputOne === null) {
    return false;
  };
     
  if (inputTwo === undefined || inputTwo === null) {
    return false;
  }

  if (inputOne.length !== inputTwo.length) {
    return false;
  };

  const object = {};
  for (let i = 0; i < inputOne.length; i++) {
    object[inputOne[i]] === undefined ? object[inputOne[i]] = 1 : object[inputOne[i]] += 1;
  }

  for (let i = 0; i < inputTwo.length; i++) {
    if(object.hasOwnProperty(inputTwo[i]) && object[inputTwo[i]] > 0) {
      object[inputTwo[i]] -= 1;
    } else {
      return false;
    }
  }

  return Object.values(object).every(value => value === 0);
}

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram(null, "car"));
console.log(validAnagram("cara", "car"));
