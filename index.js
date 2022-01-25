function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++){
      if((array[i] + array[j]) === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n**2)
*/

/* 
  if the sum of any two of the numbers in the array add up to the target return true
  iterate through the array from both sides, adding those two numbers up every time
  and if any of those sums equals the target send a return of true otherwise false 
*/

/*
  the solution has two for loops that are both iterating over the array
  through each iteration they are being added together
  if one of the sums matches the target it returns true
  if none of the sums match it returns false
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 4, 6, 8, 1], 5));
}

module.exports = hasTargetSum;
