// jshint esversion: 6
// jshint asi: true
let value = 0

function readNumber () {
  do {
    value = window.prompt('Enter a numeric value.')
  } while (!isFinite(value))
  if (isFinite(value)) {
    return value
  }
  return null
}

readNumber()
