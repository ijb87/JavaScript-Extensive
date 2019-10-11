function sumSalaries(salaries) {
  let balance = 1000; // current balance
  for (let salary of Object.values(salaries)) {
    balance -= salary; // subtracts all the salaries from the balance
  }  
  return balance;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries(salaries));  