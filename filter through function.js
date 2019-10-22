// jshint esversion: 6
// jshint asi: true

function inBetween (a, b) {
  return function (x) {
    return x >= a && x <= b
  }
}
const arr1 = [1, 2, 3, 4, 5, 6, 7]
window.alert(arr1.filter(inBetween(3, 5))) // 3, 4, 5, 6

function inArray (arr) {
  return function (x) {
    return arr.includes(x)
  }
}
const arr = [1, 2, 3, 4, 5, 6, 7]
window.alert(arr.filter(inArray([1, 2, 10])))
