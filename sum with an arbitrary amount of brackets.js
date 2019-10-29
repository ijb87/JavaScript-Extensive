function sum(a) {
  let currentSum = a
  
  function add(b) { // function in a function that adds to sum
    currentSum += b
    return f
  }
  
  add.toString = function() {
    return currentSum
  };
  
  return add; // if there's more parameters, it will put it into the original otherwise it goes to toString function
}

sum(1)(2)
