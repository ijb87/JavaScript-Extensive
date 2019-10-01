// jshint asi: true
function extractCurrencyValue (str) {
  return +str.slice(1)
}
extractCurrencyValue('test')
