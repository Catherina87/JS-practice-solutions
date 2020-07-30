// input: J = 'aA, S = 'aAAbbbb'
// output: 3

// input: J = 'z', S = 'ZZ'
// output: 0

function jewelsCount(jewels, stones) {
  let jewelsSet = new Set();

  for(let i = 0; i < jewels.length; i++) {
    jewelsSet.add(jewels[i]);
  }

  const myJewels = {};

  for(let i = 0; i < stones.length; i++) {
    if (jewelsSet.has(stones[i])) {
      myJewels[stones[i]] === undefined ? myJewels[stones[i]] = 1 : myJewels[stones[i]] += 1;
    }
  }

  return Object.values(myJewels).reduce((currentTotal, number) => {
    return currentTotal + number
  }, 0);
}

console.log(jewelsCount('aA', 'aAAbbbb'));
console.log(jewelsCount('z', 'ZZ'));