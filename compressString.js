function compressString(input) {
  const arr = input.split("");

  let result = "";
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i + 1]) {
      if(count <= 2) {
        result += (arr[i].repeat(count));
      } else {
        result += (arr[i] + count);
      }
      
      count = 1;
    } else {
      count += 1;
    }
  }

  return result;
}

console.log(compressString("wccaaazzbbbcck"));