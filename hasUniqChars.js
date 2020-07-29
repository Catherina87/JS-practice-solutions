// Implement an algorithm to determine if a string has all unique characters.

function hasUniqChars(input) {
  const object = {};

  for(let i = 0; i < input.length; i++) {
    if(object[input[i]] === undefined) {
      object[input[i]] = 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(hasUniqChars("abc"));
console.log(hasUniqChars("abcc"));


function uniqChars(input) {
  const object = {};
  const arr = input.split('');

  arr.forEach(char => {
    object[char] === undefined ? object[char] = 1 : object[char] += 1;
  })

  const values = Object.values(object);
  return values.every(value => value === 1);
}

console.log(uniqChars('abc'));
console.log(uniqChars('aabc'));