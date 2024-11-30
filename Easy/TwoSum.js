// ------------------------TWO SUM--------------------------------

// the general gist of a two sum is that you have a list or an array of numbers
// and a target sum to hit. You're looking to return the indexes of the two numbers
// that when added together hit the target sum. There should only be one solution
// to the problem from the list of numbers and a number can not be used twice.

//first Solution -----------bad

const TwoSum = (array, goal) => {
  let indexes = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === goal) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes;
};

// It works but if you check it out you'll notice it's running a loop inside of a loop to
// figure out which two numbers add up to the goal. That puts us at a time complexity
// of O(n^2). Pretty slow. Not a big deal for a small array like ours but it's far from optimized
// and I could say without a shadow of a doubt that if you're doing this type of problem they
// will be looking for you to improve the time complexity.

//optimized solution ---------Good

const TwoSumOptional = (array, goal) => {
  let mapOfNumbers = {};

  let twoIndexes = [];

  for (let i = 0; i < array.length; i++) {
    mapOfNumbers[array[i]] = i;
  }

  for (let i = 0; i < array.length; i++) {
    let target = goal - arr[i];
    if (mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
      twoIndexes.push(i);
      twoIndexes.push(mapOfNumbers[target]);
    }
  }
  return twoIndexes;
};

//So while this one has two loops they're not nested so the time complexity lands at O(n) power. Much better.
