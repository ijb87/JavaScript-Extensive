// jshint esversion: 6
// jshint asi: true
function copySorted (arr) {
  const arr1 = arr.slice(0, arr.length)
  return arr1.sort()
}
copySorted(['HTML', 'JavaScript', 'CSS'])
// could've just used arr.slice().sort()
