// jshint esversion: 6
// jshint asi: true

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0
for (const key in salaries) {
  sum += salaries[key]
}
window.alert(sum) // sum is 390

// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
function multiplyNumeric (obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2
    }
  }
}
multiplyNumeric()
