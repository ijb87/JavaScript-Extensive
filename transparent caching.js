function slow (x) {
  // there can be a heavy CPU-intensive job here
  window.alert(`Called with ${x}`)
  return x
}

function cachingDecorator (func) {
  const cache = new Map()

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x)
    }

    const result = func(x)

    cache.set(x, result)
    return result
  }
}

slow = cachingDecorator(slow) // cachingDecorator is a decorator
// this is a special function that takes another function and alters its behavior

window.alert(slow(1)) // slow(1) is cached
window.alert('Again: ' + slow(1)) // the same

window.alert(slow(2)) // slow(2) is cached
window.alert('Again: ' + slow(2))
