// generates a unique array every time, may generate an empty array

function unique(array) {
  return Array.from(new Set(array));
}

let arr = [1, 2, 3];
alert(unique(array));

