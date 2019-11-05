// The result of debounce (f, ms) decorator should be a wrapper that passes the call to f at maximum once per ms milliseconds.

function debounce (f, ms) {
  let isCooldown = false

  return function () {
    if (isCooldown) return

    f.apply(this, arguments)

    isCooldown = true

    setTimeout(() => isCooldown = false, ms)
  }
}

const f = debounce(window.alert, 1000)

f(1)
f(2)

setTimeout(() => f(3), 100)
setTimeout(() => f(4), 1100)
setTimeout(() => f(5), 1500)
