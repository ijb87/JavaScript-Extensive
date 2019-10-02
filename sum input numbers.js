// jshint esversion: 6
// jshint asi: true

function sumInput () {
  const numbers = []
  while (true) {
    const value = window.prompt('A number please?', 0)

    // should we cancel?
    if (value === '' || value === null || !isFinite(value)) {
      break
    }

    numbers.push(+value)
  }

  let sum = 0
  for (var number of numbers) {
    sum += number
  }
  return sum
}

sumInput()
