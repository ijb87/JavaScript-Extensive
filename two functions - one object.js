// jshint esversion: 6
// jshint asi: true
const obj = {}

function A () {
  return obj
}

function B () {
  return obj
}

window.alert(new A() === new B())
