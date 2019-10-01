// jshint asi: true
function truncate (str, maxlength) {
  return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str
  // copy and paste unicode character
}
truncate('test', 3)
