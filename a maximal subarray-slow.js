// jshint esversion: 6
// jshint asi: true
function getMaxSubSum (arr) {
  let maxSum = 0 // if we take no elements, zero will be returned

  for (var i = 0; i < arr.length; i++) {
    let sumFixedStart = 0
    for (var j = i; j < arr.length; j++) {
      sumFixedStart += arr[j]
      maxSum = Math.max(maxSum, sumFixedStart)
    }
  }

  return maxSum
}

window.alert(getMaxSubSum([-1, 2, 3, -9])) // 5
window.alert(getMaxSubSum([-1, 2, 3, -9, 11])) // 11
window.alert(getMaxSubSum([-2, -1, 1, 2])) // 3
window.alert(getMaxSubSum([1, 2, 3])) // 6
window.alert(getMaxSubSum([100, -9, 2, -3, 5])) // 100
