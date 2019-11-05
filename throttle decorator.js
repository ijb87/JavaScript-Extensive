function throttle (func, ms) {
  let isThrottled = false
  let savedArgs
  let savedThis

  function wrapper () {
    if (isThrottled) { // (2)
      savedArgs = arguments
      savedThis = this
      return
    }

    func.apply(this, arguments) // (1)
    isThrottled = true

    setTimeout(function () {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }

  return wrapper
}

function f (a) {
  console.log(a)
}

// f1000 passes calls to f at maximum once per 1000 ms
const f1000 = throttle(f, 1000)

f1000(1)
f1000(2)
f1000(3)
