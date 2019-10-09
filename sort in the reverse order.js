function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
// we can also use arr.sort((a,b) => a - b); for neater sorting
let arr = [1, 2, 15]
arr.sort(compareNumeric)
arr.reverse()