// jshint esversion: 6
// jshint asi: true
const calculator = {
  sum () {
    return this.value1 + this.value2
  },
  mul () {
    return this.value1 * this.value2
  },
  read () {
    this.value1 = +window.prompt('Enter a value.', 0)
    this.value2 = +window.prompt('Enter another value.', 0)
  }
}
calculator.read()
document.alert(calculator.sum())
document.alert(calculator.mul())
