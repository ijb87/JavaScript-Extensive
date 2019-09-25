// these objects do the same
// jshint esversion: 6
// jshint asi: true
const user = {
  sayHi: function () {
    window.alert('Hello')
  }
}
user()
// method shorthand lokos better, right?
const user1 = {
  sayHi () { // same as "sayHi: function()"
    window.alert('Hello')
  }
}
user1()
