// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

function delay(f, ms) {
  
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  }:
  
}

let f1000 = delay(alert, 1000);

f1000("test"); // shows "test" after 1000ms
