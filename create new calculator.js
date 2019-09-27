// jshint esversion: 6
// jshint asi: true
function Calculator () {
  this.read = function () {
    this.value1 = +window.prompt('first value', 0)
    this.value2 = +window.prompt('second value', 0)
  }
  this.sum = function () {
    return this.value1 + this.value2
  }
  this.mul = function () {
    return this.value1 * this.value2
  }
}

const calculator = new Calculator()
calculator.read()

window.alert('Sum=' + calculator.sum())
window.alert('Mul=' + calculator.mul())
