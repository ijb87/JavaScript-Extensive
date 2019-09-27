// jshint esversion: 6
// jshint asi: true
function random (min, max) {
  return (min + (max - min) * Math.random())
}
random(1, 5)
