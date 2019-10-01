// jshint asi: true
function checkSpam (str) {
  if (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')) {
    return true
  }
  return false
}
checkSpam('buy ViAgRA now')
