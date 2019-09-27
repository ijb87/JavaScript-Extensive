// jshint esversion: 6
// jshint asi: true
function Accumulator (startingValue) {
  this.value = startingValue
  this.read = function () {
    const newValue = +window.prompt('Please enter a number.')
    this.value += newValue
  }
}

const accumulator = new Accumulator(1)
accumulator.read()

window.alert(accumulator.value())
