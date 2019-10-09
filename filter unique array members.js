// generates a unique array every time, may generate an empty array

function unique(arr) {
  arr.sort(() => Math.random() - 0.5);
  let arrayEnd = Math.random() * Math.floor(arr.length + 1)
  return arr.slice(0, arrayEnd)
}

let arr = [1, 2, 3];
unique(arr);
alert(newArray)
