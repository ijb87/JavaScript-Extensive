// jshint esversion: 6
// jshint asi: true

const user = {
  name: 'John Smith',
  age: 35
}

const user2 = JSON.parse(JSON.stringify(user))
window.alert(user2)
// Turn the user into JSON and then read it back into another variable.
