function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let jack = { name: "Jack", age: 26 };

let arr = [john, pete, mary, jack];

alert(getAverageAge(arr));
