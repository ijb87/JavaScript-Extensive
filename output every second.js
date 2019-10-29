// Write a function printNumbers(from, to) that outputs a number every second, starting from "from" and ending with "to".

// using setInterval:

function printNumbers (from, to) {
  let current = from

  const timerId = setInterval(function () {
    window.alert(current)
    if (current === to) {
      clearInterval(timerId)
    }
    current++
  }, 1000)
}

// usage:
printNumbers(5, 10)

// using nested setTimeout:

function outputNumbers (from, to) {
  let current = from

  setTimeout(function go () {
    window.alert(current)
    if (current < to) {
      setTimeout(go, 1000) // we don't need to clear the interval
    }
    current++ // otherwise keep incrementing current, outputting and comparing it
  }, 1000)
}

// usage:
outputNumbers(5, 10)
