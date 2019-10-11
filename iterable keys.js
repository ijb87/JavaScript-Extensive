let map = new Map();

map.set("name", "John");

let arr = Array.from(map); // we convert the map to an array

arr.push("more");

alert(arr)