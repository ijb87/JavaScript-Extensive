function makeCounter () {
  let count = 0

  function counter () {
    return count++
  }

  counter.set = value => count = value

  counter.decrease = () => count--

  return counter
}

const counter = makeCounter()
window.alert(counter.set(12))
counter.decrease()
window.alert(counter())

// counter.set(value) should set the counter to value.
