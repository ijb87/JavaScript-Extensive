// jshint esversion: 6
// jshint asi: true
function getMaxSubSum (arr) {
  let maxSum = 0
  let partialSum = 0

  for (const item of arr) { // for each item of arr
    partialSum += item // add it to partialSum
    maxSum = Math.max(maxSum, partialSum) // remember the maximum
    if (partialSum < 0) partialSum = 0 // zero if negative
  }

  return maxSum
}

window.alert(getMaxSubSum([-1, 2, 3, -9])) // 5
window.alert(getMaxSubSum([-1, 2, 3, -9, 11])) // 11
window.alert(getMaxSubSum([-2, -1, 1, 2])) // 3
window.alert(getMaxSubSum([100, -9, 2, -3, 5])) // 100
window.alert(getMaxSubSum([1, 2, 3])) // 6
window.alert(getMaxSubSum([-1, -2, -3])) // 0
