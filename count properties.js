let user = {
  name: 'John',
  age: 30
};

// write a function count(obj) that returns the number of properties in the object

function count(obj) {
  return Object.keys(obj).length;
}